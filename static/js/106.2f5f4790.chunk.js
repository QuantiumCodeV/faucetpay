(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[106],{1272:function(e,t,a){e.exports={headerHeight:"90px",mobileHeader:"90px",footerHeight:"80px",mobileFooterHeight:"150px",mobileWidth:"900px",inviteMobile2:"600px",gameMobile1:"1050px",gameMobile4:"800px",lines:"style_lines__3BoWv",linesBox:"style_linesBox__WnH8Y",line:"style_line__1OBjA"}},1273:function(e,t,a){e.exports={game:"game_game__31XcD",gameText:"game_gameText__1jof1",fps:"game_fps__1lEdp"}},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s=function(e,t){for(var a=Array(Math.max(0,e)),s=0;s<e;s++)a[s]=t(s);return a}},1455:function(e,t,a){"use strict";a.r(t);var s=a(17),i=a(3),r=a(513),n=a.n(r),c=a(15),o=a(514),h=a(24),u=a(25),l=a(268),d=a(65),m=a(66),p=function(e,t,a){if(a){if("y"===t)return"1x";if("string"===typeof e)return""}return"string"===typeof e?e:"x"===t?"".concat(b.defaultTime*e):"".concat((b.defaultPayout*e+1).toFixed(1),"x")},f=function(e,t,a,s){return"y"===e?s[t-1]:a},v=function(e){return"y"===e?b.payoutValues:b.textValues},y=function(e,t){return v(e).map((function(a,s,i){var r=f(e,s,a,i),n=function(e,t,a,s){var i=5*t.parameters.yStart,r=t.parameters.xStart,n=Number(t.game.config.width),c=Number(t.game.config.height),o=b["".concat(e,"Multiplier")][a];return{x:"x"===e?n*o-r:0,y:"y"===e?c*o-i:c-i/2,text:p(s,e,"y"===e?0===a:n<530)}}(e,t,s,r),c=n.x,o=n.y,h=n.text;return t.add.text(c,o,h,t.state.axes.state.dotStyle)}))},g=function(e,t){var a=v(e);t.forEach((function(t,s){var i=f(e,s,a[s],a),r=p(i,e,"y"===e?0===s:window.innerWidth<600);t.setText(r)}))},x=function(e,t){var a=t?0:1;e.forEach((function(e){return e.setAlpha(a)}))},b={payoutValues:[.2,.4,.6,.9,1],textValues:[1,.8,.6,.4,.2,"0"],xMultiplier:[.966,.83,.664,.498,.332,.166],yMultiplier:[1,.8,.6,.4,.2],defaultPayout:1,defaultTime:10},w=function(){function e(t){Object(h.a)(this,e),this.scene=void 0,this.axes={x:[],y:[]},this.state={payoutSeparation:0,dotStyle:{fontFamily:"Gilroy, sans-serif",fontWeight:"300",fontSize:"14px",color:"#4b4bf3"},millisecondsSeparation:0},this.deactivated=!1,this.scene=t}return Object(u.a)(e,[{key:"create",value:function(){this.axes.y=y("y",this.scene),this.axes.x=y("x",this.scene)}},{key:"draw",value:function(e){var t=this.scene.parameters.calculatedGamePayout-1;if(!(this.deactivated||t<1||function(e){return e%2===0}(Math.round(e)))){this.axes.y.forEach((function(e,a){var s=b.payoutValues[a];if("number"===typeof s)switch(a){case 0:s*=.3;break;case 1:s*=.7}"number"===typeof s&&e.setText("".concat((t*s+1).toFixed(1),"x"))}));var a=this.scene.parameters.currentTime/1e3;a>10&&this.axes.x.forEach((function(e,t){var s=b.textValues[t];"number"===typeof s&&e.setText((a*s).toFixed(0))}))}}},{key:"hide",value:function(){this.deactivated=!0,g("y",this.axes.y),g("x",this.axes.x),x(this.axes.y,!0),x(this.axes.x,!0)}},{key:"show",value:function(){this.deactivated=!1,x(this.axes.y,!1),x(this.axes.x,!1)}}]),e}(),T=1.5,j=3,k=function(e,t){var a=e.parameters,s=a.yStart,i=a.xStart,r=[new Phaser.Math.Vector2(i*T-.5*i,Number(e.game.config.height)-s*j+s),new Phaser.Math.Vector2(Number(e.game.config.width),0)],n=[new Phaser.Math.Vector2(200,200),new Phaser.Math.Vector2(100,200)],c=e.add.graphics(),o=new Phaser.Curves.CubicBezier(r[0],n[0],n[1],r[1]),h=function(e,t){var a=Number(e.game.config.width),s=Number(e.game.config.height),i=new Phaser.Geom.Rectangle(0,0,a,s),r=t.createGeometryMask(),n=e.add.graphics().fillRectShape(i).setMask(r);return n.clear(),n.fillGradientStyle(P[e.state.engine.theme].down,P[e.state.engine.theme].up,P[e.state.engine.theme].down,P[e.state.engine.theme].up),n.fillRect(0,0,a,s),{geom:r,background:n}}(e,c),u=[],l=e.add.sprite(0,0,"head").setAngle(45).setAlpha(0).setDepth(10).setOrigin(.85,.2).setTintFill(P[e.state.engine.theme].up);return t&&(u.push(e.add.circle(o.p1.x,o.p1.y,5,65280)),u.push(e.add.circle(o.p2.x,o.p2.y,5,16776960)),u.push(e.add.circle(o.p2.x,o.p2.y,5,16711935))),{graph:{line:c,curveBezier:o,head:l},mask:h,dots:u}},O=function(e){var t=e.parameters.calculatedGamePayout-1,a=e.parameters,s=a.yStart,i=a.xStart,r=e.game.config,n=r.height,c=r.width,o=i*T,h=s*j,u=Number(c)-o,l=Number(n)-h,d=t<1?u*t+o-.5*i:Number(c)-.5*i,m=t<1?l*t+h:Number(n),p=Number(n)-m+s,f=function(e,t,a){var s,i=e.game.config,r=i.height,n=(i.width,e.parameters.calculatedGamePayout-1),c=function(s,i,c,o){var h="x"===s?t:a,u="x"===s?t:a,l=function(e){var t=0;if(e&&(t=n*(i/e)),"x"===s){var a=u*(1-n),c=u*i;return a>c?a:c+t}var o=Number(r)-(Number(r)-u)*(1-2*n),h=Number(r)-(Number(r)-u)*i;return o<h?o:h+t};if(n<1||!c)return l();var d=e.parameters.yStart*j,m="x"===s?100:50,p="x"===s?h:Number(r)-d,f=c+n*(i/m);return o&&c===o.p0[s]&&(f=l(m)),f>=p&&(f=p),f},o=null===(s=e.state.graph)||void 0===s?void 0:s.graph.curveBezier,h=c("y",.15,null===o||void 0===o?void 0:o.p1.y,o),u=c("x",.4,null===o||void 0===o?void 0:o.p1.x,o),l=c("y",.35,null===o||void 0===o?void 0:o.p2.y,o),d=c("x",.75,null===o||void 0===o?void 0:o.p2.x,o);return{dot1:{x:u,y:h},dot2:{x:d,y:l},dot3:{x:d,y:l}}}(e,d,p);return{x:d,y:p,dots:f}},S=a(43),L=function(e,t,a,s,i,r){var n=e.parameters.calculatedGamePayout,c={x:t.x,y:t.y},o=e.game.config,h=o.width,u=o.height,l=e.parameters,d=l.yStart,m=l.xStart,p=Number(h);if(n<1.05){var f=Number(e.game.config.height)-d*j+d,v=m*T-.5*m;s.x-=0,s.y+=Number(u),c.x=p-v,c.y=f}var y=function(e,t){var a={x:e.x-t.x,y:e.y-t.y};return Math.atan2(a.x,a.y)*(180/3.14)-130}(c,s),g=2;if(n<1.3&&(g=.25),i){var x=Math.floor(-y-t.angle);(x<-1||x>1)&&(-y>t.angle?t.setAngle(t.angle+g):-y<t.angle&&t.setAngle(t.angle-g))}else t.setAngle(y);r||t.setAlpha(1),t.setPosition.apply(t,Object(S.a)(a)),t.setDepth(100)},P={white:{down:13422335,up:9342719},dark:{down:1316150,up:12961279},width:5},N=function(){function e(t){Object(h.a)(this,e),this.scene=void 0,this.graph=void 0,this.mask=void 0,this.dots=void 0,this.currentGraphPosition=[0,0],this.deactivated=!1,this.isWebGL=void 0,this.isStarted=!1;var a=k(t),s=a.graph,i=a.mask,r=a.dots;this.graph=s,this.mask=i,this.dots=r,this.scene=t,this.isWebGL=t.renderer.type===Phaser.WEBGL}return Object(u.a)(e,[{key:"draw",value:function(){if(!(this.scene.parameters.calculatedGamePayout>100&&this.deactivated)){var e=this.scene.state.engine.theme,t=O(this.scene),a=t.x,s=t.y,i=t.dots;if(this.currentGraphPosition=[a,s],this.graph.curveBezier.p1=new Phaser.Math.Vector2(i.dot1.x,i.dot1.y),this.graph.curveBezier.p2=new Phaser.Math.Vector2(i.dot2.x,i.dot2.y),this.graph.curveBezier.p3=new Phaser.Math.Vector2(a,s),this.graph.line.clear(),this.graph.line.lineStyle(P.width,P[e].up,this.isWebGL?0:1).setDepth(1),this.graph.curveBezier.draw(this.graph.line).setDepth(2),this.dots.length)try{this.dots[0]&&(this.dots[0].x=this.graph.curveBezier.p1.x,this.dots[0].y=this.graph.curveBezier.p1.y),this.dots[1]&&(this.dots[1].x=this.graph.curveBezier.p2.x,this.dots[1].y=this.graph.curveBezier.p2.y),this.dots[2]&&(this.dots[2].x=i.dot3.x,this.dots[2].y=i.dot3.y)}catch(r){console.error("curveBezier dots: ",i,this.dots)}L(this.scene,this.graph.head,this.currentGraphPosition,i.dot3,this.isStarted,this.deactivated),this.isStarted=!0}}},{key:"hide",value:function(){this.deactivated=!0,this.graph.head.setAlpha(0),this.mask.background.setAlpha(0),this.graph.line.setAlpha(0)}},{key:"show",value:function(){this.deactivated=!1,this.mask.background.setAlpha(1),this.graph.line.setAlpha(1)}}]),e}(),G=function(e){return e.promo="/crash-promo",e}({}),_=1,M=function(){function e(t,a){Object(h.a)(this,e),this.scene=void 0,this.isLocal=void 0,this.startedTime=void 0,this.textElement=document.querySelector("#crash-payout-text"),this.timeToStart=-1,this.defaultTimeValue=6,this.lettersAmt=0,this.wrapperHeight=0,this.textTop=0,this.scene=t,this.isLocal=a,this.startedTime=Date.now()}return Object(u.a)(e,[{key:"createPayoutText",value:function(e,t){var a=Number(e).toFixed(2);if(!this.isLocal){var s=t?2:1,i=Number(this.scene.parameters.webGamePayout).toFixed(2),r=i.slice(0,i.length-s),n=a.slice(a.length-s,a.length);return"".concat(r).concat(n)}return a}},{key:"draw",value:function(){if(this.textElement)switch(this.scene.parameters.gameCircle){case"loading":this.alignText();break;case"update_value":this.isLocal||0===this.scene.parameters.currentTime||this.textElement.classList.contains("crashGameAnimation")||(this.textElement.style.animationDelay="-".concat(this.scene.parameters.currentTime,"ms"),this.textElement.classList.add("crashGameAnimation")),6!==this.timeToStart&&(this.timeToStart=6);var e="";e=!this.isLocal&&Number(this.scene.parameters.webGamePayout)<1.1?"".concat(this.scene.parameters.webGamePayout,"x"):"".concat(this.createPayoutText(this.scene.parameters.calculatedGamePayout,!this.isLocal&&Number(this.scene.parameters.webGamePayout)>30),"x"),this.textElement.innerHTML!==e&&(this.textElement.innerHTML=e),this.alignText();break;case"crashed":_=0;var t="Crashed @ ".concat(this.isLocal?this.scene.parameters.calculatedGamePayout.toFixed(2):Number(this.scene.parameters.webGamePayout).toFixed(2),"x");this.textElement.innerHTML!==t&&(this.textElement.innerHTML=t),this.timeToStart=-1,this.textElement.classList.remove("crashGameAnimation"),this.alignText();break;case"new_round":this.scene.parameters.calculatedGamePayout=1,this.timeToStart=this.isLocal?Date.now()-this.startedTime:Date.now()-this.scene.state.socket.state.newRoundTime;var a=this.isLocal?Math.abs(Number(this.defaultTimeValue/2-this.timeToStart/1e3)):.11*++_,s="Starts in ".concat(this.createPayoutText(a));this.timeToStart<0&&(this.timeToStart=0),this.textElement.innerHTML!==s&&(this.textElement.innerHTML=s),this.alignText()}else this.textElement=document.querySelector("#crash-payout-text")}},{key:"alignText",value:function(){var e,t=this.textElement;if(t){var a=t.parentElement.offsetHeight;if(a!==this.wrapperHeight){this.wrapperHeight=a;var s=window.getComputedStyle(t,null).getPropertyValue("font-size");this.textTop=a/2-parseFloat(s)}var i=100*Math.round(t.offsetWidth/100),r=((null===(e=t.textContent)||void 0===e?void 0:e.length)||1)-1;if(r!==this.lettersAmt){this.lettersAmt=r;var n=(Number(this.scene.game.config.width)-i)/2;t.style.transform="translate(".concat(n,"px, ").concat(this.textTop,"px)")}}}}]),e}(),E=a(176),H=(a(303),a(207));var V=function(){function e(t,a){Object(h.a)(this,e),this.scene=void 0,this.isLocal=void 0,this.socketStarted=!1,this.isTimeSet=!1,this.state={currentTime:-1,currentValue:1,newRoundTime:-1,startedTime:0,process:"update_value",path:window.location.pathname},this.between=9500,this.scene=t,this.isLocal=a}return Object(u.a)(e,[{key:"listener",value:function(){switch(this.scene.parameters.gameCircle){case"crashed":this.scene.parameters.calculatedGamePayout=this.state.currentValue,this.state.newRoundTime=-1,this.scene.parameters.isGameHidden||this.scene.crashed();break;case"update_value":this.scene.savedTime=this.state.startedTime,this.scene.parameters.isGameHidden&&this.state.currentValue>=1.01&&this.scene.restart(),function(e){var t=document.getElementById("crash-pay-button");try{if(t){var a=localStorage.getItem(H.a);if(a){var s=JSON.parse(a),i=Number(s.value)*Number(e)-Number(s.value),r="".concat(Number(i).toFixed(8)," ").concat(s.coin);t.innerHTML=r}}}catch(c){var n="\n      ".concat(c.stack,"\n      calculateButton\n      localStorage: ").concat(JSON.stringify(localStorage));console.error("error when try set button cashout text: ".concat(n))}}(Number(this.scene.parameters.webGamePayout));break;case"new_round":this.scene.parameters.isGameHidden||this.scene.crashed()}}},{key:"getMessages",value:function(){var e=this;if(this.isLocal)this.scene.parameters.gameCircle="new_round",this.state.currentValue=6;else{E.b.gameCircleListener=function(t){switch(t.method){case"update_value":e.scene.parameters.gameCircle!==t.method&&(e.scene.parameters.gameCircle=t.method,e.state.currentTime=Number(t.actualGameTime),e.state.currentValue=Number(t.value),e.state.startedTime=t.startedTime),e.scene.parameters.webGamePayout=t.value;break;case"crashed":e.scene.parameters.gameCircle!==t.method&&(e.scene.parameters.gameCircle=t.method,e.state.currentValue=Number(t.value)),e.scene.parameters.webGamePayout=t.value;break;case"new_round":e.scene.parameters.gameCircle!==t.method&&(e.scene.parameters.gameCircle=t.method,-1===e.state.newRoundTime&&(e.state.newRoundTime=t.time,e.scene.state.payoutText.defaultTimeValue=Number(t.value))),e.scene.parameters.webGamePayout=t.value}},E.b.gameUsersListener=this.scene.state.users.createPlayerListener()}}}]),e}(),A=a(16),C=a(27),B=null,U={},F=function(){function e(t){Object(h.a)(this,e),this.scene=void 0,this.listenerUserList={},this.winnersUsers={},this.winnerList={},this.userTextStyles={fontSize:"0.625rem",color:"white"},this.scene=t}return Object(u.a)(e,[{key:"watch",value:function(){this.playersListListener(),this.newWinnerListener(),this.winnersListener(),"crashed"===this.scene.parameters.gameCircle&&this.clear()}},{key:"clear",value:function(){for(var e in this.winnersUsers){var t;if(this.winnersUsers[e])null===(t=this.winnersUsers[e].body)||void 0===t||t.destroy(),delete this.winnersUsers[e],delete this.winnerList[e]}B=null,U={},this.winnerList={}}},{key:"playersListListener",value:function(){if(U!==this.listenerUserList){for(var e in this.listenerUserList){var t,a=this.winnersUsers[e];if(a)null===(t=a.body)||void 0===t||t.destroy(),delete this.winnersUsers[e],delete this.winnerList[e]}this.listenerUserList=U}}},{key:"newWinnerListener",value:function(){B&&(this.winnerList[B.id]=B,B=null)}},{key:"winnersListener",value:function(){var e=this;Object.values(this.winnerList).forEach((function(t){var a,i,r=t.at,n=t.id,c=e.listenerUserList[n],o=null===(a=e.scene.state.graph)||void 0===a?void 0:a.currentGraphPosition;if(c&&o&&(null===(i=e.winnersUsers[n])||void 0===i||!i.body)){var h=Object(s.a)(o,2),u=h[0],l=h[1],d=e.scene.game.config,m=d.height,p=d.width,f=e.scene.add.text(u>Number(p)/2?u-50:u+100,l,"".concat(c.user_name," @").concat(Object(C.a)("".concat(r)),"x"),e.userTextStyles).setOrigin(1,.5),v=e.scene.tweens.add({targets:f,y:m,x:100,alpha:0,duration:2500,ease:"Cubic.easeIn"});v.on("complete",(function(){try{null===f||void 0===f||f.destroy(),delete e.winnersUsers[n],delete e.winnerList[n]}catch(a){var t="\n              error on tween destroy:\n              user: ".concat(e.winnersUsers[n].user_name," /\n              ").concat(JSON.stringify(e.winnersUsers),"\n            ");console.error(t)}})),e.winnersUsers[n]=Object(A.a)(Object(A.a)({},c),{},{y:l,body:f,tween:v})}}))}},{key:"createPlayerListener",value:function(){return function(e){switch(e.method){case"current_bets":!function(e){for(var t in U={},e){var a=e[t];a&&(U[a.user_id]={profit:a.profit||null,user_id:a.user_id,user_name:a.user_name,cashed_out_at:a.cashed_out_at})}}(e.bets);break;case"bet_cashedout_update":a=e.user_id,s=e.at,B={at:s,id:a};break;case"new_bet":t=e.bet,U[t.user_id]=t}var t,a,s}}}]),e}(),W=[{method:"image",data:[["head","/assets/images/head.png"]]},{method:"css",data:[["Gilroy","/assets/crash/css/crash.css"]]}],z=a(32);function D(e){var t=this;try{null===e||void 0===e||e.forEach((function(e){var a=e.name,s=e.data;t[a]=s}))}catch(a){console.error(a),z.b.error("Something went wrong while downloading the file")}}function R(e){var t=this;e.forEach((function(e){var a=e.method;e.data.forEach((function(e){var s;(s=t.load)[a].apply(s,Object(S.a)(e))}))}))}var I=function(){function e(t){Object(h.a)(this,e),this.scene=void 0,this.loader=void 0,this.objects=void 0,this.fpsDomObject=void 0,this.calculateValues={YAxisSizeMultiplier:2,XAxisPlotMinValue:1e4},this.theme="dark",this.onlineStatus="online",this.scene=t,this.objects={},this.loader={preload:R.bind(this.scene),addObjects:D.bind(this.objects)};var a=localStorage.getItem("color-scheme");this.theme="light"===a?"white":"dark"}return Object(u.a)(e,[{key:"showFps",value:function(){if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0])){var e=this.fpsDomObject;if(e){var t=this.scene.game.loop.actualFps;e.innerHTML=t.toFixed(1)}else this.fpsDomObject=document.querySelector("#crashFPS")}}},{key:"calcGamePayout",value:function(e,t){var a=100*Math.exp(6e-5*e)/100;a>=1.01&&this.scene.restart();var s=Number(this.scene.parameters.webGamePayout);return Math.floor(a)>Math.ceil(s)&&(a=t?a:s),a}}]),e}(),J=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state=void 0,s.savedTime=-1,s.parameters={plotHeight:10,plotWidth:40,xStart:40,yStart:10,gameCircle:"loading",calculatedGamePayout:1,webGamePayout:0,heightIncrement:0,currentTime:0,widthIncrement:0,isGameHidden:!1},s.isLocal=window.location.pathname===G.promo,s.state={engine:new I(Object(l.a)(s)),payoutText:new M(Object(l.a)(s),s.isLocal),axes:new w(Object(l.a)(s)),socket:new V(Object(l.a)(s),s.isLocal),users:new F(Object(l.a)(s))},s}return Object(u.a)(a,[{key:"preload",value:function(){this.parameters.plotHeight=Number(this.game.config.height)-10,this.parameters.plotWidth=Number(this.game.config.width)-40,this.state.engine.loader.preload(W),"white"===this.state.engine.theme&&(this.state.users.userTextStyles.color="black"),this.state.axes.create(),this.state.axes.hide()}},{key:"create",value:function(){this.state.graph=new N(this),this.state.socket.getMessages(),this.crashed(),this.game.canvas.style.opacity="1"}},{key:"update",value:function(e,t){var a,s;null===(a=this.state.graph)||void 0===a||a.draw(),null===(s=this.state.axes)||void 0===s||s.draw(e),this.state.payoutText.draw(),this.timeCalculate(),this.parameters.calculatedGamePayout=this.state.engine.calcGamePayout(this.parameters.currentTime,this.isLocal),this.state.socket.listener(),this.state.users.watch()}},{key:"timeCalculate",value:function(){if("update_value"===this.parameters.gameCircle)if(this.savedTime>0){var e=Date.now()-this.savedTime;this.parameters.currentTime=e}else 0===this.savedTime&&(this.savedTime=Date.now());else this.savedTime=-1}},{key:"crashed",value:function(){var e,t;null===(e=this.state.graph)||void 0===e||e.hide(),this.savedTime=-1,this.parameters.currentTime=0,null===(t=this.state.axes)||void 0===t||t.hide(),this.parameters.isGameHidden=!0}},{key:"restart",value:function(){var e,t;null===(e=this.state.graph)||void 0===e||e.show(),null===(t=this.state.axes)||void 0===t||t.show(),this.parameters.isGameHidden=!1}}]),a}(r.Scene),q={type:Phaser.AUTO,scene:[J],width:670,height:320,parent:"crash-app-box",dom:{createContainer:!1},audio:{disableWebAudio:!0},disableContextMenu:!1,transparent:!0},X=a(128),Y=a(1272),K=a.n(Y),Q=a(0),Z=function(e){var t=e.height,a=e.width;return Object(Q.jsx)("section",{className:K.a.lines,style:{width:a,height:t},children:Object(Q.jsx)("div",{className:K.a.linesBox,children:Object(X.a)(11,(function(e){return Object(Q.jsx)("div",{className:K.a.line},"lineNumber_".concat(e))}))})})},$=a(1273),ee=a.n($);t.default=function(e){var t=e.render,a=Object(i.useRef)(null),r=Object(i.useRef)(q),h=Object(i.useRef)(),u=Object(i.useRef)(),l=Object(i.useState)({w:0,h:0}),d=Object(s.a)(l,2),m=d[0],p=d[1],f=function(){var e;if(null===(e=u.current)||void 0===e||e.destroy(!0,!1),h.current){var t=h.current.querySelector("canvas");null===t||void 0===t||t.remove()}a.current&&(a.current.innerText="")};return Object(i.useEffect)((function(){t?u.current=new n.a.Game(r.current):f()}),[t]),Object(i.useEffect)((function(){return function(){f()}}),[]),Object(Q.jsxs)("div",{id:"crash-app-box",className:ee.a.game,ref:function(e){e&&(h.current=e,function(e){var t=r.current.width=e.offsetWidth,a=r.current.height=.4*e.offsetWidth+10;m.w!==t&&m.h!==a&&p({h:a,w:t})}(e))},children:[Object(o.a)()&&Object(Q.jsx)("p",{id:"crashFPS",className:ee.a.fps}),Object(Q.jsx)("h1",{className:Object(c.a)(ee.a.gameText),id:"crash-payout-text",ref:a,children:""}),Object(Q.jsx)(Z,{height:m.h,width:m.w})]})}},303:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},514:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s=function(e){return!!e&&"front.taprewards.io"===window.location.hostname}}}]);
//# sourceMappingURL=106.2f5f4790.chunk.js.map