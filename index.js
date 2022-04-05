// Code your solutions in this file
function writeCards(nameArray, event){
    let messageArray = []
    for(let i=0; i < nameArray.length; i++){
        let message = `Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`
        messageArray.push(message);
    }
    return messageArray;
};

function countDown(value){
    let integer = value;
    while(integer >=0){
        console.log(integer--);
    }
}
