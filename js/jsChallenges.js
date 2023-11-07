function challenge1(){
    if(document.getElementById ("subscribe").checked==true) {
    console.log('this works');
document.querySelector("#emailDiv").style.display="block"
} else {
    document.querySelector("#emailDiv").style.display="none"
}}

function challenge2(element) {
    let billingAddresss = document.querySelector("#bill")
    let homeAddress = document.querySelector("#home")
    // console.log("home value is" + homeAddress.value)
    // console.log("bill value is" + billingAddresss.value)
    if (element.checked){
        homeAddress.value=billingAddresss.value
        homeAddress.disabled=true
    }
 else {
    homeAddress.value = ""
    homeAddress.disabled=false
}}

function challenge3() {
    if(document.getElementById("freshman", "soph", "jr", "sr", "other").checked==true) {
        
    }
}