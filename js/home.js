var aText = new Array(
"this is a funeral."
);
var iSpeed = 150; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var first = 1;
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }

 if(first){
 	destination.innerHTML = sContents + '&nbsp';
 	setTimeout("typewriter()", 1500);
	first = 0;
 }
 else{
	destination.innerHTML = sContents + '&nbsp' + aText[iIndex].substring(0, iTextPos);
	console.log(iTextPos + ": " + aText[iIndex].substring(0, iTextPos));

	 if ( iTextPos++ == iArrLength ) {
	  iTextPos = 0;
	  iIndex++;
	  if ( iIndex != aText.length ) {
	   iArrLength = aText[iIndex].length;
	   setTimeout("typewriter()", 500);
	  }
	 }
	 else {
	  setTimeout("typewriter()", iSpeed);
	 }
 }
}


typewriter();