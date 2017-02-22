/** Contact 
 * @class Contact
 * @param contactType
 * @param contactDetails
 * @param contactIcon
 * @param isHyperlink
 */

var Contact = (function() {
    return function(contactType, contactDetails, contactIcon, isHyperlink) {
        var self = this;
        self.contactType = contactType;
        self.contactDetails = contactDetails;
        self.contactIcon = contactIcon;
        self.isHyperlink = isHyperlink;
    }
})();