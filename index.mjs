//  conectam modulul pentru operare cu sistemul de fisiere
// const fs = require("fs")
import { readFile } from 'node:fs'
import printf from 'printf'

// doua variabile "imutabile" / constante de tip Array pentru a stoca datele
const phones = []
const emails = []


function loadContactsList(fileName){
  console.clear()
  readFile(fileName, parseContactsList)
}

function parseContactsList(err, content){
  if (!err) {
    // console.log(content.toString())
    let fragments = content.toString().split('\r\n')
    
    for (let i=0; i<fragments.length; i++) {
      let item = fragments[i].split(' ')
      
      phones.push(item[0])
      emails.push(item[1])
    }

    printContactsPhoneList(phones)
    console.log('\r\n')
    printContactsEmailList(emails)
  }
}

function printContactsPhoneList() {
  // console.log(phones.join('\r\n'))

  for (let i=0; i<phones.length; i++) {
    let phoneList = phones[i]
    let prefix = phoneList.slice(1, 4)
    let otherNumbers = phoneList.slice(5)

    // console.log(`${i+1})`, phoneList)
    let output = printf(`${i+1}) +(%3d)/%5d`, prefix, otherNumbers)
    console.log(output)
  }
  
}

function printContactsEmailList() {
  // console.log(emails.join('\r\n'))
  for (let i=0; i<emails.length; i++) {
    let emailList = emails[i]
    console.log(`${i+1})`, emailList)
  }
}

loadContactsList('./list.txt')

