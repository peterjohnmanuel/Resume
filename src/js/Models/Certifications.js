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
var certification2 = new Certification("Microsoft C# Specialist", '2016');

var allCertifications = [certification1, certification2];