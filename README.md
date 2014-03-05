####ACS Calc REST APIs

######Demo Application:
[Hosted on ACS](https://965a7984b21d445c8567a68f65ddf06fa69a8522.cloudapp.appcelerator.com/)

Please turn on scripts on your browser. Below is a screenshot for Google Chrome.

![enabling scripts on browser](https://raw.github.com/getnpk/ACSTest/master/img/running_scripts.JPG)


######Features:
- Addition
- Subtraction
- Multiplication
- Division


######Usage & Example
- Addition
  https://965a7984b21d445c8567a68f65ddf06fa69a8522.cloudapp.appcelerator.com/add?one=10&two=90
> {
>   "value": 100
> }

- Subtraction
  https://965a7984b21d445c8567a68f65ddf06fa69a8522.cloudapp.appcelerator.com/sub?one=10&two=90
- Multiplication
  https://965a7984b21d445c8567a68f65ddf06fa69a8522.cloudapp.appcelerator.com/mul?one=10&two=90
- Division
  https://965a7984b21d445c8567a68f65ddf06fa69a8522.cloudapp.appcelerator.com/div?one=10&two=90

######Usage if running locally
- Addition
  http:localhost:8080/add?one=10&two=90


######Running the tests for REST APIs using Mocha
- clone the project locally
- Move into project folder

> cd {Project folder}

- Run acs locally

> acs run

- Run mocha from this directory.

> mocha

> ..

> 28 passing (740ms) (if successful)
