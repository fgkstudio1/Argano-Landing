(this.webpackJsonpago_privat_sale=this.webpackJsonpago_privat_sale||[]).push([[0],{157:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"childChainManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},265:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"allocateAmount","type":"uint256"}],"name":"allocated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"limit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"newPresaleLimitAndPrice","type":"event"},{"anonymous":false,"inputs":[],"name":"presaleBegin","type":"event"},{"anonymous":false,"inputs":[],"name":"presaleFInished","type":"event"},{"inputs":[],"name":"AGO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allTimeAllocatedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allTimeDistributedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocateAmount","type":"uint256"}],"name":"allocate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"allocatedAmount","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amout","type":"uint256"}],"name":"buyByUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finish","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"installPresaleLimitAndPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"launch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"launched","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"receiving","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"registerSome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},285:function(e,t,n){},298:function(e,t){},307:function(e,t){},326:function(e,t){},328:function(e,t){},347:function(e,t){},348:function(e,t){},409:function(e,t){},411:function(e,t){},444:function(e,t){},445:function(e,t){},450:function(e,t){},452:function(e,t){},459:function(e,t){},461:function(e,t){},473:function(e,t){},496:function(e,t){},504:function(e,t){},506:function(e,t){},520:function(e,t){},588:function(e,t,n){},593:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(46),r=n.n(i),u=(n(284),n(285),n(97)),p=n(262),o=n.n(p),c=n(31),l=n.n(c),d=n(124),y=n(38),b=(n(588),n.p+"static/media/ago-logo.8ad289bb.svg"),m=n(68),j=n.n(m),f=n(3),h=function(){var e=j()("Oct 1, 2021 09:00:00");e.tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("ha z");var t=function(){var t=j()(),n=e._d-t._d;return{days:Math.floor(n/864e5),hours:Math.floor(n%864e5/36e5),minutes:Math.floor(n%36e5/6e4),seconds:Math.floor(n%6e4/1e3)}};console.log();var n=Object(a.useState)(t()),s=Object(y.a)(n,2),i=s[0],r=s[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){r(t())}),1e3);return function(){return clearTimeout(e)}})),Object(f.jsxs)("div",{className:"app__header__timer",children:[Object(f.jsxs)("div",{className:"app__header__timer__time",children:[" ",Object(f.jsxs)("div",{children:[" ",i.days," "]})," ",Object(f.jsx)("span",{children:" Days "})," ",Object(f.jsx)("span",{className:"divider",children:" : "})," "]}),Object(f.jsxs)("div",{className:"app__header__timer__time",children:[" ",Object(f.jsxs)("div",{children:[" ",i.hours," "]})," ",Object(f.jsx)("span",{children:" Hours "})," ",Object(f.jsx)("span",{className:"divider",children:" : "})," "]}),Object(f.jsxs)("div",{className:"app__header__timer__time",children:["  ",Object(f.jsxs)("div",{children:[" ",i.minutes," "]})," ",Object(f.jsx)("span",{children:" Min "})," ",Object(f.jsx)("span",{className:"divider",children:" : "})," "]}),Object(f.jsxs)("div",{className:"app__header__timer__time",children:["  ",Object(f.jsxs)("div",{children:[" ",i.seconds," "]}),"  ",Object(f.jsx)("span",{children:" Sec "})," "]})]})},O=n.p+"static/media/tether.f010c4b3.svg",x=n(265),T=n(157),v=n(275),_=n(599),g=n(276);var w=function(){var e="0x16b6fE45d791faD5993eaF7FbDc015346b582743",t=Object(u.b)(),n=t.activate,s=t.account,i=t.active,r=t.library,p=t.error,o=t.chainId,c=Object(u.b)();console.log(c);var m=Object(a.useState)(void 0),w=Object(y.a)(m,2),M=w[0],k=w[1],A=Object(a.useState)(0),N=Object(y.a)(A,2),S=N[0],D=N[1],C=Object(a.useState)(void 0),I=Object(y.a)(C,2),E=I[0],R=I[1],F=Object(a.useState)(null),P=Object(y.a)(F,2),z=P[0],B=P[1],H=Object(a.useState)(null),G=Object(y.a)(H,2),L=G[0],$=G[1],U=Object(a.useState)(null),Z=Object(y.a)(U,2),J=Z[0],Y=Z[1],V=Object(a.useState)(null),W=Object(y.a)(V,2),q=W[0],X=W[1],K=Object(a.useState)(0),Q=Object(y.a)(K,2),ee=Q[0],te=Q[1],ne=Object(a.useState)(0),ae=Object(y.a)(ne,2),se=(ae[0],ae[1],j()("Sept 28, 2021 18:00:00")),ie=j()("Sept 28, 2021 18:30:00"),re=j()("Sept 30, 2021, 21:00:00");se.tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("ha z"),ie.tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("ha z"),re.tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("ha z");var ue=new g.a({supportedChainIds:[137]});Object(a.useEffect)((function(){ue.isAuthorized().then((function(e){return k(e)}))}),[]),Object(a.useEffect)((function(){!0===M&&n(ue)}),[M]),Object(a.useEffect)((function(){o?137!==o?(v.b.error({content:"Some error occured please reload page please change network or reload page",key:"cahin_error",duration:9999999}),X(!0)):X(!1):p?(v.b.error({content:"Some error occured please reload page please change network or reload page",key:"cahin_error",duration:999999}),X(!0)):(v.b.success({content:"Everything good",key:"cahin_error",duration:2}),X(!1))}),[p,o]),Object(a.useEffect)((function(){if(i){var t=new r.eth.Contract(T,"0xc2132d05d31c914a87c6611c10748aeb04b58e8f"),n=new r.eth.Contract(x,e),a=new r.eth.Contract(T,"0x4e125214Db26128B35c24c66113C63A83029e433");B(t),$(n),Y(a),t.methods.allowance(s,e).call().then((function(e){k(e>=5e9)}))}}),[i]),Object(a.useEffect)((function(){z&&L&&(z.methods.allowance(s,e).call().then((function(e){console.log(e),R(e>=5e9)})),J.methods.balanceOf(e).call().then((function(e){return te(e/1e18)})))}),[z,L,J]);var pe=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v.b.loading({content:"Approve your USDT",key:"lol",duration:1e4}),t.next=4,z.methods.approve(e,5e9).send({from:s});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),v.b.error(t.t0);case 9:return t.prev=9,v.b.success({content:"Successfully approved",key:"lol",duration:3}),R(!0),t.finish(9);case 13:case"end":return t.stop()}}),t,null,[[0,6,9,13]])})));return function(){return t.apply(this,arguments)}}(),oe=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(S<100)){e.next=3;break}return v.b.error({content:"Mimimal value is 100$."}),e.abrupt("return");case 3:if(!(S>5e3)){e.next=6;break}return v.b.error({content:"Maximum value is 5000$."}),e.abrupt("return");case 6:return e.prev=6,v.b.loading({key:"buy",content:"Proccessing buy",duration:9999999}),e.next=10,L.methods.buyByUsdt(1e6*S).send({from:s});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),v.b.error({key:"buy",content:"Some error occured please reload page",duration:5});case 15:return e.prev=15,v.b.success({key:"buy",content:"Successfully buy AGO token",duration:5}),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[6,12,15,18]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{v.b.loading({key:"connect",content:"Connnecting your wallet",duration:999999}),n(ue)}catch(t){v.b.error({key:"connect",content:"Some error occured",duration:5})}finally{v.b.success({key:"connect",content:"Successfully connected",duration:5})}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){return i?E?Object(f.jsx)("button",{onClick:function(){return oe()},children:" Buy AGO! "}):Object(f.jsx)("button",{onClick:function(){return pe()},children:" Approve "}):Object(f.jsx)("button",{onClick:function(){return ce()},children:" Connect wallet "})},de=function(e,t){return(e-t)/e*100*10};return console.log(ee),console.log(de()),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"app",children:[Object(f.jsxs)("div",{className:"app__header",children:[Object(f.jsx)("img",{src:b}),Object(f.jsx)(h,{}),Object(f.jsxs)("button",{children:[Object(f.jsx)("a",{href:"https://www.argano.io/",children:" Go back "})," "]})]}),Object(f.jsxs)("div",{className:"app__amout-progress-bar",children:[Object(f.jsx)("h3",{children:" Tokens sold "}),Object(f.jsx)("div",{className:"app__amout-progress-bar__bar",children:Object(f.jsx)(_.a,{strokeColor:"#40BA93",status:"active",type:"line",strokeWidth:20,percent:de(2e6,ee),showInfo:!1})})]}),Object(f.jsxs)("div",{className:"app__body-swap",children:[Object(f.jsxs)("div",{className:"app__body-swap__token-info",children:[Object(f.jsx)("span",{children:" Token information "}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Name"})," ",Object(f.jsx)("b",{children:" Argano governance token "})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Token Ticker "})," ",Object(f.jsx)("b",{children:" AGO "})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Total Supply "})," ",Object(f.jsx)("b",{children:" 65,000,000 "})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Decimals "})," ",Object(f.jsx)("b",{children:" 18 "})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Token address "})," ",Object(f.jsxs)("b",{children:[" ",Object(f.jsxs)("a",{href:"https://polygonscan.com/address/0x4e125214Db26128B35c24c66113C63A83029e433",target:"_blank",children:[" 0x4e125214... ",Object(f.jsx)("i",{className:"fas fa-arrow-right"})," "]})," "]})," "]})]}),Object(f.jsxs)("div",{className:"app__body-swap__token-swap",style:{pointerEvents:q?"none":"all"},children:[q?Object(f.jsx)("div",{className:"error-disabled"}):"",Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:" You are paying "}),Object(f.jsx)("input",{min:100,max:5e3,type:"number",placeholder:"Enter amount",value:S,onChange:function(e){return D(e.target.value)}}),Object(f.jsxs)("span",{children:[Object(f.jsx)("img",{src:O})," USDT  "]})]}),Object(f.jsx)(le,{})]}),Object(f.jsxs)("div",{className:"app__body-swap__sale-details",children:[Object(f.jsx)("span",{children:" Sale details "}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Access type"})," ",Object(f.jsx)("b",{children:" Private sale "})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Token price "})," ",Object(f.jsx)("b",{children:" $0.45 "})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:" Purchase range "})," ",Object(f.jsx)("b",{children:" $100-$5,000 "})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:"Start time "})," ",Object(f.jsxs)("b",{children:[" ",ie._d.getDate()," ",ie._locale._months[ie._d.getMonth()].slice(0,3)," ",ie._d.getHours(),":",ie._d.getMinutes()<10?"0"+ie._d.getMinutes():ie._d.getMinutes()," ",Intl.DateTimeFormat().resolvedOptions().timeZone," "]})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:" End time "})," ",Object(f.jsxs)("b",{children:[" ",re._d.getDate()," ",re._locale._months[re._d.getMonth()].slice(0,3)," ",re._d.getHours(),":",re._d.getMinutes()<10?"0"+re._d.getMinutes():re._d.getMinutes()," ",Intl.DateTimeFormat().resolvedOptions().timeZone,"  "]})," "]}),Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("p",{children:" Claim "})," ",Object(f.jsx)("b",{children:" automatic distribution "})," "]})]})]}),Object(f.jsxs)("div",{className:"app__bottom-sec",children:[Object(f.jsxs)("div",{className:"app__bottom-sec__copyright",children:[Object(f.jsxs)("p",{children:[" ",Object(f.jsx)("img",{src:b})," ARGANO "]}),Object(f.jsx)("p",{children:" Copyright @ Argano Team 2021 "})]}),Object(f.jsxs)("div",{className:"app__bottom-sec__note-block",children:[Object(f.jsx)("p",{children:" Note: "}),Object(f.jsx)("p",{children:" 1. You are available to purchase AGO token if your address was whitelisted earlier in the appropriate form. "}),Object(f.jsx)("p",{children:" 2. Protocol accepts deposits only in the following allocation range: $100 - $5,000. In case the depositing amount goes beyond this limit, your transaction will be automatically reverted. "}),Object(f.jsx)("p",{children:" 3. You are available to perform a purchase as many times as you want from your whitelisted address. Any additional attempts to purchase tokens will be accepted, however, take into consideration that the maximum investment size stays untouchable and equals $5,000. "})]}),Object(f.jsx)("div",{className:"app__bottom-sec__social-medias",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("a",{href:"https://github.com/Argano-DEX/Argano-Contracts",target:"_blank",children:Object(f.jsx)("i",{className:"fab fa-github"})}),Object(f.jsxs)("a",{href:"https://argano.medium.com/",target:"_blank",children:[Object(f.jsx)("i",{className:"fab fa-medium"})," "]}),Object(f.jsxs)("a",{href:"https://twitter.com/argano_io",target:"_blank",children:[Object(f.jsx)("i",{className:"fab fa-twitter"})," "]}),Object(f.jsxs)("a",{href:"https://discord.com/invite/mH7PJnNCWP",target:"_blank",children:[Object(f.jsx)("i",{className:"fab fa-discord"})," "]}),Object(f.jsxs)("a",{href:"https://t.me/ARGANO_DEFI",target:"_blank",children:[Object(f.jsx)("i",{className:"fab fa-telegram-plane"})," "]}),Object(f.jsxs)("a",{href:"mailto:email@argano.io",target:"_blank",children:[Object(f.jsx)("i",{className:"far fa-envelope"})," "]})]})})]})]})})};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(u.a,{getLibrary:function(e){return new o.a(e)},children:Object(f.jsx)(w,{})})}),document.getElementById("root"))}},[[593,1,2]]]);
//# sourceMappingURL=main.0ab40bfb.chunk.js.map