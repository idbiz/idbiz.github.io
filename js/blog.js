const apiKey = "YOUR_API_KEY"; // Ganti dengan API key-mu
const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=editing`;

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

    // Periksa apakah ada berita
    if (data.results && data.results.length > 0) {
      data.results.forEach((news) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        newsItem.innerHTML = `
          <h2>${news.title}</h2>
          <p>${news.description || "No description available."}</p>
          <a href="${news.link}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsItem);
      });
    } else {
      newsContainer.innerHTML = "<p>No news found.</p>";
    }
  } catch (error) {
    newsContainer.innerHTML = `<p>Error loading news: ${error.message}</p>`;
  }
}

// Panggil fungsi fetchNews
fetchNews();
