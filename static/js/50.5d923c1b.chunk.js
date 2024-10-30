(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[50,18],{1376:function(e,t,a){"use strict";a.r(t),a.d(t,"ExchangePage",(function(){return te}));var n=a(16),i=a(19),o=a(30),r=a(1),c=a(4),l=a(17),s=a(3),d=a(190),u=a.n(d),b=a(15),p=a(355),m=a(54),j=a(68),v=a(21),h=a(24),x=a(25),O=a(65),f=a(66),_=function(e){Object(O.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isError:!1},e}return Object(x.a)(a,[{key:"componentDidCatch",value:function(e,t){console.error(e),this.setState({isError:!0})}},{key:"render",value:function(){return this.state.isError?this.props.catchComponent:this.props.children}}]),a}(s.Component),g=a(76),y="Loading...",N="0.00000000",w=650,H=a(124),C=a(27),M=a(614),W=a.n(M),k=a(0),T=function(e){try{return Object(H.a)("dS mmmm, yyyy",new Date(e))}catch(t){return e}},P=a(89),F=a(18),E=a(20),S=a(26),B=a(33),I=a(769),R=a.n(I),A=a(48),D=a(770),V=a.n(D),L=function(e){var t=e.value,a=e.label,n=e.disabled,o=e.withBalance,r=e.balance;return Object(k.jsx)(A.a,{value:t,children:Object(k.jsxs)("div",{className:Object(b.a)(V.a.item,Object(i.a)({},V.a.itemDisabled,n)),children:[Object(k.jsx)(S.a,{className:V.a.coinImg,coin:t}),Object(k.jsx)("span",{children:a}),o&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("span",{className:V.a.coinSymbol,children:t}),Object(k.jsx)("span",{children:null===r||void 0===r?void 0:r.toFixed(8)})]})]})})},U=["value","className","classes","coins","onChange","disabledOption","withSymbol","optionWithBalance","optionsWidth"],Q=function(e){var t=e.value,a=e.className,i=e.classes,o=e.coins,r=e.onChange,c=e.disabledOption,l=e.withSymbol,s=e.optionWithBalance,d=e.optionsWidth,u=Object(E.a)(e,U);return Object(k.jsx)(B.a,Object(n.a)(Object(n.a)({value:(null===t||void 0===t?void 0:t.symbol)||"",className:Object(b.a)(R.a.select,a),classes:{arrow:R.a.arrow,options:Object(b.a)(R.a.selectOptions,null===i||void 0===i?void 0:i.options)},onChange:function(e){return r(o.find((function(t){return t.symbol===e}))||o[0])},frontComponent:Object(k.jsxs)("div",{className:R.a.selectFront,children:[Object(k.jsx)(S.a,{className:R.a.coinImg,coin:(null===t||void 0===t?void 0:t.symbol)||""}),Object(k.jsx)("span",{className:R.a.selectFrontLabel,children:null===t||void 0===t?void 0:t.name}),l&&Object(k.jsx)("span",{className:R.a.coinSymbol,children:null===t||void 0===t?void 0:t.symbol})]}),optionsWidth:d},u),{},{children:o.map((function(e,t){return Object(k.jsx)(L,{disabled:e.symbol===(null===c||void 0===c?void 0:c.symbol),value:e.symbol,label:e.name,balance:e.balance,withBalance:s},"".concat(e.symbol,"_").concat(t))}))}))},X=a(771),Z=a.n(X),J=function(e){var t=e.value,a=e.setValue,i=e.adornment,o=e.className,r=e.inputData;return Object(k.jsxs)("div",{className:Object(b.a)(Z.a.coinInputWrapper,o),children:[Object(k.jsx)("input",Object(n.a)(Object(n.a)({},r),{},{value:t,onChange:function(e){!function(e,t){isNaN(Number(e))||t(e)}(e.target.value,a)},placeholder:"0.00000000"})),i]})},G=a(22),Y=a(772),z=a.n(Y),K=function(e){var t,a,n=e.data,o=e.convertedFrom,r=e.setConvertedFrom,c=e.convertedTo,l=e.setConvertedTo,d=e.fromValue,u=e.setFromValue,p=e.toValue,m=(e.loading,e.handleBalance),j=e.handleMakeTrade,v=e.convertLoading,h=e.isSmall,x=e.chatIsOpen,O=Object(P.a)().width,f=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e=o?.01/o.price:0;u(String(e.toFixed(8)))}),[o]),Object(k.jsxs)("div",{className:Object(b.a)(z.a.coinExchangeWrapper,Object(i.a)({},z.a.chatIsOpen,x&&!h)),children:[Object(k.jsxs)("div",{className:z.a.convert,ref:f,children:[h&&Object(k.jsx)("div",{className:z.a.title,children:"Convert from"}),Object(k.jsxs)("div",{className:z.a.coinWrapper,children:[Object(k.jsx)(Q,{className:z.a.coinSelect,classes:{options:z.a.selectOptions},value:o,onChange:r,coins:n,disabledOption:c,withSymbol:O>380,optionWithBalance:!0,optionsWidth:null===(t=f.current)||void 0===t?void 0:t.getBoundingClientRect().width}),Object(k.jsx)(J,{value:d,setValue:u,className:z.a.coinSelect,inputData:{onBlur:function(){0===d.length&&u("0")}},adornment:Object(k.jsx)(F.a,{className:z.a.maxButton,onClick:function(){return m(o?o.symbol:"")},children:"MAX"})})]})]}),Object(k.jsx)(F.a,{className:z.a.swapButton,onClick:function(){if(o&&c){var e=o;r(c),l(e),u(p)}},children:Object(k.jsx)(G.P,{className:z.a.swapIcon})}),Object(k.jsxs)("div",{className:z.a.convert,children:[h&&Object(k.jsx)("div",{className:z.a.title,children:"Convert to"}),Object(k.jsxs)("div",{className:z.a.coinWrapper,children:[Object(k.jsx)(Q,{className:z.a.coinSelect,classes:{options:z.a.selectOptions},value:c,onChange:l,coins:n,disabledOption:o,optionWithBalance:!0,optionsWidth:null===(a=f.current)||void 0===a?void 0:a.getBoundingClientRect().width}),Object(k.jsx)("div",{className:z.a.convert_toValue,children:Object(k.jsx)("span",{children:p})})]})]}),Object(k.jsx)(F.a,{className:Object(b.a)(z.a.convertButton,"purpleButton"),onClick:j,disabled:v||Number(d)<=0,children:v?y:"Convert"})]})},q=a(32),$=a(29),ee=a(77),te=function(){var e=Object(p.b)().chatIsOpen,t=Object(v.j)(),a=t.coins,d=t.getCoins,h=function(){var e,t=Object(v.i)().user,a=Object(s.useState)(1),n=Object(l.a)(a,2),i=n[0],o=n[1],r=Object($.a)("/exchange/get-quote",{method:"POST"}),c=Object(l.a)(r,2),d=c[0],u=c[1],b=u.data,p=u.isLoading,m=u.error,j=Object($.a)("/exchange/list",{method:"POST"}),h=Object(l.a)(j,2),x=h[0],O=h[1],f=O.data,_=O.isLoading,g=O.error,y=Object($.a)("/exchange/swap",{method:"POST",onSuccess:function(e){e.success&&x({data:{page:i}}),q.b[e.success?"success":"error"]({message:e.message,timeOut:5e3})}}),N=Object(l.a)(y,1)[0];return Object(s.useEffect)((function(){t&&x({data:{page:i}})}),[null===t||void 0===t?void 0:t.user_id,i]),{convert:{method:d,loading:p,error:m,data:null===b||void 0===b||null===(e=b.data)||void 0===e?void 0:e.amount2},trades:{method:x,loading:_,error:g,data:null===f||void 0===f?void 0:f.data.exchanges},makeTrade:N,page:i,setPage:o,totalPages:null===f||void 0===f?void 0:f.data.total_pages}}(),x=h.convert,O=h.trades,f=h.makeTrade,H=h.page,M=h.setPage,P=h.totalPages,F=Object(s.useState)("0"),E=Object(l.a)(F,2),S=E[0],B=E[1],I=Object(s.useState)(null),R=Object(l.a)(I,2),A=R[0],D=R[1],V=Object(s.useState)(null),L=Object(l.a)(V,2),U=L[0],Q=L[1],X=Object(m.b)(w),Z=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={amount1:S,estimated_amount2:x.data,coin1:(null===A||void 0===A?void 0:A.symbol)||"",coin2:(null===U||void 0===U?void 0:U.symbol)||""},e.next=3,f({data:t});case 3:J(S,A,U);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=Object(s.useCallback)(u()((function(e,t,a){if(e&&t&&a){var n={amount1:e,coin1:t.symbol,coin2:a.symbol};x.method({data:n})}}),500),[]);Object(s.useEffect)((function(){J(S,A,U)}),[S,U,A]),Object(s.useEffect)((function(){!a||A||U||(D(a[0]),Q(a[1]))}),[a]);var G={pagination:{page:H,pageAmount:null!==P&&void 0!==P?P:0,setPage:M},loading:O.loading};return Object(k.jsxs)(j.a,{title:"Exchange",descriptionUnderTitle:"All exchange orders are executed instantly in the blink of an eye. Don't believe it? Try yourself!",className:Object(b.a)(W.a.wrapper,Object(i.a)({},W.a.chatIsOpen,!X&&e)),classes:{header:W.a.header},metaInformation:[{name:"title",content:"Exchange"},{name:"description",content:"Exchange over 13 different cryptocurrencies on FaucetPay instantly in the blink of an eye with low fees. "},{name:"keywords",content:"FaucetPay coin swap, coin swap, FaucetPay exchange, FaucetPay swap, Faucet Exchange, Faucet swap, "}],disableBreadcrumbs:!0,children:[Object(k.jsx)(K,{data:a||[],convertedFrom:A,setConvertedFrom:D,convertedTo:U,setConvertedTo:Q,fromValue:S,setFromValue:B,toValue:x.loading?y:x.data?x.data:N,loading:!!a,handleBalance:function(e){var t=a.find((function(t){return t.symbol===e}));t&&B(Object(ee.toDecimal)(t.balance).toFixed(8))},handleMakeTrade:Object(c.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:d();case 3:case"end":return e.stop()}}),e)}))),convertLoading:O.loading,isSmall:X,chatIsOpen:e}),Object(k.jsx)("span",{className:W.a.tableTitle,children:"Trade History"}),Object(k.jsx)(_,{catchComponent:Object(k.jsx)(g.c,{columns:[],rows:[],empty:{description:"Something went wrong"}}),children:Object(k.jsx)(g.c,Object(n.a)({columns:X?[{field:"id",headerName:"ID"},{field:"converted",headerName:"Amount Converted",valueRender:function(e){var t=e.value;return e.loading?Object(k.jsx)("div",{className:"skeleton"}):Object(k.jsxs)("span",{children:[Object(C.a)((null===t||void 0===t?void 0:t.amount)||0)," ",null===t||void 0===t?void 0:t.coin]})}},{field:"received",headerName:"Amount Received",valueRender:function(e){var t=e.value;return e.loading?Object(k.jsx)("div",{className:"skeleton"}):Object(k.jsxs)("span",{children:[Object(C.a)((null===t||void 0===t?void 0:t.amount)||0)," ",null===t||void 0===t?void 0:t.coin]})}},{field:"datetime",headerName:"Date",valueRender:function(e){var t=e.value;return e.loading?Object(k.jsx)("div",{className:"skeleton"}):Object(k.jsx)("span",{className:W.a.tableAmount,children:T(t)})}}]:[{field:"id",headerName:"ID"},{field:"converted",headerName:"Amount Converted",valueRender:function(e){var t=e.value;return e.loading?Object(k.jsx)("div",{className:"skeleton"}):Object(k.jsxs)("span",{children:[Object(C.a)((null===t||void 0===t?void 0:t.amount)||0)," ",null===t||void 0===t?void 0:t.coin]})}},{field:"received",headerName:"Amount Received",valueRender:function(e){var t=e.value;return e.loading?Object(k.jsx)("div",{className:"skeleton"}):Object(k.jsxs)("span",{children:[Object(C.a)((null===t||void 0===t?void 0:t.amount)||0)," ",null===t||void 0===t?void 0:t.coin]})}},{field:"datetime",headerName:"Date",valueRender:function(e){var t=e.value;return e.loading?Object(k.jsx)("div",{className:"skeleton"}):Object(k.jsx)("span",{className:W.a.tableAmount,children:T(t)})}}],rows:function(){var e=[];if(O.data){var t,a=Object(o.a)(O.data);try{for(a.s();!(t=a.n()).done;){var n=t.value,i={id:Number(n.id),converted:{amount:n.amount1||"0",coin:n.coin1||""},received:{amount:n.amount2||"0",coin:n.coin2||""},datetime:n.datetime||""};e.push(i)}}catch(r){a.e(r)}finally{a.f()}}return e}(),empty:{description:"You haven't exchanged coins yet."},classes:{root:Object(b.a)("grayTable_rawWrapper",W.a.rawWrapper),header:Object(b.a)("grayTable_header",W.a.table_header),row:Object(b.a)("grayTable_row",W.a.table_row),pagination:W.a.pagination,paginationActive:W.a.paginationActive},isMobile:X},G))})]})};t.default=te},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(16),i=a(20),o=a(51),r=a.n(o),c=a(0),l=["coin","alt","className"],s=function(e){var t=e.coin,a=e.alt,o=e.className,s=Object(i.a)(e,l);return t?"usd"===(null===t||void 0===t?void 0:t.toLowerCase())?Object(c.jsx)("p",{className:r.a.usd,children:"USD"}):Object(c.jsx)("img",Object(n.a)(Object(n.a)({src:"/assets/".concat((t||"").toLowerCase(),".png"),alt:a||t},s),{},{className:o})):null}},27:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if(!e&&0!==e)return"".concat(e);var a=Number(e).toFixed(t),n=a.match(/^[^.]+?(?=\.0*$)|^[^.]+?\..*?(?=0*$)|^[^.]*$/g);return n?n[0]:a}},28:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var n=function(e){return e[e.TOP=0]="TOP",e[e.BOTTOM=1]="BOTTOM",e}({}),i=function(e){return e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e}({})},33:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"a",(function(){return v}));var n=a(19),i=a(17),o=a(3),r=a(1467),c=a(15),l=a(47),s=a(36),d=a(35),u=a(22),b=a(62),p=a.n(b),m=a(0),j=Object(o.createContext)({setValue:function(){},value:""}),v=function(e){var t=e.children,a=e.onChange,b=e.onCloseCallback,v=e.value,h=e.className,x=e.frontComponent,O=e.classes,f=e.disabled,_=e.topLabel,g=e.errors,y=e.optionsScrollCallback,N=e.optionsWidth,w=e.optionsPosition,H=Object(o.useState)(!1),C=Object(i.a)(H,2),M=C[0],W=C[1],k=Object(o.useRef)({left:0,top:0,selectHeight:0,selectWidth:0}),T=Object(o.useRef)(null),P=function(){W(!1),b&&b()};return Object(l.a)("scroll",P,document),Object(o.useEffect)((function(){if(T.current&&y&&M){var e=Object(r.a)(T.current,"scroll").subscribe(y);return function(){e.unsubscribe()}}}),[M]),Object(m.jsxs)("div",{className:Object(c.a)(h,p.a.select,null===O||void 0===O?void 0:O.root),onClick:function(e){if(!f){var t=e.currentTarget.getBoundingClientRect(),a=t.top,n=t.left,i=t.height,o=t.width;k.current={top:a+(null!==w&&void 0!==w&&w.top?null===w||void 0===w?void 0:w.top:0),left:n+(null!==w&&void 0!==w&&w.left?null===w||void 0===w?void 0:w.left:0),selectHeight:i,selectWidth:o},W(!0)}},children:[_&&Object(m.jsx)("label",{className:Object(c.a)(p.a.topLabel,null===O||void 0===O?void 0:O.topLabel),children:_}),g&&Object(m.jsx)(s.a,{className:null===O||void 0===O?void 0:O.error,errors:g}),x||Object(m.jsx)("div",{className:p.a.labelWrapper,children:Object(m.jsx)("span",{className:null===O||void 0===O?void 0:O.label,children:v})}),Object(m.jsx)(u.p,{className:Object(c.a)(p.a.arrow,null===O||void 0===O?void 0:O.arrow,Object(n.a)({},p.a.arrowOpen,M))}),Object(m.jsx)(j.Provider,{value:{setValue:function(e){a(e),P()},value:v},children:M?Object(m.jsx)(d.a,{curtainOnClick:P,children:Object(m.jsx)("div",{ref:function(e){e&&(!function(e,t,a,n){var i,o,r=t.top+t.selectHeight,c=e.offsetHeight,l=window.innerHeight-r,s=r;l<c&&(s-=c-l+10),e.style.top="".concat(null!==(i=null===n||void 0===n?void 0:n.top)&&void 0!==i?i:s,"px"),e.style.left="".concat(null!==(o=null===n||void 0===n?void 0:n.left)&&void 0!==o?o:t.left,"px"),e.style.width="".concat(null!==a&&void 0!==a?a:t.selectWidth,"px")}(e,k.current,N),T.current=e)},className:Object(c.a)(p.a.optionContainer,null===O||void 0===O?void 0:O.options),children:o.Children.count(t)?t:Object(m.jsx)("div",{className:Object(c.a)(p.a.noOptionsItem,null===O||void 0===O?void 0:O.noOptionItem),children:"No matches found"})})}):null})]})}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(11),i=a(15),o=a(44),r=a(47),c=a(40),l=a(45),s=a.n(l),d=a(0),u=Object(c.a)("key"),b=function(e){e.stopPropagation()},p=Object(o.a)(),m=function(e){var t=e.children,a=e.background,o=void 0===a?"transparent":a,c=e.curtainOnClick,l=e.curtainOnMove,m=e.classes;return Object(r.a)("keydown",(function(e){e.stopPropagation(),u(e)&&"Escape"===(null===e||void 0===e?void 0:e.key)&&c&&c()})),p?Object(n.createPortal)(Object(d.jsx)("div",{className:Object(i.a)(s.a.root,null===m||void 0===m?void 0:m.root),onClick:b,children:Object(d.jsxs)("div",{className:Object(i.a)(s.a.container,null===m||void 0===m?void 0:m.container),children:[Object(d.jsx)("div",{onPointerMove:l,onClick:function(){c&&c()},className:Object(i.a)(s.a.curtain,"transparent"===o?s.a.curtain__transparent:s.a.curtain__dark,null===m||void 0===m?void 0:m.curtain)}),t]})}),p):null}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(15),i=a(0),o=function(e){var t=e.errors,a=e.className;return Object(i.jsx)("span",{className:Object(n.a)("inputErrorText",a),children:Array.isArray(t)?t.join(", "):t})}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(16),i=a(3),o=a(15),r=a(0),c=function(e,t){return Object(r.jsx)("svg",Object(n.a)(Object(n.a)({width:"38",height:"38",viewBox:"0 0 38 38",stroke:"currentColor",ref:t},e),{},{children:Object(r.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(r.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(r.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(r.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))},l=Object(i.forwardRef)(c),s=a(49),d=a.n(s),u=function(e){var t=e.size,a=e.color,i=e.className,c=e.style,s="number"===typeof t?"".concat(t,"px"):t;return Object(r.jsx)(l,{id:"loader",className:Object(o.a)(d.a.loader,i),style:Object(n.a)(Object(n.a)({},c),{},{color:a}),ref:function(e){if(e){var t=e.getBoundingClientRect(),a=t.height,n=t.width,i=Math.min(a,n);i||(i=40),e.style.width=s||"".concat(i,"px"),e.style.height=s||"".concat(i,"px")}}})},b=u},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return function(t){if(!t)return!1;var a=t[e];return!!a||0===a}}},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(e,t){var a,n;if(e.loading!==t.loading||e.isMobile!==t.isMobile||(null===(a=e.pagination)||void 0===a?void 0:a.pageAmount)!==(null===(n=t.pagination)||void 0===n?void 0:n.pageAmount))return!1;var i=e.rows,o=t.rows;if(i.length!==o.length)return!1;if(e.includeHeader!==t.includeHeader)return!1;try{for(var r=0;r<i.length;r++){var c=Object.values(i[r]),l=Object.values(o[r]);if(c.length!==l.length)return!1;for(var s=0;s<c.length;s++)if(c[s]!==l[s])return!1}}catch(d){return!0}return!0},i=function(e){return null==e}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){var e=document.getElementById("pop-up");if(!e){console.warn('There is no "#pop-up" element in the DOM tree');var t=document.createElement("div");t.setAttribute("id","pop-up"),document.body.appendChild(t),e=t}return e}},45:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",root:"style_root__3NCA8",curtain:"style_curtain__35fo1",curtain__transparent:"style_curtain__transparent__1llnV",curtain__dark:"style_curtain__dark__3R5g5",container:"style_container__8N2Qx"}},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(16),i=a(3),o=a(33),r=function(e){var t=e.children,a=e.value,r=Object(i.useContext)(o.b).setValue,c=i.Children.only(t);return Object(i.cloneElement)(t,Object(n.a)(Object(n.a)({},c.props),{},{ref:function(e){var t;"function"===typeof(null===c||void 0===c?void 0:c.ref)?c.ref(e):null!==(t=c.ref)&&void 0!==t&&t.hasOwnProperty("current")&&(c.ref.current=e)},onClick:function(){return r(a)}}))}},49:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",loader:"style_loader__iNURN"}},51:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",usd:"style_usd__1ktyr"}},53:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return b})),a.d(t,"c",(function(){return w})),a.d(t,"b",(function(){return W}));var n=a(3),i=a.n(n),o=a(15),r=a(57),c=a.n(r),l=a(0),s=function(e){var t=e.row,a=e.columns,i=e.loading,r=e.isMobile,s=e.withoutDefaultStyles,d=e.className;return Object(l.jsx)("div",{className:Object(o.a)(c.a.rowWrapper,!s&&"standardTable_row",d),children:a.map((function(e,a){return i?Object(l.jsx)("div",{className:"skeleton"},"".concat(e.field,"_").concat(a)):Object.keys(t).includes(e.field)?e.valueRender?Object(l.jsx)(n.Fragment,{children:e.valueRender({index:a,loading:i,src:t,mobile:r,value:t[e.field]})},"".concat(e.field,"_").concat(a)):Object(l.jsx)("span",{children:t[e.field]},"".concat(e.field,"_").concat(a)):null}))})},d=a(58),u=a.n(d),b=function(e){var t=e.description,a=e.classes;return Object(l.jsxs)("div",{className:Object(o.a)(u.a.wrapper,null===a||void 0===a?void 0:a.root),children:[Object(l.jsx)("span",{className:Object(o.a)(u.a.title,null===a||void 0===a?void 0:a.title),children:"Whoops!"}),Object(l.jsx)("div",{className:Object(o.a)(u.a.description,null===a||void 0===a?void 0:a.description),children:t||"There are no data to show you."}),Object(l.jsx)("img",{className:null===a||void 0===a?void 0:a.image,src:"/images/empty.webp",alt:"empty"})]})},p=a(16),m=a(20),j=a(18),v=a(22),h=a(59),x=a.n(h),O=["maxButtonVisible","showPrevNextButton","showFirstLastPage","page","pageAmount","classes","onChange","disabled"],f=function(e){var t=e.className;return Object(l.jsx)("span",{className:Object(o.a)(x.a.skip,t),children:"..."})},_=function(e){var t=e.maxButtonVisible,a=void 0===t?3:t,n=e.showPrevNextButton,r=e.showFirstLastPage,c=e.page,s=e.pageAmount,d=e.classes,u=e.onChange,b=e.disabled,h=Object(m.a)(e,O),_=function(){for(var e=[],t=Math.floor(a/2),n=Math.max(c-t,1),p=Math.min(c+t,s),m=function(t){var a=t===c,i=Object(l.jsx)(j.a,{onClick:function(){return u&&u(t)},disabled:a||b,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button,a&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:t},t);(1===t||t===s)&&r||(e.push(i),t===p&&p+1<s?e.push(Object(l.jsx)(f,{className:null===d||void 0===d?void 0:d.skip})):t===n&&n-1>1&&e.splice(e.length-2,0,Object(l.jsx)(f,{className:null===d||void 0===d?void 0:d.skip})))},v=n;v<=p;v++)m(v);return Object(l.jsx)(l.Fragment,{children:e.map((function(t,a){return Object(l.jsx)(i.a.Fragment,{children:t},"".concat(t.key,"_").concat(a,"_").concat(e.length))}))})},g=1===c||b,y=c===s||b;return Object(l.jsxs)("div",Object(p.a)(Object(p.a)({className:Object(o.a)(x.a.root,null===d||void 0===d?void 0:d.root)},h),{},{children:[n&&Object(l.jsx)(j.a,{onClick:function(){return u&&u(Math.max(1,c-1))},disabled:g,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button),children:Object(l.jsx)(v.J,{})}),r&&Object(l.jsx)(j.a,{onClick:function(){return u&&u(1)},disabled:g,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button,1===c&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:"1"}),Object(l.jsx)(_,{}),r&&s>1&&Object(l.jsx)(j.a,{onClick:function(){return u&&u(s)},disabled:y,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button,c===s&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:s}),n&&Object(l.jsx)(j.a,{onClick:function(){return u&&u(Math.min(s,c+1))},disabled:y,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button),children:Object(l.jsx)(v.J,{})})]}))},g=a(28),y=a(60),N=a.n(y),w=function(e){var t=e.page,a=e.pageAmount,n=e.setPage,i=e.loading,r=e.direction,c=e.classes;return Object(l.jsx)(_,{page:t,pageAmount:a,onChange:n,disabled:i,showFirstLastPage:!0,showPrevNextButton:!0,style:{justifyContent:r===g.a.LEFT?"flex-start":r===g.a.RIGHT?"flex-end":"center"},classes:{root:Object(o.a)("standardPagination",N.a.pagination,null===c||void 0===c?void 0:c.pagination),button:"standardPagination_button",activePage:Object(o.a)("standardPagination_active",null===c||void 0===c?void 0:c.paginationActive)}})},H=a(42),C=a(61),M=a.n(C),W=function(e){var t=e.data,a=e.loading,n=e.cardTypes,i=e.classes;return Object(l.jsx)("div",{className:Object(o.a)(M.a.wrapper,"standardTableCard",null===i||void 0===i?void 0:i.row),children:n.map((function(e,n){return Object(l.jsxs)("div",{className:Object(o.a)(M.a.cardValueWrapper,null!==i&&void 0!==i&&i.elements?null===i||void 0===i?void 0:i.elements[n]:""),children:[Object(l.jsx)("span",{className:M.a.cardTitle,children:e.headerName}),!t||Object(H.b)(t[e.field])?Object(l.jsx)("div",{className:"skeleton"}):e.valueRender?e.valueRender({value:t[e.field],loading:a,src:t,index:n,mobile:!0}):a?Object(l.jsx)("div",{className:"skeleton"}):Object(l.jsx)("span",{className:"cardValue",children:t[e.field]})]},"".concat(e.field,"__").concat(n))}))})}},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(15),i=a(18),o=a(22),r=a(56),c=a.n(r),l=a(0),s=function(e){var t=e.currentPage,a=e.isNextPageExist,r=e.setPage,s=e.className,d=Number(t);return Object(l.jsxs)("div",{className:Object(n.a)(c.a.infinityPagination,s),children:[Object(l.jsx)(i.a,{disabled:d<=1,onClick:function(){return r(d-1)},children:Object(l.jsx)(o.p,{})}),Object(l.jsx)(i.a,{disabled:!a,onClick:function(){return r(d+1)},children:Object(l.jsx)(o.p,{})})]})}},56:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",infinityPagination:"style_infinityPagination__oNkra"}},57:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",rowWrapper:"style_rowWrapper__3zn_i"}},58:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"styles_wrapper__2NARE",title:"styles_title__163RY",description:"styles_description__35S5N"}},59:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",button:"style_button__ilHkP",skip:"style_skip__Bq5pO"}},60:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",pagination:"style_pagination__1yOml"}},61:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__6fuBt",cardValueWrapper:"style_cardValueWrapper__2gUA0",cardTitle:"style_cardTitle__3u3ae"}},614:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__g_y4G",header:"style_header__3ii45",tableAmount:"style_tableAmount__2ZVhv",pagination:"style_pagination__2xnz0",paginationActive:"style_paginationActive__e10Xw",titleWrapper:"style_titleWrapper__24gWR",tableTitle:"style_tableTitle__3GreD",title:"style_title__1wGw7",description:"style_description__3EkE8",table_header:"style_table_header__2EgXF",table_row:"style_table_row__1_pG6",coinImg:"style_coinImg__2pEuW",coinWrapper:"style_coinWrapper__1tEQp",chatIsOpen:"style_chatIsOpen__3n6KB",rawWrapper:"style_rawWrapper__18uNM",exchangeWrapper:"style_exchangeWrapper__zIi-f"}},62:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",select:"style_select__1SCn2",labelWrapper:"style_labelWrapper__1XecV",topLabel:"style_topLabel__154X5",arrow:"style_arrow__2T4YY",arrowOpen:"style_arrowOpen__1eSQN",optionContainer:"style_optionContainer__3aCvv",expandSelect:"style_expandSelect__3_3EW",noOptionsItem:"style_noOptionsItem__1kpIk"}},63:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(3),i=a.n(n),o=a(15),r=a(39),c=a(64),l=a.n(c),s=a(0),d=function(e){var t=e.data,a=e.delimiter,n=void 0===a?"/":a,c=e.className;return Object(s.jsx)("div",{className:Object(o.a)(l.a.breadCrumbsWrapper,c),children:t.map((function(e,a){var c=a+1===t.length;return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)(r.b,{to:{pathname:e.path},className:Object(o.a)(l.a.name,c&&l.a.name_active),children:e.name}),!c&&Object(s.jsx)("div",{className:l.a.name,children:n})]},e.name)}))})}},64:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",breadCrumbsWrapper:"style_breadCrumbsWrapper__Yd1D_",name:"style_name__3oD0Y",name_active:"style_name_active__fb4UQ"}},68:function(e,t,a){"use strict";a.d(t,"b",(function(){return O})),a.d(t,"a",(function(){return f}));var n=a(19),i=a(16),o=a(17),r=a(34),c=a(82),l=a(15),s=a(3),d=a(23),u=a(63),b=a(31),p=a(22),m=a(70),j=a.n(m),v=a(0),h=Object(s.lazy)((function(){return Object(b.a)(Promise.all([a.e(7),a.e(122)]).then(a.bind(null,305)))})),x=Object(s.createContext)({setCustomPathnames:function(){},setCustomTitle:function(){}}),O=function(){return Object(s.useContext)(x)},f=function(e){var t=e.title,a=e.metaTitle,b=e.metaName,m=e.metaContent,O=e.metaInformation,f=e.headComponent,_=e.children,g=e.customPathnames,y=void 0===g?{}:g,N=e.paths,w=e.classes,H=e.className,C=e.titleCompanion,M=e.description,W=e.includeDescription,k=e.bannerComponent,T=e.disableBreadcrumbs,P=e.descriptionUnderTitle,F=e.goToPreviousPageHandler,E=Object(s.useState)({}),S=Object(o.a)(E,2),B=S[0],I=S[1],R=Object(r.h)().pathname,A=Object(s.useState)(t),D=Object(o.a)(A,2),V=D[0],L=D[1],U=Object(r.g)(),Q=Object(s.useMemo)((function(){if(N)return N;var e=(R||"").split("/"),t=["/"];return e.forEach((function(a,n){!a||n<1||t.push("".concat(e.slice(0,n+1).join("/")))})),Object.values(d.m).filter((function(e){return t.includes(e.pathName)}))}),[R]);return y=Object(i.a)(Object(i.a)({},y),B),Object(s.useEffect)((function(){V!==t&&L(t)}),[t]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(c.a,{children:[Object(v.jsx)("title",{children:"".concat(a||V," | FaucetPay")}),b&&m&&Object(v.jsx)("meta",{name:b,content:m}),null===O||void 0===O?void 0:O.map((function(e,t){return Object(s.createElement)("meta",Object(i.a)(Object(i.a)({},e),{},{key:t}))}))]}),Object(v.jsxs)("main",{className:Object(l.a)(j.a.page,H),children:[T?null:Object(v.jsx)(u.a,{className:j.a.path,data:Q.map((function(e){var t=(null===e||void 0===e?void 0:e.pageName)||"";return{path:e.pathName,name:y[t]||t}}))}),k,Object(v.jsxs)("div",{className:Object(l.a)(j.a.header,null===w||void 0===w?void 0:w.header,Object(n.a)({},j.a.withoutMargin,!!P)),children:[Object(v.jsxs)("div",{className:Object(l.a)(j.a.title,null===w||void 0===w?void 0:w.title),children:[Object(v.jsxs)("h1",{children:[Q.length>2||F?Object(v.jsx)(p.w,{className:j.a.backIcon,onClick:F?function(){return F(U)}:function(){return U.push(Q[Q.length-2].pathName)}}):null,Object(v.jsx)("span",{children:V})]}),W?Object(v.jsx)(v.Fragment,{children:!C&&null!==C&&M?Object(v.jsx)(s.Suspense,{fallback:null,children:Object(v.jsx)(h,{description:M})}):null}):null,C]}),f]}),P?Array.isArray(P)?Object(v.jsx)("div",{className:j.a.underTitleWrapper,children:P.map((function(e,t){return Object(v.jsx)("span",{className:Object(l.a)(j.a.descriptionUnderTitle,null===w||void 0===w?void 0:w.underTitle),children:e},t)}))}):Object(v.jsx)("span",{className:Object(l.a)(j.a.descriptionUnderTitle,null===w||void 0===w?void 0:w.underTitle),children:P}):null,Object(v.jsx)(x.Provider,{value:{setCustomPathnames:I,setCustomTitle:L},children:_})]})]})}},70:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",page:"style_page__Z1qqe",header:"style_header__Srtbr",withoutMargin:"style_withoutMargin__bPQOB",descriptionUnderTitle:"style_descriptionUnderTitle__1lPn1",underTitleWrapper:"style_underTitleWrapper__2B6BZ",title:"style_title__3idsH",backIcon:"style_backIcon__U4FPm",path:"style_path__3jhjp"}},76:function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return s.b})),a.d(t,"a",(function(){return s.a}));var n=a(16),i=a(3),o=a(15),r=a(37),c=a(55),l=a(53),s=a(28),d=a(42),u=a(86),b=a.n(u),p=a(0),m=function(e){var t=e.rows,a=e.columns,d=e.loading,u=void 0!==d&&d,m=e.includeHeader,j=void 0===m||m,v=e.classes,h=e.pagination,x=e.isMobile,O=void 0!==x&&x,f=e.styles,_=e.withoutDefaultStyles,g=void 0!==_&&_,y=e.withoutSkeletons,N=void 0!==y&&y,w=e.empty,H=e.infinityPagination,C=e.circular,M=void 0===C||C,W=e.skeletonRows,k=void 0===W?5:W,T=e.RowWrapper,P=e.compact,F=e.compactClasses,E=function(){return h&&t.length>0?Object(p.jsx)(l.c,Object(n.a)({loading:u,classes:v},h)):null},S=u&&!N?Array.from(Array(k).map((function(e,t){return{key:String(t)}}))):t;return Object(p.jsxs)("div",{className:Object(o.a)(b.a.wrapper,null===v||void 0===v?void 0:v.global,u&&M&&b.a.wrapper__load),style:{"--table-column-count":a.length},children:[(null===h||void 0===h?void 0:h.position)===s.b.TOP&&Object(p.jsx)(E,{}),Object(p.jsxs)("div",{className:Object(o.a)(b.a.tableWrapper,!g&&"standardTable",null===v||void 0===v?void 0:v.root),children:[j&&Object(p.jsx)("div",{className:Object(o.a)(b.a.headerWrapper,!g&&"standardTable_header",null===v||void 0===v?void 0:v.header),style:null===f||void 0===f?void 0:f.header,children:a.map((function(e,t){return e.headerName?e.headerRender?Object(p.jsx)(i.Fragment,{children:e.headerRender(e.headerName)},"key_#".concat(t)):Object(p.jsx)("span",{children:e.headerName},"key_#".concat(t)):null}))}),u||0!==t.length?null===S||void 0===S?void 0:S.map((function(e,t){return P?Object(p.jsx)(l.b,{cardTypes:a,loading:u&&!N,classes:F,data:e},(null===e||void 0===e?void 0:e.key)||t):T?Object(p.jsx)(T,{data:e,loading:u&&!N},t):Object(p.jsx)(l.d,{loading:u&&!N,isMobile:O,row:e,columns:a,withoutDefaultStyles:g,className:null===v||void 0===v?void 0:v.row},(null===e||void 0===e?void 0:e.key)||t)})):null!==w&&void 0!==w&&w.disable?null:Object(p.jsx)(l.a,{description:null===w||void 0===w?void 0:w.description,classes:null===w||void 0===w?void 0:w.classes})]}),(null===h||void 0===h?void 0:h.position)!==s.b.TOP&&Object(p.jsx)(E,{}),H&&Object(p.jsx)("div",{className:b.a.infinityPagination,children:Object(p.jsx)(c.a,Object(n.a)({},H))}),u&&M&&Object(p.jsx)(r.a,{size:86,className:b.a.loader})]})};d.a},769:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",coinImg:"style_coinImg__3EomU",select:"style_select__3XNrm",selectOptions:"style_selectOptions__rdNhZ",selectFront:"style_selectFront__3nX1d",selectFrontLabel:"style_selectFrontLabel__lZcf5",coinSymbol:"style_coinSymbol__1ISZO",arrow:"style_arrow__lWRNQ"}},77:function(e,t,a){"use strict";a.r(t),a.d(t,"toDecimal",(function(){return r}));var n=a(52);for(var i in n)["default","toDecimal"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);var o=a(94);a.d(t,"DECIMAL_ZERO",(function(){return o.a}));var r=function(e){return new n.Decimal(""===e?0:e)}},770:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",item:"style_item__2JrYy",itemDisabled:"style_itemDisabled__A0NJn",coinSymbol:"style_coinSymbol__1bJjj"}},771:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",coinInputWrapper:"style_coinInputWrapper__2ykmL"}},772:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",coinExchangeWrapper:"style_coinExchangeWrapper__3Q0HK",convert:"style_convert__1hYVd",title:"style_title__ro3y1",text_value:"style_text_value__16foo",coinWrapper:"style_coinWrapper__1C4KB",coinSelect:"style_coinSelect__1roA9",convert_toValue:"style_convert_toValue__3nEQL",swapButton:"style_swapButton__1TQW5",swapIcon:"style_swapIcon__2hzIj",convertButton:"style_convertButton__2F4OX",maxButton:"style_maxButton__wDhpM",chatIsOpen:"style_chatIsOpen__G12Z_",selectOptions:"style_selectOptions__1JUiE"}},86:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__2s3Hy",wrapper__load:"style_wrapper__load__1d-Vt",tableWrapper:"style_tableWrapper__2TgKP",emptyRow:"style_emptyRow__BgPtv",tableColumn:"style_tableColumn__3XQKo",pagination:"style_pagination__1JTZ8",headerWrapper:"style_headerWrapper__1PhIX",value:"style_value__3pvNZ",loader:"style_loader__1mOu7",circular:"style_circular__k6V9E",infinityPagination:"style_infinityPagination__2KE3y"}}}]);
//# sourceMappingURL=50.5d923c1b.chunk.js.map