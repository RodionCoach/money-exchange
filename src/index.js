// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    while(currency > 1){
        if(currency % 50 > 0){
            obj['H']++;
            currency - 50;
        }else if(currency % 25 > 0){
            obj['Q']++;
            currency - 25;
        }else if(currency % 10 > 0){
            obj['D']++;
            currency - 10;
        }else if(currency % 5 > 0){
            obj['N']++;
            currency - 5;
        }else if(currency % 1 > 0){
            obj['P']++;
            currency - 1;
        }
    }

}
