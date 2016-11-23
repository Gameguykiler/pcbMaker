goog.provide('pcbMaker.Key');

goog.require('pcbMaker.KeySize');
goog.require('pcbMaker.SwitchType');
goog.require('pcbMaker.Row');
goog.require('pcbMaker.Stabilizer');

/**
 * Constructor for a Key.
 *
 * @param{string} keyName
 * @param{KeySize} keySize
 * @param{SwitchType} switchType
 * @param{Row} row
 * @param{Stabilizer} stabilizer
 * @constructor
 */
function Key(keyName, keySize, switchType, row, stabilizer)
{
    this._keyName = keyName;
    this._keySize = keySize;
    this._switchType = switchType;
    this._row = row;
    this._stabilizer = stabilizer;
}

/**
 * Sets the value of keyName.
 *
 * @param{string} keyName The name of the key.
 */
Key.prototype.setKeyName = function(keyName)
{
    this._keyName = keyName;
};

/**
 * Returns the value of keyName.
 *
 * @return{string} The name of the key.
 */
Key.prototype.getKeyName = function()
{
    return this._keyName;
};

/**
 * Sets the value of keySize.
 *
 * @param{KeySize} keySize The size of the key.
 */
Key.prototype.setKeySize = function(keySize)
{
    this._keySize = keySize;
};

/**
 * Returns the value of keySize..
 *
 * @return{KeySize} The size of the key.
 */
Key.prototype.getKeySize = function()
{
    return this._keySize;
};

/**
 * Sets the value of switchType.
 *
 * @param{SwitchType} switchType The type of the key.
 */
Key.prototype.setSwitchType = function(switchType)
{
    this._switchType = switchType;
};

/**
 * Returns the value of switchType.
 *
 * @return{SwitchType} The type of the key.
 */
Key.prototype.getSwitchType = function()
{
    return this._switchType;
};

/**
 * Sets the value of row.
 *
 * @param{Row} row The row of the key.
 */
Key.prototype.setRow = function(row)
{
    this._row = row;
};

/**
 * Returns the value of row.
 *
 * @return{Row} The row of the key.
 */
Key.prototype.getRow = function()
{
    return this._row;
};

/**
 * Sets the value of stabilizer.
 *
 * @param{Stabilizer} stabilizer The stabilizer of the key.
 */
Key.prototype.setStabilizer = function(stabilizer)
{
    this._stabilizer = stabilizer;
};

/**
 * Returns the value of stabilizer.
 *
 * @return{Stabilizer} The stabilizer of the key.
 */
Key.prototype.getStabilizer = function()
{
    return this._stabilizer;
};

/**
 * Resets the key to its default state.
 */
Key.prototype.resetKey = function()
{
    this._keyName = '';
    this._keySize = new KeySize(1, 1);
    this._stabilizer = Stabilizer.NONE;
};

/**
 * Returns a clone of this key.
 *
 * @return{Key} A copy of this key.
 */
Key.prototype.clone = function()
{
    var copy = new Key();
    copy.setKeyName(this._keyName);
    copy.setKeySize(this._keySize);
    copy.setRow(this._row);
    copy.setStabilizer(this._stabilizer);
    copy.setSwitchType(this._switchType);
    return copy;
};

/**
 * Returns this Key as a string.
 *
 * @return{string} This key.
 */
Key.prototype.toString = function()
{
    return "Key[" + this._keyName + ", " + this._keySize.toString() + ", " + this._switchType + ", " + this._row + ", " + this._stabilizer + "]";
};
