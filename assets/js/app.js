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
    var userPass2 = document.register.pass2.value;

    // validating username
    if(username == ''){     
      document.getElementById('nameErr').innerHTML='Username is required!'
      return false;
    }
    if(username.length<4){      
      document.getElementById('nameErr').innerHTML='username should be at least 4 character'
    }

    // validating email
    at = userEmail.indexOf('@');
    dot = userEmail.lastIndexOf('.');
    if (userEmail == '') {      
      document.getElementById('emailErr').innerHTML='Email is required'
    }
    if (at <1 || (dot - at < 2)) {      
      document.getElementById('emailErr').innerHTML='Incorrect Email'
    }

    // validating password
    if(userPass == ''){      
      document.getElementById('passErr').innerHTML='Password is required'
    }
    if (userPass.length < 6) {      
      document.getElementById('emailErr').innerHTML='Password should be at least 6 characters'
    }

    // validating repeat password
    if (userPass2 != userPass) {
      alert('Passwords do not match')
    }

  }
  // end of registration form validation

