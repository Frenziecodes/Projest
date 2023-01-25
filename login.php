<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get started</title>
    
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
</head>
<body>
    <!-- navbar -->
    <div class="flex justify-between items-center align-middle h-16 w-full bg-violet-500 text-white py-2 px-3 fixed top-0 left-0 right-0 z-30 mb-16">
        <div class="flex justify-center items-center">
           PROJEST
        </div>
        <ul class="flex justify-center items-center">
            <li class="m-2 md:m-5 bg-indigo-900 px-4 py-1 rounded-sm"><a href="#">Home</a></li>
            <li class="dropdown m-2 md:m-5">
                <a href="#">Projects</a>
                <!-- <ul class="dropdown-content p-3 bg-violet-500 absolute">
                  <li class="m-2"><a href="#">View Project</a></li>
                  <li class="m-2"><a href="#">Add Project</a></li>                  
                </ul> -->
              </li>         
            <li class="m-2 md:m-5"><a href="#">Contributing</a></li>
        </ul>        
        
    </div>
    
    <section class="flex flex-col pt-20 px-10 w-full items-center justify-center">
        <!-- Pills navs -->
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
            <a
            class="nav-link active"
            id="tab-login"
            data-mdb-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
            >Login</a
            >
        </li>
        <li class="nav-item" role="presentation">
            <a
            class="nav-link"
            id="tab-register"
            data-mdb-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
            >Register</a
            >
        </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div class="tab-content">
        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
            <div class="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-github"></i>
                </button>
            </div>

            <p class="text-center">or:</p>

            <!-- Email input -->
            <div class="form-outline mb-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">Email or username</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
                <input type="password" id="loginPassword" class="form-control" />
                <label class="form-label" for="loginPassword">Password</label>
            </div>

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
                <a href="#!">Forgot password?</a>
                </div>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary bg-blue-600 btn-block mb-4">Sign in</button>

            <!-- Register buttons -->
            <div class="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
            </form>
        </div>
        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
            <div class="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-github"></i>
                </button>
            </div>

            <p class="text-center">or:</p>

            <!-- Name input -->
            <div class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" />
                <label class="form-label" for="registerName">Name</label>
            </div>

            <!-- Username input -->
            <div class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label class="form-label" for="registerUsername">Username</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" />
                <label class="form-label" for="registerEmail">Email</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
                <input type="password" id="registerPassword" class="form-control" />
                <label class="form-label" for="registerPassword">Password</label>
            </div>

            <!-- Repeat Password input -->
            <div class="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4">
                <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
                />
                <label class="form-check-label" for="registerCheck">
                I have read and agree to the terms
                </label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary bg-blue-600 btn-block mb-3">Sign in</button>
            </form>
        </div>
        </div>
        <!-- Pills content -->
    </section>
  


    <!-- MDB -->
    <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"
    ></script>
    <script src="assets/js/app.js"></script>
</body>
</html>