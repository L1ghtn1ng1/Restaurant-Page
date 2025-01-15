import pancake from './asset/resource/pancakes.jpg';
import french_toast from './asset/resource/french-toast.jpg';
import eggs_benedict from './asset/resource/eggs-benedict.jpg';
import omelette from './asset/resource/omelette.jpg';
import bagel from './asset/resource/bagel.jpg';
import croissant from './asset/resource/croissant.jpg';
export class MenuPage{
    #content;
    #menu;
    constructor(){
        this.#content  = document.getElementById('content');
        this.#menu = document.createElement('div');
        this.#menu.classList.add('menu');
        this.#content.appendChild(this.#menu);
    }

    render(){
        const fragment = document.createDocumentFragment();
        console.log('Rendering Menu Page');
        let foodList = ["Pancakes", "French Toast", "Eggs Benedict", "Omelette", "Bagel", "Croissant"];
        let foodImgs = [pancake, french_toast, eggs_benedict, omelette, bagel, croissant];
        let prices = ["$5.99", "$6.99", "$7.99", "$8.99", "$9.99", "$10.99"];
        const menuTitle = document.createElement('h2');
        menuTitle.textContent = 'Menu';
        this.#menu.appendChild(menuTitle);
        const menuList = document.createElement('div');
        menuList.classList.add('menu-list');
        for (let i = 0; i < foodList.length; i++){
            const storeFood = document.createElement('div');
            storeFood.classList.add('store-food');
            const foodItem = document.createElement('h3');
            const foodImg = document.createElement('img');
            const price = document.createElement('p');
            foodImg.src = foodImgs[i];
            foodItem.textContent = foodList[i];
            price.textContent = prices[i];
            storeFood.appendChild(foodItem);
            storeFood.appendChild(foodImg);
            storeFood.appendChild(price);
            menuList.appendChild(storeFood);
        }
        fragment.appendChild(menuList);
        this.#menu.appendChild(fragment);
    }
    

}