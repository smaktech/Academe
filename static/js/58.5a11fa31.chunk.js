(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[58],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(4),n=a(25),c=a(136),s=a(27),i=a(407),o=a(1824),l=a(269),d=a(1681),j=a(0),b=["links","activeLast"];function p(e){var t,a=e.links,s=e.activeLast,d=void 0!==s&&s,p=Object(n.a)(e,b),u=null===(t=Object(c.last)(a))||void 0===t?void 0:t.name,m=a.map((function(e){return Object(j.jsx)(h,{link:e},e.name)})),x=a.map((function(e){return Object(j.jsx)("div",{children:e.name!==u?Object(j.jsx)(h,{link:e}):Object(j.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:u})},e.name)}));return Object(j.jsx)(o.a,Object(r.a)(Object(r.a)({separator:Object(j.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},p),{},{children:d?m:x}))}function h(e){var t=e.link,a=t.href,r=t.name,n=t.icon;return Object(j.jsxs)(d.a,{variant:"body2",component:s.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(j.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(4),n=a(25),c=a(136),s=a(269),i=a(407),o=a(1681),l=a(1819),d=a(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,p=e.moreLink,h=void 0===p?[]:p,u=e.sx,m=Object(n.a)(e,j);return Object(d.jsxs)(s.a,{sx:Object(r.a)({mb:5},u),children:[Object(d.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.a,Object(r.a)({links:t},m))]}),a&&Object(d.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(s.a,{sx:{mt:2},children:Object(c.isString)(h)?Object(d.jsx)(o.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var r=a(4),n=a(98),c=a(1009),s=a(1825),i=a(269),o=a(407),l=a(0);function d(e){var t=e.title,a=e.sx,o=e.children;return Object(l.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(n.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(s.a,{title:t}),Object(l.jsx)(i.a,{sx:Object(r.a)({p:5,minHeight:180},a),children:o})]})}function j(e){var t=e.title;return Object(l.jsx)(o.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},1824:function(e,t,a){"use strict";var r=a(16),n=a(3),c=a(10),s=a(2),i=a(13),o=a(1),l=(a(99),a(7),a(5)),d=a(300),j=a(12),b=a(18),p=a(407),h=a(98),u=a(59),m=a(0),x=Object(u.a)(Object(m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),O=a(1675),v=Object(j.a)(O.a,{skipSx:!0})((function(e){var t=e.theme;return Object(s.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(s.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(s.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(h.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(h.c)(t.palette.grey[600],.12)})})})),g=Object(j.a)(x)({width:24,height:16});var f=function(e){var t=e;return Object(m.jsx)("li",{children:Object(m.jsx)(v,Object(s.a)({focusRipple:!0},e,{ownerState:t,children:Object(m.jsx)(g,{ownerState:t})}))})},y=a(179),w=a(192);function k(e){return Object(y.a)("MuiBreadcrumbs",e)}var C=Object(w.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(j.a)(p.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(c.a)({},"& .".concat(C.li),t.li),t.root]}})({}),M=Object(j.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),I=Object(j.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,t,a,r){return e.reduce((function(n,c,s){return s<e.length-1?n=n.concat(c,Object(m.jsx)(I,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(s))):n.push(c),n}),[])}var B=o.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),c=a.children,j=a.className,p=a.component,h=void 0===p?"nav":p,u=a.expandText,x=void 0===u?"Show path":u,O=a.itemsAfterCollapse,v=void 0===O?1:O,g=a.itemsBeforeCollapse,y=void 0===g?1:g,w=a.maxItems,C=void 0===w?8:w,I=a.separator,B=void 0===I?"/":I,T=Object(i.a)(a,S),H=o.useState(!1),L=Object(n.a)(H,2),A=L[0],z=L[1],P=Object(s.a)({},a,{component:h,expanded:A,expandText:x,itemsAfterCollapse:v,itemsBeforeCollapse:y,maxItems:C,separator:B}),W=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(P),_=o.useRef(null),J=o.Children.toArray(c).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return Object(m.jsx)("li",{className:W.li,children:e},"child-".concat(t))}));return Object(m.jsx)(R,Object(s.a)({ref:t,component:h,color:"text.secondary",className:Object(l.a)(W.root,j),ownerState:P},T,{children:Object(m.jsx)(M,{className:W.ol,ref:_,ownerState:P,children:N(A||C&&J.length<=C?J:function(e){return y+v>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[Object(m.jsx)(f,{"aria-label":x,onClick:function(){z(!0);var e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-v,e.length)))}(J),W.separator,B,P)})}))}));t.a=B},1825:function(e,t,a){"use strict";var r=a(10),n=a(13),c=a(2),s=a(1),i=(a(7),a(5)),o=a(300),l=a(407),d=a(18),j=a(12),b=a(179),p=a(192);function h(e){return Object(b.a)("MuiCardHeader",e)}var u=Object(p.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(0),x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],O=Object(j.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(r.a)(a,"& .".concat(u.title),t.title),Object(r.a)(a,"& .".concat(u.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),v=Object(j.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),g=Object(j.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(j.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=s.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,s=a.avatar,j=a.className,b=a.component,p=void 0===b?"div":b,u=a.disableTypography,y=void 0!==u&&u,w=a.subheader,k=a.subheaderTypographyProps,C=a.title,S=a.titleTypographyProps,R=Object(n.a)(a,x),M=Object(c.a)({},a,{component:p,disableTypography:y}),I=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(M),N=C;null==N||N.type===l.a||y||(N=Object(m.jsx)(l.a,Object(c.a)({variant:s?"body2":"h5",className:I.title,component:"span",display:"block"},S,{children:N})));var B=w;return null==B||B.type===l.a||y||(B=Object(m.jsx)(l.a,Object(c.a)({variant:s?"body2":"body1",className:I.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:B}))),Object(m.jsxs)(O,Object(c.a)({className:Object(i.a)(I.root,j),as:p,ref:t,ownerState:M},R,{children:[s&&Object(m.jsx)(v,{className:I.avatar,ownerState:M,children:s}),Object(m.jsxs)(f,{className:I.content,ownerState:M,children:[N,B]}),r&&Object(m.jsx)(g,{className:I.action,ownerState:M,children:r})]}))}));t.a=y},2770:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(12),n=a(269),c=a(1785),s=a(1002),i=a(1681),o=a(348),l=a(47),d=a(671),j=a(41),b=a(678),p=a(1820),h=a(1823),u=a(0),m=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),x={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function O(){return Object(u.jsx)(d.a,{title:"Foundations: Icons",children:Object(u.jsxs)(m,{children:[Object(u.jsx)(n.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(u.jsx)(c.a,{children:Object(u.jsx)(p.a,{heading:"Icons",links:[{name:"Components",href:l.d.components},{name:"Icons"}],moreLink:["https://mui.com/components/material-icons","https://iconify.design/icon-sets"]})})}),Object(u.jsx)(c.a,{children:Object(u.jsxs)(s.a,{spacing:3,children:[Object(u.jsx)(n.a,{sx:{position:"relative"},children:Object(u.jsx)(h.a,{title:"Material Icons",sx:x,children:Object(u.jsx)(i.a,{href:"https://mui.com/components/icons/#main-content",target:"_blank",rel:"noopener",children:"https://mui.com/components/icons/#main-content"})})}),Object(u.jsx)(n.a,{sx:{position:"relative"},children:Object(u.jsxs)(h.a,{title:"Iconify Icons",sx:x,children:[Object(u.jsx)(o.a,{color:"action",children:Object(u.jsx)(j.a,{icon:"eva:alert-circle-fill",width:24,height:24})}),Object(u.jsx)(o.a,{color:"disabled",children:Object(u.jsx)(j.a,{icon:"eva:charging-fill",width:24,height:24})}),Object(u.jsx)(o.a,{color:"error",children:Object(u.jsx)(j.a,{icon:"eva:arrow-circle-down-fill",width:24,height:24})}),Object(u.jsx)(o.a,{color:"inherit",children:Object(u.jsx)(j.a,{icon:"eva:clock-fill",width:24,height:24})}),Object(u.jsx)(o.a,{color:"primary",children:Object(u.jsx)(j.a,{icon:"eva:color-palette-fill",width:24,height:24})}),Object(u.jsx)(o.a,{color:"secondary",children:Object(u.jsx)(j.a,{icon:"eva:color-palette-fill",width:24,height:24})})]})}),Object(u.jsx)(n.a,{sx:{position:"relative"},children:Object(u.jsxs)(h.a,{title:"Local Icons",sx:x,children:[Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/browser-edge.svg"}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/browser-edge.svg",sx:{color:"action.active"}}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/browser-edge.svg",sx:{color:"action.disabled"}}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/browser-edge.svg",sx:{color:"primary.main"}}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/browser-edge.svg",sx:{color:"secondary.main"}}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/elephant.svg",sx:{color:"info.main"}}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/json-logo.svg",sx:{color:"success.main"}}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/love-camera.svg",sx:{color:"warning.main"}}),Object(u.jsx)(b.a,{src:"https://minimal-assets-api.vercel.app/assets/icons/shield.svg",sx:{color:"error.main"}})]})})]})})]})})}}}]);
//# sourceMappingURL=58.5a11fa31.chunk.js.map