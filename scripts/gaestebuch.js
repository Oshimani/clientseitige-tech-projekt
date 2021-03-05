class GaestebuchController {

    constructor(params) {
        this.params = this.getUrlParams()
        this.insertFeedback(this.renderFeedback)
    }

    // paramNames is array
    getUrlParams = (paramNames) => {
        // get query params from url
        const arr = window.location.search.split(/[\?\&]/g)

        const queryParams = {}

        // separate query params and save them as an object
        // skip url path
        arr.slice(1, arr.length).forEach(param => {
            // split each param "key=value" notation
            const split = param.split('=')
            queryParams[split[0]] = decodeURIComponent(split[1].replace(/\+/g,' '))
        })

        return queryParams
    }

    insertFeedback = (renderer) => {

        document.getElementById('feedback-anchor').innerHTML = renderer()
    }

    renderFeedback = () => {
        return (
            `
<section>
<h1>Folgende Daten wurden empfangen</h1>

<p>Name: ${this.params.name}</p>
<p>Mail: ${this.params.mail}</p>
<p>Text: ${this.params.text}</p>
<p>Wertung: ${this.params.rating ? "👍" : "👎"}</p>
</section >
    `)
    }
}

const initializeGaestebuchController = () => {
    return new GaestebuchController()
}