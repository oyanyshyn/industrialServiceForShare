$("#menu").append("<nav class='navbar navbar-default navbar-static-top' role='navigation' style='margin-bottom: 0'>"+
           " <div class='navbar-header'>"+
               " <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>"+
                    "<span class='sr-only'>Toggle navigation</span>"+
                   " <span class='icon-bar'></span>"+
                   " <span class='icon-bar'></span>"+
                   " <span class='icon-bar'></span>"+
               " </button>"+
                "<a class='navbar-brand' href='index.html'>Industrial service</a>"+
            "</div>"+
           " <!-- /.navbar-header -->"+

            "<ul class='nav navbar-top-links navbar-right' >"+
             " <li class='dropdown' style='display:none' id='message'>"+
                    "<a class='dropdown-toggle' data-toggle='dropdown' href='#'>"+
                       " <i class='fa fa-bell fa-fw'></i> <i class='fa fa-caret-down'></i>"+
                    "</a>"+
                   " <ul class='dropdown-menu dropdown-alerts'>"+
                       " <li>"+
                          "  <a href='#'>"+
                               " <div>"+
                                  "  <i class='fa fa-comment fa-fw'></i> New Comment"+
                                   " <span class='pull-right text-muted small'>4 minutes ago</span>"+
                               " </div>"+
                           " </a>"+
                       " </li>"+
                        "<li class='divider'></li>"+
                       " <li>"+
                            "<a href='#'>"+
                               " <div>"+
                                   " <i class='fa fa-twitter fa-fw'></i> 3 New Followers"+
                                   " <span class='pull-right text-muted small'>12 minutes ago</span>"+
                               " </div>"+
                           " </a>"+
                       " </li>"+
                       " <li class='divider'></li>"+
                        "<li>"+
                            "<a href='#'>"+
                               " <div>"+
                                    "<i class='fa fa-envelope fa-fw'></i> Message Sent"+
                                    "<span class='pull-right text-muted small'>4 minutes ago</span>"+
                                "</div>"+
                           " </a>"+
                       " </li>"+
                       " <li class='divider'></li>"+
                       " <li>"+
                          "  <a href='#'>"+
                               " <div>"+
                                  "  <i class='fa fa-tasks fa-fw'></i> New Task"+
                                    "<span class='pull-right text-muted small'>4 minutes ago</span>"+
                                "</div>"+
                            "</a>"+
                       " </li>"+
                        "<li class='divider'></li>"+
                       " <li>"+
                           " <a href='#'>"+
                                "<div>"+
                                    "<i class='fa fa-upload fa-fw'></i> Server Rebooted"+
                                   " <span class='pull-right text-muted small'>4 minutes ago</span>"+
                               " </div>"+
                          "  </a>"+
                       " </li>"+
                      "  <li class='divider'></li>"+
                        "<li>"+
                            "<a class='text-center' href='#'>"+
                                "<strong>See All Alerts</strong>"+
                                "<i class='fa fa-angle-right'></i>"+
                            "</a>"+
                        "</li>"+
                   " </ul>"+
                    "<!-- /.dropdown-alerts -->"+
               " </li>"+
                " <!-- /.dropdown-alerts -->"+
            " <li class='dropdown'>"+
                   
                   " <a class='dropdown-toggle' data-toggle='dropdown' href='#'>"+
                       " <i class='fa fa-user fa-fw'></i> <i class='fa fa-caret-down'></i>"+
                    "</a>"+
                  "  <ul class='dropdown-menu dropdown-user'>"+
                       
                       " <li><a href='changePasw.html'><i class='fa fa-user fa-fw'></i> Change password</a>"+
                       " </li>"+
                       " <li class='divider'></li>"+
                        "<li><a href='login.html'><i class='fa fa-sign-out fa-fw'></i> Logout</a>"+
                       " </li>"+
                    "</ul>"+
                   " <!-- /.dropdown-user -->"+
                "</li>"+
               " <!-- /.dropdown -->"+
           " </ul>"+
            "<!-- /.navbar-top-links -->"+

          "  <div class='navbar-default sidebar' role='navigation'>"+
                "<div class='sidebar-nav navbar-collapse'>"+
                  "  <ul class='nav' id='side-menu'>"+
				  "<!-- -------------------------efficiency------------------------------------------------- -->"+
                      " <li style='display:none' id='efficiency'>"+
                           " <a href='#'><i class='fa fa-bar-chart-o fa-fw'></i> Efficiency ETB <span class='fa arrow'></span></a>"+
                            "<ul class='nav nav-second-level'>"+
                               " <li>"+
                                    "<a href='oneTeam.html'>Team efficiency</a>"+
                               " </li>"+
                                "<li>"+
                                  "  <a href='allTeam.html'>Teams efficiency</a>"+
                              "  </li>"+
                              "  <li>"+
                               "     <a href='family.html'>Family efficiency</a>"+
                               " </li>"+
                            "</ul>"+
                            "<!-- /.nav-second-level -->"+
                        "</li>"+
						"<!-- -------------------------ETB data------------------------------------------------- -->"+
                      " <li style='display:none' id='etbData'>"+
                           " <a href='#'><i class='fa fa-sitemap fa-fw'></i>ETB's data <span class='fa arrow'></span></a>"+
                            "<ul class='nav nav-second-level'>"+
                               " <li>"+
                                    "<a href='etbData.html'>General info</a>"+
                               " </li>"+
                                "<li id='box' style='display:none'>"+
                                  "  <a href='box.html'>BOX</a>"+
                              "  </li>"+
                             // "  <li>"+
                             // "     <a href='criticalErrors.html'>Critical error</a>"+
                             //  " </li>"+
							    "  <li>"+
                               "     <a href='validations.html'>Validation</a>"+
                               " </li>"+
                            "</ul>"+
                            "<!-- /.nav-second-level -->"+
                        "</li>"+
						"<!-- -------------------------cutting------------------------------------------------- -->"+
						" <li style='display:none' id='cutting'>"+
						" <a href='#'><i class='fa  fa-cut fa-fw'></i> Cutting <span class='fa arrow'></span></a>"+
						"<ul class='nav nav-second-level'>"+
                       " <li>"+
                           " <a href='dcvCutting.html'>DCV report</a>"+
                       " </li>"+
                         "</ul>"+
                            "<!-- /.nav-second-level -->"+
							"</li>"+
							 "<!-- -------------------------Preparation------------------------------------------------- -->"+
						" <li style='display:none' id='preparation'>"+
						" <a href='#'><i class='fa  fa-code-fork fa-fw'></i> Preparation <span class='fa arrow'></span></a>"+
						"<ul class='nav nav-second-level'>"+
                       " <li>"+
                           " <a href='DCVpreparation.html'>DCV report</a>"+
                       " </li>"+
                         "</ul>"+
                            "<!-- /.nav-second-level -->"+
							"</li>"+
							"<!-- -------------------------Quality request------------------------------------------------- -->"+
                      " <li style='display:none' id='askQa'>"+
                           " <a href='#'><i class='fa fa-info fa-fw'></i>Ask quality <span class='fa arrow'></span></a>"+
                            "<ul class='nav nav-second-level'>"+
                               " <li>"+
                                    "<a href='etbData.html'>Assambly</a>"+
                               " </li>"+
                                "<li>"+
                                  "  <a href='allTeam.html'>Preparation</a>"+
                              "  </li>"+
                              "  <li>"+
                               "     <a href='family.html'>Cutting</a>"+
                               " </li>"+
							  "</ul>"+
                            "<!-- /.nav-second-level -->"+
                        "</li>"+
							 "<!-- -------------------------ETB engineer------------------------------------------------- -->"+
                      " <li style='display:none' id='etbEngineer'>"+
                           " <a href='#'><i class='fa  fa-rocket fa-fw'></i> ETB Engineering <span class='fa arrow'></span></a>"+
                            "<ul class='nav nav-second-level'>"+
                               " <li>"+
                                    "<a href='Orders.html'>Orders</a>"+
                               " </li>"+
                                "<li>"+
                                  "  <a href='ordersUpdate.html'>Update orders</a>"+
                              "  </li>"+
                             
                            "</ul>"+
                            "<!-- /.nav-second-level -->"+
                        "</li>"+
						 "<!-- -------------------------Users------------------------------------------------- -->"+
                      " <li style='display:none' id='users'>"+
                           " <a href='#'><i class='fa  fa-users fa-fw'></i> User's parameters <span class='fa arrow'></span></a>"+
                            "<ul class='nav nav-second-level'>"+
                               " <li>"+
                                    "<a href='newPerson.html'>New USER</a>"+
                               " </li>"+
                                "<li>"+
                                  "  <a href='updatePerson.html'>Update users</a>"+
                              "  </li>"+
							   "<li>"+
                                  "  <a href='personAll.html'>All user</a>"+
                              "  </li>"+
                             
                            "</ul>"+
                            "<!-- /.nav-second-level -->"+
                        "</li>"+
						"<!-- -------------------------------------------------------------------------- -->"+
                 "   </ul>"+
               " </div>"+
               " <!-- /.sidebar-collapse -->"+
            "</div>"+
          
        "</nav>")
		
		
	   $.ajax({
                url:"http://" + ip +":8080/person/key",
                type:"POST",
                contentType: "application/json",
                
               contentType: "application/json",
                headers:{
                  "token":localStorage.getItem("authorityToken"),
                  "Access-Control-Allow-Origin": '*'
                },
              crossDomain: true,
                success:function(data){
                    
                },
                error: function(error){
				  localStorage.clear;
				  document.location.href='login.html';
                }
              });
		
		
		if (localStorage.getItem("role")=="ADMIN"){$("#askQa").show();$("#box").show();$("#etbData").show();$("#message").show();$("#efficiency").show();$("#cutting").show();$("#etbEngineer").show();$("#preparation").show();$("#users").show()}
		else if (localStorage.getItem("role")=="QUALITYPR"){$("#preparation").show();}
		else if (localStorage.getItem("role")=="QUALITYASM"){$("#etbData").show();}
		else if (localStorage.getItem("role")=="CUTTINGTEH"){$("#preparation").show();}
		else if (localStorage.getItem("role")=="ETBTEH"){$("#etbData").show();$("#box").show();}
		else if (localStorage.getItem("role")=="PRODUCTION"){$("#preparation").show();}	
             
	