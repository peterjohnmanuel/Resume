/** Bio View Model 
 * @class BioViewModel
 */

var BioViewModel = (function() {

    'use strict';

    return function() {

        var self = this;
        self.name = bioInfo.name;
        self.title = bioInfo.title;
        self.qualification = bioInfo.qualification;
    }
})();