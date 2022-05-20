/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors
*/
const addSkillToMentorsList = (mentors, newSkill) => {
  mentors.forEach((mentor) => {
    mentor.skills.push(newSkill);
  });
};

/*
5. Create a function to remove a skill to all members in a list of mentors
*/
function removeSkill(mentors, newSkill) {
  mentors.forEach((mentor) => {
    positionSkill = mentor.skills.indexOf(newSkill);
    if (positionSkill >= 0) {
      mentor.skills.splice(positionSkill, mentor.skills.length - 1);
    }
  });
  //your code here
}

/*

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array
*/

function addStudentLikes(mentors) {
  //your code here
  mentors.forEach((mentor) => {
    mentor.studentLikes++;
  });
}

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS", "React", "Node"],
    class: "Mar1",
    studentLikes: 0,
    job: {
      company: "Google",
      position: "Senior developer",
      city: "Barcelona",
    },
    addSkill(skill) {
      this.skills.push(skill);
    },
    addStudentLikes() {
      this.studentLikes++;
    },
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job: {
      company: "FC Barcelona",
      position: "Player",
      city: "Barcelona",
    },
    addSkill(skill) {
      this.skills.push(skill);
    },
    addStudentLikes() {
      this.studentLikes++;
    },
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React", "Angular", "Python", "Node"],
    class: "Mar4",
    studentLikes: 0,
    job: {
      company: "Facebook",
      position: "Software Manager",
      city: "Chicago",
    },
    addSkill(skill) {
      this.skills.push(skill);
    },
    addStudentLikes() {
      this.studentLikes++;
    },
  },
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML", "JS", "React"],
    class: "Mar2",
    studentLikes: 0,
    job: {
      company: "Amazon",
      position: "Senior developer",
      city: "Barcelona",
    },
    addSkill(skill) {
      this.skills.push(skill);
    },
    addStudentLikes() {
      this.studentLikes++;
    },
  },
];

//YOUR CODE HERE

mentors.forEach((mentor) => {
  if (mentor.skills.includes("React") && mentor.job.city === "Barcelona")
    console.log(
      `Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and i know React.`
    );
});

mentors.forEach((mentor) => {
  if (mentor.job.city === "Barcelona") {
    mentor.class = "Jun1";
    mentor.skills.push("SQL");
  }
});

const mentorWithMoreSkills = (mentors) => {
  let maxSkillNumber = 0;
  let positionMentor = 0;
  mentors.forEach((mentor, index) => {
    if (mentor.skills.length > maxSkillNumber) {
      maxSkillNumber = mentor.skills.length;
      positionMentor = index;
    }
  });
  return mentors[positionMentor].firstName;
};

console.log(mentorWithMoreSkills(mentors));
