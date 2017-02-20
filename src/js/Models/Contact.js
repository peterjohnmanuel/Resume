/** Contact 
 * @class Contact
 * @param contactType
 * @param contactDetails
 * @param contactIcon
 */
function Contact(contactType, contactDetails, contactIcon, isHyperlink) {
    var self = this;

    self.contactType = contactType;
    self.contactDetails = contactDetails;
    self.contactIcon = contactIcon;
    self.isHyperlink = isHyperlink;
}

var contact1 = new Contact('Yahoo', 'peterjohn.manuel@yahoo.com', 'fa-yahoo', false);
var contact2 = new Contact('Skype', 'peterjohn.manuel', 'fa-skype', false);
var contact3 = new Contact('Github', 'https://github.com/peterjohnmanuel', 'fa-github', true);
var contact4 = new Contact('Location', 'Cape Town, RSA', 'fa-map-o');
var contact5 = new Contact('Portfolio', 'http://manueloverride.ddns.net:8090/Portfolio', 'fa-briefcase', true);
var contact6 = new Contact('Microsoft Profile', 'http://www.mycertprofile.com/Profile/6340282762', 'fa-windows', true);





var allContacts = [contact1, contact2, contact3, contact4, contact5, contact6];