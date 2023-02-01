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



// Get the form element
const form = document.querySelector("#project-form");

// Get the tag list container
const tagList = document.querySelector("#tag-list");

// Get the tag input field
const tagInput = document.querySelector("#project-tags");

// Array to store selected tags
let selectedTags = [];

// Function to handle tag selection
const handleTagClick = (event) => {
  // Get the clicked tag element
  const tag = event.target;

  // If the tag is already selected, remove it from the selectedTags array
  if (selectedTags.includes(tag.textContent)) {
    selectedTags = selectedTags.filter((selectedTag) => selectedTag !== tag.textContent);
  } else {
    // Otherwise, add the tag to the selectedTags array
    selectedTags.push(tag.textContent);
  }

  // Update the tag input field with the selected tags
  tagInput.value = selectedTags.join(", ");
};

// Add click event listener to each tag element
tagList.addEventListener("click", handleTagClick);

const firebase = require("firebase/app");
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDSKCtNzXr2QF4M76gTExS8ZUBoedvKwBA",
  authDomain: "projest-3kf.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/projest-3kf/database/projest-3kf-default-rtdb/data/~2F",
  projectId: "projest-3kf",
  storageBucket: "projest-3kf.appspot.com",
  messagingSenderId: "288268902129",
  appId: "1:288268902129:web:a4d6e00506d95427a69350",
  measurementId: "G-X074W4XF2X"
});
firebase.initializeApp(firebaseConfig);

// Reference to the projects database
var projectsRef = firebase.database().ref("projects");

// Get the form element
var projectForm = document.getElementById("project-form");

// const functions = require('firebase-functions');
// const firebase = require('firebase-admin');
// firebase.initializeApp();

const db = firebase.firestore();

// Add submit event listener to the form
projectForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the form data
  var projectTitle = document.getElementById("project-title").value;
  var projectDescription = document.getElementById("project-description").value;
  var githubUser = document.getElementById("user-github-link").value;
  var githubProject = document.getElementById("project-github-link").value;
  var projectTags = document.getElementById("project-tags").value;

  // Create a new project object
  var project = {
    title: projectTitle,
    description: projectDescription,
    github_user: githubUser,
    github_project: githubProject,
    tags: projectTags.split(',')
  };

  // Add the project to the database
  projectsRef.push(project);

  // Clear the form fields
  projectForm.reset();
});

