function muda(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var armazenaValor1 = value1.value;
    value1.value = value2.value;
    value2.value = armazenaValor1;
  }