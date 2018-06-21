vDataJSON["umljs"]= {
  "data": {
    "classname": "JSONEditor4Code",
    "superclassname": "",
    "comment": "The class provides an constructor for a JSON Editor for Code Generation. The work is based on Jeremy Dorns great JSON editor. This class adds the HandleBars template engine for generation of source based on a UML class definition. ",
    "reposinfo": {
      "repository": "https://www.github.com/author/NewClass",
      "require_classes": "yes",
      "static": "no",
      "author": "My Name",
      "email": "name@example.com",
      "created": "23.04.2018",
      "modified": "01.05.2018",
      "requirelist": [
        "handlebars",
        "filesaver",
        "jquery"
      ]
    },
    "attributes": [
      {
        "visibility": "public",
        "name": "aEditor",
        "init": "new JSONEditor()",
        "class": "JSONEditor",
        "comment": "Contains the JSON Editor for handling the UML model for the class"
      },
      {
        "visibility": "public",
        "name": "aJSON",
        "init": "null",
        "class": "Hash",
        "comment": "contains the data submitted to the JSON Editor (via URL parameter/query string - which includes the list of classes that can be used in this class definition"
      },
      {
        "visibility": "public",
        "name": "aSchema",
        "init": "null",
        "class": "Hash",
        "comment": "This attribute contains the JSON Schema for the JSON Editor"
      },
      {
        "visibility": "public",
        "name": "aOptions",
        "init": "{}",
        "class": "Hash",
        "comment": "This attribute stores the options of the editor, e.g. the DOM id in which ethe editor will be injected in the DOM, the filename id, validator result, ...."
      }
    ],
    "methods": [
      {
        "visibility": "public",
        "name": "init",
        "parameter": [
          {
            "name": "pJSON",
            "class": "Hash",
            "comment": "the parameter stores JSON definition for the class"
          },
          {
            "name": "pOptions",
            "class": "Hash",
            "comment": "the parameter stores the options for the JSON editor (developed by Jeremy Dorn)"
          },
          {
            "name": "pSchema",
            "class": "Hash",
            "comment": "the parameter contains the JSON Schema for JSON Editor"
          },
          {
            "name": "pEditorID",
            "class": "String",
            "comment": "the parameter provide DOM ID in which the JSON editor will be injected."
          },
          {
            "name": "pFilenameID",
            "class": "String",
            "comment": "the parameter provide the ID of a DOM element in which the JSON Editor will write the file name of the loaded UML Class. "
          }
        ],
        "return": "",
        "comment": "the method initializes the JSON editor with the defined schema, updates the class selector in the schema with the classlist in JSON data. ",
        "code": "this.aJSON = pJSON;\nthis.aSchema = pSchema;\nthis.aOptions = pOptions || {};\nif (this.aOptions.hasOwnProperty(\"editor_id\")) {\n    console.log(\"Editor ID defined - [\"+this.aOptions.editor_id+\"]\")\n} else {\n    this.aOptions[\"editor_id\"] = \"editor_holder\";\n};\nif (this.aOptions.hasOwnProperty(\"validator_id\")) {\n    console.log(\"Validator ID defined - [\"+this.aOptions.validator_id+\"]\")\n} else {\n    this.aOptions[\"validator_id\"] = \"editor_holder\";\n};\nif (this.aOptions.hasOwnProperty(\"filename_id\")) {\n    console.log(\"Filename ID defined - [\"+this.aOptions.filename_id+\"]\")\n} else {\n    this.aOptions[\"filename_id\"] = \"load_filename\";\n};\nthis.update_schema();\nthis.create_editor();\n"
      },
      {
        "visibility": "public",
        "name": "update_schema",
        "parameter": [],
        "return": "Boolean",
        "comment": "User has update the list of classes and then the selector for classes in the editor must be updated. \nThis requires an update of the JSON editor and therefore a restart of the editor.",
        "code": "var vFilename = class2filename(this.aJSON.data.classname,\".json\");\n$('#'+this.aOptions.filename_id).html(vFilename);\nvar s = this.aJSON.settings;\nvar vRequired_Classes = concat_array(s.remoteclasslist,s.localclasslist);\n//console.log(\"vRequired_Classes: \"+vRequired_Classes.join(\",\"));\ns.classlist = concat_array(s.baseclasslist,vRequired_Classes);\n//console.log(\"vRequired_Classes: ('\"+s.classlist.join(\"','\")+\"')\");\ns.classlist.sort();\n// update the class selector in the schema with classes submitted to the editor by pJSON.\nthis.aSchema.definitions.selectorclass.enum = s.classlist;\n"
      },
      {
        "visibility": "public",
        "name": "create_editor",
        "parameter": [],
        "return": "",
        "comment": "the method performs ...",
        "code": "if (this.aEditor) {\n    // free some resources if the editor already exists\n    this.aEditor.destroy();\n};\nconsole.log(\"Start Editor with JSON:\\n\"+JSON.stringify(this.aJSON,null,3));\nvar vEditorNode = document.getElementById(this.aEditorID); \nthis.aEditor = new JSONEditor(vEditorDOM,{\n        // Enable fetching schemas via ajax\n        ajax: true,\n\n        // The schema for the editor\n        schema: this.aSchema,\n\n        // Seed the form with a starting value\n        startval: this.aJSON,\n        // Disable additional properties\n        no_additional_properties: true,\n\n        // Require all properties by default\n        required_by_default: true\n      });\nthis.set_event_handler();"
      },
      {
        "visibility": "public",
        "name": "set_event_handler",
        "parameter": [],
        "return": "",
        "comment": "the method sets the event handler for the onchange events and watch certain activities in the editor",
        "code": "// Hook up the validation indicator to update its\n// status whenever the editor changes\nvar vThis = this;\nthis.aEditor.on('change',function() {\n    vThis.validate_errors();\n    //update_editor();\n});"
      }
    ]
  },
  "settings": {
    "extension4code":".js",
    "classlist": [
      "",
      "App",
      "AppAbstract",
      "Array",
      "Boolean",
      "Float",
      "Function",
      "Hash",
      "Integer",
      "JSONEditor",
      "LinkParam",
      "Object",
      "RegularExp",
      "String"
    ],
    "localclasslist": [
      "App",
      "AppAbstract"
    ],
    "remoteclasslist": [
      "LinkParam",
      "JSONEditor"
    ],
    "baseclasslist": [
      "",
      "Array",
      "Boolean",
      "Float",
      "Function",
      "Hash",
      "Integer",
      "Object",
      "RegularExp",
      "String"
    ]
  }
}
