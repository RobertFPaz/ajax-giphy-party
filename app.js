console.log("Let's get this party started!");
const key = 'PmiDr6sskH60z0QBT0fZM6QUbu0BbaVC'

async function getRandGiph(searchInput){
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search`,{
        params:{api_key:key, q:searchInput, limit: 1}})
    console.log(result)
    let link = result.data.data[0].images.original.url
    // return link
    // originally had this in form add event listener with getRandGiph returning link
    addGiph(link)
}

const form = document.querySelector('#searchForm')
const input = document.querySelector('#searchTerm')
form.addEventListener('submit', function(e){
    e.preventDefault();
    getRandGiph(input.value)
    // addGiph(getRandGiph(input.value))
    input.value = ""
})

function addGiph(link){
    const div = document.querySelector('#images');
    const img = document.createElement('img');
    img.src = `${link}`;
    div.append(img);
}

const remove = document.querySelector('#remove')
remove.addEventListener('click', function(){
    const div = document.querySelector('#images');
    div.textContent = "";
})