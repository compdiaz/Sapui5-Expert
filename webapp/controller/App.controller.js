sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

  ],
  /**
   *  
   * @param {typeof sap.m.MessageToast} MessageToast 
   *  
   */
  function (BaseController, MessageToast) {
    "use strict";

    return BaseController.extend("ydiazs.sapui5.controller.App", {
      onInit: function () {
      
      },

      onShowHello: function () {
        //read text from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        //read properties from model
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg",[sRecipient]);

        MessageToast.show(sMsg);
      }
    });
  }
);
