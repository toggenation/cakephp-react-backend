(this["webpackJsonpcake-react"]=this["webpackJsonpcake-react"]||[]).push([[0],{12:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),c=n.n(r),s=(n(17),n(1)),l=n(6),i=n(7),u=n(8),d=n(10),h=n(9),m=n(11);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"sendFetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET";arguments.length>1&&void 0!==arguments[1]&&arguments[1];return fetch(this.props.baseurl,{method:e,mode:"cors",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error(e.status+" james has an error "+e.statusText)})).catch((function(e){console.log(e)}))}},{key:"componentWillMount",value:function(){var e=this;this.sendFetch().then((function(t){console.log("STATE",e.state),e.setState(f({},e.state,{},t)),console.log(e.state)}))}},{key:"render",value:function(){var e=this,t=this.state.articles;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",{className:"App-title"},"Embedded React Test")),a.a.createElement("h4",null,"Data from CakePHP"),t&&a.a.createElement("table",{className:"table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Body"))),a.a.createElement("tbody",null,t.map((function(t){var n=t.id;return a.a.createElement("tr",{style:{cursor:"pointer"},title:"Click to delete",onClick:function(){fetch(e.props.baseurl+"/"+n,{method:"DELETE",mode:"cors",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error(e.status+" james has an error "+e.statusText)})).then((function(t){e.sendFetch().then((function(t){console.log("STATE",e.state),e.setState(f({},e.state,{},t)),console.log(e.state)})),console.log(t)})).catch((function(e){console.log(e)}))},key:n},a.a.createElement("td",null,t.title),a.a.createElement("td",{key:n+"dd"},t.body))})))),a.a.createElement("div",{className:"col p-3"},a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),fetch(e.props.baseurl,{mode:"cors",method:"POST",cache:"no-cache",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user_id:1,title:t.target.elements.title.value,body:t.target.elements.body.value})}).then((function(t){if(t.ok)return e.sendFetch().then((function(t){console.log("STATE",e.state),e.setState(f({},e.state,{},t)),console.log(e.state)})),t.json();throw new Error(t.status+"HI"+t.statusText)})).catch((function(e){return console.log(e)})),console.log(t.target.elements.title.value),console.log(t.target.elements.body.value),t.target.reset()}},a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"title",className:"form-label"},"Title ",a.a.createElement("input",{name:"title",className:"form-control"}))),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"body",className:"form-label"},"Body ",a.a.createElement("input",{className:"form-control",name:"body"}))),a.a.createElement("button",{style:{"margin-top":"15px"},className:"btn btn-secondary",type:"submit"},"Submit"))))}}]),t}(o.Component),g=Object(s.withCookies)(b),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=document.getElementById("root"),w=y.getAttribute("baseurl");console.log(w),c.a.render(a.a.createElement(s.CookiesProvider,null,a.a.createElement(g,{baseurl:w})),y),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");v?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):E(e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.2e08ff06.chunk.js.map