describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally inline with each other', function() {
    expect(queenAttack([1,1], [2,3])).to.equal(false);
  });

  it('is true if the coordinates are vertically inline with eachother', function() {
    expect(queenAttack([1,1], [2, 1])).to.equal(true);
  });

  it('is true if the coordinates are horizontally inline with each other', function() {
    expect(queenAttack([1,1],[1, 2])).to.equal(true);
  });

  it('is true if the coordinates are diagonally inline with each other', function() {
    expect(queenAttack([1,1], [2,2])).to.equal(true);
  });
});
