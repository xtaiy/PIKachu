import string from "./css";

const player={
    n:1,
    time:100,
    id:undefined,
    ui:{
        demo:document.querySelector('#demo'),
        demo2:document.querySelector('#demo2')
    },
    events:{
        '#btnPause': 'pause',
        '#btnPlay': `play1`,
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    init:()=>{
        player.ui.demo.innerText=string.substring(0,player.n)
        player.ui.demo2.innerHTML=string.substring(0,player.n)
        player.bindEvents()
        player.play();
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value=player.events[key]
                document.querySelector(key).onclick=player[value]
            }
        }
    },
    run:()=>{
        player.n += 1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText=string.substring(0,player.n)
        player.ui.demo2.innerHTML=string.substring(0,player.n)
        player.ui.demo.scrollTop=player.ui.demo.scrollHeight
    },
    play:()=>{
        player.id=setInterval(player.run,player.time)
    },
    play1:()=>{
            player.pause()
            player.play()
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.time=300
        player.pause()
        player.play()
    },
    normal:()=>{
        player.time=100
        player.pause()
        player.play()
    },
    fast:()=>{
        player.time=0
        player.pause()
        player.play()
    }
}

player.init()

