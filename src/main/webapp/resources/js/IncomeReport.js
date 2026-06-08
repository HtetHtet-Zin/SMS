/*******************************************************************************
 * $Date :		08-07-2014 $ 
 * $Author :	Khaing Sandar Pyae $ 
 * $Rev :		1.00 $ 
 * Copyright (c) 2014 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('INCOME_REPORT:searchRptBtn').click();
		return false;
	}
});
function disableBtn()
{
	myButton.disable();
}