console.log("client side JavaScript File is Loaded! ");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message= document.querySelector('#message1')
const message2= document.querySelector('#message2')
const message3= document.querySelector('#message3')
const message4=document.querySelector('#message4')


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  message.textContent='Loading...'

  fetch("/weather?address="+location).then((Response) => {
    Response.json().then((data) => {
      if (data.error) {
        message.textContent=data.error
        message2.textContent=''
        message3.textContent=''
        message4.textContent=''
      } else {
       
        message.textContent= 'Location:'+data.location
        message2.textContent='Country: '+data.country 
        message3.textContent='Forecast: '+data.forecast
        message4.textContent='Humidity: '+data.humidity 
    }
    });
  });
});
