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
      return false;
    }else{
      document.getElementById('nameErr').innerHTML='';
    }
    if(username.length<4){      
      document.getElementById('nameErr').innerHTML='username should be at least 4 character';
      return false;
    }else{
      document.getElementById('nameErr').innerHTML='';
    }

    // validating email
    at = userEmail.indexOf('@');
    dot = userEmail.lastIndexOf('.');
    if (userEmail == '') {      
      document.getElementById('emailErr').innerHTML='Email is required';
      return false
    }else{
      document.getElementById('emailErr').innerHTML='';
    }
    if (at <1 || (dot - at < 2)) {      
      document.getElementById('emailErr').innerHTML='Incorrect Email';
      return false;
    }else{
      document.getElementById('emailErr').innerHTML='';
    }

    // validating password
    if(userPass == ''){      
      document.getElementById('passErr').innerHTML='Password is required';
      return false;
    }else{
      document.getElementById('passErr').innerHTML='';
    }
    if (userPass.length < 6) {      
      document.getElementById('passErr').innerHTML='Password should be at least 6 characters';
      return false
    }else{
      document.getElementById('passErr').innerHTML='';
    }

  }
  // end of registration form validation

