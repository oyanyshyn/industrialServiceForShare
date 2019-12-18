  var transferHp=JSON.parse(localStorage.getItem('numArray'))
  fillForm()            
                    
                    function fillForm(){
	                  document.getElementById("table4").innerHTML = "";
	
                        for(var i =0;i<transferHp.resultOfTests.length;i++){
						val=" "
						if (transferHp.resultOfTests[i].qaOperator!=" "){val=transferHp.resultOfTests[i].qaOperator+"/"+transferHp.resultOfTests[i].statusValidation}
                                                                               
                         $("#table4").append("<tr class='odd grade'>"+
                                        "<td >"+transferHp.hp+"</td>"+
										"<td>"+transferHp.resultOfTests[i].level+"</td>"+
                                        "<td>"+transferHp.step+"</td>"+
                                        "<td>"+transferHp.numberShunk+"</td>"+
                                        "<td>"+transferHp.resultOfTests[i].worker+"</td>"+
										"<td>"+ val +"</td>"+
										"<td>"+transferHp.resultOfTests[i].date+"</td>"+
										"<td>"+transferHp.resultOfTests[i].time+"</td>"+
										"<td>"+transferHp.resultOfTests[i].bendingTest+"</td>"+
										"<td>"+transferHp.resultOfTests[i].bubbleTest+"</td>"+
										"<td>"+transferHp.resultOfTests[i].ohmeterRes+"</td>"+
										"<td>"+transferHp.resultOfTests[i].valueOhmeter+"</td>"+
										"<td>"+transferHp.resultOfTests[i].pullForce+"</td>"+
										"<td>"+transferHp.minDos+"/"+transferHp.minDpovz+"</td>"+
										"<td>"+transferHp.resultOfTests[i].pullForceOs1+"</td>"+
										"<td>"+transferHp.resultOfTests[i].pullForceOs2+"</td>"+
										"<td>"+transferHp.resultOfTests[i].pullForceOs3+"</td>"+
										"<td>"+transferHp.resultOfTests[i].pullForcePovz1+"</td>"+
										"<td>"+transferHp.resultOfTests[i].pullForcePovz1+"</td>"+
										"<td>"+transferHp.resultOfTests[i].pullForcePovz1+"</td>"+
										"</tr>")
         
                              }
							  
  
}
                
                    
                    
                    function excelPeriod() {
              var excel = $JExcel.new("Calibri light 12 #333333");
      var textStyle = excel.addStyle({align: "L", format: "@"});
      var zeroStyle = excel.addStyle({align: "L", format: "0"});
      var isstringStyle = excel.addStyle({align: "L", format: "@", isstring: true});
            excel.set( {sheet:0,value:"DcvReport" } );
			excel.addSheet("poolForce");
//                         excel.set( {sheet:0,value: data[0].collective } );
      	
          var evenRow=excel.addStyle ( { 																	// Style for even ROWS
				border: "none,none,none,thin #333333"});													// Borders are LEFT,RIGHT,TOP,BOTTOM. Check $JExcel.borderStyles for a list of valid border styles

			var oddRow=excel.addStyle ( { 																	// Style for odd ROWS
				fill: "#ECECEC" , 																			// Background color, plain #RRGGBB, there is a helper $JExcel.rgbToHex(r,g,b)
				border: "none,none,none,thin #333333"});
          
          
          		var formatHeader=excel.addStyle ( { 															// Format for headers
					border: "none,none,none,none", 
                   // border: "none,none,none,thin #333333",                                                   // 		Border for header
					font: "Calibri 16 #0000AA B"}); 														// 		Font for headers
          
          
          	var formatHeader2=excel.addStyle ( { 															// Format for headers
					border: "none,none,none,thin #333333",                                                   // 		Border for header
					font: "Calibri 14 #333333 B"});
            	var formatHeader3=excel.addStyle ( { 															// Format for headers
					border: "none,none,none,none",                                                   // 		Border for header
					font: "Calibri 13 #333333 B"});
          

																	                                    	// Loop all the haders
				excel.set(0,7,0,"DCV Report",formatHeader);													// Set CELL with header text, using header format
				//excel.set(0,4,undefined,"auto");
        
          excel.set(0,0,3,"Searh by: HP");
        
          
         
          excel.set(0,0,5,"Date request:");
          excel.set(0,2,5,new Date(Date.now()).toLocaleString());
          
          	
          excel.set(0,1,7,"HP",formatHeader2);
          excel.set(0,2,7,"№ кроку",formatHeader2);
          excel.set(0,3,7,"Субкомпонент",formatHeader2);
          excel.set(0,4,7,"№ машини",formatHeader2);
          excel.set(0,5,7,"Сім'я",formatHeader2);
          excel.set(0,6,7,"Кількість (поч.)",formatHeader2);
          excel.set(0,7,7,"Кількість (кін.)",formatHeader2);
          excel.set(0,8,7,"Амплітуда",formatHeader2);
		  excel.set(0,9,7,"Енергія",formatHeader2);
		  excel.set(0,10,7,"Тиск",formatHeader2);
		  excel.set(0,11,7,"Температура",formatHeader2);
		  excel.set(0,12,7,"Час",formatHeader2);
		  excel.set(0,13,7,"№ програми",formatHeader2);
		  excel.set(0,14,7,"Довжина",formatHeader2);
		  excel.set(0,15,7,"Відсутність жил",formatHeader2);
		  excel.set(0,16,7,"Вигляд",formatHeader2);
		  
		  excel.set(1,1,0,"HP",formatHeader2);
		  excel.set(1,2,0,"рівень",formatHeader2);
		  excel.set(1,3,0,"№ кроку",formatHeader2);
		  excel.set(1,4,0,"№ машини",formatHeader2);
		  excel.set(1,5,0,"Працівник",formatHeader2);
		  excel.set(1,6,0,"Контролер",formatHeader2);
		  excel.set(1,7,0,"Дата HP",formatHeader2);
		  excel.set(1,8,0,"Час",formatHeader2);
		  excel.set(1,9,0,"Тест на згин",formatHeader2);
		  excel.set(1,10,0,"Тест бульбашки",formatHeader2);
		  excel.set(1,11,0,"ОМ результат",formatHeader2);
		  excel.set(1,12,0,"ОМ дані",formatHeader2);
		  excel.set(1,13,0,"Сила зриву",formatHeader2);
		  excel.set(1,14,0,"Номінальні значення сил",formatHeader2);
		  excel.set(1,15,0,"Осьова.1",formatHeader2);
		  excel.set(1,16,0,"Осьова.2",formatHeader2);
		  excel.set(1,17,0,"Осьова.3",formatHeader2);
		  excel.set(1,18,0,"Повз.1",formatHeader2);
		  excel.set(1,19,0,"Повз.2",formatHeader2);
		  excel.set(1,20,0,"Повз.3",formatHeader2);
		  
		  
          var k=0
		  
		                                    
											excel.set(0,1,8, transferHp.hp);
                                            excel.set(0,2,8, transferHp.step);
                                            excel.set(0,3,8, transferHp.subcomponent);
                                            excel.set(0,4,8, transferHp.numberShunk);
                                            excel.set(0,5,8, transferHp.family);
                                            excel.set(0,6,8, transferHp.quantityStart);
                                            excel.set(0,7,8, transferHp.quantityEnd);
											excel.set(0,8,8, transferHp.amplitude);
											excel.set(0,9,8, transferHp.energy);
											excel.set(0,10,8, transferHp.pressure);
											excel.set(0,11,8, transferHp.temperature);
											excel.set(0,12,8, transferHp.processTime);
											excel.set(0,13,8, transferHp.numProgram);
											excel.set(0,14,8, transferHp.length);
											excel.set(0,15,8, transferHp.missWire);
											excel.set(0,16,8, transferHp.views);
											
											  for( var s=0;s<transferHp.resultOfTests.length;s++){
												  if (transferHp.resultOfTests[s].qaOperator!=" "){
												  qoperator = transferHp.resultOfTests[s].qaOperator+"/"+transferHp.resultOfTests[s].statusValidation
												  }else {qoperator = " "}
												  excel.set(1,1,k+1, transferHp.hp);
												  excel.set(1,2,k+1, transferHp.resultOfTests[s].level);
												  excel.set(1,3,k+1, transferHp.step);
												  excel.set(1,4,k+1, transferHp.numberShunk);
												  excel.set(1,5,k+1, transferHp.resultOfTests[s].worker);
												  excel.set(1,6,k+1, qoperator);
												  excel.set(1,7,k+1, transferHp.resultOfTests[s].date);
												  excel.set(1,8,k+1, transferHp.resultOfTests[s].time);
												  excel.set(1,9,k+1, transferHp.resultOfTests[s].bendingTest);
												  excel.set(1,10,k+1, transferHp.resultOfTests[s].bubbleTest);
												  excel.set(1,11,k+1, transferHp.resultOfTests[s].ohmeterRes);
												  excel.set(1,12,k+1, transferHp.resultOfTests[s].valueOhmeter);
												  excel.set(1,13,k+1, transferHp.resultOfTests[s].pullForce);
												  excel.set(1,14,k+1, transferHp.minDos+"/"+transferHp.minDpovz);
												  excel.set(1,15,k+1, transferHp.resultOfTests[s].pullForceOs1);
												  excel.set(1,16,k+1, transferHp.resultOfTests[s].pullForceOs2);
												  excel.set(1,17,k+1, transferHp.resultOfTests[s].pullForceOs3);
												  excel.set(1,18,k+1, transferHp.resultOfTests[s].pullForcePovz1);
												  excel.set(1,19,k+1, transferHp.resultOfTests[s].pullForcePovz2);
												  excel.set(1,20,k+1, transferHp.resultOfTests[s].pullForcePovz3);
												  k++;
											  }
											

                     
			excel.generate("DcvReport.xlsx");
          
      }
