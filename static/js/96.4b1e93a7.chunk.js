(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[96],{1050:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",tilesWrapper:"style_tilesWrapper__2RBRd",tiles:"style_tiles__1UTbt"}},1051:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",tile:"style_tile__vHX_G"}},1398:function(e,t,a){"use strict";a.r(t);var i=a(16),n=a(68),c=a(1050),r=a.n(c),s=a(3),l=a(18),o=a(1051),p=a.n(o),u=a(0),d=function(e){var t=e.src,a=e.title,n=e.description,c=e.file,r=e.name;return Object(u.jsxs)("div",{className:p.a.tile,children:[Object(u.jsx)("img",{src:t,alt:"script logo"}),Object(u.jsx)("h2",{children:a}),Object(u.jsx)("span",{children:n}),Object(u.jsx)("h3",{children:"FREE"}),Object(u.jsx)(l.a,{className:"purpleButton",component:Object(s.forwardRef)((function(e,t){return Object(u.jsx)("a",Object(i.a)(Object(i.a)({},e),{},{href:c,ref:t,download:r,target:"_blank"}))})),children:"Download"})]})},b=window.location.origin,m=[{src:"".concat(b,"/images/scripts/wordpress.webp"),description:"Get your faucet running just with few clicks! \n      Our Wordpress plugin makes it super easy to operate your own faucet.",title:"WordPress Plugin",file:"".concat(b,"/files/wp-faucet.zip"),name:"wp-faucet.zip"},{src:"".concat(b,"/images/scripts/faucet.webp"),description:"Do you have experience in operating faucets? This is \n    the perfect script for you! Easy setup and many features.",title:"Faucet Script",file:"".concat(b,"/files/faucet.zip"),name:"faucet.zip"}];t.default=function(){return Object(u.jsx)(n.a,{title:"",titleCompanion:null,metaTitle:"Faucet Scripts",metaName:"description",metaContent:"Find the best and fully featured faucet scripts supported by FaucetPay.",children:Object(u.jsx)("div",{className:r.a.tiles,children:m.map((function(e){return Object(u.jsx)(d,Object(i.a)({},e),e.title)}))})})}},63:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a(3),n=a.n(i),c=a(15),r=a(39),s=a(64),l=a.n(s),o=a(0),p=function(e){var t=e.data,a=e.delimiter,i=void 0===a?"/":a,s=e.className;return Object(o.jsx)("div",{className:Object(c.a)(l.a.breadCrumbsWrapper,s),children:t.map((function(e,a){var s=a+1===t.length;return Object(o.jsxs)(n.a.Fragment,{children:[Object(o.jsx)(r.b,{to:{pathname:e.path},className:Object(c.a)(l.a.name,s&&l.a.name_active),children:e.name}),!s&&Object(o.jsx)("div",{className:l.a.name,children:i})]},e.name)}))})}},64:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",breadCrumbsWrapper:"style_breadCrumbsWrapper__Yd1D_",name:"style_name__3oD0Y",name_active:"style_name_active__fb4UQ"}},68:function(e,t,a){"use strict";a.d(t,"b",(function(){return O})),a.d(t,"a",(function(){return _}));var i=a(19),n=a(16),c=a(17),r=a(34),s=a(82),l=a(15),o=a(3),p=a(23),u=a(63),d=a(31),b=a(22),m=a(70),j=a.n(m),h=a(0),x=Object(o.lazy)((function(){return Object(d.a)(Promise.all([a.e(7),a.e(122)]).then(a.bind(null,305)))})),f=Object(o.createContext)({setCustomPathnames:function(){},setCustomTitle:function(){}}),O=function(){return Object(o.useContext)(f)},_=function(e){var t=e.title,a=e.metaTitle,d=e.metaName,m=e.metaContent,O=e.metaInformation,_=e.headComponent,g=e.children,v=e.customPathnames,y=void 0===v?{}:v,N=e.paths,w=e.classes,H=e.className,T=e.titleCompanion,C=e.description,M=e.includeDescription,F=e.bannerComponent,P=e.disableBreadcrumbs,W=e.descriptionUnderTitle,k=e.goToPreviousPageHandler,U=Object(o.useState)({}),B=Object(c.a)(U,2),E=B[0],S=B[1],z=Object(r.h)().pathname,D=Object(o.useState)(t),I=Object(c.a)(D,2),R=I[0],q=I[1],A=Object(r.g)(),G=Object(o.useMemo)((function(){if(N)return N;var e=(z||"").split("/"),t=["/"];return e.forEach((function(a,i){!a||i<1||t.push("".concat(e.slice(0,i+1).join("/")))})),Object.values(p.m).filter((function(e){return t.includes(e.pathName)}))}),[z]);return y=Object(n.a)(Object(n.a)({},y),E),Object(o.useEffect)((function(){R!==t&&q(t)}),[t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(s.a,{children:[Object(h.jsx)("title",{children:"".concat(a||R," | FaucetPay")}),d&&m&&Object(h.jsx)("meta",{name:d,content:m}),null===O||void 0===O?void 0:O.map((function(e,t){return Object(o.createElement)("meta",Object(n.a)(Object(n.a)({},e),{},{key:t}))}))]}),Object(h.jsxs)("main",{className:Object(l.a)(j.a.page,H),children:[P?null:Object(h.jsx)(u.a,{className:j.a.path,data:G.map((function(e){var t=(null===e||void 0===e?void 0:e.pageName)||"";return{path:e.pathName,name:y[t]||t}}))}),F,Object(h.jsxs)("div",{className:Object(l.a)(j.a.header,null===w||void 0===w?void 0:w.header,Object(i.a)({},j.a.withoutMargin,!!W)),children:[Object(h.jsxs)("div",{className:Object(l.a)(j.a.title,null===w||void 0===w?void 0:w.title),children:[Object(h.jsxs)("h1",{children:[G.length>2||k?Object(h.jsx)(b.w,{className:j.a.backIcon,onClick:k?function(){return k(A)}:function(){return A.push(G[G.length-2].pathName)}}):null,Object(h.jsx)("span",{children:R})]}),M?Object(h.jsx)(h.Fragment,{children:!T&&null!==T&&C?Object(h.jsx)(o.Suspense,{fallback:null,children:Object(h.jsx)(x,{description:C})}):null}):null,T]}),_]}),W?Array.isArray(W)?Object(h.jsx)("div",{className:j.a.underTitleWrapper,children:W.map((function(e,t){return Object(h.jsx)("span",{className:Object(l.a)(j.a.descriptionUnderTitle,null===w||void 0===w?void 0:w.underTitle),children:e},t)}))}):Object(h.jsx)("span",{className:Object(l.a)(j.a.descriptionUnderTitle,null===w||void 0===w?void 0:w.underTitle),children:W}):null,Object(h.jsx)(f.Provider,{value:{setCustomPathnames:S,setCustomTitle:q},children:g})]})]})}},70:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",page:"style_page__Z1qqe",header:"style_header__Srtbr",withoutMargin:"style_withoutMargin__bPQOB",descriptionUnderTitle:"style_descriptionUnderTitle__1lPn1",underTitleWrapper:"style_underTitleWrapper__2B6BZ",title:"style_title__3idsH",backIcon:"style_backIcon__U4FPm",path:"style_path__3jhjp"}}}]);
//# sourceMappingURL=96.4b1e93a7.chunk.js.map