
const instance = axios.create({
    baseURL: 'https://northwind.vercel.app/api',
    headers: {'X-Custom-Header': 'foobar'}
  });

  const network = {


    get: async(URL)=>{
       return await instance.get(URL)

    },

    post: async (URL, data)=>{
        await instance.post(URL, data)
        .then(data => console.log(data,))
    },
    
    delete: async (URL, id)=>{
        await instance.delete(`${URL}/${id}`, id)
    },

    put: async (URL, id, data)=>{
      await instance.put(`${URL}/${id}`, data)
    }

  }
