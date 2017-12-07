//The function for throttling
function throttle() {
  var time = Date.now();
  return function() {
    if ((Date.now()-time-2000)>0) {
      increaseFontSize();
      time = Date.now();
    }
  }
}
throttleBtn = document.getElementById('b1');

//adding eventlistner for mouseclick at the button 1.
throttleBtn.addEventListener('click', throttle()); 

//Function for increasing the font size and the number of clicks
function increaseFontSize() {
	obj = document.getElementById('demo');
	currentSize = parseFloat(obj.style.fontSize); 
	document.getElementById('supp').value=parseInt(document.getElementById('supp').value,10)+1;
	obj.innerHTML="Number of Clicks: "+parseInt(document.getElementById('supp').value,10);
	obj.style.fontSize = (currentSize + .1) + "em";
	
}
