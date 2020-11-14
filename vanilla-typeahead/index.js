console.log('testing')
const list = document.getElementById('list')
const search = document.getElementsByTagName('input')[0]
const characters = []


fetch('https://swapi.dev/api/people')
    .then(response => {
         return response.json()        
    })    
    .then(response => {        
        characters.push(...response.results)
        
    })



function render(arr){
    const html = arr.join('')
    list.innerHTML= html
}



console.log(document.getElementsByTagName('input')[0])


function filterText(){
    const filtered = characters.filter(char=>char.name.toLowerCase().includes(this.value.toLowerCase()))
                               .map(char=> `<li>${char.name}</li>`)
    if(filtered.length){
        render(filtered)
    }
}



search.addEventListener('keyup', filterText);

