var lookup = require('../');
var expect = require('chai').expect;

describe('Lookup: ', function () {
    describe('False scenarios: ', function () {
        it('should return false when property is undefined', function () {
            expect(lookup({}, 'one')).to.be.false;
        });

        it('should return false when calling property of undefined', function () {
            expect(lookup({}, 'one.two.three')).to.be.false;
        });

        it('should return false when object is undefined', function () {
            expect(lookup(undefined)).to.be.false;
        });

        it('should return false when object is null', function () {
            expect(lookup(null)).to.be.false;
        });

        it('should return false with invalid properties', function () {
            expect(lookup({}, '.one')).to.be.false;
            expect(lookup({}, 'one.')).to.be.false;
        });
    });

    describe('Success scenario: ', function () {
        it('should return the value of the object when properties are not passed', function () {
            expect(lookup({})).to.deep.equal({});
            expect(lookup({one: 'one'})).to.deep.equal({one: 'one'});
            expect(lookup({one: 'one'}, null)).to.deep.equal({one: 'one'});
            expect(lookup({one: 'one'}, undefined)).to.deep.equal({one: 'one'});
            expect(lookup({one: 'one'}, false)).to.deep.equal({one: 'one'});
            expect(lookup({one: 'one'}, '')).to.deep.equal({one: 'one'});
        });

        it('should return the value of the object when correct properties are passed', function () {
            expect(lookup({})).to.deep.equal({});
            expect(lookup({one: 'one'}, 'one')).to.equal('one');
            expect(lookup({one: {two: 'two'}}, 'one.two')).to.equal('two');
            expect(lookup({one: {two: {three: 'three'}}}, 'one.two.three')).to.equal('three');
            expect(lookup({one: {two: {three: {four: 'four'}}}}, 'one.two.three')).to.deep.equal({four: 'four'});
        });
    });
});
