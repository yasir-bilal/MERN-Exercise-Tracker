(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{106:function(e,t,a){e.exports=a(142)},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=a(18),c=a(33),u=a(84),d=a(97),s=a(10),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(s.a)({},null===t||void 0===t?void 0:t.data))),Object(s.a)(Object(s.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(s.a)(Object(s.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},m=Object(c.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"COUNT":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(d.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:p}),v=a(182),f=a(43),g=a(13),b=a(26),h=a(190),x=a(183),y=a(12),E=a.n(y),w=a(20),j=a(85),O=a.n(j).a.create({baseURL:"https://exercisetracker001.herokuapp.com/"});O.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var C=function(e,t){return O.patch("/posts/".concat(e),t)},S=function(e){return O.delete("/posts/".concat(e))},k=function(e){return O.post("/user/signin",e)},I=function(e){return O.post("/user/signup",e)},N=function(e){return function(){var t=Object(w.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,O.post("/posts",l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},A=function(e,t){return function(){var a=Object(w.a)(E.a.mark((function a(n){var r,l;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},T=a(178),D=a(91),_=a.n(D),L=a(90),W=a.n(L),F=a(64),P=a.n(F),U=a(86),B=a(24),R=a(174),z=a(177),H=Object(R.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",backgroundColor:"lightblue"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(z.a[500]),backgroundColor:z.a[500]}},Object(B.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(B.a)(t,"actionDiv",{textAlign:"center"}),Object(B.a)(t,"table",{backgroundColor:"lightblue",width:"200%"}),t})),J=function(e){var t,a,n,l,o,c,u,d,s,p,m,v,f,g,b,h,x=e.post,y=e.setCurrentId,j=Object(i.b)(),O=H(),C=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",null,((null===C||void 0===C||null===(t=C.result)||void 0===t?void 0:t.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(a=C.result)||void 0===a?void 0:a._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement("tr",{className:O.table},r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}},((null===C||void 0===C||null===(n=C.result)||void 0===n?void 0:n.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(l=C.result)||void 0===l?void 0:l._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement("h4",null,x.activity)),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}},((null===C||void 0===C||null===(o=C.result)||void 0===o?void 0:o.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(c=C.result)||void 0===c?void 0:c._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement("h4",null,Object(U.a)(x.date,"dd-mm-yyyy"))),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}},((null===C||void 0===C||null===(u=C.result)||void 0===u?void 0:u.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(d=C.result)||void 0===d?void 0:d._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement("h4",null,x.sets)),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}},((null===C||void 0===C||null===(s=C.result)||void 0===s?void 0:s.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(p=C.result)||void 0===p?void 0:p._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement("h4",null,x.duration)),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}},((null===C||void 0===C||null===(m=C.result)||void 0===m?void 0:m.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(v=C.result)||void 0===v?void 0:v._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement("h4",null,x.description)),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}},((null===C||void 0===C||null===(f=C.result)||void 0===f?void 0:f.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(g=C.result)||void 0===g?void 0:g._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement(T.a,{size:"small",color:"secondary",onClick:function(){return j((e=x._id,function(){var t=Object(w.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(W.a,{fontSize:"small"})," Delete")," "),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}},((null===C||void 0===C||null===(b=C.result)||void 0===b?void 0:b.googleId)===(null===x||void 0===x?void 0:x.creator)||(null===C||void 0===C||null===(h=C.result)||void 0===h?void 0:h._id)===(null===x||void 0===x?void 0:x.creator))&&r.a.createElement(T.a,{onClick:function(){return y(x._id)},style:{color:"green"},size:"small"},r.a.createElement(_.a,{fontSize:"default"})," Edit")," ")))))},G=Object(R.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",backgroundColor:"grey"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(z.a[500]),backgroundColor:z.a[500]}},Object(B.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(B.a)(t,"actionDiv",{textAlign:"center"}),Object(B.a)(t,"table",{backgroundColor:"lightgrey"}),t})),M=function(e){e.post;var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=G(),l=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:n.table},r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center",content:"center"}}," Activity Type"),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center"}}," Date "),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center"}}," Sets"),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center"}}," Duration (min) "),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center"}}," Description "),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center"}}," Delete"),r.a.createElement("td",{style:{width:"12%",overflow:"hidden",textAlign:"center"}}," Edit  ",r.a.createElement("i",{class:"mdi mdi-pencil"})," "))),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,a.map((function(e){var a,n;return r.a.createElement("ul",{key:e._id,item:!0},((null===l||void 0===l||null===(a=l.result)||void 0===a?void 0:a.googleId)===(null===e||void 0===e?void 0:e.creator)||(null===l||void 0===l||null===(n=l.result)||void 0===n?void 0:n._id)===(null===e||void 0===e?void 0:e.creator))&&r.a.createElement(J,{post:e,setCurrentId:t}))})))))},q=a(144),Y=a(145),V=a(188),Z=a(192),K=a(189),Q=Object(R.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10,color:"Black",backgroundColor:"orange"},date:{width:"90%",marginTop:10,paddingTop:10,borderStyle:"solid ",display:"flex"}}})),X=function(e){var t,a=e.currentId,l=e.setCurrentId,o=Object(n.useState)({activity:"",date:"",sets:"",duration:"",description:""}),c=Object(b.a)(o,2),u=c[0],d=c[1],p=Object(i.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),m=Object(i.b)(),v=Q(),f=JSON.parse(localStorage.getItem("profile")),g=Object(n.useState)(),h=Object(b.a)(g,2),x=h[0],y=h[1];Object(n.useEffect)((function(){p&&d(p)}),[p]);var j=function(){l(0),d({activity:"",date:"",sets:"",duration:"",description:""})},O=function(){var e=Object(w.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y(!0),0===a?(m(N(Object(s.a)(Object(s.a)({},u),{},{name:null===f||void 0===f||null===(n=f.result)||void 0===n?void 0:n.name}))),j()):(m(A(a,Object(s.a)(Object(s.a)({},u),{},{name:null===f||void 0===f||null===(r=f.result)||void 0===r?void 0:r.name}))),j()),alert("Submitted Susscessfully");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.name)?r.a.createElement(q.a,{className:v.paper},r.a.createElement("form",{autoComplete:"off",Validate:!0,className:"".concat(v.root," ").concat(v.form),onSubmit:O},r.a.createElement(Y.a,{variant:"h6",fullWidth:!0,multiline:!0,rows:1},a?'Editing Exercise "'.concat(p.activity,'"'):"Creating an Exercise"),r.a.createElement(V.a,{type:"input",name:"Activity",variant:"outlined",label:"Activity Type",fullWidth:!0,value:u.activity,onChange:function(e){return d(Object(s.a)(Object(s.a)({},u),{},{activity:e.target.value}))},required:!0},r.a.createElement(Z.a,{value:"Cycling"},"Cycling"),r.a.createElement(Z.a,{value:"Running"},"Running"),r.a.createElement(Z.a,{value:"Swiming"},"Swiming"),r.a.createElement(Z.a,{value:"Gym"},"Gym")),r.a.createElement(K.a,{type:"date",name:"date",variant:"outlined",label:"",fullWidth:!0,required:!0,value:P()(u.date).format("YYYY-MM-DD"),onChange:function(e){return d(Object(s.a)(Object(s.a)({},u),{},{date:e.target.value}))}}),r.a.createElement(K.a,{name:"sets",type:"number",variant:"outlined",label:"No. of Sets",fullWidth:!0,value:u.sets,onChange:function(e){return d(Object(s.a)(Object(s.a)({},u),{},{sets:e.target.value}))},inputProps:{min:0,max:5},min:1,max:5}),r.a.createElement(K.a,{name:"duration",type:"number",variant:"outlined",label:"Duration in (min)",fullWidth:!0,value:u.duration,onChange:function(e){return d(Object(s.a)(Object(s.a)({},u),{},{duration:e.target.value}))},required:!0,inputProps:{min:0,max:60},min:1,max:60}),r.a.createElement(K.a,{name:"description",type:"text",variant:"outlined",label:"description",fullWidth:!0,multiline:!0,rows:1,value:u.description,onChange:function(e){return d(Object(s.a)(Object(s.a)({},u),{},{description:e.target.value}))},inputProps:{maxLength:8}}),r.a.createElement(T.a,{className:v.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(T.a,{variant:"contained",color:"secondary",size:"small",onClick:j,fullWidth:!0},"Clear"),r.a.createElement("div",null,x&&r.a.createElement("div",{class:"success-message"},r.a.createElement("h3",null,"Submited"))))):r.a.createElement(q.a,{className:v.paper},r.a.createElement(Y.a,{variant:"h6",align:"center"},"Please Sign In to create and track your own exercises and and stay fit!."))},$=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(i.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(w.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,o]),r.a.createElement(h.a,{in:!0},r.a.createElement(v.a,null,r.a.createElement(x.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(x.a,{item:!0,xs:12,sm:7},r.a.createElement(M,{setCurrentId:l})),r.a.createElement(x.a,{item:!0,xs:12,sm:4},r.a.createElement(X,{currentId:a,setCurrentId:l})))))},ee=a(184),te=a(185),ae=a(193),ne=a(92),re=Object(R.a)((function(e){return{appBar:{borderRadius:5,margin:"10px 10px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",height:"100px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"300px"},profile:{display:"flex",justifyContent:"space-between",width:"300px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(z.a[500]),backgroundColor:z.a[500]},btn:{borderRadius:"3px",fontSize:"13px",color:"#ffffff",backgroundColor:"#f89a0c",border:"1px solid #f89a0c"},h1:{fontSize:"38px",fontWeight:"500",lineHeight:"150px",textShadow:"rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px",color:"#f89a0c"}}})),le=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(i.b)(),c=Object(g.g)(),u=Object(g.f)(),d=re(),s=function(){o({type:"LOGOUT"}),u.push("/auth"),l(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(ne.a)(e).exp<(new Date).getTime()&&s());l(JSON.parse(localStorage.getItem("profile")))}),[c]),r.a.createElement(ee.a,{className:d.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:d.brandContainer},r.a.createElement(Y.a,{component:f.b,to:"/",className:d.h1,variant:"h2",align:"center"},"Exercise Tracker")),r.a.createElement(te.a,{className:d.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:d.profile},r.a.createElement(ae.a,{className:d.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(Y.a,{className:d.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(T.a,{variant:"contained",className:d.btn,color:"secondary",onClick:s},"Logout")):r.a.createElement(T.a,{lassName:d.btn,component:f.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},oe=a(93),ie=a(96),ce=a.n(ie),ue=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},de=Object(R.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),se=a(186),pe=a(187),me=a(94),ve=a.n(me),fe=a(95),ge=a.n(fe),be=function(e){var t=e.name,a=e.handleChange,n=e.label,l=e.half,o=e.autoFocus,i=e.type,c=e.handleShowPassword;return r.a.createElement(x.a,{item:!0,xs:12,sm:l?6:12},r.a.createElement(K.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:o,type:i,InputProps:"password"===t?{endAdornment:r.a.createElement(se.a,{position:"end"},r.a.createElement(pe.a,{onClick:c},"password"===i?r.a.createElement(ve.a,null):r.a.createElement(ge.a,null)))}:null}))},he={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},xe=function(){var e=Object(n.useState)(he),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(b.a)(o,2),u=c[0],d=c[1],p=Object(i.b)(),m=Object(g.f)(),f=de(),h=Object(n.useState)(!1),y=Object(b.a)(h,2),j=y[0],O=y[1],C=function(){var e=Object(w.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{p({type:"AUTH",data:{result:a,token:n}}),m.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return l(Object(s.a)(Object(s.a)({},a),{},Object(B.a)({},e.target.name,e.target.value)))};return r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(q.a,{className:f.paper,elevation:3},r.a.createElement(ae.a,{className:f.avatar},r.a.createElement(ce.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h5"},u?"Sign up":"Sign in"),r.a.createElement("form",{className:f.form,onSubmit:function(e){var t,n;e.preventDefault(),p(u?(t=a,n=m,function(){var e=Object(w.a)(E.a.mark((function e(a){var r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(t);case 3:r=e.sent,l=r.data,a({type:"AUTH",data:l}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(w.a)(E.a.mark((function a(n){var r,l;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,m))}},r.a.createElement(x.a,{container:!0,spacing:2},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(be,{name:"firstName",label:"First Name",handleChange:S,autoFocus:!0,half:!0}),r.a.createElement(be,{name:"lastName",label:"Last Name",handleChange:S,half:!0})),r.a.createElement(be,{name:"email",label:"Email Address",handleChange:S,type:"email"}),r.a.createElement(be,{name:"password",label:"Password",handleChange:S,type:j?"text":"password",handleShowPassword:function(){return O(!j)}}),u&&r.a.createElement(be,{name:"confirmPassword",label:"Repeat Password",handleChange:S,type:"password"})),r.a.createElement(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:f.submit},u?"Sign Up":"Sign In"),r.a.createElement(oe.GoogleLogin,{clientId:"1032523932588-icglv91h0gm9stf7504pgjmn7s7n0isi.apps.googleusercontent.com",render:function(e){return r.a.createElement(T.a,{className:f.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:r.a.createElement(ue,null),variant:"contained"},"Google Sign In")},onSuccess:C,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(x.a,{container:!0,justify:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(T.a,{onClick:function(){l(he),d((function(e){return!e})),O(!1)}},u?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},ye=function(){return r.a.createElement(f.a,null,r.a.createElement(v.a,{maxWidth:"lg"},r.a.createElement(le,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,component:$}),r.a.createElement(g.a,{path:"/auth",exact:!0,component:xe}))))},Ee=(a(141),Object(c.e)(m,Object(c.d)(Object(c.a)(u.a))));o.a.render(r.a.createElement(i.a,{store:Ee},r.a.createElement(ye,null)),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.773f4f12.chunk.js.map