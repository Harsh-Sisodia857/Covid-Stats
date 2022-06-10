$.ajax({
    type : 'get',
    url : 'https://api.covid19api.com/summary',
    success : function(response){
        // console.log(response.Countries);
        for(var i = 0 ; i<response.Countries.length; i++){
            console.log(response.Countries[i].TotalConfirmed);
            console.log(response.Countries[i].TotalRecovered);
            var totalActive = response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered;
            console.log(totalActive);
            var tablerow = `<tr> <td>${response.Countries[i].Country}</td> <td>${response.Countries[i].TotalConfirmed}</td> <td>${totalActive}</td> <td>${response.Countries[i].TotalRecovered}</td> <td>${response.Countries[i].TotalDeaths}</td></tr>`
            $('#tbody').append(tablerow);
        }
        $('#covidtable').DataTable();
    },
    // Telling the javascript compiler that the table i m using is data table
    error :function(error){
        console.log(error);
    }
})