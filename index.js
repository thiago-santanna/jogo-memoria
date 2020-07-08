function shuffle(array) {
    for (let indexOld = array.length - 1; indexOld > 0; indexOld--) {
        let indexNew = Math.floor(Math.random() * (indexOld + 1));
        let temp = array[indexOld];
        array[indexOld] = array[indexNew];        
        array[indexNew] = temp;
    }
    return array;
}

function carregarBox(){
    shuffle(numBox)
    boxItens.forEach( item => {
        item.innerHTML = numBox[item.id]
        item.style.backgroundColor = '#4CAF50';
    })
}

function mudaCor(idx){
    boxItens.forEach( item => {
        if(item.id === idx){
            item.style.backgroundColor = '#fff'
        }
    })
}

let numBox = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
let boxItens = document.querySelectorAll('.itemBox')
let tentativas = 0

const reiniciaBox = () =>{
    carregarBox()
}

const mostrarBox = (props) => {
    mudaCor(props)
    tentativas++
    if(tentativas === 2){
        console.log('testar')
        console.log('mudar_ou_não')
        tentativas = 0
    }
}
