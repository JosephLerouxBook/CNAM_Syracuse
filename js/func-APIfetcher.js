const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
});
  
var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};
  
fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => {
      console.log(result);
      var jsonObj = JSON.parse(result);
      console.log(jsonObj[0].url);
      document.writeln("<img src=\"" + jsonObj[0].url + "\">")
    })
  .catch(error => console.log('error', error));        
  
