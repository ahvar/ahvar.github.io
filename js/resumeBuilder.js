/*
*This file contains JavaScript code to dynamically build the resume. 
*Arthur Vargas
*/

"use strict";

var	bio = {
		"name": "Arthur Vargas",
		"role": "Developer",
		"contacts": {
			"mobile": "336-416-7584",
			"email": "ahvargas92@gmail.com",
			"github": "https://github.com/ahvar",
			"twitter": "@ahvargas",
			"blog": "https://wordpress.com/",
			"location": "Raleigh, NC"
		},
		"welcomeMessage": "Welcome to my online resume!",
		"skills": ["HTML", "CSS", "JavaScript", "Java"],
		"biopic": "images/headshot2014.jpg",
		"display": function() {
			
			//assign formatted HTML to formattedVariable
			var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
			var formattedheaderRole = HTMLheaderRole.replace("%data%",bio.role);
			
			var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
			var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		
			
			//insert formatted HTML into index.html
			$("#header").prepend(formattedheaderRole);
			$("#header").prepend(formattedheaderName);
			$("#header").append(formattedbioPic, formattedwelcomeMsg);
			$("#header").append(HTMLskillsStart);
			
			var i = 0;
			for(var i = 0; i < bio.skills.length; i++) {
				var formattedskills = HTMLskills.replace("%data%",bio.skills[i]);
				$("#skills").append(formattedskills);
				$("#footerContacts").append(formattedskills);	
			}
			
			
			/* The for/each loop iterates through the contacts object and inserts the data
			 * into the correct HTML string.  The formatted string is assigned to formattedVariable
			 */
			var formattedMobile;
			var formattedEmail;
			var formattedTwitter;
			var formattedGithub;
			var formattedBlog;
			var formattedLocation;
			$.each(bio.contacts,function(index,value) {
					formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
					formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
					formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
					formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
					formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
					formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);				
			});
			
			/*append formatted HTML to index*/
			$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedBlog,formattedLocation);
			$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedBlog,formattedLocation);	
		}
};

var education = {
		"schools": [{
			"url": "https://www.ncsu.edu/",
			"name": "North Carolina State University",
			"location": "Raleigh, NC",
			"degree": "BS & BA",
			"majors": ["English", "Biology"],
			"dates": "2006"
		}],
		"onlineCourses": [{
			"url": "https://www.udacity.com/course/javascript-basics--ud804",
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": "2016"
		}, {
			"url": "whttps://www.udacity.com/course/how-to-use-git-and-github--ud775",
			"title": "How to Use Git and Github",
			"school": "Udacity",
			"date": "2015"
		}, {
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304",
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": "2015"
		}, {
			"url": "https://www.udacity.com/course/intro-to-jquery--ud245",
			"title": "Intro to jQuery",
			"school": "Udacity",
			"date": "2016"
		}, {
			"url": "https://www.udacity.com/course/object-oriented-javascript--ud015",
			"title": "Object Oriented JavaScript",
			"school": "Udacity",
			"date": "2016"
		}, {
			"url": "https://www.udacity.com/course/html5-canvas--ud292",
			"title": "HTML5 Canvas",
			"school": "Udacity",
			"date": "2016"
		}, {
			"url": "http://www.stat.ncsu.edu/courses/course.php?id=ST513",
			"title": "ST 531: Statistics for Management",
			"school": "North Carolina State University",
			"date": "2014"
		}, {
			"url": "https://www.waketech.edu/student-services/catalog/course-descriptions?cat_name=CSC",
			"title": "CS 151: JAVA Programming",
			"school": "Wake Technical Community College",
			"date": "2015"
		}, {
			"url": "https://courses.ncsu.edu/csc216/lec/601/",
			"title": "CS 213: Programming Concepts",
			"school": "North Carolina State University",
			"date": "2016"
		}],
		"display": function() {
			
			$("#education").append(HTMLschoolStart);
			for(var i = 0; i < education.schools.length; i++) {
				var formattedschoolURL = HTMLschoolURL.replace("%data%",education.schools[i].url);
				var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
				$(".education-entry:last").append(formattedschoolURL + formattedschoolName + formattedschoolDegree,formattedschoolDates,
						formattedschoolLocation);
				for(var j = 0; j < education.schools[i].majors.length; j++) {
					var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
					$(".education-entry:last").append(formattedschoolMajor);
				}
			}
			$("#education").append(HTMLonlineClasses);
			for(var i = 0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLschoolStart);
				var formattedonlineClassURL = HTMLonlineClassURL.replace("%data%",education.onlineCourses[i].url);
				var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
				$(".education-entry:last").append(formattedonlineClassURL + formattedonlineTitle, formattedonlineDate, formattedonlineSchool);	
			}
		}
};

var	work = {
		"jobs": [{
			"url": "http://www.reichhold.com/",
			"employer": "Reichhold Inc.",
			"title": "Sales Trainee",
			"location": "Durham, NC",
			"dates": "07/2007 - 10/2008",
			"description": "A global supplier to the Composite & Coating Industry.",
		}, {
			"url": "http://www.polyzen.com/",
			"employer": "Polyzen Inc.",
			"title": "Inside Sales Representative",
			"location": "Apex, NC",
			"dates": "05/2009 - 08/2014",
			"description": "A contract manufacturer of disposable medical devices."
		}, {
			"url": "http://www.roblingmedical.com/",
			"employer": "Robling Medical Inc.",
			"title": "Inside Sales Representative",
			"location": "Apex, NC",
			"dates": "02/2015 - 09/2015",
			"description": "A contract manufacturer of medical products."
		}],
		"display": function() {
			
			for(var i = 0; i < work.jobs.length; i++) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployerURL = HTMLworkEmployerURL.replace("%data%",work.jobs[i].url);
				var	formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
				var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
				var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
				$(".work-entry:last").append(formattedEmployerURL + formattedEmployer + formattedTitle,formattedLocation,formattedDates,formattedDescription);
			}
		}
};
var projects = {
		"projects": [{

                	"title": "Portfolio Website",
                	"dates": "2016",
                	"description": "A portfolio of development work",
                	"images": ["images/project_photo1.jpg",]
				}],		
		"display" : function() {
						"use strict";
						for(var i = 0; i < projects.projects.length; i++) {
							$("#projects").append(HTMLprojectStart);
							var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
							var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
							var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
							$(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);
							for(var j = 0; j < projects.projects[i].images.length; j++) {
								var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
								$(".project-entry:last").append(formattedprojectImage);
							}
						}
					}
};

work.display();
projects.display();
education.display();
bio.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function inName(name) {
		console.log(name);
		var newName = name;
		newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
		return newName;
}
	


	 
	 		