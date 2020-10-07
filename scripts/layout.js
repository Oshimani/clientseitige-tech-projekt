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
            <a href="/repositories.html" class="nav-item">
                Repositories
            </a>
        </nav>

        <hr class="glob-divider">
    </header>
`
}

const showContent = () => {
    document.getElementById('content').style ="opacity:100"
}

const onLoad = ()=>{
    insertNavigation()
    showContent()
}