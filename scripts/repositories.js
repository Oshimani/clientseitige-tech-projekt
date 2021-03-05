function Repository(language, name, description, created_at, pushed_at, html_url) {
    var language, name, description, created_at, pushed_at, html_url

    // ctor
    this.language = language
    this.name = name
    this.description = description
    this.created_at = created_at
    this.pushed_at = pushed_at
    this.html_url = html_url

    this.render = (index) => {
        return `
    <!-- REPO -->
    <div class="repo-card">
        <!-- HEADER -->
        <header>
            <div class="number">${index + 1}</div>
            ${this.language ?
                `<div class="language">${this.language}</div>`
                : ""
            }
            <div class="title">${this.name}</div>
        </header>
    
        <!-- CONTENT -->
        <section class="content">
           ${this.description || ""}
        </section>
    
        <!-- SPACER -->
        <div class="spacer"></div>
        
        <!-- METADATA -->
        <section class="metadata">
            <div class="created">
                Created: <span>${new Date(this.created_at).toLocaleDateString()}</span>
            </div>
            <div class="commited">
                Last Commit: <span>${new Date(this.pushed_at).toLocaleDateString()}</span>
            </div>
        </section>
    
        <!-- FOOTER -->
        <footer>
            <a target="_blank" href="${this.html_url}">
                Check out on GitHub
            </a>
            <a download href="${this.html_url}/zipball/master/">
                Download Source Code
            </a>
        </footer>
    </div>
    `
    }
}

class RepositoriesController {

    constructor(repos, reposPromise) {
        this.reposPromise = this.loadRepos()

            .then(
                repos => {
                    // mapping to repo object and save as array
                    this.repos = repos.map(repo => {
                        return new Repository(
                            repo.language,
                            repo.name,
                            repo.description,
                            repo.created_at,
                            repo.pushed_at,
                            repo.html_url
                        )
                    })

                    // render repos
                    this.renderRepos()
                })
    }

    renderRepos = () => {
        // render each repo
        document.getElementById('repos-anchor').innerHTML =
            this.repos
                // returns stringified array, separated by ","
                .map((repo, index) => {
                    return repo.render(index)
                })
                // remove "," from stringified array
                .join("")

        // fade in
        const reposElements = document.getElementsByClassName("repo-card")

        for (let index = 0; index < reposElements.length; index++) {
            // delay and fade in
            setTimeout(() => {
                reposElements[index].style = "opacity:100"
            }, index * 140);
        }
    }

    loadRepos = () => {
        return new Promise((resolve, reject) => {
            fetch('https://api.github.com/users/Oshimani/repos?sort=updated')

                // success
                .then(result => {
                    // read body stream
                    result.json()
                        .then(
                            repos => {
                                console.log('Success fetching repos! Found: ', { repos, length: repos.length })
                                resolve(repos)
                            }
                        )
                })

                // error
                .catch(error => {
                    alert('Failed to fetch repos!')
                    console.error('Failed to fetch repos!', error)
                    reject(error)
                })


        })
    }

}

const initializeRepositories = () => {
    return new RepositoriesController()
}
