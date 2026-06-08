/*******************************************************************************
 * $Date : 2014-01-22 $ 
 * $Author : Thae Nu Khaing $ 
 * $Rev : 2.0 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */

$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('ShreTypeInpCmp:shreTypeCmpBtn').click();
		return false;
	}
});
function disableBtn()
{
	myButton.disable();
}