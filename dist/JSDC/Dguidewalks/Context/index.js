import{__awaiter as e,__generator as r}from"../../../node_modules/tslib/tslib.es6.js";import i,{createContext as n,useState as o,useEffect as t}from"react";import a from"../index.js";import s from"../ConfigProvider.js";var d=n({}),l=function(n){var l=n.children,c=n.Jsdc,u=n.layersHiddenFromUI,f=n.layersShowOnMapByDefault,m=n.baseApiUrl,v=o(new a({config:new s({eventId:c.id,baseApiUrl:m})}))[0];t((function(){e(void 0,void 0,void 0,(function(){var e;return r(this,(function(r){switch(r.label){case 0:return e=c.Controller.get("Layer"),[4,v.loadGisData()];case 1:return r.sent().forEach((function(r){return e.add(r,{hidden:u.includes(r.description.name)})})),e.showByNames(f,!0),v.gisDataLoadEvent.raise(),[2]}}))}))}),[]);var p={dgw:v};return i.createElement(d.Provider,{value:p},l)};export{d as DguidewalksContext,l as DguidewalksProvider};
//# sourceMappingURL=index.js.map
