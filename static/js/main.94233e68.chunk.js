(this["webpackJsonpcelestial-compare"]=this["webpackJsonpcelestial-compare"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(4),a=r.n(s),i=r(2),d={id:{name:"ID",sortOrder:"asc"},order:{name:"Order",sortOrder:"asc"},name:{name:"Name",fieldType:"string",sortOrder:"asc"},radius:{name:"Radius",unit:"km",sortOrder:"desc"},surface:{name:"Surface area",unit:"sq km",sortOrder:"desc"},"surface-land":{name:"Land surface",unit:"sq km",sortOrder:"desc"},"surface-water":{name:"Water surface",unit:"sq km",sortOrder:"desc"},volume:{name:"Volume",unit:"cubic km",sortOrder:"desc"},mass:{name:"Mass",unit:"kg",sortOrder:"desc"}},o=[{id:0,order:1,name:"Mercury",radius:2439.7,surface:748e5,"surface-land":748e5,volume:6083e7,mass:33011e19},{id:1,order:2,name:"Venus",radius:6051.8,surface:46023e4,"surface-land":46023e4,volume:92843e7,mass:48675e20},{id:2,order:3,name:"Earth",radius:6378.137,surface:510067420,"surface-land":14894e4,"surface-water":361132e3,volume:108321e7,mass:597237e19},{id:3,order:4,name:"Mars",radius:3396.2,surface:144798500,"surface-land":144798500,volume:16318e7,mass:64171e19}],u=r(0),j=c.a.createContext({objects:[],sortBy:"",sorterHandler:function(){},sortDirectionHandler:function(){},sortDirection:"",fieldAttr:"",fieldAttrsObj:[]}),l=function(e){var t=Object(n.useState)("order"),r=Object(i.a)(t,2),c=r[0],s=r[1],a=Object(n.useState)(""),l=Object(i.a)(a,2),b=l[0],O=l[1],m=Object(n.useMemo)((function(){var e=d[c],t=function(e,t){return(t[c]||0)-(e[c]||0)};return"asc"===(""!==b?b:e.sortOrder)?(t=function(e,t){return(e[c]||0)-(t[c]||0)},"string"===e.fieldType&&(t=function(e,t){return(e[c]+"").localeCompare(t[c])})):(t=function(e,t){return t[c]-e[c]},"string"===e.fieldType&&(t=function(e,t){return(t[c]+"").localeCompare(e[c])})),Array.from(o).sort(t)}),[c,b]),f=d[c];return Object(u.jsx)(j.Provider,{value:{objects:m,sortBy:c,getObj:function(e){var t=m.findIndex((function(t){return t.id===+e}));return m[t]},sorterHandler:function(e){s(e.target.value)},sortDirection:b,sortDirectionHandler:function(e){O(e.target.value)},fieldAttr:f,fieldAttrsObj:d},children:e.children})},b=j,O=function(){var e=Object(n.useContext)(b),t=Object.keys(e.fieldAttrsObj).map((function(t){return"id"===t?null:Object(u.jsx)("option",{value:t,children:e.fieldAttrsObj[t].name},t)})),r=e.objects.map((function(t){return Object(u.jsxs)("li",{children:[t.name,": ",t[e.sortBy]||0," ",e.fieldAttr.unit]},t.name)})),c="asc"===(e.sortDirection||e.fieldAttr.sortOrder)?"ascending":"descending";return Object(u.jsxs)("div",{className:"SortCompare",children:[Object(u.jsxs)("form",{children:[Object(u.jsx)("select",{name:"obj-sorter",onChange:e.sorterHandler,children:t}),Object(u.jsxs)("select",{name:"obj-sortdirection",onChange:e.sortDirectionHandler,children:[Object(u.jsx)("option",{value:"",children:"-"}),Object(u.jsx)("option",{value:"asc",children:"Ascending"}),Object(u.jsx)("option",{value:"desc",children:"Descending"})]})]}),Object(u.jsxs)("p",{children:["Objects, sorted by ",e.fieldAttr.name,", ",c,"."]}),Object(u.jsx)("ol",{children:r})]})},m=r(5),f=r.n(m),x=function(e){var t=Object(n.useContext)(b);return Object(u.jsxs)("table",{className:"obj-compare",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"-"}),Object(u.jsx)("td",{children:"Value"}),Object(u.jsxs)("td",{children:["Compared to ",t.getObj(e.id2).name]})]})}),Object(u.jsx)("tbody",{children:function(){var r=t.getObj(e.id1),n=t.getObj(e.id2),c=Object.keys(r),s=Object.keys(n);return(c<=s?c:s).map((function(e){if("id"===e||"name"===e)return null;var c=r[e]||0,s=+c/+(n[e]||0),a=(100*s).toFixed(1),i="%";a>100&&(a=s.toFixed(2),i="times");var d=t.fieldAttrsObj[e];return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:d.name}),Object(u.jsxs)("td",{children:[c," ",d.unit]}),Object(u.jsxs)("td",{children:[a," ",i]})]},e)}))}()})]})},h=function(){var e=Object(n.useContext)(b),t=Object(n.useState)(0),r=Object(i.a)(t,2),c=r[0],s=r[1],a=Object(n.useState)(1),d=Object(i.a)(a,2),o=d[0],j=d[1],l=e.objects.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(u.jsxs)("div",{className:f.a.Compare,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("select",{onChange:function(e){s(e.target.value)},value:c,children:l}),Object(u.jsx)(x,{id1:c,id2:o})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("select",{onChange:function(e){j(e.target.value)},value:o,children:l}),Object(u.jsx)(x,{id1:o,id2:c})]})]})};var v=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsx)(h,{})]})},p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,12)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l,{children:Object(u.jsx)(v,{})})}),document.getElementById("root")),p()},5:function(e,t,r){e.exports={Compare:"SideBySideCompare_Compare__1Ose7"}}},[[11,1,2]]]);
//# sourceMappingURL=main.94233e68.chunk.js.map