/**
 * Creates a dialog window with dropdown lists for selecting a location and a proof template.
 * The available options for the location dropdown list depend on the selected variation from another dropdown list.
 * Includes event handlers for updating the location dropdown list options and closing the dialog window.
 *
 * @returns {void}
 */

#include "Multiply.jsx";
#include "WidthXHeight.jsx";
#include "loadColors.jsx";

function Main(){
    
    var ventana = new Window("dialog", "Apparel Redifined");

    var grupo = ventana.add("group");

    var locationTops = ["1. Top Center Chest", "2. Left Chest", "3. Right Side Baseball Number", "4. Private Label",
        "5. Left Side Baseball Number", "6. Right Chest", "7. Voleyball Number", "8. Shoulder (TV #)", "9. Right Sleeve (SS)",
        "10. Left Sleeve (SS)", "11. Right Sleeve (LS)", "12. Left Sleeve (LS)", "13. Right Cuff", "14. Left Cuff",
        "15. Shirt ID", "16. Back Neck", "17. Sponsor/Name", "18. Back (with hood)", "19. Rear Hem"];

    var locationBottoms = ["1. Front wolstband", "2. Right Knee", "3. Left hip", "4. Left knee", "5. Right thigh",
        "6. Left thigh", "7. Right leg (pants)", "8. Left leg (pants)", "9. Left Side knee", "10. Left Side Leg",
        "11. Seat", "12. Back wolstband", "13. Left calf", "14. Right calf", "15. Right Side knee", "16. Right Side leg"];

    var locationBags = ["1. Backpack large panel", "2. Center panel above pocket", "3. Right Side Panel", "4. Left Side Panel",
        "5. Center Panel on pocket", "6. Center Top of bag near zipper", "7. Drawstring top of bag", "8. Drawstring center of bag",
        "9. Bat Bag Center Side Panel", "10. Bat Bag Center Top Panel", "11. Bat Bag Left Center Panel", "12. Bat Bag Team Logo",
        "13. Bot Bag Player ID"];

    var locationHats = ["1. Front Center", "2. Front Left", "3. Back Left", "4. Back (above opening)", "5. Back right",
        "6. Back center", "7. Left side", "8. Right Side"];

    var etiquetaLocacion = grupo.add("statictext", undefined, "Select Location");

    var comboOptionsVariations = ["Tops", "Bottoms", "Bags", "Hats"];
    var comboBoxVariations = grupo.add("dropdownlist", undefined, comboOptionsVariations);
    comboBoxVariations.selection = 0;

    var etiquetaOpcion = grupo.add("statictext", undefined, "Select Option");

    var comboOptionsLocation = locationTops;
    var comboBoxLocation = grupo.add("dropdownlist", undefined, comboOptionsLocation);
    comboBoxLocation.selection = 0;

    var etiquetaTemplate = grupo.add("statictext", undefined, "Select Proof");

    var comboOptionsTemplate = ["1", "4", "Art Request"];
    var comboBoxTemplate = grupo.add("dropdownlist", undefined, comboOptionsTemplate);
    comboBoxTemplate.selection = 0;

    var grupoBotones = ventana.add("group");
    var btnAceptar = grupoBotones.add("button", undefined, "Acept");
    var btnCancelar = grupoBotones.add("button", undefined, "Cancel");
    grupoBotones.alignment = "center";

    comboBoxVariations.onChange = function () {
        var selectedVariation = comboBoxVariations.selection.text;
        switch (selectedVariation) {
            case "Tops":
                updateComboBoxOptions(locationTops);
                break;
            case "Bottoms":
                updateComboBoxOptions(locationBottoms);
                break;
            case "Bags":
                updateComboBoxOptions(locationBags);
                break;
            case "Hats":
                updateComboBoxOptions(locationHats);
                break;
            default:
                updateComboBoxOptions([]);
                break;
        }
    };

    function updateComboBoxOptions(options) {
        comboBoxLocation.removeAll();
        for (var i = 0; i < options.length; i++) {
            comboBoxLocation.add("item", options[i]);
        }
        comboBoxLocation.selection = 0;
    }

    btnAceptar.onClick = function () {

        var selectedTemplate = comboBoxTemplate.selection.text;
        
        if (selectedTemplate == "4"){
            WidthXHeight([0.2372, -4.7496], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([4.4558, -4.7496], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([0.2372, -9.6608], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([4.4558, -9.6608], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            Multiply(180.2696, [[2.1797 , -3.1305], [6.4073, -3.1305], [2.2117, -7.9891 ], [6.4073 , -7.9891]], 4);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 775.3476, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 775.3476, 7.5676, "MyriadPro-Regular"); 
        }

        else if (selectedTemplate == "Art Request"){
            WidthXHeight([0.144 , -10.0916], comboBoxLocation.selection.text.substring(3), 64.7091, "#1D1D1B"); 
            Multiply(550, [[5.8585, -4.7254]], 1);
        }

        else if (selectedTemplate == "1"){
            WidthXHeight([1.9675, -5.1857], comboBoxLocation.selection.text.substring(3), 23.2917, "#1D1D1B");
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
            Multiply(265, [[4.2842, -3.3459]], 1);
        }

        ventana.close();
    }

    ventana.show();

}

Main();