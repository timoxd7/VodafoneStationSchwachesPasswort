function replacePassword() {
    var realPassword = "hier_das_richtige_passwort";

    var value = "lol_1234_XD";
    var startObject = window;
    console.log("Searching in: ");
    console.log(startObject);

    var stack = [[startObject,'']];
    var searched = [];
    var found = false;

    var isArray = function(test) {
        return Object.prototype.toString.call( test ) === '[object Array]';
    }

    while(stack.length) {
        var fromStack = stack.pop();
        var obj = fromStack[0];
        var address = fromStack[1];

        if( typeof obj == typeof value && obj == value) {
            var found = address;
            console.log("Found: ");
            console.log(found);
			console.log(obj);
            eval("window" + found + " = " + "\"" + realPassword + "\"");
            console.log("Renamed");
        }else if(typeof obj == "object" && searched.indexOf(obj) == -1){
           if ( isArray(obj) ) {
              var prefix = '[';
              var postfix = ']';
           }else {
              var prefix = '.';
              var postfix = '';
           }
           for( i in obj ) {
              stack.push( [ obj[i], address + prefix + i + postfix ] );
           }
           searched.push(obj);
        }
    }

    return found == '' ? "Nothing found -> Something went wrong!" : "Done with success. You can now apply the correct password!";
}

replacePassword();
