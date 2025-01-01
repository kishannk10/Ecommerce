AOS.init();

var sidenav = document.querySelector(".side-navbar")

function showNavbar() {
    sidenav.style.left = "0%"

}
function closeNavbar()
{
     sidenav.style.left = "-60%"
}
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById('response-message');
    
    if (name && email && message) {
      responseMessage.textContent = "Thank you for your message, " + name + "!";
      responseMessage.classList.remove('hidden');
      this.reset();
    } else {
      responseMessage.textContent = "Please fill out all fields.";
      responseMessage.classList.remove('hidden');
      responseMessage.style.color = "red";
    }
  });
  