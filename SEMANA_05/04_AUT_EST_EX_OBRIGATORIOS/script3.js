function bubbleSort(){
    var str = document.getElementById("numeros").value
    str = str.split(",").slice()
    var array = str.map(Number)
    var new_array = []
    while( typeof (i = array.shift()) !== 'undefined' ) {
    parseInt(i)
    new_array.unshift(i)
    console.log(i);
    }
    var length = new_array.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(new_array[j] > new_array[j+1]) {
                           var tmp = new_array[j]; 
                new_array[j] = new_array[j+1]; 
                new_array[j+1] = tmp; 
            }
        }        
    }
    console.log(new_array)
    document.getElementById('saida').innerHTML = new_array;
}