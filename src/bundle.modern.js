var n,t,e,i,r,u,l={},o=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(n,t){for(var e in t)n[e]=t[e];return n}function c(n){var t=n.parentNode;t&&t.removeChild(n)}function s(n,t,e){var i,r=arguments,u={};for(i in t)"key"!==i&&"ref"!==i&&(u[i]=t[i]);if(arguments.length>3)for(e=[e],i=3;i<arguments.length;i++)e.push(r[i]);if(null!=e&&(u.children=e),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===u[i]&&(u[i]=n.defaultProps[i]);return m(n,u,t&&t.key,t&&t.ref,null)}function m(t,e,i,r,u){var l={type:t,props:e,key:i,ref:r,i:null,u:null,o:0,s:null,m:void 0,v:null,constructor:void 0,h:u};return null==u&&(l.h=l),n.vnode&&n.vnode(l),l}function v(n){return n.children}function d(n,t){this.props=n,this.context=t}function h(n,t){if(null==t)return n.u?h(n.u,n.u.i.indexOf(n)+1):null;for(var e;t<n.i.length;t++)if(null!=(e=n.i[t])&&null!=e.s)return e.s;return"function"==typeof n.type?h(n):null}function p(n){var t,e;if(null!=(n=n.u)&&null!=n.v){for(n.s=n.v.base=null,t=0;t<n.i.length;t++)if(null!=(e=n.i[t])&&null!=e.s){n.s=n.v.base=e.s;break}return p(n)}}function y(u){(!u.m&&(u.m=!0)&&t.push(u)&&!e++||r!==n.debounceRendering)&&((r=n.debounceRendering)||i)(g)}function g(){for(var n;e=t.length;)n=t.sort(function(n,t){return n.h.o-t.h.o}),t=[],n.some(function(n){var t,e,i,r,u,l,o;n.m&&(l=(u=(t=n).h).s,(o=t.p)&&(e=[],(i=f({},u)).h=i,r=M(o,u,i,t.g,void 0!==o.ownerSVGElement,null,e,null==l?h(u):l),N(e,u),r!=l&&p(u)))})}function w(n,t,e,i,r,u,a,f,s){var m,v,d,p,y,g,w,b=e&&e.i||o,_=b.length;if(f==l&&(f=null!=u?u[0]:_?h(e,0):null),m=0,t.i=k(t.i,function(e){if(null!=e){if(e.u=t,e.o=t.o+1,null===(d=b[m])||d&&e.key==d.key&&e.type===d.type)b[m]=void 0;else for(v=0;v<_;v++){if((d=b[v])&&e.key==d.key&&e.type===d.type){b[v]=void 0;break}d=null}if(p=M(n,e,d=d||l,i,r,u,a,f,s),(v=e.ref)&&d.ref!=v&&(w||(w=[]),d.ref&&w.push(d.ref,null,e),w.push(v,e.v||p,e)),null!=p){var o;if(null==g&&(g=p),void 0!==e.m)o=e.m,e.m=void 0;else if(u==d||p!=f||null==p.parentNode){n:if(null==f||f.parentNode!==n)n.appendChild(p),o=null;else{for(y=f,v=0;(y=y.nextSibling)&&v<_;v+=2)if(y==p)break n;n.insertBefore(p,f),o=f}"option"==t.type&&(n.value="")}f=void 0!==o?o:p.nextSibling,"function"==typeof t.type&&(t.m=f)}else f&&d.s==f&&f.parentNode!=n&&(f=h(d))}return m++,e}),t.s=g,null!=u&&"function"!=typeof t.type)for(m=u.length;m--;)null!=u[m]&&c(u[m]);for(m=_;m--;)null!=b[m]&&I(b[m],b[m]);if(w)for(m=0;m<w.length;m++)T(w[m],w[++m],w[++m])}function k(n,t,e){if(null==e&&(e=[]),null==n||"boolean"==typeof n)t&&e.push(t(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)k(n[i],t,e);else e.push(t?t("string"==typeof n||"number"==typeof n?m(null,n,null,null,n):null!=n.s||null!=n.v?m(n.type,n.props,n.key,null,n.h):n):n);return e}function b(n,t,e){"-"===t[0]?n.setProperty(t,e):n[t]="number"==typeof e&&!1===a.test(t)?e+"px":null==e?"":e}function _(n,t,e,i,r){var u,l,o,a,f;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(u=n.style,"string"==typeof e)u.cssText=e;else{if("string"==typeof i&&(u.cssText="",i=null),i)for(a in i)e&&a in e||b(u,a,"");if(e)for(f in e)i&&e[f]===i[f]||b(u,f,e[f])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),o=t.toLowerCase(),t=(o in n?o:t).slice(2),e?(i||n.addEventListener(t,x,l),(n.l||(n.l={}))[t]=e):n.removeEventListener(t,x,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in n?n[t]=null==e?"":e:"function"!=typeof e&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==e||!1===e?n.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),e):null==e||!1===e&&!/^ar/.test(t)?n.removeAttribute(t):n.setAttribute(t,e))}function x(t){this.l[t.type](n.event?n.event(t):t)}function M(t,e,i,r,u,l,o,a,c){var s,m,h,p,y,g,k,b,_,x,M=e.type;if(void 0!==e.constructor)return null;(s=n.o)&&s(e);try{n:if("function"==typeof M){if(b=e.props,_=(s=M.contextType)&&r[s.v],x=s?_?_.props.value:s.u:r,i.v?k=(m=e.v=i.v).u=m.k:("prototype"in M&&M.prototype.render?e.v=m=new M(b,x):(e.v=m=new d(b,x),m.constructor=M,m.render=C),_&&_.sub(m),m.props=b,m.state||(m.state={}),m.context=x,m.g=r,h=m.m=!0,m._=[]),null==m.M&&(m.M=m.state),null!=M.getDerivedStateFromProps&&(m.M==m.state&&(m.M=f({},m.M)),f(m.M,M.getDerivedStateFromProps(b,m.M))),p=m.props,y=m.state,h)null==M.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m._.push(m.componentDidMount);else{if(null==M.getDerivedStateFromProps&&b!==p&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(b,x),!m.s&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(b,m.M,x)||e.h===i.h&&!m.u){for(m.props=b,m.state=m.M,e.h!==i.h&&(m.m=!1),m.h=e,e.s=i.s,e.i=i.i,m._.length&&o.push(m),s=0;s<e.i.length;s++)e.i[s]&&(e.i[s].u=e);break n}null!=m.componentWillUpdate&&m.componentWillUpdate(b,m.M,x),null!=m.componentDidUpdate&&m._.push(function(){m.componentDidUpdate(p,y,g)})}m.context=x,m.props=b,m.state=m.M,(s=n.N)&&s(e),m.m=!1,m.h=e,m.p=t,s=m.render(m.props,m.state,m.context),e.i=null!=s&&s.type==v&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=m.getChildContext&&(r=f(f({},r),m.getChildContext())),h||null==m.getSnapshotBeforeUpdate||(g=m.getSnapshotBeforeUpdate(p,y)),w(t,e,i,r,u,l,o,a,c),m.base=e.s,m._.length&&o.push(m),k&&(m.k=m.u=null),m.s=!1}else null==l&&e.h===i.h?(e.i=i.i,e.s=i.s):e.s=O(i.s,e,i,r,u,l,o,c);(s=n.diffed)&&s(e)}catch(t){e.h=null,n.s(t,e,i)}return e.s}function N(t,e){n.v&&n.v(e,t),t.some(function(e){try{t=e._,e._=[],t.some(function(n){n.call(e)})}catch(t){n.s(t,e.h)}})}function O(n,t,e,i,r,u,a,f){var c,s,m,v,d,h=e.props,p=t.props;if(r="svg"===t.type||r,null!=u)for(c=0;c<u.length;c++)if(null!=(s=u[c])&&((null===t.type?3===s.nodeType:s.localName===t.type)||n==s)){n=s,u[c]=null;break}if(null==n){if(null===t.type)return document.createTextNode(p);n=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,p.is&&{is:p.is}),u=null,f=!1}if(null===t.type)h!==p&&n.data!=p&&(n.data=p);else{if(null!=u&&(u=o.slice.call(n.childNodes)),m=(h=e.props||l).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!f){if(h===l)for(h={},d=0;d<n.attributes.length;d++)h[n.attributes[d].name]=n.attributes[d].value;(v||m)&&(v&&m&&v.O==m.O||(n.innerHTML=v&&v.O||""))}(function(n,t,e,i,r){var u;for(u in e)"children"===u||"key"===u||u in t||_(n,u,null,e[u],i);for(u in t)r&&"function"!=typeof t[u]||"children"===u||"key"===u||"value"===u||"checked"===u||e[u]===t[u]||_(n,u,t[u],e[u],i)})(n,p,h,r,f),v?t.i=[]:(t.i=t.props.children,w(n,t,e,i,"foreignObject"!==t.type&&r,u,a,l,f)),f||("value"in p&&void 0!==(c=p.value)&&c!==n.value&&_(n,"value",c,h.value,!1),"checked"in p&&void 0!==(c=p.checked)&&c!==n.checked&&_(n,"checked",c,h.checked,!1))}return n}function T(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){n.s(t,i)}}function I(t,e,i){var r,u,l;if(n.unmount&&n.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.s||T(r,null,e)),i||"function"==typeof t.type||(i=null!=(u=t.s)),t.s=t.m=void 0,null!=(r=t.v)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){n.s(t,e)}r.base=r.p=null}if(r=t.i)for(l=0;l<r.length;l++)r[l]&&I(r[l],e,i);null!=u&&c(u)}function C(n,t,e){return this.constructor(n,e)}function j(t,e,i){var r,a,f;n.u&&n.u(t,e),a=(r=i===u)?null:i&&i.i||e.i,t=s(v,null,[t]),f=[],M(e,(r?e:i||e).i=t,a||l,l,void 0!==e.ownerSVGElement,i&&!r?[i]:a?null:o.slice.call(e.childNodes),f,i||l,r),N(f,t)}n={s:function(n,t){for(var e,i;t=t.u;)if((e=t.v)&&!e.u)try{if(e.constructor&&null!=e.constructor.getDerivedStateFromError&&(i=!0,e.setState(e.constructor.getDerivedStateFromError(n))),null!=e.componentDidCatch&&(i=!0,e.componentDidCatch(n)),i)return y(e.k=e)}catch(t){n=t}throw n}},d.prototype.setState=function(n,t){var e;e=this.M!==this.state?this.M:this.M=f({},this.state),"function"==typeof n&&(n=n(e,this.props)),n&&f(e,n),null!=n&&this.h&&(t&&this._.push(t),y(this))},d.prototype.forceUpdate=function(n){this.h&&(this.s=!0,n&&this._.push(n),y(this))},d.prototype.render=v,t=[],e=0,i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=l;var P=function(n,t,e,i){var r;t[0]=0;for(var u=1;u<t.length;u++){var l=t[u++],o=t[u]?(t[0]|=l?1:2,e[t[u++]]):t[++u];3===l?i[0]=o:4===l?i[1]=Object.assign(i[1]||{},o):5===l?(i[1]=i[1]||{})[t[++u]]=o:6===l?i[1][t[++u]]+=o+"":l?(r=n.apply(o,P(n,o,e,["",null])),i.push(r),o[0]?t[0]|=2:(t[u-2]=0,t[u]=r)):i.push(o)}return i},S=new Map;(function(n){var t=S.get(this);return t||(t=new Map,S.set(this,t)),(t=P(this,t.get(n)||(t.set(n,t=function(n){for(var t,e,i=1,r="",u="",l=[0],o=function(n){1===i&&(n||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,n,r):3===i&&(n||r)?(l.push(3,n,r),i=2):2===i&&"..."===r&&n?l.push(4,n,0):2===i&&r&&!n?l.push(5,0,!0,r):i>=5&&((r||!n&&5===i)&&(l.push(i,0,r,e),i=6),n&&(l.push(i,n,0,e),i=6)),r=""},a=0;a<n.length;a++){a&&(1===i&&o(),o(a));for(var f=0;f<n[a].length;f++)t=n[a][f],1===i?"<"===t?(o(),l=[l],i=3):r+=t:4===i?"--"===r&&">"===t?(i=1,r=""):r=t+r[0]:u?t===u?u="":r+=t:'"'===t||"'"===t?u=t:">"===t?(o(),i=1):i&&("="===t?(i=5,e=r,r=""):"/"===t&&(i<5||">"===n[a][f+1])?(o(),3===i&&(l=l[0]),i=l,(l=l[0]).push(2,0,i),i=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(o(),i=2):r+=t),3===i&&"!--"===r&&(i=4,l=l[0])}return o(),l}(n)),t),arguments,[])).length>1?t:t[0]}).bind(s);var A,F,H,L=0,z=[],E=n.N,$=n.diffed,J=n.v,R=n.unmount;function q(t,e){n._&&n._(F,t,L||e),L=0;var i=F.T||(F.T={u:[],_:[]});return t>=i.u.length&&i.u.push({}),i.u[t]}function B(n){return L=1,function(n,t,e){var i=q(A++,2);return i.v||(i.v=F,i.u=[W(void 0,t),function(t){var e=n(i.u[0],t);i.u[0]!==e&&(i.u[0]=e,i.v.setState({}))}]),i.u}(W,n)}function D(t,e){var i=q(A++,3);!n.M&&V(i.T,e)&&(i.u=t,i.T=e,F.T._.push(i))}function G(n,t){var e=q(A++,7);return V(e.T,t)?(e.T=t,e._=n,e.u=n()):e.u}function K(){z.some(function(t){if(t.p)try{t.T._.forEach(Q),t.T._.forEach(U),t.T._=[]}catch(e){return t.T._=[],n.s(e,t.h),!0}}),z=[]}function Q(n){n.t&&n.t()}function U(n){var t=n.u();"function"==typeof t&&(n.t=t)}function V(n,t){return!n||t.some(function(t,e){return t!==n[e]})}function W(n,t){return"function"==typeof t?t(n):t}n.N=function(n){E&&E(n),A=0,(F=n.v).T&&(F.T._.forEach(Q),F.T._.forEach(U),F.T._=[])},n.diffed=function(t){$&&$(t);var e=t.v;if(e){var i=e.T;i&&i._.length&&(1!==z.push(e)&&H===n.requestAnimationFrame||((H=n.requestAnimationFrame)||function(n){var t,e=function(){clearTimeout(i),cancelAnimationFrame(t),setTimeout(n)},i=setTimeout(e,100);"undefined"!=typeof window&&(t=requestAnimationFrame(e))})(K))}},n.v=function(t,e){e.some(function(t){try{t._.forEach(Q),t._=t._.filter(function(n){return!n.u||U(n)})}catch(i){e.some(function(n){n._&&(n._=[])}),e=[],n.s(i,t.h)}}),J&&J(t,e)},n.unmount=function(t){R&&R(t);var e=t.v;if(e){var i=e.T;if(i)try{i.u.forEach(function(n){return n.t&&n.t()})}catch(t){n.s(t,e.h)}}};var X=[{name:"the future"},{name:"architecture"},{name:"my work"},{name:"your work"},{name:"collaboration"},{name:"dank memes"},{name:"OOP vs. Functional"},{name:"design"},{name:"guitar"},{name:"inspirational people"},{name:"love"},{name:"travel"},{name:"singularity"},{name:"creativity"},{name:"coding"},{name:"mixed, virtual, augmented reality"},{name:"art"},{name:"imagination"},{name:"installation art"},{name:"problem solving"},{name:"space"},{name:"cooking"},{name:"FOMO"},{name:"ontological design"},{name:"flow state"},{name:"foreign languages"},{name:"streaming on the internet"},{name:"video games"},{name:"coffee"},{name:"crypto currency"},{name:"javascript fatigue"},{name:"framework wars"},{name:"blockchain"},{name:"smart contracts"},{name:"just emailing me"},{name:"wasm"},{name:"rust lang"},{name:"ethereum"},{name:"university"},{name:"engineering software"},{name:"game development"},{name:"sound design"},{name:"lofi hiphop"}],Y="undefined"!=typeof document;function Z(n,t){return Y?n:e=>[s("component-root",{name:t}),s(n,e),s("script",{type:"text/hydration",dangerouslySetInnerHTML:{O:JSON.stringify({props:e})}})]}var nn={Navigation:n=>{var{children:t}=n;return s("div",null,t)},RunningHeader:()=>{var n,t,[e,i]=B(0),[r,u]=B(!0),l=G(()=>function(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}(X),[X]),o=l.length-1;return n=()=>{r&&i((e+1)%o)},t=function(n){return L=5,G(function(){return{current:n}},[])}(()=>{}),D(()=>{t.current=n}),D(()=>{var n=setInterval(()=>t.current(),1e3);return()=>clearInterval(n)},[1e3]),s("p",{className:"font-medium text-xs flex justify-start items-center",onMouseEnter:()=>u(!1),onMouseLeave:()=>u(!0)},s("span",{className:"text-xs pr-2"},"Contact me about"),s("button",{className:"text-xs bg-black text-white py-2 px-2 rounded-full capitalize"},l[e].name))}},tn={};for(var en in nn)tn[en]=Z(nn[en],en);class rn extends HTMLElement{constructor(){super()}connectedCallback(){var n=[],t=this,e={};!function(n,t,e){if("undefined"!=typeof IntersectionObserver){var i=new IntersectionObserver(function(e){e.forEach(e=>{e.isIntersecting&&(i.unobserve(n),t())})},void 0);i.observe(n)}else t()}(this,()=>{for(;t=t.nextSibling;){if("SCRIPT"===t.nodeName&&"text/hydration"===t.getAttribute("type")){try{e=JSON.parse(t.textContent)||{}}catch(n){}break}n.push(t)}this.root={childNodes:n,appendChild:n=>this.parentNode.insertBefore(n,t)},function(n,t){j(n,t,u)}(s(tn[this.getAttribute("name")],e.props),this.root)})}disconnectedCallback(){render(null,this.root)}}customElements.define("component-root",rn);
//# sourceMappingURL=bundle.modern.js.map
