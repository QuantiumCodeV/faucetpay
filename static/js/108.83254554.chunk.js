(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[108],{179:function(t,e,o){"use strict";var n=o(3),i=o(119);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,o){return e&&s(t.prototype,e),o&&s(t,o),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function h(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=l(t);if(e){var i=l(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return h(this,o)}}function d(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=String(t);if(0===e)return o;var n=o.match(/(.*?)([0-9]+)(.*)/),i=n?n[1]:"",r=n?n[3]:"",s=n?n[2]:o,a=s.length>=e?s:(d(Array(e)).map((function(){return"0"})).join("")+s).slice(-1*e);return"".concat(i).concat(a).concat(r)}var v={daysInHours:!1,zeroPadTime:2};function y(t,e){var o=t.days,n=t.hours,i=t.minutes,r=t.seconds,s=Object.assign(Object.assign({},v),e),a=s.daysInHours,c=s.zeroPadTime,l=s.zeroPadDays,u=void 0===l?c:l,h=Math.min(2,c),p=a?m(n+24*o,c):m(n,h);return{days:a?"":m(o,u),hours:p,minutes:m(i,h),seconds:m(r,h)}}var b=function(t){c(o,t);var e=p(o);function o(){var t;return r(this,o),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return a(o,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(n.cloneElement)(this.props.children,{count:this.state.count}):null}}]),o}(n.Component);b.propTypes={count:i.number,children:i.element,onComplete:i.func};var g=function(t){c(o,t);var e=p(o);function o(t){var i;if(r(this,o),(i=e.call(this,t)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=Object(n.createRef)(),i.tick=function(){var t=i.calcTimeDelta(),e=t.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(t,void 0,e)},i.start=function(){if(!i.isStarted()){var t=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=t?i.calcOffsetStartTimestamp()-t:0;var e=i.calcTimeDelta();i.setTimeDeltaState(e,"STARTED",i.props.onStart),i.props.controlled||e.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},t.date){var s=i.calcTimeDelta();i.state={timeDelta:s,status:s.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return a(o,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,o=t.now,n=t.precision,i=t.controlled,r=t.overtime;return function(t){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.now,i=void 0===n?Date.now:n,r=o.precision,s=void 0===r?0:r,a=o.controlled,c=o.offsetTime,l=void 0===c?0:c,u=o.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,a||(e+=l);var h=a?e:e-i(),p=Math.min(20,Math.max(0,s)),d=Math.round(1e3*parseFloat(((u?h:Math.max(0,h))/1e3).toFixed(p))),f=Math.abs(d)/1e3;return{total:d,days:Math.floor(f/86400),hours:Math.floor(f/3600%24),minutes:Math.floor(f/60%60),seconds:Math.floor(f%60),milliseconds:Number((f%1*1e3).toFixed()),completed:d<=0}}(e,{now:o,precision:n,controlled:i,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,o){var n=this;if(this.mounted){var i=t.completed&&!this.state.timeDelta.completed,r=t.completed&&"STARTED"===e;i&&!this.props.overtime&&this.clearTimer();return this.setState((function(o){var i=e||o.status;return t.completed&&!n.props.overtime?i="COMPLETED":e||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:t,status:i}}),(function(){o&&o(n.state.timeDelta),n.props.onComplete&&(i||r)&&n.props.onComplete(t,r)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,o=t.zeroPadTime,n=t.zeroPadDays,i=this.state.timeDelta;return Object.assign(Object.assign({},i),{api:this.getApi(),props:this.props,formatted:y(i,{daysInHours:e,zeroPadTime:o,zeroPadDays:n})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,o=t.children,i=t.onComplete;return Object(n.createElement)(b,{ref:this.legacyCountdownRef,count:e,onComplete:i},o)}var r=this.props,s=r.className,a=r.overtime,c=r.children,l=r.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!a)return Object(n.cloneElement)(c,{countdown:u});var h=u.formatted,p=h.days,d=h.hours,f=h.minutes,m=h.seconds;return Object(n.createElement)("span",{className:s},u.total<0?"-":"",p,p?":":"",d,":",f,":",m)}}]),o}(n.Component);g.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),g.propTypes={date:Object(i.oneOfType)([Object(i.instanceOf)(Date),i.string,i.number]),daysInHours:i.bool,zeroPadTime:i.number,zeroPadDays:i.number,controlled:i.bool,intervalDelay:i.number,precision:i.number,autoStart:i.bool,overtime:i.bool,className:i.string,children:i.element,renderer:i.func,now:i.func,onMount:i.func,onStart:i.func,onPause:i.func,onStop:i.func,onTick:i.func,onComplete:i.func},e.a=g},284:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isBrowser=void 0,e.isBrowser=function(){return"undefined"!==typeof window&&"undefined"!==typeof window.document}},339:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deleteFromStorage=e.writeStorage=e.isTypeOfLocalStorageChanged=e.LOCAL_STORAGE_CHANGE_EVENT_NAME=void 0;var n=o(340),i=o(284);e.LOCAL_STORAGE_CHANGE_EVENT_NAME="onLocalStorageChange",i.isBrowser()&&"function"!==typeof window.CustomEvent&&(window.CustomEvent=function(t,e){var o,n;void 0===e&&(e={bubbles:!1,cancelable:!1});var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,null!==(o=null===e||void 0===e?void 0:e.bubbles)&&void 0!==o&&o,null!==(n=null===e||void 0===e?void 0:e.cancelable)&&void 0!==n&&n,null===e||void 0===e?void 0:e.detail),i}),e.isTypeOfLocalStorageChanged=function(t){return!!t&&t.type===e.LOCAL_STORAGE_CHANGE_EVENT_NAME},e.writeStorage=function(t,o){if(i.isBrowser())try{n.storage.setItem(t,"object"===typeof o?JSON.stringify(o):""+o),window.dispatchEvent(new CustomEvent(e.LOCAL_STORAGE_CHANGE_EVENT_NAME,{detail:{key:t,value:o}}))}catch(r){if(r instanceof TypeError&&r.message.includes("circular structure"))throw new TypeError("The object that was given to the writeStorage function has circular references.\nFor more information, check here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value");throw r}},e.deleteFromStorage=function(t){i.isBrowser()&&(n.storage.removeItem(t),window.dispatchEvent(new CustomEvent(e.LOCAL_STORAGE_CHANGE_EVENT_NAME,{detail:{key:t,value:null}})))}},340:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.storage=e.MemoryStorageProxy=e.LocalStorageProxy=e.localStorageAvailable=void 0;var n=o(284);function i(){try{var t="@rehooks/local-storage:"+(new Date).toISOString();return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(e){return n.isBrowser()&&e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&localStorage&&0!==localStorage.length}}e.localStorageAvailable=i;var r=function(){function t(){}return t.prototype.getItem=function(t){return localStorage.getItem(t)},t.prototype.setItem=function(t,e){localStorage.setItem(t,e)},t.prototype.removeItem=function(t){localStorage.removeItem(t)},t}();e.LocalStorageProxy=r;var s=function(){function t(){this._memoryStorage=new Map}return t.prototype.getItem=function(t){var e;return null!==(e=this._memoryStorage.get(t))&&void 0!==e?e:null},t.prototype.setItem=function(t,e){this._memoryStorage.set(t,e)},t.prototype.removeItem=function(t){this._memoryStorage.delete(t)},t}();e.MemoryStorageProxy=s;e.storage=i()?new r:new s},390:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useLocalStorage=void 0;var n=o(453);Object.defineProperty(e,"useLocalStorage",{enumerable:!0,get:function(){return n.useLocalStorage}});var i=o(339);Object.defineProperty(e,"writeStorage",{enumerable:!0,get:function(){return i.writeStorage}}),Object.defineProperty(e,"deleteFromStorage",{enumerable:!0,get:function(){return i.deleteFromStorage}}),e.default=n.useLocalStorage},453:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useLocalStorage=void 0;var n=o(339),i=o(284),r=o(340),s=o(3);function a(t){try{return JSON.parse(t)}catch(e){return t}}e.useLocalStorage=function(t,e){void 0===e&&(e=null);var o=s.useState(null===r.storage.getItem(t)?e:a(r.storage.getItem(t))),c=o[0],l=o[1],u=s.useCallback((function(e){n.isTypeOfLocalStorageChanged(e)?e.detail.key===t&&l(e.detail.value):e.key===t&&l(null===e.newValue?null:a(e.newValue))}),[l,t]);s.useEffect((function(){if(i.isBrowser()){var o=function(t){u(t)};return window.addEventListener(n.LOCAL_STORAGE_CHANGE_EVENT_NAME,o),window.addEventListener("storage",o),null===r.storage.getItem(t)&&null!==e&&n.writeStorage(t,e),function(){window.removeEventListener(n.LOCAL_STORAGE_CHANGE_EVENT_NAME,o),window.removeEventListener("storage",o)}}}),[t,e,u]);var h=s.useCallback((function(e){return e instanceof Function?n.writeStorage(t,e(c)):n.writeStorage(t,e)}),[t]),p=s.useCallback((function(){return n.deleteFromStorage(t)}),[t]);return[null!==c&&void 0!==c?c:e,h,p]}},95:function(t,e,o){t.exports=o(96)},96:function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var n=o(3);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i.apply(this,arguments)}var r=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),s=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(t){if(7===t.length)return t;for(var e="#",o=1;o<4;o+=1)e+=t[o]+t[o];return e}function c(t,e,o,n,i){return function(t,e,o,n,i){var r=(t-o)/(e-o);if(0===r)return n;if(1===r)return i;for(var s="#",a=1;a<6;a+=2){var c=parseInt(n.substr(a,2),16),l=parseInt(i.substr(a,2),16),u=Math.round((1-r)*c+r*l).toString(16);1===u.length&&(u="0"+u),s+=u}return s}(t,e,o,a(n),a(i))}var l=function(t){function e(e){t.call(this,e);var o=e.height,n=e.width,i=e.checked;this.t=e.handleDiameter||o-2,this.i=Math.max(n-o,n-(o+this.t)/2),this.o=Math.max(0,(o-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,o=e.R,n=e.h,i=(this.props.checked?this.i:this.o)+t-o;e.N||t===o||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,i));r!==n&&this.setState({h:r})},e.prototype.U=function(t){var e=this.state,o=e.h,n=e.N,i=e.B,r=this.props.checked,s=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-i;(!n||a<250||r&&o<=s||!r&&o>=s)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,o=t.disabled,r=t.className,s=t.offColor,a=t.onColor,l=t.offHandleColor,u=t.onHandleColor,h=t.checkedIcon,p=t.uncheckedIcon,d=t.checkedHandleIcon,f=t.uncheckedHandleIcon,m=t.boxShadow,v=t.activeBoxShadow,y=t.height,b=t.width,g=t.borderRadius,S=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(o[n]=t[n]);return o}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,T=w.h,E=w.N,O=w.j,C={position:"relative",display:"inline-block",textAlign:"left",opacity:o?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},k={height:y,width:b,margin:Math.max(0,(this.t-y)/2),position:"relative",background:c(T,this.i,this.o,s,a),borderRadius:"number"==typeof g?g:y/2,cursor:o?"default":"pointer",WebkitTransition:E?null:"background 0.25s",MozTransition:E?null:"background 0.25s",transition:E?null:"background 0.25s"},D={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"relative",opacity:(T-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},M={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"absolute",opacity:1-(T-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},_={height:this.t,width:this.t,background:c(T,this.i,this.o,l,u),display:"inline-block",cursor:o?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+T+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:O?v:m,border:0,WebkitTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},P={height:this.t,width:this.t,opacity:Math.max(2*(1-(T-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},A={height:this.t,width:this.t,opacity:Math.max(2*((T-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"};return n.createElement("div",{className:r,style:C},n.createElement("div",{className:"react-switch-bg",style:k,onClick:o?null:this.T,onMouseDown:function(t){return t.preventDefault()}},h&&n.createElement("div",{style:D},h),p&&n.createElement("div",{style:M},p)),n.createElement("div",{className:"react-switch-handle",style:_,onClick:function(t){return t.preventDefault()},onMouseDown:o?null:this.p,onTouchStart:o?null:this.k,onTouchMove:o?null:this.M,onTouchEnd:o?null:this.m,onTouchCancel:o?null:this.O},f&&n.createElement("div",{style:P},f),d&&n.createElement("div",{style:A},d)),n.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:o,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},S,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:s,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l}}]);
//# sourceMappingURL=108.83254554.chunk.js.map