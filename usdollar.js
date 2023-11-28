var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload = function(){
    var countryData = JSON.parse(this.response);
    for (i = 0; i<DataTransfer.length; i++){
        ifdata[i].currencies[0].code==="USD"
        {
            console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
        }
    }
}