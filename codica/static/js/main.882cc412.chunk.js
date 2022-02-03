(this.webpackJsonpunit_12=this.webpackJsonpunit_12||[]).push([[0],{43:function(t,e,n){},44:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(13),i=n.n(c),s=(n(43),n(44),n(12)),o=n.n(s),u=n(15),l=n(33),d=n(14),j=n(75),h=n(83),b=n(81),p=n(79),f=n(82),m=n(80),O=n(77),x=n(78),g=n(26),y=n(28),v=n.n(y),w=function(){var t=Object(u.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(g.a)(Object(g.a)({},e),{},{appid:"e611b57740c7239015cf25c64b257769",units:"metric"}),r=v.a.stringify(n),t.abrupt("return",fetch("https://api.openweathermap.org/data/2.5/weather?".concat(r)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=n(24),k=Object(S.b)({name:"city",initialState:{allCity:[],cards:{}},reducers:{add:function(t,e){t.allCity.push(e.payload),t.cards[e.payload.id]=e.payload,localStorage.setItem("cards",JSON.stringify(t.cards))}}}),N=k.actions.add,C=function(t){return Object.values(t.city.cards)},B=k.reducer,I=n(2),E=Object(j.a)((function(){return{root:{maxWidth:225,margin:20},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},size:{width:40,height:40,marginLeft:10}}}));var F=function(){var t=E(),e=Object(d.c)(C),n=Object(d.b)();function a(t){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w({id:e});case 2:r=t.sent,n(N(r));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(t){switch(t){case"Clouds":return"img/cloud.png";case"Sun":return"img/sun.png";case"Rain":return"img/rain.png";case"Snow":return"img/snow.png";default:return"img/sun_and_cloud.png"}}return Object(r.useEffect)((function(){var t=localStorage.getItem("cards");if(t){var e=JSON.parse(t);Object.entries(e).forEach((function(t){var e=Object(l.a)(t,2),r=e[0],c=e[1];a(r),n(N(c))})),console.log("Object.values(parsedData ===>",Object.values(e))}}),[]),Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(O.a,{maxWidth:"lm",children:Object(I.jsx)(x.a,{container:!0,children:Object(I.jsx)(x.a,{item:!0,md:12,container:!0,xs:8,direction:"row",justify:"flex-start",children:e.map((function(e){return Object(I.jsxs)(h.a,{className:t.root,variant:"outlined",children:[Object(I.jsxs)(p.a,{children:[Object(I.jsxs)(m.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:["Name: ",e.name,Object(I.jsx)("br",{})]}),Object(I.jsxs)(m.a,{variant:"h6",component:"h2",children:["Temperature: ",e.main.temp,"\xb0",Object(I.jsx)("br",{})]}),Object(I.jsxs)(m.a,{className:t.pos,color:"textSecondary",children:["Pressure: ",e.main.pressure,Object(I.jsx)("br",{})]}),Object(I.jsxs)(m.a,{variant:"body1",component:"p",children:["Humidity: ",e.main.humidity,Object(I.jsx)("br",{}),Object(I.jsx)("br",{})]}),Object(I.jsxs)(m.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:["Speed of wind: ",e.wind.speed,Object(I.jsx)("br",{})]}),Object(I.jsxs)(m.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:["Description:",Object(I.jsx)("img",{src:i(e.weather[0].main),className:t.size,alt:e.weather[0].main})]})]}),Object(I.jsx)(b.a,{children:Object(I.jsx)(f.a,{size:"small",color:"secondary",onClick:function(){a(e.id)},children:"Button"})})]},e.name)}))})})})})};var T=function(){var t=a.a.createRef(),e=Object(d.b)();function n(){return(n=Object(u.a)(o.a.mark((function n(){var r,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.current.value,n.prev=1,n.next=4,w({q:r});case 4:a=n.sent,e(N(a)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.warn("error ===>",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"text",children:"This application was created using React and Redux technology. If you want to get a weather forecast for any city in the world at the current time, then you need to enter the name of the city in English in the input field, and then press the OK button and you will receive a card containing information about the weather in the city you have chosen. If you click on the button on the card after a while, you will get an updated weather forecast."}),Object(I.jsx)("input",{type:"text",className:"input",ref:t}),Object(I.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return n.apply(this,arguments)},children:"OK "})]})};var z=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{}),Object(I.jsx)(F,{})]})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))},R=Object(S.a)({reducer:{city:B}});i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(d.a,{store:R,children:Object(I.jsx)(z,{})})}),document.getElementById("root")),J()}},[[54,1,2]]]);
//# sourceMappingURL=main.882cc412.chunk.js.map