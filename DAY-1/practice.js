async function getdata(){
    try {
        let data = await fetch('https://fakestoreapi.com/products/1')
                        .then(res=>res.json())
                        .then(json=>console.log(json))
    } catch (error) {
        console.log(error)
    }
}
getdata()