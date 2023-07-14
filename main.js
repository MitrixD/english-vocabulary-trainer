/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/words.ts":
/*!***************************!*\
  !*** ./src/data/words.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   words: () => (/* binding */ words)\n/* harmony export */ });\nvar words = [\n    'apple',\n    'function',\n    'timeout',\n    'task',\n    'application',\n    'data',\n    'tragedy',\n    'sun',\n    'symbol',\n    'button',\n    'software',\n];\n\n\n//# sourceURL=webpack://english-vocabulary-trainer/./src/data/words.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/words */ \"./src/data/words.ts\");\n/* harmony import */ var _trainerView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainerView */ \"./src/trainerView.ts\");\n/* harmony import */ var _trainerModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainerModel */ \"./src/trainerModel.ts\");\n\n\n\nvar model = new _trainerModel__WEBPACK_IMPORTED_MODULE_2__.TrainerModel(_data_words__WEBPACK_IMPORTED_MODULE_0__.words, 6);\nvar view = new _trainerView__WEBPACK_IMPORTED_MODULE_1__.TrainerView(model);\nview.startTraining();\n\n\n//# sourceURL=webpack://english-vocabulary-trainer/./src/index.ts?");

/***/ }),

/***/ "./src/trainerModel.ts":
/*!*****************************!*\
  !*** ./src/trainerModel.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrainerModel: () => (/* binding */ TrainerModel)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\nvar TrainerModel = /** @class */ (function () {\n    function TrainerModel(words, totalQuestions) {\n        this.words = words;\n        this.shuffledWords = [];\n        this.currentQuestion = 1;\n        this.totalQuestions = totalQuestions;\n        this.answeredWord = '';\n        this.currentWord = '';\n        this.totalCorrectAnswers = 0;\n        this.totalErrors = 0;\n        this.currentErrors = 0;\n        this.wordWithMostErrors = '';\n        this.maxErrors = 0;\n    }\n    TrainerModel.prototype.startTraining = function () {\n        this.shuffledWords = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.shuffle)(this.words);\n        this.displayQuestion(this.shuffledWords[this.currentQuestion - 1]);\n    };\n    TrainerModel.prototype.restartTraining = function () {\n        this.currentQuestion = 1;\n        this.totalCorrectAnswers = 0;\n        this.totalErrors = 0;\n        this.wordWithMostErrors = '';\n        this.maxErrors = 0;\n        this.startTraining();\n    };\n    TrainerModel.prototype.getCurrentQuestion = function () {\n        return this.currentQuestion;\n    };\n    TrainerModel.prototype.getTotalQuestions = function () {\n        return this.totalQuestions;\n    };\n    TrainerModel.prototype.getCurrentWord = function () {\n        return this.currentWord;\n    };\n    TrainerModel.prototype.getTotalCorrectAnswers = function () {\n        return this.totalCorrectAnswers;\n    };\n    TrainerModel.prototype.getTotalErrors = function () {\n        return this.totalErrors;\n    };\n    TrainerModel.prototype.getCurrentErrors = function () {\n        return this.currentErrors;\n    };\n    TrainerModel.prototype.getWordWithMostErrors = function () {\n        return this.wordWithMostErrors;\n    };\n    TrainerModel.prototype.isCurrentWordComplete = function () {\n        return this.answeredWord === this.currentWord;\n    };\n    TrainerModel.prototype.checkAnswer = function (letter) {\n        var currentAnsweredWord = this.answeredWord + letter;\n        if (this.currentWord[currentAnsweredWord.length - 1] !== letter) {\n            this.incrementErrors();\n            return false;\n        }\n        this.answeredWord += letter;\n        if (this.answeredWord === this.currentWord && this.currentErrors === 0) {\n            this.totalCorrectAnswers++;\n        }\n        return true;\n    };\n    TrainerModel.prototype.displayQuestion = function (word) {\n        this.currentWord = word;\n        this.answeredWord = '';\n        this.currentErrors = 0;\n    };\n    TrainerModel.prototype.moveToNextQuestion = function () {\n        this.currentQuestion++;\n        if (this.currentQuestion <= this.totalQuestions) {\n            this.displayQuestion(this.shuffledWords[this.currentQuestion - 1]);\n        }\n    };\n    TrainerModel.prototype.isValidLetter = function (letter) {\n        var letters = this.currentWord.split('');\n        return letters.includes(letter);\n    };\n    TrainerModel.prototype.incrementErrors = function () {\n        this.totalErrors++;\n        this.currentErrors++;\n        if (this.totalErrors === 1) {\n            this.wordWithMostErrors = this.currentWord;\n            this.maxErrors = 1;\n        }\n        else {\n            if (this.currentErrors >= this.maxErrors) {\n                this.wordWithMostErrors = this.currentWord;\n                this.maxErrors = this.currentErrors;\n            }\n        }\n    };\n    return TrainerModel;\n}());\n\n\n\n//# sourceURL=webpack://english-vocabulary-trainer/./src/trainerModel.ts?");

/***/ }),

/***/ "./src/trainerView.ts":
/*!****************************!*\
  !*** ./src/trainerView.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrainerView: () => (/* binding */ TrainerView)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\nvar TrainerView = /** @class */ (function () {\n    function TrainerView(model) {\n        this.model = model;\n        this.currentQuestionElem = document.getElementById('current_question');\n        this.totalQuestionsElem = document.getElementById('total_questions');\n        this.answerElem = document.getElementById('answer');\n        this.lettersElem = document.getElementById('letters');\n    }\n    TrainerView.prototype.startTraining = function () {\n        this.model.startTraining();\n        this.displayQuestion();\n        this.renderLetters();\n        this.setupEventListeners();\n    };\n    TrainerView.prototype.restartTraining = function () {\n        this.model.restartTraining();\n        this.displayQuestion();\n        this.renderLetters();\n    };\n    TrainerView.prototype.setupEventListeners = function () {\n        var _this = this;\n        var restartButton = document.getElementById('restart_button');\n        restartButton.addEventListener('click', function () {\n            _this.hideStatistics();\n            _this.restartTraining();\n        });\n        window.addEventListener('keydown', this.handleKeyPress.bind(this));\n    };\n    TrainerView.prototype.handleLetterClick = function (event) {\n        var button = event.target;\n        var letter = button.innerText;\n        this.checkAnswer(button, letter);\n    };\n    TrainerView.prototype.handleKeyPress = function (event) {\n        var _a;\n        var letter = event.key.toLowerCase();\n        if (this.model.isValidLetter(letter)) {\n            var letterButtons = Array.from((_a = this.lettersElem) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.letter'));\n            for (var _i = 0, letterButtons_1 = letterButtons; _i < letterButtons_1.length; _i++) {\n                var button = letterButtons_1[_i];\n                if (button.textContent === letter) {\n                    this.checkAnswer(button, letter);\n                    break;\n                }\n            }\n        }\n        else {\n            this.model.incrementErrors();\n            if (this.model.getCurrentErrors() >= 3) {\n                this.showCorrectWord();\n            }\n        }\n    };\n    TrainerView.prototype.renderAnswerLetter = function (letter) {\n        var selectedButton = document.createElement('button');\n        selectedButton.textContent = letter;\n        selectedButton.classList.add('selected-letter');\n        this.answerElem.appendChild(selectedButton);\n    };\n    TrainerView.prototype.renderLetters = function () {\n        var _this = this;\n        var currentWord = this.model.getCurrentWord();\n        var letters = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.shuffle)(currentWord.split(''));\n        letters.forEach(function (letter) {\n            var button = _this.createLetterButton(letter, _this.handleLetterClick.bind(_this));\n            _this.lettersElem.appendChild(button);\n        });\n    };\n    TrainerView.prototype.createLetterButton = function (letter, onClick) {\n        var button = document.createElement('button');\n        button.type = 'button';\n        button.innerText = letter;\n        button.classList.add('letter');\n        button.addEventListener('click', onClick);\n        return button;\n    };\n    TrainerView.prototype.checkAnswer = function (button, letter) {\n        var _this = this;\n        if (!this.model.checkAnswer(letter)) {\n            if (this.model.getCurrentErrors() >= 3) {\n                this.showCorrectWord();\n                return;\n            }\n            button.classList.add('error-blink');\n            setTimeout(function () {\n                button.classList.remove('error-blink');\n            }, 1000);\n        }\n        else {\n            button.remove();\n            this.renderAnswerLetter(letter);\n        }\n        if (this.model.isCurrentWordComplete()) {\n            setTimeout(function () { return _this.moveToNextQuestion(); }, 1000);\n        }\n    };\n    TrainerView.prototype.showCorrectWord = function () {\n        var _this = this;\n        if (this.answerElem.childElementCount > 0) {\n            this.answerElem.innerHTML = '';\n        }\n        var currentWordLetters = this.model.getCurrentWord().split('');\n        currentWordLetters.forEach(function (wordLetter) {\n            var _a;\n            var button = document.createElement('button');\n            button.textContent = wordLetter;\n            button.classList.add('selected-letter', 'selected-letter-error');\n            (_a = _this.answerElem) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n        });\n        this.lettersElem.innerHTML = '';\n        setTimeout(function () { return _this.moveToNextQuestion(); }, 3000);\n    };\n    TrainerView.prototype.displayQuestion = function () {\n        this.answerElem.innerHTML = '';\n        this.lettersElem.innerHTML = '';\n        this.currentQuestionElem.innerText = this.model\n            .getCurrentQuestion()\n            .toString();\n        this.totalQuestionsElem.innerText = this.model\n            .getTotalQuestions()\n            .toString();\n    };\n    TrainerView.prototype.moveToNextQuestion = function () {\n        this.model.moveToNextQuestion();\n        if (this.model.getCurrentQuestion() > this.model.getTotalQuestions()) {\n            this.displayStatistics();\n        }\n        else {\n            this.displayQuestion();\n            this.renderLetters();\n        }\n    };\n    TrainerView.prototype.displayStatistics = function () {\n        var statisticsElem = document.getElementById('statistics');\n        var correctAnswersElem = document.getElementById('correct_answers');\n        var totalErrorsElem = document.getElementById('total_errors');\n        var wordWithMostErrorsElem = document.getElementById('word_with_most_errors');\n        correctAnswersElem.innerText = this.model\n            .getTotalCorrectAnswers()\n            .toString();\n        totalErrorsElem.innerText = this.model.getTotalErrors().toString();\n        wordWithMostErrorsElem.innerText =\n            this.model.getWordWithMostErrors() || '-';\n        statisticsElem.style.display = 'block';\n    };\n    TrainerView.prototype.hideStatistics = function () {\n        var statisticsElem = document.getElementById('statistics');\n        statisticsElem.style.display = 'none';\n    };\n    return TrainerView;\n}());\n\n\n\n//# sourceURL=webpack://english-vocabulary-trainer/./src/trainerView.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shuffle: () => (/* binding */ shuffle)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nfunction shuffle(array) {\n    var _a;\n    var shuffledArray = __spreadArray([], array, true);\n    for (var i = shuffledArray.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        _a = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _a[0], shuffledArray[j] = _a[1];\n    }\n    return shuffledArray;\n}\n\n\n//# sourceURL=webpack://english-vocabulary-trainer/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;