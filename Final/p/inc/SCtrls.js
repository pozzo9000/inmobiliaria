
function LoadXCombo(OCombo,StrRst,BIndistinto)
{
var StrExtract 
var IntPointer = 0;
var StrAcumulado = "";
var StrCodigo
var IntCPointer = 0; 
var BLoadCombo = false;

if (BIndistinto == true)
   {
   OCombo.options[0] = new Option("Indistinto","I");  
   IntCPointer++
   }

while (IntPointer < StrRst.length)		
    {	
    StrExtract = StrRst.substring(IntPointer,IntPointer+1);
    IntPointer++	
	 if (StrExtract == ",") 
	    {
	    StrCodigo = StrAcumulado
	    StrAcumulado = ""
	    while (true) 
	    		{
				StrExtract = StrRst.substring(IntPointer,IntPointer+1);	    		 
  				if (StrExtract != ";") 
  				   {
  				   StrAcumulado = StrAcumulado + StrExtract
  				   }
  				else
  				   {
	             BLoadCombo = true;
	             OCombo.options.length = IntCPointer;
	             OCombo.options[IntCPointer] = new Option(StrAcumulado.substring(0,22),StrCodigo);	             
	             IntCPointer++
	             IntPointer++
	             StrAcumulado = "";
  				   break;
  				   }      
  				IntPointer++
	    		}
	    }
    else
       {
       StrAcumulado = StrAcumulado + StrExtract;	    
		}
    }
  	 
    if (BLoadCombo == false)
     {
     OCombo.options.length = 0;
     OCombo.options[0] = new Option("-----------------","ND");
     }  	       	 
	     
    OCombo.selectedIndex = 0;
}


function IdXCombo(oControl,sValue,BLoadCombo)
{

for (var IntPointer = 0; IntPointer < oControl.length; IntPointer++)
    {
    if (TRM(oControl.options[IntPointer].value) == TRM(sValue))
       {
       oControl.selectedIndex = IntPointer	
       IntPointer = oControl.length;	
       }	
    }	

}


function TRM(xValue)
{
 var IntValue = xValue.length;
 var strRetorno = "";
 var strExtract = "";
   
 for (var intpointer = 0; intpointer < IntValue; intpointer++)
	 {	
         strExtract = xValue.substring(intpointer,intpointer+1)	    	 
		   
  	 if (!(strExtract == " ")) 
    	    {
    	    strRetorno = strRetorno + strExtract;
	    }
    	 }
    		
    
 return(strRetorno)
}


function ActivateDesActivateChkRadioControl(oControl,sCond,sILg)
{

if (sILg != "S")
   {
   oControl.checked = (sCond == 'S') ? true:false
   }
else
   {
   oControl.checked = (sCond == 'S') ? false:true
   }

	
}

function NoSpace(xObject)
{
var IntValue = xObject.value.length;
var strRetorno = "";
var strExtract = "";
    
for (var intpointer = 0; intpointer < IntValue; intpointer++)
    {
		   strExtract = xObject.value.substring(intpointer,intpointer+1)	    	 
		   
  	      if (strExtract == " ") 
    	         {
    	         strRetorno = strRetorno + "_";
	         }
	      else
	         {
  	         strRetorno = strRetorno + strExtract;
	         }   	
    }
    		
    
xObject.value = strRetorno

}
