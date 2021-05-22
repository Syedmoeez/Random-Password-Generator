var keylist="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*/";
var tmp='';
function generatepassword(plength){
    tmp='';
    for(i=0; i<plength; i++){
        tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp
}

function populateform(enterlength){
    document.passGen.output.value= generatepassword(enterlength)
}


