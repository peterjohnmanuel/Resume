/** Bio Information 
 * @class Bio
 * @param name
 * @param title
 * @param qualification
 */

var Bio = (function() {
    'use strict';

    return function(name, title, qualification) {
        var self = this;
        self.name = name;
        self.title = title;
        self.qualification = qualification;
    }
})();