"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1109],{63408:(x,D,p)=>{p.d(D,{x:()=>M});var t=p(41571),g=p(10359),v=p(11481),a=p(36895),d=p(52240),C=p(9716);const T=["nav"],A=function(e){return{"active-navbar-item":e}};function s(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"li",4)(1,"div",5)(2,"button",6),t.NdJ("click",function(){const r=t.CHM(n).$implicit,h=t.oxw(4);return t.KtG(h.onButtonClick(r))}),t._uU(3),t.qZA()()()}if(2&e){const n=l.$implicit,o=t.oxw(4);t.Q6J("ngClass",t.VKq(2,A,o.activeId===n.id)),t.xp6(3),t.hij(" ",n.label," ")}}function f(e,l){if(1&e&&(t.TgZ(0,"ul"),t.YNc(1,s,4,4,"li",3),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.children)}}function i(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"li",4)(1,"div",5)(2,"button",6),t.NdJ("click",function(){const r=t.CHM(n).$implicit,h=t.oxw(2);return t.KtG(h.onButtonClick(r))}),t._uU(3),t.qZA()(),t.YNc(4,f,2,1,"ul",7),t.qZA()}if(2&e){const n=l.$implicit,o=t.oxw(2);t.Q6J("ngClass",t.VKq(3,A,o.activeId===n.id)),t.xp6(3),t.Oqu(n.label),t.xp6(1),t.Q6J("ngIf",n.children)}}const _=function(e){return{hidden:e}};function u(e,l){if(1&e&&(t.TgZ(0,"ul",1,2),t.YNc(2,i,5,5,"li",3),t.qZA()),2&e){const n=t.oxw();t.Q6J("ngClass",t.VKq(2,_,n.visible)),t.xp6(2),t.Q6J("ngForOf",n.docs)}}let m=(()=>{class e{constructor(n,o,c,r,h){this.document=n,this.location=o,this.zone=c,this.renderer=r,this.router=h,this.isScrollBlocked=!1,this.topbarHeight=0}ngOnInit(){if(void 0!==typeof window){const n=window.location.hash.substring(1),o=C.gb.isNotEmpty(n),c=o?n:(this.docs[0]||{}).id;this.activeId=c,o&&setTimeout(()=>{this.scrollToLabelById(c)},1),this.zone.runOutsideAngular(()=>{this.scrollListener=this.renderer.listen(this.document,"scroll",r=>{this.onScroll()})})}}onScroll(){if(void 0!==typeof window){if(!this.isScrollBlocked&&void 0!==typeof document){const n=[...Array.from(this.document.querySelectorAll(":is(h1,h2,h3).doc-section-label"))].filter(c=>d.p.isVisible(c)),o=d.p.getWindowScrollTop();n.forEach(c=>{const{top:r}=d.p.getOffset(c);if(r-this.getThreshold(c)<=o){const N=d.p.findSingle(c,"a");this.activeId=N.id}})}clearTimeout(this.scrollEndTimer),this.scrollEndTimer=setTimeout(()=>{this.isScrollBlocked=!1;const n=d.p.findSingle(this.nav.nativeElement,".active-navbar-item");n&&n.scrollIntoView({block:"nearest",inline:"start"})},50)}}onButtonClick(n){this.activeId=n.id,setTimeout(()=>{this.scrollToLabelById(n.id),this.isScrollBlocked=!0},1)}getThreshold(n){if(void 0!==typeof document&&!this.topbarHeight){const o=d.p.findSingle(document.body,".layout-topbar");this.topbarHeight=o?d.p.getHeight(o):0}return this.topbarHeight+3.5*d.p.getHeight(n)}scrollToLabelById(n){if(void 0!==typeof document){const o=document.getElementById(n);this.location.go(this.location.path().split("#")[0]+"#"+n),o&&o.parentElement.scrollIntoView({block:"start",behavior:"smooth"})}}ngOnDestroy(){this.scrollListener&&(this.scrollListener(),this.scrollListener=null)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.K0),t.Y36(a.Ye),t.Y36(t.R0b),t.Y36(t.Qsj),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-docsection-nav"]],viewQuery:function(n,o){if(1&n&&t.Gf(T,5),2&n){let c;t.iGM(c=t.CRH())&&(o.nav=c.first)}},inputs:{docs:"docs"},decls:1,vars:1,consts:[["class","doc-section-nav",3,"ngClass",4,"ngIf"],[1,"doc-section-nav",3,"ngClass"],["nav",""],["class","navbar-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"navbar-item",3,"ngClass"],[1,"navbar-item-content"],[1,"p-link",3,"click"],[4,"ngIf"]],template:function(n,o){1&n&&t.YNc(0,u,3,4,"ul",0),2&n&&t.Q6J("ngIf",o.docs&&o.docs.length)},dependencies:[a.mk,a.sg,a.O5],encapsulation:2}),e})();const E=["Doc"];function Z(e,l){}function O(e,l){1&e&&t.YNc(0,Z,0,0,"ng-template",null,1,t.W1O)}let b=(()=>{class e{constructor(n){this.cd=n,this.currentDocIndex=-1}ngAfterViewInit(){for(let n=0;n<this.docs.length;n++)this.loadComponent();this.cd.detectChanges()}loadComponent(){this.currentDocIndex=(this.currentDocIndex+1)%this.docs.length;const n=this.docs[this.currentDocIndex],o=this.Doc;let c;if(void 0!==n.component&&(c=o.createComponent(n.component),c.instance.id=n.id,c.instance.title=n.label),!n.component&&n.children)for(let r=0;r<n.children.length;r++){const h=n.children[r];c=o.createComponent(h.component),c.instance.id=h.id,c.instance.title=h.label,c.instance.docsectiontext&&0===r&&(c.instance.docsectiontext.parentTitle=n.label,c.instance.docsectiontext.parentId=n.id)}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-docsection"]],viewQuery:function(n,o){if(1&n&&t.Gf(E,5,t.s_b),2&n){let c;t.iGM(c=t.CRH())&&(o.Doc=c.first)}},inputs:{docs:"docs"},decls:1,vars:1,consts:[[4,"ngIf"],["Doc",""]],template:function(n,o){1&n&&t.YNc(0,O,2,0,null,0),2&n&&t.Q6J("ngIf",o.docs&&o.docs.length)},dependencies:[a.O5],encapsulation:2}),e})(),y=(()=>{class e{constructor(n,o){this.location=n,this.router=o,this._docs=[]}ngOnInit(){this.router.url.includes("#api")||this.location.go(this.location.path().split("#")[0]),this.generateDocs()}generateDocs(){if(this.docs)for(let n=0;n<this.docs.length;n++){const o=this.docs[n],c={...o,id:`api.${o.id}`};this._docs.push(c)}}ngOnDestroy(){this.location.go(this.location.path().split("#")[0])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.Ye),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-docapisection"]],inputs:{header:"header",docs:"docs"},decls:8,vars:4,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA()(),t._UZ(6,"app-docsection",2),t.qZA(),t._UZ(7,"app-docsection-nav",2)),2&n&&(t.xp6(3),t.hij("",o.header," API"),t.xp6(2),t.hij("API defines helper props, events and others for the PrimeNG ",o.header," module."),t.xp6(1),t.Q6J("docs",o._docs),t.xp6(1),t.Q6J("docs",o._docs))},dependencies:[m,b],encapsulation:2}),e})();const S=function(e){return{"doc-tabmenu-active":e}};function J(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"li",7)(1,"button",10),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2);return t.KtG(c.activateTab(1))}),t._uU(2,"API"),t.qZA()()}if(2&e){const n=t.oxw(2);t.Q6J("ngClass",t.VKq(1,S,1===n.activeTab))}}function w(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"ul",9)(1,"li",7)(2,"button",10),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.activateTab(0))}),t._uU(3,"FEATURES"),t.qZA()(),t.YNc(4,J,3,3,"li",11),t.qZA()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,S,0===n.activeTab)),t.xp6(3),t.Q6J("ngIf",n.apiDocs)}}const I=function(e){return{hidden:e}};let M=(()=>{class e{constructor(n,o,c){this.router=n,this.titleService=o,this.metaService=c}ngOnInit(){this.activeTab=this.router.url.includes("#api")?1:0}ngOnChanges(n){n.title&&n.title.currentValue&&this.titleService.setTitle(n.title.currentValue),n.description&&n.description.currentValue&&this.metaService.updateTag({name:"description",content:n.description.currentValue})}activateTab(n){this.activeTab=n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.F0),t.Y36(v.Dx),t.Y36(v.h_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-doc"]],inputs:{title:"title",docs:"docs",header:"header",description:"description",apiDocs:"apiDocs"},features:[t.TTD],decls:14,vars:13,consts:[[1,"doc-component"],["class","doc-tabmenu",4,"ngIf"],[1,"doc-tabpanels"],[1,"doc-tabpanel",3,"ngClass"],[1,"doc-main"],[1,"doc-intro"],[3,"docs"],[3,"ngClass"],["ngClass","doc-tabpanel",3,"docs","header"],[1,"doc-tabmenu"],["type","button",3,"click"],[3,"ngClass",4,"ngIf"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,w,5,4,"ul",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()(),t._UZ(10,"app-docsection",6),t.qZA(),t._UZ(11,"app-docsection-nav",6),t.qZA(),t.TgZ(12,"div",7),t._UZ(13,"app-docapisection",8),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("ngIf",o.docs&&o.apiDocs),t.xp6(2),t.Q6J("ngClass",t.VKq(9,I,1===o.activeTab)),t.xp6(4),t.Oqu(o.header),t.xp6(2),t.Oqu(o.description),t.xp6(1),t.Q6J("docs",o.docs),t.xp6(1),t.Q6J("docs",o.docs),t.xp6(1),t.Q6J("ngClass",t.VKq(11,I,0===o.activeTab)),t.xp6(1),t.Q6J("docs",o.apiDocs)("header",o.header))},dependencies:[a.mk,a.O5,y,m,b],encapsulation:2}),e})()},84369:(x,D,p)=>{p.d(D,{V:()=>A});var t=p(36895),g=p(90433),v=p(61928),a=p(46440),d=p(54507),C=p(79768),T=p(41571);let A=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=T.oAB({type:s}),s.\u0275inj=T.cJS({imports:[t.ez,g.u5,v.hJ,a.j,d.z,C.a]}),s})()},54802:(x,D,p)=>{p.d(D,{c:()=>A});var t=p(41571),g=p(36895),v=p(10359);function a(s,f){if(1&s){const i=t.EpF();t.TgZ(0,"h2",3),t._uU(1),t.TgZ(2,"a",4),t.NdJ("click",function(u){t.CHM(i);const m=t.oxw();return t.KtG(m.navigate(u))}),t._uU(3,"#"),t.qZA()()}if(2&s){const i=t.oxw();t.xp6(1),t.hij("",i.parentTitle," "),t.xp6(1),t.Q6J("id",i.parentId)}}function d(s,f){if(1&s){const i=t.EpF();t.TgZ(0,"h2",5),t._uU(1),t.TgZ(2,"a",4),t.NdJ("click",function(u){t.CHM(i);const m=t.oxw();return t.KtG(m.navigate(u))}),t._uU(3,"#"),t.qZA()()}if(2&s){const i=t.oxw();t.xp6(1),t.hij("",i.title," "),t.xp6(1),t.Q6J("id",i.id)}}function C(s,f){if(1&s){const i=t.EpF();t.TgZ(0,"h3",5),t._uU(1),t.TgZ(2,"a",4),t.NdJ("click",function(u){t.CHM(i);const m=t.oxw();return t.KtG(m.navigate(u))}),t._uU(3,"#"),t.qZA()()}if(2&s){const i=t.oxw();t.xp6(1),t.hij("",i.title," "),t.xp6(1),t.Q6J("id",i.id)}}const T=["*"];let A=(()=>{class s{constructor(i,_,u,m){this.location=i,this.router=_,this.el=u,this.cd=m,this.level=2}navigate(i){if(void 0!==typeof window){const _=window.location.hash.substring(1),u=i.currentTarget.parentElement;this.location.go(this.location.path().split("#")[0]+"#"+this.id),setTimeout(()=>{u.scrollIntoView({block:"start",behavior:"smooth"})},1),_===this.id&&i.preventDefault()}}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(g.Ye),t.Y36(v.F0),t.Y36(t.SBq),t.Y36(t.sBO))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-docsectiontext"]],inputs:{title:"title",id:"id",level:"level"},ngContentSelectors:T,decls:5,vars:3,consts:[["class","doc-section-label mb-0",4,"ngIf"],["class","doc-section-label",4,"ngIf"],[1,"doc-section-description"],[1,"doc-section-label","mb-0"],[1,"cursor-pointer",3,"id","click"],[1,"doc-section-label"]],template:function(i,_){1&i&&(t.F$t(),t.YNc(0,a,4,2,"h2",0),t.YNc(1,d,4,2,"h2",1),t.YNc(2,C,4,2,"h3",1),t.TgZ(3,"div",2),t.Hsn(4),t.qZA()),2&i&&(t.Q6J("ngIf",_.parentTitle),t.xp6(1),t.Q6J("ngIf",2===_.level),t.xp6(1),t.Q6J("ngIf",3===_.level))},dependencies:[g.O5],encapsulation:2}),s})()}}]);