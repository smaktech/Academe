(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[162],{2816:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return d}));var i=c(4),o=c(3),r=c(1),a=c(1822),s=c(0),n={id:"clusters",type:"circle",source:"earthquakes",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#51bbd6",100,"#f1f075",750,"#f28cb1"],"circle-radius":["step",["get","point_count"],20,100,30,750,40]}},u={id:"cluster-count",type:"symbol",source:"earthquakes",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}},l={id:"unclustered-point",type:"circle",source:"earthquakes",filter:["!",["has","point_count"]],paint:{"circle-color":"#11b4da","circle-radius":4,"circle-stroke-width":1,"circle-stroke-color":"#fff"}};function d(e){var t=Object.assign({},e),c=Object(r.useRef)(null),d=Object(r.useState)({latitude:40.67,longitude:-103.59,zoom:3,bearing:0,pitch:0}),b=Object(o.a)(d,2),p=b[0],j=b[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.l,Object(i.a)(Object(i.a)(Object(i.a)({},p),{},{onViewportChange:j,interactiveLayerIds:[n.id],onClick:function(e){var t=e.features[0],o=t&&t.properties.cluster_id;c.current.getMap().getSource("earthquakes").getClusterExpansionZoom(o,(function(e,c){e||j(Object(i.a)(Object(i.a)({},p),{},{longitude:t&&t.geometry.coordinates[0],latitude:t&&t.geometry.coordinates[1],zoom:isNaN(c)?3:c,transitionDuration:500}))}))},ref:c},t),{},{children:Object(s.jsxs)(a.j,{id:"earthquakes",type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:50,children:[Object(s.jsx)(a.d,Object(i.a)({},n)),Object(s.jsx)(a.d,Object(i.a)({},u)),Object(s.jsx)(a.d,Object(i.a)({},l))]})}))})}}}]);
//# sourceMappingURL=162.72b3388f.chunk.js.map