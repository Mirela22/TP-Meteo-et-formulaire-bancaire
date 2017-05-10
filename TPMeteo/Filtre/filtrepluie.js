function filtrepluie(){
    return function(value){
    
       if (value<1){
            return"\soleil.gif";
        } else {
            return"\pluie.gif";
        }
      
    };
}