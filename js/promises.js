const wait = (num) => {
    return new Promise((resolve,reject) => {
       setTimeout(()=>{
           if(typeof num === 'number') {
               resolve(`you'll see this after ${num} milliseconds`);
           } else {
               reject(`This didn't work... probably because ${num} is not a number`)
           }
       }, num)
    }).then((data) => {
        console.log(data);
    }).catch((data)=>{
            console.log(data);
        })
};

wait(2000);
wait('banana');


/*last commit made on master branch 'https://api.github.com/users/nnosajasonn/events'*/

let userInfo = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': githubKey}})
        .then(response => response.json())
        .then(data => {
            console.log(data);
         putItOnThePage(data);
            return data
        })
/*
        .catch(err => console.log(err));
*/
};


userInfo('Josh-rms');


function putItOnThePage(obj) {
    let date = obj[0].created_at.slice(0, 10);
    let time = obj[0].created_at.slice(11, 16);
    date = date.split('-');
    date = date[1] + '-' + date[2] + '-' + date[0];

    let html = `<h3>User's name: </h3><p>${obj[0].actor.display_login}</p>`;
    html += `<h3>User's most recent commit:</h3><p>${obj[0].payload.commits[0].sha} <br> (time: ${time} date: ${date})</p><h3>Commit Message: </h3><p>${obj[0].payload.commits[0].message}</p>`

    document.getElementById('lastCommit').innerHTML = html

}
