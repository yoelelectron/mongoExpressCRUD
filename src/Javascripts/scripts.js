const e = require('express')

document.getElementById('delete').addEventListener('click', function (e){
    let response = confirm('Are you sure?')
    if (!response) {
        e.preventDefault()
    }
}
)