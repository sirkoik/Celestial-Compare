(this["webpackJsonpcelestial-compare"]=this["webpackJsonpcelestial-compare"]||[]).push([[0],[,,,function(e,t,r){e.exports={Compare:"SideBySideCompare_Compare__1Ose7",versus:"SideBySideCompare_versus__2ROu5","CompareSide-Container":"SideBySideCompare_CompareSide-Container__2sEW8"}},,,function(e,t,r){e.exports={SortCompare:"SortCompare_SortCompare__14Znr"}},function(e,t,r){e.exports={CompareTable:"CompareSide_CompareTable__2T0r6"}},,,,,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(5),i=r.n(s),c=(r(12),r(2)),o=r(0),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=e.split("e+"),a=Object(c.a)(r,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[parseFloat(n).toFixed(t)," \xd7 10",Object(o.jsx)("sup",{children:s})]})},u=function(e){if("Infinity"===e||e===1/0)return e;var t=Math.floor(e)+"";if(t.includes("e"))return d(t);var r=(Math.abs(Math.floor(e))+"").length;if(r<4)return e;var a=r%3||3;e<0&&a++;for(var n=(e+"").split(""),s="",i=!1,c=0;c<n.length;c++){"."===n[c]&&(i=!0),(!i&&c-a>=0&&(c-a)%3===0||c===a)&&(s+=","),s+=n[c]}return s},m={id:{ignore:!0,name:"ID",sortOrder:"asc"},order:{name:"Order",description:"The order of the object in its system. For instance, Earth is the third object in the solar system.",sortOrder:"asc","comparison-method":"subtract"},type:{name:"Type",description:"The object's type as defined by the International Astronomical Union.",fieldType:"string",sortOrder:"asc","comparison-method":"string"},name:{name:"Name",description:"The name of the object. This is defined by the International Astronomical Union.",fieldType:"string",sortOrder:"asc"},radius:{name:"Radius",description:"The radius of the object in kilometers. This is half of the object's mean diameter.",unit:"km",sortOrder:"desc"},surface:{name:"Surface area",description:"The total surface area of the object in square kilometers. Includes land and water on solid bodies.",unit:Object(o.jsxs)(o.Fragment,{children:["km",Object(o.jsx)("sup",{children:"2"})]}),sortOrder:"desc"},"surface-land":{name:"Land surface",description:"The amount of non-liquid surface on a solid body in square kilometers.",unit:Object(o.jsxs)(o.Fragment,{children:["km",Object(o.jsx)("sup",{children:"2"})]}),sortOrder:"desc"},"surface-water":{name:"Surface water",description:"A measure of the total liquid surface (oceans, lakes, etc.) on a solid body such as Earth or Titan in square kilometers.",unit:Object(o.jsxs)(o.Fragment,{children:["km",Object(o.jsx)("sup",{children:"2"})]}),sortOrder:"desc"},volume:{name:"Volume",description:"Measures how many cubic kilometers of space the object occupies.",unit:Object(o.jsxs)(o.Fragment,{children:["km",Object(o.jsx)("sup",{children:"3"})]}),sortOrder:"desc"},mass:{name:"Mass",description:'How much matter the object contains (in kilograms). In a gravity well, this is how "heavy" it would be.',unit:"kg",sortOrder:"desc"},density:{name:"Density",description:"A measure of how dense the object is, in grams per cubic centimeter.",unit:Object(o.jsxs)(o.Fragment,{children:["g/cm",Object(o.jsx)("sup",{children:"3"})]}),sortOrder:"asc"},"surface-gravity":{name:"Surface gravity",description:"A measure of how strong the pull of gravity is on the object's surface.",unit:Object(o.jsxs)(o.Fragment,{children:["m/s",Object(o.jsx)("sup",{children:"2"})]}),sortOrder:"asc"},"temperature-mean":{name:"Temperature",description:"The mean temperature on the surface of the object.",unit:Object(o.jsx)(o.Fragment,{children:"\xb0C"}),"comparison-method":"subtract"},"temperature-details":{ignore:!0,name:"Temperatures",description:"Gives a better idea of the range of temperatures experienced by the object.",unit:Object(o.jsx)(o.Fragment,{children:"\xb0C"})},atmosphere:{name:"Atmospheric pressure",description:"Atmosphereic pressure on the object's surface.",unit:"kPa"}},l=[{id:0,order:0,name:"Sun",type:"Star",radius:695700,surface:609e10,"surface-land":0,volume:141e16,mass:1.9885e30,density:1.408,"surface-gravity":274,"temperature-mean":5498.85,"temperature-details":{center:15699730,photosphere:5498.85,corona:4999727}},{id:1,order:1,name:"Mercury",type:"Planet",radius:2439.7,surface:748e5,"surface-land":748e5,volume:6083e7,mass:33011e19,density:5.427,"surface-gravity":3.7,"temperature-mean":67,"temperature-details":{min:-173,mean:67,max:427}},{id:2,order:2,name:"Venus",type:"Planet",radius:6051.8,surface:46023e4,"surface-land":46023e4,volume:92843e7,mass:48675e20,density:5.243,"surface-gravity":8.87,"temperature-mean":464,atmosphere:9300},{id:3,order:3,name:"Earth",type:"Planet",radius:6378.137,surface:510067420,"surface-land":14894e4,"surface-water":361132e3,volume:108321e7,mass:597237e19,density:5.514,"surface-gravity":9.80665,"temperature-mean":14,"temperature-details":{min:-89.2,mean:14,max:56.7},atmosphere:101.325},{id:4,order:4,name:"Mars",type:"Planet",radius:3396.2,surface:144798500,"surface-land":144798500,volume:16318e7,mass:64171e19,density:3.9335,"surface-gravity":3.72076,"temperature-mean":-63,"temperature-details":{min:-143,mean:-63,max:35},atmosphere:.636},{id:5,order:4.5,name:"Ceres",type:"Dwarf planet",radius:469.73,surface:277e4,"surface-land":277e4,volume:434e6,mass:93835e16,density:2.162,"surface-gravity":.28,"temperature-mean":-105.15,"temperature-details":{min:-163.15,mean:-105.15,max:-38.15}},{id:6,order:5,name:"Jupiter",type:"Planet",radius:69911,surface:61419e6,"surface-land":0,volume:14313e11,mass:18982e23,density:1.326,"surface-gravity":24.79,"temperature-mean":-108.15,"temperature-details":{"min-0.1-bar":-195.15,"mean-0.1-bar":-145.15,"max-0.1-bar":726.85},atmosphere:400,notes:['"Surface" temperature is measured at 1 bar atmospheric pressure. Jupiter has no real surface.',"Atmospheric pressure is measured at the opaque cloud deck."]},{id:7,order:6,name:"Saturn",type:"Planet",radius:58232,surface:427e8,"surface-land":0,volume:82713e10,mass:56834e22,density:.687,"surface-gravity":10.44,"temperature-mean":-139.15,"temperature-details":{"min-0.1-bar":-185.15,"mean-0.1-bar":-176.15,"max-0.1-bar":-122.15},atmosphere:140,notes:['"Surface" temperature is measured at 1 bar atmospheric pressure. Saturn has no real surface.']},{id:8,order:7,name:"Uranus",type:"Planet",radius:25362,surface:81156e5,"surface-land":0,volume:6833e10,mass:8681e22,density:1.27,"surface-gravity":8.69,"temperature-mean":-197.2,"temperature-details":{"min-0.1-bar":-226.15,"mean-0.1-bar":-220.15,"max-0.1-bar":-216.15},notes:['"Surface" temperature is measured at 1 bar atmospheric pressure. Uranus has no real surface.']},{id:9,order:8,name:"Neptune",type:"Planet",radius:24622,surface:76183e5,"surface-land":0,volume:6254e10,mass:1024e23,density:1.638,"surface-gravity":11.15,"temperature-mean":-201,"temperature-details":{"mean-0.1-bar":-218},notes:['"Surface" temperature is measured at 1 bar atmospheric pressure. Neptune has no real surface.']},{id:10,order:9,name:"Pluto",type:"Dwarf planet",radius:1188.3,surface:1779e4,"surface-land":1779e4,volume:7057e6,mass:1303e19,density:1.854,"surface-gravity":.62,"temperature-mean":-229,"temperature-details":{min:-240.15,mean:-229,max:-218.15},atmosphere:.001}],j=n.a.createContext({objects:[],sortBy:"",sorterHandler:function(){},sortDirectionHandler:function(){},sortDirection:"",descHandler:function(){},fieldAttr:"",fieldAttrsObj:[]}),b=function(e){var t=Object(a.useState)("order"),r=Object(c.a)(t,2),n=r[0],s=r[1],i=Object(a.useState)(""),d=Object(c.a)(i,2),u=d[0],b=d[1],p=Object(a.useMemo)((function(){var e=m[n],t=function(e,t){return(t[n]||0)-(e[n]||0)};return"asc"===(""!==u?u:e.sortOrder)?(t=function(e,t){return(e[n]||0)-(t[n]||0)},"string"===e.fieldType&&(t=function(e,t){return(e[n]+"").localeCompare(t[n])})):(t=function(e,t){return t[n]-e[n]},"string"===e.fieldType&&(t=function(e,t){return(t[n]+"").localeCompare(e[n])})),Array.from(l).sort(t)}),[n,u]),h=m[n];return Object(o.jsx)(j.Provider,{value:{objects:p,sortBy:n,getObj:function(e){var t=p.findIndex((function(t){return t.id===+e}));return p[t]},sorterHandler:function(e){s(e.target.value)},sortDirection:u,sortDirectionHandler:function(e){b(e.target.value)},descHandler:function(e){var t=m[e],r=t.name,a=t.description;alert(r+"\n\n"+a)},fieldAttr:h,fieldAttrsObj:m},children:e.children})},p=j,h=r(6),f=r.n(h),O=function(){var e=Object(a.useContext)(p),t=Object.keys(e.fieldAttrsObj).map((function(t){return"id"===t?null:Object(o.jsx)("option",{value:t,children:e.fieldAttrsObj[t].name},t)})),r=e.objects.map((function(t){var r=t[e.sortBy],a=isNaN(r)?r:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7,r=e.toString();return(""+Math.floor(e)).length<=t?u(r):d(Number(r).toExponential())}(r);return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"checkbox",name:"compare-".concat(t.id)})}),Object(o.jsx)("td",{children:t.name}),Object(o.jsxs)("td",{children:[a||0," ",e.fieldAttr.unit]})]},t.name)})),n=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("select",{name:"obj-sorter",onChange:e.sorterHandler,children:t}),Object(o.jsxs)("select",{name:"obj-sortdirection",onChange:e.sortDirectionHandler,children:[Object(o.jsx)("option",{value:"",children:"-"}),Object(o.jsx)("option",{value:"asc",children:"Up"}),Object(o.jsx)("option",{value:"desc",children:"Down"})]}),Object(o.jsx)("button",{onClick:e.descHandler.bind(null,e.sortBy),children:"?"})]});return Object(o.jsxs)("div",{className:f.a.SortCompare,children:[Object(o.jsx)("h1",{children:"Rank objects by one variable"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"-"}),Object(o.jsx)("td",{children:"Object"}),Object(o.jsx)("td",{children:n})]})}),Object(o.jsx)("tbody",{children:r})]})]})},x=r(3),v=r.n(x),y=r(7),g=r.n(y),C=function(e){var t=Object(a.useContext)(p);return Object(o.jsxs)("table",{className:g.a.CompareTable,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"-"}),Object(o.jsx)("td",{children:"Value"}),Object(o.jsxs)("td",{children:["vs. ",t.getObj(e.id2).name]})]})}),Object(o.jsx)("tbody",{children:function(){var r=t.getObj(e.id1),a=t.getObj(e.id2),n=Object.keys(r),s=Object.keys(a);return(n<=s?n:s).map((function(e){if("id"===e||"name"===e)return null;var n=t.fieldAttrsObj[e];if(n.ignore)return null;var s=r[e]||0,i=a[e]||0,c=0,m="%",l=s;switch(n["comparison-method"]){case"subtract":c=s-i,m=n.unit||"",c=c>0?"+"+c:c,l=s;break;case"string":c=i,m="",l=s;break;default:var j=+s/+i;if((c=(100*j).toFixed(1))!==1/0&&c>100){var b=j<1e3?j.toFixed(2):Math.floor(j);c=u(b),m=Object(o.jsx)(o.Fragment,{children:"\xd7"})}c===1/0&&(c="-",m=""),(l=(s+"").length>7?Number(s).toExponential():u(s)).toString().includes("e")&&(l=d(l)),console.log("val1Out",l)}return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:t.descHandler.bind(null,e),children:n.name})}),Object(o.jsxs)("td",{children:[l," ",n.unit]}),Object(o.jsxs)("td",{children:[c," ",m]})]},e)}))}()})]})},S=function(){var e=Object(a.useContext)(p),t=Object(a.useState)(0),r=Object(c.a)(t,2),n=r[0],s=r[1],i=Object(a.useState)(1),d=Object(c.a)(i,2),u=d[0],m=d[1],l=e.objects.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Compare two objects"}),Object(o.jsxs)("div",{className:v.a.Compare,children:[Object(o.jsxs)("div",{className:v.a["CompareSide-Container"],children:[Object(o.jsx)("select",{onChange:function(e){s(e.target.value)},value:n,children:l}),Object(o.jsx)(C,{id1:n,id2:u})]}),Object(o.jsx)("div",{className:v.a.versus,children:"vs."}),Object(o.jsxs)("div",{className:v.a["CompareSide-Container"],children:[Object(o.jsx)("select",{onChange:function(e){m(e.target.value)},value:u,children:l}),Object(o.jsx)(C,{id1:u,id2:n})]})]})]})};var k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(O,{}),Object(o.jsx)(S,{})]})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{children:Object(o.jsx)(k,{})})}),document.getElementById("root")),T()}],[[14,1,2]]]);
//# sourceMappingURL=main.431d0791.chunk.js.map