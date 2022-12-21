"use strict";(self.webpackChunkctix_docs=self.webpackChunkctix_docs||[]).push([[822],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),f=n,y=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return t?o.createElement(y,a(a({ref:r},p),{},{components:t})):o.createElement(y,a({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[l]="string"==typeof e?e:n,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5403:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var o=t(7462),n=(t(7294),t(3905));const i={lang:"en-US",title:"useRootDir workflow",description:"useRootDir and output directory option workflow"},a=void 0,u={unversionedId:"extra/use-root-dir",id:"extra/use-root-dir",title:"useRootDir workflow",description:"useRootDir and output directory option workflow",source:"@site/docs/extra/use-root-dir.md",sourceDirName:"extra",slug:"/extra/use-root-dir",permalink:"/ctix/extra/use-root-dir",draft:!1,tags:[],version:"current",frontMatter:{lang:"en-US",title:"useRootDir workflow",description:"useRootDir and output directory option workflow"},sidebar:"tutorialSidebar",previous:{title:"Migration Guide",permalink:"/ctix/extra/migration-guilde"},next:{title:"Exports",permalink:"/ctix/api/"}},c={},s=[],p={toc:s};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"useRootDir and output directory option workflow"),(0,n.kt)("mermaid",{value:"graph TD\n\nA01(Start)\nC01[tsconfig.rootDir]\nC02[tsconfig.rootDirs]\n\nA01--\x3eA02{use<br />rootdir config?}\nA02--\x3e|yes|A03{use<br /> rootDir or rootDirs}\nA03--\x3e|use rootDir|C01\nC01--\x3eA04{output directory passed?}\nA04--\x3e|yes|A05{output directory<br /> dirname under rootDir?}\nA04--\x3e|no|Z01(rootDir)\nA05--\x3e|yes|Z02(output directory)\nA05--\x3e|no|Z01\n\nA03--\x3e|use rootDirs|C02\nC02--\x3eA06[Extract<br /> first directory<br /> in rootDirs]\nA06--\x3eA07{output directory passed?}\nA07--\x3e|yes|A08{output directory<br /> dirname under rootDirs?}\nA08--\x3e|yes|Z03(output directory)\nA08--\x3e|no|Z04(rootDirs)\nA07--\x3e|no|Z04\n\nA02--\x3e|no|A09{output directory passed?}\nA09--\x3e|yes|D01(output directory)\nA09--\x3e|no|B01(cli working directory)"}))}l.isMDXComponent=!0}}]);