"use strict";
const formData = {email: "", message: "",}

const form = document.querySelector(".feedback-form");
form.addEventListener("input", handleSaveValue);
function handleSaveValue(event){
   if(event.target.name === "email") {  
    formData.email = `${(event.target.value).trim()}`;
   } else if (event.target.name === "message") {
    formData.message = `${(event.target.value).trim()}`;
   }
localStorage.setItem("feedback-form-state", JSON.stringify(formData));    
}

const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
function valuesGoBackAfterReloadThePage(){
    const valuesByLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
if(valuesByLocalStorage) {
    textarea.value = valuesByLocalStorage.message;
    input.value = valuesByLocalStorage.email;
}
}
valuesGoBackAfterReloadThePage();

form.addEventListener("submit", handleEmailMessageAnd);
function handleEmailMessageAnd(event){
    if(formData.email === "" ||  formData.message === ""){
       return alert("Fill please all fields");
    }
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}