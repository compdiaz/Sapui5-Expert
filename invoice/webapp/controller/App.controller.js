// se utiliza para definir módulos y sus dependencias en una aplicación SAPUI5.
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "ydiazs/invoice/model/models",
 //Modulo estandar diseñados para manejar archivos de recursos, como archivos de texto localizados y archivos de propiedades
    "sap/m/FormattedText",
    "sap/ui/core/Fragment"

],
    //#region Lo que estas líneas indican son los tipos de parámetros esperados para una función o método.
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.core.Fragment} Fragment
     */

    //Función de devolución de llamada que se utiliza en conjunto con sap.ui.define en SAPUI5 para definir un módulo.
    function (Controller, MessageToast, Models, ResourceModel, Fragment) {
        "use strict";//use strict directiva de JavaScript que activa modo estricto, significa que ciertas acciones que
        //  pueden ser propensas a errores son manejadas de manera diferente y más segura. Por ejemplo, 
        //no se permiten variables no declaradas, el uso de with está prohibido, entre otras restricciones.

        return Controller.extend("ydiazs.invoice.controller.App", {
            // función Controller.extend() se utiliza para definir y extender un controlador en SAPUI5. El método extend crea una subclase
            // del controlador base (Controller) y le asigna el nombre y las propiedades especificadas. En tu caso, estás definiendo un
            // controlador con el nombre "ydiazs.invoice.controller.App" y le estás asignando propiedades y métodos adicionales. 
            onInit: function () {
                //set data model on the view
                this.getView().setModel(Models.createRecipient());

              
            },

            onShowHello: function () {
                MessageToast.show("Hola mundo")
            },
            onOpenDialog: function() {

                const oView = this.getView();
                Fragment.load({
                    id : oView.getId(),
                    name: "ydiazs.invoice.view.App"
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    oDialog.open();
                    
                });

            }
        });
    });

//  Función onInit():
/*  Esta función se ejecuta cuando el controlador se inicializa. En este caso,
     se utiliza para inicializar el modelo de datos de la vista.
    Se crea un objeto oData que contiene un objeto recipient con una propiedad name que tiene el valor "World".
    Luego, se crea un nuevo modelo de datos JSON (oModel) utilizando el objeto oData.
    Finalmente, el modelo de datos se establece en la vista actual utilizando this.getView().setModel(oModel).
    
    Función onShowHello():
    Esta función se ejecuta cuando se dispara un evento que está asociado al método onShowHello. Es probable que esté
    vinculado a un botón u otro control de la interfaz de usuario.
    Cuando se invoca esta función, se muestra un mensaje de toast con el texto "Hello World". Un mensaje de toast es una
    notificación efímera que aparece brevemente en la pantalla y luego desaparece.
    Estas funciones forman parte del controlador de SAPUI5 y se definen dentro de la función de devolución de llamada
    que se proporciona como argumento a sap.ui.define. La estructura de esta función de devolución de llamada es común
    en SAPUI5 para definir controladores, ya que permite acceder y manipular los elementos de la vista, así como también
    gestionar eventos y modelos de datos.*/