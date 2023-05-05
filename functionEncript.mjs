//obj base
export const objPrimary = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
}

export const objSecundary = {};

// method to generete new obj

Object.keys(objPrimary).map((val) => {
    const newKey = objPrimary[val];
    objSecundary[newKey] = val
    })

// funtion encrypt

export function encrypt(text, obj){
    let newText = text;
    Object.keys(obj).map(key => 
    newText = newText.replaceAll(key,obj[key]))
    return newText
}
// const c = encrypt('jufatain ufatain',objSecundary)
// console.log(c)