(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[44],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return j}));var a=n(3),i=n(163),r=Object(i.a)(Object(a.lazy)((function(){return n.e(131).then(n.bind(null,196))}))),o=(Object(i.a)(Object(a.lazy)((function(){return n.e(132).then(n.bind(null,197))}))),Object(i.a)(Object(a.lazy)((function(){return n.e(133).then(n.bind(null,198))})))),c=Object(i.a)(Object(a.lazy)((function(){return n.e(134).then(n.bind(null,199))}))),l=Object(i.a)(Object(a.lazy)((function(){return n.e(135).then(n.bind(null,200))}))),s=Object(i.a)(Object(a.lazy)((function(){return n.e(136).then(n.bind(null,201))}))),d=Object(i.a)(Object(a.lazy)((function(){return n.e(137).then(n.bind(null,202))}))),u=Object(i.a)(Object(a.lazy)((function(){return n.e(138).then(n.bind(null,203))}))),b=Object(i.a)(Object(a.lazy)((function(){return n.e(139).then(n.bind(null,204))}))),p=Object(i.a)(Object(a.lazy)((function(){return n.e(140).then(n.bind(null,205))}))),j=Object(i.a)(Object(a.lazy)((function(){return n.e(141).then(n.bind(null,206))})))},1393:function(e,t,n){"use strict";n.r(t),n.d(t,"AffiliatePage",(function(){return z}));var a=n(3),i=n.n(a),r=n(68),o=n(237),c=n(793),l=n.n(c),s=n(0),d=n(150),u=n(54),b=n(319),p=n(15),j=n(794),m=n.n(j),h=function(e){var t=e.statisticsData;return Object(s.jsx)("div",{className:m.a.root,children:E.map((function(e){var n=e.dataIndex,a=e.title;return Object(s.jsxs)("div",{className:Object(p.a)(m.a.row),children:[Object(s.jsx)("h4",{children:a}),Object(s.jsx)("div",{className:m.a.valueBlock,children:t.statistics[n]})]})}))})},f=n(795),x=n.n(f),v=function(e){var t=e.statisticsData;return Object(s.jsxs)("div",{className:x.a.root,children:[Object(s.jsx)("div",{className:Object(p.a)(x.a.row,x.a.head),children:E.map((function(e){var t=e.title;return Object(s.jsx)("div",{className:Object(p.a)(x.a.cell),children:t},t)}))}),Object(s.jsx)("div",{className:Object(p.a)(x.a.row,x.a.body),children:E.map((function(e){var n=e.dataIndex;return Object(s.jsx)("div",{className:Object(p.a)(x.a.cell),children:t.statistics[n]},n)}))})]})},O=n(17),_=n(29),g=n(32),y=n(76),N=n(31),k=n(18),w=n(1),H=n(4),C=n(331),M=n(160),P=n(22),T=n(615),W=n.n(T),F=function(e){return Object(s.jsx)(P.l,{className:W.a.copy,onClick:Object(H.a)(Object(w.a)().mark((function t(){return Object(w.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.a)(e);case 2:if(!t.sent){t.next=5;break}return t.abrupt("return",g.b.success("Copied!"));case 5:g.b.error("Something went wrong");case 6:case"end":return t.stop()}}),t)})))})},A=function(e,t){return[{field:"link_name",headerName:"link",valueRender:function(e){var t=e.value,n=Object(C.a)(t);return Object(s.jsxs)("div",{className:W.a.flex,children:[n,F(n)]})}},{field:"total_referred_earnings",headerName:"Total commission rewards",valueRender:function(e){var t=e.value,n=t||Number(0).toFixed(2);return Object(s.jsx)("div",{children:"".concat(n," USD")})}},{field:"id",headerName:"Delete Link",valueRender:function(n){var a=n.value;return Object(s.jsx)(k.a,{onClick:function(){return e(a)},loading:t,className:W.a.deleteButton,children:"Delete link"})}}]},B=function(e,t){return[{field:"link_name",headerName:"link",valueRender:function(e){var t=e.value,n=Object(C.a)(t);return Object(s.jsxs)("div",{className:W.a.configCell,children:[Object(s.jsx)("h4",{children:"Link"}),Object(s.jsxs)("div",{className:W.a.flex,children:[Object(s.jsx)("span",{children:n}),F(n)]})]})}},{field:"total_referred_earnings",headerName:"Total commission rewards",valueRender:function(e){var t=e.value,n=t||Number(0).toFixed(2);return Object(s.jsxs)("div",{className:W.a.configCell,children:[Object(s.jsx)("h4",{children:"Total commission rewards"}),Object(s.jsx)("div",{children:"".concat(n," USD")})]})}},{field:"id",headerName:"Delete Link",valueRender:function(n){var a=n.value;return Object(s.jsx)(k.a,{onClick:function(){return e(a)},loading:t,className:W.a.deleteButton,children:"Delete link"})}}]},R=i.a.lazy((function(){return Object(N.a)(Promise.resolve().then(n.bind(null,709)))})),L=function(e){var t=e.openCreateLinkModal,n=e.linksData,a=e.getLinks,i=e.loading,r=e.deleteLink,o=e.deleteLoading,c={page:n?n.data.current_page:1,pageAmount:n?n.data.total_pages:1,setPage:a},l=Object(u.b)(b.d);return Object(s.jsxs)("div",{className:W.a.root,children:[Object(s.jsx)(y.c,{columns:l?B(r,o):A(r,o),includeHeader:!l,classes:{global:Object(p.a)(W.a.tableGlobal,!(null!==n&&void 0!==n&&n.data.links.length)&&W.a.paddingBottom),row:Object(p.a)(W.a.rowWrapper,l?W.a.mobileRow:""),header:W.a.headerWrapper},rows:(null===n||void 0===n?void 0:n.data.links.map((function(e){return{link_name:e.link_name,total_referred_earnings:e.total_referred_earnings,id:e.id}})))||[],loading:i,pagination:c}),Object(s.jsx)(k.a,{className:W.a.createLinkButton,onClick:t,children:"Create a Link"})]})},I=(n(709),[{title:"Affiliate programme",Component:function(){return Object(s.jsxs)("div",{className:l.a.root,children:["We've made it easier than ever to get paid to do work you love! All you have to do is invite your friends, family, and colleagues.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Have you heard about FaucetPay? It's the easiest way to earn money online, and it's all thanks to our referral program. If you refer someone to us, we'll pay you for every exchange, ad-click and survey they complete! That's right \u2014 you can start earning money from your couch just by telling people about FaucetPay.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"We've got a great referral program, so why not spread the word and start earning some cash from FaucetPay today?"]})}},{title:"Tell Me More About My Statistics",Component:function(){var e=Object(u.b)(b.d),t=Object(d.b)("/affiliate/get-statistics").data;return t?Object(s.jsx)(s.Fragment,{children:e?Object(s.jsx)(h,{statisticsData:t}):Object(s.jsx)(v,{statisticsData:t})}):null}},{title:"",Component:function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],i=t[1],r=Object(_.a)("/affiliate/get-links",{method:"POST"}),o=Object(O.a)(r,2),c=o[0],l=o[1],d=l.data,u=l.isLoading,b=Object(_.a)("/affiliate/delete-link",{method:"POST",onSuccess:function(e){g.b[e.success?"success":"error"](e.message),e.success&&h()}}),p=Object(O.a)(b,2),j=p[0],m=p[1].isLoading,h=Object(a.useCallback)((function(){c({data:{page:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}})}),[]);Object(a.useEffect)((function(){h(1)}),[]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(L,{loading:u,getLinks:h,linksData:d,openCreateLinkModal:function(){i(!0)},deleteLink:function(e){j({data:{id:e}})},deleteLoading:m}),n&&Object(s.jsx)(R,{isOpen:n,getLinks:h,setOpenModal:i})]})}}]),E=[{title:"Referred users",dataIndex:"referred_users"},{title:"Total USD Referral Income",dataIndex:"total_usd_referral_income"},{title:"Today USD Referral Income",dataIndex:"today_usd_referral_income"}],S=n(798),D=n.n(S),z=function(){return Object(s.jsx)(r.a,{title:"Custom Link Creator",metaTitle:"Custom Link Creator",className:D.a.AffiliatePageWrapper,children:Object(s.jsx)("div",{className:D.a.affiliateBody,children:I.map((function(e,t){var n=e.title,i=e.Component;return n?Object(s.jsx)(o.a,{title:n,classes:{root:D.a.collapse,content:D.a.collapseContent},children:Object(s.jsx)(i,{})},"".concat(n,"_").concat(t)):Object(s.jsx)(a.Fragment,{children:Object(s.jsx)(i,{})},"".concat(n,"_").concat(t))}))})})};t.default=z},150:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(17),i=n(3),r=n(29),o=function(e,t){var n=Object(r.a)(e,t),o=Object(a.a)(n,2),c=o[0],l=o[1];return Object(i.useEffect)((function(){c()}),[]),l};t.a=o},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1),i=n(4),r=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.prev=8,(n=document.createElement("input")).style.position="fixed",n.style.pointerEvents="none",n.style.top="0",n.style.left="0",n.style.zIndex="999999",n.style.opacity="0",document.body.appendChild(n),n.value=t,n.select(),document.execCommand("copy"),n.remove(),e.abrupt("return",!0);case 24:return e.prev=24,e.t1=e.catch(8),e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[0,6],[8,24]])})));return function(t){return e.apply(this,arguments)}}()},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(43),i=n(17),r=n(3),o=n(15),c=n(89),l=n(22),s=(n(245),n(0)),d=Object(r.forwardRef)((function(e,t){var n=e.children,d=e.classes,u=e.title,b=e.disableReducingAnimation,p=e.onOpenCallback,j=e.checkHeight,m=Object(r.useState)(!1),h=Object(i.a)(m,2),f=h[0],x=h[1],v=Object(r.useState)(null),O=Object(i.a)(v,2),_=O[0],g=O[1],y=Object(c.a)().width,N=Object(r.useRef)(0),k=function(e){p&&p(e),x(e)};return Object(r.useImperativeHandle)(t,(function(){return{setIsOpen:k,isOpen:f}})),Object(r.useEffect)((function(){if(_){var e=_.style,t=_.childNodes,n=Object(a.a)(t).reduce((function(e,t){return t.offsetHeight+e}),0);null!==j&&void 0!==j&&j.standard?e.height=j.standard:b||(n>N.current?e.height="":0!==parseInt(e.maxHeight)&&(e.height=e.maxHeight)),null!==j&&void 0!==j&&j.max?e.maxHeight=f?j.max:"0px":(N.current=n,e.maxHeight="".concat(f?n:0,"px"))}}),[f,y,n,_]),Object(s.jsxs)("div",{className:Object(o.a)("collapse",null===d||void 0===d?void 0:d.root),children:[Object(s.jsxs)("div",{className:Object(o.a)("collapse__summary",null===d||void 0===d?void 0:d.summary),onClick:function(){return k(!f)},children:[u&&("string"===typeof u?Object(s.jsx)("h1",{className:Object(o.a)("collapse__title",null===d||void 0===d?void 0:d.title),children:u}):Object(s.jsx)("div",{className:"collapse__titleComponentWrapper",children:u})),Object(s.jsx)(l.b,{className:Object(o.a)("collapse__arrow",f&&"collapse__arrow_flip")})]}),Object(s.jsx)("div",{className:Object(o.a)("collapse__content",null===d||void 0===d?void 0:d.content),ref:function(e){return g(e)},children:n})]})}))},245:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a=function(e){return e[e.TOP=0]="TOP",e[e.BOTTOM=1]="BOTTOM",e}({}),i=function(e){return e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e}({})},303:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=/\w\/\/\w/g,i=function(e){var t="";return"string"===typeof e&&(t=e),"object"===typeof e&&null!==e&&void 0!==e&&e.user_id&&(t=e.user_id),"https://faucetpay.io".concat("/?r=",t).replace(a,"/")}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(11),i=n(15),r=n(44),o=n(47),c=n(40),l=n(45),s=n.n(l),d=n(0),u=Object(c.a)("key"),b=function(e){e.stopPropagation()},p=Object(r.a)(),j=function(e){var t=e.children,n=e.background,r=void 0===n?"transparent":n,c=e.curtainOnClick,l=e.curtainOnMove,j=e.classes;return Object(o.a)("keydown",(function(e){e.stopPropagation(),u(e)&&"Escape"===(null===e||void 0===e?void 0:e.key)&&c&&c()})),p?Object(a.createPortal)(Object(d.jsx)("div",{className:Object(i.a)(s.a.root,null===j||void 0===j?void 0:j.root),onClick:b,children:Object(d.jsxs)("div",{className:Object(i.a)(s.a.container,null===j||void 0===j?void 0:j.container),children:[Object(d.jsx)("div",{onPointerMove:l,onClick:function(){c&&c()},className:Object(i.a)(s.a.curtain,"transparent"===r?s.a.curtain__transparent:s.a.curtain__dark,null===j||void 0===j?void 0:j.curtain)}),t]})}),p):null}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(15),i=n(0),r=function(e){var t=e.errors,n=e.className;return Object(i.jsx)("span",{className:Object(a.a)("inputErrorText",n),children:Array.isArray(t)?t.join(", "):t})}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(16),i=n(3),r=n(15),o=n(0),c=function(e,t){return Object(o.jsx)("svg",Object(a.a)(Object(a.a)({width:"38",height:"38",viewBox:"0 0 38 38",stroke:"currentColor",ref:t},e),{},{children:Object(o.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(o.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(o.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(o.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(o.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))},l=Object(i.forwardRef)(c),s=n(49),d=n.n(s),u=function(e){var t=e.size,n=e.color,i=e.className,c=e.style,s="number"===typeof t?"".concat(t,"px"):t;return Object(o.jsx)(l,{id:"loader",className:Object(r.a)(d.a.loader,i),style:Object(a.a)(Object(a.a)({},c),{},{color:n}),ref:function(e){if(e){var t=e.getBoundingClientRect(),n=t.height,a=t.width,i=Math.min(n,a);i||(i=40),e.style.width=s||"".concat(i,"px"),e.style.height=s||"".concat(i,"px")}}})},b=u},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return function(t){if(!t)return!1;var n=t[e];return!!n||0===n}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(e,t){var n,a;if(e.loading!==t.loading||e.isMobile!==t.isMobile||(null===(n=e.pagination)||void 0===n?void 0:n.pageAmount)!==(null===(a=t.pagination)||void 0===a?void 0:a.pageAmount))return!1;var i=e.rows,r=t.rows;if(i.length!==r.length)return!1;if(e.includeHeader!==t.includeHeader)return!1;try{for(var o=0;o<i.length;o++){var c=Object.values(i[o]),l=Object.values(r[o]);if(c.length!==l.length)return!1;for(var s=0;s<c.length;s++)if(c[s]!==l[s])return!1}}catch(d){return!0}return!0},i=function(e){return null==e}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){var e=document.getElementById("pop-up");if(!e){console.warn('There is no "#pop-up" element in the DOM tree');var t=document.createElement("div");t.setAttribute("id","pop-up"),document.body.appendChild(t),e=t}return e}},45:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__3NCA8",curtain:"style_curtain__35fo1",curtain__transparent:"style_curtain__transparent__1llnV",curtain__dark:"style_curtain__dark__3R5g5",container:"style_container__8N2Qx"}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(16),i=n(19),r=n(20),o=n(3),c=n(15),l=n(36),s=n(0),d=["className","value","onChange","classes","endAdornment","startAdornment","onBlur","disabled","type","errors","readOnly"],u=Object(o.forwardRef)((function(e,t){var n=e.className,o=e.value,u=e.onChange,b=e.classes,p=e.endAdornment,j=e.startAdornment,m=e.onBlur,h=e.disabled,f=e.type,x=e.errors,v=e.readOnly,O=Object(r.a)(e,d),_="string"===typeof x||Array.isArray(x);return Object(s.jsxs)("label",{className:Object(c.a)("baseInput_root",null===b||void 0===b?void 0:b.root,n,Object(i.a)({},"baseInput_readOnly",v)),children:[j,Object(s.jsx)("input",Object(a.a)(Object(a.a)({},O),{},{className:Object(c.a)("baseInput_input",null===b||void 0===b?void 0:b.input),ref:t,value:o,onChange:u,onBlur:m,disabled:h,type:f,readOnly:v})),p,_?Object(s.jsx)(l.a,{errors:x,className:null===b||void 0===b?void 0:b.errors}):x]})}))},49:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",loader:"style_loader__iNURN"}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(19),i=n(17),r=n(3),o=n(15),c=n(35),l=n(100),s=n(120),d=n(18),u=n(22),b=n(72),p=n.n(b),j=n(0),m=function(e){var t,n=e.isOpen,b=e.onClose,m=e.children,h=e.withCloseIcon,f=e.classes,x=void 0===f?{}:f,v=e.loading,O=Object(r.useState)(!1),_=Object(i.a)(O,2),g=_[0],y=_[1],N=Object(r.useRef)(null),k=Object(r.useState)(!0),w=Object(i.a)(k,2),H=w[0],C=w[1];Object(r.useEffect)((function(){return n&&(C(!n),document.body.style.setProperty("--page-overflow","hidden")),function(){document.body.style.setProperty("--page-overflow","auto")}}),[n]);var M=function(e){if(N.current){var t=N.current.offsetHeight;y(e<=t+50)}else y(!1)};return Object(r.useEffect)((function(){N.current&&M(window.innerHeight)}),[N,n,v]),Object(r.useEffect)((function(){var e=l.a.subscribe((function(e){var t=e.height;return M(t)}));return function(){e.unsubscribe()}}),[]),H&&!n?null:Object(j.jsx)(c.a,{background:"dark",curtainOnClick:b,classes:{container:Object(o.a)(p.a.dialogContainer,x.container,(t={},Object(a.a)(t,p.a.close,!n),Object(a.a)(t,p.a.topPosition,g),t)),curtain:p.a.curtain},children:Object(j.jsxs)("div",{ref:function(e){Object(s.a)(e,N)},onAnimationEnd:function(e){e.animationName===p.a.closeAnimation&&C(!0)},className:Object(o.a)(p.a.dialog,h?p.a.radial:p.a.standard,x.dialog,Object(a.a)({},p.a.close,!n)),children:[h&&Object(j.jsx)(d.a,{onClick:b,className:Object(o.a)(p.a.closeIcon,"dialogCloseIcon"),children:Object(j.jsx)(u.j,{})}),m]})})}},53:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return M}));var a=n(3),i=n.n(a),r=n(15),o=n(57),c=n.n(o),l=n(0),s=function(e){var t=e.row,n=e.columns,i=e.loading,o=e.isMobile,s=e.withoutDefaultStyles,d=e.className;return Object(l.jsx)("div",{className:Object(r.a)(c.a.rowWrapper,!s&&"standardTable_row",d),children:n.map((function(e,n){return i?Object(l.jsx)("div",{className:"skeleton"},"".concat(e.field,"_").concat(n)):Object.keys(t).includes(e.field)?e.valueRender?Object(l.jsx)(a.Fragment,{children:e.valueRender({index:n,loading:i,src:t,mobile:o,value:t[e.field]})},"".concat(e.field,"_").concat(n)):Object(l.jsx)("span",{children:t[e.field]},"".concat(e.field,"_").concat(n)):null}))})},d=n(58),u=n.n(d),b=function(e){var t=e.description,n=e.classes;return Object(l.jsxs)("div",{className:Object(r.a)(u.a.wrapper,null===n||void 0===n?void 0:n.root),children:[Object(l.jsx)("span",{className:Object(r.a)(u.a.title,null===n||void 0===n?void 0:n.title),children:"Whoops!"}),Object(l.jsx)("div",{className:Object(r.a)(u.a.description,null===n||void 0===n?void 0:n.description),children:t||"There are no data to show you."}),Object(l.jsx)("img",{className:null===n||void 0===n?void 0:n.image,src:"/images/empty.webp",alt:"empty"})]})},p=n(16),j=n(20),m=n(18),h=n(22),f=n(59),x=n.n(f),v=["maxButtonVisible","showPrevNextButton","showFirstLastPage","page","pageAmount","classes","onChange","disabled"],O=function(e){var t=e.className;return Object(l.jsx)("span",{className:Object(r.a)(x.a.skip,t),children:"..."})},_=function(e){var t=e.maxButtonVisible,n=void 0===t?3:t,a=e.showPrevNextButton,o=e.showFirstLastPage,c=e.page,s=e.pageAmount,d=e.classes,u=e.onChange,b=e.disabled,f=Object(j.a)(e,v),_=function(){for(var e=[],t=Math.floor(n/2),a=Math.max(c-t,1),p=Math.min(c+t,s),j=function(t){var n=t===c,i=Object(l.jsx)(m.a,{onClick:function(){return u&&u(t)},disabled:n||b,className:Object(r.a)(null===d||void 0===d?void 0:d.button,x.a.button,n&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:t},t);(1===t||t===s)&&o||(e.push(i),t===p&&p+1<s?e.push(Object(l.jsx)(O,{className:null===d||void 0===d?void 0:d.skip})):t===a&&a-1>1&&e.splice(e.length-2,0,Object(l.jsx)(O,{className:null===d||void 0===d?void 0:d.skip})))},h=a;h<=p;h++)j(h);return Object(l.jsx)(l.Fragment,{children:e.map((function(t,n){return Object(l.jsx)(i.a.Fragment,{children:t},"".concat(t.key,"_").concat(n,"_").concat(e.length))}))})},g=1===c||b,y=c===s||b;return Object(l.jsxs)("div",Object(p.a)(Object(p.a)({className:Object(r.a)(x.a.root,null===d||void 0===d?void 0:d.root)},f),{},{children:[a&&Object(l.jsx)(m.a,{onClick:function(){return u&&u(Math.max(1,c-1))},disabled:g,className:Object(r.a)(null===d||void 0===d?void 0:d.button,x.a.button),children:Object(l.jsx)(h.J,{})}),o&&Object(l.jsx)(m.a,{onClick:function(){return u&&u(1)},disabled:g,className:Object(r.a)(null===d||void 0===d?void 0:d.button,x.a.button,1===c&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:"1"}),Object(l.jsx)(_,{}),o&&s>1&&Object(l.jsx)(m.a,{onClick:function(){return u&&u(s)},disabled:y,className:Object(r.a)(null===d||void 0===d?void 0:d.button,x.a.button,c===s&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:s}),a&&Object(l.jsx)(m.a,{onClick:function(){return u&&u(Math.min(s,c+1))},disabled:y,className:Object(r.a)(null===d||void 0===d?void 0:d.button,x.a.button),children:Object(l.jsx)(h.J,{})})]}))},g=n(28),y=n(60),N=n.n(y),k=function(e){var t=e.page,n=e.pageAmount,a=e.setPage,i=e.loading,o=e.direction,c=e.classes;return Object(l.jsx)(_,{page:t,pageAmount:n,onChange:a,disabled:i,showFirstLastPage:!0,showPrevNextButton:!0,style:{justifyContent:o===g.a.LEFT?"flex-start":o===g.a.RIGHT?"flex-end":"center"},classes:{root:Object(r.a)("standardPagination",N.a.pagination,null===c||void 0===c?void 0:c.pagination),button:"standardPagination_button",activePage:Object(r.a)("standardPagination_active",null===c||void 0===c?void 0:c.paginationActive)}})},w=n(42),H=n(61),C=n.n(H),M=function(e){var t=e.data,n=e.loading,a=e.cardTypes,i=e.classes;return Object(l.jsx)("div",{className:Object(r.a)(C.a.wrapper,"standardTableCard",null===i||void 0===i?void 0:i.row),children:a.map((function(e,a){return Object(l.jsxs)("div",{className:Object(r.a)(C.a.cardValueWrapper,null!==i&&void 0!==i&&i.elements?null===i||void 0===i?void 0:i.elements[a]:""),children:[Object(l.jsx)("span",{className:C.a.cardTitle,children:e.headerName}),!t||Object(w.b)(t[e.field])?Object(l.jsx)("div",{className:"skeleton"}):e.valueRender?e.valueRender({value:t[e.field],loading:n,src:t,index:a,mobile:!0}):n?Object(l.jsx)("div",{className:"skeleton"}):Object(l.jsx)("span",{className:"cardValue",children:t[e.field]})]},"".concat(e.field,"__").concat(a))}))})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(15),i=n(18),r=n(22),o=n(56),c=n.n(o),l=n(0),s=function(e){var t=e.currentPage,n=e.isNextPageExist,o=e.setPage,s=e.className,d=Number(t);return Object(l.jsxs)("div",{className:Object(a.a)(c.a.infinityPagination,s),children:[Object(l.jsx)(i.a,{disabled:d<=1,onClick:function(){return o(d-1)},children:Object(l.jsx)(r.p,{})}),Object(l.jsx)(i.a,{disabled:!n,onClick:function(){return o(d+1)},children:Object(l.jsx)(r.p,{})})]})}},56:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",infinityPagination:"style_infinityPagination__oNkra"}},57:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",rowWrapper:"style_rowWrapper__3zn_i"}},58:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"styles_wrapper__2NARE",title:"styles_title__163RY",description:"styles_description__35S5N"}},59:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",button:"style_button__ilHkP",skip:"style_skip__Bq5pO"}},60:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",pagination:"style_pagination__1yOml"}},61:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__6fuBt",cardValueWrapper:"style_cardValueWrapper__2gUA0",cardTitle:"style_cardTitle__3u3ae"}},615:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__2qHVa",createLinkButton:"style_createLinkButton__1yNsy",tableGlobal:"style_tableGlobal__3G5kG",paddingBottom:"style_paddingBottom__ZR8gt",flex:"style_flex__32hUB",configCell:"style_configCell__252jc",mobileRow:"style_mobileRow__rf0TQ",deleteButton:"style_deleteButton__3zuQv",headerWrapper:"style_headerWrapper__1Xlj5",rowWrapper:"style_rowWrapper__33iPx"}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(3),i=n.n(a),r=n(15),o=n(39),c=n(64),l=n.n(c),s=n(0),d=function(e){var t=e.data,n=e.delimiter,a=void 0===n?"/":n,c=e.className;return Object(s.jsx)("div",{className:Object(r.a)(l.a.breadCrumbsWrapper,c),children:t.map((function(e,n){var c=n+1===t.length;return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)(o.b,{to:{pathname:e.path},className:Object(r.a)(l.a.name,c&&l.a.name_active),children:e.name}),!c&&Object(s.jsx)("div",{className:l.a.name,children:a})]},e.name)}))})}},64:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",breadCrumbsWrapper:"style_breadCrumbsWrapper__Yd1D_",name:"style_name__3oD0Y",name_active:"style_name_active__fb4UQ"}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return O}));var a=n(19),i=n(16),r=n(17),o=n(34),c=n(82),l=n(15),s=n(3),d=n(23),u=n(63),b=n(31),p=n(22),j=n(70),m=n.n(j),h=n(0),f=Object(s.lazy)((function(){return Object(b.a)(Promise.all([n.e(7),n.e(122)]).then(n.bind(null,305)))})),x=Object(s.createContext)({setCustomPathnames:function(){},setCustomTitle:function(){}}),v=function(){return Object(s.useContext)(x)},O=function(e){var t=e.title,n=e.metaTitle,b=e.metaName,j=e.metaContent,v=e.metaInformation,O=e.headComponent,_=e.children,g=e.customPathnames,y=void 0===g?{}:g,N=e.paths,k=e.classes,w=e.className,H=e.titleCompanion,C=e.description,M=e.includeDescription,P=e.bannerComponent,T=e.disableBreadcrumbs,W=e.descriptionUnderTitle,F=e.goToPreviousPageHandler,A=Object(s.useState)({}),B=Object(r.a)(A,2),R=B[0],L=B[1],I=Object(o.h)().pathname,E=Object(s.useState)(t),S=Object(r.a)(E,2),D=S[0],z=S[1],U=Object(o.g)(),G=Object(s.useMemo)((function(){if(N)return N;var e=(I||"").split("/"),t=["/"];return e.forEach((function(n,a){!n||a<1||t.push("".concat(e.slice(0,a+1).join("/")))})),Object.values(d.m).filter((function(e){return t.includes(e.pathName)}))}),[I]);return y=Object(i.a)(Object(i.a)({},y),R),Object(s.useEffect)((function(){D!==t&&z(t)}),[t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.a,{children:[Object(h.jsx)("title",{children:"".concat(n||D," | FaucetPay")}),b&&j&&Object(h.jsx)("meta",{name:b,content:j}),null===v||void 0===v?void 0:v.map((function(e,t){return Object(s.createElement)("meta",Object(i.a)(Object(i.a)({},e),{},{key:t}))}))]}),Object(h.jsxs)("main",{className:Object(l.a)(m.a.page,w),children:[T?null:Object(h.jsx)(u.a,{className:m.a.path,data:G.map((function(e){var t=(null===e||void 0===e?void 0:e.pageName)||"";return{path:e.pathName,name:y[t]||t}}))}),P,Object(h.jsxs)("div",{className:Object(l.a)(m.a.header,null===k||void 0===k?void 0:k.header,Object(a.a)({},m.a.withoutMargin,!!W)),children:[Object(h.jsxs)("div",{className:Object(l.a)(m.a.title,null===k||void 0===k?void 0:k.title),children:[Object(h.jsxs)("h1",{children:[G.length>2||F?Object(h.jsx)(p.w,{className:m.a.backIcon,onClick:F?function(){return F(U)}:function(){return U.push(G[G.length-2].pathName)}}):null,Object(h.jsx)("span",{children:D})]}),M?Object(h.jsx)(h.Fragment,{children:!H&&null!==H&&C?Object(h.jsx)(s.Suspense,{fallback:null,children:Object(h.jsx)(f,{description:C})}):null}):null,H]}),O]}),W?Array.isArray(W)?Object(h.jsx)("div",{className:m.a.underTitleWrapper,children:W.map((function(e,t){return Object(h.jsx)("span",{className:Object(l.a)(m.a.descriptionUnderTitle,null===k||void 0===k?void 0:k.underTitle),children:e},t)}))}):Object(h.jsx)("span",{className:Object(l.a)(m.a.descriptionUnderTitle,null===k||void 0===k?void 0:k.underTitle),children:W}):null,Object(h.jsx)(x.Provider,{value:{setCustomPathnames:L,setCustomTitle:z},children:_})]})]})}},70:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",page:"style_page__Z1qqe",header:"style_header__Srtbr",withoutMargin:"style_withoutMargin__bPQOB",descriptionUnderTitle:"style_descriptionUnderTitle__1lPn1",underTitleWrapper:"style_underTitleWrapper__2B6BZ",title:"style_title__3idsH",backIcon:"style_backIcon__U4FPm",path:"style_path__3jhjp"}},709:function(e,t,n){"use strict";n.r(t),n.d(t,"CreateLinkModal",(function(){return x}));var a=n(17),i=n(3),r=n(29),o=n(50),c=n(32),l=n(46),s=n(18),d=n(303),u=n(110),b=n(796),p=n.n(b),j=n(0);var m=function(e){var t=e.children,n=e.onClick,r=Object(i.useState)(""),o=Object(a.a)(r,2),c=o[0],b=o[1],m=Object(j.jsx)(u.h,{onClick:function(){b(function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",a=0;a<e;a++)t+=n.charAt(Math.floor(52*Math.random()));return t}(Object(d.a)(6,15)))},className:p.a.refreshIcon});return Object(j.jsxs)("section",{className:p.a.body,children:[Object(j.jsxs)("div",{className:p.a.root,children:[Object(j.jsx)("h5",{children:"Link"}),Object(j.jsx)(l.a,{className:p.a.input,placeholder:"Link Name",value:c,onChange:function(e){b(e.target.value)},endAdornment:m})]}),t,Object(j.jsx)(s.a,{className:p.a.createLinkButton,onClick:function(){return n(c)},children:"Create"})]})},h=n(797),f=n.n(h),x=Object(i.memo)((function(e){var t=e.setOpenModal,n=e.getLinks,l=e.isOpen,s=Object(r.a)("/affiliate/create-link",{method:"POST"}),d=Object(a.a)(s,2),u=d[0],b=d[1],p=(b.isLoading,b.data);b.error;return Object(i.useEffect)((function(){p&&p.success&&(n(1),t(!1)),p&&!p.success&&c.b.error(p.message)}),[p]),Object(j.jsxs)(o.a,{withCloseIcon:!0,classes:{dialog:f.a.root},isOpen:l,onClose:function(){return t(!1)},children:[Object(j.jsx)("div",{className:f.a.head,children:Object(j.jsx)("h4",{children:"Create New Link"})}),Object(j.jsx)(m,{onClick:function(e){u({data:{name:e}})},children:Object(j.jsx)("div",{className:f.a.description,children:"6 to 15 alphabets allowed."})})]})}));t.default=x},72:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",dialogContainer:"style_dialogContainer__si-_-",paperOpenAnimation:"style_paperOpenAnimation__5pp-n",topPosition:"style_topPosition__1nwdA",close:"style_close__1ZXLA",curtain:"style_curtain__2GrGT",dialog:"style_dialog__2iD0i",openAnimation:"style_openAnimation__2hvo8",open:"style_open__1-JCn",closeAnimation:"style_closeAnimation__22MKm",fullScreen:"style_fullScreen__3ejYw",standard:"style_standard__1F-TE",radial:"style_radial__abEQi",standardCloseIcon:"style_standardCloseIcon__19REk",closeIcon:"style_closeIcon__1aQkG"}},76:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return s.b})),n.d(t,"a",(function(){return s.a}));var a=n(16),i=n(3),r=n(15),o=n(37),c=n(55),l=n(53),s=n(28),d=n(42),u=n(86),b=n.n(u),p=n(0),j=function(e){var t=e.rows,n=e.columns,d=e.loading,u=void 0!==d&&d,j=e.includeHeader,m=void 0===j||j,h=e.classes,f=e.pagination,x=e.isMobile,v=void 0!==x&&x,O=e.styles,_=e.withoutDefaultStyles,g=void 0!==_&&_,y=e.withoutSkeletons,N=void 0!==y&&y,k=e.empty,w=e.infinityPagination,H=e.circular,C=void 0===H||H,M=e.skeletonRows,P=void 0===M?5:M,T=e.RowWrapper,W=e.compact,F=e.compactClasses,A=function(){return f&&t.length>0?Object(p.jsx)(l.c,Object(a.a)({loading:u,classes:h},f)):null},B=u&&!N?Array.from(Array(P).map((function(e,t){return{key:String(t)}}))):t;return Object(p.jsxs)("div",{className:Object(r.a)(b.a.wrapper,null===h||void 0===h?void 0:h.global,u&&C&&b.a.wrapper__load),style:{"--table-column-count":n.length},children:[(null===f||void 0===f?void 0:f.position)===s.b.TOP&&Object(p.jsx)(A,{}),Object(p.jsxs)("div",{className:Object(r.a)(b.a.tableWrapper,!g&&"standardTable",null===h||void 0===h?void 0:h.root),children:[m&&Object(p.jsx)("div",{className:Object(r.a)(b.a.headerWrapper,!g&&"standardTable_header",null===h||void 0===h?void 0:h.header),style:null===O||void 0===O?void 0:O.header,children:n.map((function(e,t){return e.headerName?e.headerRender?Object(p.jsx)(i.Fragment,{children:e.headerRender(e.headerName)},"key_#".concat(t)):Object(p.jsx)("span",{children:e.headerName},"key_#".concat(t)):null}))}),u||0!==t.length?null===B||void 0===B?void 0:B.map((function(e,t){return W?Object(p.jsx)(l.b,{cardTypes:n,loading:u&&!N,classes:F,data:e},(null===e||void 0===e?void 0:e.key)||t):T?Object(p.jsx)(T,{data:e,loading:u&&!N},t):Object(p.jsx)(l.d,{loading:u&&!N,isMobile:v,row:e,columns:n,withoutDefaultStyles:g,className:null===h||void 0===h?void 0:h.row},(null===e||void 0===e?void 0:e.key)||t)})):null!==k&&void 0!==k&&k.disable?null:Object(p.jsx)(l.a,{description:null===k||void 0===k?void 0:k.description,classes:null===k||void 0===k?void 0:k.classes})]}),(null===f||void 0===f?void 0:f.position)!==s.b.TOP&&Object(p.jsx)(A,{}),w&&Object(p.jsx)("div",{className:b.a.infinityPagination,children:Object(p.jsx)(c.a,Object(a.a)({},w))}),u&&C&&Object(p.jsx)(o.a,{size:86,className:b.a.loader})]})};d.a},793:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__3bxzG"}},794:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__eB0Lm",row:"style_row__wlAcx",valueBlock:"style_valueBlock__2GlHl"}},795:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__AxdrZ",row:"style_row__1Wnw_",head:"style_head__1xcPn",cell:"style_cell__2wHXJ",body:"style_body__2Cvpl"}},796:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__1-_Kf",refreshIcon:"style_refreshIcon__3TOd_",input:"style_input__2UW5F",createLinkButton:"style_createLinkButton__1uvxf"}},797:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__1mIOA",head:"style_head__3N03e",closeButton:"style_closeButton__ip9mj",description:"style_description__1RwU3"}},798:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",invitePageWrapper:"style_invitePageWrapper__36VZF",description:"style_description__18Fii",inviteBody:"style_inviteBody__L5P4Q",collapse:"style_collapse__1x6TU",collapseContent:"style_collapseContent__2O0cq"}},86:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__2s3Hy",wrapper__load:"style_wrapper__load__1d-Vt",tableWrapper:"style_tableWrapper__2TgKP",emptyRow:"style_emptyRow__BgPtv",tableColumn:"style_tableColumn__3XQKo",pagination:"style_pagination__1JTZ8",headerWrapper:"style_headerWrapper__1PhIX",value:"style_value__3pvNZ",loader:"style_loader__1mOu7",circular:"style_circular__k6V9E",infinityPagination:"style_infinityPagination__2KE3y"}}}]);
//# sourceMappingURL=44.1eef8717.chunk.js.map