/*******************************************************************************
 * $Date : 2014-01-24 $ 
 * $Author : Nu Yin Win $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
customOnload = function(){	
	
};

$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('USER_ROLE_UPDATE:confirmBtn').click();
		return false;
	}
});


function disableBtn()
{
	myButton.disable();
}