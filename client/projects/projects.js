//Meteor.subscribe('projects');
Template.projects.helpers({
    projects: function() {
        //return Projects.find();
        // Dummy data for now
        var projects = [
        {
            image: "http://www.placecage.com/g/160/160",
            title: "Titel van project 1",
            username: "Robin",
            link: "http://onepercentclub.com/fdsdsfsfsd",
            amount: "60,000"
        }, 
        {
            image: "http://www.placecage.com/c/160/160",
            title: "Titel van project 2",
            username: "Ruben",
            link: "http://onepercentclub.com/rewrwerew",
            amount: "30,000"
        }, 
        {
            image: "http://www.placecage.com/gif/160/160",
            title: "Titel van project 3",
            username: "Frans",
            link: "http://onepercentclub.com/rewrwerew",
            amount: "25,000"
        }
        ];
        return projects;
    }
})
