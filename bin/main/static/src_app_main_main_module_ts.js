"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_main_main_module_ts"],{

/***/ 499:
/*!********************************************************!*\
  !*** ./src/app/main/components/main/main.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Main Page...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 4rem;\n  background: #fef1cc;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNhc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9NYWNpbnRvc2glMjBIRC9EZXZlbG9wZXIveW91dHViZS1sZXNzb25zL3NwcmluZy13ZWJmbHV4LW1vbmdvZGItYXBwL2Zyb250ZW5kL3NyYy9hcHAvbWFpbi9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG4gIGhlaWdodDogMTAwJVxuICBwYWRkaW5nOiA0cmVtXG4gIGJhY2tncm91bmQ6ICNmZWYxY2NcbiAgdGV4dC1hbGlnbjogY2VudGVyIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNHJlbTtcbiAgYmFja2dyb3VuZDogI2ZlZjFjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 594:
/*!**********************************************************!*\
  !*** ./src/app/main/components/users/users.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 2, vars: 0, template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "users works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 705:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainModule": () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/main.component */ 499);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-ui/material-ui.module */ 6818);
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/users.component */ 594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [
            { path: 'users', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent },
        ],
    },
];
class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__.UsersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map