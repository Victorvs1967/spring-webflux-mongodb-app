"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule) },
    { path: 'main', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 705)).then(m => m.MainModule) },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-ui/material-ui.module */ 6818);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptor/token.interceptor */ 569);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_4__.TokenInterceptor, multi: true },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__.MaterialUiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__.MaterialUiModule] }); })();


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, consts: [[1, "container"], ["routerLink", "/auth/login"], ["routerLink", "/auth/signup"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home Page...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 4rem;\n  background: #fef1cc;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNhc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9NYWNpbnRvc2glMjBIRC9EZXZlbG9wZXIveW91dHViZS1sZXNzb25zL3NwcmluZy13ZWJmbHV4LW1vbmdvZGItYXBwL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxuICBoZWlnaHQ6IDEwMCVcbiAgcGFkZGluZzogNHJlbVxuICBiYWNrZ3JvdW5kOiAjZmVmMWNjXG4gIHRleHQtYWxpZ246IGNlbnRlciIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDRyZW07XG4gIGJhY2tncm91bmQ6ICNmZWYxY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 828:
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 9, vars: 0, consts: [[1, "container"], ["routerLink", "/auth/login"], ["routerLink", "/auth/signup"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page Not Found...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 4rem;\n  background: #fef1cc;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2FzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hY2ludG9zaCUyMEhEL0RldmVsb3Blci95b3V0dWJlLWxlc3NvbnMvc3ByaW5nLXdlYmZsdXgtbW9uZ29kYi1hcHAvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG4gIGhlaWdodDogMTAwJVxuICBwYWRkaW5nOiA0cmVtXG4gIGJhY2tncm91bmQ6ICNmZWYxY2NcbiAgdGV4dC1hbGlnbjogY2VudGVyIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNHJlbTtcbiAgYmFja2dyb3VuZDogI2ZlZjFjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 569:
/*!**************************************************!*\
  !*** ./src/app/interceptor/token.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);



class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        const token = this.auth.getToken();
        if (token) {
            req = req.clone({
                setHeaders: {
                    'authorization': 'Bearer '.concat(token),
                },
            });
        }
        return next.handle(req);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ 6818:
/*!***************************************************!*\
  !*** ./src/app/material-ui/material-ui.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialUiModule": () => (/* binding */ MaterialUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);












const MATERIAL_UI_COMPONENTS = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
];
class MaterialUiModule {
}
MaterialUiModule.ɵfac = function MaterialUiModule_Factory(t) { return new (t || MaterialUiModule)(); };
MaterialUiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialUiModule });
MaterialUiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, MATERIAL_UI_COMPONENTS, _angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialUiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule] }); })();


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
    constructor(http) {
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    }
    get isLoggedIn() {
        this.loggedIn.next(this.onLogin());
        return this.loggedIn.asObservable();
    }
    setToken(token) {
        this.token = JSON.parse(JSON.stringify(token)).response;
        sessionStorage.setItem('token', this.token ? this.token : '');
    }
    clearToken() {
        sessionStorage.removeItem('token');
    }
    onLogin() {
        return sessionStorage.getItem('tokrn') ? true : false;
    }
    getToken() {
        return sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
    }
    login(userInfo) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl.concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authUrl).concat('/login'), userInfo)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((token) => {
            if (userInfo.username !== '' && userInfo.password !== '') {
                this.clearToken();
                this.setToken(token);
                this.loggedIn.next(true);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
            }
            this.loggedIn.next(false);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Wrong login...'));
        }));
    }
    signup(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl.concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authUrl).concat('/signup'), user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backendUrl: 'http://localhost:8888',
    authUrl: '/auth',
    apiUrl: '/api/v1',
    usersUrl: '/users',
    carsUrl: '/cars'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map