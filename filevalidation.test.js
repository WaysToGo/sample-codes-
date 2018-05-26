var validateFile=require('../index')
var assert = require('assert');
it('should return true or false baed on file extension', function(){
 assert.equal(validateFile('1487818438.jpgs'),true);

});