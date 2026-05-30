let btn = document.querySelector("button");
btn.addEventListener('click', async () =>{
    let fact = await getFact();
    let para = document.querySelector("#result");
    para.innerText = fact;
});






let url = 'https://catfact.ninja/fact'
async function getFact() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;

    } catch (err){
        console.log("error - ", err);
        return 'No Fact Found!';
    }
}