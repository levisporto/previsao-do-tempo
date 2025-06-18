
async function previsao(){
  for(let step = 200; step < 250; step++){

    let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${step}`);
    let data = await response.json()
   console.log(step);
    console.log(data);
  }
}

function removeSymbols(str) {
  return str
    .normalize('NFD') // Decompose characters into base + diacritic
    .replace(/[\u0300-\u036f]/g, '') // Remove combining diacritics
    .replace(/[^\w\s]/gi, ''); // Optional: Remove other symbols
}
    

//previsao()


function convertDate(isoDate) {
  // Split the date string into parts
  const parts = isoDate.split('-');
  
  // Rearrange parts to DD/MM/YYYY format
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


async function climaFortal() {
 
    
 let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/229/6`);
 let data = await response.json();
 console.log(data);

let emoji;

function getEmoji(n){
  switch (data.clima[n].condicao_desc) {
    case "Chuvas Isoladas":
      emoji = '☔';
      break;
    case "Parcialmente Nublado":
      emoji = '🌥️';
      break;
    case "Predomínio de Sol":
      emoji = '☀️';
      break;
      case "Chuva":
      emoji = '🌧️';
      break;
      case "Pancadas de Chuva":
        emoji = '⛈️';
        break;
   }
}
 

 let h1 = document.getElementById("h1");
 getEmoji(0)
 h1.innerHTML = emoji + data.cidade + ', ' + data.estado;

 let city = document.getElementById("city");
 city.innerHTML = data.clima[0].condicao_desc;
 

 let minmax = document.getElementById("min-max");
 minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max

 let data1 = document.getElementById("data1");

 getEmoji(1)
 document.getElementById("emoji1").innerHTML = emoji;

 
 data1.innerHTML = convertDate(data.clima[1].data);

 let p1 = document.getElementById("p1");
 p1.innerHTML = data.clima[1].condicao_desc;

 let m1 = document.getElementById("m1");
 m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max

//

 let data2 = document.getElementById("data2");
 data2.innerHTML = convertDate(data.clima[2].data);

 getEmoji(2)
 document.getElementById("emoji2").innerHTML = emoji;


 let p2 = document.getElementById("p2");
 p2.innerHTML = data.clima[2].condicao_desc;

 let m2 = document.getElementById("m2");
 m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max

//

 let data3 = document.getElementById("data3");
 data3.innerHTML = convertDate(data.clima[3].data);

 getEmoji(3)
 document.getElementById("emoji3").innerHTML = emoji;

 let p3 = document.getElementById("p3");
 p3.innerHTML = data.clima[3].condicao_desc;

 let m3 = document.getElementById("m3");
 m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max

 //

 
 let data4 = document.getElementById("data4");
 data4.innerHTML = convertDate(data.clima[4].data);

 getEmoji(4)
 document.getElementById("emoji4").innerHTML = emoji;

 let p4 = document.getElementById("p4");
 p4.innerHTML = data.clima[4].condicao_desc;

 let m4 = document.getElementById("m4");
 m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max

 document.getElementById("days").style.display = "block";


}


    










async function climaSP() {
 
    
  let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/244/6`);
  let data = await response.json();
  console.log(data);
 

  let emoji;

  function getEmoji(n){
    switch (data.clima[n].condicao_desc) {
      case "Chuvas Isoladas":
        emoji = '☔';
        break;
      case "Parcialmente Nublado":
        emoji = '🌥️';
        break;
      case "Predomínio de Sol":
        emoji = '☀️';
        break;
        case "Chuva":
        emoji = '🌧️';
        break;
        case "Pancadas de Chuva":
          emoji = '⛈️';
          break;
     }
  }
   

  getEmoji(0)
  let h1 = document.getElementById("h1");
  h1.innerHTML = emoji + data.cidade + ', ' + data.estado;
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = convertDate(data.clima[1].data);

  getEmoji(1)
 document.getElementById("emoji1").innerHTML = emoji;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = convertDate(data.clima[2].data);

  getEmoji(2)
  document.getElementById("emoji2").innerHTML = emoji;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = convertDate(data.clima[3].data);

  getEmoji(3)
  document.getElementById("emoji3").innerHTML = emoji;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = convertDate(data.clima[4].data);

  getEmoji(4)
  document.getElementById("emoji4").innerHTML = emoji;
 
  let p4 = document.getElementById("p4");
  p4.innerHTML = data.clima[4].condicao_desc;
 
  let m4 = document.getElementById("m4");
  m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max
 

  document.getElementById("days").style.display = "block";

 }

 


 async function climaRJ() {
 
    
  let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/241/6`);
  let data = await response.json();
  console.log(data);

  let emoji;

  function getEmoji(n){
    switch (data.clima[n].condicao_desc) {
      case "Chuvas Isoladas":
        emoji = '☔';
        break;
      case "Parcialmente Nublado":
        emoji = '🌥️';
        break;
      case "Predomínio de Sol":
        emoji = '☀️';
        break;
        case "Chuva":
        emoji = '🌧️';
        break;
        case "Pancadas de Chuva":
          emoji = '⛈️';
          break;
     }
  }
   

  getEmoji(0)
  let h1 = document.getElementById("h1");
  h1.innerHTML = emoji + data.cidade + ', ' + data.estado;
 
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = convertDate(data.clima[1].data);

  getEmoji(1)
  document.getElementById("emoji1").innerHTML = emoji;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = convertDate(data.clima[2].data);

  getEmoji(2)
  document.getElementById("emoji2").innerHTML = emoji;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = convertDate(data.clima[3].data);

  getEmoji(3)
  document.getElementById("emoji3").innerHTML = emoji;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = convertDate(data.clima[4].data);

  getEmoji(4)
  document.getElementById("emoji4").innerHTML = emoji;
 
  let p4 = document.getElementById("p4");
  p4.innerHTML = data.clima[4].condicao_desc;
 
  let m4 = document.getElementById("m4");
  m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max
 
  document.getElementById("days").style.display = "block";

 }


 
async function climaBrasilia() {
 
    
  let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/224/6`);
  let data = await response.json();
  console.log(data);
 
  let emoji;

  function getEmoji(n){
    switch (data.clima[n].condicao_desc) {
      case "Chuvas Isoladas":
        emoji = '☔';
        break;
      case "Parcialmente Nublado":
        emoji = '🌥️';
        break;
      case "Predomínio de Sol":
        emoji = '☀️';
        break;
        case "Chuva":
        emoji = '🌧️';
        break;
        case "Pancadas de Chuva":
          emoji = '⛈️';
          break;
     }
  }
   

  getEmoji(0)
  let h1 = document.getElementById("h1");
  h1.innerHTML = emoji + data.cidade + ', ' + data.estado;
 
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = convertDate(data.clima[1].data);

  getEmoji(1)
  document.getElementById("emoji1").innerHTML = emoji;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = convertDate(data.clima[2].data);

  getEmoji(2)
  document.getElementById("emoji2").innerHTML = emoji;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max;
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = convertDate(data.clima[3].data);

  getEmoji(3)
  document.getElementById("emoji3").innerHTML = emoji;

  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max;
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = convertDate(data.clima[4].data);

  getEmoji(4)
  document.getElementById("emoji4").innerHTML = emoji;
 
  let p4 = document.getElementById("p4");
  p4.innerHTML = data.clima[4].condicao_desc;
 
  let m4 = document.getElementById("m4");
  m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max;


  document.getElementById("days").style.display = "block";
 
 }



 async function climaSalvador() {
 
    
  let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/242/6`);
  let data = await response.json();
  console.log(data);
 
  let emoji;

  function getEmoji(n){
    switch (data.clima[n].condicao_desc) {
      case "Chuvas Isoladas":
        emoji = '☔';
        break;
      case "Parcialmente Nublado":
        emoji = '🌥️';
        break;
      case "Predomínio de Sol":
        emoji = '☀️';
        break;
        case "Chuva":
        emoji = '🌧️';
        break;
        case "Pancadas de Chuva":
          emoji = '⛈️';
          break;
     }
  }
   

  getEmoji(0)
  let h1 = document.getElementById("h1");
  h1.innerHTML = emoji + data.cidade + ', ' + data.estado;
 
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = convertDate(data.clima[1].data);

  getEmoji(1)
  document.getElementById("emoji1").innerHTML = emoji;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = convertDate(data.clima[2].data);

  getEmoji(2)
  document.getElementById("emoji2").innerHTML = emoji;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max;
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = convertDate(data.clima[3].data);

  getEmoji(3)
  document.getElementById("emoji3").innerHTML = emoji;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max;
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = convertDate(data.clima[4].data);
 
  getEmoji(4)
  document.getElementById("emoji4").innerHTML = emoji;

  let p4 = document.getElementById("p4");
  p4.innerHTML = data.clima[4].condicao_desc;
 
  let m4 = document.getElementById("m4");
  m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max;


  document.getElementById("days").style.display = "block";
 
 }





 async function climaBelem() {
 
    
  let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/221/6`);
  let data = await response.json();
  console.log(data);
 
  let emoji;

  function getEmoji(n){
    switch (data.clima[n].condicao_desc) {
      case "Chuvas Isoladas":
        emoji = '☔';
        break;
      case "Parcialmente Nublado":
        emoji = '🌥️';
        break;
      case "Predomínio de Sol":
        emoji = '☀️';
        break;
        case "Chuva":
        emoji = '🌧️';
        break;
        case "Pancadas de Chuva":
          emoji = '⛈️';
          break;
     }
  }
   

  getEmoji(0)
  let h1 = document.getElementById("h1");
  h1.innerHTML = emoji + data.cidade + ', ' + data.estado;
 
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = convertDate(data.clima[1].data);

  getEmoji(1)
  document.getElementById("emoji1").innerHTML = emoji;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max;
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = convertDate(data.clima[2].data);

  getEmoji(2)
  document.getElementById("emoji2").innerHTML = emoji;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max;
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = convertDate(data.clima[3].data);

  getEmoji(3)
  document.getElementById("emoji3").innerHTML = emoji;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max;
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = convertDate(data.clima[4].data);

  getEmoji(4)
  document.getElementById("emoji4").innerHTML = emoji;
 
  let p4 = document.getElementById("p4");
  p4.innerHTML = data.clima[4].condicao_desc;
 
  let m4 = document.getElementById("m4");
  m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max;
 



  document.getElementById("days").style.display = "block";

  
 }




/**
 * Changes XML to JSON
 * Modified version from here: http://davidwalsh.name/convert-xml-json
 * @param {string} xml XML DOM tree
 */
function xmlToJson(xml) {
  // Create the return object
  var obj = {};

  if (xml.nodeType == 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If all text nodes inside, get concatenated text from them.
  var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
    return node.nodeType === 3;
  });
  if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
    obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
      return text + node.nodeValue;
    }, "");
  } else if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}









 async function pesquisaCidade(){
  let inputedCity = document.getElementById("userCity").value;
  inputedCity = removeSymbols(inputedCity);
console.log(inputedCity);


const response0 = await fetch(`http://servicos.cptec.inpe.br/XML/listaCidades?city=${inputedCity}`);
const xmlString = await response0.text();
var XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
let data0 = xmlToJson(XmlNode);

console.log(data0.cidades)


let cidadeNum;

if (Array.isArray(data0.cidades.cidade)){
  cidadeNum = data0.cidades.cidade[0].id;
}else{
  cidadeNum = data0.cidades.cidade.id;

}






  //cidadeNum = data0.cidades.cidade[0].id;
  //cidadeNum = data0.cidades.cidade.id;





let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cidadeNum}/6`);
let data = await response.json();
console.log(data);






let emoji;

  function getEmoji(n){
    switch (data.clima[n].condicao_desc) {
      case "Chuvas Isoladas":
        emoji = '☔';
        break;
      case "Parcialmente Nublado":
        emoji = '🌥️';
        break;
      case "Predomínio de Sol":
        emoji = '☀️';
        break;
        case "Chuva":
        emoji = '🌧️';
        break;
        case "Pancadas de Chuva":
          emoji = '⛈️';
          break;
     }
  }
   

  getEmoji(0)
  let h1 = document.getElementById("h1");
  h1.innerHTML = emoji + data.cidade + ', ' + data.estado;
 
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = convertDate(data.clima[1].data);

  getEmoji(1)
  document.getElementById("emoji1").innerHTML = emoji;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max;
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = convertDate(data.clima[2].data);

  getEmoji(2)
  document.getElementById("emoji2").innerHTML = emoji;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max;
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = convertDate(data.clima[3].data);

  getEmoji(3)
  document.getElementById("emoji3").innerHTML = emoji;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max;
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = convertDate(data.clima[4].data);

  getEmoji(4)
  document.getElementById("emoji4").innerHTML = emoji;
 
  let p4 = document.getElementById("p4");
  p4.innerHTML = data.clima[4].condicao_desc;
 
  let m4 = document.getElementById("m4");
  m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max;
 



  document.getElementById("days").style.display = "block";












 }