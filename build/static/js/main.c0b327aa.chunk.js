(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,l,t){},15:function(e,l,t){"use strict";t.r(l);var n=t(1),c=t(6),i=t.n(c),s=t(3),j=t(7),r=t(8),a=(t(13),t(0));function b(){var e=Object(n.useState)({skills:[{skill:"JavaScript",level:"4"}],newSkill:{skill:"",level:"3"}}),l=Object(r.a)(e,2),t=l[0],c=l[1];function i(e){c((function(l){return Object(s.a)(Object(s.a)({},l),{},{newSkill:Object(s.a)(Object(s.a)({},l.newSkill),{},{[e.target.name]:e.target.value})})}))}return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"DEV SKILLS"}),Object(a.jsx)("hr",{}),t.skills.map((function(e){return Object(a.jsxs)("article",{children:[Object(a.jsx)("div",{children:e.skill})," ",Object(a.jsx)("div",{children:e.level})]},e.skill)})),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c((function(e){return{skills:[].concat(Object(j.a)(e.skills),[e.newSkill]),newSkill:{skill:"",level:"3"}}}))},children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{children:"SKILL"}),Object(a.jsx)("input",{name:"skill",value:t.newSkill.skill,onChange:i})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{children:"LEVEL"}),Object(a.jsxs)("select",{name:"level",value:t.newSkill.level,onChange:i,children:[Object(a.jsx)("option",{value:"1",children:"1"}),Object(a.jsx)("option",{value:"2",children:"2"}),Object(a.jsx)("option",{value:"3",children:"3"}),Object(a.jsx)("option",{value:"4",children:"4"}),Object(a.jsx)("option",{value:"5",children:"5"})]})]}),Object(a.jsx)("button",{children:"ADD SKILL"})]})]})}var o=document.getElementById("root");i.a.render(Object(a.jsx)(n.StrictMode,{children:Object(a.jsx)(b,{})}),o)}},[[15,1,2]]]);
//# sourceMappingURL=main.c0b327aa.chunk.js.map