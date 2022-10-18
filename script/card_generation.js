let Card_DataBase = []

function empty_fields(recived){

    let counter = 0

    if(recived.name === ""){
        counter++
        document.getElementById("name").style.borderColor="#FF0000"
    }else document.getElementById("name").style.borderColor="#ffffff"

    if(recived.lastname === ""){
        counter++
        document.getElementById("lastname").style.borderColor="#FF0000"
    }else document.getElementById("lastname").style.borderColor="#ffffff"

    if(recived.age === ""){
        counter++
        document.getElementById("age").style.borderColor="#FF0000"
    }else document.getElementById("age").style.borderColor="#ffffff"

    if(recived.position === ""){
        counter++
        document.getElementById("position").style.borderColor="#FF0000"
    }else document.getElementById("position").style.borderColor="#ffffff"

    if(recived.rh === ""){
        counter++
        document.getElementById("rh").style.borderColor="#FF0000"
    }else document.getElementById("rh").style.borderColor="#ffffff"
    
    if(recived.identification_number === ""){
        counter++
        document.getElementById("identification_number").style.borderColor="#FF0000"
    }else document.getElementById("identification_number").style.borderColor="#ffffff"
    
    if(recived.phone_number === ""){
        counter++
        document.getElementById("phone_number").style.borderColor="#FF0000"
    }else document.getElementById("phone_number").style.borderColor="#ffffff"

    if(counter!=0){
        alert('Complete in all the Fields')
        return empty_fields
    }

}

function generate() { 

    let user = {
        name     : document.getElementById("name").value,
        lastname : document.getElementById("lastname").value,
        age      : document.getElementById("age").value,
        position : document.getElementById("position").value,
        phone_number : document.getElementById("phone_number").value,
        rh           : document.getElementById("rh").value,
        identification_number : document.getElementById("identification_number").value
    } 

    /* empty_fields(user) */

    let counter = 0

    if(user.name === ""){
        counter++
        document.getElementById("name").style.borderColor="#FF0000"
    }else document.getElementById("name").style.borderColor="#ffffff"

    if(user.lastname === ""){
        counter++
        document.getElementById("lastname").style.borderColor="#FF0000"
    }else document.getElementById("lastname").style.borderColor="#ffffff"

    if(user.age === ""){
        counter++
        document.getElementById("age").style.borderColor="#FF0000"
    }else document.getElementById("age").style.borderColor="#ffffff"

    if(user.position === ""){
        counter++
        document.getElementById("position").style.borderColor="#FF0000"
    }else document.getElementById("position").style.borderColor="#ffffff"

    if(user.rh === ""){
        counter++
        document.getElementById("rh").style.borderColor="#FF0000"
    }else document.getElementById("rh").style.borderColor="#ffffff"
    
    if(user.identification_number === ""){
        counter++
        document.getElementById("identification_number").style.borderColor="#FF0000"
    }else document.getElementById("identification_number").style.borderColor="#ffffff"
    
    if(user.phone_number === ""){
        counter++
        document.getElementById("phone_number").style.borderColor="#FF0000"
    }else document.getElementById("phone_number").style.borderColor="#ffffff"

    if(counter!=0){
        alert('Complete in all the Fields')
        return empty_fields
    }

    for(let local_database of Card_DataBase ){
            if(user.identification_number === local_database.identification_number){
                return[ 
                    console.log("existing identification number"),
                    alert("existing identification number")
                ]
            }
    } 
    
    console.log(`uploaded to Card_DataBase`)
    Card_DataBase.push(user)
    
}

function new_card () {

    console.log(`Card_DataBase`)
    console.log(Card_DataBase)
    console.log(``)
}

