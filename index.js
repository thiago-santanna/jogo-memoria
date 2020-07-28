function shuffle(array) {
    for (let indexOld = array.length - 1; indexOld > 0; indexOld--) {
        let indexNew = Math.floor(Math.random() * (indexOld + 1))
        let temp = array[indexOld]
        array[indexOld] = array[indexNew]
        array[indexNew] = temp
    }
    return array;
}

function carregarBox(){
    shuffle(numBox)
    boxItens.forEach( item => {
        item.innerHTML = numBox[item.id]
        item.style.backgroundColor = '#4CAF50'
    })
}

function mudaCor(idx){
    boxItens.forEach( item => {
        if(item.id === idx){
            item.style.backgroundColor = '#fff'
            saveSelected(item.id, item.innerText)
        }
    })
}

function retornaCor(idx, idy){
    boxItens.forEach( item => {
        if(item.id === idx){
            item.style.backgroundColor = '#4CAF50'
        }   
        if(item.id === idy){
            item.style.backgroundColor = '#4CAF50'
        }
    })
}

function saveSelected(key, val){
    numBoxSelect.push({
        "Id": key,
        "Valor": val
    })
}

function verificaBox(num){    
    let soma = numBoxSelect.reduce(( prevVal, box) => prevVal + Number(box.Valor) , 0)
    let igual = Number((soma / 2)) === Number(num)
    if(!igual){
        retornaCor(numBoxSelect[0].Id, numBoxSelect[1].Id)
    }
    numBoxSelect.pop()
    numBoxSelect.pop()
}

let numBox = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
let numBoxSelect = []
let boxItens = document.querySelectorAll('.itemBox')
let tentativas = 0


const reiniciaBox = () =>{
    carregarBox()
}

const mostrarBox = (props) => {
    mudaCor(props)
    if(numBoxSelect.length === 2){    
        setTimeout(() => verificaBox(numBoxSelect[0].Valor), 1000)
    }
}
