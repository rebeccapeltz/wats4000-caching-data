(function(e){function t(t){for(var s,i,o=t[0],c=t[1],u=t[2],h=0,m=[];h<o.length;h++)i=o[h],r[i]&&m.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),r=a.n(s);r.a},"0cbb":function(e,t,a){"use strict";var s=a("e5cd"),r=a.n(s);r.a},"25fd":function(e,t,a){"use strict";var s=a("f156"),r=a.n(s);r.a},3301:function(e,t,a){"use strict";var s=a("ca07"),r=a.n(s);r.a},"4b4b":function(e,t,a){"use strict";var s=a("cae3"),r=a.n(s);r.a},"4b4e":function(e,t,a){"use strict";var s=a("e225"),r=a.n(s);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("a026"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("Weather Service")]),a("router-view")],1)},n=[],i={name:"app"},o=i,c=(a("034f"),a("2877")),u=Object(c["a"])(o,r,n,!1,null,null,null),l=u.exports,h=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("favorite-cities",{attrs:{favoriteCities:e.favorites}}),a("h2",[e._v("City Search")]),a("message-container",{attrs:{messages:e.messages}}),a("form",{on:{submit:function(t){return t.preventDefault(),e.getCities(t)}}},[a("p",[e._v("\n      Enter city name:\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Paris"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e.showLoading?a("load-spinner"):e._e(),e.results&&e.results.list.length>0?a("ul",{staticClass:"cities"},e._l(e.results.list,function(t,s){return a("li",{key:s},[a("h2",[e._v(e._s(t.name)+", "+e._s(t.sys.country))]),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.id}}}},[e._v("View Current Weather")])],1),a("weather-summary",{attrs:{weatherData:t.weather}}),a("weather-data",{attrs:{weatherData:t.main}}),a("p",[a("button",{staticClass:"save",on:{click:function(a){e.saveCity(t)}}},[e._v("Save City to Favorites")])])],1)}),0):e._e()],1)},d=[],f=a("bc3a"),p=a.n(f);const v=p.a.create({baseURL:"//api.openweathermap.org/data/2.5/"});v.interceptors.request.use(function(e){return e.params.APPID="e2974148d9fbd649739ac00943298672",e.params.units="imperial",e},function(e){return Promise.reject(e)});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.weatherData,function(t,s){return a("div",{key:s,staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+t.icon+".png",alt:t.main}}),a("br"),a("b",[e._v(e._s(t.main))])])}),0)},g=[],w={name:"WeatherSummary",data(){return{}},props:{weatherData:Array}},y=w,b=(a("0cbb"),Object(c["a"])(y,_,g,!1,null,"1fef7f2e",null)),C=b.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",[e.weatherData.temp!=e.weatherData.temp_min?a("dt",[e._v("Current Temp")]):e._e(),e.weatherData.temp!=e.weatherData.temp_min?a("dd",[e._v(e._s(e.weatherData.temp)+"°F")]):e._e(),a("dt",[e._v("Humidity")]),a("dd",[e._v(e._s(e.weatherData.humidity)+"%")]),a("dt",[e._v("High")]),a("dd",[e._v(e._s(e.weatherData.temp_max)+"°F")]),a("dt",[e._v("Low")]),a("dd",[e._v(e._s(e.weatherData.temp_min)+"°F")])])},$=[],k={name:"WeatherData",data(){return{}},props:{weatherData:Object}},x=k,O=(a("4b4e"),Object(c["a"])(x,D,$,!1,null,"5341d1b8",null)),j=O.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Loading...")]),a("div",{staticClass:"sk-folding-cube"},[a("div",{staticClass:"sk-cube1 sk-cube"}),a("div",{staticClass:"sk-cube2 sk-cube"}),a("div",{staticClass:"sk-cube4 sk-cube"}),a("div",{staticClass:"sk-cube3 sk-cube"})])])}],M={name:"CubeSpinner"},S=M,E=(a("25fd"),Object(c["a"])(S,L,q,!1,null,"7323d745",null)),F=E.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-container"},[e.messages.length>0?a("ul",e._l(e.messages,function(e,t){return a("message-item",{key:t,attrs:{message:e}})}),1):e._e()])},P=[],W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],class:[e.message.type,"message"]},[e._v("\n    "+e._s(e.message.text)+"\n    "),a("button",{on:{click:e.close}},[e._v("close")])])])},A=[];a("9ddc");var N={name:"MessageContainer",props:{message:Object},data(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created(){setTimeout(this.close,5e3)}},H=N,J=(a("a1ef"),Object(c["a"])(H,W,A,!1,null,"51c4bc44",null)),T=J.exports;a("9ddc");var V={name:"MessageContainer",props:{messages:Array},components:{"message-item":T}},G=V,R=(a("3301"),Object(c["a"])(G,I,P,!1,null,"7ce6d2ef",null)),U=R.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"favorite-cities"},[e._m(0),e.favoriteCities.length<1?a("li",[e._v("No favorites cities to display.")]):e._e(),e._l(e.favoriteCities,function(t,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.id}}}},[e._v(e._s(t.name))]),a("button",{staticClass:"remove",on:{click:function(a){e.removeCity(t)}}},[e._v("x")])],1)})],2)},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("h2",[e._v("Favorite Cities")])])}],K={name:"FavoriteCities",data(){return{}},props:{favoriteCities:Array},methods:{removeCity:function(e){let t=this.favoriteCities.indexOf(e);this.favoriteCities.splice(t,1),this.$ls.set("favoriteCities",this.favoriteCities)}}},Q=K,X=(a("a603"),Object(c["a"])(Q,z,B,!1,null,"49591197",null)),Y=X.exports,Z={name:"CitySearch",components:{"weather-summary":C,"weather-data":j,"load-spinner":F,"message-container":U,"favorite-cities":Y},data(){return{results:null,query:"",showLoading:!1,messages:[],favorites:[]}},created(){this.$ls.get("favoriteCities")&&(this.favorites=this.$ls.get("favoriteCities"))},methods:{saveCity:function(e){this.favorites.push(e),this.$ls.set("favoriteCities",this.favorites)},getCities:function(){this.results=null,this.showLoading=!0;let e="citySearch_"+this.query,t=9e5;this.$ls.get(e)?(console.log("Cached query detected."),this.results=this.$ls.get(e),this.showLoading=!1):(console.log("Data from api"),v.get("find",{params:{q:this.query}}).then(a=>{this.results=a.data,this.$ls.set(e,a.data,t),console.log("New query has been cached as: "+e),this.showLoading=!1}).catch(e=>{this.messages.push({type:"error",text:e.message}),this.showLoading=!1}))}}},ee=Z,te=(a("7f23"),Object(c["a"])(ee,m,d,!1,null,"57dfde45",null)),ae=te.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Current Weather\n    "),e.weatherData?a("span",[e._v("for "+e._s(e.weatherData.name)+", "+e._s(e.weatherData.sys.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:e.$route.params.cityId}}}},[e._v("View 5-Day Forecast")])],1),e.showLoading?a("load-spinner"):e._e(),e.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:e.weatherData.weather}}),a("weather-data",{attrs:{weatherData:e.weatherData.main}})],1):e._e()],1)},re=[],ne={name:"CurrentWeather",components:{"weather-summary":C,"weather-data":j,"load-spinner":F,"message-container":U},data(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created(){this.showLoading=!0;let e="currentWeather_"+this.$route.params.cityId,t=9e5;this.$ls.get(e)?(console.log("Cached query detected."),this.weatherData=this.$ls.get(e),this.showLoading=!1):v.get("weather",{params:{id:this.$route.params.cityId}}).then(a=>{this.showLoading=!1,this.weatherData=a.data,this.$ls.set(e,a.data,t),console.log("New query has been cached as: "+e)}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})}},ie=ne,oe=(a("be9a"),Object(c["a"])(ie,se,re,!1,null,"1a94fe76",null)),ce=oe.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Five Day Hourly Forecast\n    "),e.weatherData?a("span",[e._v("for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.$route.params.cityId}}}},[e._v("Current Weather\n      "),e.weatherData?a("span",[e._v("for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()])],1),e.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.weatherData.list,function(t){return a("li",{key:t.dt},[a("h3",[e._v(e._s(e._f("formatDate")(t.dt)))]),a("weather-summary",{attrs:{weatherData:t.weather}}),a("weather-data",{attrs:{weatherData:t.main}})],1)}),0)],1):e._e(),e.showLoading?a("load-spinner"):e._e()],1)},le=[],he={name:"Forecast",components:{"weather-summary":C,"weather-data":j,"message-container":U,"load-spinner":F},data(){return{weatherData:null,messages:[],query:"",showLoading:!1,messages:[]}},created(){this.showLoading=!0;let e="forecast_"+this.$route.params.cityId,t=9e5;this.$ls.get(e)?(console.log("Cached query detected."),this.weatherData=this.$ls.get(e),this.showLoading=!1):v.get("forecast",{params:{id:this.$route.params.cityId}}).then(a=>{this.showLoading=!1,this.weatherData=a.data,this.$ls.set(e,a.data,t)}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})},filters:{formatDate:function(e){let t=new Date(1e3*e);const a=["January","February","March","April","May","June","July","August","September","October","November","December"];let s=t.getDate(),r=t.getMonth(),n=t.getHours();return 12===n?n="Noon":0===n?n="Midnight":n>12?n=n-12+"PM":n<12&&(n+="AM"),`${a[r]} ${s} @ ${n}`}}},me=he,de=(a("4b4b"),Object(c["a"])(me,ue,le,!1,null,"28871b21",null)),fe=de.exports;s["a"].use(h["a"]);var pe=new h["a"]({routes:[{path:"/",name:"CitySearch",component:ae},{path:"/:cityId/current",name:"CurrentWeather",component:ce},{path:"/:cityId/forecast",name:"Forecast",component:fe}]}),ve=a("c16e"),_e=a.n(ve);let ge={namespace:"weather__"};s["a"].use(_e.a,ge),s["a"].config.productionTip=!1,new s["a"]({el:"#app",router:pe,template:"<App/>",components:{App:l}})},"64a9":function(e,t,a){},"7f23":function(e,t,a){"use strict";var s=a("f813"),r=a.n(s);r.a},a1ef:function(e,t,a){"use strict";var s=a("d290"),r=a.n(s);r.a},a603:function(e,t,a){"use strict";var s=a("de70"),r=a.n(s);r.a},be9a:function(e,t,a){"use strict";var s=a("f971"),r=a.n(s);r.a},ca07:function(e,t,a){},cae3:function(e,t,a){},d290:function(e,t,a){},de70:function(e,t,a){},e225:function(e,t,a){},e5cd:function(e,t,a){},f156:function(e,t,a){},f813:function(e,t,a){},f971:function(e,t,a){}});
//# sourceMappingURL=app.ba297a5b.js.map