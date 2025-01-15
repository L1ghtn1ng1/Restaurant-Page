
export class AboutPage{
    #content;
    #about;
    constructor(){
        this.#content  = document.getElementById('content');
        this.#about = document.createElement('div');
        this.#about.classList.add('about');
        this.#content.appendChild(this.#about);
    }
    render(){
        console.log('Rendering About Page');
        const aboutTitle = document.createElement('h2');
        aboutTitle.textContent = 'About Us';
        const aboutText = document.createElement('p');
        aboutText.textContent = `We are a family-owned restaurant that has been serving delicious breakfast for over 30 years.
        We pride ourselves on using fresh ingredients and providing excellent customer service.
        Our menu has a variety of options that will satisfy any breakfast craving.
        Come visit us today and enjoy a delicious meal!`;
        this.#about.appendChild(aboutTitle);
        this.#about.appendChild(aboutText);

    }
}