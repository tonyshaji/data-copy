/**
 * @api {get} /home/feed  Get home feed
 * @apiName Get Get home feed
 * @apiGroup Home
 * @apiHeader {String} Authorization User's unique JWT Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU3ZjM3NmQ3OWY3OGY2NTg4MGY3MDU0MCJ9.CuwZr_7S9QU9Sui3WiHY42cSIg93HNPNJ-Dfq0r8IDI"
 *     }
 * @apiSuccess {Object} count count of objects
 * @apiSuccess {Object} data feed data
 * @apiSuccess {ObjectId} data._id id 
 * @apiSuccess {Object} data.tournament tournaments
 * @apiSuccess {ObjectId} data.tournament._id  id of tournament
 * @apiSuccess {String} data.tournament.name  name of tournament
 * @apiSuccess {Object} data.sport  sport object
 * @apiSuccess {ObjectId} data.sport._id id of sport
 * @apiSuccess {String} data.sport.img image of sport
 * @apiSuccess {String} data.sport.name name of sport
 * @apiSuccess {String} data.sport.key key of sport
 * @apiSuccess {Object} data.sport.category sport category
 * @apiSuccess {String} data.sport.category.sub sub category of sport
 * @apiSuccess {String} data.sport.category.main main category of sport
 * @apiSuccess {String} data.mType match Type
 * @apiSuccess {String} data.Type tournament Type
 * @apiSuccess {Date} data.updated updation date
 * @apiSuccess {Object} data.player player
 * @apiSuccess {ObjectId} data.player._id  id of player
 * @apiSuccess {String} data.player.name  name of player
 * @apiSuccess {String} data.player.img  image of player
 * @apiSuccess {String} data.player.username  image of username
 * @apiSuccess {Object[]} data.teams teams object 
 * @apiSuccess {Object} data.teams.team team object
 * @apiSuccess {ObjectId} data.teams.team._id  id of team
 * @apiSuccess {String} data.teams.team.name  name of team
 * @apiSuccess {String} data.teams.team.img  image of team
 * @apiSuccess {Object[]} data.teams.player players data
 * @apiSuccess {ObjectId} data.teams.player._id  id of player
 * @apiSuccess {String} data.teams.player.name  name of player
 * @apiSuccess {String} data.teams.player.img  image of player

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
*{
  "status": "success",
  "count": 15,
  "data": [
    {
      "_id": "58578a75b2e2020c521c1496",
      "tournament": {
        "_id": "58578886b2e2020c521c1495",
        "name": "ddddd"
      },
      "sport": {
        "_id": "5822e1da02b675ae118ec9a9",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Ffootball.png?alt=media&token=95fb750e-2ee1-4d62-80d3-e69e4cb2c65a",
        "name": "Football",
        "key": "football",
        "category": {
          "sub": "Football",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "group",
      "updated": "2016-12-19T07:21:25.345Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "58578a75b2e2020c521c1497",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            }
          ]
        },
        {
          "team": {
            "_id": "58240041038c16d012fe9473",
            "name": "Arsenal",
            "img": "https://4sportzdev.blob.core.windows.net/team/2df177614c361e8790e4d82323b10abf"
          },
          "_id": "58578a75b2e2020c521c1498",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            }
          ]
        }
      ]
    },
    {
      "_id": "585286577bd4f000117ab4c0",
      "sport": {
        "_id": "58479492e4776fc088b13128",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fvolleyball.png?alt=media&token=60b71f47-f971-48dd-a574-0175625bae28",
        "name": "Volleyball",
        "key": "volleyball",
        "category": {
          "sub": "Ball Over Net Games",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-15T12:02:31.595Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "584a3b66adff754c83ac48d5",
            "name": "Inmeik Volleyball Team"
          },
          "_id": "585286577bd4f000117ab4c2",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            }
          ]
        }
      ]
    },
    {
      "_id": "58490d6e2d0cafec71b4324e",
      "sport": {
        "_id": "58479492e4776fc088b13128",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fvolleyball.png?alt=media&token=60b71f47-f971-48dd-a574-0175625bae28",
        "name": "Volleyball",
        "key": "volleyball",
        "category": {
          "sub": "Ball Over Net Games",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-08T07:36:14.441Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "58453bbd4d96e8807d061938",
            "name": "Inmeik",
            "img": "https://4sportzdev.blob.core.windows.net/team/1d0fea7e6cbfda83b7c6d675c6c0be7c"
          },
          "_id": "58490d6e2d0cafec71b4324f",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            }
          ]
        },
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "58490d6e2d0cafec71b43250",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            }
          ]
        }
      ]
    },
    {
      "_id": "58490d462d0cafec71b43247",
      "sport": {
        "_id": "5847a1f3e4776fc088b13130",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fbasketball.png?alt=media&token=7b425230-615a-499a-8aa7-f8f6fd83c85d",
        "name": "Basketball",
        "key": "basketball",
        "category": {
          "sub": "Basketball",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-08T07:35:34.295Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "58453bbd4d96e8807d061938",
            "name": "Inmeik",
            "img": "https://4sportzdev.blob.core.windows.net/team/1d0fea7e6cbfda83b7c6d675c6c0be7c"
          },
          "_id": "58490d502d0cafec71b4324b",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            }
          ]
        },
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "58490d502d0cafec71b4324d",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            }
          ]
        }
      ]
    },
    {
      "_id": "5848f15d2d0cafec71b43238",
      "sport": {
        "_id": "58479492e4776fc088b13128",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fvolleyball.png?alt=media&token=60b71f47-f971-48dd-a574-0175625bae28",
        "name": "Volleyball",
        "key": "volleyball",
        "category": {
          "sub": "Ball Over Net Games",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-08T05:36:29.602Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "58453bbd4d96e8807d061938",
            "name": "Inmeik",
            "img": "https://4sportzdev.blob.core.windows.net/team/1d0fea7e6cbfda83b7c6d675c6c0be7c"
          },
          "_id": "5848f15d2d0cafec71b43239",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "5836a2ffb241c84444fc7352",
              "name": "Nithin Paul Cherian 2",
              "img": "https://4sportzdev.blob.core.windows.net/profile/b0a8f06feb380c46d59e7971e4929db0"
            }
          ]
        },
        {
          "team": {
            "_id": "58240041038c16d012fe9473",
            "name": "Arsenal",
            "img": "https://4sportzdev.blob.core.windows.net/team/2df177614c361e8790e4d82323b10abf"
          },
          "_id": "5848f15d2d0cafec71b4323a",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            }
          ]
        }
      ]
    },
    {
      "_id": "5847d78dc3305b2464886bbe",
      "sport": {
        "_id": "5822e1da02b675ae118ec9a9",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Ffootball.png?alt=media&token=95fb750e-2ee1-4d62-80d3-e69e4cb2c65a",
        "name": "Football",
        "key": "football",
        "category": {
          "sub": "Football",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-07T09:34:05.081Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "58453bbd4d96e8807d061938",
            "name": "Inmeik",
            "img": "https://4sportzdev.blob.core.windows.net/team/1d0fea7e6cbfda83b7c6d675c6c0be7c"
          },
          "_id": "5847d78dc3305b2464886bbf",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            }
          ]
        },
        {
          "team": {
            "_id": "582441299dfa8f90197cd28a",
            "name": "Inmeik Football Club",
            "img": "https://4sportzdev.blob.core.windows.net/team/9403c68dbeff695fd81ba5b0e9179ed7"
          },
          "_id": "5847d78dc3305b2464886bc0",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            }
          ]
        }
      ]
    },
    {
      "_id": "5847d042c3305b2464886bb6",
      "sport": {
        "_id": "5822e1da02b675ae118ec9a9",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Ffootball.png?alt=media&token=95fb750e-2ee1-4d62-80d3-e69e4cb2c65a",
        "name": "Football",
        "key": "football",
        "category": {
          "sub": "Football",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-07T09:02:58.537Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "58240041038c16d012fe9473",
            "name": "Arsenal",
            "img": "https://4sportzdev.blob.core.windows.net/team/2df177614c361e8790e4d82323b10abf"
          },
          "_id": "5847d042c3305b2464886bb7",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            }
          ]
        },
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "5847d042c3305b2464886bb8",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            }
          ]
        }
      ]
    },
    {
      "_id": "584671f639c8feb0492eb2ed",
      "sport": {
        "_id": "584525c24d96e8807d061936",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fbats-man.png?alt=media&token=48f1e5da-f014-420a-b961-bda56fc3ad5e",
        "name": "Cricket",
        "key": "cricket",
        "category": {
          "sub": "Cricket",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-06T08:08:22.162Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "5846720939c8feb0492eb2f1",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            }
          ]
        },
        {
          "team": {
            "_id": "58240041038c16d012fe9473",
            "name": "Arsenal",
            "img": "https://4sportzdev.blob.core.windows.net/team/2df177614c361e8790e4d82323b10abf"
          },
          "_id": "5846720939c8feb0492eb2f3",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            }
          ]
        }
      ]
    },
    {
      "_id": "584660f2198f29641e0f2f2a",
      "sport": {
        "_id": "584525c24d96e8807d061936",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fbats-man.png?alt=media&token=48f1e5da-f014-420a-b961-bda56fc3ad5e",
        "name": "Cricket",
        "key": "cricket",
        "category": {
          "sub": "Cricket",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-06T06:55:46.509Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "584660f2198f29641e0f2f2b",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            }
          ]
        },
        {
          "team": {
            "_id": "58453bbd4d96e8807d061938",
            "name": "Inmeik",
            "img": "https://4sportzdev.blob.core.windows.net/team/1d0fea7e6cbfda83b7c6d675c6c0be7c"
          },
          "_id": "584660f2198f29641e0f2f2c",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "5836a2ffb241c84444fc7352",
              "name": "Nithin Paul Cherian 2",
              "img": "https://4sportzdev.blob.core.windows.net/profile/b0a8f06feb380c46d59e7971e4929db0"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            },
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "58340ed1e870852044054522",
              "name": "Balagopal"
            },
            {
              "_id": "5836858ae91d084c59a04e7a",
              "name": "aneesh4sports",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f4a525e666b6f9cad85010f485facd7c"
            },
            {
              "_id": "5805f8becaabf8d840bbb218",
              "name": "annan"
            }
          ]
        }
      ]
    },
    {
      "_id": "58465eda198f29641e0f2f27",
      "sport": {
        "_id": "584525c24d96e8807d061936",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fbats-man.png?alt=media&token=48f1e5da-f014-420a-b961-bda56fc3ad5e",
        "name": "Cricket",
        "key": "cricket",
        "category": {
          "sub": "Cricket",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-06T06:46:50.697Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "58453bbd4d96e8807d061938",
            "name": "Inmeik",
            "img": "https://4sportzdev.blob.core.windows.net/team/1d0fea7e6cbfda83b7c6d675c6c0be7c"
          },
          "_id": "58465eda198f29641e0f2f28",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "5836a2ffb241c84444fc7352",
              "name": "Nithin Paul Cherian 2",
              "img": "https://4sportzdev.blob.core.windows.net/profile/b0a8f06feb380c46d59e7971e4929db0"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            },
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "58340ed1e870852044054522",
              "name": "Balagopal"
            },
            {
              "_id": "5836858ae91d084c59a04e7a",
              "name": "aneesh4sports",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f4a525e666b6f9cad85010f485facd7c"
            },
            {
              "_id": "5805f8becaabf8d840bbb218",
              "name": "annan"
            }
          ]
        },
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "58465eda198f29641e0f2f29",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            }
          ]
        }
      ]
    },
    {
      "_id": "58465e26198f29641e0f2f24",
      "sport": {
        "_id": "584525c24d96e8807d061936",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fbats-man.png?alt=media&token=48f1e5da-f014-420a-b961-bda56fc3ad5e",
        "name": "Cricket",
        "key": "cricket",
        "category": {
          "sub": "Cricket",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-06T06:43:50.647Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "58465e26198f29641e0f2f25",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            }
          ]
        },
        {
          "team": {
            "_id": "58240041038c16d012fe9473",
            "name": "Arsenal",
            "img": "https://4sportzdev.blob.core.windows.net/team/2df177614c361e8790e4d82323b10abf"
          },
          "_id": "58465e26198f29641e0f2f26",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            }
          ]
        }
      ]
    },
    {
      "_id": "58465c44198f29641e0f2f21",
      "sport": {
        "_id": "584525c24d96e8807d061936",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fbats-man.png?alt=media&token=48f1e5da-f014-420a-b961-bda56fc3ad5e",
        "name": "Cricket",
        "key": "cricket",
        "category": {
          "sub": "Cricket",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-06T06:35:48.914Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "58465c44198f29641e0f2f22",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            }
          ]
        },
        {
          "team": {
            "_id": "58240041038c16d012fe9473",
            "name": "Arsenal",
            "img": "https://4sportzdev.blob.core.windows.net/team/2df177614c361e8790e4d82323b10abf"
          },
          "_id": "58465c44198f29641e0f2f23",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            }
          ]
        }
      ]
    },
    {
      "_id": "58453c0b4d96e8807d061939",
      "sport": {
        "_id": "584525c24d96e8807d061936",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fbats-man.png?alt=media&token=48f1e5da-f014-420a-b961-bda56fc3ad5e",
        "name": "Cricket",
        "key": "cricket",
        "category": {
          "sub": "Cricket",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-12-05T10:06:03.019Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "58453bbd4d96e8807d061938",
            "name": "Inmeik",
            "img": "https://4sportzdev.blob.core.windows.net/team/1d0fea7e6cbfda83b7c6d675c6c0be7c"
          },
          "_id": "58453c0b4d96e8807d06193a",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            },
            {
              "_id": "5836a2ffb241c84444fc7352",
              "name": "Nithin Paul Cherian 2",
              "img": "https://4sportzdev.blob.core.windows.net/profile/b0a8f06feb380c46d59e7971e4929db0"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            },
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "58340ed1e870852044054522",
              "name": "Balagopal"
            }
          ]
        },
        {
          "team": {
            "_id": "582441299dfa8f90197cd28a",
            "name": "Inmeik Football Club",
            "img": "https://4sportzdev.blob.core.windows.net/team/9403c68dbeff695fd81ba5b0e9179ed7"
          },
          "_id": "58453c0b4d96e8807d06193b",
          "players": [
            {
              "_id": "5804c7de7b1a0b346016d00c",
              "name": "Monica Lewinsky",
              "img": "https://4sportzdev.blob.core.windows.net/profile/67d48f3853dd99902659b5072502507a"
            },
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            }
          ]
        }
      ]
    },
    {
      "_id": "5836d59d0d8007c03a534b09",
      "sport": {
        "_id": "5822e1da02b675ae118ec9a9",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Ffootball.png?alt=media&token=95fb750e-2ee1-4d62-80d3-e69e4cb2c65a",
        "name": "Football",
        "key": "football",
        "category": {
          "sub": "Football",
          "main": "Physical Sports"
        }
      },
      "mType": "team",
      "type": "single",
      "updated": "2016-11-24T11:57:17.292Z",
      "players": [],
      "teams": [
        {
          "team": {
            "_id": "582441299dfa8f90197cd28a",
            "name": "Inmeik Football Club",
            "img": "https://4sportzdev.blob.core.windows.net/team/9403c68dbeff695fd81ba5b0e9179ed7"
          },
          "_id": "5836d59d0d8007c03a534b0a",
          "players": [
            {
              "_id": "57f376d79f78f65880f70540",
              "name": "Nithin Paul Cherian",
              "img": "https://4sportzdev.blob.core.windows.net/profile/f3d0a0ab348b6f10120d707218f07f4d"
            }
          ]
        },
        {
          "team": {
            "_id": "582400d1038c16d012fe9474",
            "name": "Man United",
            "img": "https://4sportzdev.blob.core.windows.net/team/252b3d321ebeb3d43e06d5f71a6d2469"
          },
          "_id": "5836d59d0d8007c03a534b0b",
          "players": [
            {
              "_id": "57f37285f7b5809870d98beb",
              "name": "Royce Raju Beena",
              "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
              "isFollowing": true
            },
            {
              "_id": "57f37266f7b5809870d98bea",
              "name": "Royce Bro",
              "img": "https://4sportzdev.blob.core.windows.net/profile/aa97069770ae73e27d7036d61f91bb29"
            }
          ]
        }
      ]
    },
    {
      "_id": "5836d54d0d8007c03a534b05",
      "sport": {
        "_id": "58200c311b7b4cbc02915548",
        "img": "https://firebasestorage.googleapis.com/v0/b/sportz-2c0f3.appspot.com/o/Sports%2Fjudo.png?alt=media&token=fb0435e7-27d0-4a5a-9b2d-78bdf0d5d637",
        "name": "Judo",
        "key": "judo",
        "category": {
          "sub": "Combat and Martial Arts",
          "main": "Physical Sports"
        }
      },
      "mType": "player",
      "type": "single",
      "updated": "2016-11-24T11:55:57.355Z",
      "players": [
        {
          "_id": "58340ed1e870852044054522",
          "name": "Balagopal",
          "username": "bala"
        },
        {
          "_id": "57f37285f7b5809870d98beb",
          "name": "Royce Raju Beena",
          "username": "rrb",
          "img": "https://4sportzdev.blob.core.windows.net/profile/c99cf4d5151f017d0e88dd4f7867fa5d",
          "isFollowing": true
        }
      ],
      "teams": []
    }
  ]
}
 * @apiError NoFollowers  no followers for feed
 * @apiErrorExample Error-Response
 * HTTP /1.1 422 Unprocessable Entity
 *{
  "status": "failure",
  "message": "Please follow users to get updates"
}
 * @apiError  ErrorInFetching  error in fetching feed
 * @apiErrorExample Error-Response
 * HTTP /1.1 422 Unprocessable Entity
 *{
  "status": "failure",
  "message": "Error in fetching feed"
}

*/