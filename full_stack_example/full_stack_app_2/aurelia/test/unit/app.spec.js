"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_bootstrapper_1 = require("aurelia-bootstrapper");
var aurelia_testing_1 = require("aurelia-testing");
var aurelia_pal_1 = require("aurelia-pal");
describe('Stage App Component', function () {
    var component;
    beforeEach(function () {
        component = aurelia_testing_1.StageComponent
            .withResources(aurelia_pal_1.PLATFORM.moduleName('app'))
            .inView('<app></app>');
    });
    afterEach(function () { return component.dispose(); });
    it('should render message', function (done) {
        component.create(aurelia_bootstrapper_1.bootstrap).then(function () {
            var view = component.element;
            expect(view.textContent.trim()).toBe('Hello World!');
            done();
        }).catch(function (e) {
            fail(e);
            done();
        });
    });
});
//# sourceMappingURL=app.spec.js.map