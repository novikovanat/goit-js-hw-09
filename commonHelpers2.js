import"./assets/modulepreload-polyfill-3cfb730f.js";import{v as l}from"./assets/vendor-c8208318.js";const t=document.querySelector(".feedback-form");let i=JSON.parse(localStorage.getItem("feedback-form-state"));function n({email:e="",message:s=""}){console.log("this is form message: ",t.message.value=s),console.log("This is form email: ",t.email.value=e)}i!==null&&n(i);console.log("This is saved feedback message: ",i);let a={};t.addEventListener("input",r);function r(e){let s=e.currentTarget.elements[0].value,o=e.currentTarget.elements[1].value;a.email=s.trim(),a.message=o.trim(),console.log("This is feedback message: ",a),localStorage.setItem("feedback-form-state",JSON.stringify(a))}t.addEventListener("submit",c);function c(e){e.preventDefault(),console.log("InputChesk in submit",m(a)),m(a)?(console.log(a),localStorage.removeItem("feedback-form-state"),t.reset()):alert("There is no email or message")}function m(e){const{email:s="",message:o=""}=e;return console.log("This email and message from input check: ",s,o),console.log("Email check: ",l.isEmail(s)),console.log("Message check: ",!l.isEmpty(o)),l.isEmail(s)&&!l.isEmpty(o)}
//# sourceMappingURL=commonHelpers2.js.map
