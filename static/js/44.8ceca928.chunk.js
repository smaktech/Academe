(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[44],{1819:function(e,t,l){"use strict";l.d(t,"a",(function(){return p}));var o=l(4),a=l(25),r=l(136),n=l(27),i=l(407),s=l(1824),c=l(269),b=l(1681),d=l(0),u=["links","activeLast"];function p(e){var t,l=e.links,n=e.activeLast,b=void 0!==n&&n,p=Object(a.a)(e,u),j=null===(t=Object(r.last)(l))||void 0===t?void 0:t.name,m=l.map((function(e){return Object(d.jsx)(q,{link:e},e.name)})),h=l.map((function(e){return Object(d.jsx)("div",{children:e.name!==j?Object(d.jsx)(q,{link:e}):Object(d.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:j})},e.name)}));return Object(d.jsx)(s.a,Object(o.a)(Object(o.a)({separator:Object(d.jsx)(c.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},p),{},{children:b?m:h}))}function q(e){var t=e.link,l=t.href,o=t.name,a=t.icon;return Object(d.jsxs)(b.a,{variant:"body2",component:n.b,to:l||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(d.jsx)(c.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),o]},o)}},1820:function(e,t,l){"use strict";l.d(t,"a",(function(){return u}));var o=l(4),a=l(25),r=l(136),n=l(269),i=l(407),s=l(1681),c=l(1819),b=l(0),d=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,l=e.action,u=e.heading,p=e.moreLink,q=void 0===p?[]:p,j=e.sx,m=Object(a.a)(e,d);return Object(b.jsxs)(n.a,{sx:Object(o.a)({mb:5},j),children:[Object(b.jsxs)(n.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(b.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(c.a,Object(o.a)({links:t},m))]}),l&&Object(b.jsx)(n.a,{sx:{flexShrink:0},children:l})]}),Object(b.jsx)(n.a,{sx:{mt:2},children:Object(r.isString)(q)?Object(b.jsx)(s.a,{href:q,target:"_blank",rel:"noopener",variant:"body2",children:q}):q.map((function(e){return Object(b.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,l){"use strict";var o=l(16),a=l(3),r=l(10),n=l(2),i=l(13),s=l(1),c=(l(99),l(7),l(5)),b=l(300),d=l(12),u=l(18),p=l(407),q=l(98),j=l(59),m=l(0),h=Object(j.a)(Object(m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=l(1675),O=Object(d.a)(x.a,{skipSx:!0})((function(e){var t=e.theme;return Object(n.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(n.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(n.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(q.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(q.c)(t.palette.grey[600],.12)})})})),f=Object(d.a)(h)({width:24,height:16});var v=function(e){var t=e;return Object(m.jsx)("li",{children:Object(m.jsx)(O,Object(n.a)({focusRipple:!0},e,{ownerState:t,children:Object(m.jsx)(f,{ownerState:t})}))})},g=l(179),k=l(192);function y(e){return Object(g.a)("MuiBreadcrumbs",e)}var w=Object(k.a)("MuiBreadcrumbs",["root","ol","li","separator"]),N=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],C=Object(d.a)(p.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(r.a)({},"& .".concat(w.li),t.li),t.root]}})({}),S=Object(d.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=Object(d.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function H(e,t,l,o){return e.reduce((function(a,r,n){return n<e.length-1?a=a.concat(r,Object(m.jsx)(R,{"aria-hidden":!0,className:t,ownerState:o,children:l},"separator-".concat(n))):a.push(r),a}),[])}var z=s.forwardRef((function(e,t){var l=Object(u.a)({props:e,name:"MuiBreadcrumbs"}),r=l.children,d=l.className,p=l.component,q=void 0===p?"nav":p,j=l.expandText,h=void 0===j?"Show path":j,x=l.itemsAfterCollapse,O=void 0===x?1:x,f=l.itemsBeforeCollapse,g=void 0===f?1:f,k=l.maxItems,w=void 0===k?8:k,R=l.separator,z=void 0===R?"/":R,M=Object(i.a)(l,N),T=s.useState(!1),B=Object(a.a)(T,2),I=B[0],L=B[1],P=Object(n.a)({},l,{component:q,expanded:I,expandText:h,itemsAfterCollapse:O,itemsBeforeCollapse:g,maxItems:w,separator:z}),A=function(e){var t=e.classes;return Object(b.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)}(P),E=s.useRef(null),F=s.Children.toArray(r).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return Object(m.jsx)("li",{className:A.li,children:e},"child-".concat(t))}));return Object(m.jsx)(C,Object(n.a)({ref:t,component:q,color:"text.secondary",className:Object(c.a)(A.root,d),ownerState:P},M,{children:Object(m.jsx)(S,{className:A.ol,ref:E,ownerState:P,children:H(I||w&&F.length<=w?F:function(e){return g+O>=e.length?e:[].concat(Object(o.a)(e.slice(0,g)),[Object(m.jsx)(v,{"aria-label":h,onClick:function(){L(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(o.a)(e.slice(e.length-O,e.length)))}(F),A.separator,z,P)})}))}));t.a=z},1825:function(e,t,l){"use strict";var o=l(10),a=l(13),r=l(2),n=l(1),i=(l(7),l(5)),s=l(300),c=l(407),b=l(18),d=l(12),u=l(179),p=l(192);function q(e){return Object(u.a)("MuiCardHeader",e)}var j=Object(p.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=l(0),h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=Object(d.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var l;return Object(r.a)((l={},Object(o.a)(l,"& .".concat(j.title),t.title),Object(o.a)(l,"& .".concat(j.subheader),t.subheader),l),t.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(d.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(d.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(d.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=n.forwardRef((function(e,t){var l=Object(b.a)({props:e,name:"MuiCardHeader"}),o=l.action,n=l.avatar,d=l.className,u=l.component,p=void 0===u?"div":u,j=l.disableTypography,g=void 0!==j&&j,k=l.subheader,y=l.subheaderTypographyProps,w=l.title,N=l.titleTypographyProps,C=Object(a.a)(l,h),S=Object(r.a)({},l,{component:p,disableTypography:g}),R=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},q,t)}(S),H=w;null==H||H.type===c.a||g||(H=Object(m.jsx)(c.a,Object(r.a)({variant:n?"body2":"h5",className:R.title,component:"span",display:"block"},N,{children:H})));var z=k;return null==z||z.type===c.a||g||(z=Object(m.jsx)(c.a,Object(r.a)({variant:n?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:z}))),Object(m.jsxs)(x,Object(r.a)({className:Object(i.a)(R.root,d),as:p,ref:t,ownerState:S},C,{children:[n&&Object(m.jsx)(O,{className:R.avatar,ownerState:S,children:n}),Object(m.jsxs)(v,{className:R.content,ownerState:S,children:[H,z]}),o&&Object(m.jsx)(f,{className:R.action,ownerState:S,children:o})]}))}));t.a=g},1867:function(e,t,l){"use strict";l.d(t,"a",(function(){return k}));var o=l(25),a=l(4),r=l(1864),n=l.n(r),i=l(12),s=l(41),c=Object(i.a)("div")((function(e){var t=e.theme,l="rtl"===t.direction;return{"& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill":{fill:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected":{color:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter":{stroke:t.palette.primary.main},"& .ql-stroke":{stroke:t.palette.text.primary},"& .ql-fill, .ql-stroke.ql-fill":{fill:t.palette.text.primary},"& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button":{"&:focus":{outline:"none"}},"& .ql-toolbar.ql-snow":{border:"none",borderBottom:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-formats":{"&:not(:last-of-type)":{marginRight:t.spacing(2)}},"& button":{padding:0,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,color:t.palette.text.primary},"& button svg, span svg":{width:20,height:20},"& .ql-picker-label":Object(a.a)(Object(a.a)({},t.typography.subtitle2),{},{color:t.palette.text.primary,"& .ql-stroke":{stroke:t.palette.text.primary}}),"& .ql-picker-label svg":Object(a.a)({},l&&{right:"0 !important",left:"auto !important"}),"& .ql-color,& .ql-background,& .ql-align ":{"& .ql-picker-label":{padding:0,display:"flex",alignItems:"center",justifyContent:"center"}},"& .ql-expanded":{"& .ql-picker-label":{borderRadius:4,color:t.palette.text.disabled,borderColor:"transparent !important",backgroundColor:t.palette.action.focus,"& .ql-stroke":{stroke:t.palette.text.disabled}},"& .ql-picker-options":{padding:0,marginTop:4,border:"none",maxHeight:200,overflow:"auto",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .ql-picker-item":{color:t.palette.text.primary},"&.ql-align":{"& .ql-picker-options":{padding:0,display:"flex"},"& .ql-picker-item":{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"}},"&.ql-color, &.ql-background":{"& .ql-picker-options":{padding:8},"& .ql-picker-item":{margin:3,borderRadius:4,"&.ql-selected":{border:"solid 1px black"}}},"&.ql-font, &.ql-size, &.ql-header":{"& .ql-picker-options":{padding:t.spacing(1,0)},"& .ql-picker-item":{padding:t.spacing(.5,1.5)}}}}}})),b=l(0),d=["id","isSimple"],u=["Arial","Tahoma","Georgia","Impact","Verdana"],p=["8px","9px","10px","12px","14px","16px","20px","24px","32px","42px","54px","68px","84px","98px"],q=["Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Heading 6"];function j(){this.quill.history.undo()}function m(){this.quill.history.redo()}var h=r.Quill.import("attributors/style/size");h.whitelist=p,r.Quill.register(h,!0);var x=r.Quill.import("attributors/style/font");x.whitelist=u,r.Quill.register(x,!0);var O=["align","background","blockquote","bold","bullet","code","code-block","color","direction","font","formula","header","image","indent","italic","link","list","script","size","strike","table","underline","video"];function f(e){var t=e.id,l=e.isSimple,r=Object(o.a)(e,d);return Object(b.jsx)(c,Object(a.a)(Object(a.a)({},r),{},{children:Object(b.jsxs)("div",{id:t,children:[Object(b.jsxs)("div",{className:"ql-formats",children:[!l&&Object(b.jsxs)("select",{className:"ql-font",defaultValue:"",children:[Object(b.jsx)("option",{value:"",children:"Font"}),u.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),!l&&Object(b.jsx)("select",{className:"ql-size",defaultValue:"16px",children:p.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))}),Object(b.jsxs)("select",{className:"ql-header",defaultValue:"",children:[q.map((function(e,t){return Object(b.jsx)("option",{value:t+1,children:e},e)})),Object(b.jsx)("option",{value:"",children:"Normal"})]})]}),Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("button",{type:"button",className:"ql-bold"}),Object(b.jsx)("button",{type:"button",className:"ql-italic"}),Object(b.jsx)("button",{type:"button",className:"ql-underline"}),Object(b.jsx)("button",{type:"button",className:"ql-strike"})]}),!l&&Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("select",{className:"ql-color"}),Object(b.jsx)("select",{className:"ql-background"})]}),Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("button",{type:"button",className:"ql-list",value:"ordered"}),Object(b.jsx)("button",{type:"button",className:"ql-list",value:"bullet"}),!l&&Object(b.jsx)("button",{type:"button",className:"ql-indent",value:"-1"}),!l&&Object(b.jsx)("button",{type:"button",className:"ql-indent",value:"+1"})]}),!l&&Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("button",{type:"button",className:"ql-script",value:"super"}),Object(b.jsx)("button",{type:"button",className:"ql-script",value:"sub"})]}),!l&&Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("button",{type:"button",className:"ql-code-block"}),Object(b.jsx)("button",{type:"button",className:"ql-blockquote"})]}),Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("button",{type:"button",className:"ql-direction",value:"rtl"}),Object(b.jsx)("select",{className:"ql-align"})]}),Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("button",{type:"button",className:"ql-link"}),Object(b.jsx)("button",{type:"button",className:"ql-image"}),Object(b.jsx)("button",{type:"button",className:"ql-video"})]}),Object(b.jsxs)("div",{className:"ql-formats",children:[!l&&Object(b.jsx)("button",{type:"button",className:"ql-formula"}),Object(b.jsx)("button",{type:"button",className:"ql-clean"})]}),!l&&Object(b.jsxs)("div",{className:"ql-formats",children:[Object(b.jsx)("button",{type:"button",className:"ql-undo",children:Object(b.jsx)(s.a,{icon:"ic:round-undo",width:18,height:18})}),Object(b.jsx)("button",{type:"button",className:"ql-redo",children:Object(b.jsx)(s.a,{icon:"ic:round-redo",width:18,height:18})})]})]})}))}var v=["id","error","value","onChange","simple","sx"],g=Object(i.a)("div")((function(e){var t=e.theme;return{borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-container.ql-snow":Object(a.a)(Object(a.a)({borderColor:"transparent"},t.typography.body1),{},{fontFamily:t.typography.fontFamily}),"& .ql-editor":{minHeight:200,"&.ql-blank::before":{fontStyle:"normal",color:t.palette.text.disabled},"& pre.ql-syntax":Object(a.a)(Object(a.a)({},t.typography.body2),{},{padding:t.spacing(2),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[900]})}}}));function k(e){var t=e.id,l=e.error,r=e.value,i=e.onChange,s=e.simple,c=void 0!==s&&s,d=e.sx,u=Object(o.a)(e,v),p={toolbar:{container:"#".concat(t),handlers:{undo:j,redo:m}},history:{delay:500,maxStack:100,userOnly:!0},syntax:!0,clipboard:{matchVisual:!1}};return Object(b.jsxs)(g,{sx:Object(a.a)(Object(a.a)({},l&&{border:function(e){return"solid 1px ".concat(e.palette.error.main)}}),d),children:[Object(b.jsx)(f,{id:t,isSimple:c}),Object(b.jsx)(n.a,Object(a.a)({value:r,onChange:i,modules:p,formats:O,placeholder:"Write something awesome..."},u))]})}},1871:function(e,t,l){"use strict";l.d(t,"a",(function(){return j}));var o=l(10),a=l(4),r=l(2102),n=l(1901),i=l(1902),s=l(12),c=l(407),b=l(1653),d=l(1681),u=l(349),p=l(0),q=Object(s.a)("div")((function(e){var t,l=e.theme,r="light"===l.palette.mode;return{"& ul, & ol":Object(a.a)(Object(a.a)({},l.typography.body1),{},{paddingLeft:l.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:l.spacing(3,3,3,8),borderRadius:2*Number(l.shape.borderRadius),backgroundColor:l.palette.background.neutral,color:"".concat(l.palette.text.secondary," !important")},Object(o.a)(t,l.breakpoints.up("md"),{width:"80%"}),Object(o.a)(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(l.palette.text.secondary," !important")}),Object(o.a)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:l.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:l.spacing(2),color:l.palette.common.white,borderRadius:l.shape.borderRadius,backgroundColor:r?l.palette.grey[900]:l.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:l.spacing(.2,.5),color:l.palette.warning[r?"darker":"lighter"],backgroundColor:l.palette.warning[r?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function j(e){var t=Object.assign({},e);return Object(p.jsx)(q,{children:Object(p.jsx)(r.a,Object(a.a)({rehypePlugins:[n.a,i.a],components:m},t))})}var m={h1:function(e){var t=Object.assign({},e);return Object(p.jsx)(c.a,Object(a.a)({variant:"h1"},t))},h2:function(e){var t=Object.assign({},e);return Object(p.jsx)(c.a,Object(a.a)({variant:"h2"},t))},h3:function(e){var t=Object.assign({},e);return Object(p.jsx)(c.a,Object(a.a)({variant:"h3"},t))},h4:function(e){var t=Object.assign({},e);return Object(p.jsx)(c.a,Object(a.a)({variant:"h4"},t))},h5:function(e){var t=Object.assign({},e);return Object(p.jsx)(c.a,Object(a.a)({variant:"h5"},t))},h6:function(e){var t=Object.assign({},e);return Object(p.jsx)(c.a,Object(a.a)({variant:"h6"},t))},hr:function(e){var t=Object.assign({},e);return Object(p.jsx)(b.a,Object(a.a)({sx:{my:3}},t))},img:function(e){var t=Object.assign({},e);return Object(p.jsx)(u.a,Object(a.a)({alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},t))},a:function(e){var t=Object.assign({},e);return t.href.includes("http")?Object(p.jsx)(d.a,Object(a.a)({target:"_blank",rel:"noopener"},t)):Object(p.jsx)(d.a,Object(a.a)({},t))}}},2807:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return v}));var o=l(3),a=l(1),r=l(12),n=l(269),i=l(1785),s=l(1781),c=l(1805),b=l(1825),d=l(1808),u=l(1002),p=l(407),q=l(47),j=l(671),m=l(1871),h=l(1820),x=l(1867),O=l(0),f=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function v(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),l=t[0],r=t[1],v=Object(a.useState)(""),g=Object(o.a)(v,2),k=g[0],y=g[1];return Object(O.jsx)(j.a,{title:"Components: Editor",children:Object(O.jsxs)(f,{children:[Object(O.jsx)(n.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(O.jsx)(i.a,{children:Object(O.jsx)(h.a,{heading:"Editor",links:[{name:"Components",href:q.d.components},{name:"Editor"}],moreLink:["https://github.com/zenoamaro/react-quill"]})})}),Object(O.jsxs)(i.a,{children:[Object(O.jsxs)(s.a,{container:!0,spacing:3,children:[Object(O.jsx)(s.a,{item:!0,xs:12,md:8,children:Object(O.jsxs)(c.a,{children:[Object(O.jsx)(b.a,{title:"Editor Simple"}),Object(O.jsx)(d.a,{children:Object(O.jsx)(x.a,{simple:!0,id:"simple-editor",value:l,onChange:function(e){return r(e)}})})]})}),Object(O.jsx)(s.a,{item:!0,xs:12,md:4,children:Object(O.jsxs)(u.a,{spacing:3,sx:{height:1},children:[Object(O.jsxs)(c.a,{sx:{height:1,boxShadow:0,bgcolor:"background.neutral"},children:[Object(O.jsx)(b.a,{title:"Preview Plain Text"}),Object(O.jsx)(n.a,{sx:{p:3},children:Object(O.jsx)(m.a,{children:l})})]}),Object(O.jsxs)(c.a,{sx:{height:1,boxShadow:0,bgcolor:"background.neutral"},children:[Object(O.jsx)(b.a,{title:"Preview Html"}),Object(O.jsx)(p.a,{sx:{p:3},children:l})]})]})})]}),Object(O.jsx)(s.a,{container:!0,sx:{mt:3},children:Object(O.jsx)(s.a,{item:!0,xs:12,md:8,children:Object(O.jsxs)(c.a,{children:[Object(O.jsx)(b.a,{title:"Editor Full"}),Object(O.jsx)(d.a,{children:Object(O.jsx)(x.a,{id:"full-editor",value:k,onChange:function(e){return y(e)}})})]})})})]})]})})}}}]);
//# sourceMappingURL=44.8ceca928.chunk.js.map