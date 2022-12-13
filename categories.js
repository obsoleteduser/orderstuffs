const table =  document.querySelector('.table-category')



const filltable = async () =>{
   const data = await network.get('./categories')
    
   console.log(data)

   data.data.forEach(element => {

    table.innerHTML += `
       
    <tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.description}</td> 
    </tr>

`

   });

  

}


filltable()