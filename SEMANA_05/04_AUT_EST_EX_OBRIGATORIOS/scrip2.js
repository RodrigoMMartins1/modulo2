function caixa() {

    var total = document.getElementById('valor').value;

    var notas = 0
    document.getElementById('vem').innerHTML = '';

    let cedulas100 = parseInt(total / 100);
        total = total % 100
    let cedulas50 = parseInt (total / 50);
        total = total % 50
    let cedulas20 = parseInt (total / 20);
        total = total % 20
    let cedulas10 = parseInt (total / 10);
        total = total % 10
    let cedulas5 = parseInt (total / 5); 
        total = total % 5
    let cedulas2 = parseInt (total / 2); 
    let cedulas1 = parseInt(total % 2); 


    if (cedulas100 >= 1) {
        document.getElementById('vem').innerHTML += '<br>NOTAS DE 100: ' + cedulas100;
    }
    if (cedulas50 >= 1) {
        document.getElementById('vem').innerHTML += '<br>NOTAS DE 50: ' + cedulas50;
    }
    if (cedulas20 >= 1) {
        document.getElementById('vem').innerHTML += '<br>NOTAS DE 20: ' + cedulas20;
    }
    if (cedulas10 >= 1) {
        document.getElementById('vem').innerHTML += '<br>NOTAS DE 10: ' + cedulas10;
    }
    if (cedulas5 >= 1) {
        document.getElementById('vem').innerHTML += '<br>NOTAS DE 5: ' + cedulas5;
    }
    if (cedulas2 >= 1) {
        document.getElementById('vem').innerHTML += '<br>NOTAS DE 2: ' + cedulas2;
    }
    if (cedulas1 >= 1) {
        document.getElementById('vem').innerHTML += '<br>MOEDAS DE 1 REAL: ' + cedulas1;
    }


}