function meteofilter(){
                     return function(input){
                         switch (input){
                             case "{{value.pluie}}" :
                             return "minus.png";
                             case "Credit" :
                             return "plus.png";
                             default :
                             return "cire_perdue_interrogation.png"
                         }
                     }
        }