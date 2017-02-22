/**
 * Education View Model 
 * @class EducationViewModel
 **/

var EducationViewModel = (function() {

    'use strict';

    return function() {
        var self = this;

        self.educations = allEducation;
        self.onlineEducations = allOnlineEducation;
    }

})();