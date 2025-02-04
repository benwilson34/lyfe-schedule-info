import{g as Wn,c as Un,j as o,U as an,r as Hn}from"./jsx-runtime-BNSfpw-k.js";import{u as Gn}from"./index-C90lslf5.js";import{P as Xn,N as Vn,F as Bn,D as Oe}from"./Page-DxjAjCMQ.js";import{P as A}from"./index-BPUlVCl8.js";var rn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(Un,function(){var n=1e3,a=6e4,r=36e5,s="millisecond",i="second",l="minute",m="hour",f="day",p="week",b="month",v="quarter",S="year",C="date",_="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(x){var h=["th","st","nd","rd"],u=x%100;return"["+x+(h[(u-20)%10]||h[u]||h[0])+"]"}},T=function(x,h,u){var y=String(x);return!y||y.length>=h?x:""+Array(h+1-y.length).join(u)+x},U={s:T,z:function(x){var h=-x.utcOffset(),u=Math.abs(h),y=Math.floor(u/60),d=u%60;return(h<=0?"+":"-")+T(y,2,"0")+":"+T(d,2,"0")},m:function x(h,u){if(h.date()<u.date())return-x(u,h);var y=12*(u.year()-h.year())+(u.month()-h.month()),d=h.clone().add(y,b),w=u-d<0,k=h.clone().add(y+(w?-1:1),b);return+(-(y+(u-d)/(w?d-k:k-d))||0)},a:function(x){return x<0?Math.ceil(x)||0:Math.floor(x)},p:function(x){return{M:b,y:S,w:p,d:f,D:C,h:m,m:l,s:i,ms:s,Q:v}[x]||String(x||"").toLowerCase().replace(/s$/,"")},u:function(x){return x===void 0}},L="en",B={};B[L]=M;var ct="$isDayjsObject",gt=function(x){return x instanceof jt||!(!x||!x[ct])},Nt=function x(h,u,y){var d;if(!h)return L;if(typeof h=="string"){var w=h.toLowerCase();B[w]&&(d=w),u&&(B[w]=u,d=w);var k=h.split("-");if(!d&&k.length>1)return x(k[0])}else{var N=h.name;B[N]=h,d=N}return!y&&d&&(L=d),d||!y&&L},D=function(x,h){if(gt(x))return x.clone();var u=typeof h=="object"?h:{};return u.date=x,u.args=arguments,new jt(u)},O=U;O.l=Nt,O.i=gt,O.w=function(x,h){return D(x,{locale:h.$L,utc:h.$u,x:h.$x,$offset:h.$offset})};var jt=function(){function x(u){this.$L=Nt(u.locale,null,!0),this.parse(u),this.$x=this.$x||u.x||{},this[ct]=!0}var h=x.prototype;return h.parse=function(u){this.$d=function(y){var d=y.date,w=y.utc;if(d===null)return new Date(NaN);if(O.u(d))return new Date;if(d instanceof Date)return new Date(d);if(typeof d=="string"&&!/Z$/i.test(d)){var k=d.match(j);if(k){var N=k[2]-1||0,E=(k[7]||"0").substring(0,3);return w?new Date(Date.UTC(k[1],N,k[3]||1,k[4]||0,k[5]||0,k[6]||0,E)):new Date(k[1],N,k[3]||1,k[4]||0,k[5]||0,k[6]||0,E)}}return new Date(d)}(u),this.init()},h.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},h.$utils=function(){return O},h.isValid=function(){return this.$d.toString()!==_},h.isSame=function(u,y){var d=D(u);return this.startOf(y)<=d&&d<=this.endOf(y)},h.isAfter=function(u,y){return D(u)<this.startOf(y)},h.isBefore=function(u,y){return this.endOf(y)<D(u)},h.$g=function(u,y,d){return O.u(u)?this[y]:this.set(d,u)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(u,y){var d=this,w=!!O.u(y)||y,k=O.p(u),N=function(rt,R){var Z=O.w(d.$u?Date.UTC(d.$y,R,rt):new Date(d.$y,R,rt),d);return w?Z:Z.endOf(f)},E=function(rt,R){return O.w(d.toDate()[rt].apply(d.toDate("s"),(w?[0,0,0,0]:[23,59,59,999]).slice(R)),d)},F=this.$W,$=this.$M,W=this.$D,ft="set"+(this.$u?"UTC":"");switch(k){case S:return w?N(1,0):N(31,11);case b:return w?N(1,$):N(0,$+1);case p:var at=this.$locale().weekStart||0,yt=(F<at?F+7:F)-at;return N(w?W-yt:W+(6-yt),$);case f:case C:return E(ft+"Hours",0);case m:return E(ft+"Minutes",1);case l:return E(ft+"Seconds",2);case i:return E(ft+"Milliseconds",3);default:return this.clone()}},h.endOf=function(u){return this.startOf(u,!1)},h.$set=function(u,y){var d,w=O.p(u),k="set"+(this.$u?"UTC":""),N=(d={},d[f]=k+"Date",d[C]=k+"Date",d[b]=k+"Month",d[S]=k+"FullYear",d[m]=k+"Hours",d[l]=k+"Minutes",d[i]=k+"Seconds",d[s]=k+"Milliseconds",d)[w],E=w===f?this.$D+(y-this.$W):y;if(w===b||w===S){var F=this.clone().set(C,1);F.$d[N](E),F.init(),this.$d=F.set(C,Math.min(this.$D,F.daysInMonth())).$d}else N&&this.$d[N](E);return this.init(),this},h.set=function(u,y){return this.clone().$set(u,y)},h.get=function(u){return this[O.p(u)]()},h.add=function(u,y){var d,w=this;u=Number(u);var k=O.p(y),N=function($){var W=D(w);return O.w(W.date(W.date()+Math.round($*u)),w)};if(k===b)return this.set(b,this.$M+u);if(k===S)return this.set(S,this.$y+u);if(k===f)return N(1);if(k===p)return N(7);var E=(d={},d[l]=a,d[m]=r,d[i]=n,d)[k]||1,F=this.$d.getTime()+u*E;return O.w(F,this)},h.subtract=function(u,y){return this.add(-1*u,y)},h.format=function(u){var y=this,d=this.$locale();if(!this.isValid())return d.invalidDate||_;var w=u||"YYYY-MM-DDTHH:mm:ssZ",k=O.z(this),N=this.$H,E=this.$m,F=this.$M,$=d.weekdays,W=d.months,ft=d.meridiem,at=function(R,Z,bt,Pt){return R&&(R[Z]||R(y,w))||bt[Z].slice(0,Pt)},yt=function(R){return O.s(N%12||12,R,"0")},rt=ft||function(R,Z,bt){var Pt=R<12?"AM":"PM";return bt?Pt.toLowerCase():Pt};return w.replace(I,function(R,Z){return Z||function(bt){switch(bt){case"YY":return String(y.$y).slice(-2);case"YYYY":return O.s(y.$y,4,"0");case"M":return F+1;case"MM":return O.s(F+1,2,"0");case"MMM":return at(d.monthsShort,F,W,3);case"MMMM":return at(W,F);case"D":return y.$D;case"DD":return O.s(y.$D,2,"0");case"d":return String(y.$W);case"dd":return at(d.weekdaysMin,y.$W,$,2);case"ddd":return at(d.weekdaysShort,y.$W,$,3);case"dddd":return $[y.$W];case"H":return String(N);case"HH":return O.s(N,2,"0");case"h":return yt(1);case"hh":return yt(2);case"a":return rt(N,E,!0);case"A":return rt(N,E,!1);case"m":return String(E);case"mm":return O.s(E,2,"0");case"s":return String(y.$s);case"ss":return O.s(y.$s,2,"0");case"SSS":return O.s(y.$ms,3,"0");case"Z":return k}return null}(R)||k.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(u,y,d){var w,k=this,N=O.p(y),E=D(u),F=(E.utcOffset()-this.utcOffset())*a,$=this-E,W=function(){return O.m(k,E)};switch(N){case S:w=W()/12;break;case b:w=W();break;case v:w=W()/3;break;case p:w=($-F)/6048e5;break;case f:w=($-F)/864e5;break;case m:w=$/r;break;case l:w=$/a;break;case i:w=$/n;break;default:w=$}return d?w:O.a(w)},h.daysInMonth=function(){return this.endOf(b).$D},h.$locale=function(){return B[this.$L]},h.locale=function(u,y){if(!u)return this.$L;var d=this.clone(),w=Nt(u,y,!0);return w&&(d.$L=w),d},h.clone=function(){return O.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},x}(),Se=jt.prototype;return D.prototype=Se,[["$ms",s],["$s",i],["$m",l],["$H",m],["$W",f],["$M",b],["$y",S],["$D",C]].forEach(function(x){Se[x[1]]=function(h){return this.$g(h,x[0],x[1])}}),D.extend=function(x,h){return x.$i||(x(h,jt,D),x.$i=!0),D},D.locale=Nt,D.isDayjs=gt,D.unix=function(x){return D(1e3*x)},D.en=B[L],D.Ls=B,D.p={},D})})(rn);var Kn=rn.exports;const Vt=Wn(Kn);function Ne({theme:t="general",children:e,...n}){const a=t==="general"?"bg-general text-ondark":t==="accent"?"bg-accent text-ondark":t==="general-200"?"bg-general-200 text-onlight":"bg-background text-onlight";return o.jsx("button",{...n,type:"button",className:`rounded-lg px-4 py-2 text-xl font-semibold shadow-xl ${a}`,children:e})}const qn=t=>{if(!t)return"";let e="";const n=Math.floor(t/60);n>0&&(e+=`${n}h`);const a=t%60;return a>0&&(e+=`${a}m`),e||"0m"},Jn=t=>t?`${t}d`:"";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Zn(t,e,n){return(e=ta(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function je(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?je(Object(n),!0).forEach(function(a){Zn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Qn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ta(t){var e=Qn(t,"string");return typeof e=="symbol"?e:e+""}const Pe=()=>{};let me={},sn={},on=null,ln={mark:Pe,measure:Pe};try{typeof window<"u"&&(me=window),typeof document<"u"&&(sn=document),typeof MutationObserver<"u"&&(on=MutationObserver),typeof performance<"u"&&(ln=performance)}catch{}const{userAgent:Ce=""}=me.navigator||{},tt=me,P=sn,Ee=on,Ct=ln;tt.document;const J=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",cn=~Ce.indexOf("MSIE")||~Ce.indexOf("Trident/");var ea=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,na=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},aa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],z="classic",Ft="duotone",ra="sharp",sa="sharp-duotone",dn=[z,Ft,ra,sa],ia={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},oa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},la=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ca={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},fa=["fak","fa-kit","fakd","fa-kit-duotone"],Me={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ua=["kit"],da={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ma=["fak","fakd"],ha={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ie={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ga=["fak","fa-kit","fakd","fa-kit-duotone"],ya={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ba={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},xa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Bt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},va=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Kt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...pa,...va],wa=["solid","regular","light","thin","duotone","brands"],mn=[1,2,3,4,5,6,7,8,9,10],ka=mn.concat([11,12,13,14,15,16,17,18,19,20]),Aa=[...Object.keys(xa),...wa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY].concat(mn.map(t=>"".concat(t,"x"))).concat(ka.map(t=>"w-".concat(t))),Sa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const K="___FONT_AWESOME___",qt=16,hn="fa",pn="svg-inline--fa",ot="data-fa-i2svg",Jt="data-fa-pseudo-element",Oa="data-fa-pseudo-element-pending",he="data-prefix",pe="data-icon",Te="fontawesome-i2svg",Na="async",ja=["HTML","HEAD","STYLE","SCRIPT"],gn=(()=>{try{return!0}catch{return!1}})();function St(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[z]}})}const yn=c({},fn);yn[z]=c(c(c(c({},{"fa-duotone":"duotone"}),fn[z]),Me.kit),Me["kit-duotone"]);const Pa=St(yn),Zt=c({},ca);Zt[z]=c(c(c(c({},{duotone:"fad"}),Zt[z]),Ie.kit),Ie["kit-duotone"]);const _e=St(Zt),Qt=c({},Bt);Qt[z]=c(c({},Qt[z]),ha.kit);const ge=St(Qt),te=c({},ba);te[z]=c(c({},te[z]),da.kit);St(te);const Ca=ea,bn="fa-layers-text",Ea=na,Ma=c({},ia);St(Ma);const Ia=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yt=aa,Ta=[...ua,...Aa],vt=tt.FontAwesomeConfig||{};function _a(t){var e=P.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Da(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}P&&typeof P.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Da(_a(n));r!=null&&(vt[a]=r)});const xn={styleDefault:"solid",familyDefault:z,cssPrefix:hn,replacementClass:pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vt.familyPrefix&&(vt.cssPrefix=vt.familyPrefix);const ht=c(c({},xn),vt);ht.autoReplaceSvg||(ht.observeMutations=!1);const g={};Object.keys(xn).forEach(t=>{Object.defineProperty(g,t,{enumerable:!0,set:function(e){ht[t]=e,wt.forEach(n=>n(g))},get:function(){return ht[t]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){ht.cssPrefix=t,wt.forEach(e=>e(g))},get:function(){return ht.cssPrefix}});tt.FontAwesomeConfig=g;const wt=[];function Fa(t){return wt.push(t),()=>{wt.splice(wt.indexOf(t),1)}}const Q=qt,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function La(t){if(!t||!J)return;const e=P.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=P.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return P.head.insertBefore(e,a),t}const $a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){let t=12,e="";for(;t-- >0;)e+=$a[Math.random()*62|0];return e}function pt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ye(t){return t.classList?pt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function vn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function za(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(vn(t[n]),'" '),"").trim()}function Lt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function be(t){return t.size!==X.size||t.x!==X.x||t.y!==X.y||t.rotate!==X.rotate||t.flipX||t.flipY}function Ra(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(s," ").concat(i," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:m,path:f}}function Ya(t){let{transform:e,width:n=qt,height:a=qt,startCentered:r=!1}=t,s="";return r&&cn?s+="translate(".concat(e.x/Q-n/2,"em, ").concat(e.y/Q-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/Q,"em), calc(-50% + ").concat(e.y/Q,"em)) "):s+="translate(".concat(e.x/Q,"em, ").concat(e.y/Q,"em) "),s+="scale(".concat(e.size/Q*(e.flipX?-1:1),", ").concat(e.size/Q*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Wa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function wn(){const t=hn,e=pn,n=g.cssPrefix,a=g.replacementClass;let r=Wa;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let De=!1;function Wt(){g.autoAddCss&&!De&&(La(wn()),De=!0)}var Ua={mixout(){return{dom:{css:wn,insertCss:Wt}}},hooks(){return{beforeDOMElementCreation(){Wt()},beforeI2svg(){Wt()}}}};const q=tt||{};q[K]||(q[K]={});q[K].styles||(q[K].styles={});q[K].hooks||(q[K].hooks={});q[K].shims||(q[K].shims=[]);var V=q[K];const kn=[],An=function(){P.removeEventListener("DOMContentLoaded",An),Tt=1,kn.map(t=>t())};let Tt=!1;J&&(Tt=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Tt||P.addEventListener("DOMContentLoaded",An));function Ha(t){J&&(Tt?setTimeout(t,0):kn.push(t))}function Ot(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?vn(t):"<".concat(e," ").concat(za(n),">").concat(a.map(Ot).join(""),"</").concat(e,">")}function Fe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ut=function(e,n,a,r){var s=Object.keys(e),i=s.length,l=n,m,f,p;for(a===void 0?(m=1,p=e[s[0]]):(m=0,p=a);m<i;m++)f=s[m],p=l(p,e[f],f,e);return p};function Ga(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ee(t){const e=Ga(t);return e.length===1?e[0].toString(16):null}function Xa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Le(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function ne(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Le(e);typeof V.hooks.addPack=="function"&&!a?V.hooks.addPack(t,Le(e)):V.styles[t]=c(c({},V.styles[t]||{}),r),t==="fas"&&ne("fa",e)}const{styles:At,shims:Va}=V,Sn=Object.keys(ge),Ba=Sn.reduce((t,e)=>(t[e]=Object.keys(ge[e]),t),{});let xe=null,On={},Nn={},jn={},Pn={},Cn={};function Ka(t){return~Ta.indexOf(t)}function qa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ka(r)?r:null}const En=()=>{const t=a=>Ut(At,(r,s,i)=>(r[i]=Ut(s,a,{}),r),{});On=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=s}),a)),Nn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=s}),a)),Cn=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(l=>{a[l]=s}),a});const e="far"in At||g.autoFetchSvg,n=Ut(Va,(a,r)=>{const s=r[0];let i=r[1];const l=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:l}),a},{names:{},unicodes:{}});jn=n.names,Pn=n.unicodes,xe=$t(g.styleDefault,{family:g.familyDefault})};Fa(t=>{xe=$t(t.styleDefault,{family:g.familyDefault})});En();function ve(t,e){return(On[t]||{})[e]}function Ja(t,e){return(Nn[t]||{})[e]}function it(t,e){return(Cn[t]||{})[e]}function Mn(t){return jn[t]||{prefix:null,iconName:null}}function Za(t){const e=Pn[t],n=ve("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return xe}const In=()=>({prefix:null,iconName:null,rest:[]});function Qa(t){let e=z;const n=Sn.reduce((a,r)=>(a[r]="".concat(g.cssPrefix,"-").concat(r),a),{});return dn.forEach(a=>{(t.includes(n[a])||t.some(r=>Ba[a].includes(r)))&&(e=a)}),e}function $t(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=z}=e,a=Pa[n][t];if(n===Ft&&!t)return"fad";const r=_e[n][t]||_e[n][a],s=t in V.styles?t:null;return r||s||null}function tr(t){let e=[],n=null;return t.forEach(a=>{const r=qa(g.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function $e(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function zt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Kt.concat(ga),s=$e(t.filter(b=>r.includes(b))),i=$e(t.filter(b=>!Kt.includes(b))),l=s.filter(b=>(a=b,!un.includes(b))),[m=null]=l,f=Qa(s),p=c(c({},tr(i)),{},{prefix:$t(m,{family:f})});return c(c(c({},p),rr({values:t,family:f,styles:At,config:g,canonical:p,givenPrefix:a})),er(n,a,p))}function er(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?Mn(r):{},i=it(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!At.far&&At.fas&&!g.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const nr=dn.filter(t=>t!==z||t!==Ft),ar=Object.keys(Bt).filter(t=>t!==z).map(t=>Object.keys(Bt[t])).flat();function rr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,l=n===Ft,m=e.includes("fa-duotone")||e.includes("fad"),f=i.familyDefault==="duotone",p=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(m||f||p)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&nr.includes(n)&&(Object.keys(s).find(v=>ar.includes(v))||i.autoFetchSvg)){const v=la.get(n).defaultShortPrefixId;a.prefix=v,a.iconName=it(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=et()||"fas"),a}class sr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),ne(s,r[s]);const i=ge[z][s];i&&ne(i,r[s]),En()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:l}=a[r],m=l[2];e[s]||(e[s]={}),m.length>0&&m.forEach(f=>{typeof f=="string"&&(e[s][f]=l)}),e[s][i]=l}),e}}let ze=[],ut={};const mt={},ir=Object.keys(mt);function or(t,e){let{mixoutsTo:n}=e;return ze=t,ut={},Object.keys(mt).forEach(a=>{ir.indexOf(a)===-1&&delete mt[a]}),ze.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{ut[i]||(ut[i]=[]),ut[i].push(s[i])})}a.provides&&a.provides(mt)}),n}function ae(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(ut[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function lt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(ut[t]||[]).forEach(s=>{s.apply(null,n)})}function nt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,e):void 0}function re(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||et();if(e)return e=it(n,e)||e,Fe(Tn.definitions,n,e)||Fe(V.styles,n,e)}const Tn=new sr,lr=()=>{g.autoReplaceSvg=!1,g.observeMutations=!1,lt("noAuto")},cr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J?(lt("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,Ha(()=>{ur({autoReplaceSvgRoot:e}),lt("watch",t)})}},fr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:it(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=$t(t[0]);return{prefix:n,iconName:it(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(Ca))){const e=zt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||et(),iconName:it(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=et();return{prefix:e,iconName:it(e,t)||t}}}},Y={noAuto:lr,config:g,dom:cr,parse:fr,library:Tn,findIconDefinition:re,toHtml:Ot},ur=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=P}=t;(Object.keys(V.styles).length>0||g.autoFetchSvg)&&J&&g.autoReplaceSvg&&Y.dom.i2svg({node:e})};function Rt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ot(n))}}),Object.defineProperty(t,"node",{get:function(){if(!J)return;const n=P.createElement("div");return n.innerHTML=t.html,n.children}}),t}function dr(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(be(i)&&n.found&&!a.found){const{width:l,height:m}=n,f={x:l/m/2,y:.5};r.style=Lt(c(c({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function mr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(g.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function we(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:l,maskId:m,titleId:f,extra:p,watchable:b=!1}=t,{width:v,height:S}=n.found?n:e,C=ma.includes(a),_=[g.replacementClass,r?"".concat(g.cssPrefix,"-").concat(r):""].filter(L=>p.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(p.classes).join(" ");let j={children:[],attributes:c(c({},p.attributes),{},{"data-prefix":a,"data-icon":r,class:_,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})};const I=C&&!~p.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};b&&(j.attributes[ot]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(f||kt())},children:[l]}),delete j.attributes.title);const M=c(c({},j),{},{prefix:a,iconName:r,main:e,mask:n,maskId:m,transform:s,symbol:i,styles:c(c({},I),p.styles)}),{children:T,attributes:U}=n.found&&e.found?nt("generateAbstractMask",M)||{children:[],attributes:{}}:nt("generateAbstractIcon",M)||{children:[],attributes:{}};return M.children=T,M.attributes=U,i?mr(M):dr(M)}function Re(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:l=!1}=t,m=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});l&&(m[ot]="");const f=c({},i.styles);be(r)&&(f.transform=Ya({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const p=Lt(f);p.length>0&&(m.style=p);const b=[];return b.push({tag:"span",attributes:m,children:[e]}),s&&b.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),b}function hr(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Lt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ht}=V;function se(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Yt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Yt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const pr={found:!1,width:512,height:512};function gr(t,e){!gn&&!g.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ie(t,e){let n=e;return e==="fa"&&g.styleDefault!==null&&(e=et()),new Promise((a,r)=>{if(n==="fa"){const s=Mn(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ht[e]&&Ht[e][t]){const s=Ht[e][t];return a(se(s))}gr(t,e),a(c(c({},pr),{},{icon:g.showMissingIcons&&t?nt("missingIconAbstract")||{}:{}}))})}const Ye=()=>{},oe=g.measurePerformance&&Ct&&Ct.mark&&Ct.measure?Ct:{mark:Ye,measure:Ye},xt='FA "6.7.2"',yr=t=>(oe.mark("".concat(xt," ").concat(t," begins")),()=>_n(t)),_n=t=>{oe.mark("".concat(xt," ").concat(t," ends")),oe.measure("".concat(xt," ").concat(t),"".concat(xt," ").concat(t," begins"),"".concat(xt," ").concat(t," ends"))};var ke={begin:yr,end:_n};const Mt=()=>{};function We(t){return typeof(t.getAttribute?t.getAttribute(ot):null)=="string"}function br(t){const e=t.getAttribute?t.getAttribute(he):null,n=t.getAttribute?t.getAttribute(pe):null;return e&&n}function xr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g.replacementClass)}function vr(){return g.autoReplaceSvg===!0?It.replace:It[g.autoReplaceSvg]||It.replace}function wr(t){return P.createElementNS("http://www.w3.org/2000/svg",t)}function kr(t){return P.createElement(t)}function Dn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?wr:kr}=e;if(typeof t=="string")return P.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(Dn(s,{ceFn:n}))}),a}function Ar(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const It={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Dn(n),e)}),e.getAttribute(ot)===null&&g.keepOriginalSource){let n=P.createComment(Ar(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ye(e).indexOf(g.replacementClass))return It.replace(t);const a=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,l)=>(l===g.replacementClass||l.match(a)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Ot(s)).join(`
`);e.setAttribute(ot,""),e.innerHTML=r}};function Ue(t){t()}function Fn(t,e){const n=typeof e=="function"?e:Mt;if(t.length===0)n();else{let a=Ue;g.mutateApproach===Na&&(a=tt.requestAnimationFrame||Ue),a(()=>{const r=vr(),s=ke.begin("mutate");t.map(r),s(),n()})}}let Ae=!1;function Ln(){Ae=!0}function le(){Ae=!1}let _t=null;function He(t){if(!Ee||!g.observeMutations)return;const{treeCallback:e=Mt,nodeCallback:n=Mt,pseudoElementsCallback:a=Mt,observeMutationsRoot:r=P}=t;_t=new Ee(s=>{if(Ae)return;const i=et();pt(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!We(l.addedNodes[0])&&(g.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&g.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&We(l.target)&&~Ia.indexOf(l.attributeName))if(l.attributeName==="class"&&br(l.target)){const{prefix:m,iconName:f}=zt(ye(l.target));l.target.setAttribute(he,m||i),f&&l.target.setAttribute(pe,f)}else xr(l.target)&&n(l.target)})}),J&&_t.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Sr(){_t&&_t.disconnect()}function Or(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],l=s.slice(1);return i&&l.length>0&&(a[i]=l.join(":").trim()),a},{})),n}function Nr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=zt(ye(t));return r.prefix||(r.prefix=et()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ja(r.prefix,t.innerText)||ve(r.prefix,ee(t.innerText))),!r.iconName&&g.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function jr(t){const e=pt(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return g.autoA11y&&(n?e["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||kt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Pr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Nr(t),s=jr(t),i=ae("parseNodeAttributes",{},t);let l=e.styleParser?Or(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:s}},i)}const{styles:Cr}=V;function $n(t){const e=g.autoReplaceSvg==="nest"?Ge(t,{styleParser:!1}):Ge(t);return~e.extra.classes.indexOf(bn)?nt("generateLayersText",t,e):nt("generateSvgReplacementMutation",t,e)}function Er(){return[...fa,...Kt]}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J)return Promise.resolve();const n=P.documentElement.classList,a=p=>n.add("".concat(Te,"-").concat(p)),r=p=>n.remove("".concat(Te,"-").concat(p)),s=g.autoFetchSvg?Er():un.concat(Object.keys(Cr));s.includes("fa")||s.push("fa");const i=[".".concat(bn,":not([").concat(ot,"])")].concat(s.map(p=>".".concat(p,":not([").concat(ot,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=pt(t.querySelectorAll(i))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const m=ke.begin("onTree"),f=l.reduce((p,b)=>{try{const v=$n(b);v&&p.push(v)}catch(v){gn||v.name==="MissingIcon"&&console.error(v)}return p},[]);return new Promise((p,b)=>{Promise.all(f).then(v=>{Fn(v,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),m(),p()})}).catch(v=>{m(),b(v)})})}function Mr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$n(t).then(n=>{n&&Fn([n],e)})}function Ir(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:re(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:re(r||{})),t(a,c(c({},n),{},{mask:r}))}}const Tr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=X,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:l=null,classes:m=[],attributes:f={},styles:p={}}=e;if(!t)return;const{prefix:b,iconName:v,icon:S}=t;return Rt(c({type:"icon"},t),()=>(lt("beforeDOMElementCreation",{iconDefinition:t,params:e}),g.autoA11y&&(i?f["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(l||kt()):(f["aria-hidden"]="true",f.focusable="false")),we({icons:{main:se(S),mask:r?se(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:v,transform:c(c({},X),n),symbol:a,title:i,maskId:s,titleId:l,extra:{attributes:f,styles:p,classes:m}})))};var _r={mixout(){return{icon:Ir(Tr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Xe,t.nodeCallback=Mr,t}}},provides(t){t.i2svg=function(e){const{node:n=P,callback:a=()=>{}}=e;return Xe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:l,symbol:m,mask:f,maskId:p,extra:b}=n;return new Promise((v,S)=>{Promise.all([ie(a,i),f.iconName?ie(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[_,j]=C;v([e,we({icons:{main:_,mask:j},prefix:i,iconName:a,transform:l,symbol:m,maskId:p,title:r,titleId:s,extra:b,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const l=Lt(i);l.length>0&&(a.style=l);let m;return be(s)&&(m=nt("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(m||r.icon),{children:n,attributes:a}}}},Dr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Rt({type:"layer"},()=>{lt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Fr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return Rt({type:"counter",content:t},()=>(lt("beforeDOMElementCreation",{content:t,params:e}),hr({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(g.cssPrefix,"-layers-counter"),...a]}})))}}}},Lr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=X,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return Rt({type:"text",content:t},()=>(lt("beforeDOMElementCreation",{content:t,params:e}),Re({content:t,transform:c(c({},X),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(g.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,l=null;if(cn){const m=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/m,l=f.height/m}return g.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Re({content:e.innerHTML,width:i,height:l,transform:r,title:a,extra:s,watchable:!0})])}}};const $r=new RegExp('"',"ug"),Ve=[1105920,1112319],Be=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),oa),Sa),ya),ce=Object.keys(Be).reduce((t,e)=>(t[e.toLowerCase()]=Be[e],t),{}),zr=Object.keys(ce).reduce((t,e)=>{const n=ce[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Rr(t){const e=t.replace($r,""),n=Xa(e,0),a=n>=Ve[0]&&n<=Ve[1],r=e.length===2?e[0]===e[1]:!1;return{value:ee(r?e[0]:e),isSecondary:a||r}}function Yr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(ce[n]||{})[r]||zr[n]}function Ke(t,e){const n="".concat(Oa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=pt(t.children).filter(v=>v.getAttribute(Jt)===e)[0],l=tt.getComputedStyle(t,e),m=l.getPropertyValue("font-family"),f=m.match(Ea),p=l.getPropertyValue("font-weight"),b=l.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&b!=="none"&&b!==""){const v=l.getPropertyValue("content");let S=Yr(m,p);const{value:C,isSecondary:_}=Rr(v),j=f[0].startsWith("FontAwesome");let I=ve(S,C),M=I;if(j){const T=Za(C);T.iconName&&T.prefix&&(I=T.iconName,S=T.prefix)}if(I&&!_&&(!i||i.getAttribute(he)!==S||i.getAttribute(pe)!==M)){t.setAttribute(n,M),i&&t.removeChild(i);const T=Pr(),{extra:U}=T;U.attributes[Jt]=e,ie(I,S).then(L=>{const B=we(c(c({},T),{},{icons:{main:L,mask:In()},prefix:S,iconName:M,extra:U,watchable:!0})),ct=P.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ct,t.firstChild):t.appendChild(ct),ct.outerHTML=B.map(gt=>Ot(gt)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Wr(t){return Promise.all([Ke(t,"::before"),Ke(t,"::after")])}function Ur(t){return t.parentNode!==document.head&&!~ja.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function qe(t){if(J)return new Promise((e,n)=>{const a=pt(t.querySelectorAll("*")).filter(Ur).map(Wr),r=ke.begin("searchPseudoElements");Ln(),Promise.all(a).then(()=>{r(),le(),e()}).catch(()=>{r(),le(),n()})})}var Hr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=qe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=P}=e;g.searchPseudoElements&&qe(n)}}};let Je=!1;var Gr={mixout(){return{dom:{unwatch(){Ln(),Je=!0}}}},hooks(){return{bootstrap(){He(ae("mutationObserverCallbacks",{}))},noAuto(){Sr()},watch(t){const{observeMutationsRoot:e}=t;Je?le():He(ae("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ze=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Xr={mixout(){return{parse:{transform:t=>Ze(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ze(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),m="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(m," ").concat(f)},b={transform:"translate(".concat(s/2*-1," -256)")},v={outer:i,inner:p,path:b};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),v.path)}]}]}}}};const Gt={x:0,y:0,width:"100%",height:"100%"};function Qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Vr(t){return t.tag==="g"?t.children:[t]}var Br={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?zt(n.split(" ").map(r=>r.trim())):In();return a.prefix||(a.prefix=et()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:l}=e;const{width:m,icon:f}=r,{width:p,icon:b}=s,v=Ra({transform:l,containerWidth:p,iconWidth:m}),S={tag:"rect",attributes:c(c({},Gt),{},{fill:"white"})},C=f.children?{children:f.children.map(Qe)}:{},_={tag:"g",attributes:c({},v.inner),children:[Qe(c({tag:f.tag,attributes:c(c({},f.attributes),v.path)},C))]},j={tag:"g",attributes:c({},v.outer),children:[_]},I="mask-".concat(i||kt()),M="clip-".concat(i||kt()),T={tag:"mask",attributes:c(c({},Gt),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,j]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Vr(b)},T]};return n.push(U,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(I,")")},Gt)}),{children:n,attributes:a}}}},Kr={provides(t){let e=!1;tt.matchMedia&&(e=tt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Jr=[Ua,_r,Dr,Fr,Lr,Hr,Gr,Xr,Br,Kr,qr];or(Jr,{mixoutsTo:Y});Y.noAuto;Y.config;Y.library;Y.dom;const fe=Y.parse;Y.findIconDefinition;Y.toHtml;const Zr=Y.icon;Y.layer;Y.text;Y.counter;function tn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tn(Object(n),!0).forEach(function(a){dt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Dt(t){"@babel/helpers - typeof";return Dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dt(t)}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,s;for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ts(t,e){if(t==null)return{};var n=Qr(t,e),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ue(t){return es(t)||ns(t)||as(t)||rs()}function es(t){if(Array.isArray(t))return de(t)}function ns(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function as(t,e){if(t){if(typeof t=="string")return de(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(t,e)}}function de(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function rs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ss(t){var e,n=t.beat,a=t.fade,r=t.beatFade,s=t.bounce,i=t.shake,l=t.flash,m=t.spin,f=t.spinPulse,p=t.spinReverse,b=t.pulse,v=t.fixedWidth,S=t.inverse,C=t.border,_=t.listItem,j=t.flip,I=t.size,M=t.rotation,T=t.pull,U=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":i,"fa-flash":l,"fa-spin":m,"fa-spin-reverse":p,"fa-spin-pulse":f,"fa-pulse":b,"fa-fw":v,"fa-inverse":S,"fa-border":C,"fa-li":_,"fa-flip":j===!0,"fa-flip-horizontal":j==="horizontal"||j==="both","fa-flip-vertical":j==="vertical"||j==="both"},dt(e,"fa-".concat(I),typeof I<"u"&&I!==null),dt(e,"fa-rotate-".concat(M),typeof M<"u"&&M!==null&&M!==0),dt(e,"fa-pull-".concat(T),typeof T<"u"&&T!==null),dt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(U).map(function(L){return U[L]?L:null}).filter(function(L){return L})}function is(t){return t=t-0,t===t}function zn(t){return is(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var os=["style"];function ls(t){return t.charAt(0).toUpperCase()+t.slice(1)}function cs(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=zn(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?e[ls(r)]=s:e[r]=s,e},{})}function Rn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(m){return Rn(t,m)}),r=Object.keys(e.attributes||{}).reduce(function(m,f){var p=e.attributes[f];switch(f){case"class":m.attrs.className=p,delete e.attributes.class;break;case"style":m.attrs.style=cs(p);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?m.attrs[f.toLowerCase()]=p:m.attrs[zn(f)]=p}return m},{attrs:{}}),s=n.style,i=s===void 0?{}:s,l=ts(n,os);return r.attrs.style=G(G({},r.attrs.style),i),t.apply(void 0,[e.tag,G(G({},r.attrs),l)].concat(ue(a)))}var Yn=!1;try{Yn=!0}catch{}function fs(){if(!Yn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function en(t){if(t&&Dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(fe.icon)return fe.icon(t);if(t===null)return null;if(t&&Dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Xt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?dt({},t,e):{}}var nn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},st=an.forwardRef(function(t,e){var n=G(G({},nn),t),a=n.icon,r=n.mask,s=n.symbol,i=n.className,l=n.title,m=n.titleId,f=n.maskId,p=en(a),b=Xt("classes",[].concat(ue(ss(n)),ue((i||"").split(" ")))),v=Xt("transform",typeof n.transform=="string"?fe.transform(n.transform):n.transform),S=Xt("mask",en(r)),C=Zr(p,G(G(G(G({},b),v),S),{},{symbol:s,title:l,titleId:m,maskId:f}));if(!C)return fs("Could not find icon",p),null;var _=C.abstract,j={ref:e};return Object.keys(n).forEach(function(I){nn.hasOwnProperty(I)||(j[I]=n[I])}),us(_[0],j)});st.displayName="FontAwesomeIcon";st.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};var us=Rn.bind(null,an.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ds={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},ms={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},hs={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ps={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},gs={prefix:"far",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"]},ys=t=>t.format("MMM DD"),bs=(t,e)=>{const n=t.month()!==e.month();return e.format(n?"MMM DD":"DD")},xs=(t,e,n)=>`${ys(t)}${n>1?`–${bs(t,e)}`:""}`;function vs({task:t,selectedDay:e}){const{title:n,timeEstimateMins:a,startDate:r,rangeDays:s,endDate:i,repeatDays:l,isProjected:m,tags:f,completedDate:p}=t,b=Hn.useMemo(()=>e.startOf("day").diff(i.startOf("day"),"day"),[e,i]),v=!!p,S=v||!e.isSame(Vt(),"day"),C=_=>!_||_.length===0?null:o.jsx("div",{className:"flex flex-wrap gap-x-2 text-sm leading-none mt-2",children:_.map(j=>o.jsxs("div",{className:"cursor-pointer",children:["#",j]},j))});return o.jsx(o.Fragment,{children:o.jsxs("div",{className:`task ${p?"task--completed":""} group/task relative flex justify-between items-center gap-x-3 max-w-lg w-full min-h-16 px-3 py-2 shadow-md rounded-xl text-sm text-left`,children:[b>0&&o.jsxs("div",{className:"task__overdue-chip text-xs italic whitespace-nowrap rounded-full pb-1 pt-0.5 pl-1 pr-2 absolute -top-3 -left-5 border-2 border-r-general border-b-general border-t-transparent border-l-transparent bg-clip-padding",children:["+",b," day",b>1?"s":""]}),o.jsx("div",{className:`task__checkbox ${S?"task__checkbox--disabled":""} shrink-0 w-4 h-4 rounded-[.25rem] relative box-content bg-ondark border-2`,children:v&&o.jsx(st,{icon:hs,className:"text-2xl absolute top-[-.35rem]"})}),o.jsxs("div",{className:"flex-grow flex flex-col justify-between xs:space-x-3 xs:flex-row",children:[o.jsxs("div",{className:"flex flex-col justify-center",style:{wordBreak:"break-word"},children:[o.jsx("div",{className:"text-base font-semibold leading-none",children:n}),o.jsx("div",{className:"hidden xs:block",children:C(f)})]}),o.jsxs("div",{className:"flex flex-row flex-wrap xs:justify-between xs:flex-col mt-2 xs:mt-0",children:[o.jsx("div",{className:`${m?"underline decoration-dotted":""} text-sm flex justify-end mr-3 xs:mr-0`,children:o.jsxs("div",{className:`task__date-range ${b>0?"task__date-range--attention":""} whitespace-nowrap`,children:[o.jsx(st,{icon:gs,className:"mr-1"}),xs(r,i,s)]})}),o.jsxs("div",{className:"flex justify-end space-x-3",children:[a&&o.jsxs("span",{className:"text-sm italic whitespace-nowrap",children:[o.jsx(st,{icon:ps,className:"mr-0.5"}),qn(a)]}),l&&o.jsxs("span",{className:"text-sm italic whitespace-nowrap",children:[o.jsx(st,{icon:ds,className:"mr-0.5"}),Jn(l)]})]})]}),o.jsx("div",{className:"block xs:hidden",style:{wordBreak:"break-word"},children:C(f)})]}),o.jsx(st,{icon:ms})]})})}const Os=()=>[{title:"LyfeSchedule"},{name:"description",content:"the todo app for people who get things done eventually™"}];function H({leftChildren:t,rightChildren:e,isLineShowing:n=!0}){return o.jsxs("div",{className:"flex flex-col md:flex-row justify-between md:min-h-64 md:max-h-64 mt-24 md:mt-0",children:[o.jsx("div",{className:"relative md:w-1/2 md:max-w-1/2 px-8 text-center md:text-right",children:t}),o.jsx("div",{className:"relative max-md:hidden",children:o.jsxs("div",{className:"absolute flex flex-col items-center",children:[o.jsx("div",{className:"absolute top-2.5 rounded-full bg-general-200 w-3 h-3"}),n&&o.jsx("div",{className:"relative top-8 border-l-2 border-dashed border-general-200 h-56"})]})}),o.jsx("div",{className:"relative md:w-1/2 md:max-w-1/2 px-8",children:e})]})}function Ns(){const n=Gn()?Vt():Vt("2025-01-26");function a(s){const i={...s,id:"_",userId:"_",endDate:s.startDate.add(s.rangeDays-1,"day")};return o.jsx(vs,{task:i,selectedDay:n})}function r(){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"pt-4 md:pt-16 bg-general-500 text-ondark max-w-4xl mx-auto",children:[o.jsxs("div",{className:"flex flex-col md:flex-row md:w-full px-8 mt-4 md:mt-8",children:[o.jsx("div",{className:"w-full md:w-1/2 flex flex-col items-center",children:o.jsxs("div",{className:"max-w-lg",children:[o.jsxs("h2",{className:"text-5xl md:text-6xl text-center md:text-left mt-0",children:["The to-do app for people who get things done"," ",o.jsxs("span",{className:"text-general-200 whitespace-nowrap",children:["eventually",o.jsx("span",{className:"text-xl align-super",children:"™"})]})]}),o.jsx("p",{className:"text-center md:text-left mt-6",children:"Organize and plan your busy lyfe with LyfeSchedule."}),o.jsx("div",{className:"flex flex-row justify-center md:mt-12",children:o.jsx(Ne,{theme:"general-200",onClick:()=>{window.location.href=Oe},children:"Try the Demo"})})]})}),o.jsx("div",{className:"w-full md:w-1/2 flex flex-col items-center md:items-end mt-12 md:mt-0",children:o.jsxs("div",{className:"relative md:w-2/5 max-md:max-w-sm",children:[o.jsx("img",{className:"relative md:absolute md:top-0 md:right-full md:-rotate-6 rounded-xl shadow-xl",src:"img\\mobile-screenshot_1.png",alt:"Screenshot of LyfeSchedule"}),o.jsx("img",{className:"max-md:hidden absolute top-16 rotate-3 rounded-xl shadow-xl",src:"img\\mobile-screenshot_2.png",alt:"Screenshot of LyfeSchedule"})]})})]}),o.jsxs("div",{className:"flex flex-col justify-center md:mt-48 max-md:max-w-md max-md:mx-auto",children:[o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Date Ranges"}),o.jsx("p",{children:`Many things we need or want to do don't have a single, strict "due date". In short, tasks won't appear until their start date and won't be overdue until after their end date.`})]}),rightChildren:o.jsx("div",{className:"-rotate-3 relative md:-top-6",children:a({title:"Replace water filter",startDate:n.subtract(12,"day"),rangeDays:45})})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Automatic Priority"}),o.jsx("p",{children:"A task's priority automatically scales based on the current date. The most pressing tasks appear at the top of the list."})]}),rightChildren:o.jsx("div",{className:"rotate-3 relative top-3 md:-top-1",children:a({title:"Drop off package at the post office and buy stamps",startDate:n.subtract(3,"day"),rangeDays:2})})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Repeating Tasks"}),o.jsx("p",{children:"Set up tasks to repeat every day, week, month, year, or somewhere in between."})]}),rightChildren:o.jsx("div",{className:"-rotate-3 relative md:-top-5",children:a({title:"Work out",startDate:n.subtract(1,"day"),rangeDays:2,repeatDays:1})})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Tags"}),o.jsx("p",{children:"Organize your tasks with tags and view them with the Tag View."})]}),rightChildren:o.jsx("div",{className:"rotate-3 relative md:-top-2",children:a({title:"Update resume and job search resources",startDate:n.subtract(1,"day"),rangeDays:5,tags:["career","weekly-goals"]})})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Time Estimates"}),o.jsx("p",{children:"Estimate how long your tasks will take so you can plan around them."})]}),rightChildren:o.jsx("div",{className:"-rotate-3 relative md:-top-6",children:a({title:"Write first draft of review",startDate:n.subtract(1,"day"),rangeDays:2,timeEstimateMins:45})})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Postponements"}),o.jsx("p",{children:"Postpone tasks until a later date when you know you won't get to them yet (you will eventually™)."})]})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Past Completion"}),o.jsx("p",{children:"Forgot to check something off your list the other day? No problem! Mark it as completed on that day and keep your repeating tasks on track."})]})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Calendar View"}),o.jsx("p",{children:"See your tasks for any day in the past or future (great for repeating tasks!)."})]})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Tasteful UI"}),o.jsx("p",{children:"The interface is streamlined and attractive without being too engaging. After all, using this app should be one of the least interesting things you do today!"}),o.jsx("p",{children:"Don't like stats? Turn that section off. Don't want to see all the fields on the task cards? Turn 'em off. You do you."})]})}),o.jsx(H,{leftChildren:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"mt-0 mb-1",children:"Respect & Realness"}),o.jsx("p",{children:"We all live busy lives — no judgement if/when you don't get something done. You will be treated like an adult. Your time, attention, and data will be respected."})]}),isLineShowing:!1})]})]}),o.jsx("div",{className:"bg-background text-onlight mt-24 md:mt-0",children:o.jsxs("div",{className:"bg-background text-onlight py-8 px-8 max-w-xl mx-auto",children:[o.jsx("h2",{className:"text-center mt-0",children:"It's free forever (seriously)"}),o.jsxs("p",{className:"max-md:text-center",children:["LyfeSchedule is utterly and completely free — no features are locked behind a paywall and there's no premium tier or subscription model. It's also"," ",o.jsx("a",{href:"https://github.com/benwilson34/lyfe-schedule",children:"open-source"})," ","and there are"," ",o.jsx("a",{href:"https://github.com/benwilson34/lyfe-schedule?tab=readme-ov-file#run-the-app",children:"instructions for how you can spin up your own instance"})," ","if you really want to."]}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("p",{children:"Try it today at no risk!"}),o.jsx(Ne,{theme:"general",onClick:()=>{window.location.href=Oe},children:"Try the Demo"})]})]})})]})}return o.jsxs(Xn,{children:[o.jsx(Vn,{}),r(),o.jsx(Bn,{})]})}export{Ns as default,Os as meta};
