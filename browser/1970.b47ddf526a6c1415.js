"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1970],{46544:(T,m,s)=>{s.d(m,{N:()=>u});var l=s(41571);const p=["*"];let u=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-developmentsection"]],ngContentSelectors:p,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(d,Z){1&d&&(l.F$t(),l.TgZ(0,"div",0),l._UZ(1,"i",1),l._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),l.qZA(),l.Hsn(3))},encapsulation:2}),e})()},91970:(T,m,s)=>{s.r(m),s.d(m,{AvatarDemoModule:()=>te});var l=s(36895),p=s(10359),u=s(90433),e=s(41571);function g(a,r){if(1&a&&(e.TgZ(0,"span",4),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function d(a,r){if(1&a&&e._UZ(0,"span",6),2&a){const t=e.oxw(2);e.Tol(t.icon),e.Q6J("ngClass","p-avatar-icon")}}function Z(a,r){if(1&a&&e.YNc(0,d,1,3,"span",5),2&a){const t=e.oxw(),o=e.MAs(6);e.Q6J("ngIf",t.icon)("ngIfElse",o)}}function U(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"img",8),e.NdJ("error",function(f){e.CHM(t);const re=e.oxw(2);return e.KtG(re.imageError(f))}),e.qZA()}if(2&a){const t=e.oxw(2);e.Q6J("src",t.image,e.LSH)}}function q(a,r){if(1&a&&e.YNc(0,U,1,1,"img",7),2&a){const t=e.oxw();e.Q6J("ngIf",t.image)}}const D=["*"];let n=(()=>{class a{constructor(){this.size="normal",this.shape="square",this.onImageError=new e.vpe}containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":null!=this.image,"p-avatar-circle":"circle"===this.shape,"p-avatar-lg":"large"===this.size,"p-avatar-xl":"xlarge"===this.size}}imageError(t){this.onImageError.emit(t)}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass"},outputs:{onImageError:"onImageError"},ngContentSelectors:D,decls:7,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],["iconTemplate",""],["imageTemplate",""],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"src","error"]],template:function(t,o){if(1&t&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.YNc(2,g,2,1,"span",1),e.YNc(3,Z,1,2,"ng-template",null,2,e.W1O),e.YNc(5,q,1,1,"ng-template",null,3,e.W1O),e.qZA()),2&t){const f=e.MAs(4);e.Tol(o.styleClass),e.Q6J("ngClass",o.containerClass())("ngStyle",o.style),e.xp6(2),e.Q6J("ngIf",o.label)("ngIfElse",f)}},dependencies:[l.mk,l.O5,l.PC],styles:[".p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}\n"],encapsulation:2,changeDetection:0}),a})(),C=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez]}),a})();var x=s(54548);const z=["*"];let w=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["p-avatarGroup"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style"},ngContentSelectors:z,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&t&&(e.Tol(o.styleClass),e.Q6J("ngClass","p-avatar-group p-component")("ngStyle",o.style))},dependencies:[l.mk,l.PC],styles:[".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0}),a})(),S=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez]}),a})();var I=s(46440),A=s(84369),c=s(79768);let J=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez,p.Bz,c.a,I.j,u.u5,A.V,C,S,x.TX,A.V]}),a})();var i=s(54802);let F=(()=>{class a{constructor(){this.code={html:"import { AvatarModule } from 'primeng/avatar';"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(t,o){1&t&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(1),e.Q6J("code",o.code)("hideToggleCode",!0))},dependencies:[c.h,i.c],encapsulation:2}),a})();var v=s(15899);const h=function(){return{"background-color":"#2196F3",color:"#ffffff"}},y=function(){return{"background-color":"#9c27b0",color:"#ffffff"}},M=function(){return{"background-color":"#4caf4f",color:"#ffffff"}};let G=(()=>{class a{constructor(){this.code={basic:'\n<div class="col-12 md:col-4">\n    <h5>Label</h5>\n    <p-avatar label="P" styleClass="mr-2" size="xlarge"></p-avatar>\n    <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ \'background-color\': \'#2196F3\', color: \'#ffffff\' }"></p-avatar>\n    <p-avatar label="U" styleClass="mr-2" [style]="{ \'background-color\': \'#9c27b0\', color: \'#ffffff\' }"></p-avatar>\n</div>\n<div class="col-12 md:col-4">\n    <h5>Label - Circle</h5>\n    <p-avatar label="P" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>\n    <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ \'background-color\': \'#2196F3\', color: \'#ffffff\' }" shape="circle"></p-avatar>\n    <p-avatar label="U" styleClass="mr-2" [style]="{ \'background-color\': \'#9c27b0\', color: \'#ffffff\' }" shape="circle"></p-avatar>\n</div>\n<div class="col-12 md:col-4">\n    <h5>Label - Badge</h5>\n    <p-avatar label="U" pBadge styleClass="mr-5" value="4" size="large" [style]="{ \'background-color\': \'#4caf4f\', color: \'#ffffff\' }"></p-avatar>\n</div>',html:'\n<div class="card grid grid-nogutter">\n    <div class="col-12 md:col-4">\n        <h5>Label</h5>\n        <p-avatar label="P" styleClass="mr-2" size="xlarge"></p-avatar>\n        <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ \'background-color\': \'#2196F3\', color: \'#ffffff\' }"></p-avatar>\n        <p-avatar label="U" styleClass="mr-2" [style]="{ \'background-color\': \'#9c27b0\', color: \'#ffffff\' }"></p-avatar>\n    </div>\n    <div class="col-12 md:col-4">\n        <h5>Label - Circle</h5>\n        <p-avatar label="P" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>\n        <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ \'background-color\': \'#2196F3\', color: \'#ffffff\' }" shape="circle"></p-avatar>\n        <p-avatar label="U" styleClass="mr-2" [style]="{ \'background-color\': \'#9c27b0\', color: \'#ffffff\' }" shape="circle"></p-avatar>\n    </div>\n    <div class="col-12 md:col-4">\n        <h5>Label - Badge</h5>\n        <p-avatar label="U" pBadge styleClass="mr-5" value="4" size="large" [style]="{ \'background-color\': \'#4caf4f\', color: \'#ffffff\' }"></p-avatar>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-label-demo',\n    templateUrl: './avatar-label-demo.html'\n})\nexport class AvatarLabelDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-label-demo"]],inputs:{id:"id",title:"title"},decls:25,vars:18,consts:[[3,"title","id"],[1,"card","grid","grid-nogutter"],[1,"col-12","md:col-4"],["label","P","styleClass","mr-2","size","xlarge"],["label","V","styleClass","mr-2","size","large"],["label","U","styleClass","mr-2"],["label","P","styleClass","mr-2","size","xlarge","shape","circle"],["label","V","styleClass","mr-2","size","large","shape","circle"],["label","U","styleClass","mr-2","shape","circle"],["label","U","pBadge","","styleClass","mr-5","value","4","size","large"],["selector","avatar-label-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"A letter Avatar is defined with the "),e.TgZ(4,"i"),e._uU(5,"label"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1)(8,"div",2)(9,"h5"),e._uU(10,"Label"),e.qZA(),e._UZ(11,"p-avatar",3)(12,"p-avatar",4)(13,"p-avatar",5),e.qZA(),e.TgZ(14,"div",2)(15,"h5"),e._uU(16,"Label - Circle"),e.qZA(),e._UZ(17,"p-avatar",6)(18,"p-avatar",7)(19,"p-avatar",8),e.qZA(),e.TgZ(20,"div",2)(21,"h5"),e._uU(22,"Label - Badge"),e.qZA(),e._UZ(23,"p-avatar",9),e.qZA()(),e._UZ(24,"app-code",10),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(11),e.Akn(e.DdM(13,h)),e.xp6(1),e.Akn(e.DdM(14,y)),e.xp6(5),e.Akn(e.DdM(15,h)),e.xp6(1),e.Akn(e.DdM(16,y)),e.xp6(4),e.Akn(e.DdM(17,M)),e.xp6(1),e.Q6J("code",o.code))},dependencies:[c.h,i.c,n,v.lM],encapsulation:2}),a})();const Q=function(){return{"background-color":"#9c27b0",color:"#ffffff"}};let k=(()=>{class a{constructor(){this.code={basic:'\n<p-avatarGroup styleClass="mb-3">\n    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>\n    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>\n</p-avatarGroup>',html:'\n<div class="card justify-content-center">\n    <p-avatarGroup styleClass="mb-3">\n        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>\n        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>\n        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle"></p-avatar>\n        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle"></p-avatar>\n        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle"></p-avatar>\n        <p-avatar label="+2" shape="circle" size="large" [style]="{ \'background-color\': \'#9c27b0\', color: \'#ffffff\' }"></p-avatar>\n    </p-avatarGroup>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-group-demo',\n    templateUrl: './avatar-group-demo.html'\n})\nexport class AvatarGroupDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-group-demo"]],inputs:{id:"id",title:"title"},decls:13,vars:6,consts:[[3,"title","id"],[1,"card","justify-content-center"],["styleClass","mb-3"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png","size","large","shape","circle"],["label","+2","shape","circle","size","large"],["selector","avatar-group-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Grouping is available by wrapping multiple Avatar components inside an AvatarGroup."),e.qZA()(),e.TgZ(4,"div",1)(5,"p-avatarGroup",2),e._UZ(6,"p-avatar",3)(7,"p-avatar",4)(8,"p-avatar",5)(9,"p-avatar",6)(10,"p-avatar",7)(11,"p-avatar",8),e.qZA()(),e._UZ(12,"app-code",9),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Akn(e.DdM(5,Q)),e.xp6(1),e.Q6J("code",o.code))},dependencies:[c.h,i.c,n,w],encapsulation:2}),a})(),B=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatarstyle-doc"]],inputs:{id:"id",title:"title"},decls:51,vars:2,consts:[[3,"title","id"],["routerLink","/theming"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5," theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-avatar"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Container element."),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-avatar-image"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Container element in image mode."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-avatar-circle"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Container element with a circle shape."),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-avatar-text"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Text of the Avatar."),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"p-avatar-icon"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"Icon of the Avatar."),e.qZA()(),e.TgZ(41,"tr")(42,"td"),e._uU(43,"p-avatar-lg"),e.qZA(),e.TgZ(44,"td"),e._uU(45,"Container element with a large size."),e.qZA()(),e.TgZ(46,"tr")(47,"td"),e._uU(48,"p-avatar-xl"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Container element with an xlarge size."),e.qZA()()()()()()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[p.rH,i.c],encapsulation:2}),a})(),P=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatarstyle-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){1&t&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Element"),e.qZA()()(),e.TgZ(10,"tbody")(11,"tr")(12,"td"),e._uU(13,"p-avatar-group"),e.qZA(),e.TgZ(14,"td"),e._uU(15,"Container element."),e.qZA()()()()()()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[i.c],encapsulation:2}),a})();const _=function(){return{"background-color":"#2196F3",color:"#ffffff"}},b=function(){return{"background-color":"#9c27b0",color:"#ffffff"}};let j=(()=>{class a{constructor(){this.code={basic:'\n<p-avatar icon="pi pi-user" styleClass="mr-2" size="xlarge"></p-avatar>',html:'\n<div class="grid card grid-nogutter">\n    <div class="col-12 md:col-4">\n    <h5>Icon</h5>\n        <p-avatar icon="pi pi-user" styleClass="mr-2"></p-avatar>\n        <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{\'background-color\':\'#2196F3\', \'color\': \'#ffffff\'}"></p-avatar>\n        <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{\'background-color\': \'#9c27b0\', \'color\': \'#ffffff\'}"></p-avatar>\n    </div>\n    <div class="col-12 md:col-4">\n    <h5>Icon - Circle</h5>\n        <p-avatar icon="pi pi-user" styleClass="mr-2" shape="circle"></p-avatar>\n        <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{\'background-color\':\'#2196F3\', \'color\': \'#ffffff\'}" shape="circle"></p-avatar>\n        <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{\'background-color\': \'#9c27b0\', \'color\': \'#ffffff\'}" shape="circle"></p-avatar>\n    </div>\n    <div class="col-12 md:col-4">\n        <h5>Icon - Badge</h5>\n        <p-avatar icon="pi pi-user" pBadge value="4" severity="success" styleClass="mr-2" size="large"></p-avatar>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-icon-demo',\n    templateUrl: './avatar-icon-demo.html'\n})\nexport class AvatarIconDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-icon-demo"]],inputs:{id:"id",title:"title"},decls:25,vars:15,consts:[[3,"title","id"],[1,"grid","card","grid-nogutter"],[1,"col-12","md:col-4"],["icon","pi pi-user","styleClass","mr-2","size","xlarge"],["icon","pi pi-user","styleClass","mr-2","size","large"],["icon","pi pi-user","styleClass","mr-2"],["icon","pi pi-user","styleClass","mr-2","size","xlarge","shape","circle"],["icon","pi pi-user","styleClass","mr-2","size","large","shape","circle"],["icon","pi pi-user","styleClass","mr-2","shape","circle"],["icon","pi pi-user","pBadge","","value","4","severity","success","styleClass","mr-2","size","large"],["selector","avatar-icon-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"A font icon is displayed as an Avatar with the "),e.TgZ(4,"i"),e._uU(5,"icon"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1)(8,"div",2)(9,"h5"),e._uU(10,"Icon"),e.qZA(),e._UZ(11,"p-avatar",3)(12,"p-avatar",4)(13,"p-avatar",5),e.qZA(),e.TgZ(14,"div",2)(15,"h5"),e._uU(16,"Icon - Circle"),e.qZA(),e._UZ(17,"p-avatar",6)(18,"p-avatar",7)(19,"p-avatar",8),e.qZA(),e.TgZ(20,"div",2)(21,"h5"),e._uU(22,"Icon - Badge"),e.qZA(),e._UZ(23,"p-avatar",9),e.qZA()(),e._UZ(24,"app-code",10),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(11),e.Akn(e.DdM(11,_)),e.xp6(1),e.Akn(e.DdM(12,b)),e.xp6(5),e.Akn(e.DdM(13,_)),e.xp6(1),e.Akn(e.DdM(14,b)),e.xp6(5),e.Q6J("code",o.code))},dependencies:[c.h,i.c,n,v.lM],encapsulation:2}),a})(),E=(()=>{class a{constructor(){this.code={basic:'\n<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>',html:'\n<div class="card">\n    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>\n    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" styleClass="mr-2" size="large" shape="circle"></p-avatar>\n    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" styleClass="mr-2" shape="circle"></p-avatar>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-image-demo',\n    templateUrl: './avatar-image-demo.html'\n})\nexport class AvatarImageDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-image-demo"]],inputs:{id:"id",title:"title"},decls:12,vars:3,consts:[[3,"title","id"],[1,"card"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","styleClass","mr-2","size","xlarge","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","styleClass","mr-2","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","styleClass","mr-2","shape","circle"],["selector","avatar-image-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Use the "),e.TgZ(4,"i"),e._uU(5,"image"),e.qZA(),e._uU(6," property to display an image as an Avatar."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-avatar",2)(9,"p-avatar",3)(10,"p-avatar",4),e.qZA(),e._UZ(11,"app-code",5),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Q6J("code",o.code))},dependencies:[c.h,i.c,n],encapsulation:2}),a})(),L=(()=>{class a{constructor(){this.code={basic:'\n<p-avatar label="P" shape="circle"></p-avatar>\n<p-avatar label="T"></p-avatar>',html:'\n<div class="card flex justify-content-center gap-2">\n    <p-avatar label="P" shape="circle"></p-avatar>\n    <p-avatar label="T"></p-avatar>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-shape-demo',\n    templateUrl: './avatar-shape-demo.html'\n})\nexport class AvatarShapeDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-shape-demo"]],inputs:{id:"id",title:"title"},decls:17,vars:3,consts:[[3,"title","id"],[1,"card","flex","justify-content-center","gap-2"],["label","P","shape","circle"],["label","T"],["selector","avatar-shape-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Avatar comes in two different styles specified with the "),e.TgZ(4,"i"),e._uU(5,"shape"),e.qZA(),e._uU(6," property, "),e.TgZ(7,"i"),e._uU(8,"square"),e.qZA(),e._uU(9," is the default and "),e.TgZ(10,"i"),e._uU(11,"circle"),e.qZA(),e._uU(12," is the alternative."),e.qZA()(),e.TgZ(13,"div",1),e._UZ(14,"p-avatar",2)(15,"p-avatar",3),e.qZA(),e._UZ(16,"app-code",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(15),e.Q6J("code",o.code))},dependencies:[c.h,i.c,n],encapsulation:2}),a})(),X=(()=>{class a{constructor(){this.code={basic:'\n<p-avatar label="P" size="large"></p-avatar>\n<p-avatar label="T" size="xlarge"></p-avatar>',html:'\n<div class="card flex justify-content-center gap-2">\n    <p-avatar label="P" size="large"></p-avatar>\n    <p-avatar label="T" size="xlarge"></p-avatar>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-size-demo',\n    templateUrl: './avatar-size-demo.html'\n})\nexport class AvatarSizeDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-size-demo"]],inputs:{id:"id",title:"title"},decls:16,vars:3,consts:[[3,"title","id"],[1,"card","flex","justify-content-center","gap-2"],["label","P","size","large"],["label","T","size","xlarge"],["selector","avatar-size-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p")(3,"i"),e._uU(4,"size"),e.qZA(),e._uU(5," property defines the size of the Avatar with "),e.TgZ(6,"i"),e._uU(7,"large"),e.qZA(),e._uU(8," and "),e.TgZ(9,"i"),e._uU(10,"xlarge"),e.qZA(),e._uU(11," as possible values."),e.qZA()(),e.TgZ(12,"div",1),e._UZ(13,"p-avatar",2)(14,"p-avatar",3),e.qZA(),e._UZ(15,"app-code",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(14),e.Q6J("code",o.code))},dependencies:[c.h,i.c,n],encapsulation:2}),a})();const N=function(){return["/badge"]};let V=(()=>{class a{constructor(){this.code={basic:'\n<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger"></p-avatar>',html:'\n<div class="card flex justify-content-center">\n    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger"></p-avatar>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-badge-demo',\n    templateUrl: './avatar-badge-demo.html'\n})\nexport class AvatarBadgeDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-badge-demo"]],inputs:{id:"id",title:"title"},decls:13,vars:5,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"card","flex","justify-content-center"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","pBadge","","value","4","severity","danger"],["selector","avatar-badge-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"A "),e.TgZ(4,"i"),e._uU(5,"badge"),e.qZA(),e._uU(6," can be added to an Avatar with the "),e.TgZ(7,"a",1),e._uU(8,"Badge"),e.qZA(),e._uU(9," directive."),e.qZA()(),e.TgZ(10,"div",2),e._UZ(11,"p-avatar",3),e.qZA(),e._UZ(12,"app-code",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(6),e.Q6J("routerLink",e.DdM(4,N)),e.xp6(5),e.Q6J("code",o.code))},dependencies:[p.rH,c.h,i.c,n,v.lM],encapsulation:2}),a})(),H=(()=>{class a{constructor(){this.code={basic:'\n<p-avatar size="xlarge">\n    <span class="text-base">Content</span>\n</p-avatar>',html:'\n<div class="card flex justify-content-center">\n    <p-avatar size="xlarge">\n        <span class="text-base">Content</span>\n    </p-avatar>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'avatar-template-demo',\n    templateUrl: './avatar-template-demo.html'\n})\nexport class AvatarTemplateDemo {}"}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatar-template-demo"]],inputs:{id:"id",title:"title"},decls:9,vars:3,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["size","xlarge"],[1,"text-base"],["selector","avatar-template-demo",3,"code"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Content can easily be customized with the dynamic content instead of using the built-in modes."),e.qZA()(),e.TgZ(4,"div",1)(5,"p-avatar",2)(6,"span",3),e._uU(7,"Content"),e.qZA()()(),e._UZ(8,"app-code",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("code",o.code))},dependencies:[c.h,i.c,n],encapsulation:2}),a})(),O=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatarprops-doc"]],inputs:{id:"id",title:"title"},decls:78,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){1&t&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"label"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"string"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"null"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"Defines the text to display."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"icon"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"string"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"null"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Defines the icon to display."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"image"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"string"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"null"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Defines the image to display."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"size"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"string"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"null"),e.qZA(),e.TgZ(49,"td"),e._uU(50,'Size of the element, valid options are "large" and "xlarge".'),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"shape"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"string"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"square"),e.qZA(),e.TgZ(58,"td"),e._uU(59,'Shape of the element, valid options are "square" and "circle".'),e.qZA()(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"style"),e.qZA(),e.TgZ(63,"td"),e._uU(64,"object"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"null"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"Inline style of the component."),e.qZA()(),e.TgZ(69,"tr")(70,"td"),e._uU(71,"styleClass"),e.qZA(),e.TgZ(72,"td"),e._uU(73,"string"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"null"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"Style class of the component."),e.qZA()()()()()()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[i.c],encapsulation:2}),a})(),R=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["avatargroupprops-doc"]],inputs:{id:"id",title:"title"},decls:33,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){1&t&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"style"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"object"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"null"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"Inline style of the component."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"styleClass"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"string"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"null"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Style class of the component."),e.qZA()()()()()()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[i.c],encapsulation:2}),a})(),Y=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["events-doc"]],inputs:{id:"id",title:"title"},decls:20,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){1&t&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"onImageError"),e.qZA(),e.TgZ(16,"td"),e._uU(17,"event: Browser event"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"This event is triggered if an error occurs while loading an image file."),e.qZA()()()()()()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[i.c],encapsulation:2}),a})();var W=s(46544);let K=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:22,vars:2,consts:[[3,"title","id"]],template:function(t,o){1&t&&(e.TgZ(0,"app-developmentsection")(1,"app-docsectiontext",0)(2,"h3"),e._uU(3,"Screen Reader"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like "),e.TgZ(6,"i"),e._uU(7,"img"),e.qZA(),e._uU(8," along with "),e.TgZ(9,"i"),e._uU(10,"aria-labelledby"),e.qZA(),e._uU(11," or "),e.TgZ(12,"i"),e._uU(13,"aria-label"),e.qZA(),e._uU(14," to describe the component. In case avatars need to be tabbable, "),e.TgZ(15,"i"),e._uU(16,"tabIndex"),e.qZA(),e._uU(17," can be added as well to implement custom key handlers. "),e.qZA(),e.TgZ(18,"h3"),e._uU(19,"Keyboard Support"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Component does not include any interactive elements."),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[i.c,W.N],encapsulation:2}),a})();var $=s(63408);let ee=(()=>{class a{constructor(){this.docs=[{id:"import",label:"Import",component:F},{id:"label",label:"Label",component:G},{id:"icon",label:"Icon",component:j},{id:"image",label:"Image",component:E},{id:"size",label:"Sizes",component:X},{id:"avatargroup",label:"AvatarGroup",component:k},{id:"shape",label:"Shape",component:L},{id:"badge",label:"Badge",component:V},{id:"templating",label:"Custom Content",component:H},{id:"stylingofavatar",label:"Styling of Avatar",component:B},{id:"stylingofavatargroup",label:"Styling of AvatarGroup",component:P},{id:"accessibility",label:"Accessibility",component:K}],this.apiDocs=[{id:"avatarprops",label:"Properties of Avatar",component:O},{id:"avatargroupprops",label:"Properties of AvatarGroup",component:R},{id:"events",label:"Events",component:Y}]}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular Avatar Component","header","Avatar","description","Avatar represents people using icons, labels and images.",3,"docs","apiDocs"]],template:function(t,o){1&t&&e._UZ(0,"app-doc",0),2&t&&e.Q6J("docs",o.docs)("apiDocs",o.apiDocs)},dependencies:[$.x],encapsulation:2}),a})(),ae=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:ee}]),p.Bz]}),a})(),te=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez,ae,J]}),a})()}}]);