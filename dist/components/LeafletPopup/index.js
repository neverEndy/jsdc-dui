import{__awaiter as t,__generator as n}from"../../node_modules/tslib/tslib.es6.js";import e from"./SceneCard.js";import i from"./Table.js";function o(e,i,o){var r=this,c=o.Component,u=o.props,l=o.onLayerClick;e.bindPopup(i(c(u))),l&&e.on("click",(function(){return t(r,void 0,void 0,(function(){return n(this,(function(t){return l(),[2]}))}))}))}var r=function(i,r,c){var u=c.dgw,l=c.title,s=r(e({}));i.bindPopup(s),i.on("click",(function(){return t(void 0,void 0,void 0,(function(){var t,c;return n(this,(function(n){switch(n.label){case 0:return[4,u.getSceneDetailArticleByTitle(l)];case 1:return t=n.sent(),c={title:t.title,subtitle:t.subtitle,imgSrc:t.imgSrc,mainTextContent:t.content,credit:t.ref},o(i,r,{Component:e,props:c}),[2]}}))}))}))},c=function(t,n,e){t.bindPopup(n(i(e)))},u={SceneCard:e,Table:i};export{o as bindPopupWithComponent,r as bindPopupWithSceneCard,c as bindPopupWithTable,u as default};
//# sourceMappingURL=index.js.map
