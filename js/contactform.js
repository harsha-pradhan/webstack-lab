<script>
function validateForm(){
  var name = document.forms["myForm"]["your-name"].value;
  var email = document.forms["myForm"]["your-email"].value;
  var phone = document.forms["myForm"]["your-phone"].value;
  var message = document.forms["myForm"]["your-message"].value;

  if (name.length<1) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    if (phone.length<1) {
        document.getElementById('error-phone').innerHTML = " Please Enter Your Phone *";      
    }
    if (message.length<1) {
        document.getElementById('error-message').innerHTML = " Please Enter Your Message *";
    }          
    if(name.length<1 || email.length<1 || phone.length<1 || message.length<1){
        return false;
    }            
}
</script>