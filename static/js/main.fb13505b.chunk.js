(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var a=r(4),l=r.n(a),n=(r(9),r(3)),s=r(1),i=function(e){var t=Object(s.useState)(""),r=Object(n.a)(t,2),a=r[0],l=r[1],i=Object(s.useState)(!1),c=Object(n.a)(i,2),o=c[0],u=c[1],d=e(a);return{value:a,isValid:d,hasError:!d&&o,valueChangeHandler:function(e){l(e.target.value)},inputBlurHandler:function(e){u(!0)},reset:function(){l(""),u(!1)}}},c=r(0),o=function(e){return""!==e.trim()},u=function(e){return e.includes("@")},d=function(e){var t=i(o),r=t.value,a=t.isValid,l=t.hasError,n=t.valueChangeHandler,s=t.inputBlurHandler,d=t.reset,j=i(o),m=j.value,b=j.isValid,h=j.hasError,v=j.valueChangeHandler,p=j.inputBlurHandler,x=j.reset,f=i(u),O=f.value,N=f.isValid,g=f.hasError,B=f.valueChangeHandler,H=f.inputBlurHandler,C=f.reset,E=!1;a&&b&&N&&(E=!0);var S=l?"form-control invalid":"form-control",y=h?"form-control invalid":"form-control",F=g?"form-control invalid":"form-control";return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),E&&(console.log("Submitted!"),console.log(r,m,O),d(),x(),C())},children:[Object(c.jsxs)("div",{className:"control-group",children:[Object(c.jsxs)("div",{className:S,children:[Object(c.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(c.jsx)("input",{type:"text",id:"firstName",onChange:n,onBlur:s,value:r}),l&&Object(c.jsx)("p",{className:"error-text",children:"Please enter a first name."})]}),Object(c.jsxs)("div",{className:y,children:[Object(c.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(c.jsx)("input",{type:"text",id:"lastName",onChange:v,onBlur:p,value:m}),h&&Object(c.jsx)("p",{className:"error-text",children:"Please enter a valid lastName"})]})]}),Object(c.jsxs)("div",{className:F,children:[Object(c.jsx)("label",{htmlFor:"email",children:"E-Mail Address"}),Object(c.jsx)("input",{type:"email",id:"email",onChange:B,onBlur:H,value:O})]}),g&&Object(c.jsx)("p",{className:"error-text",children:"Please enter a valid E-mail"}),Object(c.jsx)("div",{className:"form-actions",children:Object(c.jsx)("button",{disabled:!E,children:"Submit"})})]})};var j=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(d,{})})};l.a.render(Object(c.jsx)(j,{}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.fb13505b.chunk.js.map