
  $("#Btn").click(function (){
           var loginReq = {
  login:$("#login").val(),
  password:$("#password").val()
            };
          
             $.ajax({
                url:"http://" + ip +":8080/public/login",
                type:"POST",
                contentType: "application/json",
                data: JSON.stringify(loginReq),
				success:function(data){
                  localStorage.setItem("authorityToken","Bearer "+data);
           
                  alert("Welcome");
                },
                error: function(error){
                  alert("Data is incorrect");
				  
                }
              });
                
           $.ajax({
                url:"http://" + ip + ":8080/person/login",
                type:"POST",
                contentType: "application/json",
                data: JSON.stringify(loginReq),
               contentType: "application/json",
                headers:{
                  "token":localStorage.getItem("authorityToken"),
                  "Access-Control-Allow-Origin": '*'
                },
              crossDomain: true,
                success:function(data){
                    console.log(data)
                    localStorage.setItem("login",data.login);
                    localStorage.setItem("role",data.role);
                    if (data.role!=""){document.location.href='index.html';};
                    
                },
                error: function(error){
                  alert("error");
                }
              });
           
       
           
           
          });
