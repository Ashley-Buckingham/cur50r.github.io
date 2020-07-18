(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-projects></app-projects> -->\n    <!--Content-->\n    <!-- <app-chatbot></app-chatbot> -->\n    <router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatbot/chatbot.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatbot/chatbot.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"open-button\" (click)=\"show()\">Chat</button>\n<div class=\"chat-popup\" id=\"myFormm\">\n  <!-- Required for chat to be displayed-->\n  <nb-layout>\n    <nb-layout-column> </nb-layout-column>\n  </nb-layout>\n</div>\n\n<div class=\"chat-popup\" id=\"myForm\">\n  <button nbButton ghost status=\"danger\" (click)=\"hide()\">X</button>\n\n  <nb-chat title=\"Chat Bot\" size=\"small\">\n    <nb-chat-message\n      *ngFor=\"let msg of messages\"\n      [type]=\"msg.type\"\n      [message]=\"msg.text\"\n      [reply]=\"msg.reply\"\n      [date]=\"msg.date\"\n      [avatar]=\"msg.user.avatar\"\n      [sender]=\"msg.user.name\"\n    >\n    </nb-chat-message>\n<!--\n    [type]=\"msg.type\"\n    [message]=\"msg.text\"\n    [reply]=\"msg.reply\"\n    [sender]=\"msg.user.name\"\n    [date]=\"msg.date\"\n    [files]=\"msg.files\"\n    [quote]=\"msg.quote\"\n    [latitude]=\"msg.latitude\"\n    [longitude]=\"msg.longitude\"\n    [avatar]=\"msg.user.avatar\"\n-->\n\n    <nb-chat-message *ngIf=\"loading\"\n    type=\"text\"\n    avatar=\"/assets/images/robot.jpg\"\n    message=\"...\">\n</nb-chat-message>\n\n\n    <nb-chat-form (send)=\"handleUserMessage($event)\" [dropFiles]=\"true\">\n    </nb-chat-form>\n  </nb-chat>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy/privacy.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy/privacy.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Privacy and Terms - Alexa</h1>\n\nThis privacy policy describes how Ashley Buckingham (us, we, our) privacy and your data. Before using any of our Alexa Skills (“our skills”), please read this policy and our Alexa Skills Terms of Use, as well as the Alexa Terms of Use and the Privacy Policies by the Amazon Digital Services LLC (with its affiliates, “Amazon”).\nRegarding Amazon, “Alexa” means their Alexa Voice Service which includes third party services (like our skills) and other related Software.\nIf you use one of our skills you fully agree to this privacy policy.\n\n\n<h2>General</h2>\nWhen you use our skills you have to talk to Alexa. This voice input is sent to Amazon and us where we use it to understand what our skill should do for you. This is absolutely necessary for our service to give you an appropriate answer.\n\n<h2>Data</h2>\nWe never collect or share personal data with our skills.\nTo improve our services we analyze automatically how often utterances are spoken and other analytics. This is done automatically by Amazon in the Amazon Developer Portal.\n\n\n<h2>Changes</h2>\nOur skills or parts of it may change or be updated at any time. Further, this Privacy Policy might change. You can find a link to this policy on the description page of the skill in the Alexa App or in the Alexa Store. Your continued use of our skill after changes of the Privacy Policy or the skill itself will be seen as your acceptance of both.");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor = \"rgb(0,0,0)\" size = \"medium\" color = \"#fff\" type = \"pacman\" [fullScreen] = \"true\"><p style=\"color: white\" > Loading Portfolio... </p></ngx-spinner>\n  \n  <div *ngIf=\"isLoaded\">\n<section id=\"intro\" style=\"background-color: #42424f\">\n        <div class=\"intro-container wow fadeIn\" style=\"visibility: visible; animation-name: fadeIn;\">\n          <h1 class=\"mb-4 pb-0\">Ashley Buckingham</h1>\n          <p class=\"mb-4 pb-0\">Node.js Developer who enjoys creating innovative applications.</p>\n          <!-- Action buttons-->\n          <!--<a href=\"https://www.youtube.com/watch?v=jDDaplaOz7Q\" class=\"venobox play-btn mb-4 vbox-item\" data-vbtype=\"video\" data-autoplay=\"true\"></a>-->\n\n\n          <ul class=\"icons\">\n            <li><a href=\"https://cur50r.github.io/files/Ashley_Buckingham.pdf\" class=\"fas fa-file-pdf\"></a></li>\n            <li><a href=\"https://www.linkedin.com/in/ashleybuckingham/\" class=\"fab fa-linkedin-in\"></a></li>\n            <li><a href=\"https://github.com/Cur50r\" class=\"fab fa-github\"></a></li>\n            <li><a href=\"mailto:ashleyjgbuckingham@googlemail.com\" class=\"fas fa-at\"></a></li>\n        </ul>\n\n          <a href=\"#projects\" class=\"about-btn scrollto\">See Projects</a>\n        </div>\n\n        <video autoplay=\"\" loop=\"\"><source src=\"/assets/images/banner.mp4\" type=\"video/mp4\"><source src=\"/assets/images/banner.webm\" type=\"video/webm\"></video>\n    </section>\n\n\n    <main id=\"main\">\n\n        <!--==========================\n          Projects Section\n        ============================-->\n\n\n\n        <section id=\"projects\" class=\"blog-mf sect-pt4 route\">\n            <div class=\"container\">\n\n\n        <!--==========================\n          Resume\n        ============================-->\n\n\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"card card-blog h-100\">\n                    <div class=\"card-img\">\n                      <img src=\"/assets/images/resume.jpg\" alt=\"\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"card-category-box\">\n                        <div class=\"card-category\">\n                        </div>\n                      </div>\n                      <h3 class=\"card-title\">\n                          My Resume\n                      </h3>\n                      <p class=\"card-description\">\n                        Resume is available to download as a PDF or Word File.\n                      </p>\n                    </div>\n                    <div class=\"card-footer\">\n                        \n                            <a href=\"https://cur50r.github.io/files/Ashley_Buckingham.pdf\" target=\"_blank\" id=\"code\">\n                                <button type=\"button\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">PDF</button>\n                            </a>\n                            <a href=\"https://cur50r.github.io/files//Ashley_Buckingham.docx\" target=\"_blank\" id=\"code\">\n                            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Doc</button>\n                        </a>\n                    </div>\n                  </div>\n                </div>\n\n\n        <!--==========================\n          Iphone App\n        ============================-->\n\n                <div class=\"col-md-4\">\n                  <div class=\"card card-blog h-100\">\n                    <div class=\"card-img\">\n                      <a href=\"blog-single.html\"><img src=\"/assets/images/iphone.jpg\" alt=\"\" class=\"img-fluid\"></a>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"card-category-box\">\n                        <div class=\"card-category\">\n                                <img src=\"/assets/icons/swift.png\" alt=\"Swift\" height=\"50px\" width=\"50px\">\n                        </div>\n                      </div>\n                      <h3 class=\"card-title\">iPhone App: Implant Scanner</h3>\n                      <p class=\"card-description\">\n                            An iPhone app created for Dangerous Things that interfaces with NFC using the latest IOS 13 SDK.\n                      </p>\n                    </div>\n                    <div class=\"card-footer\">\n\n                            <a href=\"https://cur50r.github.io/implantscanner/index.html\" target=\"_blank\" id=\"code\">\n                                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                            </a>\n                    </div>\n                  </div>\n                </div>\n\n        <!--==========================\n          Android App\n        ============================-->\n                <div class=\"col-md-4\">\n                  <div class=\"card card-blog h-100\">\n                    <div class=\"card-img\">\n                      <img src=\"/assets/images/andriod.jpg\" alt=\"\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"card-category-box\">\n                        <div class=\"card-category\">\n                                <img src=\"/assets/icons/Android_Studio.png\" alt=\"Swift\" height=\"50px\" width=\"50px\">\n                        </div>\n                      </div>\n                      <h3 class=\"card-title\">Android App: Dangerous Things Support Tool</h3>\n                      <p class=\"card-description\">\n                            An Android app created for Dangerous Things that interfaces with NFC. \n                            5 stars and 1000+ Downloads\n                      </p>\n                    </div>\n                    <div class=\"card-footer\">\n                            <a href=\"https://play.google.com/store/apps/details?id=com.dangerousthings.support&hl=en_GB\" target=\"_blank\" id=\"code\">\n                                <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                            </a>\n                    </div>\n                  </div>\n                </div>\n\n\n\n        <!--==========================\n          Hire Me Skill\n        ============================-->\n        <div class=\"col-md-4\">\n                <div class=\"card card-blog h-100\">\n                  <div class=\"card-img\">\n                    <img src=\"/assets/images/alexa.jpg\" alt=\"\" class=\"img-fluid\">\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"card-category-box\">\n                      <div class=\"card-category\">\n                              <img src=\"/assets/icons/node.svg\" alt=\"Swift\" height=\"50px\" width=\"50px\">\n                              <img src=\"/assets/icons/alexa.svg\" alt=\"Swift\" height=\"50px\" width=\"50px\">\n                              <img src=\"/assets/icons/lambda.svg\" alt=\"Swift\" height=\"50px\" width=\"50px\">\n\n                      </div>\n                    </div>\n                    <h3 class=\"card-title\">Hire me: Alexa Skill</h3>\n                    <p class=\"card-description\">\n                      The worlds first Alexa skill resume. An Alexa skill where you can ask me to talk about different parts of my resume.\n                    </p>\n                  </div>\n                  <div class=\"card-footer\">\n                    <a href=\"https://www.amazon.co.uk/dp/B087ZN6M9Z\" target=\"_blank\" id=\"code\">\n                      <button type=\"button\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                    </a>\n                    <a href=\"https://github.com/Cur50r/alexa-interview\" target=\"_blank\" id=\"code\">\n                        <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Code</button>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              \n              <!--==========================\n                Resume\n                ============================-->\n                \n                \n                <div class=\"col-md-4\">\n                  <div class=\"card card-blog h-100\">\n                    <div class=\"card-img\">\n                      <img src=\"/assets/images/stock-searcher.jpg\" alt=\"\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"card-category-box\">\n                        <div class=\"card-category\">\n                        </div>\n                      </div>\n                      <h3 class=\"card-title\">\n                        Stock Searcher\n                      </h3>\n                      <p class=\"card-description\">\n                        Search for royalty free images and videos from around the web.\n                      </p>\n                    </div>\n                    <div class=\"card-footer\">\n                      \n                      <a href=\"https://stock.ashleybuckingham.co.uk\" target=\"_blank\" id=\"code\">\n                        <button type=\"button\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                      </a>\n                      <a href=\"https://github.com/Cur50r/stock-searcher\" target=\"_blank\" id=\"code\">\n                        <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Code</button>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n                \n                <!--==========================\n                  End\n                  ============================-->\n                  \n                  <!--==========================\n                    Home-More\n                    ============================-->\n                    \n                    \n                    <div class=\"col-md-4\">\n                      <div class=\"card card-blog h-100\">\n                        <div class=\"card-img\">\n                          <img src=\"/assets/images/home-more.jpg\" alt=\"\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"card-body\">\n                          <div class=\"card-category-box\">\n                            <div class=\"card-category\">\n                            </div>\n                          </div>\n                          <h3 class=\"card-title\">\n                            Home More\n                          </h3>\n                          <p class=\"card-description\">\n                            A proof of concept to allow donations to the homeless in a cashless world\n                          </p>\n                        </div>\n                        <div class=\"card-footer\">\n                          \n                          <!-- <a href=\"https://home-more.ashleybuckingham.co.uk\" target=\"_blank\" id=\"code\">\n                            <button type=\"button\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                          </a> -->\n                          <a href=\"https://github.com/Cur50r/home-more\" target=\"_blank\" id=\"code\">\n                            <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Code</button>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                    \n                    <!--==========================\n                      End\n                      ============================-->\n                      \n                              <!--==========================\n                                Expedia Price Checker\n                              ============================-->\n                              <div class=\"col-md-4\">\n                                      <div class=\"card card-blog h-100\">\n                                        <div class=\"card-img\">\n                                          <img src=\"/assets/images/hotel.jpg\" alt=\"\" class=\"img-fluid\">\n                                        </div>\n                                        <div class=\"card-body\">\n                                          <div class=\"card-category-box\">\n                                            <div class=\"card-category\">\n                                                    <img src=\"/assets/icons/node.svg\" alt=\"Swift\" height=\"50px\" width=\"50px\">\n                                                    <img src=\"/assets/icons/puppeteer.png\" alt=\"Swift\" height=\"50px\" width=\"50px\">\n                      \n                                            </div>\n                                          </div>\n                                          <h3 class=\"card-title\">Expedia Price Notifier</h3>\n                                          <p class=\"card-description\">\n                                                  A Puppeteer app that emails the user if the price of a hotel room has dropped below a certain price.\n                                          </p>\n                                        </div>\n                                        <div class=\"card-footer\">\n                      \n                                              \n                      \n                                              <a href=\"https://github.com/Cur50r/Expedia_holiday_scraper\" target=\"_blank\" id=\"code\">\n                                                  <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Code</button>\n                                              </a>\n                                        </div>\n                                      </div>\n                                    </div>\n\n        <!--==========================\n          myvegas\n        ============================-->\n\n\n        <div class=\"col-md-4\">\n          <div class=\"card card-blog h-100\">\n            <div class=\"card-img\">\n              <img src=\"/assets/images/vegas.jpg\" alt=\"\" class=\"img-fluid\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-category-box\">\n                <div class=\"card-category\">\n                </div>\n              </div>\n              <h3 class=\"card-title\">\n                  MyVegas\n              </h3>\n              <p class=\"card-description\">\n                A chip reward scraper for the MyVegas Rewards App\n              </p>\n            </div>\n            <div class=\"card-footer\">\n                \n                    <!-- <a href=\"https://home-more.ashleybuckingham.co.uk\" target=\"_blank\" id=\"code\">\n                        <button type=\"button\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                    </a> -->\n                    <a href=\"https://github.com/Cur50r/myvegas\" target=\"_blank\" id=\"code\">\n                      <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Code</button>\n                </a>\n            </div>\n          </div>\n        </div>\n\n      <!--==========================\n        End\n      ============================-->\n\n        <!--==========================\n          Vivokey Wordpress plugin\n        ============================-->\n\n\n        <div class=\"col-md-4\">\n          <div class=\"card card-blog h-100\">\n            <div class=\"card-img\">\n              <img src=\"/assets/images/vivokey.jpg\" alt=\"\" class=\"img-fluid\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-category-box\">\n                <div class=\"card-category\">\n                </div>\n              </div>\n              <h3 class=\"card-title\">\n                  VivoKey OpenID\n              </h3>\n              <p class=\"card-description\">\n                A wordpress plugin that uses openID connect.\n              </p>\n            </div>\n            <div class=\"card-footer\">\n                \n                    <a href=\"https://wordpress.org/plugins/vivokey-openid-connect/\" target=\"_blank\" id=\"code\">\n                        <button type=\"button\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                    </a>\n                    <!-- <a href=\"https://github.com/Cur50r/myvegas\" target=\"_blank\" id=\"code\">\n                      <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Code</button>\n                </a> -->\n            </div>\n          </div>\n        </div>\n\n      <!--==========================\n        End\n      ============================-->\n\n\n\n        <!--==========================\n          moriarty\n        ============================-->\n\n\n        <div class=\"col-md-4\">\n          <div class=\"card card-blog h-100\">\n            <div class=\"card-img\">\n              <img src=\"/assets/images/moriarty.jpg\" alt=\"\" class=\"img-fluid\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-category-box\">\n                <div class=\"card-category\">\n                </div>\n              </div>\n              <h3 class=\"card-title\">\n                Moriarty Username Searcher\n              </h3>\n              <p class=\"card-description\">\n                A frontend for the sherlock package: Hunt down social media accounts by username across social networks\n              </p>\n            </div>\n            <div class=\"card-footer\">\n                    <a href=\"https://moriarty.ashleybuckingham.co.uk\" target=\"_blank\" id=\"code\">\n                        <button type=\"button\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">Demo</button>\n                    </a>\n                    <!-- <a href=\"https://github.com/Cur50r/myvegas\" target=\"_blank\" id=\"code\">\n                      <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Code</button>\n                </a> -->\n            </div>\n          </div>\n        </div>\n\n      <!--==========================\n        End\n      ============================-->\n              </div>\n\n\n        \n            </div>\n          </section>\n\n\n\n\n\n\n\n\n        <!--==========================\n          Contact Section\n        ============================-->\n        <footer id=\"footer\">\n            <div class=\"inner\">\n                <h2>Contact Me</h2>\n                <p>Thank you for viewing this portfolio. Please reach out using one of the below social links. </p>\n\n                <ul class=\"icons\">\n                    <li><a href=\"https://cur50r.github.io/files/Ashley_Buckingham.pdf\" class=\"fas fa-file-pdf\"></a></li>\n                    <li><a href=\"https://www.linkedin.com/in/ashleybuckingham/\" class=\"fab fa-linkedin-in\"></a></li>\n                    <li><a href=\"https://github.com/Cur50r\" class=\"fab fa-github\"></a></li>\n                    <li><a href=\"mailto:ashleyjgbuckingham@googlemail.com\" class=\"fas fa-at\"></a></li>\n                </ul>\n            </div>\n        </footer>\n\n    </main>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/privacy/privacy.component */ "./src/app/components/privacy/privacy.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");





const routes = [
    { path: 'privacy', component: _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"] },
    { path: '**', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chatbot/chatbot.component */ "./src/app/components/chatbot/chatbot.component.ts");
/* harmony import */ var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/privacy/privacy.component */ "./src/app/components/privacy/privacy.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__["ChatbotComponent"],
            _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
            _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbThemeModule"].forRoot({ name: 'default' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbChatModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSpinnerModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The popup chat - hidden by default */\n.chat-popup {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    right: 15px;\n    z-index: 9;\n    width: 600px\n  }\n/* On screens that are 992px or less, set the background color to blue */\n@media screen and (max-width: 500px) {\n    .chat-popup {\n        width: 300px\n    }\n  }\n/* Button used to open the chat form - fixed at the bottom of the page */\n.open-button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    right: 28px;\n    width: 280px;\n  }\n.close-button {\n    background-color: #fff;\n    color: #222b45;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0Ym90L2NoYXRib3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkM7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWO0VBQ0Y7QUFFQSx3RUFBd0U7QUFDMUU7SUFDSTtRQUNJO0lBQ0o7RUFDRjtBQUVGLHdFQUF3RTtBQUN4RTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7RUFDZDtBQUdBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXRib3QvY2hhdGJvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIHBvcHVwIGNoYXQgLSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuLmNoYXQtcG9wdXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMTVweDtcbiAgICB6LWluZGV4OiA5O1xuICAgIHdpZHRoOiA2MDBweFxuICB9XG5cbiAgLyogT24gc2NyZWVucyB0aGF0IGFyZSA5OTJweCBvciBsZXNzLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmx1ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY2hhdC1wb3B1cCB7XG4gICAgICAgIHdpZHRoOiAzMDBweFxuICAgIH1cbiAgfVxuXG4vKiBCdXR0b24gdXNlZCB0byBvcGVuIHRoZSBjaGF0IGZvcm0gLSBmaXhlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXG4ub3Blbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyM3B4O1xuICAgIHJpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyODBweDtcbiAgfVxuXG5cbiAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzIyMmI0NTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const dialogflowURL = 'http://chatbotapi.ashleybuckingham.co.uk';
let ChatbotComponent = class ChatbotComponent {
    constructor(http) {
        this.http = http;
        this.messages = [];
        this.loading = false;
        // Random ID to maintain session with server
        this.sessionId = Math.random().toString(36).slice(-5);
    }
    ngOnInit() {
        this.addBotMessage('Welcome, I am Ashley bot 🤖, I was created by Ashley to look after his portfolio. How can I help you? ');
    }
    handleUserMessage(event) {
        console.log(event);
        const text = event.message;
        this.addUserMessage(text);
        this.loading = true;
        // Make the request 
        this.http.post(`${dialogflowURL}/message`, {
            "sessionId": this.sessionId,
            "message": text,
        })
            .subscribe(res => {
            const { fulfillmentText } = res;
            console.log(res[0].queryResult.fulfillmentText);
            this.addBotMessage(res[0].queryResult.fulfillmentText);
            this.loading = false;
        });
    }
    addUserMessage(text) {
        this.messages.push({
            text,
            sender: 'You',
            reply: true,
            date: new Date(),
            user: {
                name: 'Me',
                avatar: 'https://i.gifer.com/no.gif',
            },
        });
    }
    addBotMessage(text) {
        this.messages.push({
            text,
            sender: 'Bot',
            //avatar: '/assets/bot.jpeg',
            date: new Date(),
            user: {
                name: 'Bot',
                avatar: '/assets/images/robot.jpg',
            },
        });
    }
    hide() {
        let chatbox = document.getElementById('myForm');
        chatbox.style.display = 'none';
    }
    show() {
        let chatbox = document.getElementById('myForm');
        chatbox.style.display = 'block';
    }
};
ChatbotComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChatbotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatbot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatbot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatbot/chatbot.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatbot.component.css */ "./src/app/components/chatbot/chatbot.component.css")).default]
    })
], ChatbotComponent);



/***/ }),

/***/ "./src/app/components/privacy/privacy.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/privacy/privacy.component.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyComponent = class PrivacyComponent {
};
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/privacy/privacy.component.html")).default })
], PrivacyComponent);



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1024px) {\n    #intro {\n      background-attachment: fixed;\n    }\n  \n    #about {\n      background-attachment: fixed;\n    }\n  \n    #subscribe {\n      background-attachment: fixed;\n    }\n  }\n  \n  .card-category {\n      text-align: center;\n  }\n  \n  .col-md-4 {\n      padding-bottom: 10px;\n      padding-top: 10px;\n  \n  }\n  \n  .card {\n      background: #2C2C33;\n      text-overflow: ellipsis;\n  }\n  \n  .card p {\n      color: #fff;\n  }\n  \n  .card-footer button {\n      color: #fff;\n  }\n  \n  .card h3 {\n      color: #fff;\n  }\n  \n  #projects {\n  \n     background: #202024;\n      /*background: url(https://bootstrapmade.com/demo/themes/TheEvent/img/intro-bg.jpg) top center;*/\n  \n    }\n  \n  #intro {\n    width: 100%;\n    height: 100vh;\n    /*background: url(https://bootstrapmade.com/demo/themes/TheEvent/img/intro-bg.jpg) top center;*/\n    background-size: cover;\n    overflow: hidden;\n    position: relative;\n  }\n  \n  #intro:before {\n    content: \"\";\n    opacity: 0.45;\n    background: #42424f;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  #intro .intro-container {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    top: 90px;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    padding: 0 15px;\n  }\n  \n  #intro h1 {\n    color: #fff;\n    font-family: raleway, sans-serif;\n    font-size: 56px;\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  \n  #intro h1 span {\n    color: #f82249;\n  }\n  \n  #intro p {\n    color: #ebebeb;\n    font-weight: 700;\n    font-size: 20px;\n  }\n  \n  #intro .play-btn {\n    width: 94px;\n    height: 94px;\n    background: radial-gradient(#f82249 50%, rgba(101, 111, 150, 0.15) 52%);\n    border-radius: 50%;\n    display: block;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  #intro .play-btn::after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-40%) translateY(-50%);\n    width: 0;\n    height: 0;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    border-left: 15px solid #fff;\n    z-index: 100;\n    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  \n  #intro .play-btn:before {\n    content: \"\";\n    position: absolute;\n    width: 120px;\n    height: 120px;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n    -webkit-animation: pulsate-btn 2s;\n    animation: pulsate-btn 2s;\n    -webkit-animation-direction: forwards;\n    animation-direction: forwards;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-timing-function: steps;\n    animation-timing-function: steps;\n    opacity: 1;\n    border-radius: 50%;\n    border: 2px solid rgba(163, 163, 163, 0.4);\n    top: -15%;\n    left: -15%;\n    background: transparent;\n  }\n  \n  #intro .play-btn:hover::after {\n    border-left: 15px solid #f82249;\n    transform: scale(20);\n  }\n  \n  #intro .play-btn:hover::before {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-40%) translateY(-50%);\n    width: 0;\n    height: 0;\n    border: none;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    border-left: 15px solid #fff;\n    z-index: 200;\n    -webkit-animation: none;\n    animation: none;\n    border-radius: 0;\n  }\n  \n  #intro .about-btn {\n    font-family: raleway, sans-serif;\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: 1px;\n    display: inline-block;\n    padding: 12px 32px;\n    border-radius: 50px;\n    transition: 0.5s;\n    line-height: 1;\n    margin: 10px;\n    color: #fff;\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n    /* border:2px solid #f82249 */\n    border: solid 1px rgba(144, 144, 144, 0.25);\n  }\n  \n  #intro .about-btn:hover {\n    background: #202024;\n    /*background: #f82249;*/\n  }\n  \n  /* List */\n  \n  ol {\n    list-style: decimal;\n    margin: 0 0 2em 0;\n    padding-left: 1.25em;\n  }\n  \n  ol li {\n    padding-left: 0.25em;\n  }\n  \n  ul {\n    list-style: disc;\n    margin: 0 0 2em 0;\n    padding-left: 1em;\n  }\n  \n  ul li {\n    padding-left: 0.5em;\n  }\n  \n  ul.alt {\n    list-style: none;\n    padding-left: 0;\n  }\n  \n  ul.alt li {\n    border-top: solid 1px rgba(144, 144, 144, 0.25);\n    padding: 0.5em 0;\n  }\n  \n  ul.alt li:first-child {\n    border-top: 0;\n    padding-top: 0;\n  }\n  \n  ul.icons {\n    cursor: default;\n    list-style: none;\n    padding-left: 0;\n  }\n  \n  ul.icons li {\n    display: inline-block;\n    text-align: center;\n    padding-left: 0;\n    padding-right: 1em;\n  }\n  \n  ul.icons li a {\n    display: block;\n    color: white;\n    border-radius: 100%;\n    margin: 0;\n    padding: 0.5em;\n    border: solid 1px rgba(144, 144, 144, 0.25);\n    /* color: rgba(144, 144, 144, 0.25);*/\n  }\n  \n  ul.icons li a:before {\n    font-size: 1.5em;\n    display: block;\n    width: 1.5em;\n    height: 1.5em;\n    line-height: 1.5em;\n  }\n  \n  ul.icons li a:hover {\n    background-color: #202024;\n    text-decoration: none;\n    color: #fff;\n  }\n  \n  ul.icons li:last-child {\n    padding-right: 0;\n  }\n  \n  ul.actions {\n    cursor: default;\n    list-style: none;\n    padding-left: 0;\n  }\n  \n  ul.actions li {\n    display: inline-block;\n    padding: 0 1em 0 0;\n    vertical-align: middle;\n  }\n  \n  ul.actions li:last-child {\n    padding-right: 0;\n  }\n  \n  ul.actions.small li {\n    padding: 0 0.5em 0 0;\n  }\n  \n  ul.actions.vertical li {\n    display: block;\n    padding: 1em 0 0 0;\n  }\n  \n  ul.actions.vertical li:first-child {\n    padding-top: 0;\n  }\n  \n  ul.actions.vertical li > * {\n    margin-bottom: 0;\n  }\n  \n  ul.actions.vertical.small li {\n    padding: 0.5em 0 0 0;\n  }\n  \n  ul.actions.vertical.small li:first-child {\n    padding-top: 0;\n  }\n  \n  ul.actions.fit {\n    display: table;\n    margin-left: -1em;\n    padding: 0;\n    table-layout: fixed;\n    width: calc(100% + 1em);\n  }\n  \n  ul.actions.fit li {\n    display: table-cell;\n    padding: 0 0 0 1em;\n  }\n  \n  ul.actions.fit li > * {\n    margin-bottom: 0;\n  }\n  \n  ul.actions.fit.small {\n    margin-left: -0.5em;\n    width: calc(100% + 0.5em);\n  }\n  \n  ul.actions.fit.small li {\n    padding: 0 0 0 0.5em;\n  }\n  \n  @media screen and (max-width: 480px) {\n    ul.actions {\n      margin: 0 0 2em 0;\n    }\n  \n    ul.actions li {\n      padding: 1em 0 0 0;\n      display: block;\n      text-align: center;\n      width: 100%;\n    }\n  \n    ul.actions li:first-child {\n      padding-top: 0;\n    }\n  \n    ul.actions li > * {\n      width: 100%;\n      margin: 0 !important;\n    }\n  \n    ul.actions li > *.icon:before {\n      margin-left: -2em;\n    }\n  \n    ul.actions.small li {\n      padding: 0.5em 0 0 0;\n    }\n  \n    ul.actions.small li:first-child {\n      padding-top: 0;\n    }\n  }\n  \n  dl {\n    margin: 0 0 2em 0;\n  }\n  \n  dl dt {\n    display: block;\n    font-weight: 400;\n    margin: 0 0 1em 0;\n  }\n  \n  dl dd {\n    margin-left: 2em;\n  }\n  \n  /* Footer */\n  \n  #footer {\n    padding: 4em 0 2em 0;\n    background-color: #1b1b1f;\n    text-align: center;\n    color:#fff;\n  }\n  \n  #footer h2 {\n    color:#fff;\n  }\n  \n  #footer p {\n    color:#fff;\n  }\n  \n  #footer .inner {\n    width: 50%;\n    margin: 0 auto;\n  }\n  \n  @media screen and (max-width: 980px) {\n    #footer .inner {\n      width: 75%;\n    }\n  }\n  \n  @media screen and (max-width: 480px) {\n    #footer .inner {\n      width: 90%;\n    }\n  }\n  \n  #footer .copyright {\n      color: #fff;\n    font-size: 0.9em;\n    margin: 0 0 2em 0;\n    padding: 0;\n    text-align: center;\n  }\n  \n  @media screen and (max-width: 736px) {\n    #footer {\n      padding: 3em 0 1em 0;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7TUFDRSw0QkFBNEI7SUFDOUI7O0lBRUE7TUFDRSw0QkFBNEI7SUFDOUI7O0lBRUE7TUFDRSw0QkFBNEI7SUFDOUI7RUFDRjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLG9CQUFvQjtNQUNwQixpQkFBaUI7O0VBRXJCOztFQUVBO01BQ0ksbUJBQW1CO01BQ25CLHVCQUF1QjtFQUMzQjs7RUFFQTtNQUNJLFdBQVc7RUFDZjs7RUFFQTtNQUNJLFdBQVc7RUFDZjs7RUFFQTtNQUNJLFdBQVc7RUFDZjs7RUFFQTs7S0FFRyxtQkFBbUI7TUFDbEIsK0ZBQStGOztJQUVqRzs7RUFFRjtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsK0ZBQStGO0lBQy9GLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUlBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBR1IsYUFBYTtJQUdiLHVCQUF1QjtJQUd2QixtQkFBbUI7SUFJbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBRVIsNENBQTRDO0lBQzVDLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLDREQUE0RDtFQUM5RDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwrQkFBK0I7SUFFL0Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUVSLDRDQUE0QztJQUM1QyxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUEsU0FBUzs7RUFFVDtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLCtDQUErQztJQUMvQyxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxjQUFjO0lBQ2QsMkNBQTJDO0lBQzNDLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsV0FBVztNQUNYLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBLFdBQVc7O0VBRVg7SUFDRSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUVBO01BQ0ksV0FBVztJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFO01BQ0Usb0JBQW9CO0lBQ3RCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgI2ludHJvIHtcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgfVxuICBcbiAgICAjYWJvdXQge1xuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICB9XG4gIFxuICAgICNzdWJzY3JpYmUge1xuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJkLWNhdGVnb3J5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNvbC1tZC00IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMkMyQzMzO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgXG4gIC5jYXJkIHAge1xuICAgICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5jYXJkLWZvb3RlciBidXR0b24ge1xuICAgICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5jYXJkIGgzIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAjcHJvamVjdHMge1xuICBcbiAgICAgYmFja2dyb3VuZDogIzIwMjAyNDtcbiAgICAgIC8qYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vYm9vdHN0cmFwbWFkZS5jb20vZGVtby90aGVtZXMvVGhlRXZlbnQvaW1nL2ludHJvLWJnLmpwZykgdG9wIGNlbnRlcjsqL1xuICBcbiAgICB9XG4gIFxuICAjaW50cm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLypiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9kZW1vL3RoZW1lcy9UaGVFdmVudC9pbWcvaW50cm8tYmcuanBnKSB0b3AgY2VudGVyOyovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgXG4gIFxuICAjaW50cm86YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIG9wYWNpdHk6IDAuNDU7XG4gICAgYmFja2dyb3VuZDogIzQyNDI0ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAjaW50cm8gLmludHJvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogOTBweDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiAgXG4gICNpbnRybyBoMSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXksIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgI2ludHJvIGgxIHNwYW4ge1xuICAgIGNvbG9yOiAjZjgyMjQ5O1xuICB9XG4gIFxuICAjaW50cm8gcCB7XG4gICAgY29sb3I6ICNlYmViZWI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gICNpbnRybyAucGxheS1idG4ge1xuICAgIHdpZHRoOiA5NHB4O1xuICAgIGhlaWdodDogOTRweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2Y4MjI0OSA1MCUsIHJnYmEoMTAxLCAxMTEsIDE1MCwgMC4xNSkgNTIlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gICNpbnRybyAucGxheS1idG46OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNmZmY7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgfVxuICBcbiAgI2ludHJvIC5wbGF5LWJ0bjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlLWJ0biAycztcbiAgICBhbmltYXRpb246IHB1bHNhdGUtYnRuIDJzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTYzLCAxNjMsIDE2MywgMC40KTtcbiAgICB0b3A6IC0xNSU7XG4gICAgbGVmdDogLTE1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgI2ludHJvIC5wbGF5LWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNmODIyNDk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIwKTtcbiAgfVxuICBcbiAgI2ludHJvIC5wbGF5LWJ0bjpob3Zlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjZmZmO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgI2ludHJvIC5hYm91dC1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEycHggMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgICAvKiBib3JkZXI6MnB4IHNvbGlkICNmODIyNDkgKi9cbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDE0NCwgMTQ0LCAxNDQsIDAuMjUpO1xuICB9XG4gIFxuICAjaW50cm8gLmFib3V0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzIwMjAyNDtcbiAgICAvKmJhY2tncm91bmQ6ICNmODIyNDk7Ki9cbiAgfVxuICBcbiAgLyogTGlzdCAqL1xuICBcbiAgb2wge1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1ZW07XG4gIH1cbiAgXG4gIG9sIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVlbTtcbiAgfVxuICBcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIH1cbiAgXG4gIHVsIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICB9XG4gIFxuICB1bC5hbHQge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICB1bC5hbHQgbGkge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDE0NCwgMTQ0LCAxNDQsIDAuMjUpO1xuICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gIH1cbiAgXG4gIHVsLmFsdCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICBcbiAgdWwuaWNvbnMge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBcbiAgdWwuaWNvbnMgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgfVxuICBcbiAgdWwuaWNvbnMgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTQ0LCAxNDQsIDE0NCwgMC4yNSk7XG4gICAgLyogY29sb3I6IHJnYmEoMTQ0LCAxNDQsIDE0NCwgMC4yNSk7Ki9cbiAgfVxuICBcbiAgdWwuaWNvbnMgbGkgYTpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIFxuICB1bC5pY29ucyBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgdWwuaWNvbnMgbGk6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICBcbiAgdWwuYWN0aW9ucyB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICB1bC5hY3Rpb25zIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAxZW0gMCAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIHVsLmFjdGlvbnMgbGk6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICBcbiAgdWwuYWN0aW9ucy5zbWFsbCBsaSB7XG4gICAgcGFkZGluZzogMCAwLjVlbSAwIDA7XG4gIH1cbiAgXG4gIHVsLmFjdGlvbnMudmVydGljYWwgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDFlbSAwIDAgMDtcbiAgfVxuICBcbiAgdWwuYWN0aW9ucy52ZXJ0aWNhbCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgXG4gIHVsLmFjdGlvbnMudmVydGljYWwgbGkgPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICB1bC5hY3Rpb25zLnZlcnRpY2FsLnNtYWxsIGxpIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAwIDAgMDtcbiAgfVxuICBcbiAgdWwuYWN0aW9ucy52ZXJ0aWNhbC5zbWFsbCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgXG4gIHVsLmFjdGlvbnMuZml0IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDFlbSk7XG4gIH1cbiAgXG4gIHVsLmFjdGlvbnMuZml0IGxpIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDAgMCAwIDFlbTtcbiAgfVxuICBcbiAgdWwuYWN0aW9ucy5maXQgbGkgPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICB1bC5hY3Rpb25zLmZpdC5zbWFsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMC41ZW0pO1xuICB9XG4gIFxuICB1bC5hY3Rpb25zLmZpdC5zbWFsbCBsaSB7XG4gICAgcGFkZGluZzogMCAwIDAgMC41ZW07XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgdWwuYWN0aW9ucyB7XG4gICAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgICB9XG4gIFxuICAgIHVsLmFjdGlvbnMgbGkge1xuICAgICAgcGFkZGluZzogMWVtIDAgMCAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgIHVsLmFjdGlvbnMgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICBcbiAgICB1bC5hY3Rpb25zIGxpID4gKiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgdWwuYWN0aW9ucyBsaSA+ICouaWNvbjpiZWZvcmUge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0yZW07XG4gICAgfVxuICBcbiAgICB1bC5hY3Rpb25zLnNtYWxsIGxpIHtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDAgMCAwO1xuICAgIH1cbiAgXG4gICAgdWwuYWN0aW9ucy5zbWFsbCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gIH1cbiAgXG4gIGRsIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgfVxuICBcbiAgZGwgZHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIH1cbiAgXG4gIGRsIGRkIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICB9XG4gIFxuICAvKiBGb290ZXIgKi9cbiAgXG4gICNmb290ZXIge1xuICAgIHBhZGRpbmc6IDRlbSAwIDJlbSAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiNmZmY7XG4gIH1cblxuICAjZm9vdGVyIGgyIHtcbiAgICBjb2xvcjojZmZmO1xuICB9XG5cbiAgI2Zvb3RlciBwIHtcbiAgICBjb2xvcjojZmZmO1xuICB9XG4gIFxuICAjZm9vdGVyIC5pbm5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgICAjZm9vdGVyIC5pbm5lciB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAjZm9vdGVyIC5pbm5lciB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgfVxuICBcbiAgI2Zvb3RlciAuY29weXJpZ2h0IHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gICAgI2Zvb3RlciB7XG4gICAgICBwYWRkaW5nOiAzZW0gMCAxZW0gMDtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let ProjectsComponent = class ProjectsComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        this.isLoaded = false;
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
            this.isLoaded = true;
        }, 3000);
        /*  this.$("a").on('click', function(event) {
      
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
        
              // Store hash
              var hash = this.hash;
        
              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              this.$('html, body').animate({
                scrollTop: this.$(hash).offset().top
              }, 800, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });*/
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")).default]
    })
], ProjectsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cur50r/Documents/portfolio/apps/angular-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map