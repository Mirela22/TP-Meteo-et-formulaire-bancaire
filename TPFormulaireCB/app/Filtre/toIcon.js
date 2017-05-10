
function ToIconFilter(){
                     return function(input){
                         switch (input){
                             case "Debit" :
                             return "minus.png";
                             case "Credit" :
                             return "plus.png";
                             default :
                             return "cire_perdue_interrogation.png"
                         }
                     }
        }