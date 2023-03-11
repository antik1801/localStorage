const nameField = document.getElementById('name-field');
const emailField = document.getElementById('email-field');
const messageField = document.getElementById('message-field');


const delateToLocalStorage = key => {
    localStorage.removeItem(key);
}
const sendToLocalStorage = (key,id) =>{
    const FieldName = document.getElementById(id);
    const value = FieldName.value;
    FieldName.value = '';
    window.localStorage.setItem(`${key}`,`${value}`);
}
const reset = () =>{
    localStorage.clear();
}

// const sendButton = () =>{
//     const name = nameField.value;
//     const email = emailField.value;
//     const message = messageField.value;
//     nameField.value = '';
//     emailField.value='';
//     messageField.value='';
//     setItemsToLocalStorage(info,name,email,message);
// }

// const getItemsToLocalStorage = () =>{
//     let cart ={};
//     const storedCart = localStorage.getItem("cart");
//     if(storedCart){
//         cart = JSON.parse(storedCart);
//     }
//     return cart;
// }

// const setItemsToLocalStorage = (product,quantity) =>{
//     const cart = getItemsToLocalStorage();
//     cart[product] = quantity;
//     const cartStringified = JSON.stringify(cart);
//     window.localStorage.setItem('cart', cartStringified);
// }