"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[11],{4974:function(e,n,t){var a=t(4942),i=t(1413),o=t(885),r=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,r.useState)((0,i.Z)({},n)),l=(0,o.Z)(u,2),s=l[0],m=l[1];return{state:s,setState:m,handleChange:function(e){var n=e.target,t=n.name,o=n.value,r=n.type,u=n.checked,l="checkbox"===r?u:o;m((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},t,l))}))},handleSubmit:function(e){e.preventDefault(),t((0,i.Z)({},s)),m((0,i.Z)({},n))}}}},3011:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a,i,o,r,u=t(9434),l=t(8724),s=(t(2791),t(168)),m=t(6444),c=m.ZP.form(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  border: solid 1px black;\n"]))),d=m.ZP.label(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 10px;\n"]))),p=m.ZP.input(o||(o=(0,s.Z)(["\n  /* width: 300px; */\n\n  margin-top: 10px;\n"]))),f=m.ZP.button(r||(r=(0,s.Z)(["\n  cursor: pointer;\n"]))),h={name:"",email:"",password:""},x=t(4974),Z=t(184);var b=function(e){var n=e.onSubmit,t=(0,x.Z)({initialState:h,onSubmit:n}),a=t.state,i=t.handleChange,o=t.handleSubmit,r=a.name,u=a.email,l=a.password;return(0,Z.jsxs)(c,{onSubmit:o,children:[(0,Z.jsxs)(d,{children:["Name",(0,Z.jsx)(p,{type:"text",name:"name",onChange:i,value:r,required:!0,autoComplete:"off"})]}),(0,Z.jsxs)(d,{children:["Email",(0,Z.jsx)(p,{type:"email",name:"email",onChange:i,value:u,required:!0,autoComplete:"off"})]}),(0,Z.jsxs)(d,{children:["Password",(0,Z.jsx)(p,{type:"password",name:"password",onChange:i,value:l,required:!0,autoComplete:"off"})]}),(0,Z.jsx)(f,{type:"submit",children:"Registration"})]})},v=function(){var e=(0,u.I0)();return(0,Z.jsx)(b,{onSubmit:function(n){console.log(n),e((0,l.z2)(n))}})}}}]);
//# sourceMappingURL=11.794907f7.chunk.js.map