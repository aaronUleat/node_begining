var rimraf = require("Listing 4-28. global/rimrafdemo/app.js");
rimraf("./foo", function (err) {
    if(err) console.log("Error occured:", err);
    else console.log("Directory foo deleted");
})