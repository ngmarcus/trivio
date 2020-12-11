(this.webpackJsonptrivio=this.webpackJsonptrivio||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=(n(71),n(61)),s=n(26),u=n(34),j=(n(72),n(130)),d=function(e){var t=e.value,n=e.onClick,a=e.text;return Object(c.jsx)(j.a,{size:"large",variant:"contained",color:"secondary",onClick:n,value:t,children:a})},b=n(134),f=(n(77),function(e){var t=e.correct,n=e.incorrect,a=e.clickHandler,r=function(e,t){var n=e.concat(t).sort((function(){return Math.random()-.5}));return console.log(n),n}(n,t);return Object(c.jsx)(b.a,{container:!0,direction:"row",justify:"space-around","flex-wrap":"wrap","align-items":"stretch",children:r.map((function(e){return Object(c.jsx)("div",{className:"choice",children:Object(c.jsx)(d,{onClick:a,value:Number(t===e),text:window.decodeURIComponent(e)})},e)}))})}),O=function(e){var t=e.questionData,n=e.clickHandler;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:window.decodeURIComponent(t.question)}),Object(c.jsx)(f,{correct:t.correct_answer,incorrect:t.incorrect_answers,clickHandler:n})]})},m=n(135),h=n(136),g=n(97),x=n(140),v=n(141),p=n(139),y=n(137),C=n(138),w=n(142),k=Object(m.a)((function(e){return{props:{fieldset:{FormControl:"secondary"}},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),H=function(e){var t=k(),n=e.clickHandler,r=e.categories,i=e.settingsHandler,o=e.difficultyHandler,l=e.settings;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h1",{children:["Welcome to ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{style:{fontFamily:"monospace"},children:"TrivIO!"})]}),Object(c.jsx)(d,{onClick:n,value:0,text:"Take a Trivia Quiz"}),Object(c.jsx)("h6",{children:"You may optionally customize any of the following!"}),Object(c.jsxs)(h.a,{component:"fieldset",children:[Object(c.jsx)(g.a,{component:"legend",children:"Difficulty"}),Object(c.jsxs)(x.a,{id:"difficulty",defaultValue:l.difficulty||"any",row:!0,"aria-label":"difficulty",name:"difficulty",value:a.Children.value,onChange:o,style:{justifyContent:"center"},children:[Object(c.jsx)(v.a,{value:"any",control:Object(c.jsx)(p.a,{}),label:"Mixed"}),Object(c.jsx)(v.a,{value:"easy",control:Object(c.jsx)(p.a,{}),label:"Easy"}),Object(c.jsx)(v.a,{value:"medium",control:Object(c.jsx)(p.a,{}),label:"Medium"}),Object(c.jsx)(v.a,{value:"hard",control:Object(c.jsx)(p.a,{}),label:"Hard"})]})]}),Object(c.jsxs)(h.a,{className:t.formControl,children:[Object(c.jsx)(y.a,{id:"category-label",children:"Category"}),Object(c.jsxs)(C.a,{defaultValue:l.category||-1,labelId:"demo-simple-select-label",id:"category",value:a.Children.value,onChange:i,name:"category",children:[Object(c.jsx)(w.a,{value:-1,children:"Mixed"}),r.map((function(e){return Object(c.jsx)(w.a,{value:e.id,children:e.name},e.id)}))]})]}),Object(c.jsxs)(h.a,{className:t.formControl,children:[Object(c.jsx)(y.a,{id:"demo-simple-select-label",children:"# of Questions"}),Object(c.jsxs)(C.a,{defaultValue:l.numQuestions||10,labelId:"demo-simple-select-label",id:"numQuestions",value:a.Children.value,onChange:i,name:"numQuestions",children:[Object(c.jsx)(w.a,{value:5,children:"5"}),Object(c.jsx)(w.a,{value:10,children:"10"}),Object(c.jsx)(w.a,{value:15,children:"15"}),Object(c.jsx)(w.a,{value:20,children:"20"})]})]})]})},Q=function(e){var t=e.answers,n=e.clickHandler;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsxs)("h1",{children:["Completed",Object(c.jsx)("br",{}),"You scored ",t.map((function(e){return e?1:0})).reduce((function(e,t){return e+t}),0)," out of ",t.length-2,"!"]}),Object(c.jsx)(d,{onClick:n,value:0,text:"Return to Home"})]})})},F=n(45),N=n.n(F),I=function(e){var t=e.difficulty,n=function(e,t,n,c){return e+"&amount=".concat(t,"&").concat(function(e){return-1===e?"":"category=".concat(e)}(n),"&").concat(function(e){return"any"===e?"":"difficulty=".concat(e)}(c))}("https://opentdb.com/api.php?type=multiple&encode=url3986",e.numQuestions,e.category,t);return console.log(n),N.a.get(n).then((function(e){return e.data.results}))},S=function(){return N.a.get("https://opentdb.com/api_category.php").then((function(e){return e.data.trivia_categories}))},T=function(e){return new Uint8Array(e+2)};var D=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),o=Object(u.a)(i,2),j=o[0],d=o[1],b=Object(a.useState)([]),f=Object(u.a)(b,2),m=f[0],h=f[1],g=Object(a.useState)({difficulty:"any",numQuestions:10,category:-1}),x=Object(u.a)(g,2),v=x[0],p=x[1],y=Object(a.useState)(T(v.numQuestions)),C=Object(u.a)(y,2),w=C[0],k=C[1];Object(a.useEffect)((function(){0===n?I(v).then((function(e){d([null].concat(e)),k(T(v.numQuestions)),console.log("retrieving")})):n===v.numQuestions+1&&d([])}),[n,v]),Object(a.useEffect)((function(){return S().then((function(e){return h(e)}))}),[]),console.log("answer is ",w),console.log(j[0]),console.log("Currently on question number ".concat(n));var F=function(e){e.preventDefault();var t=Object(l.a)(w);t[n]=Number(e.currentTarget.value),k(t),r(j.length||n?(n+1)%w.length:n)};return Object(c.jsxs)("header",{className:"App-header",children:[0===n&&Object(c.jsx)(H,{clickHandler:F,categories:m,settingsHandler:function(e){var t,n=e.target.name;"numQuestions"===n?t=Object(s.a)(Object(s.a)({},v),{},{numQuestions:e.target.value}):"category"===n&&(t=Object(s.a)(Object(s.a)({},v),{},{category:e.target.value})),p(t)},difficultyHandler:function(e){p(Object(s.a)(Object(s.a)({},v),{},{difficulty:e.target.value}))},settings:v}),n!==v.numQuestions+1&&0!==n&&Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(O,{questionData:j[n],clickHandler:F})}),n===v.numQuestions+1&&Object(c.jsx)(Q,{answers:w,clickHandler:F})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),E()}},[[96,1,2]]]);
//# sourceMappingURL=main.e22ae8cb.chunk.js.map