goog.provide('pcbMaker.KeySize');

/**
 * Constructor for a KeySize.
 *
 * @param{number} length
 * @param{number} width
 * @constructor
 */
function KeySize(length, width)
{
    this._length = length;
    this._width = width;
}

/**
 * Sets the length of the KeySize.
 *
 * @param{number} length The length of the key.
 */
KeySize.prototype.setLength = function(length)
{
    this._length = length;
};

/**
 * Returns the length of the KeySize.
 *
 * @return{number} The length of the key.
 */
KeySize.prototype.getLength = function()
{
    return this._length;
};

/**
 * Sets the width of the KeySize.
 *
 * @param{number} width The width of the key.
 */
KeySize.prototype.setWidth = function(width)
{
    this._width = width;
};

/**
 * Returns the width of the KeySize.
 *
 * @return{number} The width of the key.
 */
KeySize.prototype.getWidth = function()
{
    return this._width;
};


/**
 * Returns the KeySize in string form.
 *
 * @return{string} The string form of they KeySize.
 */
KeySize.prototype.toString = function()
{
    return "[" + this._width + ", " + this._length+ "]";
};
