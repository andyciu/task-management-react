(this["webpackJsonptask-management-react"]=this["webpackJsonptask-management-react"]||[]).push([[0],{140:function(e,t,n){},225:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),s=(n(140),n(8)),o=n(49),l=n(3),u=n.n(l),j=n(230),d=n(233),b=n(83),p=n(44),O=n(22),h=n(21),x=n(235),m=n(14),f=n(72),v=n(237),g=n(1),y=function(e){var t=e.title,n=e.icon,r=e.items,c=Object(a.useState)(!0),i=Object(s.a)(c,2),l=i[0],j=i[1],d=function(e){var t=e.eventKey,n=e.onclick,a=e.children,r=e.keystr,c=Object(f.b)(t,(function(){n&&n()}));return Object(g.jsx)(x.a.Link,{className:"sidebar-link",onClick:c,children:a},"link"+r)};return Object(g.jsx)(x.a.Item,{className:u()({open:!l}),children:Object(g.jsxs)(v.a,{children:[Object(g.jsxs)(d,{eventKey:"0",keystr:t,onclick:function(){j(!l)},children:[Object(g.jsx)(h.a,{icon:n,className:"mr-2"}),"\xa0",t,"\xa0",Object(g.jsx)(h.a,{icon:l?O.d:O.e,className:"float-right"})]}),Object(g.jsx)(v.a.Collapse,{eventKey:"0",children:Object(g.jsx)("nav",{className:"nav flex-column",children:r.map((function(e){return Object(g.jsxs)(x.a.Link,{as:o.b,to:e.path,className:"sidebar-link",children:["\xa0\xa0\xa0\xa0\xa0",e.text]},e.path)}))})})]})})},k=function(){return Object(g.jsx)("h2",{children:"Home Page"})},w=n(2),S=n(9),F=n.n(S),C=n(10),L=n(231),N=n(241),T=n(240),I=n(77),D=n.n(I),_=n(102),E=n.n(_),P=n(131),V=function(){return E.a.create({baseURL:"https://immense-lake-41396.herokuapp.com/apis",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},B=E.a.create({baseURL:"https://immense-lake-41396.herokuapp.com/auth",headers:{"Content-type":"application/json"}}),G=function(e,t){if(t){var n="?";for(var a in t){var r=t[a];if(Array.isArray(r))for(var c in r)n=n.concat(a,"=",c,"&");else n=n.concat(a,"=",r,"&")}return e+n}return e},H=function(){var e=Object(C.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().get("/labels/list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().post("/labels/create",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().post("/labels/update",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().post("/labels/deleteL",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=n(132),U=n(238),Y=n(234),K=n(229),J=function(e){var t=e.onFinish,n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),u=l[0],j=l[1],d=Object(a.useState)(!1),b=Object(s.a)(d,2),p=b[0],O=b[1],h=function(){var e=Object(C.a)(F.a.mark((function e(n){var a,r,c,s,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),O(!0),a=n.currentTarget,n.preventDefault(),!1!==a.checkValidity()){e.next=8;break}return j(!1),n.stopPropagation(),e.abrupt("return");case 8:return r=new FormData(n.target),c=Object.fromEntries(r.entries()),s=c,e.next=12,z(s);case 12:o=e.sent,i(!1),t&&t(o);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{variant:"primary",onClick:function(){j(!1),O(!1),i(!0)},children:"Create"}),Object(g.jsxs)(U.a,{show:c,onHide:function(){return i(!1)},placement:"end",children:[Object(g.jsx)(U.a.Header,{closeButton:!0,children:Object(g.jsx)(U.a.Title,{children:"Create Label"})}),Object(g.jsx)(U.a.Body,{children:Object(g.jsxs)(Y.a,{onSubmit:h,noValidate:!0,validated:p,children:[Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"name",children:[Object(g.jsx)(Y.a.Label,{children:"Name"}),Object(g.jsx)(Y.a.Control,{type:"text",placeholder:"Name",name:"name",required:!0}),Object(g.jsx)(Y.a.Control.Feedback,{type:"invalid",children:"Please input label name."})]}),u?Object(g.jsxs)(A.a,{variant:"primary",disabled:!0,children:[Object(g.jsx)(K.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(g.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})]})},R=n(84),W=n.n(R),Q=function(e){var t=e.id,n=e.name,r=e.onFinish,c=Object(a.useState)(!1),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(!1),j=Object(s.a)(u,2),d=j[0],b=j[1],p=Object(a.useState)(!1),O=Object(s.a)(p,2),h=O[0],x=O[1],m=function(){var e=Object(C.a)(F.a.mark((function e(n){var a,c,i,s,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),x(!0),a=n.currentTarget,n.preventDefault(),!1!==a.checkValidity()){e.next=8;break}return b(!1),n.stopPropagation(),e.abrupt("return");case 8:return c=new FormData(n.target),i=Object.fromEntries(c.entries()),s={id:t,name:i.name},e.next=12,M(s);case 12:o=e.sent,l(!1),r&&r(o);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{variant:"primary",onClick:function(){b(!1),x(!1),l(!0)},children:"Edit"}),Object(g.jsxs)(U.a,{show:o,onHide:function(){return l(!1)},placement:"end",children:[Object(g.jsx)(U.a.Header,{closeButton:!0,children:Object(g.jsx)(U.a.Title,{children:"Edit Label"})}),Object(g.jsx)(U.a.Body,{children:Object(g.jsxs)(Y.a,{onSubmit:m,noValidate:!0,validated:h,children:[Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"name",children:[Object(g.jsx)(Y.a.Label,{children:"Name"}),Object(g.jsx)(Y.a.Control,{type:"text",placeholder:"Name",name:"name",defaultValue:n,required:!0}),Object(g.jsx)(Y.a.Control.Feedback,{type:"invalid",children:"Please input label name."})]}),d?Object(g.jsxs)(A.a,{variant:"primary",disabled:!0,children:[Object(g.jsx)(K.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(g.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})]})},X=function(e,t){return e?"asc"===e?Object(g.jsxs)("span",{children:["\xa0\xa0",Object(g.jsx)(h.a,{icon:O.c})]}):"desc"===e?Object(g.jsxs)("span",{children:["\xa0\xa0",Object(g.jsx)(h.a,{icon:O.b})]}):null:Object(g.jsxs)("span",{children:["\xa0\xa0",Object(g.jsx)(h.a,{icon:O.c}),"\xa0",Object(g.jsx)(h.a,{icon:O.b})]})},Z=n(236),$=function(e){var t=e.id,n=e.onFinish,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),j=u[0],d=u[1],b=function(){return o(!1)},p=function(){var e=Object(C.a)(F.a.mark((function e(){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,q({id:t});case 3:a=e.sent,o(!1),n&&n(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{variant:"danger",onClick:function(){d(!1),o(!0)},children:"Delete"}),Object(g.jsxs)(Z.a,{show:i,onHide:b,children:[Object(g.jsx)(Z.a.Header,{children:Object(g.jsx)(Z.a.Title,{children:"\u78ba\u8a8d\u522a\u9664"})}),Object(g.jsx)(Z.a.Body,{children:"\u4f60\u78ba\u8a8d\u8981\u522a\u9664\u9019\u9805\u7d00\u9304\u55ce?"}),Object(g.jsxs)(Z.a.Footer,{children:[Object(g.jsx)(A.a,{variant:"secondary",onClick:b,disabled:j,children:"Close"}),j?Object(g.jsxs)(A.a,{variant:"danger",disabled:!0,children:[Object(g.jsx)(K.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(g.jsx)(A.a,{variant:"danger",onClick:p,children:"Delete"})]})]})]})},ee=n(61),te=function(){return Object(ee.b)()},ne=ee.c,ae=n(52),re=Object(ae.b)({name:"labels",initialState:{value:[]},reducers:{writeData:function(e,t){e.value=t.payload}}}),ce=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:n=e.sent,t(ie(n.content));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=re.actions.writeData,se=re.reducer,oe="00",le=function(){var e=te(),t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(s.a)(i,2),l=(o[0],o[1]),u=Object(a.useState)(!1),d=Object(s.a)(u,2),b=d[0],p=d[1],O=Object(a.useState)(""),h=Object(s.a)(O,2),x=h[0],m=h[1],f=Object(a.useState)(""),v=Object(s.a)(f,2),y=v[0],k=v[1],S=function(){var t=Object(C.a)(F.a.mark((function t(){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,H();case 3:n=t.sent,c(n.content),e(ie(n.content)),l(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=[{dataField:"id",text:"ID",sort:!0,style:{width:"80px"},sortCaret:X},{dataField:"name",text:"Name",sort:!0,sortCaret:X},{dataField:"_action",text:"Action",style:{width:"160px"},align:"center",formatter:function(e,t,n){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Q,Object(w.a)({onFinish:function(e){p(!1),e.code==oe?(m("success"),k("\u4fee\u6539\u6210\u529f")):(m("danger"),k("\u4fee\u6539\u5931\u6557")),p(!0),c([]),S()}},t)),"\xa0",Object(g.jsx)($,{id:t.id,onFinish:function(e){p(!1),e.code==oe?(m("success"),k("\u522a\u9664\u6210\u529f")):(m("danger"),k("\u522a\u9664\u5931\u6557")),p(!0),c([]),S()}})]})}}];return Object(a.useEffect)((function(){S()}),[]),Object(g.jsxs)(j.a,{children:[b?Object(g.jsx)(L.a,{variant:x,children:y},"alertkey"):null,Object(g.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(g.jsx)("h2",{children:"Labels"}),Object(g.jsx)("div",{className:"ms-auto",children:Object(g.jsx)(J,{onFinish:function(e){p(!1),e.code==oe?(m("success"),k("\u65b0\u589e\u6210\u529f")):(m("danger"),k("\u65b0\u589e\u5931\u6557")),p(!0),c([]),S()}})})]}),Object(g.jsx)(D.a,{bootstrap4:!0,keyField:"id",data:r,columns:I,noDataIndication:function(){return Object(g.jsxs)(T.a,{as:"p",animation:"glow",children:[Object(g.jsx)(T.a,{xs:12}),Object(g.jsx)(T.a,{xs:12}),Object(g.jsx)(T.a,{xs:12})]})},pagination:W()({}),defaultSorted:[{dataField:"id",order:"asc"}]})]})},ue=n(232),je=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().get(G("/tasks/list",t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().post("/tasks/create",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().post("/tasks/update",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().post("/tasks/deleteL",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=n(133),he=function(e){return e&&e.length>0?Oe.utc(e).format("YYYY-MM-DD"):""},xe=n(85),me=function(e){var t=te(),n=ne((function(e){return e.labels.value})),r=e.onFinish,c=Object(a.useState)(!1),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(!1),j=Object(s.a)(u,2),d=j[0],b=j[1],p=Object(a.useState)(!1),O=Object(s.a)(p,2),h=O[0],x=O[1],m=Object(a.useState)(!1),f=Object(s.a)(m,2),v=f[0],y=f[1],k=Object(a.useState)([]),w=Object(s.a)(k,2),S=w[0],L=w[1],N=function(){var e=Object(C.a)(F.a.mark((function e(t){var n,a,c,i,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),y(!1),n=t.currentTarget,t.preventDefault(),x(!0),!1!==n.checkValidity()){e.next=9;break}return b(!1),t.stopPropagation(),e.abrupt("return");case 9:if(a=new FormData(t.target),c=Object.fromEntries(a.entries()),(i=c).start_time=i.start_time?new Date(i.start_time).toISOString():void 0,i.end_time=i.end_time?new Date(i.end_time).toISOString():void 0,!i.start_time||!i.end_time){e.next=20;break}if(!(new Date(i.start_time).getTime()>new Date(i.end_time).getTime())){e.next=20;break}return y(!0),x(!1),b(!1),t.stopPropagation(),e.abrupt("return");case 20:return i.labels=S.map((function(e,t){return e.id})),i.priority=i.priority.length>0?i.priority:void 0,i.state=i.state.length>0?i.state:void 0,e.next=25,de(i);case 25:s=e.sent,l(!1),r&&r(s);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){0===n.length&&ce(t)}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{variant:"primary",onClick:function(){b(!1),x(!1),l(!0)},children:"Create"}),Object(g.jsxs)(U.a,{show:o,onHide:function(){return l(!1)},placement:"end",children:[Object(g.jsx)(U.a.Header,{closeButton:!0,children:Object(g.jsx)(U.a.Title,{children:"Create Task"})}),Object(g.jsx)(U.a.Body,{children:Object(g.jsxs)(Y.a,{onSubmit:N,noValidate:!0,validated:h,children:[Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"title",children:[Object(g.jsx)(Y.a.Label,{children:"Title"}),Object(g.jsx)(Y.a.Control,{type:"text",placeholder:"Title",name:"title",required:!0}),Object(g.jsx)(Y.a.Control.Feedback,{type:"invalid",children:"Please input Task title."})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"description",children:[Object(g.jsx)(Y.a.Label,{children:"Description"}),Object(g.jsx)(Y.a.Control,{type:"text",placeholder:"Description",name:"description"})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"start_time",children:[Object(g.jsx)(Y.a.Label,{children:"StartTime"}),Object(g.jsx)(Y.a.Control,{type:"date",placeholder:"StartTime",name:"start_time"})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"end_time",children:[Object(g.jsx)(Y.a.Label,{children:"EndTime"}),Object(g.jsx)(Y.a.Control,{type:"date",placeholder:"EndTime",name:"end_time",isInvalid:v}),Object(g.jsx)(Y.a.Control.Feedback,{type:"invalid",children:"End Time is Invalid"})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"priority",children:[Object(g.jsx)(Y.a.Label,{children:"Priority"}),Object(g.jsxs)(Y.a.Select,{"aria-label":"priority",name:"priority",children:[Object(g.jsx)("option",{value:"",children:"\u8acb\u9078\u64c7..."}),Object(g.jsx)("option",{value:"1",children:"\u4f4e"}),Object(g.jsx)("option",{value:"2",children:"\u4e2d"}),Object(g.jsx)("option",{value:"3",children:"\u9ad8"})]})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"state",children:[Object(g.jsx)(Y.a.Label,{children:"State"}),Object(g.jsxs)(Y.a.Select,{"aria-label":"state",name:"state",children:[Object(g.jsx)("option",{value:"",children:"\u8acb\u9078\u64c7..."}),Object(g.jsx)("option",{value:"1",children:"\u5f85\u8655\u7406"}),Object(g.jsx)("option",{value:"2",children:"\u8655\u7406\u4e2d"}),Object(g.jsx)("option",{value:"3",children:"\u5df2\u5b8c\u6210"})]})]}),Object(g.jsxs)(Y.a.Group,{controlId:"labels",children:[Object(g.jsx)(Y.a.Label,{children:"Labels"}),Object(g.jsx)(xe.a,{options:n,isMulti:!0,closeMenuOnSelect:!1,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id.toString()},onChange:function(e){var t=Object.assign([],e);L(t)}})]}),Object(g.jsx)("br",{}),d?Object(g.jsxs)(A.a,{variant:"primary",disabled:!0,children:[Object(g.jsx)(K.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(g.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})]})},fe=function(e){var t=e.id,n=e.onFinish,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),j=u[0],d=u[1],b=function(){return o(!1)},p=function(){var e=Object(C.a)(F.a.mark((function e(){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,pe({id:t});case 3:a=e.sent,o(!1),n&&n(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{variant:"danger",onClick:function(){d(!1),o(!0)},children:"Delete"}),Object(g.jsxs)(Z.a,{show:i,onHide:b,children:[Object(g.jsx)(Z.a.Header,{children:Object(g.jsx)(Z.a.Title,{children:"\u78ba\u8a8d\u522a\u9664"})}),Object(g.jsx)(Z.a.Body,{children:"\u4f60\u78ba\u8a8d\u8981\u522a\u9664\u9019\u9805\u7d00\u9304\u55ce?"}),Object(g.jsxs)(Z.a.Footer,{children:[Object(g.jsx)(A.a,{variant:"secondary",onClick:b,disabled:j,children:"Close"}),j?Object(g.jsxs)(A.a,{variant:"danger",disabled:!0,children:[Object(g.jsx)(K.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(g.jsx)(A.a,{variant:"danger",onClick:p,children:"Delete"})]})]})]})},ve=function(e){var t,n,r=te(),c=ne((function(e){return e.labels.value})),i=e.onFinish,o=e.data,l=Object(a.useState)(!1),u=Object(s.a)(l,2),j=u[0],d=u[1],b=Object(a.useState)(!1),p=Object(s.a)(b,2),O=p[0],h=p[1],x=Object(a.useState)(!1),m=Object(s.a)(x,2),f=m[0],v=m[1],y=Object(a.useState)(!1),k=Object(s.a)(y,2),w=k[0],S=k[1],L=Object(a.useState)([]),N=Object(s.a)(L,2),T=N[0],I=N[1],D=function(){var e=Object(C.a)(F.a.mark((function e(t){var n,a,r,c,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h(!0),S(!1),n=t.currentTarget,t.preventDefault(),v(!0),!1!==n.checkValidity()){e.next=9;break}return h(!1),t.stopPropagation(),e.abrupt("return");case 9:if(a=new FormData(t.target),r=Object.fromEntries(a.entries()),(c=r).id=o.id,c.start_time=c.start_time?new Date(c.start_time).toISOString():void 0,c.end_time=c.end_time?new Date(c.end_time).toISOString():void 0,!c.start_time||!c.end_time){e.next=21;break}if(!(new Date(c.start_time).getTime()>new Date(c.end_time).getTime())){e.next=21;break}return S(!0),v(!1),h(!1),t.stopPropagation(),e.abrupt("return");case 21:return c.labels=T.map((function(e,t){return e.id})),c.priority=c.priority.length>0?c.priority:void 0,c.state=c.state.length>0?c.state:void 0,e.next=26,be(c);case 26:s=e.sent,d(!1),i&&i(s);case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e,t=[];return null===(e=o.labels)||void 0===e||e.forEach((function(e){var n=c.find((function(t){return t.id==e}));n&&t.push(n)})),t};return Object(a.useEffect)((function(){0===c.length&&ce(r),I(_())}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{variant:"primary",onClick:function(){h(!1),v(!1),d(!0)},children:"Edit"}),Object(g.jsxs)(U.a,{show:j,onHide:function(){return d(!1)},placement:"end",children:[Object(g.jsx)(U.a.Header,{closeButton:!0,children:Object(g.jsx)(U.a.Title,{children:"Edit Task"})}),Object(g.jsx)(U.a.Body,{children:Object(g.jsxs)(Y.a,{onSubmit:D,noValidate:!0,validated:f,children:[Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"title",children:[Object(g.jsx)(Y.a.Label,{children:"Title"}),Object(g.jsx)(Y.a.Control,{type:"text",placeholder:"Title",name:"title",defaultValue:o.title,required:!0}),Object(g.jsx)(Y.a.Control.Feedback,{type:"invalid",children:"Please input Task title."})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"description",children:[Object(g.jsx)(Y.a.Label,{children:"Description"}),Object(g.jsx)(Y.a.Control,{type:"text",placeholder:"Description",name:"description",defaultValue:o.description})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"start_time",children:[Object(g.jsx)(Y.a.Label,{children:"StartTime"}),Object(g.jsx)(Y.a.Control,{type:"date",placeholder:"StartTime",name:"start_time",defaultValue:he(null!==(t=o.start_time)&&void 0!==t?t:"")})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"end_time",children:[Object(g.jsx)(Y.a.Label,{children:"EndTime"}),Object(g.jsx)(Y.a.Control,{type:"date",placeholder:"EndTime",name:"end_time",isInvalid:w,defaultValue:he(null!==(n=o.end_time)&&void 0!==n?n:"")}),Object(g.jsx)(Y.a.Control.Feedback,{type:"invalid",children:"End Time is Invalid"})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"priority",children:[Object(g.jsx)(Y.a.Label,{children:"Priority"}),Object(g.jsxs)(Y.a.Select,{"aria-label":"priority",name:"priority",defaultValue:o.priority,children:[Object(g.jsx)("option",{value:"",children:"\u8acb\u9078\u64c7..."}),Object(g.jsx)("option",{value:"1",children:"\u4f4e"}),Object(g.jsx)("option",{value:"2",children:"\u4e2d"}),Object(g.jsx)("option",{value:"3",children:"\u9ad8"})]})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"state",children:[Object(g.jsx)(Y.a.Label,{children:"State"}),Object(g.jsxs)(Y.a.Select,{"aria-label":"state",name:"state",defaultValue:o.state,children:[Object(g.jsx)("option",{value:"",children:"\u8acb\u9078\u64c7..."}),Object(g.jsx)("option",{value:"1",children:"\u5f85\u8655\u7406"}),Object(g.jsx)("option",{value:"2",children:"\u8655\u7406\u4e2d"}),Object(g.jsx)("option",{value:"3",children:"\u5df2\u5b8c\u6210"})]})]}),Object(g.jsxs)(Y.a.Group,{controlId:"labels",children:[Object(g.jsx)(Y.a.Label,{children:"Labels"}),Object(g.jsx)(xe.a,{options:c,isMulti:!0,closeMenuOnSelect:!1,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id.toString()},onChange:function(e){var t=Object.assign([],e);I(t)},defaultValue:_()})]}),Object(g.jsx)("br",{}),O?Object(g.jsxs)(A.a,{variant:"primary",disabled:!0,children:[Object(g.jsx)(K.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(g.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})]})},ge=[{text:"Home",path:"/",exact:!0,component:k},{text:"Tasks",path:"/tasks",component:function(){var e=te(),t=ne((function(e){return e.labels.value})),n=Object(a.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),u=(l[0],l[1]),d=Object(a.useState)(!1),b=Object(s.a)(d,2),p=b[0],O=b[1],h=Object(a.useState)(""),x=Object(s.a)(h,2),m=x[0],f=x[1],v=Object(a.useState)(""),y=Object(s.a)(v,2),k=y[0],w=y[1],S=function(){var e=Object(C.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,je();case 3:t=e.sent,i(t.content),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=[{dataField:"id",text:"ID",sort:!0,style:{width:"80px"},sortCaret:X},{dataField:"title",text:"Title",sort:!0,sortCaret:X},{dataField:"description",text:"Description"},{dataField:"start_time",text:"StartTime",style:{width:"100px"},formatter:function(e,t,n){return Object(g.jsx)(g.Fragment,{children:he(e)})}},{dataField:"end_time",text:"EndTime",style:{width:"100px"},formatter:function(e,t,n){return Object(g.jsx)(g.Fragment,{children:he(e)})}},{dataField:"priority",text:"Priority",sort:!0,sortCaret:X,align:"center",style:{width:"110px"},formatter:function(e,t,n){var a="",r="";switch(e){case 1:a="\u4f4e",r="info";break;case 2:a="\u4e2d",r="primary";break;case 3:a="\u9ad8",r="danger";break;default:a="\u672a\u9078\u64c7",r="secondary"}return Object(g.jsxs)("h5",{children:[e?Object(g.jsx)(ue.a,{pill:!0,bg:r,children:a}):null,"\xa0"]},"badge-priority-".concat(t.id))}},{dataField:"state",text:"State",sort:!0,sortCaret:X,align:"center",style:{width:"100px"},formatter:function(e,t,n){var a="",r="";switch(e){case 1:a="\u5f85\u8655\u7406",r="info";break;case 2:a="\u8655\u7406\u4e2d",r="warning";break;case 3:a="\u5df2\u5b8c\u6210",r="success";break;default:a="\u672a\u9078\u64c7",r="secondary"}return Object(g.jsxs)("h5",{children:[e?Object(g.jsx)(ue.a,{pill:!0,bg:r,children:a}):null,"\xa0"]},"badge-state-".concat(t.id))}},{dataField:"labels",text:"Labels",formatter:function(e,n,a){return null===e||void 0===e?void 0:e.map((function(e,a){return Object(g.jsxs)("a",{children:[Object(g.jsx)(ue.a,{pill:!0,bg:"primary",children:function(){var n="";return t.forEach((function(t){t.id===e&&(n=t.name)})),n}()}),"\xa0"]},"badge-".concat(n.id,"-").concat(a))}))}},{dataField:"_action",text:"Action",style:{width:"160px"},align:"center",formatter:function(e,t,n){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(ve,{onFinish:function(e){O(!1),e.code==oe?(f("success"),w("\u4fee\u6539\u6210\u529f")):(f("danger"),w("\u4fee\u6539\u5931\u6557")),O(!0),i([]),S()},data:t}),"\xa0",Object(g.jsx)(fe,{id:t.id,onFinish:function(e){O(!1),e.code==oe?(f("danger"),w("\u522a\u9664\u6210\u529f")):(f("dark"),w("\u522a\u9664\u5931\u6557")),O(!0),i([]),S()}})]})}}];return Object(a.useEffect)((function(){S(),0===t.length&&ce(e)}),[]),Object(g.jsxs)(j.a,{children:[p?Object(g.jsx)(L.a,{variant:m,children:k},"alertkey"):null,Object(g.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(g.jsx)("h2",{children:"Tasks"}),Object(g.jsx)("div",{className:"ms-auto",children:Object(g.jsx)(me,{onFinish:function(e){O(!1),e.code==oe?(f("success"),w("\u65b0\u589e\u6210\u529f")):(f("danger"),w("\u65b0\u589e\u5931\u6557")),O(!0),i([]),S()}})})]}),Object(g.jsx)(D.a,{bootstrap4:!0,keyField:"id",data:c,columns:I,noDataIndication:function(){return Object(g.jsxs)(T.a,{as:"p",animation:"glow",children:[Object(g.jsx)(T.a,{xs:12}),Object(g.jsx)(T.a,{xs:12}),Object(g.jsx)(T.a,{xs:12})]})},pagination:W()({}),defaultSorted:[{dataField:"id",order:"asc"}]})]})}},{text:"Labels",path:"/labels",component:le}],ye=function(e){return Object(g.jsx)(m.a,{path:e.path,exact:e.exact,children:Object(g.jsx)(e.component,{})},e.path)},ke=function(){return Object(g.jsx)(m.c,{children:function(){var e=[];return ge.map((function(t,n){var a=function(e){var t,n=[];return n.push(ye(e)),null===(t=e.routes)||void 0===t||t.map((function(e,t){n.push(ye(e))})),n}(t);e.push.apply(e,Object(p.a)(a))})),e}()})},we=function(){var e=function(e){var t,n=[];return e.routes?n.push(function(e){var t;return Object(g.jsx)(y,{title:e.text,icon:null!==(t=e.icon)&&void 0!==t?t:O.f,items:e.routes},"submenu"+e.text)}(e)):n.push((t=e,Object(g.jsx)(x.a.Item,{children:Object(g.jsxs)(x.a.Link,{as:o.b,to:t.path,className:"sidebar-link",children:[t.icon?Object(g.jsx)(h.a,{icon:t.icon,className:"mr-2"}):null,"\xa0",t.text]},"link"+t.path)},"item"+t.path))),n};return Object(g.jsx)(g.Fragment,{children:function(){var t=[];return ge.map((function(n,a){var r=e(n);t.push.apply(t,Object(p.a)(r))})),t}()})},Se=n(239),Fe=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.post("/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(C.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().get("/user/getNickName");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=Object(ae.b)({name:"user",initialState:{isLogin:!1,nickname:""},reducers:{setLogin:function(e,t){e.isLogin=t.payload},setNickName:function(e,t){e.nickname=t.payload}}}),Ne=function(){var e=Object(C.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce();case 2:(n=e.sent).content&&n.content.name&&t(De(n.content.name));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Te=Le.actions,Ie=Te.setLogin,De=Te.setNickName,_e=Le.reducer,Ee=function(e){var t=te(),n=e.onFinish,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),j=u[0],d=u[1],b=Object(a.useState)(!1),p=Object(s.a)(b,2),O=p[0],h=p[1],x=function(){return o(!1)},m=function(){var e=Object(C.a)(F.a.mark((function e(a){var r,c,i,s,l,u;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),h(!0),r=a.currentTarget,a.preventDefault(),!1!==r.checkValidity()){e.next=8;break}return d(!1),a.stopPropagation(),e.abrupt("return");case 8:return c=new FormData(a.target),i=Object.fromEntries(c.entries()),s=i,e.next=12,Fe(s);case 12:l=e.sent,u=!1,l.code==oe&&(localStorage.setItem("token",l.content),u=!0),o(!1),t(Ie(!0)),n&&n(u);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{variant:"secondary",onClick:function(){!function(){var e=localStorage.getItem("token");if(!e)return!1;var t=Object(P.a)(e),n=new Date;return!!(t.exp&&1e3*t.exp>=n.getTime())||(localStorage.removeItem("token"),!1)}()?o(!0):t(Ie(!0))},children:"Login"}),Object(g.jsx)(Z.a,{show:i,onHide:x,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(g.jsxs)(Y.a,{onSubmit:m,noValidate:!0,validated:O,children:[Object(g.jsx)(Z.a.Header,{closeButton:!0,children:Object(g.jsx)(Z.a.Title,{id:"contained-modal-title-vcenter",children:"Login"})}),Object(g.jsxs)(Z.a.Body,{children:[Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(g.jsx)(Y.a.Label,{children:"Username"}),Object(g.jsx)(Y.a.Control,{type:"text",placeholder:"Username",name:"username",required:!0})]}),Object(g.jsxs)(Y.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(g.jsx)(Y.a.Label,{children:"Password"}),Object(g.jsx)(Y.a.Control,{type:"password",placeholder:"Password",name:"password",required:!0})]})]}),Object(g.jsxs)(Z.a.Footer,{children:[j?Object(g.jsxs)(A.a,{variant:"primary",disabled:!0,children:[Object(g.jsx)(K.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):Object(g.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"}),Object(g.jsx)(A.a,{variant:"secondary",onClick:x,children:"Close"})]})]})})]})},Pe=function(){var e=te(),t=ne((function(e){return e.user.nickname}));return Object(a.useEffect)((function(){t||Ne(e)}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(Se.a.Text,{children:["Signed in as: ",t,"\xa0\xa0"]}),Object(g.jsx)(A.a,{variant:"secondary",onClick:function(){localStorage.removeItem("token"),e(Ie(!1)),e(De(""))},children:"LogOut"})]})},Ve=function(e){var t=e.toggle,n=ne((function(e){return e.user.isLogin}));return Object(g.jsxs)(Se.a,{bg:"light",className:"navbar shadow-sm p-3 mb-5 bg-white rounded",expand:!0,children:[Object(g.jsx)(Se.a.Brand,{children:Object(g.jsx)(A.a,{variant:"outline-info",onClick:t,children:Object(g.jsx)(h.a,{icon:O.a})})}),Object(g.jsx)(Se.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(Se.a.Collapse,{className:"justify-content-end",children:n?Object(g.jsx)(Pe,{}):Object(g.jsx)(Ee,{})})]})},Be=function(e){var t=e.isOpen,n=e.toggle;return Object(g.jsxs)(j.a,{fluid:!0,className:u()("content",{"is-open":t}),children:[Object(g.jsx)(d.a,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(Ve,{toggle:n})})}),Object(g.jsx)(ke,{})]})},Ge=function(e){var t=e.isOpen,n=e.toggle;return Object(g.jsxs)("div",{className:u()("sidebar",{"is-open":t}),children:[Object(g.jsxs)("div",{className:"sidebar-header",children:[Object(g.jsx)(A.a,{variant:"link",onClick:n,style:{color:"#fff"},className:"mt-4",children:Object(g.jsx)(h.a,{icon:O.g,pull:"right",size:"xs"})}),Object(g.jsx)("h3",{children:"Task Management"})]}),Object(g.jsx)(x.a,{className:"flex-column pt-2",children:Object(g.jsx)(we,{})})]})},He=(n(225),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),i=Object(s.a)(c,2),l=(i[0],i[1],Object(a.useState)(-1)),u=Object(s.a)(l,2),j=u[0],d=u[1],b=function(){r(!n)};return Object(a.useEffect)((function(){var e=function(){var e=window.innerWidth,t=e<=576;t!==j<=576&&r(!t),d(e)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(g.jsx)(o.a,{children:Object(g.jsxs)("div",{className:"App wrapper",children:[Object(g.jsx)(Ge,{toggle:b,isOpen:n}),Object(g.jsx)(Be,{toggle:b,isOpen:n})]})})}),ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Me=(n(226),Object(ae.a)({reducer:{labels:se,user:_e}}));i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(ee.a,{store:Me,children:Object(g.jsx)(He,{})})}),document.getElementById("root")),ze()}},[[227,1,2]]]);
//# sourceMappingURL=main.7ae62b26.chunk.js.map