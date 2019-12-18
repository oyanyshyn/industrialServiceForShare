var request;
var request2;
var typeReq
 
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
							
							if (type1=="REFERENCE"){
								if ($("#searhText").val()!=""){
								findEtbData('OR')
								}else{
								alert("Please fill searh text")
								}
							}else{
							var rates;
							
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
                           
                        					
								
                    }
                     
                   
 function findEtbData(predicate){
                        
                     
                        document.getElementById("table4").innerHTML = "";
						document.getElementById("dataTables-example_info").innerHTML = "";
						document.getElementById("dataTables-example_paginate").innerHTML = "";
						
                   
                        if ($("#dateFinish").val()=="") {
							document.getElementById('dateFinish').value=$("#dateStart").val()
							
							}
						
						if ($("#sort").val()=="OPERATOR"){
							typeReq="BOX"
							}else{typeReq=$("#sort").val()}
				   
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
								  "typeRequest": typeReq
                                    }
								
				    $.ajax({
                       url:"http://" + ip +":8080/etbData/findAllValidation",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(request),
                       success:function(data){
						  console.log(data)
						   if (data.content.length > 0){
							  
							    $("#table04").show("slow")
						 for(var i =0;i<data.content.length;i++){
							 if (data.content[i].etb == null){data.content[i].etb =" "};
                             if (data.content[i].reference == null){data.content[i].reference =" "};
							 if (data.content[i].categoryWork == null){data.content[i].categoryWork =" "};
                             
							 if (data.content[i].numOperator == null){data.content[i].numOperator =" "};
                             if (data.content[i].lastName == null){data.content[i].lastName =" "};
							 if (data.content[i].firstName == null){data.content[i].firstName =" "};
                             						 
		                      dateVal = new Date(data.content[i].dateTime)
							 
                         $("#table4").append("<tr class='odd grade'>"+
                                        "<td class='center'>"+data.content[i].etb+"</td>"+
                                        "<td class='center'>"+data.content[i].reference+"</td>"+
                                        "<td class='center'>"+data.content[i].categoryWork+"</td>"+
                                        "<td class='center'>"+dateVal.toLocaleDateString()+"</td>"+
                                        "<td class='center'>"+dateVal.toLocaleTimeString()+"</td>"+
										"<td class='center'>"+data.content[i].firstName+"</td>"+
										"<td class='center'>"+data.content[i].lastName+"</td>"+
										"<td class='center'>"+data.content[i].numOperator+"</td>"+
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
                       url:"http://" + ip +":8080/etbData/findAllValidation",
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
							  
							    $("#table04").show("slow")
						 for(var i =0;i<data.content.length;i++){
							 if (data.content[i].etb == null){data.content[i].etb =" "};
                             if (data.content[i].reference == null){data.content[i].reference =" "};
							 if (data.content[i].categoryWork == null){data.content[i].categoryWork =" "};
                             
							 if (data.content[i].numOperator == null){data.content[i].numOperator =" "};
                             if (data.content[i].lastName == null){data.content[i].lastName =" "};
							 if (data.content[i].firstName == null){data.content[i].firstName =" "};
                             						 
		                      dateVal = new Date(data.content[i].dateTime)
							 
                         $("#table4").append("<tr class='odd grade'>"+
                                        "<td class='center'>"+data.content[i].etb+"</td>"+
                                        "<td class='center'>"+data.content[i].reference+"</td>"+
                                        "<td class='center'>"+data.content[i].categoryWork+"</td>"+
                                        "<td class='center'>"+dateVal.toLocaleDateString()+"</td>"+
                                        "<td class='center'>"+dateVal.toLocaleTimeString()+"</td>"+
										"<td class='center'>"+data.content[i].firstName+"</td>"+
										"<td class='center'>"+data.content[i].lastName+"</td>"+
										"<td class='center'>"+data.content[i].numOperator+"</td>"+
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
                    
 
                    
                
