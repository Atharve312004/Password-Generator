let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copyicon = document.getElementById("copyicon");

//showing input silder value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;

});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatepassword();
});

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let allnumber = "0123456789";
let allsymbols= "!@#$%^&*_+";

//function to generate password
function generatepassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChar:"";
    allChars += uppercase.checked ? upperChar:"";
    allChars += number.checked ? allnumber:"";
    allChars += Symbols.checked ? allsymbols:"";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while (i<=inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;

}

copyicon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.lenght >=1){
        navigator.clipboard.writeText(passBox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password Copied";
        setTimeout(() => {
            copyicon.innerHTML = "content_copy";
            copyicon.title = "";
        }, 3000);
    }
});