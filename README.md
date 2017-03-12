# Stats

This is sample leadership board apllication not intended to use for prodcution.

Objective:
  - The stats are not fixed, stats can be added. Examples of stats are score, wins, losses, draws, kills, combos-used, progression, maps-played-count, etc Given a stat or a group of stats, the leaderboard service should build and return the leaderboard of all the players based on those stats. The leaderboard can be empty if no relevant stats are present. If the leaderboard is not empty, it should show the player (their unique id) and their stat values in columns, indescending order (highest stat value player first). For a group of stats, make sure the leaderboard is built with only players possessing values for all the specified stats in the group. Also, when specifying the group of stats, there should be an order of priority in which thestats are processed. For example, if the leaderboard is supposed to be built outof stats A, B and C, specifying the group as [B, C, A] would mean first compare players on B, then C and then A.

### Tech

Dillinger uses a number of open source projects to work properly:


* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [redis] - Redis is an open source (BSD licensed), in-memory data structure store, used as a database

### Installation

Install the dependencies mensioned in tech and instatiate the app by npm install. 
check the keys.js file and mesion the correct details here.
```sh
module.exports = {
    "DB":{
        "HOST":"xxxxx",//if you want you can load it from env vars
        "PORT":"xxxx",//if you want you can load it from env vars
        "PASSWORD":"xxxx" //if you want you can load it from env vars
    },
}
```

For production environments...

```sh
$ npm install --production
$ npm run predeploy
$ NODE_ENV=production node app
```

### Todos

 - lot to do
 - Injecting poper validations
 - Exposing services to state maintained protocals and socket.io
 

License
----

MIT



