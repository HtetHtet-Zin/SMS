/*******************************************************************************
 * $Date : 2014-01-21 $ 
 * $Author : Thae Nu Khaing $ 
 * $Rev : 2.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 * 
 */
$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('SHRE_TYPE_UPDATE:updateConfirmBtn').click();
		return false;
	}
});
function disableBtn()
{
	myButton.disable();
}
