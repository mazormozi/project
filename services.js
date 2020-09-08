const baseUrl = {
    coins :"https://api.coingecko.com/api/v3/coins/"
}

async function getCoins(numberOfCoins){
    return await $.ajax({
        url:`${baseUrl.coins}${numberOfCoins}`,
        method:"GET"
    })
}