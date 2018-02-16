function GameController() {
    var gameService = new gameService()


    function getGames() {
        gameService.getGames(draw)
    }

    this.createGame = function createGame(e) {
        event.preventDefault()
        var form = event.target
        gameService.createGame(form, draw)
        form.reset()
    }

    this.deleteGame = function deleteGame(id) {
        gameService.deleteGame(id, draw)
    }

    function draw(games) {
        var template = ''
        if (games.length < 1) {
            carsElem.innerHTML = '<h4> Sorry No Games To Continue, To Play Start A New Game </h4>'
            return
        }
        games.forEach(games => {
            template += ``
        })
    }





}