# Stats

This is sample leadership board application not intended to use for production.

Objective:
  - The stats are not fixed, stats can be added. Examples of stats are score, wins, losses, draws, kills, combos-used, progression, maps-played-count, etc Given a stat or a group of stats, the leaderboard service should build and return the leaderboard of all the players based on those stats. The leaderboard can be empty if no relevant stats are present. If the leaderboard is not empty, it should show the player (their unique id) and their stat values in columns, indescending order (highest stat value player first). For a group of stats, make sure the leaderboard is built with only players possessing values for all the specified stats in the group. Also, when specifying the group of stats, there should be an order of priority in which thestats are processed. For example, if the leaderboard is supposed to be built outof stats A, B and C, specifying the group as [B, C, A] would mean first compare players on B, then C and then A.

### Tech

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [redis] - Redis is an open source (BSD licensed), in-memory data structure store, used as a database

### Installation

Install the dependencies mentioned in tech and instantiate the app by npm install. 
check the keys.js file and mention the correct details here.
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
i dont recommand to use this code in production
```


In config.js you can maintain the configurations. “keys.js” is intended to use for passwords and keys. Committed post man collections to repo to test the Rest Api. Install Google chrome and install post man plugin and import the post man collections.  Add “stat route” is for adding the stats and “get lb” is to generate the leadership board. To get the leadership board of multiple stats you can use get params in the below format.

```
?name=combos&name=kills
```
Post requires json post in below format
```
{
	"name":"combos",
	"uid":"ED@ED.com",
	"value":"8"
}
```
-	name is name of the stat
-	uid is unique id for user it accepts only email id ( email@email.com ) for now.
-	value is actual value of the stat ( positive integer in string format ).


### Todos

 - Many items to-do
 - Need to handle negatives in scores
 - Injecting proper validations
 - Exposing services to state maintained protocols and socket.io
 

License
----

MIT



