import{__spreadArray as e,__assign as t}from"../../node_modules/tslib/tslib.es6.js";import n from"../LeftMenuBar/Credit/CreditMenuItem.js";import r from"../LeftMenuBar/Layer/LayerMenuItem.js";import i from"../LeftMenuBar/Legend/LegendMenuItem.js";import o from"../LeftMenuBar/MenuList/index.js";import a from"../LeftMenuBar/Weather/WeatherMenuItem.js";import m from"../MapViewContainer/index.js";import c,{useContext as u,useMemo as l}from"react";import{DuiContext as d}from"../Context/index.js";import{JSDCContext as s}from"../../JSDC/Context/index.js";import{latLng as f}from"leaflet";import g from"../LeftMenuBar/Scene/SceneMenuItem.js";import h from"../LeftMenuBar/AboutWalk/AboutWalkMenuItem.js";import{DguidewalksContext as p}from"../../JSDC/Dguidewalks/Context/index.js";import{mapKeys as M,pick as v,omit as I}from"lodash";var C=function(C){var S=C.mainMenuChildren,b=C.endMenuChildren,w=u(p).dgw.layerNameOrder,L=u(d),j=u(s),y=j.Jsdc,B=j.layerInfos,E=l((function(){var t=M(B,(function(e){return e.description.name})),n=Object.values(v(t,w)),r=Object.values(I(t,w));return e(e([],n,!0),r,!0)}),[B,w]);return c.createElement(m,{Jsdc:y,headerImgSrc:L.headerMBImgSrc,menuChildren:c.createElement(o,{title:L.sidebarTitle,subtitle:L.sidebarSubtitle,headerImg:L.headerDImgSrc,headerMBImg:L.headerMBImgSrc,endChildren:c.createElement(c.Fragment,null,c.createElement(h,t({imgSrc:L.aboutWalkImgSrc,title:L.sidebarTitle,subtitle:L.sidebarSubtitle,content:L.aboutWalkContent,active:"路線介紹"===L.activeMenuId},L.menuSwitcherAction("路線介紹"))),c.createElement(n,t({active:"關於圖台"===L.activeMenuId},L.menuSwitcherAction("關於圖台"),{description:L.credit})),b)},c.createElement(c.Fragment,null,c.createElement(r,t({layerInfos:E.map((function(e){return{id:e.id,type:e.description.type,name:e.description.name,show:e.show}})),onToggleShow:function(e,t){return y.Controller.get("Layer").getById(e).show=t},onOpacityChange:function(e,t){return y.Controller.get("Layer").getById(e).setOpacity(Number(1-t/100))},active:"地圖圖層"===L.activeMenuId},L.menuSwitcherAction("地圖圖層"))),c.createElement(g,t({onTarget:L.onSceneTargetClick,active:"景點介紹"===L.activeMenuId},L.menuSwitcherAction("景點介紹"))),L.weatherConfig.disabled||c.createElement(a,t({active:"氣象預測"===L.activeMenuId},L.menuSwitcherAction("氣象預測"),{locations:L.weatherConfig.locations,token:L.weatherConfig.token,onSelectLocation:function(e){var t,n=e[0],r=e[1];return null===(t=y.viewer)||void 0===t?void 0:t.flyTo(f(n,r),13)}})),c.createElement(i,t({active:"圖例說明"===L.activeMenuId},L.menuSwitcherAction("圖例說明"),{activeLegends:L.legendConfig.activeLegends})),S))})};export{C as default};
//# sourceMappingURL=index.js.map
