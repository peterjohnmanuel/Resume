/**
 * Education 
 * @class Education
 * @param institution
 * @param course
 * @param year
 * @param place
 * */

function Education(institution, course, year, place, major) {

    var self = this;
    self.institution = institution;
    self.course = course;
    self.year = year;
    self.place = place;
    self.major = major;
}

var education1 = new Education('Oude Molen Technical High School', 'National Senior Certificate', 2009, 'Cape Town, RSA', 'Electrical Technology');
var education2 = new Education('Cape Peninsula University of Technology', 'NDip IT: Naitonal Diploma Information Technology', 2012, 'Cape Town, RSA', 'Software Development');
var education3 = new Education('Cape Peninsula University of Technology', 'BTech IT: Baccalaureus Technologiae Information Technology', 2014, 'Cape Town, RSA', 'Software Development');


var allEducation = [education1, education2, education3];

var onlineEducation1 = new Education('NetIQ', 'NetIQ Identity Manager 4: Administration (Course 3109)', 2015, '' , '');
var onlineEducation2 = new Education('Udacity', 'Front-End Web Developer Nanodegree', 2016, '' , '');

var allOnlineEducation = [onlineEducation1, onlineEducation2]; 


