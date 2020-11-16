// INSERT NAVIGATION
const insertNavigation = () => {
    console.log("layouts.js");
    document.getElementById('header-anchor').innerHTML = `
    <!-- HEADER -->
    <header class="golb-header">

        <!-- NAVIGATION -->
        <nav class="glob-navigation">
            
            <a href="/" class="nav-item">
                Home
            </a>

            <div href="/hobbies.html" class="nav-item">
                Hobbies
                <ul class="nav-dropdown">
                    <li>
                        <a>Mountainbike</a>
                    </li>

                    <li>
                        <a>Programmieren</a>
                    </li>

                    <li>
                        <a>Gitarre</a>
                    </li>
                </ul>
            </div>

            <a href="/repositories.html" class="nav-item">
                Repositories
            </a>

        </nav>

        <hr class="glob-divider">
    </header>
`
}

const showContent = () => {
    document.getElementById('content').style = "opacity:100"
}

const onLoad = () => {
    insertNavigation()
    showContent()
}