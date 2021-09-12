
i = 0;

function changeColor(){
    var colors = ['red', 'blue', 'yellow', 'green'];
    var n = colors.length;
    document.getElementById('changeColors').style.backgroundColor = colors[i];
    i++
    if(i === n){
        i = 0; 
    }
    
}