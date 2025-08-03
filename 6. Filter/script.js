const endPoint = 'https://countriesnow.space/api/v0.1/countries';

let cities = []; 

fetch(endPoint)
  .then(response => response.json())
  .then(data => {
    cities = data.data.flatMap(country => country.cities);
    console.log(cities); 
  })
  .catch(error => console.error('Error fetching data:', error));


    function findMatches(wordToMatch,cities){
        return cities.filter(place =>{
            const regex = new RegExp(wordToMatch,'gi');
            return place.match(regex);
        })
  }

  function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value,'gi');
        const cityName = place.replace(regex,`<span class="hl">${this.value}</sapn>`)
        return `
            <li>
                <span class="name">${cityName}</span>
            </li>
        `
    }).join(' ');
    suggestions.innerHTML = html;
  }

  const cityToFind = document.querySelector(".word");
  const suggestions = document.querySelector(".suggestions");

  cityToFind.addEventListener("keyup",displayMatches);