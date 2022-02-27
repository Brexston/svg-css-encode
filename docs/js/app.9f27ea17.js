(function(){"use strict";var e={391:function(e,t,r){var i=r(963),n=r(252);const s={class:"layout"};function a(e,t,r,i,a,o){const c=(0,n.up)("Header"),l=(0,n.up)("Converter"),v=(0,n.up)("Footer"),_=(0,n.up)("AnimateBg");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n.Wm)(c),(0,n.Wm)(l),(0,n.Wm)(v)]),(0,n.Wm)(_)],64)}const o={class:"header"},c=(0,n._)("h1",{class:"header__title"},"Конвертируйте свой SVG в CSS ",-1),l=(0,n._)("div",{class:"header__description"},[(0,n.Uk)(" С помощью данного сервиса вы можете закодировать свою иконку SVG для использования в CSS через data URI, закодированный SVG можно использовать в "),(0,n._)("code",null,"background"),(0,n.Uk)(", "),(0,n._)("code",null,"border-image"),(0,n.Uk)(" или в "),(0,n._)("code",null,"mask")],-1),v=[c,l];function _(e,t){return(0,n.wg)(),(0,n.iD)("header",o,v)}var u=r(744);const p={},d=(0,u.Z)(p,[["render",_]]);var g=d,m=r(577);const w={class:"converter"},h={class:"converter__list"},b={class:"converter__item converter__item--insert"},f={class:"textarea"},x={class:"textarea__top"},k=(0,n._)("label",{for:"insert",class:"textarea__label"},"Вставьте код SVG:",-1),y={class:"converter__item converter__item--preview"},C={class:"preview"},S={class:"preview__top"},D=(0,n._)("div",{class:"preview__label"},"Превью:",-1),O={class:"preview__bg"},j=["onClick"],P={class:"converter__item converter__item--result"},U={class:"textarea"},T={class:"textarea__top"},V=(0,n._)("label",{class:"textarea__label"},"Готовый CSS для фона:",-1),$={class:"textarea__tab"},Z={class:"textarea__block"};function E(e,t,r,s,a,o){return(0,n.wg)(),(0,n.iD)("main",w,[(0,n._)("div",h,[(0,n._)("div",b,[(0,n._)("div",f,[(0,n._)("div",x,[k,(0,n._)("button",{class:"textarea__example",onClick:t[0]||(t[0]=(...e)=>o.viewExample&&o.viewExample(...e))},"Пример")]),(0,n.wy)((0,n._)("textarea",{id:"insert",autofocus:"",class:"textarea__item",onInput:t[1]||(t[1]=(...e)=>o.convertSvg&&o.convertSvg(...e)),"onUpdate:modelValue":t[2]||(t[2]=e=>a.insertSvg.textarea=e)},null,544),[[i.nr,a.insertSvg.textarea]])])]),(0,n._)("div",y,[(0,n._)("div",C,[(0,n._)("div",S,[D,(0,n._)("div",O,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.preview.colors,(e=>((0,n.wg)(),(0,n.iD)("div",{style:(0,m.j5)({background:e}),key:e,onClick:t=>a.preview.background=e,class:"preview__bg-item"},null,12,j)))),128)),(0,n._)("div",{class:"preview__bg-input",style:(0,m.j5)({backgroundColor:a.preview.input})},[(0,n.wy)((0,n._)("input",{type:"color","onUpdate:modelValue":t[3]||(t[3]=e=>a.preview.input=e),onInput:t[4]||(t[4]=e=>a.preview.background=a.preview.input)},null,544),[[i.nr,a.preview.input]])],4)])]),(0,n._)("div",{class:"preview__block",style:(0,m.j5)({background:a.preview.background})},[(0,n._)("div",{class:"preview__block-image",style:(0,m.j5)(`background: url(${a.preview.image}) no-repeat`)},null,4)],4),(0,n._)("div",{class:(0,m.C_)(["preview__direction",{active:a.insertSvg.textarea}])},[(0,n._)("div",{class:"preview__direction-item preview__direction--top",onClick:t[5]||(t[5]=e=>o.changePosition("top")),title:"top"}),(0,n._)("div",{class:"preview__direction-item preview__direction--left",onClick:t[6]||(t[6]=e=>o.changePosition("left")),title:"left"}),(0,n._)("div",{class:"preview__direction-item preview__direction--center",onClick:t[7]||(t[7]=e=>o.changePosition("center")),title:"center"}),(0,n._)("div",{class:"preview__direction-item preview__direction--right",onClick:t[8]||(t[8]=e=>o.changePosition("right")),title:"right"}),(0,n._)("div",{class:"preview__direction-item preview__direction--bottom",onClick:t[9]||(t[9]=e=>o.changePosition("bottom")),title:"bottom"})],2)])]),(0,n._)("div",P,[(0,n._)("div",U,[(0,n._)("div",T,[V,(0,n._)("div",$,[(0,n._)("div",{class:(0,m.C_)(["textarea__tab-item",{active:1===a.cssType}]),onClick:t[10]||(t[10]=e=>a.cssType=1)},"Короткая запись",2),(0,n._)("div",{class:(0,m.C_)(["textarea__tab-item",{active:2===a.cssType}]),onClick:t[11]||(t[11]=e=>a.cssType=2)},"Полная запись",2)])]),(0,n._)("div",Z,[1===a.cssType?(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:0,class:"textarea__item","onUpdate:modelValue":t[12]||(t[12]=e=>a.result.textarea.short=e)},null,512)),[[i.nr,a.result.textarea.short]]):(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:1,class:"textarea__item","onUpdate:modelValue":t[13]||(t[13]=e=>a.result.textarea.long=e)},null,512)),[[i.nr,a.result.textarea.long]]),(0,n._)("div",{class:(0,m.C_)(["copy",{active:a.insertSvg.textarea}]),onClick:t[14]||(t[14]=(...e)=>o.copyCss&&o.copyCss(...e))}," Скопировать ",2)])])])])])}var G={name:"Converter",data(){return{cssType:1,insertSvg:{textarea:""},preview:{background:"",colors:["#fff","#000","#b3b3b3"],input:"#5f8bbf",image:""},result:{textarea:{short:"",long:""}},settings:{repeat:"no-repeat",position:"center"},showSettingsPopup:!1}},methods:{convertSvg(){let e=this.insertSvg.textarea;e?(e=this.addXmlns(e),e=this.encodeSvg(e),this.preview.image=`'data:image/svg+xml,${e}'`,this.result.textarea.short=`background: url('data:image/svg+xml,${e}') ${this.settings.repeat} ${this.settings.position};`,this.result.textarea.long=`background-image: url('data:image/svg+xml,${e}');\nbackground-repeat: ${this.settings.repeat};\nbackground-position: ${this.settings.position};`):(this.preview.image="",this.result.textarea.short="",this.result.textarea.long="")},addXmlns(e){return e.indexOf("http://www.w3.org/2000/svg")<0&&(e=e.replace(/<svg/g,"<svg xmlns='http://www.w3.org/2000/svg'")),e},encodeSvg(e){e=e.replace(/'/g,'"'),e=e.replace(/>\s{1,}</g,"><"),e=e.replace(/\s{2,}/g," ");const t=/[\r\n%#()<>?[\\\]^`{|}]/g;return e.replace(t,encodeURIComponent)},copyCss(e){e.target.previousElementSibling.select(),document.execCommand("copy")},viewExample(){this.insertSvg.textarea='<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="58" height="58.0078" rx="29" fill="#FDC420"/><path d="M38.4355 29.0039L24.2943 37.1673L24.2943 20.8405L38.4355 29.0039Z" fill="#1D1D1C"/></svg>',this.convertSvg()},changePosition(e){this.settings.position=e,this.convertSvg()}}};const B=(0,u.Z)(G,[["render",E]]);var F=B;const H={class:"footer"},I=(0,n._)("a",{href:"https://github.com/Brexston/svg-css-encode",target:"_blank",class:"footer__link"},"Github",-1),W=[I];function L(e,t){return(0,n.wg)(),(0,n.iD)("footer",H,W)}const A={},R=(0,u.Z)(A,[["render",L]]);var X=R;const Y={class:"bg"},K=(0,n._)("div",{class:"bg__item bg__item--1"},null,-1),M=(0,n._)("div",{class:"bg__item bg__item--2"},null,-1),q=(0,n._)("div",{class:"bg__item bg__item--3"},null,-1),z=[K,M,q];function J(e,t){return(0,n.wg)(),(0,n.iD)("div",Y,z)}const N={},Q=(0,u.Z)(N,[["render",J]]);var ee=Q,te={components:{Header:g,Converter:F,AnimateBg:ee,Footer:X}};const re=(0,u.Z)(te,[["render",a]]);var ie=re;(0,i.ri)(ie).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(v=0;v<e.length;v++){i=e[v][0],n=e[v][1],s=e[v][2];for(var o=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[c])}))?i.splice(c--,1):(o=!1,s<a&&(a=s));if(o){e.splice(v--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var v=e.length;v>0&&e[v-1][2]>s;v--)e[v]=e[v-1];e[v]=[i,n,s]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],c=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(c)var v=c(r)}for(t&&t(i);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(v)},i=self["webpackChunksvg_encoder"]=self["webpackChunksvg_encoder"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(391)}));i=r.O(i)})();
//# sourceMappingURL=app.9f27ea17.js.map