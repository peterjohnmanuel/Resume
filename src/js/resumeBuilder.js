'use strict';
// Bio
var bio = {
   // "name": "Peter John Manuel",
    "role": "Software Developer",
    "contacts": {
        "email": "peterjohn.manuel@yahoo.com",
        "skype": "peterjohnmanuel",
        "mobile": "(+27) 041 2798412", // this is a fake number.
        "github": "https://github.com/peterjohnmanuel",
        "location": "Cape Town, South Africa"
    },
    "welcomeMessage": "Welcome to my online resume, detailing all of my experiance and education throughout my occupational career",
    "skills": ["C#.net ", "Windows Communication Foundation (WCF) ", "SQL Server"],
    "biopic": "images/fry"
};



// Projects
var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "2016",
            "description": "Built a portfolio to showcase projects done so far.",
            "images": [
                "dist/images/projects/Featured_Work",
                "dist/images/projects/Main_Portfolio",
                "dist/images/projects/Project_Description"
            ]
        },
        {
            "title": "Resume",
            "dates": "2016",
            "description": "Built a resume to showcase skills through out career so far.",
            "images": [
                "images/projects/Featured_Work",
                "images/projects/Main_Portfolio",
                "images/projects/Project_Description"
            ]
        }

    ]

};

bio.display = function() {


    var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedHTMMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var picturePatten = "%data%";
    var regExp = new RegExp(picturePatten, "g");

    var formattedHTMLpicture = HTMLbioPic.replace(regExp, bio.biopic);
    var formattedHTMLskype = HTMLskype.replace("%data%", bio.contacts.skype);
    var formattedHTMLwelomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header-info").prepend(formattedHTMLheaderName, formattedHTMLheaderRole);
    $("#welcome-info").append(formattedHTMLpicture);
    $("#welcome-msg").append(formattedHTMLwelomeMessage);

    // if (bio.skills.length) {


    //     bio.skills.forEach(function(skill) {
    //         var formattedSkill = HTMLskills.replace("%data%", skill);
    //         $("#skills").append(formattedSkill);
    //     });
    // }

    $("#topContacts").append(formattedHTMMobile, formattedHTMLemail, formattedHTMLskype, formattedHTMLgithub, formattedHTMLlocation);
    
    $("#bottomContacts").append(formattedHTMMobile, formattedHTMLemail, formattedHTMLskype, formattedHTMLgithub, formattedHTMLlocation);

};

projects.display = function() {

    var formattedTitle = "";
    var formattedDates = "";
    var formattedDescription = "";
    var formattedImage = "";

    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

    });
};



bio.display();
projects.display();


$("#mapDiv").append(googleMap);