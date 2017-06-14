$(document).ready(function() {
	//Ans Array:
	var ans = ["segregation", "theatre", "vat", "tapeta", "taxcredits", "soldiers", "nap", "nine", "netmigration", "nil", "sim", "tablespoon"];

	//Input grids insertion:
	var input_button = "<input type=button class=input-btns>";
	var input_text = "<input type=text class=letters-box minlength=1 maxlength=1 required=required>";
	var input_text_attrs = ["<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=down clues=11>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=across clues=7>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=across clues=3>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=down clues=6>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=down clues=10>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=down clues=8>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=across clues=3>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=down clues=4>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=across clues=12>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=across clues=3>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=across clues=3>",
							"<input class=letters-box type=text minlength=1 maxlength=1 required=required direction=across clues=10>"];

	$('.cw-row-1').append(input_button, input_button, input_button, input_button, input_text_attrs[0], input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-2').append(input_button, input_button, input_text_attrs[1], input_text, input_text_attrs[0], input_text, input_text, input_text, input_text, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-3, .cw-row-4').append(input_button, input_button, input_button, input_button, input_text_attrs[0], input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-5').append(input_text_attrs[2], input_text, input_text_attrs[3], input_button, input_text_attrs[0], input_button, input_text_attrs[4], input_button, input_button, input_text_attrs[5], input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-6').append(input_button, input_button, input_text, input_button, input_text_attrs[0], input_button, input_text, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-7').append(input_button, input_button, input_text, input_button, input_text_attrs[0], input_button, input_text, input_button, input_button, input_text, input_button, input_text_attrs[6], input_text, input_text, input_button);
	$('.cw-row-8').append(input_button, input_button, input_text, input_button, input_text_attrs[0], input_button, input_text, input_button, input_button, input_text, input_button, input_text, input_button, input_button, input_button);
	$('.cw-row-9').append(input_text_attrs[8], input_text, input_text, input_text, input_text_attrs[0], input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_button, input_button, input_button);
	$('.cw-row-10').append(input_button, input_button, input_text, input_button, input_text_attrs[0], input_button, input_text, input_button, input_button, input_text, input_button, input_text, input_button, input_button, input_button);
	$('.cw-row-11').append(input_button, input_button, input_button, input_button, input_text_attrs[0], input_button, input_text, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-12').append(input_button, input_button, input_button, input_button, input_button, input_text_attrs[9], input_text, input_text, input_button, input_text_attrs[10], input_text, input_text, input_button, input_button, input_button);
	$('.cw-row-13').append(input_button, input_button, input_button, input_button, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-14').append(input_button, input_text_attrs[11], input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_button, input_button, input_button, input_button);
	$('.cw-row-15').append(input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);

	//CSS classes added to below types of input fields:
	$('input[type=text]').addClass('row-boxes');
	$('input[type=button]').addClass('row-boxes cw-grayed');

	//Across clues insertion:
	var clues_across = ["2. It is a name for cinema or activity halls",
						"3. A short form for value added tax",
						"7. Which is a palindrome for pan!",
						"8. It is the difference between the number of immigrants and the number of emigrants throughout the year!",
						"9.	A word to say if the value is zero",
						"10. It is used in GSM mobile phones to make it easier to switch between networks!",
						"11. It is a cutlery, measures 15 ml of liquid measurement!"];

	$("#clue2").append(clues_across[0]);
	$("#clue3").append(clues_across[1]);
	$("#clue7a").append(clues_across[2]);
	$("#clue8").append(clues_across[3]);
	$('#clue9').append(clues_across[4]);
	$('#clue10').append(clues_across[5]);
	$('#clue11').append(clues_across[6]);

	//Down clues insertion:
	var clues_down = ["1. Synonym for separation when we categorize things!",
					"4. This is a finest synthetic material used for the track surface of a horse racing track!",
					"5. This means concession to pay less tax! for ex. who responsible for kids or on low income",
					"6. They safeguard respective citizens and countries border",
					"7. Traditional planets in Solar system quantity"];

	$("#clue1").append(clues_down[0]);
	$("#clue4").append(clues_down[1]);
	$("#clue5").append(clues_down[2]);
	$("#clue6").append(clues_down[3]);
	$("#clue7d").append(clues_down[4]);

	//To retain the toggled content open:
	/*$(".feedback-panel").toggle('slow', function() {
		$('.feedback-panel').css("display", "block");
	});*/

	//feedback display upon clicking event:
	$("#submit").click(function() {
		$(".feedback-panel").toggle('slow');
	});

	//To dis-allow the exceptance of special characters and numbers:
	$('input').on('keypress', function (event) {
	    var regex = new RegExp(/^[a-z]+$/i);
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	       event.preventDefault();
	       return false;
	    }
	});

	//Adding 'id' attribute and auto-increment for each inpt[type=text] of all rows:
	var row1_id_nums = 5;
	$('.cw-row-1 input[type=text]').attr('id', 'row1-' + row1_id_nums);
	$('#row1-5').attr('placeholder', '1');

	var row2_id_nums = 3;
	$('.cw-row-2 input[type=text]').each(function() {
		$(this).attr('id', 'row2-' + row2_id_nums);
		row2_id_nums++;
	});
	$('#row2-3').attr('placeholder', '2');

	var row3_id_num = 5;
	$('.cw-row-3 input[type=text]').attr('id', 'row3-' + row3_id_num);

	var row4_id_num = 5;
	$('.cw-row-4 input[type=text]').attr('id', 'row4-' + row4_id_num);

	var row5_id_nums = 1;
	$('.cw-row-5 input[type=text]').each(function() {
		$(this).attr('id', 'row5-' + row5_id_nums);
		row5_id_nums++;
	});
	$('#row5-1').attr('placeholder', '3');
	$('#row5-3').attr('placeholder', '4');
	$('#row5-5').attr('placeholder', '5');
	$('#row5-6').attr('placeholder', '6');

	var row6_id_nums = 3;
	$('.cw-row-6 input[type=text]').each(function() {
		$(this).attr('id', 'row6-' + row6_id_nums);
		row6_id_nums++;
	});

	var row7_id_nums = 3;
	$('.cw-row-7 input[type=text]').each(function() {
		$(this).attr('id', 'row7-' + row7_id_nums);
		row7_id_nums++;
	});
	$('#row7-7').attr('placeholder', '7');

	var row8_id_nums = 3;
	$('.cw-row-8 input[type=text]').each(function() {
		$(this).attr('id', 'row8-' + row8_id_nums);
		row8_id_nums++;
	});

	var row9_id_nums = 1;
	$('.cw-row-9 input[type=text]').each(function() {
		$(this).attr('id', 'row9-' + row9_id_nums);
		row9_id_nums++;
	});
	$('#row9-1').attr('placeholder', '8');

	var row10_id_nums = 3;
	$('.cw-row-10 input[type=text]').each(function() {
		$(this).attr('id', 'row10-' + row10_id_nums);
		row10_id_nums++;
	});

	var row11_id_nums = 5;
	$('.cw-row-11 input[type=text]').each(function() {
		$(this).attr('id', 'row11-' + row11_id_nums);
		row11_id_nums++;
	});

	var row12_id_nums = 6;
	$('.cw-row-12 input[type=text]').each(function() {
		$(this).attr('id', 'row12-' + row12_id_nums);
		row12_id_nums++;
	});
	$('#row12-6').attr('placeholder', '9');
	$('#row12-9').attr('placeholder', '10');

	var row13_id_num = 7;
	$('.cw-row-13 input[type=text]').attr('id', 'row13-' + row13_id_num);

	var row14_id_nums = 2;
	$('.cw-row-14 input[type=text]').each(function() {
		$(this).attr('id', 'row14-' + row14_id_nums);
		row14_id_nums++;
	});
	$('#row14-2').attr('placeholder', '11');

	//Assigning value to the input boxes upon clicking the 'auto-complete' button:
	$('#auto-submit').click(function() {
		var rows = $('input[direction]');
		var ans1Down = ["#row1-5", "#row2-5", "#row3-5", "#row4-5", "#row5-4", "#row6-4", "#row7-4", "#row8-4", "#row9-5", "#row10-4", "#row11-5"];
		var ans2Across = ["#row2-3", "#row2-4", "#row2-5", "#row2-6", "#row2-7", "#row2-8", "#row2-9"];
		var ans3Across = ["#row5-1", "#row5-2", "#row5-3"];
		var ans4Down = ["#row5-3", "#row6-3", "#row7-3", "#row8-3", "#row9-3", "#row10-3"];
		var ans5Down = ["#row5-5", "#row6-5", "#row7-5", "#row8-5", "#row9-7", "#row10-5", "#row11-6", "#row12-7", "#row13-7", "#row14-7"];
		var ans6Down = ["#row5-6", "#row6-6", "#row7-6", "#row8-6", "#row9-10", "#row10-6", "#row11-7", "#row12-9"];
		var ans7Across = ["#row7-7", "#row7-8", "#row7-9"];
		var ans7Down = ["#row7-7", "#row8-7", "#row9-12", "#row10-7"];
		var ans8Across = ["#row9-1", "#row9-2", "#row9-3", "#row9-4", "#row9-5", "#row9-6", "#row9-7", "#row9-8", "#row9-9", "#row9-10", "#row9-11", "#row9-12"];
		var ans9Across = ["#row12-6", "#row12-7", "#row12-8"];
		var ans10Across = ["#row12-9", "#row12-10", "#row12-11"];
		var ans11Across = ["#row14-2", "#row14-3", "#row14-4", "#row14-5", "#row14-6", "#row14-7", "#row14-8", "#row14-9", "#row14-10", "#row14-11"];
		//Generates Ans1-Down:
		$.each(ans1Down, function(i, val) {
			$(val).val(ans[0][i]).addClass('auto-fill-style');
		});
		//Generates Ans2-Across:
		$.each(ans2Across, function(i, val) {
			$(val).val(ans[1][i]).addClass('auto-fill-style');
		});
		//Generates Ans3-Across:
		$.each(ans3Across, function(i, val) {
			$(val).val(ans[2][i]).addClass('auto-fill-style');
		});
		//Generates Ans4-Down:
		$.each(ans4Down, function(i, val) {
			$(val).val(ans[3][i]).addClass('auto-fill-style');
		});
		//Generates Ans5-Down:
		$.each(ans5Down, function(i, val) {
			$(val).val(ans[4][i]).addClass('auto-fill-style');
		});
		//Generates Ans6-Down:
		$.each(ans6Down, function(i, val) {
			$(val).val(ans[5][i]).addClass('auto-fill-style');
		});
		//Generates Ans7-Across:
		$.each(ans7Across, function(i, val) {
			$(val).val(ans[6][i]).addClass('auto-fill-style');
		});
		//Generates Ans7-Down:
		$.each(ans7Down, function(i, val) {
			$(val).val(ans[7][i]).addClass('auto-fill-style');
		});
		//Generates Ans8-Across:
		$.each(ans8Across, function(i, val) {
			$(val).val(ans[8][i]).addClass('auto-fill-style');
		});
		//Generates Ans9-Across:
		$.each(ans9Across, function(i, val) {
			$(val).val(ans[9][i]).addClass('auto-fill-style');
		});
		//Generates Ans10-Across:
		$.each(ans10Across, function(i, val) {
			$(val).val(ans[10][i]).addClass('auto-fill-style');
		});
		//Generates Ans11-Across:
		$.each(ans11Across, function(i, val) {
			$(val).val(ans[11][i]).addClass('auto-fill-style');
		});
	});

	//To disable the typing by the user:
	$('#feedback-context').focus(function() {
		$(this).blur().removeClass('corMatch wroMatch');
	});	

	//Moving cursor from one to another text box automatically upon detecting direction attribute:
	$('#row1-5').keypress(function() {
		var self = $(this);
		setTimeout(function(){
			if (self.val().length >= 1) {
				$('#row2-5').focus().keypress(function() {
					setTimeout(function(){
						if (self.val().length >= 1) {
							$('#row3-5').focus().keypress(function() {
								setTimeout(function(){
									if (self.val().length >= 1) {
										$('#row4-5').focus().keypress(function() {
											setTimeout(function(){
												$('#row5-4').focus().keypress(function() {
													setTimeout(function(){
														if (self.val().length >= 1) {
															$('#row6-4').focus().keypress(function() {
																setTimeout(function(){
																	if (self.val().length >= 1) {
																		$('#row7-4').focus().keypress(function() {
																			setTimeout(function(){
																				if (self.val().length >= 1) {
																					$('#row8-4').focus().keypress(function() {
																						setTimeout(function(){
																							if (self.val().length >= 1) {
																								$('#row9-5').focus().keypress(function() {
																									setTimeout(function(){
																										if (self.val().length >= 1) {
																											$('#row10-4').focus().keypress(function() {
																												setTimeout(function(){
																													if (self.val().length >= 1) {
																														$('#row11-5').focus();
																													};
																												}, 1);
																											});
																										};
																									}, 1);
																								});
																							};
																						}, 1);
																					});
																				};
																			}, 1);
																		});
																	};
																}, 1);
															});
														};
													}, 1);
												});
											}, 1);
										});
									};
								}, 1);
							});
						};
					}, 1);
				});
			};
		}, 1);
	});
	$('#row2-3').keypress(function() {
		var self = $(this);
		setTimeout(function() {
			if (self.val().length >= 1) {
				$('#row2-4').focus().keypress(function() {
					setTimeout(function() {
						if (self.val().length >= 1) {
							$('#row2-5').focus().keypress(function() {
								setTimeout(function(){
									if (self.val().length >= 1) {
										$('#row2-6').focus().keypress(function() {
											setTimeout(function() {
												if (self.val().length >= 1) {
													$('#row2-7').focus().keypress(function() {
														setTimeout(function() {
															if (self.val().length >= 1) {
																$('#row2-8').focus().keypress(function() {
																	setTimeout(function(){
																		if (self.val().length >= 1) {
																			$('#row2-9').focus();
																		};
																	}, 1);
																});
															};
														}, 1);
													});
												};
											}, 1);
										});
									};
								}, 1)
							});
						};
					}, 1);
				});
			}
		}, 1);
	});
	$('#row5-1').keypress(function() {
		var self = $(this);
		//Wait until character is inserted:
		setTimeout(function() {
			if (self.val().length >= 1) {
				$('#row5-2').focus().keypress(function() {
					setTimeout(function() {
						if (self.val().length >= 1) {
							$('#row5-3').focus();
						};
					}, 1);
				});
			}
		}, 1);
	});
	$('#row5-3').keypress(function() {
		var self = $(this);
		setTimeout(function() {
			if (self.val().length >= 1) {
				$('#row6-3').focus().keypress(function() {
					setTimeout(function() {
						if (self.val().length >= 1) {
							$('#row7-3').focus().keypress(function() {
								setTimeout(function(){
									if (self.val().length >= 1) {
										$('#row8-3').focus().keypress(function() {
											setTimeout(function() {
												if (self.val().length >= 1) {
													$('#row9-3').focus().keypress(function() {
														setTimeout(function() {
															if (self.val().length >= 1) {
																$('#row10-3').focus();
															};
														}, 1);
													});
												};
											}, 1);
										});
									};
								}, 1)
							});
						};
					}, 1);
				});
			}
		}, 1);
	});
	$('#row5-5').keypress(function() {
		var self = $(this);
		setTimeout(function(){
			if (self.val().length >= 1) {
				$('#row6-5').focus().keypress(function() {
					setTimeout(function(){
						if (self.val().length >= 1) {
							$('#row7-5').focus().keypress(function() {
								setTimeout(function(){
									if (self.val().length >= 1) {
										$('#row8-5').focus().keypress(function() {
											setTimeout(function(){
												$('#row9-7').focus().keypress(function() {
													setTimeout(function(){
														if (self.val().length >= 1) {
															$('#row10-5').focus().keypress(function() {
																setTimeout(function(){
																	if (self.val().length >= 1) {
																		$('#row11-6').focus().keypress(function() {
																			setTimeout(function(){
																				if (self.val().length >= 1) {
																					$('#row12-7').focus().keypress(function() {
																						setTimeout(function(){
																							if (self.val().length >= 1) {
																								$('#row13-7').focus().keypress(function() {
																									setTimeout(function(){
																										if (self.val().length >= 1) {
																											$('#row14-7').focus();
																										};
																									}, 1);
																								});
																							};
																						}, 1);
																					});
																				};
																			}, 1);
																		});
																	};
																}, 1);
															});
														};
													}, 1);
												});
											}, 1);
										});
									};
								}, 1);
							});
						};
					}, 1);
				});
			};
		}, 1);
	});
	$('#row5-6').keypress(function() {
		var self = $(this);
		setTimeout(function(){
			if (self.val().length >= 1) {
				$('#row6-6').focus().keypress(function() {
					setTimeout(function(){
						if (self.val().length >= 1) {
							$('#row7-6').focus().keypress(function() {
								setTimeout(function(){
									if (self.val().length >= 1) {
										$('#row8-6').focus().keypress(function() {
											setTimeout(function(){
												$('#row9-10').focus().keypress(function() {
													setTimeout(function(){
														if (self.val().length >= 1) {
															$('#row10-6').focus().keypress(function() {
																setTimeout(function(){
																	if (self.val().length >= 1) {
																		$('#row11-7').focus().keypress(function() {
																			setTimeout(function(){
																				if (self.val().length >= 1) {
																					$('#row12-9').focus();
																				};
																			}, 1);
																		});
																	};
																}, 1);
															});
														};
													}, 1);
												});
											}, 1);
										});
									};
								}, 1);
							});
						};
					}, 1);
				});
			};
		}, 1);
	});
	$('#row7-7').keypress(function() {
		var self = $(this);
		//Wait until character is inserted:
		setTimeout(function() {
			if (self.val().length >= 1) {
				$('#row7-8').focus().keypress(function() {
					setTimeout(function() {
						if (self.val().length >= 1) {
							$('#row7-9').focus();
						};
					}, 1);
				});
			}
		}, 1);
	});
	$('#row8-7').keypress(function() {
		var self = $(this);
		//Wait until character is inserted:
		setTimeout(function() {
			if (self.val().length >= 1) {
				$('#row9-12').focus().keypress(function() {
					setTimeout(function() {
						if (self.val().length >= 1) {
							$('#row10-7').focus();
						};
					}, 1);
				});
			}
		}, 1);
	});
	$('#row9-1').keypress(function() {
		var self = $(this);
		setTimeout(function(){
			if (self.val().length >= 1) {
				$('#row9-2').focus().keypress(function() {
					setTimeout(function(){
						if (self.val().length >= 1) {
							$('#row9-3').focus().keypress(function() {
								setTimeout(function(){
									if (self.val().length >= 1) {
										$('#row9-4').focus().keypress(function() {
											setTimeout(function(){
												$('#row9-5').focus().keypress(function() {
													setTimeout(function(){
														if (self.val().length >= 1) {
															$('#row9-6').focus().keypress(function() {
																setTimeout(function(){
																	if (self.val().length >= 1) {
																		$('#row9-7').focus().keypress(function() {
																			setTimeout(function(){
																				if (self.val().length >= 1) {
																					$('#row9-8').focus().keypress(function() {
																						setTimeout(function(){
																							if (self.val().length >= 1) {
																								$('#row9-9').focus().keypress(function() {
																									setTimeout(function(){
																										if (self.val().length >= 1) {
																											$('#row9-10').focus().keypress(function() {
																												setTimeout(function(){
																													if (self.val().length >= 1) {
																														$('#row9-11').focus().keypress(function() {
																															setTimeout(function(){
																																if (self.val().length >= 1) {
																																	$('#row9-12').focus();
																																};
																															}, 1);
																														});
																													};
																												}, 1);
																											});
																										};
																									}, 1);
																								});
																							};
																						}, 1);
																					});
																				};
																			}, 1);
																		});
																	};
																}, 1);
															});
														};
													}, 1);
												});
											}, 1);
										});
									};
								}, 1);
							});
						};
					}, 1);
				});
			};
		}, 1);
	});
	$('#row12-6').keypress(function() {
		var self = $(this);
		//Wait until character is inserted:
		setTimeout(function() {
			if (self.val().length >= 1) {
				$('#row12-7').focus().keypress(function() {
					setTimeout(function() {
						if (self.val().length >= 1) {
							$('#row12-8').focus();
						};
					}, 1);
				});
			}
		}, 1);
	});
	$('#row12-9').keypress(function() {
		var self = $(this);
		//Wait until character is inserted:
		setTimeout(function() {
			if (self.val().length >= 1) {
				$('#row12-10').focus().keypress(function() {
					setTimeout(function() {
						if (self.val().length >= 1) {
							$('#row12-11').focus();
						};
					}, 1);
				});
			}
		}, 1);
	});
	$('#row14-2').keypress(function() {
		var self = $(this);
		setTimeout(function(){
			if (self.val().length >= 1) {
				$('#row14-3').focus().keypress(function() {
					setTimeout(function(){
						if (self.val().length >= 1) {
							$('#row14-4').focus().keypress(function() {
								setTimeout(function(){
									if (self.val().length >= 1) {
										$('#row14-5').focus().keypress(function() {
											setTimeout(function(){
												$('#row14-6').focus().keypress(function() {
													setTimeout(function(){
														if (self.val().length >= 1) {
															$('#row14-7').focus().keypress(function() {
																setTimeout(function(){
																	if (self.val().length >= 1) {
																		$('#row14-8').focus().keypress(function() {
																			setTimeout(function(){
																				if (self.val().length >= 1) {
																					$('#row14-9').focus().keypress(function() {
																						setTimeout(function(){
																							if (self.val().length >= 1) {
																								$('#row14-10').focus().keypress(function() {
																									setTimeout(function(){
																										if (self.val().length >= 1) {
																											$('#row14-11').focus();
																										};
																									}, 1);
																								});
																							};
																						}, 1);
																					});
																				};
																			}, 1);
																		});
																	};
																}, 1);
															});
														};
													}, 1);
												});
											}, 1);
										});
									};
								}, 1);
							});
						};
					}, 1);
				});
			};
		}, 1);
	});

	//Highlighting the answer block-wise (across and down) upon placing cursor:
	$('.letters-box').focus(function() {
		$(this).addClass('highlight-focus');
	});
	
	//Capture users answer and store in array variable and display:
	//cross-verifying users answer with actual answer:
	/*var users_ans1_down = $('input[clues=11]')[0];
	//console.log(users_ans1_down);
	var feedbackDisplay = $('#feedback-display');
	if (users_ans1_down) === ans[0] {
		feedbackDisplay.push(text("Hey " + users_ans1_down + "is correct!"));
	} else {
		feedbackDisplay.push(text("Hey " + users_ans1_down + "is wrong, Try again"));
	}*/
});