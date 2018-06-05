var locations = [

  {
    name: "1",
    default: true,
    sky: '#sky1',
    rotation: "0 190 0",
    e: [
      //2pTo2
      {
        tag: 'a-image',
        id: '1p2',
        "cursor-listener": true,
        target: '{"id": "2", "rotation": "2.636 255.731 0"}',
        'data-type':  "link",
        src:          "#arrow",
        width:        "200",
        height:       "100",
        position:     "10.911 -5.138 14.001",
        rotation:     "-79.412 -57.353 -11.746",
        scale:        "-0.040 0.040 -4.430",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#arrow",
        geometry:     "primitive:plane;width:200;height:100"
      },
      //1a
      {
        tag: 'a-image',
        id: '1a',
        src:          "#logo",
        width:        "200",
        height:       "100",
        position:     "3.765 0.828 10.586",
        rotation:     "3.724 -158.938 1.490",
        scale:        "0.035 0.050 880.586",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#logo",
        geometry:     "primitive:plane;width:200;height:100"
      },
      //1ai
      {
        tag: 'a-image',
        id: '1ai',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "2.627 -1.527 7.413",
        rotation:     "3.724 -158.938 1.490",
        scale:        "0.004 0.007 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            position: "-0.026 1.669 0.386",
            width:      9,
            "wrap-count": 60.000,
            scale:    "0.713 0.671 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nEERES\n\nZur Infrastruktur gehören eine Forschungsstation, zwei Freilandlabore für Still- und Fließgewässer und verschiedene Stationen des Nature Labs;whiteSpace:normal;side:front;baseline:center;align:center"
          },
          {
            tag: 'a-image',
            src:      "#luftbild",

            visible:  "true",
            material: "color:#FFF;shader:flat;side:double;transparent:true;src:#luftbild",
            geometry: "primitive:plane;width:16;height:9",
            position: "-0.084 -0.534 0.083",
            scale:    "0.3 0.275 1.954"
          },
        ],
        'data-info-scal': "2.189 3.674 1.0",
      },
      //1b
      {
        tag: 'a-text',
        id: '1b',
        font:     "kelsonsans",
        width:    "6",
        position: "11.056 2.785 0.989",
        rotation: "-2.406 -115.508 -0.688",
        scale:    "1.173 2.263 880.586",
        visible:  "true",
        text: "anchor:center;width:6;font:kelsonsans;value:Seminarraum Freilandlabor\nStillgewaesser;whiteSpace:normal;side:front;baseline:center;align:center",
      },
      //1bi
      {
        tag: 'a-image',
        id:  '1bi',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "8.101 1.427 0.461",
        rotation:     "0 72.193 0",
        scale:        "-0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            width: 7,
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:6 Arbeitsplätze für Wissenschaftler und Werkstatt;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.588 1.825 1.0"
      },
      //1c
      {
        tag: 'a-text',
        id: '1c',
        'data-type':  "text",
        font:     "kelsonsans",
        width:    "6",
        position: "-8.344 1.795 3.648",
        rotation: "0.458 123.129 0.229",
        scale:    "1.077 2.068 880.586",
        visible:  "true",
        text: "anchor:center;width:6;font:kelsonsans;value:Forschungsstation;whiteSpace:normal;side:front;baseline:center;align:center"
      },
      //1ci
      {
        tag: 'a-image',
        id:  '1ci',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "-8.451 1.305 3.903",
        rotation:     "0 90.012 0",
        scale:        "0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            position: "-0.036 0.456 0.090",
            width: 7,
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nForschung\n\nDer Forschungsschwerpunkt von EERES liegt auf verschiedenen Aspekten anthropogener Einflüsse auf Gewässer;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.588 1.825 1.0"
      },
      //1d
      /*
      {
        tag: 'a-image',
        id:  '1d',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "4.899 0.421 -3.571",
        rotation:     "19.767 -87.777 -4.927",
        scale:        "0.003 0.003 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            width: 7,
            font:     "kelsonsans",
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:Die Stillgewässer-Station \"Gewässer-Praxis\" des Nature Labs;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.588 1.825 1.0"
      },*/

      //1e
      {
        tag: 'a-image',
        id:  '1e',
        src:          "#pic",
        width:        "200",
        height:       "100",
        position:     "-4.945 0.951 4.898",
        rotation:     "1.089 100.038 -6.360",
        scale:        "0.003 0.005 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#pic",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            width: 7,
            font:     "kelsonsans",
            position: "-0.026 1.669 0.386",
            scale:    "0.713 0.671 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:Wetterstation\n\nEine Wetterstation mißt kontinuierlich, relative Luftfeuchte, absoluten Luftdruck, Windrichtung, Windrichtung, Windgeschwindigkeit,  Niederschlag, Globalstrahlung, Bodentemperatur;whiteSpace:normal;side:front;baseline:center;align:center"
          },
          {
            tag: 'a-image',
            src:      "#wetterstation",
            visible:  "true",
            material: "color:#FFF;shader:flat;side:double;transparent:true;src:#wetterstation",
            geometry: "primitive:plane;width:16;height:9",
            position: "-0.084 -0.534 0.083",
            scale:    "0.370 0.275 1.954"
          },
        ],
        'data-info-scal': "2.189 3.674 1.0",
       },



      //1g
      {
        tag: 'a-text',
        id: '1g',
        font:     "kelsonsans",
        width:    "7",
        position: "8.967 3.396 5.141",
        rotation: "-4.641 -114.420 2.636",
        scale:    "1.173 2.263 880.586",
        visible:  "true",
        text: "anchor:center;width:6;font:kelsonsans;value:Altes Bruthaus;whiteSpace:normal;side:front;baseline:center;align:center",
      },
      //1gi
      {
        tag: 'a-image',
        id:  '1gi',
        src:          "#pic",
        width:        "200",
        height:       "100",
        position:     "5.438 1.604 3.062",
        rotation:     "0 69.156 0",
        scale:        "0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#pic",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            width: 8,
            "wrap-count": "50",
            font:     "kelsonsans",
            position: "-0.026 1.463 0.330",
            scale:    "0.713 0.671 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nAltes Bruthaus\n\nIm Alten Bruthaus ist eine Fließgerinneanlage mit 16 Rinnen installiert. Hier finden Untersuchungen zur Entwicklung von Gemeinschaften in Gewässern unter verschiedenen Umweltbedingungen (z.B. Temperatur, Strömungsgeschwindigkeit)  statt;whiteSpace:normal;side:front;baseline:center;align:center"
          },
          {
            tag:      'a-image',
            src:      "#bruthaus1",
            visible:  "true",
            material: "color:#FFF;shader:flat;side:double;transparent:true;src:#bruthaus1",
            geometry: "primitive:plane;width:16;height:9",
            position: "-1.493 -1.069 0.546",
            scale:    "0.150 0.203 1.954"
          },
          {
            tag:      'a-image',
            src:      "#bruthaus2",
            visible:  "true",
            material: "color:#FFF;shader:flat;side:double;transparent:true;src:#bruthaus2",
            geometry: "primitive:plane;width:16;height:9",
            position: "1.495 -1.065 0.452",
            scale:    "0.150 0.203 1.954"
          },
        ],
        'data-info-scal': "2.189 4.039 1.0",
      },
      //test
      /*
      {
        tag: 'a-image',
        id:  'test',
        src:          "#object",
        width:        "200",
        height:       "100",
        position:     "-3.371 -0.851 3.785",
        rotation:     "0 -40.000 0",
        scale:        "0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#object",
        geometry:     "primitive:plane;width:200;height:100",
        "cursor-listener": true,
        'data-type':  "url",
        traget: "sketchfab.html?id=fd4e847bd3a44fcf9aeead2f59afe966",
        returnbackParameter: true
      },
      */


    ],
    assets:[
      {
        tag: "img",
        id: "sky1",
        src: "assets/1/p1.jpg"
      },
      {
        tag: "img",
        id: "object",
        src: "assets/object.png"
      },
      {
        tag: "img",
        id: "info",
        src: "assets/info.png"
      },
      {
        tag: "img",
        id: "pic",
        src: "assets/pic.png"
      },
      {
        tag: "img",
        id: "video",
        src: "assets/video.png"
      },
      {
        tag: "img",
        id: "logo",
        src: "assets/1/eeres_logo.png"
      },
      {
        tag: "img",
        id: "luftbild",
        src: "assets/1/luftbild.png"
      },
      {
        tag: "img",
        id: "arrow",
        src: "assets/arrow.svg"
      },
      {
        tag: "img",
        id: "arrow_hover",
        src: "assets/arrow_hover.svg"
      },
      {
        tag: "img",
        id: "wetterstation",
        src: "assets/1/wetterstation.png"
      },
      {
        tag: "img",
        id: "bruthaus1",
        src: "assets/1/bruthaus1.jpg"
      },
      {
        tag: "img",
        id: "bruthaus2",
        src: "assets/1/bruthaus2.jpg"
      },

    ]
  },

  {
    name: "2",
    // default: true,
    sky: '#sky2',
    rotation: "0 190 0",
    e: [
      //2pTo1
      {
        tag: 'a-image',
        id: '2p1',
        "cursor-listener": true,
        target: '{"id": "1", "rotation": "0 116.846 0"}',
        'data-type':  "link",
        src:          "#arrow",
        width:        "200",
        height:       "100",
        position:     "-7.531 -8.228 5.451",
        rotation:     "-72.021 64.515 0.516",
        scale:        "-0.02 0.025 -4.43",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#arrow",
        geometry:     "primitive:plane;width:200;height:100"
      },
      //2a
      {
        tag: 'a-image',
        id:  '2a',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "7.122 -3.100 2.103",
        rotation:     "0 72.193 0",
        scale:        "-0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            width: 7,
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nBiofilm\n\nDas Biofilmwachstum wird in den Auenbecken auf künstlichen Substraten untersucht;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.588 1.825 1.0"
      },
      //2b
      {
        tag:          'a-image',
        id:           '2b',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "-3.357 -3.100 3.817",
        rotation:     "0 114.935 0",
        scale:        "0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            width: 7,
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nBenthos\n\nDurch eingebrachte Benthos-Fallen, wird die Entwicklung der benthischen Gemeinschaft in den Auen-Becken untersucht;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.588 1.825 1.0"
      },
      //2c
      {
        tag: 'a-image',
        id:  '2c',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "-0.816 -0.034 10.839",
        rotation:     "0 160.027 0",
        scale:        "0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            width: 7,
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:Der Wasserstand in den Auen-Becken wird für das Langzeitmonitoring konstant bei 30 cm gehalten. Die Wasserzuläufe und -abflüsse der Auen-Becken sind jedoch auch regelbar;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.588 1.825 1.0"
      },
      //2d
      {
        tag: 'a-image',
        id:  '2d',
        src:          "#pic",
        width:        "200",
        height:       "100",
        position:     "-1.420 -2.451 10.839",
        rotation:     "0 160.027 0",
        scale:        "0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#pic",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            width: 7,
            font:     "kelsonsans",
            position: "-0.026 1.669 0.386",
            scale:    "0.713 0.671 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nAbiotische Parameter\n\nIn den Auen-Becken werden u.a. der Sauerstoffgehalt, Temperatur und Lichtintensität kontinuierlich aufgenommen;whiteSpace:normal;side:front;baseline:center;align:center"
          },
          {
            tag: 'a-image',
            src:      "#data2d",
            visible:  "true",
            material: "color:#FFF;shader:flat;side:double;transparent:true;src:#data2d",
            geometry: "primitive:plane;width:16;height:9",
            position: "-0.084 -0.534 0.083",
            scale:    "0.320 0.275 1.954"
          },
        ],
        'data-info-scal': "2.189 3.674 1.0"
      },
      //2e
      {
        tag: 'a-image',
        id:  '2e',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "6.814 -0.835 -4.526",
        rotation:     "0 160.027 0",
        scale:        "-0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            width: 7,
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nZersetzung von Laubstreu\n\nDie Zersetzungsrate von Laubstreu wird sowohl im aquatischen wie auch im angrenzenden terrestrischen Bereich untersucht. Durch das Einbringen von Laub- bzw. Teebeuteln, kann die Aktivität von mikrobiellen Zersetzern sowie detritivoren Wirbellosen bestimmt werden;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.888 2.1 1.0"
      },
      //2f
      {
        tag: 'a-image',
        id:  '2f',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "3.103 -0.835 -9.844",
        rotation:     "0 160.027 0",
        scale:        "-0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            width: 7,
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nWasser-Land-Übergangsbereich\n\nAuf der Entwicklungsfläche wird die Entwicklungen der Pflanzen- und Laufkäfergemeinschaft untersucht ;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.588 1.825 1.0"
      },
      //2g
      {
        tag: 'a-image',
        id:  '2g',
        src:          "#object",
        width:        "200",
        height:       "100",
        position:     "3.370 -2.451 -4.354",
        rotation:     "0 160.027 0",
        scale:        "-0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#object",
        geometry:     "primitive:plane;width:200;height:100",
        "cursor-listener": true,
        'data-type':  "url",
        traget: "external.html?id=xy",
        "data-text": "Im Frühjahr laichen Grasfrösche in großen Abundanzen in den Auen-Becken ab. Es finden u.a. Untersuchungen zur Ernährungsökologie von Amphibienlarven in Stehgewässern auf EERES statt",
        returnbackParameter: true
      },
      //2h
      {
        tag: 'a-text',
        id: '2h',
        'data-type':  "text",
        font:     "kelsonsans",
        width:    "6",
        position: "-0.494 -0.894 2.877",
        rotation: "0 160.000 0",
        scale:    "0.800 1.2 880.586",
        visible:  "true",
        text: "anchor:center;width:6;font:kelsonsans;value:Auen-Becken;whiteSpace:normal;side:front;baseline:center;align:center"
      },
      //2hi
      {
        tag: 'a-image',
        id:  '2hi',
        src:          "#info",
        width:        "200",
        height:       "100",
        position:     "-0.081 -1.776 3.089",
        rotation:     "0 160.027 0",
        scale:        "0.003 0.004 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#info",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            width: 7,
            position: "-0.036 0.456 0.090",
            scale:    "0.713 0.713 0.844",
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nLangzeitmonitoring\n\nDie Initialphase der Ökosystementwicklung der 12 Auen-Becken nach einem genau definierbaren \"Punkt Null\" wird mittels eines umfangreichen Langzeit-Umweltmonitoringprogramm untersucht. Das Monitoring umfasst kontinuierliche oder regelmäßige Messungen unterschiedlicher abiotischer und biotischer Parameter;whiteSpace:normal;side:front;baseline:center;align:center"
          }
        ],
        'data-info-scal': "1.671 2.5 1.0"
      },
      //3e
      {
        tag: 'a-image',
        id:  '3e',
        src:          "#video",
        width:        "200",
        height:       "100",
        position:     "-13.402 1.305 2.201",
        rotation:     "-3.380 99.981 -0.630",
        scale:        "0.003 0.006 863.974",
        visible:      "true",
        material:     "color:#FFF;shader:flat;side:double;transparent:true;src:#video",
        geometry:     "primitive:plane;width:200;height:100",
        'data-type':  "info",
        "cursor-listener": true,
        'data-info-content': [
          {
            tag: 'a-text',
            font:     "kelsonsans",
            position: "-0.019 1.341 0.078",
            scale:    "0.713 0.612 0.844",
            width: 7,
            visible:  "true",
            text: "anchor:center;width:6;font:kelsonsans;value:\nFreilandlabor Stillgewässer\n\nDie Teiche der ehmaligen Fischzuchtanlage wurden im Rahmen der Aktion Blau Plus des Landes RLP renaturiert. Es wurden 12 steuerbare Auenretentionsbecken geschaffen, die Forschung zur den Themen Hochwasserschutz und der Auen-Ökologie ermöglichen;whiteSpace:normal;side:front;baseline:center;align:center"
          },
          {
            tag: 'a-video',
            src:      "#stillgewaesser_frueher",
            visible:  "true",
            material: "color:#FFF;shader:flat;side:double;transparent:true;src:#stillgewaesser_frueher",
            geometry: "primitive:plane;width:16;height:9",
            position: "-0.084 -0.940 0.115",
            scale:    "0.276 0.225 1.954"
          },
        ],
        'data-info-scal': "1.770 3.752 1.0",
      },


    ],
    assets:[
      {
        tag: "img",
        id: "sky2",
        src: "assets/2/p2.jpg"
      },
      {
        tag: "img",
        id: "data2d",
        src: "assets/2/Daten_2d.png"
      },
      {
        tag: "img",
        id: "grasfrosch",
        src: "assets/2/grasfrosch.png"
      },
      {
        tag: "video",
        id: "stillgewaesser_frueher",
        src: "assets/2/stillgewaesser_frueher.mp4",
        preload: 'auto',
        autoplay: true,
        loop: "true",
        playsinline: true,
        controls: true
      }
    ]
  }

]
