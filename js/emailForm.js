function sendEmail(event) {
  event.preventDefault();
  var name = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var message = document.getElementById("form-message").value;


  
async function sendMessage() {
  try {
    const response = await fetch(
      `https://dash.sa-acacia.com/api/sendMessage?name= ${name} &email=${email} &message=${message}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data)
    language === "ar" ? alert(`شكراً لكم، تم إرسال رسالتكم بنجاح`): alert(`Al-Jahbath : Thank you, your message sent successfully`)
        
      document.getElementById("form-name").value="";
      document.getElementById("form-email").value="";
      document.getElementById("form-phone").value="";
      document.getElementById("form-message").value="";

  } catch (error) {
    language === "ar" ? alert(`عذراً، فم بإعادة إرسال الرسالة من فضلك`): alert(`Sorry, resend your message, please!`)
    console.error("There was a problem with the fetch operation:", error);
  }
}

sendMessage()
}
const form = document.getElementById("contact-form")
form.addEventListener("submit",sendEmail)
