"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[660],{5660:function(s,e,a){a.r(e),a.d(e,{default:function(){return v}});a(2791);var i=a(2906),n={dialogs:"Dialogs_dialogs__k3xDK",dialogsItems:"Dialogs_dialogsItems__szQjE",active:"Dialogs_active__JiO+P",messages:"Dialogs_messages__zIGR2",message:"Dialogs_message__FwqZs"},d=a(1087),o=a(184),l=function(s){var e="/dialogs/"+s.id;return(0,o.jsx)("div",{className:n.dialog,children:(0,o.jsx)(d.OL,{to:e,children:s.name})})},r=function(s){return(0,o.jsx)("div",{className:n.message,children:s.message})},t=a(7689),g=a(834),c=a(6139),m=a(704),u=a(5279),_=(0,g.D)(50),j=(0,m.Z)({form:"dialogAddMessageForm"})((function(s){return(0,o.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(c.Z,{component:u.gx,name:"newMessageBody",placeholder:"Enter your message",validate:[g.C,_]})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"Send"})})]})})),x=function(s){var e=s.dialogsPage,a=e.dialogs.map((function(s){return(0,o.jsx)(l,{name:s.name,id:s.id},s.id)})),i=e.messages.map((function(s){return(0,o.jsx)(r,{message:s.message,id:s.id},s.id)}));return s.isAuth?(0,o.jsxs)("div",{className:n.dialogs,children:[(0,o.jsx)("div",{className:n.dialogsItems,children:a}),(0,o.jsx)("div",{className:n.messages,children:(0,o.jsx)("div",{children:i})}),(0,o.jsx)(j,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]}):(0,o.jsx)(t.Fg,{to:"/login",replace:!0})},f=a(8687),h=a(1548),v=(0,a(7781).qC)((0,f.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,i.X)(e))}}})),h.D)(x)}}]);
//# sourceMappingURL=660.3661e1b4.chunk.js.map