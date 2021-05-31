fetch('Jobs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        function appendData(data) {
            var main = document.getElementById("demo");
           
            for (var i = 0; i < 1; i++)
            {
                var div = document.createElement("div");
                div.innerHTML = 'JobTitle: ' + data[i].JobTitle;
                main.appendChild(div);
                var div = document.createElement("div");
                div.innerHTML = 'Location: ' + data[i].Location;
                main.appendChild(div);
                var div = document.createElement("div");
                div.innerHTML = 'Company: ' + data[i].company;
                main.appendChild(div);

            }
        }
    
})
