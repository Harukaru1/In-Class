const isValidJSON = obj => {
    try {
        JSON.parse(obj);
        return true;
    } catch (e) {
        return false;
    }
};
console.log(isValidJSON('{"name":"Haru",age:"21"}'));
console.log(isValidJSON('{"name":"Tri","age":21}'));
console.log(isValidJSON(null));