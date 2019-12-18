var rates;
var resFound;
var projects = []; 
                        document.getElementById("nameData").value = "";
						document.getElementById("lastName").value = "";
						document.getElementById("login").value = "";
						document.getElementById("role").value = "";
						document.getElementById("rfID").value = "";
function searh(){
	

		var  request = {  
  
  "numOpertor":$("#numberOperator").val()
		}
		
		 $.ajax({
                       url:"http://" + ip +":8080/person/findOne",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(request),
                       success:function(data){
						   resFound=data;
						   
		                alert("Person was found");
						document.getElementById("nameData").value = resFound.firstName +" " + resFound.lastName;
						document.getElementById("lastName").value = resFound.lastName;
						document.getElementById("login").value = resFound.login;
						document.getElementById("role").value = resFound.role;
						document.getElementById("rfID").value = resFound.cardId;
						document.getElementById("pasw").value = resFound.password;
						
						
						if (resFound.projects != null){
							for(var i =0;i<resFound.projects.length;i++)
							{
							projects.push(resFound.projects[i]);
	                        }
							$("#text").val(projects)
							
						}
						getRolle()
						$("#radioButton").show("slow")
		                },
	   
                       error:function(error){
						   
                           alert("You're entering incorrect data");
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
                           alert("Error with project");
                       }
   
                   });
	

	
}


    function  addArr()  {

	  projects.push($("#progect").val());
	  $("#text").val(projects)
   }  
  
    function  clearArr()  {
		projects = [];   
	  document.getElementById("text").value = '';
	 
   }


function check(){
	rates = document.querySelector('input[name="rate"]:checked');
	
 if(rates.value == 'r1'){
	  hide()
      $("#rfgroup").show("slow")
	  $("#savebutt").show("slow")
}else if(rates.value == 'r2'){
      hide()
      $("#lastNgroup").show("slow")
	  $("#savebutt").show("slow")
}else if(rates.value == 'r3'){
      hide()
      $("#loginGroup").show("slow")
	  $("#savebutt").show("slow")
}else if(rates.value == 'r4'){
      hide()
      $("#paswGroup").show("slow")
	  $("#savebutt").show("slow")
}else if(rates.value == 'r5'){
      hide()
      $("#roleGroup").show("slow")
	  $("#savebutt").show("slow")
}else if(rates.value == 'r6'){
      hide()
      $("#projectGroup").show("slow")
	  $("#savebutt").show("slow")
}else if(rates.value == 'r7'){
      hide()
      $("#deletebutt").show("slow")
}else{
alert("Please select options")
} 
} 

function hide(){
	$("#deletebutt").hide("slow")
	$("#savebutt").hide("slow")
	$("#rfgroup").hide("slow")
	$("#projectGroup").hide("slow")
	document.getElementById("newrfID").innerHTML = "";
	$("#lastNgroup").hide("slow")
	document.getElementById("newlastName").innerHTML = "";
	$("#loginGroup").hide("slow")
	document.getElementById("newlogin").innerHTML = "";
	$("#paswGroup").hide("slow")
	document.getElementById("newpasw").innerHTML = "";
	$("#roleGroup").hide("slow")
	

}

     function  changeRfid()  {
		 var changeRf = {
			 "login":$("#login").val(),
			 "rfId":$("#rfID").val(),
			 "newRfId":$("#newrfID").val()
		 }
		 

	  $.ajax({
                       url:"http://" + ip +":8080/person/chrf",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(changeRf),
                       success:function(data){
						 alert("RFid was changed");
						 location.reload(); 
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
	
   } 
  
       function  lastName()  {
		 var changeLn = {
			 "login":$("#login").val(),
			 "lastName":$("#lastName").val(),
			 "newLastName":$("#newlastName").val()
		 }
		 

	  $.ajax({
                       url:"http://" + ip +":8080/person/chln",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(changeLn),
                       success:function(data){
						 alert("Last name was changed");
						 location.reload(); 
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
	
   } 
     function  login()  {
		 var changeLn = {
			 "login":$("#login").val(),
			 "newLogin":$("#newlogin").val()
		 }
		 

	  $.ajax({
                       url:"http://" + ip +":8080/person/chlg",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(changeLn),
                       success:function(data){
						 alert("Login was changed");
						 location.reload(); 
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
	
   } 
   
   function  pasword()  {
		 var changePw = {
			 "login":$("#login").val(),
			 "password":$("#pasw").val(),
			 "newPassword":$("#newpasw").val()
		 }
		 

	  $.ajax({
                       url:"http://" + ip +":8080/person/chpw",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(changePw),
                       success:function(data){
						 alert("Password was changed");
						 location.reload(); 
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
	
   }



function  changeRole()  {
		 
		 var changeRl = {
			 "login":$("#login").val(),
			 "role":$("#newrole").val()
		 }
		 

	  $.ajax({
                       url:"http://" + ip +":8080/person/chRl",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(changeRl),
                       success:function(data){
						 alert("Role was changed");
						 location.reload(); 
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
	
   } 
   
   
function  changeProject()  {
		 
		 var changePr = {
			 "login":$("#login").val(),
			 "projects":projects
		 }
		 

	  $.ajax({
                       url:"http://" + ip +":8080/person/updateProgAcc",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(changePr),
                       success:function(data){
						 alert("Project was changed");
						 location.reload(); 
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
	
   }
   
   function  deleteP()  {
		 
		 var personDel = {
			 "login":$("#login").val()
		 }
		 

	  $.ajax({
                       url:"http://" + ip +":8080/person/delPers",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(personDel),
                       success:function(data){
						 alert("Person deleted");
						 location.reload(); 
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
	
   }
   
  
  function saveButt(){
	rates = document.querySelector('input[name="rate"]:checked');
	
 if(rates.value == 'r1'){
	  changeRfid()
}else if(rates.value == 'r2'){
     lastName()
}else if(rates.value == 'r3'){
       login()
}else if(rates.value == 'r4'){
     pasword()
}else if(rates.value == 'r5'){
     changeRole()
}else if(rates.value == 'r6'){
      changeProject()
}else if(rates.value == 'r7'){
    deleteP()  
}else{
alert("Please select options")
}
//  
  }
  
  function getRolle(){
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
						   $("#newrole").append("<option>"+data[i]+"</option>"
						   )
						   }
						   },
                       error:function(error){
                           alert("Error");
                       }
   
                   });
  }