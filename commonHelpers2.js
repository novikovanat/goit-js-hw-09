import"./assets/styless-966ad746.js";import{v as l}from"./assets/vendor-c8208318.js";const o=document.querySelector(".feedback-form");let i=JSON.parse(localStorage.getItem("feedback-form-state"));function n({email:e="",message:s=""}){console.log("this is form message: ",o.message.value=s),console.log("This is form email: ",o.email.value=e)}i!==null&&n(i);console.log("This is saved feedback message: ",i);let a={};o.addEventListener("input",r);function r(e){let s=e.currentTarget.elements[0].value,t=e.currentTarget.elements[1].value;a.email=s.trim(),a.message=t.trim(),console.log("This is feedback message: ",a),localStorage.setItem("feedback-form-state",JSON.stringify(a))}o.addEventListener("submit",c);function c(e){e.preventDefault(),console.log("InputChesk in submit",m(a)),m(a)?(console.log(a),localStorage.removeItem("feedback-form-state"),o.reset()):alert("There is no email or message")}function m(e){const{email:s="",message:t=""}=e;return console.log("This email and message from input check: ",s,t),console.log("Email check: ",l.isEmail(s)),console.log("Message check: ",!l.isEmpty(t)),l.isEmail(s)&&!l.isEmpty(t)}
//# sourceMappingURL=commonHelpers2.js.map
