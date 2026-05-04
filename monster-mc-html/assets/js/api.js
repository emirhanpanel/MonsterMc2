javascript
async function loadPlayers(){
  try{
    let res = await fetch("https://api.mcsrvstat.us/2/play.monstermc.net");
    let data = await res.json();

    let count = data.players ? data.players.online : 0;

    let p1 = document.getElementById("players");
    let p2 = document.getElementById("players2");

    if(p1) p1.innerText = count + " oyuncu aktif";
    if(p2) p2.innerText = count;

  }catch{
    document.getElementById("players").innerText = "Sunucu offline";
  }
}

setInterval(loadPlayers,5000);
loadPlayers();

