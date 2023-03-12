// search for title
document.getElementById("fetch").addEventListener("click", function() {
    let title = document.getElementById("title");
    let year = document.getElementById("year");
    let type = document.getElementById("type");
    if ((title.value.length < 3)) {
        let h1 = document.createElement("h1");
        h1.style.color = "yellow";
        h1.innerText = "Please enter more than 2 characters";
        document.getElementById("data").append(h1);
        return;
    }

    axios.get(
        `https://www.omdbapi.com/?apikey=1a0b2430&s=${title.value}&y=${year.value}&type=${type.value}`
    )

    .then((res) => {
        document.getElementById("data").innerHTML = "";

        if (res.data.Response === "False") {
            let h1 = document.createElement("h1");
            h1.style.color = "yellow";
            h1.innerText = res.data.Error;
            document.getElementById("data").append(h1);
            return;
        }

        res.data.Search.forEach((val) => {
            let movieBox = document.createElement("div");
            let type = document.createElement("h3");
            let title = document.createElement("h2");
            let year = document.createElement("h4");
            let img = document.createElement("img");

            img.src = val.Poster;
            title.innerText = val.Title;
            type.innerText = val.Type;
            year.innerText = val.Year;

            movieBox.append(title);
            movieBox.append(type);
            movieBox.append(year);
            movieBox.append(img);

            movieBox.classList.add("movieBox");
            document.getElementById("data").append(movieBox);

        });
    });
});