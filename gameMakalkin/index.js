

const game = document.getElementById('game')
const startBtn = document.querySelector('.start-btn')
const player = document.querySelector('.player')
const box = document.querySelector('.box')
const longBox = document.querySelector('.long-box')
const finish = document.querySelector('.finish')

const gameOverLose = document.getElementById('game-over-lose')
const gameOverWin = document.getElementById('game-over-win')





let jump = true

window.onclick = () => {
    
    if (jump) {
        player.style.transition = 'all 0.3s ease-out'
        player.style.marginTop = '100px'
        jump = false
    

        setTimeout(() => {
            player.style.transition = 'all 0.3s ease-in'
            player.style.marginTop = '220px'
        }, 300)

        setTimeout(() => {
            jump = true
        }, 600)
    }

}





startBtn.onclick = () => {
    startBtn.style.display = 'none'



    setInterval(() => {
        box.style.transition = 'all 2.5s linear';
        box.style.left = '-200px'
    }, 2500)


    setInterval(() => {
        box.style.transition = 'none';
        box.style.left = '110%'
    }, 5000)




    setInterval(() => {
        longBox.style.transition = 'all 2.5s linear';
        longBox.style.left = '-200px'
    }, 5000)


    setInterval(() => {
        longBox.style.transition = 'none';
        longBox.style.left = '110%'
    }, 7500)




    setInterval(() => {
        finish.style.transition = 'all 2.5s linear';
        finish.style.left = '-200px'
    }, 16000)



    player.setAttribute('class', 'player rotate')


}




let endGame = 'none'

setInterval(() => {


    if ( 

        (player.offsetTop > 242 && 
        box.offsetLeft > (player.offsetLeft - 80) &&
        box.offsetLeft < (player.offsetLeft + 60)) && 
        endGame === 'none'
        ||
        (player.offsetTop > 272 && 
        longBox.offsetLeft > (player.offsetLeft - 120) &&
        longBox.offsetLeft < (player.offsetLeft + 60)) &&
        endGame === 'none'
        
        ) {

        // LOSE

        endGame = 'lose'
        gameOverLose.style.display = 'block'

        setTimeout(() => {
            location.href = location.href
        }, 3000)

    }



    if (finish.offsetLeft < player.offsetLeft && endGame === 'none') {

        // WIN

        endGame = 'win'
        gameOverWin.style.display = 'block'

        setTimeout(() => {
            location.href = location.href
        }, 3000)

    }
        

}, 15);