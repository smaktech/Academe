(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[92],{1819:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var c=i(4),n=i(25),a=i(136),s=i(27),r=i(407),j=i(1824),l=i(269),d=i(1681),b=i(0),o=["links","activeLast"];function h(e){var t,i=e.links,s=e.activeLast,d=void 0!==s&&s,h=Object(n.a)(e,o),O=null===(t=Object(a.last)(i))||void 0===t?void 0:t.name,u=i.map((function(e){return Object(b.jsx)(x,{link:e},e.name)})),m=i.map((function(e){return Object(b.jsx)("div",{children:e.name!==O?Object(b.jsx)(x,{link:e}):Object(b.jsx)(r.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:O})},e.name)}));return Object(b.jsx)(j.a,Object(c.a)(Object(c.a)({separator:Object(b.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},h),{},{children:d?u:m}))}function x(e){var t=e.link,i=t.href,c=t.name,n=t.icon;return Object(b.jsxs)(d.a,{variant:"body2",component:s.b,to:i||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(b.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),c]},c)}},1820:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var c=i(4),n=i(25),a=i(136),s=i(269),r=i(407),j=i(1681),l=i(1819),d=i(0),b=["links","action","heading","moreLink","sx"];function o(e){var t=e.links,i=e.action,o=e.heading,h=e.moreLink,x=void 0===h?[]:h,O=e.sx,u=Object(n.a)(e,b);return Object(d.jsxs)(s.a,{sx:Object(c.a)({mb:5},O),children:[Object(d.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(d.jsx)(r.a,{variant:"h4",gutterBottom:!0,children:o}),Object(d.jsx)(l.a,Object(c.a)({links:t},u))]}),i&&Object(d.jsx)(s.a,{sx:{flexShrink:0},children:i})]}),Object(d.jsx)(s.a,{sx:{mt:2},children:Object(a.isString)(x)?Object(d.jsx)(j.a,{href:x,target:"_blank",rel:"noopener",variant:"body2",children:x}):x.map((function(e){return Object(d.jsx)(j.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return b}));var c=i(4),n=i(98),a=i(1009),s=i(1825),r=i(269),j=i(407),l=i(0);function d(e){var t=e.title,i=e.sx,j=e.children;return Object(l.jsxs)(a.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(n.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(s.a,{title:t}),Object(l.jsx)(r.a,{sx:Object(c.a)({p:5,minHeight:180},i),children:j})]})}function b(e){var t=e.title;return Object(l.jsx)(j.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2779:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return R}));var c=i(16),n=i(3),a=i(4),s=i(1),r=i(12),j=i(1009),l=i(1741),d=i(269),b=i(1785),o=i(1788),h=i(1743),x=i(1742),O=i(1653),u=i(1789),m=i(1684),p=i(1797),f=i(1010),g=i(1774),v=i(1787),y=i(1682),w=i(1884),k=i(1843),S=i(47),C=i(671),L=i(41),I=i(1820),J=i(1823),P=i(0),B=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),W=Object(r.a)(j.a)((function(e){var t=e.theme;return{width:"100%",border:"solid 1px ".concat(t.palette.divider)}}));function D(e){return Object(P.jsx)(l.a,Object(a.a)({component:"a"},e))}function R(){var e=Object(s.useState)(!0),t=Object(n.a)(e,2),i=t[0],a=t[1],r=Object(s.useState)(1),j=Object(n.a)(r,2),R=j[0],T=j[1],F=Object(s.useState)([0]),H=Object(n.a)(F,2),N=H[0],_=H[1],E=Object(s.useState)(["wifi"]),G=Object(n.a)(E,2),V=G[0],q=G[1],z=function(e,t){T(t)},A=function(e){return function(){var t=N.indexOf(e),i=Object(c.a)(N);-1===t?i.push(e):i.splice(t,1),_(i)}},K=function(e){return function(){var t=V.indexOf(e),i=Object(c.a)(V);-1===t?i.push(e):i.splice(t,1),q(i)}};return Object(P.jsx)(C.a,{title:"Components: Lists",children:Object(P.jsxs)(B,{children:[Object(P.jsx)(d.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(P.jsx)(b.a,{children:Object(P.jsx)(I.a,{heading:"Lists",links:[{name:"Components",href:S.d.components},{name:"Lists"}],moreLink:"https://mui.com/components/lists"})})}),Object(P.jsx)(b.a,{children:Object(P.jsxs)(k.a,{columns:{xs:1,md:2},spacing:3,children:[Object(P.jsx)(J.a,{title:"Simple",children:Object(P.jsxs)(W,{children:[Object(P.jsxs)(o.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(P.jsxs)(l.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:baseline-inbox",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Inbox"})]}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:round-drafts",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Drafts"})]})]}),Object(P.jsx)(O.a,{}),Object(P.jsxs)(o.a,{component:"nav","aria-label":"secondary mailbox folders",children:[Object(P.jsx)(l.a,{children:Object(P.jsx)(x.a,{primary:"Trash"})}),Object(P.jsx)(D,{href:"#simple-list",children:Object(P.jsx)(x.a,{primary:"Spam"})})]})]})}),Object(P.jsx)(J.a,{title:"Nested",children:Object(P.jsx)(W,{children:Object(P.jsxs)(o.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(P.jsx)(u.a,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[Object(P.jsxs)(l.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:round-send",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Sent mail"})]}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:round-drafts",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Drafts"})]}),Object(P.jsxs)(l.a,{onClick:function(){a(!i)},children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:baseline-inbox",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Inbox"}),i?Object(P.jsx)(L.a,{icon:"ic:round-expand-less",width:24,height:24}):Object(P.jsx)(L.a,{icon:"ic:round-expand-more",width:24,height:24})]}),Object(P.jsx)(m.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(P.jsx)(o.a,{component:"div",disablePadding:!0,children:Object(P.jsxs)(l.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:round-star-border",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Starred"})]})})})]})})}),Object(P.jsx)(J.a,{title:"Folder",children:Object(P.jsx)(W,{children:Object(P.jsxs)(o.a,{children:[Object(P.jsxs)(l.a,{children:[Object(P.jsx)(p.a,{children:Object(P.jsx)(f.a,{children:Object(P.jsx)(L.a,{icon:"ic:baseline-image",width:24,height:24})})}),Object(P.jsx)(x.a,{primary:"Photos",secondary:"Jan 9, 2014"})]}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(p.a,{children:Object(P.jsx)(f.a,{children:Object(P.jsx)(L.a,{icon:"ic:baseline-work",width:24,height:24})})}),Object(P.jsx)(x.a,{primary:"Work",secondary:"Jan 7, 2014"})]}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(p.a,{children:Object(P.jsx)(f.a,{children:Object(P.jsx)(L.a,{icon:"ic:round-beach-access",width:24,height:24})})}),Object(P.jsx)(x.a,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})}),Object(P.jsx)(J.a,{title:"Selected",children:Object(P.jsxs)(W,{children:[Object(P.jsxs)(o.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(P.jsxs)(l.a,{selected:0===R,onClick:function(e){return z(0,0)},children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:baseline-inbox",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Inbox"})]}),Object(P.jsxs)(l.a,{selected:1===R,onClick:function(e){return z(0,1)},children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:round-drafts",width:24,height:24})}),Object(P.jsx)(x.a,{primary:"Drafts"})]})]}),Object(P.jsx)(O.a,{}),Object(P.jsxs)(o.a,{component:"nav","aria-label":"secondary mailbox folder",children:[Object(P.jsx)(l.a,{selected:2===R,onClick:function(e){return z(0,2)},children:Object(P.jsx)(x.a,{primary:"Trash"})}),Object(P.jsx)(l.a,{selected:3===R,onClick:function(e){return z(0,3)},children:Object(P.jsx)(x.a,{primary:"Spam"})})]})]})}),Object(P.jsx)(J.a,{title:"Controls",children:Object(P.jsx)(W,{children:Object(P.jsx)(o.a,{children:[0,1,2,3].map((function(e){var t="checkbox-list-label-".concat(e);return Object(P.jsxs)(l.a,{role:void 0,dense:!0,onClick:A(e),children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(g.a,{edge:"start",checked:-1!==N.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(P.jsx)(x.a,{id:t,primary:"Line item ".concat(e+1)}),Object(P.jsx)(v.a,{children:Object(P.jsx)(y.a,{edge:"end",children:Object(P.jsx)(L.a,{icon:"ic:round-mode-comment",width:24,height:24})})})]},e)}))})})}),Object(P.jsx)(J.a,{title:"Switch",children:Object(P.jsx)(W,{children:Object(P.jsxs)(o.a,{subheader:Object(P.jsx)(u.a,{children:"Settings"}),children:[Object(P.jsxs)(l.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:baseline-wifi",width:24,height:24})}),Object(P.jsx)(x.a,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),Object(P.jsx)(v.a,{children:Object(P.jsx)(w.a,{edge:"end",onChange:K("wifi"),checked:-1!==V.indexOf("wifi"),inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(L.a,{icon:"ic:baseline-bluetooth",width:24,height:24})}),Object(P.jsx)(x.a,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),Object(P.jsx)(v.a,{children:Object(P.jsx)(w.a,{edge:"end",onChange:K("bluetooth"),checked:-1!==V.indexOf("bluetooth"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]})})})]})})]})})}}}]);
//# sourceMappingURL=92.b26fe69f.chunk.js.map