(function(t){function e(e){for(var o,i,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},a={app:0},n=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var m=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec"),a=s.n(o);a.a},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("router-view")],1)},n=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[o("h2",{staticClass:"nav-item"},[t.$auth.isAuthenticated?o("router-link",{staticClass:"nav-link h4 text-secondary",class:{active:"Profile"==t.$route.name},attrs:{to:{name:"Profile"}}},[t._v("Profile")]):t._e()],1),o("span",{staticClass:"navbar-text"},[o("router-link",{staticClass:"nav-link h4 text-secondary",class:{active:"Home"==t.$route.name},attrs:{to:{name:"Home"}}},[o("img",{staticClass:"col",attrs:{alt:"Vue logo",src:s("cf05")}})])],1),o("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?o("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):o("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])},r=[],c=s("bc3a"),l=s.n(c),m=s("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: ",this.$auth.user),this.$store.dispatch("getProfile")},async logout(){await this.$auth.logout(),this.$store.dispatch("resetBearer"),this.$router.push({name:"home"})}}},u=d,p=(s("fda5"),s("2877")),h=Object(p["a"])(u,i,r,!1,null,"35810858",null),v=h.exports,f={name:"App",async beforeCreate(){await Object(m["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:v}},b=f,C=(s("034f"),Object(p["a"])(b,a,n,!1,null,null,null)),w=C.exports,y=s("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[t._m(0),t._m(1),t._m(2),s("posts")],1)},P=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row align-content-center"},[o("div",{staticClass:"col-md-3"}),o("img",{staticClass:"col-xs-12 col-md-6",attrs:{alt:"Vue logo",src:s("cf05")}}),o("div",{staticClass:"col-md-3"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"title"},[s("u",[t._v("Welcome to NewBrew")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("h2",{staticClass:"text-warning"},[t._v("Posts:")])])])}],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post container-fluid"},t._l(t.posts,(function(t){return s("post",{key:t._id,attrs:{postData:t}})})),1)},$=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{attrs:{to:{name:"postDetails",params:{postId:this.postData._id}}}},[s("div",{staticClass:"row post post-row m-1"},[s("div",{staticClass:"col-8 text-dark h4"},[t._v(t._s(t.postData.title))]),s("div",{staticClass:"col-2 text-success"},[t._v("+"+t._s(t.postData.upCount))]),s("div",{staticClass:"col-2 text-danger"},[t._v("-"+t._s(t.postData.downCount))])])])},k=[],E={name:"post",props:["postData"],methods:{setActive(){this.$store.dispatch("setActivePost",this.postData)}}},O=E,B=(s("8a00"),Object(p["a"])(O,x,k,!1,null,"7280b6d2",null)),D=B.exports,j={name:"posts",mounted(){this.$store.dispatch("getAllPosts")},computed:{posts(){return this.$store.state.posts}},components:{post:D}},I=j,A=Object(p["a"])(I,g,$,!1,null,null,null),F=A.exports,N={name:"home",components:{posts:F},computed:{posts(){let t=this.$store.state.posts;return t}}},S=N,T=(s("c2bc"),Object(p["a"])(S,_,P,!1,null,"b2e71780",null)),V=T.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h2",[t._v("Welcome "+t._s(t.profile.name))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"}),s("div",{staticClass:"col-6 m-0 p-1"},[t.postForm?t._e():s("button",{staticClass:"btn btn-block btn-warning",attrs:{type:"button"},on:{click:function(e){t.postForm=!0}}},[t._v("Create New Post")]),t.postForm?s("button",{staticClass:"btn btn-block btn-danger",attrs:{type:"button"},on:{click:function(e){t.postForm=!1}}},[t._v("Ditch Post")]):t._e()]),s("div",{staticClass:"col-3"})]),s("div",{staticClass:"row"},[t.postForm?s("create-post"):t._e()],1),t._m(0),s("posts")],1)},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h2",[t._v("Your Posts:")])])])}],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 bg-secondary"},[s("form",{staticClass:"create-post",on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.title,expression:"newPost.title"}],staticClass:"col-12 my-1 border border-primary",attrs:{type:"text",name:"title",placeholder:"Post title..."},domProps:{value:t.newPost.title},on:{input:function(e){e.target.composing||t.$set(t.newPost,"title",e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.body,expression:"newPost.body"}],staticClass:"form-control my-1 border border-primary",attrs:{id:"post-text",name:"post",rows:"3",placeholder:"Post text..."},domProps:{value:t.newPost.body},on:{input:function(e){e.target.composing||t.$set(t.newPost,"body",e.target.value)}}}),s("button",{staticClass:"btn btn-primary float-right mb-2",attrs:{type:"submit"}},[t._v("Post")])])])},U=[],M={name:"createPost",data(){return{newPost:{email:this.$route.params.creatorEmail}}},methods:{createPost(){this.$store.dispatch("createPost",this.newPost)}}},R=M,z=Object(p["a"])(R,L,U,!1,null,null,null),J=z.exports,W={name:"Profile",computed:{profile(){return this.$store.state.profile},posts(){return this.$store.dispatch("getPostsByCreatorEmail",this.profile.email)}},data(){return{postForm:!1}},components:{posts:F,createPost:J}},X=W,Y=Object(p["a"])(X,q,H,!1,null,"e8d3a6fc",null),G=Y.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"card post border border-dark m-1",staticStyle:{width:"100vw"}},[s("div",{staticClass:"card-header title-row"},[s("div",{staticClass:"row p-0 p-0"},[s("div",{staticClass:"col-8 h3 text-dark"},[t._v(t._s(t.details.title))]),s("div",{staticClass:"col-2 text-success"},[t._v("+"+t._s(t.details.upCount))]),s("div",{staticClass:"col-2 text-danger"},[t._v("-"+t._s(t.details.downCount))])])]),s("div",{staticClass:"card-body border border-dark"},[t.editing?s("form",{on:{submit:t.editPostBody}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.PostToEdit.body,expression:"PostToEdit.body"}],attrs:{type:"text",name:"postBody"},domProps:{value:t.PostToEdit.body},on:{input:function(e){e.target.composing||t.$set(t.PostToEdit,"body",e.target.value)}}}),s("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[t._v("Save")])]):t._e(),s("blockquote",{staticClass:"blockquote mb-0"},[t.editing?t._e():s("p",[t._v(t._s(t.details.body))]),s("footer",{staticClass:"blockquote-footer float-right"},[t._v(t._s(t.details.creatorEmail))])]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.details.creatorEmail==t.profile.email,expression:"details.creatorEmail ==profile.email"}],staticClass:"btn btn-secondary btn-sm float-left",on:{click:function(e){return t.editPost(t.p)}}},[t._v("Edit Post")])])])]),s("div",{staticClass:"row button-row px-1"},[s("div",{staticClass:"col-3 m-0 p-1"},[t.commentForm?t._e():s("button",{staticClass:"btn btn-block btn-secondary comment",attrs:{type:"button"},on:{click:function(e){t.commentForm=!0}}},[t._v("Comment")]),t.commentForm?s("button",{staticClass:"btn btn-block btn-danger",attrs:{type:"button"},on:{click:function(e){t.commentForm=!1}}},[t._v("Ditch Comment")]):t._e()]),s("div",{staticClass:"col-3 m-0 p-1"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.details.creatorEmail==t.profile.email,expression:"details.creatorEmail==profile.email"}],staticClass:"btn btn-block btn-danger",on:{click:t.deletePost}},[t._v("Delete")])]),s("div",{staticClass:"col-3 m-0 p-1"},[t.allowVote?s("button",{staticClass:"btn btn-block btn-success",on:{click:t.upCount}},[t._v("Like")]):t._e()]),s("div",{staticClass:"col-3 m-0 p-1"},[t.allowVote?s("button",{staticClass:"btn btn-block btn-warning",on:{click:t.downCount}},[t._v("Dislike")]):t._e()])]),s("div",{staticClass:"row"},[t.commentForm?s("create-comment"):t._e()],1),t._m(0),s("comments")],1)},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h3",{staticClass:"ml-2"},[t._v("Comments for this post:")])])}],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 p-2 mb-2 bg-secondary"},[s("form",{staticClass:"create-comment",on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newComment.body,expression:"newComment.body"}],staticClass:"form-control border border-primary m-1",attrs:{id:"comment-text",name:"comment",rows:"3",placeholder:"Enter your comment here..."},domProps:{value:t.newComment.body},on:{input:function(e){e.target.composing||t.$set(t.newComment,"body",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.name,expression:"newComment.name"}],staticClass:"border border-primary m-1",attrs:{type:"text",name:"creator",id:"creator",placeholder:"Enter name here..."},domProps:{value:t.newComment.name},on:{input:function(e){e.target.composing||t.$set(t.newComment,"name",e.target.value)}}}),s("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[t._v("Save")])])])},tt=[],et={name:"createComment",data(){return{newComment:{postId:this.$route.params.postId}}},methods:{createComment(){this.$store.dispatch("createComment",this.newComment)}}},st=et,ot=(s("e13c"),Object(p["a"])(st,Z,tt,!1,null,"638a2395",null)),at=ot.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comments container-fluid"},t._l(t.comments,(function(t){return s("comment",{key:t._id,attrs:{commentData:t}})})),1)},it=[],rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row comment-row"},[s("div",{staticClass:"card comment",staticStyle:{width:"100vw"}},[s("div",{staticClass:"card-body comment-bg border border-dark pt-0"},[s("blockquote",{staticClass:"blockquote mb-0"},[s("div",{staticClass:"title-row justify-content-end"},[s("button",{staticClass:"btn btn-sm text-danger",on:{click:t.deleteComment}},[t._v("X")])]),s("p",[t._v(t._s(t.commentData.body))]),s("footer",{},[s("p",{staticClass:"blockquote-footer float-right"},[t._v(t._s(t.commentData.name))])])])])])])},ct=[],lt={name:"comment",props:["commentData"],methods:{deleteComment(){let t=window.confirm("Are you sure you want to delete this comment?");1==t&&this.$store.dispatch("deleteComment",this.commentData._id)}}},mt=lt,dt=(s("5d26"),Object(p["a"])(mt,rt,ct,!1,null,"4a2fa562",null)),ut=dt.exports,pt={name:"comments",mounted(){this.getComments()},methods:{getComments(){this.$store.dispatch("getCommentsByPostId",this.$route.params.postId)}},computed:{comments(){return this.$store.state.comments}},components:{comment:ut}},ht=pt,vt=Object(p["a"])(ht,nt,it,!1,null,null,null),ft=vt.exports,bt={name:"PostDetails",mounted(){this.$store.state.posts.length?(this.$store.dispatch("setActivePost",this.$store.state.posts.find(t=>t._id==this.$route.params.postId)),this.$store.dispatch("getCommentsByPostId",this.$route.params.postId)):this.$store.dispatch("getPostById",this.$route.params.postId)},methods:{upCount(){this.details.upCount++,this.$store.dispatch("editPostUpCount",this.details),this.allowVote=!1},downCount(){this.details.downCount--,this.$store.dispatch("editPostDownCount",this.details),this.allowVote=!1},deletePost(){let t=window.confirm("Are you sure you want to delete this post?");1==t&&this.$store.dispatch("deletePost",this.$route.params.postId)},editPost(t){this.editing=!0,this.PostToEdit=t},editPostBody(){this.$store.dispatch("editPostBody",this.details)}},data(){return{commentForm:!1,allowVote:!0,editing:!1}},computed:{details(){return this.$store.state.activePost},profile(){return this.$store.state.profile},PostToEdit(){return this.$store.state.activePost}},components:{createComment:at,comments:ft,post:D}},Ct=bt,wt=(s("cfde"),Object(p["a"])(Ct,K,Q,!1,null,"287f6846",null)),yt=wt.exports;o["a"].use(y["a"]);const _t=[{path:"/",name:"Home",component:V},{path:"/profile",name:"Profile",component:G,beforeEnter:m["b"]},{path:"/postDetails/:postId",name:"postDetails",component:yt}],Pt=new y["a"]({routes:_t});var gt=Pt,$t=s("2f62");s("eebe");o["a"].use($t["a"]);let xt=location.host.includes("localhost")?"http://localhost:3000/":"/",kt=l.a.create({baseURL:xt+"api",timeout:3e3,withCredentials:!0});var Et=new $t["a"].Store({state:{profile:{},posts:[],activePost:{},comments:[]},mutations:{setProfile(t,e){t.profile=e},setPosts(t,e){t.posts=e},setActivePost(t,e){t.activePost=e},setComments(t,e){t.comments=e},deletePost(t,e){t.posts=t.posts.filter(t=>t._id!=e)},addPost(t,e){t.posts.push(e)},addComment(t,e){t.comments.push(e)},deleteComment(t,e){t.comments=t.comments.filter(t=>t._id!=e)}},actions:{setBearer({},t){kt.defaults.headers.authorization=t},resetBearer(){kt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await kt.get("profiles");t("setProfile",e.data)}catch(e){console.error(e)}},async getCommentsByPostId({commit:t,dispatch:e},s){try{let e=await kt.get("posts/"+s+"/comments");t("setComments",e.data)}catch(o){console.error(o)}},async getPostsByCreatorEmail({commit:t,dispatch:e},s){try{let e=await kt.get("posts/email/"+s);t("setPosts",e.data)}catch(o){console.error(o)}},async getAllPosts({commit:t,dispatch:e}){try{let e=await kt.get("posts");t("setPosts",e.data)}catch(s){console.error(s)}},async getPostById({commit:t,dispatch:e},s){try{let e=await kt.get("posts/"+s);t("setActivePost",e.data)}catch(o){console.error(o)}},setActivePost({commit:t},e){t("setActivePost",e)},async createComment({commit:t,dispatch:e},s){console.log(s);await kt.post("comments",s);e("getCommentsByPostId",s.postId)},async createPost({commit:t,dispatch:e},s){console.log(s);await kt.post("posts",s);e("getPostsByCreatorEmail",s.email)},async editPostUpCount({commit:t,dispatch:e},s){await kt.put("posts/"+s.id,s);e("getCommentsByPostId",s.id)},async editPostDownCount({commit:t,dispatch:e},s){await kt.put("posts/"+s.id,s);e("getCommentsByPostId",s.id)},async editPostBody({commit:t,dispatch:e},s){await kt.put("posts/"+s.id,s);e("getCommentsByPostId",s.id)},async deletePost({commit:t,dispatch:e},s){try{await kt.delete("posts/"+s);t("deletePost",s),t("setActivePost",{}),gt.push({name:"Home"})}catch(o){console.error(o)}},async deleteComment({commit:t},e){try{await kt.delete("comments/"+e);t("deleteComment",e)}catch(s){console.error(s)}}}});const Ot="agilfoy.auth0.com",Bt="https://new-brew-server.com",Dt="LRHOOJvyj348LNp7u1kDjVBOA5RtzsB1";o["a"].use(m["a"],{domain:Ot,clientId:Dt,audience:Bt,onRedirectCallback:t=>{gt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new o["a"]({router:gt,store:Et,render:function(t){return t(w)}}).$mount("#app")},"5d26":function(t,e,s){"use strict";var o=s("e0a6"),a=s.n(o);a.a},"7d8b":function(t,e,s){},"85ec":function(t,e,s){},"8a00":function(t,e,s){"use strict";var o=s("d9f8"),a=s.n(o);a.a},"99ad":function(t,e,s){},b96c:function(t,e,s){},c2bc:function(t,e,s){"use strict";var o=s("99ad"),a=s.n(o);a.a},c36a:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.00c9e5c7.png"},cfde:function(t,e,s){"use strict";var o=s("c36a"),a=s.n(o);a.a},d9f8:function(t,e,s){},e0a6:function(t,e,s){},e13c:function(t,e,s){"use strict";var o=s("7d8b"),a=s.n(o);a.a},fda5:function(t,e,s){"use strict";var o=s("b96c"),a=s.n(o);a.a}});