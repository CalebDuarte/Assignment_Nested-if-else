let prompt = require('prompt-sync')();

let gpa = parseFloat(prompt(" Please enter your GPA: "));
let SAT = parseInt(prompt(" Enter your SAT score: "));

if(gpa >= 3.0){
    if(SAT >= 1200){
        let activi = prompt(" Do you participate in any extracurriculars? (yes or no): ").toLowerCase();

        if( activi === "yes"){
            let leader = prompt(" Do you have a leadership role? (yes or no): ").toLowerCase();

            if(leader === "yes"){
                console.log(" You have been admitted with Honors!!! :) ");
            }else{
                console.log(" Admitted!! :) ");
            }
        } else{
            if(SAT >= 1400){
                console.log(" You nhave been admitted on probation ");
            } else{
                console.log(" You have been rejected: No extracurriculars and SAT score is below 1400, maybe next time :( ");
            }
        }
    } else{
        console.log(" Rejected: SAT score to low maybe next time :( ");
    }
} else{
    console.log(" Rejected: GPA below requirements maybe next time :( ");
}