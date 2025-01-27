(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",n="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",d="year",f="date",p="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},v=function(e,t,i){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(i)+e},b={s:v,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),n=Math.floor(i/60),s=i%60;return(t<=0?"+":"-")+v(n,2,"0")+":"+v(s,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var n=12*(i.year()-t.year())+(i.month()-t.month()),s=t.clone().add(n,l),r=i-s<0,a=t.clone().add(n+(r?-1:1),l);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:a,D:f,h:r,m:s,s:n,ms:i,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=m;var g=function(e){return e instanceof D},$=function e(t,i,n){var s;if(!t)return _;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),i&&(y[r]=i,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,s=o}return!n&&s&&(_=s),s||!n&&_},M=function(e,t){if(g(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new D(i)},T=b;T.l=$,T.i=g,T.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(u);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return T},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var i=M(e);return this.startOf(t)<=i&&i<=this.endOf(t)},v.isAfter=function(e,t){return M(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<M(e)},v.$g=function(e,t,i){return T.u(e)?this[t]:this.set(i,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var i=this,c=!!T.u(t)||t,p=T.p(e),u=function(e,t){var n=T.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return c?n:n.endOf(a)},h=function(e,t){return T.w(i.toDate()[e].apply(i.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},m=this.$W,v=this.$M,b=this.$D,_="set"+(this.$u?"UTC":"");switch(p){case d:return c?u(1,0):u(31,11);case l:return c?u(1,v):u(0,v+1);case o:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return u(c?b-g:b+(6-g),v);case a:case f:return h(_+"Hours",0);case r:return h(_+"Minutes",1);case s:return h(_+"Seconds",2);case n:return h(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,c=T.p(e),p="set"+(this.$u?"UTC":""),u=(o={},o[a]=p+"Date",o[f]=p+"Date",o[l]=p+"Month",o[d]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[n]=p+"Seconds",o[i]=p+"Milliseconds",o)[c],h=c===a?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(f,1);m.$d[u](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else u&&this.$d[u](h);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[T.p(e)]()},v.add=function(i,c){var f,p=this;i=Number(i);var u=T.p(c),h=function(e){var t=M(p);return T.w(t.date(t.date()+Math.round(e*i)),p)};if(u===l)return this.set(l,this.$M+i);if(u===d)return this.set(d,this.$y+i);if(u===a)return h(1);if(u===o)return h(7);var m=(f={},f[s]=e,f[r]=t,f[n]=1e3,f)[u]||1,v=this.$d.getTime()+i*m;return T.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||p;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=T.z(this),r=this.$H,a=this.$m,o=this.$M,l=i.weekdays,c=i.months,d=function(e,i,s,r){return e&&(e[i]||e(t,n))||s[i].slice(0,r)},f=function(e){return T.s(r%12||12,e,"0")},u=i.meridiem||function(e,t,i){var n=e<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:T.s(o+1,2,"0"),MMM:d(i.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,l,2),ddd:d(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:T.s(r,2,"0"),h:f(1),hh:f(2),a:u(r,a,!0),A:u(r,a,!1),m:String(a),mm:T.s(a,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:s};return n.replace(h,(function(e,t){return t||m[e]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(i,f,p){var u,h=T.p(f),m=M(i),v=(m.utcOffset()-this.utcOffset())*e,b=this-m,_=T.m(this,m);return _=(u={},u[d]=_/12,u[l]=_,u[c]=_/3,u[o]=(b-v)/6048e5,u[a]=(b-v)/864e5,u[r]=b/t,u[s]=b/e,u[n]=b/1e3,u)[h]||b,p?_:T.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),n=$(e,t,!0);return n&&(i.$L=n),i},v.clone=function(){return T.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),x=D.prototype;return M.prototype=x,[["$ms",i],["$s",n],["$m",s],["$H",r],["$W",a],["$M",l],["$y",d],["$D",f]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=y[_],M.Ls=y,M.p={},M}()}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,i="beforeend"){t.insertAdjacentElement(i,e.getElement())}class n{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const r="DD/MM/YY",a="HH:mm",o=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],l=["Chamonix","Geneva","Amsterdam"];var c=i(484),d=i.n(c);function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function p(e,t){return e?d()(e).format(t):""}class u{constructor({point:e,checkedOffers:t,offers:i,destination:n}){this.point=e,this.checkedOffers=t,this.offers=i,this.destination=n}getTemplate(){return function(e,t,i,n){const{type:s,dateFrom:c,dateTo:d,basePrice:f}=e,{name:u}=n;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                ${o.map((e=>function(e){return`<div class="event__type-item">\n        <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n        <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${t=e,t[0].toUpperCase()+t.slice(1)}</label>\n    </div>`;var t}(e))).join("")}\n\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${s}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${u} list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${l.map((e=>function(e){return`<option value=${e}>${e}</option>`}(e))).join("")}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${p(c,r)} ${p(c,a)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${p(d,r)} ${p(d,a)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${f}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          ${function(e,t){return 0!==e.length?`\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          ${e.offers.map((e=>function(e,t){const{title:i,price:n,id:s}=e;return`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${t.map((e=>e.id)).includes(s)?"checked":""}>\n      <label class="event__offer-label" for="event-offer-luggage-1">\n        <span class="event__offer-title">${i}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${n}</span>\n      </label>\n    </div>`}(e,t))).join("")}\n        </div>\n      </section>`:""}(i,t)}\n\n          ${function(e){if(e){const{description:t}=e;return`<section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${t}</p>\n      </section>`}return""}(n)}\n        </section>\n      </form>\n    </li>`}(this.point,this.checkedOffers,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class h{constructor({point:e,offers:t,destination:i}){this.point=e,this.offers=t,this.destination=i}getTemplate(){return function(e,t,i){const{type:n,dateFrom:s,dateTo:r,isFavorite:o,basePrice:l}=e,{name:c}=i;return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime=${s}>${p(s,"MMM DD")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${n} ${c}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime=${s}>${p(s,a)}</time>\n            &mdash;\n            <time class="event__end-time" datetime=${r}>${p(r,a)}</time>\n          </p>\n          <p class="event__duration">${function(e,t){const i=d()(t).diff(e)/6e4,n=d()(t).diff(e);return i<60?d()(n).format("mm[M]"):i>60&&i<1440?d()(n).format("HH[H] mm[M]"):d()(n).format("DD[D] HH[H] mm[M]")}(s,r)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${l}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n           ${t.map((e=>function(e){const{title:t,price:i}=e;return`<li class="event__offer">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${i}</span>\n    </li>`}(e))).join("")}\n        </ul>\n        <button class="event__favorite-btn ${o?"event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.point,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const m=1e3,v=5e3,b=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c1",basePrice:f(m,v),dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa11","b4c3e4e6-9053-42ce-b747-e281314baa12"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c2",basePrice:f(m,v),dateFrom:"2019-07-11T22:55:56.845Z",dateTo:"2019-07-13T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa21","b4c3e4e6-9053-42ce-b747-e281314baa24"],type:"bus"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c3",basePrice:f(m,v),dateFrom:"2019-07-14T22:55:56.845Z",dateTo:"2019-07-15T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa33"],type:"train"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c4",basePrice:f(m,v),dateFrom:"2019-07-16T22:55:56.845Z",dateTo:"2019-07-19T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa42","b4c3e4e6-9053-42ce-b747-e281314baa43"],type:"ship"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c5",basePrice:f(m,v),dateFrom:"2019-07-20T10:55:56.845Z",dateTo:"2019-07-20T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa51"],type:"drive"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c6",basePrice:f(m,v),dateFrom:"2019-07-20T13:55:56.845Z",dateTo:"2019-07-20T17:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa61","b4c3e4e6-9053-42ce-b747-e281314baa62"],type:"flight"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c7",basePrice:f(m,v),dateFrom:"2019-07-21T10:55:56.845Z",dateTo:"2019-07-21T12:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",isFavorite:!1,offers:[],type:"sightseeing"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c8",basePrice:f(m,v),dateFrom:"2019-07-21T17:55:56.845Z",dateTo:"2019-07-21T19:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa84"],type:"restaurant"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c9",basePrice:f(m,v),dateFrom:"2019-07-22T10:55:56.845Z",dateTo:"2019-07-22T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",isFavorite:!0,offers:[],type:"check-in"}];const _=30,y=500,g=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa11",title:"Upgrade to a business class",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa12",title:"Choose the radio channel",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa13",title:"Water is free",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa14",title:"Drive safely",price:f(_,y)}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa21",title:"Add luggage",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa22",title:"Add meal",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa23",title:"Smoke-free zone",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa24",title:"Wifi is free",price:f(_,y)}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Switch to comfort class",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Order a special meal",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa33",title:"Book a taxi",price:f(_,y)}]},{type:"ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"Add luggage",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa42",title:"Add meal",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa43",title:"Drink a free beverage",price:f(_,y)}]},{type:"drive",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa51",title:"Rent a car",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa52",title:"With automatic transmission",price:f(_,y)}]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa61",title:"Add luggage",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa62",title:"Switch to comfort class",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa63",title:"Add meal",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa64",title:"Choose seats",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa65",title:"Travel by train",price:f(_,y)}]},{type:"sightseeing",offers:[]},{type:"restaurant",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa81",title:"WIFI is free",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa82",title:"Water is free",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa83",title:"Choose the live music",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa84",title:"Special menu",price:f(_,y)}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa91",title:"Add breakfast",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa92",title:"Laundry service",price:f(_,y)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa93",title:"Order a meal from the restaurant",price:f(_,y)}]}],$=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${f(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${f(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${f(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${f(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${f(1,20)}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${f(1,20)}`,description:"Chamonix"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab2",description:"Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${f(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${f(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${f(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${f(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${f(21,40)}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${f(21,40)}`,description:"Geneva"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab3",description:"Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.",name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${f(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${f(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${f(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${f(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${f(41,60)}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${f(41,60)}`,description:"Amsterdam"}]}],M=document.querySelector(".trip-main"),T=document.querySelector(".trip-controls__filters"),D=document.querySelector(".trip-events"),x=new class{points=Array.from({length:4},(()=>{return(e=b)[Math.floor(Math.random()*e.length)];var e}));offers=g;destinations=$;getPoints(){return this.points}getPoint(e){return this.points.find((t=>t.id===e))}getOffers(){return this.offers}getOffersByType(e){return this.offers.find((t=>t.type===e))}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}getDestinations(){return this.destinations}getDestinationsById(e){return this.destinations.find((t=>t.id===e))}},O=new class{listPointsContainer=new n;constructor({pointsContainer:e,pointsModel:t}){this.pointsContainer=e,this.pointsModel=t}init(){this.points=[...this.pointsModel.getPoints()],t(new s,this.pointsContainer),t(this.listPointsContainer,this.pointsContainer),t(new u({point:this.points[0],checkedOffers:[...this.pointsModel.getOffersById(this.points[0].type,this.points[0].offers)],offers:this.pointsModel.getOffersByType(this.points[0].type),destination:this.pointsModel.getDestinationsById(this.points[0].destination)}),this.listPointsContainer.getElement());for(let e=1;e<this.points.length;e++)t(new h({point:this.points[e],offers:[...this.pointsModel.getOffersById(this.points[e].type,this.points[e].offers)],destination:this.pointsModel.getDestinationsById(this.points[e].destination)}),this.listPointsContainer.getElement())}}({pointsContainer:D,pointsModel:x});t(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},M,"afterbegin"),t(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},T),O.init()})()})();
//# sourceMappingURL=bundle.baa243b72968e42753e5.js.map