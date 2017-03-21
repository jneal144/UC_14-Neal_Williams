// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    allClear();
});
// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
    addDecimal();
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    allClear();
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test("Change sign test", function (assert) {
    addDigit('1');
    changeSign();
    assert.deepEqual(document.getElementById("screen").value, "-1", "Passed - Expected -1");
    allClear();
});
//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test("Square root test", function (assert) {
    addDigit('4');
    squareRoot();
    assert.deepEqual(document.getElementById("screen").value, "2", "Passed - Expected 2");
});
//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test("Square test", function (assert) {
    addDigit('2');
    square();
    assert.deepEqual(document.getElementById("screen").value, "4", "Passed - Expected 4");
});
//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test("Delete current input", function (assert) {
    addDigit('1');
    addDigit('2');
    Clear();
    assert.deepEqual(document.getElementById("screen").value, "0", "Passed - Expected 0");
});
//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test("Zero Error Test", function (assert) {
    addDigit('1');
    storeOperator('/');
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "ERROR: Divide by 0!", "Passed-0 error dsiplayed");
    allClear();
});
//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test("Digit limiter test", function (assert) {
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    addDigit('1');
    assert.equal(document.getElementById("screen").value, "1111111111111111", "Passed-expected 16 digits");
    allClear();
});
//Test for store memory function.
QUnit.test("Store memory test", function (assert) {
    addDigit('1');
    memoryStore();
    assert.deepEqual(sto, "1", "Passed-Expect sto = 2")
    allClear();
});
//Test for add memory function
QUnit.test("Add memory test", function (assert) {
    addDigit('1');
    memoryStore();
    addDigit('3');
    memoryAdd();
    assert.deepEqual(document.getElementById("screen").value, "4", "Passed - Expected 4");
    allClear();
});
//Test for subtract memory function
QUnit.test("Subtract memory test", function (assert) {
    addDigit('3');
    memoryStore();
    addDigit('1');
    memorySub();
    assert.deepEqual(document.getElementById("screen").value, "2", "Passed - Expected 2");
    allClear();
});
