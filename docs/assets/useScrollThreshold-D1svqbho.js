import{j as a,g as A}from"./index-CCNg2NfS.js";const B="_fab_171pv_1",O={fab:B};function nt({text:t,title:e,iconClass:s,onClick:i}){return a.jsx("button",{"data-testid":"fab-button",title:e,className:O.fab,onClick:i,children:a.jsx("span",{className:s,children:t})})}class Y{constructor(e,s){this.listeners=new Set,this._batching=!1,this._flushing=0,this.subscribe=i=>{var n,o;this.listeners.add(i);const r=(o=(n=this.options)==null?void 0:n.onSubscribe)==null?void 0:o.call(n,i,this);return()=>{this.listeners.delete(i),r==null||r()}},this.setState=i=>{var n,o,r;const l=this.state;this.state=(n=this.options)!=null&&n.updateFn?this.options.updateFn(l)(i):i(l),(r=(o=this.options)==null?void 0:o.onUpdate)==null||r.call(o),this._flush()},this._flush=()=>{if(this._batching)return;const i=++this._flushing;this.listeners.forEach(n=>{this._flushing===i&&n()})},this.batch=i=>{if(this._batching)return i();this._batching=!0,i(),this._batching=!1,this._flush()},this.state=e,this.options=s}}var I={exports:{}},Q={},b={exports:{}},x={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=A;function U(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var F=typeof Object.is=="function"?Object.is:U,G=d.useState,P=d.useEffect,j=d.useLayoutEffect,N=d.useDebugValue;function M(t,e){var s=e(),i=G({inst:{value:s,getSnapshot:e}}),n=i[0].inst,o=i[1];return j(function(){n.value=s,n.getSnapshot=e,w(n)&&o({inst:n})},[t,s,e]),P(function(){return w(n)&&o({inst:n}),t(function(){w(n)&&o({inst:n})})},[t]),N(s),s}function w(t){var e=t.getSnapshot;t=t.value;try{var s=e();return!F(t,s)}catch{return!0}}function D(t,e){return e()}var R=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?D:M;x.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:R;b.exports=x;var W=b.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=A,K=W;function q(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var J=typeof Object.is=="function"?Object.is:q,k=K.useSyncExternalStore,L=_.useRef,H=_.useEffect,T=_.useMemo,V=_.useDebugValue;Q.useSyncExternalStoreWithSelector=function(t,e,s,i,n){var o=L(null);if(o.current===null){var r={hasValue:!1,value:null};o.current=r}else r=o.current;o=T(function(){function f(u){if(!y){if(y=!0,p=u,u=i(u),n!==void 0&&r.hasValue){var g=r.value;if(n(g,u))return m=g}return m=u}if(g=m,J(p,u))return g;var E=i(u);return n!==void 0&&n(g,E)?g:(p=u,m=E)}var y=!1,p,m,C=s===void 0?null:s;return[function(){return f(e())},C===null?void 0:function(){return f(C())}]},[e,s,i,n]);var l=k(t,o[0],o[1]);return H(function(){r.hasValue=!0,r.value=l},[l]),V(l),l};I.exports=Q;var Z=I.exports;function S(t,e=s=>s){return Z.useSyncExternalStoreWithSelector(t.subscribe,()=>t.state,()=>t.state,e,z)}function z(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!1;for(let i=0;i<s.length;i++)if(!Object.prototype.hasOwnProperty.call(e,s[i])||!Object.is(t[s[i]],e[s[i]]))return!1;return!0}const c=new Y({albumId:null,favoritePhotos:[],photoListScrollPosition:0,dashboardScrollPosition:0}),ot=()=>S(c,t=>t.favoritePhotos),rt=()=>S(c,t=>t.albumId),at=()=>S(c,t=>({photoListScrollPosition:t.photoListScrollPosition,dashboardScrollPosition:t.dashboardScrollPosition}));function lt(t){c.setState(e=>({...e,albumId:t}))}function ut(t){c.setState(e=>({...e,photoListScrollPosition:t}))}function ct(t){c.setState(e=>({...e,dashboardScrollPosition:t}))}function gt(t){c.setState(e=>({...e,favoritePhotos:[...e.favoritePhotos,t]}))}function ht(t){c.setState(e=>({...e,favoritePhotos:e.favoritePhotos.filter(s=>s.id!==t)}))}const X={"elements-grid":"_elements-grid_1t3wf_1","elements-grid-shadow":"_elements-grid-shadow_1t3wf_21"},$="_pulse_9phcj_1",v={"image-photo":"_image-photo_9phcj_1","image-photo__img":"_image-photo__img_9phcj_8","image-photo__img--loaded":"_image-photo__img--loaded_9phcj_13","image-photo__loading":"_image-photo__loading_9phcj_17",pulse:$};function tt({src:t,alt:e,fallbackSrc:s}){const[i,n]=A.useState(!0),[o,r]=A.useState(t);function l(){n(!1)}function f(){n(!0),r(s)}return a.jsxs("div",{className:v["image-photo"],children:[a.jsx("img",{"data-testid":"photo-image-content",className:`${v["image-photo__img"]} ${i?"":v["image-photo__img--loaded"]}`,src:o,alt:e,onLoad:l,onError:f,loading:"lazy"}),i?a.jsx("div",{className:v["image-photo__loading"]}):null]})}const h={"image-tile":"_image-tile_16yut_1","image-tile-favorite":"_image-tile-favorite_16yut_12","image-tile__img":"_image-tile__img_16yut_15","image-tile__title":"_image-tile__title_16yut_19","image-tile__identifier":"_image-tile__identifier_16yut_35","image-tile__favorite":"_image-tile__favorite_16yut_41"};function et({photo:t,fallbackImageSrc:e,favorite:s,favoriteIconVisible:i=!1,onClick:n}){function o(){n==null||n(t)}const r=s?"icon-heart":"icon-heart-empty";return a.jsxs("div",{"data-testid":`photo-tile-${t.id}`,className:`${h["image-tile"]} ${s?h["image-tile-favorite"]:""}`,title:t.title,onClick:o,children:[a.jsx("div",{className:h["image-tile__img"],children:a.jsx(tt,{src:t.thumbnailUrl,alt:t.title,fallbackSrc:e})}),a.jsx("div",{className:h["image-tile__title"],children:t.title}),a.jsx("div",{className:`${h["image-tile__identifier"]}`,children:t.id}),i?a.jsx("div",{"data-testid":`photo-tile-${t.id}_fav-icon`,className:`${h["image-tile__favorite"]}`,children:a.jsx("span",{className:r})}):null]})}const it="data:image/gif;base64,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";function At({photos:t,favoritePhotos:e=[],favoriteIconVisible:s=!1,onPhotoTileClick:i,children:n}){return t.length===0?null:a.jsxs("div",{className:X["elements-grid"],children:[t.map(o=>a.jsx(et,{photo:o,fallbackImageSrc:it,favorite:e.some(r=>r.id===o.id),favoriteIconVisible:s,onClick:()=>i==null?void 0:i(o)},o.id)),n]})}function dt(t=100,e){const[s,i]=A.useState(!1);return A.useEffect(()=>{const n=()=>{e==null||e(window.scrollY),i(window.scrollY>t)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[t,e]),s}export{nt as F,At as P,dt as a,at as b,rt as c,gt as d,lt as e,ct as f,ht as r,ut as s,ot as u};