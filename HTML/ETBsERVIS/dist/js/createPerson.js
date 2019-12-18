var projects = [];

$.ajax({
                       url:"http://" + ip +":8080/person/findAllRole",
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
						   $("#role").append("<option>"+data[i]+"</option>"
						   )
						   }
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });

$.ajax({
                       url:"http://" + ip +":8080/person/findAllProject",
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
						   $("#progect").append("<option>"+data[i]+"</option>"
						   )
						   }
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });

  
  
     function  addArr()  {

	  projects.push($("#progect").val());
	  $("#textArr").val(projects)
   }  
  
       function  clearArr()  {
		projects = [];   
	  document.getElementById("textArr").value = '';
	 
   }  
  

 
function savePerson ()  {
	  	  	 
                               var  info = {
								  "firstName": $("#firstName").val(),
								  "lastName": $("#lastName").val(),
								  "login": $("#login").val(),
								  "numOpertor": $("#numberOperator").val(),
								  "password": $("#pasw").val(),
								  "projects": projects,
								  "rfId": $("#rfID").val(),
								  "role": $("#role").val()
							   }
            console.log(info)							   
				    $.ajax({
                       url:"http://" + ip +":8080/person/save",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(info),
                       success:function(data){
						  
                                alert("Дані збережено")
								location.reload();
							  },
	
                       error:function(error){
						   
                           alert("Error");
                       }
   
                   });
   
	   
   } 

            