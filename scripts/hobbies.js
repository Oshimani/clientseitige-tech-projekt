class HobbiesController {

    constructor(type) {
        this.type = this.getHobbyType()['type']
        this.greet()
        this.renderBody()
    }

    getHobbyType = () => {
        // get query params from url
        const arr = window.location.search.split(/[\?\&]/g)

        const queryParams = {}

        // separate query params and save them as an object
        // skip url path
        arr.slice(1, arr.length).forEach(param => {
            // split each param "key=value" notation
            const split = param.split('=')
            queryParams[split[0]] = split[1]
        })

        return queryParams
    }

    greet() {
        document.getElementById('heading-anchor').innerHTML = `Hallo, Sie sind bei <code style="color: var(--primary);">${this.resolveDisplayName(this.type)}</code>`
    }

    renderBody() {
        var content
        switch (this.type) {
            case "mtb":
                content = `<img src="${this.getImageUrl(this.type)}" class="image-full" />`
                break;

            default:
                content = `<iframe src="${this.getImageUrl(this.type)}" width="100%" height="600px"></iframe>`
                break;
        }
        document.getElementById('content-anchor').innerHTML = content

    }

    resolveDisplayName(type) {
        switch (type) {
            case "mtb":
                return "Mountainbike"
            case "guitar":
                return "Gitarre"
            case "prog":
                return "Programmieren"
            default:
                throw "Failed to match type"
        }
    }

    getImageUrl(type) {
        switch (type) {
            case "mtb":
                return "/assets/mtb.jpg"
            case "guitar":
                return "https://www.lagguitars.com/de_DE/produkte/westerngitarren-dreadnought-cutaway-gla-t270dce"
            case "prog":
                return "/repositories.html"
            default:
                throw "Failed to match type"
        }
    }

    openWindow(url, width, height, resizable) {
        window.open(url, 'My Image', `width=${width}px, height=${height}px, resizable=${resizable}`)
    }
}


const initializeHobbies = () => {
    return new HobbiesController()
}
