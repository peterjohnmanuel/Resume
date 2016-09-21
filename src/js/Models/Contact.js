/** Contact 
 * @class Contact
 * @param contactType
 * @param contactDetails
 * @param contactIcon
*/
function Contact(contactType, contactDetails ,contactIcon){
    var self = this;

    self.contactType = contactType;
    self.contactDetails = contactDetails;
    self.contactIcon = contactIcon;
}

var contact1 = new Contact('Yahoo', 'peterjohn.manuel@yahoo.com', 'fa-yahoo');
var contact2 = new Contact('Skype', 'peterjohn.manuel', 'fa-skype');
var contact3 = new Contact('Github', 'https://github.com/peterjohnmanuel', 'fa-github');
var contact4 = new Contact('Location', 'Cape Town, RSA', 'fa-map-o');

var allContacts = [contact1, contact2, contact3, contact4];