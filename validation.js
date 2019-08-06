function valid(){
    console.log("ab3ath")
    let adress=document.getElementById("adress").value;
    let name=document.getElementById("name").value;
    let pass=document.getElementById("pass").value;
    let msg=document.getElementById("msg").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (adress===""){
        alert("please enter an email-adress"); 
    }

    if (re.test(adress)==false) {

    alert("email invalid")
}
    if (name===""){
        alert("please enter a valid name");
    }
    if (pass===""){
    }
    if (re.test(pass)==false) {
    }
        alert("please enter a valid password");
        
    if (msg===""){
        alert("please enter a valid Comment"); 
    }
}
function reset(){
    console.log("3awed")
   document.getElementById('adress').value = '';
   document.getElementById('name').value = '';
   document.getElementById('pass').value = '';
   document.getElementById('msg').value = '';


}

