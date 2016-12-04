(function(){

'use strict';


var occ = new OccupationViewModel();
var edu = new EducationViewModel();
var topContact = new ContactViewModel();
var ski = new SkillsViewModel();
var bi = new BioViewModel();

ko.applyBindings(bi, document.getElementById('bio'));
ko.applyBindings(occ, document.getElementById('occupation'));
ko.applyBindings(edu, document.getElementById('education'));
ko.applyBindings(topContact, document.getElementById('contact'));
ko.applyBindings(ski, document.getElementById('skill-set'));


})();