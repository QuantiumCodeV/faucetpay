(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[86],{1330:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",jsEditor:"style_jsEditor__2xNds"}},1331:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",resizer:"style_resizer__2xGJn",active:"style_active__SWSOp"}},1333:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",logs:"style_logs__qpWKA",log:"style_log__1p7Z7",separateBackground:"style_separateBackground__2_8Vk",error:"style_error__3x818",debug:"style_debug__2u3B5",clearLogs:"style_clearLogs__1V90I",spawnAnimation:"style_spawnAnimation__39s7w"}},1334:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",templates:"style_templates__2Ox2U"}},1335:function(e,t,n){var r=n(1336),a=["setFunctionFromString","executeFunction"];e.exports=function(){var e=new Worker(n.p+"[fullhash].worker.js",{name:"[fullhash].worker.js"});return URL.revokeObjectURL(n.p+"[fullhash].worker.js"),r(e,a),e}},1337:function(e,t,n){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",editorWrapper:"style_editorWrapper__1ROWA",buttons:"style_buttons__2jDMC"}},1454:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n(4),c=n(43),i=n(17),u=n(3),s=n(32),l=n(257),b=n(1399),f=n(265),p=n(1407),d=n(15),g=n(21),m=n(1330),h=n.n(m),j=n(401),O=n(16),v=n(353),x=function(e){var t=e.variant,n=e.settings,r=e.styles;return function(e,a){var o=l.c.theme(Object(O.a)(Object(O.a)({"&":Object(O.a)({backgroundColor:n.background,color:n.foreground},e?{height:"number"===typeof e?"".concat(e,"px"):e}:{})},a?{".cm-scroller":{overflow:a}}:{}),{},{".cm-content":{caretColor:n.caret},".cm-cursor, .cm-dropCursor":{borderLeftColor:n.caret},"&.cm-focused .cm-selectionBackground, ::selection":{backgroundColor:n.selection},".cm-activeLine":{backgroundColor:n.lineHighlight},".cm-gutters":{backgroundColor:n.gutterBackground,color:n.gutterForeground},".cm-activeLineGutter":{backgroundColor:n.lineHighlight}}),{dark:"dark"===t}),c=v.a.define(r);return[o,Object(v.w)(c)]}},y=x({variant:"light",settings:{background:"#FFFFFF",foreground:"#000000",caret:"#000000",selection:"#80C7FF",gutterBackground:"#FFFFFF",gutterForeground:"#00000070",lineHighlight:"#C1E2F870"},styles:[{tag:j.d.comment,color:"#AAAAAA"},{tag:[j.d.keyword,j.d.operator,j.d.typeName,j.d.tagName,j.d.propertyName],color:"#2F6F9F",fontWeight:"bold"},{tag:[j.d.attributeName,j.d.definition(j.d.propertyName)],color:"#4F9FD0"},{tag:[j.d.className,j.d.string,j.d.special(j.d.brace)],color:"#CF4F5F"},{tag:j.d.number,color:"#CF4F5F",fontWeight:"bold"},{tag:j.d.variableName,fontWeight:"bold"}]}),S=x({variant:"dark",settings:{background:"#1E1E46",foreground:"#FFFFFF",caret:"#FFFFFF",selection:"#B36539BF",gutterBackground:"#1E1E46",gutterForeground:"#FFFFFF70",lineHighlight:"#00000059"},styles:[{tag:j.d.comment,color:"#0088FF"},{tag:j.d.string,color:"#3AD900"},{tag:j.d.regexp,color:"#80FFC2"},{tag:[j.d.number,j.d.bool,j.d.null],color:"#FF628C"},{tag:[j.d.definitionKeyword,j.d.modifier],color:"#FFEE80"},{tag:j.d.variableName,color:"#CCCCCC"},{tag:j.d.self,color:"#FF80E1"},{tag:[j.d.className,j.d.definition(j.d.propertyName),j.d.function(j.d.variableName),j.d.definition(j.d.typeName),j.d.labelName],color:"#FFDD00"},{tag:[j.d.keyword,j.d.operator],color:"#FF9D00"},{tag:[j.d.propertyName,j.d.typeName],color:"#80FFBB"},{tag:j.d.special(j.d.brace),color:"#EDEF7D"},{tag:j.d.attributeName,color:"#9EFFFF"},{tag:j.d.derefOperator,color:"#fff"}]}),F=n(19),w=n(1467),N=n(1202),k=n(1248),R=n(1417),C=function(e){return e[e.Mouse=0]="Mouse",e[e.Touch=1]="Touch",e}({}),B=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(w.a)(document,e,{passive:t})},L=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return N.a.apply(void 0,Object(c.a)(t.map((function(e){return B(e)}))))},_=n(1331),M=n.n(_),E=n(0),H=function(e){return"translateY(".concat(e,"px)")},T=function(e){var t=e.className,n=e.children,r=e.setHeight,a=e.minHeight,o=Object(u.useRef)(null),c=Object(u.useRef)(null),s=Object(u.useRef)(0),l=function(){if(o.current&&c.current){var e=c.current.offsetTop-o.current.offsetTop,t=c.current.clientHeight-e;t>0&&(o.current.style.transform=H(t))}},b=function(e){var t=e.onMove,n=e.onStop,r=Object(u.useState)({pointerType:C.Mouse,isListen:!1}),a=Object(i.a)(r,2),o=a[0],c=a[1],s=function(){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{isListen:!1})})),n()};return Object(u.useEffect)((function(){if(o.isListen){var e=o.pointerType===C.Mouse,n=e?L("mouseleave","mouseup"):L("touchcancel","touchend"),r=B(e?"mousemove":"touchmove",e).pipe(Object(k.a)(n),Object(R.a)(s)).subscribe((function(n){!e&&n.cancelable&&n.preventDefault(),t(n)}));return function(){r.closed||r.unsubscribe()}}}),[o.isListen,o.pointerType]),{stopListening:s,startListening:function(e){c({pointerType:e,isListen:!0})},isListen:o.isListen}}({onMove:function(e){if(o.current&&c.current){s.current||(s.current=o.current.getBoundingClientRect().top);var t=function(e){return e.touches instanceof TouchList}(e)?e.touches[0].pageY:e.pageY;o.current.style.transform=H(c.current.clientHeight+t-s.current)}},onStop:function(){if(o.current&&c.current){s.current=0;var e=o.current.getBoundingClientRect(),t=c.current.getBoundingClientRect(),n=e.top-t.top;r(Math.max(n,a||0)),setTimeout(l,0)}}}),f=b.startListening,p=b.isListen;return Object(u.useEffect)((function(){l()}),[]),n({resizerComponent:Object(E.jsx)("div",{className:Object(d.a)(M.a.resizer,t,Object(F.a)({},M.a.active,p)),ref:o,onMouseDown:function(){f(C.Mouse)},onTouchStart:function(){f(C.Touch)}}),targetRef:c})},D=S("100%","auto"),A=y("100%","auto"),I=function(e){var t=e.editorRef,n=e.className,r=e.editorScope,a=e.onLoad,o=Object(u.useRef)(null),s=Object(u.useState)(null),m=Object(i.a)(s,2),j=m[0],O=m[1],v=Object(u.useRef)({}),x=Object(g.n)().isLight;return Object(u.useImperativeHandle)(t,(function(){return{getValue:function(){var e,t=null===(e=v.current.view)||void 0===e?void 0:e.state.toJSON();return(null===t||void 0===t?void 0:t.doc)||""},setValue:function(e){var t,n=null===(t=v.current)||void 0===t?void 0:t.view;n&&n.dispatch({changes:{from:0,to:n.state.doc.length,insert:e}})}}})),Object(u.useEffect)((function(){if(o.current){a&&a();var e=new f.e,t=new l.c({doc:"",extensions:[b.a,Object(p.a)(),e.of(x?A:D)].concat(Object(c.a)(r?[p.b.data.of({autocomplete:Object(p.c)(r)})]:[])),parent:o.current});return v.current={view:t,themeChanger:e},function(){t.destroy()}}}),[r,x,a]),Object(u.useEffect)((function(){var e=v.current,t=e.themeChanger,n=e.view;t&&n&&n.dispatch({effects:t.reconfigure(x?A:D)})}),[x]),Object(E.jsx)(T,{minHeight:270,setHeight:O,children:function(e){var t=e.resizerComponent,r=e.targetRef;return Object(E.jsx)("div",{className:Object(d.a)(h.a.jsEditor,n),style:j?{height:j}:{},ref:function(e){e&&(o.current=e,r.current=e)},children:t})}})},P=n(18),W=n(188),q=n(310),U=n(23),V=n(255),G=n(191),J=n(242),z=n(85),Y=n(92),K=n(71),Z=n(27),Q=n(154),X=n(262),$=n(710),ee=n(138),te=function(e){return e.LOW="low",e.HIGH="high",e}(te||{}),ne=function(e){return null==e},re=ee.d().shape({betAmount:ee.c().positive().required(),clientSeed:ee.e().min(3).optional(),type:ee.e().oneOf(Object.values(te)).required(),payout:ee.c().positive().when("chance",(function(e,t){return ne(e)?t.required("payout or chance required field"):t.optional()})),chance:ee.c().positive().when("payout",(function(e,t){return ne(e)?t.required("payout or chance required field"):t.optional()}))},[["payout","chance"]]),ae=function(e){try{return{isSuccess:!0,bet:re.validateSync(e)}}catch(t){return{isSuccess:!1,errors:t.errors}}},oe=function(e,t){return{win:!!e.win,balance:Number(e.balance),betAmount:Number(t.bet_amt),coin:e.coin,payout:Number(e.payout),profit:Number(t.profit),rollNumber:Number(e.roll_number)}},ce=function(e){if("string"!==typeof e)return e;var t=e.replaceAll(/'|"/g,"");return"Unexpected token return"===t?"Syntax error":t},ie=n(24),ue=n(25),se=n(65),le=n(66),be=function(){function e(){Object(ie.a)(this,e)}return Object(ue.a)(e,null,[{key:"init",value:function(e,t){throw new Error("not implemented error")}}]),e}(),fe=function(e){Object(se.a)(n,e);var t=Object(le.a)(n);function n(e,r){var a;return Object(ie.a)(this,n),(a=t.call(this)).db=void 0,a.storeName=void 0,a.db=e,a.storeName=r,a}return Object(ue.a)(n,[{key:"getObjectStore",value:function(){return n.createObjectStoreIfNotExist(this.db,this.storeName),this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName)}},{key:"promisifyRequest",value:function(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(e){n(e)}}))}},{key:"getRecords",value:function(){return this.promisifyRequest(this.getObjectStore().getAll())}},{key:"addRecord",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.promisifyRequest(this.getObjectStore().add(t));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeRecords",value:function(){return this.promisifyRequest(this.getObjectStore().clear())}},{key:"close",value:function(){this.db.close()}}],[{key:"init",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t,r){var o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.indexedDB){e.next=2;break}throw new Error("indexed db not supported");case 2:return o=indexedDB.open(n.getDbName(t),1),e.abrupt("return",new Promise((function(e,a){var c=setTimeout((function(){a("timeout expired: ".concat(r,"ms"))}),r);o.onerror=function(e){clearTimeout(c),a(e)},o.onsuccess=function(){clearTimeout(c),e(new n(o.result,t))},o.onupgradeneeded=function(){n.createObjectStoreIfNotExist(o.result,t)}})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getDbName",value:function(e){return"".concat(e,"_database")}},{key:"createObjectStoreIfNotExist",value:function(e,t){e.objectStoreNames.contains(t)||e.createObjectStore(t,{autoIncrement:!0})}}]),n}(be),pe=function(e){Object(se.a)(n,e);var t=Object(le.a)(n);function n(e){var r;return Object(ie.a)(this,n),(r=t.call(this)).storeName=void 0,r.storeName=e,r}return Object(ue.a)(n,[{key:"addRecord",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRecords();case 2:(n=e.sent).push(t),localStorage.setItem(this.storeName,JSON.stringify(n));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeRecords",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem(this.storeName);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRecords",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem(this.storeName),n=[];try{r=JSON.parse(t||""),Array.isArray(r)&&(n=r)}catch(a){}return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"close",value:function(){}}],[{key:"init",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new n(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(be),de=[fe,pe],ge=function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var n,r,o,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,r=de;case 1:if(!(n<r.length)){e.next=15;break}return o=r[n],e.prev=3,e.next=6,o.init(t,5e3);case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(3);case 12:n++,e.next=1;break;case 15:throw new Error("none of the storages are supported");case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),me=n(229),he="advancedDiceSelectedScript",je=function(e){return e.Log="log",e.Stop="stop",e}({}),Oe=function(e){return e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.ERROR=2]="ERROR",e}({}),ve=function(e){var t=typeof e;switch(t){case"number":case"string":return e;case"function":return e.toString();case"undefined":return t}try{return JSON.stringify(e,null,2)}catch(n){return"function"===typeof(null===e||void 0===e?void 0:e.toString)?e.toString():String(e)}},xe=function(e,t){var n=Date.now();return{id:"".concat(n,"_").concat(Math.random()),level:e,timestamp:n,action:je.Log,payload:Array.isArray(t)?t.map(ve).join(" "):ve(t)}},ye=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];postMessage(xe(e,n))}},Se={globals:{},console:Object.freeze({log:ye(Oe.INFO),info:ye(Oe.INFO),error:ye(Oe.ERROR),debug:ye(Oe.DEBUG)}),stop:function(){},betNumber:0,lastBetResult:{win:!1,payout:0,rollNumber:0,coin:"",balance:0,profit:0,betAmount:0},bet:{},balance:0,netProfit:0,totalProfit:0,totalLoss:0,totalWins:0,totalLosses:0},Fe=n(475),we=n(22),Ne=n(1333),ke=n.n(Ne),Re=n(124),Ce=(r={},Object(F.a)(r,Oe.DEBUG,"DEBUG"),Object(F.a)(r,Oe.ERROR,"ERROR"),Object(F.a)(r,Oe.INFO,"INFO"),r),Be=Object(u.memo)((function(e){var t=e.list,n=e.clearLogs,r=Object(u.useRef)(null);return Object(u.useEffect)((function(){r.current&&Object(Fe.a)(r.current)}),[t]),Object(E.jsxs)("div",{className:ke.a.logs,ref:r,children:[t.length?Object(E.jsx)("div",{className:ke.a.clearLogs,children:Object(E.jsx)(we.e,{onClick:n})}):null,t.map((function(e,t){var n,r=e.level,a=e.payload,o=e.timestamp,c=e.id;return Object(E.jsxs)("div",{className:Object(d.a)(ke.a.log,Object(F.a)({},ke.a.separateBackground,t%2)),children:[Object(E.jsx)("time",{children:"[".concat(Object(Re.a)("yyyy-mm-dd HH:MM:ss.l",new Date(o)),"]")}),Object(E.jsx)("span",{className:Object(d.a)((n={},Object(F.a)(n,ke.a.error,r===Oe.ERROR),Object(F.a)(n,ke.a.debug,r===Oe.DEBUG),n)),children:Ce[r]}),Object(E.jsx)("pre",{children:a})]},c)}))]})}),(function(e,t){return Object.is(e.list,t.list)})),Le=n(114),_e=n(1334),Me=n.n(_e),Ee={Simple:'// console.log, console.debug, console.info, console.error\n//\n// lastBetResult {\n//  win: false,\n//  payout: number,\n//  rollNumber: number,\n//  coin: string,\n//  balance: number,\n//  profit: number,\n//  betAmount: number,\n//}\n//\n// globals - for storing any data between bets\n// betNumber - order number of the bet\n// netProfit\n// totalProfit\n// totalLoss\n// totalWins\n// totalLosses\n//\n// stop() - call this function to stop betting\n\n\nif (betNumber === 1) {\n  globals.maxBetsCount = 10;\n  globals.baseBet = 0.1;\n  globals.betType = "high";\n  globals.chance = 50;\n}\n\nbet = {\n  betAmount: globals.baseBet,\n  chance: globals.chance,\n  type: globals.betType,\n};\n\nif (betNumber > globals.maxBetsCount) {\n  stop();\n}\n',"Play Till Win":'if (betNumber === 1) {\n  globals.maxBetsCount = 10;\n  globals.betType = "high";\n\n  globals.minChance = 10;\n  globals.maxChance = 70;\n  globals.getChanceInRange = () => {\n    return Math.floor(Math.random() * (globals.maxChance - globals.minChance + 1)) + globals.minChance;\n  }\n\n  globals.baseBet = 0.0001;\n  globals.getBet = () => {\n    return (globals.baseBet * Math.pow(2, betNumber)).toFixed(8);\n  }\n}\n\nbet = {\n  betAmount: globals.getBet(),\n  chance: globals.getChanceInRange(),\n  type: globals.betType,\n};\n\nif (betNumber > globals.maxBetsCount) {\n  stop();\n} else if (lastBetResult && lastBetResult.win) {\n  stop();\n}\n',"Martingale Strategy":'if (betNumber === 1) {\n  globals.maxBetsCount = 10;\n  globals.betType = "high";\n\n  globals.minChance = 10;\n  globals.maxChance = 70;\n  globals.getChanceInRange = () => {\n    return Math.floor(Math.random() * (globals.maxChance - globals.minChance + 1)) + globals.minChance;\n  }\n\n  globals.betMultiplier = 2;\n  globals.baseBet = 0.0001;\n  globals.bet = globals.baseBet;\n  globals.getBet = (win) => {\n    if (win) {\n      globals.bet = globals.baseBet;\n    } else {\n      globals.bet *= globals.betMultiplier;\n    }\n\n    return globals.bet.toFixed(8);\n  }\n}\n\nbet = {\n  betAmount: globals.getBet(lastBetResult && lastBetResult.win),\n  chance: globals.getChanceInRange(),\n  type: globals.betType,\n};\n\nif (betNumber > globals.maxBetsCount) {\n  stop();\n}\n'},He=Object.keys(Ee).map((function(e){return{value:e}})),Te=function(e){var t=e.localScripts,n=e.selectedLocalScriptIndex,r=e.setLocalScript,a=e.setTemplate,o=Object(u.useState)(null),c=Object(i.a)(o,2),s=c[0],l=c[1];return Object(E.jsxs)("div",{className:Me.a.templates,children:[Object(E.jsx)(Le.a,{options:He,onChange:function(e){l(e),a(Ee[e])},value:s||"Choose a Template"}),Object(E.jsx)(Le.a,{options:t.map((function(e,t){return{value:t,label:"Script #".concat(t+1)}})),onChange:function(e){r(Number(e))},value:ne(n)?"Choose a Saved Script":n})]})},De=n(717),Ae=n(412),Ie=n(1335),Pe=n.n(Ie),We=n(1337),qe=n.n(We);t.default=function(){var e=Object(u.useRef)({getValue:function(){return""},setValue:function(e){}}),t=Object(u.useRef)(null),n=Object(u.useState)((function(){return[xe(Oe.INFO,"This is the console output section. You can use the console.log() function to print any information.")]})),r=Object(i.a)(n,2),l=r[0],b=r[1],f=Object(u.useMemo)((function(){var e=new W.a;return{addLogToList:function(t){e.length>=50&&e.deleteFirst(),e.append(t),b(Object(c.a)(e.values()))},clearLogs:function(){e.clear(),b([])}}}),[]),p=f.addLogToList,d=f.clearLogs,m=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(u.useState)((function(){var e=localStorage.getItem(he);return Object(me.a)(e||"")?Number(e):null})),s=Object(i.a)(c,2),l=s[0],b=s[1],f=Object(u.useRef)(null),p=function(e){localStorage.setItem(he,String(e)),b(e)},d=function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,f.current.getRecords();case 4:t=e.sent,r(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,f.current.addRecord(t);case 4:return e.next=6,d();case 6:p(n.length);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,f.current.removeRecords();case 4:return e.next=6,d();case 6:p(null);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e,t=!1,n=function(){var n=Object(o.a)(Object(a.a)().mark((function n(){return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ge("advancedDiceScripts");case 2:if(e=n.sent,!t){n.next=6;break}return e.close(),n.abrupt("return");case 6:return f.current=e,n.next=9,d();case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),function(){var n;null===(n=e)||void 0===n||n.close(),t=!0}}),[]),{scripts:n,addScriptToLocalStore:g,selectedScript:l,setSelectedScript:p,clearScripts:m}}(),h=m.scripts,j=m.addScriptToLocalStore,O=m.clearScripts,v=m.selectedScript,x=m.setSelectedScript,y=function(e){var t=e.workerRef,n=e.errorMessagesHandler,r=e.successMessagesHandler,c=(Object(X.a)().controlStateRef,Object(g.j)()),l=c.selectedCoin,b=c.updateSelectedCoinBalance,f=Object(g.m)(),p=f.serverSeed,d=f.isClientSeedSetManually,m=f.incrementNonce,h=f.setUserSeed,j=Object(u.useState)(!1),O=Object(i.a)(j,2),v=O[0],x=O[1],y=Object(u.useRef)(!1),S=Object(u.useRef)(null);Object(u.useEffect)((function(){l&&(S.current={selectedCoin:l,serverSeed:p,isClientSeedSetManually:d})}),[l,p,d]);var F=function(e){if(e.clientSeed)h(e.clientSeed,!0);else{var t=(S.current||{}).isClientSeedSetManually;e.clientSeed=t?Object(g.h)():Object(K.a)(),h(e.clientSeed,!!t)}},w=function(){var e=Object(o.a)(Object(a.a)().mark((function e(o){var c,u,l,f,p,d,g,h,j,O,v,w,N,k,R,C;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.current,S.current&&c){e.next=4;break}return s.b.error("coin not selected"),e.abrupt("return");case 4:return e.prev=4,e.next=7,c.setFunctionFromString(["netProfit","betNumber","lastBetResult","balance","totalProfit","totalLoss","totalWins","totalLosses","stop","globals","console","\n    let bet;\n\n    bet = (() => {\n      ".concat(o,"\n\n      return bet;\n    })()\n\n    return bet;\n")]);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(4),n(ce(e.t0.message)||"syntax error"),e.abrupt("return");case 13:return e.next=15,Promise.all([Object(Y.a)(0),Object(Y.a)(0),Object(Y.a)(0)]);case 15:u=e.sent,l=Object(i.a)(u,3),f=l[0],p=l[1],d=l[2],g=0,h=0,j=function(e,t,n){if(f=f.add(e?t:-n).toDecimalPlaces(U.a),e)return p=p.add(t).toDecimalPlaces(U.a),void g++;d=d.add(n).toDecimalPlaces(U.a),h++},O=1,v=null,x(!0),y.current=!1;case 27:if(y.current){e.next=60;break}return w=S.current.selectedCoin,e.next=31,c.executeFunction([f.toNumber(),O,v,Number(w.balance),p.toNumber(),d.toNumber(),g,h]);case 31:if(!((N=e.sent)instanceof Error)){e.next=35;break}return n(N.message||""),e.abrupt("break",60);case 35:if(!y.current){e.next=37;break}return e.abrupt("break",60);case 37:if((k=ae(N)).isSuccess){e.next=41;break}return n("bet is not valid\n".concat(k.errors.join("\n"))),e.abrupt("break",60);case 41:return F(k.bet),a=k.bet,B=w.symbol,R={coin:B,bet_amt:a.betAmount.toFixed(U.a),type:"high"===a.type?J.e.HIGH:J.e.LOW,payout:ne(a.payout)?Object(V.b)(a.chance):a.payout.toFixed(5),winning_chance:ne(a.chance)?Object(V.a)(a.payout):a.chance.toFixed(2),client_seed:a.clientSeed,get profit(){return Object(z.a)(this.bet_amt,this.payout,!0)}},e.next=45,Object($.a)(R);case 45:if((C=e.sent).success&&C.data){e.next=49;break}return n(C.message),e.abrupt("break",60);case 49:return m(),r(C.data.win?"\ud83c\udf89 You have won ".concat(Object(Z.a)(C.data.profit)," ").concat(C.data.coin):"\ud83d\ude22 You have lost your bet of ".concat(Object(Z.a)(R.bet_amt)," ").concat(C.data.coin)),j(!!C.data.win,C.data.profit,R.bet_amt),O++,v=oe(C.data,R),q.b.pushValue(Number(C.data.profit),{profit:C.data.profit,betAmount:R.bet_amt,win:!!C.data.win},G.c.SCRIPT),b(v.balance),e.next=58,Object(Q.a)(.1);case 58:e.next=27;break;case 60:x(!1);case 61:case"end":return e.stop()}var a,B}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}();return{startPlaying:w,stopPlaying:function(){y.current=!0},isPlayStart:v}}({workerRef:t,errorMessagesHandler:function(e){p(xe(Oe.ERROR,e))},successMessagesHandler:function(e){p(xe(Oe.INFO,e))}}),S=y.startPlaying,F=y.stopPlaying,N=y.isPlayStart;Object(u.useEffect)((function(){var e=function(){var e=Pe()(),t=Object(w.a)(e,"message");return{worker:e,logsListener:t.pipe(Object(De.a)((function(e){var t;return(null===(t=e.data)||void 0===t?void 0:t.action)===je.Log})),Object(Ae.a)((function(e){return e.data}))),stopListener:t.pipe(Object(De.a)((function(e){var t;return(null===(t=e.data)||void 0===t?void 0:t.action)===je.Stop})),Object(Ae.a)((function(e){return e.data})))}}(),n=e.worker,r=e.logsListener,a=e.stopListener;t.current=n;var o=[r.subscribe(p),a.subscribe(F)];return function(){F(),o.forEach((function(e){e.unsubscribe()})),n.terminate()}}),[]);var k=function(){var t=Object(o.a)(Object(a.a)().mark((function t(){var n;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.current.getValue().trim()){t.next=4;break}return s.b.warning("enter a code"),t.abrupt("return");case 4:S(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Te,{localScripts:h,selectedLocalScriptIndex:v,setLocalScript:function(t){x(t),e.current.setValue(h[t])},setTemplate:function(t){e.current.setValue(t)}}),Object(E.jsxs)("div",{className:qe.a.editorWrapper,children:[Object(E.jsx)(I,{editorRef:e,editorScope:Se}),Object(E.jsxs)("div",{className:qe.a.buttons,children:[Object(E.jsx)(P.a,{className:"purpleButton",onClick:N?F:k,children:N?"Stop Script":"Run Script"}),Object(E.jsx)(P.a,{className:"purpleButton",onClick:function(){var t=e.current.getValue().trim();t.length?j(t):s.b.error("field is empty")},children:"Save Script"}),Object(E.jsx)(P.a,{className:"purpleButton",onClick:O,children:"Clear Saved Scripts"}),Object(E.jsx)(P.a,{className:"purpleButton",onClick:function(){return q.b.clear()},children:"Clear Statistics"})]}),Object(E.jsx)(Be,{list:l,clearLogs:d})]})]})}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t="number"!==typeof e?Number(e):e;return isFinite(t)&&!isNaN(t)&&""!==e}},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(16),a=function(e,t){var n=e.scrollHeight;n&&e.scrollTo&&e.scrollTo(Object(r.a)(Object(r.a)({},t),{},{top:n}))}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(77),a=n(23),o=function(e,t,n){var o=Object(r.toDecimal)(e).mul(t).minus(e).toDecimalPlaces(a.a,1);return n?o.toFixed(o.decimalPlaces()):o},c=n(715),i=n(1415),u=function(e,t){return Object(c.a)(e).pipe(Object(i.a)(t)).subscribe(t)}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n(4),o=function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var a,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(187).then(n.t.bind(null,52,7));case 2:return a=e.sent,o=a.Decimal,e.abrupt("return",new o(""===t?0:t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=86.28328ccc.chunk.js.map