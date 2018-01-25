var result = null; 
var num2 = null; 
var num1 = null; 
var operator = undefined; 

$(".number").click(function(){
    if(result != null){
        clearAll();        
    }
    if(num1 == null){
        num1 = $(this).val();
        $('input').val(num1).change();
    }
    else{
        num1 += $(this).val();
        $('input').val(num1).change();
    }        
})

$(".operator").click(function(){ 
    if(operator == undefined){
        num2 = Number(num1);    
        operator = $(this).val();
        num1 = null; 
    } 
    else{
        operateNums();
        $('input').val(result).change();
        num1 = null;
        num2 = result;
        result = null;
        operator = $(this).val();
    }          
    }       
)

$("#equalsButton").click(function(){
    if(((num2 == null) && (result == null)) || ((num1 == null) && (result == null))) {

    }
    else if((num1 != null) && (num2 != null) && (result != null)){
        num2 = result;
        operateNums();
        $('input').val(result).change();
    }
    else{
        operateNums();
        $('input').val(result).change();
    }  
})

$("#clearButton").click(function(){
    clearAll();
    $('input').val(result).change();
}) 

function operateNums(){
    if(operator == "+"){
        result = num2 + Number(num1);       
    }
    else if(operator == "-"){
        result = num2 - Number(num1);
    }
    else if(operator == "*"){
        result = num2 * Number(num1);
    }
    else if(operator == "/"){
        result = num2 / Number(num1);
    }
}

function clearAll(){
    num1 = null;
    num2 = null;
    result = null;
    operator = undefined;
}     
