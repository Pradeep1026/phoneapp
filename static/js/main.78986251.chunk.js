(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},21:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),i=(a(27),a(13)),o=a(4),u=a(5),s=a(7),m=a(6),d=a(8),h=a(37),p=a(38),b=a(36),E=(a(28),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},this.props.title)}}]),t}(n.Component)),f=a(18),v=(a(29),a(11),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",phone:""},a.onSubmit=function(e){e.preventDefault(),a.props.addDetail(a.state.name,a.state.phone),a.setState({name:""}),a.setState({phone:""})},a.onChange=function(e){return a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{to:"/"}," Back "),l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("label",null,l.a.createElement("b",null,"Name:"))," ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:this.onChange,className:"input",required:!0})," ",l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("b",null,"Phone:"))," ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phone",placeholder:"Mobile no:",value:this.state.phone,onChange:this.onChange,className:"input",required:!0})," ",l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("h1",null,"Subscriber to be added")),l.a.createElement("label",null,"NAME: ",this.state.name," ")," ",l.a.createElement("br",null),l.a.createElement("label",null,"PHONE: ",this.state.phone," ")," ",l.a.createElement("br",null),l.a.createElement("input",{type:"submit",name:"Submit",style:{flex:"1"},className:"button"}))))}}]),t}(n.Component)),O=a(1),j=a.n(O),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.detail,t=e.id,a=e.name,n=e.phone;return a?l.a.createElement("tr",null,l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,l.a.createElement("button",{onClick:this.props.delDetails.bind(this,t),className:"button deleteBtn"},"DELETE"))):l.a.createElement("tr",null)}}]),t}(n.Component);y.proTotype={detail:j.a.object.isRequired,delDetails:j.a.func.isRequired};var D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.details.map(function(t){return l.a.createElement(y,{key:t.id,detail:t,delDetails:e.props.delDetails})})}}]),t}(n.Component);D.proTotype={details:j.a.array.isRequired,delDetails:j.a.func.isRequired};var N=D,g=a(12),w=a.n(g),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={details:[{id:w.a.v4(),name:"",phone:""}]},a.delDetails=function(e){a.setState({details:Object(i.a)(a.state.details.filter(function(t){return t.id!==e}))})},a.addDetail=function(e,t){var n={id:w.a.v4(),name:e,phone:t};a.setState({details:[].concat(Object(i.a)(a.state.details),[n])})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"component-container"},l.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{title:"PHONE DIRECTORY"}),l.a.createElement("div",{className:"component-body-container"},l.a.createElement(b.a,{to:"/add",className:"button"}," ADD "),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("th",null,"NAME")," ",l.a.createElement("th",null,"PHONE")," ",l.a.createElement("th",null),l.a.createElement(N,{details:e.state.details,delDetails:e.delDetails})))))}}),l.a.createElement(p.a,{path:"/add",exact:!0,render:function(){return l.a.createElement("div",null,l.a.createElement(E,{title:"ADD SUBSCRIBER"}),l.a.createElement(v,{addDetail:e.addDetail}))}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.78986251.chunk.js.map