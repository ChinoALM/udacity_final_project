var data = '%data%';

var bio = {
    "name": "Anthony L Morton",
    "role": "UX/UI Developer",
    "contacts": {
        "mobile": "555-5555",
        "email": "mortona35@gmail.com",
        "github": "@ChinoALM",
        "twitter": "@CurlyMorton",
        "location": "Indianapolis, IN"
    },
    "welcomeMessage": "What have you done today to better your tomorrow? Seize the day!",
    "skills": ["HTML", "CSS", "Java Script"],
    "biopic": "images/resume.jpg",
    display: function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var b = 0, len = bio.skills.length; b < len; b++) {
        var formattedSkills = HTMLskills.replace(data, bio.skills[b]);

        $('#skills').append(formattedSkills);
      }
    }
  }
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
            "title": "Front End Web Development",
            "school": "Udacity Online",
            "dates": "January 2018-July 2018",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
           "title": "Introduction to Programming",
            "school": "Udacity Online",
            "dates": "March 2017-December 2017",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        }
    ],
    display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var s = 0, sLen = education.schools.length; s < sLen; s++) {
        var formattedName = HTMLschoolName.replace(data, education.schools[s].name);
        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[s].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[s].dates);
        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[s].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var i = 0, iLen = education.schools[s].majors.length; i < iLen; i++) {
          var formattedMajor = HTMLschoolMajor.replace(data, education.schools[s].majors[i]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var c = 0, len = education.onlineCourses.length; c < len; c++) {
        var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[c].title).replace('#', education.onlineCourses[c].url);
        var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[c].school);
        var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[c].dates);
        var formattedUrl = HTMLonlineURL.replace(data, education.onlineCourses[c].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
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
            "employer": "Joe Schmoe's Coffee Shop",
            "title": "Hospitality Specialist",
            "dates": "October 2013 - January 2014",
            "location" : "Seattle, WA",
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
    ],
    display: function() {
    if (work.jobs.length > 0) {
      for (var j = 0, len = work.jobs.length; j < len; j++) {
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[j].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[j].title);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[j].dates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[j].location);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[j].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
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
    ],
    display: function() {
    if (projects.projects.length > 0) {
      for (var p = 0, pLen = projects.projects.length; p < pLen; p++) {
        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[p].title);
        var formattedDates = HTMLprojectDates.replace(data, projects.projects[p].dates);
        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[p].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var i = 0, iLen = projects.projects[p].images.length; i < iLen; i++) {
          var formattedImage = HTMLprojectImage.replace(data, projects.projects[p].images[i]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();