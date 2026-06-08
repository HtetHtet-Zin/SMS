/*******************************************************************************
 * $Date : 2013-12-10 $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
customOnload = function() {

	focusFieldByName("button", "confirmBtn", "submit");
}

/**
 * Focus on button box
 */
$(document).keypress(
		function(event) {
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				document.getElementById(
						'DIVIDEND_AMOUNT_DELETE_CONFIRM:confirmBtn').click();
				return false;
			}
		});

function disableBtn() {
	myButton.disable();
}