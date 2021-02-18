(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),i=(n(18),n(12)),o=n(6),u=n(2),b=n(3),h=n(5),l=n(4),d=(n(19),n(0)),j=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:e}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(d.jsxs)("form",{ref:n,className:"add-form",onSubmit:function(a){a.preventDefault();var c=e.current.value;c&&t.onAdd(c),n.current.reset()},children:[Object(d.jsx)("input",{ref:e,className:"add-input",type:"text",placeholder:"Habit"}),Object(d.jsx)("button",{className:"add-button",children:"Add"})]})})),m=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{onAdd:this.props.onAdd}),Object(d.jsx)("ul",{children:this.props.habits.map((function(e){return Object(d.jsx)(j,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))}),Object(d.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.PureComponent),f=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(d.jsx)("span",{children:"Habit Tracker"}),Object(d.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=(n(13),function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(o.a)(Object(o.a)({},e),{},{count:n<0?0:n})}return t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t.handleAdd=function(e){var n=[].concat(Object(i.a)(t.state.habits),[{id:Date.now(),name:e,count:0}]);t.setState({habits:n})},t.handleReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(o.a)(Object(o.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state.habits;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),",",Object(d.jsx)(m,{habits:t,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset},t.id)]})}}]),n}(a.Component)),v=(n(21),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))});r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),v()}},[[25,1,2]]]);
//# sourceMappingURL=main.a70c14f7.chunk.js.map