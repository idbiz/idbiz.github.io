const apiKey = "34e8ac97c2084fbda2cad9a2640ec9c0"; // Ganti dengan API key NewsAPI
const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-11-18&to=2024-11-18&sortBy=popularity&apiKey=${apiKey}`;

const newsContainer = document.getElementById("news");

async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Bersihkan kontainer
    newsContainer.innerHTML = "";

    // Periksa apakah ada artikel
    if (data.articles && data.articles.length > 0) {
      data.articles.forEach((article) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        newsItem.innerHTML = `
          <h2>${article.title}</h2>
          <p><strong>Author:</strong> ${article.author || "Unknown"}</p>
          <p><strong>Published at:</strong> ${new Date(article.publishedAt).toLocaleString()}</p>
          <img src="${article.urlToImage || "https://via.placeholder.com/150"}" alt="News image">
          <p>${article.description || "No description available."}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsItem);
      });
    } else {
      newsContainer.innerHTML = "<p>No news found.</p>";
    }
  } catch (error) {
    newsContainer.innerHTML = `<p>Error loading news: ${error.message}</p>`;
    console.error("Error:", error);
  }
}

// Panggil fungsi fetchNews
fetchNews();
