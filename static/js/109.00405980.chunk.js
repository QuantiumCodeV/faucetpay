(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[109],{1462:function(e,t,i){"use strict";i.r(t);var n=i(3),a=i.n(n),s=i(24),l=i(25),r=i(268),o=i(65),h=i(66),c=i(513),u=i(304),f=i(43),d=i(17),v=i(16),p=i(670),b=i(671),y=i(158),m=Object.keys(b).length,w=function(){function e(t){Object(s.a)(this,e),this.scene=void 0,this.ball=void 0,this.layer=void 0,this.circlePath=void 0,this.circleFollower=void 0,this.finishPath=void 0,this.finishTween=void 0,this.finishFollower=void 0,this.rouletteCellNumber=null,this.animationStepState={finish:!1,default:!1,isReady:!1},this.scene=t,this.circleFollower={t:0,vec:new Phaser.Math.Vector2},this.finishFollower=Object(v.a)({},this.circleFollower)}return Object(l.a)(e,[{key:"draw",value:function(){var e=this;this.layer=this.scene.add.container(P/2,P/2),this.ball=this.scene.add.circle(0,0,5,16777215).setOrigin(.5),this.layer.add(this.ball),y.f.setFinishAnimation=function(t){e.animationStepState.isReady=!0,e.rouletteCellNumber="".concat(t)},y.f.setStartAnimation=function(){e.animationStepState.finish=!1,e.animationStepState.default=!1,e.rouletteCellNumber="18"},y.f.setStopAnimation=function(){e.rouletteCellNumber=null}}},{key:"createCirclePath",value:function(){var e=(P+P)/4.5;this.circlePath=new Phaser.Curves.Path,this.circlePath.add(new Phaser.Curves.Ellipse(P/2,P/2,e)),this.scene.tweens.add({targets:this.circleFollower,t:1,ease:"Sine.linear",duration:1e3,repeat:-1})}},{key:"createFinishPath",value:function(){var e=this;this.finishPath=Object(u.a)(Phaser.Curves.Path,Object(f.a)(p[0])),p.forEach((function(t){var i,n=Object(d.a)(t,2),a=n[0],s=n[1];return null===(i=e.finishPath)||void 0===i?void 0:i.lineTo(a,s)})),this.finishTween=this.scene.tweens.add({targets:this.finishFollower,t:1,ease:"Sine.Out",duration:2500,repeat:0,onComplete:function(){y.e.forEach((function(e){return e()}))}})}},{key:"checkPath",value:function(){var e,t={x:220,y:142};if(this.rouletteCellNumber)if(this.animationStepState.finish){var i;null===(i=this.finishPath)||void 0===i||i.getPoint(this.finishFollower.t,this.finishFollower.vec),t.x=this.finishFollower.vec.x,t.y=this.finishFollower.vec.y}else{var n;if(null===(n=this.circlePath)||void 0===n||n.getPoint(this.circleFollower.t,this.circleFollower.vec),t.x=this.circleFollower.vec.x,t.y=this.circleFollower.vec.y,this.animationStepState.default){var a,s=Math.round(t.x),l=Math.round(t.y);if(s>=250&&s<=260&&l>=130&&l<=140)this.animationStepState.finish=!0,null===(a=this.finishTween)||void 0===a||a.restart()}}null===(e=this.ball)||void 0===e||e.setPosition(t.x-P/2,t.y-P/2)}},{key:"drawPath",value:function(e){var t=this.scene.add.graphics();t.lineStyle(2,16777215,1),e.draw(t)}},{key:"setFinishValue",value:function(){if(this.layer&&this.rouletteCellNumber){var e=360/m*b[this.rouletteCellNumber],t=this.layer.angle<0?360+this.layer.angle:this.layer.angle,i=Number((e-t).toFixed(0));if(0===i||-360===i)this.layer.setAngle(e),this.animationStepState.isReady&&(this.animationStepState.default=!0,this.animationStepState.isReady=!1);else{var n=Math.min(i>0?.5*i:.5*(360+i),5);this.layer.setAngle(this.layer.angle+n)}}}}]),e}(),S=function(e){Object(o.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).entities=void 0,n.fpsDomObject=void 0,n.entities={roulette:new w(Object(r.a)(n))},n.fpsDomObject=document.querySelector("#rouletteFPS"),n}return Object(l.a)(i,[{key:"showFps",value:function(){if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0])&&this.fpsDomObject){var e=this.game.loop.actualFps;this.fpsDomObject.innerHTML=e.toFixed(1)}}},{key:"preload",value:function(){this.entities.roulette.draw()}},{key:"create",value:function(){this.entities.roulette.createCirclePath(),this.entities.roulette.createFinishPath()}},{key:"update",value:function(){this.entities.roulette.checkPath(),this.entities.roulette.setFinishValue(),this.showFps(!0)}}]),i}(c.Scene),F=i(672),O=i.n(F),P=Number(O.a.rouletteBoxSize),j={type:Phaser.AUTO,scene:[S],width:P,height:P,parent:"roulette-app-box",dom:{createContainer:!1},audio:{disableWebAudio:!0},disableContextMenu:!1,transparent:!0},g=i(0),x=a.a.memo((function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){return e.current=new Phaser.Game(j),function(){var t;null===(t=e.current)||void 0===t||t.destroy(!0,!1)}}),[]),Object(g.jsx)("div",{id:"roulette-app-box",className:O.a.rouletteRoot,children:Object(g.jsx)("img",{src:"/assets/roulette/panel.svg",alt:"roulette",className:O.a.img})})}));t.default=x},304:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(275),a=i(363);function s(e,t,i){return s=Object(a.a)()?Reflect.construct.bind():function(e,t,i){var a=[null];a.push.apply(a,t);var s=new(Function.bind.apply(e,a));return i&&Object(n.a)(s,i.prototype),s},s.apply(null,arguments)}},670:function(e){e.exports=JSON.parse("[[255,145],[195,200],[200,220],[190,240],[170,250],[150,230],[115,225],[90,245],[80,245],[70,225],[80,200],[70,190],[40,190],[30,180],[25,160],[60,140],[60,130],[35,110],[45,90],[60,90],[70,85],[75,70],[75,55],[100,40],[115,50],[130,45],[150,55],[150,55],[160,55]]")},671:function(e){e.exports=JSON.parse('{"0":8,"1":31,"2":14,"3":6,"4":12,"5":27,"6":18,"7":2,"8":24,"9":35,"10":26,"11":22,"12":4,"13":20,"14":33,"15":10,"16":29,"17":16,"18":0,"19":11,"20":32,"21":13,"22":36,"23":25,"24":28,"25":15,"26":7,"27":19,"28":3,"29":1,"30":23,"31":34,"32":9,"33":30,"34":17,"35":5,"36":21}')},672:function(e,t,i){e.exports={rouletteBoxSize:"270",img:"style_img__15ElF",rouletteRoot:"style_rouletteRoot__2w5hk",roulette:"style_roulette__3pIl1"}}}]);
//# sourceMappingURL=109.00405980.chunk.js.map