(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cff6f0ca"],{"014b":function(t,e,n){"use strict";var o=n("e53d"),i=n("07e3"),r=n("8e60"),a=n("63b6"),s=n("9138"),c=n("ebfd").KEY,u=n("294c"),l=n("dbdb"),f=n("45f2"),h=n("62a0"),d=n("5168"),p=n("ccb9"),g=n("6718"),b=n("47ee"),v=n("9003"),m=n("e4ae"),k=n("f772"),y=n("36c3"),w=n("1bc3"),x=n("aebd"),O=n("a159"),S=n("0395"),_=n("bf0b"),j=n("d9f6"),C=n("c3a1"),E=_.f,P=j.f,B=S.f,L=o.Symbol,T=o.JSON,N=T&&T.stringify,I="prototype",R=d("_hidden"),M=d("toPrimitive"),D={}.propertyIsEnumerable,F=l("symbol-registry"),J=l("symbols"),$=l("op-symbols"),A=Object[I],K="function"==typeof L,z=o.QObject,U=!z||!z[I]||!z[I].findChild,V=r&&u(function(){return 7!=O(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=E(A,e);o&&delete A[e],P(t,e,n),o&&t!==A&&P(A,e,o)}:P,G=function(t){var e=J[t]=O(L[I]);return e._k=t,e},H=K&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},W=function(t,e,n){return t===A&&W($,e,n),m(t),e=w(e,!0),m(n),i(J,e)?(n.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),n=O(n,{enumerable:x(0,!1)})):(i(t,R)||P(t,R,x(1,{})),t[R][e]=!0),V(t,e,n)):P(t,e,n)},q=function(t,e){m(t);var n,o=b(e=y(e)),i=0,r=o.length;while(r>i)W(t,n=o[i++],e[n]);return t},Y=function(t,e){return void 0===e?O(t):q(O(t),e)},Q=function(t){var e=D.call(this,t=w(t,!0));return!(this===A&&i(J,t)&&!i($,t))&&(!(e||!i(this,t)||!i(J,t)||i(this,R)&&this[R][t])||e)},X=function(t,e){if(t=y(t),e=w(e,!0),t!==A||!i(J,e)||i($,e)){var n=E(t,e);return!n||!i(J,e)||i(t,R)&&t[R][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=B(y(t)),o=[],r=0;while(n.length>r)i(J,e=n[r++])||e==R||e==c||o.push(e);return o},tt=function(t){var e,n=t===A,o=B(n?$:y(t)),r=[],a=0;while(o.length>a)!i(J,e=o[a++])||n&&!i(A,e)||r.push(J[e]);return r};K||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===A&&e.call($,n),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),V(this,t,x(1,n))};return r&&U&&V(A,t,{configurable:!0,set:e}),G(t)},s(L[I],"toString",function(){return this._k}),_.f=X,j.f=W,n("6abf").f=S.f=Z,n("355d").f=Q,n("9aa9").f=tt,r&&!n("b8e3")&&s(A,"propertyIsEnumerable",Q,!0),p.f=function(t){return G(d(t))}),a(a.G+a.W+a.F*!K,{Symbol:L});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var ot=C(d.store),it=0;ot.length>it;)g(ot[it++]);a(a.S+a.F*!K,"Symbol",{for:function(t){return i(F,t+="")?F[t]:F[t]=L(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),a(a.S+a.F*!K,"Object",{create:Y,defineProperty:W,defineProperties:q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),T&&a(a.S+a.F*(!K||u(function(){var t=L();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){var e,n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e=o[1],(k(e)||void 0!==t)&&!H(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!H(e))return e}),o[1]=e,N.apply(T,o)}}),L[I][M]||n("35e8")(L[I],M,L[I].valueOf),f(L,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},"01a1":function(t,e,n){},"02f4":function(t,e,n){var o=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var r,a,s=String(i(e)),c=o(n),u=s.length;return c<0||c>=u?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):r:t?s.slice(c,c+2):a-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var o=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},"0395":function(t,e,n){var o=n("36c3"),i=n("6abf").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?s(t):i(o(t))}},"0bfb":function(t,e,n){"use strict";var o=n("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0fc9":function(t,e,n){var o=n("3a38"),i=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):r(t,e)}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"214f":function(t,e,n){"use strict";n("b0c5");var o=n("2aba"),i=n("32e9"),r=n("79e5"),a=n("be13"),s=n("2b4c"),c=n("520a"),u=s("species"),l=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=s(t),d=!r(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),p=d?!r(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[h](""),!e}):void 0;if(!d||!p||"replace"===t&&!l||"split"===t&&!f){var g=/./[h],b=n(a,h,""[t],function(t,e,n,o,i){return e.exec===c?d&&!i?{done:!0,value:g.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}}),v=b[0],m=b[1];o(String.prototype,t,v),i(RegExp.prototype,h,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"241e":function(t,e,n){var o=n("25eb");t.exports=function(t){return Object(o(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"268f":function(t,e,n){t.exports=n("fde4")},"28a5":function(t,e,n){"use strict";var o=n("aae3"),i=n("cb7c"),r=n("ebd6"),a=n("0390"),s=n("9def"),c=n("5f1b"),u=n("520a"),l=Math.min,f=[].push,h="split",d="length",p="lastIndex",g=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,b){var v;return v="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[d]||2!="ab"[h](/(?:ab)*/)[d]||4!="."[h](/(.?)(.?)/)[d]||"."[h](/()()/)[d]>1||""[h](/.?/)[d]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(i,t,e);var r,a,s,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=void 0===e?4294967295:e>>>0,b=new RegExp(t.source,l+"g");while(r=u.call(b,i)){if(a=b[p],a>h&&(c.push(i.slice(h,r.index)),r[d]>1&&r.index<i[d]&&f.apply(c,r.slice(1)),s=r[0][d],h=a,c[d]>=g))break;b[p]===r.index&&b[p]++}return h===i[d]?!s&&b.test("")||c.push(""):c.push(i.slice(h)),c[d]>g?c.slice(0,g):c}:"0"[h](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i,o):v.call(String(i),n,o)},function(t,e){var o=b(v,t,this,e,v!==n);if(o.done)return o.value;var u=i(t),f=String(this),h=r(u,RegExp),d=u.unicode,p=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),m=new h(g?u:"^(?:"+u.source+")",p),k=void 0===e?4294967295:e>>>0;if(0===k)return[];if(0===f.length)return null===c(m,f)?[f]:[];var y=0,w=0,x=[];while(w<f.length){m.lastIndex=g?w:0;var O,S=c(m,g?f:f.slice(w));if(null===S||(O=l(s(m.lastIndex+(g?0:w)),f.length))===y)w=a(f,w,d);else{if(x.push(f.slice(y,w)),x.length===k)return x;for(var _=1;_<=S.length-1;_++)if(x.push(S[_]),x.length===k)return x;w=y=O}}return x.push(f.slice(y)),x}]})},"32a6":function(t,e,n){var o=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(o(t))}})},"32fc":function(t,e,n){var o=n("e53d").document;t.exports=o&&o.documentElement},"335c":function(t,e,n){var o=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"36c3":function(t,e,n){var o=n("335c"),i=n("25eb");t.exports=function(t){return o(i(t))}},"386b":function(t,e,n){var o=n("5ca1"),i=n("79e5"),r=n("be13"),a=/"/g,s=function(t,e,n,o){var i=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),o(o.P+o.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},"3a38":function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},"45f2":function(t,e,n){var o=n("d9f6").f,i=n("07e3"),r=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,r)&&o(t,r,{configurable:!0,value:e})}},"47ee":function(t,e,n){var o=n("c3a1"),i=n("9aa9"),r=n("355d");t.exports=function(t){var e=o(t),n=i.f;if(n){var a,s=n(t),c=r.f,u=0;while(s.length>u)c.call(t,a=s[u++])&&e.push(a)}return e}},5168:function(t,e,n){var o=n("dbdb")("wks"),i=n("62a0"),r=n("e53d").Symbol,a="function"==typeof r,s=t.exports=function(t){return o[t]||(o[t]=a&&r[t]||(a?r:i)("Symbol."+t))};s.store=o},"520a":function(t,e,n){"use strict";var o=n("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,a=i,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(a=function(t){var e,n,a,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",o.call(f))),c&&(e=f[s]),a=i.call(f,t),c&&a&&(f[s]=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&r.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"534a":function(t,e,n){"use strict";var o=n("e3a2"),i=n.n(o);i.a},5559:function(t,e,n){var o=n("dbdb")("keys"),i=n("62a0");t.exports=function(t){return o[t]||(o[t]=i(t))}},"5b4e":function(t,e,n){var o=n("36c3"),i=n("b447"),r=n("0fc9");t.exports=function(t){return function(e,n,a){var s,c=o(e),u=i(c.length),l=r(a,u);if(t&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},"5f1b":function(t,e,n){"use strict";var o=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"62a0":function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},6718:function(t,e,n){var o=n("e53d"),i=n("584a"),r=n("b8e3"),a=n("ccb9"),s=n("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=r?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},"6abf":function(t,e,n){var o=n("e6f3"),i=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"7e90":function(t,e,n){var o=n("d9f6"),i=n("e4ae"),r=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){i(t);var n,a=r(e),s=a.length,c=0;while(s>c)o.f(t,n=a[c++],e[n]);return t}},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},9003:function(t,e,n){var o=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==o(t)}},9138:function(t,e,n){t.exports=n("35e8")},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a159:function(t,e,n){var o=n("e4ae"),i=n("7e90"),r=n("1691"),a=n("5559")("IE_PROTO"),s=function(){},c="prototype",u=function(){var t,e=n("1ec9")("iframe"),o=r.length,i="<",a=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),u=t.F;while(o--)delete u[c][r[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=o(t),n=new s,s[c]=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},a4bb:function(t,e,n){t.exports=n("8aae")},aae3:function(t,e,n){var o=n("d3f4"),i=n("2d95"),r=n("2b4c")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},ac6a:function(t,e,n){for(var o=n("cadf"),i=n("0d58"),r=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),h=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(d),g=0;g<p.length;g++){var b,v=p[g],m=d[v],k=a[v],y=k&&k.prototype;if(y&&(y[l]||s(y,l,h),y[f]||s(y,f,v),c[v]=h,m))for(b in o)y[b]||r(y,b,o[b],!0)}},b0c5:function(t,e,n){"use strict";var o=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},b447:function(t,e,n){var o=n("3a38"),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},b54a:function(t,e,n){"use strict";n("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},b8e3:function(t,e){t.exports=!0},bf0b:function(t,e,n){var o=n("355d"),i=n("aebd"),r=n("36c3"),a=n("1bc3"),s=n("07e3"),c=n("794b"),u=Object.getOwnPropertyDescriptor;e.f=n("8e60")?u:function(t,e){if(t=r(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},bf90:function(t,e,n){var o=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(o(t),e)}})},c3a1:function(t,e,n){var o=n("e6f3"),i=n("1691");t.exports=Object.keys||function(t){return o(t,i)}},c883:function(t,e,n){"use strict";var o=n("01a1"),i=n.n(o);i.a},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var o=n("63b6"),i=n("584a"),r=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*r(function(){n(1)}),"Object",a)}},cebc:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var o=n("268f"),i=n.n(o),r=n("e265"),a=n.n(r),s=n("a4bb"),c=n.n(s),u=n("bd86");function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=c()(n);"function"===typeof a.a&&(o=o.concat(a()(n).filter(function(t){return i()(n,t).enumerable}))),o.forEach(function(e){Object(u["a"])(t,e,n[e])})}return t}},d4ff:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"dvtop",staticClass:"read",style:{backgroundColor:t.getcolor.background},on:{click:t.getshow}},[t.datashow?n("div",{staticClass:"readheader"},[n("span",{staticClass:"mui-icon mui-icon-arrowleft read-span",on:{click:t.getspan}}),n("span",{staticClass:"readspan"},[t._v(t._s(t.getBook.title))]),n("span",{staticClass:"readspan",on:{click:t.gethuanyuan}},[t._v("换源")])]):t._e(),t.datashow?n("div",{staticClass:"readheaders",on:{click:function(e){return e.stopPropagation(),t.getsj(e)}}},[t._v(t._s(t.getshujia?"加入书架":"撤出书架"))]):t._e(),t.datashow?n("div",{staticClass:"readbottom"},[n("ul",{staticClass:"readbottom-color"},t._l(t.datacolor,function(e,o){return n("li",{key:o,class:{"mui-icon mui-icon-checkmarkempty":e.background===t.getcolor.background},style:{backgroundColor:e.background},on:{click:function(n){n.stopPropagation(),t.setcolor(e)}}})}),0),n("div",{staticClass:"readbottom-dv"},[n("p",{staticClass:"readbottom-font",on:{click:function(e){e.stopPropagation(),t.setfont("red")}}},[t._v("A-")]),n("p",{staticClass:"read-ss",on:{click:t.gethuanyuan}},[t._v("换源")]),n("p",{staticClass:"readbottom-font",on:{click:function(e){e.stopPropagation(),t.setfont("add")}}},[t._v("A+")])]),n("div",{staticClass:"readbottom-dv"},[n("p",{staticClass:"readbottom-font",on:{click:function(e){return e.stopPropagation(),t.before(e)}}},[t._v("阅读上一章")]),n("p",{staticClass:"read-ss",on:{click:function(e){return e.stopPropagation(),t.getmulushow(e)}}},[t._v("目录")]),n("p",{staticClass:"readbottom-font",on:{click:function(e){return e.stopPropagation(),t.page(e)}}},[t._v("阅读下一章")])])]):t._e(),n("div",[n("h1",{staticClass:"read-h1"},[t._v(t._s(t.con.title))]),t._l(t.con.cpContent,function(e,o){return n("div",{key:o},[n("p",{staticClass:"read-text",style:{fontSize:t.getfonts+"px"},domProps:{innerHTML:t._s(e)}})])})],2),n("div",{staticClass:"btn"},[n("mt-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(e){return e.stopPropagation(),t.before(e)}}},[t._v("阅读上一章")]),n("div",{staticStyle:{margin:"0px 10px"}}),n("mt-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(e){return e.stopPropagation(),t.page(e)}}},[t._v("阅读下一章")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.datahy,expression:"datahy"}],staticClass:"read-hy",on:{click:t.gethuanyuan}},[n("div",{staticClass:"mui-card",staticStyle:{"margin-bottom":"35px"}},[n("ul",{staticClass:"mui-table-view"},t._l(t.bookhylist,function(e,o){return n("li",{key:o,staticClass:"mui-table-view-cell",on:{click:function(n){n.stopPropagation(),t.gethy(e,o)}}},[n("a",{class:["mui-navigate-right",{active:t.hyindex===o}]},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n               "),n("p",{class:["yh-p",{active:t.hyindex===o}]},[t._v("最后更新："+t._s(e.lastChapter))])])])}),0)])]),n("mulu",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:t.id,booktitle:t.booktitle},on:{readshow:t.readshows}})],1)},i=[],r=(n("28a5"),n("ac6a"),n("f499")),a=n.n(r),s=n("cebc"),c=(n("b54a"),n("2f62")),u=n("76a0"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mvlu"},[n("mt-header",{attrs:{fixed:"",title:t.title.title}},[n("div",{attrs:{slot:"left"},on:{click:t.getback},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1),n("mt-button",{attrs:{slot:"right"},slot:"right"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-shudan"}})])])],1),n("div",{staticClass:"paixu-p"},[n("span",[t._v("共"+t._s(t.zjlist.length)+"章")]),n("span",{on:{click:t.show}},[t.flag?n("span",[t._v("倒序")]):n("span",[t._v("正序")])])]),n("div",{staticClass:"paixu"}),t._l(t.zjlist,function(e){return n("ul",{key:e.id,staticClass:"mvlu-ul"},[n("li",{on:{click:function(n){t.getmulu(e.order-1)}}},[t._v(t._s(e.title))])])})],2)])},f=[],h=n("1db3"),d={data:function(){return{zjlist:[],bookid:this.id,booksid:null,flag:!0,title:{},aa:""}},computed:Object(s["a"])({},Object(c["c"])(["calbook"])),props:["id"],created:function(){this.getmvlu(),this.title=JSON.parse(window.localStorage.getItem("SHEFLBOOK"))||{}},methods:{getback:function(){this.$emit("readshow")},getmvlu:function(){var t=this;Object(u["Toast"])("加载中");var e=[];Object(h["a"])(this.bookid).then(function(n){e.push(n),t.aa=e[0].data[0],Object(h["h"])(t.aa._id).then(function(e){t.zjlist=e.data.chapters,t.booksid=e.data._id})})},show:function(){this.flag=!this.flag,this.zjlist.reverse()},getmulu:function(t){this.$emit("readshow",t)}}},p=d,g=(n("534a"),n("2877")),b=Object(g["a"])(p,l,f,!1,null,"3631854f",null);b.options.__file="Mvlu.vue";var v=b.exports,m={components:{mulu:v},data:function(){return{con:[],id:this.$route.params.id,link:this.$route.params.link,flags:!1,datashow:!1,show:!1,iss:"0",booklinkss:[],booktitle:[],getBook:{},datacolor:[{background:"#c4b395"},{background:"#c3d4e6"},{background:"#c8e8c8"},{background:"#F8C9C9"},{background:"#3E4349"}],getfonts:12,getcolor:{},datahy:!1,bookhylist:{},hyindex:0,getshujia:null}},computed:Object(s["a"])({},Object(c["c"])(["shuajiabook","calbook","usercolor","userfont"])),destroyed:function(){this.getread(!0)},watch:{route:"getbookhy"},created:function(){this.getfonts=JSON.parse(window.localStorage.getItem("BOOK_USERFONT"))||14,this.getcolor=JSON.parse(window.localStorage.getItem("BOOK_USERCOLOR")||"{}"),this.getBook=JSON.parse(window.localStorage.getItem("SHEFLBOOK")),this.getshujia=JSON.parse(window.localStorage.getItem("BOOK_UPDATE")),console.log(this.booktitle),this.getread(!1),this.getbookhy(this.getBook._id),this.$route.params.show&&(this.show=!0)},methods:Object(s["a"])({},Object(c["b"])({setbook:"BOOK_UPDATE",setcolors:"BOOK_USERCOLOR",setfonts:"BOOK_USERFONT"}),{getread:function(t){this.$emit("fangfa",t)},getsj:function(){var t=this;this.getshujia?u["MessageBox"].confirm("是否要加入书架").then(function(e){t.getshujia=!t.getshujia,t.getBooks(),t.setbook(!1),t.getBookindex()}).catch(function(){t.getDelbook(),t.getshujia=t.getshujia,t.setbook(!0)}):(this.getDelbook(),this.getshujia=!0,this.setbook(!0))},getBookindex:function(){var t=JSON.parse(window.localStorage.getItem("bookindex")||"{}");t[this.getBook._id]={bookindex:this.iss},window.localStorage.setItem("bookindex",a()(t))},getBooks:function(){var t=JSON.parse(window.localStorage.getItem("book")||"{}");t[this.getBook._id]={cover:this.getBook.cover,flag:!this.flag,title:this.getBook.title,lastChapter:this.getBook.lastChapter,id:this.getBook._id,author:this.getBook.author,bookSource:0,pageIndexCache:0},window.localStorage.setItem("book",a()(t))},getDelbook:function(){var t=JSON.parse(window.localStorage.getItem("book")||"{}");delete t[this.getBook._id],window.localStorage.setItem("book",a()(t))},getspan:function(){var t=this;this.shuajiabook?u["MessageBox"].confirm("是否要加入书架").then(function(e){t.$router.go(-1),t.getBooks(),t.setbook(!1),t.getBookindex()}).catch(function(){t.$router.go(-1),t.getDelbook(),t.setbook(!0)}):(this.$router.go(-1),this.getBookindex())},readshows:function(t){this.show=!1,this.iss=t,this.getBookindex(),this.getcontent(this.booklinkss[this.iss]),this.$refs.dvtop.scrollTop=0},getmulushow:function(){this.show=!this.show},getmulu:function(t){var e=this;this.booklinkss=[],this.booktitle=[];var n=JSON.parse(window.localStorage.getItem("bookindex")||"{}");JSON.parse(window.localStorage.getItem("book"));Object(h["h"])(t).then(function(t){t.data.chapters.forEach(function(t){e.booklinkss.push(encodeURIComponent(t.link)),e.booktitle.push(t.title)}),e.iss=n&&n[e.getBook._id]?n[e.getBook._id].bookindex:e.iss,e.getcontent(e.booklinkss[e.iss])})},getcontent:function(t){var e=this,n=[];Object(h["f"])(t).then(function(t){if(200===t.status){var o=t.data.chapter;n.push({cpContent:o.isVip?["vip章节，请点击换源即可免费阅读"]:o.cpContent?o.cpContent.split("\n"):o.body.split("\n"),title:o.title=e.booktitle[e.iss]});var i=n[0];e.con=i}})},before:function(){this.$refs.dvtop.scrollTop=0,this.iss<=0?(this.iss=0,Object(u["Toast"])("已经是第一章了")):this.iss--,this.getBookindex(),this.getmulu(this.bookhylist[this.hyindex]._id)},page:function(){this.$refs.dvtop.scrollTop=0,this.iss>=this.booktitle.length-1?(this.iss=this.booktitle.length-1,Object(u["Toast"])("已经是最后一章了")):this.iss++,this.getBookindex(),this.getmulu(this.bookhylist[this.hyindex]._id)},getshow:function(){this.datashow=!this.datashow},setfont:function(t){if("red"===t){if(this.getfonts<=10)return;this.getfonts--,this.setfonts(this.getfonts)}if("add"===t){if(this.getfonts>=26)return;this.getfonts++,this.setfonts(this.getfonts)}},setcolor:function(t){this.setcolors(t),this.getcolor=JSON.parse(window.localStorage.getItem("BOOK_USERCOLOR"))},gethuanyuan:function(){this.datahy=!this.datahy},getbookhy:function(t){var e=this;Object(h["g"])(t).then(function(t){e.bookhylist=t.data,e.getmulu(e.bookhylist[0]._id)})},gethy:function(t,e){this.hyindex=e,this.getmulu(this.bookhylist[this.hyindex]._id),this.datahy=!this.datahy}}),beforeRouteEnter:function(t,e,n){var o=JSON.parse(window.localStorage.getItem("book")||"{}");n(function(t){o[t.getBook._id],t.getbookhy(t.getBook._id)})}},k=m,y=(n("c883"),Object(g["a"])(k,o,i,!1,null,"cd59c4a4",null));y.options.__file="Read.vue";e["default"]=y.exports},dbdb:function(t,e,n){var o=n("584a"),i=n("e53d"),r="__core-js_shared__",a=i[r]||(i[r]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n("b8e3")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},e265:function(t,e,n){t.exports=n("ed33")},e3a2:function(t,e,n){},e6f3:function(t,e,n){var o=n("07e3"),i=n("36c3"),r=n("5b4e")(!1),a=n("5559")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=a&&o(s,n)&&u.push(n);while(e.length>c)o(s,n=e[c++])&&(~r(u,n)||u.push(n));return u}},ebfd:function(t,e,n){var o=n("62a0")("meta"),i=n("f772"),r=n("07e3"),a=n("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},u=!n("294c")(function(){return c(Object.preventExtensions({}))}),l=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,o)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[o].i},h=function(t,e){if(!r(t,o)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[o].w},d=function(t){return u&&p.NEED&&c(t)&&!r(t,o)&&l(t),t},p=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:h,onFreeze:d}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var o=n("584a").Object;t.exports=function(t,e){return o.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-cff6f0ca.50cd88b7.js.map