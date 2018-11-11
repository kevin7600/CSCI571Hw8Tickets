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

module.exports = "<app-search></app-search>\r\n<app-search-results></app-search-results>"

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
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
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
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search-results/search-results-datasource.ts":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results-datasource.ts ***!
  \*************************************************************/
/*! exports provided: SearchResultsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsDataSource", function() { return SearchResultsDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
// const EXAMPLE_DATA: SearchResultsItem[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
//   {id: 6, name: 'Carbon'},
//   {id: 7, name: 'Nitrogen'},
//   {id: 8, name: 'Oxygen'},
//   {id: 9, name: 'Fluorine'},
//   {id: 10, name: 'Neon'},
//   {id: 11, name: 'Sodium'},
//   {id: 12, name: 'Magnesium'},
//   {id: 13, name: 'Aluminum'},
//   {id: 14, name: 'Silicon'},
//   {id: 15, name: 'Phosphorus'},
//   {id: 16, name: 'Sulfur'},
//   {id: 17, name: 'Chlorine'},
//   {id: 18, name: 'Argon'},
//   {id: 19, name: 'Potassium'},
//   {id: 20, name: 'Calcium'},
// ];
/**
 * Data source for the SearchResults view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var SearchResultsDataSource = /** @class */ (function (_super) {
    __extends(SearchResultsDataSource, _super);
    function SearchResultsDataSource(paginator, sort, servicesService) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.servicesService = servicesService;
        _this.results = [
            { id: 1, date: "10-5-2014", event: "sex on beach", category: "nsfw", venueInfo: "idk", favorite: "x" },
            { id: 1, date: "10-5-2014", event: "sex on beach", category: "nsfw", venueInfo: "idk", favorite: "x" },
            { id: 1, date: "10-5-2014", event: "sex on beach", category: "nsfw", venueInfo: "idk", favorite: "x" },
        ];
        _this.data = _this.results;
        _this.servicesService.searchResults.subscribe(function (results) { return _this.data = results; });
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    SearchResultsDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    SearchResultsDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    SearchResultsDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    SearchResultsDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            // switch (this.sort.active) {
            //   case 'name': return compare(a.name, b.name, isAsc);
            //   case 'id': return compare(+a.id, +b.id, isAsc);
            //   default: return 0;
            // }
            return 0;
        });
    };
    return SearchResultsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mat-elevation-z8\">\n    <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n      <!-- Id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n      </ng-container>\n\n      <!-- date Column -->\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>date</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.date}}</td>\n      </ng-container>\n\n            <!-- event Column -->\n            <ng-container matColumnDef=\"event\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>event</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.event}}</td>\n            </ng-container>\n\n                  <!-- category Column -->\n      <ng-container matColumnDef=\"category\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>category</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.category}}</td>\n      </ng-container>\n\n            <!-- venueInfo Column -->\n            <ng-container matColumnDef=\"venueInfo\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>venueInfo</th>\n              <td mat-cell *matCellDef=\"let row\">{{row.venueInfo}}</td>\n            </ng-container>\n\n                  <!-- favorite Column -->\n      <ng-container matColumnDef=\"favorite\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>favorite</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.favorite}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator\n        [length]=\"dataSource.data.length\"\n        [pageIndex]=\"0\"\n        [pageSize]=\"50\"\n        [pageSizeOptions]=\"[25, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _search_results_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-results-datasource */ "./src/app/search-results/search-results-datasource.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(servicesService) {
        this.servicesService = servicesService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'date', 'event', 'category', 'venueInfo', 'favorite'];
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        this.dataSource = new _search_results_datasource__WEBPACK_IMPORTED_MODULE_2__["SearchResultsDataSource"](this.paginator, this.sort, this.servicesService);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SearchResultsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SearchResultsComponent.prototype, "sort", void 0);
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")],
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
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

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\" style=\"border: 1px solid #8e8e8e; background-color:#f4f4f4; padding:10px 100px;\">\r\n      <p class=\"text-center\" style=\"font-weight:bold;\">Entertainment Event Ticket Search</p>\r\n      <form name=\"myform\" method=\"POST\" id=\"myForm\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n          \r\n\r\n        \r\n        <div class=\"form-group row\">\r\n              <label class=\"col-3 col-form-label requiredLabel\">Keyword</label>\r\n\r\n              <mat-form-field  appearance=\"outline\">\r\n              <input matInput [matAutocomplete]=\"auto\" class=\"col-9\" type=\"text\" id=\"keyword\" name=\"keyword\" [(ngModel)]=\"myKeyword\" #keyword=\"ngModel\" [ngClass]=\"{ 'is-invalid': keyword.invalid}\" (ngModelChange)=\"getAutoSuggestions();\" required/>\r\n              <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let autComOp of autComOps\" [value]=\"autComOp\">{{autComOp}}</mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n              <div *ngIf=\"keyword.invalid\" class=\"invalid-feedback offset-3\">\r\n                <div>Please enter a keyword</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-3 col-form-label\">Category</label>\r\n              <select class=\"form-control col-3\" name=\"Category\" id=\"Category\" (change)=\"getCategory($event)\">\r\n                  <option value=\"default\" selected>All</option>\r\n                  <option value=\"music\">Music</option>\r\n                  <option value=\"sports\">Sports</option>\r\n                  <option value=\"artsAndTheatre\">Arts & Theatre</option>\r\n                  <option value=\"film\">Film</option>\r\n                  <option value=\"miscellaneous\">Miscellaneous</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-3 col-form-label\">Distance</label>\r\n              <input class=\"form-control col-3\" type=\"text\" id=\"distance\" name=\"distance\" placeholder=\"10\"  (change)=\"getDistance($event);\" />\r\n              <select class=\"form-control col-3 offset-1\" name=\"Category\" id=\"Category\" (change)=\"getDistanceUnits($event)\">\r\n                  <option value=\"miles\" selected>Miles</option>\r\n                  <option value=\"kilometers\">Kilometers</option>\r\n              </select>\r\n          </div>\r\n          \r\n          <div class=\"form-group row\" style=\"margin-bottom:0\">\r\n              <label class=\"col-3 col-form-label requiredLabel\">From</label>\r\n              <div class=\"col-9 custom-control custom-radio\">\r\n                <input class=\"custom-control-input\" type=\"radio\" id=\"hereLocationRadio\" name=\"startLocation\" value=\"here\" (change)=\"radioChangeHandler($event)\" checked>\r\n                <label class=\"custom-control-label\" for=\"hereLocationRadio\">Current location</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio offset-3 col-9\">\r\n                  <input class=\"custom-control-input\" type=\"radio\" id=\"otherLocationRadio\" name=\"startLocation\" value=\"other\" (change)=\"radioChangeHandler($event)\">\r\n                  <label class=\"custom-control-label\" for=\"otherLocationRadio\">Other, Please specify:</label>\r\n              </div>\r\n                  <input class=\"offset-3 col-9 form-control\" type=\"text\" id=\"otherLocationText\" name=\"otherLocationText\" [disabled]=\"otherLocationTextDisabled\" [(ngModel)]=\"myOtherLocationText\" #otherLocationText=\"ngModel\" [ngClass]=\"{'is-invalid': !otherLocationTextDisabled && otherLocationText.invalid}\" [required]=\"!otherLocationTextDisabled\"/>\r\n                  <div *ngIf=\"otherLocationText.invalid\" class=\"invalid-feedback offset-3\">\r\n                      <div>Please enter a location.</div>\r\n                  </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n          </div>\r\n  \r\n          <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" id=\"searchButton\" value=\"Search\" [disabled]=\"currentLocation['lat']==-1\"><i class=\"material-icons\"><div style=\"font-size:60%;\">search</div></i>Search</button>\r\n              <button type=\"reset\" (click)=\"Reset();\" class=\"btn btn-light btn-sm\" name=\"clear\" value=\"Clear\" style=\"border: 1px solid #aeaeae; margin-left: 10px;\"><i class=\"material-icons\"><div style=\"font-size:60%;\">clear_all</div></i>Clear</button>\r\n          </div>\r\n         \r\n          <input type=\"hidden\" id=\"myLat\" name=\"myLat\">\r\n          <input type=\"hidden\" id=\"myLon\" name=\"myLon\">\r\n      </form>\r\n    </div>\r\n  </div>\r\n  \r\n  "

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
        this.currentLocation = { lat: -1, lon: -1 };
        this.autComOps = [];
        this.myKeyword = "";
        this.category = "default";
        this.distance = 10;
        this.distanceUnits = "miles";
        this.myOtherLocationText = "";
        this.otherLocationTextDisabled = true;
        this.currentLocation = this.servicesService.GetCurrentLocation();
    }
    SearchComponent.prototype.radioChangeHandler = function (event) {
        if (event.target.value == "other") {
            this.otherLocationTextDisabled = false;
        }
        else {
            this.otherLocationTextDisabled = true;
        }
    };
    SearchComponent.prototype.getCategory = function (event) {
        this.category = event.target.value;
    };
    SearchComponent.prototype.getDistanceUnits = function (event) {
        this.distanceUnits = event.target.value;
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
    };
    SearchComponent.prototype.getAutoSuggestions = function () {
        this.autComOps = this.servicesService.sendAutoCompleteRequest(this.myKeyword);
    };
    SearchComponent.prototype.onSubmit = function () {
        this.servicesService.GetSearchResults(this.myKeyword, this.category, this.distance, this.distanceUnits, this.myOtherLocationText, this.otherLocationTextDisabled, this.currentLocation);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
        this.searchResultsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]); //after clicking "search" this is populated with next value
        this.searchResults = this.searchResultsSource.asObservable(); //this is the current value we see
        this.AutComCount = 0; //so newer auto complete requests will overwrite previous requests
        console.log("services initialized");
    }
    ServicesService.prototype.sendAutoCompleteRequest = function (keyword) {
        var _this = this;
        this.AutComCount += 1;
        var myAutoComCount = this.AutComCount;
        var results = [];
        setTimeout(function () {
            if (myAutoComCount == _this.AutComCount) {
                _this.http.get('api/autocomplete/' + keyword).subscribe(function (temp) {
                    if (temp.json().hasOwnProperty("_embedded") && temp.json()["_embedded"].hasOwnProperty("attractions")) {
                        var arr = temp.json()["_embedded"]["attractions"];
                        for (var i = 0; i < arr.length; i++) {
                            results.push(arr[i]['name']);
                        }
                    }
                    else {
                        console.log("no results autocomplete");
                    }
                });
            }
        }, 750);
        return results;
    };
    ServicesService.prototype.GetCurrentLocation = function () {
        var results = { lat: -1, lon: -1 };
        this.http.get("http://ip-api.com/json").subscribe(function (temp) {
            results['lat'] = temp.json()['lat'];
            results['lon'] = temp.json()['lon'];
        });
        return results;
    };
    ServicesService.prototype.GetSearchResults = function (keywords, category, distance, distanceUnits, otherLocationKeywords, otherLocationTextDisabled, curLocation) {
        var _this = this;
        this.http.get('api/searchResults?keywords=' + keywords + '&category=' + category + '&distance=' + distance
            + '&distanceUnits=' + distanceUnits + '&otherLocationKeywords=' + otherLocationKeywords
            + '&otherLocationTextDisabled=' + otherLocationTextDisabled.toString() + '&lat=' + curLocation['lat']
            + '&lon=' + curLocation['lon']).subscribe(function (temp) {
            console.log(temp.json());
            var arr = temp.json();
            var results = [];
            for (var i = 0; i < arr.length; i++) {
                results.push({ date: arr[i]['dates']['start']['localDate'],
                    event: arr[i]['name'],
                    category: arr[i]['classifications'][0]['segment']['name'],
                    venueInfo: arr[i]['_embedded']['venues'][0]['name'] });
            }
            results.sort(function (a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
            for (var i = 0; i < results.length; i++) {
                results[i]['id'] = i + 1;
                results[i]['favorite'] = 'X';
            }
            _this.searchResultsSource.next(results);
            console.log(results);
        });
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