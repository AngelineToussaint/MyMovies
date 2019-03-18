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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
    { path: 'membres', component: _members_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"] },
    { path: 'membre/:id', component: _member_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberComponent"] },
    { path: 'films', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"] },
    { path: 'film/:id', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.clear { visibility: hidden; clear: both; }\n.router-content { width: 76%; float: left; }\napp-sidebar { width: 22%; float: right }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxrQkFBa0IsRUFBRSxXQUFXLEVBQUU7QUFDNUMsa0JBQWtCLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFDM0MsY0FBYyxVQUFVLEVBQUUsYUFBYSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIuY2xlYXIgeyB2aXNpYmlsaXR5OiBoaWRkZW47IGNsZWFyOiBib3RoOyB9XG4ucm91dGVyLWNvbnRlbnQgeyB3aWR0aDogNzYlOyBmbG9hdDogbGVmdDsgfVxuYXBwLXNpZGViYXIgeyB3aWR0aDogMjIlOyBmbG9hdDogcmlnaHQgfVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"view\">\n  <div class=\"router-content\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <app-sidebar></app-sidebar>\n\n  <hr class=\"clear\">\n</div>\n\n<app-footer></app-footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _fr_currency__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fr-currency */ "./src/app/fr-currency.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_10__["MembersComponent"],
                _member_member_component__WEBPACK_IMPORTED_MODULE_12__["MemberComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_14__["MovieComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__["CommentComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_16__["MoviesComponent"],
                _fr_currency__WEBPACK_IMPORTED_MODULE_17__["FrCurrency"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/*!***********************************************!*\
  !*** ./src/app/comment/comment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item b {\n  padding-right: 10px;\n  margin-right: 10px;\n  border-right: 2px solid #333;\n}\n\n.comments-title { font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\n.comments { overflow-y: auto; height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQSxrQkFBa0IsK0NBQStDLEVBQUU7O0FBRW5FLFlBQVksZ0JBQWdCLEVBQUUsYUFBYSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGlzdC1pdGVtIGIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzMzM7XG59XG5cbi5jb21tZW50cy10aXRsZSB7IGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7IH1cblxuLmNvbW1lbnRzIHsgb3ZlcmZsb3cteTogYXV0bzsgaGVpZ2h0OiAyMDBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"comments-title\">Commentaires</h2>\n\n<div class=\"form\">\n  <mat-form-field style=\"margin: 5px\">\n    <input matInput type=\"text\" placeholder=\"Ajouter un commentaire\" [(ngModel)]=\"comment\">\n  </mat-form-field>\n  <button mat-flat-button color=\"primary\" (click)=\"addComment(comment)\">\n    <mat-icon>comments</mat-icon>\n  </button>\n</div>\n\n\n<mat-list class=\"comments\">\n  <div *ngFor=\"let comment of comments\">\n    <mat-list-item>\n      <b>{{comment.user.username}}</b> {{comment.content}}\n    </mat-list-item>\n\n    <mat-divider></mat-divider>\n  </div>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.service */ "./src/app/comment/comment.service.ts");



var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.getComments();
    };
    CommentComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService.getByMovieId(128)
            .subscribe(function (comments) { return _this.comments = comments.slice().reverse(); });
    };
    CommentComponent.prototype.addComment = function (comment) {
        var _this = this;
        this.commentService.addComment(128, comment)
            .subscribe(function (resComment) {
            _this.comments.unshift(resComment);
        });
    };
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comment/comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/comment/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.ref = '/comments';
    }
    CommentService.prototype.getByMovieId = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.ref + '/movies/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched comments by movie id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError([])));
    };
    CommentService.prototype.addComment = function (id, comment) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Auth-Token': localStorage.getItem('token').toString()
            })
        };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('id_movie', id.toString())
            .set('comment', comment);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/users/' + localStorage.getItem('user_id') + this.ref, body.toString(), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('added note'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CommentService.prototype.handleError = function (result) {
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  color: #fff;\n  background: #727272;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM3MjcyNzI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <mat-toolbar>\n    <h2>Copyright © 2019 <b>MyMovies</b> v1.0.0 | Tous droits réservés | Développé par <b>Angéline Toussaint</b> et <b>Adrien Martineau</b></h2>\n  </mat-toolbar>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/fr-currency.ts":
/*!********************************!*\
  !*** ./src/app/fr-currency.ts ***!
  \********************************/
/*! exports provided: FrCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrCurrency", function() { return FrCurrency; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrCurrency = /** @class */ (function () {
    function FrCurrency() {
    }
    FrCurrency.prototype.transform = function (value) {
        return (value.substr(1) + ' ' + value.substr(0, 1)).split(',').join(' ');
    };
    FrCurrency = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'frCurrency'
        })
    ], FrCurrency);
    return FrCurrency;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar { margin-bottom: 8px; }\n\n.fill-remaining-space { flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsa0JBQWtCLEVBQUU7O0FBRWxDLHdCQUF3QixjQUFjLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2UgeyBmbGV4OiAxIDEgYXV0bzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>MyMovies</span>\n\n  <span class=\"fill-remaining-space\"></span>\n\n  <button mat-flat-button color=\"primary\" routerLink=\"/\">Accueil</button>\n  <button mat-flat-button color=\"primary\" routerLink=\"/films\">Films</button>\n  <button mat-flat-button color=\"primary\" routerLink=\"/membres\">Membres</button>\n  <button mat-flat-button color=\"primary\" *ngIf=\"logged\" (click)=\"logout()\">Déconnexion</button>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logged = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') !== null) {
            this.logged = true;
        }
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('ip');
        this.logged = false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\nh1, h4, .form, p {\n  text-align: center\n}\n\nmat-form-field {\n  margin: 5px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSwrQ0FBK0MsRUFBRTs7QUFFckQ7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7IGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7IH1cblxuaDEsIGg0LCAuZm9ybSwgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogNXB4XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Bienvenue sur le site My Movies</h1>\n<h4>Ce site vous permet de mettre des films dans votre playlist.<br>\nIl vous permet aussi de les enregistrer dans une liste pour les regarder plus tard.</h4>\n<mat-card-content *ngIf=\"!logged\">\n  <mat-tab-group>\n    <mat-tab label=\"Inscription\">\n      <mat-card class=\"home-card\">\n        <mat-card-content>\n          <div class=\"form\">\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"email\" [(ngModel)]=\"signinEmail\">\n            </mat-form-field><br>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"identifiant\" [(ngModel)]=\"signinUsername\">\n            </mat-form-field><br>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"Mot de passe\" [(ngModel)]=\"signinPassword\">\n            </mat-form-field><br>\n            <button mat-flat-button color=\"primary\" (click)=\"signin(signinEmail, signinUsername, signinPassword)\">\n              S'inscrire\n            </button>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </mat-tab>\n    <mat-tab label=\"Connexion\">\n      <mat-card class=\"home-card\">\n        <mat-card-content>\n          <div class=\"form\">\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"email\" [(ngModel)]=\"loginEmail\">\n            </mat-form-field><br>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"Mot de passe\" [(ngModel)]=\"loginPassword\">\n            </mat-form-field><br>\n            <button mat-flat-button color=\"primary\" (click)=\"login(loginEmail, loginPassword)\">\n              Se connecter\n            </button>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card-content>\n\n<p *ngIf=\"logged\">Vous êtes connecté !</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(snackBar, userService) {
        this.snackBar = snackBar;
        this.userService = userService;
        this.logged = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') !== null) {
            this.logged = true;
        }
    };
    HomeComponent.prototype.signin = function (email, username, password) {
        var _this = this;
        this.userService.add(email, username, password)
            .subscribe(function (res) {
            _this.snackBar.open('Inscription réussie !', 'Ok !', {
                duration: 5000
            });
        });
    };
    HomeComponent.prototype.login = function (email, password) {
        var _this = this;
        this.userService.check(email, password)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user_id', res.id);
            _this.logged = true;
            _this.snackBar.open('Connexion réussie !', 'Ok !', {
                duration: 5000
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/member/member.component.css":
/*!*********************************************!*\
  !*** ./src/app/member/member.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-card {\n  float: left;\n  margin: 20px;\n  width: 25%;\n}\n\n@media screen and (max-width: 1300px){\n  .movie-card { width: 40%; }\n}\n\n@media screen and (max-width: 1020px) {\n  .movie-card { width: calc(100% - 40px); }\n}\n\n.movie-card mat-card-content {\n  height: 100px;\n  overflow-y: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyL21lbWJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjLFVBQVUsRUFBRTtBQUM1Qjs7QUFFQTtFQUNFLGNBQWMsd0JBQXdCLEVBQUU7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL21lbWJlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLWNhcmQge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpe1xuICAubW92aWUtY2FyZCB7IHdpZHRoOiA0MCU7IH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XG4gIC5tb3ZpZS1jYXJkIHsgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpOyB9XG59XG5cbi5tb3ZpZS1jYXJkIG1hdC1jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/member/member.component.html":
/*!**********************************************!*\
  !*** ./src/app/member/member.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <mat-card class=\"main-card\">\n    <mat-card-header>\n      <mat-icon matCardAvatar>account_circle</mat-icon>\n      <mat-card-title>{{user.username}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-tab-group>\n        <mat-tab label=\"Films à voir\">\n          <div *ngFor=\"let movie of playlist\">\n            <mat-card class=\"movie-card\">\n              <mat-card-header>\n                <mat-card-title routerLink=\"/film/{{movie.id}}\">{{movie.title}}</mat-card-title>\n                <mat-card-subtitle>\n                  <span *ngFor=\"let genre of movie.genres; last as isLast\">\n                    {{genre.name}} <span *ngIf=\"!isLast\">/</span>\n                  </span>\n                </mat-card-subtitle>\n              </mat-card-header>\n              <img mat-card-image src=\"{{pictureUrl + movie.poster_path}}\" alt=\"Picture of movies\">\n              <mat-card-content>\n                <p>\n                  {{movie.overview}}\n                </p>\n              </mat-card-content>\n            </mat-card>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Films vues\">\n          <div *ngFor=\"let movie of moviesViews\">\n            <mat-card class=\"movie-card\">\n              <mat-card-header>\n                <mat-card-title routerLink=\"/film/{{movie.id}}\">{{movie.title}}</mat-card-title>\n                <mat-card-subtitle>\n                  <span *ngFor=\"let genre of movie.genres; last as isLast\">\n                    {{genre.name}} <span *ngIf=\"!isLast\">/</span>\n                  </span>\n                </mat-card-subtitle>\n              </mat-card-header>\n              <img mat-card-image src=\"{{pictureUrl + movie.poster_path}}\" alt=\"Picture of movies\">\n              <mat-card-content>\n                <p>\n                  {{movie.overview}}\n                </p>\n              </mat-card-content>\n            </mat-card>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie/movie.service */ "./src/app/movie/movie.service.ts");






var MemberComponent = /** @class */ (function () {
    function MemberComponent(userService, movieService, route) {
        this.userService = userService;
        this.movieService = movieService;
        this.route = route;
        this.moviesViews = [];
        this.playlist = [];
        this.notes = [];
        this.pictureUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pictureUrl;
    }
    MemberComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    MemberComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.get(id)
            .subscribe(function (user) {
            _this.user = user;
            for (var _i = 0, _a = user.movieViews; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.getMovie(i.idMovie, 'movieView');
            }
            for (var _b = 0, _c = user.playlist; _b < _c.length; _b++) {
                var i = _c[_b];
                _this.getMovie(i.idMovie, 'playlist');
            }
            for (var _d = 0, _e = user.note; _d < _e.length; _d++) {
                var i = _e[_d];
                _this.getMovie(i.idMovie, 'note');
            }
        });
    };
    MemberComponent.prototype.getMovie = function (id, type) {
        var _this = this;
        this.movieService.get(id)
            .subscribe(function (movie) {
            if (type === 'movieView') {
                _this.moviesViews.push(movie);
            }
            else if (type === 'playlist') {
                _this.playlist.push(movie);
            }
            else if (type === 'note') {
                _this.notes.push(movie);
            }
        });
    };
    MemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/member/member.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _movie_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/members/members.component.css":
/*!***********************************************!*\
  !*** ./src/app/members/members.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item {\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\nmat-list-item:hover { background: #efefef; transition: background-color 0.3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlDQUFpQztBQUNuQztBQUNBLHNCQUFzQixtQkFBbUIsRUFBRSxpQ0FBaUMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxpc3QtaXRlbSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxubWF0LWxpc3QtaXRlbTpob3ZlciB7IGJhY2tncm91bmQ6ICNlZmVmZWY7IHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/members/members.component.html":
/*!************************************************!*\
  !*** ./src/app/members/members.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item *ngFor=\"let user of users\" routerLink=\"/membre/{{user.id}}\">\n    <mat-icon matListIcon>account_circle</mat-icon>\n    <h3 matLine> {{user.username}} </h3>\n    <p matLine>\n      <span> Inscrit depuis le {{user.date * 1000 | date: 'dd/MM/yyyy'}} </span>\n    </p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");



var MembersComponent = /** @class */ (function () {
    function MembersComponent(userService) {
        this.userService = userService;
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    MembersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (users) { return _this.users = users; });
    };
    MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/members/members.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  float: left;\n  margin: 10px;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n  color: rgba(0,0,0,.87);\n}\n\n.col.picture { width: calc(30% - 40px); }\n\n.col.picture img { width: 100%; }\n\n.col.info { width: calc(70% - 40px); }\n\n.btn-playlist { margin-right: 15px; margin-top: 20px; }\n\n.btn-movieview { margin-bottom: 100px; }\n\nmat-toolbar span { margin: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0NBQStDO0VBQy9DLHNCQUFzQjtBQUN4Qjs7QUFFQSxlQUFlLHVCQUF1QixFQUFFOztBQUV4QyxtQkFBbUIsV0FBVyxFQUFFOztBQUVoQyxZQUFZLHVCQUF1QixFQUFFOztBQUVyQyxnQkFBZ0Isa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUU7O0FBQ3RELGlCQUFpQixvQkFBb0IsRUFBRTs7QUFFdkMsbUJBQW1CLGFBQWEsRUFBRSIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcbn1cblxuLmNvbC5waWN0dXJlIHsgd2lkdGg6IGNhbGMoMzAlIC0gNDBweCk7IH1cblxuLmNvbC5waWN0dXJlIGltZyB7IHdpZHRoOiAxMDAlOyB9XG5cbi5jb2wuaW5mbyB7IHdpZHRoOiBjYWxjKDcwJSAtIDQwcHgpOyB9XG5cbi5idG4tcGxheWxpc3QgeyBtYXJnaW4tcmlnaHQ6IDE1cHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cbi5idG4tbW92aWV2aWV3IHsgbWFyZ2luLWJvdHRvbTogMTAwcHg7IH1cblxubWF0LXRvb2xiYXIgc3BhbiB7IG1hcmdpbjogMCA1cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\">\n  <div class=\"col picture\">\n    <img src=\"{{pictureUrl + movie.poster_path}}\" alt=\"Picture of movie\">\n  </div>\n  <div class=\"col info\">\n    <h1>{{movie.title}}</h1>\n    <h2>Date de sortie : {{movie.release_date | date: 'dd/MM/yyyy'}}</h2>\n    <p>Budget : {{movie.budget | currency: 'EUR': true | frCurrency}}</p>\n    <p>Note : {{avgNote}}/5</p>\n    <p style=\"font-weight: bold\">Notez ce film : <mat-slider thumbLabel min=\"0\" max=\"5\" step=\"1\" (change)=\"note($event)\"></mat-slider></p>\n\n    <h3>Synopsis</h3>\n    <p>{{movie.overview}}</p>\n\n    <mat-toolbar>\n      <span *ngFor=\"let genre of movie.genres; last as isLast\">\n        {{genre.name}} <span *ngIf=\"!isLast\">/</span>\n      </span>\n    </mat-toolbar>\n\n    <button class=\"btn-playlist\" color=\"primary\" mat-raised-button (click)=\"addTo('playlist')\">Film à voir ! <mat-icon>favorite</mat-icon></button>\n    <button class=\"btn-movieview\" color=\"primary\" mat-raised-button (click)=\"addTo('movieviews')\">Film vue ! <mat-icon>add</mat-icon></button>\n  </div>\n\n  <app-comment></app-comment>\n</div>\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _note_note_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../note/note.service */ "./src/app/note/note.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");








var MovieComponent = /** @class */ (function () {
    function MovieComponent(movieService, noteService, userService, snackBar, route) {
        this.movieService = movieService;
        this.noteService = noteService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.route = route;
        this.pictureUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pictureUrl;
        this.avgNote = 0;
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.getMovie();
    };
    MovieComponent.prototype.getMovie = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.movieService.get(id)
            .subscribe(function (movie) {
            _this.movie = movie;
            _this.noteService.getByMovieId(id)
                .subscribe(function (notes) {
                _this.notes = notes;
                _this.average();
            });
        });
    };
    MovieComponent.prototype.average = function () {
        var sum = 0;
        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
            var note = _a[_i];
            sum = sum + +note.note;
        }
        this.avgNote = (this.notes.length > 0) ? (sum / this.notes.length) : 0;
    };
    MovieComponent.prototype.note = function (e) {
        var _this = this;
        this.noteService.add(this.movie.id, e.value)
            .subscribe(function (note) {
            _this.snackBar.open('Note enregistrée !', 'Ok !', {
                duration: 5000
            });
            _this.notes.push(note);
            _this.average();
        });
    };
    MovieComponent.prototype.addTo = function (type) {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            this.userService.addTo(this.movie.id, type)
                .subscribe(function (res) {
                var message = '';
                if (res === undefined) {
                    message = 'Film déjà enregistré dans la liste !';
                }
                else {
                    message = 'Film enregistré dans la liste !';
                }
                _this.snackBar.open(message, 'Ok !', {
                    duration: 5000
                });
            });
        }
        else {
            this.snackBar.open('Vous devez être connecté pour ajouter un film à votre liste.', 'Ok !', {
                duration: 5000
            });
        }
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _note_note_service__WEBPACK_IMPORTED_MODULE_5__["NoteService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie.service.ts":
/*!****************************************!*\
  !*** ./src/app/movie/movie.service.ts ***!
  \****************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.queryParams = '?api_key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiTMDBToken + '&language=fr-FR';
    }
    MovieService.prototype.getBySearch = function (search) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiTMDBUrl + '/search/movie' + this.queryParams + '&query=' + search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched movies'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError([])));
    };
    MovieService.prototype.get = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiTMDBUrl + '/movie/' + id + this.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched movie'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    MovieService.prototype.handleError = function (result) {
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-card {\n  float: left;\n  margin: 20px;\n  width: 25%;\n}\n\n@media screen and (max-width: 1300px){\n  .movie-card { width: 40%; }\n}\n\n@media screen and (max-width: 1020px) {\n  .movie-card { width: calc(100% - 40px); }\n}\n\n.movie-card mat-card-content {\n  height: 100px;\n  overflow-y: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjLFVBQVUsRUFBRTtBQUM1Qjs7QUFFQTtFQUNFLGNBQWMsd0JBQXdCLEVBQUU7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLWNhcmQge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpe1xuICAubW92aWUtY2FyZCB7IHdpZHRoOiA0MCU7IH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XG4gIC5tb3ZpZS1jYXJkIHsgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpOyB9XG59XG5cbi5tb3ZpZS1jYXJkIG1hdC1jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\" style=\"text-align: center\">\n  <mat-form-field style=\"margin: 5px\">\n    <input matInput type=\"text\" placeholder=\"Recherche...\" [(ngModel)]=\"search\">\n  </mat-form-field>\n  <button mat-flat-button color=\"primary\" (click)=\"getMovies(search)\">\n    <mat-icon>search</mat-icon>\n  </button>\n</div>\n\n<mat-list-item *ngFor=\"let movie of movies\">\n  <mat-card class=\"movie-card\">\n    <mat-card-header routerLink=\"/film/{{movie.id}}\">\n      <mat-card-title>{{movie.title}}</mat-card-title>\n      <mat-card-subtitle>\n            <span *ngFor=\"let genre of movie.genres; last as isLast\">\n              {{genre.name}} <span *ngIf=\"!isLast\">/</span>\n            </span>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{pictureUrl + movie.poster_path}}\" alt=\"Picture of movies\">\n    <mat-card-content>\n      <p>\n        {{movie.overview}}\n      </p>\n    </mat-card-content>\n  </mat-card>\n</mat-list-item>\n\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie/movie.service */ "./src/app/movie/movie.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService) {
        this.movieService = movieService;
        this.pictureUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pictureUrl;
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent.prototype.getMovies = function (search) {
        var _this = this;
        this.movieService.getBySearch(search)
            .subscribe(function (res) {
            _this.movies = res.results;
        });
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/note/note.service.ts":
/*!**************************************!*\
  !*** ./src/app/note/note.service.ts ***!
  \**************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var NoteService = /** @class */ (function () {
    function NoteService(http) {
        this.http = http;
        this.ref = '/notes';
    }
    NoteService.prototype.getLast = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.ref + '/last')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched notes'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError([])));
    };
    NoteService.prototype.getByMovieId = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.ref + '/movies/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched notes by movie id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError([])));
    };
    NoteService.prototype.add = function (id, note) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Auth-Token': localStorage.getItem('token').toString()
            })
        };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('id_movie', id.toString())
            .set('note', note.toString());
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/users/' + localStorage.getItem('user_id') + this.ref, body.toString(), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('added note'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    NoteService.prototype.handleError = function (result) {
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    NoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.clear { visibility: hidden; clear: both; }\nmat-card-content > div { outline: none; cursor: pointer; }\nmat-card-content img { width: 30px; float: right; }\nmat-card-content p { float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxrQkFBa0IsRUFBRSxXQUFXLEVBQUU7QUFDNUMseUJBQXlCLGFBQWEsRUFBRSxlQUFlLEVBQUU7QUFDekQsdUJBQXVCLFdBQVcsRUFBRSxZQUFZLEVBQUU7QUFDbEQscUJBQXFCLFdBQVcsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIuY2xlYXIgeyB2aXNpYmlsaXR5OiBoaWRkZW47IGNsZWFyOiBib3RoOyB9XG5tYXQtY2FyZC1jb250ZW50ID4gZGl2IHsgb3V0bGluZTogbm9uZTsgY3Vyc29yOiBwb2ludGVyOyB9XG5tYXQtY2FyZC1jb250ZW50IGltZyB7IHdpZHRoOiAzMHB4OyBmbG9hdDogcmlnaHQ7IH1cbm1hdC1jYXJkLWNvbnRlbnQgcCB7IGZsb2F0OiBsZWZ0OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-icon matCardAvatar>grade</mat-icon>\n    <mat-card-title>Dernières notes</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n\n    <div *ngFor=\"let note of notes\" routerLink=\"/film/{{note.movie.id}}\">\n      <img src=\"{{pictureUrl + note.movie.poster_path}}\" alt=\"Picture of movie\">\n      <p>\n        {{note.movie.title}} <br> Note : {{note.note}} / 5\n      </p>\n\n      <hr class=\"clear\">\n    </div>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _note_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../note/note.service */ "./src/app/note/note.service.ts");
/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie/movie.service */ "./src/app/movie/movie.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(noteService, movieService) {
        this.noteService = noteService;
        this.movieService = movieService;
        this.notes = [];
        this.pictureUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pictureUrl;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getLastNotes();
    };
    SidebarComponent.prototype.getLastNotes = function () {
        var _this = this;
        this.noteService.getLast()
            .subscribe(function (notes) {
            for (var _i = 0, notes_1 = notes; _i < notes_1.length; _i++) {
                var note = notes_1[_i];
                _this.getMovie(note);
            }
        });
    };
    SidebarComponent.prototype.getMovie = function (note) {
        var _this = this;
        this.movieService.get(note.idMovie)
            .subscribe(function (movie) {
            note.movie = movie;
            _this.notes.push(note);
        });
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_note_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"],
            _movie_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.ref = '/users';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + this.ref)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError([])));
    };
    UserService.prototype.get = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + this.ref + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched user'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    UserService.prototype.addTo = function (id, type) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Auth-Token': localStorage.getItem('token').toString()
            })
        };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_movie', id.toString());
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + this.ref + '/' + localStorage.getItem('user_id') + '/' + type, body.toString(), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('added' + type); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    UserService.prototype.add = function (email, username, password) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email)
            .set('username', username)
            .set('password', password);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + this.ref, body.toString(), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('added user'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    UserService.prototype.check = function (email, password) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email)
            .set('password', password);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/auth', body.toString(), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('authentication'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (result) {
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
    production: false,
    apiUrl: 'http://nas.adrien-martineau.com/MyMovies/back/public',
    apiTMDBUrl: 'https://api.themoviedb.org/3',
    apiTMDBToken: '9d04b31b87c256519b2f069b87c2b7b1',
    pictureUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adrien/Projects/MyMovies/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map