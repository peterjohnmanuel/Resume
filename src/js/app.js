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

    $(document).ready(function() {
        $('#bio').addClass('animated bounceInLeft');
        $('#contacts').addClass('animated bounceInRight');
        $('#eat').addClass('animated bounceInLeft');
        $('#sleep').addClass('animated bounceInRight');
        $('#game').addClass('animated bounceInLeft');
        $('#code').addClass('animated bounceInRight');
        $('#welcome-message').addClass('animated bounceInUp');
    });

})();