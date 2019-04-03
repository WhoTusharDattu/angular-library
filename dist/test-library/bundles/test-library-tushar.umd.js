(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('test-library-tushar', ['exports', '@angular/core'], factory) :
    (factory((global['test-library-tushar'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibraryService = /** @class */ (function () {
        function TestLibraryService() {
        }
        /**
         * @return {?}
         */
        TestLibraryService.prototype.testFunction = /**
         * @return {?}
         */
            function () {
                console.log('calling test');
            };
        /**
         * @param {?} url
         * @return {?}
         */
        TestLibraryService.prototype.setUrl = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                this.server_url = url;
            };
        /**
         * @return {?}
         */
        TestLibraryService.prototype.getUrl = /**
         * @return {?}
         */
            function () {
                return this.server_url;
            };
        TestLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TestLibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ TestLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function TestLibraryService_Factory() { return new TestLibraryService(); }, token: TestLibraryService, providedIn: "root" });
        return TestLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibraryComponent = /** @class */ (function () {
        function TestLibraryComponent() {
        }
        /**
         * @return {?}
         */
        TestLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestLibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tm-test-library',
                        template: "\n    <p>\n      test-library works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        TestLibraryComponent.ctorParameters = function () { return []; };
        return TestLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibraryModule = /** @class */ (function () {
        function TestLibraryModule() {
        }
        TestLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [TestLibraryComponent],
                        imports: [],
                        exports: [TestLibraryComponent]
                    },] }
        ];
        return TestLibraryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TestLibraryService = TestLibraryService;
    exports.TestLibraryComponent = TestLibraryComponent;
    exports.TestLibraryModule = TestLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=test-library-tushar.umd.js.map