(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: top; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.list-group-item .messageCard {\n    color:black;\n    background-color: rgb(255, 98, 98);\n    border-top-color: rgb(168, 168, 168);\n  border-right-color: rgb(168, 168, 168);\n  border-bottom-color: rgb(168, 168, 168);\n  border-left-color: rgb(168, 168, 168);\n  border-radius: 0 20 20 20;\n  padding: 10 10 10 10;\n    /* padding-top: 5px;   \n    padding-bottom: 5px;    */\n    margin-top:5px;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Bureau 401 Message system\" class=\"action-bar\">\n</ActionBar>\n\n<GridLayout>\n    <ScrollView class=\"page\">\n        <StackLayout class=\"home-panel\">\n            <!--Add your page content here-->\n           \n            <StackLayout *ngFor=\"let message of messageList\" class=\"list-group-item\">\n                <label class=\"messageCard\" [textWrap] = \"true\" [text]=\"message\"></label>\n            </StackLayout>\n\n        </StackLayout>\n    </ScrollView>\n</GridLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./home/service.ts");
/* harmony import */ var nativescript_vibrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-vibrate/vibrate.js");
/* harmony import */ var nativescript_vibrate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_vibrate__WEBPACK_IMPORTED_MODULE_2__);


var sound = __webpack_require__("../node_modules/nativescript-sound/sound.js");

var HomeComponent = /** @class */ (function () {
    function HomeComponent(messageService) {
        this.messageService = messageService;
        this.messageList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vibrator = new nativescript_vibrate__WEBPACK_IMPORTED_MODULE_2__["Vibrate"]();
        // this.tada = sound.create("~/sounds/Ta-da-sound.mp3"); // preload the audio file
        setInterval(function () {
            _this.getMessage();
        }, 2000);
    };
    HomeComponent.prototype.getMessage = function () {
        var _this = this;
        this.messageService.getMessage().subscribe(function (data) {
            if (data['ADMIN.TO.USER'] != _this.message) {
                //   this.tada.play();
                _this.vibrator.vibrate([1000, 300, 500, 2000]);
                _this.message = data['ADMIN.TO.USER'];
                _this.messageList.push(_this.message);
            }
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-calendar/angular/calendar-directives.js");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-chart/angular/chart-directives.js");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-dataform/angular/dataform-directives.js");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-ui-autocomplete/angular/autocomplete-directives.js");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-gauge/angular/gauges-directives.js");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

;
    if (false) {}


/***/ }),

/***/ "./home/service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessage = function () {
        return this.http.get('http://10.3.141.1:1880/getCodes?codes=ADMIN.TO.USER');
        // return this.http.get('http://batban.fred.sensetecnic.com/api/public/bureau401/getMessage');
    };
    MessageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsOEJBQThCLDBCQUEwQixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1DQUFtQyxrQkFBa0IseUNBQXlDLDJDQUEyQywyQ0FBMkMsNENBQTRDLDBDQUEwQyw4QkFBOEIseUJBQXlCLDBCQUEwQiw2QkFBNkIsMkJBQTJCLEdBQUcsQzs7Ozs7OztBQ0F6aUIsaWhCOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNQO0FBQzNDLElBQUksS0FBSyxHQUFHLG1CQUFPLENBQUMsNkNBQW9CLENBQUMsQ0FBQztBQUNLO0FBUS9DO0lBT0ksdUJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUYzQyxnQkFBVyxHQUFrQixFQUFFLENBQUM7SUFJdkMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw0REFBTyxFQUFFLENBQUM7UUFDL0Isa0ZBQWtGO1FBQ2pGLFdBQVcsQ0FBRTtZQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBSTtZQUMzQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUMxQyxzQkFBc0I7Z0JBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2QztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQzs7Z0JBdEJtQyx1REFBYzs7SUFQekMsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDO3lDQVFzQyx1REFBYztPQVB6QyxhQUFhLENBOEJ6QjtJQUFELG9CQUFDO0NBQUE7QUE5QnlCOzs7Ozs7Ozs7QUNYMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBQ2E7QUFDSjtBQUNBO0FBQ047QUFDTTtBQUNnQjtBQUN0QjtBQUNMO0FBRVg7QUFDVDtBQXNCakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQXBCdEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpR0FBOEI7Z0JBQzlCLDZGQUE0QjtnQkFDNUIsNkZBQTRCO2dCQUM1Qix1RkFBeUI7Z0JBQ3pCLDZGQUE0QjtnQkFDNUIsNkdBQXdDO2dCQUN4Qyx1RkFBeUI7Z0JBQ3pCLG9GQUF3QjtnQkFDeEIsdUVBQWlCO2dCQUNqQixrRkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOERBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7Ozs7QUNsQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ29CO0FBTS9EO0lBR0ksd0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFHcEMsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7UUFDNUUsOEZBQThGO0lBQ2xHLENBQUM7O2dCQVJ5QiwrREFBVTs7SUFIM0IsY0FBYztRQUgxQixnRUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzt5Q0FJNEIsK0RBQVU7T0FIM0IsY0FBYyxDQVkxQjtJQUFELHFCQUFDO0NBQUE7QUFaMEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5saXN0LWdyb3VwLWl0ZW0gLm1lc3NhZ2VDYXJkIHtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk4LCA5OCk7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjAgMjAgMjA7XFxuICBwYWRkaW5nOiAxMCAxMCAxMCAxMDtcXG4gICAgLyogcGFkZGluZy10b3A6IDVweDsgICBcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDsgICAgKi9cXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1cmVhdSA0MDEgTWVzc2FnZSBzeXN0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgICAgICA8IS0tQWRkIHlvdXIgcGFnZSBjb250ZW50IGhlcmUtLT5cXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VMaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJtZXNzYWdlQ2FyZFxcXCIgW3RleHRXcmFwXSA9IFxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIm1lc3NhZ2VcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG52YXIgc291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kXCIpO1xuaW1wb3J0IHsgVmlicmF0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWJyYXRlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG1lc3NhZ2U7XG4gICAgcHJpdmF0ZSB2aWJyYXRvcjtcbiAgICBwcml2YXRlIHRhZGE7XG4gICAgcHVibGljIG1lc3NhZ2VMaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlicmF0b3IgPSBuZXcgVmlicmF0ZSgpO1xuICAgICAgIC8vIHRoaXMudGFkYSA9IHNvdW5kLmNyZWF0ZShcIn4vc291bmRzL1RhLWRhLXNvdW5kLm1wM1wiKTsgLy8gcHJlbG9hZCB0aGUgYXVkaW8gZmlsZVxuICAgICAgICBzZXRJbnRlcnZhbCggKCk9PntcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVzc2FnZSgpOyAgICAgICAgICAgIFxuICAgICAgICB9LDIwMDApO1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZSgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhWydBRE1JTi5UTy5VU0VSJ10gIT0gdGhpcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgLy8gICB0aGlzLnRhZGEucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlicmF0b3IudmlicmF0ZShbMTAwMCwgMzAwLCA1MDAsIDIwMDBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhWydBRE1JTi5UTy5VU0VSJ107ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUxpc3QucHVzaCh0aGlzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuXHJcbiAgICBtZXNzYWdlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovLzEwLjMuMTQxLjE6MTg4MC9nZXRDb2Rlcz9jb2Rlcz1BRE1JTi5UTy5VU0VSJyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9iYXRiYW4uZnJlZC5zZW5zZXRlY25pYy5jb20vYXBpL3B1YmxpYy9idXJlYXU0MDEvZ2V0TWVzc2FnZScpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==