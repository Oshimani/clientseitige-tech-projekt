class LayoutController {

    constructor() {
        this.insertNavigation()
        this.showContent()
    }

    // INSERT NAVIGATION
    insertNavigation = () => {
        console.log("layouts.js initialized")

        // insert header
        document.getElementById('header-anchor').innerHTML = `
    <!-- HEADER CSS -->
    <link rel="stylesheet" href="/styles/glob-navigation.css">
    
    <!-- HEADER -->
    <header class="glob-header">
        
        <!-- NAVIGATION -->
        <nav class="glob-navigation">
            
            <a href="/" class="nav-item">
                Home
            </a>

            <div  class="nav-item">
                Hobbies
                <ul class="nav-dropdown">
                    <li>
                        <a href="/hobbies.html?type=mtb">Mountainbike</a>
                    </li>

                    <li>
                        <a href="/hobbies.html?type=prog">Programmieren</a>
                    </li>

                    <li>
                        <a href="/hobbies.html?type=guitar">Gitarre</a>
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

    showContent = () => {
        document.getElementById('content').style = "opacity:100"
    }
}

const initializeLayout = () => {
    const layout = new LayoutController()
}
