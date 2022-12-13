const table = document.querySelector('.table-category')



const filltable = async () => {
    const data = await network.get('./customers')

    const sortedData = data.data.sort(function (a, b) {
        if (a.companyName < b.companyName) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

    sortedData.forEach(element => {

        table.innerHTML += `
       
    <tr>
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.contactName}</td>
    <td>${element.contactTitle}</td>
    <td>${element.address.region}</td>
    <td><button key=${element.id} class="remove">Delete</button>
    </tr>

`   

        document.querySelectorAll('.remove')
        .forEach(remove =>{
            remove.addEventListener('click', async (event) => {
                await network.delete(`./customers`, event.target.getAttribute('key'))
                table.innerHTML = ''
                filltable()
            })
        })

    });



}





filltable()