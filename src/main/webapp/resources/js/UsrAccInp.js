/*******************************************************************************
 * $Date : 2013-12-10 $ 
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
		document.getElementById('USER_ACCOUNT_INPUT:confirmBtn').click();
		return false;
	}
});
 

function removeRedBox()
{  
    $(".ui-state-error").removeClass("ui-state-error");  
}  
function disableBtn()
{
	myButton.disable();
}