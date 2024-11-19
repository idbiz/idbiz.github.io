const apiKey = "34e8ac97c2084fbda2cad9a2640ec9c0"; // Masukkan API key valid
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

    if (data.articles && data.articles.length > 0) {
      const table = document.createElement("table");

      // Header tabel
      table.innerHTML = `
        <thead>
          <tr>
            <th>Image</th>
            <th>Title & Description</th>
            <th>Published At</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;

      const tbody = table.querySelector("tbody");

      // Looping melalui artikel
      data.articles.forEach((article) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td class="center">
            <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" alt="News image">
          </td>
          <td>
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </td>
          <td>${new Date(article.publishedAt).toLocaleString()}</td>
        `;

        tbody.appendChild(row);
      });

      newsContainer.appendChild(table);
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
