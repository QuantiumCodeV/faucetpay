(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[71],{126:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__3yhB5",tableWrapper:"style_tableWrapper__1MClY",emptyRow:"style_emptyRow__11yPR",tableColumn:"style_tableColumn__fS46Y",pagination:"style_pagination__2zN3G",headerWrapper:"style_headerWrapper__1BlMx",rawWrapper:"style_rawWrapper__2nnNl",value:"style_value__2Zt9d",loader:"style_loader__2LF0C",circular:"style_circular__3xZHx",infinityPagination:"style_infinityPagination__2SG7U"}},1315:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",header:"style_header__2rXOp",amount:"style_amount__2l2IZ",tabs:"style_tabs__3ZMmP",depositTable:"style_depositTable__3A0LC",depositTile:"style_depositTile__3NfPy",depositRow:"style_depositRow__21UaH",withdrawalRow:"style_withdrawalRow__XwVxt",transactionId:"style_transactionId__2a76a",table:"style_table__2aMuZ",mobileTable:"style_mobileTable__3Vole",depositStatus:"style_depositStatus__zwYAB",cancelButton:"style_cancelButton__3ZgMt",amountWrapper:"style_amountWrapper__IkJ_s",coinImg:"style_coinImg__1QA5e"}},1471:function(e,t,a){"use strict";a.r(t),a.d(t,"WithdrawalHistory",(function(){return P}));var n=a(17),i=a(3),o=a(15),r=a(29),l=a(54),s=a(21),c=a(76),d=a(130),u=a(272),p=a(26),b=a(18),m=a(124),j=a(27),v=function(e,t){return"".concat("http://127.0.0.1:8000/api","/redirect/").concat(e,"/").concat(t)},h=a(126),x=a.n(h),_=a(1315),g=a.n(_),f=a(0),O=function(e){return{coin:{field:"coin",headerName:"coin"},transaction:{field:"transactionId",headerName:"transaction id",valueRender:function(e){var t=e.src,a=t.transactionId,n=t.coin;return Object(f.jsx)("a",{className:Object(o.a)(x.a.value,g.a.depositTile,g.a.transactionId),href:v(n,a),rel:"noreferrer",target:"_blank",children:a})}},amount:{field:"amount",headerName:"amount",valueRender:function(e){var t=e.src,a=t.amount,n=t.coin;return Object(f.jsxs)("div",{className:g.a.amountWrapper,children:[Object(f.jsx)("span",{children:Number(a).toFixed(8)}),Object(f.jsx)(p.a,{coin:n,className:g.a.coinImg})]})}},date:{field:"date",headerName:"Date"},confirmations:{field:"confirmations",headerName:"confirmations",valueRender:function(t){var a,n=t.src,i=n.confirmations,o=n.coin,r=null===(a=e.find((function(e){return e.symbol===o})))||void 0===a?void 0:a.confirmations_required,l=i+"+";return r&&+r>+i&&(l="".concat(i," / ").concat(r)),Object(f.jsx)("span",{className:g.a.confirmations,children:l})}},status:{field:"status",headerName:"status",valueRender:function(e){var t=e.value;return Object(f.jsx)("span",{className:g.a.depositStatus,children:Object(f.jsx)("span",{children:t})})}}}},y=[{field:"transactionId",headerName:"transaction ID",valueRender:function(e){var t=e.src,a=t.transactionId,n=t.coin,i=Object(o.a)(x.a.value,g.a.depositTile,g.a.transactionId);return a?Object(f.jsx)("a",{className:i,href:v(n,a),rel:"noreferrer",target:"_blank",children:a}):Object(f.jsx)("span",{className:i,children:a})}},{field:"coin",headerName:"coin"},{field:"amountRequested",headerName:"amount requested",valueRender:function(e){var t=e.src,a=t.amountRequested,n=t.coin;return Object(f.jsxs)("div",{className:g.a.amountWrapper,children:[Object(f.jsx)("span",{children:Number(a).toFixed(8)}),Object(f.jsx)(p.a,{coin:n,className:g.a.coinImg})]})}},{field:"amountSent",headerName:"amount sent",valueRender:function(e){var t=e.src,a=t.amountSent,n=t.coin;return Object(f.jsxs)("div",{className:g.a.amountWrapper,children:[Object(f.jsx)("span",{children:Number(a).toFixed(8)}),Object(f.jsx)(p.a,{coin:n,className:g.a.coinImg})]})}},{field:"date",headerName:"Date",valueRender:function(e){var t=e.value;return Object(f.jsx)("span",{children:t})}}],w=function(e){var t=O(e);return[t.coin,t.transaction,t.amount,t.date,t.confirmations,t.status]},N=function(e){var t=O(e);return[t.transaction,t.status,t.coin,t.date,t.amount,t.confirmations]},H=function(e){return e.DEPOSIT="deposits made",e.WITHDRAW="withdrawal history",e}(H||{}),T=function(e){try{return Object(m.a)("dS mmmm, yyyy",e)}catch(t){return""}},P=function(){var e,t,a=Object(i.useState)(H.DEPOSIT),p=Object(n.a)(a,2),m=p[0],v=p[1],h=Object(l.b)(800),x=Object(s.j)().coins,_=Object(r.a)("/wallet/get-withdrawal-history",{method:"POST",data:{page:1}}),O=Object(n.a)(_,2),P=O[0],M=O[1],R=M.isLoading,W=M.data,k=Object(r.a)("/wallet/cancel-withdrawal",{method:"POST"}),I=Object(n.a)(k,2),C=I[0],S=I[1],F=S.isLoading,E=S.data,A=Object(r.a)("/wallet/get-deposit-history",{method:"POST",data:{page:1}}),B=Object(n.a)(A,2),D=B[0],L=B[1],V=L.isLoading,Z=L.data;Object(i.useEffect)((function(){m===H.DEPOSIT?D():P()}),[m]),Object(i.useEffect)((function(){E&&(E.success?P():d.a.error({message:E.message,timeOut:2e3}))}),[E]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:g.a.header,children:[Object(f.jsx)("h2",{children:m===H.DEPOSIT?"Deposit History":"Withdrawal History"}),Object(f.jsx)(u.a,{values:[H.DEPOSIT,H.WITHDRAW],currentValue:m,onChange:function(e){v(e)},className:g.a.tabs,variant:h?"compact":"full"})]}),m===H.DEPOSIT?Object(f.jsx)(c.c,{columns:h?N(x):w(x),empty:{description:"You have not made deposits yet."},rows:(null===Z||void 0===Z||null===(e=Z.data)||void 0===e?void 0:e.deposits.map((function(e){return{transactionId:e.transaction_id?e.transaction_id:"In the process",coin:e.coin,amount:Object(j.a)(e.amount),date:T(e.datetime),confirmations:e.confirmations,status:e.credited}})))||[],loading:V,classes:{global:Object(o.a)(g.a.depositTable,g.a.table,h?g.a.mobileTable:""),row:g.a.depositRow,header:g.a.depositRow},includeHeader:!h,compact:h,pagination:{page:(null===Z||void 0===Z?void 0:Z.data.current_page)||1,pageAmount:(null===Z||void 0===Z?void 0:Z.data.total_pages)||0,setPage:function(e){return D({data:{page:e}})}}}):Object(f.jsx)(c.c,{classes:{global:Object(o.a)(g.a.table,h?g.a.mobileTable:""),row:g.a.withdrawalRow,header:g.a.withdrawalRow},empty:{description:"You have not made any withdrawals yet."},columns:y,rows:(null===W||void 0===W||null===(t=W.data)||void 0===t?void 0:t.withdrawals.map((function(e){return{coin:e.coin,transactionId:String(e.transaction_id),amountRequested:Object(j.a)(e.amount),amountSent:Object(j.a)(e.send_amount),date:(t=e.status,a=e,"Completed"===t?Object(f.jsx)("div",{children:T(a.processed_on)}):"Processing"===t?Object(f.jsx)(b.a,{onClick:function(){return!F&&C({data:{withdrawal_id:a.id}})},className:g.a.cancelButton,children:"Cancel"}):Object(f.jsx)("span",{className:Object(o.a)(g.a.statusText,g.a[t]),children:t}))};var t,a})))||[],loading:R,includeHeader:!h,compact:h,pagination:{page:(null===W||void 0===W?void 0:W.data.current_page)||1,pageAmount:(null===W||void 0===W?void 0:W.data.total_pages)||0,setPage:function(e){return P({data:{page:e}})}}})]})};t.default=P},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(16),i=a(20),o=a(51),r=a.n(o),l=a(0),s=["coin","alt","className"],c=function(e){var t=e.coin,a=e.alt,o=e.className,c=Object(i.a)(e,s);return t?"usd"===(null===t||void 0===t?void 0:t.toLowerCase())?Object(l.jsx)("p",{className:r.a.usd,children:"USD"}):Object(l.jsx)("img",Object(n.a)(Object(n.a)({src:"https://cdn.faucetpay.io/coins/".concat((t||"").toLowerCase(),".png"),alt:a||t},c),{},{className:o})):null}},27:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if(!e&&0!==e)return"".concat(e);var a=Number(e).toFixed(t),n=a.match(/^[^.]+?(?=\.0*$)|^[^.]+?\..*?(?=0*$)|^[^.]*$/g);return n?n[0]:a}},28:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var n=function(e){return e[e.TOP=0]="TOP",e[e.BOTTOM=1]="BOTTOM",e}({}),i=function(e){return e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e}({})},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(e,t){var a,n;if(e.loading!==t.loading||e.isMobile!==t.isMobile||(null===(a=e.pagination)||void 0===a?void 0:a.pageAmount)!==(null===(n=t.pagination)||void 0===n?void 0:n.pageAmount))return!1;var i=e.rows,o=t.rows;if(i.length!==o.length)return!1;if(e.includeHeader!==t.includeHeader)return!1;try{for(var r=0;r<i.length;r++){var l=Object.values(i[r]),s=Object.values(o[r]);if(l.length!==s.length)return!1;for(var c=0;c<l.length;c++)if(l[c]!==s[c])return!1}}catch(d){return!0}return!0},i=function(e){return null==e}},51:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",usd:"style_usd__1ktyr"}},53:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return p})),a.d(t,"c",(function(){return N})),a.d(t,"b",(function(){return M}));var n=a(3),i=a.n(n),o=a(15),r=a(57),l=a.n(r),s=a(0),c=function(e){var t=e.row,a=e.columns,i=e.loading,r=e.isMobile,c=e.withoutDefaultStyles,d=e.className;return Object(s.jsx)("div",{className:Object(o.a)(l.a.rowWrapper,!c&&"standardTable_row",d),children:a.map((function(e,a){return i?Object(s.jsx)("div",{className:"skeleton"},"".concat(e.field,"_").concat(a)):Object.keys(t).includes(e.field)?e.valueRender?Object(s.jsx)(n.Fragment,{children:e.valueRender({index:a,loading:i,src:t,mobile:r,value:t[e.field]})},"".concat(e.field,"_").concat(a)):Object(s.jsx)("span",{children:t[e.field]},"".concat(e.field,"_").concat(a)):null}))})},d=a(58),u=a.n(d),p=function(e){var t=e.description,a=e.classes;return Object(s.jsxs)("div",{className:Object(o.a)(u.a.wrapper,null===a||void 0===a?void 0:a.root),children:[Object(s.jsx)("span",{className:Object(o.a)(u.a.title,null===a||void 0===a?void 0:a.title),children:"Whoops!"}),Object(s.jsx)("div",{className:Object(o.a)(u.a.description,null===a||void 0===a?void 0:a.description),children:t||"There are no data to show you."}),Object(s.jsx)("img",{className:null===a||void 0===a?void 0:a.image,src:"/images/empty.webp",alt:"empty"})]})},b=a(16),m=a(20),j=a(18),v=a(22),h=a(59),x=a.n(h),_=["maxButtonVisible","showPrevNextButton","showFirstLastPage","page","pageAmount","classes","onChange","disabled"],g=function(e){var t=e.className;return Object(s.jsx)("span",{className:Object(o.a)(x.a.skip,t),children:"..."})},f=function(e){var t=e.maxButtonVisible,a=void 0===t?3:t,n=e.showPrevNextButton,r=e.showFirstLastPage,l=e.page,c=e.pageAmount,d=e.classes,u=e.onChange,p=e.disabled,h=Object(m.a)(e,_),f=function(){for(var e=[],t=Math.floor(a/2),n=Math.max(l-t,1),b=Math.min(l+t,c),m=function(t){var a=t===l,i=Object(s.jsx)(j.a,{onClick:function(){return u&&u(t)},disabled:a||p,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button,a&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:t},t);(1===t||t===c)&&r||(e.push(i),t===b&&b+1<c?e.push(Object(s.jsx)(g,{className:null===d||void 0===d?void 0:d.skip})):t===n&&n-1>1&&e.splice(e.length-2,0,Object(s.jsx)(g,{className:null===d||void 0===d?void 0:d.skip})))},v=n;v<=b;v++)m(v);return Object(s.jsx)(s.Fragment,{children:e.map((function(t,a){return Object(s.jsx)(i.a.Fragment,{children:t},"".concat(t.key,"_").concat(a,"_").concat(e.length))}))})},O=1===l||p,y=l===c||p;return Object(s.jsxs)("div",Object(b.a)(Object(b.a)({className:Object(o.a)(x.a.root,null===d||void 0===d?void 0:d.root)},h),{},{children:[n&&Object(s.jsx)(j.a,{onClick:function(){return u&&u(Math.max(1,l-1))},disabled:O,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button),children:Object(s.jsx)(v.J,{})}),r&&Object(s.jsx)(j.a,{onClick:function(){return u&&u(1)},disabled:O,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button,1===l&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:"1"}),Object(s.jsx)(f,{}),r&&c>1&&Object(s.jsx)(j.a,{onClick:function(){return u&&u(c)},disabled:y,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button,l===c&&[x.a.active,null===d||void 0===d?void 0:d.activePage]),children:c}),n&&Object(s.jsx)(j.a,{onClick:function(){return u&&u(Math.min(c,l+1))},disabled:y,className:Object(o.a)(null===d||void 0===d?void 0:d.button,x.a.button),children:Object(s.jsx)(v.J,{})})]}))},O=a(28),y=a(60),w=a.n(y),N=function(e){var t=e.page,a=e.pageAmount,n=e.setPage,i=e.loading,r=e.direction,l=e.classes;return Object(s.jsx)(f,{page:t,pageAmount:a,onChange:n,disabled:i,showFirstLastPage:!0,showPrevNextButton:!0,style:{justifyContent:r===O.a.LEFT?"flex-start":r===O.a.RIGHT?"flex-end":"center"},classes:{root:Object(o.a)("standardPagination",w.a.pagination,null===l||void 0===l?void 0:l.pagination),button:"standardPagination_button",activePage:Object(o.a)("standardPagination_active",null===l||void 0===l?void 0:l.paginationActive)}})},H=a(42),T=a(61),P=a.n(T),M=function(e){var t=e.data,a=e.loading,n=e.cardTypes,i=e.classes;return Object(s.jsx)("div",{className:Object(o.a)(P.a.wrapper,"standardTableCard",null===i||void 0===i?void 0:i.row),children:n.map((function(e,n){return Object(s.jsxs)("div",{className:Object(o.a)(P.a.cardValueWrapper,null!==i&&void 0!==i&&i.elements?null===i||void 0===i?void 0:i.elements[n]:""),children:[Object(s.jsx)("span",{className:P.a.cardTitle,children:e.headerName}),!t||Object(H.b)(t[e.field])?Object(s.jsx)("div",{className:"skeleton"}):e.valueRender?e.valueRender({value:t[e.field],loading:a,src:t,index:n,mobile:!0}):a?Object(s.jsx)("div",{className:"skeleton"}):Object(s.jsx)("span",{className:"cardValue",children:t[e.field]})]},"".concat(e.field,"__").concat(n))}))})}},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(15),i=a(18),o=a(22),r=a(56),l=a.n(r),s=a(0),c=function(e){var t=e.currentPage,a=e.isNextPageExist,r=e.setPage,c=e.className,d=Number(t);return Object(s.jsxs)("div",{className:Object(n.a)(l.a.infinityPagination,c),children:[Object(s.jsx)(i.a,{disabled:d<=1,onClick:function(){return r(d-1)},children:Object(s.jsx)(o.p,{})}),Object(s.jsx)(i.a,{disabled:!a,onClick:function(){return r(d+1)},children:Object(s.jsx)(o.p,{})})]})}},56:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",infinityPagination:"style_infinityPagination__oNkra"}},57:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",rowWrapper:"style_rowWrapper__3zn_i"}},58:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"styles_wrapper__2NARE",title:"styles_title__163RY",description:"styles_description__35S5N"}},59:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",button:"style_button__ilHkP",skip:"style_skip__Bq5pO"}},60:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",pagination:"style_pagination__1yOml"}},61:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__6fuBt",cardValueWrapper:"style_cardValueWrapper__2gUA0",cardTitle:"style_cardTitle__3u3ae"}},76:function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return c.b})),a.d(t,"a",(function(){return c.a}));var n=a(16),i=a(3),o=a(15),r=a(37),l=a(55),s=a(53),c=a(28),d=a(42),u=a(86),p=a.n(u),b=a(0),m=function(e){var t=e.rows,a=e.columns,d=e.loading,u=void 0!==d&&d,m=e.includeHeader,j=void 0===m||m,v=e.classes,h=e.pagination,x=e.isMobile,_=void 0!==x&&x,g=e.styles,f=e.withoutDefaultStyles,O=void 0!==f&&f,y=e.withoutSkeletons,w=void 0!==y&&y,N=e.empty,H=e.infinityPagination,T=e.circular,P=void 0===T||T,M=e.skeletonRows,R=void 0===M?5:M,W=e.RowWrapper,k=e.compact,I=e.compactClasses,C=function(){return h&&t.length>0?Object(b.jsx)(s.c,Object(n.a)({loading:u,classes:v},h)):null},S=u&&!w?Array.from(Array(R).map((function(e,t){return{key:String(t)}}))):t;return Object(b.jsxs)("div",{className:Object(o.a)(p.a.wrapper,null===v||void 0===v?void 0:v.global,u&&P&&p.a.wrapper__load),style:{"--table-column-count":a.length},children:[(null===h||void 0===h?void 0:h.position)===c.b.TOP&&Object(b.jsx)(C,{}),Object(b.jsxs)("div",{className:Object(o.a)(p.a.tableWrapper,!O&&"standardTable",null===v||void 0===v?void 0:v.root),children:[j&&Object(b.jsx)("div",{className:Object(o.a)(p.a.headerWrapper,!O&&"standardTable_header",null===v||void 0===v?void 0:v.header),style:null===g||void 0===g?void 0:g.header,children:a.map((function(e,t){return e.headerName?e.headerRender?Object(b.jsx)(i.Fragment,{children:e.headerRender(e.headerName)},"key_#".concat(t)):Object(b.jsx)("span",{children:e.headerName},"key_#".concat(t)):null}))}),u||0!==t.length?null===S||void 0===S?void 0:S.map((function(e,t){return k?Object(b.jsx)(s.b,{cardTypes:a,loading:u&&!w,classes:I,data:e},(null===e||void 0===e?void 0:e.key)||t):W?Object(b.jsx)(W,{data:e,loading:u&&!w},t):Object(b.jsx)(s.d,{loading:u&&!w,isMobile:_,row:e,columns:a,withoutDefaultStyles:O,className:null===v||void 0===v?void 0:v.row},(null===e||void 0===e?void 0:e.key)||t)})):null!==N&&void 0!==N&&N.disable?null:Object(b.jsx)(s.a,{description:null===N||void 0===N?void 0:N.description,classes:null===N||void 0===N?void 0:N.classes})]}),(null===h||void 0===h?void 0:h.position)!==c.b.TOP&&Object(b.jsx)(C,{}),H&&Object(b.jsx)("div",{className:p.a.infinityPagination,children:Object(b.jsx)(l.a,Object(n.a)({},H))}),u&&P&&Object(b.jsx)(r.a,{size:86,className:p.a.loader})]})};d.a},86:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",wrapper:"style_wrapper__2s3Hy",wrapper__load:"style_wrapper__load__1d-Vt",tableWrapper:"style_tableWrapper__2TgKP",emptyRow:"style_emptyRow__BgPtv",tableColumn:"style_tableColumn__3XQKo",pagination:"style_pagination__1JTZ8",headerWrapper:"style_headerWrapper__1PhIX",value:"style_value__3pvNZ",loader:"style_loader__1mOu7",circular:"style_circular__k6V9E",infinityPagination:"style_infinityPagination__2KE3y"}}}]);
//# sourceMappingURL=71.f3def591.chunk.js.map