(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42ee611a"],{"02f4":function(t,e,n){var r=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var i,o,c=String(a(e)),s=r(n),l=c.length;return s<0||s>=l?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):i:t?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1156:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fenlei"},t._l(t.booklist,function(e){return n("ul",{key:e.id,staticClass:"mui-table-view mui-table-view-striped mui-table-view-condensed"},[n("router-link",{staticClass:"mui-table-view-cell",attrs:{to:{name:"book",params:{id:e._id}},tag:"li"}},[n("div",{staticClass:"mui-table"},[n("div",{staticClass:"mui-table-cell mui-col-xs-10"},[n("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:t._f("getcover")(e.cover),alt:""}}),n("h4",{staticClass:"mui-ellipsis"},[n("span",[t._v(t._s(e.title))]),e.wordCount?n("span",{staticClass:"wordCount"},[t._v(t._s(t._f("getcound")(e.wordCount))+"字")]):t._e()]),n("div",{staticClass:"cunliu"},[n("h5",[t._v(t._s(e.author))]),n("h5",[t._v(t._s(e.retentionRatio)+"%读者存留")])]),n("p",{staticClass:"mui-h6 mss"},[t._v(t._s(e.shortIntro))])]),n("div",{staticClass:"mui-table-cell mui-col-xs-2 mui-text-right"},[n("p",{staticClass:"m-p1"},[t._v(t._s(e.isSerial?"连载中":"完结"))]),e.majorCate?n("p",{staticClass:"m-p2"},[t._v(t._s(e.majorCate))]):t._e(),n("p",{staticClass:"m-p1"},[t._v(t._s(e.cat||e.minorCate))]),n("p",{staticClass:"m-p2"},[n("span",[t._v(t._s(e.latelyFollower>1e3?parseInt(e.latelyFollower/1e3)+"k":e.latelyFollower))]),t._v("人气\n          ")])])])])],1)}),0)},a=[],i=n("e814"),o=n.n(i),c=n("d55e"),s={props:["booklist"],filters:{getcover:function(t){return t.indexOf(c["a"])>-1?t:c["a"]+t},getcound:function(t){return t>1e4?o()(t/1e4)+"万":t}}},l=s,u=(n("b8bb"),n("2877")),f=Object(u["a"])(l,r,a,!1,null,"4bd230f6",null);f.options.__file="Lmeiwen.vue";e["a"]=f.exports},"11e9":function(t,e,n){var r=n("52a7"),a=n("4630"),i=n("6821"),o=n("6a99"),c=n("69a8"),s=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=i(t),e=o(e,!0),s)try{return l(t,e)}catch(n){}if(c(t,e))return a(!r.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),i=n("79e5"),o=n("be13"),c=n("2b4c"),s=n("520a"),l=c("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),d=!i(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),v=d?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!e}):void 0;if(!d||!v||"replace"===t&&!u||"split"===t&&!f){var h=/./[p],b=n(o,p,""[t],function(t,e,n,r,a){return e.exec===s?d&&!a?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=b[0],m=b[1];r(String.prototype,t,g),a(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"319b":function(t,e,n){"use strict";var r=n("8bef"),a=n.n(r);a.a},"3b2b":function(t,e,n){var r=n("7726"),a=n("5dbc"),i=n("86cc").f,o=n("9093").f,c=n("aae3"),s=n("0bfb"),l=r.RegExp,u=l,f=l.prototype,p=/a/g,d=/a/g,v=new l(p)!==p;if(n("9e1e")&&(!v||n("79e5")(function(){return d[n("2b4c")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")}))){l=function(t,e){var n=this instanceof l,r=c(t),i=void 0===e;return!n&&r&&t.constructor===l&&i?t:a(v?new u(r&&!i?t.source:t,e):u((r=t instanceof l)?t.source:t,r&&i?s.call(t):e),n?this:f,l)};for(var h=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},b=o(u),g=0;b.length>g;)h(b[g++]);f.constructor=l,l.prototype=f,n("2aba")(r,"RegExp",l)}n("7a56")("RegExp")},"520a":function(t,e,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(o=function(t){var e,n,o,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[c]),o=a.call(f,t),s&&o&&(f[c]=f.global?o.index+o[0].length:e),l&&o&&o.length>1&&i.call(o[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5d6b":function(t,e,n){var r=n("e53d").parseInt,a=n("a1ce").trim,i=n("e692"),o=/^[-+]?0[xX]/;t.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(t,e){var n=a(String(t),3);return r(n,e>>>0||(o.test(n)?16:10))}:r},"5dbc":function(t,e,n){var r=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(t,i),t}},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},7445:function(t,e,n){var r=n("63b6"),a=n("5d6b");r(r.G+r.F*(parseInt!=a),{parseInt:a})},"8b97":function(t,e,n){var r=n("d3f4"),a=n("cb7c"),i=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"8bef":function(t,e,n){},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},9116:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ran-k"},[n("div",{staticClass:"rankbtn"},[n("button",{class:{rbtn:"male"===this.ranktit},on:{click:function(e){t.setsex("male")}}},[t._v("男生")]),n("button",{class:{rbtn:"female"===this.ranktit},on:{click:function(e){t.setsex("female")}}},[t._v("女生")])])]),n("div",{staticClass:"rank"},[n("section",{staticClass:"rank-left"},[t._l(t.maleRank,function(e){return n("ul",{directives:[{name:"show",rawName:"v-show",value:"male"===t.ranktit,expression:"ranktit==='male'"}],key:e.id,staticClass:"mui-table-view"},[n("li",{class:["mui-table-view-cell",{active:e._id===t.rankId}],on:{click:function(n){t.getrankid(e._id)}}},[t._v(t._s(e.shortTitle))])])}),t._l(t.femaleRank,function(e){return n("ul",{directives:[{name:"show",rawName:"v-show",value:"female"===t.ranktit,expression:"ranktit==='female'"}],key:e.id,staticClass:"mui-table-view"},[n("li",{class:["mui-table-view-cell",{active:e._id===t.rankId}],on:{click:function(n){t.getrankid(e._id)}}},[t._v(t._s(e.shortTitle))])])})],2),n("section",{staticClass:"rank-right",style:{height:t.boxheight}},[n("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1}},[n("lmeiwen",{attrs:{booklist:t.bookList}})],1)],1)])])},a=[],i=n("1156"),o=n("1db3"),c=(n("76a0"),{data:function(){return{femaleRank:{},maleRank:{},rankId:"",ranktit:"male",bookList:[],count:1,allLoaded:!1,boxheight:""}},props:["appref"],components:{lmeiwen:i["a"]},mounted:function(){this.appref.header.$el.offsetHeight;var t=this.appref.tabbar.$el.offsetHeight;this.boxheight=document.documentElement.clientHeight-t+"px"},created:function(){this.getrank()},watch:{rankId:function(){var t=this;this.bookList=[],Object(o["k"])(this.rankId).then(function(e){t.bookList=e.data.ranking.books.slice(0,15)})}},methods:{loadBottom:function(){var t=this;this.allLoaded=!0,Object(o["k"])(this.rankId).then(function(e){t.bookList=e.data.ranking.books.slice(0,15*t.count+15),t.count++,t.allLoaded=!1})},getrank:function(){var t=this;Object(o["j"])().then(function(e){e.data.ok&&(t.femaleRank=e.data.female,t.maleRank=e.data.male,t.rankId=t.maleRank[0]._id)})},setsex:function(t){"male"===t?(this.ranktit=t,this.rankId=this.maleRank[0]._id,console.log(this.rankId)):"female"===t&&(this.ranktit=t,this.rankId=this.femaleRank[0]._id)},getrankid:function(t){this.rankId=t}}}),s=c,l=(n("319b"),n("2877")),u=Object(l["a"])(s,r,a,!1,null,"599860bf",null);u.options.__file="Rank.vue";e["default"]=u.exports},"963a":function(t,e,n){},a1ce:function(t,e,n){var r=n("63b6"),a=n("25eb"),i=n("294c"),o=n("e692"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,n){var a={},c=i(function(){return!!o[t]()||s[t]()!=s}),l=a[t]=c?e(p):o[t];n&&(a[n]=l),r(r.P+r.F*c,"String",a)},p=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},a481:function(t,e,n){"use strict";var r=n("cb7c"),a=n("4bf8"),i=n("9def"),o=n("4588"),c=n("0390"),s=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(r,a){var i=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,i,a):n.call(String(i),r,a)},function(t,e){var a=h(n,t,this,e);if(a.done)return a.value;var f=r(t),p=String(this),d="function"===typeof e;d||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}var k=[];while(1){var x=s(f,p);if(null===x)break;if(k.push(x),!g)break;var _=String(x[0]);""===_&&(f.lastIndex=c(p,i(f.lastIndex),m))}for(var w="",y=0,C=0;C<k.length;C++){x=k[C];for(var R=String(x[0]),E=l(u(o(x.index),p.length),0),I=[],$=1;$<x.length;$++)I.push(v(x[$]));var j=x.groups;if(d){var S=[R].concat(I,E,p);void 0!==j&&S.push(j);var O=String(e.apply(void 0,S))}else O=b(R,p,E,I,j,e);E>=y&&(w+=p.slice(y,E)+O,y=E+R.length)}return w+p.slice(y)}];function b(t,e,r,i,o,c){var s=r+t.length,l=i.length,u=d;return void 0!==o&&(o=a(o),u=p),n.call(c,u,function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return a;if(u>l){var p=f(u/10);return 0===p?a:p<=l?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):a}c=i[u-1]}return void 0===c?"":c})}})},aae3:function(t,e,n){var r=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b8bb:function(t,e,n){"use strict";var r=n("963a"),a=n.n(r);a.a},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},d55e:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i});n("3b2b"),n("a481");function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var i=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:a(i))}return e}function a(t){return("00"+t).substr(t.length)}var i="http://statics.zhuishushenqi.com"},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")}}]);
//# sourceMappingURL=chunk-42ee611a.114b30e4.js.map