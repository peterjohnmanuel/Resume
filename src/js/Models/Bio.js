/** Bio Information 
 * @class Bio
*/

function Bio(name, title, image) {
    var self = this;

    self.name = name;
    self.title = title;
    self.image = image;
}

var bioInfo = new Bio('Peter John Manuel', 'Software Developer', 'img/fry.jpg');