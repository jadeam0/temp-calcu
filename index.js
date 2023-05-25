function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("output").innerHTML=((valNum-32)/1.8).toFixed(2);
}
