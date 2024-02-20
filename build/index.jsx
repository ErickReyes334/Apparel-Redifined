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

    var locationTops = ["1. Center Chest", "2. Left Chest", "3. Right Side Baseball Number", "4. Private Label",
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

    var comboOptionsTemplate = ["1", "2", "3", "4", "4/4 Izq", "4/4 Der", "6", "Art Request", "Art Request 2", "Art Request 3", "Art Request 6", "Art Request 4/4 Izq", 
    "Art Request 4/4 Der"];

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
        

        if (selectedTemplate == "1"){
            WidthXHeight([1.9675, -5.1857], comboBoxLocation.selection.text.substring(3), 23.2917, "#1D1D1B");
            loadColors(154.7064, 497.0862, 7.5676, "MyriadPro-Regular"); 
            Multiply(265, [[4.2842, -3.3459]], 1);
        }

        else if (selectedTemplate == "2"){
            WidthXHeight([2.4413, -4.7496], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([2.4413, -9.7133], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            loadColors(183.7008, 421.9714, 7.5676, "MyriadPro-Regular");
            loadColors(183.7008, 779.3559, 7.5676, "MyriadPro-Regular");
            Multiply(200, [[4.25, -3.1305], [4.25, -8.0941]], 2);
        }


        else if (selectedTemplate == "3"){
            WidthXHeight([0.3851, -4.7496], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([4.537, -4.7496], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([0.3851, -9.7477], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            Multiply(180.2696, [[2.1647 , -3.1973], [6.3167, -3.1973], [2.2117, -7.9891 ]], 3);
            loadColors(35.516, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(330.5272, 421.9712, 7.5676, "MyriadPro-Regular");
            loadColors(35.516, 770.3385, 7.5676, "MyriadPro-Regular");
        }


        else if (selectedTemplate == "4"){
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

        else if (selectedTemplate == "4/4 Izq"){
            WidthXHeight([0.2582, -5.0405], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([0.2582, -10.2684], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([0.2582, -15.5787], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([0.2582, -21.041], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            
            Multiply(200, [[2.1866, -3.3351], [2.1866 , -8.539], [2.1866, -13.8492], [2.1866, -19.2311]], 4);
            loadColors(22.1832, 448.3633, 7.5676, "MyriadPro-Regular");
            loadColors(22.1832, 847.2171, 7.5676, "MyriadPro-Regular");
            loadColors(22.1832, 1220.2115, 7.5676, "MyriadPro-Regular");
            loadColors(22.1832, 1613.4998, 7.5676, "MyriadPro-Regular");
        }


        else if (selectedTemplate == "4/4 Der"){
            
            WidthXHeight([4.4007, -5.0405], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([4.4007, -10.2684], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([4.4007, -15.5787], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([4.4007, -21.041], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            
            Multiply(200, [[6.3157, -3.3351], [6.3157, -8.539], [6.3157, -13.8492], [6.3157, -19.2311]], 4);

            loadColors(319.4779, 448.3633, 7.5676, "MyriadPro-Regular");
            
            loadColors(319.4779, 847.2171, 7.5676, "MyriadPro-Regular");
            
            loadColors(319.4779, 1220.2115, 7.5676, "MyriadPro-Regular");
            
            loadColors(319.4779, 1613.4998, 7.5676, "MyriadPro-Regular");
        }

        
        else if (selectedTemplate == "6"){
            WidthXHeight([0.5286, -5.0572], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([4.4104, -5.0572], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([0.5286, -9.8566], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([4.4014, -9.8566], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([0.5286, -14.7236], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            WidthXHeight([4.4014, -14.7236], comboBoxLocation.selection.text.substring(3), 20.498, "#231F20");
            Multiply(200, [[2.3293 , -3.2819], [6.207 , -3.2819], [2.3293 , -8.0813], [6.207 , -8.0813], [2.3293 , -12.9483], [6.207 , -12.9483]], 6);
            loadColors(45.4123, 432.9753, 7.5676, "MyriadPro-Regular"); 
            loadColors(324.6079, 432.9753, 7.5676, "MyriadPro-Regular");
            loadColors(45.4123, 778.5303, 7.5676, "MyriadPro-Regular");
            loadColors(324.6079, 778.5303, 7.5676, "MyriadPro-Regular");
            loadColors(45.4123, 1128.955, 7.5676, "MyriadPro-Regular");
            loadColors(324.6079, 1128.955, 7.5676, "MyriadPro-Regular");
        }

        else if (selectedTemplate == "8"){
            WidthXHeight([0.2582, -5.0405], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([4.4007, -5.0405], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([0.2582, -10.2684], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([4.4007, -10.2684], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([0.2582, -15.5787], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([4.4007, -15.5787], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([0.2582, -21.041], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            WidthXHeight([4.4007, -21.041], comboBoxLocation.selection.text.substring(3), 21.8941, "#231F20");
            Multiply(200, [[2.1866, -3.3351], [6.3157, -3.3351], [2.1866 , -8.539], [6.3157, -8.539], [2.1866, -13.8492], [6.3157, -13.8492],
                [2.1866, -19.2311], [6.3157, -19.2311]], 8);
            loadColors(22.1832, 448.3633, 7.5676, "MyriadPro-Regular");
            loadColors(319.4779, 448.3633, 7.5676, "MyriadPro-Regular");
            loadColors(22.1832, 847.2171, 7.5676, "MyriadPro-Regular");
            loadColors(319.4779, 847.2171, 7.5676, "MyriadPro-Regular");
            loadColors(22.1832, 1220.2115, 7.5676, "MyriadPro-Regular");
            loadColors(319.4779, 1220.2115, 7.5676, "MyriadPro-Regular");
            loadColors(22.1832, 1613.4998, 7.5676, "MyriadPro-Regular");
            loadColors(319.4779, 1613.4998, 7.5676, "MyriadPro-Regular");
        }
        
        
        else if (selectedTemplate == "Art Request"){
            WidthXHeight([0.144 , -10.0916], comboBoxLocation.selection.text.substring(3), 64.7091, "#1D1D1B"); 
            Multiply(550, [[5.8585, -4.7254]], 1);
        }

        else if (selectedTemplate == "Art Request 2"){
            WidthXHeight([0.144 , -10.0916], comboBoxLocation.selection.text.substring(3), 64.7091, "#1D1D1B");
            WidthXHeight([11.8593, -10.0916], comboBoxLocation.selection.text.substring(3), 64.7091, "#1D1D1B"); 
            Multiply(600, [[5.5625, -4.9324], [17.3526, -4.9324]], 2);
        }

        else if (selectedTemplate == "Art Request 3"){
            WidthXHeight([0.0897, -10.0665], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20"); 
            WidthXHeight([11.6833, -10.0665], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20"); 
            WidthXHeight([23.6252 , -10.0665], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20"); 
            Multiply(550, [[6.1503, -4.9324], [17.0698, -4.9324], [28.9432,-4.9324]], 3);
        }


        else if (selectedTemplate == "Art Request 6"){
            WidthXHeight([0.1708, -10.0438], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20"); 
            WidthXHeight([11.8359, -10.0438], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([23.6246, -10.0438], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([0.1708, -21.7337], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([11.8359, -21.7337], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([23.6246, -21.7337], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            Multiply(575, [[5.5625, -4.9324], [17.3984, -4.9324], [29.124,-4.9324], [5.5625, -16.5564], [17.3984, -16.5564], [29.124,-16.5564]], 6);
        }

        else if (selectedTemplate == "Art Request 4/4 Izq"){
            WidthXHeight([0.5395, -10.0438], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([0.5395, -22.3437], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([25.0993, -10.0438], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([25.0993, -22.3437], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");   
            Multiply(575, [[5.5625, -4.9891], [30.1425, -4.9891], [5.5625,-17.4777], [30.1425, -17.4777]], 4);
        }

        else if (selectedTemplate == "Art Request 4/4 Der"){
            WidthXHeight([11.7742, -10.0438], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([11.7742, -22.3437], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([36.3273, -10.0438], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");
            WidthXHeight([36.3273, -22.3437], comboBoxLocation.selection.text.substring(3), 64.7091, "#231F20");   
            Multiply(575, [[17.3099, -4.9891], [41.8898, -4.9891], [17.3099,-17.4777], [41.8898, -17.4777]], 4);
        }



        ventana.close();
    }

    ventana.show();

}

Main();