"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/signup/signup.component */ 6834);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 9125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/auth.component */ 218);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-ui/material-ui.module */ 6818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    { path: '', component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent,
        children: [
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
            { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__.SignupComponent },
        ],
    },
];
class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_3__.MaterialUiModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__.SignupComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_3__.MaterialUiModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 218:
/*!********************************************************!*\
  !*** ./src/app/auth/components/auth/auth.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zYXNzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);











function LoginComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.loginSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content", 5)(2, "mat-form-field", 6)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-actions", 9)(15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SignUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loginForm.invalid);
} }
class LoginComponent {
    constructor(formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        this.isLogin = this.auth.isLoggedIn;
    }
    loginSubmit() {
        this.auth.login(this.loginForm?.value).subscribe({
            next: () => {
                this.loginForm?.reset();
                this.router.navigate(['main']);
            },
            error: err => alert(err.message)
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "login-form"], ["inset", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-inputs"], ["appearance", "legacy"], ["matInput", "", "placeholder", "enter username...", "type", "text", "formControlName", "username", "required", "", 1, "input-field"], ["matInput", "", "placeholder", "enter password...", "type", "password", "formControlName", "password", "required", "", 1, "input-field"], [1, "btn-group"], ["mat-raised-button", "", "color", "primary", "type", "button", "routerLink", "/auth/signup"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_form_5_Template, 19, 2, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.login-form[_ngcontent-%COMP%] {\n  width: 50rem;\n  margin: 10% auto 0;\n  padding: 2rem;\n}\n\n.form-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 0 3rem 0;\n}\n\n.form-inputs[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4rem;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zYXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFjaW50b3NoJTIwSEQvRGV2ZWxvcGVyL3lvdXR1YmUtbGVzc29ucy9zcHJpbmctd2ViZmx1eC1tb25nb2RiLWFwcC9mcm9udGVuZC9zcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDR0Y7O0FERkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUNLRjs7QURKRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDTUo7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDUUYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6IDBcbiAgYm90dG9tOiAwXG4gIGxlZnQ6IDBcbiAgcmlnaHQ6IDBcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSlcbi5sb2dpbi1mb3JtXG4gIHdpZHRoOiA1MHJlbVxuICBtYXJnaW46IDEwJSBhdXRvIDBcbiAgcGFkZGluZzogMnJlbVxuLmZvcm0taW5wdXRzXG4gIHdpZHRoOiAxMDAlXG4gIHBhZGRpbmc6IDFyZW0gMCAzcmVtIDBcbiAgLm1hdC1mb3JtLWZpZWxkXG4gICAgd2lkdGg6IDEwMCVcbiAgICBwYWRkaW5nOiAxcmVtXG4uYnRuLWdyb3VwXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICByaWdodDogNHJlbVxuICBib3R0b206IDBcbiIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIHdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiAxMCUgYXV0byAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZm9ybS1pbnB1dHMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwIDNyZW0gMDtcbn1cbi5mb3JtLWlucHV0cyAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJ0bi1ncm91cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDRyZW07XG4gIGJvdHRvbTogMDtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);











function SignupComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.signupSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content", 5)(2, "mat-form-field", 6)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 6)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 6)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "first name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 6)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 6)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "phonee");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card-actions", 13)(39, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.signupForm.invalid);
} }
class SignupComponent {
    // isLogin: Observable<boolean> | undefined;
    constructor(formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            firstName: [''],
            lastName: [''],
            phone: [''],
        });
    }
    signupSubmit() {
        this.auth.signup(this.signupForm?.value).subscribe({
            next: () => {
                this.signupForm?.reset();
                this.router.navigate(['/auth/login']);
            },
            error: err => alert(err.message)
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "login-form"], ["inset", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-inputs"], ["appearance", "legacy"], ["matInput", "", "placeholder", "enter username...", "type", "text", "formControlName", "username", "required", "", 1, "input-field"], ["matInput", "", "placeholder", "enter password...", "type", "password", "formControlName", "password", "required", "", 1, "input-field"], ["matInput", "", "placeholder", "enter email...", "type", "email", "formControlName", "email", "required", "", 1, "input-field"], ["matInput", "", "placeholder", "enter first name...", "type", "text", "formControlName", "firstName", 1, "input-field"], ["matInput", "", "placeholder", "enter last name...", "type", "text", "formControlName", "lastName", 1, "input-field"], ["matInput", "", "placeholder", "enter last name...", "type", "text", "formControlName", "phone", 1, "input-field"], [1, "btn-group"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignupComponent_form_5_Template, 41, 2, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signupForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.login-form[_ngcontent-%COMP%] {\n  width: 50rem;\n  margin: 5% auto 0;\n  padding: 2rem;\n}\n\n.form-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 0 3rem 0;\n}\n\n.form-inputs[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4rem;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2FzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hY2ludG9zaCUyMEhEL0RldmVsb3Blci95b3V0dWJlLWxlc3NvbnMvc3ByaW5nLXdlYmZsdXgtbW9uZ29kYi1hcHAvZnJvbnRlbmQvc3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDR0Y7O0FERkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUNLRjs7QURKRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDTUo7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDUUYiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgdG9wOiAwXG4gIGJvdHRvbTogMFxuICBsZWZ0OiAwXG4gIHJpZ2h0OiAwXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjEpXG4ubG9naW4tZm9ybVxuICB3aWR0aDogNTByZW1cbiAgbWFyZ2luOiA1JSBhdXRvIDBcbiAgcGFkZGluZzogMnJlbVxuLmZvcm0taW5wdXRzXG4gIHdpZHRoOiAxMDAlXG4gIHBhZGRpbmc6IDFyZW0gMCAzcmVtIDBcbiAgLm1hdC1mb3JtLWZpZWxkXG4gICAgd2lkdGg6IDEwMCVcbiAgICBwYWRkaW5nOiAxcmVtXG4uYnRuLWdyb3VwXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICByaWdodDogNHJlbVxuICBib3R0b206IDBcbiIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIHdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiA1JSBhdXRvIDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5mb3JtLWlucHV0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDAgM3JlbSAwO1xufVxuLmZvcm0taW5wdXRzIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uYnRuLWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNHJlbTtcbiAgYm90dG9tOiAwO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map