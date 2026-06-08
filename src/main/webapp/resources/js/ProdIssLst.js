/*******************************************************************************
 * $Date : 2013-12-11 $ 
 * $Author : Thae Nu Khaing $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('ProdIssLst:insertInitBtn').click();
		return false;
	}
});
function disableBtn()
{
	myButton.disable();
}