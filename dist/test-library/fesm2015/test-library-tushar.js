import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestLibraryService {
    constructor() { }
    /**
     * @return {?}
     */
    testFunction() {
        console.log('calling test');
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setUrl(url) {
        this.server_url = url;
    }
    /**
     * @return {?}
     */
    getUrl() {
        return this.server_url;
    }
}
TestLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TestLibraryService.ctorParameters = () => [];
/** @nocollapse */ TestLibraryService.ngInjectableDef = defineInjectable({ factory: function TestLibraryService_Factory() { return new TestLibraryService(); }, token: TestLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'tm-test-library',
                template: `
    <p>
      test-library works!
    </p>
  `
            }] }
];
/** @nocollapse */
TestLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestLibraryModule {
}
TestLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestLibraryComponent],
                imports: [],
                exports: [TestLibraryComponent]
            },] }
];

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