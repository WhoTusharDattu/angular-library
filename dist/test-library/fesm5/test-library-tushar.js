import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TestLibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestLibraryService.ngInjectableDef = defineInjectable({ factory: function TestLibraryService_Factory() { return new TestLibraryService(); }, token: TestLibraryService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { TestLibraryService, TestLibraryComponent, TestLibraryModule };

//# sourceMappingURL=test-library-tushar.js.map