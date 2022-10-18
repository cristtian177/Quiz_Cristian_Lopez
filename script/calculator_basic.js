let number_1 = '',
    aux_number = '',
    str = '',
    operation= '',
    result = '' ,
    display = document.getElementById("display")

function clear_var(){
    aux_number=''
    number_1=''
    operation= ''
    str = ''
    result = ''
    display.innerHTML = "Input Number";
    console.log(`clear all ${number_1}|${operation}|${aux_number}=${result}` ) ;
    return
}

function get_number(rx){

    if( result  != '' ){
        aux_number = ''
        result = ''
        console.log(`entra` ) ;
        console.log( `${number_1}jjj|${operation}|jjj${aux_number}jjj=${result}` ) ;
    }
    
    aux_number = `${aux_number}${rx}`;
    str = `${number_1}  ${operation}  ${aux_number}`
    display.innerHTML =  str;
    console.log( `${number_1}|${operation}|${aux_number}=${result}` ) ;
}

function get_operation(rx){

    if( number_1 === '' && aux_number ===''){
        console.log('Invalid Format Used')
        alert('Invalid Format Used')
        return print_result
    }

    operation = rx

    if( number_1 === ''){
        number_1 = aux_number
        aux_number = ''
    }  
    
    str = `${number_1}  ${operation}  ${aux_number}`
    display.innerHTML =  str;
}

function print_result(){

    if( aux_number ===''){
        console.log('Invalid Format Used')
        alert('Invalid Format Used')
        return print_result
    }
   
    switch (operation) {
        case '+':
            result = parseFloat(number_1) + parseFloat(aux_number)
            console.log(result)
            break
        case '-':
            result = parseFloat(number_1) - parseFloat(aux_number)
            console.log(result)
            break
        case '*':
            result = parseFloat(number_1) * parseFloat(aux_number)
            console.log(result)
            break
        case '/':
            result = parseFloat(number_1) / parseFloat(aux_number)
            console.log(result)
            break
        case '':
            return print_result
    }
    
    display.innerHTML = result ;

    aux_number = '' + result
    number_1=''
    operation= ''

    return print_result
}