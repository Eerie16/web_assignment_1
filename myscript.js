var time=Date.now() -2000; // initialize a time variable with time as 2 second before now() to allow the very first click.

//Function for increasing the font size and the number of clicks
function increaseFontSize() 
{
	var curr=Date.now();	// create a local variable that stores the time when function executes
	if((curr-time-2000)>0)	// check if the difference between the two time variables is greater than 2 seconds
	{
	time=curr;		// if yes, then change the font size, no. of clicks and update the time variable to the value curr.
	obj = document.getElementById('demo');
	currentSize = parseFloat(obj.style.fontSize); 
	document.getElementById('supp').value = parseInt(document.getElementById('supp').value, 10 ) + 1;
	obj.innerHTML="Number of Clicks: "+ parseInt(document.getElementById('supp').value , 10);
	obj.style.fontSize = (currentSize + .1) + "em";
	}
}
