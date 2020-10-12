const thankYouMessage = []

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
    thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouMessage
}

writeCards(names, event)

function countDown(number){
  
}