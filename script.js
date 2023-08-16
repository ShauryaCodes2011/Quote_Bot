var generate = document.getElementById("generate")
var quote = document.getElementById("quote")
var author = document.getElementById("author")


async function fetchQuote() {
    console.log("fetching Quote");
    quote.innerText = "Loading..."
    author.innerHTML = ""
    var response = await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
        method: 'GET',
        headers: { 'X-Api-Key': 'UCvbt7x3E1rwWQI6J/UXGQ==mSXyvd3jzYTVxnFa' },
        contentType: 'application/json',
})

    console.log(response);

    var data = await response.json()

    quote.innerText = `"${data[0].quote}"`
    author.innerHTML = `-<i>${data[0].author}</i>`

}




generate.addEventListener("click", fetchQuote)