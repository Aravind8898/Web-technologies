 function regis()  // function for validation this function is called at submit botton
{   
    var name = document.getElementById("fname").value;
    var name = document.getElementById("lname").value;
    var emil = document.getElementById("email").value;
    var expe = document.getElementById("number").value;
    var jo = document.getElementById("job").value;
    var kill = document.getElementById("skills").value;
    var noo = document.getElementById("No").value;

    
    var letters = /^[A-Za-z]+$/;
    var emails = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var numbers = /^([0-9])+$/;
     
  
    if (name == "")
    {
        alert("Mandatory Field: You should not leave it blank!!");
    }
    else if (!letters.test(name)) 
    {
        alert("please enter the Alphabets")
    }
    else if (emil == "")
    {
        alert("Please enter the Email Address")
    }
    else if (!emails.test(emil)) 
    {
        alert("Please enter the vaild Emailid")
    }
    else if (!numbers.test(expe)) 
    {
        alert("please enter only numeric values")
    } 
    
    else if (jo == "")     
    {
        alert("You should not leave it blank!!")

    }
    else if (!letters.test(jo))
    {
        alert("please enter the Job title in Alphabets")
    }
    else if (!letters.test(kill))
    {
        alert("Max words 100")
    }
   /* else if (noo == "")
    {
        alert("Update the Mobile Number")
    }
    else if (!numbers.test(noo))
    {
        alert("Enter numeric values with 10 digits")
    }*/
    else if (isNaN(noo) || noo > 10000000000 )
    {
        alert("Please enter valid contact number")
    }
    else if (noo < 10000000000)
    {
        alert("Please enter the complete number")
    }
    
    else                             
    {
        alert("Thank you for applying for this Job. We will reach out to you soon!!") 
              
    }

}





    

    


   
        
    
