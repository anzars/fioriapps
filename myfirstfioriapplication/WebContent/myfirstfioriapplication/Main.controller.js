sap.ui.define(["sap/ui/core/mvc/Controller",
               "myfirstfioriapplication/model"
               
               ],
               
               
 function(oControllers,Jsonm)
 {return oControllers.extend("myfirstfioriapplication.Main",{
	 
	 

	 /**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf myfirstfioriapplication.Main
	 */
 	onInit: function() {
	var fruitmodel=Jsonm.createfruits();
	sap.ui.getCore().setModel(fruitmodel);
	 	},
	 	clickme:function(oevent)
	 	{	//debugger;
	 		var ovalue= sap.ui.getCore().byId("idSearch").getValue();
	 	sap.ui.getCore().byId("idPage2").setTitle(ovalue);
	 		var oapp=sap.ui.getCore().byId("idApp");
	 	
	 		oapp.to("idSecond","flip");
	 		
	 		
	 	},
	 	searchitems:function(oevent)
	 	{
	 		
	 		var searchstr=oevent.getParameter("query");
	 		var ofilter=new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,searchstr);
	 		var ofilter1=new sap.ui.model.Filter("property",sap.ui.model.FilterOperator.Contains,searchstr);
	 		//var afilter=[ofilter];
	 		var afilter=new sap.ui.model.Filter({
	 			filters:[ofilter,ofilter1],
	 		and:false
	 		});
	 		var olist=sap.ui.getCore().byId("idListdata");
	 		olist.getBinding("items").filter(afilter);
	 		//debugger;
	 		
	 		
	 	},
	 	clickeditem:function(oevent){
	 		//debugger;
	 	var selecteditem=oevent.getParameter("listItem");	
	 	var selectedpath=selecteditem.getBindingContextPath();
	 	var oview=sap.ui.getCore().byId("idSecond");
	 	oview.bindElement(selectedpath);
	 	//debugger;
	 	this.clickme();
	 		
	 		
	 	},
	 	deleteitem:function(oevent){
	 		
	 	var olist=oevent.getSource();
	 	olist.removeItem(oevent.getParameter("listItem"));
	 		
	 	}

	 /**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf myfirstfioriapplication.Main
	 */
//	 	onBeforeRendering: function() {
	 //
//	 	},

	 /**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf myfirstfioriapplication.Main
	 */
//	 	onAfterRendering: function() {
	 //
//	 	},

	 /**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf myfirstfioriapplication.Main
	 */
//	 	onExit: function() {
	 //
//	 	}

	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
 })
	
 }

)

//sap.ui.controller("myfirstfioriapplication.Main", {
