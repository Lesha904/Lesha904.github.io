(this.webpackJsonpunit_12=this.webpackJsonpunit_12||[]).push([[0],{14:function(t,e,c){},22:function(t,e,c){},23:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=(c(14),c(2)),o=c(8),d=c(3),l=c(9),j=Object(d.b)({name:"goods",initialState:{goods:l},reducers:{}});Object(o.a)(j.actions);var b=function(t){return t.goods.goods},u=j.reducer,O=c(0);var h=function(t){return Object(O.jsxs)("div",{className:"goods-block",children:[Object(O.jsx)("img",{src:t.image,alt:""}),Object(O.jsx)("p",{children:t.title}),Object(O.jsx)("p",{children:t.cost}),Object(O.jsx)("button",{className:"add-to-cart","data-key":t.articul,children:"Add to cart"})]})},g=Object(d.b)({name:"cart",initialState:{value:{}},reducers:{increment:function(t,e){var c=e.payload;void 0===t.value[c]&&(t.value[c]=0),t.value[c]++},minus:function(t,e){var c=e.payload;t.value[c]--,0===t.value[c]&&delete t.value[c]},remove:function(t,e){var c=e.payload;delete t.value[c]}}}),x=g.actions,m=x.increment,v=x.minus,f=x.remove,p=function(t){return t.cart.value},y=g.reducer;var k=function(){var t=Object(i.c)(b),e=Object(i.b)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"goods-field",onClick:function(t){t.preventDefault();var c=t.target;if(console.log("goodsList: "+c.getAttribute("data-key")),!c.classList.contains("add-to-cart"))return!0;e(m(c.getAttribute("data-key")))},children:t.map((function(t){return Object(O.jsx)(h,{title:t.title,cost:t.cost,image:t.image,articul:t.articul},t.articul)}))})})};c(22);var L=function(t){console.log(t.goodsObj),console.log(t.cart);var e,c=0;e=Object.keys(t.cart).map((function(e){return t.goodsObj[e].cost*t.cart[e]}));for(var n=0;n<e.length;n++)c+=e[n];return console.log("total=======>",c),Object(O.jsx)("div",{className:"cart-block",children:Object(O.jsxs)("table",{border:"1",padding:"10px",margin:"auto",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("th",{children:"\u0426\u0435\u043d\u0430"}),Object(O.jsx)("th",{children:"\u041a\u043e\u043b-\u0432\u043e"}),Object(O.jsx)("th",{children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),Object(O.jsx)("th",{children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(O.jsx)("th",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c/\u0423\u0431\u0440\u0430\u0442\u044c"}),Object(O.jsx)("th",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}),Object(O.jsx)("tbody",{children:Object.keys(t.cart).map((function(e){return Object(O.jsxs)("tr",{children:["  ",Object(O.jsx)("td",{children:t.goodsObj[e].title}),Object(O.jsxs)("td",{children:[t.goodsObj[e].cost," \u0433\u0440\u043d."]}),Object(O.jsx)("td",{children:t.cart[e]}),Object(O.jsxs)("td",{children:[t.goodsObj[e].cost*t.cart[e]," \u0433\u0440\u043d."]})," ",Object(O.jsx)("td",{children:Object(O.jsx)("img",{src:t.goodsObj[e].image,width:"40",alt:""})}),Object(O.jsxs)("td",{children:[Object(O.jsx)("button",{className:"add-to-cart","data-key":t.goodsObj[e].articul,children:" + "}),Object(O.jsx)("button",{className:"sub-from-cart","data-key":t.goodsObj[e].articul,children:" - "})]}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{className:"delete-cart","data-key":t.goodsObj[e].articul,children:" \u0443\u0434\u0430\u043b\u0438\u0442\u044c "})})]},e+t.goodsObj[e].title)}))}),Object(O.jsx)("tfoot",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430:"}),Object(O.jsxs)("td",{children:[c," \u0433\u0440\u043d."]})]})})]})})};var N=function(){var t=Object(i.c)(b),e=Object(i.c)(p),c=Object(i.b)(),n=t.reduce((function(t,e){return t[e.articul]=e,t}),{});return console.log("goodsObj===========>",n),Object(O.jsxs)("div",{className:"cart-field",onClick:function(t){t.preventDefault();var e=t.target;return e.classList.contains("add-to-cart")?c(m(e.getAttribute("data-key"))):e.classList.contains("sub-from-cart")?c(v(e.getAttribute("data-key"))):e.classList.contains("delete-cart")?c(f(e.getAttribute("data-key"))):void 0},children:[" ",Object(O.jsx)(L,{goodsObj:n,cart:e}),"  "]})};var A=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(k,{}),Object(O.jsx)(N,{})]})},C=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;c(t),n(t),r(t),a(t),s(t)}))},F=Object(d.a)({reducer:{goods:u,cart:y}});s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(i.a,{store:F,children:Object(O.jsx)(A,{})})}),document.getElementById("root")),C()},9:function(t){t.exports=JSON.parse('[{"articul":"284s","title":"Apple","cost":70,"image":"https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-64.png"},{"articul":"778d","title":"Lemon","cost":45,"image":"https://cdn0.iconfinder.com/data/icons/fruity-3/512/Lemon-64.png"}]')}},[[23,1,2]]]);
//# sourceMappingURL=main.04c894e6.chunk.js.map