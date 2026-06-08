/*******************************************************************************
 * $Date : 2014-06-25 $ 
 * $Author : Thant Htoo Zin $ 
 * $Rev : 1.00 
 * $Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/
/*******************************************************************************
 * $Modified Date: 2017-07-12, 2017-07-14 $  
 * $Modified By: Wer Wer Win Thu, Pyi Thein Kyaw $  
 * $Rev: 2.3 $  
 * $Revision Explanation: Revised for No:24 of code development history file.   
 * Copyright (c) 2017 DIR-ACE Technology Ltd. All Rights Reserved.  
 ******************************************************************************/
/*******************************************************************************
 * $Modified Date: 2017-07-25 $  
 * $Modified By: Lin Lin Tun, Shwe Sin Ei Myat $  
 * $Rev: 2.4 $  
 * $Revision Explanation: Revised for No:33 of code development history file.   
 * Copyright (c) 2017 DIR-ACE Technology Ltd. All Rights Reserved.  
 ******************************************************************************/
/*******************************************************************************
 * Add/Remove for name rows
 ******************************************************************************/

function addButton(id) {
	
	if (id == '0') {
	
		var name1Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name1');
		var nrc1Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc1');
		
		if(!name1Field.readOnly && !nrc1Field.readOnly) {
			
			if (name1Field.value.trim().length != 0 && nrc1Field.value.trim().length != 0) {
				
				document.getElementById("a0").style.display = '';
				
			}else{
				
				document.getElementById("a0").style.display = 'none';
			}
		} else {
			
			document.getElementById("a0").style.display = 'none';
		}
	}else if (id == '1'){
		
		var name2Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name2');
		var nrc2Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc2');
		
		if(!name2Field.readOnly && !nrc2Field.readOnly) {
			
			if (name2Field.value.trim().length != 0 && nrc2Field.value.trim().length != 0) {
				
				document.getElementById("a1").style.display = '';
				
			}else{
				
				document.getElementById("a1").style.display = 'none';
			}
		} else {
			
			document.getElementById("a1").style.display = 'none';
		}
		
	}else if (id == '2'){
		
		var name3Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name3');
		var nrc3Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc3');
		
		if(!name3Field.readOnly && !nrc3Field.readOnly) {
			
			if (name3Field.value.trim().length != 0 && nrc3Field.value.trim().length != 0) {
				
				document.getElementById("a2").style.display = '';
				
			}else{
				
				document.getElementById("a2").style.display = 'none';
			}
		} else {
			
			document.getElementById("a2").style.display = 'none';
		}
		
	}else if (id == '3'){
		
		var name4Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name4');
		var nrc4Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc4');
		
		if(!name4Field.readOnly && !nrc4Field.readOnly) {
			
			if (name4Field.value.trim().length != 0 && nrc4Field.value.trim().length != 0) {
				
				document.getElementById("a3").style.display = '';
				
			}else{
				
				document.getElementById("a3").style.display = 'none';
			}
		} else {
			
			document.getElementById("a3").style.display = 'none';
		}
		
	}else if(id == '4'){
		
		var name5Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name5');
		var nrc5Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc5');
		
		if(!name5Field.readOnly && !nrc5Field.readOnly) {
			
			if (name5Field.value.trim().length != 0 && nrc5Field.value.trim().length != 0) {
				
				document.getElementById("a4").style.display = '';
				
			}else{
				
				document.getElementById("a4").style.display = 'none';
			}
		} else {
			
			document.getElementById("a4").style.display = 'none';
		}
		
	}else if(id == '5'){
		
		var name6Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name6');
		var nrc6Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc6');
		
		if(!name6Field.readOnly && !nrc6Field.readOnly) {
			
			if (name6Field.value.trim().length != 0 && nrc6Field.value.trim().length != 0) {
				
				document.getElementById("a5").style.display = '';
				
			}else{
				
				document.getElementById("a5").style.display = 'none';
			}
		} else {
			
			document.getElementById("a5").style.display = 'none';
		}
		
	}else if(id == '6'){
		
		var name7Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name7');
		var nrc7Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc7');
		
		if(!name7Field.readOnly && !nrc7Field.readOnly) {
			
			if (name7Field.value.trim().length != 0 && nrc7Field.value.trim().length != 0) {
				
				document.getElementById("a6").style.display = '';
				
			}else{
				
				document.getElementById("a6").style.display = 'none';
			}
		} else {
			
			document.getElementById("a6").style.display = 'none';
		}
		
	}else if(id == '7'){
		
		var name8Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name8');
		var nrc8Field = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc8');
		
		if(!name8Field.readOnly && !nrc8Field.readOnly) {
			
			if (name8Field.value.trim().length != 0 && nrc8Field.value.trim().length != 0) {
				
				document.getElementById("a7").style.display = '';
				
			}else{
				
				document.getElementById("a7").style.display = 'none';
			}
		} else {
			
			document.getElementById("a7").style.display = 'none';
		}
		
	}
	
}


function addRow(tableID, id) {

	if (id == '0') {
		
		document.getElementById('a0').style.display = 'none';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name1').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc1').readOnly  = true;
		
		document.getElementById('a1').style.display = 'none';
		document.getElementById('r0').style.display = '';
		
	} else if (id == '1') {
		
		document.getElementById('a1').style.display = 'none';
		document.getElementById('r0').style.display = 'none';		
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name2').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc2').readOnly  = true;
		
		document.getElementById('a2').style.display = 'none';
		document.getElementById('r1').style.display = '';
		
	} else if (id == '2') {
		
		document.getElementById('a2').style.display = 'none';
		document.getElementById('r1').style.display = 'none';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name3').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc3').readOnly  = true;
		
		document.getElementById('a3').style.display = 'none';
		document.getElementById('r2').style.display = '';
		
	} else if (id == '3') {
		
		document.getElementById('a3').style.display = 'none';
		document.getElementById('r2').style.display = 'none';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name4').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc4').readOnly  = true;
		
		document.getElementById('a4').style.display = 'none';
		document.getElementById('r3').style.display = '';
		
	} else if (id == '4') {
		
		document.getElementById('a4').style.display = 'none';
		document.getElementById('r3').style.display = 'none';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name5').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc5').readOnly  = true;
		
		document.getElementById('a5').style.display = 'none';
		document.getElementById('r4').style.display = '';
		
	} else if (id == '5') {
		
		document.getElementById('a5').style.display = 'none';
		document.getElementById('r4').style.display = 'none';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name6').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc6').readOnly  = true;
		
		document.getElementById('a6').style.display = 'none';
		document.getElementById('r5').style.display = '';
		
	} else if (id == '6') {
		
		document.getElementById('a6').style.display = 'none';
		document.getElementById('r5').style.display = 'none';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name7').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc7').readOnly  = true;
		
		document.getElementById('a7').style.display = 'none';
		document.getElementById('r6').style.display = '';
		
	} else if (id == '7') {
		
		document.getElementById('a7').style.display = 'none';
		document.getElementById('r6').style.display = 'none';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name8').readOnly  = true;
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc8').readOnly  = true;		
	}

	var num = ++id;
	document.getElementById(num).style.display = '';
}

function deleteRow(tableID, id) {

	var nameField1 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name1');
	var nameField2 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name2');
	var nameField3 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name3');
	var nameField4 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name4');
	var nameField5 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name5');
	var nameField6 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name6');
	var nameField7 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name7');
	var nameField8 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name8');
	var nameField9 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name9');

	var nrcField1 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc1');
	var nrcField2 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc2');
	var nrcField3 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc3');
	var nrcField4 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc4');
	var nrcField5 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc5');
	var nrcField6 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc6');
	var nrcField7 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc7');
	var nrcField8 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc8');
	var nrcField9 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc9');

	if (id == '8') {
		nrcField9.value = "";
		nameField9.value = "";
		document.getElementById('a7').style.display = '';
		document.getElementById('r6').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName9').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc9').style.display = 'none';
		
		nameField8.readOnly = false;
		nrcField8.readOnly = false;	
	} else if (id == '7') {
		nrcField8.value = "";
		nameField8.value = "";
		document.getElementById('a6').style.display = '';
		document.getElementById('r5').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName8').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc8').style.display = 'none';
		
		document.getElementById('a7').style.display = 'none';
		document.getElementById('r6').style.display = 'none';
		
		nameField7.readOnly = false;
		nrcField7.readOnly = false;
		
	} else if (id == '6') {
		nrcField7.value = "";
		nameField7.value = "";
		document.getElementById('a5').style.display = '';
		document.getElementById('r4').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName7').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc7').style.display = 'none';
		
		document.getElementById('a6').style.display = 'none';
		document.getElementById('r5').style.display = 'none';
		
		nameField6.readOnly = false;
		nrcField6.readOnly = false;
	} else if (id == '5') {
		nrcField6.value = "";
		nameField6.value = "";
		document.getElementById('a4').style.display = '';
		document.getElementById('r3').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName6').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc6').style.display = 'none';
		
		document.getElementById('a5').style.display = 'none';
		document.getElementById('r4').style.display = 'none';
		
		nameField5.readOnly = false;
		nrcField5.readOnly = false;	
	} else if (id == '4') {
		nrcField5.value = "";
		nameField5.value = "";
		document.getElementById('a3').style.display = '';
		document.getElementById('r2').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName5').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc5').style.display = 'none';
		
		document.getElementById('a4').style.display = 'none';
		document.getElementById('r3').style.display = 'none';
		
		nameField4.readOnly = false;
		nrcField4.readOnly = false;	
	} else if (id == '3') {
		nrcField4.value = "";
		nameField4.value = "";
		document.getElementById('a2').style.display = '';
		document.getElementById('r1').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName4').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc4').style.display = 'none';
		
		document.getElementById('a3').style.display = 'none';
		document.getElementById('r2').style.display = 'none';
		
		nameField3.readOnly = false;
		nrcField3.readOnly = false;	
	} else if (id == '2') {
		nrcField3.value = "";
		nameField3.value = "";
		document.getElementById('a1').style.display = '';
		document.getElementById('r0').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName3').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc3').style.display = 'none';
		
		document.getElementById('a2').style.display = 'none';
		document.getElementById('r1').style.display = 'none';
		
		nameField2.readOnly = false;
		nrcField2.readOnly = false;	
	} else if (id == '1') {
		nrcField2.value = "";
		nameField2.value = "";
		document.getElementById('a0').style.display = '';
		
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName2').style.display = 'none';
		document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc2').style.display = 'none';
		
		document.getElementById('a1').style.display = 'none';
		document.getElementById('r0').style.display = 'none';
		
		nameField1.readOnly = false;
		nrcField1.readOnly = false;	
	}

	document.getElementById(id).style.display = 'none';
}

function resetRow() {
	document.getElementById('1').style.display = 'none';
	document.getElementById('2').style.display = 'none';
	document.getElementById('3').style.display = 'none';
	document.getElementById('4').style.display = 'none';
	document.getElementById('5').style.display = 'none';
	document.getElementById('6').style.display = 'none';
	document.getElementById('7').style.display = 'none';
	document.getElementById('8').style.display = 'none';
}

/*******************************************************************************
 * Add/Remove for phone number rows
 ******************************************************************************/

function addPhoneRow(tableID, id) {
	if (id == '20') {
		document.getElementById('ca0').style.display = 'none';
	} else if (id == '21') {
		document.getElementById('ca1').style.display = 'none';
		document.getElementById('cr0').style.display = 'none';
	} else if (id == '22') {
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

	if (id == '23') {
		phoneValue3.value = "";
		document.getElementById('ca2').style.display = '';
		document.getElementById('cr1').style.display = '';
	} else if (id == '22') {
		phoneValue2.value = "";
		document.getElementById('ca1').style.display = '';
		document.getElementById('cr0').style.display = '';
	} else if (id == '21') {
		phoneValue1.value = "";
		document.getElementById('ca0').style.display = '';
	}

	document.getElementById(id).style.display = 'none';
}
function disableBtn() {
	myButton.disable();
}

//hide required message when there is data and click tab
function checkMsg(id) {

	if(id=='0')
		{
		var name1 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name1');
		var nrc1 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc1');
		if (name1.value.trim().length != 0)
			{
				document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName1').style.display = 'none';
			}
		if (nrc1.value.trim().length != 0)
			{
				document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc1').style.display = 'none';
			}
		}
	
	if(id=='1')
	{
	var name2 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name2');
	var nrc2 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc2');
	if (name2.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName2').style.display = 'none';
		}
	if (nrc2.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc2').style.display = 'none';
		}
	}
	
	if(id=='2')
	{
	var name3 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name3');
	var nrc3 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc3');
	if (name3.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName3').style.display = 'none';
		}
	if (nrc3.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc3').style.display = 'none';
		}
	}
	
	if(id=='3')
	{
	var name4 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name4');
	var nrc4 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc4');
	if (name4.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName4').style.display = 'none';
		}
	if (nrc4.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc4').style.display = 'none';
		}
	}
	
	if(id=='4')
	{
	var name5 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name5');
	var nrc5 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc5');
	if (name5.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName5').style.display = 'none';
		}
	if (nrc5.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc5').style.display = 'none';
		}
	}
	
	if(id=='5')
	{
	var name6 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name6');
	var nrc6 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc6');
	if (name6.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName6').style.display = 'none';
		}
	if (nrc6.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc6').style.display = 'none';
		}
	}
	
	if(id=='6')
	{
	var name7 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name7');
	var nrc7 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc7');
	if (name7.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName7').style.display = 'none';
		}
	if (nrc7.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc7').style.display = 'none';
		}
	}
	
	if(id=='7')
	{
	var name8 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name8');
	var nrc8 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc8');
	if (name8.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName8').style.display = 'none';
		}
	if (nrc8.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc8').style.display = 'none';
		}
	}
	
	if(id=='8')
	{
	var name9 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:name9');
	var nrc9 = document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:nrc9');
	if (name9.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgName9').style.display = 'none';
		}
	if (nrc9.value.trim().length != 0)
		{
			document.getElementById('INDIVIDUAL_ACCOUNT_INPUT:msgNrc9').style.display = 'none';
		}
	}		
}
