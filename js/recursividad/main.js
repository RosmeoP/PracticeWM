//Fn = Fn-1 + Fn-2

const getFibo = (n) =>{
    if(n<=2){
        return 1
    }

    return getFibo(n-1) + getFibo(n-2)
}

//const result = getFibo(7)

//console.log(result)
const array = []
const getDescArray = (n) => {
    if(!n){
        return 0
    }

    array.push(n)
    getDescArray(n-1)


    
}
getDescArray(1)
console.log(array)