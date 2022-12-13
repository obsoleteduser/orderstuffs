const getData = async ()=>{
    const datas = await network.get('/products')

    let stuffs  = datas.data


    const mostExpensive  = stuffs.reduce((acc, curr)=>{
        return acc.unitPrice > curr.unitPrice ? acc : curr
    })


 

    const avaragestock = stuffs.reduce((acc, curr)=>{
        return acc + +curr.unitsInStock
    }, [0])

    console.log('Avarage stock: ', avaragestock/stuffs.length)

    console.log("Most expensive", mostExpensive)


}



getData()