 function regis() //using function to call the validations below:
{   
    var name = document.getElementById("fname").value;
    var name = document.getElementById("lname").value;
    var emil = document.getElementById("email").value;
    var expe = document.getElementById("number").value;
    var jo = document.getElementById("job").value;
    var kill = document.getElementById("skills").value;
    var noo = document.getElementById("No").value;

    //All letters and numbers are filter using regex
    var letters = /^[A-Za-z]+$/;
    var emails = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var numbers = /^([0-9])+$/;
  
    if (name == "")
    {
        alert("Mandatory Field: You should not leave it blank!!");
    }
    else if (!letters.test(name)) // Here test method is used. // Alphabets check
    {
        alert("please enter the Alphabets")
    }
    else if (emil == "")
    {
        alert("Please enter the Email Address")
    }
    else if (!emails.test(emil)) //test method is used //Email check
    {
        alert("Please enter the vaild Emailid")
    }
    else if (!numbers.test(expe)) //test method to check only numeric values.
    {
        alert("please enter only numeric values")
    } 
    
    else if (jo == "")     //This feild should not leave blank
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
    else if (noo == "")
    {
        alert("Update the Mobile Number")
    }
    else if (!numbers.test(noo))
    {
        alert("Enter numeric values")
    }
    else                             // if the above conditions pass then successfully application will submitted
    {
        alert("Thank you for applying for this Job. We will reach out to you soon!!") 
              
    }

}





    

    


   
        
    
