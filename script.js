fetch('https://gdbrowser.com/api/profile/michigun').then(function (response) {
    return response.json();
}).then(function (obj) {
    username = obj.username
    rank = obj.rank
    stars = obj.stars
    diamonds = obj.diamonds
    coins = obj.coins
    ucoins = obj.userCoins
    demons = obj.demons
    cp = obj.cp
    mod = obj.moderator
    // custom
    if (username == 'Michigun') return secretMichi()
    // Notability (not very, somewhat, pretty, very, extremely)
    notarank = "a not very"
    if (rank <= 10000 && rank > 1000) {
        notarank = "a somewhat"
    }
    if (cp >= 5) {
        notarank = "a pretty"
    }
    if (rank <= 1000 && rank > 0) {
        notarank = "a pretty"
    }
    if (stars >= 50000) {
        notarank = "a very"
    }
    if (mod == 1) {
        notarank = "a very"
    }
    if (mod == 2) {
        notarank = "an extremely"
    }
    
    document.getElementById('userbio').textContent = username + " was " + notarank + " notable dasher.";
    document.getElementById('portrait').src = "https://gdbrowser.com/icon/" + username;
    document.getElementById('favicon').href = "https://gdbrowser.com/icon/" + username;
    document.title = "Biography of " + username;
}).catch(function (error) {
    document.getElementById('userbio').textContent = "Hmmm... Something went wrong.... uhhh blame colon!";
});

function secretMichi() {
    document.getElementById('userbio').textContent = username + " was one of the most notable dashers there ever was... Top of the leaderboard for the longest time, inspiring many fellow dashers. Rest In Peace, you will always be a legend...";
    document.getElementById('portrait').src = "https://gdbrowser.com/icon/" + username;
    document.getElementById('favicon').href = "https://gdbrowser.com/icon/" + username;
}