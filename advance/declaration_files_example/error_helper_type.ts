window.onload = () => {
    var failureMessage:IResponse  = {
        responseText: {
            'failure': true,
            'errorMessage': "Error message"
        }
    }
    if (ErrorHelper.containsErrors(failureMessage)) {
        ErrorHelper.trace(failureMessage)
    }
}