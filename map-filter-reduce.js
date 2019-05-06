/*1*/
let users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/*2*/

let lengthThree = users.filter((n)=>{
   return n.languages.length >= 3;
});


console.log(lengthThree);



/*3*/
let emails4All = users.map((n)=>{
    return n.email;
});

console.log(emails4All);

/*4*/
let experience = users.reduce((count, user)=>{
    return count + user.yearsOfExperience;
}, 0);

console.log(experience/users.length);


/*5*/
let longestEmail = emails4All.reduce((long, email)=>{
    if (long.length < email.length){
        long = email
    }
    return long;
},'');
console.log(longestEmail);

/*6*/
let instructorNames = users.reduce((acc, user)=>{
    return acc += `${user.name}, `
}, `Your instructors are: `);

console.log(instructorNames);

/*bonus*/

    let allLanguages = users.reduce((acc, user) => {
        user.languages.forEach((element) => {
            acc.push(element)
        });
        return acc;
    }, []);

    let languagesUnique = allLanguages.filter(function (item, index) {
        return allLanguages.indexOf(item) >= index;
    });
    console.log(languagesUnique);





