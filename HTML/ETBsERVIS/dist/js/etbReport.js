var request;
var request2;
var crError=" "

 $.ajax({
                       url:"http://" + ip +":8080/etbData/findRequest",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(),
                       success:function(data){
						 
						   for(var i =0;i<data.length;i++){
						   $("#sort").append("<option>"+data[i]+"</option>"
						   )
						   }
						   },
                       error:function(error){
                           alert("You're entering incorrect data");
                       }
   
                   });
				   
			   
			   

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
                        
                            
                            var type1 = $("#sort").val();
							
							if (type1=="ETBCODE" || type1=="LEAKCODE" || type1=="BOX"){
								if ($("#searhText").val()!=""){
								findEtbData('OR')
								}else{
								alert("Please fill searh text")
								}
							}else{
							var rates;
							try {
							     rates = document.querySelector('input[name="rate"]:checked').value;
										 if(rates == 'One'){
											if ($("#dateStart").val()==""){
											alert("Please select date FROM")
											} else {
											findEtbData('OR')
											}
										}else if(rates == 'Some'){
											if ($("#dateStart").val()==""&&$("#dateFinish").val()==""){
											alert("Date is empmty")
											} else if($("#dateStart").val()==""){
												alert("Please select date FROM")
											}else if($("#dateFinish").val()==""){
												alert("Please select date TO")
											}else{
											findEtbData('AND')
											}
										}else{
											alert("Error")
										} 
								 }
                            catch (e) {
								alert("Please select options")
							}
                            
							}							
								
                    }
                    
                  
 function findEtbData(predicate){
                        
                       var period = " from "+$("#dateStart").val() +" to "+$("#dateFinish").val()  
                        document.getElementById("table4").innerHTML = "";
						document.getElementById("dataTables-example_info").innerHTML = "";
						document.getElementById("dataTables-example_paginate").innerHTML = "";
						localStorage.removeItem("numArray");
                    var dateSt = new Date();
                        dateSt.setDate($("#dateStart").val());
                    var date = new Date();
                        date.setDate($("#dateFinish").val());
				   
	                        var  request = {
				
								 "date": $("#dateStart").val(),
								 "dateFn":$("#dateFinish").val(),
								 "linkedPredicate": predicate,
								  "page": 0,
								  "searhRequest":$("#searhText").val(),
								  "size":  $("#quant").val(),
								  "sortRequest": {
									"direction": "ASC",
									"fieldName": "id"
								  },
								  "typeRequest": $("#sort").val()
                                    }			   
				    $.ajax({
                       url:"http://" + ip +":8080/etbData/all",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(request),
                       success:function(data){
						  
						   if (data.content.length > 0){
							   $("#mainTables").show("slow")
							    $("#table04").show("slow")
						 for(var i =0;i<data.content.length;i++){
						
						                  if (data.content[i].reference == null){
											   coletives="<td> </td>"
											   }else {
												   references =   "<td class='center' onclick='findValidation(" +'"'+ data.content[i].reference +'"'+")' ><a>"+data.content[i].reference+"</a></td>" 
											   };
							               if (data.content[i].plant == null){data.content[i].plant=" "};
                                           if (data.content[i].box == null){data.content[i].box=" "};
									       if (data.content[i].colectivEtb == null){
											   coletives="<td> </td>"
											   }else {
												   coletives =   "<td class='center' onclick='findWorkers(" + data.content[i].colectivEtb +","+ JSON.stringify(data.content[i].dateEtb) +")' ><a>"+data.content[i].colectivEtb+"</a></td>" 
											   };
										   if (data.content[i].dateEtb == null){data.content[i].dateEtb =" "};
										   if (data.content[i].etbCode == null){data.content[i].etbCode = " "};
										   if (data.content[i].numberEtb == null){data.content[i].numberEtb = " "};
										   if (data.content[i].shiftEtb == null){data.content[i].shiftEtb=" "};
										   if (data.content[i].timeEtb == null){data.content[i].timeEtb=" "};
									       if  (data.content[i].criticalErrors.length == 0){
											   shText="<td> </td>"
											   } else {
												shText="<td onclick='transferData(" + JSON.stringify( data.content[i].criticalErrors) +")' ><a>Errors</a></td>"
												   }
												   
												  
									
                         $("#table4").append("<tr class='odd grade'>"+
                                       "<td class='center'>"+data.content[i].plant+"</td>"+
                                        references +
										shText +
                                        "<td class='center'>"+data.content[i].numberMe+"</td>"+
                                        "<td class='center'>"+data.content[i].colectivPrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].datePrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].timePrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].shiftPrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].prePlugCode+"</td>"+
                                        "<td class='center'>"+data.content[i].statusTest+"</td>"+
                                        "<td class='center'>"+data.content[i].numberEtb+"</td>"+
										
                                        coletives +
										
                                        "<td class='center'>"+data.content[i].dateEtb+"</td>"+
                                        "<td class='center'>"+data.content[i].timeEtb+"</td>"+
                                        "<td class='center'>"+data.content[i].shiftEtb+"</td>"+
                                        "<td class='center'>"+data.content[i].etbCode+"</td>"+
                                        "<td class='center'>"+data.content[i].box+ "</td> "+
										"</tr>")
                                };
                              buttons(request,data.totalPage,data.content.length);
							  }else {alert("Have no informations due to your request")}
							  },
						
						   
                       error:function(error){
						   
                           alert("You're entering incorrect data");
                       }
   
                   });
				   
					}
				   
         
                    
                    
                  

function nextPage(newPage,totalPage){
	request=request2;
                         
                        document.getElementById("table4").innerHTML = "";
						document.getElementById("dataTables-example_info").innerHTML = "";
						document.getElementById("dataTables-example_paginate").innerHTML = "";
						localStorage.removeItem("numArray");
					if (totalPage-newPage>0){request.page = newPage;}
					if (totalPage-newPage==0){request.page = newPage;}
                      
                
                            

           $.ajax({
                       url:"http://" + ip +":8080/etbData/all",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(request),
                       success:function(data){
						 
						   if (data.content.length > 0){
							    $("#mainTables").show("slow")
							    $("#table04").show("slow")
						 for(var i =0;i<data.content.length;i++){
						
						                  if (data.content[i].reference == null){
											   coletives="<td> </td>"
											   }else {
												   references =   "<td class='center' onclick='findValidation(" +'"'+ data.content[i].reference +'"'+")'><a>"+data.content[i].reference+"</a></td>" 
											   };
							               if (data.content[i].plant == null){data.content[i].plant=" "};
                                           if (data.content[i].box == null){data.content[i].box=" "};
									       if (data.content[i].colectivEtb == null){
											   coletives="<td> </td>"
											   }else {
												   coletives =   "<td class='center' onclick='findWorkers(" + data.content[i].colectivEtb +","+ JSON.stringify(data.content[i].dateEtb) +")' ><a>"+data.content[i].colectivEtb+"</a></td>" 
											   };
										   if (data.content[i].dateEtb == null){data.content[i].dateEtb =" "};
										   if (data.content[i].etbCode == null){data.content[i].etbCode = " "};
										   if (data.content[i].numberEtb == null){data.content[i].numberEtb = " "};
										   if (data.content[i].shiftEtb == null){data.content[i].shiftEtb=" "};
										   if (data.content[i].timeEtb == null){data.content[i].timeEtb=" "};
									       if  (data.content[i].criticalErrors.length == 0){
											   shText="<td> </td>"
											   } else {
												shText="<td onclick='transferData(" + JSON.stringify( data.content[i].criticalErrors) +")' ><a>Errors</a></td>"
												   }
												   
												  
									
                         $("#table4").append("<tr class='odd grade'>"+
                                       "<td class='center'>"+data.content[i].plant+"</td>"+
                                        references +
										shText +
                                        "<td class='center'>"+data.content[i].numberMe+"</td>"+
                                        "<td class='center'>"+data.content[i].colectivPrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].datePrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].timePrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].shiftPrePlug+"</td>"+
                                        "<td class='center'>"+data.content[i].prePlugCode+"</td>"+
                                        "<td class='center'>"+data.content[i].statusTest+"</td>"+
                                        "<td class='center'>"+data.content[i].numberEtb+"</td>"+
										
                                        coletives +
										
                                        "<td class='center'>"+data.content[i].dateEtb+"</td>"+
                                        "<td class='center'>"+data.content[i].timeEtb+"</td>"+
                                        "<td class='center'>"+data.content[i].shiftEtb+"</td>"+
                                        "<td class='center'>"+data.content[i].etbCode+"</td>"+
                                        "<td class='center'>"+data.content[i].box+ "</td> "+
										"</tr>")
                                };
                              buttons(request,data.totalPage,data.content.length);
							  }else {alert("Have no informations due to your request")}
		   },

                       error:function(error){
                           alert("You're entering incorrect data");
                       }
   
                   });
                         
                      
}


        function buttons(request,totalPage,onPage){ 
		request2=request;

		if (totalPage-request.page==1){request.page=request.page-1}
		$("#dataTables-example_info").append( "<div class='dataTables_info'  role='status' aria-live='polite'>Showing: "+onPage+" rows on page " + (request.page+1) + " Tolat pages: " + totalPage +" </div>")
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
                    
                    
   function  transferData (textarray)  {
	  document.getElementById("table4_2").innerHTML = "";
	  $("#mainTables").hide("slow")
	   console.log(textarray)
	   
	 

   

		for(var i =0;i<textarray.length;i++){
			
			text= textarray[i].errors.toString( );
		var	asdf = text.replace('\t', " ");
	        asdf = asdf.replace(/\r\n/g, '<br/>');
			arrayErr = asdf.split('<br/>');
			
			for(var k =0;k<arrayErr.length;k++){
		$("#table4_2").append("<tr class='odd grade'>"+
                                       "<td class='center'>"+arrayErr[k]+"</td>"+
                                        										"</tr>")
		}
		}
	   $("#secondTables").show("slow")
   }             
     
 function  back()  {
	  document.getElementById("table4_2").innerHTML = "";
	  $("#secondTables").hide("slow")
	   $("#mainTables").show("slow")
   } 	 

 function  back2()  {
	  document.getElementById("table4_3").innerHTML = "";
	  $("#thirdTables").hide("slow")
	   $("#mainTables").show("slow")
   } 
   
    function  back3()  {
	  document.getElementById("table4_4").innerHTML = "";
	  $("#fourrdTables").hide("slow")
	   $("#mainTables").show("slow")
   } 


 function  findWorkers (collective, date)  {
	  document.getElementById("table4_3").innerHTML = "";
	   var dateCol = new Date(date)
	   console.log(collective)
	   console.log(date)
	   console.log(dateCol)
	 
                               var  info = {
								  "collective": collective,
								  "date": dateCol,
							   }
console.log(info)							   
				    $.ajax({
                       url:"http://" + ip +":8080/etbData/findWorker",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(info),
                       success:function(data){
						  console.log(data)
						  
						   if (data.length > 0){
							    $("#mainTables").hide("slow")
						        $("#thirdTables").show("slow")
								
						 for(var i =0;i<data.length;i++){
		   
                         $("#table4_3").append("<tr class='odd grade'>"+
                                        "<td class='center'>"+data[i].collective+"</td>"+
                                        "<td class='center'>"+data[i].worker+"</td>"+
                                        "<td class='center'>"+data[i].date+"</td>"+
                                        "<td class='center'>"+data[i].time+"</td>"+
                                        "<td class='center'>"+data[i].statusScan+"</td>"+
										"</tr>")
                                };
                         
							  }else {alert("Have no informations due to your request")}
							  },
						
						   
                       error:function(error){
						   
                           alert("Error");
                       }
   
                   });
   
	   
   } 

function findValidation (reference)  {
	  document.getElementById("table4_4").innerHTML = "";
	  	 
                               var  info = {
								  "searhRequest": reference,
							   }
console.log(info)							   
				    $.ajax({
                       url:"http://" + ip +":8080/etbData/findValidation",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(info),
                       success:function(data){
						  console.log(data)
						  
						   if (data.length > 0){
							    $("#mainTables").hide("slow")
						        $("#fourrdTables").show("slow")
								
						 for(var i =0;i<data.length;i++){
							 if (data[i].etb == null){data[i].etb =" "};
                             if (data[i].reference == null){data[i].reference =" "};
							 if (data[i].categoryWork == null){data[i].categoryWork =" "};
                             
							 if (data[i].numOperator == null){data[i].numOperator =" "};
                             if (data[i].lastName == null){data[i].lastName =" "};
							 if (data[i].firstName == null){data[i].firstName =" "};
                             						 
		                      dateVal = new Date(data[i].dateTime)
							 
                         $("#table4_4").append("<tr class='odd grade'>"+
                                        "<td class='center'>"+data[i].etb+"</td>"+
                                        "<td class='center'>"+data[i].reference+"</td>"+
                                        "<td class='center'>"+data[i].categoryWork+"</td>"+
                                        "<td class='center'>"+dateVal.toLocaleDateString()+"</td>"+
                                        "<td class='center'>"+dateVal.toLocaleTimeString()+"</td>"+
										"<td class='center'>"+data[i].firstName+"</td>"+
										"<td class='center'>"+data[i].lastName+"</td>"+
										"<td class='center'>"+data[i].numOperator+"</td>"+
										"</tr>")
                                };
                         
							  }else {alert("Have no informations due to your request")}
							  },
						
						   
                       error:function(error){
						   
                           alert("Error");
                       }
   
                   });
   
	   
   } 

            