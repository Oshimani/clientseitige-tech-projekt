const loadRepos = () => {
    fetch('https://api.github.com/users/Oshimani/repos')

        .then(repos => {
            console.log('Success fetching repos! Found: ', repos.length);

        })

        .catch(error => console.error('Failed to fetch repos!', error))
}

const renderRepo=(repo)=>{
    
}