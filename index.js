// JavaScript Document
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
		num3 = document.getElementById("thirdNumber").value;
        document.getElementById("result").innerHTML = num1 * num2 * num3;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber1").value;
        num2 = document.getElementById("secondNumber2").value;
		num3 = 1000;
		num4 = 3.14;
		document.getElementById("result2").innerHTML = (num1 * num3) / (num4 * num2);
}

document.getElementById('reset').addEventListener('click', function(){
	document.getElementById("result").innerHTML = "";
	document.getElementById("firstNumber").value = "";
	document.getElementById("secondNumber").value = "";
	document.getElementById("thirdNumber").value = "";
})

document.getElementById('reset2').addEventListener('click', function(){
	document.getElementById("result2").innerHTML = "";
	document.getElementById("firstNumber1").value = "";
	document.getElementById("secondNumber2").value = "";
})