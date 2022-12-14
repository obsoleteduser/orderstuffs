const table = document.querySelector('.table-category')
const editModal = document.querySelector('.modal-overlay')
const customerId = editModal.querySelector('.modal-customer-id')
const companyName = editModal.querySelector('.modal-company-name')
const contactTitle  = editModal.querySelector('.modal-contact-title')
const contactName = editModal.querySelector('.modal-contact-name')
const editButton = editModal.querySelector('.modal-edit')


editModal.querySelector('div')
.addEventListener('click', (event)=>{
  event.stopPropagation()
})

editModal.addEventListener('click', (event)=>{
  event.stopPropagation()
  editModal.style.display= 'none'
})

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
       
    <tr key=${element.id}>
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.contactName}</td>
    <td>${element.contactTitle}</td>
    
    <td><button key=${element.id} class="remove">Delete</button>
    
    </tr>

`   

        document.querySelectorAll('.remove')
        .forEach(remove =>{
        
            remove.addEventListener('click', async (event) => {
              event.stopPropagation()
              event.stopImmediatePropagation()
                await network.delete(`./customers`, event.target.getAttribute('key'))
                table.innerHTML = ''
                filltable()
            })
        })

    });



    const tds = document.querySelectorAll('td')
    tds.forEach(td => {
      td.addEventListener('click', (event)=>{
        editModal.style.display = 'flex'
        let currentData = event.target.parentNode.textContent.split('\n')
        // customerId.value = currentData[1]
        companyName.value = currentData[2].trim()
        contactName.value = currentData[3].trim()
        contactTitle.value = currentData[4].trim()
        editButton.addEventListener('click', async (event)=>{
          let editedData = {companyName: companyName.value, contactName:  contactName.value, contactTitle: contactTitle.value}
          let id = td.parentNode.getAttribute('key')
          editModal.style.display= 'none'
         await network.put(`/customers`, id, editedData) 
         table.innerHTML = ''
         filltable()
         
        })
      })
    })


}





filltable()