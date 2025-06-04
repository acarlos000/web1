function repetir(){
    var qntd = parseInt(document.getElementById("qntd").value);
    var i; 
    for(i=0; i<qntd; i++){
        console.log("i=", i);
    }
    
}
function somar(){
    var j;
    var soma = 0;
    for(j=0; j<qntd; j++){
    soma = soma+j;
    }
    console.log("somatorio=", soma);
}