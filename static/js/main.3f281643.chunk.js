(this.webpackJsonpotp=this.webpackJsonpotp||[]).push([[0],[,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var c=e(1),i=e.n(c),o=e(6),u=e.n(o),a=(e(12),e(4)),r=(e(13),e(0)),s="#ed1c27",l="#C1C1C1";function f(t){var n=t.disabled,e=void 0===n||n,c=t.text,i=void 0===c?"Button":c;return Object(r.jsx)("button",{className:"custom-button",disabled:e,onClick:function(){},style:(console.log(e),e?{"--mainColor":l}:{"--mainColor":s}),children:i})}var b=e(7),d=(e(15),[".","e"]);function j(t){var n=t.numberOfDigits,e=void 0===n?6:n,i=t.onChangeOtp,o=Object(c.useState)(new Array(e).fill("")),u=Object(a.a)(o,2),s=u[0],l=u[1];Object(c.useEffect)((function(){i(s.join(""))}),[s]);return Object(r.jsx)("div",{className:"otp-container",children:s.map((function(t,n){return Object(r.jsx)("input",{autoComplete:"off",className:"otp-field",maxLength:"1",min:"0",name:"otp",onChange:function(t){return function(t,n){return!isNaN(t.value)&&!d.includes(t.value)&&(l((function(e){return Object(b.a)(e.map((function(e,c){return c===n?t.value:e})))})),void(t.nextSibling&&t.nextSibling.focus()))}(t.target,n)},onFocus:function(t){return t.target.select()},type:"number",value:t},n)}))})}e(16);function p(){var t=Object(c.useState)(""),n=Object(a.a)(t,2),e=n[0],i=n[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{numberOfDigits:6,onChangeOtp:function(t){i(t)}}),Object(r.jsx)("p",{children:e}),Object(r.jsx)(f,{disabled:6!==e.length,text:"Validate"})]})}var O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,u=n.getTTFB;e(t),c(t),i(t),o(t),u(t)}))};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),O()}],[[17,1,2]]]);
//# sourceMappingURL=main.3f281643.chunk.js.map