(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa8854ae"],{"123d":function(e,n,t){e.exports=t.p+"img/vue-blog1.0434b776.png"},1563:function(e,n,t){e.exports=t.p+"img/vue-anime1.6b040965.png"},"205e":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:e.direction}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleSlide===e.index,expression:"visibleSlide === index"}],staticClass:"carousel-slide"},[e._t("default")],2)])},s=[],a={props:["visibleSlide","index","direction"]},o=a,r=(t("67a6"),t("2877")),c=Object(r["a"])(o,i,s,!1,null,null,null);n["a"]=c.exports},"248c":function(e,n,t){e.exports=t.p+"img/node-gym3.5d09335c.png"},"2b5c":function(e,n,t){},"2c76":function(e,n,t){e.exports=t.p+"img/node-blog2.183ce1b1.png"},"352b":function(e,n,t){e.exports=t.p+"img/node-blog4.8a43610e.png"},3588:function(e,n,t){e.exports=t.p+"img/vue-blog2.d0527fe0.png"},3693:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"carousel"},[e._t("default"),t("button",{staticClass:"next",on:{click:e.next}},[t("svg",{staticClass:"icon icon-tabler icon-tabler-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ececec",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[t("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z"}}),t("polyline",{attrs:{points:"9 6 15 12 9 18"}})])]),t("button",{staticClass:"previous",on:{click:e.prev}},[t("svg",{staticClass:"icon icon-tabler icon-tabler-chevron-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ececec",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[t("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z"}}),t("polyline",{attrs:{points:"15 6 9 12 15 18"}})])])],2)},s=[],a={methods:{next:function(){this.$emit("next")},prev:function(){this.$emit("prev")}}},o=a,r=(t("8cf1"),t("2877")),c=Object(r["a"])(o,i,s,!1,null,null,null);n["a"]=c.exports},"3bc2":function(e,n,t){e.exports=t.p+"img/vue-landing1.a9b748f1.png"},"457a":function(e,n,t){e.exports=t.p+"img/vue-anime3.7a052d12.png"},"47a3":function(e,n,t){e.exports=t.p+"img/node-gym1.cfcdb65a.png"},"53d2":function(e,n,t){e.exports=t.p+"img/node-blog1.b9d3aefe.png"},5826:function(e,n,t){e.exports=t.p+"img/node-gym2.33bf07c6.png"},6166:function(e,n,t){e.exports=t.p+"img/vue-recipes3.fa03d140.png"},"67a6":function(e,n,t){"use strict";var i=t("2b5c"),s=t.n(i);s.a},"8cf1":function(e,n,t){"use strict";var i=t("ba52"),s=t.n(i);s.a},"8e8e":function(e,n,t){e.exports=t.p+"img/node-blog3.b0acdcbc.png"},"938b":function(e,n,t){e.exports=t.p+"img/vue-anime2.5baac1a9.png"},"93d7":function(e,n,t){e.exports=t.p+"img/vue-recipes1.b373dbaa.png"},"9ffd":function(e,n,t){e.exports=t.p+"img/vue-blog4.458560e4.png"},a085:function(e,n,t){e.exports=t.p+"img/vue-anime4.0b1779dd.png"},a50e:function(e,n,t){e.exports=t.p+"img/vue-blog3.cbfe310c.png"},aa04:function(e,n,t){e.exports=t.p+"img/vue-landing2.20761258.png"},aee7:function(e,n,t){e.exports=t.p+"img/html-landing3.387e4a36.png"},afb4:function(e,n,t){},b3d4:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"project-template"},[i("h1",[e._v("Recipes App")]),i("transition",{attrs:{name:"image",appear:""}},[i("div",{staticClass:"imgs"},[i("Carousel",{staticClass:"carousel-comp",on:{next:e.next,prev:e.prev}},e._l(e.slides,(function(n,s){return i("CarouselSlide",{key:s,staticClass:"carousel-slide-comp",attrs:{index:s,visibleSlide:e.visibleSlide,direction:e.direction}},[i("img",{attrs:{src:t("bb6e")("./"+n),alt:""}})])})),1)],1)]),i("transition",{attrs:{name:"btns",appear:""}},[i("div",{staticClass:"btns"},[i("a",{attrs:{target:"blank",href:"https://github.com/ChrisStyles99/recipes-app-vue"}},[e._v("See Front-end code")]),i("a",{attrs:{target:"blank",href:"https://github.com/ChrisStyles99/recipes-app-vue-server"}},[e._v("See Back-end code")])])]),i("transition",{attrs:{name:"description",appear:""}},[i("div",{staticClass:"project-description"},[i("p",[e._v(" This Recipes app was made using VueJS for the front-end framework. The backed was created using NodeJS with the ExpressJS framework, and with MongoDB as the database. ")])])]),i("transition",{attrs:{name:"features",appear:""}},[i("div",{staticClass:"features"},[i("ul",[i("h1",[e._v("Features")]),i("li",[e._v(" An authentication system, users can register and login. ")]),i("li",[e._v(" Users can create recipes, update them, and also delete them. ")]),i("li",[e._v(" Users can save their favorite recipes. ")]),i("li",[e._v(" Without an account you can see all the recipes. ")]),i("li",[e._v(" A modern design, and easy to use. ")])])])]),i("transition",{attrs:{name:"tech",appear:""}},[i("div",{staticClass:"tech"},[i("ul",[i("h1",[e._v("Technologies used")]),i("li",[e._v(" VueJS "),i("i",{staticClass:"fab fa-vuejs",staticStyle:{color:"#41B883"}})]),i("li",[e._v(" NodeJS "),i("i",{staticClass:"fab fa-node-js",staticStyle:{color:"#3C873A"}})]),i("li",[e._v(" ExpressJS "),i("i",{staticClass:"fab fa-js",staticStyle:{color:"#444444"}})]),i("li",[e._v(" MongoDB "),i("i",{staticClass:"fas fa-database",staticStyle:{color:"#4DB33D"}})])])])])],1)},s=[],a=t("3693"),o=t("205e"),r={components:{Carousel:a["a"],CarouselSlide:o["a"]},data:function(){return{slides:["vue-recipes1.png","vue-recipes2.png","vue-recipes3.png","vue-recipes4.png"],visibleSlide:0,direction:"left"}},computed:{slidesLen:function(){return this.slides.length}},methods:{next:function(){this.visibleSlide>=this.slidesLen-1?this.visibleSlide=0:this.visibleSlide++,this.direction="left"},prev:function(){this.visibleSlide<=0?this.visibleSlide=this.slidesLen-1:this.visibleSlide--,this.direction="right"}}},c=r,p=(t("fc78"),t("2877")),l=Object(p["a"])(c,i,s,!1,null,null,null);n["default"]=l.exports},ba52:function(e,n,t){},bb6e:function(e,n,t){var i={"./html-landing1.png":"d84f","./html-landing2.png":"efbf","./html-landing3.png":"aee7","./node-blog1.png":"53d2","./node-blog2.png":"2c76","./node-blog3.png":"8e8e","./node-blog4.png":"352b","./node-gym1.png":"47a3","./node-gym2.png":"5826","./node-gym3.png":"248c","./node-gym4.png":"c2aa","./vue-anime1.png":"1563","./vue-anime2.png":"938b","./vue-anime3.png":"457a","./vue-anime4.png":"a085","./vue-blog1.png":"123d","./vue-blog2.png":"3588","./vue-blog3.png":"a50e","./vue-blog4.png":"9ffd","./vue-landing1.png":"3bc2","./vue-landing2.png":"aa04","./vue-landing3.png":"c736","./vue-landing4.png":"d3bd","./vue-recipes1.png":"93d7","./vue-recipes2.png":"e214","./vue-recipes3.png":"6166","./vue-recipes4.png":"fd5f"};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=a,e.exports=s,s.id="bb6e"},c2aa:function(e,n,t){e.exports=t.p+"img/node-gym4.58cf13ff.png"},c736:function(e,n,t){e.exports=t.p+"img/vue-landing3.ee1bf1e9.png"},d3bd:function(e,n,t){e.exports=t.p+"img/vue-landing4.ebdccdb7.png"},d84f:function(e,n,t){e.exports=t.p+"img/html-landing1.b92f2f7c.png"},e214:function(e,n,t){e.exports=t.p+"img/vue-recipes2.7810bf15.png"},efbf:function(e,n,t){e.exports=t.p+"img/html-landing2.0366713a.png"},fc78:function(e,n,t){"use strict";var i=t("afb4"),s=t.n(i);s.a},fd5f:function(e,n,t){e.exports=t.p+"img/vue-recipes4.fce7728a.png"}}]);
//# sourceMappingURL=chunk-aa8854ae.3c2a674f.js.map