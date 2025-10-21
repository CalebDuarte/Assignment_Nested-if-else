let prompt = require('prompt-sync')();
let degree = prompt(" Do you have the required degree for this job? (yes or no) ").toLowerCase();

if(degree === "yes"){
    let experiance = parseInt(prompt(" How many years of experiance do you have? "));
    if(experiance >= 2){
        let certification = prompt(" Do you have any certifications that would aid in this field? (yes or no) ").toLowerCase();
        if( certification === "yes"){
            console.log(" You would be a strong candidate for this position. ");

            let relocate = prompt(" Are you willing to relocate if this job required? (yes or no) ").toLowerCase();
            if(relocate === "yes"){
                console.log(" Flaged for review (PRIORITY) ");
            }
        } else{
            if (experiance >= 5){
                console.log(" You are a qualified candidate. ");
                let relocate = prompt(" Are you willing to relocate if this position required? (yes or no) ").toLowerCase();
                if(relocate === "yes"){
                    console.log(" Flaged for review (PRIORITY) ");
                }
            } else{
                console.log(" Candidate meets the minimun requirements however lacks certifactions :( ");
            }
        }
    } else{
        console.log(" Entrt-level candidate ");
    }
} else{
    console.log(" Your application has been rejected: Requirements have not been met (Missing required degree) ");
}