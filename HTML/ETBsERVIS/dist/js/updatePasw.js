



function changePasw(){
	
	if ($("#newpasw1").val()==$("#newpasw2").val()){
		var  request = {  
  "login": localStorage.getItem("login"),
  "newPassword":$("#newpasw2").val(),
   "password": $("#pasw").val()
		}
		console.log(request)
		 $.ajax({
                       url:"http://" + ip +":8080/person/chpw",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(request),
                       success:function(data){
		                alert("Password was changed");
						document.location.href='index.html';
		                },
	   
                       error:function(error){
						   
                           alert("You're entering incorrect data");
                       }
   
                   });
		
		

		
		
		
	}else{
		alert("New passwords aren't equals");
		}
	

} 