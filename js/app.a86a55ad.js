(function(){"use strict";var e={6694:function(e,t,n){var r=n(144),i=n(3726),o=n(3730),u=n(4464),a=n(9088),s=n(9007),l=function(){var e=this,t=e._self._c;return t(i.Z,[t(o.Z,{attrs:{headers:e.headers,items:e.items,"items-per-page":20},scopedSlots:e._u([{key:"item.number",fn:function({item:n,index:r}){return[t(u.Z,{attrs:{"return-value":n.number},on:{"update:returnValue":function(t){return e.$set(n,"number",t)},"update:return-value":function(t){return e.$set(n,"number",t)},save:function(t){return e.updateStorage(n.number,r)}},scopedSlots:e._u([{key:"input",fn:function(){return[t(s.Z,{attrs:{label:"Edit","single-line":"",counter:"",rules:[e.decimal]},model:{value:n.number,callback:function(t){e.$set(n,"number",t)},expression:"item.number"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.number)+" ")])]}},{key:"item.pi",fn:function({item:t}){return[e._v(" "+e._s(e.multiplyByPi(t.number))+" ")]}},{key:"item.actions",fn:function({item:n}){return[t(a.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)},c=[],m=n(3524),f=n(9005),d=n(4812),h={name:"App",components:{},data:()=>({format:m.Z,eachDayOfInterval:f.Z,isFirstDayOfMonth:d.Z,startDate:new Date("2022-01-12"),endDate:new Date("2022-12-25"),headers:[{text:"Dates",value:"date"},{text:"Numbers",value:"number"},{text:"Numbers*Pi",value:"pi"},{text:"Actions",value:"actions",sortable:!1}],items:[],initialLen:0,decimal:e=>{const t=/^-?\d+(\.\d{1,2})?$/;return t.test(e)&&Number(e)<=100&&Number(e)>=-100||"not a valid number"}}),created(){this.initialize(),this.saveStorage(),this.setCookie()},watch:{items:function(e){for(let t=0;t<this.initialLen;t++)t in e||localStorage.removeItem(t);this.setStorage(e)}},methods:{getDates(e,t){const n=(0,f.Z)({start:e,end:t});return n.reduce(((e,t)=>((0,d.Z)(t)&&(e=[...e,(0,m.Z)(t,"yyyy-MM-dd")]),e)),[])},getRandomNum(e,t){return(Math.random()*(t-e)+e).toFixed(2)},multiplyByPi(e){return(3.14*e).toFixed(2)},deleteItem(e){const t=this.items.indexOf(e);this.items.splice(t,1)},saveStorage(){this.setStorage(this.items)},updateStorage(e,t){localStorage.setItem(t,e)},initialize(){this.items=this.getDates(this.startDate,this.endDate).map((e=>({date:e,number:this.getRandomNum(-100,100)}))),this.initialLen=this.items.length},setStorage(e){e.forEach(((e,t)=>localStorage.setItem(t,e.number)))},getRandomString(){return[...Array(30)].map((()=>Math.random().toString(36)[2])).join("")},setCookie(){document.cookie=`hashkey=${this.getRandomString()}`}}},p=h,v=n(1001),b=(0,v.Z)(p,l,c,!1,null,null,null),g=b.exports,y=n(8986);r.ZP.use(y.Z);var S=new y.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:S,render:e=>e(g)}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],o=e[c][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,o<u&&(u=o));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,u=r[0],a=r[1],s=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var c=s(n)}for(t&&t(r);l<u.length;l++)o=u[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunktest"]=self["webpackChunktest"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6694)}));r=n.O(r)})();
//# sourceMappingURL=app.a86a55ad.js.map