export default function fetchCountries(e){
    const inputText = document.querySelector("input");
    const searchQuery = e.target.value;
    return 
fetch('https://restcountries.com/v3.1/name/{searchQuery}')    
.then(response => response.json())
.then(data => data)
.finally(inputText.reset)
} 