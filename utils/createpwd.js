const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const createPwd = (length=8,hasNb=true,hasSb=true) => {
    let char = 'abcdefghijklmnopqrstuvwxyz'
    char += char.toUpperCase()
    hasNb? char += '1234567890':null;
    hasSb? char += '!@#$%^&*_-+=' :null;
    let pwd = ''
    for (let i=0; i< length; i++ ) {
        pwd += char.charAt(Math.floor(Math.random() * char.length ))
    }
    return pwd
}



const savePwd = (pwd)=>{
    fs.open(path.join(__dirname,'../','pwd.txt'),'a',(e,fd)=>{
        fs.write(fd,`${new Date().toISOString()} :  ${pwd + os.EOL}`,null, 'utf-8',()=>{
            fs.close(fd,()=>{
                console.log(chalk.greenBright('Password Saved to pwd.txt'))
            })
        })
    })
    return null
}

module.exports.createPwd = createPwd
module.exports.savePwd = savePwd