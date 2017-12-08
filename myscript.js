var check=1;	//Variable that indicates if increaseFontSize() can be called or not. 1 means can be called and 0 means not.

//Function for increasing the font size and the number of clicks
function increaseFontSize() 
{
	obj = document.getElementById('demo');
	currentSize = parseFloat(obj.style.fontSize); 
	document.getElementById('supp').value=parseInt(document.getElementById('supp').value,10)+1;
	obj.innerHTML="Number of Clicks: "+parseInt(document.getElementById('supp').value,10);
	obj.style.fontSize = (currentSize + .1) + "em";
	
	
}
//This function controls whether increaseFontSize() is called or not
function caller()
{
	if(check==1)	//if increaseFontSize() can be called
	{	increaseFontSize();	//call it
		check=0;	//set check to 0 so it cannot be called 
		setTimeout(function(){check=1;}, 2000);	//until the next 2 seconds
	}
	
}
	
