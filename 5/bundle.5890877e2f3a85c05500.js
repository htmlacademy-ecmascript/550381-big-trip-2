(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",c="month",l="quarter",d="year",f="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},b={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,c),r=n-s<0,a=t.clone().add(i+(r?-1:1),c);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:o,d:a,D:f,h:r,m:s,s:i,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=m;var g=function(e){return e instanceof x},$=function e(t,n,i){var s;if(!t)return _;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,s=o}return!i&&s&&(_=s),s||!i&&_},k=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},M=b;M.l=$,M.i=g,M.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===u)},v.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return k(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<k(e)},v.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,l=!!M.u(t)||t,u=M.p(e),p=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return l?i:i.endOf(a)},h=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,b=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case d:return l?p(1,0):p(31,11);case c:return l?p(1,v):p(0,v+1);case o:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return p(l?b-g:b+(6-g),v);case a:case f:return h(_+"Hours",0);case r:return h(_+"Minutes",1);case s:return h(_+"Seconds",2);case i:return h(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,l=M.p(e),u="set"+(this.$u?"UTC":""),p=(o={},o[a]=u+"Date",o[f]=u+"Date",o[c]=u+"Month",o[d]=u+"FullYear",o[r]=u+"Hours",o[s]=u+"Minutes",o[i]=u+"Seconds",o[n]=u+"Milliseconds",o)[l],h=l===a?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[M.p(e)]()},v.add=function(n,l){var f,u=this;n=Number(n);var p=M.p(l),h=function(e){var t=k(u);return M.w(t.date(t.date()+Math.round(e*n)),u)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===a)return h(1);if(p===o)return h(7);var m=(f={},f[s]=e,f[r]=t,f[i]=1e3,f)[p]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},f=function(e){return M.s(r%12||12,e,"0")},p=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:d(n.monthsShort,o,l,3),MMMM:d(l,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,c,2),ddd:d(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:M.s(r,2,"0"),h:f(1),hh:f(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(e,t){return t||m[e]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,f,u){var p,h=M.p(f),m=k(n),v=(m.utcOffset()-this.utcOffset())*e,b=this-m,_=M.m(this,m);return _=(p={},p[d]=_/12,p[c]=_,p[l]=_/3,p[o]=(b-v)/6048e5,p[a]=(b-v)/864e5,p[r]=b/t,p[s]=b/e,p[i]=b/1e3,p)[h]||b,u?_:M.a(_)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),A=x.prototype;return k.prototype=A,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",c],["$y",d],["$D",f]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,x,k),e.$i=!0),k},k.locale=$,k.isDayjs=g,k.unix=function(e){return k(1e3*e)},k.en=y[_],k.Ls=y,k.p={},k}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var c=e[o],l=i.base?c[0]+i.base:c[0],d=r[l]||0,f="".concat(l," ").concat(d);r[l]=d+1;var u=n(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=s(p,i);i.byIndex=o,t.splice(o,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var c=i(e,s),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof _))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof _&&t instanceof _))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}var i=n(379),s=n.n(i),r=n(795),a=n.n(r),o=n(569),c=n.n(o),l=n(565),d=n.n(l),f=n(216),u=n.n(f),p=n(589),h=n.n(p),m=n(10),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),s()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const b="shake";class _{#e=null;constructor(){if(new.target===_)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(b),setTimeout((()=>{this.element.classList.remove(b),e?.()}),600)}}class y extends _{get template(){return'<ul class="trip-events__list"></ul>'}}class g extends _{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}}const $="DD/MM/YY",k="HH:mm",M=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],x=["Chamonix","Geneva","Amsterdam"];var A=n(484),C=n.n(A);function w(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function E(e,t){return e?C()(e).format(t):""}class T extends _{#t=null;#n=[];#i=[];#s=null;#r=null;constructor({point:e,checkedOffers:t,offers:n,destination:i,onSaveEditClick:s}){super(),this.#t=e,this.#n=t,this.#i=n,this.#s=i,this.#r=s,this.element.querySelector(".event--edit").addEventListener("submit",this.#a),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a)}get template(){return function(e,t,n,i){const{type:s,dateFrom:r,dateTo:a,basePrice:o}=e,{name:c}=i;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                ${M.map((e=>function(e){return`<div class="event__type-item">\n        <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n        <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${t=e,t[0].toUpperCase()+t.slice(1)}</label>\n    </div>`;var t}(e))).join("")}\n\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${s}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${c} list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${x.map((e=>function(e){return`<option value=${e}>${e}</option>`}(e))).join("")}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${E(r,$)} ${E(r,k)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${E(a,$)} ${E(a,k)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          ${function(e,t){return 0!==e.length?`\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          ${e.offers.map((e=>function(e,t){const{title:n,price:i,id:s}=e;return`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${t.map((e=>e.id)).includes(s)?"checked":""}>\n      <label class="event__offer-label" for="event-offer-luggage-1">\n        <span class="event__offer-title">${n}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${i}</span>\n      </label>\n    </div>`}(e,t))).join("")}\n        </div>\n      </section>`:""}(n,t)}\n\n          ${function(e){if(e){const{description:t}=e;return`<section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${t}</p>\n      </section>`}return""}(i)}\n        </section>\n      </form>\n    </li>`}(this.#t,this.#n,this.#i,this.#s)}#a=e=>{e.preventDefault(),this.#r()}}class S extends _{#t=null;#i=[];#s=null;#o=null;constructor({point:e,offers:t,destination:n,onEditClick:i}){super(),this.#t=e,this.#i=t,this.#s=n,this.#o=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c)}get template(){return function(e,t,n){const{type:i,dateFrom:s,dateTo:r,isFavorite:a,basePrice:o}=e,{name:c}=n;return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime=${s}>${E(s,"MMM DD")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${c}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime=${s}>${E(s,k)}</time>\n            &mdash;\n            <time class="event__end-time" datetime=${r}>${E(r,k)}</time>\n          </p>\n          <p class="event__duration">${function(e,t){const n=C()(t).diff(e)/6e4,i=C()(t).diff(e);return n<60?C()(i).format("mm[M]"):n>60&&n<1440?C()(i).format("HH[H] mm[M]"):C()(i).format("DD[D] HH[H] mm[M]")}(s,r)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${o}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n           ${t.map((e=>function(e){const{title:t,price:n}=e;return`<li class="event__offer">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${n}</span>\n    </li>`}(e))).join("")}\n        </ul>\n        <button class="event__favorite-btn ${a?"event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.#t,this.#i,this.#s)}#c=e=>{e.preventDefault(),this.#o()}}const D=1e3,O=5e3,F=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c1",basePrice:w(D,O),dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa11","b4c3e4e6-9053-42ce-b747-e281314baa12"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c2",basePrice:w(D,O),dateFrom:"2019-07-11T22:55:56.845Z",dateTo:"2019-07-13T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa21","b4c3e4e6-9053-42ce-b747-e281314baa24"],type:"bus"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c3",basePrice:w(D,O),dateFrom:"2019-07-14T22:55:56.845Z",dateTo:"2019-07-15T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa33"],type:"train"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c4",basePrice:w(D,O),dateFrom:"2019-07-16T22:55:56.845Z",dateTo:"2019-07-19T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa42","b4c3e4e6-9053-42ce-b747-e281314baa43"],type:"ship"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c5",basePrice:w(D,O),dateFrom:"2019-07-20T10:55:56.845Z",dateTo:"2019-07-20T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa51"],type:"drive"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c6",basePrice:w(D,O),dateFrom:"2019-07-20T13:55:56.845Z",dateTo:"2019-07-20T17:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa61","b4c3e4e6-9053-42ce-b747-e281314baa62"],type:"flight"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c7",basePrice:w(D,O),dateFrom:"2019-07-21T10:55:56.845Z",dateTo:"2019-07-21T12:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",isFavorite:!1,offers:[],type:"sightseeing"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c8",basePrice:w(D,O),dateFrom:"2019-07-21T17:55:56.845Z",dateTo:"2019-07-21T19:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa84"],type:"restaurant"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c9",basePrice:w(D,O),dateFrom:"2019-07-22T10:55:56.845Z",dateTo:"2019-07-22T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",isFavorite:!0,offers:[],type:"check-in"}];const H=30,B=500,P=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa11",title:"Upgrade to a business class",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa12",title:"Choose the radio channel",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa13",title:"Water is free",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa14",title:"Drive safely",price:w(H,B)}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa21",title:"Add luggage",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa22",title:"Add meal",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa23",title:"Smoke-free zone",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa24",title:"Wifi is free",price:w(H,B)}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Switch to comfort class",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Order a special meal",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa33",title:"Book a taxi",price:w(H,B)}]},{type:"ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"Add luggage",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa42",title:"Add meal",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa43",title:"Drink a free beverage",price:w(H,B)}]},{type:"drive",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa51",title:"Rent a car",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa52",title:"With automatic transmission",price:w(H,B)}]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa61",title:"Add luggage",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa62",title:"Switch to comfort class",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa63",title:"Add meal",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa64",title:"Choose seats",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa65",title:"Travel by train",price:w(H,B)}]},{type:"sightseeing",offers:[]},{type:"restaurant",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa81",title:"WIFI is free",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa82",title:"Water is free",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa83",title:"Choose the live music",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa84",title:"Special menu",price:w(H,B)}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa91",title:"Add breakfast",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa92",title:"Laundry service",price:w(H,B)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa93",title:"Order a meal from the restaurant",price:w(H,B)}]}],Z=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${w(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${w(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${w(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${w(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${w(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${w(1,20)}`,description:"Chamonix"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",description:"Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${w(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${w(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${w(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${w(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${w(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${w(21,40)}`,description:"Geneva"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",description:"Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.",name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${w(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${w(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${w(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${w(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${w(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${w(41,60)}`,description:"Amsterdam"}]}],q=document.querySelector(".trip-main"),L=document.querySelector(".trip-controls__filters"),I=document.querySelector(".trip-events"),W=new class{#l=Array.from({length:4},(()=>{return(e=F)[Math.floor(Math.random()*e.length)];var e}));#i=P;#d=Z;get points(){return this.#l}get offers(){return this.#i}get destinations(){return this.#d}},j=new class{#f=new y;#u=null;#p=null;#l=[];#i=[];#d=[];constructor({pointsContainer:e,pointsModel:t}){this.#u=e,this.#p=t}init(){this.#l=[...this.#p.points],this.#i=this.#p.offers,this.#d=this.#p.destinations,e(new g,this.#u),e(this.#f,this.#u);for(let e=0;e<this.#l.length;e++)this.#h(this.#l[e])}#m(e){return this.#i.find((t=>t.type===e))}#v(e,t){return this.#m(e).offers.filter((e=>t.find((t=>e.id===t))))}#b(e){return this.#d.find((t=>t.id===e))}#h(n){const i=e=>{"Escape"===e.key&&(e.preventDefault(),a(),document.removeEventListener("keydown",i))},s=new S({point:n,offers:[...this.#v(n.type,n.offers)],destination:this.#b(n.destination),onEditClick:()=>{t(r,s),document.addEventListener("keydown",i)}}),r=new T({point:n,checkedOffers:[...this.#v(n.type,n.offers)],offers:this.#m(n.type),destination:this.#b(n.destination),onSaveEditClick:()=>{a(),document.removeEventListener("keydown",i)}});function a(){t(s,r)}e(s,this.#f.element)}}({pointsContainer:I,pointsModel:W});e(new class extends _{get template(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}},q,"afterbegin"),e(new class extends _{get template(){return'<form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}},L),j.init()})()})();
//# sourceMappingURL=bundle.5890877e2f3a85c05500.js.map