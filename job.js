fetch('Jobs.json')       //used fetch API here
    .then(function (response) {   //got the response from the JSON
        return response.json();
    })
    .then(function (data)
    {
        appendData(data);  //Actuall JSON data into data
        
        function appendData(data) //used append function
        {
            var main = document.getElementById("demo"),   //id demo is called in index.html 
            one = document.getElementById("second"),
            two = document.getElementById("three"),
            four = document.getElementById("four"),
            five = document.getElementById("five"),
            six = document.getElementById("six"),
            seven = document.getElementById("seven"),
            eight = document.getElementById("eight"),
            nine = document.getElementById("nine"),
            ten = document.getElementById("ten");
           
                i= 1
                var div = document.createElement("div");
                div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
                main.appendChild(div);
         
               i = 2
               var div = document.createElement("div");
               div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
               one.appendChild(div);

               i = 3
               var div = document.createElement("div");
               div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
               two.appendChild(div);

              i = 4
              var div = document.createElement("div");
              div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
              four.appendChild(div);

              i = 5
              var div = document.createElement("div");
              div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
              five.appendChild(div);

              i = 6
              var div = document.createElement("div");
              div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
              six.appendChild(div);

              i = 7
              var div = document.createElement("div");
              div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
              seven.appendChild(div);

              i = 8
              var div = document.createElement("div");
              div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
              eight.appendChild(div);

              i = 9
              var div = document.createElement("div");
              div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
              nine.appendChild(div);

             i = 10
             var div = document.createElement("div");
             div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType + "<br>" + 'category: ' + data[i].category;
             ten.appendChild(div);
        }
        
       
       
    })






