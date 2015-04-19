(function() {
  Bootstrap.BsWellComponent = Ember.Component.extend({
    layoutName: 'components/bs-well',
    classNameBindings: ['small:well-sm', 'large:well-lg'],
    classNames: ['well'],
    click: function() {
      return this.sendAction('clicked');
    }
  });

  Ember.Handlebars.helper('bs-well', Bootstrap.BsWellComponent);

}).call(this);

(function() {
  Bootstrap.BsPageHeaderComponent = Ember.Component.extend({
    layoutName: 'components/bs-page-header',
    classNames: ['page-header']
  });

  Ember.Handlebars.helper('bs-page-header', Bootstrap.BsPageHeaderComponent);

}).call(this);

(function() {
  Bootstrap.BsPanelComponent = Ember.Component.extend(Bootstrap.TypeSupport, {
    layoutName: 'components/bs-panel',
    classNames: ['panel'],
    classTypePrefix: ['panel'],
    classNameBindings: ['fade', 'fade:in'],
    clicked: null,
    onClose: null,
    fade: true,
    collapsible: false,
    open: true,
    actions: {
      close: function(event) {
        this.sendAction('onClose');
        this.$().removeClass('in');
        return setTimeout((function() {
          return this.destroy();
        }).bind(this), 250);
      }
    },
    click: function(event) {
      return this.sendAction('clicked', event);
    },
    collapsibleBodyId: (function() {
      return "" + (this.get('elementId')) + "_body";
    }).property('collapsible'),
    collapsibleBodyLink: (function() {
      return "#" + (this.get('elementId')) + "_body";
    }).property('collapsibleBodyId')
  });

  Ember.Handlebars.helper('bs-panel', Bootstrap.BsPanelComponent);

}).call(this);

Ember.TEMPLATES["components/bs-page-header"] = Ember.HTMLBars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("        <small>");
  stack1 = helpers._triageMustache.call(depth0, "sub", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</small>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<h1>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "sub", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h1>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["components/bs-well"] = Ember.HTMLBars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"useData":true});

Ember.TEMPLATES["components/bs-panel"] = Ember.HTMLBars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("    <div class=\"panel-heading\">\n");
  stack1 = helpers['if'].call(depth0, "collapsible", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.program(4, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "dismiss", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'href': ("collapsibleBodyLink")
  },"hashTypes":{'href': "ID"},"hashContexts":{'href': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "heading", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n            </a>\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("            ");
  stack1 = helpers._triageMustache.call(depth0, "heading", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("            <a class=\"close\" data-dismiss=\"panel\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">&times;</a>\n");
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'id': ("collapsibleBodyId")
  },"hashTypes":{'id': "ID"},"hashContexts":{'id': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":panel-collapse :collapse open:in")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <div class=\"panel-body\">");
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </div>\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("    <div id=\"collapseOne\" class=\"panel-body\">");
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n");
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("    <div class=\"panel-footer\">");
  stack1 = helpers._triageMustache.call(depth0, "footer", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers['if'].call(depth0, "heading", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "collapsible", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.program(10, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "footer", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});