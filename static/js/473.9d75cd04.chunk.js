"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[473],{2473:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,o,a,i,d=r(2791),p=r(8270),c=r(9434),s=function(n){var e=n.contacts,r=n.filter;if(!r)return e.items;var t=r.toLowerCase();return e.items.filter((function(n){return n.name.toLowerCase().includes(t)}))},x=r(168),l=r(6444),u=l.ZP.form(t||(t=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  /* border: solid 1px black; */\n  align-items: center;\n  /* background-color: #c51bd6; */\n  /* border-radius: 5px; */\n  /* border-radius: 0px 0px 5px 5px; */\n\n  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2); */\n  /* border-radius: 0px 0px 4px 4px; */\n"]))),b=l.ZP.label(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: white;\n\n  padding: 10px;\n"]))),m=l.ZP.input(a||(a=(0,x.Z)(["\n  width: 300px;\n\n  outline-color: #731bd6;\n  color: #731bd6;\n  border-radius: 5px;\n  border: none;\n  padding: 3px;\n\n  margin-top: 8px;\n"]))),h=l.ZP.button(i||(i=(0,x.Z)(["\n  cursor: pointer;\n  color: white;\n  border: none;\n  padding: 10px;\n  background-color: #731bd6;\n  width: 50%;\n  border-radius: 5px;\n  margin-bottom: 10px;\n\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),f=r(885),g=function(){var n=(0,d.useState)(""),e=(0,f.Z)(n,2),r=e[0],t=e[1],o=(0,d.useState)(""),a=(0,f.Z)(o,2),i=a[0],s=a[1];var x=(0,c.I0)(),l=function(n){x((0,p.uK)(n))};return{name:r,number:i,setName:t,setNumber:s,submitOnForm:function(n){n.preventDefault(),l({name:r,number:i}),t(""),s("")}}},Z=r(184);var j,v,w,y,k,C,P,z=function(){var n=g(),e=n.name,r=n.number,t=n.setName,o=n.setNumber,a=n.submitOnForm;return(0,Z.jsxs)(u,{onSubmit:a,children:[(0,Z.jsxs)(b,{children:["Name",(0,Z.jsx)(m,{onChange:function(n){t(n.currentTarget.value)},value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off"})]}),(0,Z.jsxs)(b,{children:["Phone",(0,Z.jsx)(m,{onChange:function(n){o(n.currentTarget.value)},value:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off"})]}),(0,Z.jsx)(h,{type:"submit",children:"Add contact"})]})},A=r(3313),N=l.ZP.ul(j||(j=(0,x.Z)(["\n  list-style: none;\n"]))),F=l.ZP.li(v||(v=(0,x.Z)(["\n  display: flex;\n  /* flex-direction: column; */\n  justify-content: space-between;\n\n  padding: 5px;\n\n  background-color: #c51bd6;\n  border-radius: 5px;\n  /* outline: 1px solid black; */\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),T=l.ZP.button(w||(w=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n\n  padding: 0 4px 0 4px;\n  margin-left: 10px;\n  background-color: inherit;\n  border: none;\n\n  cursor: pointer;\n  /* color: #ff4242; */\n  color: white;\n  font-weight: bold;\n\n  border-radius: 5px;\n"]))),_=function(n){var e=n.contacts,r=n.deleteContact;return(0,Z.jsx)(N,{children:e.map((function(n){var e=n.id,t=n.number,o=n.name;return(0,Z.jsxs)(F,{children:[o,": ",t,(0,Z.jsxs)(T,{onClick:function(){r(e)},children:["Delete",(0,Z.jsx)(A.hT1,{size:20})]})]},e)}))})},I=r(5653),S=function(n){return n.filter},q=l.ZP.input(y||(y=(0,x.Z)(["\n  /* width: 300px; */\n\n  outline-color: #731bd6;\n  color: #731bd6;\n  border-radius: 5px;\n  border: none;\n  padding: 3px;\n\n  margin-top: 8px;\n"]))),D=function(){var n=(0,c.I0)(),e=(0,c.v9)(S);return(0,c.v9)(s).length<1&&""===e?(0,Z.jsx)("p",{children:"Contacts list is empty"}):(0,Z.jsxs)("label",{children:[(0,Z.jsx)("p",{children:"Find contacts by name"}),(0,Z.jsx)(q,{value:e,type:"text",onChange:function(e){n((0,I.T)(e.target.value))}})]})},L=l.ZP.div(k||(k=(0,x.Z)(["\n  display: flex;\n  justify-content: space-around;\n  /* flex-direction: column; */\n  /* align-items: center; */\n"]))),O=l.ZP.div(C||(C=(0,x.Z)(["\n  margin-top: 25px;\n  /* background-color: #731bd6; */\n  color: white;\n  text-align: center;\n\n  border-radius: 5px;\n\n  max-height: 185px;\n"]))),B=l.ZP.div(P||(P=(0,x.Z)(["\n  min-width: 380px;\n  min-height: 260px;\n\n  padding-left: 10px;\n  padding-right: 10px;\n\n  margin-top: 25px;\n  /* background-color: #731bd6; */\n  color: white;\n  text-align: center;\n\n  border-radius: 5px;\n"]))),E=function(){var n=(0,c.I0)(),e=(0,c.v9)(s);return(0,d.useEffect)((function(){n((0,p.yF)())}),[n]),(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(O,{children:[(0,Z.jsx)("h2",{children:"Phonebook"}),(0,Z.jsx)(z,{})]}),(0,Z.jsxs)(B,{children:[(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsx)(D,{}),(0,Z.jsx)(_,{contacts:e,deleteContact:function(e){n((0,p.zY)(e))}})]})]})}}}]);
//# sourceMappingURL=473.9d75cd04.chunk.js.map