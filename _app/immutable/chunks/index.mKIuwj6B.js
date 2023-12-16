import{r as h,n as p,f as v,h as S,i as b,j as C,k as w,l as T,m as j,p as N,q as B,v as D,w as H}from"./scheduler.S4wXxuDW.js";let $=!1;function I(){$=!0}function L(){$=!1}function P(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function q(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const a=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=a?r+1:P(1,r,d=>t[n[d]].claim_order,a))-1;i[s]=n[o]+1;const f=o+1;n[f]=s,r=Math.max(f,r)}const u=[],l=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(t[s-1]);c>=s;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);u.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<u.length&&l[s].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;e.insertBefore(l[s],o)}}function M(e,t){if($){for(q(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Y(e,t,n){$&&!n?M(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function R(e){return document.createElement(e)}function z(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function Z(){return y(" ")}function k(){return y("")}function ee(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function te(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return e.dataset.svelteH}function U(e){return Array.from(e.childNodes)}function V(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,r=!1){V(e);const u=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function E(e,t,n,i){return A(e,r=>r.nodeName===t,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const c=r.attributes[l];n[c.name]||u.push(c.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(t))}function ie(e,t,n){return E(e,t,n,R)}function re(e,t,n){return E(e,t,n,z)}function W(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function se(e){return W(e," ")}function ae(e,t){t=""+t,e.data!==t&&(e.data=t)}function le(e,t){e.value=t??""}function ue(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ce(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${e}_END`?(i-=1,n.push(r)):u===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function fe(e,t){return new e(t)}const m=new Set;let _;function oe(){_={r:0,c:[],p:_}}function _e(){_.r||h(_.c),_=_.p}function F(e,t){e&&e.i&&(m.delete(e),e.i(t))}function de(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function me(e){e&&e.c()}function he(e,t){e&&e.l(t)}function G(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),w(()=>{const u=e.$$.on_mount.map(B).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),r.forEach(w)}function J(e,t){const n=e.$$;n.fragment!==null&&(T(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function K(e,t){e.$$.dirty[0]===-1&&(D.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(e,t,n,i,r,u,l=null,c=[-1]){const s=j;N(e);const a=e.$$={fragment:null,ctx:[],props:u,update:p,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(f,d,...x)=>{const g=x.length?x[0]:d;return a.ctx&&r(a.ctx[f],a.ctx[f]=g)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](g),o&&K(e,f)),d}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){I();const f=U(t.target);a.fragment&&a.fragment.l(f),f.forEach(O)}else a.fragment&&a.fragment.c();t.intro&&F(e.$$.fragment),G(e,t.target,t.anchor),L(),S()}N(s)}class pe{$$=void 0;$$set=void 0;$destroy(){J(this,1),this.$destroy=p}$on(t,n){if(!b(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);export{ee as A,ne as B,ce as C,le as D,pe as S,Y as a,_e as b,se as c,F as d,k as e,O as f,R as g,ie as h,$e as i,U as j,te as k,ue as l,y as m,W as n,ae as o,oe as p,fe as q,me as r,Z as s,de as t,he as u,G as v,J as w,z as x,re as y,M as z};
