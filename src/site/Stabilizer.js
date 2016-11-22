goog.provide('pcbMaker.Stabilizer');

/**
 * @enum{number}
 */
Stabilizer =
    {
        NONE: 0,
        CHERRYANDCOSTAR: 1,
        CHERRYONLY: 2,
        COSTARONLY: 3,
        ALPS: 4
    };

Stabilizer.matchStabilizer = function(value)
{
    var keys = Object.keys(Stabilizer);
    for(var stabilizer of keys)
    {
        if(Stabilizer[key] == value)
        {
            return key;
        }
    }
    return Stabilizer.NONE;
};
