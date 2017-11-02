sap.ui.jsview("myfirstfioriapplication.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstfioriapplication.Main
	*/ 
	getControllerName : function() {
		return "myfirstfioriapplication.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstfioriapplication.Main
	*/ 
	createContent : function(oController) {
		var osearchfield=new sap.m.SearchField("idSearch",{
			search:oController.searchitems
			
		});
		var otoolbar=new sap.m.Toolbar({content:[osearchfield]});
		var olistdata= new sap.m.List("idListdata1",{
			mode:sap.m.ListMode.MultiSelect,
			delete:[oController.deleteitem,oController],
			items:{
				path:"/fruitnames",
				template:new sap.m.StandardListItem(
				{
					title:"{name}",
					description:"{description}",
					icon:"{image}"
					
					
				}		
				
				
				)	,			
		sorter: new sap.ui.model.Sorter("name")
				
			}});
		var olistobj=new sap.m.List("idListdata",{
			mode:sap.m.ListMode.SingleSelectMaster,
			itemPress:[oController.clickeditem,oController],
			selectionChange:[oController.clickeditem,oController],
			items:{
				
				path:"/fruitnames",
				template:new sap.m.ObjectListItem({
					//type:"Navigation",
					
					intro:"{description}",
					title:"{name}",
					icon:"{image}",
					number:"{price}",
					numberUnit:"{currency}",
				firstStatus:{
					text:"{Available}",
					state:"Success"
					
				}
					
						
					
					
				})
				
			}
			
			
		});
			
		var olist=new sap.m.List("idList", {
			items:[
			       new sap.m.DisplayListItem({
			    	   label:"He-man",
			    	   value:"Good Robot"
			    	   
			    	   
			    	   
			       }),
			       
			       new sap.m.StandardListItem({
			    	   title:"She-man",
			    	   icon:"sap-icon://home",
			    	   description: "Bad Robot"
			    	   
			    	   
			       }),
			       new sap.m.InputListItem({
			    	   label:"Type the name of robot you want to create",
			    	   content:[new sap.m.Input()
			    	            ]
			    	   
			    	   
			       }),
			       new sap.m.ObjectListItem({
			    	   intro:"This is war things",
			    	   icon:"sap-icon://action",
			    	   title:"Warships",
			    	   number:"10",
			    	   numberUnit:"120",
			    	attributes:[new sap.m.ObjectAttribute({
			    		title:"Tyson",
			    		text:"Tyson missiles fire hard"
			    		
			    		}),
			    		new sap.m.ObjectAttribute({
			    			title:"Roky",
			    			text:"Rocky missiles fire soft "
			    			
			    			
			    		})
			    		
			    	            
			    	            ],
			       firstStatus:new sap.m.ObjectStatus({
			    	   text:"Available",
			    	   state:"Error"
			    	   
			       })
			    	   
			       }),
			       new sap.m.CustomListItem({
			    	   
			    	   
			    	   content:[new sap.m.Switch()]
			    	   
			       })
			       
			                     
			                  
			       
			       
			       
			       ]
			
			
			
			
		})
		
		
		
 		return new sap.m.Page({
 			
			title: "Welcome to fiori",
			subHeader:[otoolbar],
			headerContent: [new sap.m.Button({icon:"sap-icon://action",
				press:oController.clickme})],
			content: [olistobj
			//new sap.m.Button({text:"Go",press:oController.clickme})
			],
			footer:[new sap.m.Toolbar()]
 		
		});
	}

});