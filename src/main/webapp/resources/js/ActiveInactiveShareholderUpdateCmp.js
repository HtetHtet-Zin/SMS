/*******************************************************************************
 * $Date : 2014-07-02 $ 
 * $Author : Thae Nu Khaing $ 
 * $Rev : 2.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
/*customOnload = function() {
 focusFieldByName("button", "ActiveShrHolderUpdCmpBtn", "submit");
 };*/
/**
 * Focus on text box
 */
customOnload = function() {

	focusFieldByName("input", "ActiveShrHolderUpdCmpBtn", "submit");
}

/**
 * Focus on button box
 */
$(document)
		.keypress(
				function(event) {
					var keycode = (event.keyCode ? event.keyCode : event.which);
					if (keycode == '13') {
						document
								.getElementById(
										'ACTIVE_INACTIVE_SHAREHOLDERLIST_CMP:ActiveShrHolderUpdCmpBtn')
								.click();
						return false;
					}
				});

function disableBtn()
{
	myButton.disable();
}
