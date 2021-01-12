---
id: link-preview
title: Linke Preview
---
## Problem
When we share any link of giveth to the social networks (like facebook, whatsapp, discord, ...) a preview of the page is shown there. In order to do that, a related bot sends a request to the website, fetches the response and shows some metadata (i.e. title, description and image) to the user.

In Giveth, we used single page application (SPA) architecture, so when the bot sends a request to the website, the web server returns a single page (i.e. an html file including javascript and css files) and the content of the page will be loaded later using ajax requests, so the content of the page and its metadata is not ready and the bot cannot show it to the user.

## Solution
First we tried to use prerender.io service, but it didn't make success, because it has been taken too long to load the page and the prerender service was timed out.

The final solution was writing a separated service to handle the request and detect if it is a social media bot or not. If it is a bot, the service returns the response with an empty body and correct metadata (i.e. title, description and image) and sends it as the response. If it is not a bot, the service plays a proxy role and proxy it to the netlify server. The **detection** process is done in **nginx**.


## Install and Usage
### Preview Server
    git clone https://github.com/Giveth/giveth-1-preview
    cd giveth-1-preview
    
    ... Create and fill config.js in format similar to ./config.sample.js
    
    npm install
    npm start


### Nginx Configuration
Below configuration of nginx serve http requests to port 80. In order to response https necessary ssl configuration should be added. 

```nginx
server {
	listen 80;
	listen [::]:80;
	server_name preview.giveth.io develop.giveth.io;
    location / {
        set $prerender 0;
        if ($http_user_agent ~* "twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|redditbot|Discordbot") {
            set $prerender 1;
        }
        if ($args ~ "_escaped_fragment_") {
            set $prerender 1;
        }
        if ($http_user_agent ~ "Prerender") {
            set $prerender 0;
        }
        if ($uri ~* "\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)") {
            set $prerender 0;
        }
        if ($prerender = 1) {
            proxy_pass http://127.0.0.1:3000; // port can be different based on giveth-1-preview config.js content
        }
        if ($prerender = 0) {
            proxy_pass https://giveth-dapp.netlify.app; // It's where develop.giveth.io is hosted on netlify 
        }
    }
}

```
> **NOTE:** Be aware that we didn't include *googlebot* and other search engine bots in the list of bots. If you add these to the list, the site's SEO will face some problems.
