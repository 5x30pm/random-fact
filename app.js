let btn = document.querySelector("#get-fact");
let url = 'https://catfact.ninja/fact'

btn.addEventListener('click', async () => {
    let fact = await getFact();

    // select para and write fact 
    let para = document.querySelector("#result");
    para.classList.add("result-box");
    para.innerText = fact;

    //change btn to Get More Fact
    btn.innerText = 'Get More Fact';

});

// function for getting fact from api
async function getFact() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;

    } catch (err) {
        console.log("error - ", err);
        return 'No Fact Found!';
    }
}