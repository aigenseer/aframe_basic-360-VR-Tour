[
  {
  	"name":"mylocation", 
    "sky": "#img1",
    "rotation": "0 190 0",
    "e": [
      {
        "tag": "a-image",
        "id": "a1",
        "cursor-listener": true,
        "target": {
        	"id": "my_link_name1", 
        	"rotation": "-6.073 89.573 0"
        	},
        "data-type":  "link",
        "src":          "#arrow",
        "width":        "200",
        "height":       "100",
        "position":     "-0.873 -3.926 15.324",
        "rotation":     "71.9634990684314 0 0",
        "scale":        "-0.02 0.025 -4.43",
        "visible":      true,
        "material": {
        	"color":"#FFF",
        	"shader":"flat",
        	"side":"double",
        	"transparent":true,
        	"src": "#arrow"
        },
        "geometry": {
        	"primitive":"plane",
        	"width":200,
        	"height":100
        }
      },
      {
        "tag": "a-text",
        "id": "t1",
        "data-type":  "text",
        "font":     "kelsonsans",
        "width":    6,
        "position": "9.535 55.114 211.397",
        "rotation": "24.465 -171.544 5.099",
        "scale":    "50.618 30.457 871.994",
        "visible":  true,
        "text": {
        	"anchor":"align",
        	"width":6,
        	"font":"kelsonsans",
        	"value":"Altes Bruthaus"
        }
       },
       {
        "tag": "a-entity",
        "id": "a2",
        "cursor-listener": true,
        "data-type":  "link",
        "target": "eusserthal",
        "obj-model":    "obj: #arrow-obj; mtl: #arrow-mtl",
        "width":        200,
        "height":       100,
        "position":     "-17.381 -4.283 16.133",
        "rotation":     "10.829 122.269 -0.229",
        "scale":        "1 1 1",
        "visible":      true
      },
      {
        "tag": "a-video",
        "id": "v1",
        "cursor-listener": true,
        "data-type":  "video",
        "target": {
        	"id": "my_link_name", 
        	"rotation": "-6.073 89.573 0"
        	},
        "src":      "#video1",
        "width":    "16",
        "height":   "9",
        "position": "-21.763 0 -0.368",
        "rotation": "-0.4583662361046586 89.49600759943459 -0.2864788975654116",
        "scale":    "1 1 1",
        "visible":  true,
        "material": {
        	"color":"#FFF",
        	"shader":"flat",
        	"side":"double",
        	"transparent":true,
        	"src": "#video1"
        },
        "geometry": {
        	"primitive":"plane",
        	"width":16,
        	"height":9
        }
      }

    ],
    "assets":[
      {
        "tag": "img",
        "id": "img1",
        "src": "assets/eusserthal.jpg"
      },
      {
        "tag": "a-entity",
        "id": "a2",
        "cursor-listener": true,
        "data-type":  "link",
        "target": "eusserthal",
        "obj-model":    "obj: #arrow-obj; mtl: #arrow-mtl",
        "width":        "200",
        "height":       "100",
        "position":     "-17.381 -4.283 16.133",
        "rotation":     "10.829 122.269 -0.229",
        "scale":        "1 1 1",
        "visible":      true,
        "material":     ""
      },
      {
        "tag": "a-video",
        "id": "v1",
        "cursor-listener": true,
        "data-type":  "video",
        "target": {
        	"id": "my_link_name", 
        	"rotation": "-6.073 89.573 0"
        },
        "src":      "#video1",
        "width":    16,
        "height":   9,
        "position": "-21.763 0 -0.368",
        "rotation": "-0.4583662361046586 89.49600759943459 -0.2864788975654116",
        "scale":    "1 1 1",
        "visible":  true,
        "material": {
        	"color":"#FFF",
        	"shader":"flat",
        	"side":"double",
        	"transparent":true,
        	"src": "#video1"
        },
        "geometry": {
        	"primitive":"plane",
        	"width":16,
        	"height":9
        }
      }

    ]
  }
]
