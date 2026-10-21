import{n as e}from"./rolldown-runtime-B0Z9INg1.js";import{$ as t,$t as n,A as r,B as i,D as a,E as o,Ft as s,It as c,J as l,Jt as u,L as d,Lt as f,M as p,Mt as m,N as h,Nt as g,O as _,P as v,Pt as y,Q as ee,R as b,S as te,T as ne,Tt as re,V as ie,X as ae,Y as oe,Yt as se,Z as ce,Zt as x,_ as le,an as ue,bt as de,cn as fe,d as pe,dn as S,dt as me,en as he,et as ge,f as _e,i as ve,in as ye,j as be,k as xe,mn as C,nt as Se,pn as Ce,qt as we,r as Te,rt as Ee,sn as w,tt as De,ut as Oe,v as ke,wt as Ae,x as je,xt as Me,yt as Ne,z as Pe}from"./blueprint~index-CMrc1Fde.js";import{g as Fe,h as Ie,m as Le,p as Re}from"./vendor~index-BQ4ZAKoH.js";import{A as ze,B as Be,C as Ve,D as He,F as Ue,G as T,H as We,I as Ge,K as E,L as Ke,M as qe,N as Je,P as Ye,R as Xe,S as Ze,U as Qe,V as $e,W as et,_ as tt,a as nt,b as rt,f as it,g as at,h as ot,o as st,p as ct,s as lt,v as ut,x as dt,y as ft,z as pt}from"./vendor~index-CkTFsRZE.js";import{n as mt,t as ht}from"./vendor~index-GjBxvDEl.js";import{B as D,N as gt,P as _t}from"./vendor~index-DNWUZFw4.js";import{_ as vt,b as yt,g as O,v as k,y as bt}from"./vendor~index-BuJe540y.js";import{a as xt,tt as St}from"./vendor~index-DE_oMF6Y.js";import{C as Ct,E as wt,O as Tt,S as Et,T as Dt,w as Ot}from"./d3~index-hlQXLL0V.js";import{d as kt,t as At}from"./vendor~index-PyxjuWNX.js";import{d as jt,g as Mt,m as Nt,p as Pt,r as Ft,s as It,u as Lt}from"./vendor~index-ll4sOriB.js";function Rt(){return(Rt=e((()=>{})))()}function zt(e,t){let n=(0,Bt.use)(Vt);if(!n)throw Error(`AccordionContext was not found`);let[r,i]=n;return(0,Bt.useEffect)(()=>(i.register(e,t),()=>i.unregister(e)),[e,i,t]),(0,Bt.useMemo)(()=>({unmountChildren:r.unmountChildren,controls:{closeOthers:()=>i.closeAllExcept(e),toggle:()=>i.toggle(e),open:()=>i.change(e,!0),close:()=>i.change(e,!1)}}),[e,i,r.unmountChildren])}var Bt,Vt;function Ht(){return(Ht=e((()=>{Bt=C(),Vt=(0,Bt.createContext)(null)})))()}function Ut(e){return(0,A.jsx)(Kt,{children:e.children})}var A,Wt,Gt,Kt,qt;function Jt(){return(Jt=e((()=>{A=S(),s(),T(),Qe(),Wt=C(),Ht(),Gt=E.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-color: #d5d5d5 currentcolor currentcolor;
  border-style: solid none none;
  color: #2d2d2d;
  font-weight: bold;
  text-decoration: none;
  text-shadow: white 0 1px 0;
  background: white
    linear-gradient(${y.LIGHT_GRAY5} 5%, ${y.LIGHT_GRAY3} 100%) repeat
    scroll 0 0;
  width: 100%;
  user-select: none;
  justify-content: space-between;
  padding-left: 12px;

  :hover {
    background: white
      linear-gradient(${y.LIGHT_GRAY4} 5%, ${y.LIGHT_GRAY2} 100%)
      repeat scroll 0 0;
  }
`,Kt=E.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`,Ut.Item=function(e){let{id:t,title:n,children:r,defaultOpen:i=!1,open:a,renderToolbar:o,onOpenChange:s}=e,[c,l]=et({prop:a,defaultProp:i,onChange:s}),{controls:u,unmountChildren:d}=zt(t,l),f=(0,Wt.useRef)(null),p=e.unmountChildren===void 0?d:e.unmountChildren,m=(0,Wt.useCallback)(e=>{e.shiftKey?u.closeOthers():u.toggle()},[u]);return(0,A.jsxs)(`div`,{style:{flex:c?`1 1 1px`:`none`,display:`flex`,flexDirection:`column`,isolation:`isolate`},children:[(0,A.jsxs)(Gt,{onClick:m,role:`button`,ref:f,children:[(0,A.jsx)(`div`,{style:{padding:`5px 0px`},children:n}),(0,A.jsx)(qt,{onClick:e=>e.stopPropagation(),children:o?.({id:t,isOpen:c??!1,controls:u})})]}),!c&&p?null:(0,A.jsx)(`div`,{style:{display:c?`flex`:`none`,flex:c?`1 1 1px`:`none`,backgroundColor:`white`,maxHeight:`100%`,overflow:`hidden`},children:(0,A.jsx)(`div`,{style:{height:`100%`,width:`100%`,overflow:`auto`,display:`flex`,flexDirection:`column`},children:r})})]})},qt=E.div`
  display: flex;
`})))()}function Yt(){return new Map}function Xt(e){let{unmountChildren:t=!1,children:n}=e,r=(0,Qt.useRef)(Yt()),i=(0,Qt.useMemo)(()=>({change:(e,t)=>{D(r.current);let n=r.current.get(e);n&&n.setIsOpen(t)},closeAllExcept:e=>{D(r.current);for(let[t,n]of r.current)t===e?n.setIsOpen(!0):n.setIsOpen(!1)},toggle:e=>{D(r.current);let t=r.current.get(e);t&&t.setIsOpen(e=>!e)},unregister:e=>{D(r.current),r.current.delete(e)},register:(e,t)=>{if(D(r.current),r.current.get(e)!==void 0)throw Error(`Accordion item with title "${e}" already exists. Using non-unique titles can lead to unexpected behavior.`);r.current.set(e,{setIsOpen:t})}}),[r]),a=(0,Qt.useMemo)(()=>[{unmountChildren:t},i],[t,i]);return(0,Zt.jsx)(Vt,{value:a,children:n})}var Zt,Qt;function $t(){return($t=e((()=>{Zt=S(),Qt=C(),Ht()})))()}function en(){let e=(0,tn.use)(Vt);if(!e)throw Error(`AccordionContext was not found`);let[,t]=e;return(0,tn.useMemo)(()=>({open:e=>t.change(e,!0),close:e=>t.change(e,!1),toggle:e=>t.toggle(e),closeAllExcept:e=>t.closeAllExcept(e)}),[t])}var tn;function nn(){return(nn=e((()=>{tn=C(),Ht()})))()}function rn(){return(rn=e((()=>{Jt(),$t(),nn()})))()}function an(e){return!ln.has(e)}function j(e){let{tooltipProps:t=fn,children:n,tag:r,tagProps:a,...o}=e,{fill:s,content:c=``,disabled:l=!t.content,...u}=t,d=o.disabled?un:dn;return(0,on.jsx)(i,{fill:s||o.fill,disabled:l,content:c,...u,renderTarget:({isOpen:e,...t})=>(0,on.jsxs)(d,{...t,...o,isIconButton:!n&&!o.text,isTagButton:!!r,children:[!!r&&(0,on.jsx)(sn,{round:!0,intent:`success`,...a,children:r}),n]})})}var on,sn,cn,ln,un,dn,fn;function pn(){return(pn=e((()=>{on=S(),Me(),w(),_e(),ie(),T(),sn=E(pe)`
  position: absolute;
  top: 0;
  left: 0;
  cursor: default;
  font-size: 0.875em;
  padding: 2px !important;
  min-height: 15px;
  min-width: 15px;
  line-height: 1em;
  text-align: center;
  z-index: 20;
`,cn=({isIconButton:e,isTagButton:t})=>`
  line-height: 1em;
  position: relative;
  max-width: ${e?`30px`:`none`};

  & .${x} {
    ${e&&t?`margin-right: 0px;`:``}
  }
`,ln=new Set([`isIconButton`,`isTagButton`]),un=E(Ne,{shouldForwardProp:an})`
  ${e=>cn(e)}
`,dn=E(de,{shouldForwardProp:an})`
  ${e=>cn(e)}
`,fn={}})))()}function M(){return(M=e((()=>{pn()})))()}function mn(e){let{color:t}=e;return(0,hn.jsx)(`div`,{style:{width:`100%`,height:`100%`,backgroundColor:t}})}var hn;function gn(){return(gn=e((()=>{hn=S()})))()}function _n(e,t){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>{e.apply({},r)},t)}}function vn(e,t){let n;return(...r)=>{n||(e.apply({},r),n=!0,setTimeout(()=>{n=!1},t))}}var yn,bn,xn;function Sn(){return(Sn=e((()=>{yn=`
  `,bn=1e5,xn=class e{static concat(...t){let n=new e;return n.#e=n.#e.concat(t.flatMap(e=>e.getBufferSlice())),n}#e=[];clampValue;constructor(e=bn){this.clampValue=e}#t(e){this.#e.push(e)}#n(e){let t=this.clampValue;return t===null?e:e<-t?-t:e>t?t:e}getBufferSlice(...e){return this.#e.slice(...e)}moveTo(e,t){return e=this.#n(e),t=this.#n(t),this.#t(`M ${e} ${t}`),this}lineTo(e,t){return e=this.#n(e),t=this.#n(t),this.#t(`L ${e} ${t}`),this}closePath(){return this.#e.length===0||this.#t(`Z`),this}toString(e=yn){return this.#e.join(e)}}})))()}var Cn;function wn(){return(wn=e((()=>{Cn=[`#CC6677`,`#332288`,`#DDCC77`,`#117733`,`#88CCEE`,`#882255`,`#44AA99`,`#999933`,`#AA4499`]})))()}function Tn(e,t,n,r,i){let a=i.clientWidth,o=i.clientHeight,s=typeof e.pageX==`number`?e.pageX:e.touches[0].pageX,c=typeof e.pageY==`number`?e.pageY:e.touches[0].pageY,l=s-(i.getBoundingClientRect().left+window.pageXOffset),u=c-(i.getBoundingClientRect().top+window.pageYOffset),d;if(n===`vertical`){if(d=u<0?0:u>o?1:Math.round(u*100/o)/100,t.a!==d)return{h:t.h,s:t.s,l:t.l,a:d,source:`rgb`}}else if(d=l<0?0:l>a?1:Math.round(l*100/a)/100,r!==d)return{h:t.h,s:t.s,l:t.l,a:d,source:`rgb`};return null}function En(e,t,n,r){if(typeof document>`u`&&!r)return null;let i=r?new r:document.createElement(`canvas`);i.width=n*2,i.height=n*2;let a=i.getContext(`2d`);return a?(a.fillStyle=e,a.fillRect(0,0,i.width,i.height),a.fillStyle=t,a.fillRect(0,0,n,n),a.translate(n,n),a.fillRect(0,0,n,n),i.toDataURL()):null}function Dn(e,t,n,r){let i=`${e}-${t}-${n}${r?`-server`:``}`;if(On[i])return On[i];let a=En(e,t,n,r);return On[i]=a,a}var On;function kn(){return(kn=e((()=>{On={}})))()}function An(e){let{children:t}=e;return(0,Mn.isValidElement)(t)?(0,Mn.cloneElement)(t,{...t.props,style:{...t.props.style,...Nn.grid(e)}}):(0,jn.jsx)(`div`,{style:Nn.grid(e)})}var jn,Mn,Nn;function Pn(){return(Pn=e((()=>{jn=S(),Mn=C(),kn(),Nn={grid:e=>{let{size:t=8,white:n=`transparent`,grey:r=`rgba(0,0,0,.08)`,renderers:i={},borderRadius:a,boxShadow:o}=e;return{borderRadius:a,boxShadow:o,position:`absolute`,top:0,left:0,right:0,bottom:0,background:`url(${Dn(n,r,t,i.canvas)}) center left`}}}})))()}function Fn(e){return(0,In.useCallback)(t=>{e(t);function n(){window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseup`,n)}window.addEventListener(`mousemove`,e),window.addEventListener(`mouseup`,n)},[e])}var In;function Ln(){return(Ln=e((()=>{In=C()})))()}function Rn(e){let t=(0,zn.useRef)(),n=(0,zn.useCallback)(n=>{let r=Tn(n,e.hsl,e.direction,e.a,t.current);r&&typeof e.onChange==`function`&&e.onChange(r,n)},[e]),r=Fn(n),i=e.rgb,{borderRadius:a,boxShadow:o,direction:s}=e.style;return(0,N.jsxs)(`div`,{style:Bn.alpha(a),children:[(0,N.jsx)(`div`,{style:Bn.checkerboard(a),children:(0,N.jsx)(An,{renderers:e.renderers})}),(0,N.jsx)(`div`,{style:Bn.gradient(s,o,a,i)}),(0,N.jsx)(`div`,{style:Bn.container,ref:t,onMouseDown:r,onTouchMove:n,onTouchStart:n,onBlur:e.onBlur,children:(0,N.jsx)(`div`,{style:Bn.pointer(s,i),children:e.pointer?(0,N.jsx)(e.pointer,{...e}):(0,N.jsx)(`div`,{style:Bn.slider})})})]})}var N,zn,Bn;function Vn(){return(Vn=e((()=>{N=S(),zn=C(),Pn(),Ln(),Bn={alpha:e=>({position:`absolute`,top:0,left:0,right:0,bottom:0,borderRadius:e}),checkerboard:e=>({position:`absolute`,top:0,left:0,right:0,bottom:0,overflow:`hidden`,borderRadius:e}),gradient:(e,t,n,r)=>{let i=`right`;return e===`vertical`&&(i=`bottom`),{position:`absolute`,top:0,left:0,right:0,bottom:0,boxShadow:t,borderRadius:n,background:`linear-gradient(to ${i}, rgba(${r.r},${r.g},${r.b}, 0) 0%,
      rgba(${r.r},${r.g},${r.b}, 1) 100%)`}},container:{position:`relative`,height:`100%`,margin:`0 3px`},pointer:(e,t)=>e===`vertical`?{position:`absolute`,left:0,top:`${t.a*100}%`}:{position:`absolute`,left:`${t.a*100}%`},slider:{width:`4px`,borderRadius:`1px`,height:`8px`,boxShadow:`0 0 2px rgba(0, 0, 0, .6)`,background:`#fff`,marginTop:`1px`,transform:`translateX(-2px)`}}})))()}var Hn,P,Un,Wn,Gn,Kn,qn,Jn,Yn;function Xn(){return(Xn=e((()=>{Hn=S(),P=C(),Un=1,Wn=38,Gn=new Set([Wn,40]),Kn=e=>Gn.has(e),qn=e=>Number(String(e).replaceAll(`%`,``)),Jn={wrap:{position:`relative`}},Yn=e=>{let[t,n]=(0,P.useState)({value:String(e.value).toUpperCase(),blurValue:String(e.value).toUpperCase()}),r=(0,P.useRef)(),i=(0,P.useRef)(e.value),a=`rc-editable-input-${(0,P.useId)()}`;(0,P.useEffect)(()=>{i.current=e.value,r.current===document.activeElement?n({blurValue:String(e.value).toUpperCase()}):n(t=>({value:String(e.value).toUpperCase(),blurValue:!t.blurValue&&String(e.value).toUpperCase()}))},[e.value]);let o=(0,P.useCallback)(t=>({[e.label]:t}),[e.label]),s=e.onBlur,c=(0,P.useCallback)(e=>{t.blurValue&&n({value:t.blurValue,blurValue:null}),s?.(e)},[t.blurValue,s]),l=(0,P.useCallback)((t,r)=>{let i=e.label?o(t):t;e.onChange&&e.onChange(i,r),n({value:t})},[o,e]),u=(0,P.useCallback)(e=>{l(e.target.value,e)},[l]),d=(0,P.useCallback)(t=>{let n=qn(t.target.value);if(Number.isNaN(n)||!Kn(t.keyCode))return;let r=e.arrowOffset||Un,i=t.keyCode===Wn?n+r:n-r;l(i,t)},[e.arrowOffset,l]),f=(0,P.useCallback)(t=>{if(!e.dragLabel)return;let n=Math.round(i.current+t.movementX);n<0||n>e.dragMax||(i.current=n,e.onChange&&e.onChange(o(n),t))},[e,o]),p=(0,P.useCallback)(t=>{function n(){window.removeEventListener(`mousemove`,f),window.removeEventListener(`mouseup`,n)}e.dragLabel&&(t.preventDefault(),f(t),window.addEventListener(`mousemove`,f),window.addEventListener(`mouseup`,n))},[f,e.dragLabel]),{wrap:m={},input:h={},label:g={}}=e.style||{};return(0,Hn.jsxs)(`div`,{style:{...Jn.wrap,...m},children:[(0,Hn.jsx)(`input`,{id:a,style:h,ref:r,value:t.value,onKeyDown:d,onChange:u,onBlur:c,placeholder:e.placeholder,spellCheck:`false`}),e.label&&!e.hideLabel?(0,Hn.jsx)(`label`,{htmlFor:a,style:{...g,...e.dragLabel===`true`&&{cursor:`ew-resize`,userSelect:`none`}},onMouseDown:p,children:e.label}):null]})}})))()}function Zn(e,t,n){let{width:r,height:i}=n.getBoundingClientRect(),a=typeof e.pageX==`number`?e.pageX:e.touches[0].pageX,o=typeof e.pageY==`number`?e.pageY:e.touches[0].pageY,s=a-(n.getBoundingClientRect().left+window.pageXOffset),c=o-(n.getBoundingClientRect().top+window.pageYOffset);s<0?s=0:s>r&&(s=r),c<0?c=0:c>i&&(c=i);let l=s/r,u=1-c/i;return{h:t.h,s:l,v:u,a:t.a,source:`hsv`}}function Qn(e){let{hsl:t,hsv:n,pointer:r,onChange:i,onBlur:a}=e,o=(0,er.useRef)(vn((e,t,n)=>{e(t,n)},50)),s=(0,er.useRef)(),c=(0,er.useCallback)(e=>{i&&typeof i==`function`&&o.current(i,Zn(e,t,s.current),e)},[t,i,o]),l=Fn(c);return(0,$n.jsx)(`div`,{style:tr.color(t),ref:s,onMouseDown:l,onTouchMove:c,onTouchStart:c,onBlur:a,children:(0,$n.jsxs)(`div`,{style:tr.white(),children:[(0,$n.jsx)(`div`,{style:tr.black()}),(0,$n.jsx)(`div`,{style:tr.pointer(n),children:r?(0,$n.jsx)(e.pointer,{...e}):(0,$n.jsx)(`div`,{style:tr.circle})})]})})}var $n,er,tr;function nr(){return(nr=e((()=>{$n=S(),er=C(),Ln(),tr={color:e=>({position:`absolute`,top:0,left:0,right:0,bottom:0,background:`hsl(${e.h},100%, 50%)`,userDraggle:`none`,userSelect:`none`}),white:()=>({position:`absolute`,top:0,left:0,right:0,bottom:0,background:`linear-gradient(to right, #fff, rgba(255,255,255,0))`}),black:()=>({position:`absolute`,top:0,left:0,right:0,bottom:0,background:`linear-gradient(to top, #000, rgba(0,0,0,0))`}),pointer:e=>({position:`absolute`,top:`${-(e.v*100)+100}%`,left:`${e.s*100}%`,cursor:`default`}),circle:{width:`4px`,height:`4px`,boxShadow:`0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
          0 0 1px 2px rgba(0,0,0,.4)`,borderRadius:`50%`,cursor:`hand`,transform:`translate(-2px, -2px)`}}})))()}function rr(e,t,n,r){let i=r.clientWidth,a=r.clientHeight,o=typeof e.pageX==`number`?e.pageX:e.touches[0].pageX,s=typeof e.pageY==`number`?e.pageY:e.touches[0].pageY,c=o-(r.getBoundingClientRect().left+window.pageXOffset),l=s-(r.getBoundingClientRect().top+window.pageYOffset),u;return u=t===`vertical`?l<0?359:l>a?0:360*(-(l*100/a)+100)/100:c<0?0:c>i?359:360*(c*100/i)/100,n.h===u?null:{h:u,s:n.s,l:n.l,a:n.a,source:`hsl`}}function ir(e){let{direction:t=`horizontal`,hsl:n,style:r,pointer:i,onBlur:a,onChange:o}=e,{borderRadius:s,boxShadow:c}=r,l=(0,or.useRef)(),u=(0,or.useCallback)(e=>{let r=rr(e,t,n,l.current);r&&typeof o==`function`&&o(r,e)},[t,n,o]),d=Fn(u);return(0,ar.jsx)(`div`,{style:sr.hue(s,c),children:(0,ar.jsx)(`div`,{style:sr.container(t,s),ref:l,onMouseDown:d,onTouchMove:u,onTouchStart:u,onBlur:a,children:(0,ar.jsx)(`div`,{style:sr.pointer(t,n),children:i?(0,ar.jsx)(e.pointer,{...e}):(0,ar.jsx)(`div`,{style:sr.slider})})})})}var ar,or,sr;function cr(){return(cr=e((()=>{ar=S(),or=C(),Ln(),sr={hue:(e,t)=>({position:`absolute`,top:0,left:0,right:0,bottom:0,borderRadius:e,boxShadow:t}),container:(e,t)=>{let n=`right`;return e===`vertical`&&(n=`bottom`),{padding:`0 2px`,position:`relative`,height:`100%`,borderRadius:t,background:`linear-gradient(to ${n}, #f00 0%, #ff0 17%, #0f0
      33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`}},pointer:(e,t)=>e===`vertical`?{position:`absolute`,left:0,top:`${-(t.h*100/360)+100}%`}:{position:`absolute`,left:`${t.h*100/360}%`},slider:{marginTop:`1px`,width:`4px`,borderRadius:`1px`,height:`8px`,boxShadow:`0 0 2px rgba(0, 0, 0, .6)`,background:`#fff`,transform:`translateX(-2px)`}}})))()}function lr(e,t=`span`){return function(n){let[r,i]=(0,dr.useState)(!1),a=(0,dr.useCallback)(()=>i(!0),[]),o=(0,dr.useCallback)(()=>i(!1),[]);return(0,ur.jsx)(t,{onFocus:a,onBlur:o,children:(0,ur.jsx)(e,{...n,focus:r})})}}var ur,dr;function fr(){return(fr=e((()=>{ur=S(),dr=C()})))()}var pr,mr,hr,gr,_r;function vr(){return(vr=e((()=>{pr=S(),mr=C(),Pn(),fr(),hr={height:`100%`,width:`100%`,cursor:`pointer`,position:`relative`,outline:`none`},gr={},_r=lr(function({color:e,style:t,onClick:n,onHover:r,title:i=e,children:a,focus:o,focusStyle:s=gr}){let c=e===`transparent`,l=(0,mr.useCallback)(t=>n?.(e,t),[e,n]),u=(0,mr.useCallback)(t=>{t.key.toLowerCase()===`enter`&&n?.(e,t)},[e,n]),d=(0,mr.useCallback)(t=>r?.(e,t),[e,r]),f={};return r&&(f.onMouseOver=d),(0,pr.jsxs)(`div`,{style:{...hr,background:e,...t,...o&&s},onClick:l,title:i,tabIndex:0,onKeyDown:u,...f,children:[a,c&&(0,pr.jsx)(An,{borderRadius:t.borderRadius,boxShadow:`inset 0 0 0 1px rgba(0,0,0,0.1)`})]})})})))()}function yr(){return(yr=e((()=>{Vn(),Pn(),Xn(),nr(),cr(),vr()})))()}function br(e){let t=[`r`,`g`,`b`,`a`,`h`,`s`,`l`,`v`],n=0,r=0;for(let i of t)e[i]&&(n+=1,Number.isNaN(Number(e[i]))||(r+=1),(i===`s`||i===`l`)&&/^\d+%$/.test(e[i])&&(r+=1));return n===r&&e}function xr(e,t){let n=yt(e.hex||e),r=n.toHsl(),i=n.toHsv(),a=n.toRgb(),o;return o=a.a<1?n.toHex8():n.toHex(),r.s===0&&(r.h=t||0,i.h=t||0),{hsl:r,hex:`#${o}`,rgb:a,hsv:i,oldHue:e.h||t||r.h,source:e.source}}function Sr(e){if(e===`transparent`)return!0;let t=+!!String(e).startsWith(`#`);return e.length!==4+t&&e.length<7+t&&yt(e).isValid()}function Cr(){return(Cr=e((()=>{bt()})))()}var F,wr,I,Tr;function Er(){return(Er=e((()=>{F=S(),wr=C(),yr(),Cr(),I={fields:{display:`flex`,paddingTop:`4px`},single:{flex:`1`,paddingLeft:`6px`},alpha:e=>({flex:`1`,paddingLeft:`6px`,...e&&{display:`none`}}),double:{flex:`2`},input:{width:`100%`,padding:`4px 10% 3px`,border:`none`,boxShadow:`inset 0 0 0 1px #ccc`,textAlign:`center`,borderRadius:`3px`},label:{display:`block`,textAlign:`center`,color:`#222`,paddingTop:`3px`,paddingBottom:`4px`,textTransform:`capitalize`}},Tr=({onChange:e,onBlur:t,rgb:n,hsl:r,hex:i,disableAlpha:a})=>{let o=(0,wr.useCallback)((t,i)=>{t.hex?Sr(t.hex)&&e({hex:t.hex,source:`hex`},i):t.r||t.g||t.b?e({r:t.r||n.r,g:t.g||n.g,b:t.b||n.b,a:n.a,source:`rgb`},i):t.a&&(t.a<0?t.a=0:t.a>100&&(t.a=100),t.a/=100,e({h:r.h,s:r.s,l:r.l,a:t.a,source:`rgb`},i))},[r.h,r.l,r.s,e,n.a,n.b,n.g,n.r]);return(0,F.jsxs)(`div`,{style:I.fields,children:[(0,F.jsx)(`div`,{style:I.double,children:(0,F.jsx)(Yn,{style:{input:I.input,label:I.label},label:`hex`,value:i.replace(`#`,``),onChange:o,onBlur:t})}),(0,F.jsx)(`div`,{style:I.single,children:(0,F.jsx)(Yn,{style:{input:I.input,label:I.label},label:`r`,value:n.r,onChange:o,onBlur:t,dragLabel:`true`,dragMax:`255`})}),(0,F.jsx)(`div`,{style:I.single,children:(0,F.jsx)(Yn,{style:{input:I.input,label:I.label},label:`g`,value:n.g,onChange:o,onBlur:t,dragLabel:`true`,dragMax:`255`})}),(0,F.jsx)(`div`,{style:I.single,children:(0,F.jsx)(Yn,{style:{input:I.input,label:I.label},label:`b`,value:n.b,onChange:o,onBlur:t,dragLabel:`true`,dragMax:`255`})}),(0,F.jsx)(`div`,{style:I.alpha(a),children:(0,F.jsx)(Yn,{style:{input:I.input,label:I.label},label:`a`,value:Math.round(n.a*100),onChange:o,onBlur:t,dragLabel:`true`,dragMax:`100`})})]})}})))()}var Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{Dr=S(),Or=C(),yr(),kr={colors:e=>({margin:`0 -10px`,padding:`10px 0 0 10px`,borderTop:`1px solid #eee`,display:`flex`,flexWrap:`wrap`,position:`relative`,...e&&{display:`none`}}),swatchWrap:{width:`16px`,height:`16px`,margin:`0 10px 10px 0`},swatch:{borderRadius:`3px`,boxShadow:`inset 0 0 0 1px rgba(0,0,0,.15)`}},Ar=e=>{let{colors:t,onClick:n,onSwatchHover:r}=e,i=(0,Or.useCallback)((e,t)=>{n?.({hex:e,source:`hex`},t)},[n]);return(0,Dr.jsx)(`div`,{style:kr.colors(!t||t.length===0),children:t.map(e=>{let t=typeof e==`string`?{color:e}:e,n=`${t.color}${`title`in t?t?.title:``}`;return(0,Dr.jsx)(`div`,{style:kr.swatchWrap,children:(0,Dr.jsx)(_r,{...t,style:kr.swatch,onClick:i,onHover:r,focusStyle:{boxShadow:`inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${t.color}`}})},n)})})}})))()}function Mr(e){let{width:t=200,onChange:n,onSwatchHover:r,disableAlpha:i=!1,presetColors:a=Cn,className:o=``,color:s=Pr,onChangeComplete:c,onBlur:l,style:u=Fr}=e,d=(0,Nr.useRef)(_n((e,t,n)=>{e(t,n)},100)),[f,p]=(0,Nr.useState)(()=>xr(s,0)),[m,h]=(0,Nr.useState)(s);s!==m&&(h(s),p(xr(s,0)));let g=(0,Nr.useCallback)((e,t)=>{if(!br(e))return;let r=xr(e,`h`in e&&e.h||f.oldHue);p(r),c&&d.current(c,r,t),n&&n(r,t)},[d,n,c,f.oldHue]),_=(0,Nr.useCallback)((e,t)=>{if(!br(e))return;let n=xr(e,e.h||f.oldHue);r&&r(n,t)},[r,f.oldHue]),{rgb:v,hex:y,hsv:ee,hsl:b}=f;return(0,L.jsxs)(`div`,{style:{...R.picker(t),...u},className:o,children:[(0,L.jsx)(`div`,{style:R.saturationContainer,children:(0,L.jsx)(Qn,{hsl:b,hsv:ee,onChange:g,onBlur:l})}),(0,L.jsxs)(`div`,{style:R.controls,children:[(0,L.jsxs)(`div`,{style:R.sliders,children:[(0,L.jsx)(`div`,{style:R.hueContainer,children:(0,L.jsx)(ir,{style:R.hueElement,hsl:b,onChange:g,onBlur:l})}),(0,L.jsx)(`div`,{style:R.alphaContainer(i),children:(0,L.jsx)(Rn,{style:R.alphaElement,rgb:v,hsl:b,onChange:g,onBlur:l})})]}),(0,L.jsxs)(`div`,{style:R.color(i),children:[(0,L.jsx)(An,{}),(0,L.jsx)(`div`,{style:R.activeColor(v)})]})]}),(0,L.jsx)(Tr,{hsl:b,hex:y,rgb:v,onChange:g,onBlur:l,disableAlpha:i}),(0,L.jsx)(Ar,{colors:a,onClick:(e,t)=>g(e,t),onSwatchHover:_})]})}var L,Nr,Pr,R,Fr;function Ir(){return(Ir=e((()=>{L=S(),Nr=C(),wn(),yr(),Cr(),Er(),jr(),Pr={h:250,s:.5,l:.2,a:1},R={picker:e=>({width:typeof e==`string`?e:`${e}px`,padding:`10px 10px 0`,boxSizing:`initial`,background:`#fff`,borderRadius:`4px`,boxShadow:`0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)`}),controls:{display:`flex`},sliders:{padding:`4px 0`,flex:`1`},color:e=>({width:`24px`,height:e?`10px`:`24px`,position:`relative`,marginTop:`4px`,marginLeft:`4px`,borderRadius:`3px`}),activeColor:e=>({position:`absolute`,left:0,top:0,right:0,bottom:0,borderRadius:`2px`,background:`rgba(${e.r},${e.g},${e.b},${e.a})`,boxShadow:`inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)`}),saturationContainer:{width:`100%`,paddingBottom:`75%`,position:`relative`,overflow:`hidden`},hueContainer:{position:`relative`,height:`10px`,overflow:`hidden`},hueElement:{borderRadius:`2px`,boxShadow:`inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)`},alphaContainer:e=>({position:`relative`,height:`10px`,marginTop:`4px`,overflow:`hidden`,...e&&{display:`none`}}),alphaElement:{borderRadius:`2px`,boxShadow:`inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)`}},Fr={}})))()}function Lr(e){let{color:t,popoverProps:n,id:r,...i}=e,{hex:a}=xr(t||`white`);return(0,Rr.jsx)(Se,{targetProps:{style:{width:`100%`}},content:(0,Rr.jsx)(Mr,{color:t,...i}),shouldReturnFocusOnClose:!1,animation:`minimal`,arrow:!1,...n,children:(0,Rr.jsx)(zr,{type:`button`,id:r,children:(0,Rr.jsx)(Br,{children:(0,Rr.jsx)(mn,{color:a})})})})}var Rr,zr,Br;function Vr(){return(Vr=e((()=>{Rr=S(),Ee(),T(),gn(),Ir(),Cr(),zr=E.button`
  position: relative;
  width: 100%;
  border: 1px solid darkgray;
  border-radius: 0.25rem;
  height: 30px;
  padding: 5px;
`,Br=E.div`
  height: 100%;
  width: 100%;
  border-radius: 0.125rem;
`})))()}function Hr(){return(Hr=e((()=>{S(),C(),Kr()})))()}var Ur;function Wr(){return(Wr=e((()=>{Ct(),Ur={turbo:Tt,viridis:wt,inferno:Et,magma:Ot,plasma:Dt}})))()}function Gr(){return(Gr=e((()=>{S(),Me(),T(),St(),Hr(),Wr(),Object.keys(Ur),E.div`
  position: relative;
  width: 100%;
  border: 1px solid darkgray;
  margin-top: 100px;
  border-radius: 0.25rem;
`,E(xt)`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0.5rem;
`,E.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  cursor: pointer;
`,E(de)`
  width: 100%;
  height: 30px;
  padding: 4px;
  display: block;
`})))()}function Kr(){return(Kr=e((()=>{Gr(),Wr()})))()}function qr(){return(qr=e((()=>{S(),gn(),Hr()})))()}function Jr(){return(Jr=e((()=>{Vr(),Kr(),qr(),Ir()})))()}function Yr(e){let t=new Set(e);return e=>!t.has(e)}function Xr(){return(Xr=e((()=>{S(),w(),me(),T(),M(),E(Oe,{shouldForwardProp:Yr([`headerColor`])})`
  .${we} {
    background-color: ${e=>e.headerColor};
    min-height: 0;
  }
`})))()}function Zr(){return(Zr=e((()=>{Xr()})))()}function Qr(){return(Qr=e((()=>{S(),T(),E.svg`
  display: inline-flex;
  ${e=>`
      height: ${e.size};
      width: ${e.size};
    `}
`})))()}function $r(){return($r=e((()=>{S(),Qr()})))()}function ei(){return(ei=e((()=>{$r()})))()}function ti(e){return(0,z.jsx)(ni,{...e})}function ni(e){let{borderColor:t=y.GRAY3,children:n=null,onClick:r,emptyIcon:i=`import`,emptyTitle:a=`No data loaded`,emptyDescription:o=`You can load data by drag-and-dropping files here`,emptyButtonText:s=`Select files`,emptyButtonIcon:c=`plus`,noClick:l,...u}=e,d=n!==null,{getRootProps:f,getInputProps:p,isDragActive:m}=Fe({noClick:l??d,...u});return(0,z.jsxs)(ri,{...f({onClick:r}),children:[n,m?(0,z.jsx)(ii,{borderColor:t,children:(0,z.jsx)(le,{icon:`cloud-upload`,title:`Drop the files here`})}):d?null:(0,z.jsx)(ai,{borderColor:t,children:(0,z.jsx)(le,{icon:i,title:a,description:o,action:(0,z.jsx)(de,{className:`dropzone-button`,variant:`outlined`,text:s,icon:c,intent:`primary`})})}),(0,z.jsx)(`input`,{...p()})]})}var z,ri,ii,ai;function oi(){return(oi=e((()=>{z=S(),Me(),s(),ke(),T(),Ie(),bt(),ri=E.div`
  position: relative;
  height: 100%;
  width: 100%;
`,ii=E.div`
  position: absolute;
  inset: 0;
  background-color: rgb(255 255 255 / 70%);
  border: 5px dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: ${({borderColor:e})=>e??yt(e).setAlpha(.7).toRgbString()};
`,ai=E.div`
  :hover .dropzone-button {
    background-color: ${yt(y.BLUE3).setAlpha(.15).toRgbString()};
  }

  width: 100%;
  height: 100%;
  padding: 1em;
  border: 5px dashed;
  cursor: pointer;
  border-color: ${({borderColor:e})=>e};
`})))()}function si(){return(si=e((()=>{oi()})))()}var ci;function li(){return(li=e((()=>{ci=`#1677ff`})))()}function ui(){return(ui=e((()=>{C()})))()}function di(){return(di=e((()=>{S(),T(),li(),ui(),E.input`
  /* Those styles are taken from the sr-only class in tailwind CSS. */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;

  /* Label associated with the checked input. */
  :checked + label {
    color: ${ci};
    border-color: ${ci};
    opacity: ${e=>e.disabled?.25:1};
    border-width: 1px;
  }

  /* Next label after the one that is checked. */
  :checked + label + input + label {
    border-left-width: 0;
  }
`,E.div`
  place-content: center;
  padding: ${e=>e.size===`large`?`0px 15px`:`0px 7px`};
  line-height: 0;
`,E.label`
  display: flex;
  height: ${e=>e.size===`large`?`40px`:`30px`};
  opacity: ${e=>e.disabled?.25:1};
  border-width: 1px 0 1px 1px;
  border-color: rgba(0, 0, 0, ${e=>e.disabled?1:.25});
  border-style: solid;
  cursor: ${e=>e.disabled?`not-allowed`:`pointer`};
  white-space: nowrap;

  :hover {
    color: ${ci};
  }
`})))()}function fi(){return(fi=e((()=>{S(),T(),C(),di(),E.div`
  display: flex;

  label:first-of-type {
    border-bottom-left-radius: ${e=>e.size===`large`?`6px`:`4px`};
    border-top-left-radius: ${e=>e.size===`large`?`6px`:`4px`};
  }

  label:last-of-type {
    border-right-width: 1px;
    border-bottom-right-radius: ${e=>e.size===`large`?`6px`:`4px`};
    border-top-right-radius: ${e=>e.size===`large`?`6px`:`4px`};
  }
`})))()}function pi(){return(pi=e((()=>{fi(),di()})))()}function mi(){return(mi=e((()=>{pi()})))()}function hi(){return(0,gi.use)(vi)}var gi,_i,vi;function yi(){return(yi=e((()=>{gi=C(),_i={isFullScreen:!1,toggle:()=>{}},vi=(0,gi.createContext)(_i)})))()}function bi(e){let{children:t,onToggleError:n}=e,r=Le(),i=(0,Si.useMemo)(()=>{function e(){let e=r.active?r.exit:r.enter;function t(e){n?.(e,r.active?`exit`:`enter`)}try{e().catch(t)}catch(e){t(e)}}return{isFullScreen:r.active,toggle:e}},[r,n]);return(0,xi.jsx)(vi,{value:i,children:t(r.node)})}var xi,Si;function Ci(){return(Ci=e((()=>{xi=S(),Si=C(),Re(),yi()})))()}function wi(e,t){return!e||typeof e==`string`?(0,Ti.jsx)(Ae,{icon:e,size:t}):(0,Ei.cloneElement)(e,{style:{width:t,height:t,fontSize:t-4,textAlign:`center`},className:e.props.className?`${e.props.className} ${x}`:x})}var Ti,Ei;function Di(){return(Di=e((()=>{Ti=S(),w(),re(),Ei=C()})))()}function Oi(e,t){let n=e===`end`;return t?`${n?`top`:`bottom`}-start`:`${n?`left`:`right`}-start`}function ki(e){let{style:t,vertical:n,intent:r,disabled:i,tooltip:a,children:o,popoverProps:s,placement:c=`end`,...l}=e;return(0,ji.jsx)(Se,{shouldReturnFocusOnClose:!1,animation:`minimal`,arrow:!1,disabled:i,placement:Oi(c,n),interactionKind:`hover`,hasBackdrop:!1,enforceFocus:!1,autoFocus:!1,...s,content:(0,ji.jsx)(Bi,{vertical:n,intent:r,disabled:i,overflow:`wrap`,children:o}),children:(0,ji.jsx)(Ki,{variant:`minimal`,icon:`more`,intent:r,disabled:i,style:{boxShadow:Ai(c,n),...t},...l})})}function Ai(e,t){let n=e===`start`?1:-1;return`${t?0:8*n}px ${t?8*n:0}px 8px -4px rgba(0, 0, 0, 0.15)`}var ji;function Mi(){return(Mi=e((()=>{ji=S(),Ee(),Ji()})))()}function Ni(){let e=(0,Pi.use)(Fi);if(!e)throw Error(`useToolbarContext must be used within a ToolbarContext`);return e}var Pi,Fi;function Ii(){return(Ii=e((()=>{Pi=C(),Fi=(0,Pi.createContext)(null)})))()}function Li(e){let{containerRef:t,overflow:n,vertical:r}=e,[i,a]=(0,Ri.useState)(!1);return(0,Ri.useLayoutEffect)(()=>{if(n!==`collapse`)return;let e=t.current;if(!e)return;let i=()=>{let t=!1;t=r?e.scrollHeight>e.clientHeight:e.scrollWidth>e.clientWidth,a(t)};i();let o=new ResizeObserver(i);return o.observe(e),()=>o.disconnect()},[t,n,r]),i}var Ri;function zi(){return(zi=e((()=>{Ri=C()})))()}function Bi(e){let{children:t,disabled:n,intent:r,vertical:i=!1,popoverInteractionKind:a,overflow:o=`wrap`,overflowButtonProps:s,"aria-label":c}=e,{placement:l=`end`}=s||{},u=(0,Ui.useMemo)(()=>({intent:r,vertical:i,disabled:n,popoverInteractionKind:a}),[r,i,n,a]),d=(0,Ui.useRef)(null),f=Li({containerRef:d,overflow:o,vertical:i});return(0,Ui.useLayoutEffect)(()=>{if(!i||o!==`wrap`)return;function e(){let e=d.current?.lastElementChild;if(!d.current||!e)return;d.current.style.width=`initial`;let t=d.current.getBoundingClientRect(),n=`${e.getBoundingClientRect().right-t.left}px`;d.current.style.width!==n&&(d.current.style.width=n)}let t=d.current;if(!t)return;let n=new ResizeObserver(e);return n.observe(t),()=>n.unobserve(t)},[o,i]),o===`wrap`?(0,B.jsx)(Fi,{value:u,children:(0,B.jsx)(ee,{role:`toolbar`,"aria-label":c,ref:d,vertical:i,variant:`minimal`,style:{flexWrap:`wrap`,borderRight:i?Wi:void 0},children:t},String(i))}):(0,B.jsx)(Fi,{value:u,children:(0,B.jsxs)(Gi,{vertical:i,placement:l,children:[(0,B.jsx)(ee,{role:`toolbar`,"aria-label":c,ref:d,vertical:i,variant:`minimal`,style:{flex:1,flexWrap:`nowrap`,overflow:`hidden`,borderRight:i?Wi:void 0},children:t},String(i)),f&&(0,B.jsx)(ki,{placement:l,vertical:i,intent:r,disabled:n,...s,children:t})]})})}function Vi(e){return(0,B.jsx)(Hi,{...e,isPopover:!1})}function Hi(e){let{active:t=!1,icon:n,onClick:r,tooltip:i,tooltipProps:a,intent:o,disabled:s,isPopover:c,...l}=e,{intent:u,disabled:d,vertical:f}=Ni(),p=o??u,m=s??d,h=wi(n,16);return(0,B.jsx)(Ki,{disabled:m,intent:p,type:`button`,active:t,style:{position:`relative`,fontSize:`1.125em`,width:`fit-content`},icon:c?(0,B.jsxs)(`div`,{style:{display:`contents`},children:[(0,B.jsx)(`div`,{style:{display:`contents`},children:h}),(0,B.jsx)(Ae,{icon:`caret-right`,size:9,style:{transform:`rotate(45deg)`,position:`absolute`,bottom:0,right:0,width:9,height:9}})]}):h,onClick:r,tooltipProps:i?{content:i,placement:f?`right`:`bottom`,intent:p,compact:!0,hoverCloseDelay:300,hoverOpenDelay:300,interactionKind:`hover`,...a}:void 0,...l})}var B,Ui,Wi,Gi,Ki,qi;function Ji(){return(Ji=e((()=>{B=S(),t(),w(),s(),re(),Ee(),T(),Ui=C(),M(),Di(),Mi(),Ii(),zi(),Wi=`1px solid rgb(247, 247, 247)`,Gi=E.div`
  display: flex;
  flex-direction: ${({vertical:e,placement:t})=>e?t===`start`?`column-reverse`:`column`:t===`start`?`row-reverse`:`row`};
  overflow: hidden;
  width: 100%;
`,Ki=E(j)`
  .${x} {
    /* Color of icon in button is lighter in Blueprintjs. We want a better contrast in the toolbars */
    color: ${y.DARK_GRAY3} !important;
    width: 16px;
    height: 16px;
    font-size: 12px;
  }

  .${ye} {
    font-size: 10px;
    line-height: 12px;
    min-width: 12px;
    min-height: 12px;
  }
`,Bi.Item=Vi,qi=E(Se)`
  .${x} {
    color: ${y.DARK_GRAY3};
  }
`,Bi.PopoverItem=function(e){let{itemProps:t,...n}=e,{disabled:r,vertical:i,popoverInteractionKind:a}=Ni();return(0,B.jsx)(qi,{shouldReturnFocusOnClose:!1,animation:`minimal`,arrow:!1,disabled:r,placement:i?`right-start`:`bottom-start`,interactionKind:a,hasBackdrop:a===`click`,hoverCloseDelay:0,renderTarget:({isOpen:e,className:n,...r})=>(0,B.jsx)(`span`,{...r,style:{flex:`0 0 auto`},children:(0,B.jsx)(Hi,{isPopover:!0,...t})}),...n})}})))()}function Yi(){return(Yi=e((()=>{S(),T(),Ji(),E.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(240 240 240);
`,E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  font-weight: 500;
`,E.div`
  display: flex;
  flex-direction: row-reverse;

  > button {
    padding: 0 0 0 9px;
    min-width: auto;
  }
`})))()}function Xi(e){let{title:t,shortcuts:n=aa,subTitles:r=oa,description:i=``,link:a,style:o=sa}=e;return(0,V.jsxs)(`div`,{style:{color:`white`,width:`250px`,padding:`0.5rem`,...o},children:[(0,V.jsxs)(ea,{children:[(0,V.jsx)(ta,{size:`0.9rem`,children:t}),(0,V.jsx)(Zi,{shortcuts:n})]}),(0,V.jsx)(Qi,{items:r}),(i||a)&&(0,V.jsxs)(na,{children:[i,a&&(0,V.jsx)(`a`,{style:i?{paddingLeft:`5px`}:{},target:`_blank`,href:a,rel:`noreferrer`,children:`Learn more`})]})]})}function Zi({shortcuts:e}){return(0,V.jsx)(`div`,{style:{display:`flex`,textWrap:`nowrap`},children:e.map((e,t)=>(0,V.jsx)(ra,{children:(0,V.jsx)(`span`,{children:e})},t))})}function Qi({items:e}){return!e||e.length===0?null:(0,V.jsx)(`ul`,{style:{paddingLeft:`5px`,listStyle:`none`},children:e.map(({shortcuts:e=[],title:t})=>(0,V.jsx)(ia,{children:(0,V.jsxs)(ea,{children:[(0,V.jsx)(ta,{size:`0.7rem`,children:t}),(0,V.jsx)(Zi,{shortcuts:e})]})},t))})}var V,$i,ea,ta,na,ra,ia,aa,oa,sa;function ca(){return(ca=e((()=>{V=S(),T(),$i=1.5,ea=E.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`,ta=E.span`
  font-size: ${({size:e})=>e};
  flex: 1;
  padding: 5px 0;
  text-align: start;
`,na=E.p`
  padding-top: 1rem;
  font-size: 0.7rem;
  text-align: start;
`,ra=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border: 1px solid;
  border-radius: 4px;
  height: ${$i}rem;
  min-width: ${$i}rem;
  margin-left: 5px;
  font-size: 0.75rem;
  font-weight: bold;
`,ia=E.div`
  position: relative;
  padding-left: 15px;
  box-sizing: border-box;

  ::before {
    position: absolute;
    top: ${$i/2}rem;
    left: 0;
    width: 10px;
    height: 1px;
    margin: auto;
    content: '';
    border-bottom: 1px solid;
  }

  ::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 100%;
    content: '';
    border-left: 1px solid;
  }

  :last-child::after {
    height: ${$i/2}rem;
  }
`,aa=[],oa=[],sa={}})))()}function la(){return(la=e((()=>{Ji(),Yi(),ca()})))()}function ua(){return(ua=e((()=>{S(),la(),yi()})))()}function da(){return(da=e((()=>{yi(),Ci(),ua()})))()}function fa(){return(fa=e((()=>{S(),T(),E.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(247 247 247);
  box-shadow: rgb(255 255 255) 0 1px 0 0 inset;
`})))()}function pa(e){let{total:t,count:n}=e;return(0,ha.jsx)(`div`,{style:{whiteSpace:`nowrap`,margin:0},children:ma(n,t)})}function ma(e,t){return e!==void 0&&t!==void 0?`[ ${e} / ${t} ]`:e===void 0?t===void 0?``:`[ ${t} ]`:`[ ${e} ]`}var ha;function ga(){return(ga=e((()=>{ha=S()})))()}function _a(){return(_a=e((()=>{ga()})))()}function va(e){let{total:t,current:n,children:r,onClickSettings:i}=e;return(0,ya.jsxs)(ba,{children:[(0,ya.jsx)(xa,{children:r}),(0,ya.jsx)(pa,{count:n,total:t}),i&&(0,ya.jsx)(j,{color:`black`,variant:`minimal`,onClick:i,icon:`cog`})]})}var ya,ba,xa;function Sa(){return(Sa=e((()=>{ya=S(),T(),M(),_a(),ba=E.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.55px solid rgb(240 240 240);
`,xa=E.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 0;

  '& > button:' {
    padding: 0 5px;
    min-width: auto;
  }
`})))()}function Ca(){return(Ca=e((()=>{fa(),Sa()})))()}function wa(){return(wa=e((()=>{C()})))()}function Ta(){return(Ta=e((()=>{C(),new URLSearchParams})))()}var Ea,Da,Oa;function ka(){return(ka=e((()=>{Ea=C(),Da=typeof document>`u`?null:document.body,Oa=(0,Ea.createContext)(Da)})))()}function Aa(){return(Aa=e((()=>{C(),ka()})))()}function ja(e=!1){let[t,n]=(0,Ma.useState)(e);return[t,(0,Ma.useCallback)(()=>n(!0),[]),(0,Ma.useCallback)(()=>n(!1),[]),(0,Ma.useCallback)(()=>n(e=>!e),[])]}var Ma;function Na(){return(Na=e((()=>{Ma=C()})))()}function Pa(e=!1){let[t,,,n]=ja(e);return[t,n]}function Fa(){return(Fa=e((()=>{Na()})))()}function Ia(e){return`itemTextKey`in e}function La(e,t){let n=Ia(t);return!e||n&&!t.itemTextKey?null:n?e[t.itemTextKey]:t.getItemText(e)}function Ra(e){let{defaultSelectedItem:t=null}=e,[n,r]=(0,Va.useState)(t);return{value:n,setValue:r,itemRenderer:za(n,e),onItemSelect:r,popoverProps:{onOpened:e=>{let t=e.querySelector(`ul`);t&&(t.tabIndex=0,t.focus())}},popoverTargetProps:{style:{display:`inline-block`}},itemPredicate:(t,n)=>{let r=La(n,e);return r?r.toLowerCase().includes(t.toLowerCase()):!1},itemListPredicate:(t,n)=>n.filter(n=>{let r=La(n,e);return r?r.toLowerCase().includes(t.toLowerCase()):!1})}}function za(e,t){let n=La(e,t);return(e,{handleClick:r,handleFocus:i,modifiers:a,index:o})=>{let s=La(e,t),{renderItem:c}=t,{active:l,disabled:u}=a;return(0,Ba.jsx)(ge,{active:l,disabled:u,selected:n===s,onClick:r,onFocus:i,roleStructure:`listoption`,text:c?.(e)||s},o)}}var Ba,Va;function Ha(){return(Ha=e((()=>{Ba=S(),De(),Va=C()})))()}function Ua(){return(Ua=e((()=>{wa(),Ta(),Aa(),Na(),Fa(),Ha()})))()}function Wa(){let e=(0,Ga.use)(Ka);if(!e)throw Error(`useFlashedRowContext must be used within a FlashedRowProvider`);return e}var Ga,Ka;function qa(){return(qa=e((()=>{Ga=C(),Ka=(0,Ga.createContext)(null)})))()}function Ja(e){let[t,n]=(0,Xa.useState)(),r=(0,Xa.useMemo)(()=>[t,n],[t]);return(0,Ya.jsx)(Ka,{value:r,children:e.children})}var Ya,Xa;function Za(){return(Za=e((()=>{Ya=S(),Xa=C(),qa()})))()}function Qa(){let e=(0,eo.use)(to);if(e===null)throw Error(`useTablePreviewProps must be used within a TablePreviewContextProvider`);return e}function $a(){return(0,eo.use)(ro)}var eo,to,no,ro;function io(){return(io=e((()=>{eo=C(),to=(0,eo.createContext)(null),no=to.Provider,ro=(0,eo.createContext)(!1)})))()}function ao(){let e=(0,oo.use)(so);if(!e)throw Error(`useItemOrder must be used within a ListContextProvider`);return e}var oo,so;function co(){return(co=e((()=>{oo=C(),so=(0,oo.createContext)(null)})))()}function lo(e){let[t]=(0,po.useState)(()=>Symbol(`table-instance-id`)),{items:n,onOrderChanged:r,children:i}=e,a=(0,po.useCallback)(({startIndex:e,indexOfTarget:t,closestEdgeOfTarget:i})=>{let a=(0,fo.getReorderDestinationIndex)({startIndex:e,closestEdgeOfTarget:i,indexOfTarget:t,axis:`vertical`});a!==e&&r((0,fo.reorder)({list:n,startIndex:e,finishIndex:a}))},[n,r]),o=(0,po.useMemo)(()=>({reorderItem:a,items:n,instanceId:t}),[a,n,t]);return(0,uo.jsx)(so,{value:o,children:i})}var uo,fo,po;function mo(){return(mo=e((()=>{uo=S(),fo=gt(),po=C(),co()})))()}function ho(){let e=(0,go.use)(_o);if(!e)throw Error(`useDraggableItemContext must be used within an ItemContextProvider`);return e}var go,_o;function vo(){return(vo=e((()=>{go=C(),_o=(0,go.createContext)(null)})))()}var yo;function bo(){return(bo=e((()=>{s(),T(),yo=E.div`
  position: absolute;
  z-index: 1;
  background-color: ${y.BLUE3};
  height: 2px;
  left: 0;
  right: 0;
  pointer-events: none;
  ${e=>e.edge===`top`&&`top: -1px;`}
  ${e=>e.edge===`bottom`&&`bottom: -1px;`}
`})))()}function xo(e){return $a()?null:(0,Co.jsx)(So,{...e})}function So(e){let{icon:t=`drag-handle-vertical`,variant:n=`minimal`,style:r,...i}=e,{dragHandleRef:a,state:o}=ho();return(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(de,{type:`button`,icon:t,ref:a,variant:n,...i,style:{cursor:`grab`,...r}}),o?.type===`is-over`&&o.closestEdge&&(0,Co.jsx)(yo,{edge:o.closestEdge})]})}var Co;function wo(){return(wo=e((()=>{Co=S(),Me(),io(),vo(),bo()})))()}function To(e,t){let[n,r]=Wa();(0,Do.useEffect)(()=>{n===e&&t.current&&(Eo(t.current),r(void 0))},[n,e,r,t])}function Eo(e){e.animate([{backgroundColor:y.BLUE5,opacity:.5},{opacity:.5}],{duration:250,iterations:1})}var Do;function Oo(){return(Oo=e((()=>{s(),Do=C(),qa()})))()}function ko(e){let t=Qa();return(0,Ao.jsx)(ro,{value:!0,children:(0,Ao.jsx)(rc,{...t,noHeader:!0,data:[e.row.original]})})}var Ao;function jo(){return(jo=e((()=>{Ao=S(),io(),sc()})))()}function Mo(e,t){return{[Po]:!0,id:e.id,index:e.index,instanceId:t}}function No(e){return e[Po]===!0}var Po;function Fo(){return(Fo=e((()=>{Po=Symbol(`table-item-data`)})))()}function Io(e){let{trProps:t,row:n,renderRowPreview:r=Bo}=e,{instanceId:i}=ao(),a=$a(),o=(0,Ro.useRef)(null),[s,c]=(0,Ro.useState)(Vo),l=(0,Ro.useRef)(null);(0,Ro.useEffect)(()=>{if(a)return;let e=o.current;D(e,`tr ref is null`),D(l.current,`dragHandleRef is null`);function t({source:e}){return No(e.data)&&e.data.instanceId===i&&e.data.id!==n.id}let r=Mo(n,i);return(0,H.combine)((0,H.draggable)({element:e,dragHandle:l.current,getInitialData:()=>r,onGenerateDragPreview({nativeSetDragImage:e}){(0,H.setCustomNativeDragPreview)({nativeSetDragImage:e,getOffset:(0,H.pointerOutsideOfPreview)({x:`8px`,y:`8px`}),render({container:e}){return c({type:`preview`,container:e}),()=>c(Ho)}})},onDragStart(){c(Ho)},onDrop(){c(Vo)}}),(0,H.dropTargetForElements)({element:e,canDrop:t,getIsSticky:()=>!1,getData({input:t}){return(0,H.attachClosestEdge)(r,{element:e,input:t,allowedEdges:[`top`,`bottom`]})},onDrag({self:e}){let t=(0,H.extractClosestEdge)(e.data);c(e=>e.type===`is-over`&&e.closestEdge===t?e:{type:`is-over`,closestEdge:t})},onDragLeave(){c(Vo)},onDrop(){c(Vo)}}))},[n,i,a]),To(n.id,o);let u=(0,Ro.useMemo)(()=>({dragHandleRef:l,state:s}),[s]);return(0,Lo.jsxs)(Lo.Fragment,{children:[(0,Lo.jsx)(_o,{value:u,children:(0,Lo.jsx)(`tr`,{...t,ref:o})}),s.type===`preview`&&(0,zo.createPortal)(r(n),s.container)]})}var Lo,H,Ro,zo,Bo,Vo,Ho;function Uo(){return(Uo=e((()=>{Lo=S(),H=gt(),Ro=C(),zo=Ce(),Oo(),jo(),io(),vo(),Fo(),co(),Bo=e=>(0,Lo.jsx)(ko,{row:e}),Vo={type:`idle`},Ho={type:`dragging`}})))()}function Wo(){return(Wo=e((()=>{wo(),vo(),Uo(),bo()})))()}function Go(e){let{row:t,trProps:n}=e,r=(0,qo.useRef)(null);return To(t.id,r),(0,Ko.jsx)(`tr`,{ref:r,...n})}var Ko,qo;function Jo(){return(Jo=e((()=>{Ko=S(),qo=C(),Oo()})))()}function Yo(e){let{cell:t,tdStyle:n,getTdProps:r}=e,i=t.column.columnDef.meta?.tdStyle,a=r?.(t),o={...i,...n,...a?.style};return(0,Xo.jsx)(`td`,{...a,style:o,children:$e(t.column.columnDef.cell,t.getContext())})}var Xo;function Zo(){return(Zo=e((()=>{Xo=S(),We()})))()}function Qo(e){let{rows:t,tdStyle:n,getTdProps:r,isReorderingEnabled:i,renderRowPreview:a,virtualizer:o,virtualizeRows:s,emptyContent:c,emptyIcon:l,columns:u}=e,d=(0,as.useMemo)(()=>e.renderRowTr??ns(i,a),[e.renderRowTr,i,a]);if(s){let e=o.getVirtualItems(),[i,a]=e.length>0?[e[0].start-o.options.scrollMargin,o.getTotalSize()-ot(e.at(-1)).end]:[0,0];return(0,U.jsxs)(`tbody`,{children:[i>0&&(0,U.jsx)(`tr`,{children:(0,U.jsx)(`td`,{style:{height:i}})}),e.map((e,i)=>(0,U.jsx)(es,{row:t[e.index],renderRowTr:t=>{let a=ts(t,n,r,{...e,virtualIndex:i});return d(a,t)}},e.index)),e.length===0&&(0,U.jsx)($o,{emptyContent:c,emptyIcon:l,columns:u}),a>0&&(0,U.jsx)(`tr`,{children:(0,U.jsx)(`td`,{style:{height:a}})})]})}return(0,U.jsxs)(`tbody`,{children:[t.map(e=>(0,U.jsx)(es,{row:e,renderRowTr:e=>d(ts(e,n,r),e)},e.id)),t.length===0&&(0,U.jsx)($o,{emptyContent:c,emptyIcon:l,columns:u})]})}function $o(e){let{emptyIcon:t=os,emptyContent:n=`No data`,columns:r}=e;return(0,U.jsx)(`tr`,{children:(0,U.jsx)(`td`,{colSpan:r,children:(0,U.jsxs)(ss,{children:[t,n]})})})}function es({row:e,renderRowTr:t}){return(0,U.jsx)(as.Fragment,{children:t(e)})}function ts(e,t,n,r){return{className:(r?r.index:e.index)%2==0?`odd`:``,style:{position:`relative`},children:e.getVisibleCells().map(e=>(0,U.jsx)(Yo,{cell:e,tdStyle:t,getTdProps:n},e.id)),"data-row-id":e.id}}function ns(e,t){return e?is(t):rs}function rs(e,t){return(0,U.jsx)(Go,{trProps:e,row:t})}function is(e){return(t,n)=>(0,U.jsx)(Io,{trProps:t,row:n,renderRowPreview:e})}var U,as,os,ss;function cs(){return(cs=e((()=>{U=S(),re(),T(),it(),as=C(),Wo(),Jo(),Zo(),os=(0,U.jsx)(Ae,{icon:`eye-off`}),ss=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em;
  gap: 0.5em;
`})))()}var ls;function us(){return(us=e((()=>{Ve(),ft(),rt(),qe(),ls=He({columnVisibilityFeature:Ze,rowSortingFeature:dt,sortedRowModel:ut(),sortFns:{alphanumeric:Je,alphanumericCaseSensitive:Ye,basic:Ue,datetime:Ge,text:Ke,textCaseSensitive:Xe}})})))()}function ds(e){let{header:t,renderHeaderCell:n}=e,r=fs(t);return n?n(r,t):(0,ms.jsx)(`th`,{...r})}function fs(e){let{column:t}=e,n=t.getIsSorted(),r=t.getCanSort(),i=ps(t.columnDef.sortFn)[n||`asc`];return{onClick:r?t.getToggleSortingHandler():void 0,style:{position:`relative`,cursor:r?`pointer`:void 0,...t.columnDef.meta?.thStyle},children:(0,ms.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`5px`},children:[(0,ms.jsx)(`div`,{children:$e(t.columnDef.header,e.getContext())}),n&&(0,ms.jsx)(Ae,{icon:i})]})}}function ps(e){return O(e).with(`auto`,`datetime`,`alphanumeric`,`alphanumericCaseSensitive`,()=>({asc:`sort-asc`,desc:`sort-desc`})).with(`text`,`textCaseSensitive`,()=>({asc:`sort-alphabetical`,desc:`sort-alphabetical-desc`})).with(`basic`,()=>({asc:`sort-numerical`,desc:`sort-numerical-desc`})).otherwise(()=>({asc:`sort-asc`,desc:`sort-desc`}))}var ms;function hs(){return(hs=e((()=>{ms=S(),re(),We(),vt()})))()}function gs(e){let{headers:t,sticky:n,renderHeaderCell:r}=e;return(0,_s.jsx)(`thead`,{style:n?vs:void 0,children:(0,_s.jsx)(`tr`,{children:t.map(e=>(0,_s.jsx)(ds,{header:e,renderHeaderCell:r},e.id))})})}var _s,vs;function ys(){return(ys=e((()=>{_s=S(),hs(),vs={position:`sticky`,top:0,zIndex:10,backgroundColor:`white`}})))()}function bs(e,t){let{reorderItem:n,items:r}=ao(),[,i]=Wa();(0,Ss.useEffect)(()=>{if(!t)return;let a=e.current;D(a,`Missing scroll container ref`);function o({source:e}){return No(e.data)}return(0,xs.combine)((0,xs.monitorForElements)({canMonitor:o,onDrop({location:e,source:t}){let a=e.current.dropTargets[0];if(!a)return;let o=t.data,s=a.data;if(!No(o)||!No(s))return;let c=r.findIndex(e=>e.id===s.id);if(c===-1)return;let l=(0,xs.extractClosestEdge)(s);n({startIndex:o.index,indexOfTarget:c,closestEdgeOfTarget:l}),i(o.id)}}),(0,xs.autoScrollForElements)({canScroll:o,element:a}))},[r,n,e,i,t])}var xs,Ss;function Cs(){return(Cs=e((()=>{xs=gt(),Ss=C(),qa(),Fo(),co()})))()}function ws(e,...t){return String.raw(e,...t.map(e=>CSS.escape(e)))}function Ts(e){let[,t]=Wa(),{scrollToRowRef:n,virtualizeRows:r,scrollRef:i,table:a,virtualizer:o}=e;(0,Es.useImperativeHandle)(n,()=>r?{scrollIntoView(e,n){let r=a.getRowModel().rows,i=r.findIndex(t=>t.id===e);i===-1?console.warn(`Could not scroll to row with ID ${e}, the row does not exist`):(o.scrollToIndex(i,n),n?.flashRow&&n.behavior!==`smooth`&&t(r[i].id))}}:{scrollIntoView(e,n){let r=i.current?.querySelector(ws`tr[data-row-id="${e}"]`);r||console.warn(`Could not scroll to row with ID ${e}, the row does not exist`),r?.scrollIntoView(n),n?.flashRow&&n.behavior!==`smooth`&&t(e)}},[r,i,a,o,t])}var Es;function Ds(){return(Ds=e((()=>{Es=C(),qa()})))()}function Os(e){let{virtualizeRows:t,table:n,virtualizer:r,scrollRef:i,scrollToRowRef:a,isReorderingEnabled:o,children:s}=e;return Ts({virtualizeRows:t,table:n,virtualizer:r,scrollRef:i,scrollToRowRef:a}),t?(0,js.jsx)(ks,{scrollElementRef:i,isReorderingEnabled:o,children:s}):(0,js.jsx)(As,{scrollElementRef:i,enabled:o,children:s})}function ks(e){let{scrollElementRef:t,isReorderingEnabled:n,children:r}=e;return bs(t,n),(0,js.jsx)(Ms,{ref:t,children:r})}function As(e){let{scrollElementRef:t,enabled:n,children:r}=e;return bs(t,n),(0,js.jsx)(js.Fragment,{children:r})}var js,Ms;function Ns(){return(Ns=e((()=>{js=S(),T(),Cs(),Ds(),Ms=E.div`
  height: 100%;
  overflow: auto;
`})))()}function Ps(){return(Ps=e((()=>{S(),T(),E.div`
  position: absolute;
  inset: 2px;
`})))()}function Fs({value:e,...t}){return(0,Is.jsx)(`div`,{...t,children:e===void 0?``:e?`✔`:`✘`})}var Is;function Ls(){return(Ls=e((()=>{Is=S()})))()}function Rs({value:e,fixed:t,...n}){return(0,zs.jsx)(`div`,{...n,children:e===void 0?``:t?e.toFixed(t):e})}var zs;function Bs(){return(Bs=e((()=>{zs=S()})))()}function Vs({value:e,...t}){return(0,Hs.jsx)(Us,{...t,children:e})}var Hs,Us;function Ws(){return(Ws=e((()=>{Hs=S(),T(),Us=E.div`
  text-overflow: ellipsis;
`})))()}function Gs(){return(Gs=e((()=>{S(),T(),E.div`
  font-weight: bold;
`})))()}function Ks(){return(Ks=e((()=>{S()})))()}function qs({value:e,...t}){return(0,Js.jsx)(mt,{data:e,...t})}var Js;function Ys(){return(Ys=e((()=>{Js=S(),ht()})))()}function Xs(){return(Xs=e((()=>{Ps(),Ls(),Bs(),Ws(),Gs(),Ks(),Ys()})))()}function Zs(e){return O(e.getValue()).with(k.string,e=>(0,Qs.jsx)(Vs,{value:e})).with(k.number,e=>(0,Qs.jsx)(Rs,{value:e})).with(k.boolean,e=>(0,Qs.jsx)(Fs,{value:e})).otherwise(e=>(0,Qs.jsx)(Vs,{value:String(e)}))}var Qs;function $s(){return($s=e((()=>{Qs=S(),vt(),Xs()})))()}function ec(e){return(0,tc.useMemo)(()=>e.map(e=>({...e,cell:e.cell??Zs,enableSorting:e.enableSorting??!1})),[e])}var tc;function nc(){return(nc=e((()=>{tc=C(),$s()})))()}function rc(e){let{data:t,columns:n,bordered:r=!1,compact:i=!1,interactive:a=!1,striped:o=!1,noHeader:s=!1,stickyHeader:c=!1,reactTable:l,tableProps:u,className:d,renderRowTr:f,renderHeaderCell:p,tdStyle:m,getTdProps:h,virtualizeRows:g,getRowId:_,onRowOrderChanged:v,renderRowPreview:y,scrollToRowRef:ee,emptyIcon:b,emptyContent:te}=e,ne=!!v,re=(0,ac.useRef)(null),ie=ec(n),ae=tt({...l,features:ls,data:t,columns:ie,getRowId:_}),oe=ct({enabled:g,count:t.length,getScrollElement:()=>re.current,estimateSize:e.virtualizeRows&&e.estimatedRowHeight||(()=>0),overscan:5}),se=(0,ac.useRef)(null),ce;ce=u?.className&&d?`${u.className} ${d}`:d||u?.className;let x=ae.getFlatHeaders();ic(e,x);let le=(0,ac.useMemo)(()=>({className:d,getTdProps:h,renderRowTr:f,columns:n,compact:i}),[d,h,f,n,i]),ue=ae.getRowModel().rows;return(0,W.jsx)(Ja,{children:(0,W.jsx)(no,{value:le,children:(0,W.jsx)(lo,{items:ue,onOrderChanged:e=>{v?.(e.map(e=>e.original))},children:(0,W.jsx)(Os,{virtualizeRows:g,virtualizer:oe,table:ae,scrollRef:g?re:e.scrollableElementRef||se,scrollToRowRef:ee,isReorderingEnabled:ne,children:(0,W.jsxs)(oc,{striped:o,noHeader:s,stickyHeader:c,ref:se,bordered:r,compact:i,interactive:a,...u,className:ce,children:[!s&&(0,W.jsx)(gs,{sticky:c,headers:x,renderHeaderCell:p}),(0,W.jsx)(Qo,{rows:ue,renderRowTr:f,tdStyle:m,getTdProps:h,virtualizer:oe,virtualizeRows:g,renderRowPreview:y,isReorderingEnabled:ne,emptyIcon:b,emptyContent:te,columns:ae.getAllColumns().length})]})})})})})}function ic(e,t){let{onRowOrderChanged:n,getRowId:r}=e;(0,ac.useEffect)(()=>{n&&(r||console.warn("When reordering rows is enabled via the `onRowOrderChanged` prop, the `getRowId` prop must be provided to identify each row unambiguously."),t.some(e=>e.column.getCanSort())&&console.warn("When reordering rows is enabled via the `onRowOrderChanged` prop, none of the columns should be sortable as data order will be overriden by internal sorting."))},[n,r,t])}var W,ac,oc;function sc(){return(sc=e((()=>{W=S(),o(),T(),at(),it(),ac=C(),vt(),Za(),io(),mo(),cs(),us(),ys(),Ns(),nc(),oc=E(ne,{shouldForwardProp:Yr([`striped`,`stickyHeader`,`noHeader`])})`
  /* When using a sticky header, ensure that the borders are located below the last header instead of above the first row. */
  ${e=>O(e).with({stickyHeader:!1,noHeader:!1},()=>``).otherwise(e=>`
      thead tr:last-child {
        box-shadow: inset 0 -1px #11141826;
      }
    
      tbody tr:first-of-type td {
        box-shadow: ${O(e).with({bordered:!0},()=>`inset 1px 0 0 0 #11141826 !important`).otherwise(()=>`none !important`)};
      }
    
      tbody tr:first-of-type td:first-of-type {
        box-shadow: none !important;
      }
    `)}

  /* Blueprint's HTMLTable \`striped\` prop's implementation is based on nth-child odd / even */
  /* We cannot use that with virtualization, so we override its implementation here. */
  tbody tr.odd td {
    background: ${e=>e.striped?`rgba(143, 153, 168, 0.15)`:`inherit`};
  }
`})))()}function cc(){return ze()}function lc(){return(lc=e((()=>{})))()}function uc(){return(uc=e((()=>{sc(),lc(),Jo(),Wo()})))()}function dc(e){let{title:t=`Information`,data:n=Sc,titleStyle:r,inputStyle:i,leftElement:a,rightElement:o}=e,[s,c]=(0,mc.useState)(``),l=(0,mc.useCallback)(e=>{let t=[],n=[],r=[],i=[],a=Object.entries(e);a.sort(([e],[t])=>e.localeCompare(t));for(let[e,o]of a){let a=e.toLowerCase(),c=s.toLowerCase();a===c?t.push({parameter:e,value:o}):a.startsWith(c)?n.push({parameter:e,value:o}):a.includes(c)?r.push({parameter:e,value:o}):pc(o,s)&&i.push({parameter:e,value:o})}return[...t,...n,...r,...i]},[s]),{filteredData:u,total:d,count:f}=(0,mc.useMemo)(()=>{let e=[],t=0,r=0;for(let{data:i,...a}of n){t+=Object.entries(i).length;let n=l(i);n.length!==0&&(e.push({data:n,...a}),r+=n.length)}return{filteredData:e,total:t,count:r}},[n,l]);return(0,G.jsxs)(gc,{children:[(0,G.jsx)(`div`,{style:{padding:`0 5px`,...r},children:t}),(0,G.jsxs)(yc,{tabIndex:0,children:[a,(0,G.jsx)(vc,{placeholder:`Search for a parameter`,value:s,onChange:({target:e})=>{e.value!==void 0&&c(e.value)},style:i,leftIcon:`search`,type:`search`}),(0,G.jsx)(pa,{count:f,total:d}),o]}),(0,G.jsx)(Cc,{filteredData:u})]})}function fc(e){return O(e).with(k.boolean,e=>(0,G.jsx)(Vs,{value:e?`Yes`:`No`})).with(k.number,e=>(0,G.jsx)(Rs,{value:e})).with(k.string,e=>(0,G.jsx)(Vs,{value:e})).with({},e=>(0,G.jsx)(qs,{value:e})).otherwise(e=>(0,G.jsx)(Vs,{value:String(e)}))}function pc(e,t){let n=O(e).with(k.boolean,String).with(k.number,String).with(k.string,e=>e===`true`?`yes`:e===`false`?`no`:e).with({},e=>JSON.stringify(e)).otherwise(()=>null);return n===null||(n=n.toLowerCase(),t=t.toLowerCase(),n.includes(t))}var G,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc;function wc(){return(wc=e((()=>{G=S(),w(),oe(),v(),T(),mc=C(),vt(),pn(),_a(),uc(),Xs(),hc=E(j,{shouldForwardProp:Yr([`open`])})`
  z-index: 1;
  position: sticky;
  height: 30px;
  top: 0;
  .${x} {
    rotate: ${e=>e.open?`90deg`:``};
    transition: all 0.3s ease-in-out;
  }

  cursor: pointer;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  padding: 5px 2px;
  width: 100%;
  &.${he} {
    background-color: white;
  }

  :hover {
    background-color: #f5f5f5;
  }
`,gc=E.div`
  padding: 5px 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`,_c=E(l)`
  overflow: hidden;
`,vc=E(h)`
  flex-grow: 1;
`,yc=E.div`
  padding: 0 5px;
  margin-top: 5px;
  background-color: white;
  top: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
`,bc=cc(),xc=bc.columns([bc.accessor(`parameter`,{header:`Parameter`}),bc.accessor(`value`,{header:`Value`,cell:({getValue:e})=>fc(e())})]),Sc=[],Cc=(0,mc.memo)(e=>{let{filteredData:t}=e,[n,r]=(0,mc.useState)(()=>t.map(({description:e})=>e));return(0,G.jsx)(`div`,{style:{position:`relative`,marginTop:`5px`,display:`flex`,flexDirection:`column`,overflowY:`auto`,flex:1},children:t.map(({description:e,data:t})=>{let i=n.includes(e);return(0,G.jsxs)(`div`,{children:[(0,G.jsx)(hc,{open:i,variant:`minimal`,onClick:()=>r(t=>i?t.filter(t=>t!==e):[...t,e]),alignText:`start`,icon:`chevron-right`,children:e}),(0,G.jsx)(_c,{isOpen:i,children:(0,G.jsx)(rc,{data:t,columns:xc,striped:!0,tableProps:{style:{width:`100%`}},compact:!0})})]},e)})})})})))()}function Tc(){return(Tc=e((()=>{wc()})))()}var Ec;function Dc(){return(Dc=e((()=>{Ec=C(),(0,Ec.createContext)(null)})))()}function Oc(){return(Oc=e((()=>{S(),Dc()})))()}function kc(){return(kc=e((()=>{C(),Dc()})))()}function Ac(){return(Ac=e((()=>{S(),me(),T(),C(),M(),uc(),kc(),E.div`
  display: flex;
  gap: 3px;
`,E.div`
  ::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 7px;
    filter: brightness(60%);
    background-color: ${({pillColor:e})=>e};
  }
`,cc(),E(Oe)`
  min-width: 800px;
  min-height: 500px;
  max-height: 80vh;
  max-width: 1000px;
`})))()}function jc(){return(jc=e((()=>{S(),C(),Ua(),la(),Ac(),kc()})))()}function Mc(){return(Mc=e((()=>{Oc(),Ac(),jc(),kc()})))()}var Nc;function Pc(){return(Pc=e((()=>{T(),Nc=E.div`
  /* html */
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
  width: 100%;
  height: 100%;
  position: relative;

  :fullscreen::backdrop,
  *:fullscreen::backdrop {
    /* Override user agent default */
    background-color: white;
  }
`})))()}function Fc(e){return(0,Ic.jsx)(Oa,{value:e.innerRef,children:e.children})}var Ic;function Lc(){return(Lc=e((()=>{Ic=S(),ka()})))()}function Rc(e){let[t,n]=(0,Bc.useState)(typeof document<`u`?document.body:null),r=(0,Bc.useCallback)(e=>{e!==null&&n(e)},[]);return(0,zc.jsx)(bi,{onToggleError:e.onFullscreenToggleError,children:n=>(0,zc.jsx)(Nc,{id:`root-layout`,ref:e=>{e&&(n.current=e,r(e))},style:{...Vc,...e.style},translate:`no`,children:(0,zc.jsx)(je,{...t?{portalContainer:t}:void 0,children:(0,zc.jsx)(Fc,{innerRef:t,children:(0,zc.jsx)(Xt,{children:e.children})})})})})}var zc,Bc,Vc;function Hc(){return(Hc=e((()=>{zc=S(),te(),f(),Bc=C(),rn(),da(),Pc(),Lc(),c.onlyShowFocusOnTabs(),Vc={width:`100%`,height:`100%`,fontSize:`14px`,display:`flex`,flexDirection:`column`}})))()}function Uc(){return(Uc=e((()=>{Hc()})))()}function Wc(e){let t=Number.parseFloat(e),n=e.replaceAll(/[\d .]/g,``);if(Number.isNaN(t)||n!==`%`&&n!==`px`)throw Error(`SplitPane size must be a number with "%" or "px" unit.`);return{value:t,type:n}}function Gc(e){return`${e.value}${e.type}`}function Kc(e){let{controlledSide:t,direction:n,splitterRef:r,sizeType:i,onSizeChange:a,onResize:o}=e,[s,c]=(0,Yc.useState)(!1),l=(0,Yc.useCallback)(()=>{c(!0)},[]),u=(0,Yc.useRef)(o),d=(0,Yc.useRef)(a);return(0,Yc.useEffect)(()=>{u.current=o,d.current=a},[o,a]),(0,Yc.useEffect)(()=>{if(!s)return;let e=null;function a(a){if(!r.current)return;let{clientX:o,clientY:s}=a,c=r.current.parentElement,l=c.getBoundingClientRect(),u=n===`horizontal`?c.clientWidth:c.clientHeight,f=n===`horizontal`?o-l.left:s-l.top,p=(n===`horizontal`?r.current.clientWidth:r.current.clientHeight)/2,m=t===`start`?f:u-f;i===`px`?(e={value:qc(m-p,{min:0,max:u}),type:i},d.current?.(e)):i===`%`&&(e={value:qc(m/u*100,{min:0,max:100}),type:i},d.current?.(e))}function o(){c(!1),e&&u.current?.(Gc(e))}return window.addEventListener(`pointermove`,a),window.addEventListener(`pointerup`,o),()=>{window.removeEventListener(`pointermove`,a),window.removeEventListener(`pointerup`,o)}},[s,t,n,i,r]),{onPointerDown:l,isResizing:s}}function qc(e,t){return Jc(Math.round((e+2**-52)*100)/100,t)}function Jc(e,t){return Math.min(Math.max(e,t.min),t.max)}var Yc;function Xc(){return(Xc=e((()=>{Yc=C()})))()}function Zc(e){let{direction:t=`horizontal`,controlledSide:n=`start`,defaultSize:r=`50%`,defaultOpen:i=!0,open:a,size:o,onSizeChange:s,closeThreshold:c=null,onResize:l,onOpenChange:u,unmountChildren:d=!1,children:f}=e,[p,m]=et({prop:a,defaultProp:i,onChange:u}),[h,g]=et({prop:o,defaultProp:r,onChange:s}),{type:_,value:v}=Wc(h??r),[y,ee]=(0,rl.useReducer)(()=>!0,!1),b=(0,rl.useRef)(null),{onPointerDown:te,isResizing:ne}=Kc({controlledSide:n,direction:t,splitterRef:b,sizeType:_,onSizeChange(e){ee();let t=Gc(e);g(t)},onResize:l}),[re,ie]=kt(),ae=t===`horizontal`?ie?.width:ie?.height;(0,rl.useEffect)(()=>{c===null||y||ae===void 0||m(ae>=c)},[ae,c,y,m,p]);function oe(){ee(),m(!p)}function se(e){return nl(p??i,n===e,t,v,_)}function ce(e){return!d||tl(p??i,n===e,v,_,ie?t===`horizontal`?ie.width:ie.height:0)}return(0,K.jsxs)(ol,{direction:t,ref:re,children:[f[0]!==null&&ce(`start`)&&(0,K.jsx)($c,{style:se(`start`),children:f[0]}),f[0]!==null&&f[1]!==null&&(0,K.jsx)(Qc,{onDoubleClick:oe,onPointerDown:p?te:void 0,isOpen:p??i,isResizing:ne,direction:t,splitterRef:b}),f[1]!==null&&ce(`end`)&&(0,K.jsx)($c,{style:se(`end`),children:f[1]})]})}function Qc(e){let{onDoubleClick:t,onPointerDown:n,direction:r,isOpen:i,isResizing:a,splitterRef:o}=e;return(0,K.jsx)(al,{onDoubleClick:t,onPointerDown:n,enabled:i,direction:r,isResizing:a,ref:o,children:(0,K.jsx)(sl,{children:r===`horizontal`?`⋮`:`⋯`})})}function $c(e){let{style:t,children:n}=e;return(0,K.jsx)(`div`,{style:t,children:n})}function el(e){return e/=100,(il-e*il)/e}function tl(e,t,n,r,i){return e?r===`%`?n!==(t?0:100):n!==(t?0:i):!t}function nl(e,t,n,r,i){let a=n===`horizontal`,o={display:`flex`,overflow:`hidden`};return e?i===`%`&&r!==0?t?{...o,flex:`100 0 0%`}:{...o,flex:`${el(r)} 0 0%`,[a?`minWidth`:`minHeight`]:0}:t?{...o,[a?`width`:`height`]:r}:{...o,flex:`1 1 0%`,[a?`minWidth`:`minHeight`]:0}:t?{display:`none`}:{flex:`1 1 0%`,...o}}var K,rl,il,al,ol,sl;function cl(){return(cl=e((()=>{K=S(),s(),T(),Qe(),rl=C(),At(),vt(),Xc(),il=100,al=E.div`
  background-color: ${e=>e.isResizing?y.LIGHT_GRAY3:y.LIGHT_GRAY5};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  min-width: 11px;
  touch-action: none;

  :hover {
    background-color: ${e=>e.isResizing?y.LIGHT_GRAY3:y.LIGHT_GRAY4};
  }

  ${e=>O(e.direction).with(`horizontal`,()=>`
        cursor: ${e.enabled?`ew-resize`:`pointer`};
        width: 10px;
      `).with(`vertical`,()=>`
        height: 10px;
        cursor: ${e.enabled?`ns-resize`:`pointer`};
      `).exhaustive()}
`,ol=E.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  ${e=>e.direction===`horizontal`?`min-width: 0;`:`min-height: 0;`}
  flex-direction: ${e=>e.direction===`horizontal`?`row`:`column`};
`,sl=E.div`
  display: flex;
  align-items: center;
  place-content: center;
  font-size: 0.875em;
  max-height: 100%;
`})))()}function ll(){return(ll=e((()=>{cl()})))()}function ul(e,t){return O(e).with(`solid`,()=>``).with(`dashed`,()=>`${4*t} ${4*t}`).with(`dotted`,()=>`${t} ${t}`).with(`dashed-dot`,()=>`${4*t} ${t} ${t} ${t}`).exhaustive()}function dl(){return(dl=e((()=>{vt()})))()}function fl(e){let{stroke:t=`#000000`,strokeOpacity:n=1,strokeWidth:r=1,strokeDasharray:i=`solid`,...a}=e;return(0,pl.jsx)(`line`,{...a,stroke:t,strokeOpacity:n,strokeWidth:r,strokeDasharray:ul(i,r)})}var pl;function ml(){return(ml=e((()=>{pl=S(),dl()})))()}function hl(){return(hl=e((()=>{S()})))()}function gl(e){let{fontWeight:t=`normal`,fontStyle:n=`normal`,...r}=e;return(0,_l.jsx)(`text`,{...r,fontWeight:t,fontStyle:n})}var _l;function vl(){return(vl=e((()=>{_l=S()})))()}var yl;function bl(){return(bl=e((()=>{yl={solid:`solid`,dashed:`dashed`,dotted:`dotted`,"dashed-dot":`dashed-dot`}})))()}function xl(){return(xl=e((()=>{ml(),hl(),vl(),bl()})))()}function Sl(e){return e===void 0?void 0:`danger`}function Cl(){return(0,wl.use)(Tl)}var wl,Tl;function El(){return(El=e((()=>{wl=C(),Tl=(0,wl.createContext)({layout:`stacked`})})))()}function q(e){let{label:t,intent:r=`none`,name:i,required:a,children:o,helpText:s,error:c,layout:l,fullWidth:d=!1,contentFullWidth:f=!1}=e,{layout:p}=Cl(),m=fe(r)??``;return(0,J.jsxs)(Ol,{layout:l||p,className:`${u} ${m}`,children:[t&&(0,J.jsxs)(jl,{layout:l||p,className:n,htmlFor:i,children:[t,` `,a&&(0,J.jsx)(kl,{className:ue,children:`*`})]}),(0,J.jsxs)(Al,{fullWidth:d,layout:l||p,contentFullWidth:f,children:[o,(0,J.jsxs)(Ml,{children:[s&&(0,J.jsx)(Pl,{className:se,children:s}),c&&(0,J.jsx)(Nl,{className:se,children:c})]})]})]})}var J,Dl,Ol,kl,Al,jl,Ml,Nl,Pl;function Y(){return(Y=e((()=>{J=S(),w(),s(),T(),El(),Dl=30,Ol=E.div`
  min-height: ${Dl}px;
  width: 100%;
  display: grid;
  margin: 0;
  grid-template-columns: ${e=>e.layout===`inline`?`[label] 3fr [input] 7fr`:`1fr`};
  gap: 5px 20px;
  grid-template-rows: ${e=>e.layout===`inline`?`auto auto`:`auto`};
`,kl=E.span`
  color: red;
`,Al=E.div`
  display: inline-block;
  grid-column: ${e=>e.fullWidth?`1 / -1`:e.layout===`inline`?`input`:`1 / -1`};
  height: ${e=>e.height===`auto`?e.height:`${e.height}px`};
  width: ${e=>e.contentFullWidth?`100%`:`fit-content`};
  min-width: 180px;
`,jl=E.label`
  padding-top: calc(
    ${Dl}px - ${e=>e.layout===`inline`?26:20}px
  );
  grid-column: ${e=>e.layout===`inline`?`label`:`1 / -1`};
`,Ml=E.div`
  display: flex;
  flex-direction: column;
`,Nl=E.span`
  margin-bottom: 5px;
`,Pl=E(Nl)`
  color: ${y.GRAY1} !important;
`})))()}function Fl(e){let{helpText:t,label:n,...r}=e,i=X(),a=i.getMeta().errors.map(e=>e.message).at(0),o=Sl(a);function s(e){let t=e.target.checked;return i.handleChange(t)}return(0,Il.jsx)(q,{name:i.name,intent:o,error:a,fullWidth:!0,helpText:t,children:(0,Il.jsx)(Ll,{...r,label:n,name:i.name,value:String(i.state.value),checked:i.state.value,onChange:s,onBlur:i.handleBlur})})}var Il,Ll;function Rl(){return(Rl=e((()=>{Il=S(),Pe(),T(),Z(),Y(),Ll=E(d)`
  margin-bottom: 0 !important;
  width: fit-content;
`})))()}function zl(e){let{label:t,helpText:n,layout:r,fullWidth:i,required:a}=e,{presetColors:o,disableAlpha:s,popoverProps:c}=e,l=X(),u=l.getMeta().errors.map(e=>e.message).at(0);function d(e){l.handleChange(e.hex)}return(0,Bl.jsx)(q,{name:l.name,label:t,helpText:n,error:u,layout:r,fullWidth:i,required:a,intent:u?`danger`:`none`,children:(0,Bl.jsx)(Lr,{id:l.name,color:{hex:l.state.value},onChange:d,onBlur:l.handleBlur,presetColors:o,disableAlpha:s,popoverProps:c})})}var Bl;function Vl(){return(Vl=e((()=>{Bl=S(),Jr(),Z(),Y()})))()}function Hl(e){let{children:t,value:n,onChange:r,onBlur:i,step:a=1,min:o,max:s,intent:c,majorStepSize:l,minorStepSize:u,className:d}=e,f=(0,Gl.useRef)(n),p=(0,Gl.useRef)(r),h=(0,Gl.useRef)(0),g=(0,Gl.useRef)(!1);(0,Gl.useEffect)(()=>{function e(e){if(!g.current)return;let t=e.clientX-h.current;if(h.current=e.clientX,e.buttons!==1)return;let n=O(e).with({shiftKey:!0},()=>l??a).with({altKey:!0},()=>u??a).otherwise(()=>a),r=Math.max(m(f.current),m(u??a)),i=Ul(f.current+t*n,r);f.current=_t(i,o,s),p.current(0,String(f.current))}function t(){g.current=!1,i()}return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseup`,t),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseup`,t)}},[l,s,o,u,i,a]);let _=(0,Gl.useCallback)(e=>{g.current=!0,h.current=e.clientX,f.current=n},[n]);return(0,Wl.jsx)(Kl,{onMouseDown:_,className:`${d} ${ye} ${he} ${fe(c)}`,children:(0,Wl.jsx)(ql,{children:t})})}function Ul(e,t){let n=10**t;return Math.round(e*n)/n}var Wl,Gl,Kl,ql;function Jl(){return(Jl=e((()=>{Wl=S(),w(),g(),T(),Gl=C(),vt(),Kl=E.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: ew-resize;
  height: 100%;
  min-height: 30px;
`,ql=E.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`})))()}function Yl(e){let{children:t,layout:n=`stacked`,...r}=e,i=(0,Zl.useMemo)(()=>({layout:n}),[n]);return(0,Xl.jsx)(Tl,{value:i,children:(0,Xl.jsx)(`form`,{...r,children:t})})}var Xl,Zl;function Ql(){return(Ql=e((()=>{Xl=S(),Zl=C(),El()})))()}function $l(){return($l=e((()=>{Ql(),Y(),El()})))()}function eu(e){let{label:t,required:n,helpText:r,placeholder:i,step:a,min:o,max:s,layout:c,fullWidth:l,draggableLabel:u,draggableIntent:d=`success`,hideInput:f=!1,majorStepSize:p,minorStepSize:m,...h}=e,g=X(),_=Sl(g.getMeta().errors.map(e=>e.message).at(0));function v(e,t){return g.handleChange(t)}return(0,tu.jsx)(q,{name:g.name,label:t,intent:_,required:n,helpText:r,layout:c,error:void 0,fullWidth:l,contentFullWidth:!0,children:(0,tu.jsxs)(nu,{children:[!f&&(0,tu.jsx)(be,{...h,id:g.name,name:g.name,stepSize:a,min:o,max:s,majorStepSize:p,minorStepSize:m,value:g.state.value??``,onValueChange:v,onBlur:g.handleBlur,intent:_,placeholder:i,required:n}),(0,tu.jsx)(ru,{value:Number(g.state.value),onBlur:g.handleBlur,onChange:v,step:a,min:o,max:s,majorStepSize:p,minorStepSize:m,intent:d,children:u})]})})}var tu,nu,ru;function iu(){return(iu=e((()=>{tu=S(),p(),T(),Jl(),Z(),$l(),nu=E.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,ru=E(Hl)`
  flex: 1;
`})))()}function au(e){let{label:t,required:n,helpText:r,layout:i,fullWidth:a,...o}=e,s=X(),c=s.getMeta().errors.map(e=>e.message).at(0);function l(e){return s.handleChange(e.target.value)}return(0,ou.jsx)(q,{name:s.name,label:t,intent:c?`danger`:`none`,required:n,error:c,helpText:r,layout:i,fullWidth:a,children:(0,ou.jsx)(h,{...o,id:s.name,name:s.name,onChange:l,onBlur:s.handleBlur,intent:c?`danger`:`none`,value:s.state.value,required:n})})}var ou;function su(){return(su=e((()=>{ou=S(),v(),Z(),Y()})))()}function cu(e){let{label:t,required:n,helpText:r,placeholder:i,step:a,min:o,max:s,layout:c,fullWidth:l,...u}=e,d=X(),f=d.getMeta().errors.map(e=>e.message).at(0),p=Sl(f);function m(e,t){return d.handleChange(t)}return(0,lu.jsx)(q,{name:d.name,label:t,intent:p,required:n,helpText:r,layout:c,error:f,fullWidth:l,children:(0,lu.jsx)(be,{...u,id:d.name,name:d.name,stepSize:a,min:o,max:s,value:d.state.value??``,onValueChange:m,onBlur:d.handleBlur,intent:p,placeholder:i,required:n})})}var lu;function uu(){return(uu=e((()=>{lu=S(),p(),Z(),Y()})))()}function du(e){let{label:t,required:n,helpText:r,layout:i,fullWidth:a,...o}=e,{layout:s}=Cl(),c=(i??s)===`inline`?{inline:!0}:{},l=X(),u=l.getMeta().errors.map(e=>e.message).at(0);function d(e){return l.handleChange(e.currentTarget.value)}return(0,fu.jsx)(q,{name:l.name,label:t,intent:u?`danger`:`none`,required:n,error:u,helpText:r,layout:i,fullWidth:a,children:(0,fu.jsx)(xe,{...c,...o,id:l.name,name:l.name,onBlur:l.handleBlur,selectedValue:l.state.value,onChange:d})})}var fu;function pu(){return(pu=e((()=>{fu=S(),r(),Z(),El(),$l()})))()}function mu(e){let{children:t}=e,n=Ku();return(0,hu.jsx)(j,{intent:`danger`,type:`reset`,onClick:()=>n.reset(),children:t})}var hu;function gu(){return(gu=e((()=>{hu=S(),M(),Z()})))()}function _u(e){let{selected:t,getValue:n,getLabel:r}=e;return(e,{handleClick:i,handleFocus:a,modifiers:o,index:s})=>{let c=r(e),{active:l,disabled:u,matchesPredicate:d}=o;return d?(0,bu.jsx)(ge,{active:l,disabled:u,selected:t===n(e),onClick:i,onFocus:a,roleStructure:`listoption`,text:c},s):null}}function vu(e){return e?.label}function yu(e){return e?.value}var bu;function xu(){return(xu=e((()=>{bu=S(),De()})))()}function Su(e){let{renderButton:t,disabled:n,selected:r,getLabel:i,getValue:a,intent:o,filterable:s=!1,items:c,itemDisabled:l,onChange:u,onBlur:d,name:f=null}=e,p=a??yu,m=i??vu,h=(0,wu.useMemo)(()=>c.find(e=>p(e)===r),[p,c,r]),[g,_]=(0,wu.useState)(h??null),v=(0,wu.useMemo)(()=>_u({selected:r,getValue:p,getLabel:m}),[m,p,r]),y=(0,wu.useCallback)(e=>{let t=p(e);u?.(t,e)},[p,u]);return(0,Cu.jsx)(Te,{filterable:s,items:c,itemDisabled:l,onItemSelect:y,itemRenderer:v,disabled:n,activeItem:g,onActiveItemChange:_,popoverProps:{onOpening:()=>{_(h??null)}},children:t?t({selectedOption:h,error:void 0},d):(0,Cu.jsx)(j,{id:f||void 0,text:m(h)||`Select ...`,endIcon:`double-caret-vertical`,variant:`outlined`,intent:o,disabled:n,style:{minWidth:180},onBlur:d})})}var Cu,wu;function Tu(){return(Tu=e((()=>{Cu=S(),ve(),wu=C(),M(),xu()})))()}function Eu(e){let{label:t,items:n,itemDisabled:r,required:i,helpText:a,layout:o,fullWidth:s,disabled:c,filterable:l,renderButton:u}=e,d=X(),f=d.getMeta().errors.map(e=>e.message).at(0),p=Sl(f);function m(e){return d.handleChange(e)}return(0,Du.jsx)(q,{name:d.name,required:i,label:t,intent:p,helpText:a,error:f,layout:o,fullWidth:s,children:(0,Du.jsx)(Su,{onBlur:d.handleBlur,items:n,itemDisabled:r,selected:d.state.value,onChange:m,intent:p,name:d.name,disabled:c,filterable:l,renderButton:u})})}var Du;function Ou(){return(Ou=e((()=>{Du=S(),Z(),Y(),Tu()})))()}function ku(e){let{intent:t,disabled:n,...r}=e,i=Ku(),a=Be(i.store,e=>e.isSubmitting);return(0,Au.jsx)(j,{...r,intent:t??`primary`,type:`submit`,disabled:n||a})}var Au;function ju(){return(ju=e((()=>{Au=S(),pt(),M(),Z()})))()}function Mu(e){let{label:t,layout:n,helpText:r,fullWidth:i}=e,a=X(),o=a.getMeta().errors.map(e=>e.message).at(0);function s(e){return a.handleChange(e.target.checked)}return(0,Nu.jsx)(q,{name:a.name,error:o,intent:o?`danger`:void 0,label:t,layout:n,helpText:r,fullWidth:i,children:(0,Nu.jsx)(Pu,{name:a.name,id:a.name,value:String(a.state.value),checked:a.state.value,onChange:s,onBlur:a.handleBlur})})}var Nu,Pu;function Fu(){return(Fu=e((()=>{Nu=S(),Pe(),T(),Z(),Y(),Pu=E(b)`
  margin: 0 !important;
  height: 30px;
  display: flex;
  align-items: center;
`})))()}function Iu(e){let{label:t,required:n,helpText:r,layout:i,fullWidth:a,...o}=e,s=X(),c=s.getMeta().errors.map(e=>e.message).at(0);function l(e){return s.handleChange(e.target.value)}return(0,Lu.jsx)(q,{name:s.name,label:t,intent:c?`danger`:`none`,required:n,error:c,helpText:r,layout:i,fullWidth:a,contentFullWidth:!0,children:(0,Lu.jsx)(Ru,{...o,id:s.name,name:s.name,onChange:l,onBlur:s.handleBlur,intent:c?`danger`:`none`,value:s.state.value,required:n})})}var Lu,Ru;function zu(){return(zu=e((()=>{Lu=S(),_(),T(),Z(),$l(),Ru=E(a)`
  resize: both;
  max-width: 100%;
`})))()}function Bu(e){let{title:t,description:n,children:r}=e;return(0,Vu.jsxs)(Uu,{children:[(0,Vu.jsxs)(Hu,{children:[(0,Vu.jsx)(`h2`,{children:t}),(0,Vu.jsx)(`h3`,{children:n})]}),(0,Vu.jsx)(Wu,{children:r})]})}var Vu,Hu,Uu,Wu;function Gu(){return(Gu=e((()=>{Vu=S(),T(),Hu=E.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  > h3 {
    color: #737373;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`,Uu=E.div`
  margin-top: 15px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`,Wu=E.div`
  outline: 1px solid rgb(17 24 39 / 5%);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 0.75rem;
  padding: 7px 10px 10px;
`})))()}var Ku,X,qu,Ju,Yu,Xu,Zu,Qu;function Z(){return(Z=e((()=>{lt(),Rl(),Vl(),iu(),su(),uu(),pu(),gu(),Ou(),ju(),Fu(),zu(),Gu(),{useFormContext:Ku,useFieldContext:X,formContext:qu,fieldContext:Ju}=st(),{useAppForm:Yu,withForm:Xu,withFieldGroup:Zu}=nt({fieldContext:Ju,formContext:qu,formComponents:{SubmitButton:ku,ResetButton:mu,Section:Bu},fieldComponents:{Input:au,NumericInput:cu,Checkbox:Fl,Select:Eu,Switch:Mu,ColorPicker:zl,RadioGroup:du,DraggableNumericInput:eu,TextArea:Iu}}),Qu=Yu})))()}var $u,ed;function td(){return(td=e((()=>{T(),$u=E.fieldset`
  display: block;
  border-top: 1px lightgrey groove;
  min-inline-size: min-content;
`,ed=E.legend`
  display: block;
  padding-inline-end: 5px;
`})))()}function nd(e={}){let t=e?.strSchema??Mt(),n=e?.numSchema??Pt(),r=e?.parse??Number;return It(t.optional(),n.optional(),{encode:e=>{if(e!==void 0)return String(e)},decode:e=>{if(!e)return;let t=r(e);if(!Number.isNaN(t))return t}})}function rd(){return(rd=e((()=>{Lt()})))()}var id;function ad(){return(ad=e((()=>{Lt(),rd(),id=Nt({fill:Mt().optional(),fontSize:nd({numSchema:jt().min(1),parse:e=>Math.trunc(Number(e))}),fontStyle:Ft([`normal`,`italic`]).optional(),fontWeight:Ft([`normal`,`bold`]).optional()})})))()}function od(e){let t=id.safeParse(e);if(!t.success)return(0,Q.jsx)(ae,{title:`Cannot render preview with invalid values`,intent:`danger`,children:(0,Q.jsx)(hd,{children:t.error.issues.map(e=>(0,Q.jsxs)(`li`,{children:[e.path.join(`.`),`: `,e.message]},`${e.path.join(`.`)}-${e.code}`))})});let n=t.data.fontSize??16,r=Math.round(n*1.5),i=Math.round(r/4);return(0,Q.jsx)(gd,{children:(0,Q.jsx)(`svg`,{height:r,width:`auto`,children:(0,Q.jsx)(gl,{dominantBaseline:`hanging`,x:0,y:i,...t.data,children:e.children})})})}function sd(e){return e===`bold`}function cd(e){return e?`bold`:`normal`}function ld(e){return e===`italic`}function ud(e){return e?`italic`:`normal`}var Q,dd,fd,pd,md,hd,gd,_d,vd;function yd(){return(yd=e((()=>{Q=S(),ce(),Pe(),T(),xl(),Z(),Y(),td(),ad(),dd=E.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 30px;
`,fd={},pd={label:``},md=Zu({defaultValues:fd,props:pd,render:function({group:e,label:t,previewText:n=`Placeholder`}){return(0,Q.jsxs)($u,{children:[(0,Q.jsx)(ed,{children:t}),(0,Q.jsx)(e.AppField,{name:`fill`,children:e=>(0,Q.jsx)(e.ColorPicker,{label:`Color`})}),(0,Q.jsx)(e.AppField,{name:`fontSize`,children:e=>(0,Q.jsx)(e.NumericInput,{label:`Font size`,min:1})}),(0,Q.jsx)(q,{label:`Font style`,children:(0,Q.jsxs)(dd,{children:[(0,Q.jsx)(e.Field,{name:`fontWeight`,children:e=>(0,Q.jsx)(d,{labelElement:(0,Q.jsx)(_d,{children:`Bold`}),name:e.name,checked:sd(e.state.value),onChange:t=>e.handleChange(cd(t.target.checked)),onBlur:e.handleBlur})}),(0,Q.jsx)(e.Field,{name:`fontStyle`,children:e=>(0,Q.jsx)(d,{labelElement:(0,Q.jsx)(vd,{children:`Italic`}),name:e.name,checked:ld(e.state.value),onChange:t=>e.handleChange(ud(t.target.checked)),onBlur:e.handleBlur})})]})}),(0,Q.jsx)(q,{label:`Preview`,children:(0,Q.jsx)(e.Subscribe,{selector:e=>e.values,children:e=>(0,Q.jsx)(od,{...e,children:n})})})]})}}),hd=E.ul`
  & > li {
    margin-left: 15px;
    list-style: disc;
  }
`,gd=E.div`
  display: flex;
  align-items: center;
  min-height: 30px;
`,_d=E.span`
  font-weight: bold;
`,vd=E.span`
  font-style: italic;
`})))()}var bd;function xd(){return(xd=e((()=>{Lt(),xl(),rd(),bd=Nt({stroke:Mt().trim().regex(/^#[0-9a-fA-F]{6}$/,{message:`Color must be hexadecimal and should not contain alpha`}).optional(),strokeOpacity:nd({numSchema:Pt().min(0).max(1)}),strokeWidth:nd(),strokeDasharray:Ft(yl).optional()})})))()}var $,Sd,Cd,wd,Td,Ed,Dd,Od;function kd(){return(kd=e((()=>{$=S(),T(),Sd=C(),xl(),Z(),Y(),td(),xd(),Cd={},wd={label:``},Td=[{label:`Solid`,value:`solid`},{label:`Dotted`,value:`dotted`},{label:`Dashed`,value:`dashed`},{label:`Dashed Dot`,value:`dashed-dot`}],Ed=Zu({defaultValues:Cd,props:wd,render({group:e,label:t}){return(0,$.jsxs)($u,{children:[(0,$.jsx)(ed,{children:t}),(0,$.jsx)(e.AppField,{name:`stroke`,children:e=>(0,$.jsx)(e.ColorPicker,{label:`Color`,disableAlpha:!0})}),(0,$.jsx)(e.AppField,{name:`strokeOpacity`,children:e=>(0,$.jsx)(e.NumericInput,{label:`Opacity`,min:0,max:1,minorStepSize:.01,step:.05,majorStepSize:.1})}),(0,$.jsx)(e.AppField,{name:`strokeWidth`,children:e=>(0,$.jsx)(e.NumericInput,{label:`Width`})}),(0,$.jsx)(e.AppField,{name:`strokeDasharray`,children:e=>(0,$.jsx)(e.Select,{label:`Style`,items:Td})}),(0,$.jsx)(q,{label:`Preview`,children:(0,$.jsx)(e.Subscribe,{selector:e=>e.values,children:e=>(0,$.jsx)(Od,{...e})})})]})}}),Dd=E.div`
  display: flex;
  align-items: center;
  min-height: 30px;
`,Od=(0,Sd.memo)(function(e){let t=bd.parse(e);return(0,$.jsx)(Dd,{children:(0,$.jsx)(`svg`,{viewBox:`0 0 180 30`,children:(0,$.jsx)(fl,{x1:0,x2:180,y1:15,y2:15,...t,opacity:1})})})})})))()}function Ad(){return(Ad=e((()=>{yd(),ad(),kd(),xd()})))()}function jd(e){return e}var Md,Nd,Pd,Fd;function Id(){return(Id=e((()=>{Md=S(),Z(),Ql(),Nd={children:null},Pd=void 0,Fd=jd(Xu({defaultValues:Pd,props:Nd,render:function(e){let{form:t,children:n,domValidate:r,onSubmitMeta:i,onSubmitStopPropagation:a,...o}=e,{AppForm:s}=t;return(0,Md.jsx)(s,{children:(0,Md.jsx)(Yl,{onSubmit:e=>{e.preventDefault(),a&&e.stopPropagation();let n=i?.(e);t.handleSubmit(n)},...o,noValidate:!r,children:n})})}}))})))()}function Ld(){return(Ld=e((()=>{Id()})))()}function Rd(e=Pt()){return It(Mt(),e,{decode:e=>{let t=Number(e);return Number.isNaN(t)?0:t},encode:String})}function zd(){return(zd=e((()=>{Lt()})))()}function Bd(e){let{active:t=!1,icon:n,onClick:r,tooltip:i,tooltipProps:a,...o}=e,s=wi(n,20);return(0,Vd.jsx)(Hd,{type:`button`,active:t,onClick:r,tooltipProps:i?{content:i,placement:`left`,compact:!1,interactionKind:`hover`,...a}:void 0,...o,children:s})}var Vd,Hd;function Ud(){return(Ud=e((()=>{Vd=S(),t(),w(),s(),T(),M(),Di(),E(ee)`
  flex-wrap: wrap-reverse;
  height: 100%;
  gap: 4px;
  padding: 4px;
  border-left: 1px solid ${y.LIGHT_GRAY4};
  background-color: ${y.WHITE};
`,Hd=E(j)`
  font-size: 1.125em;
  width: fit-content;

  /* Override the padding set by the large button group */
  padding: var(--bp-surface-spacing) calc(var(--bp-surface-spacing) * 2) !important;

  .${x} {
    color: ${y.DARK_GRAY3} !important;
  }

  .${ye} {
    font-size: 12px;
    line-height: 14px;
    min-width: 18px;
    min-height: 18px;
  }
`})))()}function Wd(){return(Wd=e((()=>{Ud()})))()}var Gd,Kd;function qd(){return(qd=e((()=>{S(),s(),T(),M(),Gd=8,Kd=4,E.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: ${y.LIGHT_GRAY5};
  gap: 1px;
  border-left: 1px solid ${y.LIGHT_GRAY4};
`,E.div`
  flex-grow: 1;
  display: flex;
  background-color: ${y.WHITE};
  flex-direction: column;
`,E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Kd}px ${Gd}px ${Kd}px ${Gd}px;
  background-color: ${y.LIGHT_GRAY4};
`,E.div`
  flex-grow: 1;
  padding: ${Gd}px;
`,E.div`
  color: ${y.DARK_GRAY5};
  font-weight: bold;
`})))()}function Jd(){return(Jd=e((()=>{qd()})))()}function Yd(){return(Yd=e((()=>{rn(),M(),Jr(),Zr(),ei(),si(),mi(),da(),Ca(),Ua(),Tc(),Mc(),Uc(),ll(),uc(),la(),Ad(),$l(),Ld(),Z(),zd(),Wd(),Jd(),Sn(),_a(),xl(),Xs()})))()}export{oi as $,dc as A,Fa as B,vl as C,cl as D,Zc as E,sc as F,Sa as G,Na as H,xo as I,Bi as J,Xi as K,wo as L,cc as M,lc as N,Rc as O,rc as P,ti as Q,Ha as R,gl as S,ml as T,ja as U,Pa as V,va as W,yi as X,Ji as Y,hi as Z,Qu as _,zd as a,Sn as at,q as b,Ed as c,nn as ct,bd as d,Jt as dt,Lr as et,md as f,Rt as ft,Z as g,id as h,Rd as i,xn as it,wc as j,Hc as k,kd as l,en as lt,ad as m,Bd as n,Mr as nt,Fd as o,j as ot,yd as p,ca as q,Ud as r,Ir as rt,Id as s,pn as st,Yd as t,Vr as tt,xd as u,Ut as ut,Zu as v,fl as w,Y as x,Xu as y,Ra as z};
//# sourceMappingURL=vendor~index-BXE9gbOO.js.map