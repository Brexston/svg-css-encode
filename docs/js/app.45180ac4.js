(function(){"use strict";var e={455:function(e,t,i){var r=i(963),s=i(252);const n={class:"layout"};function o(e,t,i,r,o,a){const l=(0,s.up)("Header"),c=(0,s.up)("Converter"),v=(0,s.up)("Footer"),p=(0,s.up)("Tooltip"),u=(0,s.up)("AnimateBg");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",n,[(0,s.Wm)(l),(0,s.Wm)(c),(0,s.Wm)(v)]),(0,s.Wm)(p),(0,s.Wm)(u)],64)}const a={class:"header"},l=(0,s._)("h1",{class:"header__title"},"Конвертируйте свой SVG в CSS ",-1),c=(0,s._)("div",{class:"header__description"},[(0,s.Uk)(" С помощью данного сервиса вы можете закодировать свою иконку SVG для использования в CSS через data URL, закодированный SVG можно использовать в "),(0,s._)("code",null,"background"),(0,s.Uk)(", "),(0,s._)("code",null,"border-image"),(0,s.Uk)(" или в "),(0,s._)("code",null,"mask")],-1),v=[l,c];function p(e,t){return(0,s.wg)(),(0,s.iD)("header",a,v)}var u=i(744);const _={},g=(0,u.Z)(_,[["render",p]]);var d=g,h=i(577);const m={class:"converter"},w={class:"converter__list"},x={class:"converter__item converter__item--insert"},b={class:"textarea"},f={class:"textarea__top"},k=(0,s._)("label",{for:"insert",class:"textarea__label"},"Вставьте код SVG:",-1),y={class:"converter__item converter__item--preview"},C={class:"preview"},S={class:"preview__top"},T=(0,s._)("div",{class:"preview__label"},"Превью:",-1),D={class:"preview__bg"},O=["onClick"],j={class:"preview__direction"},V=["onClick","title"],$={class:"preview__repeat"},U=["onClick"],L={class:"converter__item converter__item--result"},Z={class:"textarea"},G={class:"textarea__top"},H=(0,s._)("label",{class:"textarea__label"},"Готовый CSS для фона:",-1),W={class:"textarea__tab"},E={class:"textarea__block"};function B(e,t,i,n,o,a){return(0,s.wg)(),(0,s.iD)("main",m,[(0,s._)("div",w,[(0,s._)("div",x,[(0,s._)("div",b,[(0,s._)("div",f,[k,(0,s._)("button",{class:"textarea__example",onClick:t[0]||(t[0]=(...e)=>a.viewExample&&a.viewExample(...e))},"Пример")]),(0,s.wy)((0,s._)("textarea",{id:"insert",autofocus:"",class:"textarea__item",onInput:t[1]||(t[1]=(...e)=>a.convertSvg&&a.convertSvg(...e)),"onUpdate:modelValue":t[2]||(t[2]=e=>o.insertSvg.textarea=e)},null,544),[[r.nr,o.insertSvg.textarea]])])]),(0,s._)("div",y,[(0,s._)("div",C,[(0,s._)("div",S,[T,(0,s._)("div",D,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.preview.colors,(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,h.C_)(["preview__bg-item",{active:o.preview.background===e}]),style:(0,h.j5)({background:e}),key:e,onClick:t=>o.preview.background=e},null,14,O)))),128)),(0,s._)("div",{class:"preview__bg-input",style:(0,h.j5)({backgroundColor:o.preview.input})},[(0,s.wy)((0,s._)("input",{type:"color","onUpdate:modelValue":t[3]||(t[3]=e=>o.preview.input=e),onInput:t[4]||(t[4]=e=>o.preview.background=o.preview.input)},null,544),[[r.nr,o.preview.input]])],4)])]),(0,s._)("div",{class:"preview__block",style:(0,h.j5)({background:o.preview.background})},[(0,s._)("div",{class:"preview__block-image",style:(0,h.j5)(`background: url(${o.preview.image}) ${o.preview.position} ${o.preview.repeat}`)},null,4)],4),(0,s._)("div",{class:(0,h.C_)(["preview__settings",{active:o.insertSvg.textarea}])},[(0,s._)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.settings.positionList,(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,h.C_)(["preview__direction-item",{active:e===o.settings.position}]),key:e,onClick:t=>a.changePosition(e),title:e},null,10,V)))),128))]),(0,s._)("div",$,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.settings.repeatList,(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,h.C_)(["preview__repeat-item",{active:e===o.settings.repeat}]),key:e,onClick:t=>a.changeRepeat(e)},(0,h.zw)(e),11,U)))),128))])],2)])]),(0,s._)("div",L,[(0,s._)("div",Z,[(0,s._)("div",G,[H,(0,s._)("div",W,[(0,s._)("div",{class:(0,h.C_)(["textarea__tab-item",{active:1===o.cssType}]),onClick:t[5]||(t[5]=e=>o.cssType=1)},"Полная запись",2),(0,s._)("div",{class:(0,h.C_)(["textarea__tab-item",{active:2===o.cssType}]),onClick:t[6]||(t[6]=e=>o.cssType=2)},"Короткая запись",2)])]),(0,s._)("div",E,[1===o.cssType?(0,s.wy)(((0,s.wg)(),(0,s.iD)("textarea",{key:0,class:"textarea__item","onUpdate:modelValue":t[7]||(t[7]=e=>o.result.textarea.long=e)},null,512)),[[r.nr,o.result.textarea.long]]):(0,s.wy)(((0,s.wg)(),(0,s.iD)("textarea",{key:1,class:"textarea__item","onUpdate:modelValue":t[8]||(t[8]=e=>o.result.textarea.short=e)},null,512)),[[r.nr,o.result.textarea.short]]),(0,s._)("div",{class:(0,h.C_)(["textarea__copy",{active:o.insertSvg.textarea}]),onClick:t[9]||(t[9]=(...e)=>a.copyCss&&a.copyCss(...e))},(0,h.zw)(o.copyText),3),(0,s._)("div",{class:(0,h.C_)(["textarea__semicolon",{active:o.settings.displayCutSemicolon}]),onClick:t[10]||(t[10]=(...e)=>a.removeSemicolon&&a.removeSemicolon(...e))}," Убрать ; ",2)])])])])])}var F={name:"Converter",data(){return{cssType:1,copyText:"Скопировать",insertSvg:{textarea:""},preview:{background:"",colors:["#fff","#000","#e0e0e0"],input:"#5f8bbf",image:"",position:"center",repeat:"no-repeat"},result:{textarea:{short:"",long:""}},settings:{repeat:"no-repeat",repeatList:["no-repeat","repeat","repeat-x","repeat-y"],position:"center",positionList:["left top","center top","right top","left center","center","right center","left bottom","center bottom","right bottom"],displayCutSemicolon:!1}}},methods:{convertSvg(){let e=this.insertSvg.textarea;e?(e=this.addXmlns(e),e=this.encodeSvg(e),this.preview.image=`'data:image/svg+xml,${e}'`,this.result.textarea.short=`background: url('data:image/svg+xml,${e}') ${this.settings.repeat} ${this.settings.position};`,this.result.textarea.long=`background-image: url('data:image/svg+xml,${e}');\nbackground-repeat: ${this.settings.repeat};\nbackground-position: ${this.settings.position};`,this.settings.displayCutSemicolon=!0):(this.preview.image="",this.result.textarea.short="",this.result.textarea.long="")},addXmlns(e){return e.indexOf("http://www.w3.org/2000/svg")<0&&(e=e.replace(/<svg/g,"<svg xmlns='http://www.w3.org/2000/svg'")),e},encodeSvg(e){e=e.replace(/'/g,'"'),e=e.replace(/>\s{1,}</g,"><"),e=e.replace(/\s{2,}/g," ");const t=/[\r\n%#()<>?[\\\]^`{|}]/g;return e.replace(t,encodeURIComponent)},copyCss(e){e.target.previousElementSibling.select(),document.execCommand("copy"),this.copyText="Скопировано",setTimeout((()=>this.copyText="Скопировать"),3e3)},removeSemicolon(){this.result.textarea.short=this.result.textarea.short.slice(0,-1),this.result.textarea.long=this.result.textarea.long.replace(/;/g,""),this.settings.displayCutSemicolon=!1},viewExample(){this.insertSvg.textarea='<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="58" height="58.0078" rx="29" fill="#FDC420"/><path d="M38.4355 29.0039L24.2943 37.1673L24.2943 20.8405L38.4355 29.0039Z" fill="#1D1D1C"/></svg>',this.convertSvg()},changePosition(e){this.settings.position=e,this.preview.position=e,this.convertSvg()},changeRepeat(e){this.settings.repeat=e,this.preview.repeat=e,this.convertSvg()}}};const P=(0,u.Z)(F,[["render",B]]);var R=P;const Y={class:"footer"},I=(0,s._)("a",{href:"https://github.com/Brexston/svg-css-encode",target:"_blank",class:"footer__link"},"Github",-1),K=[I];function z(e,t){return(0,s.wg)(),(0,s.iD)("footer",Y,K)}const A={},X=(0,u.Z)(A,[["render",z]]);var M=X;const q={class:"bg"},J=(0,s._)("div",{class:"bg__item bg__item--1"},null,-1),N=(0,s._)("div",{class:"bg__item bg__item--2"},null,-1),Q=(0,s._)("div",{class:"bg__item bg__item--3"},null,-1),ee=[J,N,Q];function te(e,t){return(0,s.wg)(),(0,s.iD)("div",q,ee)}const ie={},re=(0,u.Z)(ie,[["render",te]]);var se=re;function ne(e,t,i,r,n,o){return(0,s.wg)(),(0,s.iD)("div",{class:(0,h.C_)(["tooltip",{visible:n.showTooltip}]),onClick:t[0]||(t[0]=e=>this.showTooltip=!1)}," В вашем буфере обмена есть код SVG, нажмите Ctrl + V для конвертации ",2)}var oe={data(){return{showTooltip:!1}},async mounted(){let e=await(navigator?.clipboard?.readText());this.checkSvg(e)},methods:{checkSvg(e){e=e.trimStart(),e.startsWith("<svg")&&(this.showTooltip=!0,setTimeout((()=>this.showTooltip=!1),3e3))}}};const ae=(0,u.Z)(oe,[["render",ne]]);var le=ae,ce={components:{Header:d,Converter:R,AnimateBg:se,Tooltip:le,Footer:M}};const ve=(0,u.Z)(ce,[["render",o]]);var pe=ve;(0,r.ri)(pe).mount("#app")}},t={};function i(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,r,s,n){if(!r){var o=1/0;for(v=0;v<e.length;v++){r=e[v][0],s=e[v][1],n=e[v][2];for(var a=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(i.O).every((function(e){return i.O[e](r[l])}))?r.splice(l--,1):(a=!1,n<o&&(o=n));if(a){e.splice(v--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var v=e.length;v>0&&e[v-1][2]>n;v--)e[v]=e[v-1];e[v]=[r,s,n]}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,o=r[0],a=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(l)var v=l(i)}for(t&&t(r);c<o.length;c++)n=o[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(v)},r=self["webpackChunksvg_encoder"]=self["webpackChunksvg_encoder"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(455)}));r=i.O(r)})();
//# sourceMappingURL=app.45180ac4.js.map