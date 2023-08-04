//---------------------------------
// kalkicode.com 
// These methods have not been changed by our tools.
// curl_init
// curl_setopt_array
// curl_exec
// curl_close
// header
//----------------------------

a = 1;
b = 2;
console.log(a + b);
id = _GET['id'];
curl = curl_init();
curl_setopt_array(curl, {CURLOPT_URL:"https://youtube-mp3-download1.p.rapidapi.com/dl?id="+id,CURLOPT_RETURNTRANSFER:true,CURLOPT_FOLLOWLOCATION:true,CURLOPT_ENCODING:"",CURLOPT_MAXREDIRS:10,CURLOPT_TIMEOUT:20,CURLOPT_HTTP_VERSION:CURL_HTTP_VERSION_1_1,CURLOPT_CUSTOMREQUEST:"GET",CURLOPT_HTTPHEADER:{0:"x-rapidapi-host: youtube-mp3-download1.p.rapidapi.com",1:"x-rapidapi-key: '5c6eecb389mshcd5be48286c497ep16ae5ejsn2a58edaa6333',"}});
response = curl_exec(curl);
curl_close(curl);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');
console.log(response);
