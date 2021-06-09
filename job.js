fetch('Jobs.json')       //using fetch API to get the data from JSON file
    .then(function (response) {   //return the data
        return response.json();
    })
    .then(function (data){   //actual JSON data here
        appendData(data);
        function appendData(data) //used append function here
        {
            var main = document.getElementById("demo")
            var one = document.getElementById("second")
            var two = document.getElementById("three")
            var four = document.getElementById("four")
            var five = document.getElementById("five")
            var six = document.getElementById("six")
            var seven = document.getElementById("seven")
            var eight = document.getElementById("eight")
            var nine = document.getElementById("nine")
            var ten = document.getElementById("ten")
           // for (i = 0; i < data.length; i++)
            //{
                i= 1
                var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
                main.appendChild(div);
          //  }
                i = 2
                 var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company +  "<br>" + 'JobType: ' + data[i].JobType;
            one.appendChild(div);

              i = 3
              var div = document.createElement("div");
              div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
              two.appendChild(div);

             i = 4
            var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
            four.appendChild(div);

            i = 5
            var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
            five.appendChild(div);

            i = 6
            var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
            six.appendChild(div);

            i = 7
            var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
            seven.appendChild(div);

            i = 8
            var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
            eight.appendChild(div);

            i = 9
            var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
            nine.appendChild(div);

            i = 10
            var div = document.createElement("div");
            div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company + "<br>" + 'JobType: ' + data[i].JobType;
            ten.appendChild(div);
        }
       
    })






