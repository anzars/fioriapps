sap.ui.define(
[
 "sap/ui/core/mvc/Controller",
 "sap/m/MessageBox",
 "sap/m/MessageToast"
 
 
 ],
function(oController,OMbox,OMtoast)
{
	
return oController.extend("myfirstfioriapplication.Second",{

	//sap.ui.controller("myfirstfioriapplication.Second", {

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf myfirstfioriapplication.Second
	*/
		onInit: function() {
	//jQuery.sap.require("sap.m.MessageBox");
		},
		popupsupplier:null,
		popupfruit:null,
		inputf4:null,
		
		showme:function(oevent)
		{var selectedvalue=oevent.getParameter("selectedItem");
		var oval=selectedvalue.getLabel();
		sap.ui.getCore().byId(inputf4).setValue(oval);
			
			
		},
		Launchhelp:function(oevent){
			inputf4=oevent.getSource().getId();
			if(this.popupfruit==null)
				{
				this.popupfruit=new sap.ui.jsfragment("myfirstfioriapplication.fragments.parasite",this);
				}
			this.popupfruit.bindAggregation("items",{
				path:"/fruitnames",
				template:new sap.m.DisplayListItem({
					label:"{name}",
					value:"{property}"	
					
				})
				
				
			})
			this.popupfruit.setTitle("Fruits popup");
			this.popupfruit.setMultiSelect(false);
			this.popupfruit.open();
		},
		showfilter:function(oevent)
		{ if(this.popupsupplier==null)
			{
			
			this.popupsupplier=new sap.ui.jsfragment("myfirstfioriapplication.fragments.parasite",this);
			
			}
		
		this.popupsupplier.bindAggregation("items",{
			path:"/fruitnames",
			template:new sap.m.DisplayListItem({
				label:"{supplier}",
				value:"{name}"
			})
			
		});
			//OMtoast.show("Next class");
		this.popupsupplier.setTitle("Supplier popup");
			this.popupsupplier.open();
		},
	goback:function(oevent)
	{
	var oapp=sap.ui.getCore().byId("idApp");
	oapp.to("idMain","fade");
	},
	Approve:function(oevent)
	{
			OMbox.confirm("Do you want to approve",{onClose:this.closepopup});
	},
	closepopup:function(oevent)
	{
	if(oevent=="OK")
		{
		
		OMtoast.show("you clicked ok");
		}
	}
	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf myfirstfioriapplication.Second
	*/
//		onBeforeRendering: function() {
	//
//		},

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf myfirstfioriapplication.Second
	*/
//		onAfterRendering: function() {
	//
//		},

	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf myfirstfioriapplication.Second
	*/
//		onExit: function() {
	//
//		}


	
	
	
	
	
	
});
}


);
