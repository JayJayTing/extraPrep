const organizeInstructors = function(instructors) {
    // Put your solution here
    var course = []; var flags = []; var list = {}; 
    for(var i = 0 ; i < instructors.length; i++)
    {
        if(flags[instructors[i]["course"]]) continue;
        flags[instructors[i]["course"]] = true;
        course.push(instructors[i]["course"]);
    }

    for(var a = 0; a < course.length; a ++)
    {
        list[course[a]] = "";
        for(var b = 0; b < instructors.length; b++)
        {
            if(instructors[b]["course"] === course[a])
            {
                list[course[a]] += instructors[b]["name"] + ", ";
            }


        }


    }
return list;

};

console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
]));