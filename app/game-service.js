function GameService() {
    var url = 'https://inspire-server.herokuapp.com/cards';

    //get game
    //create game
    //delete game
    //get hand
    //update hand(s)
    //update game
    //update player
    //remove card(s)
    function Game(formData) {
        this.playerName = formData.playerName.value,
            this.opponent = formData.opponent.value,
            this.set = formData.set.value
    }

    this.createGame = function createGame(formData, cb) {
        var game = new Game(formData)
        $.post(url + game + game.id)
            .then(res => {
                localCars.unshift(res.data)
                cb(localCars)
            })
    }
    this.getGames = function getGames(cb) {
        $.get(url + game.id)
            .then(function(games) {
                localGames = games
                cb(localGames)
            })
    }

}