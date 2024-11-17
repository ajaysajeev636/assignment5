fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    console.log(data)
      
    let productli=document.getElementById("productlist")
    
    data.forEach(product => {
        const productcard=document.createElement("div")
        productcard.classList.add('col-md-3', 'col-sm-6', 'mb-4' );
        productcard.innerHTML=`
        <div class="card">
         
           <img src="${product.image}" class="card-img-top " alt="${product.name}" width="100%"></img>
          <div class="card-body"> 
             
          <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description.slice(0, 50)}...</p> <p class="card-text">Price: $${product.price}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>

          </div>


        </div>`;
    

    

        productli.appendChild(productcard);
    });
      
})
.catch()