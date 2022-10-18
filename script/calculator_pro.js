let aux_number = '',
    result ,
    display = document.getElementById("display")
/* 
if(aux_number==='')display.innerHTML = "Input Number" */

function clear_var(){
    aux_number=''
    result = undefined
    display.innerHTML = "Input Number"
    console.log(`clear all${aux_number}`)
    return
}

function substr(){
    
    if(result == aux_number){
        aux_number=''
    } 

    aux_number = aux_number.substr(0, aux_number.length - 1)
    display.innerHTML =  aux_number
    console.log(aux_number)
    if(aux_number==='')display.innerHTML = "Input Number"
    
    return
}

function get_number(rx){   

    let end_str = aux_number.charAt(aux_number.length-1)

    if(rx==='+' || rx==='-' || rx==='/' || rx==='*' || rx==='.'){
    }else if(result == aux_number){
        aux_number=''
        console.log(`clear`)
    } 

    switch (end_str) {
        case '+':
            if(rx==='+' || rx==='-' || rx==='/' || rx==='*' || rx==='.'){
                alert('Invalid Format')
                return get_number
            }
        case '-':
            if(rx==='+' || rx==='-' || rx==='/' || rx==='*' || rx==='.'){
                alert('Invalid Format')
                return get_number
            }
        case '/':
            if(rx==='+' || rx==='-' || rx==='/' || rx==='*' || rx==='.'){
                alert('Invalid Format')
                return get_number
            }
        case '*':
            if(rx==='+' || rx==='-' || rx==='/' || rx==='*' || rx==='.'){
                alert('Invalid Format')
                return get_number
            }
        case '.':
    }

    aux_number = `${aux_number}${rx}`
    display.innerHTML =  aux_number
    console.log( aux_number ) 
}

function print_result(){

    let end_str = aux_number.charAt(aux_number.length-1)

    switch (end_str) {
        case '+':
            alert('Invalid Format')
            return get_number
        case '-':
            alert('Invalid Format')
            return get_number
        case '/':
            alert('Invalid Format')
            return get_number
        case '*':
            alert('Invalid Format')
            return get_number
        case '.':
            alert('Invalid Format')
            return get_number
    }

    result = eval(aux_number)
    aux_number = '' + result

    if(result === Infinity){
        aux_number=''
        result = undefined
        display.innerHTML = 'Math Error'
        return print_result
    }else if(result === undefined){   
        return print_result
    }else display.innerHTML = result 

    display.innerHTML = result
    console.log (aux_number + '=' + result)
}