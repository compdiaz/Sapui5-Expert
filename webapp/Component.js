/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "ydiazs/sapui5/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("ydiazs.sapui5.Component", {
            metadata: {
               
               manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                //set data model on the view
                this.setModel(models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "ydiazs.sapui5.i18n.i18n" })
                this.setModel(i18nModel, "i18n");

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);