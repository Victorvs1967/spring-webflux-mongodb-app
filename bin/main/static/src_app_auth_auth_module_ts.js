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


/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map