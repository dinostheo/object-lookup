/**
 * @module object-lookup
 */

/**
 * Check if the object properties exist and return the value. Otherwise false.
 *
 * @param  {Object} obj        - The object to lookup
 * @param  {string} properties - Dot (.) separated properties to evaluate
 *
 * @return {mixed} The value of the lookup or false in case of undefined.
 */
module.exports = function (obj, properties) {
    var state = obj;
    var value = state;

    properties && properties.split('.').forEach(function (prop) {
        if (state[prop]) {
            state = state[prop];
            value = state;
        } else {
            value = false;
            return;
        }
    });

    return value;
};
