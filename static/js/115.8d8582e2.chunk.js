(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[115],{1268:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",card:"style_card__2E5cr",faucetpay:"style_faucetpay__ckNh1"}},1435:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(16),i=a(4),o=a(17),c=a(3),s=a(21),u=a(67),l=a(85),d=a(42),f=a(209),b=a(331),p=a(83),m=a(81),j=a(1268),v=a.n(j),g=a(0);t.default=function(){var e=Object(s.i)().user,t=Object(c.useState)({isLoading:!0}),a=Object(o.a)(t,2),j=a[0],y=a[1];Object(c.useEffect)((function(){var t=function(){var t=Object(i.a)(Object(r.a)().mark((function t(){var a,i,c,s;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([Object(f.a)(u.c.get("/games/get-affiliate-battle-leaderboard",{transformResponse:function(e){var t=JSON.parse(e);return{list:t.success?O(t.leaderboard):[],endDate:t.end_time&&1e3*Number(t.end_time)}}})),e&&Object(f.a)(u.c.get("/games/get-user-contest-information",{transformResponse:function(e){var t,a=JSON.parse(e);return Number(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.today_usd_wagered_referred_users)||0}}))]);case 2:if(a=t.sent,i=Object(o.a)(a,2),c=i[0],s=i[1],null!==c&&void 0!==c&&c.data){t.next=8;break}return t.abrupt("return");case 8:y((function(e){return Object(n.a)(Object(n.a)({},e),{},{list:null===c||void 0===c?void 0:c.data.list,endDate:null===c||void 0===c?void 0:c.data.endDate,referralAmount:null===s||void 0===s?void 0:s.data,isLoading:!1})}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=Object(l.b)(15e3,t);return function(){a.unsubscribe()}}),[e]);var O=function(e){return e.map((function(e){return{rank:e.position,reward:"".concat(e.reward_usd," USD + ").concat(Object(p.a)(e.reward_rp)," RP"),total:"".concat(Object(p.a)(Number(e.today_usd_wagered_referred_users))," USD"),user:e.user_name}}))};return Object(g.jsx)("div",{children:Object(g.jsx)(m.f,{explanation:Object(g.jsxs)(g.Fragment,{children:["Refer as many people as you can and encourage them to play at"," ",Object(g.jsx)("a",{className:v.a.faucetpay,href:Object(b.a)(e),children:"FaucetPay"}),"! The more your referred players play, the closer you will get to the main prize! Bets in all cryptocurrencies are counted and their value is converted to USD."]}),type:"affiliate-battle",timeStamp:j.endDate,tableData:j.list,classes:{messageCard:v.a.card},loading:j.isLoading,money:e&&!Object(d.b)(j.referralAmount)?{amount:j.referralAmount||0,coinSymbol:"USD",title:"Total Referred Value"}:null})})}},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=/\w\/\/\w/g,n=function(e){var t="";return"string"===typeof e&&(t=e),"object"===typeof e&&null!==e&&void 0!==e&&e.user_id&&(t=e.user_id),"https://faucetpay.io".concat("/?r=",t).replace(r,"/")}}}]);
//# sourceMappingURL=115.8d8582e2.chunk.js.map