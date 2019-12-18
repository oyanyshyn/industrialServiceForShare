 var request;
 var transferHp;
 function Calendar2(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    month=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}
for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today" onclick="hello('+i+','+D.getMonth()+','+D.getFullYear()+')" >' + i;
  }else{
    calendar += '<td onclick="hello('+i+','+D.getMonth()+','+D.getFullYear()+')" >' + i;
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
}

Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}


 function Calendar4(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    month=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}
for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today" onclick="hello2('+i+','+D.getMonth()+','+D.getFullYear()+')" >' + i;
  }else{
    calendar += '<td onclick="hello2('+i+','+D.getMonth()+','+D.getFullYear()+')" >' + i;
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
}
Calendar4("calendar4", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar4 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar4("calendar4", document.querySelector('#calendar4 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar4 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar4 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar4("calendar4", document.querySelector('#calendar4 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar4 thead td:nth-child(2)').dataset.month)+1);
}




function hello(d,m,y){
     if (m<9){m="0"+(m+1)}
    else {m=m+1}
    if (d<10){d="0"+d}
    dateSt = y+"-"+m+"-"+d
    document.getElementById('dateStart').value=dateSt
}
                    
                    
                    function hello2(d,m,y){
     if (m<9){m="0"+(m+1)}
    else {m=m+1}
    if (d<10){d="0"+d}
    dateSt = y+"-"+m+"-"+d
    document.getElementById('dateFinish').value=dateSt
}
  
                    function options(){
                        
                            var rates = document.querySelector('input[name="rate"]:checked').value;
                            
                            if(rates == 'One'){
                                findSome('OR')

                            }else if(rates == 'Some'){
                                findSome('AND')

                            }else{
                                alert("Please select options")
                            }  

                    }
                    
                    

         
                    
                    
                    function findSome(predicate){
                        var checkBOX = document.getElementById("xls");
                       var period = " from "+$("#dateStart").val() +" to "+$("#dateFinish").val()  
                        document.getElementById("table4").innerHTML = "";
						document.getElementById("dataTables-example_info").innerHTML = "";
						document.getElementById("dataTables-example_paginate").innerHTML = "";
						localStorage.removeItem("numArray");
                    var dateSt = new Date();
                        dateSt.setDate($("#dateStart").val());
                    var date = new Date();
                        date.setDate($("#dateFinish").val());
                 
                        if(date>dateSt ||date>Date.now()){
                            alert("You're entering incorrect data")
                        }else{
                        
     $("#table04").show("slow")
                            request = {
                      
								 "date": $("#dateStart").val(),
								 "dateFn":$("#dateFinish").val(),
								 "linkedPredicate": predicate,
								  "page": 0,
								  "searhRequest":$("#searhText").val(),
								  "size":  $("#quant").val(),
								  "sortRequest": {
									"direction": "ASC",
									"fieldName": "hp"
								  },
								  "typeRequest": $("#sort").val()
                                    }

           $.ajax({
                       url:"http://" + ip +":8080/preparation/dcv",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(request),
                       success:function(data){
                          
                        for(var i =0;i<data.content.length;i++){
						
							
                                           if (data.content[i].step == null){data.content[i].step=" "};
									       if (data.content[i].quantityEnd == null){data.content[i].quantityEnd=" "};
										   if (data.content[i].temperature == null){data.content[i].temperature=" "};
										   if (data.content[i].processTime == null){data.content[i].processTime=" "};
										   if (data.content[i].numProgram == null){data.content[i].numProgram=" "};
										   if (data.content[i].missWire == null){data.content[i].missWire=" "};
									       if (data.content[i].resultOfTests.length != null){
											   for( var s=0;s<data.content[i].resultOfTests.length;s++){
												  if ( data.content[i].resultOfTests[s].worker == null ){data.content[i].resultOfTests[s].worker =" " }
												  if ( data.content[i].resultOfTests[s].qaOperator== null){data.content[i].resultOfTests[s].qaOperator=" "}
												  if ( data.content[i].resultOfTests[s].statusValidation== null){data.content[i].resultOfTests[s].statusValidation=" "}
												  if ( data.content[i].resultOfTests[s].date== null){data.content[i].resultOfTests[s].statusValidation=" "}
												  if ( data.content[i].resultOfTests[s].time== null){data.content[i].resultOfTests[s].time=" "}
												  if ( data.content[i].resultOfTests[s].bendingTest== null) {data.content[i].resultOfTests[s].bendingTest=" "}
												  if ( data.content[i].resultOfTests[s].bubbleTest== null){data.content[i].resultOfTests[s].bubbleTest=" "}
												  if ( data.content[i].resultOfTests[s].ohmeterRes== null){data.content[i].resultOfTests[s].ohmeterRes=" "}
												  if ( data.content[i].resultOfTests[s].valueOhmeter== null){data.content[i].resultOfTests[s].valueOhmeter=" "}
											   }
											   };
                                     
                         $("#table4").append("<tr class='odd grade'>"+
                                       "<td onclick='transferData(" + i +")' ><a>"+data.content[i].hp+"</a></td>"+
                                        "<td>"+data.content[i].step+"</td>"+
                                        "<td>"+data.content[i].subcomponent+"</td>"+
                                        "<td class='center'>"+data.content[i].numberShunk+"</td>"+
                                        "<td class='center'>"+data.content[i].family+"</td>"+
                                        "<td class='center'>"+data.content[i].quantityStart+"</td>"+
                                        "<td class='center'>"+data.content[i].quantityEnd+"</td>"+
                                        "<td class='center'>"+data.content[i].amplitude+"</td>"+
                                        "<td class='center'>"+data.content[i].energy+"</td>"+
                                        "<td class='center'>"+data.content[i].pressure+"</td>"+
                                        "<td class='center'>"+data.content[i].temperature+"</td>"+
                                        "<td class='center'>"+data.content[i].processTime+"</td>"+
                                        "<td class='center'>"+data.content[i].numProgram+"</td>"+
                                        "<td class='center'>"+data.content[i].length+"</td>"+
                                        "<td class='center'>"+data.content[i].missWire+"</td>"+
                                        "<td class='center'>"+data.content[i].views + "</td> "+
										"</tr>")
         
                              }
							  transferHp = data.content;
             if (checkBOX != null){
                 if (checkBOX.checked == true){ 
                     excelPeriod(data.content,request.typeRequest,request.searhRequest);
                 }
             }
     
                       buttons(request,data.totalPage);
					   },
                       error:function(error){
                           alert("You're entering incorrect data");
                       }
   
                   });
                         
                        }
}

function nextPage(newPage,totalPage){
                         var checkBOX = document.getElementById("xls");
                        document.getElementById("table4").innerHTML = "";
						document.getElementById("dataTables-example_info").innerHTML = "";
						document.getElementById("dataTables-example_paginate").innerHTML = "";
						localStorage.removeItem("numArray");
					if (totalPage-newPage>0){request.page = newPage;}
					if (totalPage-newPage==0){request.page = newPage;}
                      
                 $("#table04").show("slow")
                            

           $.ajax({
                       url:"http://" + ip +":8080/preparation/dcv",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(request),
                       success:function(data){
                          
                        for(var i =0;i<data.content.length;i++){
						
							
                                           if (data.content[i].step == null){data.content[i].step=" "};
									       if (data.content[i].quantityEnd == null){data.content[i].quantityEnd=" "};
										   if (data.content[i].temperature == null){data.content[i].temperature=" "};
										   if (data.content[i].processTime == null){data.content[i].processTime=" "};
										   if (data.content[i].numProgram == null){data.content[i].numProgram=" "};
										   if (data.content[i].missWire == null){data.content[i].missWire=" "};
									       if (data.content[i].resultOfTests.length != null){
											   for( var s=0;s<data.content[i].resultOfTests.length;s++){
												  if ( data.content[i].resultOfTests[s].worker == null ){data.content[i].resultOfTests[s].worker =" " }
												  if ( data.content[i].resultOfTests[s].qaOperator== null){data.content[i].resultOfTests[s].qaOperator=" "}
												  if ( data.content[i].resultOfTests[s].statusValidation== null){data.content[i].resultOfTests[s].statusValidation=" "}
												  if ( data.content[i].resultOfTests[s].date== null){data.content[i].resultOfTests[s].statusValidation=" "}
												  if ( data.content[i].resultOfTests[s].time== null){data.content[i].resultOfTests[s].time=" "}
												  if ( data.content[i].resultOfTests[s].bendingTest== null) {data.content[i].resultOfTests[s].bendingTest=" "}
												  if ( data.content[i].resultOfTests[s].bubbleTest== null){data.content[i].resultOfTests[s].bubbleTest=" "}
												  if ( data.content[i].resultOfTests[s].ohmeterRes== null){data.content[i].resultOfTests[s].ohmeterRes=" "}
												  if ( data.content[i].resultOfTests[s].valueOhmeter== null){data.content[i].resultOfTests[s].valueOhmeter=" "}
											   }
											   };
                                     
                         $("#table4").append("<tr class='odd grade'>"+
                                       "<td onclick='transferData(" + i +")' ><a>"+data.content[i].hp+"</a></td>"+
                                        "<td>"+data.content[i].step+"</td>"+
                                        "<td>"+data.content[i].subcomponent+"</td>"+
                                        "<td class='center'>"+data.content[i].numberShunk+"</td>"+
                                        "<td class='center'>"+data.content[i].family+"</td>"+
                                        "<td class='center'>"+data.content[i].quantityStart+"</td>"+
                                        "<td class='center'>"+data.content[i].quantityEnd+"</td>"+
                                        "<td class='center'>"+data.content[i].amplitude+"</td>"+
                                        "<td class='center'>"+data.content[i].energy+"</td>"+
                                        "<td class='center'>"+data.content[i].pressure+"</td>"+
                                        "<td class='center'>"+data.content[i].temperature+"</td>"+
                                        "<td class='center'>"+data.content[i].processTime+"</td>"+
                                        "<td class='center'>"+data.content[i].numProgram+"</td>"+
                                        "<td class='center'>"+data.content[i].length+"</td>"+
                                        "<td class='center'>"+data.content[i].missWire+"</td>"+
                                        "<td class='center'>"+data.content[i].views + "</td> "+
										"</tr>")
         
                              }
							  transferHp = data.content;
             if (checkBOX != null){
                 if (checkBOX.checked == true){ 
                     excelPeriod(data.content,request.typeRequest,request.searhRequest);
                 }
             }
     
                       buttons(request,data.totalPage);
					   },
                       error:function(error){
                           alert("You're entering incorrect data");
                       }
   
                   });
                         
                      
}

function transferData(num){ 
	localStorage.setItem("numArray",JSON.stringify(transferHp[num]));
	document.location.href='dcvData.html';
		}            
               


        function buttons(request,totalPage){ 
	
		if (totalPage-request.page==1){request.page=request.page-1}
		$("#dataTables-example_info").append( "<div class='dataTables_info'  role='status' aria-live='polite'>Showing "+ (request.page+1) + " of " + totalPage +" entries</div>")
		     previous = " " 
			 next = " "
			 totalP =" "
			 secPage = " "
						if (totalPage>1 && request.page+1==1){previous = " <li class='paginate_button previous disabled' aria-controls='dataTables-example' tabindex='0' id='dataTables-example_previous'><a>Previous</a></li>"}
						else if (totalPage>1 && request.page+1>1) {previous = " <li class='paginate_button' aria-controls='dataTables-example' tabindex='0' id='dataTables-example_previous' onclick='nextPage(" + (request.page-1) +","+totalPage+")'><a>Previous</a></li>"}
						if (totalPage>1 && request.page+1==totalPage){next = " <li class='paginate_button next disabled' aria-controls='dataTables-example' tabindex='0' id='dataTables-example_next'><a>Next</a></li>"}
						else if (totalPage>1 && request.page+2<totalPage) {next = " <li class='paginate_button' aria-controls='dataTables-example' tabindex='0' id='dataTables-example_next' onclick='nextPage(" + (request.page+1) +","+totalPage+")'><a>Next</a></li>"}
						
						if ((totalPage-request.page>0)&&(totalPage>=2)&&(totalPage-request.page<=2)){totalP = " <li class='paginate_button' aria-controls='dataTables-example' tabindex='0' onclick='nextPage(" + (totalPage-1) +","+totalPage+")'><a>"+totalPage+"</a></li>"}
						else if ((totalPage-(request.page+1))>2&&totalPage>2){totalP = " <li class='paginate_button' aria-controls='dataTables-example' tabindex='0'><a>...</a></li> <li class='paginate_button' aria-controls='dataTables-example' tabindex='0' onclick='nextPage(" + (totalPage-1) +","+totalPage+")'><a>"+totalPage+"</a></li>"}
						
						if (totalPage>1 && request.page+2<totalPage){secPage = " <li class='paginate_button' aria-controls='dataTables-example' tabindex='0' onclick='nextPage(" + (request.page+1) +","+totalPage+")'><a>"+(request.page+2)+"</a></li>"}
						
						
						$("#dataTables-example_paginate").append( "<div><ul class='pagination'>"+
                                          previous +
                                          " <li class='paginate_button' aria-controls='dataTables-example' tabindex='0' onclick='nextPage(" + request.page +","+totalPage+")'><a>"+(request.page+1)+"</a></li>"+
                                          secPage +
                                          totalP +
                                          next +
                                        " </ul><div>")
		}            
                    
       function someDay(){             
                    
                    $("#dateFinish").show("slow")
                    $("#calendar3").show("slow")
       }
                    function oneDay(){             

                    $("#dateFinish").hide("slow")
                    $("#calendar3").hide("slow")
       }
                    
                    
                    
                    function excelPeriod(data,request,searhText) {
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
        
          excel.set(0,0,3,"Searh by:");
          excel.set(0,2,3,request);
          
          excel.set(0,0,4,"Request text:");
          excel.set(0,2,4,searhText);
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
		  console.log(data)
		                                    for(var i =0;i<data.length;i++){
											excel.set(0,1,i+8, data[i].hp);
                                            excel.set(0,2,i+8, data[i].step);
                                            excel.set(0,3,i+8, data[i].subcomponent);
                                            excel.set(0,4,i+8, data[i].numberShunk);
                                            excel.set(0,5,i+8, data[i].family);
                                            excel.set(0,6,i+8, data[i].quantityStart);
                                            excel.set(0,7,i+8, data[i].quantityEnd);
											excel.set(0,8,i+8, data[i].amplitude);
											excel.set(0,9,i+8, data[i].energy);
											excel.set(0,10,i+8, data[i].pressure);
											excel.set(0,11,i+8, data[i].temperature);
											excel.set(0,12,i+8, data[i].processTime);
											excel.set(0,13,i+8, data[i].numProgram);
											excel.set(0,14,i+8, data[i].length);
											excel.set(0,15,i+8, data[i].missWire);
											excel.set(0,16,i+8, data[i].views);
											console.log(data[i].resultOfTests.length)
											  for( var s=0;s<data[i].resultOfTests.length;s++){
												  if (data[i].resultOfTests[s].qaOperator!=" "){
												  qoperator = data[i].resultOfTests[s].qaOperator+"/"+data[i].resultOfTests[s].statusValidation
												  }else {qoperator = " "}
												  excel.set(1,1,k+1, data[i].hp);
												  excel.set(1,2,k+1, data[i].resultOfTests[s].level);
												  excel.set(1,3,k+1, data[i].step);
												  excel.set(1,4,k+1, data[i].numberShunk);
												  excel.set(1,5,k+1, data[i].resultOfTests[s].worker);
												  excel.set(1,6,k+1, qoperator);
												  excel.set(1,7,k+1, data[i].resultOfTests[s].date);
												  excel.set(1,8,k+1, data[i].resultOfTests[s].time);
												  excel.set(1,9,k+1, data[i].resultOfTests[s].bendingTest);
												  excel.set(1,10,k+1, data[i].resultOfTests[s].bubbleTest);
												  excel.set(1,11,k+1, data[i].resultOfTests[s].ohmeterRes);
												  excel.set(1,12,k+1, data[i].resultOfTests[s].valueOhmeter);
												  excel.set(1,13,k+1, data[i].resultOfTests[s].pullForce);
												  excel.set(1,14,k+1, data[i].minDos+"/"+data[i].minDpovz);
												  excel.set(1,15,k+1, data[i].resultOfTests[s].pullForceOs1);
												  excel.set(1,16,k+1, data[i].resultOfTests[s].pullForceOs2);
												  excel.set(1,17,k+1, data[i].resultOfTests[s].pullForceOs3);
												  excel.set(1,18,k+1, data[i].resultOfTests[s].pullForcePovz1);
												  excel.set(1,19,k+1, data[i].resultOfTests[s].pullForcePovz2);
												  excel.set(1,20,k+1, data[i].resultOfTests[s].pullForcePovz3);
												  k++;
											  }
											}

                     
			excel.generate("DcvReport.xlsx");
          
      }
