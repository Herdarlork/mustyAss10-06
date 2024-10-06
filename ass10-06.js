//1.
let email = prompt("please input your email address").trim()
let emailConfirm = email.endsWith("@gmail.com") || email.endsWith("@yahoo.com") || email.endsWith("@ymail.com")
if(emailConfirm){
    console.log("Email is valid")
}else{
    console.log("Invalid email address")
}


//2.
let pass = prompt("please input your password").trim()
let lowerCase = pass.charAt(0).toLowerCase() === pass.charAt(0)
let upperCase = pass.charAt(pass.length - 1).toUpperCase() === pass.charAt(pass.length - 1)
let password = lowerCase && upperCase && pass.includes(0)
if(password){
    console.log("Strong password")
}else{
    console.log("Weak password")
}


//3.
let url = prompt ("please insert your url")
let confirmUrl = url.startsWith("http://") || url.startsWith("https://")
if(confirmUrl){
    console.log("you are welcome")
}else{
    console.log("Invalid url")
}


//4.
let pandWord = prompt("please insert your word").trim()
let pandiWord = pandWord.toLowerCase()
let reversedWord = pandiWord.split('').reverse().join('')
let result = pandiWord === reversedWord
if(result){
    console.log("it is a palindrome word")
}else{
    console.log("it is not a palindrome word")
}


//5.
let userName = prompt("please insert your username")
if(5 <= userName.length && 15 >= userName.length){
    console.log("please input your password")
}else{
    console.log("kindly revisit the input")
}


//6.
let firstName = prompt ("please input your firstname").trim().toLowerCase()
let derivedName = firstName.charAt(0).toUpperCase().concat(firstName.slice(1))
console.log(derivedName)


//7.
let fileType = prompt("please input your file").trim()
if(fileType.endsWith(".jpg")){
    console.log("It is a JPG file")
}else if(fileType.endsWith(".jpeg")){
    console.log("It is a JPEG file")
}else if(fileType.endsWith(".mp3")){
    console.log("It is a mp3 file")
}else if(fileType.endsWith(".mp4")){
    console.log("It is a mp4 file")
}else if(fileType.endsWith(".svg")){
    console.log("It is a svg file")
}else if(fileType.endsWith(".png")){
    console.log("It is a PNG file")
}else{
    console.log("Unsupported file type")
}


// //8.
// let phoneNumber = prompt ("please input phone number").trim()
// let phoneNum = phoneNumber.length === 11 && phoneNumber.charAt(0) === 0
// if(phoneNum){
//     console.log("proceed")
// }else{
//     console.log("Invalid phone number")
// }
// // console.log(phoneNum)


//9.
let word = prompt ("please insert your word")
let replaceWord = word.replaceAll("bad", "nul").replaceAll("spam", "wrong")
console.log(replaceWord)


//10.
let score = prompt ("input your scores")
 if(75 <= score && score <= 100) {
    console.log("A")
  }else if(60 <= score && score < 75) {
    console.log("B")
  }else if(50 <= score && score < 60) {
    console.log("C")
  }else if(score < 50) {
    console.log("Retake exam")
  }else{
    console.log("Invalid score")
 }
