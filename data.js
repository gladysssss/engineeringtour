var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.18853213940461444,
        "pitch": 0.09054715668241187,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07340834018323861,
          "pitch": -0.41788897630268096,
          "rotation": 1.5707963267948966,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6060440311108977,
          "pitch": -0.05253539672049179,
          "title": "Faculty of Engineering",
          "text": "Welcome to the Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3253970012780947,
        "pitch": -0.25585855027970084,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7814919782546355,
          "pitch": 0.034202327576768,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.2862769360504096,
          "pitch": -0.033981393058653,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.31032495639592383,
          "pitch": -0.6302007636302669,
          "title": "Engineering Auditorium",
          "text": "This is the engineering auditorium where lectures are held.There are seats outside for students to study at as well as a cafe for a quick pick-me-up.Yum!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.119000170159689,
          "pitch": -0.0648412570024739,
          "rotation": 3.141592653589793,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.020047439077412577,
          "pitch": 0.27824656312853513,
          "title": "Engineering Atrium",
          "text": "The coffee is great and the place is air-conditioned."
        }
      ]
    }
  ],
  "name": "Faculty of EN",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
