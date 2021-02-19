// string prototype for casting to boolean
String.prototype.toBoolean = function () {
    console.log(this);
    if (this == "true" || this == "1")
        return true

    if (this == "false" || this == "0")
        return false

    throw "String does not contain a boolean value"
}

const preSubmit = () => {
    // onclick gets executed before the actual submission
    const form = document["gaestebuch-form"]

    // insert default email
    if (!form.mail.value)
        form.mail.value = "junglbj@hochschule-trier.de"

    // insert default name
    if (!form.name.value)
        form.name.value = "Jannick Jungbluth"

    // insert default message
    if (!form.text.value)
        form.text.value = "Das ist eine Standardnachricht"
}

const onSubmit = (event) => {
    console.log(event);
    const form = document["gaestebuch-form"]

    if (form.rating.value) {
        // cast rating to boolean
        isUpvoted = form.rating.value.toBoolean()

        // bother people who want to leave negative reviews
        if (isUpvoted === false) {

            if (!confirm("Sind Sie sicher, dass Sie diese Rückmeldung geben wollen?"))
                event.preventDefault()
        }
    }
}
