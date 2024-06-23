"use strict";
// test
const age = 20;
const firstName = "rwaa";
function getDeatails(age, name) {
    if (name === "rwaa") {
        return [age, name];
    }
}
const result = getDeatails(age, firstName);
console.log(result ? result : "name must be rwaa");
