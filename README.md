
# Project Title

This Treasure Hunt Puzzle Game is an interactive game designed for players who enjoy solving puzzles and riddles while exploring virtual worlds. The objective of the game is to find hidden treasures and a specific code to acces it by solving a series of puzzles, riddles, and challenges.

The game consists of different clues, each with its own unique theme and puzzles. A player will start from one position in an isolated Island and as they progress through the game, they will face increasingly difficulties. The game is designed to keep players engaged, entertained, and challenged throughout the entire gameplay experience.


## API Reference

#### Register
```http
  POST /api/auth/register
```

#### Login
```http
  GET /api/auth/login
```

#### Admin info

```http
  POST /api/users/admin
```

#### Check for authentication

```http
  GET /api/users/checkuser
```

#### Get all users

```http
  GET /api/users/
```
### To update score of user after victory

```http
  GET /api/score/:id
```
### To get the game page after authentication

```http
  GET /api/game
```




## Deployment

To deploy this project run

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO`

`JWT`


## Features

- Consisting of more than 5 clues to win the game
- More than 2 deadends were corporated
- Admin Page to view detailed user analytics
- Fully authenticated and secure environment
- Cookies are used to save the game date

## Demo photos

![image](https://user-images.githubusercontent.com/100260435/232976001-8faab73c-4d1b-4901-b07b-6438dc1656bb.png)
![image](https://user-images.githubusercontent.com/100260435/232976078-8c089a8f-d883-4004-a9e5-ac05750f0898.png)
![image](https://user-images.githubusercontent.com/100260435/232975773-2a696740-3215-4357-80b7-715d0e86c3da.png)
![image](https://user-images.githubusercontent.com/100260435/232975841-f02b09a2-352c-457d-9022-5eef32bc4d53.png)
![image](https://user-images.githubusercontent.com/100260435/232975884-18067dc1-5391-43b0-9430-988ba52837e0.png)
![image](https://user-images.githubusercontent.com/100260435/232975940-98daccfb-1ba5-46b9-8548-e8aa939dae3b.png)

## Appendix

Any additional information goes here

 A: Technical Specifications

Programming Language: JavaScript, HTML5, CSS3
Frameworks/Libraries:  Bootstrap, Node.js
Backend Services: MongoDB
Version Control: Git, GitHub
## Authors

- [@aryan_raj](https://github.com/c-osm0)


## License

[MIT](https://choosealicense.com/licenses/mit/)

