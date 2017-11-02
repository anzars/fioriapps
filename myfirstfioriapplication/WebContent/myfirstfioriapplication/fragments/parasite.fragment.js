sap.ui.jsfragment("myfirstfioriapplication.fragments.parasite",{
	createContent:function(oController){
		var oseldiag=new sap.m.SelectDialog({
			
			multiSelect:true,
			confirm:[oController.showme,oController],
		});
		
		
		return oseldiag;
	}
	
	
	
	
});