document.getElementById("submit").onclick = function(){
    let temp;
    if(document.getElementById("cel").checked){
        temp = document.getElementById("temp").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("result").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fara").checked){
        temp = document.getElementById("temp").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("result").innerHTML = "Brother, select something, now what should I do?";
    }
}
function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return (9/5 * temp) + 32;
}