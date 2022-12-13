
const instance = axios.create({
    baseURL: 'https://northwind.vercel.app/api',
    timeout: 1000,
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
    }

  }
