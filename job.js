fetch('Jobs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        appendData(data);
        function appendData(data)
        {
            var main = document.getElementById("demo")
            for (var i = 0; i < data.length; i++)
            {
                var div = document.createElement("div");
                div.innerHTML = 'JobTitle: ' + data[i].JobTitle + "<br>" + 'Location: ' + data[i].Location + "<br>" + 'Company: ' + data[i].company;
                main.appendChild(div);     
            }
           
        }
       
    })






