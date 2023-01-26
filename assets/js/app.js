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
      alert("Username is Required")
      return false;
    }
    if(username.length<4){
      alert('username should be at least 4 character')
    }

    // validating email
    at = userEmail.indexOf('@');
    dot = userEmail.lastIndexOf('.');
    if (userEmail == '') {
      alert('Email is required')
    }
    if (at <1 || (dot - at < 2)) {
      alert('Incorrect Email')
    }

    // validating password
    if(userPass == ''){
      alert('Password is required')
    }
    if (userPass.length < 6) {
      alert('Password should be at least 6 characters')
    }

    // validating repeat password
    if (userPass2 != userPass) {
      alert('Passwords do not match')
    }

  }
  // end of registration form validation

