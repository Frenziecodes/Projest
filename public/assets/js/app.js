// dropdown content
var dropdown = document.querySelectorAll('.dropdown');
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('mouseover', function() {
      this.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown[i].addEventListener('mouseout', function() {
      this.querySelector('.dropdown-content').style.display = 'none';
    });
  }

  // Registration form validation

  function validateRegistration(){
    var username = document.register.name.value;
    var userEmail = document.register.email.value;
    var userPass = document.register.pass.value;    

    // validating username
    if(username == ''){     
      document.getElementById('nameErr').innerHTML='Username is required!'
      document.getElementById('nameErr').style.color='red';
      return false;
    }else{
      document.getElementById('nameErr').innerHTML='';
    }
    if(username.length<4){      
      document.getElementById('nameErr').innerHTML='username should be at least 4 character';
      document.getElementById('nameErr').style.color='red';
      return false;
    }else{
      document.getElementById('nameErr').innerHTML='';
    }

    // validating email
    at = userEmail.indexOf('@');
    dot = userEmail.lastIndexOf('.');
    if (userEmail == '') {      
      document.getElementById('emailErr').innerHTML='Email is required';
      document.getElementById('emailErr').style.color='red';
      return false
    }else{
      document.getElementById('emailErr').innerHTML='';
    }
    if (at <1 || (dot - at < 2)) {      
      document.getElementById('emailErr').innerHTML='Incorrect Email';
      document.getElementById('emailErr').style.color='red';
      return false;
    }else{
      document.getElementById('emailErr').innerHTML='';
    }

    // validating password
    if(userPass == ''){      
      document.getElementById('passErr').innerHTML='Password is required';
      document.getElementById('passErr').style.color='red';
      return false;
    }else{
      document.getElementById('passErr').innerHTML='';
    }
    if (userPass.length < 6) {      
      document.getElementById('passErr').innerHTML='Password is weak should be at least 6 characters';
      document.getElementById('passErr').style.color='red';
      return false
    }else{
      document.getElementById('passErr').innerHTML='Password is strong!';
      document.getElementById('passErr').style.color='green';
    }

  }
  // end of registration form validation


  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
