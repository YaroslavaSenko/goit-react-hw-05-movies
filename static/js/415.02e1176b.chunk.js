"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{560:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,u,c=e(689),i=e(168),s=e(444),o=s.ZP.div(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 16px;\n"]))),p=s.ZP.div(a||(a=(0,i.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),f=s.ZP.h3(u||(u=(0,i.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  text-align: center;\n"]))),l=e(87),d=e(184),m=function(n){var t=n.movies,e=(0,c.TH)(),r=function(n){return null===n?"https://via.placeholder.com/300sx450.jpg":"https://image.tmdb.org/t/p/w300".concat(n)};return(0,d.jsx)(o,{children:t.map((function(n){var t=n.id,a=n.original_title,u=n.original_name,c=n.name,i=n.title,s=n.poster_path;return(0,d.jsx)(p,{children:(0,d.jsxs)(l.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,d.jsx)("img",{src:"".concat(r(s)),alt:"".concat(i||a||c)}),(0,d.jsx)(f,{children:a||u})]})},t)}))})}},415:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),s=e(171),o=e(560),p=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],f=(0,i.useState)([null]),l=(0,a.Z)(f,2),d=l[0],m=l[1];return(0,i.useEffect)((function(){try{var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.wr)();case 2:t=n.sent,u(t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(d){m(d)}}),[]),(0,p.jsxs)("main",{children:[d&&d.message,(0,p.jsx)("h2",{children:"Trendin movies"}),e&&(0,p.jsx)(o.Z,{movies:e})]})}},171:function(n,t,e){e.d(t,{Bt:function(){return v},E3:function(){return l},Mc:function(){return p},wr:function(){return s},y:function(){return m}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="7ac9391c36294b15d48007ced829db82";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var t,e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:i,language:"en-US"},n.next=3,c.Z.get("/trending/all/day",{params:t});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:i,language:"en-US"},n.next=3,c.Z.get("/movie/".concat(t),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:i,language:"en-US",query:t},n.next=3,c.Z.get("/search/movie",{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:i,language:"en-US"},n.next=3,c.Z.get("/movie/".concat(t,"/credits"),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:i,language:"en-US"},n.next=3,c.Z.get("/movie/".concat(t,"/reviews"),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=415.02e1176b.chunk.js.map