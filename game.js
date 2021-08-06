class Game 
{
    constructor(){}
getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value"), (data) => {
            gameState = data.val();
    }
     updateState(state)
     {
         database.ref('/').update({
                 gameState: state
         });
     }
     /*async start()
     {
         if(gameState === 0){
             
         }
     }*/

    }
}
