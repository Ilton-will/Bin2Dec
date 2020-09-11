var $bin = document.getElementById("bin");
var $dec = document.getElementById("dec");
var $rest = document.getElementById("button");


var $input = document.querySelectorAll("input.entrada").forEach((el) => {
	el.addEventListener('click', () => {
		el.value = '';
	})
});

$bin.addEventListener("keyup", (event) => {
	const keyName = (event.key);

	if (keyName > 1 || keyName < 0 || isNaN($bin.value)) {
		$bin.value = '';
		alert("número não binarário")
		return;
	} else
		$bin.oninput = function (){
			$dec.value = bin2dec($bin.value);
		};	
		
});

$dec.addEventListener("keyup", () => {
	if (isNaN($dec.value)) {
		$dec.value = '';
	}else if ($dec.value < 0) {
		$dec.value = 0;
	}else if ($dec.value > 255) {
		$dec.value = 255;
		$bin.value = 11111111;
	}else
		$dec.oninput = function (){
			$bin.value = dec2bin($dec.value)
		}
});

function dec2bin(dec){
	bi = (dec >>> 0).toString(2);
	return	valor = Number(bi);

};

function bin2dec(b){
	return parseInt(b,2);
};

$rest.addEventListener('click', (e) =>{
	$dec.value = "";
	$bin.value = "";
});