var i=0;
let text = "join our family?"

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 75);
    }
}
typing();