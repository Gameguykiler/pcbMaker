goog.provide('pcbMaker.SwitchType');

/**
 * @enum{string}
 */
SwitchType =
    {
        MX_RGB_BLACK: 'MX1A-11Nx',
        MX_BLACK: 'MX1A-11xx',
        MX_LINEAR_GREY: 'MX1A-21xx',
        MX_LOCK: 'MX1A-31xx',
        MX_WHITE: 'MX1A-A1xx',
        MX_CLEAR: 'MX1A-C1xx',
        MX_TACTILE_GREY: 'MX1A-D1xx',
        MX_RGB_BLUE: 'MX1A-E1Nx',
        MX_BLUE: 'MX1A-E1xx',
        MX_GREEN: 'MX1A-F1xx',
        MX_RGB_BLOWN: 'MX1A-G1Nx',
        MX_BROWN: 'MX1A-G1xx',
        MX_RGB_RED: 'MX1A-L1Nx',
        MX_RED: 'MX1A-L1xx',
        MX_SILENT_RGB_BLACK: 'MX3A-11Nx',
        MX_SILENT_BLACK: 'MX3A-11xx',
        MX_SILENT_RGB_RED: 'MX3A-L1Nx',
        MX_SILENT_RED: 'MX3A-L1xx',
        DEFAULT: 'Default'
    };

SwitchType.matchSwitch = function(value)
{
    var keys = Object.keys(SwitchType);
    for(var key of keys)
    {
        if(SwitchType[key] === value)
        {
            return key;
        }
    }
    return SwitchType.DEFAULT;
};
