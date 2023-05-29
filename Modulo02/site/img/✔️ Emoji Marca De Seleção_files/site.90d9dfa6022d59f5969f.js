/*!For license information please see site.90d9dfa6022d59f5969f.js.LICENSE.txt*/(()=>{var t={152:function(t){var e;e=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return _}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),s=n(817),c=n.n(s);function u(t){try{return document.execCommand(t)}catch(t){return!1}}var l=function(t){var e=c()(t);return u("cut"),e};function d(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=t,n}var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"==typeof t){var o=d(t);e.container.appendChild(o),n=c()(o),u("copy"),o.remove()}else n=c()(t),u("copy");return n};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function m(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function g(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(c,t);var e,n,o,r,i,s=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(i){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=s.call(this)).resolveOptions(e),n.listenClick(t),n}return e=c,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,r=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==h(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:o}):r?"cut"===n?l(r):f(r,{container:o}):void 0}({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(o?"success":"error",{action:n,text:o,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return g("action",t)}},{key:"defaultTarget",value:function(t){var e=g("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return g("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return l(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&y(e.prototype,n),o&&y(e,o),c}(r()),_=w},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var o=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=e()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(152),e=n.n(t),o=['a[href]:not([tabindex^="-"])','area[href]:not([tabindex^="-"])','input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])','input[type="radio"]:not([disabled]):not([tabindex^="-"])','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','iframe:not([tabindex^="-"])','audio[controls]:not([tabindex^="-"])','video[controls]:not([tabindex^="-"])','[contenteditable]:not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])'];function r(t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.$el=t,this.shown=!1,this._id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this._previouslyFocused=null,this._listeners={},this.create()}function i(t,e){return n=(e||document).querySelectorAll(t),Array.prototype.slice.call(n);var n}function a(t){(t.querySelector("[autofocus]")||t).focus()}function s(){i("[data-a11y-dialog]").forEach((function(t){new r(t)}))}r.prototype.create=function(){return this.$el.setAttribute("aria-hidden",!0),this.$el.setAttribute("aria-modal",!0),this.$el.setAttribute("tabindex",-1),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),this._openers=i('[data-a11y-dialog-show="'+this._id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this)),this._closers=i("[data-a11y-dialog-hide]",this.$el).concat(i('[data-a11y-dialog-hide="'+this._id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},r.prototype.show=function(t){return this.shown||(this._previouslyFocused=document.activeElement,this.$el.removeAttribute("aria-hidden"),this.shown=!0,a(this.$el),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t)),this},r.prototype.hide=function(t){return this.shown?(this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this._previouslyFocused&&this._previouslyFocused.focus&&this._previouslyFocused.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this},r.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},r.prototype.on=function(t,e){return void 0===this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(e),this},r.prototype.off=function(t,e){var n=(this._listeners[t]||[]).indexOf(e);return n>-1&&this._listeners[t].splice(n,1),this},r.prototype._fire=function(t,e){var n=this._listeners[t]||[],o=new CustomEvent(t,{detail:e});this.$el.dispatchEvent(o),n.forEach(function(t){t(this.$el,e)}.bind(this))},r.prototype._bindKeypress=function(t){this.$el.contains(document.activeElement)&&(this.shown&&"Escape"===t.key&&"alertdialog"!==this.$el.getAttribute("role")&&(t.preventDefault(),this.hide(t)),this.shown&&"Tab"===t.key&&function(t,e){var n=function(t){return i(o.join(","),t).filter((function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}))}(t),r=n.indexOf(document.activeElement);e.shiftKey&&0===r?(n[n.length-1].focus(),e.preventDefault()):e.shiftKey||r!==n.length-1||(n[0].focus(),e.preventDefault())}(this.$el,t))},r.prototype._maintainFocus=function(t){!this.shown||t.target.closest('[aria-modal="true"]')||t.target.closest("[data-a11y-dialog-ignore-focus-trap]")||a(this.$el)},"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16));var c=window.jQuery;function u(t){return window.django.gettext&&window.django.gettext(t)||t}c((function(){c(".body--home .search-form input").trigger("focus")})),c(document).on("click",".vendor-rollout-target",(function(){var t=c(this).parent().find(".vendor-rollout"),e=t.parent(),n=e.outerHeight()?0:t.outerHeight();e.css({height:n},1e3);var o=t.find(".vendor-rollout-lazy");n&&window.lazySizes&&o.length&&o.each((function(){lazySizes.loader.unveil(this)})).removeClass("vendor-rollout-lazy")})).on("click",".vendor-rollout-target a",(function(t){t.stopPropagation()})).on("click",".short-link input",(function(){this.select()})).on("click","#nav-categories-toggle",(function(t){t.preventDefault();var e=c("#nav-categories");e.is(":visible")?e.hide():e.show()}));var l=new(e())(".btn-clipboard");l.on("success",(function(t){var e=c(t.trigger),n=e.offset(),o=c("<div>",{text:u("copied!"),class:"transient",css:{top:n.top-6,left:n.left}}).appendTo(document.body).animate({opacity:0,top:"-=30"},1500);o.css("left",n.left+e.outerWidth()/2-o.outerWidth()/2).promise().then((function(){c(this).remove()})),t.clearSelection(),window.ga&&window.ga("send","event","copy-button","click copy",window.emojiData.slug)})),l.on("error",(function(t){var e=c(t.trigger),n=e.offset(),o=u("Ctrl");/Mac/.test(navigator.platform)&&(o=u("Command"));var r=c("<div>",{html:u("Almost there! Press <b>%s-C</b> now to copy.").replace("%s",o),class:"feedback",css:{top:n.top-20,left:n.left}}).appendTo(document.body);r.css("left",n.left+e.outerWidth()/2-r.outerWidth()/2).on("click",(function(){r.remove()})),$document.one("keypress",(function(){r.remove()}))}));var d=c("[data-trend]");d.length&&emojiData.code&&(c(document.body).append('<script src="https://ssl.gstatic.com/trends_nrtr/1015_RC10/embed_loader.js"><\/script>'),d.addClass("trend").prepend("<h2>"+u("Statistics")+"</h2>").each((function(){var t=c(this),e=emojiData.code,n=(emojiData.name,c("<button>",{type:"button",html:'<span class="emoji">'+e+"</span>📈📉 "+u("Trends")}).on("click",(function(){var n=t.is(".trend--active");t.data("loaded")||(window.trends.embed.renderExploreWidgetTo(t[0],"TIMESERIES",{comparisonItem:[{keyword:e,geo:"",time:"today 5-y"}],category:"0",property:""},{exploreQuery:"q="+encodeURIComponent(e),guestPath:"https://trends.google.com:443/trends/embed/"}),t.data("loaded",!0)),t.toggleClass("trend--active",!n).find("iframe").toggle(!n)})));t.append(n)})));var f=new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting||t.boundingClientRect.top>0){t.target.classList.remove("old");var e=c(t.target).prevAll(".emo-flow-ad").add(".topMainAd");t.isIntersecting&&e.addClass("old")}}))}),{threshold:1});if(c((function(){document.querySelectorAll(".emo-flow-ad").forEach((function(t){f.observe(t)}))})),"undefined"!=typeof multilang_search_button){var h=c("<button>",{type:"button",class:"search-multilang-button",text:multilang_search_button[0].replace(/<\/?p>/g,"")+" ",click:function(){document.querySelector(".emoji-navbar-language-button").click()}}),p=c('<span class="emoji"></span>'),y=multilang_search_button[1].replace(/<\/?p>/g,"").split(/\s+/).map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t)).slice(0,9);window.iAmMobile&&(y=y.slice(0,3)),p.text(y.join(" ")),h.append(p),h.insertAfter("#multilang_search_button")}})()})();