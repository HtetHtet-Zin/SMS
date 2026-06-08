/*******************************************************************************
 * $Date : 2013-12-01 $ 
 * $Author : Phyo Thinza Ko $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/


$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('SEARCH_CLIENT:searchClientBtn').click();
		return false;
	}
});
function disableBtn()
{
	myButton.disable();
}