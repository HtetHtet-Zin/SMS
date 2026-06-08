/*******************************************************************************
 * $Date : 2013-12-01
 * $Author : Aung Myo Linn
 * $Rev : 1.00
 * $Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

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
			.getElementById('INDIVIDUAL_ACCOUNT_INPUT:phoneNo1');
	var phoneValue2 = document
			.getElementById('INDIVIDUAL_ACCOUNT_INPUT:phoneNo2');
	var phoneValue3 = document
			.getElementById('INDIVIDUAL_ACCOUNT_INPUT:phoneNo3');

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

$(document).keypress(
		function(event) {
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:InAccInpBtn')
						.click();
				return false;
			}
		});
function removeRedBox() {
	$(".ui-state-error").removeClass("ui-state-error");
}
function disableBtn()
{
	myButton.disable();
}