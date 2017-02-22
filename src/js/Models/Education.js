/**
 * Education 
 * @class Education
 * @param institution
 * @param course
 * @param year
 * @param place
 * @param major
 * */


var Education = (function() {
    return function(institution, course, year, place, major) {
        var self = this;
        self.institution = institution;
        self.course = course;
        self.year = year;
        self.place = place;
        self.major = major;
    }
})();