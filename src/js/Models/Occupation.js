/**
 * Occupation model 
 * @class Occupation
 * @param employer
 * @param title
 * @param employmentDate
 * @param location
 * */

function Occupation(employer, title, employmentDate, location) {
    var self = this;
    self.employer = employer;
    self.title = title;
    self.employmentDate = employmentDate;
    self.location = location;    
};


var occupation1 = new Occupation('Process Computer Technology', 'Internship', 'July 2012 - December 2012', 'Bloubergstrand, Cape Town, RSA');
var occupation2 = new Occupation('Process Computer Technology', 'Junior Developer', 'January 2013 - November 2015', 'Bloubergstrand, Cape Town, RSA');
var occupation3 = new Occupation('Red Panda Software', 'Developer', 'December 2016 - Current', 'Pinelands, Cape Town, RSA');


var allOccupations = [occupation3, occupation2, occupation1];
