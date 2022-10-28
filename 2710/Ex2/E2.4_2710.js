function findAge(current_date, current_month, current_year, birth_date, birth_month, birth_year){
    month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (birth_date > current_date) {
    current_date = current_date + month[birth_month - 1];
    current_month = current_month - 1;
    }
    if (birth_month > current_month) {
    current_year = current_year - 1;
    current_month = current_month + 12;
    }
    var calculated_date = current_date - birth_date;
    var calculated_month = current_month - birth_month;
    var calculated_year = current_year - birth_year;
    console.log("Present Age: "+(calculated_year)+" ");
    console.log("Months: "+calculated_month+" ");
    console.log("Days: "+calculated_date+" ");
    }
    var current_date = 27;
    var current_month = 10;
    var current_year = 2022;
    
    var birth_date = 05;
    var birth_month = 10;
    var birth_year = 2001;
    
    findAge(current_date, current_month, current_year, birth_date, birth_month, birth_year);