import { builtinModules } from "module";

var isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
    ;
};


module.exports = {isRealString};