
const helpers = (() => {

    const _ = require('lodash');

    const fileLineParse = require('file-line-parse');

    const filterEveryOtherLine = (lines, startWithFirst)=>{
        
        const index = startWithFirst ? 0 : 1

        const filtered = _.filter(lines, (item, index) => {
            const filter = (index) => filtered = index == 0 ? index % 2 ==0 : index %2 ==1;
            return filter(index);
        });
    }

    
    const fileLineParse = (input) => (keys) => {

        return new Promise((resolve, reject) => {
            fileLineParse(input, keys)
            .then(lines => {
                resolve(lines);
                });
            }
        );
    }

    return {
        filterEveryOtherLine : filterEveryOtherLine,
        filterEveryOtherLine : filterEveryOtherLine
    }

})();