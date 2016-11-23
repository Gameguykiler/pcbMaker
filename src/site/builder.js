goog.provide('pcbMaker.Builder');

goog.require('pcbMaker.Parser');

function build(rawData)
{
    var arr = rawToArr(rawData);
    console.log(arr);
}
