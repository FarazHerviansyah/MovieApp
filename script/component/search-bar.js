class SearchBar extends HTMLElement {
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }
   
    render() {
       this.innerHTML = `
       <style> 
       .search{
        background-color: transparent;
        border: 2px solid var(--primary-color);
        padding:0.5rem 1rem;
        border-radius: 50px;
        font-size: 1rem;
        color:#fff;
        font-family: inherit;
    }
    
    .search:focus{
        outline:0;
        background-color: var(--primary-color);
    }
    
    .search::placeholder{
        color: #fff;
    }      

    @media screen and (max-height: 450px) {
        .overlay a {font-size: 20px}
        .overlay .closebtn {
          font-size: 40px;
          top: 15px;
          right: 35px;
        }
       `;

       this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);