+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),function(){var a;a=window.Bootstrap=Ember.Namespace.create()}.call(this),function(){var a,b,c;a=window.Bootstrap,b=Ember.get,c=Ember.set,a.TypeSupport=Ember.Mixin.create({classTypePrefix:Ember.required(String),classNameBindings:["typeClass"],type:"default",typeClass:function(){var a,b;return b=this.get("type"),a=this.get("classTypePrefix"),""+a+"-"+b}.property("type").cacheable()})}.call(this);