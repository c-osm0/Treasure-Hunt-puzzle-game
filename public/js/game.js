const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
var myaudio = new Audio('bgmusic.mp3');
const icons = document.getElementsByClassName("icons")
const volbtn = document.getElementById("volbtn")


myaudio.play();
function toggle() {
    if (myaudio.duration > 0 && !myaudio.paused) {
        // icons.innerHTML=""
        //Its playing...do your job
        myaudio.pause();

    } else {

        //Not playing...maybe paused, stopped or never played.
        myaudio.play();

    }
}
function rs() {

    canvas.width = 1400
    canvas.height = 600
    // canvas.height = 576

    const image = new Image()
    image.src = 'map1.png';
    // let displaytext = document.getElementsById("dis")

    let time = 0

    const collisionsMap = []
    const bluehouseMap = []
    const board1Map = []
    const greensqrMap = []
    const greentriMap = []
    const middleboardMap = []
    const person1Map = []
    const person2Map = []
    const portboardMap = []
    const redhouseMap = []
    const treasboardMap = []
    const treasureMap = []
    for (let i = 0; i < collisions.length; i += 185) {
        collisionsMap.push(collisions.slice(i, 185 + i))
        bluehouseMap.push(bluehouseData.slice(i, 185 + i))
        board1Map.push(board1Data.slice(i, 185 + i))
        greensqrMap.push(greensqrData.slice(i, 185 + i))
        greentriMap.push(greentriData.slice(i, 185 + i))
        middleboardMap.push(middleboardData.slice(i, 185 + i))
        person1Map.push(person1Data.slice(i, 185 + i))
        person2Map.push(person2Data.slice(i, 185 + i))
        portboardMap.push(portboardData.slice(i, 185 + i))
        redhouseMap.push(redhouseData.slice(i, 185 + i))
        treasboardMap.push(treasboardData.slice(i, 185 + i))
        treasureMap.push(treasureData.slice(i, 185 + i))
    }
    // console.log(bluehouseMap);
    const blueHouse = []
    const board1 = []
    const greensqr = []
    const greentri = []
    const middleboard = []
    const person1 = []
    const person2 = []
    const portboard = []
    const redhouse = []
    const treasboard = []
    const treasure = []
    const boundaries = []


    const offset = {
        x: -500,
        y: -525
    }




    collisionsMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    bluehouseMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                blueHouse.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    board1Map.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                board1.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    greensqrMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                greensqr.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    greentriMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                greentri.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    middleboardMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                middleboard.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    person1Map.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                person1.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    person2Map.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                person2.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    portboardMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                portboard.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    redhouseMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                redhouse.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    treasboardMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                treasboard.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })
    treasureMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 7723)
                treasure.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                )
        })
    })



    const playerDownImage = new Image()
    playerDownImage.src = 'playerDown.png'

    const playerUpImage = new Image()
    playerUpImage.src = 'playerUp.png'

    const playerLeftImage = new Image()
    playerLeftImage.src = 'playerLeft.png'

    const playerRightImage = new Image()
    playerRightImage.src = 'playerRight.png'
    const player = new Sprite({
        position: {
            x: 175,
            y: canvas.height / 2,
        },
        image: playerDownImage,
        frames: {
            max: 4
        },
        sprites: {
            up: playerUpImage,
            left: playerLeftImage,
            right: playerRightImage,
            down: playerDownImage
        }
    })

    const background = new Sprite({
        position: {
            x: offset.x,
            y: offset.y
        },
        image: image
    })



    const keys = {
        w: {
            pressed: false
        },
        a: {
            pressed: false
        },
        s: {
            pressed: false
        },
        d: {
            pressed: false
        }
    }

    const movables = [background, ...boundaries, ...blueHouse, ...board1, ...greensqr, ...greentri, ...middleboard, ...person1, ...person2, ...portboard, ...redhouse, ...treasboard, ...treasure]
    function rectangularCollision({ rectangle1, rectangle2 }) {
        return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
            rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
            rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
            rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
    }
    function animate() {
        window.requestAnimationFrame(animate)
        background.draw()
        boundaries.forEach(boundary => {
            boundary.draw()
        })
        blueHouse.forEach(boundary => {
            boundary.draw()
        })
        board1.forEach(boundary => {
            boundary.draw()
        })
        greensqr.forEach(boundary => {
            boundary.draw()
        })
        greentri.forEach(boundary => {
            boundary.draw()
        })
        middleboard.forEach(boundary => {
            boundary.draw()
        })
        person1.forEach(boundary => {
            boundary.draw()
        })
        person2.forEach(boundary => {
            boundary.draw()
        })
        portboard.forEach(boundary => {
            boundary.draw()
        })
        redhouse.forEach(boundary => {
            boundary.draw()
        })
        treasboard.forEach(boundary => {
            boundary.draw()
        })
        treasure.forEach(boundary => {
            boundary.draw()
        })
        // testBoundary.draw()
        function teleport() {

            let deltax = -2630 - background.position.x;
            let deltay = -1551 - background.position.y;
            // background.position.x = -2253;
            // background.position.y = -1165;
            movables.forEach(movable => {

                movable.position.x += deltax
                movable.position.y += deltay

            })
        }



        player.draw()
        let choice = 0;
        var c = 0;
        let count = 0;
        function action(c) {
            switch (c) {
                case 1:
                    document.getElementById("dis").innerHTML = "This sentence contains exactly threee erors!!!";
                    break;
                case 2:
                    document.getElementById("dis").innerHTML = "Whoever said that the definition of insanity is doing the same thing over and over again and expecting different results has obviously never had to reboot a computer.";
                    break;
                case 3:
                    document.getElementById("dis").innerHTML = "Life only gives you one chance to live so does this game.....";
                    break;
                case 4:
                    document.getElementById("dis").innerHTML = "One bad decision is enough to make your life hell they say!!";
                    break;
                case 5:
                    document.getElementById("dis").innerHTML = "Similar shapes dont go together";
                    break;
                case 6:
                    document.getElementById("dis").innerHTML = "Hmmm.... I don't know anything about secret code you are searching for";
                    break;
                case 7:
                    document.getElementById("dis").innerHTML = "Treasure?? I only know about Emerald which is said to be on the other side of this Island! I wish if i could hold some of it...";
                    break;
                case 8:
                    document.getElementById("dis").innerHTML = "One thing is common between GAME and WORK. Guess what?";
                    break;
                case 9:
                    document.getElementById("dis").innerHTML = "Welcome to RGB Island??";
                    break;
                case 10:
                    document.getElementById("dis").innerHTML = "You have reached end of the map!!Check if you are the one to be on the leaderboards....;)";

                    break;
                case 11:
                    document.getElementById("dis").innerHTML = "Way to other side. Press T to go other side of this Island";
                    window.addEventListener('keydown', (e) => { if (e.key === 't' || e.key === 'T') teleport(); })

                    break;
                default:
                    break;
            }
        }

        var coll = 0;
        if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
            for (let i = 0; i < blueHouse.length; i++) {
                const bluehouses = blueHouse[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: bluehouses
                })) {
                    coll = 1;
                    document.getElementById("dis").innerHTML = "Press I to interact!!";
                    // check = 1;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(1) });
                    // setTimeout(() => { document.getElementById("dis").innerHTML = "Control-- WASDI"; }, 4000)
                    break;
                }
                if (coll === 1) {
                    document.getElementById("dis").innerHTML = "Press I to interact when needed";
                    coll = 0;
                }
                // empty;
            }
            for (let i = 0; i < board1.length; i++) {
                const board1s = board1[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: board1s
                })) {
                    if (coll === 0)
                        document.getElementById("dis").innerHTML = "Press I to interact!!";
                    coll = 2;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(2) });
                    // setTimeout(() => { document.getElementById("dis").innerHTML = "Control-- WASDI"; }, 4000)
                    break;
                }
                if (coll === 2) {
                    document.getElementById("dis").innerHTML = "Press I to interact when needed";
                    coll = 0;
                }
                // empty;
            }
            for (let i = 0; i < greensqr.length; i++) {
                const greensqrs = greensqr[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: greensqrs
                })) {
                    if (coll === 0)
                        document.getElementById("dis").innerHTML = "Press I to interact!!";
                    coll = 3;
                    // check = 1;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(3) });
                    // setTimeout(() => { document.getElementById("dis").innerHTML = "Control-- WASDI"; }, 4000)
                    break;
                }
                if (coll === 3) {
                    document.getElementById("dis").innerHTML = "Press I to interact when needed";
                    coll = 0;
                }
                // empty;
            }
            for (let i = 0; i < greentri.length; i++) {
                const greentris = greentri[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: greentris
                })) {
                    if (coll === 0)
                        document.getElementById("dis").innerHTML = "Press I to interact!!";
                    coll = 4
                    // check = 1;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(4) });
                    // setTimeout(() => { document.getElementById("dis").innerHTML = "Control-- WASDI"; }, 4000)
                    break;
                }
                if (coll === 4) {
                    document.getElementById("dis").innerHTML = "Press I to interact when needed";
                    coll = 0;
                }
                // empty;
            }
            for (let i = 0; i < middleboard.length; i++) {
                const middleboards = middleboard[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: middleboards
                })) {
                    if (coll === 0)
                        document.getElementById("dis").innerHTML = "Press I to interact!!";
                    coll = 5;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(5) });
                    // setTimeout(() => { document.getElementById("dis").innerHTML = "Control-- WASDI"; }, 4000)
                    break;
                }
                if (coll === 5) {
                    document.getElementById("dis").innerHTML = "Press I to interact when needed";
                    coll = 0;
                }
                // empty;
            }
            for (let i = 0; i < person1.length; i++) {
                const person1s = person1[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: person1s
                })) {
                    if (coll === 0)
                        document.getElementById("dis").innerHTML = "Press I to interact!!";
                    coll = 6;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(6) });
                    // setTimeout(() => { document.getElementById("dis").innerHTML = "Control-- WASDI"; }, 4000)

                    break;
                }
                if (coll === 6) {
                    document.getElementById("dis").innerHTML = "Press I to interact when needed";
                    coll = 0;
                }
                // empty;


            }
            for (let i = 0; i < person2.length; i++) {
                const person2s = person2[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: person2s
                })) {
                    if (coll === 0)
                        document.getElementById("dis").innerHTML = "Press I to interact!!";
                    coll = 7;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(7) });
                    // setTimeout(() => { document.getElementById("dis").innerHTML = "Control-- WASDI"; }, 4000)
                    break;
                }
                if (coll === 7) {
                    document.getElementById("dis").innerHTML = "Press I to interact when needed";
                    coll = 0;
                }
                // empty;
                // coll=false;
                // document.getElementById("dis").innerHTML = "";
            }
            for (let i = 0; i < portboard.length; i++) {
                const portboards = portboard[i]
                while (rectangularCollision({
                    rectangle1: player,
                    rectangle2: portboards
                })) {

                    document.getElementById("dis").innerHTML = "Press I to interact!!";
                    window.addEventListener('keydown', (e) => {
                        if ((e.key === 'i' || e.key === 'I')) {
                            action(11)

                        }
                    })

                    setTimeout(() => { document.getElementById("dis").innerHTML = "Press I to interact when needed"; }, 4000)

                    break;
                }
                // empty;
            }
            for (let i = 0; i < redhouse.length; i++) {
                const redhouses = redhouse[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: redhouses
                })) {
                    document.getElementById("dis").innerHTML = "Press I to interact!!";
                    // check = 1;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(8) });
                    setTimeout(() => { document.getElementById("dis").innerHTML = "Press I to interact when needed"; }, 4000)
                    break;
                }
                // empty;
            }
            for (let i = 0; i < treasboard.length; i++) {
                const treasboards = treasboard[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: treasboards
                })) {
                    document.getElementById("dis").innerHTML = "Press I to interact!!";
                    // check = 1;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(9) });
                    setTimeout(() => { document.getElementById("dis").innerHTML = "Press I to interact when needed"; }, 4000)
                    break;
                }
                // empty;
            }
            for (let i = 0; i < treasure.length; i++) {
                const treasures = treasure[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: treasures
                })) {
                    document.getElementById("dis").innerHTML = "Press I to interact!!";
                    // check = 1;
                    window.addEventListener('keydown', (e) => { if (e.key === 'i' || e.key === 'I') action(10) });
                    setTimeout(() => { document.getElementById("dis").innerHTML = "Press I to interact when needed"; }, 4000)
                    break;
                }
                // empty;
            }
        }
        // setInterval(() =>  (background.position.x, background.position.y, boundaries), 1000);
        let moving = true;
        player.moving = false;
        if (keys.w.pressed && lastkey === 'w') {
            player.moving = true;
            player.image = player.sprites.up;
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3,
                        }
                    }
                })) {

                    moving = false;
                    break;
                }
            }
            if (moving)
                movables.forEach(movable => {
                    movable.position.y += 3
                })
        }
        // background.position.y += 3
        else if (keys.a.pressed && lastkey === 'a') {
            player.moving = true;
            player.image = player.sprites.left;
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })) {

                    moving = false;
                    break;
                }
            }
            if (moving)
                movables.forEach(movable => {
                    movable.position.x += 3
                })
        }
        // background.position.x += 3
        else if (keys.s.pressed && lastkey === 's') {
            player.moving = true;
            player.image = player.sprites.down;
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })) {

                    moving = false;
                    break;
                }
            }
            if (moving)
                movables.forEach(movable => {
                    movable.position.y -= 3
                })
        }
        // background.position.y -= 3
        else if (keys.d.pressed && lastkey === 'd') {
            player.moving = true;
            player.image = player.sprites.right;
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })) {

                    moving = false;
                    break;
                }
            }
            if (moving)
                movables.forEach(movable => {
                    movable.position.x -= 3
                })
        }
        // background.position.x -= 3

    }
    animate();

    let lastkey = ''
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'w': keys.w.pressed = true
                lastkey = 'w'
                break;
            case 'a': keys.a.pressed = true
                lastkey = 'a'
                break;
            case 's': keys.s.pressed = true
                lastkey = 's'
                break;
            case 'd': keys.d.pressed = true
                lastkey = 'd'
                break;
        }

    })

    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'w': keys.w.pressed = false
                break;
            case 'a': keys.a.pressed = false
                break;
            case 's': keys.s.pressed = false
                break;
            case 'd': keys.d.pressed = false
                break;
        }

    })
    setInterval(myTimer, 1000);
    // let w=0
    function myTimer() {
        time += 1;
        // if(w===0)
        document.getElementById("timer").innerHTML = time + " sec";
    }
    const api_url = "http://localhost:8800/api/users/checkuser";
    async function getapi(url) {

        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        var data = await response.json();

        if (data) {
            document.getElementById("user").innerHTML = "Username-> " + data["username"];

        }
    }
    getapi(api_url);
}
rs();
// function restart(){

// }
let url = "http://localhost:8800/api/users/checkauthentication"
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();


    (data.id)

}

getapi(url);
let posturl = "http://localhost:8800/api/users/updatescore"
window.post = function (url, data) {
    return fetch(posturl, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
}




function win() {
    var elem = prompt("Please enter your 3 digit passcode to win", "");
    if (elem === "412") {
        document.getElementById("dis").innerHTML = "Yes you are perfectly correct!! Thankyou for playing";
        let score = time;
        post("post/data/here", { "score": score });
        // alert("Congo...You won!!")
        // w=1
        document.getElementById("dis").innerHTML = "Game restarting in 5sec";
        setTimeout(function () {
            //your code to be executed after 1 second
            rs();
            document.getElementById("dis").innerHTML = "Welcome to Treasure Hunt Game!!! You need to find the password of treasure to win this game. Dont forget to look for clues while earching the password. Press W,A,S and D to move while I to interact with objects. Happy gaming!!!";
        }, 5000);
        rs();
    }
    else {
        document.getElementById("dis").innerHTML = "You lost!! Game restarting in 5sec";
        setTimeout(function () {
            //your code to be executed after 1 second
            rs();
            document.getElementById("dis").innerHTML = "Welcome to Treasure Hunt Game!!! You need to find the password of treasure to win this game. Dont forget to look for clues while earching the password. Press W,A,S and D to move while I to interact with objects. Happy gaming!!!";
        }, 5000);
    }
}



