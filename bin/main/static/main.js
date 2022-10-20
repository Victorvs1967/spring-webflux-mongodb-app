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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 1828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule) },
    { path: 'main', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 5705)).then(m => m.MainModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-editor */ 9679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-ui/material-ui.module */ 6818);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptor/token.interceptor */ 2569);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 1828);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_4__.TokenInterceptor, multi: true },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__.MaterialUiModule,
        ngx_editor__WEBPACK_IMPORTED_MODULE_11__.NgxEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__.MaterialUiModule,
        ngx_editor__WEBPACK_IMPORTED_MODULE_11__.NgxEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 9125:
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);










function LoginComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.loginSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "mat-form-field", 4)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 4)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-dialog-actions")(17, "div", 7)(18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_form_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onNoClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "No Thanks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx_r0.user)("disabled", ctx_r0.loginForm.invalid);
} }
class LoginComponent {
    constructor(formBuilder, auth, dialogRef, user) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.dialogRef = dialogRef;
        this.user = user;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        this.isLogin = this.auth.isLoggedIn;
    }
    onNoClick() {
        this.dialogRef.close(null);
    }
    loginSubmit() {
        const { username, password } = this.loginForm?.value;
        const user = {
            username,
            password,
        };
        this.dialogRef.close(user);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "login-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "form-inputs"], ["appearance", "legacy"], ["matInput", "", "placeholder", "enter username...", "type", "text", "formControlName", "username", "required", "", 1, "input-field"], ["matInput", "", "placeholder", "enter password...", "type", "password", "formControlName", "password", "required", "", 1, "input-field"], [1, "btn-group"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "mat-dialog-close", "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_form_0_Template, 22, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".form-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-inputs[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-group[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zYXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFjaW50b3NoJTIwSEQvRGV2ZWxvcGVyL3lvdXR1YmUtbGVzc29ucy9zcHJpbmctd2ViZmx1eC1tb25nb2RiLWFwcC9mcm9udGVuZC9zcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FEQUE7RUFDRSxpQkFBQTtBQ0dGO0FEREE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0lGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0taW5wdXRzXG4gIHdpZHRoOiAxMDAlXG4gIC5tYXQtZm9ybS1maWVsZFxuICAgIHdpZHRoOiAxMDAlXG4gICAgXG4uYnRuLWdyb3VwXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXG5cbi5tYXQtZGlhbG9nLWNvbnRlbnRcbiAgbWFyZ2luOiAwXG4gIHBhZGRpbmc6IDBcbiIsIi5mb3JtLWlucHV0cyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0taW5wdXRzIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLWdyb3VwIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"] });


/***/ }),

/***/ 6834:
/*!************************************************************!*\
  !*** ./src/app/auth/components/signup/signup.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);









function SignupComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.signupSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "mat-form-field", 4)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8)(23, "mat-form-field", 4)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "first name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 4)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 4)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "phonee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-dialog-actions")(42, "div", 12)(43, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_form_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onNoClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "No Thanks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r0.user)("disabled", ctx_r0.signupForm.invalid);
} }
class SignupComponent {
    constructor(formBuilder, dialogRef, user) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.user = user;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            firstName: [''],
            lastName: [''],
            phone: [''],
        });
    }
    onNoClick() {
        this.dialogRef.close(null);
    }
    signupSubmit() {
        const { username, password, email, firstName, lastName, phone } = this.signupForm?.value;
        const user = {
            username,
            password,
            email,
            firstName,
            lastName,
            phone,
        };
        this.dialogRef.close(user);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 1, vars: 1, consts: [["class", "login-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "form-inputs"], ["appearance", "legacy"], ["matInput", "", "placeholder", "enter username...", "type", "text", "formControlName", "username", "required", "", 1, "input-field"], ["matInput", "", "placeholder", "enter password...", "type", "password", "formControlName", "password", "required", "", 1, "input-field"], ["matInput", "", "placeholder", "enter email...", "type", "email", "formControlName", "email", "required", "", 1, "input-field"], [1, "fields-group"], ["matInput", "", "placeholder", "enter first name...", "type", "text", "formControlName", "firstName", 1, "input-field"], ["matInput", "", "placeholder", "enter last name...", "type", "text", "formControlName", "lastName", 1, "input-field"], ["matInput", "", "placeholder", "enter last name...", "type", "text", "formControlName", "phone", 1, "input-field"], [1, "btn-group"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", 3, "mat-dialog-close", "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignupComponent_form_0_Template, 47, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".form-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-inputs[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-inputs[_ngcontent-%COMP%]   .fields-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.btn-group[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2FzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hY2ludG9zaCUyMEhEL0RldmVsb3Blci95b3V0dWJlLWxlc3NvbnMvc3ByaW5nLXdlYmZsdXgtbW9uZ29kYi1hcHAvZnJvbnRlbmQvc3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FEREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNHSjtBREZBO0VBQ0UsaUJBQUE7QUNLRjtBREhBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNNRiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnB1dHNcbiAgd2lkdGg6IDEwMCVcbiAgLm1hdC1mb3JtLWZpZWxkXG4gICAgd2lkdGg6IDEwMCVcbiAgLmZpZWxkcy1ncm91cFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgZ2FwOiAxcmVtXG4uYnRuLWdyb3VwXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXG5cbi5tYXQtZGlhbG9nLWNvbnRlbnRcbiAgbWFyZ2luOiAwXG4gIHBhZGRpbmc6IDAiLCIuZm9ybS1pbnB1dHMge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWlucHV0cyAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWlucHV0cyAuZmllbGRzLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5idG4tZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn0iXX0= */"] });


/***/ }),

/***/ 861:
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-editor */ 9679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/post.service */ 9166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);











class EditorComponent {
    constructor(dialogRef, post, formBuilder, postService) {
        this.dialogRef = dialogRef;
        this.post = post;
        this.formBuilder = formBuilder;
        this.postService = postService;
        this.toolbar = [
            // default value
            ['bold', 'italic'],
            ['underline', 'strike'],
            ['code', 'blockquote'],
            ['ordered_list', 'bullet_list'],
            [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
            ['link', 'image'],
            ['text_color', 'background_color'],
            ['align_left', 'align_center', 'align_right', 'align_justify'],
            ['horizontal_rule', 'format_clear'],
        ];
        this.form = this.formBuilder.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            author: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            image: [null, []],
            content: [null, [ngx_editor__WEBPACK_IMPORTED_MODULE_2__.Validators.required()]],
        });
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_2__.Editor();
    }
    ngOnInit() {
        this.editor.commands
            .focus()
            .scrollIntoView()
            .exec();
    }
    ngOnDestroy() {
        this.editor.destroy();
    }
    onNoClick() {
        this.dialogRef.close(null);
    }
    onSubmit() {
        const { title, author, image, content } = this.form.value;
        // const id = this.post ? this.post.id : '';
        const post = {
            // id,
            title,
            author,
            image,
            content,
        };
        this.dialogRef.close(post);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService)); };
EditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 31, vars: 6, consts: [[1, "post-form", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "post-form__title"], ["mat-dialog-content", ""], ["appearance", "legacy", 1, "post-form__field"], ["matInput", "", "placeholder", "enter title...", "type", "text", "formControlName", "title", 1, "post-form__field_input"], ["matInput", "", "placeholder", "enter author name...", "type", "text", "formControlName", "author", 1, "post-form__field_input"], ["matInput", "", "placeholder", "enter image link...", "type", "text", "formControlName", "image", 1, "post-form__field_input"], [1, "editor"], [3, "editor", "toolbar"], ["formControlName", "content", 3, "editor", "placeholder"], [1, "btn-group"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditorComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Post Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 3)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Post Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 3)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Post Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ngx-editor-menu", 8)(24, "ngx-editor", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-dialog-actions")(26, "div", 10)(27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_27_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editor", ctx.editor)("toolbar", ctx.toolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editor", ctx.editor)("placeholder", "Type here...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", ctx.post);
    } }, dependencies: [ngx_editor__WEBPACK_IMPORTED_MODULE_2__.NgxEditorComponent, ngx_editor__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: [".post-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.post-form__title[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 0;\n}\n.post-form__field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.post-form[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%] {\n  min-height: 30vh;\n  margin: 1rem 0;\n  background: #fff;\n  text-align: left;\n}\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 0 1rem 2rem 1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 10rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5jb21wb25lbnQuc2FzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hY2ludG9zaCUyMEhEL0RldmVsb3Blci95b3V0dWJlLWxlc3NvbnMvc3ByaW5nLXdlYmZsdXgtbW9uZ29kYi1hcHAvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERFO0VBQ0UsV0FBQTtBQ0dKO0FEREU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0o7QUREQTtFQUNFLHNCQUFBO0FDSUY7QURGQTtFQUNFLHlCQUFBO0FDS0Y7QURIQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ01GIiwiZmlsZSI6ImVkaXRvci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWZvcm1cbiAgd2lkdGg6IDEwMCVcbiAgJl9fdGl0bGVcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgbWFyZ2luLWJvdHRvbTogMFxuICAmX19maWVsZFxuICAgIHdpZHRoOiAxMDAlXG5cbiAgLmVkaXRvclxuICAgIG1pbi1oZWlnaHQ6IDMwdmhcbiAgICBtYXJnaW46IDFyZW0gMFxuICAgIGJhY2tncm91bmQ6ICNmZmZcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG5cbi5jZGstb3ZlcmxheS1wYW5lXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnRcblxuLm1hdC1kaWFsb2ctYWN0aW9uc1xuICBwYWRkaW5nOiAwIDFyZW0gMnJlbSAxcmVtXG5cbi5idG5cbiAgd2lkdGg6IDEwcmVtXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiIsIi5wb3N0LWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wb3N0LWZvcm1fX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wb3N0LWZvcm1fX2ZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucG9zdC1mb3JtIC5lZGl0b3Ige1xuICBtaW4taGVpZ2h0OiAzMHZoO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgcGFkZGluZzogMCAxcmVtIDJyZW0gMXJlbTtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ 9166);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);









function HeaderComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function HeaderComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

class HeaderComponent {
  constructor(auth, postService, router) {
    this.auth = auth;
    this.postService = postService;
    this.router = router;
  }

  ngOnInit() {
    this.isLogin = this.auth.isLoggedIn;
  }

  createPost() {
    this.postService.openDialog();
  }

  login() {
    this.auth.loginDialog();
  }

  signUp() {
    this.auth.signupDialog();
  }

  logout() {
    this.auth.logout();
    this.isLogin = this.auth.isLoggedIn;
    this.router.navigate(['']);
  }

}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 18,
  vars: 9,
  consts: [["color", "primary"], [1, "nav-menu"], ["mat-icon-button", "", "routerLink", ""], ["mat-button", "", "routerLink", "main"], ["mat-button", "", 3, "disabled", "click"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "click", 4, "ngIf"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "nav", 1)(2, "button", 2)(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Main");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
        return ctx.createPost();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Add post");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() {
        return ctx.signUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "person_add");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_button_14_Template, 3, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_button_16_Template, 3, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, ctx.isLogin));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 5, ctx.isLogin));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 7, ctx.isLogin));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2FzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hY2ludG9zaCUyMEhEL0RldmVsb3Blci95b3V0dWJlLWxlc3NvbnMvc3ByaW5nLXdlYmZsdXgtbW9uZ29kYi1hcHAvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQ0NGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLWRpc2FibGVkXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAuMykgIWltcG9ydGFudCIsIi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xufSJdfQ== */"]
});

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

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home Page...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 4rem;\n  background: #fef1cc;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNhc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9NYWNpbnRvc2glMjBIRC9EZXZlbG9wZXIveW91dHViZS1sZXNzb25zL3NwcmluZy13ZWJmbHV4LW1vbmdvZGItYXBwL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxuICBoZWlnaHQ6IDEwMCVcbiAgcGFkZGluZzogNHJlbVxuICBiYWNrZ3JvdW5kOiAjZmVmMWNjXG4gIHRleHQtYWxpZ246IGNlbnRlciIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDRyZW07XG4gIGJhY2tncm91bmQ6ICNmZWYxY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 1828:
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

/***/ 2569:
/*!**************************************************!*\
  !*** ./src/app/interceptor/token.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class TokenInterceptor {
    intercept(request, next) {
        const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
        if (token) {
            request = request.clone({
                setHeaders: {
                    'authorization': 'Bearer '.concat(token),
                },
            });
        }
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);













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
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
];
class MaterialUiModule {
}
MaterialUiModule.ɵfac = function MaterialUiModule_Factory(t) { return new (t || MaterialUiModule)(); };
MaterialUiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MaterialUiModule });
MaterialUiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, MATERIAL_UI_COMPONENTS, _angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MaterialUiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule] }); })();


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/components/login/login.component */ 9125);
/* harmony import */ var _auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/components/signup/signup.component */ 6834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);








class AuthService {
    constructor(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
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
        return sessionStorage.getItem('token') ? true : false;
    }
    login(userInfo) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl.concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authUrl).concat('/login'), userInfo)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((token) => {
            if (userInfo.username !== '' && userInfo.password !== '') {
                this.clearToken();
                this.setToken(token);
                this.loggedIn.next(true);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true);
            }
            this.loggedIn.next(false);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Wrong login...'));
        }));
    }
    signup(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl.concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authUrl).concat('/signup'), user);
    }
    logout(param = true) {
        if (param) {
            this.clearToken();
            this.loggedIn.next(false);
            setTimeout(() => { }, 500);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }
    loginDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.width = '50%';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            console.log('The dialog was closed');
            if (data) {
                this.loginUser = data;
                this.login(this.loginUser)
                    .subscribe((user) => console.log(user));
            }
        });
    }
    signupDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.width = '50%';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            console.log('The dialog was closed');
            if (data) {
                this.newUser = data;
                this.signup(this.newUser)
                    .subscribe((user) => console.log(user));
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9166:
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostService": () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/editor/editor.component */ 861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);






class PostService {
    constructor(http, dialog) {
        this.http = http;
        this.dialog = dialog;
    }
    getPosts() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl.concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl)
            .concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.postsUrl));
    }
    addPost(post) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl.concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl)
            .concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.postsUrl), post);
    }
    openDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogConfig();
        dialogConfig.width = '80%';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__.EditorComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            console.log('The dialog was closed');
            if (data) {
                this.post = data;
                this.addPost(this.post)
                    .subscribe((post) => console.log(post));
            }
        });
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
PostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });


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
    carsUrl: '/cars',
    postsUrl: '/posts',
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