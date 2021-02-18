class HobbiesController {

    constructor(type) {
        this.type = this.getHobbyType()['type']
        this.greet()
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
        document.getElementById('greeting-anchor').innerText = `Hello you are at ${this.type}`
    }
}


const initializeHobbies = () => {
    const hc = new HobbiesController()
}