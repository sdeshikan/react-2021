(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{75:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return l}));var s=i(4),c=i(2),n=i(19),r=i(1),a=i(0);function l(e){var t=e.list,i=Object(c.i)().id,l=t.find((function(e,t){return parseInt(i)===t+1})),d=Object(n.b)(),j=Object(s.a)(d,2),b=j[0],o=j[1];var p=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:l&&l.title}),Object(a.jsx)("p",{children:l&&l.release_date})]});return Object(r.useEffect)((function(){console.log("initial film details or re-render")})),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsx)("h2",{children:"Film Details"}),p,0!==b.id&&Object(a.jsxs)("p",{children:["The current id of the favourite is ",b.id]}),b.data.title&&Object(a.jsxs)("p",{children:["Favourite film is ",b.data.title]}),Object(a.jsx)("p",{children:Object(a.jsx)("button",{onClick:function(e){b.id!==parseInt(i)||"films"!==b.type?o("films",parseInt(i),l):o("",0,{})},children:b.id===parseInt(i)?Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{className:"material-icons",children:"favorite"})," Clear Fav"]}):Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{className:"material-icons",children:"favorite_border"})," Set as Fav"]})})})]})}}}]);
//# sourceMappingURL=6.6f2a302d.chunk.js.map