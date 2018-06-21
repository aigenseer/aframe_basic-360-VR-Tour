vDataJSON["tpl"]["javascript"] = `
//#################################################################
//# Javascript Class: {{data.classname}}()
{{#ifcond data.superclassname "!=" ""}}
//#       SuperClass: {{data.superclassname}}
{{/ifcond}}
//#   Class Filename: {{filename data.classname}}.js
//#
//# Author of Class:      {{data.reposinfo.author}}
//# email:                {{data.reposinfo.email}}
//# Created:              {{data.reposinfo.created}}
//# Modified              {{data.reposinfo.modified}}
//# GNU Public License V3 - OpenSource
//#
//# created with JavaScript ClassEditorUML
//#     https://niebert.github.io/ClassEditorUML
//#################################################################

{{#ifcond data.reposinfo.require_classes "==" "no"}}
//---------------------------------------------------------------------
//---Store File in Subdirectory /js and import this Class in HTML-File with
// SCRIPT-Tag:  LANGUAGE="JavaScript" SRC="js/{{filename classname}}.js"
{{/ifcond}}
{{#ifcond data.reposinfo.require_classes "==" "yes"}}
{{#ifcond data.superclassname "!=" ""}}
//---------------------------------------------------------------------

// NodeJS: require the super class
const {{data.superclassname}} = require('{{filename data.superclassname}}');
{{/ifcond}}

// NodeJS: Require used classes
{{#requireclass data.superclassname data.attributes data.methods settings.baseclasslist settings.localclasslist data.reposinfo.require_path}}
const {{variable}} = require('{{module}}'); // Class: {{variable}}
{{/requireclass}}

// NodeJS: Require additional Modules
{{#requirelibs data.reposinfo.requirelist}}
const {{variable}} = require('{{module}}'); // Module: {{variable}}
{{/requirelibs}}
{{/ifcond}}
//---------------------------------------------------------------------
//---Constructor of Class {{data.classname}}()
// Call the constructor for creating an instance of class {{data.classname}}
// by the following command in HTML-file that imports this class
// var v{{data.classname}} = new {{data.classname}}();
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
//---------------------------------------------------------------------
// If you want to access the attributes of {{data.classname}} in the code for methods, use
// the attribute name with a leading "this." in the definition of method of {{data.classname}}, e.g.
// this.aName = "Hello World";
//---------------------------------------------------------------------
//----Methods----------------------------------------------------------
//---------------------------------------------------------------------
// (1) If you want to assign definitions of methods for single instance of the class '{{data.classname}}'
// they are defined with
//    this.my_method = function (pPar1,pPar2)
// this approach allows to overwrite the method definition of single instances dynamically.
//---------------------------------------------------------------------
// (2) A prototype definition of methods for '{{data.classname}}' will be set by
// use the method's name and extend it with '{{data.classname}}'.
//    {{data.classname}}.prototype.my_method = function (pPar1,pPar2)
// This approach consumes less memory for instances.
//---------------------------------------------------------------------

{{#ifcond data.superclassname "!=" ""}}
//--------------------------------------
//---Super Class------------------------
// Inheritance: '{{data.classname}}' inherits from '{{data.superclassname}}'
{{data.classname}}.prototype = new {{data.superclassname}}();
// Constructor for instances of {{data.classname}} has to updated.
// Otherwise constructor of '{{data.superclassname}}' is called
{{data.classname}}.prototype.constructor={{data.classname}};
// see http://phrogz.net/js/classes/OOPinJS2.html for explanation
//--------------------------------------
{{/ifcond}}


function {{data.classname}} () {
    //---------------------------------------------------------------------
    //---Attributes of Class "{{data.classname}}()"
    //---------------------------------------------------------------------
{{#foreach data.attributes data}}
    // ------------------------------------------
    // {{visibility}}: {{name}}   Class: {{class}}
{{#ifcond comment "!=" ""}}
{{#indent comment indent="    // " text=comment}}{{/indent}}
{{/ifcond}}
{{#ifcond visibility "==" "public"}}
    this.{{name}} = {{init}};   // Class: {{class}}
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
    var {{name}} = {{init}};   // Class: {{class}}
{{/ifcond}}
{{/foreach}}
    //---------------------------------------------------------------------
    //---Methods of Class "{{data.classname}}()"
    //---------------------------------------------------------------------

{{#foreach data.methods data}}

    //#################################################################
    //# {{visibility}} Method: {{name}}()  Class: {{data.classname}}
    //# Parameter:
    //#    {{parameterlist parameter "    //#    "}}
    //# Comment:
{{#indent comment indent="    //#    " text=comment}}{{/indent}}
    //# {{{returncomment}}}
    //#################################################################

{{#ifcond visibility "==" "public"}}
    {{data.classname}}.prototype.{{name}} = function ({{#paramcall parameter}}{{/paramcall}}) {
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
    function {{name}}({{#paramcall parameter}}{{/paramcall}}) {
{{/ifcond}}
      //----Debugging------------------------------------------
      // console.log("{{filename data.classname}}.js - Call: {{name}}({{#paramcall parameter}}{{/paramcall}})");
      // alert("{{filename data.classname}}.js - Call: {{name}}({{#paramcall parameter}}{{/paramcall}})");
      //----Create Object/Instance of {{data.classname}} and call {{name}}()----
      //    var v{{data.classname}} = new {{data.classname}}();
      //    v{{data.classname}}.{{name}}({{#paramcall parameter}}{{/paramcall}});
      //-------------------------------------------------------
{{#indent code indent="      " text=code}}{{/indent}}
    }
    // ---- Method: {{name}}() Class: {{data.classname}} ------
{{/foreach}}
}
//-------------------------------------------------------------------------
//---END Constructor of Class "{{data.classname}}()"
//-------------------------------------------------------------------------

{{#ifcond data.reposinfo.require_classes "==" "yes"}}

// NodeJS: export class constructor '{{data.classname}}' for module {{filename data.classname}}.js
// -------
module.exports = {{data.classname}};
{{/ifcond}}
`;

// NodeJS: uncomment modules.export in last line
// module.export = {{classname}};
