const shopList = document.querySelector('.shopping-items > ul');
const submitBtn = document.querySelector('.submit-btn');
const shopInput = document.querySelector('.text-input');
shopInput.focus();

function clickEvent() {
if(!shopInput.value){
    alert('Please enter a shoping item!');
    shopInput.focus();
    return;
}
createItem(shopInput.value);
shopInput.value = '';
shopInput.focus();


}

submitBtn.addEventListener('click', clickEvent);


function createItem(input) {
const listItem = document.createElement('li');
const itemDltBtn = document.createElement('button');
const itemName = document.createTextNode(input);

itemDltBtn.textContent= 'Delete';
listItem.append(itemName , itemDltBtn);
shopList.appendChild(listItem);

itemDltBtn.addEventListener('click', ()=>{
    shopList.removeChild(listItem);
    shopInput.focus();

})

}
createItem('Test Item');