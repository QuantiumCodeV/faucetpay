(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[99,123],{1158:function(e,t,n){"use strict";n.r(t);var o=n(17),a=n(3),i=n(39),c=n(318),r=n(175),s=n(18),l=n(23),u=n(505),p=n.n(u),d=n(0),b=[{title:"Dashboard",path:l.m.dashboardPage.pathName,icon:Object(d.jsx)(c.g,{})},{title:"Deposit / Withdrawal",path:"".concat(l.m.dashboardPage.pathName,"/wallet"),icon:Object(d.jsx)(c.h,{})},{title:"Direct Transfer",path:l.m.transferPage.pathName,icon:Object(d.jsx)(c.H,{})},{title:"Linked Addresses",path:"".concat(l.m.dashboardPage.pathName,"/linked-addresses"),icon:Object(d.jsx)(c.b,{})},{title:"Power Ups",path:l.m.rewardPointsPage.pathName,icon:Object(d.jsx)(c.x,{})},{title:"Merchant API",path:l.m.merchantPage.pathName,icon:Object(d.jsx)(c.c,{})},{title:"Account Settings",path:l.m.settingsPage.pathName,icon:Object(d.jsx)(c.A,{})}];t.default=function(e){var t,n=e.logout,l=Object(a.useState)(!1),u=Object(o.a)(l,2),j=u[0],h=u[1],f=Object(a.useRef)(null),O=function(){h((function(e){return!e}))},m=Object(a.useMemo)((function(){return b.map((function(e){return Object(d.jsx)(i.b,{className:"popupButton",onClick:O,to:{pathname:e.path},children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)("div",{className:"svgFallBack"}),children:e.icon}),Object(d.jsx)("span",{children:e.title})]})},e.path)}))}),[]);return Object(d.jsxs)("div",{ref:f,className:p.a.userMenuWrapper,children:[Object(d.jsx)(s.a,{className:p.a.userMenuButton,onClick:O,children:Object(d.jsx)(a.Suspense,{fallback:null,children:Object(d.jsx)(c.I,{})})}),Object(d.jsx)(r.a,{anchor:f.current,isOpen:j,onClose:O,background:"transparent",position:{top:(null===(t=f.current)||void 0===t?void 0:t.offsetHeight)||0,left:-180},children:Object(d.jsxs)("div",{className:p.a.popup,children:[m,Object(d.jsx)(s.a,{className:"popupButton",onClick:function(){n(),O()},children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)("div",{className:"svgFallBack"}),children:Object(d.jsx)(c.q,{})}),Object(d.jsx)("span",{children:"Logout"})]})})]})})]})}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(16),a=n(17),i=n(3),c=n(15),r=n(35),s=n(234),l=n.n(s),u=n(0),p=function(e){var t=e.children,n=e.anchor,s=e.isOpen,p=e.onClose,d=e.onMove,b=e.background,j=void 0===b?"black":b,h=e.paper,f=e.position,O=e.popupRootClasses,m=e.disableScroll,v=Object(i.useState)(null),x=Object(a.a)(v,2),_=x[0],g=x[1],k=Object(i.useState)(s),y=Object(a.a)(k,2),N=y[0],M=y[1];if(Object(i.useEffect)((function(){return s?(M(!0),m&&(document.body.style.overflow="hidden")):m&&(document.body.style.overflow=""),function(){m&&(document.body.style.overflow="")}}),[s,m]),!N)return null;var w=function(){if(n&&_){var e=n.getBoundingClientRect(),t=e.top,o=e.left;return(t+=null!==f&&void 0!==f&&f.top?f.top:0)<0&&(t=0),(o+=null!==f&&void 0!==f&&f.left?f.left:0)<0&&(o=0),o+_.offsetWidth>window.innerWidth&&(o=window.innerWidth-_.offsetWidth),t+_.offsetHeight>window.innerHeight&&(t=window.innerHeight-_.offsetHeight),{top:t,left:o}}return{top:0,left:0}}();return Object(u.jsx)(r.a,{background:j,curtainOnClick:p,curtainOnMove:d,classes:O,children:Object(u.jsx)("div",Object(o.a)(Object(o.a)({ref:function(e){return g(e)},onAnimationEnd:function(e){!s&&N&&M(!1)},style:Object(o.a)(Object(o.a)({},null===h||void 0===h?void 0:h.style),{},{transform:"translate(".concat(w.left,"px, ").concat(w.top,"px)")})},h),{},{className:Object(c.a)(l.a.root,null===h||void 0===h?void 0:h.className,s&&N&&l.a.open,!s&&N&&l.a.close),children:t}))})}},234:function(e,t,n){e.exports={root:"style_root__Ofw7z",open:"style_open__2MXnY",openAnimation:"style_openAnimation__3f--8",close:"style_close__rN2Gr",closeAnimation:"style_closeAnimation__3l4t3"}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(11),a=n(15),i=n(44),c=n(47),r=n(40),s=n(45),l=n.n(s),u=n(0),p=Object(r.a)("key"),d=function(e){e.stopPropagation()},b=Object(i.a)(),j=function(e){var t=e.children,n=e.background,i=void 0===n?"transparent":n,r=e.curtainOnClick,s=e.curtainOnMove,j=e.classes;return Object(c.a)("keydown",(function(e){e.stopPropagation(),p(e)&&"Escape"===(null===e||void 0===e?void 0:e.key)&&r&&r()})),b?Object(o.createPortal)(Object(u.jsx)("div",{className:Object(a.a)(l.a.root,null===j||void 0===j?void 0:j.root),onClick:d,children:Object(u.jsxs)("div",{className:Object(a.a)(l.a.container,null===j||void 0===j?void 0:j.container),children:[Object(u.jsx)("div",{onPointerMove:s,onClick:function(){r&&r()},className:Object(a.a)(l.a.curtain,"transparent"===i?l.a.curtain__transparent:l.a.curtain__dark,null===j||void 0===j?void 0:j.curtain)}),t]})}),b):null}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e){return function(t){if(!t)return!1;var n=t[e];return!!n||0===n}}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(){var e=document.getElementById("pop-up");if(!e){console.warn('There is no "#pop-up" element in the DOM tree');var t=document.createElement("div");t.setAttribute("id","pop-up"),document.body.appendChild(t),e=t}return e}},45:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__3NCA8",curtain:"style_curtain__35fo1",curtain__transparent:"style_curtain__transparent__1llnV",curtain__dark:"style_curtain__dark__3R5g5",container:"style_container__8N2Qx"}},505:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",userMenuWrapper:"style_userMenuWrapper__vAbUh",userMenuButton:"style_userMenuButton__yiizM",popup:"style_popup__1tR-p"}}}]);
//# sourceMappingURL=99.f01966dc.chunk.js.map