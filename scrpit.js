const isEmail=(email)=> {
 var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 return regex.test(email);
}

$("#button").click(() =>{
    // Clear previous messages and reset variables
    $("#success").empty();
    let errormessage = "";
    let missing = "";

    if( $("#email").val().trim() == ""){
        missing+="<p>please enter email</p>";
        $("#email").focus();
    }
    if( $("#phone").val().trim() == ""){
        missing+="<p>please enter phone no</p>";
        $("#phone").focus();
    }
    if( $("#password").val().trim() == ""){
        missing+="<p>password is not filled</p>";
        $("#password").focus();
    }

   if($("#email").val().trim() !== "" && isEmail($("#email").val())==false){
    errormessage += "<p>Email id is not valid</p>";
   }
   if($("#phone").val().trim() !== "" && $.isNumeric($("#phone").val()) == false){
    errormessage +="<p>This phone is invalid</p>";
   }
   if($("#password").val().trim() !== "" && $("#re-password").val().trim() !== "" && $("#password").val() != $("#re-password").val()){
     errormessage +="<p>password is not same</p>";
   }
   if(errormessage === "" && missing === ""){
    $("#success").html("congratulation successfully register it");
    $("#success").css("borderColor", "green");
    $("#success").css("color", "green");
   }
   else{
    $("#success").html(errormessage + missing);
    $("#success").css("borderColor", "red");
    $("#success").css("color", "red");
   }
});

  