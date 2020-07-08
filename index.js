function shuffle(array) {
    for (let indexOld = array.length - 1; indexOld > 0; indexOld--) {
        let indexNew = Math.floor(Math.random() * (indexOld + 1));
        let temp = array[indexOld];
        array[indexOld] = array[indexNew];        
        array[indexNew] = temp;
    }
    return array;
}
let numBox = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
const boxItens = document.querySelectorAll('.itemBox')

const reiniciaBox = () =>{
    shuffle(numBox)
    boxItens.forEach( item => {      
        item.innerHTML = numBox[item.id]
    })
}

const mostrarBox = (props) => {
    alert(props)
}
