const form=document.getElementById("form")
const btn=document.getElementById("btn");
var buyhouse=["buy with cash","buy with loan",]
btn.addEventListener('click', e =>{
  e.preventDefault();
  
  validate();
  emailvalidate();
  numbervalidate();
  datevalidate();
  passvalidation();
  zipvalidation();
  addressvalidation();
});






function validate(){
    const validfn=/^[a-zA-Z]+ [a-zA-Z]+$/;
    const fn=document.getElementById('fn').value;

    if(fn===""){
      document.getElementById("fnameerror").innerHTML = "*First name cannot be empty";

      return false;
    }
     else if(!validfn.test(fn))
    {
        alert("First name can only contain Alphabets");
      document.getElementById("fnameerror").innerHTML = "*First name can only contain Alphabets";
      document.getElementById("fn").style.backgroundColor="red";
      return false; 
    }
    else{
      document.getElementById("fnameerror").innerHTML="";
      document.getElementById("fn").style.backgroundColor="green";
      return true;
    }
  }

  function emailvalidate(){

    const email=document.getElementById("email").value;
    const valid_email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if(email===""){
        document.getElementById("emailerror").innerHTML = "*Email address cannot be empty";

        return false;
      }
       else if(!valid_email.test(email))
      {
        alert("Uppercase and lowercase letters (A-Z and a-z),\n Numeric characters (0-9), Special characters \n- ! # $ % & ' * + - / = ? ^ _ ` { | } ~ ")
        document.getElementById("emailerror").innerHTML = "*Enter a valid email address conataining @";
        document.getElementById("email").style.backgroundColor="red";
        return false;
      }
      else{
        document.getElementById("emailerror").innerHTML="";
        document.getElementById("email").style.backgroundColor="green";
        return true;
      }
  }
  
  function datevalidate(){
    const mdy = new Date();
    let curr_mdy = mdy.toLocaleDateString();
    var format=/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    const doa=document.getElementById("doa").value;

    if(doa==""){
        document.getElementById("doa_error").innerHTML="*Please enter a date";

        return false;
    }
    else if(!format.test(doa)){
        document.getElementById("doa_error").innerHTML="*Enter in mm/dd/yyy or mm-dd-yyyy format";
        document.getElementById("doa").style.backgroundColor="red";
        return false;
    }
    else if(doa<curr_mdy){
        document.getElementById("doa_error").innerHTML="*Date can't be less than "+curr_mdy;
        document.getElementById("doa").style.backgroundColor="red";
        return false;
    }
    else{
        document.getElementById("doa_error").innerHTML="";
        document.getElementById("doa").style.backgroundColor="green";
        return true;
    }

  }

  function numbervalidate(){
    let number=document.getElementById('number').value;

    //let numformat0=/^(\d{3})?[- ]?(\d{3})-(\d{4})$/;
    let numformat1=/^\(?(\d{3})\)?[- ]?(\d{3})-(\d{4})$/;
    //let numformat2=/^\((\d{3})\)[- ]?(\d{3})-(\d{4})$/;
    
    if(number==""){
        document.getElementById("numerror").innerHTML="*Phone Number can't be empty";

        return false;
    }
    else if(!numformat1.test(number)){
        alert("Phone number can be in 123456-7890 \n 123-456-7890 \n (123)-456-7890")
        document.getElementById("numerror").innerHTML="*Enter a valid phone number";
        document.getElementById("number").style.backgroundColor="red";
        return false;
    }
    else{
        document.getElementById("numerror").innerHTML="";
        document.getElementById("number").style.backgroundColor="green";
        return true;
    }
  }

  function passvalidation(){
    const password=document.getElementById("password").value;

    let validpass=/^[A-Z][A-Za-z0-9!@#$%^&*]{8,}$/;
    if(password===""){

        document.getElementById("passerror").innerHTML="*Password can't be empty";

        return false;
    }
    else if(!validpass.test(password)){
        document.getElementById("password").style.backgroundColor="red";
        alert("valid password with alphanumeric,\nfirst letter capital, special character(@,%,!,%,etc), \nmin length of 8 charcters")
        document.getElementById("passerror").innerHTML="*Enter a valid password";
        return false;
    }
    else{
        document.getElementById("passerror").innerHTML="";
        document.getElementById("password").style.backgroundColor="green";
        return true;
    }
  }

  function zipvalidation(){
    const zipcode=document.getElementById("zipcode").value;
    const ziperror=document.getElementById("ziperror");
    const validzip=/^\d{5}$/;
    if(zipcode.value=="")
    {
        
        document.getElementById("ziperror").innerHTML="Zip code is required";
        return false;
    }
    else if(!validzip.test(zipcode)){
        

        document.getElementById("ziperror").innerHTML="invalid Zip code";
        document.getElementById("zipcode").style.backgroundColor="red";
        return false;
    }
    else
    {
        document.getElementById("ziperror").innerHTML="";  
        document.getElementById("zipcode").style.backgroundColor="green"; 
        return true;
    }
}
  
function addressvalidation(){
    const add1=document.getElementById("add").value;
    const addregex=/^[a-z]?[A-Z]?[0-9]?[,./'-]$/;
    if(add1==""){
        document.getElementById("adderror").innerHTML="Complete the address";
    }
    else if (add1.match(addregex)){
        alert("Please write the complete address as follows Street Name,\n apt#, City, State, Area Code (zip code)")
        document.getElementById("adderror").innerHTML="Complete the address";
    }
    else{
        document.getElementById("adderror").innerHTML="";
        return true;
    }
}