let button = document.querySelector('.circle');
let adviceId = document.querySelector('.advice-number');
let advice = document.querySelector('.advice')


button.addEventListener('click',()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((req) => req.json())
    .then(res => {
        adviceId.textContent = `Advice #${res.slip.id}`,
        advice.textContent = `"${res.slip.advice}"`
    })
})