document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var customer_email ={};
        onload = fetch("./data.csv").then(res=>{
            return res.text()
            }).then(data=> {
            let customer = data.split(/[\n,\r]/).filter((e)=>e.length>1);
            let len = customer.length
            for(let i=1;i<len/2;i++){
                let data_email = customer[i*2];
                let data_pass = customer[i*2+1];
                customer_email[data_pass]= data_email;
            }
            })

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value; 
        console.log(customer_email["admin"])
        console.log(email)
        console.log(password)




        // You can add your login validation logic here
        if (email === "admin@gmail.com"  && password === "admin") {
            errorMessage.textContent = "";
            window.location.href="/dashboard.html"
            // Redirect to the user's dashboard or perform login logic
        } else {
            errorMessage.textContent = "Invalid email or password";
        }
    });
});