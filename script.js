var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);


    console.log(result);

    result.map((country, i) => {
        console.log(country);
        return country;



    })

    var reg = result.filter((ele) => ele.region === "Asia");
    console.log(reg);


    var res = result.filter((ele) => ele.population < 200000).map((ele) => ele.name);
    console.log(res);


    result.forEach(country => {
        console.log("Name: " + country.name);
        console.log("Capital: " + country.capital);
        console.log("Flag: " + country.flag);
        console.log("\n");
    })


    let totalpopulation = result.reduce((acc, country) => acc + country.population, 0);
    console.log(totalpopulation);

    let uscurrence = result.filter(country => country.currencies.some(currency => currency.code === "USD"));
    console.log(uscurrence.map(country => country.name));
}