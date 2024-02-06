class DataItem extends HTMLElement {
    set data(data) {
        this._data = data;
        console.log(this._data);
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        const IMG_URL = 'https://image.tmdb.org/t/p/w500';
        .movie {
            width: 300px;
            margin: 1rem;
            border-radius: 3px;
            box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1);
            background-color: var(--secondary-color);
            position:relative;
            overflow: hidden;
        }
        
        
        .movie img{
            width:100%;
        }
        
        .movie-info{
            color:#eee;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1rem 1rem;
            letter-spacing: 0.5px;
        }
        
        .movie-info h3{
            margin-top: 0;
        }
        
        .movie-info span{
            background-color: var(--primary-color);
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            font-weight: bold;
        }
        
        .movie-info span{
            color:#6EBF8B;
        }
        
        .movie-info span{
            color:#6EBF8B;
        }
        
        .movie-info span{
            color:#6EBF8B;
        }
        </style>

        function showMovies(data) {
            ma.innerHTML = '';
        
            data.forEach(movie => {
                const {title, poster_path, vote_average, overview, id} = movie;
                const movieEl = document.createElement('div');
                movieEl.classList.add('movie');
                movieEl.innerHTML =
                     <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
        
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${getColor(vote_average)}">${vote_average}</span>
                    </div>
        
                    <div class="overview">
        
                        <h3>Overview</h3>
                        ${overview}
                        <br/> 
                        <button class="know-more" id="${id}">Know More</button
                    </div>
                
                
                ma.appendChild(movieEl);
        
                document.getElementById(id).addEventListener('click', () => {
                  console.log(id)
                  openNav(movie)
                })
            })
        

        `;
    }
}

customElements.define("data-item", DataItem);