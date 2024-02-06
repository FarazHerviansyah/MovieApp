class AppBar extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');
        header{
            padding:1rem;
            display:flex;
            justify-content: flex-end;
            background-color: var(--secondary-color);
        }

        .overview{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            background-color: #fff;
            padding: 1rem;
            max-height: 100%;
            transform:translateY(101%);
            transition:transform 0.3s ease-in;
        }
        
        .movie:hover .overview{
            transform:translateY(0)
        }

        #tags{
            width:80%;
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin: 10px auto;
        }
        
        .tag{
            color:white;
            padding:10px 20px;
            background-color: #6EBF8B;
            border-radius: 50px;
            margin:5px;
            display:inline-block;
            cursor: pointer;
        }
        
        .tag.highlight{
            background-color: red;
        }
        .no-results{
            color:white;
        }
        
        .pagination{
            display:flex;
            margin:10px 30px;
            align-items: center;
            justify-content: center;
            color:white;
        }
        
        .page{
            padding:20px;
            cursor:pointer;
        }
        
        .page.disabled{
            cursor:not-allowed;
            color:grey;
        }
        
        .current{
            padding: 10px 20px;
            border-radius: 50%;
            border: 5px solid #6EBF8B;
            font-size: 20px;
            font-weight: 600;
        }
        
        .know-more{
            background-color: orange;
            color:white;
            font-size: 16px;
            font-weight: bold;
            border:0;
            border-radius: 50px;
            padding: 10px 20px;
            margin-top: 5px;
        }

        `;
    }
}

customElements.define("app-bar",AppBar);