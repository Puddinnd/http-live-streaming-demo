import{n as w,r as v,j as B,i as T,k as G,l as H,m as J,p as K,q as Q,v as X,w as M,x as Y,y as Z,z as tt}from"./scheduler.nnTghSvS.js";const q=typeof window<"u";let et=q?()=>window.performance.now():()=>Date.now(),P=q?t=>requestAnimationFrame(t):w;const g=new Set;function I(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&P(I)}function nt(t){let e;return g.size===0&&P(I),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let S=!1;function it(){S=!0}function rt(){S=!1}function st(t,e,n,i){for(;t<e;){const a=t+(e-t>>1);n(a)<=i?t=a+1:e=a}return t}function lt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let a=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,_=(a>0&&e[n[a]].claim_order<=o?a+1:st(1,a,m=>e[n[m]].claim_order,o))-1;i[r]=n[_]+1;const u=_+1;n[u]=r,a=Math.max(u,a)}const c=[],l=[];let s=e.length-1;for(let r=n[a]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);s>=r;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);c.reverse(),l.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<l.length;r++){for(;o<c.length&&l[r].claim_order>=c[o].claim_order;)o++;const _=o<c.length?c[o]:null;t.insertBefore(l[r],_)}}function at(t,e){t.appendChild(e)}function L(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ot(t){const e=F("style");return e.textContent="/* empty */",ct(L(t),e),e.sheet}function ct(t,e){return at(t.head||t,e),e.sheet}function ut(t,e){if(S){for(lt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){S&&!n?ut(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function jt(){return z(" ")}function Rt(){return z("")}function Tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t){return t.dataset.svelteH}function _t(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,a=!1){dt(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,a||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,a?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function V(t,e,n,i){return U(t,a=>a.nodeName===e,a=>{const c=[];for(let l=0;l<a.attributes.length;l++){const s=a.attributes[l];n[s.name]||c.push(s.name)}c.forEach(l=>a.removeAttribute(l))},()=>i(e))}function zt(t,e,n){return V(t,e,n,F)}function Ht(t,e,n){return V(t,e,n,ft)}function mt(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Mt(t){return mt(t," ")}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e){t.value=e??""}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Lt(t,e){const n=[];let i=0;for(const a of e.childNodes)if(a.nodeType===8){const c=a.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(a)):c===`HEAD_${t}_START`&&(i+=1,n.push(a))}else i>0&&n.push(a);return n}function kt(t,e){return new t(e)}const E=new Map;let A=0;function pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function $t(t,e){const n={stylesheet:ot(e),rules:{}};return E.set(t,n),n}function O(t,e,n,i,a,c,l,s=0){const r=16.666/i;let o=`{
`;for(let d=0;d<=1;d+=r){const y=e+(n-e)*c(d);o+=d*100+`%{${l(y,1-y)}}
`}const _=o+`100% {${l(n,1-n)}}
}`,u=`__svelte_${pt(_)}_${s}`,m=L(t),{stylesheet:$,rules:f}=E.get(m)||$t(m,t);f[u]||(f[u]=!0,$.insertRule(`@keyframes ${u} ${_}`,$.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${u} ${i}ms linear ${a}ms 1 both`,A+=1,u}function yt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),a=n.length-i.length;a&&(t.style.animation=i.join(", "),A-=a,A||gt())}function gt(){P(()=>{A||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),E.clear())})}let x;function xt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function R(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const b=new Set;let p;function Ft(){p={r:0,c:[],p}}function Ut(){p.r||v(p.c),p=p.p}function wt(t,e){t&&t.i&&(b.delete(t),t.i(e))}function Vt(t,e,n,i){if(t&&t.o){if(b.has(t))return;b.add(t),p.c.push(()=>{b.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const vt={duration:0};function Wt(t,e,n,i){let c=e(t,n,{direction:"both"}),l=i?0:1,s=null,r=null,o=null,_;function u(){o&&yt(t,o)}function m(f,h){const d=f.b-l;return h*=Math.abs(d),{a:l,b:f.b,d,duration:h,start:f.start,end:f.start+h,group:f.group}}function $(f){const{delay:h=0,duration:d=300,easing:y=G,tick:C=w,css:D}=c||vt,j={start:et()+h,b:f};f||(j.group=p,p.r+=1),"inert"in t&&(f?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),s||r?r=j:(D&&(u(),o=O(t,l,f,d,h,y,D)),f&&C(0,1),s=m(j,d),T(()=>R(t,f,"start")),nt(N=>{if(r&&N>r.start&&(s=m(r,d),r=null,R(t,s.b,"start"),D&&(u(),o=O(t,l,s.b,s.duration,0,y,c.css))),s){if(N>=s.end)C(l=s.b,1-l),R(t,s.b,"end"),r||(s.b?u():--s.group.r||v(s.group.c)),s=null;else if(N>=s.start){const W=N-s.start;l=s.a+s.d*y(W/s.duration),C(l,1-l)}}return!!(s||r)}))}return{run(f){B(c)?xt().then(()=>{c=c({direction:f?"in":"out"}),$(f)}):$(f)},end(){u(),s=r=null}}}function Gt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function Nt(t,e,n){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,n),T(()=>{const c=t.$$.on_mount.map(Y).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),a.forEach(T)}function bt(t,e){const n=t.$$;n.fragment!==null&&(Q(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(Z.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,i,a,c,l=null,s=[-1]){const r=X;M(t);const o=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:a,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:H(),dirty:s,skip_bound:!1,root:e.target||r.$$.root};l&&l(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(u,m,...$)=>{const f=$.length?$[0]:m;return o.ctx&&a(o.ctx[u],o.ctx[u]=f)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](f),_&&Et(t,u)),m}):[],o.update(),_=!0,v(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){it();const u=_t(e.target);o.fragment&&o.fragment.l(u),u.forEach(k)}else o.fragment&&o.fragment.c();e.intro&&wt(t.$$.fragment),Nt(t,e.target,e.anchor),rt(),J()}M(r)}class Qt{$$=void 0;$$set=void 0;$destroy(){bt(this,1),this.$destroy=w}$on(e,n){if(!B(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const At="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(At);export{Tt as A,Pt as B,Wt as C,Dt as D,qt as E,Lt as F,Qt as S,Ct as a,Ut as b,Mt as c,wt as d,Rt as e,k as f,F as g,zt as h,Kt as i,_t as j,Bt as k,It as l,z as m,mt as n,Ot as o,Ft as p,kt as q,Gt as r,jt as s,Vt as t,Jt as u,Nt as v,bt as w,ft as x,Ht as y,ut as z};