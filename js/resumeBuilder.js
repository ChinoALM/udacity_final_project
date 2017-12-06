var bio = {
    "name": "Anthony L Morton",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "555-5555",
        "email": "mortona35@gmail.com",
        "github": "@ChinoALM",
        "location": "Indianapolis, IN"
    },
    "welcomeMessage": "What have you done today to better your tomorrow? Seize the day!",
    "skills": [
        "Programming languages learned in this class:", "HTML", "CSS", "Java Script"],
    "biopic": "images/resume.jpg"
};

var education = {
    "schools": [
        {
            "name": "Wabash College",
            "location": "Crawfordsville, IN",
            "degree": "Bachelors of the Arts",
            "majors": ["Theatre"],
            "dates": "2006-2010",
            "url": "http://www.wabash.edu/"
        },
    ],
    "onlineCourses": [
        {
            "name": "Udacity",
            "degree": "Nanodegree",
            "majors": ["Intro to Programming"],
            "dates": "March 2017-December 2017",
            "location": "Indianapolis, IN",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Mad Hat Enterprise",
            "title": "Character Performer & Entertainment Specialist",
            "dates": "April 2017 - Present",
            "location" : "Indianapolis, IN",
            "description": "Inspires imagination and creativity as a character " +
                "performer in the role of the Mad Hatter, attending music " +
                "festivals and music related events across the United States. " +
                "Production includes an accent; a custom, personalized costume; " +
                "full make-up, and gloving (performance art). Volunteer performances " +
                "in 2017 were on display in Atlantic City, NJ; Rothbury, MI; " +
                "Broomfield, CO; and Hampton, VA."
        },
        {
            "employer": "Iozzo's Garden of Italy",
            "title": "Hospitality Specialist",
            "dates": "February 2015 - Present",
            "location" : "Indianapolis, IN",
            "description": "Provides primary front of house support for " +
                "Iozzo's Garden of Italy. Executes deployments of menu knowledge " +
                "requirements, managing client expectations, communicating with " +
                "internal departments to achieve standards of success everyday."
        },
        {
            "employer": "McCormick & Schmicks",
            "title": "Hospitality Specialist",
            "dates": "February 2014 - February 2015",
            "location" : "Indianapolis, IN",
            "description": "Provided primary front of house support for " +
                "McCormick & Schmicks. Executed deployments of menu knowledge " +
                "requirements, managing client expectations, communicating with " +
                "internal departments to achieve standards of success everyday."
        },
        {
            "employer": "Back to the Roots",
            "title": "Hospitality Specialist",
            "dates": "January 2013 - September 2013",
            "location" : "Chelsea, MI",
            "description": "Provided primary front of house support for " +
                "Back to the Roots. Executed deployments of menu knowledge " +
                "requirements, managing client expectations, communicating with " +
                "internal departments to achieve standards of success everyday."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1 - Creating First Website",
            "dates": "April 2017",
            "description": "Stage 1 of the Udacity Intro to Programming Nanodegree",
            "images": [
                "images/project1.jpg"
            ]
        },
        {
            "title": "Sample Project 2 - Python Turtle",
            "dates": "November 2017",
            "description": "This was one of my favorite projects from this class!",
            "images": [
                "images/project2.jpg"
            ]
        },
        {
            "title": "Sample Project 3 - Movie Website Mini Project",
            "dates": "November 2017",
            "description": "Stage 4 of Intro to Programming Nanodegree",
            "images": [
                "images/project3.jpg"
            ]
        }
    ]
};

bio.display= function() {
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header, #footerContacts" ).append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header, #footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header, #footerContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    for(var i=0; i<bio.skills.length; i+=1){
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
        $("#header").append(formattedSkills);
    }
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolTitle = formattedSchoolName + formattedDegree;

        $(".education-entry:last").append(formattedSchoolTitle);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
        name[0].slice(1).toLowerCase();
    return name [0] + " " +name[1];
}

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();