(this["webpackJsonplookiero-twitter"]=this["webpackJsonplookiero-twitter"]||[]).push([[0],{145:function(e,t,n){e.exports=n(1462)},1461:function(e,t,n){},1462:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),l=n(24),c=n(1490),u=n(136),s=n(1489),d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,f=Object(u.a)({palette:{primary:{main:"#fff3e0"},secondary:{main:"#fce4ec"},type:d?"dark":"light"}}),m=function(e){return r.a.createElement(s.a,{theme:f},r.a.createElement(c.a,null),e.children)},h=n(1514),p=n(1492),g=n(1493),E=n(1494),v=n(1495),b=n(1496),w=n(134),y=n(84),x=n(94),j=n(86),O=n(95),k=function(e){Object(j.a)(n,e);var t=Object(x.a)(n);function n(e,a){var r;return Object(y.a)(this,n),(r=t.call(this,e)).props=a,r}return n}(Object(O.a)(Error)),I=n(133),U=new(n.n(I).a)({en:{latestPosts:"Latest posts",home:"Home",notFollowingAnybodySelf:"You are not following anybody yet. Let's change it!",notFollowingAnybody:"The user is not following anybody",addPeople:"Add People",searchPeopleInput:"Search people",follow:"Follow",unfollow:"Unfollow",whatsHappening:"What's happening?",post:"Post",somethingWentWrong:"Something went wrong",reloadPage:"Please reload the page",reload:"Reload",userNotFound:"User not found",emptyUsers:"No users",userNotFoundDescription:"You are probably opening a profile of a user which does not exist anymore because the database is refreshed on every run.",following:"Following",noPosts:"No posts"}}),C=function(e){var t=e.children;return r.a.createElement(w.ErrorBoundary,{FallbackComponent:N,onReset:function(){window.location="/"},onError:function(){console.info("Sending error to external logging service.")}},t)},N=function(e){var t=e.error,n=e.resetErrorBoundary,a=U.somethingWentWrong,o=U.reloadPage;return t instanceof k&&(a=t.props.heading,o=t.props.text),r.a.createElement(h.a,{open:!0,disableBackdropClick:!0,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"xs",fullWidth:!0},r.a.createElement(p.a,{id:"alert-dialog-title"},a),r.a.createElement(g.a,null,r.a.createElement(E.a,{id:"alert-dialog-description"},o)),r.a.createElement(v.a,null,r.a.createElement(b.a,{onClick:n,autoFocus:!0},U.reload)))},P=n(1516),S=n(1497),B=n(1498),D=n(54),F=n(1499),W=n(1515),T=n(1500),M=n(22),A=n(17),L=n(16),J=n(28),H=n(9),Q=n.n(H),_=n(41),q=n(135),R=r.a.createContext(null),G=function(){return r.a.useContext(R)},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.d)(["users",e],function(){var e=Object(_.a)(Q.a.mark((function e(n,a){var r,o;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:if(o=e.sent,!t.unique){e.next=10;break}if(1===o.length){e.next=9;break}throw new Error("Error fetching user");case 9:return e.abrupt("return",o[0]);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{enabled:!t.manual})},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Y(e,Object(J.a)({},t,{unique:!0}))},$=function(e){return"/".concat(e.handle)},z=function(e){return[e.firstName,e.lastName].join(" ")},V=function(e){var t=X(),n=G();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{position:"fixed",color:"default"},r.a.createElement(B.a,null,e.leftButton&&r.a.createElement(e.leftButton,null),r.a.createElement(D.a,{variant:"h6",className:t.title},e.title),n&&r.a.createElement(F.a,{to:$(n),color:"inherit",component:M.b},r.a.createElement(W.a,{src:n.avatar})))))},X=Object(T.a)((function(e){return{root:{flexGrow:1},leftButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.createElement(P.a,{display:"flex",flexDirection:"column",height:1},r.a.createElement(V,e.header),r.a.createElement(P.a,{flex:"0 1 auto"},r.a.createElement(P.a,{height:64})),r.a.createElement(P.a,{display:"flex",flex:"1 1 auto",justifyContent:"center",p:1},e.children))},ee=function(e){var t=e.children,n=K({id:1}),a=R.Provider;if(n.isLoading)return r.a.createElement(Z,null);if(n.isError)throw new k({heading:"Ooops",text:"Logged user not found"});return r.a.createElement(a,{value:n.data},t)},te=n(103),ne=n(51),ae=n(107),re=function(){return window.__lookiterDb||(window.__lookiterDb={}),window.__lookiterDb},oe=function(e,t){return e.filter((function(e){return!Object.keys(t).some((function(n){return void 0!==t[n]&&(Array.isArray(t[n])?!t[n].includes(e[n]):e[n]!==t[n])}))}))},ie=function(e,t){return Math.floor(Math.random()*(t-e)+e)},le=function(e){var t=e.body;try{t=JSON.parse(e.body)}catch(n){}return t},ce=function(e){return function(t,n,a){return new Promise((function(r){setTimeout((function(){return r(n(a.json(e(t,n,a))))}),ue())}))}},ue=function(){return ie(5,1e3)},se=n(35),de=n.n(se),fe=function(){var e=re();e.users=Object(L.a)(Array(10).keys()).map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(J.a)({id:1,firstName:de.a.name.firstName(),lastName:de.a.name.lastName(),handle:de.a.internet.userName(),avatar:de.a.image.avatar(),followingUserIds:[]},e)}({id:e+1,followingUserIds:[]})})),e.posts=e.users.reduce((function(e,t){var n=t.id;return[].concat(Object(L.a)(e),Object(L.a)(Object(L.a)(Array(5).keys()).map((function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(J.a)({id:1,authorUserId:1,text:de.a.lorem.sentence(),createdTime:de.a.date.past()},e)}({id:t+e.length+1,authorUserId:n})}))))}),[]),console.log("\ud83d\udece ","db",e)},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fulltext,n=Object(ae.a)(e,["fulltext"]),a=oe(re().users,n);return t&&(a=a.filter((function(e){return[e.firstName,e.lastName,e.handle].map((function(e){return e.toLowerCase()})).some((function(e){return e.includes(t.toLowerCase())}))}))),a},he=[ne.c.post("*/users",ce((function(e){return me(le(e))}))),ne.c.put("*/users",ce((function(e){return function(e){var t=e.id,n=Object(ae.a)(e,["id"]),a=me({id:t})[0];return Object.assign(a,n),{success:!0}}(le(e))}))),ne.c.post("*/posts",ce((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.authorUserId,n=oe(re().posts,{authorUserId:t}),a=n.map((function(e){var t=me({id:e.authorUserId}).pop();return Object(J.a)({},e,{author:t})}));return a.sort((function(e,t){return e.createdTime>t.createdTime?-1:1})),a}(le(e))}))),ne.c.put("*/posts",ce((function(e){return t=le(e),re().posts.push(Object(J.a)({},t,{id:re().posts.length+1,createdTime:new Date})),{success:!0};var t}))),ne.c.get("*/followers/:id",ce((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return oe(re().users,{id:t})[0]}((t=e.params,Object.keys(t).reduce((function(e,n){return e[n]=parseInt(t[n]),e}),{})));var t})))],pe=n(14),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=K({id:e.userId}),n=Y({id:t.data&&t.data.followingUserIds},{manual:!0});return t.data&&!n.data&&n.refetch(),n},Ee=n(1502),ve=n(1503),be=n(1504),we=n(1505),ye=n(1506),xe=function(e){var t=G(),n=function(){var e=G(),t=["users",{id:e.id}],n=["posts",{authorUserId:[e.id].concat(Object(L.a)(e.followingUserIds))}],a=Object(l.c)(function(){var t=Object(_.a)(Q.a.mark((function t(n){var a,r;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(J.a)({id:e.id},n),t.next=3,fetch("/users",{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.abrupt("return",r.json());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onMutate:function(e){var n=l.b.getQueryData(t),a=Object(q.a)(n,(function(t){Object.assign(t,e)}));return l.b.setQueryData(t,a),{loggedUserData:n}},onError:function(e,n,a){var r=a.loggedUserData;l.b.setQueryData(t,r)},onSettled:function(){l.b.invalidateQueries(t),l.b.invalidateQueries(n)}});return Object(A.a)(a,1)[0]}(),a=Object(pe.g)(),o=function(e){return t.followingUserIds.includes(e)};return e.users.length?r.a.createElement(Ee.a,{style:{width:"100%"}},e.users.map((function(i){return r.a.createElement(ve.a,{key:i.id,onClick:function(){return a.push($(i))},style:{cursor:"pointer"}},r.a.createElement(be.a,null,r.a.createElement(W.a,{src:i.avatar})),r.a.createElement(we.a,null,r.a.createElement(D.a,null,z(i)),r.a.createElement(D.a,null,"@",i.handle)),!e.hideButton&&r.a.createElement(ye.a,null,r.a.createElement(b.a,{variant:"outlined",onClick:(l=i.id,function(){var e=t.followingUserIds;e=o(l)?e.filter((function(e){return e!==l})):[].concat(Object(L.a)(t.followingUserIds),[l]),n({followingUserIds:e})})},o(i.id)?U.unfollow:U.follow)));var l}))):r.a.createElement(P.a,{display:"flex",justifyContent:"center",my:3},e.emptyMessage||U.emptyUsers)},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ge(e.filter);return t.isLoading||!t.data?"":r.a.createElement(P.a,{display:"flex",flexDirection:"column",width:1,alignItems:"center"},r.a.createElement(P.a,{width:1,maxHeight:e.maxHeight,overflow:"scroll"},r.a.createElement(xe,{users:t.data,emptyMessage:e.emptyMessage,hideButton:e.hideButton})),e.canEdit&&r.a.createElement(P.a,{display:"flex",justifyContent:"center",marginTop:1},r.a.createElement(b.a,{variant:"contained",to:"/search-people",component:M.b},U.addPeople)))},Oe=n(1517),ke=function(e){var t=Object(pe.g)();return r.a.createElement(F.a,{onClick:t.goBack,"aria-label":"back"},r.a.createElement(Oe.a,null))},Ie=function(){var e=G(),t=Object(pe.h)().handle,n=K({handle:t});if(n.isError)throw new k(n.error.message,{heading:U.userNotFound,text:U.userNotFoundDescription});return r.a.createElement(Z,{header:{leftButton:ke,title:U.following}},n.data&&r.a.createElement(je,{filter:{userId:n.data.id},canEdit:n.data.id===e.id,emptyMessage:n.data.id===e.id?U.notFollowingAnybodySelf:U.notFollowingAnybody}))},Ue=n(1507),Ce=function(e){return r.a.createElement(P.a,{my:2,display:"flex"},r.a.createElement(P.a,{display:"flex",justifyContent:"center",width:80},e.avatar()),r.a.createElement(P.a,{width:1},r.a.createElement(P.a,{display:"flex"},e.name(),r.a.createElement(P.a,{marginLeft:1},e.handle())),e.text()))},Ne=function(e){var t=[e.author.firstName,e.author.lastName].filter(Boolean).join(" ");return r.a.createElement(Ce,{avatar:function(){return r.a.createElement(W.a,{src:e.author.avatar})},name:function(){return r.a.createElement(Ue.a,{to:$(e.author),component:M.b,color:"inherit"},r.a.createElement(D.a,{component:"strong",style:{fontWeight:600}},t))},handle:function(){return r.a.createElement(D.a,null,"@",e.author.handle)},text:function(){return r.a.createElement(D.a,null,e.text)}})},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.d)(["posts",e],function(){var e=Object(_.a)(Q.a.mark((function e(t,n){var a,r,o,i;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.userId,r=n.authorUserId,o=Object(J.a)({},a&&{userId:a},{},r&&{authorUserId:r}),e.next=4,fetch("/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}});case 4:return i=e.sent,e.abrupt("return",i.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{retry:0})},Se=n(25),Be=n(106),De=n(1508),Fe=function(e){var t=Object(Se.a)();return r.a.createElement(Ce,{avatar:function(){return r.a.createElement(De.a,{variant:"circle",width:Object(Be.styles)(t).root.width,height:Object(Be.styles)(t).root.height})},name:function(){return r.a.createElement(De.a,{variant:"text",width:ie(60,120)})},handle:function(){return r.a.createElement(De.a,{variant:"text",width:ie(60,120)})},text:function(){return r.a.createElement(De.a,{variant:"text",width:"".concat(ie(30,90),"%")})}})},We=function(){return Object(L.a)(Array(5).keys()).map((function(e){return r.a.createElement(Fe,{key:e})}))},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Pe(e.filter);return t.isLoading?r.a.createElement(We,null):0===t.data.length?e.empty?e.empty():U.noPosts:r.a.createElement(r.a.Fragment,null,t.data.map((function(e){return r.a.createElement(Ne,Object.assign({key:e.id},e))})))},Me=function(){var e=Object(pe.h)().handle,t=K({handle:e});if(t.isError)throw new k(t.error.message,{heading:U.userNotFound,text:U.userNotFoundDescription});return r.a.createElement(Z,{header:{leftButton:ke}},t.data&&r.a.createElement(P.a,{width:1,maxWidth:600},r.a.createElement(P.a,{display:"flex",justifyContent:"center",my:1},r.a.createElement(W.a,{src:t.data.avatar,style:{height:"150px",width:"150px"}})),r.a.createElement(D.a,{variant:"h4"},z(t.data)),r.a.createElement(D.a,null,"@",t.data.handle),r.a.createElement(Ue.a,{to:"".concat($(t.data),"/following"),color:"inherit",component:M.b},r.a.createElement(D.a,{component:"span"},r.a.createElement("strong",null,t.data.followingUserIds.length)," ",U.following)),r.a.createElement(Te,{filter:{authorUserId:[t.data.id]}})))},Ae=n(1511),Le=function(){var e=G(),t=r.a.useState(""),n=Object(A.a)(t,2),a=n[0],o=n[1],i=Y({fulltext:a},{manual:!0}),l=i.refetch;return r.a.useEffect((function(){a&&l()}),[a,l]),r.a.createElement(P.a,{display:"flex",flexDirection:"column",width:1,alignItems:"center"},r.a.createElement(Ae.a,{value:a,onChange:function(e){var t=e.target;o(t.value)},label:U.searchPeopleInput}),i.isLoading||a&&!i.data?r.a.createElement(P.a,{width:1},r.a.createElement(We,null)):a&&r.a.createElement(xe,{users:i.data.filter((function(t){return t.id!==e.id}))}))},Je=function(){return r.a.createElement(Z,{header:{leftButton:ke,title:U.addPeople}},r.a.createElement(P.a,{width:1,maxWidth:600},r.a.createElement(Le,null)))},He=n(1510),Qe=n(1513),_e=n(1509),qe=function(e){var t=G(),n=function(){var e=G(),t=Object(l.c)(function(){var t=Object(_.a)(Q.a.mark((function t(n){var a,r;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={text:n,authorUserId:e.id},t.next=3,fetch("/posts",{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.abrupt("return",r.json());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(){l.b.invalidateQueries(["posts",{authorUserId:[e.id].concat(Object(L.a)(e.followingUserIds))}])}});return Object(A.a)(t,1)[0]}(),a=r.a.useState(""),o=Object(A.a)(a,2),i=o[0],c=o[1];return r.a.useEffect((function(){}),[i]),r.a.createElement(P.a,{display:"flex"},r.a.createElement(P.a,{display:"flex",justifyContent:"center",width:"80px"},r.a.createElement(W.a,{src:t.avatar})),r.a.createElement(P.a,{width:1},r.a.createElement(_e.a,{value:i,rowsMax:3,"aria-label":"Create post",placeholder:U.whatsHappening,onChange:function(e){var t=e.target;c(t.value)},style:{width:"100%",padding:"10px 0px 10px 0px",border:"none"}}),r.a.createElement(P.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(b.a,{variant:"outlined",onClick:function(){n(i),c("")},disabled:!i},U.post))))},Re=function(){var e=G();return r.a.createElement(Z,{header:{title:U.home}},r.a.createElement(He.a,{container:!0,justify:"center",spacing:3},r.a.createElement(He.a,{item:!0,xs:!0,style:{maxWidth:"600px"}},r.a.createElement(P.a,{py:2},r.a.createElement(qe,null)),r.a.createElement(Te,{filter:{authorUserId:[e.id].concat(Object(L.a)(e.followingUserIds))},empty:function(){return r.a.createElement(je,{filter:{userId:e.id}})}})),r.a.createElement(Qe.a,{smDown:!0},r.a.createElement(He.a,{item:!0,md:4},r.a.createElement(D.a,{variant:"h6"},U.following),r.a.createElement(je,{filter:{userId:e.id},canEdit:!0,hideButton:!0,maxHeight:300})))))},Ge=function(){return r.a.createElement(M.a,{basename:"/lookitter"},r.a.createElement(pe.d,null,r.a.createElement(pe.b,{exact:!0,path:"/"},r.a.createElement(Re,null)),r.a.createElement(pe.b,{path:"/search-people"},r.a.createElement(Je,null)),r.a.createElement(pe.b,{path:"/:handle/following"},r.a.createElement(Ie,null)),r.a.createElement(pe.b,{path:"/:handle"},r.a.createElement(Me,null)),r.a.createElement(pe.a,{to:"/"})))};!function(){var e=te.a.apply(void 0,Object(L.a)(he));e.start({serviceWorker:{url:"/lookitter/mockServiceWorker.js"}}),fe(),window.msw={worker:e,rest:ne.c}}();var Ye={queries:{retry:0,refetchOnWindowFocus:!1}},Ke=function(){return r.a.createElement(m,null,r.a.createElement(C,null,r.a.createElement(l.a,{config:Ye},r.a.createElement(ee,null,r.a.createElement(Ge,null)))))};n(1461),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.87ad97ae.chunk.js.map