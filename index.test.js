function searchParamsToObject (string){
    let newString = string.split("&");
    let object = {name:newString[0].split("=").pop(),email:newString[1].split("=").pop()}
    return object;
}

function isObjectEqual(actual,expected){
    if(actual.name == expected.name && actual.email == expected.email){
        console.info(`pass: expected name: ${expected.name} email: ${expected.email} and received name: ${actual.name} and email: ${actual.email}`)
    } else{
        console.error(`Fail : expected name: ${expected.name} email: ${expected.email} and received name: ${actual.name} and email: ${actual.email}`)
    }
}

let expected = { name: "oliver", email: "hello@oliverjam.es" };

isObjectEqual(searchParamsToObject("name=oliver&email=hello@oliverjam.es"), expected);



function isLeapYear(num){
    if(num < 0){
        console.error ("negative number was presented")
    } else if(typeof num == "string"){
        console.error ("string was presented")
    } else{
    if(num % 4 == 0){
        if(num % 100 !== 0){
            console.log("leap year")
        } else if(num % 100 == 0 && num % 400 == 0){
            console.log("leap year")
        }
    }
}
}

isLeapYear(2000)
