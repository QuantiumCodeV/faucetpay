(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{104:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",item:"style_item__2XpPh",itemActiveValue:"style_itemActiveValue__vOhIp"}},228:function(e,t,n){e.exports={captcha:"styles_captcha__dpKVD"}},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(17),r=n(3),o=n(15),i=n(21),c=n(32),l=n(37),s=n(170),u=Object(s.a)(),p=u.clearIntervals,d=u.pushInterval,b=n(228),f=n.n(b),j=n(0),h=Object(r.forwardRef)((function(e,t){var n=e.setCaptcha,s=e.className,u=e.onError,b=Object(r.useRef)(null),h=Object(r.useRef)(null),_=Object(r.useState)(!0),O=Object(a.a)(_,2),v=O[0],x=O[1],m=Object(i.n)().isLight;Object(r.useImperativeHandle)(t,(function(){return{reset:function(){var e;null===(e=h.current)||void 0===e||e.reset()},getResult:function(){var e,t;return null!==(e=null===(t=h.current)||void 0===t?void 0:t.getResult())&&void 0!==e?e:null}}}));return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;Object(r.useEffect)((function(){return d((function(){window[e]&&(p(),t())}),n),function(){p()}}),[e,t,n])}("BasiliskCaptcha",(function(){if(!h.current&&b.current)try{var e=window.BasiliskCaptcha;h.current=new e(b.current,n),x(!1)}catch(t){console.log(t.message),c.b.error({message:"An error occurred while loading the captcha.",timeOut:5e3}),u&&u(),x(!1)}})),Object(j.jsx)("div",{"data-theme":m?"light":"dark","data-sitekey":"".concat("a3760bfe5cf4254b2759c19fb2601667"),className:Object(o.a)(f.a.captcha,s),ref:b,children:v&&Object(j.jsx)(l.a,{size:40,className:f.a.loader})})}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return h}));var a=n(19),r=n(17),o=n(3),i=n(1467),c=n(15),l=n(47),s=n(36),u=n(35),p=n(22),d=n(62),b=n.n(d),f=n(0),j=Object(o.createContext)({setValue:function(){},value:""}),h=function(e){var t=e.children,n=e.onChange,d=e.onCloseCallback,h=e.value,_=e.className,O=e.frontComponent,v=e.classes,x=e.disabled,m=e.topLabel,g=e.errors,y=e.optionsScrollCallback,C=e.optionsWidth,w=e.optionsPosition,H=Object(o.useState)(!1),N=Object(r.a)(H,2),k=N[0],M=N[1],A=Object(o.useRef)({left:0,top:0,selectHeight:0,selectWidth:0}),I=Object(o.useRef)(null),W=function(){M(!1),d&&d()};return Object(l.a)("scroll",W,document),Object(o.useEffect)((function(){if(I.current&&y&&k){var e=Object(i.a)(I.current,"scroll").subscribe(y);return function(){e.unsubscribe()}}}),[k]),Object(f.jsxs)("div",{className:Object(c.a)(_,b.a.select,null===v||void 0===v?void 0:v.root),onClick:function(e){if(!x){var t=e.currentTarget.getBoundingClientRect(),n=t.top,a=t.left,r=t.height,o=t.width;A.current={top:n+(null!==w&&void 0!==w&&w.top?null===w||void 0===w?void 0:w.top:0),left:a+(null!==w&&void 0!==w&&w.left?null===w||void 0===w?void 0:w.left:0),selectHeight:r,selectWidth:o},M(!0)}},children:[m&&Object(f.jsx)("label",{className:Object(c.a)(b.a.topLabel,null===v||void 0===v?void 0:v.topLabel),children:m}),g&&Object(f.jsx)(s.a,{className:null===v||void 0===v?void 0:v.error,errors:g}),O||Object(f.jsx)("div",{className:b.a.labelWrapper,children:Object(f.jsx)("span",{className:null===v||void 0===v?void 0:v.label,children:h})}),Object(f.jsx)(p.p,{className:Object(c.a)(b.a.arrow,null===v||void 0===v?void 0:v.arrow,Object(a.a)({},b.a.arrowOpen,k))}),Object(f.jsx)(j.Provider,{value:{setValue:function(e){n(e),W()},value:h},children:k?Object(f.jsx)(u.a,{curtainOnClick:W,children:Object(f.jsx)("div",{ref:function(e){e&&(!function(e,t,n,a){var r,o,i=t.top+t.selectHeight,c=e.offsetHeight,l=window.innerHeight-i,s=i;l<c&&(s-=c-l+10),e.style.top="".concat(null!==(r=null===a||void 0===a?void 0:a.top)&&void 0!==r?r:s,"px"),e.style.left="".concat(null!==(o=null===a||void 0===a?void 0:a.left)&&void 0!==o?o:t.left,"px"),e.style.width="".concat(null!==n&&void 0!==n?n:t.selectWidth,"px")}(e,A.current,C),I.current=e)},className:Object(c.a)(b.a.optionContainer,null===v||void 0===v?void 0:v.options),children:o.Children.count(t)?t:Object(f.jsx)("div",{className:Object(c.a)(b.a.noOptionsItem,null===v||void 0===v?void 0:v.noOptionItem),children:"No matches found"})})}):null})]})}},338:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",textArea:"style_textArea__XKSjS"}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(11),r=n(15),o=n(44),i=n(47),c=n(40),l=n(45),s=n.n(l),u=n(0),p=Object(c.a)("key"),d=function(e){e.stopPropagation()},b=Object(o.a)(),f=function(e){var t=e.children,n=e.background,o=void 0===n?"transparent":n,c=e.curtainOnClick,l=e.curtainOnMove,f=e.classes;return Object(i.a)("keydown",(function(e){e.stopPropagation(),p(e)&&"Escape"===(null===e||void 0===e?void 0:e.key)&&c&&c()})),b?Object(a.createPortal)(Object(u.jsx)("div",{className:Object(r.a)(s.a.root,null===f||void 0===f?void 0:f.root),onClick:d,children:Object(u.jsxs)("div",{className:Object(r.a)(s.a.container,null===f||void 0===f?void 0:f.container),children:[Object(u.jsx)("div",{onPointerMove:l,onClick:function(){c&&c()},className:Object(r.a)(s.a.curtain,"transparent"===o?s.a.curtain__transparent:s.a.curtain__dark,null===f||void 0===f?void 0:f.curtain)}),t]})}),b):null}},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(16),r=n(20),o=n(3),i=n(15),c=n(36),l=n(338),s=n.n(l),u=n(0),p=["className","topLabel","errors"],d=Object(o.forwardRef)((function(e,t){var n=e.className,o=e.topLabel,l=e.errors,d=Object(r.a)(e,p);return Object(u.jsxs)("div",{className:Object(i.a)(s.a.textArea,n),children:[o?Object(u.jsx)("label",{children:o}):null,Object(u.jsx)("textarea",Object(a.a)(Object(a.a)({},d),{},{ref:t})),l&&Object(u.jsx)(c.a,{errors:l})]})}))},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(15),r=n(0),o=function(e){var t=e.errors,n=e.className;return Object(r.jsx)("span",{className:Object(a.a)("inputErrorText",n),children:Array.isArray(t)?t.join(", "):t})}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(16),r=n(3),o=n(15),i=n(0),c=function(e,t){return Object(i.jsx)("svg",Object(a.a)(Object(a.a)({width:"38",height:"38",viewBox:"0 0 38 38",stroke:"currentColor",ref:t},e),{},{children:Object(i.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(i.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(i.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(i.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(i.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))},l=Object(r.forwardRef)(c),s=n(49),u=n.n(s),p=function(e){var t=e.size,n=e.color,r=e.className,c=e.style,s="number"===typeof t?"".concat(t,"px"):t;return Object(i.jsx)(l,{id:"loader",className:Object(o.a)(u.a.loader,r),style:Object(a.a)(Object(a.a)({},c),{},{color:n}),ref:function(e){if(e){var t=e.getBoundingClientRect(),n=t.height,a=t.width,r=Math.min(n,a);r||(r=40),e.style.width=s||"".concat(r,"px"),e.style.height=s||"".concat(r,"px")}}})},d=p},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return function(t){if(!t)return!1;var n=t[e];return!!n||0===n}}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){var e=document.getElementById("pop-up");if(!e){console.warn('There is no "#pop-up" element in the DOM tree');var t=document.createElement("div");t.setAttribute("id","pop-up"),document.body.appendChild(t),e=t}return e}},45:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__3NCA8",curtain:"style_curtain__35fo1",curtain__transparent:"style_curtain__transparent__1llnV",curtain__dark:"style_curtain__dark__3R5g5",container:"style_container__8N2Qx"}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(16),r=n(3),o=n(33),i=function(e){var t=e.children,n=e.value,i=Object(r.useContext)(o.b).setValue,c=r.Children.only(t);return Object(r.cloneElement)(t,Object(a.a)(Object(a.a)({},c.props),{},{ref:function(e){var t;"function"===typeof(null===c||void 0===c?void 0:c.ref)?c.ref(e):null!==(t=c.ref)&&void 0!==t&&t.hasOwnProperty("current")&&(c.ref.current=e)},onClick:function(){return i(n)}}))}},49:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",loader:"style_loader__iNURN"}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(19),r=n(17),o=n(3),i=n(15),c=n(35),l=n(100),s=n(120),u=n(18),p=n(22),d=n(72),b=n.n(d),f=n(0),j=function(e){var t,n=e.isOpen,d=e.onClose,j=e.children,h=e.withCloseIcon,_=e.classes,O=void 0===_?{}:_,v=e.loading,x=Object(o.useState)(!1),m=Object(r.a)(x,2),g=m[0],y=m[1],C=Object(o.useRef)(null),w=Object(o.useState)(!0),H=Object(r.a)(w,2),N=H[0],k=H[1];Object(o.useEffect)((function(){return n&&(k(!n),document.body.style.setProperty("--page-overflow","hidden")),function(){document.body.style.setProperty("--page-overflow","auto")}}),[n]);var M=function(e){if(C.current){var t=C.current.offsetHeight;y(e<=t+50)}else y(!1)};return Object(o.useEffect)((function(){C.current&&M(window.innerHeight)}),[C,n,v]),Object(o.useEffect)((function(){var e=l.a.subscribe((function(e){var t=e.height;return M(t)}));return function(){e.unsubscribe()}}),[]),N&&!n?null:Object(f.jsx)(c.a,{background:"dark",curtainOnClick:d,classes:{container:Object(i.a)(b.a.dialogContainer,O.container,(t={},Object(a.a)(t,b.a.close,!n),Object(a.a)(t,b.a.topPosition,g),t)),curtain:b.a.curtain},children:Object(f.jsxs)("div",{ref:function(e){Object(s.a)(e,C)},onAnimationEnd:function(e){e.animationName===b.a.closeAnimation&&k(!0)},className:Object(i.a)(b.a.dialog,h?b.a.radial:b.a.standard,O.dialog,Object(a.a)({},b.a.close,!n)),children:[h&&Object(f.jsx)(u.a,{onClick:d,className:Object(i.a)(b.a.closeIcon,"dialogCloseIcon"),children:Object(f.jsx)(p.j,{})}),j]})})}},62:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",select:"style_select__1SCn2",labelWrapper:"style_labelWrapper__1XecV",topLabel:"style_topLabel__154X5",arrow:"style_arrow__2T4YY",arrowOpen:"style_arrowOpen__1eSQN",optionContainer:"style_optionContainer__3aCvv",expandSelect:"style_expandSelect__3_3EW",noOptionsItem:"style_noOptionsItem__1kpIk"}},638:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(16),r=n(17),o=n(34),i=n(3),c=n(32),l=n(29),s=n(317),u=n(23),p=function(){var e=Object(i.useContext)(s.a),t=Object(o.g)(),n=Object(l.a)("/ptc/create-session",{method:"POST",onSuccess:function(e){e.success||(c.b.error(e.message),t.replace(u.m.paidToClickPage.pathName))},onError:function(e){t.replace(u.m.paidToClickPage.pathName)}}),p=Object(r.a)(n,2),d=p[0],b=p[1].data;return Object(a.a)({session:b,createSession:function(t){e.setActiveAd(t),d({data:{ad_id:t}})}},e)}},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(1),r=n(4),o=n(17),i=n(3),c=n(15),l=n(236),s=n(910),u=n.n(s),p=n(50),d=n(32),b=n(18),f=n(0),j=function(e){var t=e.completePtc,n=e.loading,s=e.handleClose,j=e.isOpen,h=Object(i.useState)(null),_=Object(o.a)(h,2),O=_[0],v=_[1],x=Object(i.useRef)(null),m=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=3;break}return d.b.error({message:"Pass the captcha"}),e.abrupt("return");case 3:t(O),null===(n=x.current)||void 0===n||n.reset(),s();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(p.a,{isOpen:j,onClose:s,classes:{dialog:u.a.wrapper},children:[Object(f.jsx)(l.a,{ref:x,setCaptcha:v,className:u.a.captchaWrapper}),Object(f.jsx)(b.a,{className:Object(c.a)("purpleButton",u.a.popupButton),onClick:m,loading:n,disabled:!O,children:"Get Credit"})]})};n(98),n(359),n(33),n(911)},72:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",dialogContainer:"style_dialogContainer__si-_-",paperOpenAnimation:"style_paperOpenAnimation__5pp-n",topPosition:"style_topPosition__1nwdA",close:"style_close__1ZXLA",curtain:"style_curtain__2GrGT",dialog:"style_dialog__2iD0i",openAnimation:"style_openAnimation__2hvo8",open:"style_open__1-JCn",closeAnimation:"style_closeAnimation__22MKm",fullScreen:"style_fullScreen__3ejYw",standard:"style_standard__1F-TE",radial:"style_radial__abEQi",standardCloseIcon:"style_standardCloseIcon__19REk",closeIcon:"style_closeIcon__1aQkG"}},910:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__1Njux",captchaWrapper:"style_captchaWrapper__3O0Rt",popupButton:"style_popupButton__2NQIO"}},911:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__1O8xc",title:"style_title__3aL0z",description:"style_description__3qVqt",select:"style_select__38hGy",arrowIcon:"style_arrowIcon__302QF",textArea:"style_textArea__2Km1a",submit:"style_submit__28MIP"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(19),r=n(15),o=n(48),i=n(104),c=n.n(i),l=n(0),s=function(e){var t=e.value,n=e.label,i=e.className,s=e.activeValue;return Object(l.jsx)(o.a,{value:t,children:Object(l.jsx)("div",{className:Object(r.a)(c.a.item,Object(a.a)({},c.a.itemActiveValue,t===s),i),children:Object(l.jsx)("span",{children:n||t})})})}}}]);
//# sourceMappingURL=13.99492842.chunk.js.map