//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], 
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller } Controller 
 * @param {typeof sap.ui.model.json.JSONModel } JSONModel 
 * 
 */

function (Controller, JSONModel) {
    return Controller.extend("ydiazs.invoice.controller.InvoiceList",{
onInit: function () {
    var oViewModel = new JSONModel ({
        usd: "USD",
        eur: "EUR"

    });
    this.getView().setModel(oViewModel,"currency");
}

    });

});