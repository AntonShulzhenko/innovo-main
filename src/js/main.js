'use strict';
var templates = window.templates;

function render(elem, tplName, data) {
  data = data || {};
  elem.innerHTML = templates[tplName](data);
}

//=require 'helpers/*.js'
//=require 'loader/*.js'
//=require 'common/*.js'
