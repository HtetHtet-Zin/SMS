/*******************************************************************************
 * $Date : 2013-12-11 $ 
 * $Author : Thae Nu Khaing $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
function onload() {

}
/**
 * Enter Key Control.
 */
customOnload = function(){	
	document.getElementById('USER_ACCOUNT_INPUT_CONFIRM:saveBtn').focus();
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
				clickById("saveBtn");
				return false;
			}
		}
	}
}
function disableBtn()
{
	myButton.disable();
}