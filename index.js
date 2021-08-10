console.log("Welcome to Shatabdi Travels");
const userName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
let address =document.getElementById("address");
let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1")

// Done to remove gap in top of title. When form will be submitted either will be shown
// $("#success").hide()
// $("#failure").hide()

let flag1 = false, flag2=false, flag3=false;

userName.addEventListener("blur", ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9 a-z A-Z]){2,10}$/i;
    let str = userName.value;
    console.log(str, regex) 
    if(regex.test(str)){
        console.log("Your name is valid");
        userName.classList.remove("is-invalid");
        flag1 = true;
    }
    else {
        console.log("Your name is not valid")
        userName.classList.add("is-invalid");
        flag1 = false;
    }



})

email.addEventListener("blur", ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(str, regex) 
    if(regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove("is-invalid");
        flag2 = true;
    }
    else {
        console.log("Your email is not valid")
        email.classList.add("is-invalid");
        flag2 = false;
    }

})

phone.addEventListener("blur", ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    console.log(str, regex) 
    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove("is-invalid");
        flag3 = true;
    }
    else {
        console.log("Your phone is not valid")
        phone.classList.add("is-invalid");
        flag3 = false;
    }

})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e)=>{
        e.preventDefault();
        if(flag1 && flag2  && flag3 ){
            let failure = document.getElementById("failure");
            failure.classList.remove("show");
            // $("#failure").hide()
            let success = document.getElementById("success");
            // $("#success").show()
            success.classList.add("show");
            
            userName.value="";
            phone.value="";
            email.value="";
            address.value="";
            exampleFormControlTextarea1.value="";
            setTimeout(()=>{
                success.classList.remove("show");
            }, 10000)

        }
        else {
            let success = document.getElementById("success");
            success.classList.remove("show");

            let failure = document.getElementById("failure");
            failure.classList.add("show");
            setTimeout(()=>{
                failure.classList.remove("show");
            }, 8000)
            
            
        }
        

})