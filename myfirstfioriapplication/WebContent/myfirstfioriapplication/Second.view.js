sap.ui.jsview("myfirstfioriapplication.Second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstfioriapplication.Second
	*/ 
	getControllerName : function() {
		return "myfirstfioriapplication.Second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstfioriapplication.Second
	*/ 
	createContent : function(oController) {
		
		
		var obtn=new sap.m.Button({text:"Back",press:oController.goback,icon:"sap-icon//:arrow-left"});
 		var otab1=new sap.m.IconTabFilter({text:"home",key:"home",icon:"sap-icon-//home"})
 		var otab2=new sap.m.IconTabFilter({text:"Exporters",key:"Exporters",icon:"sap-icon://manager"});
		var otab3=new sap.m.IconTabFilter({text:"fruits",key:"fruitnames",icon:"sap-icon://employee"});
 		var itab=new sap.m.IconTabBar({
 			items:[otab1,otab2,otab3]
 			
 		});
 	var odrop=new sap.m.MultiComboBox();
 	odrop.bindItems({
 		path:"/fruitnames",
 		template:new sap.ui.core.Item({
 			text:"{name}",
 			key:"{name}"
 		})
 		
 	})
 	
 	otab3.addContent(odrop);
		var objheader= new sap.m.ObjectHeader({
			
			title:"{name}",
			icon:"{image}",
			intro:"{description}",
			number:"{price}",
			numberUnit:"{currency}",
			firstStatus:new sap.m.ObjectStatus({
				text:"{Availability}"
				
				
			}),
			attributes:[new sap.m.ObjectAttribute({
				text:"{supplier}"
				
				
			})]
				
			
			
			
			
			
		});
 		var oform=new sap.ui.layout.form.SimpleForm({
 			content:[
 			         
 			         new sap.m.Label({text:"property "}),
 			         new sap.m.Text({text:"{property}"})
 			         
 			         ]
 			
 			
 			
 		});
 		otab1.addContent(oform);
 		var ocol1=new sap.m.Column({
 			header: new sap.m.Text({text:"fruit name"})
 			
 		});
 		var ocol2=new sap.m.Column({
 			
 			header:new sap.m.Text({text:"price"})
 		});
 		var ocol3=new sap.m.Column({
 			
 			header:new sap.m.Text({text:"availability"})
 			
 		});
 		
 		var otab=new sap.m.Table({
 			
 		columns:[ocol1,ocol2,ocol3]	,
 		headerToolbar:new sap.m.Toolbar({
 			content:[
 			         new sap.m.ToolbarSpacer(),
 			         new sap.m.Button({
 			        	 icon:"sap-icon://filter",
 			        	 press:oController.showfilter
 			         })
 			         ]
 			
 		}),
 		});
 		
 		otab.bindItems({
 			path:"/fruitnames",
 			template:new sap.m.ColumnListItem({
 				
 				cells:[
 				       
 				       new sap.m.Input({value:"{name}",
 				    	showValueHelp:true ,
 				    	valueHelpRequest:[oController.Launchhelp,oController]
 				       }),
 				      // new sap.m.Text({text:"{price}{currency}"}),
 				     new sap.m.ObjectNumber({
 				    	 number:"{price}",
 				    	 numberUnit:"{currency}"
 				    	 
 				     }),
 				     //  new sap.m.Text({text:"{Availability}"})
 				       new sap.m.ObjectStatus({
 				    	   text:"{Availability}",
 				    	   state:{
 				    		   path:"Availability",
 				    		   formatter:function(inp)
 				    		   {switch(inp)
 				    			   {
 				    		   case "Available":
 				    			   return "Success";
                                   break;
 				    		   case "Not Available":
 				    		   return "Error";
 				    		   break;
 				    		   default:
 				    			   return "Warning";
 				    		   
 				    			   }
 				    			   
 				    			   
 				    		   }
 				    		   
 				    		   
 				    	   }
 				    	   
 				    	   
 				       })
 				       
 				       ]
 				
 				
 			})
 			
 			
 		})
 		
 		
 		otab2.addContent(otab);
		return new sap.m.Page("idPage2",{
			title: "Second",
			showNavButton:true,
			navButtonPress:oController.goback,
			content: [
			//obtn
			itab,
			objheader,
			
			],
			footer:new sap.m.Toolbar({
				content:[
			               			        new sap.m.ToolbarSpacer(),
			               			        new sap.m.Button({text:"Approve",type:"Accept",press:[oController.Approve,oController]}),
			               			        new sap.m.Button({text:"Reject",type:sap.m.ButtonType.Reject})
			               			        
			               			        ]})
			
			
		});
	}

});