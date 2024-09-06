const apiKey = '10a4c8fcf2bb4ecda66748b8e90eba71';
const baseUrl = 'https://newsapi.org/v2';

const searchInput = document.getElementById('search-text');
const searchBtn = document.getElementById('search-button');
const newsContainer = document.getElementById('newsContainer');
const hardcodedContainer = document.getElementById('hardcodedContainer');

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

function displayNews(articles) {
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
                <h2>${article.title}</h2>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read full article <span>→</span></a>
            </div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

function displayHardcodedArticles() {
    const articles = [
        {
            title: "Echoes of Defeat: A Personal Reflection on India’s 20",
            description: "The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .",
            url: "#",
            urlToImage:"1.png"
        },
        {
            title: "Chandrayaan-3 : India's Imperatives for S",
            description: "Chandrayaan-3's exploration of the lunar south pole signifies a new era in India's space endeavors.This achievement presents an opportunity .",
            url: "#",
            urlToImage: "2.png"
        },
        {
            title: "UN DESA Policy Brief No. 153: India overtakes China as the world’s most ",
            description: "In April 2023, India's population is expected to reach 1,425,775,850 people, matching and then surpassing the population of mainland China.",
            url: "#",
            urlToImage: "3.png"
        },
        {
            title: "Teetotaller-Turned-Liquor Baron Lalit Khaitan Is India’s Newest Billionaire",
            description: "The 80-year-old liquor magnate is chairman of the $380 million (revenue) Delhi-based Radico Khaitan, best known for such beverages as 8 PM .",
            url: "#",
            urlToImage: "4.png"
        },
        {
            title: "Google Year in Search 2023: Who were the most searched people in India",
            description: "As the year 2023 comes to a close, Google has once again revealed the most searched personalities in India. From Bollywood stars to cricket.",
            url: "#",
            urlToImage: "5.png"
        },
        {
            title: "Top 10 Most Searched Recipes in India in 2023",
            description: "Mango pickle was the most searched recipe in India in 2023. The traditional Indian condiment, made with raw, unripe green mangoes, spices...",
            url: "#",
            urlToImage: "6.png"
        },
        {
            title: "When will the violence in Manipur end?",
            description: "Peace will not come without acknowledging state complicity and making reparations, all while ensuring safety for the Zo community.",
            url: "#",
            urlToImage: "7.png"
        },
        {
            title: "Uttarakhand tunnel collapse: Rescuers free 41 trapped workers",
            description: "The workers were stuck for two weeks after a part of a tunnel they were working in collapsed.",
            url: "#",
            urlToImage: "8.png"
        },
        {
            title: "Odisha train accident: Fifty bodies unclaimed weeks after India crash",
            description: "More than 50 bodies remain unclaimed a month after a deadly train crash killed at least 293 people in India. The accident took place on 2 ...",
            url: "#",
            urlToImage: "9.png"
        },
        {
            title: "Echoes of Defeat: A Personal Reflection on India’s 20",
            description: "The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .",
            url: "#",
            urlToImage:"1.png"
        },
        {
            title: "Chandrayaan-3 : India's Imperatives for S",
            description: "Chandrayaan-3's exploration of the lunar south pole signifies a new era in India's space endeavors.This achievement presents an opportunity .",
            url: "#",
            urlToImage: "2.png"
        },
        {
            title: "UN DESA Policy Brief No. 153: India overtakes China as the world’s most ",
            description: "In April 2023, India's population is expected to reach 1,425,775,850 people, matching and then surpassing the population of mainland China.",
            url: "#",
            urlToImage: "3.png"
        },
    ];

    hardcodedContainer.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('article');
        newsItem.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}">
            <div class="content">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read full article <span>→</span></a>
            </div>
        `;
        hardcodedContainer.appendChild(newsItem);
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

displayHardcodedArticles();
