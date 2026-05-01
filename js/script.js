const WHATSAPP_PHONE = "447442127757";

function openPopup(){
  document.getElementById("popup").classList.add("show");
}

function closePopup(){
  document.getElementById("popup").classList.remove("show");
}

function setService(service){
  document.getElementById("pservice").value = service;
}

function sendInquiry(){
  const name = document.getElementById('pname')?.value || 'Not provided';
  const phone = document.getElementById('pphone')?.value || 'Not provided';
  const car = document.getElementById('pcar')?.value || 'Not provided';
  const service = document.getElementById('pservice')?.value || 'General Service';
  const msg = document.getElementById('pmsg')?.value || 'Not provided';

  const text = `Hi Rupa Auto Care,

I want to book a mobile mechanic.

Name: ${name}
Phone: ${phone}
Car Make & Model: ${car}
Service: ${service}
Issue/Location: ${msg}

Area: Bolton / Manchester`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=447442127757&text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
  closePopup();
}

function sendContact(event){
  event.preventDefault();

  const name = document.getElementById("cname").value || "Not provided";
  const phone = document.getElementById("cphone").value || "Not provided";
  const vehicle = document.getElementById("cvehicle").value || "Not provided";
  const service = document.getElementById("cservice").value;
  const msg = document.getElementById("cmsg").value || "Not provided";

  const text = `Hi Rupa Auto Care,%0A%0AI want to book a mobile mechanic.%0A%0AName: ${name}%0APhone: ${phone}%0AVehicle: ${vehicle}%0AService: ${service}%0AIssue/Location: ${msg}%0A%0AArea: Bolton / Manchester`;
  window.location.href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`;
}

document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    closePopup();
  }
});

setTimeout(function(){
  document.body.classList.add("loaded");
}, 1200);
