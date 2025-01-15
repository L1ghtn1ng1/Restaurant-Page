import bagel from './asset/resource/bagel.jpg';
export class HomePage{
    #content;
    #intro;
    #description;
    #menu;
    #booking;
    #contact;
    constructor(){
        this.#content  = document.getElementById('content');
        this.#intro = document.createElement('div');
        this.#description = document.createElement('div');
        this.#menu = document.createElement('div');
        this.#booking = document.createElement('div');
        this.#contact = document.createElement('div');
        this.#intro.classList.add('intro');
        this.#description.classList.add('description');
        this.#menu.classList.add('menu');
        this.#booking.classList.add('booking');
        this.#contact.classList.add('contact');
        this.#content.appendChild(this.#intro);
        this.#content.appendChild(this.#description);
        this.#content.appendChild(this.#menu);
        this.#content.appendChild(this.#booking);
        this.#content.appendChild(this.#contact);
    }
    
    render(){
        console.log('Rendering Home Page');
        const boxIntro = document.createElement('div');
        const introdescription = document.createElement('h1');
        const introdescriptionp = document.createElement('p');
        introdescription.textContent = 'Enchanting Flavors, Inspired by Magic';
        introdescriptionp.textContent = 'Welcome to our restaurant. We offer the best dining experience in town. Our menu is inspired by magic and we are sure you will find something you like.';
        boxIntro.appendChild(introdescription);
        boxIntro.appendChild(introdescriptionp);

        const image = document.createElement('img');
        image.src = bagel;
        this.#intro.appendChild(boxIntro);
        boxIntro.classList.add('intro-box');
        this.#intro.appendChild(image);


        /*
        this.#description.innerHTML = `<p>Our restaurant is the best in town. We offer a wide variety of dishes to suit every taste.</p>`;
        this.#menu.innerHTML = `<h2>Menu</h2>
        <ul>
            <li>Appetizers</li>
            <li>Main Course</li>
            <li>Desserts</li>
        </ul>`;
        this.#booking.innerHTML = `<h2>Book a table</h2>
        <form>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Date">
            <input type="text" placeholder="Time">
            <input type="submit" value="Submit">
        </form>`;
        this.#contact.innerHTML = `<h2>Contact us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: example@example.com</p>`;
    }
    */
    }

} 