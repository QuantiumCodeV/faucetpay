(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[119],{266:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(16),r=a(34),c=a(23),s=a(21),o=a(97),u=a(0);function i(t){return function(e){var a=Object(s.i)(),i=a.user,f=a.isUserDataLoading,b=i?Object(u.jsx)(r.a,{to:{pathname:c.m.dashboardPage.pathName}}):Object(u.jsx)(t,Object(n.a)({},e));return f?Object(u.jsx)(o.a,{}):b}}},755:function(t,e,a){"use strict";a.r(e),a.d(e,"ConfirmEmailPage",(function(){return p}));var n=a(1),r=a(4),c=a(34),s=a(3),o=a(10),u=a(32),i=a(21),f=a(266),b=a(23),j=a(67),h=a(0),p=function(){var t=Object(c.i)().hash,e=Object(i.i)().refreshUserInfo,a=Object(c.g)();Object(s.useEffect)((function(){t&&f()}),[t]);var f=function(){var c=Object(r.a)(Object(n.a)().mark((function r(){var c,s;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.c.post("/account/confirm-account",{activation_hash:t});case 2:if(c=n.sent,(s=c.data).success){n.next=8;break}u.b.error(s.message),n.next=13;break;case 8:if(u.b.success(s.message),!s.tfa_authorized){n.next=13;break}return localStorage.setItem(b.q.access,s.token),n.next=13,e();case 13:a.replace(b.m.startPage.pathName);case 14:case"end":return n.stop()}}),r)})));return function(){return c.apply(this,arguments)}}();return Object(h.jsx)(o.LoaderWithLogo,{})};e.default=Object(f.a)(p)},97:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a(10),r=a(0),c=function(){return Object(r.jsx)(n.LoaderWithLogo,{transparent:!0})}}}]);
//# sourceMappingURL=119.7ffa2cf3.chunk.js.map