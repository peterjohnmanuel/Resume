/**
 * Occupation model 
 * @class Occupation
 * @param employer
 * @param title
 * @param employmentDate
 * @param location
 * */


var Occupation = (function() {
    return function(employer, title, employmentDate, location) {
        var self = this;
        self.employer = employer;
        self.title = title;
        self.employmentDate = employmentDate;
        self.location = location;
    }
})();