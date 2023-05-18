// doi tuong
function Validator(options){

   var formElement =document.querySelector(options.form);
   console.log(options.rules);
   if(formElement){


   }

}
// dinh nghia
Validator.isRequired = function(selector){
   return selector;
}
Validator.isEmail = function(selector){
    return selector;
}