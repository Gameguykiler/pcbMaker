goog.provide('pcbMaker.Row');

/**
 * @enum{number}
 */
Row =
    {
        R1: 'R1',
        R2: 'R2',
        R3: 'R3',
        R4: 'R4',
        SPACE: 'SPACE'
    };

Row.matchRow = function(value)
{
    var keys = Object.keys(Row);
    for(var key of keys)
    {
        if(Row[key] == value)
        {
            return key;
        }
    }
    return Row.R1;
};
