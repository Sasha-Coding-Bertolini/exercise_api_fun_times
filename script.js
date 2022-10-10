const apiUrl = "https://icanhazdadjoke.com/search?term="+API_TERM;
const listOfJokes = document.querySelector("#list-of-jokes");
const button = document.querySelector('button');

async function getData(url){
        try{    
        const response = await fetch(url);
        console.log(response);
        const getJokesData = await response.json();
        console.log(getJokesData);
        const jokesArray = Array.from(getJokesData.jokes);
        console.log(jokesArray);
        for (i in jokesArray){ 
            const newLi = document.createElement('li');
            listOfJokes.appendChild(newLi);
            newLi.textContent = jokesArray.map(x => x)[i];
        };
        } catch (err) {
            console.log("didn't work");
        }
    }

button.addEventListener('click', function(){
    getData(apiUrl);
}
)


