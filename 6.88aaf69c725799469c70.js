(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,n,i){"use strict";i.r(n),i.d(n,"AuthModule",function(){return g});var o=i("ofXK"),e=i("3Pt+"),r=i("tyNb"),s=i("PCNd"),c=i("fXoL"),a=function(){function t(){this.close=new c.n}return t.prototype.onClose=function(){this.close.emit()},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(c.Nb(0,"div",0),c.Ub("click",function(){return n.onClose()}),c.Mb(),c.Nb(1,"div",1),c.Nb(2,"p"),c.ic(3),c.Mb(),c.Nb(4,"div",2),c.Nb(5,"button",3),c.Ub("click",function(){return n.onClose()}),c.ic(6,"Close"),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.Ab(3),c.jc(n.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.258)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t}(),l=function(){function t(t){this.viewContainerRef=t}return t.\u0275fac=function(n){return new(n||t)(c.Kb(c.P))},t.\u0275dir=c.Fb({type:t,selectors:[["","appPlaceholder",""]]}),t}(),p=i("qXBG"),b=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-loading-spinner"]],decls:3,vars:0,consts:[[1,"lds-ripple"]],template:function(t,n){1&t&&(c.Nb(0,"div",0),c.Lb(1,"div"),c.Lb(2,"div"),c.Mb())},styles:[".lds-ripple[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;border:4px solid #3f0039;opacity:1;border-radius:50%;animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.5s}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:0}4.9%{top:36px;left:36px;width:0;height:0;opacity:0}5%{top:36px;left:36px;width:0;height:0;opacity:1}to{top:0;left:0;width:72px;height:72px;opacity:0}}"]}),t}();function u(t,n){}function d(t,n){1&t&&(c.Nb(0,"div",5),c.Lb(1,"app-loading-spinner"),c.Mb())}function f(t,n){if(1&t){var i=c.Ob();c.Nb(0,"form",6),c.Ub("ngSubmit",function(){return c.ec(i),c.Wb().onSubmit()}),c.Nb(1,"div",7),c.Nb(2,"label",8),c.ic(3,"E-mail"),c.Mb(),c.Lb(4,"input",9),c.Mb(),c.Nb(5,"div",7),c.Nb(6,"label",10),c.ic(7,"Password"),c.Mb(),c.Lb(8,"input",11),c.Mb(),c.Nb(9,"div"),c.Nb(10,"button",12),c.ic(11),c.Mb(),c.ic(12," | "),c.Nb(13,"button",13),c.Ub("click",function(){return c.ec(i),c.Wb().onSwitchMode()}),c.ic(14),c.Mb(),c.Mb(),c.Mb()}if(2&t){var o=c.Wb();c.Zb("formGroup",o.formAuth),c.Ab(10),c.Zb("disabled",!o.formAuth.valid),c.Ab(1),c.kc(" ",o.isLoginMode?"Login":"Sign Up"," "),c.Ab(3),c.kc(" Switch to ",o.isLoginMode?"Sign Up":"Login"," ")}}var h=function(){function t(t,n,i){this.authService=t,this.router=n,this.componentFactoryResolver=i,this.isLoginMode=!0,this.isLoading=!1,this.error=null}return t.prototype.ngOnInit=function(){this.formAuth=new e.f({email:new e.d(null,[e.n.required,e.n.email]),password:new e.d(null,[e.n.required,e.n.minLength(6)])})},t.prototype.onSubmit=function(){var t=this;if(this.formAuth.valid){var n=this.formAuth.value.email,i=this.formAuth.value.password;this.isLoading=!0,(this.isLoginMode?this.authService.login(n,i):this.authService.signup(n,i)).subscribe(function(n){console.log(n),t.isLoading=!1,t.router.navigate(["./recipes"])},function(n){console.log(n),t.error=n,t.showErrorAlert(n),t.isLoading=!1}),this.formAuth.reset()}},t.prototype.onHandleError=function(){this.error=null},t.prototype.ngOnDestroy=function(){this.closeSub&&this.closeSub.unsubscribe()},t.prototype.showErrorAlert=function(t){var n=this,i=this.componentFactoryResolver.resolveComponentFactory(a),o=this.alertHost.viewContainerRef;o.clear();var e=o.createComponent(i);e.instance.message=t,this.closeSub=e.instance.close.subscribe(function(){n.closeSub.unsubscribe(),o.clear()})},t.prototype.onSwitchMode=function(){this.isLoginMode=!this.isLoginMode},t.\u0275fac=function(n){return new(n||t)(c.Kb(p.a),c.Kb(r.c),c.Kb(c.j))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-auth"]],viewQuery:function(t,n){var i;1&t&&c.mc(l,1),2&t&&c.cc(i=c.Vb())&&(n.alertHost=i.first)},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["for","password"],["type","password","id","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(c.hc(0,u,0,0,"ng-template",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.hc(3,d,2,0,"div",3),c.hc(4,f,15,4,"form",4),c.Mb(),c.Mb()),2&t&&(c.Ab(3),c.Zb("ngIf",n.isLoading),c.Ab(1),c.Zb("ngIf",!n.isLoading))},directives:[l,o.j,b,e.o,e.k,e.g,e.a,e.j,e.e],encapsulation:2}),t}(),g=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({imports:[[o.c,e.m,e.i,r.f.forChild([{path:"",component:h}]),s.a]]}),t}()}}]);