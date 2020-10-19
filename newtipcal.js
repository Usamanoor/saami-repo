function calculateTip () {
	var bill = document.getElementById('billamt').value;
	var serivce = document.getElementById('serviceQual').value;
	var people = document.getElementById('people').value;

	if (bill === "" || serivce == 0) {
		alert('Please enter Values');
		return;
	}
	if (people === "" || people <= 1) {
		people = 1;
		document.getElementById('people').style.display = "none";
    }
    else {
    	document.getElementById('people').style.display = "block";
    }

    //calculate tip
    var total = (bill * serivce) / people;
    //round number
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById('each').innerHTML = total ;
}

   document.getElementById('calculate').onclick = function () {
   	calculateTip();
   }
