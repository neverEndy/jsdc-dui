import e from"react";import t from"./MenuDialog.js";var n=function(n){var i=n.onClick,o=void 0===i?function(){return null}:i,c=n.onActiveChange,l=void 0===c?function(){return null}:c,r=n.onClose,a=void 0===r?function(){return null}:r,s=n.startIconSrc,u=n.startIconSrcActive,m=n.title,d=n.children,v=n.active,f=void 0!==v&&v;return e.createElement("div",{className:"dui-MenuItemWithDialog"},e.createElement("div",{className:"list-item",onClick:function(){return l(!0),void o()}},s&&e.createElement("img",{className:"icon",alt:"source not found",src:f?u:s}),e.createElement("div",{className:"text"},m)),e.createElement("div",{className:"dialog-container",style:{display:f?"block":"none"}},e.createElement(t,{imgSrc:u,title:m,onClose:function(){l(!1),a()}},d)))};export{n as default};
//# sourceMappingURL=MenuItemWithDialog.js.map
