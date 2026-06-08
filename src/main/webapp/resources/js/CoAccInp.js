/*******************************************************************************
 * $Date : 2013-12-01 $ $Author : Aung Myo Linn $ $Rev : 1.00 $ Copyright (c)
 * 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

customOnload = function() {

}

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
				clickById("CoAccInpBtn");
				return false;
			}
		}
	}
}
function removeRedBox() {
	$(".ui-state-error").removeClass("ui-state-error");
}

function addPhoneRow(tableID, id) {

	if (id == '0') {
		document.getElementById('ca0').style.display = 'none';
	} else if (id == '1') {
		document.getElementById('ca1').style.display = 'none';
		document.getElementById('cr0').style.display = 'none';
	} else if (id == '2') {
		document.getElementById('ca2').style.display = 'none';
		document.getElementById('cr1').style.display = 'none';
	}

	var num = ++id;
	document.getElementById(num).style.display = '';
}

function deletePhoneRow(tableID, id) {

	var phoneValue1 = document
			.getElementById('CORPORATE_ACCOUNT_INPUT:phoneNo1');
	var phoneValue2 = document
			.getElementById('CORPORATE_ACCOUNT_INPUT:phoneNo2');
	var phoneValue3 = document
			.getElementById('CORPORATE_ACCOUNT_INPUT:phoneNo3');

	if (id == '3') {
		phoneValue3.value = "";
		document.getElementById('ca2').style.display = '';
		document.getElementById('cr1').style.display = '';
	} else if (id == '2') {
		phoneValue2.value = "";
		document.getElementById('ca1').style.display = '';
		document.getElementById('cr0').style.display = '';
	} else if (id == '1') {
		phoneValue1.value = "";
		document.getElementById('ca0').style.display = '';
	}

	document.getElementById(id).style.display = 'none';
}

function disableBtn() {
	myButton.disable();
}