/*
Parent component of a progressbar component
*/


(function() {
  Bootstrap.BsProgressComponent = Ember.Component.extend({
    layoutName: 'components/bs-progress',
    classNames: ['progress'],
    classNameBindings: ['animated:active', 'stripped:progress-striped'],
    progress: null,
    stripped: false,
    animated: false,
    "default": (function() {
      return this.progress;
    }).property('progress')
  });

  Ember.Handlebars.helper('bs-progress', Bootstrap.BsProgressComponent);

}).call(this);

(function() {
  Bootstrap.BsProgressbarComponent = Ember.Component.extend(Bootstrap.TypeSupport, {
    layoutName: 'components/bs-progressbar',
    classNames: ['progress-bar'],
    attributeBindings: ['style', 'role', 'aria-valuemin', 'ariaValueNow:aria-valuenow', 'aria-valuemax'],
    classTypePrefix: 'progress-bar',
    role: 'progressbar',
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    init: function() {
      return this._super();
    },
    style: (function() {
      return "width:" + this.progress + "%;";
    }).property('progress').cacheable(),
    ariaValueNow: (function() {
      return this.progress;
    }).property('progress').cacheable()
  });

  Ember.Handlebars.helper('bs-progressbar', Bootstrap.BsProgressbarComponent);

}).call(this);

Ember.TEMPLATES["components/bs-progress"] = Ember.HTMLBars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    ");
  data.buffer.push(escapeExpression(((helpers['bs-progressbar'] || (depth0 && depth0['bs-progressbar']) || helperMissing).call(depth0, {"name":"bs-progressbar","hash":{
    'type': ("type"),
    'progress': ("progress")
  },"hashTypes":{'type': "ID",'progress': "ID"},"hashContexts":{'type': depth0,'progress': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, "default", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"useData":true});

Ember.TEMPLATES["components/bs-progressbar"] = Ember.HTMLBars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"sr-only\">");
  stack1 = helpers._triageMustache.call(depth0, "progress", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("% Complete</span>");
  return buffer;
},"useData":true});