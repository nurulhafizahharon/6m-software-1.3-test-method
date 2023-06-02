let grades = [100, 75, 68, 95, 43];

for (let i=0; i < 5; i++) {
    if(grades[i] > 75) {
        console.log(`Your grade of ${env} is a Pass`);
    }
    else { 
        console.log("Your grade of " + grades[i]+ " is a Fail");
    }
}

const me = {
    fullName: "Nurulhafizah",
    occupation: "Claim Assosiate",
    yearOfBirth: 1993,
    hobbies: ["hobbies1","hobby 2","hobby 3"]
};

console.log(me.hobbies[1]);