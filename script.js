
async function pingas(){
  for(let step = 200; step < 250; step++){

    let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${step}`);
    let data = await response.json()
   console.log(step);
    console.log(data);
  }
}

    

//pingas()





async function climaFortal() {
 
    
 let response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/229/6`);
 let data = await response.json();
 console.log(data);

 let h1 = document.getElementById("h1");
 h1.innerHTML = '☀️ ' + data.cidade + ', ' + data.estado;

 let city = document.getElementById("city");
 city.innerHTML = data.clima[0].condicao_desc;
 

 let minmax = document.getElementById("min-max");
 minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max

 let data1 = document.getElementById("data1");
 data1.innerHTML = data.clima[1].data;

 let p1 = document.getElementById("p1");
 p1.innerHTML = data.clima[1].condicao_desc;

 let m1 = document.getElementById("m1");
 m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max

//

 let data2 = document.getElementById("data2");
 data2.innerHTML = data.clima[2].data;

 let p2 = document.getElementById("p2");
 p2.innerHTML = data.clima[2].condicao_desc;

 let m2 = document.getElementById("m2");
 m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max

//

 let data3 = document.getElementById("data3");
 data3.innerHTML = data.clima[3].data;

 let p3 = document.getElementById("p3");
 p3.innerHTML = data.clima[3].condicao_desc;

 let m3 = document.getElementById("m3");
 m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max

 //

 
 let data4 = document.getElementById("data4");
 data4.innerHTML = data.clima[4].data;

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
 
  let h1 = document.getElementById("h1");
  h1.innerHTML = '☀️ ' + data.cidade + ', ' + data.estado;
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = data.clima[1].data;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = data.clima[2].data;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = data.clima[3].data;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = data.clima[4].data;
 
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
 
  let h1 = document.getElementById("h1");
  h1.innerHTML = '☀️ ' + data.cidade + ', ' + data.estado;
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = data.clima[1].data;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = data.clima[2].data;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = data.clima[3].data;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = data.clima[4].data;
 
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
 
  let h1 = document.getElementById("h1");
  h1.innerHTML = '☀️ ' + data.cidade + ', ' + data.estado;
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = data.clima[1].data;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = data.clima[2].data;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max;
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = data.clima[3].data;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max;
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = data.clima[4].data;
 
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
 
  let h1 = document.getElementById("h1");
  h1.innerHTML = '☀️ ' + data.cidade + ', ' + data.estado;
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = data.clima[1].data;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = data.clima[2].data;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max;
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = data.clima[3].data;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max;
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = data.clima[4].data;
 
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
 
  let h1 = document.getElementById("h1");
  h1.innerHTML = '☀️ ' + data.cidade + ', ' + data.estado;
 
  let city = document.getElementById("city");
  city.innerHTML = data.clima[0].condicao_desc;
  
 
  let minmax = document.getElementById("min-max");
  minmax.innerHTML = 'Mínima de '+ data.clima[0].min +', Máxima de ' +data.clima[0].max
 
  let data1 = document.getElementById("data1");
  data1.innerHTML = data.clima[1].data;
 
  let p1 = document.getElementById("p1");
  p1.innerHTML = data.clima[1].condicao_desc;
 
  let m1 = document.getElementById("m1");
  m1.innerHTML = 'Mínima de '+ data.clima[1].min +', Máxima de ' +data.clima[1].max;
 
 //
 
  let data2 = document.getElementById("data2");
  data2.innerHTML = data.clima[2].data;
 
  let p2 = document.getElementById("p2");
  p2.innerHTML = data.clima[2].condicao_desc;
 
  let m2 = document.getElementById("m2");
  m2.innerHTML = 'Mínima de '+ data.clima[2].min +', Máxima de ' +data.clima[2].max;
 
 //
 
  let data3 = document.getElementById("data3");
  data3.innerHTML = data.clima[3].data;
 
  let p3 = document.getElementById("p3");
  p3.innerHTML = data.clima[3].condicao_desc;
 
  let m3 = document.getElementById("m3");
  m3.innerHTML = 'Mínima de '+ data.clima[3].min +', Máxima de ' +data.clima[3].max;
 
  //
 
  
  let data4 = document.getElementById("data4");
  data4.innerHTML = data.clima[4].data;
 
  let p4 = document.getElementById("p4");
  p4.innerHTML = data.clima[4].condicao_desc;
 
  let m4 = document.getElementById("m4");
  m4.innerHTML = 'Mínima de '+ data.clima[4].min +', Máxima de ' +data.clima[4].max;
 



  document.getElementById("days").style.display = "block";

  
 }