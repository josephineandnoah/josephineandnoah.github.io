"use strict";(self.webpackChunkwedding_guest_site=self.webpackChunkwedding_guest_site||[]).push([[678],{7086:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294),r=n(4160),o=n(7123);function u(){let e="";return e=(0,o.jl)()?`Hello ${(0,o.PR)().name}`:"You are not logged in",l.createElement("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},l.createElement("span",null,e),l.createElement("nav",null,l.createElement(r.rU,{to:"/"},"Home")," ",l.createElement(r.rU,{to:"/guest/profile"},"Profile")," ",(0,o.jl)()?l.createElement("a",{href:"/",onClick:e=>{e.preventDefault(),(0,o.kS)((()=>(0,r.c4)("/guest/login")))}},"Logout"):null))}var a=e=>{let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement(u,null),t)}},6558:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var l=n(7294),r=n(4160),o=n(7123),u=n(7086);function a(){return l.createElement(u.Z,null,l.createElement("h1",null,"Hello ",(0,o.jl)()?(0,o.PR)().name:"world","!"),l.createElement("p",null,(0,o.jl)()?l.createElement(l.Fragment,null,"You are logged in, so check your"," ",l.createElement(r.rU,{to:"/guest/profile"},"profile")):l.createElement(l.Fragment,null,"You should ",l.createElement(r.rU,{to:"/guest/login"},"log in")," to see restricted content")))}},7123:function(e,t,n){n.d(t,{PR:function(){return l},jc:function(){return o},jl:function(){return u},kS:function(){return a}});const l=()=>"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{},r=e=>window.localStorage.setItem("gatsbyUser",JSON.stringify(e)),o=e=>{let{password:t}=e;return"pass"===t&&r({username:"john",name:"Johnny",email:"johnny@example.org"})},u=()=>!!l().username,a=e=>{r({}),e()}}}]);
//# sourceMappingURL=component---src-pages-index-js-42ef95af4efee941f2b2.js.map