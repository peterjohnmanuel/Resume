(function() {

    'use strict';


    var occ = new OccupationViewModel();
    var edu = new EducationViewModel();
    var topContact = new ContactViewModel();
    var ski = new SkillsViewModel();
    var bi = new BioViewModel();
    var cert = new CertificationViewModel();

    ko.applyBindings(bi, document.getElementById('bio'));
    ko.applyBindings(occ, document.getElementById('occupation'));
    ko.applyBindings(edu, document.getElementById('education'));
    ko.applyBindings(topContact, document.getElementById('contacts'));
    ko.applyBindings(ski, document.getElementById('skill-set'));
    ko.applyBindings(cert, document.getElementById('certfications'));

})();