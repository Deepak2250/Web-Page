const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>{
    faq.addEventListener("click" , () =>{
        faq.classList.toggle("active");
    });
});

let LoginButton = document.getElementById("mainloginbutton")
function showparentContainer(){
document.querySelector(".parentContainer").classList.add("showparentContainer")
document.body.style.overflow = "hidden"
}

function showLogincontainer(){
    document.querySelector(".Logincontainer").classList.add("showLoginContainer")
}

LoginButton.addEventListener("click" , ()=>{
    showparentContainer()
    showLogincontainer()
})