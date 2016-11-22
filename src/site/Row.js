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
    for(var row in Row)
    {
        if(row.valueOf() == value)
        {
            return row;
        }
    }
    return Row.R1;
};
