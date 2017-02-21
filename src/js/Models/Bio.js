/** Bio Information 
 * @class Bio
 * @param name
 * @param title
 */

function Bio(name, title, qualification) {
    var self = this;
    self.name = name;
    self.title = title;
    self.qualification = qualification;
}

var bioInfo = new Bio('Peter John Manuel', 'Software Developer', 'BTech, ND, NSC, MCP');