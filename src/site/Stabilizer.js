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
    for(var stabilizer in Stabilizer)
    {
        if(stabilizer.valueOf() == value)
        {
            return stabilizer;
        }
    }
    return Stabilizer.NONE;
};
