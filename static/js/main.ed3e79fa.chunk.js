(this.webpackJsonplab2=this.webpackJsonplab2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),o=n(7),a=n.n(o),i=(n(14),n(2)),l=n(9),d=n(5),r=(n(15),n(8)),u=n(0);var b=function(e){return Object(u.jsx)("div",{className:"backdrop",children:Object(u.jsxs)("div",{className:"modal",children:[e.children,Object(u.jsxs)("div",{className:"alert-buttons",children:[Object(u.jsx)("button",{className:"alert-button alert-cancel",type:"button",onClick:e.onClose,children:"Cancel"}),Object(u.jsx)("button",{className:"alert-button alert-ok",type:"button",onClick:function(){e.onOK(),e.onClose()},children:"OK"})]})]})})};var j=function(e){return Object(u.jsxs)("div",{className:"dropdown",id:"view-button",children:[Object(u.jsxs)("button",{className:"menu-buttons",children:[e.name,Object(u.jsx)("span",{className:"small-triangle",children:" \u25bc "})]}),Object(u.jsxs)("div",{className:"dropdown-content",children:[Object(u.jsx)("button",{className:"dropdown-item",onClick:function(){"trash"===e.id?(e.toggleModal(),e.setCurrentDeleteOption(e.options.option1)):e.deleteOrView(e.id,e.options.option1)},children:e.options.option1}),Object(u.jsx)("button",{className:"dropdown-item",onClick:function(){"trash"===e.id?(e.toggleModal(),e.setCurrentDeleteOption(e.options.option2)):e.deleteOrView(e.id,e.options.option2)},children:e.options.option2}),Object(u.jsx)("button",{className:"dropdown-item",onClick:function(){"trash"===e.id?(e.toggleModal(),e.setCurrentDeleteOption(e.options.option3)):e.deleteOrView(e.id,e.options.option3)},children:e.options.option3})]})]})};var h=function(e){return Object(u.jsx)("label",{className:"task-item",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",className:"check",defaultChecked:e.checked,onClick:function(){return e.toggleCheckbox(e.id)}}),Object(u.jsx)("span",{className:"checkmark"}),Object(u.jsx)("input",{defaultValue:e.name,onChange:function(t){return e.handleTaskNameChange(t,e.id)}})]})})};var p=function(e){return Object(u.jsx)("div",{id:"task-container",children:e.tasksData.map((function(t){return Object(u.jsx)(h,Object(i.a)(Object(i.a)({handleTaskNameChange:e.handleTaskNameChange},t),{},{toggleCheckbox:e.toggleCheckbox}),t.id)}))})},k="",m=[{id:1,name:"test",checked:!1},{id:2,name:"test2",checked:!1}],O={option1:"All Tasks",option2:"Completed Tasks",option3:"Uncompleted Tasks"},f=[{id:"view",name:"View"},{id:"trash",name:"\ud83d\uddd1"}];var x=function(){var e=Object(s.useState)(m),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(s.useState)(!1),a=Object(d.a)(o,2),h=a[0],x=a[1],g=Object(s.useState)("All Tasks"),C=Object(d.a)(g,2),v=C[0],N=C[1];function T(){x(!h)}function w(e){k=e}function A(e,t){if("trash"===e)if("All Tasks"===t)c([]);else if("Completed Tasks"===t){var s=n.filter((function(e){return!1===e.checked}));c(s)}else if("Uncompleted Tasks"===t){var o=n.filter((function(e){return!0===e.checked}));c(o)}"view"===e&&("All Tasks"===t?N("All Tasks"):"Completed Tasks"===t?N("Completed Tasks"):"Uncompleted Tasks"===t&&N("Uncompleted Tasks"))}return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{children:"Tasks"}),h&&Object(u.jsx)(b,{onClose:T,onOK:function(){return A("trash",k)},dropdownOptions:O,children:Object(u.jsx)("div",{children:"Are you sure you want to delete these tasks?"})}),Object(u.jsxs)("div",{className:"buttons-and-tasks",children:[Object(u.jsxs)("div",{className:"menu-buttons-container",children:[Object(u.jsx)("div",{className:"dropdown",id:"new-item-button",children:Object(u.jsx)("button",{type:"button",className:"menu-buttons",onClick:function(){c([{id:Object(r.a)(),name:"Enter Task",checked:!1}].concat(Object(l.a)(n)))},children:"New Item"})}),f.map((function(e){return Object(u.jsx)(j,Object(i.a)(Object(i.a)({setCurrentDeleteOption:w,toggleModal:T,tasksData:n},e),{},{options:O,deleteOrView:A}),e.id)}))]}),Object(u.jsx)(p,{handleTaskNameChange:function(e,t){console.log("handling task name change!");var s=n.findIndex((function(e){return e.id===t}));n[s].name=e.target.value,console.log(n),c(n)},tasksData:n.filter((function(e){return t=e,"All Tasks"===v||"Completed Tasks"===v&&t.checked||"Uncompleted Tasks"===v&&!t.checked;var t})),toggleCheckbox:function(e){n.find((function(t){return t.id===e})).checked=!n.find((function(t){return t.id===e})).checked}})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.ed3e79fa.chunk.js.map