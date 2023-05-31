---
name: JavaScript Snake Game
description: >-
    This is a DOM-based game of Snake that I wrote in JavaScript over a decade ago. It was made to have sort of a nostalgic feel to it.
contributors: 
  - name: patorjk
    avatar: https://avatars.githubusercontent.com/u/521224?s=64&v=4
  - name: yasharels
    avatar: https://avatars.githubusercontent.com/u/15703836?s=64&v=4
  - name: Rb64
    avatar: https://avatars.githubusercontent.com/u/91498309?s=64&v=4
  - name: legoman8304
    avatar: https://avatars.githubusercontent.com/u/43346988?s=64&v=4
  - name: dginovker
    avatar: https://avatars.githubusercontent.com/u/32943174?s=64&v=4
  - name: mamamia5x
    avatar: https://avatars.githubusercontent.com/u/57536929?s=64&v=4
  - name: ashishsiot
    avatar: https://avatars.githubusercontent.com/u/63919950?s=64&v=4
  - name: Coteh
    avatar: https://avatars.githubusercontent.com/u/3276350?s=64&v=4
  - name: yokesharun
    avatar: https://avatars.githubusercontent.com/u/12830078?s=64&v=4
  - name: Furtano
    avatar: https://avatars.githubusercontent.com/u/4115133?s=64&v=4
  - name: Thunderforge
    avatar: https://avatars.githubusercontent.com/u/6200170?s=64&v=4
language:
  - Javascript
  - CSS
  - HTML
star: '478'
fork: '601'
url: https://github.com/patorjk/JavaScript-Snake
banner: './image.png'
order: 3
---

# JavaScript Snake Game

This is a DOM-based game of Snake that I wrote in JavaScript over a decade ago. It was made to have sort of a nostalgic feel to it.

## Play and Edit the Game Online!

You can now play and edit the game live in codesandbox:

https://codesandbox.io/s/github/patorjk/JavaScript-Snake?file=/index.html

On first load sometimes the game frame will not load correctly and you'll need to press the refresh icon above its display panel to get the game to show. 

Original game is located here:

http://patorjk.com/games/snake


## How to use
The index.html file should give an idea of how to use this code. However, below you can see how to initialize it into any div within a webpage.

    var mySnakeBoard = new SNAKE.Board( {
        boardContainer: "game-area",
        fullScreen: false,
        width: 580,
        height:400
    });
                                    
The comments within the source code are formatted a little strange because at the time I was playing around with YUI Doc which generates documentation from code. Kind of sucks that there's so much churn in the JavaScript world. However, I'm glad the rest of the code doesn't use any external libraries, as this game still works the same after over a decade.