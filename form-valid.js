 document.getElementById("myBtn").addEventListener('click', validate)

function validate(){
    let valid=true
    if (document.myForm.Name.value=== "") {
        alert("Please fill in your Name!");
        valid=false
    }
    if(document.myForm.Adresse.value== ""){
        alert("please fill in your Adresse!");
        valid=false
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.myForm.email.value)){
        alert("Enter Valid Email Address! in Format : exemple@exemple.com");
        valid=false
    }
    if(document.myForm.password.length<8 ||!/[A-Z]+/.test(document.myForm.password.value) ||!/[A-Z]+/.test(document.myForm.password.value)){
        alert("Verify your password please");
        valid=false
    }
    if(valid){
        alert("Thanks")
    }
}