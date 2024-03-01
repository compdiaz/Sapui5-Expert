/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "ydiazs/invoice/model/models",
        "sap/ui/model/resource/ResourceModel"
    ],
    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("ydiazs.invoice.Component", {
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

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                                //Set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "ydiazs.invoice.i18n.i18n"});
                this.setModel(i18nModel, "i18n");     
            }
        });
    }
);