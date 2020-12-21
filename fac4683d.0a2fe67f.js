(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(3),n=a(7),r=(a(0),a(100)),s={id:"run-giveth2-backend",title:"Run backend for Giveth2"},o={unversionedId:"run-giveth2-backend",id:"run-giveth2-backend",isDocsHomePage:!1,title:"Run backend for Giveth2",description:"In order to develop locally you need to clone the backend server as well. We are using https://github.com/topiahq/impact-graph for this. Under the hood it is running Apollo.",source:"@site/docs/doc0b-installation-giveth2-backend.md",slug:"/run-giveth2-backend",permalink:"/docs/run-giveth2-backend",editUrl:"https://github.com/giveth/giveth-beta-docs/edit/master/docs/doc0b-installation-giveth2-backend.md",version:"current",sidebar:"docsSidebar",previous:{title:"Run Giveth2",permalink:"/docs/run-giveth2"},next:{title:"Contributor Guide",permalink:"/docs/contributors"}},c=[{value:"Impact graph for Giveth2",id:"impact-graph-for-giveth2",children:[{value:"Install Prerequisites",id:"install-prerequisites",children:[]},{value:"Install impact-graph from GitHub",id:"install-impact-graph-from-github",children:[]},{value:"Create a database and user in postgres using psql",id:"create-a-database-and-user-in-postgres-using-psql",children:[]},{value:"Get environment variables",id:"get-environment-variables",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In order to develop locally you need to clone the backend server as well. We are using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/topiahq/impact-graph"}),"https://github.com/topiahq/impact-graph")," for this. Under the hood it is running Apollo."),Object(r.b)("p",null,"Please follow the readme of ",Object(r.b)("inlineCode",{parentName:"p"},"impact-graph")," to install it. "),Object(r.b)("p",null,"Here are more detailed instructions specific to giveth2:"),Object(r.b)("h2",{id:"impact-graph-for-giveth2"},"Impact graph for Giveth2"),Object(r.b)("p",null,"These instructions were executed on Ubuntu 18.04 but should stay the same regardless of operating system (ymmv)."),Object(r.b)("h3",{id:"install-prerequisites"},"Install Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"install ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.io/topics/quickstart"}),"Redis")),Object(r.b)("li",{parentName:"ul"},"install ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.postgresql.org/download"}),"Postgres"))),Object(r.b)("h3",{id:"install-impact-graph-from-github"},"Install impact-graph from GitHub"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:topiahq/impact-graph.git\ncd impact-graph\nnpm i\ncp .env.example .env\n")),Object(r.b)("h3",{id:"create-a-database-and-user-in-postgres-using-psql"},"Create a database and user in postgres using psql"),Object(r.b)("p",null,"i.e. follow this tutorial\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"}),"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"),")"),Object(r.b)("p",null,"to do something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"sudo -u postgres psql\npostgres=# create database mydb;\npostgres=# create user myuser with encrypted password 'mypass';\npostgres=# grant all privileges on database mydb to myuser;\n")),Object(r.b)("h3",{id:"get-environment-variables"},"Get environment variables"),Object(r.b)("p",null,"For more information about a local development environment please ask in the giveth2 dev channel - i.e. in telegram, discord or (",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://riot.im/app/#/room/!zFyfjCfKHawjZJcueK:matrix.org?via=matrix.org)%5BRiot.im%5D"}),"https://riot.im/app/#/room/!zFyfjCfKHawjZJcueK:matrix.org?via=matrix.org)[Riot.im]"),"."))}p.isMDXComponent=!0}}]);