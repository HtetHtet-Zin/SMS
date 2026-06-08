/*******************************************************************************
 * $Date : 2014-01-16 $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
customOnload = function() {

	focusFieldByName("button", "insertInitBtn", "submit");
}

/**
 * Focus on button box
 */
$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('DIVIDEND_AMOUNT_LIST:insertInitBtn').click();
		return false;
	}
});

function disableBtn() {
	myButton.disable();
}