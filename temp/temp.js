function convert() {
	var celsius = parseFloat(document.getElementById("temp").value);
	var fahrenheit = (celsius * 1.8) + 32;
	document.getElementById("result").innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
}
