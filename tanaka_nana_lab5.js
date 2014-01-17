//alert("JavaScript works!");
//nana tanaka
//lab 5
var symbols = " + - / or *";

var x = parseInt(prompt("enter your first number"));
	
var y = parseInt(prompt("enter your second number"));

var symbol = prompt ("enter your symbol" + symbols);

if(isNaN(x)){
	console.log("put number x");
}else if (isNaN(y)){
	console.log("put number y");
}else{
	console.log("The equation that you chose is" + x + symbol + y );
};

//console.log(symbol);

if(symbol === "+"){
	console.log("operator:" + symbol + "you put ");
}else if(symbol === "-"){
	console.log("operator:" + symbol + "you put");
}else if(symbol === "*"){
	console.log("operator:" + symbol + "you put");
}else if(symbol === "/"){
	console.log("operator:" + symbol + "you put"); 
}else{
	console.log("You better put a symbol.");
};


/*function myFunction(x,symbol,y){
	//console.log("x = " + x +symbol+ " y = " + y);
}*/

//addition function
function myFunctionAdd(x,symbol,y){
	if(symbol == "+") {
		console.log(x + y);
	}
}

//sub function
function myFunctionSub(x,symbol,y){
	if(symbol == "-") {
		console.log(x - y);
	}	

}

function myFunctionTim(x,symbol,y){
	if(symbol == "*") {
		console.log(x * y);
	}
}

function myFunctionDev(x,symbol,y){
	if(symbol == "/") {
		console.log(x / y);
	}	
}


//myFunction(x,symbol,y);

myFunctionAdd(x,symbol,y);

myFunctionSub(x,symbol,y);

myFunctionTim(x,symbol,y);

myFunctionDev(x,symbol,y);

