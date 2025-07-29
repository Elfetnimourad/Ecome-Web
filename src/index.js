"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Main E-commerce product and cart functionality
 * 
 * Features:
 * - Fetches and displays products
 * - Responsive mobile menu
 * - Add to cart functionality
 * - Cart item quantity management
 * - Dynamic total price calculation
 */

// DOM elements setup
var show = document.querySelector('.show');
var header = document.querySelector('.header');
var sideBarMoreIcon = document.querySelector(".sidebar-more-icon");
var searchBar = document.querySelector('input');
var closeMoreIcon = document.getElementById('closeIcon');
var menu = document.querySelector(".menu");
var icons = document.querySelector('.icons');
var home = document.querySelector('a');
var cartShop = document.querySelector('.fa-cart-shopping');
var cartBadge = document.querySelector('.cart-with-badge');
var beforeCart = window.getComputedStyle(cartShop, '::after');
var closeIcon = document.querySelector(".fa-xmark");
var arrOfItemsList = document.querySelector(".arr-of-items");
var sidebar = document.querySelector('.sidebar');
var logout = document.querySelector('.logout');

// Badge element for cart counter
var badge = document.createElement('div');
badge.classList.add("badge");

// Total price element
var totPrice = document.createElement("span");
totPrice.classList.add("totPrice");

// Cart and quantity tracking
var count = 0;
var countedItem = 1;
var quantity = {
  quantity: 0
};
var t = 0;

// Set to track added items for duplication check
var tryArr = new Set();

/**
 * Product item interface
 */

// Product arrays
var arrOfItems = [];
var ab = [];

// Sidebar show/hide
cartShop === null || cartShop === void 0 || cartShop.addEventListener('click', function () {
  sidebar.classList.remove('d-none');
});
closeIcon === null || closeIcon === void 0 || closeIcon.addEventListener('click', function () {
  sidebar.classList.add('d-none');
});

// Responsive menu toggle
menu.addEventListener('click', function () {
  sideBarMoreIcon.classList.remove('d-none');
});
closeMoreIcon.addEventListener('click', function () {
  sideBarMoreIcon.classList.add('d-none');
});

// Set home link color
home.style.color = "black";

/**
 * Fetch and display product data
 */
function getApi() {
  return _getApi.apply(this, arguments);
} // Start the app
function _getApi() {
  _getApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var getResult, res, data, arr, iconsPart, addCircle, isExpanded, copiedArray;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          /**
           * Render filtered products and enable cart actions
           * @param copiedArray - list of products to display
           */
          getResult = function getResult(copiedArray) {
            copiedArray.forEach(function (element) {
              // Create product card elements
              var heading = document.createElement('h5');
              var image = document.createElement('img');
              var card = document.createElement('div');
              var price = document.createElement('p');
              var buyBtn = document.createElement('button');
              heading.innerHTML = element.title;
              image.src = element.images[0];
              price.innerHTML = "Price: ".concat(element.price, "$");
              buyBtn.innerText = "BUY";

              // Style elements
              image.style.width = '290px';
              image.style.height = '220px';
              image.style.padding = '15px';
              price.style.paddingBottom = '5px';
              price.style.paddingRight = '5px';
              buyBtn.style.width = '99%';
              buyBtn.style.height = '25px';
              buyBtn.style.backgroundColor = '#007BFF';
              buyBtn.style.color = 'white';
              buyBtn.style.borderRadius = '7px';
              card.style.height = '400px';
              card.style.borderRadius = '10px';
              card.style.backgroundColor = 'white';
              card.style.display = 'flex';
              card.style.flexDirection = 'column';
              card.style.alignItems = 'center';
              card.style.justifyContent = 'space-between';
              card.style.margin = '10px';
              card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              card.style.padding = '10px';

              // Append elements
              card.appendChild(image);
              card.appendChild(heading);
              card.appendChild(price);
              card.appendChild(buyBtn);
              show.appendChild(card);
              var toot;
              var objItem = _objectSpread(_objectSpread({}, element), {}, {
                quantity: quantity,
                toot: toot
              });

              /**
               * Show full product details when clicking image
               */
              image.addEventListener('click', function () {
                show.innerHTML = '';
                var partImage = document.createElement("div");
                var partDetails = document.createElement("div");
                var productCard = document.createElement('div');
                var productImage = document.createElement('img');
                var productTitle = document.createElement("h4");
                var descrptionProduct = document.createElement("p");
                var productPrice = document.createElement('span');
                var productDimensions = document.createElement("h5");
                var productStock = document.createElement("p");
                for (var i = 0.1; i <= element.rating; i++) {
                  var rateProduct = document.createElement("i");
                  rateProduct.classList = 'fa-solid fa-star';
                  rateProduct.style.color = "yellow";
                  partDetails.appendChild(rateProduct);
                  productCard.appendChild(partDetails);
                }
                show.style.height = '80vh';
                productImage.src = element.images[0];
                productImage.className = 'productImage';
                productImage.style.border = '1px solid lightblue';
                productImage.style.boxShadow = '2px 2px 2px lightblue';
                productTitle.innerText = 'Title :' + element.title;
                descrptionProduct.innerText = "Product Description :" + element.description;
                productPrice.innerText = 'Price :' + element.price + "$";
                productDimensions.innerHTML = "Dimensions :" + JSON.stringify(element.dimensions);
                productStock.innerHTML = "Stock :" + element.stock;
                partImage.appendChild(productImage);
                partDetails.appendChild(productTitle);
                partDetails.appendChild(descrptionProduct);
                partDetails.appendChild(productDimensions);
                partDetails.appendChild(productPrice);
                partDetails.appendChild(productStock);
                partDetails.className = 'partDetails';
                productCard.style.display = 'flex';
                productCard.style.flexDirection = 'row';
                productCard.style.width = '150vh';
                productCard.style.height = '70vh';
                productCard.appendChild(partImage);
                productCard.appendChild(partDetails);
                show.appendChild(productCard);
              });

              /**
               * Handle add to cart action
               */
              buyBtn.addEventListener('click', function () {
                count++;
                badge.innerHTML = count.toString();
                cartBadge.style.transform = 'translateY(10%)';
                objItem.quantity++;
                objItem.toot = objItem.quantity * objItem.price || objItem.price;
                arrOfItems.push(objItem);
                arrOfItemsList.innerHTML = "";
                var arrOfSetItems = new Set([].concat(arrOfItems));
                var ar = [];
                arrOfSetItems.forEach(function (ele, index) {
                  if (ele.quantity !== 0) {
                    var cardItem = document.createElement('div');
                    var imgItem = document.createElement('img');
                    var titleItem = document.createElement("p");
                    var amount = document.createElement("span");
                    var decBtn = document.createElement("button");
                    var incBtn = document.createElement("button");

                    // Increment
                    incBtn.addEventListener("click", function () {
                      ele.quantity++;
                      amount.innerHTML = "Amount :" + ele.quantity;
                      ele.toot = ele.quantity * ele.price;
                      count++;
                      badge.innerHTML = count.toString();
                      var sum = _toConsumableArray(arrOfSetItems.values()).map(function (e) {
                        return e.toot;
                      }).reduce(function (e, c) {
                        return e + c;
                      });
                      totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
                    });

                    // Decrement
                    decBtn.addEventListener("click", function () {
                      ele.quantity--;
                      amount.innerHTML = "Amount :" + ele.quantity;
                      ele.toot = ele.quantity * ele.price;
                      count--;
                      badge.innerHTML = count.toString();
                      var sum = _toConsumableArray(arrOfSetItems.values()).map(function (e) {
                        return e.toot;
                      }).reduce(function (e, c) {
                        return e + c;
                      });
                      totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
                      if (count === 0) {
                        badge.classList.remove('badge');
                        totPrice.remove();
                      }
                      if (ele.quantity === 0) {
                        cardItem.remove();
                        arrOfSetItems.delete(ele);
                      }
                    });

                    // Ensure quantity initialized
                    if (!tryArr.has(ele)) {
                      ele.quantity = 1;
                      tryArr.add(ele);
                    }
                    amount.innerHTML = "Amount :" + ele.quantity;
                    var totNumber = ele.quantity * ele.price;
                    ar.push(totNumber);
                    incBtn.innerHTML = '+';
                    decBtn.innerHTML = '-';
                    imgItem.src = ele.images[0];
                    imgItem.style.height = '80px';
                    imgItem.style.width = '80px';
                    titleItem.innerHTML = ele.title;
                    amount.appendChild(incBtn);
                    amount.appendChild(decBtn);
                    cardItem.appendChild(imgItem);
                    cardItem.appendChild(titleItem);
                    cardItem.appendChild(amount);
                    arrOfItemsList.appendChild(cardItem);
                  }
                });

                // Append total price
                var sum = _toConsumableArray(arrOfSetItems.values()).map(function (e) {
                  return e.toot;
                }).reduce(function (e, c) {
                  return e + c;
                });
                totPrice.innerHTML = 'Total Price :' + sum.toString() + "$";
                arrOfItemsList.appendChild(totPrice);
                arrOfItemsList.style.overflow = "scroll";
              });
            });
          }; // If no search term, show all
          _context.next = 4;
          return fetch("https://dummyjson.com/products");
        case 4:
          res = _context.sent;
          _context.next = 7;
          return res.json();
        case 7:
          data = _context.sent;
          // Filter out unwanted products
          arr = data.products.filter(function (e) {
            return e.title !== 'Beef Steak' && e.title !== 'Cucumber';
          }); // Responsive mobile layout setup
          if (window.innerWidth < 800) {
            iconsPart = document.createElement('div');
            iconsPart.className = 'icons-wrapper';
            addCircle = document.createElement('i');
            addCircle.className = 'fa-solid fa-circle-plus add-circle-icon';
            icons.remove();
            iconsPart.appendChild(addCircle);
            header.appendChild(iconsPart);
            isExpanded = true;
            addCircle.addEventListener('click', function () {
              isExpanded = !isExpanded;
              if (isExpanded) {
                var iconsBar = document.createElement('div');
                iconsBar.className = 'icons-bar';
                icons.classList.add('icons-column');
                iconsBar.appendChild(icons);
                iconsPart.appendChild(iconsBar);
                header.style.height = '90px';
              } else {
                var existingBar = iconsPart.querySelector('.icons-bar');
                if (existingBar) {
                  iconsPart.removeChild(existingBar);
                  icons.classList.remove('icons-column');
                  header.style.height = '';
                }
              }
            });
          }
          copiedArray = _toConsumableArray(arr);
          if (searchBar.value === '') {
            getResult(copiedArray);
          }

          // Search functionality
          searchBar.addEventListener('change', function () {
            if (searchBar.value !== '' && copiedArray.some(function (el) {
              return el.title === searchBar.value;
            })) {
              show.innerHTML = '';
              getResult(copiedArray.filter(function (el) {
                return el.title === searchBar.value;
              }));
            }
          });

          // Remove badge if cart is empty
          if (count === 0) {
            badge.classList.remove('badge');
          }
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching products:", _context.t0);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return _getApi.apply(this, arguments);
}
getApi();