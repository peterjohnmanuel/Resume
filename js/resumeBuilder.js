// Bio
var bio = {
    "name": "Peter John Manuel",
    "role": "Software Developer",
    "contacts": {
        "email": "peterjohn.manuel@yahoo.com",
        "github": "https://github.com/peterjohnmanuel",
        "location": "Cape Town, South Africa"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc",
    "skills": ["awesomness", "delivering things", "cryogenic sleep", "saving the universe"],
    "bioPic": "images/fry.jpg"
};

// Work
var work = {

    "jobs": [
        {
            "employer": "Process Computer Technology",
            "title": "Intership",
            "dates": "July 2012 - December 2012",
            "location": "Bloubergstrand, Cape Town, South Africa",
            "workPic": "images/work/PCT_logo.png",
            "description": "I started my career at PCT as an intern during the work integrated learning program at CPUT. During this time I was on a six month contract to learn about industry and after the six month contract was promoted to junior developer. PCT uses a scrum/agile methodology integrated with a Jira tracking and ticketing system to monitor progress. During my intership at PCT I was involved with the following projects:",
            "projects": []
        },
        {
            "employer": "Process Computer Technology",
            "title": "Junior Developer",
            "dates": "January 2013 - November 2015",
            "location": "Bloubergstrand, Cape Town, South Africa",
            "workPic": "images/work/PCT_logo.png",
            "description": "After my 6 month contract as an intern at PCT, I was employed as a Junior Developer and was involved with the following projects:",
            "projects": []
        },
        {
            "employer": "Red Panda Software",
            "title": "Software Developer",
            "dates": "December 2015 - Current ",
            "location": "Pinelands, Cape Town, South Africa",
            "workPic": "images/work/redPanda_logo.png",
            "description": "description",
            "projects": []
        }
    ],
};

var education = {

    "schools":
    [
        {
            "name": "Oude Molen Technical High School",
            "location": "Pinelands, Cape Town, South Africa, ",
            "qualification": "National Senior Certificate",
            "year": "2009",
            "major": "Electrical Technology",
            "schoolPic": "images/education/oudemolen_logo.png"
        },
        {
            "name": "Cape Peninsula University of Technology",
            "location": "Cape Town, Cape Town, South Africa",
            "qualification": "NDip IT: Nation Diploma Information Technology",
            "year": "2012",
            "major": "Software Development",
            "schoolPic": "images/education/CPUT_logo.png"
        },
        {
            "name": "Cape Peninsula University of Technology",
            "location": "Cape Town, Cape Town, South Africa",
            "qualification": "BTech IT: Baccules Technology Information Technology",
            "year": "2014",
            "major": "Software Development",
            "schoolPic": "images/education/CPUT_logo.png"
        }
    ],

    "onlineCourses": [
        {
            "title": "NetIQ Identity Manager 4: Administration (Course 3109)",
            "school": "NetIQ",
            "year": "2015",
            "img" : "images/education/udacity_logo.png",
            "url": "URL: Here"
        },

        {
            "title": "Front End Developer Nano Degree",
            "school": "Udacity",
            "year": "2016",
            "img" : "images/education/netiq_logo.png",
            "url": "URL: Here"
        },

    ]
};


// Projects
var projects = {
    "projects": [
        {
        "title": "Portfolio",
        "dates": "2016",
        "description": "Built a portfolio to showcase projects done so far.",
        "images": [
            "images/projects/Featured_Work.png", 
            "images/projects/Main_Portfolio.png", 
            "images/projects/Project_Description.png"
            ]
        },
        {
        "title": "Portfolio",
        "dates": "2016",
        "description": "Built a portfolio to showcase projects done so far.",
        "images": [
            "images/projects/Featured_Work.png", 
            "images/projects/Main_Portfolio.png", 
            "images/projects/Project_Description.png"
            ]
        }        
    
    ]

}




bio.display = function() {
    if (bio["skills"].length > 0) {

        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedHTMLpicture = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedHTMLwelomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedHTMLheaderRole);
        $("#header").prepend(formattedHTMLheaderName);
        $("#header").append(formattedHTMLpicture);
        $("#header").append(formattedHTMLwelomeMessage);
        $("#topContacts").append(formattedHTMLemail);
        $("#topContacts").append(formattedHTMLgithub);
        $("#topContacts").append(formattedHTMLlocation);
    }
}

work.display = function() {
    for (job in work.jobs) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedPicture = HTMLworkPicture.replace("%data%", work.jobs[job].workPic);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var fomattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        HTMLworkImageColumn.replace("%data%", formattedPicture);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLrow);
        $(".work-entry > .row:last").append(HTMLworkImageColumn);
        $(".work-entry > .row:last").append(HTMLworkInformationColumn);
        $(".work-entry > .row > .work-image:last").append(formattedPicture);
        $(".work-entry > .row > .work-info:last").append(formattedEmployerTitle, formattedDate, fomattedDescription);
    }
}

projects.display = function() {

    var formattedTitle = "";
    var formattedDates = "";
    var formattedDescription = "";
    var formattedImage = "";

    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

education.display = function() {


    for (school in education.schools) {

        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].qualification);
        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].year);
        var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedHTMLpicture = HTMLschoolPicture.replace("%data%", education.schools[school].schoolPic);
        var finalFormattedHTMLeducation = formattedHTMLschoolName + formattedHTMLschoolDegree;

        var formattedHTMLschoolImageColumn = HTMLschoolImageColumn.replace("%data%", formattedHTMLpicture);
        var formattedHTMLschoolInformationColumn = HTMLschoolInformationColumn.replace("%data%", finalFormattedHTMLeducation);

        $("#school-education").append(HTMLschoolStart);
        $(".school-education-entry:last").append(HTMLrow);


        $(".school-education-entry > .row:last").append(formattedHTMLschoolImageColumn);
        $(".school-education-entry > .row:last").append(formattedHTMLschoolInformationColumn);
        $(".school-education-entry > .row > .school-information:last").append(formattedHTMLschoolDates, formattedHTMLschoolLocation, formattedHTMLschoolMajor);

    }

    for (course in education.onlineCourses) {

        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.onlineCourses[course].school);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[course].title);
        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.onlineCourses[course].year);
        var formattedHTMLpicture = HTMLschoolPicture.replace("%data%", education.onlineCourses[course].img);
        var finalFormattedHTMLeducation = formattedHTMLschoolName + formattedHTMLschoolDegree;

        var formattedHTMLschoolImageColumn = HTMLschoolImageColumn.replace("%data%", formattedHTMLpicture);
        var formattedHTMLschoolInformationColumn = HTMLschoolInformationColumn.replace("%data%", finalFormattedHTMLeducation);

        $("#school-online").append(HTMLschoolStart);
        $(".school-education-entry:last").append(HTMLrow);


        $(".school-education-entry > .row:last").append(formattedHTMLschoolImageColumn);
        $(".school-education-entry > .row:last").append(formattedHTMLschoolInformationColumn);
        $(".school-education-entry > .row > .school-information:last").append(formattedHTMLschoolDates, formattedHTMLschoolLocation);

    }

}

bio.display();
work.display();
projects.display();
education.display();




$("#mapDiv").append(googleMap);





// $("#internationlizeButton").click(inName($("#name").text()));


// function inName(oldName)
// {
//     oldName = oldName.trim().split();

//     console.log(finalName);
//     var splitName = oldName.split(" ");

//     console.log(oldName);

//     finalName = "";

//     for (var i = 0; i < splitName.length; i++)
//     {
//         finalName +=  i % 2 === 0 ? splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1).toLowerCase() : splitName[i].toUpperCase() ;

//         finalName += " ";
//     }

//     finalName = finalName.trim();

//     return finalName;
// }