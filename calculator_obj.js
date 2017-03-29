function Calculator() {
    this.currentInput = "0";
    this.memory = "0";
    this.operator = 0;
    this.memory = "0";
    this.angleMode = 0;
    this.displayCurrentInput = displayCurrentInput;
    this.addDigit = addDigit;
    this.addDecimal = addDecimal;
    this.allClear = allClear;
    this.storeOperator = storeOperator;
    this.calculate = calculate;
    this.changeSign = changeSign;
    this.clear = clear;
    this.percentage = percentage;
    this.factorial = factorial;
    this.factorial = factorial;
    this.square = square;
    this.squareRoot = squareRoot;
    this.inverse = inverse;
    this.setPi = setPi;
    this.sine = sine;
    this.cosine = cosine;
    this.tangent = tangent;
    this.checkZero = checkZero;
    this.setAngleMode = setAngleMode;
    this.memoryStore = memoryStore;
    this.memoryRecall = memoryRecall;
    this.memoryAdd = memoryAdd;
    this.memorySub = memorySub;
    this.zeroErr = zeroErr;
}

function displayCurrentInput() {
    document.getElementById('screen').value = this.currentInput;
}
/**
 * Allows digits clicked to be displayed in the current input.
 * @param {string} dig Digit to be added to current input string.
 */
function addDigit(dig) {
    if (this.currentInput.length < 16) {
        if ((eval(this.currentInput) == 0) && (this.currentInput.indexOf(".") == -1)) {
            this.currentInput = dig;
        }
        else {
            this.currentInput = this.currentInput + dig;
        }
    }
    this.displayCurrentInput();
}
/**++
 * Adds decimal point to current input string.
 */
function addDecimal() {
    if (this.currentInput.length == 0) {
        this.currentInput = "0.";
    }
    else {
        if (this.currentInput.indexOf(".") == -1) {
            this.currentInput = this.currentInput + ".";
        }
    }
    this.displayCurrentInput();
}
/**
 * Clears calculator memory and current input.
 */
function allClear() {
    this.currentInput = "0";
    this.memory = "0"
    this.operator = 0;
    this.displayCurrentInput();
}
/**
 * Stores +, -, *, /, or ^ operators in memory.
 * @param {string} op denotes operator type
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        this.operator = 1;
    };
    if (op.indexOf("/") > -1) {
        this.operator = 2;
    };
    if (op.indexOf("+") > -1) {
        this.operator = 3;
    };
    if (op.indexOf("-") > -1) {
        this.operator = 4;
    };
    if (op.indexOf("^") > -1) {
        this.operator = 5;
    };
    this.memory = this.currentInput;
    this.currentInput = "0";
    this.displayCurrentInput();
}
/**
 * Based on operator value, perform operation between stored value and current input.
 */
function calculate() {
    if (this.operator == 1) {
        this.currentInput = eval(this.memory) * eval(this.currentInput); //multiply
    };
    if (this.operator == 2) {
        this.currentInput = eval(this.memory) / eval(this.currentInput); //divide
    };
    if (this.operator == 3) {
        this.currentInput = eval(this.memory) + eval(this.currentInput); //add
    };
    if (this.operator == 4) {
        this.currentInput = eval(this.memory) - eval(this.currentInput); //subtract
    };
    if (this.operator == 5) {
        this.currentInput = Math.pow((eval(this.memory)), (eval(this.currentInput))); //raise to power
    }
    this.operator = 0;
    this.memory = "0";
    this.zeroErr();
    this.displayCurrentInput();
}
/**
 * Multiply current input by -1 and display.
 */
function changeSign() {
    this.currentInput = this.currentInput * -1;
    this.displayCurrentInput();
}
/**
 * Set current input to 0 and display.
 */
function clear() {
    this.currentInput = "0";
    this.displayCurrentInput();
}
/**
 * Divide current input by 100 and display.
 */
function percentage() {
    this.currentInput = this.current_input / 100;
    this.displayCurrentInput();
}
/**
 * Calculate and display factorial of current input.
 */
function factorial() {
    var res = this.currentInput;
    if (this.currentInput == 0) { //special case 0!
        res = 1
    }
    else if (this.currentInput > 0) {
        for (i = this.currentInput - 1; i > 0; i--) { //factorial calculation
            res = res * i;
        }
    }
    else if (this.currentInput < 0) {
        res = "ERROR";
    }
    this.currentInput = res;
    this.displayCurrentInput();
}
/**
 * Calculate and display square of current input.
 */
function square() {
    var x = this.currentInput;
    this.currentInput = Math.pow(x, 2);
    this.displayCurrentInput();
}
/**
 * Calculate and display square root of current input.
 */
function squareRoot() {
    this.currentInput = Math.pow(this.currentInput, 1 / 2);
    this.displayCurrentInput();
}
/**
 * Calculate and display inverse of current input.
 */
function inverse() {
    this.currentInput = 1 / this.currentInput;
    this.displayCurrentInput();
}
/**
 * If current input equals infinity, display divide by zero error.
 */
function zeroErr() {
    if (this.currentInput == Infinity) {
        this.currentInput = "ERROR: Divide by 0!";
        this.displayCurrentInput();
    }
}
/**
 * Stores current input as var "sto"
 */
function memoryStore() {
    sto = this.currentInput;
    this.clear();
    this.displayCurrentInput();
}
/**
 * Sets current input to last stored value.
 */
function memoryRecall() {
    this.currentInput = sto;
    this.displayCurrentInput();
}
/**
 * Adds current input to stored value; stores result.
 */
function memoryAdd() {
    this.currentInput = eval(this.sto) + eval(this.currentInput);
    this.sto = this.currentInput;
    this.displayCurrentInput();
}
/**
 * Subtracts current input from stored value; stores result.
 */
function memorySub() {
    this.currentInput = eval(this.sto) - eval(this.currentInput);
    this.sto = this.currentInput;
    this.displayCurrentInput();
}
/**
 * Sets current input to pi (3.1415...)
 */
function setPi() {
    this.currentInput = Math.PI;
    this.displayCurrentInput()
}
/**
 * Switches angle mode from 0 (radians) to 1 (degrees) and vice versa.
 */
function setAngleMode() {
    if (this.angleMode == 0) {
        this.angleMode = 1;
    }
    else {
        this.angleMode = 0;
    }
}
/**
 * Based on angle mode, calculates sine of current input.
 */
function sine() {
    if (this.angleMode == 1) {
        var num = this.currentInput * (pi / 180);
        this.currentInput = Math.sin(num);
    }
    else {
        this.currentInput = Math.sin(this.currentInput);
    }
    this.displayCurrentInput();
    this.checkZero();
}
/**
 * Based on angle mode, calculates cosine of current input.
 */
function cosine() {
    if (this.angleMode == 1) {
        var num = this.currentInput * (pi / 180);
        this.currentInput = Math.cos(num);
    }
    else {
        this.currentInput = Math.cos(this.currentInput);
    }
    this.displayCurrentInput();
    this.checkZero();
}
/**
 * Based on angle mode, calculates tangent of current input.
 */
function tangent() {
    if (this.angleMode == 1) {
        var num = this.currentInput * (pi / 180);
        this.currentInput = Math.tan(num);
    }
    else {
        this.currentInput = Math.tan(this.currentInput);
    }
    this.displayCurrentInput();
    this.checkZero();
}
/**
 * Checks if current input is within .0000000001 of 0. If true, set current input to zero.
 */
function checkZero() {
    if (this.currentInput < Math.pow(10, -10) && this.currentInput > 0) {
        this.currentInput = 0;
    }
    else if (this.currentInput > (Math.pow(10, -10) * -1) && this.currentInput < 0) {
        this.currentInput = 0;
    }
    this.displayCurrentInput();
}
