

async function bitcoinD()
{
    const inputString = document.getElementById("coinName").value;
    // console.log(inputString);
    let base_url = "https://api.coincap.io/v2/assets/";
    fetch(base_url + inputString)
    .then(async (data) => {
        if (data.ok) {
            data = await data.json();
            console.log(data);
            // console.log(data.data.id);
            document.getElementById("cname").innerHTML = data.data.id;
            document.getElementById("position").innerHTML = data.data.rank;
            document.getElementById("sym").innerHTML = data.data.symbol;
            document.getElementById("nam").innerHTML = data.data.name;
            document.getElementById("sup").innerHTML = data.data.supply;
            document.getElementById("msupply").innerHTML=data.data.maxSupply ;
            document.getElementById("bca").innerHTML = data.data.marketCapUsd ;
            document.getElementById("acm").innerHTML = data.data.volumeUsd24hr;
            document.getElementById("ade").innerHTML = data.data.priceUsd ;
            document.getElementById("aem").innerHTML = data.data.changePercent24Hr;
            document.getElementById("afo").innerHTML = data.data.vwap24Hr ;
            document.getElementById("agk").innerHTML = data.data.explorer ;
        

        }
      })
      .catch((e) =>{
       
        console.log(e);
      });
}