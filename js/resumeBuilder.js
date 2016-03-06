/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = "Martin Breuss";
var formattedRole = "Code Reviewer";

HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);

$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);