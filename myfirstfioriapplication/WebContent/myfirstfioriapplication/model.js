sap.ui.define(["sap/ui/model/json/JSONModel"
               
               ],
               
               
  function(Jsonmodel)
  {return {
	  createfruits:function()
	  {
		  var omodel=new Jsonmodel();
		  omodel.loadData("Models/fruits.json");
		  return omodel;
		  
		  
	  }
	  
	  
	  
	  
  }
	
	
	
  }

)