// Bio
var bio = {
    "name": "Peter John Manuel",
    "role": "Software Developer",
    "contacts": {
        "email": "peterjohn.manuel@yahoo.com",
        "skype": "peterjohnmanuel",
        "github": "https://github.com/peterjohnmanuel",
        "location": "Cape Town, South Africa"
    },
    "welcomeMessage": "Welcome to my online resume, detailing all of my experiance and education throughout my occupational career",
    "skills": ["C#.net ", "Windows Communication Foundation (WCF) ", "SQL Server"],
    "bioPic": "images/fry"
};

// Work
var work = {

    "jobs": [
        {
            "employer": "Process Computer Technology",
            "title": "Intership",
            "dates": "July 2012 - December 2012",
            "location": "Bloubergstrand, Cape Town, South Africa",
            "description": "I started my career at PCT as an intern during the work integrated learning program at CPUT. During this time I was on a six month contract to learn about industry and after the six month contract was promoted to junior developer. PCT uses a scrum/agile methodology integrated with a Jira tracking and ticketing system to monitor progress. During my intership at PCT I was involved with the following projects:",
            "projects": [{
                "name" : "Nuclear Safety Awareness Seminar (NSA)",
                "description" : "PCT was contracted to create an attendance system to track how many people attended this seminar. I was responsible for front end C# Win forms GUI development, testing the application and had experience on how hardware such as barcode scanners can interface with hardware. I also learnt about virtual machines and how they can be configured to host applications and operating systems."
            }]
        },
        {
            "employer": "Process Computer Technology",
            "title": "Junior Developer",
            "dates": "January 2013 - November 2015",
            "location": "Bloubergstrand, Cape Town, South Africa",
            "description": "After my 6 month contract as an intern at PCT, I was employed as a Junior Developer and was involved with the following projects:",
            "projects": 
            [
                {
                    "name" : "Materials Tracking Program",
                    "description" : "During the project the PCT I did some research on communication within the .net stack. We came across the WCF (Windows Communication Foundation) as a technology we could use for remote communication between a client and a server. I was tasked to do further research on how the WCF technology works and how it can be secured. During this time I learnt about the different bindings of WCF, message and transport credentials and soap and rest services. As an ORM technology we made use of the Entity Framework. To separate concerns the generated entity models were placed in a logic layer and by means of partial classes we could generate generic functions while not losing custom functions when re-generating code.Other technologies I gained experience with during the project life cycle was entity framework, MSSQL server 2012, Windows server 2012, Windows server 2012 R2, Hyper-V, IIS 8 and C#."                    
                },
                {
                    "name" : "Fitness for Duty (FFD)",
                    "description" : "FFD system is a legacy system based on VB.net and C# for its two main applications. During the project life cycle I assisted lead developers on enhancements to the project as well as testing. Fitness for Duty Version 3 (FFDv3).Since the initial FFD project was built on legacy technologies/frameworks it became unmanageable and out dated. A new FFDv3 was created where we used MVC and WCF as core technologies. A code first approach to the Entity Framework was taken to address the rapid changing requirements."                    
                },
                {
                    "name" : "Control IT",
                    "description" : "Control IT is a home automation system with a client server architecture. During this project’s life cycle I gained experience on PHP, JQuery, MYSQL and Bootstrap which was used to create a front end interface for mobile and desktop devices. For the development of the end we made use of a Mobile First approach in designing a responsive GUI for both mobile and desktops. The service side was API was developed in Java for which I provided knowledge and assistance. During the development of the service I suggested Hibernate and assisted with the implementation there of."                    
                },               
            ]
        },
        // {
        //     "employer": "Red Panda Software",
        //     "title": "Software Developer",
        //     "dates": "December 2015 - Current ",
        //     "location": "Pinelands, Cape Town, South Africa",
        //     "workPic": "images/work/redPanda_logo.png",
        //     "description": "description",
        //     "projects": []
        // }
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
        },
        {
            "name": "Cape Peninsula University of Technology",
            "location": "Cape Town, Cape Town, South Africa",
            "qualification": "NDip IT: Nation Diploma Information Technology",
            "year": "2012",
            "major": "Software Development",            
        },
        {
            "name": "Cape Peninsula University of Technology",
            "location": "Cape Town, Cape Town, South Africa",
            "qualification": "BTech IT: Baccalaureus Technologiae Information Technology",
            "year": "2014",
            "major": "Software Development",            
        }
    ],

    "onlineCourses": [
        {
            "title": "NetIQ Identity Manager 4: Administration (Course 3109)",
            "school": "NetIQ",
            "year": "2015",            
            "url": "URL: Here"
        },

        {
            "title": "Front End Developer Nano Degree",
            "school": "Udacity",
            "year": "2016",            
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
        "title": "Resume",
        "dates": "2016",
        "description": "Built a resume to showcase skills through out career so far.",
        "images": [
            "images/projects/Featured_Work.png", 
            "images/projects/Main_Portfolio.png", 
            "images/projects/Project_Description.png"
            ]
        }        
    
    ]

}




bio.display = function() {
    

        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        
        var picturePatten = "%data%";
        var regExp = new RegExp(picturePatten, "g");
        
        var formattedHTMLpicture = HTMLbioPic.replace(regExp, bio.bioPic);
        var formattedHTMLskype = HTMLskype.replace("%data%", bio.contacts.skype);
        var formattedHTMLwelomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header-info").prepend(formattedHTMLheaderRole);
        $("#header-info").prepend(formattedHTMLheaderName);
        $("#welcome-info").append(formattedHTMLpicture);
        $("#welcome-msg").append(formattedHTMLwelomeMessage);
        
        if (bio["skills"].length > 0) {
            
            for(skill in bio.skills)
            {
                var formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill]);                
                $("#skills").append(formattedSkill);
            }
            
            
        }
        
        
        
        
        $("#topContacts").append(formattedHTMLemail);
        $("#topContacts").append(formattedHTMLskype);
        $("#topContacts").append(formattedHTMLgithub);
        $("#topContacts").append(formattedHTMLlocation);
        
    
}

work.display = function() {
    for (job in work.jobs) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);        
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var fomattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);        
        var formattedproject = "";
        
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLrow);        
        $(".work-entry > .row:last").append(HTMLworkInformationColumn);        
        $(".work-entry > .row > .work-info:last").append(formattedEmployerTitle, formattedDate, fomattedDescription);
                
        for(project in work.jobs[job].projects)
        {
            
            var formattedHTMLWorkProjectHeading = HTMLWorkProjectHeading.replace("%data%", work.jobs[job].projects[project].name);
            var formattedHTMLWorkProjectDescription = HTMLWorkProjectDescription.replace("%data%", work.jobs[job].projects[project].description);
            
            $(".work-entry:last").append(HTMLWorkProjectStart);
            $(".work-projects-entry:last").append(formattedHTMLWorkProjectHeading);
            $(".work-projects-entry:last").append(formattedHTMLWorkProjectDescription);
        }
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
        
        var finalFormattedHTMLeducation = formattedHTMLschoolName + formattedHTMLschoolDegree;
        var formattedHTMLschoolInformationColumn = HTMLschoolInformationColumn.replace("%data%", finalFormattedHTMLeducation);

        $("#school-education").append(HTMLschoolStart);
        $(".school-education-entry:last").append(HTMLrow);


        $(".school-education-entry > .row:last").append(formattedHTMLschoolInformationColumn);
        $(".school-education-entry > .row > .school-information:last").append(formattedHTMLschoolDates, formattedHTMLschoolLocation, formattedHTMLschoolMajor);

    }

    for (course in education.onlineCourses) {

        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.onlineCourses[course].school);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[course].title);
        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.onlineCourses[course].year);
        var finalFormattedHTMLeducation = formattedHTMLschoolName + formattedHTMLschoolDegree;

        var formattedHTMLschoolInformationColumn = HTMLschoolInformationColumn.replace("%data%", finalFormattedHTMLeducation);

        $("#school-online").append(HTMLschoolStart);
        $(".school-education-entry:last").append(HTMLrow);

        $(".school-education-entry > .row:last").append(formattedHTMLschoolInformationColumn);
        $(".school-education-entry > .row > .school-information:last").append(formattedHTMLschoolDates, formattedHTMLschoolLocation);

    }

}

bio.display();
work.display();
//projects.display();
education.display();




$("#mapDiv").append(googleMap);