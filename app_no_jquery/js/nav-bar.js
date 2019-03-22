var fs = require('fs');
var files = fs.readdirSync('.');



function makeUL(array) {
    // Create the list element:
    var list = document.createElement('nav-group');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('nav-item');
        item.appendChild(document.createElement('div'));
        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('navigation-bar').appendChild(makeUL(files)); //options[0]
