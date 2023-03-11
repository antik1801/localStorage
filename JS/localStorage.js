const addItems = () =>{
   const nameField = document.getElementById('name');
   const valueField = document.getElementById('value');
   const name = nameField.value;
   const value = valueField.value;
   nameField.value = "";
   valueField.value = "";
   showData(name,value);
   saveItemsToLocalStorage(name,value);
}
const showData = (name,value) =>{
    const ul = document.getElementById('unorder-list');
    const li = document.createElement('li');
    li.innerText = `${name} ${value}`
    ul.appendChild(li);
}
const clearData = () =>{
    localStorage.clear();
}

const getItemsFromLocalBrowser = () =>{
    let key = {};
    const storedValue = window.localStorage.getItem('key');
    if (storedValue) {
        key = JSON.parse(storedValue);
    }
    return key;
}

const saveItemsToLocalStorage = (name,value) =>{
    const key = getItemsFromLocalBrowser();
    key[name] = value;
    const keyStringified = JSON.stringify(key);
    window.localStorage.setItem('key', keyStringified)
}

const displayItemsFromStorage = () =>{
    const savedLocals = getItemsFromLocalBrowser();
    for (const key in savedLocals) {
        if (Object.hasOwnProperty.call(savedLocals, key)) {
            const element = savedLocals[key];
            showData(key,element);
        }
    }
}
