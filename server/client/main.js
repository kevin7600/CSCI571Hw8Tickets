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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search></app-search>"

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
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.service */ "./src/app/services.service.ts");
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
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".requiredLabel::after{\r\n    content:\" *\";\r\n    color:red;\r\n}\r\n\r\nmat-form-field {\r\n    width:75%\r\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\" style=\"border: 1px solid #8e8e8e; background-color:#f4f4f4; padding:10px 100px;\">\r\n      <p class=\"text-center\" style=\"font-weight:bold;\">Entertainment Event Ticket Search</p>\r\n      <form name=\"myform\" method=\"POST\" id=\"myForm\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n          \r\n\r\n        \r\n        <div class=\"form-group row\">\r\n              <label class=\"col-3 col-form-label requiredLabel\">Keyword</label>\r\n\r\n              <mat-form-field  appearance=\"outline\">\r\n              <input matInput [matAutocomplete]=\"auto\" class=\"col-9\" type=\"text\" id=\"keyword\" name=\"keyword\" [(ngModel)]=\"myKeyword\" #keyword=\"ngModel\" [ngClass]=\"{ 'is-invalid': keyword.invalid}\" (ngModelChange)=\"getAutoSuggestions();\" required/>\r\n              <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let autComOp of autComOps\" [value]=\"autComOp\">{{autComOp}}</mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n              <div *ngIf=\"keyword.invalid\" class=\"invalid-feedback offset-3\">\r\n                <div>Please enter a keyword</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-3 col-form-label\">Category</label>\r\n              <select class=\"form-control col-3\" name=\"Category\" id=\"Category\" (change)=\"getCategory($event)\">\r\n                  <option value=\"default\" selected>All</option>\r\n                  <option value=\"music\">Music</option>\r\n                  <option value=\"sports\">Sports</option>\r\n                  <option value=\"artsAndTheatre\">Arts & Theatre</option>\r\n                  <option value=\"film\">Film</option>\r\n                  <option value=\"miscellaneous\">Miscellaneous</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-3 col-form-label\">Distance</label>\r\n              <input class=\"form-control col-3\" type=\"text\" id=\"distance\" name=\"distance\" placeholder=\"10\"  (change)=\"getDistance($event);\" />\r\n              <select class=\"form-control col-3 offset-1\" name=\"Category\" id=\"Category\" (change)=\"getDistanceUnits($event)\">\r\n                  <option value=\"miles\" selected>Miles</option>\r\n                  <option value=\"kilometers\">Kilometers</option>\r\n              </select>\r\n          </div>\r\n          \r\n          <div class=\"form-group row\" style=\"margin-bottom:0\">\r\n              <label class=\"col-3 col-form-label requiredLabel\">From</label>\r\n              <div class=\"col-9 custom-control custom-radio\">\r\n                <input class=\"custom-control-input\" type=\"radio\" id=\"hereLocationRadio\" name=\"startLocation\" value=\"here\" (change)=\"radioChangeHandler($event)\" checked>\r\n                <label class=\"custom-control-label\" for=\"hereLocationRadio\">Current location</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio offset-3 col-9\">\r\n                  <input class=\"custom-control-input\" type=\"radio\" id=\"otherLocationRadio\" name=\"startLocation\" value=\"other\" (change)=\"radioChangeHandler($event)\">\r\n                  <label class=\"custom-control-label\" for=\"otherLocationRadio\">Other, Please specify:</label>\r\n              </div>\r\n                  <input class=\"offset-3 col-9 form-control\" type=\"text\" id=\"otherLocationText\" name=\"otherLocationText\" [disabled]=\"otherLocationTextDisabled\" [(ngModel)]=\"myOtherLocationText\" #otherLocationText=\"ngModel\" [ngClass]=\"{'is-invalid': !otherLocationTextDisabled && otherLocationText.invalid}\" [required]=\"!otherLocationTextDisabled\"/>\r\n                  <div *ngIf=\"otherLocationText.invalid\" class=\"invalid-feedback offset-3\">\r\n                      <div>Please enter a location.</div>\r\n                  </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n          </div>\r\n  \r\n          <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" id=\"searchButton\" value=\"Search\"><i class=\"material-icons\"><div style=\"font-size:60%;\">search</div></i>Search</button>\r\n              <button type=\"reset\" (click)=\"Reset();\" class=\"btn btn-light btn-sm\" name=\"clear\" value=\"Clear\" style=\"border: 1px solid #aeaeae; margin-left: 10px;\"><i class=\"material-icons\"><div style=\"font-size:60%;\">clear_all</div></i>Clear</button>\r\n          </div>\r\n         \r\n          <input type=\"hidden\" id=\"myLat\" name=\"myLat\">\r\n          <input type=\"hidden\" id=\"myLon\" name=\"myLon\">\r\n      </form>\r\n    </div>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(servicesService) {
        this.servicesService = servicesService;
        this.autComOps = [];
        this.myKeyword = "";
        this.category = "default";
        this.distance = 10;
        this.distanceUnits = "miles";
        this.myOtherLocationText = "";
        this.otherLocationTextDisabled = true;
    }
    SearchComponent.prototype.radioChangeHandler = function (event) {
        if (event.target.value == "other") {
            this.otherLocationTextDisabled = false;
        }
        else {
            this.otherLocationTextDisabled = true;
        }
        console.log(event.target.value);
    };
    SearchComponent.prototype.getCategory = function (event) {
        this.category = event.target.value;
        console.log(this.category);
    };
    SearchComponent.prototype.getDistanceUnits = function (event) {
        this.distanceUnits = event.target.value;
        console.log(this.distanceUnits);
    };
    SearchComponent.prototype.getDistance = function (event) {
        if (event.target.value == "") {
            this.distance = 10;
        }
        else {
            this.distance = Number(event.target.value);
            if (isNaN(this.distance)) {
                console.log("this is NaN");
            }
        }
        console.log(this.distance);
    };
    SearchComponent.prototype.getAutoSuggestions = function () {
        this.autComOps = this.servicesService.getRequestToServer(this.myKeyword);
    };
    SearchComponent.prototype.onSubmit = function () {
        alert('success!' + " " + this.myKeyword + " " + this.category + " " + this.distance + " " + this.distanceUnits + " " + this.myOtherLocationText);
    };
    SearchComponent.prototype.Reset = function () {
        this.category = "default";
        this.distance = 10;
        this.distanceUnits = "miles";
        this.otherLocationTextDisabled = true;
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services.service.ts":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
        this.AutComCount = 0; //so newer auto complete requests will overwrite previous requests
        console.log("services initialized");
    }
    ServicesService.prototype.getRequestToServer = function (keyword) {
        var _this = this;
        this.AutComCount += 1;
        var myAutoComCount = this.AutComCount;
        console.log("getting request to server...");
        var results = [];
        setTimeout(function () {
            if (myAutoComCount == _this.AutComCount) {
                console.log("resetting autocomplete...");
                _this.http.get('api/autocomplete/' + keyword).subscribe(function (temp) {
                    var arr = temp.json()["_embedded"]["attractions"];
                    for (var i = 0; i < arr.length; i++) {
                        results.push(arr[i]['name']);
                    }
                });
            }
        }, 1000);
        return results;
    };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ServicesService);
    return ServicesService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tanke\Desktop\CSCI571\hw8\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map