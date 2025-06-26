function search() {
    const query = 
    document.getElementById("searchInput").value;

    const resultsDiv = document.getElementById("results");

    if(query.trim() === "") {
        resultsDiv.innerHTML = "<p>Please enter a search item. </p>"
    }
    else{
        resultsDiv.innerHTML = `<p> You searched for: <strong>${query}</strong></p>`
    }
}