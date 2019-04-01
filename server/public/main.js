(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span class=\"active disabled\" style=\"display: none;\"></span>\n<noscript>\n  <div class=\"js_disabled\">В вашем браузере отключена поддержка JavaScript! Для нормальной работоспособности сайта необходимо разрешить использование JavaScript.</div>\n</noscript>\n\n<header class=\"layout-header\" id=\"header\"  >\n  <div class=\"layout-header__wrapper\">\n    <app-logo></app-logo>\n    <!--<nav class=\"layout-header__menu header-menu\">-->\n      <!--<a class=\"header-menu__link header-menu__link_filled j-navigation current\" routerLink=\"/login\">let's get acquainted!</a>-->\n    <!--</nav>-->\n  </div>\n</header>\n\n<router-outlet></router-outlet>\n\n<script src=\"js/vendor.min.js\"></script>\n<script src=\"js/app.min.js\"></script>\n<!--[if lt IE 9]>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js\"></script>\n<![endif]-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var _fragments_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fragments/logo/logo.component */ "./src/app/fragments/logo/logo.component.ts");
/* harmony import */ var _fragments_title_message_title_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fragments/title-message/title-message.component */ "./src/app/fragments/title-message/title-message.component.ts");
/* harmony import */ var _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about-me/about-me.component */ "./src/app/pages/about-me/about-me.component.ts");
/* harmony import */ var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contacts/contacts.component */ "./src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_competence_competence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/competence/competence.component */ "./src/app/pages/competence/competence.component.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/history/history.component */ "./src/app/pages/history/history.component.ts");
/* harmony import */ var _fragments_large_card_large_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fragments/large-card/large-card.component */ "./src/app/fragments/large-card/large-card.component.ts");
/* harmony import */ var _fragments_hero_logo_hero_logo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fragments/hero-logo/hero-logo.component */ "./src/app/fragments/hero-logo/hero-logo.component.ts");
/* harmony import */ var _fragments_more_more_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fragments/more/more.component */ "./src/app/fragments/more/more.component.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/projects.service */ "./src/app/shared/projects.service.ts");
/* harmony import */ var _shared_filters_limit_text_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/filters/limit-text.pipe */ "./src/app/shared/filters/limit-text.pipe.ts");
/* harmony import */ var _fragments_text_pages_text_pages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fragments/text-pages/text-pages.component */ "./src/app/fragments/text-pages/text-pages.component.ts");
/* harmony import */ var _pages_history_history_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/history/history.service */ "./src/app/pages/history/history.service.ts");
/* harmony import */ var _pages_lifestyle_lifestyle_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/lifestyle/lifestyle.component */ "./src/app/pages/lifestyle/lifestyle.component.ts");
/* harmony import */ var ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-masonry-gallery */ "./node_modules/ngx-masonry-gallery/fesm5/ngx-masonry-gallery.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _fragments_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fragments/general-menu/general-menu.component */ "./src/app/fragments/general-menu/general-menu.component.ts");
/* harmony import */ var _fragments_lifestyle_menu_lifestyle_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fragments/lifestyle-menu/lifestyle-menu.component */ "./src/app/fragments/lifestyle-menu/lifestyle-menu.component.ts");
/* harmony import */ var _pages_photos_photos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/photos/photos.component */ "./src/app/pages/photos/photos.component.ts");
/* harmony import */ var _pages_story_story_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/story/story.component */ "./src/app/pages/story/story.component.ts");
/* harmony import */ var _pages_books_books_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/books/books.component */ "./src/app/pages/books/books.component.ts");
/* harmony import */ var _pages_music_music_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/music/music.component */ "./src/app/pages/music/music.component.ts");
/* harmony import */ var _pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/admin-panel/admin-panel.component */ "./src/app/pages/admin-panel/admin-panel.component.ts");
/* harmony import */ var _fragments_admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fragments/admin-menu/admin-menu.component */ "./src/app/fragments/admin-menu/admin-menu.component.ts");
/* harmony import */ var _pages_admin_panel_admin_guard_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/admin-panel/admin-guard.service */ "./src/app/pages/admin-panel/admin-guard.service.ts");
/* harmony import */ var ngx_image_viewer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-image-viewer */ "./node_modules/ngx-image-viewer/ngx-image-viewer.es5.js");
/* harmony import */ var _fragments_tag_filter_tag_filter_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./fragments/tag-filter/tag-filter.component */ "./src/app/fragments/tag-filter/tag-filter.component.ts");
/* harmony import */ var _shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/translation/translate.service */ "./src/app/shared/translation/translate.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_translation_translate_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/translation/translate.pipe */ "./src/app/shared/translation/translate.pipe.ts");
/* harmony import */ var _fragments_set_language_set_language_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./fragments/set-language/set-language.component */ "./src/app/fragments/set-language/set-language.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_filters_pojects_showd_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/filters/pojects-showd.pipe */ "./src/app/shared/filters/pojects-showd.pipe.ts");
/* harmony import */ var ngx_crystal_gallery__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-crystal-gallery */ "./node_modules/ngx-crystal-gallery/fesm5/ngx-crystal-gallery.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var appRoutes = [
    /*{ path: 'crisis-center', component: CrisisListComponent },
      { path: 'hero/:id',      component: HeroDetailComponent },*/
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        data: { title: 'Sergei Kharlamov' }
    },
    {
        path: 'lifestyle',
        component: _pages_lifestyle_lifestyle_component__WEBPACK_IMPORTED_MODULE_22__["LifestyleComponent"],
        data: { title: 'Sergei Kharlamov' }
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
        data: { title: 'Sergei Kharlamov' }
    },
    {
        path: 'admin',
        component: _pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_31__["AdminPanelComponent"],
        canActivate: [_pages_admin_panel_admin_guard_service__WEBPACK_IMPORTED_MODULE_33__["AdminGuardService"]],
        data: { title: 'Sergei Kharlamov' }
    } /*,
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }*/,
    { path: '**', redirectTo: '' }
];
function setupTranslateFactory(service) {
    return function () { return service.use('en'); };
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_40__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _fragments_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"],
                _fragments_title_message_title_message_component__WEBPACK_IMPORTED_MODULE_9__["TitleMessageComponent"],
                _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_10__["AboutMeComponent"],
                _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"],
                _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
                _pages_competence_competence_component__WEBPACK_IMPORTED_MODULE_13__["CompetenceComponent"],
                _pages_history_history_component__WEBPACK_IMPORTED_MODULE_14__["HistoryComponent"],
                _fragments_large_card_large_card_component__WEBPACK_IMPORTED_MODULE_15__["LargeCardComponent"],
                _fragments_hero_logo_hero_logo_component__WEBPACK_IMPORTED_MODULE_16__["HeroLogoComponent"],
                _fragments_more_more_component__WEBPACK_IMPORTED_MODULE_17__["MoreComponent"],
                _shared_filters_limit_text_pipe__WEBPACK_IMPORTED_MODULE_19__["LimitTextPipe"],
                _fragments_text_pages_text_pages_component__WEBPACK_IMPORTED_MODULE_20__["TextPagesComponent"],
                _pages_lifestyle_lifestyle_component__WEBPACK_IMPORTED_MODULE_22__["LifestyleComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _fragments_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_25__["GeneralMenuComponent"],
                _fragments_lifestyle_menu_lifestyle_menu_component__WEBPACK_IMPORTED_MODULE_26__["LifestyleMenuComponent"],
                _pages_photos_photos_component__WEBPACK_IMPORTED_MODULE_27__["PhotosComponent"],
                _pages_story_story_component__WEBPACK_IMPORTED_MODULE_28__["StoryComponent"],
                _pages_books_books_component__WEBPACK_IMPORTED_MODULE_29__["BooksComponent"],
                _pages_music_music_component__WEBPACK_IMPORTED_MODULE_30__["MusicComponent"],
                _pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_31__["AdminPanelComponent"],
                _fragments_admin_menu_admin_menu_component__WEBPACK_IMPORTED_MODULE_32__["AdminMenuComponent"],
                _fragments_tag_filter_tag_filter_component__WEBPACK_IMPORTED_MODULE_35__["TagFilterComponent"],
                _shared_translation_translate_pipe__WEBPACK_IMPORTED_MODULE_38__["TranslatePipe"],
                _fragments_set_language_set_language_component__WEBPACK_IMPORTED_MODULE_39__["SetLanguageComponent"],
                _shared_filters_pojects_showd_pipe__WEBPACK_IMPORTED_MODULE_41__["PojectsShowdPipe"]
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_7__["ScrollToModule"].forRoot(), ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_23__["MasonryGalleryModule"], ngx_image_viewer__WEBPACK_IMPORTED_MODULE_34__["ImageViewerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"], ngx_crystal_gallery__WEBPACK_IMPORTED_MODULE_42__["CrystalGalleryModule"]
            ],
            providers: [
                _shared_projects_service__WEBPACK_IMPORTED_MODULE_18__["ProjectsService"],
                _pages_history_history_service__WEBPACK_IMPORTED_MODULE_21__["HistoryService"],
                _shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_36__["TranslateService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_36__["TranslateService"]],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fragments/admin-menu/admin-menu.component.css":
/*!***************************************************************!*\
  !*** ./src/app/fragments/admin-menu/admin-menu.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fragments/admin-menu/admin-menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fragments/admin-menu/admin-menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\"   >\n  <nav class=\"navigation\" role=\"navigation\" id=\"navigation\" >\n  </nav>\n</aside>\n"

/***/ }),

/***/ "./src/app/fragments/admin-menu/admin-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fragments/admin-menu/admin-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMenuComponent", function() { return AdminMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminMenuComponent = /** @class */ (function () {
    function AdminMenuComponent() {
    }
    AdminMenuComponent.prototype.ngOnInit = function () {
    };
    AdminMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-menu',
            template: __webpack_require__(/*! ./admin-menu.component.html */ "./src/app/fragments/admin-menu/admin-menu.component.html"),
            styles: [__webpack_require__(/*! ./admin-menu.component.css */ "./src/app/fragments/admin-menu/admin-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminMenuComponent);
    return AdminMenuComponent;
}());



/***/ }),

/***/ "./src/app/fragments/general-menu/general-menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/fragments/general-menu/general-menu.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fragments/general-menu/general-menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/fragments/general-menu/general-menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\"   >\n\n  <nav class=\"navigation\" role=\"navigation\" id=\"navigation\" >\n    <a [scrollTo]=\"'#competence'\" [scrollDuration]=\"1000\"  class=\"navigation__link j-navigation\" routerLink=\"\"\n       fragment=\"competence\" [ngClass]=\"{'current':(menu_item===1)} \"  (click)=\"menu_item=1\" >{{'Competence' | translate}}</a>\n    <a [scrollTo]=\"'#projects'\" [scrollDuration]=\"1000\" class=\"navigation__link j-navigation\"   routerLink=\"\"\n       fragment=\"projects\" [ngClass]=\"{'current':(menu_item===2)} \"  (click)=\"menu_item=2\" >{{'Projects'| translate}}</a>\n    <a [scrollTo]=\"'#approach'\" [scrollDuration]=\"1000\"  class=\"navigation__link j-navigation\"  routerLink=\"\"\n       fragment=\"approach\" [ngClass]=\"{'current':(menu_item===3)} \"  (click)=\"menu_item=3\" >{{'History'| translate}}</a>\n    <a [scrollTo]=\"'#contacts'\" [scrollDuration]=\"1000\"  class=\"navigation__link j-navigation\"  routerLink=\"\"\n       fragment=\"contacts\" [ngClass]=\"{'current':(menu_item===4)} \"  (click)=\"menu_item=4\" >{{'Contacts'| translate}}</a>\n  </nav>\n  <app-set-language></app-set-language>\n</aside>\n"

/***/ }),

/***/ "./src/app/fragments/general-menu/general-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/fragments/general-menu/general-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: GeneralMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMenuComponent", function() { return GeneralMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneralMenuComponent = /** @class */ (function () {
    function GeneralMenuComponent() {
        this.menu_item = 0;
    }
    GeneralMenuComponent.prototype.ngOnInit = function () {
    };
    GeneralMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-menu',
            template: __webpack_require__(/*! ./general-menu.component.html */ "./src/app/fragments/general-menu/general-menu.component.html"),
            styles: [__webpack_require__(/*! ./general-menu.component.css */ "./src/app/fragments/general-menu/general-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneralMenuComponent);
    return GeneralMenuComponent;
}());



/***/ }),

/***/ "./src/app/fragments/hero-logo/Logo.ts":
/*!*********************************************!*\
  !*** ./src/app/fragments/hero-logo/Logo.ts ***!
  \*********************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
var Point = /** @class */ (function () {
    function Point(X, Y) {
        this.x = X;
        this.y = Y;
    }
    return Point;
}());
// class Vector extends Point {
//   constructor(X:number,Y:number)
//   {
//     super(x,y);
//   }
// }
var Logo = /** @class */ (function () {
    function Logo() {
        this.direction = new Point(10, 10);
        this.disperce = 30; // radian
        this.renge = 30; // px circle range
    }
    Logo.prototype.init = function (DOM_ID) {
        this.canvas = document.getElementById(DOM_ID);
    };
    Logo.prototype.test = function () {
        var ctx = this.canvas.getContext('2d');
        ctx.fillStyle = 'green';
        this.triangle(new Point(10, 5), new Point(30, 100), new Point(70, 30));
        this.grid_triangle(new Point(30, 100), new Point(70, 30));
    };
    Logo.prototype.rotation = function (V, alpha) {
        alpha = 180 * alpha / 3.1415;
        var R = new Point((Math.round(V.x * Math.cos(alpha) + V.y * Math.sin(alpha))), (Math.round(V.y * Math.cos(alpha) + V.x * Math.sin(alpha))));
        this.p_log('R', R);
        return R;
    };
    Logo.prototype.grid_triangle = function (A, B) {
        var C = new Point(70, 30);
        var AB = new Point(B.x - A.x, B.y - A.y);
        var A_direction = new Point(A.x - this.direction.x, A.y - this.direction.y);
        console.log('Math=' + Math.cos(3));
        C = this.rotation(AB, 270);
        this.p_log('A', A);
        this.p_log('B', B);
        this.p_log('C', C);
        this.triangle(A, B, C);
    };
    Logo.prototype.triangle = function (A, B, C) {
        var ctx = this.canvas.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
        ctx.moveTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.stroke();
        ctx.moveTo(C.x, C.y);
        ctx.lineTo(A.x, A.y);
        console.log('C.x' + C.x);
        ctx.stroke();
    };
    Logo.prototype.p_log = function (S, V) {
        console.log(S + '= [' + V.x + ';' + V.y + '] \n');
    };
    return Logo;
}());



/***/ }),

/***/ "./src/app/fragments/hero-logo/hero-logo.component.css":
/*!*************************************************************!*\
  !*** ./src/app/fragments/hero-logo/hero-logo.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fragments/hero-logo/hero-logo.component.html":
/*!**************************************************************!*\
  !*** ./src/app/fragments/hero-logo/hero-logo.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:blue; width:100%; height:100%;\">\n  <canvas id=\"myCanvas\" width=\"700\" height=\"700\" style=\"border:1px solid #000000; top:100px; left:100px;\">\n  </canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/fragments/hero-logo/hero-logo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/fragments/hero-logo/hero-logo.component.ts ***!
  \************************************************************/
/*! exports provided: HeroLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroLogoComponent", function() { return HeroLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ "./src/app/fragments/hero-logo/Logo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroLogoComponent = /** @class */ (function () {
    function HeroLogoComponent() {
    }
    HeroLogoComponent.prototype.ngOnInit = function () {
        var logo = new _Logo__WEBPACK_IMPORTED_MODULE_1__["Logo"]();
        logo.init('myCanvas');
        logo.test();
    };
    HeroLogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-logo',
            template: __webpack_require__(/*! ./hero-logo.component.html */ "./src/app/fragments/hero-logo/hero-logo.component.html"),
            styles: [__webpack_require__(/*! ./hero-logo.component.css */ "./src/app/fragments/hero-logo/hero-logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroLogoComponent);
    return HeroLogoComponent;
}());



/***/ }),

/***/ "./src/app/fragments/large-card/large-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/fragments/large-card/large-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f2f2f2;\n  font-family: 'proxima-nova-soft', sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.column{\n  max-width: 330px;\n /* margin: 10px;*/\n}\n.post-module {\n  position: relative;\n  z-index: 1;\n  display: block;\n  background: #FFFFFF;\n  min-width: 270px;\n  height: 470px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);\n  transition: all 0.3s linear 0s;\n}\n.post-module:hover,\n.hover {\n  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);\n}\n.post-module:hover .thumbnail img,\n.hover .thumbnail img {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n  opacity: 0.6;\n}\n.post-module .thumbnail {\n  background: #000000;\n  height: 400px;\n  overflow: hidden;\n}\n.post-module .thumbnail .date {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 1;\n  background: #e74c3c;\n  width: 55px;\n  height: 55px;\n  padding: 12.5px 0;\n  border-radius: 100%;\n  color: #FFFFFF;\n  font-weight: 700;\n  text-align: center;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.post-module .thumbnail .date .day {\n  font-size: 18px;\n}\n.post-module .thumbnail .date .month {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.post-module .thumbnail img {\n  display: block;\n  width: 120%;\n  transition: all 0.3s linear 0s;\n}\n.post-module .post-content {\n  position: absolute;\n  bottom: 0;\n  background: #FFFFFF;\n  width: 100%;\n  padding: 30px;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;\n}\n.post-module .post-content .category {\n  position: absolute;\n  top: -34px;\n  left: 0;\n  background: #e74c3c;\n  padding: 10px 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.post-module .post-content .title {\n  margin: 0;\n  padding: 0 0 10px;\n  color: #333333;\n  font-size: 26px;\n  font-weight: 700;\n}\n.post-module .post-content .sub_title {\n  margin: 0;\n  padding: 0 0 20px;\n  color: #e74c3c;\n  font-size: 20px;\n  font-weight: 400;\n}\n.post-module .post-content .description {\n  display: block;\n  color: #666666;\n  font-size: 14px;\n  line-height: 1.8em;\n}\n.post-module .post-content .post-meta {\n  margin: 30px 0 0;\n  color: #999999;\n}\n.post-module .post-content .post-meta .timestamp {\n  margin: 0 16px 0 0;\n}\n.post-module .post-content .post-meta a {\n  color: #999999;\n  text-decoration: none;\n}\n.hover .post-content .description {\n  display: block !important;\n  height: auto !important;\n  opacity: 1 !important;\n}\n"

/***/ }),

/***/ "./src/app/fragments/large-card/large-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fragments/large-card/large-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Normal Demo-->\n  <div class=\"column\">\n    <!-- Post-->\n    <div class=\"post-module\"  >\n      <!-- Thumbnail-->\n      <div class=\"thumbnail\">\n        <!--<div class=\"date\" [ngStyle]=\"{'background-color':card.color}\">\n          <div class=\"day\">{{card.date | date:'D'}}</div>\n          <div class=\"month\">{{card.date | date:'MM'}}</div>\n        </div>-->\n      <img src=\"{{card.img_url}}\"/>\n      </div>\n      <!-- Post Content-->\n      <a href=\"{{card.link}}\" target=\"_blank\">\n      <div class=\"post-content\">\n        <div class=\"category\" [ngStyle]=\"{'background-color':card.color}\">{{card.category}}</div>\n        <h1 class=\"title\">{{card.title}}</h1>\n        <h2 class=\"sub_title\" [ngStyle]=\"{'color':card.color}\">{{card.sub_title}}</h2>\n        <p class=\"description\" [@isOpen]=\"isOpen ? 'open' : 'closed'\" >{{card.description | limitText:100}}</p>\n        <div class=\"post-meta\"><span class=\"timestamp\"><i class=\"fa fa-clock-\"></i> {{card.timestamp}}</span><span class=\"comments\"><i class=\"fa fa-comments\"></i><a >{{card.comments}}</a></span></div>\n      </div>\n      </a>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/fragments/large-card/large-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fragments/large-card/large-card.component.ts ***!
  \**************************************************************/
/*! exports provided: LargeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeCardComponent", function() { return LargeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LargeCardComponent = /** @class */ (function () {
    function LargeCardComponent() {
        this.isOpen = false;
    }
    LargeCardComponent.prototype.onMouseEnter = function () {
        this.isOpen = true;
    };
    LargeCardComponent.prototype.onMouseLeave = function () {
        this.isOpen = false;
    };
    LargeCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LargeCardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LargeCardComponent.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LargeCardComponent.prototype, "onMouseLeave", null);
    LargeCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-large-card',
            template: __webpack_require__(/*! ./large-card.component.html */ "./src/app/fragments/large-card/large-card.component.html"),
            styles: [__webpack_require__(/*! ./large-card.component.css */ "./src/app/fragments/large-card/large-card.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('isOpen', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '110px',
                        opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0px',
                        opacity: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], LargeCardComponent);
    return LargeCardComponent;
}());



/***/ }),

/***/ "./src/app/fragments/lifestyle-menu/lifestyle-menu.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/fragments/lifestyle-menu/lifestyle-menu.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fragments/lifestyle-menu/lifestyle-menu.component.html":
/*!************************************************************************!*\
  !*** ./src/app/fragments/lifestyle-menu/lifestyle-menu.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\"   >\n  <nav class=\"navigation\" role=\"navigation\" id=\"navigation\">\n    <a [scrollTo]=\"'#about_me'\" [scrollDuration]=\"500\"  class=\"navigation__link  j-navigation\" routerLink=\"/\"   >Home</a>\n    <!--<a [scrollTo]=\"'#photos'\" [scrollDuration]=\"500\"  class=\"navigation__link  j-navigation\" routerLink=\"/lifestyle\" fragment=\"photos\"  >Photos</a>-->\n    <!--<a [scrollTo]=\"'#story'\" [scrollDuration]=\"1000\"  class=\"navigation__link j-navigation\" routerLink=\"/lifestyle\" fragment=\"story\"  >Story</a>-->\n    <!--<a [scrollTo]=\"'#books'\" [scrollDuration]=\"1000\" class=\"navigation__link j-navigation\" routerLink=\"/lifestyle\" fragment=\"books\"     >Books</a>-->\n    <!--<a [scrollTo]=\"'#music'\" [scrollDuration]=\"1000\"  class=\"navigation__link j-navigation\" routerLink=\"/lifestyle\" fragment=\"music\"    >Music</a>-->\n    <!--<a [scrollTo]=\"'#files'\" [scrollDuration]=\"1000\"  class=\"navigation__link j-navigation\" routerLink=\"/lifestyle\" fragment=\"files\"    >Files</a>-->\n  </nav>\n</aside>\n"

/***/ }),

/***/ "./src/app/fragments/lifestyle-menu/lifestyle-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/fragments/lifestyle-menu/lifestyle-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: LifestyleMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifestyleMenuComponent", function() { return LifestyleMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LifestyleMenuComponent = /** @class */ (function () {
    function LifestyleMenuComponent() {
    }
    LifestyleMenuComponent.prototype.ngOnInit = function () {
    };
    LifestyleMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifestyle-menu',
            template: __webpack_require__(/*! ./lifestyle-menu.component.html */ "./src/app/fragments/lifestyle-menu/lifestyle-menu.component.html"),
            styles: [__webpack_require__(/*! ./lifestyle-menu.component.css */ "./src/app/fragments/lifestyle-menu/lifestyle-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifestyleMenuComponent);
    return LifestyleMenuComponent;
}());



/***/ }),

/***/ "./src/app/fragments/logo/logo.component.css":
/*!***************************************************!*\
  !*** ./src/app/fragments/logo/logo.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n  font-size:0;\n  line-height:0;\n  position:absolute;\n  top:26px;\n  left:37px;\n  display:block;\n  width:100px;\n  height:100px;\n  cursor:pointer;\n  text-indent:-1000px;\n  background:url(data:image/png;base64,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) 50% 50% no-repeat;\n  /* background-image:url(assets/images/logo.svg);*/\n  background-size:100px 100px\n}\n.logo-blink{\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAYAAABNo9TkAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gkcDh0Cm3u6RQAAIABJREFUeNrt3V1y4sgSgFENwY60uF5DL441eR48HozBIIn6y6xzIvrxxo3Q2KX8lAIvCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/84xIAUa3r+uEqLMvlcnGWAwAIdADBLeoBABDogPBGzAMACHQAAY6ABwAQ6IAIR8ADAAh0QIiDeAcAEOiAEEe8AwAIdECMg3AHABDogBgH4Q4ACHRAkINoBwAQ6IAgB9EOAAh0QJCDaAcAEOggyAHRDgAIdECQg2B3FQAAgQ6iHBDtAIBABwQ5INgBAIEOohwQ7ACAQAdEOSDYAQCBDqIcEOwAgEAHRDkg2AEAgQ7CHBDs7tMAINABUQ6IdQBAoIMoBxDsACDQQZgDiHUAQKCDKAcQ6wAg0EGYAwh2AECggzAHEOsAINBBmAOIdQBAoIMoBxDrACDQQZgDINYBQKCDMAcQ6wAg0EGYAyDWAUCggzAHEOsAgEBHmAMg1AFAoIMwBxDrAIBAR5gDINYBQKCDOAcQ6gCAQEeYAyDWAUCggzAHEOoAgEBHmAMg1gFAoIM4B0CoA4BAR5gDINYBQKCDOAdAqAOAQEeYAyDUAUCggzgHQKgDgEBHmAMg1gFAoCPOAUCoA4BAR5gDINQBQKAjzgFAqAOAQEeYAyDUAUCgI84BQKgDgEBHnAOAUAdAoCPMAUCoA4BAR5wDgEgHIJKTS4A4BwAA6O/sEiDMAQAA+rNBR5wDAAAMwOewEOcATMHnzwEYnQ064hwAAECgI84BAABYFl8ShzAHAAAYgs9iIc4BSM/nzwGIwCvuiHMAAACBjjgHAABgWbzijjgHIDmvtwMQhQ064hwAAECgI84BAABYFq+4i3MASMzr7QBEYoMuzgEAABDoiHMAAACWxSvu4hwAkvJ6OwDR2KCLcwAAAAQ64hwAAIBl8Yq7OAeAhLzeDkBENujiHAAAAIGOOAcAAECgi3MAAAAG4fNZ4hwAUvH5cwCiskEX5wAAAAh0AAAAYFm84p6K7TkAs/N6OwCR2aCLcwAAAAQ64hwAAIBl8Yq7OAeAJLzeDkB0NujiHAAAAIEOAAAALItX3MOyPQeAK6+3A5CBDbo4BwAAQKAjzgEAABDoAEB4Xm8HQKDTnO05AACAQEecAwAAINABAAAgN5/ZCsD2HAAe8/lzADKxQRfnAAAACHTEOQAAAMuyLGeXAJjBSK/BevgG+X6vAaAEN7ZBGeDBQO5sAOcBAHOxQQcM2gmvk5AHAIjHQDwggzUiHGcNOE8AEOgYmMHgjLMI5wwAdOAVd8CQzK7/ruIdAKAOg/VADL2IcZxh4CwCQKBjsAVDMM43nE0A0JFX3AFDL81/rkQ7AMA9w/gADKoIcnAW4twCABt0MNzCsD+boh0AmIlBvTPDJ6IcnJk4zwBgWWzQwRALwX+uRTsAkIUBviNDJaIcnK044wDgiw06GFoh9e+DYAcAojDUd2JgRJSD8xfnHgAIdAMiBlTAeezsAwCBjmEQwyk4o3EGAsBPPoMOhlLgl985sQ4AtGTwb8ywhzAHZzjOQwB4xAYdDKLAgd9PsQ4AlCYEGjLMIczB+Y7zEQAEugEOgyfgvHdGAoBAx7CGoROc/zgrAeAZn0EHAyfQ6PddrAMAz4iEBgxkCHPAvcGZCQCv2KCDQRPofCaIdQBgWWzQqzN0IcwB9w3nJwBscXIJwHAJjHVuODsAYE4GgMpsQoQ5gHuJcxQABLqBCkMl4N7iLAWAIHxJHBgogaDnjAfBAJCLmKjE0CTOAdxznKcAsIcNOhgkgUTnkAfEABCXb3EHcQ4kO5ecTQAQkxt4BbYX4hzAfcnZCgB72aCDARKY4MxybgGAQAdxDiDUAYAN3KQL83q7OAdw33LGAsARNuhgcAQmP9ucbwAg0EGcAwh1AOA/bsQFeb1dnAO4pzlrAeAoG3QwMAI8PP+cgQAg0AEAoQ4A03HDLcTr7TmHUlcBoM39zpkLAAJdoGNQBOh833PmAsAnr7iDQRHg0FnpvAQAgQ4ACHUASMcNtQCvt+caNF0FgHb3ROcuAFzZoIMhEaDoWeo8BQCBDgAIdQAIy43zTV5vzzNIugoAbe+Xzl4AuGWDjjg3IAI4awFAoAMAM0W6UAeA37lJvskr7vGHRVcBAAAYgQ26OAcAAECgQz+25wAAgEAHAAAABDrYngMAAAIdAAAAuGOLeJAviIvL9hwAABiRDToAAAAIdGjL9hwAABjV2SUAAAB+8+fPHx/tnMzfv38ttTqxQQcAAMQ5DMCTkQN8QVxMXm8HABDnPGd73pcNOgAAIM4R5wIdAAAAcY5AZxpebwcA2Mb2XJwj0AEAAHGOOBfoAACAOHcVxDl9+Q+yk29wj8fr7QAA4hxxHoENOgAAiHPEOQIdAAAQ54hzBDoAAIhzxDkCHQAAEOeIcwQ6U/AFcQAA4lyci3OBDgAAiHPEOQIdAAAQ5yDQAQAAcU5XtucCPbV1XR1sAACAOEegAwAA+9iei3MEOgAAIM4R5wh08CfWAABx7iqIcwQ6AAAgzhHnCHQAABDniHMEOgAAIM4R5wh0AAAQ54hzBDoAACDOEecIdAAAEOeIcwQ6AAAgzhHnCHQAABDngEAHAADEOZXZngt0AABAnCPOEegAAADi3FUQ6AAAwEBsz8U5Ah0AABDniHMEOgAAiHNXQZwj0CGsdV3dyAAAcY44R6ADAADiHHGOQAcAAHGOOEegAwAA4hxxjkAHAABxjjhHoAMAAOIccY5ABwAAcY44R6DDaPypNQBAnAMCHQAAEOc8ZHuOQAcAABDnCHQAAOA723NxDgIdAADEOeIcgQ5t+aI4AECcI84R6AAAgDgX5+IcgQ4AAOIccY5ABwAAxLk4B4EO3/kcOgAgzhHnCHQAABDniHMQ6AAAIM4R5wh0GIjX3AEAcY44R6Ancblc/MIBACDOEecIdHiXLToAIM4BgQ4AAJCQ7TkCHQ6yRQcAarE9F+cg0AEAQJwjzhHoAAAgzl0FcQ4CHQ7wmjsAIM4R5wh0EOkAgDhHnINABwAAcY44Z0R+wA6wec3lcrn4PQAAxDninO5s0AEAQJwjzhHo0J83IgAAcY44R6CDSAcAxDniHAQ6AACIc8Q5Ah0GY4sOAIhzxDkCPRjf+i3SAQBxDiDQQaQDAFCJ7TkCHQAABmN7Ls5BoMMAbNEBQJy7CuIcBDqIdABAnCPOmZAfRAHHC74UEADEOeIcWrBBhxc8iAEAcY44B4EOIh0AEOeIcwQ6INIBQJwjzqEVP5iijZ18Jh0AxDniHGqwQYedPJQBAHGOOAeBDiIdABDniHMEOiDSAUCcI86hFj+oQo0CfC4dAMQ54hzeZYMOBXhIAwAACHQQ6QDABrbn87E9Jxo/sMKMCrzyDgDiHHEOAl2kI9IBAHEuziEgr7hDJR7aAIA4R5zDHn54xRgN2KYDgDhHnINAF+kIdQAQ54hzCMAr7tCQhzgAIM4R5/AbP8jii05s0wFAnCPOQaCLdIQ6AIhzxDkMxivu0JmHOgAgzhHnsCw26GKLodimA4A4R5wj0BHpCHUAEOeIcxDoAh2EOgCIc8Q5czu7BDCu7w97xDoAAORm4G8QVlCSUAcA2/MZ2Z4j0BHoCHUAEOeIcxDoIh2EOgCIc3HuKiDQEeiIdQAQ54hzEOgCHYQ6AIhzcQ4CHZGOWAcAcY44B4Eu0EGsA4A4F+cg0BHpiHUAEOeIcxDoAh3EOgCIc3EOAh2RjlgX6wCIc8Q5CHSBDmIdAHHuKohzEOiIdBDrAIhzxDl0c3YJgC2+P2AS6wCAOAeBHtrlcvnHFp1ssS7YASjB9hzAK+7dwwayEesAiHNesT0HgS7SQbADIM4R5yDQEegg2AEQ5+LcVQCBLtJBsAMgzhHnINAR6CDYARDn4hwQ6CIdBDsA4hxxDgIdgQ6CHQBxLs4BgS7SQbADIM4R5yDQEekg2AEQ5+IcEOgCHcS6Mw5AnCPOQaAj0kGwA4hzV0GcAwJdoAOCHUCcI84hlLNLME4oiHRo6+fvnGAHAKAnw+jgwQD0I9gBjrE9n4/tOQh0gQ4IdgBxjjgHgY5IB8Eu2AHEuTh3FUCgi3RAsAOIc8Q5CHQEOiDWAcS5OAcEukgHBDuAOEecg0BHpAOCHUCci3NAoIt0QLADiHPEOQh0BDog2AHEuTgHBLpIBwQ7gDhHnINAR6QDgh0Q566COAcEOiIdEOyAOEecQ2pnlwAgvp8P7wQ7AOIc4jm5BLEYuoGtwf71z9UA3mV7DtCG2As8fLsKwBEe9AHinGdsz0GgI9IBwQ6Ic8Q5CHREOoBgB8S5OHcVQKAj0gHBDohzxDkIdJdApAMIdkCci3NAoCPQAcEOiHPEOSDQRTqAYAfEuTgHBDoiHRDrgDhHnAMCXaQDCHZAnItzQKAj0gEEO4hzxDkg0EU6gFgHce4qiHNAoCPSAQQ7iHPEOfDDySUw4AKMaF3Xj69/rgaAOAeBjkgHEOuQiu05wLiE22QDrqsAZOIBJIhznrM9B4GOSAcQ7CDOEeeAQEekA4h1EOfi3FUAgY5QBxDrIM4R54BAR6QDiHUQ5+IcEOiIdAChDuIccQ4IdEQ6gFgHcS7OAYGOSAcQ6yDOEeeAQEekA4h1EOfiHBDoCHUAoQ7iHHEOCHREOoBYR5y7CuIciO/kEmAIBdhuXdcPDzABcQ7U4JebzQOpqwDwmAea9GR7Ls6BPGzQMXwCvMlWHXEOQAmii91DqKsA8JoHm4hzSrM9B4EOQh1AqCPOEeeAQEekAwh1EOfi3FUAgQ4iHUCsI84R54BAR6gDCHUQ5+IcEOgg0gGEOuIccQ4IdIQ6gFAHcS7OAYEOIh1AqCPOEeeAQEeoAyDUEefiHBDoINQBhDriHHEOCHREOgBCXZy7CuIcmNPJJaDlYGm4BDhuXdcPDztBnAN5ORDoOmi6CgDHeeiZj+25OAfmZoOOwRIgKBt1cQ5ALgKJYYZMVwHgPR58inPisD0HBDpCHUCoI84R54BAB6EOINIR5+LcVQAEOkIdQKgjzhHngEAHoQ4g1BHn4hxAoCPUARDp4hxxDgh0EOoAQh1xLs4BBDpCHQChLs4R54BAB6EOINIR5+IcQKAj1AEQ6uIccQ4EcXIJyDZgGjIB9vOAE8Q50J8DBAMnADc86CzH9lycAwh0EOsAIl2cI86BYLzizlTDpoETYJt1XT882BTnALQlVph+AHUVAJ7zcFOc85ztOSDQQagDCHVxjjgHBDqIdQCRjjgX564CINBBqAOIdHGOOAcEOoh1AIS6OBfnAAIdxDqASBfniHNAoANiHUCgi3NxDiDQQawDiHNxjjgHBDog1gEEujgX5wC1nF0CqDu0inVAnIM4B9jCgQMNiXVAnMdmey7OAQQ6iHUAcS7OEedAcl5xh0GGXMEOiHNxDsDcPBmEQQl2QJyLc/qwPQcEOiDWAXEuzhHngEAHBDuAOBfn4txVAAQ6INgBcS7OEeeAQAcEO4A4F+fiHECgA4IdEOfiHHEOINBBsAOIc3EuzgEEOiDaAXEuzhHnAAIdEOyAQBfn4hxAoAOCHRDn4hxxDvC/s0sAHBneBTuIcxDnAGU5pIAiBDuI82hsz8U5gEAHBDsgzsU54hzgjlfcgSaDv2AHcS7OAeA5TxOBLgQ7iHNxTgu254BABxDsIM7FOeIcQKADgh0Q5+JcnLsKgEAHEOwgzsU54hxAoAOCHRDn4lycAwh0AMEO4lycI84BBDqAYAdxLs7FOYBABxDsIM7FOeIcQKADiHYQ6OJcnANEdnYJAAEj2BHnIM4B+nOoAfxCsCPOY7E9F+cA0dmgA2wMHcGOOBfnAFCTJ48ABwl2xLk4py9bdECgAyDYEefiHJEOUJxX3AEqRZJgR5yLcwDYwxNHgEYEO+JcoFOHLTog0AEQ7Ih0gY5IBxDoAIIdRLpIR6QDAh0AwY5IF+mIdICiTi4BwLjB9f2fKwLwmgc2QGQGPoCgbNj5yRYdrmzSAYEOgGBHpIt0BDqAQAdAsCPS/QQg0gGBDoBgR6SLdEQ6gEAHQLAj0kU6Ih2IzLe4A0wcb74hHpiBBzZAFIYyAO7Yrudhiw5XNumAQAdArCPSRToiHUCgAyDWEel+AhDpQAQ+gw7ArsjzufWYZn64IsYAiMINCwDxNxGbdPjkwQ0wIht0AIpEn806EIkHNsCIDFIAVGOzPiZbdLiySQcEOgBiHZEu0hHpAAIdAKGOSPcTgEgHBDoAiHWRLtIR6QB3fEkcAF3j0BfL9eXPrwGAQAeAu1AX60BP3qoAejMIATAkr7+35VV3uPJ2BSDQAUCoi3SRjkgHBDoACHVEup8ARDog0AFAqIt0kY5IBybnS+IACBePvlAOaMVDG6Alww0Aodmo12GLDrds0oEWbNABCB+Stunl+fvoANCeGxAAwpJf2aTDlYc3gEAHAKEu0kU6Ih0Q6AAg1BHpfgIQ6UALPoMOgLAE2MFDG6AWQwsA07BNf48tOtyySQcEOgAIdZEu0hHpQEJecQdAZLKZP78GAPW40QAgONnNJh2uPLwBBDoAiHSRLtIR6UAiXnEHQGh65R14k4c2QAkGEgD4xjZ9H1t0uGWTDgh0ABDpIl2kI9IBgQ4AIl2ki3QQ6cC7fAYdAATn2/z5NQB4nxsKAIjPYmzS4crDG2AvG3QAEJ1ABR7aAHsZOABgI5v0bWzR4ZZNOiDQAUCki3SRjkgHBDoAiHSRLtJBpAMCHQBEukgX6Yh0IBhfEgcAwhNoxIMbQKADgEjvwt9HB4Dt3DgAQIRW51V3uOUBDvCIDToAUJ1NOtzy4AZ4xA0DAARoMzbpcMsDHECgA4BIF+kiHZEODMYr7gAgPIGOPLgBBDoA0IXPo4NIBwQ6AFRniy7SRToAR7lBAIAA7cbn0eGWBzgwNxt0AKAbm3S45cENzM2NAQDEZ3c26XDLAxyYkw06AIhOYDAe3IBABwDowqvuINIBr7gDgPgciFfd4Z6HODAPG3QAYBg26XDPwxsQ6ABAIT6LLtJFOgACHQAQ6SKdBGzRQaADAIXYogMiHRDoAEBItugg0mE2Dn8AEJ1D883ucM9DHMjJBh0AGJpNOtzz8AYEOgCASBfpiHRAoANAfL4sDgAQ6ABAaLbocM8WHQQ6AIBIF+mIdKAwBz0ACM1wfLM73PMQB+KzQQcAwrFJh3se3oBABwAQ6SIdkQ4IdACIybe5AyIdEOgAQBq26CDSQaADAIh0kQ6AQAcAEOkineds0UGgAwCIdJGOSAcOcJgDgKhMxd9Ih3se4kAMNugAAJCchzcg0AEAmvOqO4h0EOgAACJdpCPSAYEOACDSRTqAQAcAEOkinRBs0UGgAwCIdJGOSAcEOgCMaeY/CQaIdECgAwCTsUUHkQ4CHQBApIt0RDog0AEARLpIR6SDQAcAEOkiHQCBDgAAbGeLDgIdAKA5W3QQ6SDQAQBEukhHpAMCHQBApIt0RDoIdAAAkS7SEemAQAcAEOkiHZEOAh0AABDpgEAHAHjFFh0AgQ4AINJFOkOzRQeBDgAg0kU6Ih0EOgCASBfpINKhHQcwAAhBfnG5XKadlYQYz3iQA3XYoAMAALt4gAMCHQCgKa+6g0gHgQ4AINJFOoBABwBApIt0XrNFB4EOACDSRToiHQQ6AAAiHUQ6CHQASMOfWANEOiDQAQDYzRYdkQ4CHQAAkY5IB4EOAAAiHZEOAh0AAJEOINABgDp8QVw8l8tFkMIOtugg0AEAaMQWHZEOAh0AAJGOSAeBDgAAIh2RDgIdAMLz+XNEOiIdEOgAAIh0RDoIdACAmHyDOwACHQCS8Xo72dmi84otOgh0AABEOiIdBDoAACIdRDoIdAAYgtfbEekg0kGgAwAc5AviRDoiHQQ6AAAg0kGgAwAleb2dmdmiI9JBoAMAINIBBDoA8Mn2HEQ629iiI9ABAHjIF8SJdEQ6CHQASML2HEQ6Ih0EOgAAINJBoAMAtufwO1t0RDoIdACATXz+XKQj0kGgs6zr+mHrAhD/LHcVQKQDCHShDgAg0knDFh2BzlCh7ioAOLcBRDrk5mllsMHO5+EAxDn1ud8KMMbljQsys0EPNth57R0AEF7MzIMcBDrhQh4AZzOIdEQ6xOIATDDceQ0PQJxTjvuqACMOD3TIxgY9yVBoMAQAhBeAQKdgaPf83wPg/AWIxJsWZOPJZNIBz+t5AOIc908Bxiy8cUEWNuiJB0ZDI4A4B+HFDDzIQaAj1AEARDoiHYpx2A0U0i3+f7y6BxDr3KYd90gBRg4e6BCZDfqEA6WhEkCcg/AiKw9yEOgYLgGcnwCIdBDoHB8yDZoA4hyvt0diiw5k5oAz8BlOAMS5QHcPDMeGlC080CEaG3Ruhk8DKIA4B+FFFh7kINAR6gAQiO25SEekg0BHqAMEOQtdBRDpiHQQ6AY/oQ7gjKYi23MQ6TASNyXDn4EGQJgLdMQX0/DWBSOzQefw8GqABcQ5ILoAynGQGQSLsIEAnMm4dzECm3S28EAHgc4Ug6BhB3Am456FSEekwzFecaf4gGvIBcQ54hwYnQc5CHSEOoA4ByqzGUWkE5XDy1DYjG0F4AzG/QjxxYg81EGgGwynvWEYjABnMO5DiHREOtzzijtdBmPDMSDOAdHFSDzMQaAj1MU6IM5pyPZcpAMIdNgY664E4IwBoBdbdHrzNLHToOgqvGbLAThzcV9BfNGDty4Q6IZFDFSAsxb3E0Q6Ih2BjqHRcAU4Z3H/QKSDSEegGxwxaAHOV9w3EOmIdAQ6hkdDF+BsxX0CkQ4ind7OLgGZBnNDGIhzAICoxIxBMi2xDs5TcC/gFVt0trJFR6AbKDGcAc5RnP+IdEQ6Ah1DpWENcIbizEekg0hHoBsuMbgBzk6c8Yh0RDoCHUOmQQ5wZuJcR6SDSKelk0sAnyHw9c/VgDF+H10JxDkwMg9zqMENrOHA6SoY9ADnJM5thBe52KQj0A2eGPrA2QjOaUQ6Ah2BjiEUQyA4E3EuI9JBpCPQDaMYDME5CM5hRDoiHYGOoRRDIjgDce4i0EGkI9ANpxgcwbkHzllEOiIdgY5BFYMkOOtwpiLSQaQj0A2tGC7B+QbOT0Q6Ih2BjuEVAyc403BegkhHoCPQDbNgCMU5Bs5FRDoiHYGOwRaDKc4tcAaCQEekI9ANumBgxTkFzjtEOiIdgY6hF0MsziZwroFIR6Qj0A3BYMDFOQTOLkQ6Ih2BjsEYwy/OG3A+gUhHpNPK2SUAtoae4ViIA/A4uEQ6UIJh2xANxQh45wc4X5iVQGcPW3QEugEbDNrOBXBmgEhHpCPQDeJAnkHd7zeIcxDpiHQEukAHAIEOIh2RjkBHnAOAOAeRjkinlpNLAACIcxBc9OOBDgIdABDnACIdgQ4AALnZogN7OTQK8/lzADjO9pyMbEbZw4OdudmgAwDiHAQXg/BAR6ADAIhzEOmIdAQ6ACDOARDpuCEW5PPnACDOQXRRkrcv5mKDDgCIcxBbDMpDHYEOAACIdECgAwDZ2Z4j0kU629miz8PBUIjPnwOAOAfhRU0e7ORngw4AiHOAADzQEegAAOIcKrERRaQj0AEAcQ4iHZHOYBwGBfj8OQCIcxBdtObhTj426ACAOAexRUAe6gh0AABxDiIdEOgAgDgH4Istei5unm/y+XMAEOcguujN2xc52KADAOIcxBbBeagj0AEAxDmIdEQ6Ah0AEOcg0kGk5+EX/g0+fw4A4hxEFyPycCcmG3QAQJwDwADcVN9ggw6AMAdasUVnL1v0eGzQAQBxDmKLhDzUiccv+UG25wCIc0B0EYGHO3HYoAMA4hzEFol5qCPQAQBxDoBIR6ADAOIc8rJFR6Tn5Bf7AJ8/B0CYA4KLqDzgGZcNOgAgzkFoAQIdABDngEinJW9eCHQAQJwDIh2RjkAHAF6FuTgHEOn05UZ8kC+KAyBTnLsKILiYlzcwBLpQBwBxDoh0RDoCXaQDIMxdBRDpINLH4jPohYYcgw4A4hwQWsA7/OJWYKMOgDgHRmCTzl4e7vRlg15p+DEAAeDeBEA0Hur05UbdgI06AL3j3FUAwQV72KQLdKEOAMIcEOmIdIGOUAdAnAMiHUS6QBfqACDMAZGOSJ+aL4nrPEQZpAAQ54DQApbFBn04tuoACHOgJlt0jvBwR6ALdQAQ5oBIR6QLdIQ6AOIcEOkg0gU6Qh0AYQ6IdES6QEesAyDOAZEOIr0t3+IedEAzpAE49wGgFw926nCzT8BGHSBvmLvFSiNUAAAEB0lEQVQKgNhiZDbpAh2xDiDMAUQ6Al2gI9QBEOaASAeRLtAR6wDiHECkI9IFOkIdAGEOiHQQ6QIdsQ4gzAEEOiJdoCPWARDmgEgHkS7QEeoAwhxApCPSBTpiHQBhDoh0EOgCHbEOIMwBRDoiXaCDWAcQ5gAiHZEu0BHrAKIcQKAj0gU6iHUAYQ4g0hHpAh2xDiDMAUQ6Il2gg1gHEOYAIh2RLtAR6wCiHECkI9IFOoh1QJgLcwCRjkAX6Ih1AFEOINAR6QIdBDsgzAEQ6Yh0gQ5iHRDlACIdkS7QQbADohwAkY5IF+gg1gFRDiDSEekCHQQ7IMwBEOiIdIEOgh0Q5QAiHYEu0EGsA4IcAJGOSBfoINgBUQ4g0kGg+xEA0Q6iHABAoINgBwQ5AIBAB8EOohwAQKCDaAdBDgCAQAfRDoIcAECgg2AHQQ4AgEAH4Q5iHABAoAOiHTEOAIBAB+EOYhwAQKADwh0xDgCAQAfxDkIcAECgA+IdEQ4AgEAHBLwABwBAoANCHvENAIBAB0S94AYAQKADDPcgQDQDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf0L/wmQE8wA4iIAAAAASUVORK5CYII=) 50% 50% no-repeat;\n  background-size:100px 100px\n}\n@media screen and (max-width:375px){\n  .logo{\n    position:relative;\n    top:auto;\n    right:auto;\n    left:auto;\n    float:left;\n    width:68px;\n    height:68px;\n    margin-top:-30px;\n    background-size:68px 68px\n  }\n}\n"

/***/ }),

/***/ "./src/app/fragments/logo/logo.component.html":
/*!****************************************************!*\
  !*** ./src/app/fragments/logo/logo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1  [scrollTo]=\"'#about_me'\"\n     [scrollDuration]=\"1000\"\n     [scrollOffset]=\"-100\"\n     class=\"layout-header__logo logo  j-navigation\"\n     [ngClass]=\"(blink)? '' : 'logo-blink'\"\n     routerLink=\"/\"\n     fragment=\"about_me\"\n>Sergey Kharlamov</h1>\n\n"

/***/ }),

/***/ "./src/app/fragments/logo/logo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fragments/logo/logo.component.ts ***!
  \**************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.blink = false;
        this.scrolable = false;
    }
    LogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blink = true;
        setInterval(function () { if (_this.scrolable) {
            _this.blink = !_this.blink;
        }
        else {
            _this.blink = true;
        } }, 1000);
    };
    LogoComponent.prototype.doSomething = function (event) {
        //  console.log('Scroll Event', window.pageYOffset);
        this.scrolable = (window.pageYOffset) > 500;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogoComponent.prototype, "doSomething", null);
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/fragments/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/fragments/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/fragments/more/more.component.css":
/*!***************************************************!*\
  !*** ./src/app/fragments/more/more.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fragments/more/more.component.html":
/*!****************************************************!*\
  !*** ./src/app/fragments/more/more.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <br>\n  More\n</p>\n"

/***/ }),

/***/ "./src/app/fragments/more/more.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fragments/more/more.component.ts ***!
  \**************************************************/
/*! exports provided: MoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreComponent", function() { return MoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreComponent = /** @class */ (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    MoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more',
            template: __webpack_require__(/*! ./more.component.html */ "./src/app/fragments/more/more.component.html"),
            styles: [__webpack_require__(/*! ./more.component.css */ "./src/app/fragments/more/more.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/fragments/set-language/set-language.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/fragments/set-language/set-language.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leng{\npadding-left: 16px;\ncursor: pointer;\n}\n.selected_leng\n{\ncolor: #fa644b;\n\n}\n"

/***/ }),

/***/ "./src/app/fragments/set-language/set-language.component.html":
/*!********************************************************************!*\
  !*** ./src/app/fragments/set-language/set-language.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: inline-flex;\n    position: absolute;\n    bottom: 5px; height: 36px\">\n  <!--<p (click)=\"setLang('en')\" class=\"content__description leng\" [ngClass]=\"{selected_leng:translate.current_leng=='en'}\">ENG</p>-->\n  <!--<p (click)=\"setLang('ru')\" class=\"content__description leng\" [ngClass]=\"{selected_leng:translate.current_leng=='ru'}\">RUS</p>-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/fragments/set-language/set-language.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/fragments/set-language/set-language.component.ts ***!
  \******************************************************************/
/*! exports provided: SetLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLanguageComponent", function() { return SetLanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/translation/translate.service */ "./src/app/shared/translation/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetLanguageComponent = /** @class */ (function () {
    function SetLanguageComponent(translate) {
        this.translate = translate;
    }
    SetLanguageComponent.prototype.ngOnInit = function () {
    };
    SetLanguageComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
    };
    SetLanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-language',
            template: __webpack_require__(/*! ./set-language.component.html */ "./src/app/fragments/set-language/set-language.component.html"),
            styles: [__webpack_require__(/*! ./set-language.component.css */ "./src/app/fragments/set-language/set-language.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], SetLanguageComponent);
    return SetLanguageComponent;
}());



/***/ }),

/***/ "./src/app/fragments/tag-filter/tag-filter.component.css":
/*!***************************************************************!*\
  !*** ./src/app/fragments/tag-filter/tag-filter.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  margin-right: 25px;\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 10px;\n  border-bottom:rgba(255, 104, 77, 0) solid 3px ;\n}\np:hover{\n  border-bottom:#f5644b solid 3px ;\n}\n"

/***/ }),

/***/ "./src/app/fragments/tag-filter/tag-filter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fragments/tag-filter/tag-filter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 48px\">\n\n  <p *ngFor=\"let tag of tags; let i=index\" class=\"content__description\" (click)=\"chose(i)\">{{tag}}</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/fragments/tag-filter/tag-filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fragments/tag-filter/tag-filter.component.ts ***!
  \**************************************************************/
/*! exports provided: TagFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFilterComponent", function() { return TagFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagFilterComponent = /** @class */ (function () {
    function TagFilterComponent() {
        this.tag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TagFilterComponent.prototype.ngOnInit = function () {
    };
    TagFilterComponent.prototype.chose = function (index) {
        this.tag.emit(index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TagFilterComponent.prototype, "tags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TagFilterComponent.prototype, "tag", void 0);
    TagFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-filter',
            template: __webpack_require__(/*! ./tag-filter.component.html */ "./src/app/fragments/tag-filter/tag-filter.component.html"),
            styles: [__webpack_require__(/*! ./tag-filter.component.css */ "./src/app/fragments/tag-filter/tag-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagFilterComponent);
    return TagFilterComponent;
}());



/***/ }),

/***/ "./src/app/fragments/text-pages/text-pages.component.css":
/*!***************************************************************!*\
  !*** ./src/app/fragments/text-pages/text-pages.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fragments/text-pages/text-pages.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fragments/text-pages/text-pages.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"content_text\">{{ShowedText}}</p>\n<div style=\"text-align: right\">\n  <span *ngIf=\"CurrentPage!=0\" (click)=\"onLeft()\" class=\"link link_large\">Back</span>\n  <span *ngIf=\"CurrentPage*PageLength+PageLength<(Text.length)\" (click)=\"onRigth()\" class=\"link link_large\">More</span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/fragments/text-pages/text-pages.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fragments/text-pages/text-pages.component.ts ***!
  \**************************************************************/
/*! exports provided: TextPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPagesComponent", function() { return TextPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextPagesComponent = /** @class */ (function () {
    function TextPagesComponent() {
        this.Text = '';
        this.ShowedText = '';
        this.CurrentPage = 0;
        this.PageLength = 1250;
        this.trail = '...';
    }
    TextPagesComponent.prototype.onUpdatePage = function () {
        this.ShowedText = this.Text.substring(this.PageLength * this.CurrentPage, // TODO find `space` cursor
        this.PageLength + this.PageLength * this.CurrentPage) + ((this.CurrentPage * this.PageLength + this.PageLength < (this.Text.length)) ? this.trail : '');
    };
    TextPagesComponent.prototype.ngOnInit = function () {
        this.onUpdatePage();
    };
    TextPagesComponent.prototype.onLeft = function () {
        this.CurrentPage = (this.CurrentPage === 0) ? 0 : this.CurrentPage - 1;
        this.onUpdatePage();
    };
    TextPagesComponent.prototype.onRigth = function () {
        this.CurrentPage = this.CurrentPage + 1;
        this.onUpdatePage();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextPagesComponent.prototype, "Text", void 0);
    TextPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-pages',
            template: __webpack_require__(/*! ./text-pages.component.html */ "./src/app/fragments/text-pages/text-pages.component.html"),
            styles: [__webpack_require__(/*! ./text-pages.component.css */ "./src/app/fragments/text-pages/text-pages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextPagesComponent);
    return TextPagesComponent;
}());



/***/ }),

/***/ "./src/app/fragments/title-message/title-message.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/fragments/title-message/title-message.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fragments/title-message/title-message.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/fragments/title-message/title-message.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content__title content__title_about-us\">Sergei Kharlamov\n  <br><p [innerHTML]=\"'I`m a '+text_content\"></p>\n</h1>\n"

/***/ }),

/***/ "./src/app/fragments/title-message/title-message.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/fragments/title-message/title-message.component.ts ***!
  \********************************************************************/
/*! exports provided: TitleMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleMessageComponent", function() { return TitleMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleMessageComponent = /** @class */ (function () {
    function TitleMessageComponent() {
        this.content_list = ['student', 'programmer', 'tourist', 'friend', 'tourist', 'dreamer', 'Master'];
        this.time_interval = 350;
        this.pause = 3;
    }
    TitleMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var current_item = 0;
        var tmp_i = 0;
        var tmp_pause = 0;
        setInterval(function () {
            // console.log(current_item, ' ', tmp_i, ' ', tmp_pause, ' ');
            if (tmp_pause <= 0) {
                _this.text_content = _this.content_list[current_item].slice(0, tmp_i);
                tmp_i = 1 + tmp_i;
                if (tmp_i > _this.content_list[current_item].length) {
                    tmp_i = 0;
                    current_item = current_item + 1;
                    if (current_item > _this.content_list.length - 1) {
                        current_item = 0;
                    }
                    tmp_pause = _this.pause;
                }
            }
            else {
                tmp_pause = tmp_pause - 1;
            }
        }, this.time_interval);
    };
    TitleMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-message',
            template: __webpack_require__(/*! ./title-message.component.html */ "./src/app/fragments/title-message/title-message.component.html"),
            styles: [__webpack_require__(/*! ./title-message.component.css */ "./src/app/fragments/title-message/title-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleMessageComponent);
    return TitleMessageComponent;
}());



/***/ }),

/***/ "./src/app/pages/about-me/about-me.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-me/about-me.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.screen_about-us{\n\n  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAABAgMAAACqF8bMAAAACVBMVEUAAAD///99fZvSozUFAAAAAnRSTlMAAHaTzTgAAAANSURBVAgdY2hgYGAFAAIKAIZ181I5AAAAAElFTkSuQmCC) 0 100px repeat-x;\n  background-color:#f7f7f7;\n  background-image:none\n}\n.screen_about-us:before{\n  position:absolute;\n  z-index:-100;\n  top:0;\n  right:0;\n  width:100%;\n  height:100%;\n  content:'';\n  background-image:url('about-us-bg.png');\n  background-repeat:no-repeat;\n  background-position:100% 0;\n  background-size:auto 100%;\n  will-change:transform\n}\n"

/***/ }),

/***/ "./src/app/pages/about-me/about-me.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/about-me/about-me.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"screen screen_about-us j-section\" data-screen=\"about-us\" id=\"about_me\">\n  <article class=\"content content_about-us\">\n\n    <app-title-message></app-title-message>\n\n    <p class=\"content__description\">{{'The journey of a thousand miles begins with one step. Lao Tzu'|translate}}</p>\n    <div class=\"center\">\n      <a class=\"navigation__link link j-navigation\" [routerLink]=\"'/lifestyle'\">{{'My lifestyle . . .'| translate}}</a>\n    </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/about-me/about-me.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-me/about-me.component.ts ***!
  \******************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/pages/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/pages/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-panel/admin-guard.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: AdminGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardService", function() { return AdminGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminGuardService = /** @class */ (function () {
    function AdminGuardService() {
    }
    AdminGuardService.prototype.canActivate = function (route, state) {
        return false;
    };
    AdminGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AdminGuardService);
    return AdminGuardService;
}());



/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-admin-menu   ></app-admin-menu>\n\n<div class=\"layout-wrapper\" id=\"scroll-wrapper\">\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! ./admin-panel.component.html */ "./src/app/pages/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/pages/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/pages/books/books.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/books/books.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/books/books.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/books/books.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"screen screen_contacts j-section\"   id=\"books\">\n  <div class=\"content\">\n    <h2 class=\"content__subtitle content__subtitle_icon\">My Books\n      <i class=\"content__subtitle__icon icon icon-4\"></i>\n    </h2>\n    <div class=\"columns clearfix\">\n      <article class=\"columns__item columns__item_form\">\n\n      </article>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/books/books.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/books/books.component.ts ***!
  \************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/pages/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/pages/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/pages/competence/competence.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/competence/competence.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/competence/competence.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/competence/competence.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"screen screen_competence j-section\" data-screen=\"competence\" id=\"competence\">\n  <article class=\"content clearfix\">\n    <h2 class=\"content__subtitle\">{{'Competence'|translate}}</h2>\n    <div class=\"competence clearfix\">\n      <div class=\"competence__description\">\n        <p class=\"content__description content__description_small-push\">{{'I know how to build great software'|translate}}</p>\n        <i class=\"icon icon-2\"></i>\n      </div>\n      <div class=\"competence__groups\">\n        <div class=\"groups \">\n          <div class=\"groups__item clearfix\"  [ngClass]=\"menu==0 ?'open':''\">\n            <p>{{\"Programming\"|translate}}</p>\n            <a  class=\"groups__item__link j-change-item\" (click)=\"menu=0\" [ngClass]=\"menu==0 ?'is-current':''\">LANGUAGES</a>\n            <div class=\"groups__item__content j-change-content\">\n              <ul class=\"languages\">\n                <li class=\"languages__item\">TypeScript</li>\n                <li class=\"languages__item lost\">JavaScript</li>\n                <li class=\"languages__item\">HTML,CSS</li>\n                <li class=\"languages__item\">PHP</li>\n                <li class=\"languages__item lost\">C/C++</li>\n                <li class=\"languages__item\">C++ for AVR</li>\n                <li class=\"languages__item lost\">C#</li>\n                <li class=\"languages__item lost\">Pascal/Object Pascal</li>\n                <li class=\"languages__item lost\">Assembler i8080</li>\n                <li class=\"languages__item lost\">Java for Android</li>\n                <li class=\"languages__item\">Kotlin</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"groups__item clearfix\"  [ngClass]=\"menu==2 ?'open':''\">\n            <a   class=\"groups__item__link j-change-item\" (click)=\"menu=2\" [ngClass]=\"menu==2 ?'is-current':''\">FRAMEWORKS</a>\n            <div class=\"groups__item__content j-change-content\">\n              <ul class=\"languages\">\n                <li class=\"languages__item\">Angular 6</li>\n                <li class=\"languages__item\">Node JS</li>\n                <li class=\"languages__item\">Sass</li>\n                <li class=\"languages__item\">CMS Wordpress</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"groups__item clearfix\"  [ngClass]=\"menu==3 ?'open':''\">\n            <a  class=\"groups__item__link j-change-item\" (click)=\"menu=3\" [ngClass]=\"menu==3 ?'is-current':''\">DATABASES</a>\n            <div class=\"groups__item__content j-change-content\">\n              <ul class=\"languages\">\n                <li class=\"languages__item\">MySQL</li>\n                <!--<li class=\"languages__item\">MariaDB</li>-->\n                <li class=\"languages__item lost\">Firebird</li>\n                <li class=\"languages__item lost\">Oracle SQL</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"groups__item clearfix\"  [ngClass]=\"menu==5 ?'open':''\">\n            <a   class=\"groups__item__link j-change-item\" (click)=\"menu=5\" [ngClass]=\"menu==5 ?'is-current':''\">DEV-OPS</a>\n            <div class=\"groups__item__content j-change-content\">\n              <ul class=\"languages\">\n                <li class=\"languages__item\">Linux OS</li>\n                <li class=\"languages__item\">Android OS</li>\n                <li class=\"languages__item\">Bash</li>\n                <li class=\"languages__item lost\">Docker</li>\n                <li class=\"languages__item\">MS Azure</li>\n                <li class=\"languages__item\">Nginx</li>\n                <li class=\"languages__item lost\">Apache</li>\n\n              </ul>\n            </div>\n          </div>\n          <div class=\"groups__item clearfix\"  [ngClass]=\"menu==8 ?'open':''\">\n            <a   class=\"groups__item__link j-change-item\" (click)=\"menu=8\" [ngClass]=\"menu==8 ?'is-current':''\">others</a>\n            <div class=\"groups__item__content j-change-content\">\n              <ul class=\"languages\">\n                <li class=\"languages__item\">Git</li>\n                <li class=\"languages__item\">UML 2</li>\n                <li class=\"languages__item\">ER-diagrams</li>\n                <li class=\"languages__item\">RegExp</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"groups__item clearfix\"  [ngClass]=\"menu==6 ?'open':''\">\n            <p>{{\"Engineering\"|translate}}</p>\n            <a   class=\"groups__item__link j-change-item\" (click)=\"menu=6\" [ngClass]=\"menu==6?'is-current':''\">Design</a>\n            <div class=\"groups__item__content j-change-content\">\n              <ul class=\"languages\">\n                <li class=\"languages__item\">Altium Design</li>\n                <li class=\"languages__item\">КОМПАС-3D</li>\n                <li class=\"languages__item\">ЕСКД</li>\n                <li class=\"languages__item lost\">Solid Works</li>\n                <li class=\"languages__item lost\">Corel Draw</li>\n                <li class=\"languages__item\">Mathcad</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"groups__item clearfix\"  [ngClass]=\"menu==7 ?'open':''\">\n            <a  class=\"groups__item__link j-change-item\" (click)=\"menu=7\" [ngClass]=\"menu==7 ?'is-current':''\">Scientific</a>\n            <div class=\"groups__item__content j-change-content\">\n              <ul class=\"languages\">\n                <li class=\"languages__item\">Space Technology</li>\n                <li class=\"languages__item\">CubeSat</li>\n                <li class=\"languages__item\">Radio transmitters</li>\n                <li class=\"languages__item lost\">Analog electronics</li>\n                <li class=\"languages__item lost\">Digital electronics</li>\n              </ul>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </article>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/competence/competence.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/competence/competence.component.ts ***!
  \**********************************************************/
/*! exports provided: CompetenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenceComponent", function() { return CompetenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompetenceComponent = /** @class */ (function () {
    function CompetenceComponent() {
        this.menu = 0;
    }
    CompetenceComponent.prototype.ngOnInit = function () {
    };
    CompetenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-competence',
            template: __webpack_require__(/*! ./competence.component.html */ "./src/app/pages/competence/competence.component.html"),
            styles: [__webpack_require__(/*! ./competence.component.css */ "./src/app/pages/competence/competence.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetenceComponent);
    return CompetenceComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screen_contacts{\n  background-image:none\n}\n.contacts__icon\n{\n  min-width: 350px;\n\n}\n.columns__item_contacts,.columns__item_form\n{\n  max-width: 50%;\n  min-width: 50%;\n}\n"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"screen screen_contacts j-section\"   id=\"contacts\">\n  <div class=\"content\">\n    <div class=\"columns clearfix\">\n      <article class=\"columns__item columns__item_form\">\n        <div class=\"form form_flip form-ajax form-reset j-form-flip\"  data-forge-name=\"feedback-form\" >\n          <div class=\"form__border form__front j-form-side\">\n            <h2 class=\"content__subtitle\">{{\"Let's start\"|translate}}</h2>\n            <p class=\"content__description\">{{\"Message me. Usually I reply on the same day.\"|translate}}</p>\n               <div class=\"contacts__line\">\n\n                <a class=\"contacts_icons\" href=\"https://www.linkedin.com/in/sergei-kharlamov-0a7a60162/\" target=\"_blank\"><img src=\"./images/linkedin.png\"></a>\n                <a class=\"contacts_icons\" href=\"https://vk.com/id279349824\" target=\"_blank\"><img src=\"./images/vk.png\"></a>\n                <a class=\"contacts_icons\" href=\"https://www.facebook.com/profile.php?id=100013280710459\" target=\"_blank\"><img src=\"./images/facebook.png\"></a>\n\n\n               </div>\n          </div>\n        </div>\n      </article>\n      <article class=\"columns__item columns__item_contacts\">\n        <div class=\"contacts\">\n          <button (click)=\"onQR()\" class=\"header-menu__link header-menu__link_filled j-navigation current\">QR</button>\n          <div *ngIf=\"!QR\" class=\"contacts__icon\">\n            <img src=\"./images/qr-code.svg\">\n          </div>\n          <div *ngIf=\"QR\" class=\"contacts__icon\">\n           <img src=\"./images/bizcardmaker-com-theme-picture--stardust-full.jpg\">\n          </div>\n\n\n          <div class=\"contacts__group\">\n            <div class=\"contacts__group__middle\">\n\n\n\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.ts ***!
  \******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.QR = false;
    }
    ContactsComponent.prototype.onQR = function () {
        this.QR = !this.QR;
    };
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/pages/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/pages/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/pages/history/history.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/history/history.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/history/history.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/history/history.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"screen screen_approach j-section\" data-screen=\"approach\" id=\"approach\">\n  <div class=\"content\">\n    <h2 class=\"content__subtitle content__subtitle_icon\">{{\"History of my life\"|translate}}\n      <i class=\"content__subtitle__icon icon icon-4\"></i>\n    </h2>\n  <app-text-pages [Text]=\"HistoryService.Text\"></app-text-pages>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/history/history.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/history/history.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.service */ "./src/app/pages/history/history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(HistoryService) {
        this.HistoryService = HistoryService;
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/pages/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/pages/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/history/history.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/history/history.service.ts ***!
  \**************************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryService = /** @class */ (function () {
    function HistoryService() {
        this.Text = 'I was born on September 27, 1995 in the Donetsk city, Ukraine. My father has engineering education, works as a car mechanic. Mother engineer technologist.\n' +
            '  When I was 7 years old I went to elementary school №148 in Donetsk city, after completing 9 classes I entered the Donetsk Technical Lyceum, during two years of study at the Lyceum, I paid more attention to the study of programming, physics and mathematics. I took an active part in the work of the Small Science Academy of Ukraine in the information technology section, worked on the creation of an optical text recognition system.\n' +
            '  In 2013, I successfully passed the entrance exams and entered the Donetsk National Technical University on the profile “Electronic devices and systems”.\n' +
            '  On August 12, 2014, in connection with the anti-terrorist operation in the Donetsk region, I was forced to move to Kursk, Russia.\n' +
            '  On January 8, 2015, I was enrolled in the South-West State University for the “Computer Science and Computing Engineering”.\n' +
            '  In parallel with training, from October 12, 2015 to October 11, 2017, I worked at the Small Satellites Development Center (Scientific Research Institute of Radioelectronic Systems).\n' +
            '  I participated in the development and creation of small satellites "Ecuador UTE-UZGU" RS3S, "Tomsk-TPU-120" RS4S, "Tanyusha-UZGU-1/2" RS6S / RS7S.\n' +
            '  Since 2015 I has been active in social activities in the Kursk Regional Youth Sports Public Organization “SPORADIK” (Radio Club RW3WWW).\n' +
            '  In December 2016, I received official Russian citizenship.\n' +
            '  In 2017 I defended a bachelor\'s degree on the topic “Control system of a module of a radio transmitting device for a small satelite”.\n' +
            '  In 2017 I entered the South-West State University for the master\'s program of the same specialty.\n' +
            '  In parallel with the training carried out work under contracts. Of the significant projects, I developed a web-site of distance learning programming  swiftbook.ru, carried out work under the theme “Conducting research and development work on the development and creation of Ecuador-UTE nanosatellite RS16S.\n' +
            '  At the moment, I continue my studies at Southwestern State University.';
    }
    HistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-general-menu  ></app-general-menu>\n    <div class=\"layout-wrapper\" id=\"scroll-wrapper\">\n      <app-about-me></app-about-me>\n      <app-competence></app-competence>\n      <app-projects></app-projects>\n      <app-history></app-history>\n      <app-contacts></app-contacts>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/translation/translate.service */ "./src/app/shared/translation/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(translate) {
        this.translate = translate;
        this.menu_item = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/lifestyle/lifestyle.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/lifestyle/lifestyle.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/lifestyle/lifestyle.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/lifestyle/lifestyle.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-lifestyle-menu   ></app-lifestyle-menu>\n\n  <div class=\"layout-wrapper\" id=\"scroll-wrapper\">\n\n    <app-photos></app-photos>\n    <!--<app-story></app-story>-->\n    <!--<app-books></app-books>-->\n    <!--<app-music></app-music>-->\n\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/lifestyle/lifestyle.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/lifestyle/lifestyle.component.ts ***!
  \********************************************************/
/*! exports provided: LifestyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifestyleComponent", function() { return LifestyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LifestyleComponent = /** @class */ (function () {
    function LifestyleComponent() {
    }
    LifestyleComponent.prototype.ngOnInit = function () {
    };
    LifestyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifestyle',
            template: __webpack_require__(/*! ./lifestyle.component.html */ "./src/app/pages/lifestyle/lifestyle.component.html"),
            styles: [__webpack_require__(/*! ./lifestyle.component.css */ "./src/app/pages/lifestyle/lifestyle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifestyleComponent);
    return LifestyleComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/music/music.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/music/music.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/music/music.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/music/music.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"screen screen_contacts j-section\"   id=\"music\">\n  <div class=\"content\">\n    <h2 class=\"content__subtitle content__subtitle_icon\">My music\n      <i class=\"content__subtitle__icon icon icon-4\"></i>\n    </h2>\n    <div class=\"columns clearfix\">\n      <article class=\"columns__item columns__item_form\">\n\n      </article>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/music/music.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/music/music.component.ts ***!
  \************************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/pages/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.component.css */ "./src/app/pages/music/music.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/pages/photos/photos.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/photos/photos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/photos/photos.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/photos/photos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"screen screen_contacts j-section\" (scroll)=\"onScroled($event)\"  id=\"photos\">\n  <div class=\"content\" style=\"max-width: 100%\">\n    <h2 class=\"content__subtitle content__subtitle_icon\">My Instagram\n      <i class=\"content__subtitle__icon icon icon-4\"></i>\n    </h2>\n\n\n    <div class=\"columns clearfix\">\n      <article  >\n       <!-- <ngx-masonry-gallery [width]=\"512\" [gutter]=\"21\" [images]=\"images\"></ngx-masonry-gallery>!-->\n        <crystal-gallery [images]=\"PhotosService.Photos\" [config]=\"myConfig\"></crystal-gallery>\n      </article>\n    </div>\n\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/photos/photos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/photos/photos.component.ts ***!
  \**************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_photos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/photos.service */ "./src/app/shared/photos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(PhotosService) {
        this.PhotosService = PhotosService;
        this.myConfig = {
            masonry: true,
            masonryMaxHeight: 420,
            masonryGutter: 4,
            counter: false
        };
        this.page = 0;
        this.limit = 16;
        PhotosService.getPhotos(true);
    }
    PhotosComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.onScroled, true);
    };
    PhotosComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.onScroled, true);
    };
    PhotosComponent.prototype.onScroled = function (event) {
        //  console.log(window.pageYOffset , window.innerHeight);
        /*  this.PhotosService.getPhotos(false, this.limit, this.page);*/
    };
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/pages/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/pages/photos/photos.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_photos_service__WEBPACK_IMPORTED_MODULE_1__["PhotosService"]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_short{\n\n  position: relative; left: 224px; top: 11px;\n}\n.g_container {\n  max-width: 1028px;\n  min-width: 150px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  display: -ms-grid;\n  display: grid;\n  margin-left: 224px;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 25px;\n  grid-row-gap: 25px;\n}\n.g_container .column {\n  width: 50%;\n  padding: 0 25px;\n  -webkti-box-sizing: border-box;\n  box-sizing: border-box;\n  float: left;\n}\n.g_container .column .demo-title {\n  margin: 0 0 15px;\n  color: #666666;\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.g_container .info {\n  width: 300px;\n  margin: 50px auto;\n  text-align: center;\n}\n.g_container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 24px;\n  font-weight: bold;\n  color: #333333;\n}\n.g_container .info span {\n  color: #666666;\n  font-size: 12px;\n}\n.g_container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.g_container .info span .fa {\n  color: #e74c3c;\n}\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-tag-filter [tags]=\"ProjectService.ProjectTags\" (tag)=\"ProjectService.onFilter($event)\" class=\"content_short\" id=\"projects\"></app-tag-filter>\n <div class=\"g_container\" >\n   <app-large-card *ngFor= \"let project of ProjectService.Projects | pojectsShowd\"  [card]=\"project\"></app-large-card>\n </div>\n <!--<span  class=\"content link link_large\">More</span>-->\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/projects.service */ "./src/app/shared/projects.service.ts");
/* harmony import */ var _shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/translation/translate.service */ "./src/app/shared/translation/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(ProjectService, translate) {
        this.ProjectService = ProjectService;
        this.translate = translate;
        ProjectService.getProjects(this.translate.current_leng);
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/pages/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"],
            _shared_translation_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/story/story.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/story/story.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/story/story.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/story/story.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"screen screen_contacts j-section\"   id=\"story\">\n  <div class=\"content\">\n    <h2 class=\"content__subtitle content__subtitle_icon\">My Stores\n      <i class=\"content__subtitle__icon icon icon-4\"></i>\n    </h2>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/story/story.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/story/story.component.ts ***!
  \************************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/pages/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/pages/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/shared/filters/limit-text.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/filters/limit-text.pipe.ts ***!
  \***************************************************/
/*! exports provided: LimitTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitTextPipe", function() { return LimitTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitTextPipe = /** @class */ (function () {
    function LimitTextPipe() {
    }
    LimitTextPipe.prototype.transform = function (value, args) {
        var limit = args ? parseInt(args, 10) : 10;
        var trail = '...';
        return (value != undefined && value.length > limit) ? value.substring(0, limit) + trail : value;
    };
    LimitTextPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'limitText'
        })
    ], LimitTextPipe);
    return LimitTextPipe;
}());



/***/ }),

/***/ "./src/app/shared/filters/pojects-showd.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/filters/pojects-showd.pipe.ts ***!
  \******************************************************/
/*! exports provided: PojectsShowdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PojectsShowdPipe", function() { return PojectsShowdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PojectsShowdPipe = /** @class */ (function () {
    function PojectsShowdPipe() {
    }
    PojectsShowdPipe.prototype.transform = function (value, args) {
        return value.filter(function (project) { return project.visible; });
    };
    PojectsShowdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pojectsShowd',
            pure: false
        })
    ], PojectsShowdPipe);
    return PojectsShowdPipe;
}());



/***/ }),

/***/ "./src/app/shared/photos.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/photos.service.ts ***!
  \******************************************/
/*! exports provided: PhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function() { return PhotosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotosService = /** @class */ (function () {
    function PhotosService(http) {
        this.http = http;
    }
    PhotosService.prototype.getPhotos = function (reinit, page, limit, id) {
        var _this = this;
        if (reinit === void 0) { reinit = false; }
        if (page === void 0) { page = 0; }
        if (limit === void 0) { limit = 16; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        if (reinit) {
            this.Photos = [];
        }
        return this.http.get("http://" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].port + "/api/v" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version + "/photos" + (limit ? '?lim=' + limit : '') + (id ? ':id=' + id : '') + (page ? ':page=' + page : ''), { headers: headers })
            .subscribe(function (data) {
            data.map(function (photo) { _this.Photos.push(photo); });
        }, function (e) { console.log('Error', e); }, function () {
        });
    };
    PhotosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PhotosService);
    return PhotosService;
}());



/***/ }),

/***/ "./src/app/shared/projects.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/projects.service.ts ***!
  \********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Default"] = 0] = "Default";
    ProjectStatus[ProjectStatus["Terminated"] = 1] = "Terminated";
    ProjectStatus[ProjectStatus["Finished"] = 2] = "Finished";
    ProjectStatus[ProjectStatus["Developing"] = 3] = "Developing";
})(ProjectStatus || (ProjectStatus = {}));
var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.Projects = [];
        this.ProjectTags = ['All'];
    }
    ProjectsService.prototype.onFilter = function (tag_id) {
        var _this = this;
        console.log(this.ProjectTags[tag_id]);
        this.Projects.map(function (project) {
            if (project.category === _this.ProjectTags[tag_id] || tag_id === 0) {
                project.visible = true;
            }
            else {
                project.visible = false;
            }
        });
    };
    ProjectsService.prototype.getProjects = function (len, page, limit, id) {
        var _this = this;
        if (page === void 0) { page = 0; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        this.Projects = [];
        return this.http.get("http://" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].port + "/api/v" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version + "/projects?ln=" + len + (limit ? ':lim=' + limit : '') + (id ? ':id=' + id : '') + (page ? ':page=' + page : ''), { headers: headers })
            .subscribe(function (data) {
            data.map(function (project) { _this.Projects.push(project); project.visible = true; });
        }, function (e) { console.log('Error', e); }, function () {
            _this.getProjectTags();
        });
    };
    ProjectsService.prototype.getProjectTags = function () {
        var _this = this;
        this.ProjectTags = ['All'];
        this.Projects.map(function (project) { _this.ProjectTags.push(project.category); });
        this.ProjectTags = this.ProjectTags.filter(function (value, index, self) { return self.indexOf(value) === index; });
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/shared/translation/translate.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/translation/translate.pipe.ts ***!
  \******************************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate.service */ "./src/app/shared/translation/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        return this.translate.data[value] || value;
    };
    TranslatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/shared/translation/translate.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/translation/translate.service.ts ***!
  \*********************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.data = {};
        this.current_leng = 'en';
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        this.current_leng = lang;
        return new Promise(function (resolve, reject) {
            var langPath = "i18n/" + (lang || 'en') + ".json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                _this.data = {};
                console.error(error);
                resolve(_this.data);
            });
        });
    };
    TranslateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    url: 'localhost',
    port: '3195',
    version: 0
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sapp/Local Projects/personal-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map