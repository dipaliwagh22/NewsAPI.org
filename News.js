const apiKey = '10a4c8fcf2bb4ecda66748b8e90eba71';
const baseUrl = 'https://newsapi.org/v2';

const searchInput = document.getElementById('search-text');
const searchBtn = document.getElementById('search-button');
const newsContainer = document.getElementById('newsContainer');

async function fetchNews(query) {
    const url = `${baseUrl}/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.articles) {
        displayNews(data.articles);
    } else {
        newsContainer.innerHTML = '<p>No articles found.</p>';
    }
}



// async function fetchNewsForIndia() {
//     const url = `${baseUrl}/top-headlines?country=in&apiKey=${apiKey}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.articles) {
//         displayNews(data.articles);
//     } else {
//         newsContainer.innerHTML = '<p>No top articles found.</p>';
//     }
// }


async function fetchNewsForIndia() {
    const query = 'India';
    const url = `${baseUrl}/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.articles) {
        displayNews(data.articles);
    } else {
        newsContainer.innerHTML = '<p>No articles found.</p>';
    }
}

function displayNews(articles) {
    // Clear previous news articles
    newsContainer.innerHTML = '';

    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No articles found.</p>';
        return;
    }

    articles.forEach(article => {
        const newsItem = document.createElement('article');
        const imageUrl = article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/250x120?text=No+Image+Available';

        newsItem.innerHTML = `
            <img src="${imageUrl}" alt="${article.title}">
            <div class="content">
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read full article <span>→</span></a>
            </div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchNews(query);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

fetchNewsForIndia();