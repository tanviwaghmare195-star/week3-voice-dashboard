const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const statusBox = document.getElementById("status");
const voiceBtn = document.getElementById("voiceBtn");

searchBtn.addEventListener("click", searchShows);

searchInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        searchShows();

    }

});

async function searchShows() {

    const query = searchInput.value.trim();

    if (query === "") {

        statusBox.innerHTML = "Please enter a TV show.";

        return;

    }

    searchBtn.disabled = true;
    voiceBtn.disabled = true;

    results.innerHTML = "";

    const shows = await fetchShows(query);

    displayShows(shows);

    searchBtn.disabled = false;
    voiceBtn.disabled = false;

}

function displayShows(data) {

    results.innerHTML = "";

    if (data.length === 0) {

        results.innerHTML = "<h2>No Shows Found.</h2>";

        return;

    }

    data.forEach(item => {

        const show = item.show;

        const image = show.image
            ? show.image.medium
            : "https://via.placeholder.com/210x295?text=No+Image";

        const rating = show.rating.average
            ? show.rating.average
            : "N/A";

        const summary = show.summary
            ? show.summary.replace(/<[^>]+>/g, "")
            : "No summary available.";

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img src="${image}">

            <div class="card-content">

                <h3>${show.name}</h3>

                <p><strong>Language:</strong> ${show.language}</p>

                <p><strong>Rating:</strong> ⭐ ${rating}</p>

                <p>${summary.substring(0,150)}...</p>

            </div>

        `;

        results.appendChild(card);

    });

}