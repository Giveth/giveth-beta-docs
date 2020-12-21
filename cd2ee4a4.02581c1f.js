(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),i=(a(0),a(100)),r=a(101),l={slug:"how-to",title:"How to contribute to documentation",author:"geleeroyale",author_title:"Giveth",author_url:"https://github.com/geleeroyale",author_image_url:"https://avatars1.githubusercontent.com/u/317685?s=460&u=cad937f322db29d6ade49956c8d7d289a583fa9c&v=4",tags:["how-to","documentation"]},c={permalink:"/blog/how-to",editUrl:"https://github.com/giveth/giveth-beta-docs/edit/master/blog/2020-12-07-howtodocs.md",source:"@site/blog/2020-12-07-howtodocs.md",description:"Hello dear contributor!",date:"2020-12-07T00:00:00.000Z",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"documentation",permalink:"/blog/tags/documentation"}],title:"How to contribute to documentation",readingTime:1.465,truncated:!1},u=[{value:"Change something in a page",id:"change-something-in-a-page",children:[]},{value:"Add an image",id:"add-an-image",children:[]},{value:"Make a new page",id:"make-a-new-page",children:[]}],s={rightToc:u};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hello dear contributor!"),Object(i.b)("p",null,"It is very easy to contribute to our new Giveth documentation website. We use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io"}),"docusaurus v2"),", so you can also refer to their documentation, especially for advanced changes."),Object(i.b)("p",null,"However - here are the simple ways to contribute:"),Object(i.b)("h2",{id:"change-something-in-a-page"},"Change something in a page"),Object(i.b)("img",{alt:"Editing a page",src:Object(r.a)("img/content/screenshot-edit-page.png")}),";",Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Click")," on the ",Object(i.b)("em",{parentName:"p"},"Edit page")," link at the bottom of any entry."),Object(i.b)("h2",{id:"add-an-image"},"Add an image"),Object(i.b)("p",null,"If your content needs an image, you should place it in this folder: ",Object(i.b)("inlineCode",{parentName:"p"},"static/img/content")),Object(i.b)("p",null,"For relative links you should also import the ",Object(i.b)("inlineCode",{parentName:"p"},"useBaseUrl")," hook from @docusaurus/useBaseUrl - place it immediately after your ",Object(i.b)("em",{parentName:"p"},"front matter"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import useBaseUrl from '@docusaurus/useBaseUrl'\n")),Object(i.b)("p",null,"Then you can import the image - i.e. the image I used above to demonstrate the look of the edit link:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<img\n  alt=\"Editing a page\"\n  src={useBaseUrl('img/content/screenshot-edit-page.png')}\n/>;\n")),Object(i.b)("h2",{id:"make-a-new-page"},"Make a new page"),Object(i.b)("p",null,"In order for this to work nicely, please fork and clone from our main repository on github and make a pull request after you have made your changes."),Object(i.b)("p",null,"Docusaurus will automatically create new pages from any added markdown (",Object(i.b)("inlineCode",{parentName:"p"},".md"),") files with the correct frontmatter (look at current pages to get an example)."),Object(i.b)("p",null,"So to create a new page, you should create a new markdown document, depending on the type of content."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User guides should be created in the ",Object(i.b)("inlineCode",{parentName:"li"},"guides")," folder"),Object(i.b)("li",{parentName:"ul"},"Developer documentation should be created in the ",Object(i.b)("inlineCode",{parentName:"li"},"docs")," folder"),Object(i.b)("li",{parentName:"ul"},"Updates, content that does not easily fit other categories, as well as longer entries should go into the ",Object(i.b)("inlineCode",{parentName:"li"},"blog")," folder")),Object(i.b)("p",null,"If you want the entry to show up in the respective sidebar you will need to add the title to the existing array:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sidebars.js")," for the docs section"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sidebarsGuides.js")," for the guides section")))}d.isMDXComponent=!0}}]);