const API_URL = "https://api.tvmaze.com/search/shows?q=";

async function fetchShows(query) {
    const status = document.getElementById("status");

    status.innerHTML = "Loading...";

    try {
        const response = await fetch(API_URL + encodeURIComponent(query));

        if (!response.ok) {
            throw new Error("Network Error");
        }

        const data = await response.json();

        status.innerHTML = "";

        return data;

    } catch (error) {

        status.innerHTML = "❌ Failed to fetch data.";

        console.error(error);

        return [];

    }
}