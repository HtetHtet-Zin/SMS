/*******************************************************************************
 * $Date : 2013-12-10 $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
/*
customOnload = function() {

	focusFieldByName("button", "saveBtn", "submit");
}

 *//**
 * Focus on button box
 */
/*
$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('DIVIDEND_AMOUNT_INPUT_CONFIRM:saveBtn').click();
		return false;
	}
});*/
/**
 * Focus on text box
 */

customOnload = function() {

	document.getElementById('DIVIDEND_AMOUNT_INPUT_CONFIRM:saveBtn').focus();

};
/**
 * Enter Key Control.
 */
function onkeydown() {
	if (event.srcElement) {
		// When type is "submit", "button" or "textarea", Enter-Key is enable.
		if (event.srcElement.type != "submit"
				&& event.srcElement.type != "button"
				&& event.srcElement.type != "textarea") {
			// KeyCode:13(Enter-Key)
			if (event.keyCode == 13) {
				// Click the button that has id of "changeBtn".
				clickById("saveBt");
				return false;
			}
		}
	}
}
function disableBtn() {
	myButton.disable();
}
