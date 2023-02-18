// JavaScript Document
function validateSignUpForm () {
	//validate if the user name field is empty or not
	if(isNull('introducers')){

		//validate if the given email is empty or not
		if(isNull('newAccountName')){
			// return true indicates that the form has been 
			// validated successfully
			return true;
		}
	}
	return false;
}
function validateAgreementForm () {
	//validate if the user name field is empty or not
	if(isChecked('policyAgree')){
		return true;
	}
	return false;
}
function validateProductidForm (val) {	
	//alert(val);
	if(val == '1'){
		if(isNull('productidTxt1')){
			// return true indicates that the form has been 
			// validated successfully
			return true;
		}	
	}else if(val == '3'){
		if(isNull('productidTxt1')){	
			//validate if the given email is empty or not
			if(isNull('productidTxt2')){
				if(isNull('productidTxt3')){
					// return true indicates that the form has been 
					// validated successfully
					return true;
				}
			}
		}		
	}else if(val == '7'){
		if(isNull('productidTxt1')){	
			//validate if the given email is empty or not
			if(isNull('productidTxt2')){
				if(isNull('productidTxt3')){
					if(isNull('productidTxt4')){
						if(isNull('productidTxt5')){
							if(isNull('productidTxt6')){
								if(isNull('productidTxt7')){
									// return true indicates that the form has been 
									// validated successfully
									return true;
								}
							}
						}
					}
				}
			}
		}		
	}else if(val == '15'){
		if(isNull('productidTxt1')){	
			//validate if the given email is empty or not
			if(isNull('productidTxt2')){
				if(isNull('productidTxt3')){
					if(isNull('productidTxt4')){
						if(isNull('productidTxt5')){
							if(isNull('productidTxt6')){
								if(isNull('productidTxt7')){
									if(isNull('productidTxt8')){
										if(isNull('productidTxt9')){
											if(isNull('productidTxt10')){
												if(isNull('productidTxt11')){
													if(isNull('productidTxt12')){
														if(isNull('productidTxt13')){
															if(isNull('productidTxt14')){
																if(isNull('productidTxt15')){
																	// return true indicates that the form has been 
																	// validated successfully
																	return true;
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}		
	}
	return false;
}
function validateRegistrationForm () {
	if(valForm()){	
		if(isNull('firstNameTxt')){	
			if(isNull('nationalIdTxt')){
				if(isNull('fatherNameTxt')){
					if(isNull('motherNameTxt')){
						if(isNull('parmanentAddressTxt')){
							/*if(isSelect('dobDate')){
								if(isSelect('dobMonth')){
									if(isSelect('dobYear')){
										if(isNull('districtTxt')){
											if(isNull('policeStationTxt')){
												if(isNull('mobileTxt')){
													if(isNull('nomineeFullNameTxt')){
														if(isSelect('dobDateNominee')){
															if(isSelect('dobMonthNominee')){
																if(isSelect('dobYearNominee')){
																	if(isNull('relationshipTxt')){
																		// return true indicates that the form has been 
																		// validated successfully
																		return true;
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}*/
							return true;
						}
					}
				}
			}
		}
	}
	return false;
}
function validateMemberSearchForm(){
	if(isNull('subMemberLoginId')){	
		return true;
	}
	return false;
}
function validateContactAdminForm(){
	if(isNull('ca_memEmailTxt')){	
		if(isNull('ca_contactTxt')){	
			if(isNull('ca_emailSubjectTxt')){	
				if(isNull('ca_emailMsgTa')){	
					return true;
				}
			}
		}
	}
	return false;
}
function validateUpdateProfileForm () {
	if(isNull('memberFullName')){	
		if(isNull('memberVoterId')){
			if(isNull('memberFatherName')){
				if(isNull('memberMotherName')){
					if(isNull('memberParmanentAddress')){
						if(isSelect('dobDate')){
							if(isSelect('dobMonth')){
								if(isSelect('dobYear')){
									if(isNull('memberDistrict')){
										if(isNull('memberPoliceStation')){
											if(isNull('memberPhoneNumber')){
												if(isNull('memberEmail')){
													if(isNull('memberNomineeName')){
														if(isSelect('dobDateNominee')){
															if(isSelect('dobMonthNominee')){
																if(isSelect('dobYearNominee')){
																	if(isNull('memberRelationWithNominee')){
																		// return true indicates that the form has been 
																		// validated successfully
																		return true;
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}

function validatePasswordUpdateForm(){
	if(isNull('puf_memberCPassword')){	
		if(isNull('puf_memberNPassword')){	
			if(isNull('puf_memberConPassword')){	
				if(document.getElementById('puf_memberNPassword').value != document.getElementById('puf_memberConPassword').value){	
					alert("Sorry, new password and confirm password do not match.");
					document.getElementById('puf_memberNPassword').style.border = '1px solid #990000';
					document.getElementById('puf_memberNPassword').focus();
				}else{
					return true;
				}
			}
		}
	}
	return false;
}
