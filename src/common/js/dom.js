export function addClass(el,className){
 if(hasClass(el,className)){
     return
 }
 let newClass = el.className.split(' ')
 newClass.push(className)
 el.className = newClass.join(' ')
}

export function hasClass(el,className){
    let Reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
    return Reg.test(el.className)
}