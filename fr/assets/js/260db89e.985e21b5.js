"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9773],{4508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var r=n(5893),a=n(1151),l=n(4866),s=n(5162);const u={},o="Test 1",i={permalink:"/documentacion/index.html/fr/blog/ded",source:"@site/blog/ded.mdx",title:"ded",description:"This is an apple \ud83c\udf4e",date:"2024-02-28T23:16:34.000Z",formattedDate:"28 f\xe9vrier 2024",tags:[],readingTime:.305,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"prueba 2",permalink:"/documentacion/index.html/fr/blog/2024/03/10/"}},c={authorsImageUrls:[]},d=[];function p(e){const t={li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"apple",label:"Apple",default:!0,children:(0,r.jsx)(t.p,{children:"This is an apple \ud83c\udf4e"})}),(0,r.jsx)(s.Z,{value:"orange",label:"Orange",children:(0,r.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})}),(0,r.jsx)(s.Z,{value:"green",label:"gren",children:(0,r.jsx)(t.p,{children:"This is an greenss \ud83c\udf4a"})}),(0,r.jsxs)(s.Z,{value:"banana",label:"Banana",children:[(0,r.jsx)(t.p,{children:"This is a banana \ud83c\udf4c"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"asdas"}),"\n",(0,r.jsx)(t.li,{children:"dasdas"}),"\n",(0,r.jsx)(t.li,{children:"dasdasdsa"}),"\n"]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Prueba de componentes"}),"\n",(0,r.jsx)(t.p,{children:"Testing 1"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var l=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(512),l=n(2466),s=n(6550),u=n(469),o=n(1980),i=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,d]=b({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=i??f;return h({value:e,tabValues:l})?e:null})();(0,u.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=u[n].value;a!==r&&(i(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>s});var r=n(7294);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);