/**
 * Occupation model 
 * @class Occupation 
 * */

function Occupation(employer, title, employmentDate, location, description, projects) {
    var self = this;
    self.employer = employer;
    self.title = title;
    self.employmentDate = employmentDate;
    self.location = location;
    self.description = description;
    self.projects = projects;
};

/** Occupation 1 Description */
var occupation1Description = 'I started my career at PCT as an intern during the work integrated learning program at CPUT. During this time I was on a six month contract to learn about industry and after the six month contract was promoted to junior developer. PCT uses a scrum/agile methodology integrated with a Jira tracking and ticketing system to monitor progress. During my intership at PCT I was involved with the following projects:';

/** Occupation 2 Description */
var occupation2Description = 'After my 6 month contract as an intern at PCT, I was employed as a Junior Developer and was involved with the following projects:';

/** Occupation 3 Description */
var occupation3Description = 'Redpanda software is a retail solutions developer specialising in POS systems, Warehousing and Logistics, Debtor Control and HR Management. Founded in 2009 they provide custom made solutions to clients such as the Lewis Group, Ellerines, Furnmart and etc. Redpanda uses Jira as their main bug tracking system as well as an agile environment for developing solutions.';

/** Occupation 1 Project */
var occupation1Projects = [{
    "name": "Nuclear Safety Awareness Seminar (NSA)",
    "description": "PCT was contracted to create an attendance system to track how many people attended this seminar. I was responsible for front end C# Win forms GUI development, testing the application and had experience on how hardware such as barcode scanners can interface with hardware. I also learnt about virtual machines and how they can be configured to host applications and operating systems."
}];

/** Occupation 2 Project */
var occupation2Project = [
    {
        "name": "Materials Tracking Program",
        "description": "During the project the PCT I did some research on communication within the .net stack. We came across the WCF (Windows Communication Foundation) as a technology we could use for remote communication between a client and a server. I was tasked to do further research on how the WCF technology works and how it can be secured. During this time I learnt about the different bindings of WCF, message and transport credentials and soap and rest services. As an ORM technology we made use of the Entity Framework. To separate concerns the generated entity models were placed in a logic layer and by means of partial classes we could generate generic functions while not losing custom functions when re-generating code.Other technologies I gained experience with during the project life cycle was entity framework, MSSQL server 2012, Windows server 2012, Windows server 2012 R2, Hyper-V, IIS 8 and C#."
    },
    {
        "name": "Fitness for Duty (FFD)",
        "description": "FFD system is a legacy system based on VB.net and C# for its two main applications. During the project life cycle I assisted lead developers on enhancements to the project as well as testing. Fitness for Duty Version 3 (FFDv3).Since the initial FFD project was built on legacy technologies/frameworks it became unmanageable and out dated. A new FFDv3 was created where we used MVC and WCF as core technologies. A code first approach to the Entity Framework was taken to address the rapid changing requirements."
    },
    {
        "name": "Control IT",
        "description": "Control IT is a home automation system with a client server architecture. During this project’s life cycle I gained experience on PHP, JQuery, MYSQL and Bootstrap which was used to create a front end interface for mobile and desktop devices. For the development of the end we made use of a Mobile First approach in designing a responsive GUI for both mobile and desktops. The service side was API was developed in Java for which I provided knowledge and assistance. During the development of the service I suggested Hibernate and assisted with the implementation there of."
    }];


/** Occupation 3 Project */ 
var occupation3Project = [
    {
        "name": "Stock Planning System",
        "description": "I joined the stock planning team in December and since then have been maintaining and enhancing the Stock Planning System. Technologies used during my time so far are WCF, IIS, C#.net, WPF MVVM methodologies and mercurial as version control. My role is to assist the team lead in enhancing and debugging the system, as well as assisting QA with bugs that might occur during testing and might occur during production."
    }];
     



var occupation1 = new Occupation('Process Computer Technology', 'Internship', 'July 2012 - December 2012', 'Bloubergstrand, Cape Town, South Africa', occupation1Description, occupation1Projects);
var occupation2 = new Occupation('Process Computer Technology', 'Junior Developer', 'January 2013 - November 2015', 'Bloubergstrand, Cape Town, South Africa', occupation2Description, occupation2Project);
var occupation3 = new Occupation('Red Panda Software', 'Developer', 'December 2016 - Current', 'Pinelands, Cape Town, South Africa', occupation3Description, occupation3Project);


var allOccupations = [occupation3, occupation2, occupation1];
