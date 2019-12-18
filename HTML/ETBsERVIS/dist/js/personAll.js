var predicate;
var request;
var request2;  



  function options(){
                        
                            
                           
							
							if ($("#sort").val()=="ALL"){
								
								findAllperson ('AND')
								}else{
								findAllperson ('OR')
								}
										
								
                    }
                  

 
function findAllperson (predicate)  {
document.getElementById("table4").innerHTML = "";
document.getElementById("dataTables-example_info").innerHTML = "";
						document.getElementById("dataTables-example_paginate").innerHTML = "";
	  	  	 
                               var  request = {
								   "linkedPredicate": predicate,
									  "page": 0,
									  "size": $("#quant").val(),
									  "sortRequest": {
										"direction": "ASC",
										"fieldName": "role"
									  },
									  "value": $("#searhText").val()								   
								   
								
							   }
            						   
				    $.ajax({
                       url:"http://" + ip +":8080/person/all",
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
							
							  
						 for(var i =0;i<data.content.length;i++){
																	   
												  
									
                         $("#table4").append("<tr class='odd grade'>"+
                                       "<td class='center'>"+data.content[i].firstName+"</td>"+
                                      
                                        "<td class='center'>"+data.content[i].lastName+"</td>"+
                                        "<td class='center'>"+data.content[i].login+"</td>"+
                                        "<td class='center'>"+data.content[i].role+"</td>"+
                                        "<td class='center'>"+data.content[i].numOperator+"</td>"+
										"</tr>")
                                };
                              buttons(request,data.totalPage,data.content.length);
							  }else {alert("Have no informations due to your request")}
							  },
	
                       error:function(error){
						   
                           alert("Error");
                       }
   
                   });
   
	   
   } 



function nextPage(newPage,totalPage){
	request=request2;
document.getElementById("table4").innerHTML = "";
document.getElementById("dataTables-example_info").innerHTML = "";
						document.getElementById("dataTables-example_paginate").innerHTML = "";
						if (totalPage-newPage>0){request.page = newPage;}
					if (totalPage-newPage==0){request.page = newPage;}
	  	  	 
            							   
				    $.ajax({
                       url:"http://" + ip +":8080/person/all",
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
							  
						 for(var i =0;i<data.content.length;i++){
																	   
												  
									
                         $("#table4").append("<tr class='odd grade'>"+
                                       "<td class='center'>"+data.content[i].firstName+"</td>"+
                                      
                                        "<td class='center'>"+data.content[i].lastName+"</td>"+
                                        "<td class='center'>"+data.content[i].login+"</td>"+
                                        "<td class='center'>"+data.content[i].role+"</td>"+
                                        "<td class='center'>"+data.content[i].numOperator+"</td>"+
										"</tr>")
                                };
                              buttons(request,data.totalPage,data.content.length);
							  }else {alert("Have no informations due to your request")}
							  },
	
                       error:function(error){
						   
                           alert("Error");
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
         