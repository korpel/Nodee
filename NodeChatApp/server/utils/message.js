var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocationMessage = (from, latitude, longtude) =>{
    return {
        from,
        url: ``,
        createdAt: new Date().getTime()
    };
};

module.exports = {generateMessage, generateLocationMessage};