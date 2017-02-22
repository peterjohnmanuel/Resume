/** Certification 
 * @class Certification
 * @param description
 * @param year
 */

var Certification = (function() {
    'use strict';
    return function(certDescription, year) {
        var self = this;
        self.certDescription = certDescription;
        self.year = year;
    }
})();