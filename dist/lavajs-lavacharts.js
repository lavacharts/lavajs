!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports=n(15)},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){function n(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},function(t,e,n){var r=n(9),o=n(2);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(12);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){var r=n(16);function o(e,n,a){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,n){var o=r(t,e);if(o){var a=Object.getOwnPropertyDescriptor(o,e);return a.get?a.get.call(n):a.value}},o(e,n,a||e)}t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var a=0,i=r.length;a<i;a++)r[a].fn!==e&&r[a].fn._!==e&&o.push(r[a]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){var r=n(4),o=n(12),a=n(17),i=n(18);function s(e){var n="function"==typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!a(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return i(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},s(e)}t.exports=s},function(t,e,n){(function(r){e.log=function(...t){return"object"==typeof console&&console.log&&console.log(...t)},e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,t=>{"%%"!==t&&(r++,"%c"===t&&(o=r))}),e.splice(o,0,n)},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug")}catch(t){}!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.exports=n(20)(e);const{formatters:o}=t.exports;o.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}).call(this,n(19))},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r=l;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=E(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function g(){}function y(){}function v(){}var w={};w[a]=function(){return this};var m=Object.getPrototypeOf,C=m&&m(m(O([])));C&&C!==n&&r.call(C,a)&&(w=C);var b=v.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var s=u(t[n],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=b.constructor=v,v.constructor=y,v[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o){var a=new k(c(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r=n(4);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var r=n(12);function o(e,n,a){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?t.exports=o=function(t,e,n){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return n&&r(a,n.prototype),a}:t.exports=o=Reflect.construct,o.apply(null,arguments)}t.exports=o},function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var c,u=[],l=!1,f=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var t=s(h);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){t.exports=function(t){function e(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return r.colors[Math.abs(e)%r.colors.length]}function r(t){let n;function i(...t){if(!i.enabled)return;const e=i,o=Number(new Date),a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o,t[0]=r.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let s=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;s++;const a=r.formatters[o];if("function"==typeof a){const r=t[s];n=a.call(e,r),t.splice(s,1),s--}return n}),r.formatArgs.call(e,t),(e.log||r.log).apply(e,t)}return i.namespace=t,i.enabled=r.enabled(t),i.useColors=r.useColors(),i.color=e(t),i.destroy=o,i.extend=a,"function"==typeof r.init&&r.init(i),r.instances.push(i),i}function o(){const t=r.instances.indexOf(this);return-1!==t&&(r.instances.splice(t,1),!0)}function a(t,e){const n=r(this.namespace+(void 0===e?":":e)+t);return n.log=this.log,n}function i(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},r.disable=function(){const t=[...r.names.map(i),...r.skips.map(i).map(t=>"-"+t)].join(",");return r.enable(""),t},r.enable=function(t){let e;r.save(t),r.names=[],r.skips=[];const n=("string"==typeof t?t:"").split(/[\s,]+/),o=n.length;for(e=0;e<o;e++)n[e]&&("-"===(t=n[e].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+t.substr(1)+"$")):r.names.push(new RegExp("^"+t+"$")));for(e=0;e<r.instances.length;e++){const t=r.instances[e];t.enabled=r.enabled(t.namespace)}},r.enabled=function(t){if("*"===t[t.length-1])return!0;let e,n;for(e=0,n=r.skips.length;e<n;e++)if(r.skips[e].test(t))return!1;for(e=0,n=r.names.length;e<n;e++)if(r.names[e].test(t))return!0;return!1},r.humanize=n(21),Object.keys(t).forEach(e=>{r[e]=t[e]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=e,r.enable(r.load()),r}},function(t,e){var n=1e3,r=60*n,o=60*r,a=24*o,i=7*a,s=365.25*a;function c(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,e){e=e||{};var u=typeof t;if("string"===u&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!e)return;var c=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*a;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===u&&isFinite(t))return e.long?function(t){var e=Math.abs(t);if(e>=a)return c(t,e,a,"day");if(e>=o)return c(t,e,o,"hour");if(e>=r)return c(t,e,r,"minute");if(e>=n)return c(t,e,n,"second");return t+" ms"}(t):function(t){var e=Math.abs(t);if(e>=a)return Math.round(t/a)+"d";if(e>=o)return Math.round(t/o)+"h";if(e>=r)return Math.round(t/r)+"m";if(e>=n)return Math.round(t/n)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){"use strict";n.r(e);var r,o=n(1),a=n.n(o),i=n(5),s=n.n(i),c=n(3),u=n.n(c),l=n(8),f=n.n(l),h=n(6),p=n.n(h),d=n(2),g=n.n(d),y=n(4),v=n.n(y),w=n(10),m=n.n(w),C=n(7),b=n.n(C),x=n(0),k=n.n(x),E=n(11),F=n(9),L=n.n(F),S=n(13),O=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"There was an error";return u()(this,e),p()(this,v()(e).call(this,t))}return b()(e,t),e}(n.n(S)()(Error)),T=function(t){function e(t){return u()(this,e),p()(this,v()(e).call(this,'[lava.js] "'.concat(L()(t),'" is not a valid callback.')))}return b()(e,t),e}(O),A=function(t){function e(t){return u()(this,e),p()(this,v()(e).call(this,'[lava.js] A drawable with the label "'.concat(t,'" was not found.')))}return b()(e,t),e}(O),R=function(t){function e(t){return u()(this,e),p()(this,v()(e).call(this,t))}return b()(e,t),e}(O),j=function(t){function e(t){return u()(this,e),p()(this,v()(e).call(this,'[lava.js] DOM node where id="'.concat(t,'" was not found.')))}return b()(e,t),e}(O),P=function(){function t(e,n,r){u()(this,t),this.url=e,this.opts=n,k()(this,"transformer",void 0),this.opts={sendMethod:"auto"},this.transformer=function(t){return t},"function"==typeof r&&(this.transformer=r),n&&(this.opts=n)}return f()(t,[{key:"send",value:function(){var t=this,e=new window.google.visualization.Query(this.url,this.opts);return new Promise((function(n,r){t.transformer(e).send((function(t){t.isError()&&r(t),n(t)}))}))}}],[{key:"create",value:function(e){if(!e.url)throw new R('"url" is a mandatory parameter for creating a DataQuery.');var n=new t(e.url);return"object"===L()(e.opts)&&(n.opts=e.opts),"function"==typeof e.transformer&&(n.transformer=e.transformer),n}}]),t}();!function(t){t.GOOGLE_READY="google-ready",t.INITIALIZING="init",t.PRE_DRAW="predraw",t.DRAW="draw",t.POST_DRAW="postdraw",t.RESIZE="window-resize",t.READY="ready"}(r||(r={}));var D,_=n(14);!function(t){t[t.CLASS=0]="CLASS",t[t.PACKAGE=1]="PACKAGE",t[t.VERSION=2]="VERSION"}(D||(D={}));var G={AnnotationChart:["AnnotationChart","annotationchart",1],AreaChart:["AreaChart","corechart",1],BarChart:["BarChart","corechart",1],BubbleChart:["BubbleChart","corechart",1],CalendarChart:["Calendar","calendar",1],CandlestickChart:["CandlestickChart","corechart",1],ColumnChart:["ColumnChart","corechart",1],ComboChart:["ComboChart","corechart",1],DonutChart:["PieChart","corechart",1],GanttChart:["Gantt","gantt",1],GaugeChart:["Gauge","gauge",1],GeoChart:["GeoChart","geochart",1],HistogramChart:["Histogram","corechart",1],LineChart:["LineChart","corechart",1],PieChart:["PieChart","corechart",1],SankeyChart:["Sankey","sankey",1],ScatterChart:["ScatterChart","corechart",1],SteppedAreaChart:["SteppedAreaChart","corechart",1],TableChart:["Table","table",1],TimelineChart:["Timeline","timeline",1],TreeMapChart:["TreeMap","treemap",1],WordTreeChart:["WordTree","wordtree",1]};function I(t,e){return G[t][e]}function N(t){var e="[LavaJs]".concat(t?" (".concat(t,")"):"");return Object(_.debug)(e)}function M(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];null!=t&&(t.addEventListener?t.addEventListener(e,n,r):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n)}function z(t){return"function"==typeof t?t(new window.google.visualization.DataTable):Array.isArray(t)?window.google.visualization.arrayToDataTable(t):"function"==typeof t.getTableProperties?t:Array.isArray(t.data)?window.google.visualization.data.join(new window.google.visualization.DataTable(t.data[0]),new window.google.visualization.DataTable(t.data[1]),t.keys,t.joinMethod,t.dt1Columns,t.dt2Columns):("object"===L()(t.data)&&(t=t.data),new window.google.visualization.DataTable(t))}var V=function(t){function e(t){var n;return u()(this,e),n=p()(this,v()(e).call(this)),k()(g()(n),"options",void 0),k()(g()(n),"data",void 0),k()(g()(n),"googleChart",void 0),k()(g()(n),"type",void 0),k()(g()(n),"class",void 0),k()(g()(n),"package",void 0),k()(g()(n),"elementId",void 0),k()(g()(n),"label",void 0),k()(g()(n),"formats",void 0),k()(g()(n),"events",void 0),k()(g()(n),"logger",void 0),k()(g()(n),"dataSrc",void 0),n.type=t.type,n.label=t.label,n.dataSrc=t.data,n.elementId=t.elementId,n.logger=N(n.uuid),n.logger.log("Creating new Drawable"),n.logger.log(t),n.options=t.options||{},n.formats=t.formats||[],n.events=t.events||{},n.class=I(n.type,D.CLASS),n.package=I(n.type,D.PACKAGE),n.attachEventRelays(),n}var n,o,i,c,l;return b()(e,t),f()(e,[{key:"draw",value:(l=s()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.container){t.next=2;break}throw new j(this.elementId);case 2:return t.next=4,this.setData(this.dataSrc);case 4:if(this.data){t.next=6;break}throw new R("Could not draw, data is ".concat(this.data));case 6:this.formats&&this.applyFormats();case 7:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"setData",value:(c=s()(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e instanceof P)){t.next=10;break}return this.logger.log("Sending DataQuery"),t.next=4,e.send();case 4:n=t.sent,this.logger.log("Response received"),this.logger.log(n),this.data=n.getDataTable(),t.next=11;break;case 10:this.data=z(e);case 11:if(this.data instanceof google.visualization.DataTable!=0){t.next=13;break}throw new R("There was a error setting the data for ".concat(this.uuid));case 13:this.logger.log("Setting data"),this.logger.log(this.data),e.formats&&this.applyFormats(e.formats);case 16:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"applyFormats",value:function(t){t&&(this.formats=t);var e=!0,n=!1,r=void 0;try{for(var o,a=this.formats[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var i=o.value,s=new window.google.visualization[i.type](i.options);this.logger.log("Formatting column [".concat(i.index,"] with:")),this.logger.log(i),s.format(this.data,i.index)}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"updateData",value:(i=s()(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setData(e);case 2:return this.draw(),t.abrupt("return",{data:this.data,chart:this.googleChart,options:this.options});case 4:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"updateOptions",value:(o=s()(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.options=Object.assign(this.options,e),this.draw(),t.abrupt("return",{data:this.data,chart:this.googleChart,options:this.options});case 3:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"attachEventRelays",value:(n=s()(a.a.mark((function t(){var n,o,i=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.lava,t.next=3,n.getGoogle();case 3:o=t.sent,n.on(r.DRAW,(function(){return i.draw()})),e.CHART_EVENTS.forEach((function(t){o.visualization.events.addListener(i.googleChart,t,i.fireEvent)}));case 6:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"fireEvent",value:function(t){this.logger.log("Firing <".concat(t,">"));var e={chart:this.googleChart,data:this.data};this.emit(t,e)}},{key:"uuid",get:function(){return this.type+":"+this.label}},{key:"container",get:function(){return document.getElementById(this.elementId)}}]),e}(E.TinyEmitter);function W(t){return function(e){return new window.google.visualization[e](t)}}k()(V,"CHART_EVENTS",["ready","select","error","onmouseover","onmouseout"]);var H,U=function(t){function e(t){var n;return u()(this,e),n=p()(this,v()(e).call(this,t)),k()(g()(n),"png",!1),n.png=Boolean(t.png),n}var n;return b()(e,t),f()(e,[{key:"draw",value:(n=s()(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m()(v()(e.prototype),"draw",this).call(this);case 2:n=W(this.container),this.googleChart=n(this.class),this.events&&this.attachEvents(),this.googleChart.draw(this.data,this.options),this.png&&this.drawPng();case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"drawPng",value:function(){var t=document.createElement("img");t.src=this.googleChart.getImageURI(),this.container&&(this.container.innerHTML="",this.container.appendChild(t))}},{key:"attachEvents",value:function(){var t=this;Object.keys(this.events).forEach((function(e){var n=t.events[e],r=window,o=n;"object"===L()(n)&&(r=r[n[0]],o=n[1]),t.logger.log("The <".concat(e,"> event will be handled by:")),t.logger.log(o),t.logger.log("within the context of:"),t.logger.log(r),M(t.googleChart,e,(function(){console.log("EVENTS!"),Object.bind(r[Object.call.prototype.toString(o)],t.googleChart)(t.data)}))}))}}]),e}(V),B=function(t){function e(t){var n;return u()(this,e),t.type="Dashboard",n=p()(this,v()(e).call(this,t)),k()(g()(n),"bindings",void 0),n.googleChart=new window.google.visualization.Dashboard(n.container),n.bindings=t.bindings,n}return b()(e,t),e}(V),K={autodraw:!0,language:"en",mapsApiKey:"",responsive:!0,datetimeFormat:"",debounceTimeout:250,chartPackages:["corechart"],timezone:"America/Los_Angeles"};
/**
 * Dashboard Class
 *
 * @class
 * @module    module:LavaJs/Dashboard
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   MIT
 */!function(t){t.NULL="NULL",t.RESOLVING="RESOLVING",t.RESOLVED="RESOLVED"}(H||(H={}));var J=function(){function t(e){u()(this,t),this.options=e,k()(this,"state",H.NULL),k()(this,"packages",new Set),k()(this,"logger",void 0),this.logger=N()}var e;return f()(t,[{key:"getState",value:function(){return this.state}},{key:"addPackage",value:function(t){this.packages.add(t)}},{key:"loadGoogle",value:(e=s()(a.a.mark((function e(){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state!==H.RESOLVED&&this.state!==H.RESOLVING){e.next=2;break}return e.abrupt("return");case 2:if(this.state=H.RESOLVING,this.logger.log("Resolving Google..."),!1!==this.googleLoaderInPage){e.next=8;break}return this.logger.log("Static loader not found, appending to head"),e.next=8,this.addGoogleScriptToHead();case 8:return e.abrupt("return",new Promise((function(e){n.logger.log("Static loader found, initializing window.google"),window.google.charts.load(t.API_VERSION,n.config),n.logger.log("Loaded Google with config:"),n.logger.log(n.config),window.google.charts.setOnLoadCallback((function(){e(),n.state=H.RESOLVED}))})));case 9:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)})},{key:"addGoogleScriptToHead",value:function(){return new Promise((function(e){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=t.LOADER_URL,n.onload=n.onreadystatechange=function(t){("load"===(t=t||window.event).type||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,e())},document.head.appendChild(n)}))}},{key:"isLoaded",get:function(){return void 0!==window.google}},{key:"googleLoaderInPage",get:function(){for(var e=document.getElementsByTagName("script"),n=0,r=Array.from(e);n<r.length;n++){if(r[n].src===t.LOADER_URL)return!0}return!1}},{key:"config",get:function(){var t={language:this.options.language||"en",packages:Array.from(this.packages)};return""!==this.options.mapsApiKey&&(t.mapsApiKey=this.options.mapsApiKey),t}}]),t}();k()(J,"API_VERSION","current"),k()(J,"LOADER_URL","https://www.gstatic.com/charts/loader.js");var $=function(t){function e(t){var n;return u()(this,e),n=p()(this,v()(e).call(this)),k()(g()(n),"options",K),k()(g()(n),"registry",{}),k()(g()(n),"volcano",new Map),k()(g()(n),"loader",void 0),k()(g()(n),"logger",N()),k()(g()(n),"state",void 0),n.logger.log("LavaJs v".concat(e.VERSION)),t&&n.configure(t),n.logger.log(n.options),n.loader=new J(n.options),n}var n,o,i,c,l,h;return b()(e,t),f()(e,[{key:"getLavaState",value:function(){return this.registry}},{key:"configure",value:function(t){this.options=Object.assign(this.options,t)}},{key:"loadGoogle",value:(h=s()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this.loader.isLoaded){t.next=2;break}return t.abrupt("return",this.loader.loadGoogle());case 2:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"getGoogle",value:(l=s()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this.loader.isLoaded){t.next=3;break}return t.next=3,this.loadGoogle();case 3:return t.abrupt("return",window.google);case 4:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"draw",value:(c=s()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.logger.log("Waiting for the DOM to become ready"),t.next=3,this.waitForDom();case 3:return this.logger.log("DOM ready"),!0===this.options.responsive&&this.attachRedrawHandler(),t.next=7,this.loadGoogle();case 7:this.logger.log("window.google is ready"),this.fireEvent(r.DRAW);case 9:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"query",value:function(t){return"string"==typeof t?new P(t):P.create(t)}},{key:"chart",value:function(t){var e=new U(t);return this.register(e),e}},{key:"dashboard",value:function(t){return new B(t)}},{key:"get",value:function(t){if(!1===this.volcano.has(t))throw new A(t);return this.volcano.get(t)}},{key:"ready",value:function(t){if("function"!=typeof t)throw new T(t)}},{key:"loadData",value:(i=s()(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=this.get(e))){t.next=3;break}return t.abrupt("return",r.updateData(n));case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"loadOptions",value:(o=s()(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=this.get(e))){t.next=3;break}return t.abrupt("return",r.updateOptions(n));case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"redrawAll",value:function(){var t=this;return 0===this.volcano.size?(this.logger.log("Nothing to redraw."),!1):(this.logger.log("Redrawing ".concat(this.volcano.size," drawables.")),this.volcano.forEach((function(e){t.logger.log("Redrawing ".concat(e.uuid)),e.draw()})),!0)}},{key:"fireEvent",value:function(t){this.logger.log("Firing Event <".concat(t,">"));for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];m()(v()(e.prototype),"emit",this).call(this,t,r)}},{key:"register",value:function(t){return this.logger.log("Registering ".concat(t.uuid)),this.loader.addPackage(t.package),this.registry[t.uuid]={drawn:!1,needsRedraw:!1},this.volcano.set(t.type,t),t}},{key:"waitForDom",value:(n=s()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",(function(){return t()}))})));case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"attachRedrawHandler",value:function(){var t,e=this;M(window,"resize",(function(){clearTimeout(t),t=setTimeout((function(){e.logger.log("Window re-sized, redrawing..."),e.redrawAll()}),e.options.debounceTimeout)}))}},{key:"autodraw",get:function(){return"boolean"!=typeof this.options.autodraw||this.options.autodraw}}]),e}(E.TinyEmitter);k()($,"VERSION","4.0.0-beta3"),window.LavaJs=$,window.lava=new $,void 0!==window.lavacharts&&window.lava.configure(window.lavacharts.options),window.lava.autodraw&&window.lava.draw()}]);
//# sourceMappingURL=lavajs-lavacharts.js.map