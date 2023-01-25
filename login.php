<?php
include("functions.php");

$wrongpass = '';
$wronginfo = '<div class="alert alert-danger" role="alert">  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Wrong login detail</div>';

if(isloggedin()==FALSE)
{
}
else
{
header("location:dashboard.php");  
  
}
  
  if(isset($_POST['email']) && ($_POST['pass']))
{

$pass= mysqli_real_escape_string($conn, $_POST['pass']);
$email= mysqli_real_escape_string($conn, $_POST['email']);
$query="SELECT * from users where uemail='$email'";
$result = $conn->query($query);

if ($result->num_rows < 1) 
  {
      $wrongpass = $wronginfo;
  }

 while($row = $result->fetch_assoc()) 
    {
  if(md5($pass)==$row['upass'])
  {
    $_SESSION['logged_in']=TRUE;
    $_SESSION['id']=$row['uid'];
    $_SESSION['unaam']=$row['uname'];
    session_start();
    header("location:dashboard.php");
  }
  else
   {
    $wrongpass = $wronginfo;
   }
    }
  }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sign-in projest</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
     <!-- Font Awesome -->
     <link
     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
     rel="stylesheet"
     />
     <!-- Google Fonts -->
     <link
     href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
     rel="stylesheet"
     />
     <!-- MDB -->
     <link
     href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css"
     rel="stylesheet"
     />
     <script type="text/javascript">
        $(document).ready(function(){
        $("#name").keyup(function() {
        var name = $('#name').val();
        if(name=="")
        {
        $("#disp").html("");
        }
        else
        {
        $.ajax({
        type: "POST",
        url: "check.php",
        data: "name="+ name ,
        success: function(html){
        $("#disp").html(html);
        }
        });
        return false;
        }
        });
        });
     </script>
</head>
<body>
    
    <nav class="fixed w-full h-16 flex flex-wrap items-center justify-between py-3 z-40 bg-blue-500 text-white hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div class="container-fluid">
            <a class="text-xl text-white font-semibold" href="index.php">Kash Track</a>
          </div>          
        </div>
    </nav>
<div class="flex flex-col pt-20 px-10 w-full items-center justify-center ">

    <!-- Pills navs -->
    <ul class="nav nav-pills nav-justified mb-3  " id="ex1" role="tablist">
        <li class="nav-item " role="presentation">
        <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
            aria-controls="pills-login" aria-selected="true">Login</a>
        </li>
        <li class="nav-item" role="presentation">
        <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
            aria-controls="pills-register" aria-selected="false">Register</a>
        </li>
    </ul>
  <!-- Pills navs -->
  
  <!-- Pills content -->
  <div class="tab-content">
    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <?php

      if(isset($_POST['name']) && trim($_POST['password']) != "")
      {

      $name= mysqli_real_escape_string($conn, $_POST['name']);
      $query="SELECT * from user where uemail='$name'";
      $result = $conn->query($query);
      if ($result->num_rows < 1) 
        {
      $uname = mysqli_real_escape_string($conn, $_POST['fname']);
      $uname = strip_tags($uname);
      $uemail = mysqli_real_escape_string($conn, $_POST['name']);
      $uemail = strip_tags($uemail);
      $upass = mysqli_real_escape_string($conn, $_POST['password']);
      $upass = md5($upass);

      $sql = "INSERT INTO users (uname, uemail, upass)
      VALUES ('$uname','$uemail','$upass')";
        if ($conn->query($sql) === TRUE) 
        {
        echo '<div class="alert alert-success" role="alert">
        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
          <div class="flex items-center align-middle justify-center"> 
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p>Your account has been created successfully!</p>
          </div>
      </div>';
        } else 
        {
          echo "Error: " . $sql . "<br>" . $conn->error;
        }
      } else
      {
        echo '<div class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>User already exists!
      </div>';
      }
      }
    ?>
      <form name="login.php" action="login.php" method="post">      
  
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="email" name="email" class="form-control" />
          <label class="form-label" for="loginName">Email</label>
        </div>
  
        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" id="password" name="pass" class="form-control" />
          <label class="form-label" for="loginPassword">Password</label>
        </div>
        <?php
          echo $wrongpass;
        ?>
  
        <!-- 2 column grid layout -->
        <div class="row mb-4">
          <div class="col-md-6 d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check mb-3 mb-md-0">
              <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
              <label class="form-check-label" for="loginCheck"> Remember me </label>
            </div>
          </div>
  
          <div class="col-md-6 d-flex justify-content-center">
            <!-- Simple link -->
            <a href="#">Forgot password?</a>
          </div>
        </div>
  
        <!-- Submit button -->
        <button type="submit" class="btn bg-blue-600 text-white hover:bg-blue-400 btn-block mb-4">Sign in</button>  
        
      </form>
    </div>
    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">

      <form action="login.php" method="post">      
  
        <!-- Name input -->
        <div class="form-outline mb-4">
          <input type="text" id="fname" name="fname" autocomplete="off" class="form-control" />
          <label class="form-label" for="fname">Name</label>
        </div>
  
  
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="name" name="name" autocomplete="off" class="form-control" />          
          <label class="form-label" for="name">Email</label>
          <div id="disp"></div>
        </div>
  
        <!-- Password input -->
        <div class="form-outline mb-4">
          <input type="password" name="password" id="inputPassword3" class="form-control" />
          <label class="form-label" for="inputPassword3">Password</label>
        </div>
  
        <!-- Repeat Password input -->
        <div class="form-outline mb-4">
          <input type="password" id="registerRepeatPassword" class="form-control" />
          <label class="form-label" for="registerRepeatPassword">Repeat password</label>
        </div>
  
        <!-- Checkbox -->
        <div class="form-check d-flex justify-content-center mb-4">
          <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
            aria-describedby="registerCheckHelpText" />
          <label class="form-check-label" for="registerCheck">
            I have read and agree to the terms
          </label>
        </div>
  
        <!-- Submit button -->
        <button type="submit" class="btn bg-blue-600 text-white  hover:bg-blue-400 btn-block mb-3">Sign Up</button>
      </form>
 
    </div>
  </div>
  <!-- Pills content -->


</div>  

      <!-- MDB -->
      <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"
      ></script>
</body>
</html>

