!function(){!function(){var a,b;a=window.Bootstrap,b=window.Showcase=Ember.Application.create({LOG_TRANSITIONS:!0,LOG_VIEW_LOOKUPS:!0,LOG_ACTIVE_GENERATION:!0}),Ember.ENV={HELPER_PARAM_LOOKUPS:!0},Ember.Handlebars.registerHelper("raw",function(a){return a.fn(a)})}(),function(){(function(){Showcase.Router.map(function(){return this.resource("show_components",function(){return this.route("alert"),this.route("breadcrumbs"),this.route("modal"),this.route("label"),this.route("badge"),this.route("well"),this.route("list-group"),this.route("panel"),this.route("page-header"),this.route("button"),this.route("buttonGroup"),this.route("progressbar"),this.route("pills"),this.route("tabs"),this.route("tabs-panes"),this.route("wizard"),this.route("items_action_bar"),this.route("tabs-with-routes"),this.route("notifications"),this.route("growl-notif"),this.route("popover"),this.resource("user",function(){return this.route("general"),this.route("privacy"),this.route("activities")})})})}).call(this)}(),function(){(function(){Showcase.ApplicationRoute=Ember.Route.extend({model:function(){return[Ember.Object.create({title:"Alert",route:"show_components.alert"}),Ember.Object.create({title:"Breadcrumbs",route:"show_components.breadcrumbs","new":!0}),Ember.Object.create({title:"Modal",route:"show_components.modal"}),Ember.Object.create({title:"Label",route:"show_components.label"}),Ember.Object.create({title:"Badge",route:"show_components.badge"}),Ember.Object.create({title:"Well",route:"show_components.well"}),Ember.Object.create({title:"List Group",route:"show_components.list-group"}),Ember.Object.create({title:"Panel",route:"show_components.panel"}),Ember.Object.create({title:"Page Header",route:"show_components.page-header"}),Ember.Object.create({title:"Button",route:"show_components.button"}),Ember.Object.create({title:"Button Group",route:"show_components.buttonGroup"}),Ember.Object.create({title:"Progressbar",route:"show_components.progressbar"}),Ember.Object.create({title:"Tooltips & Popover","new":!0,route:"show_components.popover"}),Ember.Object.create({title:"Nav - Pills",route:"show_components.pills"}),Ember.Object.create({title:"Nav - Tabs",route:"show_components.tabs"}),Ember.Object.create({title:"Nav - Tabs Panes",route:"show_components.tabs-panes"}),Ember.Object.create({title:"Nav - Tabs with Routes",special:!0,route:"show_components.tabs-with-routes"}),Ember.Object.create({title:"Wizard",special:!0,route:"show_components.wizard"}),Ember.Object.create({title:"Notifications",special:!0,route:"show_components.notifications"}),Ember.Object.create({title:"Items Action Bar","new":!0,route:"show_components.items_action_bar"}),Ember.Object.create({title:"Growl Notifications",special:!0,route:"show_components.growl-notif"})]}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsPopoverRoute=Ember.Route.extend({renderTemplate:function(){var a;return this.render(),a=this.controllerFor("ShowComponentsTooltipBox"),this.render("bs-tooltip-box",{outlet:"bs-tooltip-box",controller:a,into:"application"})}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsAlertController=Ember.Controller.extend({actions:{submit:function(){return alert("Action taken by controller!")},didAlertClosed:function(){return alert("From controller: The -closed- event was triggered.")},didAlertClose:function(){return alert("From controller: The -close- event was triggered.")}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsButtonController=Ember.Controller.extend({isButtonDisabled:!1,loadingState:null,loadingState1:null,actions:{disableButton:function(){return this.set("isButtonDisabled",!0)},startLoading:function(){var a=this;return this.set("loadingState","loading"),Ember.run.later(function(){return a.set("loadingState",null)},2e3)},startLoading1:function(){var a=this;return this.set("loadingState1","loading"),Ember.run.later(function(){return a.set("loadingState1","completed")},2e3)},buttonWithParam:function(a){return alert("Passed controller as a param: "+a)}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsItemsActionBarController=Ember.Controller.extend({actionsInBar:[[{title:"To Alerts",disabled:function(a){var b;return a.size<1||"Alerts"!==(null!=a&&null!=(b=a[0])?b.title:void 0)?!0:void 0},transitionTo:"show_components.alert"},{title:"To Panels",transitionTo:"show_components.panel",disabled:function(a){var b;return a.size<1||"Panels"!==(null!=a&&null!=(b=a[0])?b.title:void 0)?!0:void 0}}],[{title:"To Wizard",disabled:function(a){var b;return a.size<1||"Wizards"!==(null!=a&&null!=(b=a[0])?b.title:void 0)?!0:void 0},clickActionName:"wizard"}]],actions:{wizard:function(a){return alert("Wizard pressed!")}},items:[Ember.Object.create({title:"Alerts"}),Ember.Object.create({title:"Panels"}),Ember.Object.create({title:"Wizards"})]})}).call(this)}(),function(){(function(){Showcase.ShowComponentsPanelController=Ember.Controller.extend({actions:{panelClicked:function(){return alert("Hello from controller: A click in a panel!")},panelClosed:function(){return alert("Hello from controller: The panel was closed!")}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsPopoverController=Ember.Controller.extend({testObject:Ember.Object.createWithMixins({sticky:function(){return Ember.Object.create({user:this,content:"know this is a sticky tooltip! You can hover over it.",trigger:"hover",sticky:!0})}.property()}),user:Ember.Object.create({firstNameBinding:"content.name",title:"rename",template:'name: {{input type="text" value=content.name}}',content:{name:"John"},trigger:"hover",sticky:!0}),hoverPop:Ember.Object.create({title:"I'm a title!",content:"And i'm a content!",trigger:"hover",placement:"right",sticky:!0}),clickPop:Ember.Object.create({title:"Clickable!",content:"<h1>Hello</h1><small>This is a clickable popover with html content!</small>",placement:"left",html:!0}),templPop:Ember.Object.create({firstName:"numbers",title:"Popover with Template",template:"numbers:<ul>{{#each val in content.numbers}}   <li>{{val}}</li>{{/each}}</ul>",content:{numbers:[1,2,3]}})})}).call(this)}(),function(){(function(){Showcase.ShowComponentsProgressbarController=Ember.Controller.extend({prog:0,incrementBy:20,actions:{increment:function(){return this.prog<100?this.incrementProperty("prog",this.incrementBy):this.set("prog",this.incrementBy)}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsTooltipBoxController=Bootstrap.TooltipBoxController}).call(this)}(),function(){(function(){Showcase.ShowComponentsWellController=Ember.Controller.extend({wellClick:function(){return alert("Hello from controller: A click in a well!")}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsButtonGroupController=Ember.Controller.extend({options:["Home","Profile","Messages"],options2:["Admin","Settings"],optionsWithMeta:[Ember.Object.create({title:"Create",type:"primary"}),Ember.Object.create({title:"Destroy",type:"danger"})]})}).call(this)}(),function(){(function(){Showcase.ShowComponentsPillsController=Ember.Controller.extend({content:["Home","Profile","Messages"],init:function(){return this._super(),this.set("content1",Ember.A([Ember.Object.create({title:"Home","default":!0,disabled:!1}),Ember.Object.create({title:"Admin",disabled:!0})])),this.set("selected1",this.get("content1").objectAt(0))},contentChanged:function(){return console.log("Selection has changed to: "+this.get("selected"))}.observes("selected"),actions:{disableHome:function(){return this.get("content1").objectAt(0).set("disabled",!0)}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsGrowlNotifController=Ember.Controller.extend({actions:{pushInfo:function(){return Bootstrap.GNM.push("INFO!","Hello, this is just an info message.","info")},pushSuccess:function(){return Bootstrap.GNM.push("SUCCESS!","Successfully performed operation!","success")},pushWarn:function(){return Bootstrap.GNM.push("WARN!","Could not perform operation!","warning")},pushDanger:function(){return Bootstrap.GNM.push("Danger!","System is halting!","danger")}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsListGroupController=Ember.Controller.extend({listSimple:Ember.A(["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus"]),listWithBadges:Ember.A([Ember.Object.create({title:"Inbox",badge:"45"}),Ember.Object.create({title:"Sent",badge:"33"})]),listWithSub:Ember.A([Ember.Object.create({title:"Inbox",sub:"Incoming mails folder",badge:"45"}),Ember.Object.create({title:"Sent",sub:"Sent emails folder",badge:"33"})])})}).call(this)}(),function(){(function(){Showcase.ShowComponentsModalController=Ember.Controller.extend({message:"Welcome to Bootstrap for Ember..!",myModalButtons:[Ember.Object.create({title:"Submit",clicked:"submit"}),Ember.Object.create({title:"Cancel",clicked:"cancel",dismiss:"modal"})],manualButtons:[Ember.Object.create({title:"Submit",clicked:"submitManual"}),Ember.Object.create({title:"Cancel",dismiss:"modal"})],actions:{submit:function(){return Bootstrap.NM.push("Successfully submitted modal","success"),Bootstrap.ModalManager.hide("myModal")},cancel:function(){return Bootstrap.NM.push("Modal was cancelled","info")},show:function(){return Bootstrap.ModalManager.show("myModal")},submitManual:function(){return Bootstrap.NM.push("Modal destroyed!","success"),Bootstrap.ModalManager.close("manualModal")},createModalProgramatically:function(){var a;return a=Ember.View.extend({template:Ember.Handlebars.compile("This is a programatic ")}),Bootstrap.ModalManager.open("manualModal","Hello","demo-template",this.manualButtons,this)},confirm:function(){return Bootstrap.ModalManager.confirm(this)},modalConfirmed:function(){return Bootstrap.NM.push("Confirmed!","success")},modalCanceled:function(){return Bootstrap.NM.push("Cancelled!","info")}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsNotificationsController=Ember.Controller.extend({actions:{pushInfo:function(){return Bootstrap.NM.push("Hello, this is just an info message.","info")},pushWarn:function(){return Bootstrap.NM.push("Could not perform operation!","warning")},pushSuccess:function(){return Bootstrap.NM.push("Successfully performed operation!","success")},pushDanger:function(){return Bootstrap.NM.push("Danger! system is halting!","danger")}}})}).call(this)}(),function(){(function(){Showcase.ShowComponentsTabsController=Ember.Controller.extend({content:["Home","Profile","Messages"],init:function(){return this._super(),this.set("selected","Home"),this.set("tabsPanesOptions",Ember.A([Ember.Object.create({title:"Foo",template:"tabs/foo-tabpane"}),Ember.Object.create({title:"Bar",template:"tabs/bar-tabpane"})]))}})}).call(this)}(),function(){(function(){Showcase.ShowcaseComponentsTabsFooController=Ember.Controller.extend()}).call(this)}(),function(){(function(){Showcase.ShowComponentsTabsPanesController=Ember.Controller.extend({tabsMeta:Ember.A([Ember.Object.create({title:"Foo",template:"tabs/foo-tabpane",controller:"ShowcaseComponentsTabsFoo"}),Ember.Object.create({title:"Bar",template:"tabs/bar-tabpane"})])})}).call(this)}(),function(){(function(){Showcase.ShowComponentsWizardController=Ember.Controller.extend({init:function(){return this._super(),this.set("steps",Ember.A([Ember.Object.create({title:"Foo",template:"tabs/foo-tabpane"}),Ember.Object.create({title:"Bar",template:"tabs/bar-tabpane"}),Ember.Object.create({title:"Baz",template:"tabs/baz-tabpane"})])),this.set("stepsNoPrev",Ember.A([Ember.Object.create({title:"Step1",template:"tabs/foo-tabpane",disabled:!0}),Ember.Object.create({title:"Step2",template:"tabs/bar-tabpane",disabled:!0}),Ember.Object.create({title:"Step3",template:"tabs/baz-tabpane",disabled:!0})]))},actions:{createWizard:function(){var a;return a=Bootstrap.BsWizardComponent.extend({content:[Ember.Object.create({title:"Step1",template:"wizard/step1",disabled:!0}),Ember.Object.create({title:"Step2",template:"wizard/step2",disabled:!0}),Ember.Object.create({title:"Step3",template:"wizard/step3",disabled:!0})],targetObject:this,onNext:"onNext",onPrev:"onPrev",onFinish:"onFinish"}),Bootstrap.ModalManager.open("manualModal","Wizard Title...",a,null,this)},onNext:function(){return console.log("NEXT")},onPrev:function(){return console.log("PREV")},onFinish:function(){return Bootstrap.ModalManager.close("manualModal"),Bootstrap.NM.push("Wizard completed!")}}})}).call(this)}(),function(){(function(){Showcase.UserController=Ember.Controller.extend({tabsMeta:[Ember.Object.create({title:"General",linkTo:"user.general"}),Ember.Object.create({title:"Privacy",linkTo:"user.privacy"}),Ember.Object.create({title:"Activities",linkTo:"user.activities"})]})}).call(this)}(),function(){}.call(this)}();