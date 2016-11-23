goog.provide('pcbMaker.Parser');

goog.require('pcbMaker.Key');

/**
 * Transforms a raw string into an array of rows of the keyboard.
 *
 * @param{string} rawData The raw data from keyboard-layout-editor.com.
 *
 * @return{Array.<string>} The rows of the keyboard.
 */
function rawToArr(rawData)
{
    var arr = [];
    var prev = 0;
    var inString = false;
    var index = 0;
    var line = '';
    var lineKeysArr = [];
    for(var i = 1; i < rawData.length; i++)
    {
        if(rawData[i] == '"' && (rawData[i - 1] != '\\' || rawData[i - 2] == '\\'))
        {
            inString = !inString;
        }
        else if(rawData[i] == ']' && !inString)
        {
            index = i;
            line = rawData.substring(prev, index + 1);
            lineKeysArr = parseLine(line);
            arr += [lineKeysArr];
            prev = index + 3;
            i += 3;
        }
    }
    return arr;
}

/**
 * Parses a line of raw data to figure out which keys are contained within.
 *
 * @param{string} line A line of raw data.
 *
 * @return{Array.<Key>} An array of keys found from the line of raw data.
 */
function parseLine(line)
{
    var key = new Key('', new KeySize(1, 1), SwitchType.DEFAULT, Row.R1, Stabilizer.NONE);
    var keys = [];
    var characteristicName = '';
    var characteristicValue = '';
    var state = 'default'; // 'characteristicName', 'characteristicValue', 'keyName',
    var marker = 0;
    for(var i = 1; i < line.length - 1; i++)
    {
        if(state == 'default')
        {
            // start of a characteristic
            if(line.charAt(i) == '{')
            {
                state = 'characteristicName';
                marker = i + 1;
            }
            else if(line.charAt(i) == '"' && line.charAt(i - 1) != '\\')
            {
                state = 'keyName';
                marker = i + 1;
            }
            else if(line.charAt(i) == ',')
            {
                // do nothing
                // he's mine to finish
            }
        }
        else if(state == 'characteristicName')
        {
            if(line.charAt(i) == ':')
            {
                state = 'characteristicValue';
                characteristicName = line.substring(marker, i);
                marker = i + 1;
            }
        }
        else if(state == 'characteristicValue')
        {
            if(line.charAt(i) == ',')
            {
                state = 'characteristicName';
                characteristicValue = line.substring(marker, i);
                marker = i + 1;
                key = updateKey(key, characteristicName, characteristicValue);
            }
            else if(line.charAt(i) == '}')
            {
                state = 'default';
                characteristicValue = line.substring(marker, i);
                key = updateKey(key, characteristicName, characteristicValue);
            }
        }
        else if(state == 'keyName')
        {
            if(line.charAt(i) == '"' && line.charAt(i - 1) != '\\')
            {
                state = 'default';
                key.setKeyName(line.substring(marker, i));
                keys.push(key);
                key = key.clone();
                key.resetKey();
            }
        }
    }
    return keys;
}

/**
 * Updates the key with new characteristics.
 *
 * @param{Key} key The original key.
 * @param{string} name The raw name of the characteristic.
 * @param{string} value The raw value of the characteristic.

 * @return{Key} The updated key.
 */
function updateKey(key, name, value)
{
    switch(determineCharacteristicNumber(name))
    {
    case 0:
        key.getKeySize().setWidth(Number.parseFloat(value));
        break;
    case 1:
        key.setSwitchType(SwitchType.matchSwitch(value.substring(1, value.length - 1)));
        break;
    case 2:
        key.setRow(Row.matchRow(value.substring(1, value.length - 1)));
        break;
    case 3:
        key.setStabilizer(Stabilizer.matchStabilizer(value));
        break;
    default:
        console.log("Unimplemented key characteristic: " + name);
    }
    return key;
}

/**
 * Parses a characteristic name to determine which characteristic it refers to.
 *
 * @param{string} name The name of the characteristic.
 *
 * @return{number} A number corresponding to a characteristic of a key.  0 is
 *     keySize, 1 is switchType, 2 is row, 3 is stabilizer, and -1 is anything else.
 */
function determineCharacteristicNumber(name)
{
    if(name == 'w' || name == 'h')
    {
        return 0;
    }
    else if(name == 'st')
    {
        return 1;
    }
    else if(name == 'p')
    {
        return 2;
    }
    else if(name == 'a')
    {
        return 3;
    }
    return -1;
}
