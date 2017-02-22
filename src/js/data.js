// All hardcoded data

// Bio Info
var bioInfo = new Bio('Peter John Manuel', 'Software Developer', 'BTech, ND, NSC, MCP');

// Certifications 
var certification1 = new Certification("Microsoft Certified Professional", '2016');
var certification2 = new Certification("Microsoft Specialist: Programming in C#", '2016');
var certification3 = new Certification("Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3", '2017');

var allCertifications = [certification1, certification2, certification3];

// Contact 

var contact1 = new Contact('Yahoo', 'peterjohn.manuel@yahoo.com', 'fa-yahoo', false);
var contact2 = new Contact('Skype', 'peterjohn.manuel', 'fa-skype', false);
var contact3 = new Contact('Github', 'https://github.com/peterjohnmanuel', 'fa-github', true);
var contact4 = new Contact('Location', 'Cape Town, RSA', 'fa-map-o');
var contact5 = new Contact('Microsoft Profile', 'http://www.mycertprofile.com/Profile/6340282762', 'fa-windows', true);
var contact6 = new Contact('Last Updated', '22/02/2017', 'fa-calendar', false);


var allContacts = [contact1, contact2, contact3, contact4, contact5, contact6];

// Education

var education1 = new Education('Oude Molen Technical High School', 'National Senior Certificate', 2009, 'Cape Town, RSA', 'Electrical Technology');
var education2 = new Education('Cape Peninsula University of Technology', 'NDip IT: National Diploma Information Technology', 2012, 'Cape Town, RSA', 'Software Development');
var education3 = new Education('Cape Peninsula University of Technology', 'BTech IT: Baccalaureus Technologiae Information Technology', 2014, 'Cape Town, RSA', 'Software Development');


var allEducation = [education1, education2, education3];

var onlineEducation1 = new Education('NetIQ', 'NetIQ Identity Manager 4: Administration (Course 3109)', 2015, '', '');
var onlineEducation2 = new Education('University of California San Diego', 'Learning how to learn: Powerful mental tools to help you master tough subjects ', 2016, '', '');
var onlineEducation3 = new Education('Udacity', 'Front-End Web Developer Nanodegree', 2016, '', '');

var allOnlineEducation = [onlineEducation1, onlineEducation2, onlineEducation3];

// Occupation

var occupation1 = new Occupation('Process Computer Technology', 'Internship', 'July 2012 - December 2012', 'Bloubergstrand, Cape Town, RSA');
var occupation2 = new Occupation('Process Computer Technology', 'Junior Developer', 'January 2013 - November 2015', 'Bloubergstrand, Cape Town, RSA');
var occupation3 = new Occupation('Red Panda Software', 'Developer', 'December 2015 - Current', 'Pinelands, Cape Town, RSA');

var allOccupations = [occupation3, occupation2, occupation1];


// Skills 

// Build Management 
var bm1 = new BuildManagementSkill('img/grunt_logo.png', 'Grunt', 20, '#D35400');
var bm2 = new BuildManagementSkill('img/gulp_logo.png', 'Gulp', 40, '#E74C3C');
var bm3 = new BuildManagementSkill('img/msbuild_logo.png', 'MSBuild', 20, '#154360');

// Collaboration
var cb1 = new CollaborationSkill('img/jira_logo.png', 'Jira', 40, '#2874A6');

// Compiled Languages
var compiledSkill1 = new CompiledLanguageSkill('img/c++_logo.png', 'C++', 40, '#1F618D');
var compiledSkill2 = new CompiledLanguageSkill('img/csharp_logo.png', 'C#', 60, '#6C3483');
var compiledSkill3 = new CompiledLanguageSkill('img/java_logo.png', 'Java', 40, '#229954');
var compiledSkill4 = new CompiledLanguageSkill('', 'Vb.net', 20, '#3498DB');

// Continuous Integration
var ci1 = new ContinuousIntegrationSkill('img/bamboo_logo.png', 'Bamboo', 40, '#2874A6');

// Design and Development 
var dds1 = new DesignDevelopmentSkill('', 'Scrum', 60, '#D35400');
var dds2 = new DesignDevelopmentSkill('', 'Client Server', 60, '#A93226');
var dds3 = new DesignDevelopmentSkill('', 'Domain Driven Design (DDD)', 40, '#1ABC9C');
var dds4 = new DesignDevelopmentSkill('', 'Object Orientation', 60, '#F4D03F');
var dds5 = new DesignDevelopmentSkill('', 'Test Driven Development (TDD)', 20, '#85C1E9');
var dds6 = new DesignDevelopmentSkill('', 'SOLID Principle', 60, '#7F8C8D');
var dds7 = new DesignDevelopmentSkill('', 'Model View Controller (MVC)', 40, '#73C6B6');
var dds8 = new DesignDevelopmentSkill('', 'Model View View Model (MVVM)', 40, '#E59866');
var dds9 = new DesignDevelopmentSkill('', 'Unified Modeling Language', 60, '#884EA0');

// Databases
var databaseSkill1 = new DatabaseSkill('img/access_logo.png', 'MS Access', 20, '#E74C3C');
var databaseSkill2 = new DatabaseSkill('img/mysql_logo.png', 'MySQL', 40, '#F39C12');
var databaseSkill3 = new DatabaseSkill('img/oracle_logo.png', 'Oracle', 20, '#C0392B');
var databaseSkill4 = new DatabaseSkill('img/sql-server_logo.png', 'SQL Server', 40, '#34495E');
var databaseSkill5 = new DatabaseSkill('img/sybase_logo.png', 'Sybase ASE', 40, '#AAB7B8');

// Frameworks
var fm1 = new FrameworkSkill('img/microsoft_color_logo.png', '.net Framework', 60, '#2980B9');
var fm2 = new FrameworkSkill('img/microsoft_color_logo.png', 'ASP.NET', 40, '#9B59B6');
var fm3 = new FrameworkSkill('img/microsoft_color_logo.png', 'Entity Framework (EF)', 40, '#3498DB');
var fm4 = new FrameworkSkill('img/nhibernate_logo.png', 'N-Hibernate', 40, '#2ECC71');
var fm5 = new FrameworkSkill('img/telerik_logo.png', 'Telerik', 40, '#0E6655');
var fm6 = new FrameworkSkill('img/microsoft_color_logo.png', 'Windows Communication Foundation', 60, '#7F8C8D');

// Operating Systems
var osSkill1 = new OperatingSystemSkill('img/raspberry_pi_logo.png', 'Raspbian', 40, '#f472d0');
var osSkill2 = new OperatingSystemSkill('img/ubuntu_logo.png', 'Ubuntu', 40, '#D35400  ');
var osSkill3 = new OperatingSystemSkill('img/windows_7_logo.png', 'Windows 7', 80, '#C0392B');
var osSkill4 = new OperatingSystemSkill('img/windows_logo.png', 'Windows 8 & 8.1', 60, '#8E44AD');
var osSkill5 = new OperatingSystemSkill('img/windows_logo.png', 'Windows 10', 60, '#3498DB');
var osSkill6 = new OperatingSystemSkill('img/windows_old_logo.png', 'Windows Server 2008', 40, '#E67E22');
var osSkill7 = new OperatingSystemSkill('img/windows_logo.png', 'Windows Server 2012 & R2', 40, '#3498DB');

// Source Control
var scm1 = new SourceControlSkill('img/github_logo.png', 'Github', 20, '#5F6A6A');
var scm2 = new SourceControlSkill('img/git_logo.png', 'Git', 20, '#E67E22');
var scm3 = new SourceControlSkill('img/gitlab_logo.png', 'GitLab', 20, '#F1C40F');
var scm4 = new SourceControlSkill('img/subversion_logo.png', 'Subversion', 60, '#5499C7');
var scm5 = new SourceControlSkill('img/mercurial_logo.png', 'Mercurial', 40, '#839192');

// Testing
var tes1 = new TestingSkill('img/jasmine_logo.png', 'Jasmine', 20, '#6C3483');

// Web Development
var webSkill1 = new WebDevelopmentSkill('img/bootstrap_logo.png', 'Bootstrap', 40, '#8E44AD');
var webSkill2 = new WebDevelopmentSkill('img/bower_logo.png', 'Bower', 20, '#27AE60');
var webSkill3 = new WebDevelopmentSkill('img/css3_logo.png', 'CSS3', 40, '#3498DB');
var webSkill4 = new WebDevelopmentSkill('img/html5_logo.png', 'Html5', 60, '#D35400');
var webSkill5 = new WebDevelopmentSkill('img/javascript_logo.png', 'Javascript', 40, '#F4D03F');
var webSkill6 = new WebDevelopmentSkill('img/jquery_logo.png', 'JQuery', 40, '#5499C7');
var webSkill7 = new WebDevelopmentSkill('img/json_logo.png', 'JSON', 40, '#283747');
var webSkill8 = new WebDevelopmentSkill('img/knockout_logo.png', 'Knockout JS', 20, '#A93226');
var webSkill9 = new WebDevelopmentSkill('img/php_logo.png', 'PHP', 40, '#7D3C98');
var webSkill10 = new WebDevelopmentSkill('img/sass_logo.png', 'Sass', 20, '#f472d0');
var webSkill11 = new WebDevelopmentSkill('img/xml_logo.png', 'XML', 40, '#1C2833');

// Web Server
var webServerSkill1 = new WebServerSkill('img/apache_logo.png', 'Apache', 40, '#E74C3C');
var webServerSkill2 = new WebServerSkill('img/microsoft_color_logo.png', 'IIS', 60, '#2ECC71');

// All skills 
var allSkills = [

    {
        name: 'Build Management',
        items: [
            bm1,
            bm2,
            bm3
        ]
    },

    {
        name: 'Collaboration',
        items: [cb1]
    },

    {
        name: 'Compiled Languages',
        items: [
            compiledSkill1,
            compiledSkill2,
            compiledSkill3,
            compiledSkill4
        ]
    },

    {
        name: 'Continuous Integration',
        items: [ci1]

    },

    {
        name: 'Design and Development Approaches',
        items: [
            dds1,
            dds2,
            dds3,
            dds4,
            dds5,
            dds6,
            dds7,
            dds8,
            dds9
        ]
    },

    {
        name: 'Database',
        items: [
            databaseSkill1,
            databaseSkill2,
            databaseSkill3,
            databaseSkill4,
            databaseSkill5
        ]
    },

    {
        name: 'Framework',
        items: [
            fm1,
            fm2,
            fm3,
            fm4,
            fm5,
            fm6
        ]

    },

    {
        name: 'Operating System',
        items: [
            osSkill1,
            osSkill2,
            osSkill3,
            osSkill4,
            osSkill5,
            osSkill6,
            osSkill7
        ]
    },

    {
        name: 'Source Control Management',
        items: [
            scm1,
            scm2,
            scm3,
            scm4,
            scm5
        ]

    },

    {
        name: 'Testing',
        items: [tes1]
    },


    {
        name: 'Web Development',
        items: [
            webSkill1,
            webSkill2,
            webSkill3,
            webSkill4,
            webSkill5,
            webSkill6,
            webSkill7,
            webSkill8,
            webSkill9,
            webSkill10,
            webSkill11,

        ]
    },

    {
        name: 'Web Servers',
        items: [
            webServerSkill1,
            webServerSkill2,
        ]
    },

]