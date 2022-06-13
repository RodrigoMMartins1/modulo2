function calcular(){
    var pessoas = document.getElementById('pessoas').value;
    var horas = document.getElementById('horas').value;
    var valorTotal = 0;

    if (horas == "0") {
        valorTotal = pessoas * 200;
        if (pessoas > 50) {
          valorTotal = valorTotal * 0.6;
        }
    }
    else{
        valorTotal = pessoas * 100;
        if (pessoas > 50) {
            valorTotal = valorTotal * 0.8;
        }
    }
      document.getElementById('valorTotal').innerHTML = valorTotal;
}