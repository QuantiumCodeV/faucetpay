(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[66],{1040:function(e,t,a){"use strict";a.r(t);var i=a(17),n=a(34),o=a(3),r=a(15),l=a(29),c=a(54),s=a(23),d=a(68),u=a(32),b=a(76),p=a(83),m=a(1041),j=a.n(m),h=a(0),x=[{field:"receivedFrom",headerName:"Received from"},{field:"amount",headerName:"Amount"},{field:"type",headerName:"type"},{field:"date",headerName:"date"}];t.default=function(){var e,t=Object(n.i)().address,a=Object(c.b)(800),m=Object(n.g)(),v=Object(l.a)("/get-address-transactions",{method:"POST",onSuccess:function(e){e.success||(u.b.error(e.message),m.replace(s.m.startPage.pathName))}}),g=Object(i.a)(v,2),f=g[0],O=g[1],_=O.isLoading,y=O.data,N=function(){f({data:{page:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,address:t}})};return Object(o.useEffect)((function(){N()}),[t]),Object(h.jsx)(d.a,{title:"Address Checker",className:j.a.addressCheckerPage,paths:[{pathName:"/",pageName:"faucetpay"},{pathName:"/page/user-admin/linked-addresses",pageName:"linked addresses"},{pathName:"/page/balance",pageName:"address checker"}],children:Object(h.jsx)(b.c,{classes:{global:Object(r.a)(j.a.table,a?j.a.mobileTable:"")},columns:x,rows:(null===y||void 0===y?void 0:y.data.transactions.map((function(e){return{receivedFrom:e.faucet_name,amount:"".concat(Object(p.a)(Number(e.amount_bitcoin))," ").concat(e.coin),date:e.date,type:e.referral_payment?"Referral Payment":"Normal"}})))||[],includeHeader:!a,compact:a,loading:_,infinityPagination:{currentPage:y?y.data.current_page:1,setPage:N,isNextPageExist:((null===y||void 0===y||null===(e=y.data)||void 0===e?void 0:e.transactions.length)||0)>=10}})})}},1041:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",table:"style_table__rDhJ8",mobileTable:"style_mobileTable__QREJH"}},28:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}));var i=function(e){return e[e.TOP=0]="TOP",e[e.BOTTOM=1]="BOTTOM",e}({}),n=function(e){return e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e}({})},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var i=a(16),n=a(3),o=a(15),r=a(0),l=function(e,t){return Object(r.jsx)("svg",Object(i.a)(Object(i.a)({width:"38",height:"38",viewBox:"0 0 38 38",stroke:"currentColor",ref:t},e),{},{children:Object(r.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(r.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(r.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(r.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))},c=Object(n.forwardRef)(l),s=a(49),d=a.n(s),u=function(e){var t=e.size,a=e.color,n=e.className,l=e.style,s="number"===typeof t?"".concat(t,"px"):t;return Object(r.jsx)(c,{id:"loader",className:Object(o.a)(d.a.loader,n),style:Object(i.a)(Object(i.a)({},l),{},{color:a}),ref:function(e){if(e){var t=e.getBoundingClientRect(),a=t.height,i=t.width,n=Math.min(a,i);n||(n=40),e.style.width=s||"".concat(n,"px"),e.style.height=s||"".concat(n,"px")}}})},b=u},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(e,t){var a,i;if(e.loading!==t.loading||e.isMobile!==t.isMobile||(null===(a=e.pagination)||void 0===a?void 0:a.pageAmount)!==(null===(i=t.pagination)||void 0===i?void 0:i.pageAmount))return!1;var n=e.rows,o=t.rows;if(n.length!==o.length)return!1;if(e.includeHeader!==t.includeHeader)return!1;try{for(var r=0;r<n.length;r++){var l=Object.values(n[r]),c=Object.values(o[r]);if(l.length!==c.length)return!1;for(var s=0;s<l.length;s++)if(l[s]!==c[s])return!1}}catch(d){return!0}return!0},n=function(e){return null==e}},49:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",loader:"style_loader__iNURN"}},53:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return b})),a.d(t,"c",(function(){return H})),a.d(t,"b",(function(){return T}));var i=a(3),n=a.n(i),o=a(15),r=a(57),l=a.n(r),c=a(0),s=function(e){var t=e.row,a=e.columns,n=e.loading,r=e.isMobile,s=e.withoutDefaultStyles,d=e.className;return Object(c.jsx)("div",{className:Object(o.a)(l.a.rowWrapper,!s&&"standardTable_row",d),children:a.map((function(e,a){return n?Object(c.jsx)("div",{className:"skeleton"},"".concat(e.field,"_").concat(a)):Object.keys(t).includes(e.field)?e.valueRender?Object(c.jsx)(i.Fragment,{children:e.valueRender({index:a,loading:n,src:t,mobile:r,value:t[e.field]})},"".concat(e.field,"_").concat(a)):Object(c.jsx)("span",{children:t[e.field]},"".concat(e.field,"_").concat(a)):null}))})},d=a(58),u=a.n(d),b=function(e){var t=e.description,a=e.classes;return Object(c.jsxs)("div",{className:Object(o.a)(u.a.wrapper,null===a||void 0===a?void 0:a.root),children:[Object(c.jsx)("span",{className:Object(o.a)(u.a.title,null===a||void 0===a?void 0:a.title),children:"Whoops!"}),Object(c.jsx)("div",{className:Object(o.a)(u.a.description,null===a||void 0===a?void 0:a.description),children:t||"There are no data to show you."}),Object(c.jsx)("img",{className:null===a||void 0===a?void 0:a.image,src:"/images/empty.webp",alt:"empty"})]})},p=a(16),m=a(20),j=a(18),h=a(22),x=a(59),v=a.n(x),g=["maxButtonVisible","showPrevNextButton","showFirstLastPage","page","pageAmount","classes","onChange","disabled"],f=function(e){var t=e.className;return Object(c.jsx)("span",{className:Object(o.a)(v.a.skip,t),children:"..."})},O=function(e){var t=e.maxButtonVisible,a=void 0===t?3:t,i=e.showPrevNextButton,r=e.showFirstLastPage,l=e.page,s=e.pageAmount,d=e.classes,u=e.onChange,b=e.disabled,x=Object(m.a)(e,g),O=function(){for(var e=[],t=Math.floor(a/2),i=Math.max(l-t,1),p=Math.min(l+t,s),m=function(t){var a=t===l,n=Object(c.jsx)(j.a,{onClick:function(){return u&&u(t)},disabled:a||b,className:Object(o.a)(null===d||void 0===d?void 0:d.button,v.a.button,a&&[v.a.active,null===d||void 0===d?void 0:d.activePage]),children:t},t);(1===t||t===s)&&r||(e.push(n),t===p&&p+1<s?e.push(Object(c.jsx)(f,{className:null===d||void 0===d?void 0:d.skip})):t===i&&i-1>1&&e.splice(e.length-2,0,Object(c.jsx)(f,{className:null===d||void 0===d?void 0:d.skip})))},h=i;h<=p;h++)m(h);return Object(c.jsx)(c.Fragment,{children:e.map((function(t,a){return Object(c.jsx)(n.a.Fragment,{children:t},"".concat(t.key,"_").concat(a,"_").concat(e.length))}))})},_=1===l||b,y=l===s||b;return Object(c.jsxs)("div",Object(p.a)(Object(p.a)({className:Object(o.a)(v.a.root,null===d||void 0===d?void 0:d.root)},x),{},{children:[i&&Object(c.jsx)(j.a,{onClick:function(){return u&&u(Math.max(1,l-1))},disabled:_,className:Object(o.a)(null===d||void 0===d?void 0:d.button,v.a.button),children:Object(c.jsx)(h.J,{})}),r&&Object(c.jsx)(j.a,{onClick:function(){return u&&u(1)},disabled:_,className:Object(o.a)(null===d||void 0===d?void 0:d.button,v.a.button,1===l&&[v.a.active,null===d||void 0===d?void 0:d.activePage]),children:"1"}),Object(c.jsx)(O,{}),r&&s>1&&Object(c.jsx)(j.a,{onClick:function(){return u&&u(s)},disabled:y,className:Object(o.a)(null===d||void 0===d?void 0:d.button,v.a.button,l===s&&[v.a.active,null===d||void 0===d?void 0:d.activePage]),children:s}),i&&Object(c.jsx)(j.a,{onClick:function(){return u&&u(Math.min(s,l+1))},disabled:y,className:Object(o.a)(null===d||void 0===d?void 0:d.button,v.a.button),children:Object(c.jsx)(h.J,{})})]}))},_=a(28),y=a(60),N=a.n(y),H=function(e){var t=e.page,a=e.pageAmount,i=e.setPage,n=e.loading,r=e.direction,l=e.classes;return Object(c.jsx)(O,{page:t,pageAmount:a,onChange:i,disabled:n,showFirstLastPage:!0,showPrevNextButton:!0,style:{justifyContent:r===_.a.LEFT?"flex-start":r===_.a.RIGHT?"flex-end":"center"},classes:{root:Object(o.a)("standardPagination",N.a.pagination,null===l||void 0===l?void 0:l.pagination),button:"standardPagination_button",activePage:Object(o.a)("standardPagination_active",null===l||void 0===l?void 0:l.paginationActive)}})},w=a(42),M=a(61),P=a.n(M),T=function(e){var t=e.data,a=e.loading,i=e.cardTypes,n=e.classes;return Object(c.jsx)("div",{className:Object(o.a)(P.a.wrapper,"standardTableCard",null===n||void 0===n?void 0:n.row),children:i.map((function(e,i){return Object(c.jsxs)("div",{className:Object(o.a)(P.a.cardValueWrapper,null!==n&&void 0!==n&&n.elements?null===n||void 0===n?void 0:n.elements[i]:""),children:[Object(c.jsx)("span",{className:P.a.cardTitle,children:e.headerName}),!t||Object(w.b)(t[e.field])?Object(c.jsx)("div",{className:"skeleton"}):e.valueRender?e.valueRender({value:t[e.field],loading:a,src:t,index:i,mobile:!0}):a?Object(c.jsx)("div",{className:"skeleton"}):Object(c.jsx)("span",{className:"cardValue",children:t[e.field]})]},"".concat(e.field,"__").concat(i))}))})}},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(15),n=a(18),o=a(22),r=a(56),l=a.n(r),c=a(0),s=function(e){var t=e.currentPage,a=e.isNextPageExist,r=e.setPage,s=e.className,d=Number(t);return Object(c.jsxs)("div",{className:Object(i.a)(l.a.infinityPagination,s),children:[Object(c.jsx)(n.a,{disabled:d<=1,onClick:function(){return r(d-1)},children:Object(c.jsx)(o.p,{})}),Object(c.jsx)(n.a,{disabled:!a,onClick:function(){return r(d+1)},children:Object(c.jsx)(o.p,{})})]})}},56:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",infinityPagination:"style_infinityPagination__oNkra"}},57:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",rowWrapper:"style_rowWrapper__3zn_i"}},58:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"styles_wrapper__2NARE",title:"styles_title__163RY",description:"styles_description__35S5N"}},59:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",button:"style_button__ilHkP",skip:"style_skip__Bq5pO"}},60:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",pagination:"style_pagination__1yOml"}},61:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__6fuBt",cardValueWrapper:"style_cardValueWrapper__2gUA0",cardTitle:"style_cardTitle__3u3ae"}},63:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a(3),n=a.n(i),o=a(15),r=a(39),l=a(64),c=a.n(l),s=a(0),d=function(e){var t=e.data,a=e.delimiter,i=void 0===a?"/":a,l=e.className;return Object(s.jsx)("div",{className:Object(o.a)(c.a.breadCrumbsWrapper,l),children:t.map((function(e,a){var l=a+1===t.length;return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)(r.b,{to:{pathname:e.path},className:Object(o.a)(c.a.name,l&&c.a.name_active),children:e.name}),!l&&Object(s.jsx)("div",{className:c.a.name,children:i})]},e.name)}))})}},64:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",breadCrumbsWrapper:"style_breadCrumbsWrapper__Yd1D_",name:"style_name__3oD0Y",name_active:"style_name_active__fb4UQ"}},68:function(e,t,a){"use strict";a.d(t,"b",(function(){return g})),a.d(t,"a",(function(){return f}));var i=a(19),n=a(16),o=a(17),r=a(34),l=a(82),c=a(15),s=a(3),d=a(23),u=a(63),b=a(31),p=a(22),m=a(70),j=a.n(m),h=a(0),x=Object(s.lazy)((function(){return Object(b.a)(Promise.all([a.e(7),a.e(122)]).then(a.bind(null,305)))})),v=Object(s.createContext)({setCustomPathnames:function(){},setCustomTitle:function(){}}),g=function(){return Object(s.useContext)(v)},f=function(e){var t=e.title,a=e.metaTitle,b=e.metaName,m=e.metaContent,g=e.metaInformation,f=e.headComponent,O=e.children,_=e.customPathnames,y=void 0===_?{}:_,N=e.paths,H=e.classes,w=e.className,M=e.titleCompanion,P=e.description,T=e.includeDescription,k=e.bannerComponent,C=e.disableBreadcrumbs,W=e.descriptionUnderTitle,F=e.goToPreviousPageHandler,R=Object(s.useState)({}),E=Object(o.a)(R,2),B=E[0],A=E[1],S=Object(r.h)().pathname,U=Object(s.useState)(t),D=Object(o.a)(U,2),I=D[0],L=D[1],V=Object(r.g)(),J=Object(s.useMemo)((function(){if(N)return N;var e=(S||"").split("/"),t=["/"];return e.forEach((function(a,i){!a||i<1||t.push("".concat(e.slice(0,i+1).join("/")))})),Object.values(d.m).filter((function(e){return t.includes(e.pathName)}))}),[S]);return y=Object(n.a)(Object(n.a)({},y),B),Object(s.useEffect)((function(){I!==t&&L(t)}),[t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.a,{children:[Object(h.jsx)("title",{children:"".concat(a||I," | FaucetPay")}),b&&m&&Object(h.jsx)("meta",{name:b,content:m}),null===g||void 0===g?void 0:g.map((function(e,t){return Object(s.createElement)("meta",Object(n.a)(Object(n.a)({},e),{},{key:t}))}))]}),Object(h.jsxs)("main",{className:Object(c.a)(j.a.page,w),children:[C?null:Object(h.jsx)(u.a,{className:j.a.path,data:J.map((function(e){var t=(null===e||void 0===e?void 0:e.pageName)||"";return{path:e.pathName,name:y[t]||t}}))}),k,Object(h.jsxs)("div",{className:Object(c.a)(j.a.header,null===H||void 0===H?void 0:H.header,Object(i.a)({},j.a.withoutMargin,!!W)),children:[Object(h.jsxs)("div",{className:Object(c.a)(j.a.title,null===H||void 0===H?void 0:H.title),children:[Object(h.jsxs)("h1",{children:[J.length>2||F?Object(h.jsx)(p.w,{className:j.a.backIcon,onClick:F?function(){return F(V)}:function(){return V.push(J[J.length-2].pathName)}}):null,Object(h.jsx)("span",{children:I})]}),T?Object(h.jsx)(h.Fragment,{children:!M&&null!==M&&P?Object(h.jsx)(s.Suspense,{fallback:null,children:Object(h.jsx)(x,{description:P})}):null}):null,M]}),f]}),W?Array.isArray(W)?Object(h.jsx)("div",{className:j.a.underTitleWrapper,children:W.map((function(e,t){return Object(h.jsx)("span",{className:Object(c.a)(j.a.descriptionUnderTitle,null===H||void 0===H?void 0:H.underTitle),children:e},t)}))}):Object(h.jsx)("span",{className:Object(c.a)(j.a.descriptionUnderTitle,null===H||void 0===H?void 0:H.underTitle),children:W}):null,Object(h.jsx)(v.Provider,{value:{setCustomPathnames:A,setCustomTitle:L},children:O})]})]})}},70:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",page:"style_page__Z1qqe",header:"style_header__Srtbr",withoutMargin:"style_withoutMargin__bPQOB",descriptionUnderTitle:"style_descriptionUnderTitle__1lPn1",underTitleWrapper:"style_underTitleWrapper__2B6BZ",title:"style_title__3idsH",backIcon:"style_backIcon__U4FPm",path:"style_path__3jhjp"}},76:function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return s.b})),a.d(t,"a",(function(){return s.a}));var i=a(16),n=a(3),o=a(15),r=a(37),l=a(55),c=a(53),s=a(28),d=a(42),u=a(86),b=a.n(u),p=a(0),m=function(e){var t=e.rows,a=e.columns,d=e.loading,u=void 0!==d&&d,m=e.includeHeader,j=void 0===m||m,h=e.classes,x=e.pagination,v=e.isMobile,g=void 0!==v&&v,f=e.styles,O=e.withoutDefaultStyles,_=void 0!==O&&O,y=e.withoutSkeletons,N=void 0!==y&&y,H=e.empty,w=e.infinityPagination,M=e.circular,P=void 0===M||M,T=e.skeletonRows,k=void 0===T?5:T,C=e.RowWrapper,W=e.compact,F=e.compactClasses,R=function(){return x&&t.length>0?Object(p.jsx)(c.c,Object(i.a)({loading:u,classes:h},x)):null},E=u&&!N?Array.from(Array(k).map((function(e,t){return{key:String(t)}}))):t;return Object(p.jsxs)("div",{className:Object(o.a)(b.a.wrapper,null===h||void 0===h?void 0:h.global,u&&P&&b.a.wrapper__load),style:{"--table-column-count":a.length},children:[(null===x||void 0===x?void 0:x.position)===s.b.TOP&&Object(p.jsx)(R,{}),Object(p.jsxs)("div",{className:Object(o.a)(b.a.tableWrapper,!_&&"standardTable",null===h||void 0===h?void 0:h.root),children:[j&&Object(p.jsx)("div",{className:Object(o.a)(b.a.headerWrapper,!_&&"standardTable_header",null===h||void 0===h?void 0:h.header),style:null===f||void 0===f?void 0:f.header,children:a.map((function(e,t){return e.headerName?e.headerRender?Object(p.jsx)(n.Fragment,{children:e.headerRender(e.headerName)},"key_#".concat(t)):Object(p.jsx)("span",{children:e.headerName},"key_#".concat(t)):null}))}),u||0!==t.length?null===E||void 0===E?void 0:E.map((function(e,t){return W?Object(p.jsx)(c.b,{cardTypes:a,loading:u&&!N,classes:F,data:e},(null===e||void 0===e?void 0:e.key)||t):C?Object(p.jsx)(C,{data:e,loading:u&&!N},t):Object(p.jsx)(c.d,{loading:u&&!N,isMobile:g,row:e,columns:a,withoutDefaultStyles:_,className:null===h||void 0===h?void 0:h.row},(null===e||void 0===e?void 0:e.key)||t)})):null!==H&&void 0!==H&&H.disable?null:Object(p.jsx)(c.a,{description:null===H||void 0===H?void 0:H.description,classes:null===H||void 0===H?void 0:H.classes})]}),(null===x||void 0===x?void 0:x.position)!==s.b.TOP&&Object(p.jsx)(R,{}),w&&Object(p.jsx)("div",{className:b.a.infinityPagination,children:Object(p.jsx)(l.a,Object(i.a)({},w))}),u&&P&&Object(p.jsx)(r.a,{size:86,className:b.a.loader})]})};d.a},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{maximumFractionDigits:8},a="object"===typeof t?t:{maximumFractionDigits:t};return e.toLocaleString("en-US",a)}},86:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__2s3Hy",wrapper__load:"style_wrapper__load__1d-Vt",tableWrapper:"style_tableWrapper__2TgKP",emptyRow:"style_emptyRow__BgPtv",tableColumn:"style_tableColumn__3XQKo",pagination:"style_pagination__1JTZ8",headerWrapper:"style_headerWrapper__1PhIX",value:"style_value__3pvNZ",loader:"style_loader__1mOu7",circular:"style_circular__k6V9E",infinityPagination:"style_infinityPagination__2KE3y"}}}]);
//# sourceMappingURL=66.559f740d.chunk.js.map