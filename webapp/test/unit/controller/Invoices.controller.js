/*global QUnit*/

sap.ui.define([
	"ydiazs/sapui5/controller/Invoices.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Invoices Controller");

	QUnit.test("I should test the Invoices controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
