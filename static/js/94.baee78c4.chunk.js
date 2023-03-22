(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[94],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(4),c=a(25),l=a(136),r=a(27),s=a(407),i=a(1824),o=a(269),j=a(1681),b=a(0),x=["links","activeLast"];function d(e){var t,a=e.links,r=e.activeLast,j=void 0!==r&&r,d=Object(c.a)(e,x),O=null===(t=Object(l.last)(a))||void 0===t?void 0:t.name,h=a.map((function(e){return Object(b.jsx)(u,{link:e},e.name)})),m=a.map((function(e){return Object(b.jsx)("div",{children:e.name!==O?Object(b.jsx)(u,{link:e}):Object(b.jsx)(s.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:O})},e.name)}));return Object(b.jsx)(i.a,Object(n.a)(Object(n.a)({separator:Object(b.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},d),{},{children:j?h:m}))}function u(e){var t=e.link,a=t.href,n=t.name,c=t.icon;return Object(b.jsxs)(j.a,{variant:"body2",component:r.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(b.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),n]},n)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(4),c=a(25),l=a(136),r=a(269),s=a(407),i=a(1681),o=a(1819),j=a(0),b=["links","action","heading","moreLink","sx"];function x(e){var t=e.links,a=e.action,x=e.heading,d=e.moreLink,u=void 0===d?[]:d,O=e.sx,h=Object(c.a)(e,b);return Object(j.jsxs)(r.a,{sx:Object(n.a)({mb:5},O),children:[Object(j.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:x}),Object(j.jsx)(o.a,Object(n.a)({links:t},h))]}),a&&Object(j.jsx)(r.a,{sx:{flexShrink:0},children:a})]}),Object(j.jsx)(r.a,{sx:{mt:2},children:Object(l.isString)(u)?Object(j.jsx)(i.a,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return Object(j.jsx)(i.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return b}));var n=a(4),c=a(98),l=a(1009),r=a(1825),s=a(269),i=a(407),o=a(0);function j(e){var t=e.title,a=e.sx,i=e.children;return Object(o.jsxs)(l.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(c.a)(e.palette.grey[500],.04)}},children:[t&&Object(o.jsx)(r.a,{title:t}),Object(o.jsx)(s.a,{sx:Object(n.a)({p:5,minHeight:180},a),children:i})]})}function b(e){var t=e.title;return Object(o.jsx)(i.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2795:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(3),c=a(1),l=a(12),r=a(269),s=a(1785),i=a(1800),o=a(1763),j=a(1772),b=a(1803),x=a(1843),d=a(47),u=a(671),O=a(1820),h=a(1823),m=a(0),p={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:1}},v=Object(l.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function f(){var e=Object(c.useState)("a1"),t=Object(n.a)(e,2),a=t[0],l=t[1];return Object(m.jsx)(u.a,{title:"Components: Radio Buttons",children:Object(m.jsxs)(v,{children:[Object(m.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(s.a,{children:Object(m.jsx)(O.a,{heading:"Radio Buttons",links:[{name:"Components",href:d.d.components},{name:"Radio Buttons"}],moreLink:"https://mui.com/components/radio-buttons"})})}),Object(m.jsx)(s.a,{children:Object(m.jsxs)(x.a,{columns:{xs:1,md:2},spacing:3,children:[Object(m.jsx)(h.a,{title:"Basic",sx:p,children:Object(m.jsx)(i.a,{component:"fieldset",children:Object(m.jsxs)(o.a,{row:!0,defaultValue:"nn",children:[Object(m.jsx)(j.a,{value:"nn"}),Object(m.jsx)(j.a,{value:"gg"}),Object(m.jsx)(j.a,{disabled:!0,value:"hh"})]})})}),Object(m.jsx)(h.a,{title:"Size",sx:p,children:Object(m.jsxs)(o.a,{row:!0,defaultValue:"g",children:[Object(m.jsx)(b.a,{value:"g",control:Object(m.jsx)(j.a,{}),label:"Normal"}),Object(m.jsx)(b.a,{value:"p",control:Object(m.jsx)(j.a,{size:"small"}),label:"Small"})]})}),Object(m.jsx)(h.a,{title:"Placement",sx:p,children:Object(m.jsx)(i.a,{component:"fieldset",children:Object(m.jsxs)(o.a,{row:!0,defaultValue:"top",children:[Object(m.jsx)(b.a,{value:"top",label:"Top",labelPlacement:"top",control:Object(m.jsx)(j.a,{})}),Object(m.jsx)(b.a,{value:"start",label:"Start",labelPlacement:"start",control:Object(m.jsx)(j.a,{})}),Object(m.jsx)(b.a,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:Object(m.jsx)(j.a,{})}),Object(m.jsx)(b.a,{value:"end",label:"End",control:Object(m.jsx)(j.a,{})})]})})}),Object(m.jsx)(h.a,{title:"Adding Colors",children:Object(m.jsx)(i.a,{component:"fieldset",children:Object(m.jsxs)(o.a,{value:a,onChange:function(e){l(e.target.value)},children:[Object(m.jsx)(b.a,{value:"a1",control:Object(m.jsx)(j.a,{color:"default"}),label:"Default"}),Object(m.jsx)(b.a,{value:"a2",control:Object(m.jsx)(j.a,{}),label:"Primary"}),Object(m.jsx)(b.a,{value:"a3",control:Object(m.jsx)(j.a,{color:"secondary"}),label:"Secondary"}),Object(m.jsx)(b.a,{value:"a4",control:Object(m.jsx)(j.a,{color:"info"}),label:"Info"}),Object(m.jsx)(b.a,{value:"a5",control:Object(m.jsx)(j.a,{color:"success"}),label:"Success"}),Object(m.jsx)(b.a,{value:"a6",control:Object(m.jsx)(j.a,{color:"warning"}),label:"Warning"}),Object(m.jsx)(b.a,{value:"a7",control:Object(m.jsx)(j.a,{color:"error"}),label:"Error"}),Object(m.jsx)(b.a,{disabled:!0,value:"a8",control:Object(m.jsx)(j.a,{color:"error"}),label:"Disabled"})]})})})]})})]})})}}}]);
//# sourceMappingURL=94.baee78c4.chunk.js.map