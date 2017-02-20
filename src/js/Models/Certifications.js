/** Certification 
 * @class Certification
 * @param description
 * @param year
 */

function Certification(certDescription, year) {
    var self = this;
    self.certDescription = certDescription;
    self.year = year;
}

var certification1 = new Certification("Microsoft Certified Professional", '2016');
var certification2 = new Certification("Microsoft Specialist: Programming in C#", '2016');
var certification3 = new Certification("Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3", '2017');

var allCertifications = [certification1, certification2, certification3];