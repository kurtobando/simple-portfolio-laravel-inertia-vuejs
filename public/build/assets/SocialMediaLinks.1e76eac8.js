import{A as h,o as g,a as m,e as s,b as d,d as p}from"./app.d4cd9af0.js";const i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var _=["size","color"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n},l.apply(this,arguments)}function w(n,t){if(n==null)return{};var o={},e=Object.keys(n),r,a;for(a=0;a<e.length;a++)r=e[a],!(t.indexOf(r)>=0)&&(o[r]=n[r]);return o}var x=function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},y=function(t,o){return function(e,r){var a=e.size,b=e.color,f=w(e,_),c=r.attrs;r.emit;var u=r.slots;return h("svg",l({},i,{width:a||i.width,height:a||i.height,stroke:b||i.stroke},c,{class:["lucide","lucide-"+x(t),(c==null?void 0:c.class)||""]},f),[].concat(o.map(function(k){return h.apply(void 0,k)}),u.default?[u.default()]:[]))}};const v=y;var C=v("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const j=C;var z=v("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{x:"2",y:"9",width:"4",height:"12",key:"fu1a4h"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const L=z,O={class:"flex gap-6"},V={href:"https://github.com/kurtobando/",target:"_blank"},$={href:"https://www.linkedin.com/in/kurt-obando/",target:"_blank"},B={__name:"SocialMediaLinks",setup(n){return(t,o)=>(g(),m("ul",O,[s("li",null,[s("a",V,[d(p(j),{class:"hover:text-blue-500 transition-colors duration-200",size:"30"})])]),s("li",null,[s("a",$,[d(p(L),{class:"hover:text-blue-500 transition-colors duration-200",size:"30"})])])]))}};export{B as _};
