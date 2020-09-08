const DOM = {
    mainDiv:document.getElementById('cardContainer'),
    searchBtn: document.getElementById('searchBtn'),
    SearchInput: document.getElementById('inputSearch')
};


let currencies = [];


(async function (){
    currencies = await getCoins("list")
    draw(currencies)
console.log(currencies);
        
}())


function draw(data){
    if(!Array.isArray(data)) return;
    clearDom()
    data.slice(0,100).forEach(coin => {
        _createCard(coin)
    });

}
DOM.searchBtn.addEventListener('click',()=>{
    console.log('work');
    const inputValue = DOM.SearchInput.value
    const filterCoins = currencies.filter(coin=>coin.symbol.toLowerCase().includes(inputValue.toLowerCase()))
    console.log(currencies);
    draw(filterCoins)
    console.log(inputValue);

    


})

function clearDom(){
    DOM.mainDiv.innerHTML = ''
}


function _createCard(coin){
    const cardSize = document.createElement("div");
     cardSize.className ="col-sm-4 ";
    const cardName = document.createElement("div");
    cardName.className='card'
    const cardBody = document.createElement("div");
    cardBody.className ='card-body'
    const h5 = document.createElement('h5')
    h5.innerText = coin.symbol
    const p = document.createElement('p')
    p.innerText = coin.name
    let button = document.createElement('button')
    button.className = 'btn btn-primary'
    button.innerText = 'more info'
    

    const collapseDiv = document.createElement('div')
    collapseDiv.className = " card-body "

    cardBody.append(h5,p,button,collapseDiv)
    cardName.append(cardBody)
    cardSize.append(cardName)
     DOM.mainDiv.append(cardSize);


     button.addEventListener('click',async()=>{
        _createSpinner()
        let eachCoin = await getCoins(`${coin.id}`)
        console.log(eachCoin);
        _createCollapser()







        function _createSpinner(){
          const spinner = document.createElement('div')
            spinner.className = 'spinner-border'
            const spinnerPar = document.createElement('p')
            spinnerPar.className = 'sr-only'
            
            spinner.append(spinnerPar)
            collapseDiv.append(spinner)
        }



      function _clearDom(){
            collapseDiv.innerHTML=''
        }

    function _createCollapser(){
    _clearDom()
    collapseimg = document.createElement('img')
    collapseimg.src = eachCoin.image.small
    collapseimg.style.height = '100px'
    collapseimg.style.width = '100px'

    collapseUsd = document.createElement('h4')
    collapseUsd.innerText = `${eachCoin.market_data.current_price.usd}$`
    collapseEur = document.createElement('h4')
    collapseEur.innerText = `${eachCoin.market_data.current_price.eur}€`
    collapseIls = document.createElement('h4')
    collapseIls.innerText = `${eachCoin.market_data.current_price.ils}₪`




    console.log(collapseUsd,collapseimg);
    collapseDiv.append(collapseimg,collapseUsd,collapseEur,collapseIls)
    console.log(collapseDiv);
    
    }
    
    })
    
}




