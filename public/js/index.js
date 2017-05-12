function g(id) {
    return document.getElementById(id);
}

function generateDecision() {
    let question = g('input').value;
    if (question) {
        fetch('/answer')
            .then(function(response) {
                return response.json();
            }).then(function(data) {
            g('out').innerHTML = data;
        }).catch(function(err) {
            console.log(err);
        })
    } else {
        g('out').innerHTML = 'No Question...'
    }
}

function addNewOption() {
    let newOption = g('add_modal_input').value;
    console.log(newOption);
    let message;
    if (newOption) {
        fetch('/new_option',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({text: newOption})
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                message = data.message;
            })
            .catch(function(err) {
                message = err.message;
            });
    } else {
        g('add_status').innerHTML = 'Nothing to send..'
    }
}