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
                        try {
                            var rates = document.querySelector('input[name="rate"]:checked').value;
                            if ($("#collective").val()!=""){
                            if(rates == 'One'){
                                findOne()

                            }else if(rates == 'Some'){
                                findSome()

                            }else{
                                alert("Please select options")
                            }  
							}else{
								alert("Please fill number collective")
								}
							}
                            catch (e) {
								alert("Please select options")
							}

                    }
                    
                    
                    
function findOne(){
    var period = " on "+$("#dateStart").val()
    var checkBOX = document.getElementById("xls");
    document.getElementById("table3").innerHTML = "";
     $("#table03").show("slow")
    var efficiency = {
                          collective: $("#collective").val(),
                          date: $("#dateStart").val(),
                          "plant": $("#plant").val()
                     }

             console.log(efficiency);
           $.ajax({
                       url:"http://" + ip +":8080/efficiency/efficiency",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(efficiency),
                       success:function(data){
                     order= data
                           var orders = new Array()
                        orders[0]= data
                          
                            
                        $("#table3").append("<tr class='odd grade'>"+
                                             "<td class='center'>"+order.plant+"</td>"+
                                            "<td class='center'>"+order.collective+"</td>"+
                                            "<td class='center'>"+order.quantWorkers+"</td>"+
                                            "<td class='center'>"+order.date+"</td>"+
                                            "<td class='center'>"+order.totalByShift+"</td>"+
                                            "<td class='center'>"+order.totalByDay+"</td>"+
                                            "<td class='center'>"+order.efficiency+"</td>"+
                                            "<td class='center'>"+order.references+"</td>"+
                                            "</tr>")
                                        
                    
                if (checkBOX != null){
                 if (checkBOX.checked == true){ 
                     excelPeriod(orders,period);
                 }
             }
     
                       },
                       error:function(error){
                            alert("You're entering incorrect data")
                       }
  
                   });
}
         
                    
                    
                    function findSome(){
                        var checkBOX = document.getElementById("xls");
     
                        document.getElementById("table3").innerHTML = "";
                    var dateSt = new Date();
                        dateSt.setDate($("#dateStart").val());
                    var date = new Date();
                        date.setDate($("#dateFinish").val());
                 
                        if(date>dateSt ||date>Date.now()){
                            alert("You're entering incorrect data")
                        }else{
                        
     $("#table03").show("slow")
                            var efficiency = {
                          collective: $("#collective").val(),
                          date: $("#dateStart").val(),
                          dateFn:$("#dateFinish").val(),
                          "plant": $("#plant").val()
                     }
                            
var period = " from "+$("#dateStart").val() +" to "+$("#dateFinish").val()
             console.log(efficiency);
           $.ajax({
                       url:"http://" + ip +":8080/efficiency/efficiencyPeriod",
                       type:"POST",
                       contentType:"application/json",
                headers:{
                                                      token:localStorage.getItem("authorityToken"),
                                                      "Access-Control-Allow-Origin": '*'
                                                    },
                                                  crossDomain: true,
                       data:JSON.stringify(efficiency),
                       success:function(data){
                          console.log(data)
                        for(var i =0;i<data.length;i++){
                        $("#table3").append("<tr  >"+
                                             "<td class=' '>"+data[i].plant+"</td>"+
                                            "<td class=' '>"+data[i].collective+"</td>"+
                                            "<td class=' '>"+data[i].quantWorkers+"</td>"+
                                            "<td class=' '>"+data[i].date+"</td>"+
                                            "<td class=' '>"+data[i].totalByShift+"</td>"+
                                            "<td class=' '>"+data[i].totalByDay+"</td>"+
                                            "<td class=' '>"+data[i].efficiency+"</td>"+
                                            "<td class=' '>"+data[i].references+"</td>"+
                                            "<td class='enter'></td></tr>")
                                        
                    
                           }
             if (checkBOX != null){
                 if (checkBOX.checked == true){ 
                     excelPeriod(data,period);
                 }
             }
              
     
                       },
                       error:function(error){
                           alert("You're entering incorrect data");
                       }
   
                   });
                         
                        }
}
                    
                    
       function someDay(){             
                    
                    $("#dateFinish").show("slow")
                    $("#calendar3").show("slow")
       }
                    function oneDay(){             

                    $("#dateFinish").hide("slow")
                    $("#calendar3").hide("slow")
       }
                    
                    
                    
                    function excelPeriod(data,period) {
      var excel = $JExcel.new("Calibri light 12 #333333");
      var textStyle = excel.addStyle({align: "L", format: "@"});
      var zeroStyle = excel.addStyle({align: "L", format: "0"});
      var isstringStyle = excel.addStyle({align: "L", format: "@", isstring: true});
            excel.set( {sheet:0,value:"Efficiency" } );
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
				excel.set(0,5,0,"Eefficiency Report",formatHeader);													// Set CELL with header text, using header format
				//excel.set(0,4,undefined,"auto");
        
          excel.set(0,0,3,"Team:");
          excel.set(0,2,3,data[0].collective);
          excel.set(0,0,4,"Period:");
          excel.set(0,2,4,period);
          excel.set(0,0,5,"Date request:");
          excel.set(0,2,5,new Date(Date.now()).toLocaleDateString());
          
          			
          excel.set(0,1,7,"Plant",formatHeader2);
          excel.set(0,2,7,"Team",formatHeader2);
          excel.set(0,3,7,"Workers",formatHeader2);
          excel.set(0,4,7,"Date",formatHeader2);
          excel.set(0,5,7,"Qu/shift",formatHeader2);
          excel.set(0,6,7,"Qu/day",formatHeader2);
          excel.set(0,7,7,"Efficiency",formatHeader2);
          excel.set(0,8,7,"References",formatHeader2);
          
                      var eff=0;  
           for(var i =0;i<data.length;i++){
       
                                            excel.set(0,1,i+8, data[i].plant);
                                            excel.set(0,2,i+8,data[i].collective);
                                            excel.set(0,3,i+8,data[i].quantWorkers);
                                            excel.set(0,4,i+8,data[i].date);
                                            excel.set(0,5,i+8,data[i].totalByShift);
                                            excel.set(0,6,i+8,data[i].totalByDay);
                                            excel.set(0,7,i+8,data[i].efficiency,formatHeader3);
                                        for(var s =0;s<data[i].references.length;s++){
                                            excel.set(0,s+8,i+8,data[i].references[s]);
                                            excel.set(0,s+8,undefined,12);
                                        }
               eff=eff+data[i].efficiency

                           }
        
                        excel.set(0,4,undefined,10);
                        excel.set(0,7,undefined,10);
              excel.set(0,7,data.length+8,(eff/data.length),formatHeader3);  
                        excel.set(0,4,data.length+8,"Average efficiency:",formatHeader2); 
			excel.generate("Eefficiency.xlsx");
          
      }