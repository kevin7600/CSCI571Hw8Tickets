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

module.exports = "<app-search></app-search>\r\n<app-search-results [hidden]=\"service.view!=0\"></app-search-results>\r\n<app-event-details [hidden]=\"service.view!=1\"></app-event-details>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
    }
    AppComponent.prototype.test = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
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
/* harmony import */ var _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-details/event-details.component */ "./src/app/event-details/event-details.component.ts");
/* harmony import */ var _event_details_tab_event_tab_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-details/tab-event/tab-event.component */ "./src/app/event-details/tab-event/tab-event.component.ts");
/* harmony import */ var _event_details_tab_artist_tab_artist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event-details/tab-artist/tab-artist.component */ "./src/app/event-details/tab-artist/tab-artist.component.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12__);
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
                _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailsComponent"],
                _event_details_tab_event_tab_event_component__WEBPACK_IMPORTED_MODULE_10__["TabEventComponent"],
                _event_details_tab_event_tab_event_component__WEBPACK_IMPORTED_MODULE_10__["SeatMapDialog"],
                _event_details_tab_artist_tab_artist_component__WEBPACK_IMPORTED_MODULE_11__["TabArtistComponent"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12__["RoundProgressModule"]
            ],
            providers: [],
            entryComponents: [_event_details_tab_event_tab_event_component__WEBPACK_IMPORTED_MODULE_10__["SeatMapDialog"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event-details/event-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/event-details/event-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group{\r\n}\r\n\r\n.backButton{\r\n    border: 1px solid #aeaeae;\r\n}"

/***/ }),

/***/ "./src/app/event-details/event-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/event-details/event-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button class=\"btn btn-light btn-sm backButton\"  (click)=\"ShowSearchResults()\">\n    &lt; List\n  </button>\n  <mat-tab-group mat-align-tabs=\"end\" class=\"row\">\n    <mat-tab label=\"Event\"><app-tab-event></app-tab-event></mat-tab>\n    <mat-tab label=\"Artist/Teams\"><app-tab-artist></app-tab-artist></mat-tab>\n    <mat-tab label=\"Venue\">sexno</mat-tab>\n    <mat-tab label=\"Upcoming Events\">sexsexsex</mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/event-details/event-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/event-details/event-details.component.ts ***!
  \**********************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
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


var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(service) {
        this.service = service;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
    };
    EventDetailsComponent.prototype.ShowSearchResults = function () {
        this.service.view = 0;
    };
    EventDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-details',
            template: __webpack_require__(/*! ./event-details.component.html */ "./src/app/event-details/event-details.component.html"),
            styles: [__webpack_require__(/*! ./event-details.component.css */ "./src/app/event-details/event-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/event-details/tab-artist/tab-artist.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/event-details/tab-artist/tab-artist.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item:nth-child(odd){\r\n    background-color:#f2f2f2;\r\n}\r\n\r\n.heading{\r\n    padding:0;\r\n}\r\n\r\n.headingText{\r\n    font-size: 15;\r\n    font-weight:bold;\r\n}\r\n\r\n.popularityNum{\r\n    position:absolute;\r\n    bottom: 12px;\r\n    left: 563px;    \r\n}"

/***/ }),

/***/ "./src/app/event-details/tab-artist/tab-artist.component.html":
/*!********************************************************************!*\
  !*** ./src/app/event-details/tab-artist/tab-artist.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-list role=\"list\">\n      <mat-list-item class=\"row heading\" role=\"listitem\">\n          <div class=\"headingText offset-6\">{{artistData.name}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\">\n          <div class=\"col-4 bold\">Name</div>\n          <div class=\"offset-2\">{{artistData.name}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\">\n          <div class=\"col-4 bold\">Followers</div>\n          <div class=\"offset-2\">{{artistData.followers}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\">\n          <div class=\"col-4 bold\">Popularity</div>\n          <div class=\"offset-2\">\n            <div class=\"popularityNum\">{{artistData.popularity}}</div> \n            <round-progress [current]=\"artistData.popularity\" [max]=\"100\" [color]=\"'#a3ff72'\" \n            [stroke]=\"3\" [radius]=\"17\" [clockwise]=\"false\">\n            </round-progress>\n\n          </div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\">\n          <div class=\"col-4 bold\">Check At</div>\n          <div class=\"offset-2\"><a target=\"_blank\" href='{{artistData.checkAt}}'>Spotify</a></div>\n      </mat-list-item>\n    </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/event-details/tab-artist/tab-artist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/event-details/tab-artist/tab-artist.component.ts ***!
  \******************************************************************/
/*! exports provided: TabArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabArtistComponent", function() { return TabArtistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabArtistComponent = /** @class */ (function () {
    function TabArtistComponent(service) {
        var _this = this;
        this.service = service;
        this.artistData = {};
        this.service.artistDetailsObserver.subscribe(function (temp) {
            _this.artistData = temp;
            console.log(_this.artistData);
        });
    }
    TabArtistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-artist',
            template: __webpack_require__(/*! ./tab-artist.component.html */ "./src/app/event-details/tab-artist/tab-artist.component.html"),
            styles: [__webpack_require__(/*! ./tab-artist.component.css */ "./src/app/event-details/tab-artist/tab-artist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], TabArtistComponent);
    return TabArtistComponent;
}());



/***/ }),

/***/ "./src/app/event-details/tab-event/seatMap.html":
/*!******************************************************!*\
  !*** ./src/app/event-details/tab-event/seatMap.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>View Seat Map</h1>\r\n    <hr>\r\n    <a [href]=\"myURL\" target=\"_blank\"><img  [src]=\"myURL\"></a>\r\n    <hr>\r\n    <button style=\"float:right\" (click)=\"Close();\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/event-details/tab-event/tab-event.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/event-details/tab-event/tab-event.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item:nth-child(odd){\r\n    background-color:#f2f2f2;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/event-details/tab-event/tab-event.component.html":
/*!******************************************************************!*\
  !*** ./src/app/event-details/tab-event/tab-event.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-list role=\"list\">\n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!artist\">\n          <div class=\"col-2 bold\">Artist/Team(s)</div>\n          <div class=\"offset-2\">{{artist}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!venue\">\n          <div class=\"col-2 bold\">Venue</div>\n          <div class=\"offset-2\">{{venue}}</div>\n      </mat-list-item>\n      \n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!time\">\n          <div class=\"col-2 bold\">Time</div>\n          <div class=\"offset-2\">{{time}}</div>\n      </mat-list-item>\n      \n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!category\">\n          <div class=\"col-2 bold\">Category</div>\n          <div class=\"offset-2\">{{category}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!priceRange\">\n          <div class=\"col-2 bold\">Price Range</div>\n          <div class=\"offset-2\">{{priceRange}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!ticketStatus\">\n          <div class=\"col-2 bold\">Ticket Status</div>\n          <div class=\"offset-2\">{{ticketStatus}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!buyTicketAt\">\n          <div class=\"col-2 bold\">Buy Ticket At</div>\n          <div class=\"offset-2\"><a target=\"_blank\" href='{{buyTicketAt}}'>Ticketmaster</a></div>\n      </mat-list-item>\n\n      <mat-list-item class=\"row\" role=\"listitem\" [hidden]=\"!seatMap\">\n          <div class=\"col-2 bold\">Seat Map</div>\n          <div class=\"blue offset-2\" role=\"button\" (click)=\"ShowSeatmap()\">View Seat Map Here</div>\n\n      </mat-list-item>\n    </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/event-details/tab-event/tab-event.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/event-details/tab-event/tab-event.component.ts ***!
  \****************************************************************/
/*! exports provided: TabEventComponent, SeatMapDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabEventComponent", function() { return TabEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatMapDialog", function() { return SeatMapDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services.service */ "./src/app/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TabEventComponent = /** @class */ (function () {
    function TabEventComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.artist = "";
        this.venue = "";
        this.time = "";
        this.category = "";
        this.priceRange = "";
        this.ticketStatus = "";
        this.buyTicketAt = "";
        this.seatMap = "";
        this.showTab = false;
    }
    TabEventComponent.prototype.Reset = function () {
        this.artist = "";
        this.venue = "";
        this.time = "";
        this.category = "";
        this.priceRange = "";
        this.ticketStatus = "";
        this.buyTicketAt = "";
        this.seatMap = "";
    };
    TabEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.eventDetailsObserver.subscribe(function (temp) {
            _this.Reset();
            if (temp['artists']) {
                for (var i = 0; i < temp['artists'].length; i++) {
                    _this.artist += temp['artists'][i];
                    if (i != temp['artists'].length - 1) {
                        _this.artist += ' | ';
                    }
                }
            }
            if (temp['venue']) {
                _this.venue = temp['venue'];
            }
            if (temp['date']) {
                _this.time += temp['date'] + "  ";
            }
            if (temp['time']) {
                _this.time += temp['time'];
            }
            if (temp['category']) {
                for (var i = 0; i < temp['category'].length; i++) {
                    _this.category += temp['category'][i];
                    if (i != temp['category'].length - 1) {
                        _this.category += ' | ';
                    }
                }
            }
            if (temp['priceRange']) {
                _this.priceRange = "$" + temp['priceRange'][0] + " ~ $" + temp['priceRange'][1];
            }
            if (temp['ticketStatus']) {
                _this.ticketStatus += temp['ticketStatus'];
            }
            if (temp['buyTicketAt']) {
                _this.buyTicketAt += temp['buyTicketAt'];
            }
            if (temp['seatMap']) {
                _this.seatMap += temp['seatMap'];
            }
        });
        this.showTab = true;
    };
    TabEventComponent.prototype.ShowSeatmap = function () {
        var dialogRef = this.dialog.open(SeatMapDialog, {
            data: this.seatMap
        });
    };
    TabEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-event',
            template: __webpack_require__(/*! ./tab-event.component.html */ "./src/app/event-details/tab-event/tab-event.component.html"),
            styles: [__webpack_require__(/*! ./tab-event.component.css */ "./src/app/event-details/tab-event/tab-event.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TabEventComponent);
    return TabEventComponent;
}());

var SeatMapDialog = /** @class */ (function () {
    function SeatMapDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.myURL = "";
        this.myURL = data;
    }
    SeatMapDialog.prototype.Close = function () {
        this.dialogRef.close();
    };
    SeatMapDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'randomNameHere',
            template: __webpack_require__(/*! ./seatMap.html */ "./src/app/event-details/tab-event/seatMap.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SeatMapDialog);
    return SeatMapDialog;
}());



/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n\n.star{\n  color: #e5c600;\n}\n\n.starBorder{\n  color: black; \n}\n\n.starButton{\n  background-color:white;\n}\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <button (click)=\"ShowResultsTab();\" class=\"btn btn-sm offset-5\" [ngClass]=\"{'btn-primary': !isFavoriteTab, 'btn-link': isFavoriteTab}\" type=\"button\">Results</button>\n    <button (click)=\"ShowFavoritesTab();\" class=\"btn btn-sm\" [ngClass]=\"{'btn-primary': isFavoriteTab, 'btn-link': !isFavoriteTab}\" type=\"button\">Favorites</button>\n  </div>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" aria-label=\"Elements\">\n      <!-- index Column -->\n      <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef>#</th>\n          <td mat-cell *matCellDef=\"let row; let i = index;\">{{i+1}}</td>\n      </ng-container>\n      <!-- date Column -->\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef>Date</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.date}}</td>\n      </ng-container>\n      <!-- event Column -->\n      <ng-container matColumnDef=\"event\">\n        <th mat-header-cell *matHeaderCellDef>Event</th>\n        <td matTooltip=\"{{row.event}}\" mat-cell *matCellDef=\"let row\">\n          <div class=\"blue\" role=\"button\" (click)=\"ShowEventDetails(row.id)\">{{row.event}}</div>\n          \n        </td>\n      </ng-container>\n      <!-- category Column -->\n      <ng-container matColumnDef=\"category\">\n        <th mat-header-cell *matHeaderCellDef>Category</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.category}}</td>\n      </ng-container>\n      <!-- venueInfo Column -->\n      <ng-container matColumnDef=\"venueInfo\">\n        <th mat-header-cell *matHeaderCellDef>Venue Info</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.venueInfo}}</td>\n      </ng-container>\n      <!-- favorite Column -->\n      <ng-container matColumnDef=\"favorite\">\n        <th mat-header-cell *matHeaderCellDef>Favorite</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button (click)= \"Favorited(row, $event);\" class=\"starButton\" type=\"button\">\n            <i class=\"material-icons starBorder\" [hidden]=\"!isFavoriteTab\">delete</i>\n            <i class=\"material-icons starBorder\" [hidden]=\"isFavoriteTab || isFav(row)\">star_border</i>\n            <i class=\"material-icons star\" [hidden]=\"isFavoriteTab || !isFav(row)\">star</i>\n          </button>\n        </td>\n      </ng-container>\n\n\n\n      <tr mat-header-row  *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index;\"></tr>\n    </table>\n  </div>\n</div>"

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
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");
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



var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(service) {
        this.service = service;
        this.favorites = [];
        this.favoritesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.isFavoriteTab = false;
        this.displayedColumns = ['index', 'date', 'event', 'category', 'venueInfo', 'favorite'];
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        // this.dataSource=results;//for testing
        this.dataSource = this.service.searchResultsObserver; //for server
        this.favoriteSource = this.favoritesSubject.asObservable();
        this.resultsSource = this.dataSource;
    };
    SearchResultsComponent.prototype.Favorited = function (row, event) {
        var index = this.isFav(row);
        if (index) { //unfavorited
            this.favorites.splice(index - 1, 1);
        }
        else { //favorited
            this.favorites.push(row);
        }
        this.favoritesSubject.next(this.favorites);
    };
    SearchResultsComponent.prototype.isFav = function (row) {
        for (var i = 0; i < this.favorites.length; i++) {
            if (this.favorites[i] == row) {
                return i + 1;
            }
        }
        return 0;
    };
    SearchResultsComponent.prototype.ShowResultsTab = function () {
        this.isFavoriteTab = false;
        this.dataSource = this.resultsSource;
    };
    SearchResultsComponent.prototype.ShowFavoritesTab = function () {
        this.isFavoriteTab = true;
        this.dataSource = this.favoriteSource;
    };
    SearchResultsComponent.prototype.ShowEventDetails = function (id) {
        this.service.GetEventDetails(id);
        // console.log(id);
    };
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")],
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());

var results = [
    { id: "1234ABCD", date: "10-5-2014", event: "sex on beach", category: "nsfw", venueInfo: "idk" },
    { id: "1233ABCD", date: "10-5-2015", event: "sex on beach", category: "nsfw", venueInfo: "idk" },
    { id: "2344ABCD", date: "10-5-2016", event: "sex on beach", category: "nsfw", venueInfo: "idk" },
];


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
        this.searchResultsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]); //after clicking "search" this is populated with next value
        this.searchResultsObserver = this.searchResultsSubject.asObservable(); //this is the current value we see
        this.eventDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.eventDetailsObserver = this.eventDetailsSubject.asObservable();
        this.artistDetailsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.artistDetailsObserver = this.artistDetailsSubject.asObservable();
        this.AutComCount = 0; //so newer auto complete requests will overwrite previous requests
        this.view = 0; //0=searchResults, 1=eventDetails
        console.log("services initialized");
    }
    ServicesService.prototype.sendAutoCompleteRequest = function (keyword) {
        var _this = this;
        if (!keyword)
            return; //don't autocomplete when there isn't any keyword
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
            var arr = temp.json();
            var results = [];
            for (var i = 0; i < arr.length; i++) {
                results.push({
                    id: arr[i]['id'],
                    date: arr[i]['dates']['start']['localDate'],
                    event: arr[i]['name'],
                    category: arr[i]['classifications'][0]['segment']['name'],
                    venueInfo: arr[i]['_embedded']['venues'][0]['name']
                });
            }
            results.sort(function (a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
            // for (let i=0;i<results.length;i++){
            //   results[i]['id']=i+1;
            //   results[i]['favorite']='X';
            // }
            _this.searchResultsSubject.next(results);
        });
    };
    ServicesService.prototype.GetEventDetails = function (id) {
        var _this = this;
        //TODO, reset all data
        var results = {};
        this.http.get('api/eventdetails?id=' + id).subscribe(function (temp) {
            var arr = temp.json();
            results = {
                artists: [],
                venue: arr['_embedded']['venues'][0]['name'],
                date: arr['dates']['start']['localDate'],
                time: arr['dates']['start']['localTime'],
                category: [arr['classifications'][0]['segment']['name'],
                    arr['classifications'][0]['genre']['name']],
                ticketStatus: arr['dates']['status']['code'],
                buyTicketAt: arr['url'],
                seatMap: arr['seatmap']['staticUrl']
            };
            if (arr['priceRanges'] != null) {
                results['priceRange'] = [arr['priceRanges'][0]['min'],
                    arr['priceRanges'][0]['max']];
            }
            for (var i = 0; i < arr['_embedded']['attractions'].length; i++) {
                results['artists'].push(arr['_embedded']['attractions'][i]['name']);
            }
            _this.eventDetailsSubject.next(results);
            _this.view = 1; //swap to eventDetails Component
            for (var i = 0; i < results['category'].length; i++) { //if it's details of music, then get artist info on spotify
                if (results['category'][i].toLowerCase() == 'music') {
                    _this.http.get('api/spotify?artist=' + results['artists'][0]).subscribe(function (temp) {
                        var data = temp.json();
                        var artistResults = {
                            name: data['name'],
                            followers: data['followers']['total'],
                            popularity: data['popularity'],
                            checkAt: data['external_urls']['spotify']
                        };
                        _this.artistDetailsSubject.next(artistResults);
                    });
                }
            }
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