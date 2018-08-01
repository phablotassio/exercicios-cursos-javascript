(function(){
   
    function calcularImc(altura,peso){

       var imc = peso / (altura * altura);
       
        return function (){
            var retorno = "";
            
            if(imc < 17){
                retorno += "Vc está muito abaixo do peso";
            }else if(imc < 18.5){
                retorno += "Vc está abaixo do peso";
            }else if(imc < 25){
                retorno += "Vc está com o peso normal";
            }else if(imc < 30){
                retorno += "Vc está acima do peso";

            }else if(imc < 35){
                retorno += "Obesidade grau 1";

            }else if(imc < 40){
                retorno += "Obesidade grau 2";
            }else {
                retorno += "Obesidade grau 3";

            }
            
            return retorno;

        }

    }

    var imc = calcularImc(1.72,90);
    console.log(imc());

})();