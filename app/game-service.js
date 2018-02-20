function GameService() {
    var url = 'https://inspire-server.herokuapp.com/cards';
    var myGames = []

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
        $.post(url + ":" + gameId)
            .then(res => {
                localGames.unshift(res.data)
                cb(localGames)
            })
    }
    this.getGames = function getGames(cb) {
        $.get(url + game.id)
        console.log(games)
            .then(function(games) {
                localGames = games
                cb(localGames)
            })
    }

    this.deleteGame = function deleteGames(id, cb) {
        $.ajax({
                url: url + 'game.id',
                method: 'DELETE'
            })
            .then(res => {
                this.getGames(cb)
            })
    }

}