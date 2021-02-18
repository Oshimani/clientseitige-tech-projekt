const renderRepo = (repo, index) => {
    return `
<!-- REPO -->
<div class="repo-card">
    <!-- HEADER -->
    <header>
        <div class="number">${index + 1}</div>
        ${repo.language ?
            `<div class="language">${repo.language}</div>`
            : ""
        }
        <div class="title">${repo.name}</div>
    </header>

    <!-- CONTENT -->
    <section class="content">
       ${repo.description || ""}
    </section>

    <!-- SPACER -->
    <div class="spacer"></div>
    
    <!-- METADATA -->
    <section class="metadata">
        <div class="created">
            Created: <span>${new Date(repo.created_at).toLocaleDateString()}</span>
        </div>
        <div class="commited">
            Last Commit: <span>${new Date(repo.pushed_at).toLocaleDateString()}</span>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <a target="_blank" href="${repo.html_url}">
            Check out on GitHub
        </a>
        <a download href="${repo.html_url}/zipball/master/">
            Download Source Code
        </a>
    </footer>
</div>
`
}

const renderRepos = (repos) => {

    // sort repos
    // sorted by backend

    // render each repo
    document.getElementById('repos-anchor').innerHTML =
        repos
            // returns stringified array, separated by ","
            .map((repo, index) => {
                return renderRepo(repo, index)
            })
            // remove "," from stringified array
            .join("")

    // fade in
    const reposElements = document.getElementsByClassName("repo-card")

    for (let index = 0; index < reposElements.length; index++) {
        // delay and fade in
        setTimeout(() => {
            reposElements[index].style = "opacity:100"
        }, index * 80);
    }
}

const loadRepos = () => {
    return (fetch('https://api.github.com/users/Oshimani/repos?sort=updated')

        // success
        .then(result => {
            // read body stream
            result.json()
                .then(
                    repos => {
                        console.log('Success fetching repos! Found: ', { repos, length: repos.length })
                        renderRepos(repos)
                    }
                )
        })

        // error
        .catch(error => {
            alert('Failed to fetch repos!')
            console.error('Failed to fetch repos!', error)
        })
    )
}
