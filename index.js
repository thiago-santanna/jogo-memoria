const boxItens = document.querySelectorAll('.itemBox')

const reiniciaBox = () =>{
    boxItens.forEach( item => {
        item.innerHTML = item.id
    })
}

const mostrarBox = (props) => {
    alert(props)
}

function getRandon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandon(1,16))