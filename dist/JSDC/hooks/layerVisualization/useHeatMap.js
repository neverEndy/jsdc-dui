import{__awaiter as r,__generator as e}from"../../../node_modules/tslib/tslib.es6.js";import{useRef as t,useState as a,useEffect as n}from"react";import{LatLng as o}from"leaflet";import i from"../../Layer/JSDCMarkersLayer.js";import u from"../../Layer/JSDCGeoJSONLayer.js";var c=require("leaflet-heatmap"),s=function(r){return r.instance?r instanceof i?r.getLatLngs():r instanceof u?r.groupFeaturesByGeomType().points.map((function(r){var e=r.geometry.coordinates,t=e[0],a=e[1];return new o(a,t)})):[]:[]},f=function(o,i){void 0===i&&(i={});var u=i.layers,f=void 0===u?[]:u,d=i.config,m=t(new c(void 0===d?{scaleRadius:!1,radius:50,useLocalExtrema:!0,maxOpacity:.5}:d)),l=a(!0),v=l[0],p=l[1],y=function(){return r(void 0,void 0,void 0,(function(){var r;return e(this,(function(e){switch(e.label){case 0:return[4,o];case 1:return(r=e.sent()).hasLayer(m.current)||(r.addLayer(m.current),p(!0)),[2]}}))}))},h=function(){return r(void 0,void 0,void 0,(function(){var r;return e(this,(function(e){switch(e.label){case 0:return[4,o];case 1:return(r=e.sent()).hasLayer(m.current)?(r.removeLayer(m.current),p(!1),[2]):[2]}}))}))};return n((function(){!function(){r(this,void 0,void 0,(function(){var r,t;return e(this,(function(e){switch(e.label){case 0:return[4,o];case 1:return r=e.sent(),t=f.map((function(r){return s(r)})).flat(),m.current.setData({max:100,data:t}),r.addLayer(m.current),[2]}}))}))}()}),[]),{addLayer:function(r){var e=s(r);m.current.addData(e)},hideHeatMap:h,showHeatMap:y,toggleShowHeatMap:function(){if(v)return h();y()},show:v,heatLayer:m.current}};export{f as default};
//# sourceMappingURL=useHeatMap.js.map
