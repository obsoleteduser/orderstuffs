const table =  document.querySelector('.table-category')



const filltable = async () =>{
   const data = await network.get('./suppliers')
    
   console.log(data)

   data.data.forEach(element => {

    table.innerHTML += `
       
    <tr>
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.contactName}</td>
    <td>${element.contactTitle}</td>
    <td>${element.address.region}</td>
    </tr>

`

   });

  

}


filltable()