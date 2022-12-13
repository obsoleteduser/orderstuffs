const table =  document.querySelector('.table-category')



const filltable = async () =>{
   const data = await network.get('./orders')

   const sortedbyDate  = data.data.sort(function(a,b){
   
    return new Date(b.orderDate) - new Date(a.orderDate);
  });
    
   console.log(data)

   sortedbyDate.forEach(element => {

    table.innerHTML += `
       
    <tr>
    <td>${element.customerId}</td>
    <td>${element.employeeId}</td>
    <td>${element.orderDate}</td>
    </tr>

`

   });

  

}


filltable()