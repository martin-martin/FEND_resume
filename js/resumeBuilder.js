//
// using the Udacity FEND framework to build a resume page with jQuery
//

// creating the variables holding my personal information
var bio = {
	"name" : "Martin Breuss",
	"role" : "Code Reviewer",
	"contact" : {
		"mobile" : "(01)415-684-2455",
		"email" : "breuss.martin@gmail.com",
		"twitter" : "",
		"github" : "martin-martin",
		"blog" : "notesinnature",
		"location" : "Mountain View, CA, USA"
	},
	"skills" : [
		"next",
		"not the right moment to write this"
	],
	"bioPic" : "https://avatars2.githubusercontent.com/u/12371494?v=3&u=ade0bf6c16ed2313397019c7a5a9d0d8eedff245&s=140",
	"welcomeMsg" : "..."
};

var education = {
	"schools" : [
		{
			"name" : "Karl-Franzens University Graz",
			"degree" : "Bachelor of Science",
			"dates" : "2007-10 - 2012-08",
			"location" : "Graz, Austria",
			"major" : "Geographic distribution of an endemic plant; Eusociality in Insects"
		},
		{
			"name" : "PHSt - Pedagogische Hochschule Steiermark",
			"degree" : "theater teacher",
			"dates" : "2010-10 - 2012-10",
			"location" : "Graz, Austria",
			"major" : ""
		},
		{
			"name" : "",
			"degree" : "",
			"dates" : "",
			"location" : "",
			"major" : ""
		}
	],
	"online" : [
		{
			"class" : "Introduction to Interactive Programming with Python",
			"dates" : "2014-10 - 2014-12",
			"school" : "Coursera",
			"distinction" : "with distinction",
			"url" : "coursera.org/verify/AMGPE5Y5QE"
		},
		{
			"class" : "Process Mining: Data science in Action",
			"dates" : "2015-11",
			"school" : "Coursera",
			"distinction" : "with distinction",
			"url" : "coursera.org/verify/5YK5DBUNCC"
		},
		{
			"class" : "Introduction to Programming Nanodegree",
			"dates" : "2015-05 - 2015-07",
			"school" : "Udacity",
			"distinction" : "exceeds specifications",
			"url" : ""
		},
		{
			"class" : "Economics 1: Principles of Economics",
			"dates" : "2014-09",
			"school" : "Coursera",
			"distinction" : "",
			"url" : "https://verify.class.stanford.edu/SOA/4da36098acf5456c908113d81ecdc541/"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Lebenshilfe Bad Radkersburg",
			"title" : "helper of the handicapped",
			"dates" : "2005-09 - 2006-12",
			"location" : "Bad Radkersburg, Austria",
			"description" : "lots of talking (fun and not), going for trips and coffee, wiping asses, holding hands and heads during seizures, building and repairing things, sorting trash, doing crafts."
		},
		{
			"employer" : "Ziviltechnik-Kanzlei Hugo Kofler",
			"title" : "nature cartographer",
			"dates" : "2009-07",
			"location" : "Upper Styria, Austria",
			"description" : "going by scooter close to little rivers, by foot down the rest, cartographing the floral species and the environmental type of the area."
		},
		{
			"employer" : "Udacity",
			"title" : "Code Reviewer",
			"dates" : "2015-08 - (still working)",
			"location" : "Online, Everywhere",
			"description" : "looking into and understanding student's code, assessing it according to a rubric, giving additional pointers, tips and motivation; reporting bad reviews; improving the project."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "IPND",
			"dates" : "2015-05 - 2015-06",
			"description" : "a collection of all the learnings and pages I created for the Udacity Introduction to Programming ND",
			"image" : "",
			"url" : "https://ipnd-all.appspot.com"
		},
		{
			"title" : "All my MOOCs",
			"dates" : "2015-12",
			"description" : "a collection of all the notable MOOCs I've done",
			"image" : "",
			"url" : "http://martin-martin.github.io/my-moocs/"
		},
		{
			"title" : "The Doom of Jack",
			"dates" : "2015-12",
			"description" : "using numpy and pandas to analyze the Titanic dataset, to answer whether Jack Dawson died in vain",
			"image" : "",
			"url" : "http://martin-martin.github.io/titanic_analysis/"
		},
		{
			"title" : "Cleaning Las Vegas",
			"dates" : "2016-01 - 2016-02",
			"description" : "exploring the city of Las Vegas, cleaning street names and doing data wrangling with XML ElementTree",
			"image" : "",
			"url" : "https://github.com/martin-martin/cleaning-las-vegas/blob/master/las_vegas_summary.ipynb"
		},
		{
			"title" : "Presidential $$",
			"dates" : "2016-02",
			"description" : "exploratory data analysis with R regarding the individual contributions to the 2016 presidential elections in the USA",
			"image" : "",
			"url" : "https://github.com/martin-martin/presidential_dollars/blob/master/presidential_money.Rmd"
		}
	]
}

// writing some functions for populating the page easier
var editAndInclude = function(initialVar, frame, htmlId) {
	// formatting the variables as HTML
	var formattedVar = frame.replace("%data%", initialVar);
	// including the formatted HTML chunks into the DOM
	$(htmlId).append(formattedVar);
};

var gotJob = function(jobObjPos) {
	$("#workExperience").append(HTMLworkStart);
	editAndInclude(work.jobs[jobObjPos].employer, HTMLworkEmployer, "#workExperience");
	editAndInclude(work.jobs[jobObjPos].title, HTMLworkTitle, "#workExperience");
	editAndInclude(work.jobs[jobObjPos].dates, HTMLworkDates, "#workExperience");
	editAndInclude(work.jobs[jobObjPos].location, HTMLworkLocation, "#workExperience");
	editAndInclude(work.jobs[jobObjPos].description, HTMLworkDescription, "#workExperience");
};

var didProject = function(projObjPos) {
	$("#projects").append(HTMLprojectStart);
	editAndInclude(projects.projects[projObjPos].title, HTMLprojectTitle, "#projects");
	editAndInclude(projects.projects[projObjPos].dates, HTMLprojectDates, "#projects");
	editAndInclude(projects.projects[projObjPos].description, HTMLprojectDescription, "#projects");
	editAndInclude(projects.projects[projObjPos].image, HTMLprojectImage, "#projects");
	editAndInclude(projects.projects[projObjPos].url, HTMLprojectUrl, "#projects");
};

//// calling the function on my elements
// creating the header
editAndInclude(bio.bioPic, HTMLbioPic, "#header");
editAndInclude(bio.name, HTMLheaderName, "#header");
editAndInclude(bio.role, HTMLheaderRole, "#header");
editAndInclude(bio.welcomeMsg, HTMLwelcomeMsg, "#header");
// adding skills
$("#header").append(HTMLskillsStart);
for (skill in bio.skills){
	editAndInclude(bio.skills[skill], HTMLskills, "#skills");
	};
// adding contacts at the top
editAndInclude(bio.contact.mobile, HTMLmobile, "#topContacts");
editAndInclude(bio.contact.email, HTMLemail, "#topContacts");
editAndInclude(bio.contact.github, HTMLgithub, "#topContacts");
editAndInclude(bio.contact.blog, HTMLblog, "#topContacts");
editAndInclude(bio.contact.location, HTMLlocation, "#topContacts");
// adding work objects
for (job in work.jobs) {
	gotJob(job)
};
// adding project objects
for (project in projects.projects) {
	didProject(project)
};
// adding school objects

// adding MOOC objects

// adding contacts at the bottom
editAndInclude(bio.contact.mobile, HTMLmobile, "#footerContacts");
editAndInclude(bio.contact.email, HTMLemail, "#footerContacts");
editAndInclude(bio.contact.github, HTMLgithub, "#footerContacts");
editAndInclude(bio.contact.blog, HTMLblog, "#footerContacts");
editAndInclude(bio.contact.location, HTMLlocation, "#footerContacts");