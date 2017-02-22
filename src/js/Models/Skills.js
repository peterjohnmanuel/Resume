/**
 * Skills 
 * @class Skills
 * @param img
 * @param skillLevel
 * @param skillColor
 * */

var Skill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        var self = this;
        self.img = img;
        self.name = name
        self.skillLevel = skillLevel;
        self.skillColor = skillColor;
    }

})();

// Build Management Skill
var BuildManagementSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Build Management';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    Skill.call(this, img, name, skillLevel, skillColor);
    BuildManagementSkill.prototype = Object.create(Skill.prototype);
    BuildManagementSkill.prototype.constructor = BuildManagementSkill;
})();

// Collaboration Skill
var CollaborationSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Collaboration';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    CollaborationSkill.prototype = Object.create(Skill.prototype);
    CollaborationSkill.prototype.constructor = CollaborationSkill;
})();

// Compiled Language Skill
var CompiledLanguageSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Compiled Languages';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    CompiledLanguageSkill.prototype = Object.create(Skill.prototype);
    CompiledLanguageSkill.prototype.constructor = CompiledLanguageSkill;
})();

// Continuous Integration
var ContinuousIntegrationSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Continuous Integration';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    ContinuousIntegrationSkill.prototype = Object.create(Skill.prototype);
    ContinuousIntegrationSkill.prototype.constructor = ContinuousIntegrationSkill;
})();

// Design and Development
var DesignDevelopmentSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Design and Development';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    DesignDevelopmentSkill.prototype = Object.create(Skill.prototype);
    DesignDevelopmentSkill.prototype.constructor = DesignDevelopmentSkill;
})();

// Database
var DatabaseSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Databases';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    DatabaseSkill.prototype = Object.create(Skill.prototype);
    DatabaseSkill.prototype.constructor = DatabaseSkill;
})();

// Framework
var FrameworkSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Frameworks';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    FrameworkSkill.prototype = Object.create(Skill.prototype);
    FrameworkSkill.prototype.constructor = FrameworkSkill;
})();


var IOTSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Internet of Things (IOT)';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    IOTSkill.prototype = Object.create(Skill.prototype);
    IOTSkill.prototype.constructor = IOTSkill;
})();


// Operating Systems
var OperatingSystemSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Operating Systems';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    OperatingSystemSkill.prototype = Object.create(Skill.prototype);
    OperatingSystemSkill.prototype.constructor = OperatingSystemSkill;
})();


// Source Control Management
var SourceControlSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Source Control Management (SCM)';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    SourceControlSkill.prototype = Object.create(Skill.prototype);
    SourceControlSkill.prototype.constructor = SourceControlSkill;
})();

// Testing 
var TestingSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Testing';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    TestingSkill.prototype = Object.create(Skill.prototype);
    TestingSkill.prototype.constructor = TestingSkill;
})();

// Web Development 
var WebDevelopmentSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Web Development';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    WebDevelopmentSkill.prototype = Object.create(Skill.prototype);
    WebDevelopmentSkill.prototype.constructor = WebDevelopmentSkill;
})();

// Web Servers 
var WebServerSkill = (function() {

    'use strict';

    return function(img, name, skillLevel, skillColor) {
        this.SkillType = 'Web Servers';
        Skill.call(this, img, name, skillLevel, skillColor);
    }

    WebServerSkill.prototype = Object.create(Skill.prototype);
    WebServerSkill.prototype.constructor = WebServerSkill;
})();