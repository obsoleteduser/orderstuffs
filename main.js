const inputName = document.querySelector('.input-name')
const description = document.querySelector('.input-description')
const addButton = document.querySelector('.add')
const toster = document.createElement('span')
toster.textContent = "Success!"
toster.classList.add('toster')

const renderToasterSuccess  = ()=>{
    return(
        `
        
        <span class="toster">
        Success!
        </span>
        
        `
    )
}


const renderToasterFailed  = ()=>{
    return(
        `
        
        <span style="background-color: red" class="toster">
        Failed!
        </span>
        
        `
    )
}


const data  = {
    name,
    description
}


inputName.addEventListener('input', (event)=>{
    data.name = event.target.value
})


description.addEventListener('input', (event)=>{
    data.description = event.target.value
})


addButton.addEventListener('click', async (event)=>{
    console.log(data)
    try{
    await network.post('./categories', data)
    
    document.body.innerHTML += renderToasterSuccess()
    setTimeout(()=>{
        document.querySelector('.toster').remove()
    }, 2000)
}catch(error){
    
    document.body.innerHTML += renderToasterFailed()
    setTimeout(()=>{
        document.querySelector('.toster').remove()
    }, 2000)
}
})






