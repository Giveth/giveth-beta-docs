(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),o=(n(0),n(98)),a={id:"link-preview",title:"Linke Preview"},s={unversionedId:"link-preview",id:"link-preview",isDocsHomePage:!1,title:"Linke Preview",description:"Problem",source:"@site/docs/doc3-linkPreview.md",slug:"/link-preview",permalink:"/docs/link-preview",editUrl:"https://github.com/giveth/giveth-beta-docs/edit/master/docs/doc3-linkPreview.md",version:"current",sidebar:"docsSidebar",previous:{title:"Contributor Guide",permalink:"/docs/contributors"},next:{title:"Style Guide",permalink:"/docs/styleguide"}},d=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Install and Usage",id:"install-and-usage",children:[]},{value:"Nginx Configuration",id:"nginx-configuration",children:[]}],l={rightToc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"problem"},"Problem"),Object(o.b)("p",null,"When we share any link of giveth to the social networks (like facebook, whatsapp, discord, ...) a preview of the page is shown there. In order to do that, a related bot sends a request to the website, fetches the response and shows some metadata (i.e. title, description and image) to the user."),Object(o.b)("p",null,"In Giveth, we used single page application (SPA) architecture, so when the bot sends a request to the website, the web server returns a single page (i.e. an html file including javascript and css files) and the content of the page will be loaded later using ajax requests, so the content of the page and its metadata is not ready and the bot cannot show it to the user."),Object(o.b)("h2",{id:"solution"},"Solution"),Object(o.b)("p",null,"First we tried to use prerender.io service, but it didn't make success, because it has been taken too long to load the page and the prerender service was timed out."),Object(o.b)("p",null,"The final solution was writing a separated service to handle the request and detect if it is a social media bot or not. If it is a bot, the service returns the response with an empty body and correct metadata (i.e. title, description and image) and sends it as the response. If it is not a bot, the service plays a proxy role and proxy it to the netlify server. The ",Object(o.b)("strong",{parentName:"p"},"detection")," process is done in ",Object(o.b)("strong",{parentName:"p"},"nginx"),"."),Object(o.b)("h2",{id:"install-and-usage"},"Install and Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"npm install\nnpm start\n")),Object(o.b)("p",null,"This command runs the server on the default port (3000)."),Object(o.b)("h2",{id:"nginx-configuration"},"Nginx Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-nginx"}),'server {\n    listen 80;\n    listen [::]:80;\n    server_name preview.giveth.io develop.giveth.io;\n    location / {\n        set $prerender 0;\n        if ($http_user_agent ~* "twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\\/0\\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|redditbot|Discordbot") {\n            set $prerender 1;\n        }\n        if ($args ~ "_escaped_fragment_") {\n            set $prerender 1;\n        }\n        if ($http_user_agent ~ "Prerender") {\n            set $prerender 0;\n        }\n        if ($uri ~* "\\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)") {\n            set $prerender 0;\n        }\n        if ($prerender = 1) {\n            proxy_pass http://127.0.0.1:3000;\n        }\n        if ($prerender = 0) {\n            proxy_pass https://giveth-dapp.netlify.app;\n        }\n    }\n}\n\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE:")," Be aware that we didn't include ",Object(o.b)("em",{parentName:"p"},"googlebot")," and other search engine bots in the list of bots. If you add these to the list, the site's SEO will face some problems.")))}p.isMDXComponent=!0}}]);