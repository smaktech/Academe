(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[30],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(4),a=n(25),o=n(136),i=n(27),c=n(407),s=n(1824),l=n(269),u=n(1681),d=n(0),p=["links","activeLast"];function b(e){var t,n=e.links,i=e.activeLast,u=void 0!==i&&i,b=Object(a.a)(e,p),j=null===(t=Object(o.last)(n))||void 0===t?void 0:t.name,h=n.map((function(e){return Object(d.jsx)(f,{link:e},e.name)})),g=n.map((function(e){return Object(d.jsx)("div",{children:e.name!==j?Object(d.jsx)(f,{link:e}):Object(d.jsx)(c.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:j})},e.name)}));return Object(d.jsx)(s.a,Object(r.a)(Object(r.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:u?h:g}))}function f(e){var t=e.link,n=t.href,r=t.name,a=t.icon;return Object(d.jsxs)(u.a,{variant:"body2",component:i.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),r]},r)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(4),a=n(25),o=n(136),i=n(269),c=n(407),s=n(1681),l=n(1819),u=n(0),d=["links","action","heading","moreLink","sx"];function p(e){var t=e.links,n=e.action,p=e.heading,b=e.moreLink,f=void 0===b?[]:b,j=e.sx,h=Object(a.a)(e,d);return Object(u.jsxs)(i.a,{sx:Object(r.a)({mb:5},j),children:[Object(u.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(u.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:p}),Object(u.jsx)(l.a,Object(r.a)({links:t},h))]}),n&&Object(u.jsx)(i.a,{sx:{flexShrink:0},children:n})]}),Object(u.jsx)(i.a,{sx:{mt:2},children:Object(o.isString)(f)?Object(u.jsx)(s.a,{href:f,target:"_blank",rel:"noopener",variant:"body2",children:f}):f.map((function(e){return Object(u.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,n){"use strict";var r=n(16),a=n(3),o=n(10),i=n(2),c=n(13),s=n(1),l=(n(99),n(7),n(5)),u=n(300),d=n(12),p=n(18),b=n(407),f=n(98),j=n(59),h=n(0),g=Object(j.a)(Object(h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=n(1675),x=Object(d.a)(m.a,{skipSx:!0})((function(e){var t=e.theme;return Object(i.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(i.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(i.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(f.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(f.c)(t.palette.grey[600],.12)})})})),O=Object(d.a)(g)({width:24,height:16});var v=function(e){var t=e;return Object(h.jsx)("li",{children:Object(h.jsx)(x,Object(i.a)({focusRipple:!0},e,{ownerState:t,children:Object(h.jsx)(O,{ownerState:t})}))})},y=n(179),k=n(192);function w(e){return Object(y.a)("MuiBreadcrumbs",e)}var S=Object(k.a)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],_=Object(d.a)(b.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(o.a)({},"& .".concat(S.li),t.li),t.root]}})({}),I=Object(d.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),B=Object(d.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,t,n,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,Object(h.jsx)(B,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):a.push(o),a}),[])}var M=s.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiBreadcrumbs"}),o=n.children,d=n.className,b=n.component,f=void 0===b?"nav":b,j=n.expandText,g=void 0===j?"Show path":j,m=n.itemsAfterCollapse,x=void 0===m?1:m,O=n.itemsBeforeCollapse,y=void 0===O?1:O,k=n.maxItems,S=void 0===k?8:k,B=n.separator,M=void 0===B?"/":B,L=Object(c.a)(n,C),N=s.useState(!1),z=Object(a.a)(N,2),A=z[0],P=z[1],T=Object(i.a)({},n,{component:f,expanded:A,expandText:g,itemsAfterCollapse:x,itemsBeforeCollapse:y,maxItems:S,separator:M}),q=function(e){var t=e.classes;return Object(u.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(T),G=s.useRef(null),W=s.Children.toArray(o).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return Object(h.jsx)("li",{className:q.li,children:e},"child-".concat(t))}));return Object(h.jsx)(_,Object(i.a)({ref:t,component:f,color:"text.secondary",className:Object(l.a)(q.root,d),ownerState:T},L,{children:Object(h.jsx)(I,{className:q.ol,ref:G,ownerState:T,children:R(A||S&&W.length<=S?W:function(e){return y+x>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[Object(h.jsx)(v,{"aria-label":g,onClick:function(){P(!0);var e=G.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-x,e.length)))}(W),q.separator,M,T)})}))}));t.a=M},1887:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(25),a=n(4),o=n(1),i=n(1967),c=n(68),s=n(98),l=n(1649),u=n(407),d=n(0),p=["images","photoIndex","setPhotoIndex","isOpen"];function b(){var e=Object(c.a)(),t="rtl"===e.direction,n=e.palette.grey[600].replace("#",""),r=function(e){return"url(https://api.iconify.design/carbon/".concat(e,".svg?color=%23").concat(n,"&width=").concat(32,"&height=").concat(32,")")},o=function(t){return{opacity:1,alignItems:"center",display:"inline-flex",justifyContent:"center",backgroundImage:"unset",backgroundColor:"transparent",transition:e.transitions.create("opacity"),"&:before":{display:"block",width:32,height:32,content:r(t)},"&:hover":{opacity:.72}}};return Object(d.jsx)(l.a,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backgroundColor:Object(s.a)(e.palette.grey[900],.96)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:40,height:40,justifyContent:"center",marginLeft:e.spacing(2)}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":o("zoom-in"),"&.ril__zoomOutButton":o("zoom-out"),"&.ril__closeButton":o("close")},"& .ril__navButtons":{padding:e.spacing(3),"&.ril__navButtonPrev":Object(a.a)({right:"auto",left:e.spacing(2)},o(t?"arrow-right":"arrow-left")),"&.ril__navButtonNext":Object(a.a)({left:"auto",right:e.spacing(2)},o(t?"arrow-left":"arrow-right"))}}}})}function f(e){var t=e.images,n=e.photoIndex,c=e.setPhotoIndex,s=e.isOpen,l=Object(r.a)(e,p);Object(o.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var f=[Object(d.jsx)(u.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),s&&Object(d.jsx)(i.a,Object(a.a)({animationDuration:160,nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onMovePrevRequest:function(){return c((n+t.length-1)%t.length)},onMoveNextRequest:function(){return c((n+1)%t.length)},toolbarButtons:f,reactModalStyle:{overlay:{zIndex:9999}}},l))]})}},2670:function(e,t,n){var r=n(2671),a=n(721),o=n(2672),i=Math.max;e.exports=function(e,t,n){var c=null==e?0:e.length;if(!c)return-1;var s=null==n?0:o(n);return s<0&&(s=i(c+s,0)),r(e,a(t,3),s)}},2671:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o;return-1}},2672:function(e,t,n){var r=n(2673);e.exports=function(e){var t=r(e),n=t%1;return t===t?n?t-n:t:0}},2673:function(e,t,n){var r=n(2674),a=1/0;e.exports=function(e){return e?(e=r(e))===a||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},2674:function(e,t,n){var r=n(2675),a=n(547),o=n(562),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}},2675:function(e,t,n){var r=n(2676),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},2676:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},2810:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n(3),a=n(16),o=n(2670),i=n.n(o),c=n(1),s=n(12),l=n(269),u=n(1785),d=n(1805),p=n(47),b=n(350),f=n(671),j=n(349),h=n(1887),g=n(1820),m=n(0),x=Object(s.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),O=Object(a.a)(Array(8)).map((function(e,t){return b.T.image.feed(t+1)}));function v(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(0),s=Object(r.a)(o,2),b=s[0],v=s[1];return Object(m.jsxs)(f.a,{title:"Components: Lightbox",children:[Object(m.jsxs)(x,{children:[Object(m.jsx)(l.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(u.a,{children:Object(m.jsx)(g.a,{heading:"Lightbox",links:[{name:"Components",href:p.d.components},{name:"Lightbox"}],moreLink:"https://www.npmjs.com/package/react-image-lightbox"})})}),Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{sx:{p:3,display:"grid",gap:1.5,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"}},children:O.map((function(e){return Object(m.jsx)(j.a,{src:e,ratio:"1/1",onClick:function(){return function(e){var t=i()(O,(function(t){return t===e}));a(!0),v(t)}(e)},sx:{borderRadius:1,cursor:"pointer"}},e)}))})})]}),Object(m.jsx)(h.a,{images:O,mainSrc:O[b],photoIndex:b,setPhotoIndex:v,isOpen:n,onCloseRequest:function(){return a(!1)}})]})}}}]);
//# sourceMappingURL=30.b461096a.chunk.js.map