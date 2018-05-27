vDataJSON["class_schema"] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": true,
    "title": "ARrame VR Tour",
    "definitions": {
        "comment": {
            "title": "Comment:",
            "type": "string",
            "format": "textarea",
            "default": ""
        },
        "yesno": {
            "default": "yes",
            "type": "string",
            "enum": [
                "yes",
                "no"
            ]
        }
    },
    "type": "array",
    "id": "https://niebert.github.io/json-editor",
    "format": "tabs",
    "options": {
        "disable_collapse": false,
        "disable_array_add": false,
        "disable_array_delete": false,
        "disable_array_reorder": false,
        "disable_properties": false,
        "hidden": false
    },
    "items": {
        "type": "object",
        "id": "/items",
        "title": "Locations",
        "options": {
            "disable_collapse": false,
            "disable_edit_json": false,
            "disable_properties": false,
            "hidden": false
        },
        "defaultProperties": [
            "name",
            "sky",
            "rotation",
            "e",
            "assets"
        ],
        "properties": {
            "name": {
                "type": "string",
                "id": "/items/properties/name",
                "title": "Name",
                "default": "mylocation",
                "format": "text",
                "description": "Description for 'name' Type: 'string' Path: '/items/properties/name'",
                "options": {
                    "hidden": false
                },
                "propertyOrder": 10
            },
            "sky": {
                "type": "string",
                "id": "/items/properties/sky",
                "title": "Sky",
                "default": "#img1",
                "format": "text",
                "description": "Description for 'sky' Type: 'string' Path: '/items/properties/sky'",
                "options": {
                    "hidden": false
                },
                "propertyOrder": 20
            },
            "rotation": {
                "type": "string",
                "id": "/items/properties/rotation",
                "title": "Rotation",
                "default": "0 190 0",
                "format": "text",
                "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/rotation'",
                "options": {
                    "hidden": false
                },
                "propertyOrder": 30
            },
            "e": {
                "type": "array",
                "id": "/items/properties/e",
                "title": "Elements at Location",
                "format": "tabs",
                "options": {
                    "disable_collapse": false,
                    "disable_array_add": false,
                    "disable_array_delete": false,
                    "disable_array_reorder": false,
                    "disable_properties": false,
                    "hidden": false
                },
                "items": {
                    "headerTemplate": "{{i1}} {{self.tag}}",
                    "oneOf": [
                        {
                            "type": "object",
                            "id": "/items/properties/e/oneof0",
                            "title": "a-image",
                            "options": {
                                "disable_collapse": false,
                                "disable_edit_json": false,
                                "disable_properties": false,
                                "hidden": false
                            },
                            "defaultProperties": [
                                "tag",
                                "id",
                                "cursor-listener",
                                "target",
                                "data-type",
                                "src",
                                "width",
                                "height",
                                "position",
                                "rotation",
                                "scale",
                                "visible",
                                "material",
                                "geometry"
                            ],
                            "properties": {
                                "tag": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/tag",
                                    "title": "Tag",
                                    "default": "a-image",
                                    "format": "text",
                                    "description": "Description for 'tag' Type: 'string' Path: '/items/properties/e/items/properties/tag'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 10
                                },
                                "id": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/id",
                                    "title": "ID",
                                    "default": "a1",
                                    "format": "text",
                                    "description": "Description for 'id' Type: 'string' Path: '/items/properties/e/items/properties/id'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 20
                                },
                                "cursor-listener": {
                                    "type": "boolean",
                                    "id": "/items/properties/e/items/properties/cursor-listener",
                                    "title": "Cursor Listener",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'cursor-listener'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 30
                                },
                                "target": {
                                    "type": "object",
                                    "id": "/items/properties/e/items/properties/target",
                                    "title": "Target",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "id",
                                        "rotation"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/target/properties/id",
                                            "title": "Id",
                                            "default": "my_link_name1",
                                            "format": "text",
                                            "description": "Description for 'id' Type: 'string' Path: '/items/properties/e/items/properties/target/properties/id'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "rotation": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/target/properties/rotation",
                                            "title": "Rotation",
                                            "default": "-6.073 89.573 0",
                                            "format": "text",
                                            "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/e/items/properties/target/properties/rotation'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        }
                                    },
                                    "propertyOrder": 40
                                },
                                "data-type": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/data-type",
                                    "title": "Data Type",
                                    "default": "link",
                                    "format": "text",
                                    "description": "Description for 'data-type' Type: 'string' Path: '/items/properties/e/items/properties/data-type'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 50
                                },
                                "src": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/src",
                                    "title": "Src",
                                    "default": "#arrow",
                                    "format": "text",
                                    "description": "Description for 'src' Type: 'string' Path: '/items/properties/e/items/properties/src'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 60
                                },
                                "width": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/width",
                                    "title": "Width",
                                    "default": "200",
                                    "format": "text",
                                    "description": "Description for 'width' Type: 'string' Path: '/items/properties/e/items/properties/width'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 70
                                },
                                "height": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/height",
                                    "title": "Height",
                                    "default": "100",
                                    "format": "text",
                                    "description": "Description for 'height' Type: 'string' Path: '/items/properties/e/items/properties/height'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 80
                                },
                                "position": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/position",
                                    "title": "Position",
                                    "default": "-0.873 -3.926 15.324",
                                    "format": "text",
                                    "description": "Description for 'position' Type: 'string' Path: '/items/properties/e/items/properties/position'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 90
                                },
                                "rotation": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/rotation",
                                    "title": "Rotation",
                                    "default": "71.9634990684314 0 0",
                                    "format": "text",
                                    "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/e/items/properties/rotation'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 100
                                },
                                "scale": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/scale",
                                    "title": "Scale",
                                    "default": "-0.02 0.025 -4.43",
                                    "format": "text",
                                    "description": "Description for 'scale' Type: 'string' Path: '/items/properties/e/items/properties/scale'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 110
                                },
                                "visible": {
                                    "type": "boolean",
                                    "id": "/items/properties/e/items/properties/visible",
                                    "title": "Visible",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'visible'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 120
                                },
                                "material": {
                                    "type": "object",
                                    "id": "/items/properties/e/items/properties/material",
                                    "title": "Material",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "color",
                                        "shader",
                                        "side",
                                        "transparent",
                                        "src"
                                    ],
                                    "properties": {
                                        "color": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/color",
                                            "title": "Color",
                                            "default": "#FFF",
                                            "format": "text",
                                            "description": "Description for 'color' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/color'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "shader": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/shader",
                                            "title": "Shader",
                                            "default": "flat",
                                            "format": "text",
                                            "description": "Description for 'shader' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/shader'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        },
                                        "side": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/side",
                                            "title": "Side",
                                            "default": "double",
                                            "format": "text",
                                            "description": "Description for 'side' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/side'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 30
                                        },
                                        "transparent": {
                                            "type": "boolean",
                                            "id": "/items/properties/e/items/properties/material/properties/transparent",
                                            "title": "Transparent",
                                            "format": "checkbox",
                                            "default": true,
                                            "description": "A description for 'transparent'  Type: 'boolean'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 40
                                        },
                                        "src": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/src",
                                            "title": "Src",
                                            "default": "#arrow",
                                            "format": "text",
                                            "description": "Description for 'src' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/src'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 50
                                        }
                                    },
                                    "propertyOrder": 130
                                },
                                "geometry": {
                                    "type": "object",
                                    "id": "/items/properties/e/items/properties/geometry",
                                    "title": "Geometry",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "primitive",
                                        "width",
                                        "height"
                                    ],
                                    "properties": {
                                        "primitive": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/geometry/properties/primitive",
                                            "title": "Primitive",
                                            "default": "plane",
                                            "format": "text",
                                            "description": "Description for 'primitive' Type: 'string' Path: '/items/properties/e/items/properties/geometry/properties/primitive'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "width": {
                                            "type": "integer",
                                            "id": "/items/properties/e/items/properties/geometry/properties/width",
                                            "title": "Width",
                                            "default": 200,
                                            "description": "A description for 'width'  Type: 'integer'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        },
                                        "height": {
                                            "type": "integer",
                                            "id": "/items/properties/e/items/properties/geometry/properties/height",
                                            "title": "Height",
                                            "default": 100,
                                            "description": "A description for 'height'  Type: 'integer'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 30
                                        }
                                    },
                                    "propertyOrder": 140
                                }
                            }
                        },
                        {
                            "type": "object",
                            "id": "/items/properties/e/oneof1",
                            "title": "Tag a-text",
                            "options": {
                                "disable_collapse": false,
                                "disable_edit_json": false,
                                "disable_properties": false,
                                "hidden": false
                            },
                            "defaultProperties": [
                                "tag",
                                "id",
                                "data-type",
                                "font",
                                "width",
                                "position",
                                "rotation",
                                "scale",
                                "visible",
                                "text"
                            ],
                            "properties": {
                                "tag": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/tag",
                                    "title": "Tag",
                                    "default": "a-text",
                                    "format": "text",
                                    "description": "Description for 'tag' Type: 'string' Path: '/items/properties/e/items/properties/tag'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 10
                                },
                                "id": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/id",
                                    "title": "Id",
                                    "default": "t1",
                                    "format": "text",
                                    "description": "Description for 'id' Type: 'string' Path: '/items/properties/e/items/properties/id'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 20
                                },
                                "data-type": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/data-type",
                                    "title": "Data Type",
                                    "default": "text",
                                    "format": "text",
                                    "description": "Description for 'data-type' Type: 'string' Path: '/items/properties/e/items/properties/data-type'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 30
                                },
                                "font": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/font",
                                    "title": "Font",
                                    "default": "kelsonsans",
                                    "format": "text",
                                    "description": "Description for 'font' Type: 'string' Path: '/items/properties/e/items/properties/font'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 40
                                },
                                "width": {
                                    "type": "integer",
                                    "id": "/items/properties/e/items/properties/width",
                                    "title": "Width",
                                    "default": 6,
                                    "description": "A description for 'width'  Type: 'integer'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 50
                                },
                                "position": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/position",
                                    "title": "Position",
                                    "default": "9.535 55.114 211.397",
                                    "format": "text",
                                    "description": "Description for 'position' Type: 'string' Path: '/items/properties/e/items/properties/position'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 60
                                },
                                "rotation": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/rotation",
                                    "title": "Rotation",
                                    "default": "24.465 -171.544 5.099",
                                    "format": "text",
                                    "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/e/items/properties/rotation'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 70
                                },
                                "scale": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/scale",
                                    "title": "Scale",
                                    "default": "50.618 30.457 871.994",
                                    "format": "text",
                                    "description": "Description for 'scale' Type: 'string' Path: '/items/properties/e/items/properties/scale'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 80
                                },
                                "visible": {
                                    "type": "boolean",
                                    "id": "/items/properties/e/items/properties/visible",
                                    "title": "Visible",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'visible'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 90
                                },
                                "text": {
                                    "type": "object",
                                    "id": "/items/properties/e/items/properties/text",
                                    "title": "Text",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "anchor",
                                        "width",
                                        "font",
                                        "value"
                                    ],
                                    "properties": {
                                        "anchor": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/text/properties/anchor",
                                            "title": "Anchor",
                                            "default": "align",
                                            "format": "text",
                                            "description": "Description for 'anchor' Type: 'string' Path: '/items/properties/e/items/properties/text/properties/anchor'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "width": {
                                            "type": "integer",
                                            "id": "/items/properties/e/items/properties/text/properties/width",
                                            "title": "Width",
                                            "default": 6,
                                            "description": "A description for 'width'  Type: 'integer'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        },
                                        "font": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/text/properties/font",
                                            "title": "Font",
                                            "default": "kelsonsans",
                                            "format": "text",
                                            "description": "Description for 'font' Type: 'string' Path: '/items/properties/e/items/properties/text/properties/font'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 30
                                        },
                                        "value": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/text/properties/value",
                                            "title": "Value",
                                            "default": "Altes Bruthaus",
                                            "format": "text",
                                            "description": "Description for 'value' Type: 'string' Path: '/items/properties/e/items/properties/text/properties/value'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 40
                                        }
                                    },
                                    "propertyOrder": 100
                                }
                            }
                        },
                        {
                            "type": "object",
                            "id": "/items/properties/e/oneof2",
                            "title": "Cursor Listener",
                            "options": {
                                "disable_collapse": false,
                                "disable_edit_json": false,
                                "disable_properties": false,
                                "hidden": false
                            },
                            "defaultProperties": [
                                "tag",
                                "id",
                                "cursor-listener",
                                "data-type",
                                "target",
                                "obj-model",
                                "width",
                                "height",
                                "position",
                                "rotation",
                                "scale",
                                "visible"
                            ],
                            "properties": {
                                "tag": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/tag",
                                    "title": "Tag",
                                    "default": "a-entity",
                                    "format": "text",
                                    "description": "Description for 'tag' Type: 'string' Path: '/items/properties/e/items/properties/tag'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 10
                                },
                                "id": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/id",
                                    "title": "Id",
                                    "default": "a2",
                                    "format": "text",
                                    "description": "Description for 'id' Type: 'string' Path: '/items/properties/e/items/properties/id'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 20
                                },
                                "cursor-listener": {
                                    "type": "boolean",
                                    "id": "/items/properties/e/items/properties/cursor-listener",
                                    "title": "Cursor Listener",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'cursor-listener'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 30
                                },
                                "data-type": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/data-type",
                                    "title": "Data Type",
                                    "default": "link",
                                    "format": "text",
                                    "description": "Description for 'data-type' Type: 'string' Path: '/items/properties/e/items/properties/data-type'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 40
                                },
                                "target": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/target",
                                    "title": "Target",
                                    "default": "eusserthal",
                                    "format": "text",
                                    "description": "Description for 'target' Type: 'string' Path: '/items/properties/e/items/properties/target'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 50
                                },
                                "obj-model": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/obj-model",
                                    "title": "Obj Model",
                                    "default": "obj: #arrow-obj; mtl: #arrow-mtl",
                                    "format": "text",
                                    "description": "Description for 'obj-model' Type: 'string' Path: '/items/properties/e/items/properties/obj-model'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 60
                                },
                                "width": {
                                    "type": "integer",
                                    "id": "/items/properties/e/items/properties/width",
                                    "title": "Width",
                                    "default": 200,
                                    "description": "A description for 'width'  Type: 'integer'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 70
                                },
                                "height": {
                                    "type": "integer",
                                    "id": "/items/properties/e/items/properties/height",
                                    "title": "Height",
                                    "default": 100,
                                    "description": "A description for 'height'  Type: 'integer'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 80
                                },
                                "position": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/position",
                                    "title": "Position",
                                    "default": "-17.381 -4.283 16.133",
                                    "format": "text",
                                    "description": "Description for 'position' Type: 'string' Path: '/items/properties/e/items/properties/position'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 90
                                },
                                "rotation": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/rotation",
                                    "title": "Rotation",
                                    "default": "10.829 122.269 -0.229",
                                    "format": "text",
                                    "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/e/items/properties/rotation'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 100
                                },
                                "scale": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/scale",
                                    "title": "Scale",
                                    "default": "1 1 1",
                                    "format": "text",
                                    "description": "Description for 'scale' Type: 'string' Path: '/items/properties/e/items/properties/scale'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 110
                                },
                                "visible": {
                                    "type": "boolean",
                                    "id": "/items/properties/e/items/properties/visible",
                                    "title": "Visible",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'visible'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 120
                                }
                            }
                        },
                        {
                            "type": "object",
                            "id": "/items/properties/e/oneof3",
                            "title": "Title array3 /items/properties/e",
                            "options": {
                                "disable_collapse": false,
                                "disable_edit_json": false,
                                "disable_properties": false,
                                "hidden": false
                            },
                            "defaultProperties": [
                                "tag",
                                "id",
                                "cursor-listener",
                                "data-type",
                                "target",
                                "src",
                                "width",
                                "height",
                                "position",
                                "rotation",
                                "scale",
                                "visible",
                                "material",
                                "geometry"
                            ],
                            "properties": {
                                "tag": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/tag",
                                    "title": "Tag",
                                    "default": "a-video",
                                    "format": "text",
                                    "description": "Description for 'tag' Type: 'string' Path: '/items/properties/e/items/properties/tag'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 10
                                },
                                "id": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/id",
                                    "title": "Id",
                                    "default": "v1",
                                    "format": "text",
                                    "description": "Description for 'id' Type: 'string' Path: '/items/properties/e/items/properties/id'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 20
                                },
                                "cursor-listener": {
                                    "type": "boolean",
                                    "id": "/items/properties/e/items/properties/cursor-listener",
                                    "title": "Cursor Listener",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'cursor-listener'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 30
                                },
                                "data-type": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/data-type",
                                    "title": "Data Type",
                                    "default": "video",
                                    "format": "text",
                                    "description": "Description for 'data-type' Type: 'string' Path: '/items/properties/e/items/properties/data-type'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 40
                                },
                                "target": {
                                    "type": "object",
                                    "id": "/items/properties/e/items/properties/target",
                                    "title": "Target",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "id",
                                        "rotation"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/target/properties/id",
                                            "title": "Id",
                                            "default": "my_link_name",
                                            "format": "text",
                                            "description": "Description for 'id' Type: 'string' Path: '/items/properties/e/items/properties/target/properties/id'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "rotation": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/target/properties/rotation",
                                            "title": "Rotation",
                                            "default": "-6.073 89.573 0",
                                            "format": "text",
                                            "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/e/items/properties/target/properties/rotation'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        }
                                    },
                                    "propertyOrder": 50
                                },
                                "src": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/src",
                                    "title": "Src",
                                    "default": "#video1",
                                    "format": "text",
                                    "description": "Description for 'src' Type: 'string' Path: '/items/properties/e/items/properties/src'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 60
                                },
                                "width": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/width",
                                    "title": "Width",
                                    "default": "16",
                                    "format": "text",
                                    "description": "Description for 'width' Type: 'string' Path: '/items/properties/e/items/properties/width'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 70
                                },
                                "height": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/height",
                                    "title": "Height",
                                    "default": "9",
                                    "format": "text",
                                    "description": "Description for 'height' Type: 'string' Path: '/items/properties/e/items/properties/height'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 80
                                },
                                "position": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/position",
                                    "title": "Position",
                                    "default": "-21.763 0 -0.368",
                                    "format": "text",
                                    "description": "Description for 'position' Type: 'string' Path: '/items/properties/e/items/properties/position'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 90
                                },
                                "rotation": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/rotation",
                                    "title": "Rotation",
                                    "default": "-0.4583662361046586 89.49600759943459 -0.2864788975654116",
                                    "format": "text",
                                    "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/e/items/properties/rotation'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 100
                                },
                                "scale": {
                                    "type": "string",
                                    "id": "/items/properties/e/items/properties/scale",
                                    "title": "Scale",
                                    "default": "1 1 1",
                                    "format": "text",
                                    "description": "Description for 'scale' Type: 'string' Path: '/items/properties/e/items/properties/scale'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 110
                                },
                                "visible": {
                                    "type": "boolean",
                                    "id": "/items/properties/e/items/properties/visible",
                                    "title": "Visible",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'visible'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 120
                                },
                                "material": {
                                    "type": "object",
                                    "id": "/items/properties/e/items/properties/material",
                                    "title": "Material",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "color",
                                        "shader",
                                        "side",
                                        "transparent",
                                        "src"
                                    ],
                                    "properties": {
                                        "color": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/color",
                                            "title": "Color",
                                            "default": "#FFF",
                                            "format": "text",
                                            "description": "Description for 'color' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/color'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "shader": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/shader",
                                            "title": "Shader",
                                            "default": "flat",
                                            "format": "text",
                                            "description": "Description for 'shader' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/shader'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        },
                                        "side": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/side",
                                            "title": "Side",
                                            "default": "double",
                                            "format": "text",
                                            "description": "Description for 'side' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/side'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 30
                                        },
                                        "transparent": {
                                            "type": "boolean",
                                            "id": "/items/properties/e/items/properties/material/properties/transparent",
                                            "title": "Transparent",
                                            "format": "checkbox",
                                            "default": true,
                                            "description": "A description for 'transparent'  Type: 'boolean'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 40
                                        },
                                        "src": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/material/properties/src",
                                            "title": "Src",
                                            "default": "#video1",
                                            "format": "text",
                                            "description": "Description for 'src' Type: 'string' Path: '/items/properties/e/items/properties/material/properties/src'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 50
                                        }
                                    },
                                    "propertyOrder": 130
                                },
                                "geometry": {
                                    "type": "object",
                                    "id": "/items/properties/e/items/properties/geometry",
                                    "title": "Geometry",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "primitive",
                                        "width",
                                        "height"
                                    ],
                                    "properties": {
                                        "primitive": {
                                            "type": "string",
                                            "id": "/items/properties/e/items/properties/geometry/properties/primitive",
                                            "title": "Primitive",
                                            "default": "plane",
                                            "format": "text",
                                            "description": "Description for 'primitive' Type: 'string' Path: '/items/properties/e/items/properties/geometry/properties/primitive'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "width": {
                                            "type": "integer",
                                            "id": "/items/properties/e/items/properties/geometry/properties/width",
                                            "title": "Width",
                                            "default": 16,
                                            "description": "A description for 'width'  Type: 'integer'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        },
                                        "height": {
                                            "type": "integer",
                                            "id": "/items/properties/e/items/properties/geometry/properties/height",
                                            "title": "Height",
                                            "default": 9,
                                            "description": "A description for 'height'  Type: 'integer'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 30
                                        }
                                    },
                                    "propertyOrder": 140
                                }
                            }
                        }
                    ]
                },
                "propertyOrder": 40
            },
            "assets": {
                "type": "array",
                "id": "/items/properties/assets",
                "title": "Assets",
                "format": "tabs",
                "options": {
                    "disable_collapse": false,
                    "disable_array_add": false,
                    "disable_array_delete": false,
                    "disable_array_reorder": false,
                    "disable_properties": false,
                    "hidden": false
                },
                "items": {
                    "headerTemplate": "Record {{i1}}",
                    "oneOf": [
                        {
                            "type": "object",
                            "id": "/items/properties/assets/oneof0",
                            "title": "Title array0 /items/properties/assets",
                            "options": {
                                "disable_collapse": false,
                                "disable_edit_json": false,
                                "disable_properties": false,
                                "hidden": false
                            },
                            "defaultProperties": [
                                "tag",
                                "id",
                                "src"
                            ],
                            "properties": {
                                "tag": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/tag",
                                    "title": "Tag",
                                    "default": "img",
                                    "format": "text",
                                    "description": "Description for 'tag' Type: 'string' Path: '/items/properties/assets/items/properties/tag'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 10
                                },
                                "id": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/id",
                                    "title": "Id",
                                    "default": "img1",
                                    "format": "text",
                                    "description": "Description for 'id' Type: 'string' Path: '/items/properties/assets/items/properties/id'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 20
                                },
                                "src": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/src",
                                    "title": "Src",
                                    "default": "assets/eusserthal.jpg",
                                    "format": "text",
                                    "description": "Description for 'src' Type: 'string' Path: '/items/properties/assets/items/properties/src'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 30
                                }
                            }
                        },
                        {
                            "type": "object",
                            "id": "/items/properties/assets/oneof1",
                            "title": "Title array1 /items/properties/assets",
                            "options": {
                                "disable_collapse": false,
                                "disable_edit_json": false,
                                "disable_properties": false,
                                "hidden": false
                            },
                            "defaultProperties": [
                                "tag",
                                "id",
                                "cursor-listener",
                                "data-type",
                                "target",
                                "obj-model",
                                "width",
                                "height",
                                "position",
                                "rotation",
                                "scale",
                                "visible",
                                "material"
                            ],
                            "properties": {
                                "tag": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/tag",
                                    "title": "Tag",
                                    "default": "a-entity",
                                    "format": "text",
                                    "description": "Description for 'tag' Type: 'string' Path: '/items/properties/assets/items/properties/tag'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 10
                                },
                                "id": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/id",
                                    "title": "Id",
                                    "default": "a2",
                                    "format": "text",
                                    "description": "Description for 'id' Type: 'string' Path: '/items/properties/assets/items/properties/id'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 20
                                },
                                "cursor-listener": {
                                    "type": "boolean",
                                    "id": "/items/properties/assets/items/properties/cursor-listener",
                                    "title": "Cursor Listener",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'cursor-listener'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 30
                                },
                                "data-type": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/data-type",
                                    "title": "Data Type",
                                    "default": "link",
                                    "format": "text",
                                    "description": "Description for 'data-type' Type: 'string' Path: '/items/properties/assets/items/properties/data-type'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 40
                                },
                                "target": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/target",
                                    "title": "Target",
                                    "default": "eusserthal",
                                    "format": "text",
                                    "description": "Description for 'target' Type: 'string' Path: '/items/properties/assets/items/properties/target'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 50
                                },
                                "obj-model": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/obj-model",
                                    "title": "Obj Model",
                                    "default": "obj: #arrow-obj; mtl: #arrow-mtl",
                                    "format": "text",
                                    "description": "Description for 'obj-model' Type: 'string' Path: '/items/properties/assets/items/properties/obj-model'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 60
                                },
                                "width": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/width",
                                    "title": "Width",
                                    "default": "200",
                                    "format": "text",
                                    "description": "Description for 'width' Type: 'string' Path: '/items/properties/assets/items/properties/width'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 70
                                },
                                "height": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/height",
                                    "title": "Height",
                                    "default": "100",
                                    "format": "text",
                                    "description": "Description for 'height' Type: 'string' Path: '/items/properties/assets/items/properties/height'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 80
                                },
                                "position": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/position",
                                    "title": "Position",
                                    "default": "-17.381 -4.283 16.133",
                                    "format": "text",
                                    "description": "Description for 'position' Type: 'string' Path: '/items/properties/assets/items/properties/position'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 90
                                },
                                "rotation": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/rotation",
                                    "title": "Rotation",
                                    "default": "10.829 122.269 -0.229",
                                    "format": "text",
                                    "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/assets/items/properties/rotation'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 100
                                },
                                "scale": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/scale",
                                    "title": "Scale",
                                    "default": "1 1 1",
                                    "format": "text",
                                    "description": "Description for 'scale' Type: 'string' Path: '/items/properties/assets/items/properties/scale'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 110
                                },
                                "visible": {
                                    "type": "boolean",
                                    "id": "/items/properties/assets/items/properties/visible",
                                    "title": "Visible",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'visible'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 120
                                },
                                "material": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/material",
                                    "title": "Material",
                                    "default": "",
                                    "format": "text",
                                    "description": "Description for 'material' Type: 'string' Path: '/items/properties/assets/items/properties/material'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 130
                                }
                            }
                        },
                        {
                            "type": "object",
                            "id": "/items/properties/assets/oneof2",
                            "title": "Title array2 /items/properties/assets",
                            "options": {
                                "disable_collapse": false,
                                "disable_edit_json": false,
                                "disable_properties": false,
                                "hidden": false
                            },
                            "defaultProperties": [
                                "tag",
                                "id",
                                "cursor-listener",
                                "data-type",
                                "target",
                                "src",
                                "width",
                                "height",
                                "position",
                                "rotation",
                                "scale",
                                "visible",
                                "material",
                                "geometry"
                            ],
                            "properties": {
                                "tag": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/tag",
                                    "title": "Tag",
                                    "default": "a-video",
                                    "format": "text",
                                    "description": "Description for 'tag' Type: 'string' Path: '/items/properties/assets/items/properties/tag'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 10
                                },
                                "id": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/id",
                                    "title": "Id",
                                    "default": "v1",
                                    "format": "text",
                                    "description": "Description for 'id' Type: 'string' Path: '/items/properties/assets/items/properties/id'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 20
                                },
                                "cursor-listener": {
                                    "type": "boolean",
                                    "id": "/items/properties/assets/items/properties/cursor-listener",
                                    "title": "Cursor Listener",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'cursor-listener'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 30
                                },
                                "data-type": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/data-type",
                                    "title": "Data Type",
                                    "default": "video",
                                    "format": "text",
                                    "description": "Description for 'data-type' Type: 'string' Path: '/items/properties/assets/items/properties/data-type'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 40
                                },
                                "target": {
                                    "type": "object",
                                    "id": "/items/properties/assets/items/properties/target",
                                    "title": "Target",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "id",
                                        "rotation"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "id": "/items/properties/assets/items/properties/target/properties/id",
                                            "title": "Id",
                                            "default": "my_link_name",
                                            "format": "text",
                                            "description": "Description for 'id' Type: 'string' Path: '/items/properties/assets/items/properties/target/properties/id'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "rotation": {
                                            "type": "string",
                                            "id": "/items/properties/assets/items/properties/target/properties/rotation",
                                            "title": "Rotation",
                                            "default": "-6.073 89.573 0",
                                            "format": "text",
                                            "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/assets/items/properties/target/properties/rotation'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        }
                                    },
                                    "propertyOrder": 50
                                },
                                "src": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/src",
                                    "title": "Src",
                                    "default": "#video1",
                                    "format": "text",
                                    "description": "Description for 'src' Type: 'string' Path: '/items/properties/assets/items/properties/src'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 60
                                },
                                "width": {
                                    "type": "integer",
                                    "id": "/items/properties/assets/items/properties/width",
                                    "title": "Width",
                                    "default": 16,
                                    "description": "A description for 'width'  Type: 'integer'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 70
                                },
                                "height": {
                                    "type": "integer",
                                    "id": "/items/properties/assets/items/properties/height",
                                    "title": "Height",
                                    "default": 9,
                                    "description": "A description for 'height'  Type: 'integer'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 80
                                },
                                "position": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/position",
                                    "title": "Position",
                                    "default": "-21.763 0 -0.368",
                                    "format": "text",
                                    "description": "Description for 'position' Type: 'string' Path: '/items/properties/assets/items/properties/position'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 90
                                },
                                "rotation": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/rotation",
                                    "title": "Rotation",
                                    "default": "-0.4583662361046586 89.49600759943459 -0.2864788975654116",
                                    "format": "text",
                                    "description": "Description for 'rotation' Type: 'string' Path: '/items/properties/assets/items/properties/rotation'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 100
                                },
                                "scale": {
                                    "type": "string",
                                    "id": "/items/properties/assets/items/properties/scale",
                                    "title": "Scale",
                                    "default": "1 1 1",
                                    "format": "text",
                                    "description": "Description for 'scale' Type: 'string' Path: '/items/properties/assets/items/properties/scale'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 110
                                },
                                "visible": {
                                    "type": "boolean",
                                    "id": "/items/properties/assets/items/properties/visible",
                                    "title": "Visible",
                                    "format": "checkbox",
                                    "default": true,
                                    "description": "A description for 'visible'  Type: 'boolean'",
                                    "options": {
                                        "hidden": false
                                    },
                                    "propertyOrder": 120
                                },
                                "material": {
                                    "type": "object",
                                    "id": "/items/properties/assets/items/properties/material",
                                    "title": "Material",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "color",
                                        "shader",
                                        "side",
                                        "transparent",
                                        "src"
                                    ],
                                    "properties": {
                                        "color": {
                                            "type": "string",
                                            "id": "/items/properties/assets/items/properties/material/properties/color",
                                            "title": "Color",
                                            "default": "#FFF",
                                            "format": "text",
                                            "description": "Description for 'color' Type: 'string' Path: '/items/properties/assets/items/properties/material/properties/color'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "shader": {
                                            "type": "string",
                                            "id": "/items/properties/assets/items/properties/material/properties/shader",
                                            "title": "Shader",
                                            "default": "flat",
                                            "format": "text",
                                            "description": "Description for 'shader' Type: 'string' Path: '/items/properties/assets/items/properties/material/properties/shader'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        },
                                        "side": {
                                            "type": "string",
                                            "id": "/items/properties/assets/items/properties/material/properties/side",
                                            "title": "Side",
                                            "default": "double",
                                            "format": "text",
                                            "description": "Description for 'side' Type: 'string' Path: '/items/properties/assets/items/properties/material/properties/side'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 30
                                        },
                                        "transparent": {
                                            "type": "boolean",
                                            "id": "/items/properties/assets/items/properties/material/properties/transparent",
                                            "title": "Transparent",
                                            "format": "checkbox",
                                            "default": true,
                                            "description": "A description for 'transparent'  Type: 'boolean'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 40
                                        },
                                        "src": {
                                            "type": "string",
                                            "id": "/items/properties/assets/items/properties/material/properties/src",
                                            "title": "Src",
                                            "default": "#video1",
                                            "format": "text",
                                            "description": "Description for 'src' Type: 'string' Path: '/items/properties/assets/items/properties/material/properties/src'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 50
                                        }
                                    },
                                    "propertyOrder": 130
                                },
                                "geometry": {
                                    "type": "object",
                                    "id": "/items/properties/assets/items/properties/geometry",
                                    "title": "Geometry",
                                    "options": {
                                        "disable_collapse": false,
                                        "disable_edit_json": false,
                                        "disable_properties": false,
                                        "hidden": false
                                    },
                                    "defaultProperties": [
                                        "primitive",
                                        "width",
                                        "height"
                                    ],
                                    "properties": {
                                        "primitive": {
                                            "type": "string",
                                            "id": "/items/properties/assets/items/properties/geometry/properties/primitive",
                                            "title": "Primitive",
                                            "default": "plane",
                                            "format": "text",
                                            "description": "Description for 'primitive' Type: 'string' Path: '/items/properties/assets/items/properties/geometry/properties/primitive'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 10
                                        },
                                        "width": {
                                            "type": "integer",
                                            "id": "/items/properties/assets/items/properties/geometry/properties/width",
                                            "title": "Width",
                                            "default": 16,
                                            "description": "A description for 'width'  Type: 'integer'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 20
                                        },
                                        "height": {
                                            "type": "integer",
                                            "id": "/items/properties/assets/items/properties/geometry/properties/height",
                                            "title": "Height",
                                            "default": 9,
                                            "description": "A description for 'height'  Type: 'integer'",
                                            "options": {
                                                "hidden": false
                                            },
                                            "propertyOrder": 30
                                        }
                                    },
                                    "propertyOrder": 140
                                }
                            }
                        }
                    ]
                },
                "propertyOrder": 50
            }
        }
    }
}
