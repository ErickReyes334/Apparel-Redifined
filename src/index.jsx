#include "Multiply.jsx";
#include "Properties.jsx";
#include "loadColors.jsx";

function Main(){
    
    // Crear una ventana
    var ventana = new Window("dialog", "Apparel Redifined");

    // Crear un grupo para organizar los elementos
    var grupo = ventana.add("group");

    // Agregar etiqueta "Seleccione Locación" encima del ComboBox izquierdo
    var etiquetaLocacion = grupo.add("statictext", undefined, "Select Location");

    var comboOptionsPosicion = ["Front", "Back", "Left Chest", "Left Sleeve", "Right Chest", "Right Sleeve", "Lower-Back", "Full-Back", "Full-Front", "Center-Front"];
    var comboBoxPosicion = grupo.add("dropdownlist", undefined, comboOptionsPosicion);
    comboBoxPosicion.selection = 0;  // Establecer la selección inicial

    var etiquetaTemplate = grupo.add("statictext", undefined, "Select Proof");

    var comboOptionsTemplate = ["1", "4", "Art Request"];
    var comboBoxTemplate = grupo.add("dropdownlist", undefined, comboOptionsTemplate);
    comboBoxTemplate.selection = 0;  // Establecer la selección inicial


    // Crear un grupo para organizar los botones
    var grupoBotones = ventana.add("group");

    // Añadir botones al grupo de botones
    var btnAceptar = grupoBotones.add("button", undefined, "Acept");
    var btnCancelar = grupoBotones.add("button", undefined, "Cancel");

    grupoBotones.alignment = "center";  // Puedes ajustar "center" según tus preferencias


    btnAceptar.onClick = function(){

        var selectedPosicion = comboBoxPosicion.selection.text;
        var selectedTemplate = comboBoxTemplate.selection.text;
        
        if (selectedPosicion == "Front" && selectedTemplate == "4"){
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular"); 
        }

        else if (selectedPosicion == "Front" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }

        else if (selectedPosicion == "Front" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }
        

        else if (selectedPosicion == "Back" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Back" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }

        else if (selectedPosicion == "Back" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }
        
        else if (selectedPosicion == "Left Chest" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Left Chest" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }

        else if (selectedPosicion == "Left Chest" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }
        

        
        else if (selectedPosicion == "Left Sleeve" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Left Sleeve" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }


        else if (selectedPosicion == "Left Sleeve" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }
        
        
        else if (selectedPosicion == "Right Chest" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Right Chest" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }

        else if (selectedPosicion == "Right Chest" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }

        
        else if (selectedPosicion == "Right Sleeve" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Right Sleeve" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }


        else if (selectedPosicion == "Right Sleeve" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }


        else if (selectedPosicion == "Lower-Back" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Lower-Back" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }


        else if (selectedPosicion == "Lower-Back" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }


        else if (selectedPosicion == "Full-Back" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Full-Back" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }

        else if (selectedPosicion == "Full-Back" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }

        else if (selectedPosicion == "Full-Front" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Full-Front" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }

        
        else if (selectedPosicion == "Full-Front" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }


        else if (selectedPosicion == "Center-Front" && selectedTemplate == "4"){
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            WidthXHeight([0.7621, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -4.7496], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([0.7621, -9.6608], comboBoxPosicion.selection.text, 20.498);
            WidthXHeight([5.1318, -9.6608], comboBoxPosicion.selection.text, 20.498);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedPosicion == "Center-Front" && selectedTemplate == "Art Request"){
            Multiply(550, [[5.8585, -4.7254]], 1);
            WidthXHeight([1.1289 , -10.0438], comboBoxPosicion.selection.text, 64.7091);            
        }


        else if (selectedPosicion == "Center-Front" && selectedTemplate == "1"){
            Multiply(265, [[4.25 , -3.6659]], 1);
            WidthXHeight([2.4103, -5.5578], comboBoxPosicion.selection.text, 24.4911);
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
        }
        
        ventana.close();
    }

    ventana.show();

}

Main();