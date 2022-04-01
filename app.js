const getQuote = async() => {
  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();
    const slip = data.slip;
    const {id, advice} = slip
    
    const numberDom = document.querySelector('span');
    const adviceDom = document.querySelector('#quote');

    numberDom.textContent = id;
    adviceDom.textContent = `"${advice}"`;
  } catch (error) {
    console.warn(error);
  }
}

getQuote()

const boton = document.querySelector(".dice");
boton.addEventListener("click", () => location.reload());