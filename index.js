const add=document.getElementById('additems');
add.addEventListener('click',function(event){
    event.preventDefault();
    const candyname= document.getElementById('candyname').value;
    const description=document.getElementById('description').value;
    const price=document.getElementById('price').value;
    const quantity =document.getElementById('quantity').value;

    const candy={
        candyname:candyname,
        description:description,
        price:price,
        quantity:quantity
    }

    axios.post('https://crudcrud.com/api/60e60cebdf344502a47daccb0a1fe8d8/CANDY',candy)
    .then((response)=>{console.log(response)
             showcandydetails(candy)})
             .catch((err)=>{console.log(err)})
})

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('https://crudcrud.com/api/60e60cebdf344502a47daccb0a1fe8d8/CANDY')
    .then((response)=>{console.log(response)
             for(var i=0;i<response.data.length;i++){
             showcandydetails(response.data[i]);
             }
    })
    .catch((err)=>{console.log(err)}); 
})

function showcandydetails(candy) {
    const parent = document.getElementById('listofcandy');
    const child = `<li id="${candy._id}">
        <span class="candyname">${candy.candyname}</span> 
        <span class="description">${candy.description}</span> - 
        <span class="price">${candy.price}</span> - 
        <span id="${candy._id}-quantity">${candy.quantity}</span>
        <button onclick="BUYone('${candy._id}')" id="b1">BUY 1</button>
        <button onclick="BUYtwo('${candy._id}')" id="b2">BUY 2</button>
        <button onclick="BUYthree('${candy._id}')" id="b3">BUY 3</button>
    </li>`;
    parent.innerHTML += child;
}




function BUYone(candyID) {
    const quantityDisplay = document.getElementById(`${candyID}-quantity`);
    let quantity = parseInt(quantityDisplay.innerText);
    if (quantity > 0) {
        quantity--;
        quantityDisplay.innerText = quantity;
       
        const candyElement = document.getElementById(candyID);
        const candyName = candyElement.querySelector('.candyname').innerText;
        const description = candyElement.querySelector('.description').innerText;
        const price = candyElement.querySelector('.price').innerText;

        updateCandyOnServer(candyID, {
            candyname: candyName,
            description: description,
            price: price,
            quantity: quantity
        });
    } else {
        console.log("Quantity is already zero");
    }
}

function updateCandyOnServer(candyID, updatedCandy) {
    axios.put(`https://crudcrud.com/api/60e60cebdf344502a47daccb0a1fe8d8/CANDY/${candyID}`, updatedCandy)
    .then((response) => {
        console.log("Candy item updated on server:", response.data);
    })
    .catch((error) => {
        console.error('Error updating candy item on server:', error);
    });
}


function BUYtwo(candyID) {
    const quantityDisplay = document.getElementById(`${candyID}-quantity`);
    let quantity = parseInt(quantityDisplay.innerText);
    if (quantity >= 2) {
        quantity=quantity-2;
        quantityDisplay.innerText = quantity;
       
        const candyElement = document.getElementById(candyID);
        const candyName = candyElement.querySelector('.candyname').innerText;
        const description = candyElement.querySelector('.description').innerText;
        const price = candyElement.querySelector('.price').innerText;

        updateCandyOnServer(candyID, {
            candyname: candyName,
            description: description,
            price: price,
            quantity: quantity
        });
    } else {
        console.log("Quantity is already zero");
    }
}

function BUYthree(candyID) {
    const quantityDisplay = document.getElementById(`${candyID}-quantity`);
    let quantity = parseInt(quantityDisplay.innerText);
    if (quantity >= 3) {
        quantity=quantity-3;
        quantityDisplay.innerText = quantity;
       
        const candyElement = document.getElementById(candyID);
        const candyName = candyElement.querySelector('.candyname').innerText;
        const description = candyElement.querySelector('.description').innerText;
        const price = candyElement.querySelector('.price').innerText;

        updateCandyOnServer(candyID, {
            candyname: candyName,
            description: description,
            price: price,
            quantity: quantity
        });
    } else {
        console.log("Quantity is already zero");
    }
}



function updateCandyOnServer(candyID, updatedCandy) {
    axios.put(`https://crudcrud.com/api/60e60cebdf344502a47daccb0a1fe8d8/CANDY/${candyID}`, updatedCandy)
    .then((response) => {
        console.log("Candy item updated on server:", response.data);
    })
    .catch((error) => {
        console.error('Error updating candy item on server:', error);
    });
}