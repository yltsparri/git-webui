/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var default_1 = function default_1() {
  _classCallCheck(this, default_1);
};

exports.default = default_1;

default_1.UPDATE_COMMIT_VIEW_DATA = 'UPDATE_COMMIT_VIEW_DATA';
default_1.UPDATE_COMMIT_DIFF_DATA = 'UPDATE_COMMIT_DIFF_DATA';
default_1.TOGGLE_SHOW_FULL_FILE = 'TOGGLE_SHOW_FULL_FILE';
default_1.TOGGLE_IGNORE_WHITESPACE = 'TOGGLE_IGNORE_WHITESPACE';
default_1.UPDATE_BASEDATA = 'UPDATE_BASEDATA';
default_1.ADD_MESSAGE = 'ADD_MESSAGE';
default_1.CLOSE_MESSAGE = 'CLOSE_MESSAGE';
default_1.SET_LOCAL_BRANCHES = 'SET_LOCAL_BRANCHES';
default_1.SET_REMOTE_BRANCHES = 'SET_REMOTE_BRANCHES';
default_1.SET_TAGS = 'SET_TAGS';
default_1.SET_COMMITS = 'SET_COMMITS';
default_1.SELECT_COMMIT = 'SELECT_COMMIT';
default_1.SET_COMMIT_TREE_FILES = 'SET_COMMIT_TREE_FILES';
default_1.SELECT_COMMIT_VIEW_MODE = 'SELECT_COMMIT_VIEW_MODE';
default_1.SELECT_COMMIT_TREE_FILE = 'SELECT_COMMIT_TREE_FILE';
default_1.SELECT_COMMIT_DIFF_FILE = 'SELECT_COMMIT_DIFF_FILE';
default_1.NODE_SELECTED = 'NODE_SELECTED';
default_1.SET_DIRNAME = 'SET_DIRNAME';
default_1.SET_VIEW_ONLY = 'SET_VIEW_ONLY';
default_1.SHOW_ALL = 'SHOW_ALL';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationType = exports.AppMode = exports.CommitViewMode = undefined;

var _Commit = __webpack_require__(30);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright 2017 Ülo Parri
                                                                                                                                                           * Copyright 2015 Eric ALBER
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


exports.CommitViewMode = _Commit.CommitViewMode;
var AppMode = exports.AppMode = undefined;
(function (AppMode) {
  AppMode[AppMode["Workspace"] = 0] = "Workspace";
  AppMode[AppMode["RemoteAccess"] = 1] = "RemoteAccess";
  AppMode[AppMode["History"] = 2] = "History";
  AppMode[AppMode["Explore"] = 3] = "Explore";
})(AppMode || (exports.AppMode = AppMode = {}));

var NavigationType = exports.NavigationType = function NavigationType() {
  _classCallCheck(this, NavigationType);
};

NavigationType.Workspace = 'workspace';
NavigationType.RemoteAccess = 'remote-access';
NavigationType.LocalBranches = 'local-branches';
NavigationType.RemoteBranches = 'remote-branches';
NavigationType.Tags = 'tags';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addMessage(message) {
    return { type: _Actions2.default.ADD_MESSAGE, message: message };
} /*
   * Copyright 2017 Ülo Parri
   * Copyright 2015 Eric ALBER
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

function closeMessage() {
    return { type: 'CLOSE_MESSAGE' };
}
exports.default = {
    addMessage: addMessage,
    closeMessage: closeMessage
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Git = undefined;

var _GitBranchesResponseParser = __webpack_require__(66);

var _GitBranchesResponseParser2 = _interopRequireDefault(_GitBranchesResponseParser);

var _CommitInfoResponseParser = __webpack_require__(67);

var _CommitInfoResponseParser2 = _interopRequireDefault(_CommitInfoResponseParser);

var _DiffParser = __webpack_require__(68);

var _DiffParser2 = _interopRequireDefault(_DiffParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright 2017 Ülo Parri
                                                                                                                                                           * Copyright 2015 Eric ALBER
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */


var Git = exports.Git = function Git() {
    var _this = this;

    _classCallCheck(this, Git);

    this.getViewOnly = function () {
        return _this.makeRequest('GET', 'viewonly', null, { 'Content-Type': 'text/plain' }).then(function (text) {
            return { data: text, message: null, returnCode: 0 };
        }).catch(function (error) {
            console.log(error);
            return {
                data: '',
                returnCode: error.code,
                message: error.message
            };
        });
    };
    this.getDirName = function () {
        return _this.makeRequest('GET', 'dirname', null, { 'Content-Type': 'text/plain' }).then(function (text) {
            return { data: text, message: null, returnCode: 0 };
        }).catch(function (error) {
            console.log(error);
            return {
                data: '',
                returnCode: error.code,
                message: error.message
            };
        });
    };
    this.getLocalBranches = function () {
        return _this.runGit('branch', null).then(function (response) {
            return _GitBranchesResponseParser2.default.parse(response);
        });
    };
    this.getRemoteBranches = function () {
        return _this.runGit('branch --remotes', null).then(function (response) {
            return _GitBranchesResponseParser2.default.parse(response);
        });
    };
    this.getTags = function () {
        return _this.runGit('tag', null).then(function (response) {
            return _GitBranchesResponseParser2.default.parse(response);
        });
    };
    this.getCommits = function (rows, from) {
        var command = "log --date-order --pretty=raw --decorate=full --max-count=" + (rows + 1) + " " + from + " --";
        return _this.runGit(command, null).then(function (response) {
            return _CommitInfoResponseParser2.default.parse(rows, response);
        });
    };
    this.getDiff = function (commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile) {
        var fullCmd = 'show ' + commit;
        if (diffContext) {
            fullCmd += " --unified=" + diffContext.toString();
        }
        if (ignoreWhitespace) {
            fullCmd += " --ignore-all-space --ignore-blank-lines";
        }
        if (gitDiffOpts) {
            fullCmd += " " + gitDiffOpts.join(" ");
        }
        if (gitFile) {
            fullCmd += " -- " + gitFile;
        }
        return _this.runGit(fullCmd, null).then(function (response) {
            return {
                data: _DiffParser2.default.parse(response.data),
                message: response.message,
                returnCode: response.returnCode
            };
        });
    };
    this.listFiles = function (parent) {
        var readToNext = function readToNext(str, char, start) {
            var end = str.indexOf(char, start);
            return end >= 0 ? str.substring(start, end) : str.substring(start);
        };
        return _this.runGit('ls-tree -l ' + parent, null).then(function (response) {
            if (response.returnCode !== 0) {
                return {
                    data: null,
                    message: response.message,
                    returnCode: response.returnCode
                };
            }
            var lines = response.data.split('\n');
            var data = lines.filter(function (line) {
                return line !== '';
            }).map(function (line) {
                // line format
                // {mode} {type} {objectId} {size} {name}
                var start = 0;
                // mode
                var substr = readToNext(line, ' ', start);
                start += substr.length + 1;
                var mode = parseInt(substr);
                // type
                var type = readToNext(line, ' ', start);
                start += type.length + 1;
                // objectId
                var objectId = readToNext(line, ' ', start);
                start += objectId.length + 1;
                // size
                substr = readToNext(line, '\t', start);
                start += substr.length + 1;
                var size = parseInt(substr.trim());
                // name
                var name = line.substring(start);
                return {
                    mode: mode,
                    objectId: objectId,
                    size: size,
                    isSymbolicLink: (mode & 120000) === 120000,
                    type: type,
                    name: name,
                    parent: parent
                };
            });
            return {
                data: data,
                message: response.message,
                returnCode: response.returnCode
            };
        }).catch(function (error) {
            console.log(error);
            return {
                data: undefined,
                returnCode: error.code,
                message: error.message
            };
        });
    };
    this.runGit = function (cmd, arg1) {
        // cmd = git command line arguments
        // other arguments = optional stdin content and a callback function:
        // ex:
        // git("log", mycallback)
        // git("commit -F -", "my commit message", mycallback)
        // Convention : first line = git arguments, rest = process stdin
        if (arg1) {
            cmd += "\n" + arg1;
        }
        return _this.makeRequest('POST', 'git', cmd, { 'Content-Type': 'text/plain' }).then(function (data) {
            var processed = _this.processResponse(data);
            var rcode = parseInt(processed.footers["Git-Return-Code"]);
            if (rcode === 0) {
                return {
                    data: processed.output,
                    returnCode: rcode,
                    message: processed.message
                };
            }
            throw {
                code: rcode,
                message: processed.message
            };
        });
    };
    this.processResponse = function (data) {
        var footers = {};
        var fIndex = data.length;
        while (true) {
            var oldFIndex = fIndex;
            fIndex = data.lastIndexOf("\r\n", fIndex - 1);
            var line = data.substring(fIndex + 2, oldFIndex);
            if (line.length > 0) {
                var footer = line.split(": ");
                footers[footer[0]] = footer[1];
            } else {
                break;
            }
        }
        var messageStartIndex = fIndex - parseInt(footers["Git-Stderr-Length"]);
        var message = data.substring(messageStartIndex, fIndex);
        var output = data.substring(0, messageStartIndex);
        return { footers: footers, message: message, output: output };
    };
    this.makeRequest = function (method, url, data, headers) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        code: xhr.status,
                        message: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    code: xhr.status,
                    message: xhr.statusText
                });
            };
            for (var key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
            xhr.send(data);
        });
    };
};

exports.default = new Git();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectDiffViewMode = selectDiffViewMode;
exports.setDiffContext = setDiffContext;
exports.toggleIgnoreWhiteSpace = toggleIgnoreWhiteSpace;
exports.toggleShowFullFile = toggleShowFullFile;
exports.selectFile = selectFile;

var _Git = __webpack_require__(8);

var _Git2 = _interopRequireDefault(_Git);

var _AppState = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Messages = __webpack_require__(7);

var _Messages2 = _interopRequireDefault(_Messages);

var _Tree = __webpack_require__(17);

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadDiff = function loadDiff(commit) {
    return function (dispatch, getState) {
        var state = getState();
        var _state$diffOptions = state.diffOptions,
            ignoreWhitespace = _state$diffOptions.ignoreWhitespace,
            options = _state$diffOptions.options,
            context = _state$diffOptions.context,
            fullFile = _state$diffOptions.fullFile;

        var diffContext = context;
        if (fullFile) {
            diffContext = 99999999;
        }
        return _Git2.default.getDiff(commit, diffContext, ignoreWhitespace, options, null).then(function (response) {
            dispatch({ type: _Actions2.default.UPDATE_COMMIT_DIFF_DATA, data: response.data });
            if (response.message) {
                dispatch(_Messages2.default.addMessage(response.message));
            }
        });
    };
}; /*
    * Copyright 2017 Ülo Parri
    * Copyright 2015 Eric ALBER
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *     http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
function selectDiffViewMode(mode) {
    return function (dispatch, getState) {
        dispatch({ type: _Actions2.default.SELECT_COMMIT_VIEW_MODE, viewMode: mode });
        var state = getState();
        var opts = state.commitTree;
        if (mode === _AppState.CommitViewMode.Tree && opts.path.length < 2 && !opts.files.length) {
            var root = void 0;
            if (opts.path.length) {
                root = opts.path[opts.path.length - 1];
            } else {
                root = {
                    name: state.appData.dirName,
                    size: NaN,
                    objectId: state.commits.selectedCommit,
                    isSymbolicLink: false,
                    mode: 0,
                    type: 'tree',
                    parent: null
                };
            }
            dispatch(_Tree2.default.selectNode(root));
        }
    };
}
function setDiffContext(context) {
    return function (dispatch, getState) {
        dispatch({ type: _Actions2.default.UPDATE_COMMIT_VIEW_DATA, data: { context: context } });
        var state = getState();
        if (!state.diffOptions.fullFile) {
            var commitHash = state.commits.selectedCommit;
            dispatch(loadDiff(commitHash));
        }
    };
}
function toggleIgnoreWhiteSpace() {
    return function (dispatch, getState) {
        dispatch({ type: _Actions2.default.TOGGLE_IGNORE_WHITESPACE });
        var commitHash = getState().commits.selectedCommit;
        dispatch(loadDiff(commitHash));
    };
}
function toggleShowFullFile() {
    return function (dispatch, getState) {
        dispatch({ type: _Actions2.default.TOGGLE_SHOW_FULL_FILE });
        var commitHash = getState().commits.selectedCommit;
        dispatch(loadDiff(commitHash));
    };
}
function selectFile(index) {
    return { type: 'SELECT_COMMIT_DIFF_FILE', selectedFile: index };
}
exports.default = {
    loadDiff: loadDiff,
    selectDiffViewMode: selectDiffViewMode,
    setDiffContext: setDiffContext,
    toggleIgnoreWhiteSpace: toggleIgnoreWhiteSpace,
    toggleShowFullFile: toggleShowFullFile,
    selectFile: selectFile
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ownerDocument;
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.itemSelected = itemSelected;

var _Git = __webpack_require__(8);

var _Git2 = _interopRequireDefault(_Git);

var _AppState = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Commit = __webpack_require__(31);

var _Commit2 = _interopRequireDefault(_Commit);

var _Messages = __webpack_require__(7);

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadCommits = function loadCommits(dispatch, item) {
    return _Git2.default.getCommits(1000, item.text).then(function (response) {
        if (response.returnCode === 0) {
            dispatch({ type: _Actions2.default.SET_COMMITS, commits: response.data });
            if (response.data.length) {
                dispatch(_Commit2.default.commitSelected(response.data[0]));
            }
        }
        if (response.message) {
            dispatch(_Messages2.default.addMessage(response.message));
        }
    }).catch(function (error) {
        dispatch(_Messages2.default.addMessage(error.message));
    });
}; /*
    * Copyright 2017 Ülo Parri
    * Copyright 2015 Eric ALBER
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *     http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
function itemSelected(itemId) {
    return function (dispatch, getState) {
        dispatch({ type: _Actions2.default.NODE_SELECTED, data: { selected: itemId } });
        var state = getState();
        var nav = state.navigation;
        var item = nav.nodes[itemId];
        if (!item) {
            return;
        }
        var parent = nav.nodes[item.parentId];
        while (parent && parent.parentId) {
            parent = nav.nodes[parent.parentId];
        }
        if (parent && (parent.id === _AppState.NavigationType.LocalBranches || parent.id === _AppState.NavigationType.RemoteBranches || parent.id === _AppState.NavigationType.Tags)) {
            dispatch(function (dispatch) {
                return loadCommits(dispatch, item);
            });
        }
    };
}
var showMore = function showMore(id) {
    return { type: _Actions2.default.SHOW_ALL, data: { id: id } };
};
exports.default = {
    itemSelected: itemSelected,
    showMore: showMore,
    changeAppMode: function changeAppMode(mode) {
        return { type: _Actions2.default.UPDATE_BASEDATA, data: { mode: mode } };
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var BranchStatus = exports.BranchStatus = undefined;
(function (BranchStatus) {
    BranchStatus[BranchStatus["Normal"] = 0] = "Normal";
    BranchStatus[BranchStatus["Detached"] = 1] = "Detached";
    BranchStatus[BranchStatus["Current"] = 2] = "Current";
})(BranchStatus || (exports.BranchStatus = BranchStatus = {}));
exports.default = BranchStatus;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var HunkPartType = exports.HunkPartType = undefined;
(function (HunkPartType) {
    HunkPartType[HunkPartType["Keep"] = 0] = "Keep";
    HunkPartType[HunkPartType["Remove"] = 1] = "Remove";
    HunkPartType[HunkPartType["Add"] = 2] = "Add";
})(HunkPartType || (exports.HunkPartType = HunkPartType = {}));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectNode = selectNode;

var _Git = __webpack_require__(8);

var _Git2 = _interopRequireDefault(_Git);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Messages = __webpack_require__(7);

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function selectNode(node) {
    return function (dispatch, getState) {
        var state = getState();
        dispatch({ type: _Actions2.default.SELECT_COMMIT_TREE_FILE, objectId: node.objectId });
        if (node.type === 'tree') {
            return _Git2.default.listFiles(node.objectId).then(function (response) {
                state = getState();
                dispatch({ type: _Actions2.default.SET_COMMIT_TREE_FILES, files: response.data });
                if (response.message) {
                    dispatch(_Messages2.default.addMessage(response.message));
                }
            });
        }
    };
} /*
   * Copyright 2017 Ülo Parri
   * Copyright 2015 Eric ALBER
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
exports.default = { selectNode: selectNode };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setOffset = setOffset;
function setOffset(key, top, left) {
    return {
        type: 'SET_OFFSET',
        key: key,
        offset: {
            top: top,
            left: left
        }
    };
}
exports.default = { setOffset: setOffset };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _activeElement = __webpack_require__(37);

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = __webpack_require__(38);

var _contains2 = _interopRequireDefault(_contains);

var _inDOM = __webpack_require__(5);

var _inDOM2 = _interopRequireDefault(_inDOM);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(22);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _deprecated = __webpack_require__(43);

var _deprecated2 = _interopRequireDefault(_deprecated);

var _elementType = __webpack_require__(44);

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _Portal = __webpack_require__(45);

var _Portal2 = _interopRequireDefault(_Portal);

var _ModalManager = __webpack_require__(46);

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _addEventListener = __webpack_require__(62);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _addFocusListener = __webpack_require__(65);

var _addFocusListener2 = _interopRequireDefault(_addFocusListener);

var _getContainer = __webpack_require__(25);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(26);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable react/prop-types */

var modalManager = new _ModalManager2.default();

/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Modal.prototype.omitProps = function omitProps(props, propTypes) {

    var keys = Object.keys(props);
    var newProps = {};
    keys.map(function (prop) {
      if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
        newProps[prop] = props[prop];
      }
    });

    return newProps;
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
        show = _props.show,
        container = _props.container,
        children = _props.children,
        Transition = _props.transition,
        backdrop = _props.backdrop,
        className = _props.className,
        style = _props.style,
        onExit = _props.onExit,
        onExiting = _props.onExiting,
        onEnter = _props.onEnter,
        onEntering = _props.onEntering,
        onEntered = _props.onEntered;


    var dialog = _react2.default.Children.only(children);
    var filteredProps = this.omitProps(this.props, Modal.propTypes);

    var mountModal = show || Transition && !this.state.exited;
    if (!mountModal) {
      return null;
    }

    var _dialog$props = dialog.props,
        role = _dialog$props.role,
        tabIndex = _dialog$props.tabIndex;


    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role === undefined ? 'document' : role,
        tabIndex: tabIndex == null ? '-1' : tabIndex
      });
    }

    if (Transition) {
      dialog = _react2.default.createElement(
        Transition,
        {
          appear: true,
          unmountOnExit: true,
          'in': show,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        dialog
      );
    }

    return _react2.default.createElement(
      _Portal2.default,
      {
        ref: this.setMountNode,
        container: container
      },
      _react2.default.createElement(
        'div',
        _extends({
          ref: this.setModalNode,
          role: role || 'dialog'
        }, filteredProps, {
          style: style,
          className: className
        }),
        backdrop && this.renderBackdrop(),
        dialog
      )
    );
  };

  Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  };

  Modal.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.checkForFocus();
    }
  };

  Modal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;


    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
        show = _props2.show,
        transition = _props2.transition;


    this._isMounted = false;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  //instead of a ref, which might conflict with one the parent applied.


  return Modal;
}(_react2.default.Component);

Modal.propTypes = _extends({}, _Portal2.default.propTypes, {

  /**
   * Set the visibility of the Modal
   */
  show: _propTypes2.default.bool,

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes2.default.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes2.default.func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes2.default.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes2.default.func,

  /**
   * Support for this function will be deprecated. Please use `onEscapeKeyDown` instead
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   * @deprecated
   */
  onEscapeKeyUp: (0, _deprecated2.default)(_propTypes2.default.func, 'Please use onEscapeKeyDown instead for consistency'),

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes2.default.func,

  /**
   * A style object for the backdrop component.
   */
  backdropStyle: _propTypes2.default.object,

  /**
   * A css class or classes for the backdrop component.
   */
  backdropClassName: _propTypes2.default.string,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes2.default.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes2.default.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType2.default,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType2.default,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes2.default.bool,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes2.default.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes2.default.object.isRequired
});
Modal.defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react2.default.createElement('div', props);
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { exited: !this.props.show };

  this.renderBackdrop = function () {
    var _props3 = _this2.props,
        backdropStyle = _props3.backdropStyle,
        backdropClassName = _props3.backdropClassName,
        renderBackdrop = _props3.renderBackdrop,
        Transition = _props3.backdropTransition;


    var backdropRef = function backdropRef(ref) {
      return _this2.backdrop = ref;
    };

    var backdrop = renderBackdrop({
      ref: backdropRef,
      style: backdropStyle,
      className: backdropClassName,
      onClick: _this2.handleBackdropClick
    });

    if (Transition) {
      backdrop = _react2.default.createElement(
        Transition,
        {
          appear: true,
          'in': _this2.props.show
        },
        backdrop
      );
    }

    return backdrop;
  };

  this.onShow = function () {
    var doc = (0, _ownerDocument2.default)(_this2);
    var container = (0, _getContainer2.default)(_this2.props.container, doc.body);

    _this2.props.manager.add(_this2, container, _this2.props.containerClassName);

    _this2._onDocumentKeydownListener = (0, _addEventListener2.default)(doc, 'keydown', _this2.handleDocumentKeyDown);

    _this2._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this2.handleDocumentKeyUp);

    _this2._onFocusinListener = (0, _addFocusListener2.default)(_this2.enforceFocus);

    _this2.focus();

    if (_this2.props.onShow) {
      _this2.props.onShow();
    }
  };

  this.onHide = function () {
    _this2.props.manager.remove(_this2);

    _this2._onDocumentKeydownListener.remove();

    _this2._onDocumentKeyupListener.remove();

    _this2._onFocusinListener.remove();

    if (_this2.props.restoreFocus) {
      _this2.restoreLastFocus();
    }
  };

  this.setMountNode = function (ref) {
    _this2.mountNode = ref ? ref.getMountNode() : ref;
  };

  this.setModalNode = function (ref) {
    _this2.modalNode = ref;
  };

  this.handleHidden = function () {
    _this2.setState({ exited: true });
    _this2.onHide();

    if (_this2.props.onExited) {
      var _props4;

      (_props4 = _this2.props).onExited.apply(_props4, arguments);
    }
  };

  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (_this2.props.onBackdropClick) {
      _this2.props.onBackdropClick(e);
    }

    if (_this2.props.backdrop === true) {
      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyDown = function (e) {
    if (_this2.props.keyboard && e.key === 'Escape' && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyDown) {
        _this2.props.onEscapeKeyDown(e);
      }

      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyUp = function (e) {
    if (_this2.props.keyboard && e.key === 'Escape' && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyUp) {
        _this2.props.onEscapeKeyUp(e);
      }
    }
  };

  this.checkForFocus = function () {
    if (_inDOM2.default) {
      _this2.lastFocus = (0, _activeElement2.default)();
    }
  };

  this.focus = function () {
    var autoFocus = _this2.props.autoFocus;
    var modalContent = _this2.getDialogElement();
    var current = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this2));
    var focusInModal = current && (0, _contains2.default)(modalContent, current);

    if (modalContent && autoFocus && !focusInModal) {
      _this2.lastFocus = current;

      if (!modalContent.hasAttribute('tabIndex')) {
        modalContent.setAttribute('tabIndex', -1);
        (0, _warning2.default)(false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
      }

      modalContent.focus();
    }
  };

  this.restoreLastFocus = function () {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (_this2.lastFocus && _this2.lastFocus.focus) {
      _this2.lastFocus.focus();
      _this2.lastFocus = null;
    }
  };

  this.enforceFocus = function () {
    var enforceFocus = _this2.props.enforceFocus;


    if (!enforceFocus || !_this2._isMounted || !_this2.isTopModal()) {
      return;
    }

    var active = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this2));
    var modal = _this2.getDialogElement();

    if (modal && modal !== active && !(0, _contains2.default)(modal, active)) {
      modal.focus();
    }
  };

  this.getDialogElement = function () {
    var node = _this2.modalNode;
    return node && node.lastChild;
  };

  this.isTopModal = function () {
    return _this2.props.manager.isTopModal(_this2);
  };
};

Modal.Manager = _ModalManager2.default;

exports.default = Modal;
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(39)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(42)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(11);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(23);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ownerDocument = __webpack_require__(10);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__(51);

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var RefType = exports.RefType = undefined;
(function (RefType) {
  RefType[RefType["Unspecified"] = 0] = "Unspecified";
  RefType[RefType["Head"] = 1] = "Head";
  RefType[RefType["Remote"] = 2] = "Remote";
  RefType[RefType["Tag"] = 3] = "Tag";
})(RefType || (exports.RefType = RefType = {}));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CommitViewMode = exports.CommitViewMode = undefined;
(function (CommitViewMode) {
    CommitViewMode[CommitViewMode["Diff"] = 0] = "Diff";
    CommitViewMode[CommitViewMode["SidebySideDiff"] = 1] = "SidebySideDiff";
    CommitViewMode[CommitViewMode["Tree"] = 2] = "Tree";
})(CommitViewMode || (exports.CommitViewMode = CommitViewMode = {}));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitSelected = commitSelected;

var _AppState = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Tree = __webpack_require__(17);

var _Tree2 = _interopRequireDefault(_Tree);

var _Diff = __webpack_require__(9);

var _Diff2 = _interopRequireDefault(_Diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function commitSelected(commit) {
    return function (dispatch, getState) {
        var state = getState();
        var root = {
            name: state.appData.dirName,
            size: NaN,
            objectId: commit.hash,
            isSymbolicLink: false,
            mode: 0,
            type: 'tree',
            parent: null
        };
        dispatch({ type: _Actions2.default.SELECT_COMMIT, selectedCommit: commit.hash });
        dispatch({ type: _Actions2.default.UPDATE_COMMIT_VIEW_DATA, data: { commitHash: commit.hash, path: [root], files: [] } });
        state = getState();
        if (state.commits.viewMode === _AppState.CommitViewMode.Diff) {
            dispatch(_Diff2.default.loadDiff(commit.hash));
        } else if (state.commits.viewMode === _AppState.CommitViewMode.Tree) {
            dispatch(_Tree2.default.selectNode(root));
        }
    };
}
exports.default = { commitSelected: commitSelected };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DiffViewMode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Diff = __webpack_require__(16);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DiffViewMode = exports.DiffViewMode = undefined;
(function (DiffViewMode) {
    DiffViewMode[DiffViewMode["Full"] = 0] = "Full";
    DiffViewMode[DiffViewMode["Removed"] = 1] = "Removed";
    DiffViewMode[DiffViewMode["Added"] = 2] = "Added";
})(DiffViewMode || (exports.DiffViewMode = DiffViewMode = {}));

var DiffView = function (_React$PureComponent) {
    _inherits(DiffView, _React$PureComponent);

    function DiffView() {
        _classCallCheck(this, DiffView);

        var _this = _possibleConstructorReturn(this, (DiffView.__proto__ || Object.getPrototypeOf(DiffView)).apply(this, arguments));

        _this.setOffset = function (offset) {
            var node = _reactDom2.default.findDOMNode(_this);
            node = node.querySelector('.diff-view');
            node.scrollTop = offset.top;
            node.scrollLeft = offset.left;
        };
        _this.getDiffLines = function (fileDiffs) {
            if (fileDiffs === null) {
                return null;
            }
            var lines = [];
            fileDiffs.forEach(function (fileDiff, index) {
                _this.addHeaders(fileDiff, lines, index);
                _this.addHunks(fileDiff.hunks, lines, index);
            });
            return lines;
        };
        _this.addHeaders = function (fileDiff, lines, key) {
            if (fileDiff === null) {
                return;
            }
            lines.push(_react2.default.createElement(
                'pre',
                { className: 'diff-view-line diff-line-header diff-section-start', key: 'fileHeader_' + key },
                fileDiff.header
            ));
            lines.push(_react2.default.createElement(
                'pre',
                { className: 'diff-view-line diff-line-header', key: 'fileHeader_index' + key },
                fileDiff.indexLine
            ));
            lines.push(_react2.default.createElement(
                'pre',
                { className: 'diff-view-line diff-line-header', key: 'fileHeader_mode' + key },
                fileDiff.fileModeLine
            ));
            if (_this.props.diffViewMode !== DiffViewMode.Added) {
                lines.push(_react2.default.createElement(
                    'pre',
                    { className: 'diff-view-line diff-line-del diff-line-header', key: 'fileHeader_del' + key },
                    '--- a/' + fileDiff.initialFile
                ));
            }
            if (_this.props.diffViewMode !== DiffViewMode.Removed) {
                lines.push(_react2.default.createElement(
                    'pre',
                    { className: 'diff-view-line diff-line-add diff-line-header', key: 'fileHeader_add' + key },
                    '+++ b/' + fileDiff.resultingFile
                ));
            }
        };
        _this.addHunks = function (hunks, lines, key) {
            if (!hunks) {
                return;
            }
            hunks.forEach(function (hunk, hunkIndex) {
                lines.push(_react2.default.createElement(
                    'pre',
                    { className: 'diff-view-line diff-line-offset', key: 'hunkHeader_' + key + '_' + hunkIndex },
                    hunk.header
                ));
                _this.addHunkPartLines(hunk, lines, 'hunkPart_' + key + '_' + hunkIndex);
            });
        };
        _this.addHunkPartLines = function (hunk, lines, key) {
            for (var hunkPartIndex = 0; hunkPartIndex < hunk.parts.length; hunkPartIndex++) {
                var part = hunk.parts[hunkPartIndex];
                var className = _this.getHunkPartClassName(part.type);
                var partKey = key + '_' + hunkPartIndex;
                for (var contentIndex = 0; contentIndex < part.content.length; contentIndex++) {
                    var line = part.content[contentIndex] || '\n';
                    lines.push(_this.getDiffLine(line, className, partKey + '_' + hunkPartIndex + '_' + contentIndex));
                }
            }
        };
        _this.getHunkPartClassName = function (hunkPartType) {
            var className = 'diff-view-line';
            if (hunkPartType === null) {
                className += ' diff-line-phantom';
            } else if (hunkPartType === _Diff.HunkPartType.Add) {
                className += ' diff-line-add';
            } else if (hunkPartType === _Diff.HunkPartType.Remove) {
                className += ' diff-line-del';
            }
            return className;
        };
        _this.getDiffLine = function (line, className, key) {
            return _react2.default.createElement(
                'pre',
                { className: className, key: key },
                line
            );
        };
        return _this;
    }

    _createClass(DiffView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var offset = this.props.offset;
            if (offset) {
                this.setOffset(offset);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var offset = this.props.offset;
            var prevOffset = prevProps.offset || { left: 0, top: 0 };
            if (offset && (prevOffset.left !== offset.left || offset.top !== prevOffset.top)) {
                this.setOffset(offset);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                    'div',
                    { className: 'diff-view', onScroll: this.props.onScroll },
                    _react2.default.createElement(
                        'div',
                        { className: 'diff-view-lines' },
                        this.props.headerLines.map(function (comm, index) {
                            return _this2.getDiffLine(comm, 'diff-view-line diff-line-header', 'comm_' + index);
                        }),
                        this.getDiffLines(this.props.diff)
                    )
                )
            );
        }
    }]);

    return DiffView;
}(_react2.default.PureComponent);

exports.default = DiffView;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ExploreView = __webpack_require__(78);

var _ExploreView2 = _interopRequireDefault(_ExploreView);

var _reactRedux = __webpack_require__(3);

var _ExploreNavigation = __webpack_require__(79);

var _ExploreNavigation2 = _interopRequireDefault(_ExploreNavigation);

var _Offsets = __webpack_require__(18);

var _Offsets2 = _interopRequireDefault(_Offsets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        removedLinesDiff: state.commitDiff.removedLinesDiff,
        addedLinesDiff: state.commitDiff.addedLinesDiff,
        position: state.offsets['EXPLORE_DIFF'],
        ExploreNavigation: _ExploreNavigation2.default
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onScroll: function onScroll(ev) {
            var target = ev.target;
            dispatch(_Offsets2.default.setOffset('EXPLORE_DIFF', target.scrollTop, target.scrollLeft));
        }
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ExploreView2.default);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Sidebar = __webpack_require__(35);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _ModalMessage = __webpack_require__(69);

var _ModalMessage2 = _interopRequireDefault(_ModalMessage);

var _AppState = __webpack_require__(2);

var _Init = __webpack_require__(71);

var _Init2 = _interopRequireDefault(_Init);

var _History = __webpack_require__(72);

var _History2 = _interopRequireDefault(_History);

var _RemoteView = __webpack_require__(81);

var _RemoteView2 = _interopRequireDefault(_RemoteView);

var _Store = __webpack_require__(82);

var _Store2 = _interopRequireDefault(_Store);

var _Explore = __webpack_require__(33);

var _Explore2 = _interopRequireDefault(_Explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


_Store2.default.dispatch(_Init2.default.initState());

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

        _this.getMainViewContents = function () {
            switch (_this.props.mode) {
                case _AppState.AppMode.RemoteAccess:
                    return _react2.default.createElement(_RemoteView2.default, { repo: _this.props.repo });
                case _AppState.AppMode.Workspace:
                    return _react2.default.createElement('div', null);
                case _AppState.AppMode.Explore:
                    return _react2.default.createElement(_Explore2.default, null);
                default:
                    return _react2.default.createElement(_History2.default, null);
            }
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'root' },
                _react2.default.createElement(_Sidebar2.default, null),
                _react2.default.createElement(
                    'div',
                    { id: 'main-view' },
                    _react2.default.createElement(_ModalMessage2.default, null),
                    this.getMainViewContents()
                )
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

var ConnectedIndex = (0, _reactRedux.connect)(function (state) {
    return {
        repo: state.appData.dirName,
        mode: state.appData.mode
    };
})(Index);
_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _Store2.default },
    _react2.default.createElement(ConnectedIndex, null)
), document.getElementById('global-container'));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SidebarView = __webpack_require__(36);

var _SidebarView2 = _interopRequireDefault(_SidebarView);

var _reactRedux = __webpack_require__(3);

var _Navigation = __webpack_require__(14);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Offsets = __webpack_require__(18);

var _Offsets2 = _interopRequireDefault(_Offsets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapNodes = function mapNodes(nodeId, state) {
    var node = state[nodeId];
    var id = node.id,
        text = node.text,
        parentId = node.parentId;

    var props = {};
    Object.keys(node.props).forEach(function (key) {
        props['data-' + key] = node.props[key];
    });
    return Object.assign({}, {
        id: id,
        text: text,
        parentId: parentId,
        children: node.children.map(function (childId) {
            return mapNodes(childId, state);
        }),
        props: props
    });
};
exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        dirName: state.appData.dirName,
        viewOnly: state.appData.viewOnly,
        nodes: state.navigation.rootNodes.map(function (nodeId) {
            return mapNodes(nodeId, state.navigation.nodes);
        }),
        selectedItem: state.navigation.selected,
        showAll: state.navigation.showAll
    };
}, function (dispatch) {
    return {
        onItemClicked: function onItemClicked(item) {
            dispatch(_Navigation2.default.itemSelected(item.id));
            dispatch(_Offsets2.default.setOffset('EXPLORE_DIFF', 0, 0));
            dispatch(_Offsets2.default.setOffset('EXPLORE_FILES', 0, 0));
        },
        moreClicked: function moreClicked(id) {
            dispatch(_Navigation2.default.showMore(id));
        }
    };
})(_SidebarView2.default);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(19);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SidebarView = function (_React$PureComponent) {
  _inherits(SidebarView, _React$PureComponent);

  function SidebarView() {
    _classCallCheck(this, SidebarView);

    var _this = _possibleConstructorReturn(this, (SidebarView.__proto__ || Object.getPrototypeOf(SidebarView)).apply(this, arguments));

    _this.renderItems = function (items, parentNode) {
      if (items.length > 6) {
        var showMoreLink = _react2.default.createElement(
          'li',
          { className: 'sidebar-ref', title: 'More ...', key: '$more$' + parentNode.id, onClick: function onClick() {
              return _this.props.moreClicked(parentNode.id);
            } },
          'More ...'
        );
        return items.slice(0, 5).map(function (item) {
          return _this.getItem(item);
        }).concat([showMoreLink]);
      }
      return items.slice(0, 6).map(function (item) {
        return _this.getItem(item);
      });
    };
    _this.getItem = function (item) {
      var selectedItem = _this.props.selectedItem;

      var className = '';
      if (selectedItem && selectedItem === item.id) {
        className += ' active';
      }
      return _react2.default.createElement(
        'li',
        _extends({ className: 'sidebar-ref ' + className, title: item.text, key: item.id, onClick: function onClick() {
            return _this.props.onItemClicked(item);
          } }, item.props),
        item.text
      );
    };
    _this.renderModal = function () {
      var _this$props = _this.props,
          showAll = _this$props.showAll,
          nodes = _this$props.nodes;

      var allNode = nodes.find(function (n) {
        return n.id === showAll;
      });
      return showAll ? _react2.default.createElement(
        _Modal2.default,
        { onHide: function onHide() {
            return _this.props.moreClicked(null);
          }, show: true, containerClassName: 'modal-open', backdropClassName: 'modal fade in modal-backdrop', backdropStyle: { display: 'block' } },
        _react2.default.createElement(
          'div',
          { className: 'modal fade in', style: { display: 'block' }, id: 'error-modal', tabIndex: -1, role: 'dialog' },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog modal-sm' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'close', 'data-dismiss': 'modal', onClick: function onClick() {
                      return _this.props.moreClicked(null);
                    } },
                  _react2.default.createElement(
                    'span',
                    { 'aria-hidden': 'true' },
                    '\xD7'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'sr-only' },
                    'Close'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'modal-title' },
                  allNode.text
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-body' },
                _react2.default.createElement(
                  'ul',
                  { className: 'modal-list' },
                  allNode.children.map(function (item) {
                    return _this.getItem(item);
                  })
                )
              )
            )
          )
        )
      ) : null;
    };
    return _this;
  }

  _createClass(SidebarView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nodes = this.props.nodes;

      return _react2.default.createElement(
        'div',
        { id: 'sidebar' },
        _react2.default.createElement(
          'a',
          { href: '#', 'data-toggle': 'modal', 'data-target': '#help-modal' },
          _react2.default.createElement('img', { id: 'sidebar-logo', src: '/img/git-logo.png' })
        ),
        this.renderModal(),
        _react2.default.createElement(
          'div',
          { id: 'sidebar-content' },
          nodes.map(function (node) {
            return _react2.default.createElement(
              'section',
              { id: 'sidebar-' + node.id },
              _react2.default.createElement(
                'h4',
                _extends({ onClick: function onClick() {
                    return _this2.props.onItemClicked(node);
                  } }, node.props),
                node.text
              ),
              _react2.default.createElement(
                'ul',
                null,
                _this2.renderItems(node.children, node)
              )
            );
          })
        )
      );
    }
  }]);

  return SidebarView;
}(_react2.default.PureComponent);

exports.default = SidebarView;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activeElement;

var _ownerDocument = __webpack_require__(10);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activeElement() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();

  try {
    return doc.activeElement;
  } catch (e) {/* ie throws if no active element */}
}
module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(5);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM2.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);

  return false;
}
module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(11);
var invariant = __webpack_require__(12);
var warning = __webpack_require__(21);
var assign = __webpack_require__(40);

var ReactPropTypesSecret = __webpack_require__(13);
var checkPropTypes = __webpack_require__(41);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(12);
  var warning = __webpack_require__(21);
  var ReactPropTypesSecret = __webpack_require__(13);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(11);
var invariant = __webpack_require__(12);
var ReactPropTypesSecret = __webpack_require__(13);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecated;

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function deprecated(validator, reason) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] != null) {
      var messageKey = componentName + '.' + propName;

      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

      warned[messageKey] = true;
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

/* eslint-disable no-underscore-dangle */
function _resetWarned() {
  warned = {};
}

deprecated._resetWarned = _resetWarned;
/* eslint-enable no-underscore-dangle */

module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(23);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  if (propType !== 'function' && propType !== 'string') {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(22);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__(25);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(26);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._mountOverlayTarget = function () {
      if (!_this._overlayTarget) {
        _this._overlayTarget = document.createElement('div');
        _this._portalContainerNode = (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);
        _this._portalContainerNode.appendChild(_this._overlayTarget);
      }
    }, _this._unmountOverlayTarget = function () {
      if (_this._overlayTarget) {
        _this._portalContainerNode.removeChild(_this._overlayTarget);
        _this._overlayTarget = null;
      }
      _this._portalContainerNode = null;
    }, _this._renderOverlay = function () {

      var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

      // Save reference for future access.
      if (overlay !== null) {
        _this._mountOverlayTarget();
        _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget);
      } else {
        // Unrender if the component is null for transitions to null
        _this._unrenderOverlay();
        _this._unmountOverlayTarget();
      }
    }, _this._unrenderOverlay = function () {
      if (_this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
        _this._overlayInstance = null;
      }
    }, _this.getMountNode = function () {
      return _this._overlayTarget;
    }, _this.getOverlayDOMNode = function () {
      if (!_this._isMounted) {
        throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
      }

      if (_this._overlayInstance) {
        return _reactDom2.default.findDOMNode(_this._overlayInstance);
      }

      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this._renderOverlay();
  };

  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderOverlay();
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  };

  Portal.prototype.render = function render() {
    return null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func])
};
exports.default = Portal;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class = __webpack_require__(47);

var _class2 = _interopRequireDefault(_class);

var _style = __webpack_require__(50);

var _style2 = _interopRequireDefault(_style);

var _scrollbarSize = __webpack_require__(58);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _isOverflowing = __webpack_require__(59);

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _manageAriaHidden = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
}

function setContainerStyle(state, container) {
  var style = { overflow: 'hidden' };

  // we are only interested in the actual `style` here
  // becasue we will override it
  state.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (state.overflowing) {
    // use computed style, here to get the real padding
    // to add our scrollbar width
    style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
  }

  (0, _style2.default)(container, style);
}

function removeContainerStyle(_ref, container) {
  var style = _ref.style;


  Object.keys(style).forEach(function (key) {
    return container.style[key] = style[key];
  });
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */

var ModalManager = function ModalManager() {
  var _this = this;

  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
      hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
      _ref2$handleContainer = _ref2.handleContainerOverflow,
      handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;

  _classCallCheck(this, ModalManager);

  this.add = function (modal, container, className) {
    var modalIdx = _this.modals.indexOf(modal);
    var containerIdx = _this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = _this.modals.length;
    _this.modals.push(modal);

    if (_this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
    }

    if (containerIdx !== -1) {
      _this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],

      overflowing: (0, _isOverflowing2.default)(container)
    };

    if (_this.handleContainerOverflow) {
      setContainerStyle(data, container);
    }

    data.classes.forEach(_class2.default.addClass.bind(null, container));

    _this.containers.push(container);
    _this.data.push(data);

    return modalIdx;
  };

  this.remove = function (modal) {
    var modalIdx = _this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = findContainer(_this.data, modal);
    var data = _this.data[containerIdx];
    var container = _this.containers[containerIdx];

    data.modals.splice(data.modals.indexOf(modal), 1);

    _this.modals.splice(modalIdx, 1);

    // if that was the last modal in a container,
    // clean up the container
    if (data.modals.length === 0) {
      data.classes.forEach(_class2.default.removeClass.bind(null, container));

      if (_this.handleContainerOverflow) {
        removeContainerStyle(data, container);
      }

      if (_this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
      }
      _this.containers.splice(containerIdx, 1);
      _this.data.splice(containerIdx, 1);
    } else if (_this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
    }
  };

  this.isTopModal = function (modal) {
    return !!_this.modals.length && _this.modals[_this.modals.length - 1] === modal;
  };

  this.hideSiblingNodes = hideSiblingNodes;
  this.handleContainerOverflow = handleContainerOverflow;
  this.modals = [];
  this.containers = [];
  this.data = [];
};

exports.default = ModalManager;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = exports.removeClass = exports.addClass = undefined;

var _addClass = __webpack_require__(48);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(49);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _hasClass = __webpack_require__(27);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addClass = _addClass2.default;
exports.removeClass = _removeClass2.default;
exports.hasClass = _hasClass2.default;
exports.default = { addClass: _addClass2.default, removeClass: _removeClass2.default, hasClass: _hasClass2.default };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(27);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__(28);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__(52);

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__(54);

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__(55);

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__(56);

var _isTransform = __webpack_require__(57);

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__(53);

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__(28);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(5);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__(5);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = __webpack_require__(60);

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__(10);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument2.default)(node);
  var win = (0, _isWindow2.default)(doc);
  var fullWidth = win.innerWidth;

  // Support: ie8, no innerWidth
  if (!fullWidth) {
    var documentElementRect = doc.documentElement.getBoundingClientRect();
    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  return doc.body.clientWidth < fullWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow2.default)(container);

  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;

var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, mount, cb) {
  mount = [].concat(mount);

  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (node, event, handler, capture) {
  (0, _on2.default)(node, event, handler, capture);

  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, capture);
    }
  };
};

var _on = __webpack_require__(63);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(64);

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(5);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on() {};
if (_inDOM2.default) {
  on = function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

exports.default = on;
module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(5);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var off = function off() {};
if (_inDOM2.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

exports.default = off;
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addFocusListener;
/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 */
function addFocusListener(handler) {
  var useFocusin = !document.addEventListener;
  var remove = void 0;

  if (useFocusin) {
    document.attachEvent('onfocusin', handler);
    remove = function remove() {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);
    remove = function remove() {
      return document.removeEventListener('focus', handler, true);
    };
  }

  return { remove: remove };
}
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BranchStatus = __webpack_require__(15);

var _BranchStatus2 = _interopRequireDefault(_BranchStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitBranchesResponseParser = function GitBranchesResponseParser() {
    var _this = this;

    _classCallCheck(this, GitBranchesResponseParser);

    this.parse = function (response) {
        if (response.returnCode !== 0) {
            throw {
                message: response.message,
                returnCode: response.returnCode
            };
        }
        var branches = _this.splitLines(response.data).map(function (name) {
            return _this.getGitBranch(name);
        });
        branches = branches.sort(_this.compareBranches);
        return {
            data: branches,
            message: response.message,
            returnCode: response.returnCode
        };
    };
    this.getGitBranch = function (name) {
        var status = _BranchStatus2.default.Normal;
        if (name[2] === '(' && name[name.length - 1] === ')') {
            // This is a '(detached from XXXXXX)'
            status |= _BranchStatus2.default.Detached;
            name = name.substring(name.lastIndexOf(' ') + 1, name.length - 1);
        }
        var arrowIndex = name.lastIndexOf(" -> ");
        if (arrowIndex > 0) {
            name = name.substring(2, arrowIndex);
        }
        if (name[0] === '*') {
            name = name.substring(2);
            status |= _BranchStatus2.default.Current;
        }
        return {
            name: name,
            status: status
        };
    };
    this.compareBranches = function (a, b) {
        if (a.name[0] === "*") {
            return -1;
        } else if (b.name[0] === "*") {
            return 1;
        } else {
            return -a.name.localeCompare(b.name);
        }
    };
    this.splitLines = function (data) {
        return data.split("\n").filter(function (s) {
            return s.length > 0;
        });
    };
};

exports.default = new GitBranchesResponseParser();

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommitInfoResponseParser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CommitInfo = __webpack_require__(29);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommitInfoResponseParser = exports.CommitInfoResponseParser = function () {
    function CommitInfoResponseParser() {
        var _this = this;

        _classCallCheck(this, CommitInfoResponseParser);

        this.parse = function (rows, response) {
            if (response.returnCode !== 0) {
                throw { message: response.message, returnCode: response.returnCode };
            }
            var start = 0;
            var count = 0;
            var commits = [];
            var data = response.data;
            var next = void 0;
            while (true) {
                var end = data.indexOf("\ncommit ", start);
                if (end !== -1) {
                    var commit = _this.parseCommit(data.substr(start, end - start));
                    if (commits.length < rows) {
                        commits.push(commit);
                    } else {
                        next = commit.hash;
                    }
                } else {
                    commits.push(_this.parseCommit(data.substr(start)));
                    break;
                }
                start = end + 1;
                ++count;
            }
            return { data: commits, message: null, returnCode: 0 };
        };
        this.parseCommit = function (data) {
            var commit = {
                hash: null,
                parents: [],
                tree: null,
                author: null,
                committer: null,
                message: null,
                refs: []
            };
            data.split("\n").forEach(function (line) {
                if (line.indexOf("commit ") === 0) {
                    commit.hash = line.substr(7, 40);
                    if (line.length > 47) {
                        var s = line.lastIndexOf("(") + 1;
                        var e = line.lastIndexOf(")");
                        commit.refs = line.substr(s, e - s).split(", ").map(function (ref) {
                            return _this.parseRef(ref);
                        });
                    }
                } else if (line.indexOf("parent ") === 0) {
                    commit.parents.push(line.substr(7));
                } else if (line.indexOf("tree ") === 0) {
                    commit.tree = line.substr(5);
                } else if (line.indexOf("author ") === 0) {
                    commit.author = _this.parsePerson(line.substr(7));
                } else if (line.indexOf("committer ") === 0) {
                    commit.committer = _this.parsePerson(line.substr(10));
                } else if (line.indexOf("    ") === 0) {
                    commit.message = line.substr(4) + "\n";
                }
            });
            return commit;
        };
    }

    _createClass(CommitInfoResponseParser, [{
        key: "parseRef",
        value: function parseRef(data) {
            if (data.indexOf("refs/remotes") === 0) {
                return { text: data.substr(13), type: _CommitInfo.RefType.Remote };
            } else if (data.indexOf("refs/heads") === 0) {
                return { text: data.substr(11), type: _CommitInfo.RefType.Head };
            } else if (data.indexOf("tag: refs/tags") === 0) {
                return { text: data.substr(15), type: _CommitInfo.RefType.Tag };
            } else {
                return { text: data, type: _CommitInfo.RefType.Unspecified };
            }
        }
    }, {
        key: "parsePerson",
        value: function parsePerson(data) {
            var nameEnd = data.indexOf("<");
            var name = data.substr(0, nameEnd - 1);
            var emailEnd = data.indexOf(">", nameEnd);
            var email = data.substr(nameEnd + 1, emailEnd - nameEnd - 1);
            var dateEnd = data.indexOf(" ", emailEnd + 2);
            var secs = data.substr(emailEnd + 2, dateEnd - emailEnd - 2);
            var date = new Date(0);
            date.setUTCSeconds(parseInt(secs));
            return {
                name: name,
                email: email,
                date: date
            };
        }
    }]);

    return CommitInfoResponseParser;
}();

exports.default = new CommitInfoResponseParser();

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DiffParser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Diff = __webpack_require__(16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiffParser = exports.DiffParser = function () {
    function DiffParser() {
        var _this = this;

        _classCallCheck(this, DiffParser);

        this.processLines = function (lines) {
            var diff = { fileDiffs: [], headerLines: [] };
            var index = 0;
            while (index < lines.length && !lines[index].startsWith('diff --git')) {
                diff.headerLines.push(lines[index]);
                index++;
            }
            while (index < lines.length) {
                var res = _this.parseFileDiff(lines, index);
                index = res.endIndex;
                diff.fileDiffs.push(res.fileDiff);
            }
            return diff;
        };
        this.parseFileDiff = function (lines, index) {
            var hasFileModeLine = lines[index + 1].startsWith('new file mode ') || lines[index + 1].startsWith('deleted file mode ');
            var fileDiff = {
                header: lines[index],
                fileModeLine: hasFileModeLine ? lines[++index] : null,
                indexLine: lines[++index],
                initialFile: '',
                resultingFile: '',
                hunks: []
            };
            //skip --- a/ and +++ b/ parts
            var initialFile = lines[++index];
            var resultingFile = lines[++index];
            fileDiff.initialFile = initialFile.substring(initialFile.indexOf('/') + 1);
            fileDiff.resultingFile = resultingFile.substring(resultingFile.indexOf('/') + 1);
            var hunk = { header: lines[++index], parts: [] };
            var hunkPart = {
                content: [],
                type: _this.getHunkType(lines[index + 1])
            };
            /* continue from line after index */
            while (++index < lines.length && !lines[index].startsWith('diff --git')) {
                var line = lines[index];
                if (line.startsWith('@@ ')) {
                    fileDiff.hunks.push(hunk);
                    hunk.parts.push(hunkPart);
                    hunkPart = { content: [], type: _Diff.HunkPartType.Keep };
                    hunk = { header: line, parts: [] };
                } else {
                    var mode = _this.getHunkType(line);
                    if (hunkPart.type === mode) {
                        hunkPart.content.push(line);
                    } else {
                        hunk.parts.push(hunkPart);
                        hunkPart = { content: [line], type: _this.getHunkType(line) };
                    }
                }
            }
            fileDiff.hunks.push(hunk);
            hunk.parts.push(hunkPart);
            return { endIndex: index, fileDiff: fileDiff };
        };
        this.getHunkType = function (line) {
            if (line.startsWith('+')) {
                return _Diff.HunkPartType.Add;
            } else if (line.startsWith('-')) {
                return _Diff.HunkPartType.Remove;
            } else {
                return _Diff.HunkPartType.Keep;
            }
        };
    }

    _createClass(DiffParser, [{
        key: 'parse',
        value: function parse(diff) {
            var diffLines = diff.split("\n");
            return this.processLines(diffLines);
        }
    }]);

    return DiffParser;
}();

exports.default = new DiffParser();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Messages = __webpack_require__(7);

var _Messages2 = _interopRequireDefault(_Messages);

var _reactRedux = __webpack_require__(3);

var _ModalMessage = __webpack_require__(70);

var _ModalMessage2 = _interopRequireDefault(_ModalMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
    return { message: state.appData.messages };
}, function (dispatch) {
    return {
        close: function close() {
            return dispatch(_Messages2.default.closeMessage());
        }
    };
})(_ModalMessage2.default);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(19);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ModalMessage = function (_React$Component) {
  _inherits(ModalMessage, _React$Component);

  function ModalMessage() {
    _classCallCheck(this, ModalMessage);

    return _possibleConstructorReturn(this, (ModalMessage.__proto__ || Object.getPrototypeOf(ModalMessage)).apply(this, arguments));
  }

  _createClass(ModalMessage, [{
    key: 'render',
    value: function render() {
      if (!this.props.message || this.props.message === '') {
        return null;
      }
      return _react2.default.createElement(
        _Modal2.default,
        { onHide: this.props.close, show: true, containerClassName: 'modal-open', backdropClassName: 'modal fade in modal-backdrop', backdropStyle: { display: 'block' } },
        _react2.default.createElement(
          'div',
          { className: 'modal fade in', style: { display: 'block' }, id: 'error-modal', tabIndex: -1, role: 'dialog' },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'close', onClick: this.props.close, 'data-dismiss': 'modal' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\xD7'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'sr-only' },
                    'Close'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'modal-title' },
                  'Error'
                )
              ),
              _react2.default.createElement(
                'pre',
                { className: 'modal-body alert alert-danger' },
                this.props.message
              )
            )
          )
        )
      );
    }
  }]);

  return ModalMessage;
}(_react2.default.Component);

exports.default = ModalMessage;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initState = initState;

var _BranchStatus = __webpack_require__(15);

var _BranchStatus2 = _interopRequireDefault(_BranchStatus);

var _AppState = __webpack_require__(2);

var _Git = __webpack_require__(8);

var _Git2 = _interopRequireDefault(_Git);

var _Messages = __webpack_require__(7);

var _Messages2 = _interopRequireDefault(_Messages);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Navigation = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var setDirName = function setDirName(dirName) {
    return {
        type: _Actions2.default.SET_DIRNAME,
        dirName: dirName
    };
};
var setViewOnly = function setViewOnly(viewOnly) {
    return {
        type: _Actions2.default.SET_VIEW_ONLY,
        viewOnly: viewOnly
    };
};
var getViewOnly = function getViewOnly(dispatch) {
    return _Git2.default.getViewOnly().then(function (response) {
        dispatch(setViewOnly(response.data === "1"));
        if (response.message) {
            dispatch(_Messages2.default.addMessage(response.message));
        }
    });
};
var setLocalBranches = function setLocalBranches(branches) {
    return {
        type: _Actions2.default.SET_LOCAL_BRANCHES,
        data: branches
    };
};
var selectActiveBranch = function selectActiveBranch(branches) {
    var active = branches.find(function (b) {
        return b.status === _BranchStatus2.default.Current;
    });
    if (!active) {
        active = branches[0];
    }
    return active ? (0, _Navigation.itemSelected)(_AppState.NavigationType.LocalBranches + '_' + active.name) : null;
};
var getLocalBranches = function getLocalBranches(dispatch) {
    return _Git2.default.getLocalBranches().then(function (response) {
        dispatch(setLocalBranches(response.data));
        if (response.message) {
            dispatch(_Messages2.default.addMessage(response.message));
        }
        var action = selectActiveBranch(response.data);
        if (action) {
            dispatch(action);
        }
    }).catch(function (error) {
        console.log(error);
        dispatch(_Messages2.default.addMessage(error.message));
    });
};
var setRemoteBranches = function setRemoteBranches(branches) {
    return {
        type: _Actions2.default.SET_REMOTE_BRANCHES,
        data: branches
    };
};
var getRemoteBranches = function getRemoteBranches(dispatch) {
    return _Git2.default.getRemoteBranches().then(function (response) {
        dispatch(setRemoteBranches(response.data));
        if (response.message) {
            dispatch(_Messages2.default.addMessage(response.message));
        }
    }).catch(function (error) {
        console.log(error);
        dispatch(_Messages2.default.addMessage(error.message));
    });
};
var setTags = function setTags(tags) {
    return {
        type: _Actions2.default.SET_TAGS,
        data: tags
    };
};
var getTags = function getTags(dispatch) {
    return _Git2.default.getTags().then(function (response) {
        dispatch(setTags(response.data));
        if (response.message) {
            dispatch(_Messages2.default.addMessage(response.message));
        }
    }).catch(function (error) {
        console.log(error);
        dispatch(_Messages2.default.addMessage(error.message));
    });
};
function initState() {
    return function (dispatch) {
        return _Git2.default.getDirName().then(function (response) {
            if (response.returnCode === 0) {
                dispatch(setDirName(response.data));
                dispatch(getViewOnly);
                dispatch(getLocalBranches);
                dispatch(getRemoteBranches);
                dispatch(getTags);
            }
            if (response.message) {
                dispatch(_Messages2.default.addMessage(response.message));
            }
        });
    };
}
exports.default = {
    initState: initState
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Diff = __webpack_require__(9);

var _Diff2 = _interopRequireDefault(_Diff);

var _Commit = __webpack_require__(31);

var _Commit2 = _interopRequireDefault(_Commit);

var _reactRedux = __webpack_require__(3);

var _HistoryView = __webpack_require__(73);

var _HistoryView2 = _interopRequireDefault(_HistoryView);

var _Commit3 = __webpack_require__(75);

var _Commit4 = _interopRequireDefault(_Commit3);

var _Explore = __webpack_require__(33);

var _Explore2 = _interopRequireDefault(_Explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    var commits = state.commits;
    return {
        commitHash: commits.selectedCommit,
        commits: state.commits.commits,
        diffViewMode: state.commits.viewMode,
        CommitView: _Commit4.default,
        graph: state.commits.graph,
        ExploreView: _Explore2.default
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onCommitClicked: function onCommitClicked(commit) {
            dispatch(_Commit2.default.commitSelected(commit));
        },
        selectDiffViewMode: function selectDiffViewMode(mode) {
            dispatch(_Diff2.default.selectDiffViewMode(mode));
        }
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HistoryView2.default);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LogView = __webpack_require__(74);

var _LogView2 = _interopRequireDefault(_LogView);

var _AppState = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var HistoryView = function (_React$PureComponent) {
  _inherits(HistoryView, _React$PureComponent);

  function HistoryView() {
    _classCallCheck(this, HistoryView);

    return _possibleConstructorReturn(this, (HistoryView.__proto__ || Object.getPrototypeOf(HistoryView)).apply(this, arguments));
  }

  _createClass(HistoryView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          commits = _props.commits,
          diffViewMode = _props.diffViewMode,
          commitHash = _props.commitHash,
          graph = _props.graph,
          selectDiffViewMode = _props.selectDiffViewMode,
          CommitView = _props.CommitView;

      return _react2.default.createElement(
        'div',
        { id: 'history-view' },
        _react2.default.createElement(_LogView2.default, { commits: commits, onCommitClicked: this.props.onCommitClicked, active: commitHash, graph: graph }),
        _react2.default.createElement(
          'div',
          { id: 'commit-view', style: { display: 'flex' } },
          _react2.default.createElement(
            'div',
            { id: 'commit-view-header' },
            _react2.default.createElement(
              'ul',
              { className: 'nav nav-pills nav-justified', role: 'tablList' },
              _react2.default.createElement(
                'li',
                { onClick: function onClick() {
                    return selectDiffViewMode(_AppState.CommitViewMode.Diff);
                  }, className: diffViewMode === _AppState.CommitViewMode.Diff ? 'active' : '' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Commit'
                )
              ),
              _react2.default.createElement(
                'li',
                { onClick: function onClick() {
                    return selectDiffViewMode(_AppState.CommitViewMode.Tree);
                  }, className: diffViewMode === _AppState.CommitViewMode.Tree ? 'active' : '' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Tree'
                )
              )
            )
          ),
          _react2.default.createElement(CommitView, null)
        )
      );
    }
  }]);

  return HistoryView;
}(_react2.default.PureComponent);

exports.default = HistoryView;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classNames;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CommitInfo = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
                                                                                                                                                                                                                   * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                   * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                   * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                   * You may obtain a copy of the License at
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                   * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                   * See the License for the specific language governing permissions and
                                                                                                                                                                                                                   * limitations under the License.
                                                                                                                                                                                                                   */


var classNames = (_classNames = {}, _defineProperty(_classNames, _CommitInfo.RefType.Head, 'label label-warning ref'), _defineProperty(_classNames, _CommitInfo.RefType.Unspecified, 'label label-warning ref'), _defineProperty(_classNames, _CommitInfo.RefType.Remote, 'label label-danger ref'), _defineProperty(_classNames, _CommitInfo.RefType.Tag, 'label label-info ref'), _classNames);
var COLORS = ["#ffab1d", "#fd8c25", "#f36e4a", "#fc6148", "#d75ab6", "#b25ade", "#6575ff", "#7b77e9", "#4ea8ec", "#00d0f5", "#4eb94e", "#51af23", "#8b9f1c", "#d0b02f", "#d0853a", "#a4a4a4", "#ffc51f", "#fe982c", "#fd7854", "#ff705f", "#e467c3", "#bd65e9", "#7183ff", "#8985f7", "#55b6ff", "#10dcff", "#51cd51", "#5cba2e", "#9eb22f", "#debe3d", "#e19344", "#b8b8b8", "#ffd03b", "#ffae38", "#ff8a6a", "#ff7e7e", "#ef72ce", "#c56df1", "#8091ff", "#918dff", "#69caff", "#3ee1ff", "#72da72", "#71cf43", "#abbf3c", "#e6c645", "#eda04e", "#c5c5c5", "#ffd84c", "#ffb946", "#ff987c", "#ff8f8f", "#fb7eda", "#ce76fa", "#90a0ff", "#9c98ff", "#74cbff", "#64e7ff", "#7ce47c", "#85e357", "#b8cc49", "#edcd4c", "#f9ad58", "#d0d0d0", "#ffe651", "#ffbf51", "#ffa48b", "#ff9d9e", "#ff8de1", "#d583ff", "#97a9ff", "#a7a4ff", "#82d3ff", "#76eaff", "#85ed85", "#8deb5f", "#c2d653", "#f5d862", "#fcb75c", "#d7d7d7", "#fff456", "#ffc66d", "#ffb39e", "#ffabad", "#ff9de5", "#da90ff", "#9fb2ff", "#b2afff", "#8ddaff", "#8bedff", "#99f299", "#97f569", "#cde153", "#fbe276", "#ffc160", "#e1e1e1", "#fff970", "#ffd587", "#ffc2b2", "#ffb9bd", "#ffa5e7", "#de9cff", "#afbeff", "#bbb8ff", "#9fd4ff", "#9aefff", "#b3f7b3", "#a0fe72", "#dbef6c", "#fcee98", "#ffca69", "#eaeaea", "#763700", "#9f241e", "#982c0e", "#a81300", "#80035f", "#650d90", "#082fca", "#3531a3", "#1d4892", "#006f84", "#036b03", "#236600", "#445200", "#544509", "#702408", "#343434", "#9a5000", "#b33a20", "#b02f0f", "#c8210a", "#950f74", "#7b23a7", "#263dd4", "#4642b4", "#1d5cac", "#00849c", "#0e760e", "#287800", "#495600", "#6c5809", "#8d3a13", "#4e4e4e", "#c36806", "#c85120", "#bf3624", "#df2512", "#aa2288", "#933bbf", "#444cde", "#5753c5", "#1d71c6", "#0099bf", "#188018", "#2e8c00", "#607100", "#907609", "#ab511f", "#686868", "#e47b07", "#e36920", "#d34e2a", "#ec3b24", "#ba3d99", "#9d45c9", "#4f5aec", "#615dcf", "#3286cf", "#00abca", "#279227", "#3a980c", "#6c7f00", "#ab8b0a", "#b56427", "#757575", "#ff911a", "#fc8120", "#e7623e", "#fa5236", "#ca4da9", "#a74fd3", "#5a68ff", "#6d69db", "#489bd9", "#00bcde", "#36a436", "#47a519", "#798d0a", "#c1a120", "#bf7730", "#8e8e8e"];
var lineHeight = 54;

var LogView = function (_React$PureComponent) {
    _inherits(LogView, _React$PureComponent);

    function LogView() {
        _classCallCheck(this, LogView);

        var _this = _possibleConstructorReturn(this, (LogView.__proto__ || Object.getPrototypeOf(LogView)).apply(this, arguments));

        _this.updateGraph = function (startAt) {
            var graph = _this.props.graph;
            var commits = _this.props.commits;
            var xOffset = 12;
            var yOffset = (startAt + 0.5) * lineHeight;
            var maxLeft = 0;
            // Draw the graph
            var circles = graph.circles.map(function (entry) {
                maxLeft = Math.max(maxLeft, entry.cx);
                return _react2.default.createElement('circle', { cx: entry.cx * xOffset, cy: entry.cy * lineHeight + yOffset, r: entry.r, key: entry.key });
            });
            var lines = graph.paths.map(function (stream, index) {
                var d = stream.commands.map(function (cmd) {
                    return cmd.type + ' ' + cmd.x * xOffset + ' ' + cmd.y * lineHeight;
                }).join(' ');
                var colorIndex = index < COLORS.length ? index : index % COLORS.length;
                return _react2.default.createElement('path', { style: { stroke: COLORS[colorIndex] }, key: stream.key, d: d });
            });
            return {
                svg: _react2.default.createElement(
                    'svg',
                    { height: lineHeight * commits.length },
                    lines,
                    circles
                ),
                maxLeft: maxLeft
            };
        };
        _this.handleCommitClick = function (event) {
            var target = event.currentTarget;
            if (target.dataset['index']) {
                var index = parseInt(target.dataset['index']);
                if (Number.isInteger(index)) {
                    _this.props.onCommitClicked(_this.props.commits[index]);
                }
            }
        };
        return _this;
    }

    _createClass(LogView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var graph = this.updateGraph(0);
            var left = Math.max(3, graph.maxLeft) + 1;
            var xOffset = left * 12 + 'px';
            return _react2.default.createElement(
                'div',
                { id: 'log-view' },
                _react2.default.createElement(
                    'div',
                    null,
                    graph.svg,
                    this.props.commits.map(function (commit, index) {
                        var refs = commit.refs.map(function (tag) {
                            return _react2.default.createElement(
                                'span',
                                { key: _CommitInfo.RefType[tag.type] + "_" + tag.text, className: classNames[tag.type] },
                                tag.text
                            );
                        });
                        var className = _this2.props.active === commit.hash ? "log-entry list-group-item active" : "log-entry list-group-item";
                        return _react2.default.createElement(
                            'span',
                            { 'data-index': index.toString(), onClick: _this2.handleCommitClick, key: commit.hash, className: className, style: { paddingLeft: xOffset, height: lineHeight + 'px' } },
                            _react2.default.createElement(
                                'header',
                                null,
                                _react2.default.createElement(
                                    'h6',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { target: '_blank', href: "mailto:" + commit.author.email },
                                        commit.author.name
                                    )
                                ),
                                refs,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'log-entry-date' },
                                    commit.author.date.toLocaleString(),
                                    '\xA0'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'badge' },
                                    commit.hash.substring(0, 7)
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'list-group-item-text' },
                                commit.message
                            )
                        );
                    })
                )
            );
        }
    }]);

    return LogView;
}(_react2.default.PureComponent);

exports.default = LogView;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Diff = __webpack_require__(9);

var _Diff2 = _interopRequireDefault(_Diff);

var _Navigation = __webpack_require__(14);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Tree = __webpack_require__(17);

var _Tree2 = _interopRequireDefault(_Tree);

var _AppState = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _CommitView = __webpack_require__(76);

var _CommitView2 = _interopRequireDefault(_CommitView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        diff: state.commitDiff.fileDiffs,
        headerLines: state.commitDiff.headerLines,
        ignoreWhitespace: state.diffOptions.ignoreWhitespace,
        diffContext: state.diffOptions.context,
        fullFileDiff: state.diffOptions.fullFile,
        diffViewMode: state.commits.viewMode,
        path: state.commitTree.path,
        files: state.commitTree.files
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        toggleIgnoreWhiteSpace: function toggleIgnoreWhiteSpace() {
            dispatch(_Diff2.default.toggleIgnoreWhiteSpace());
        },
        updateDiffContext: function updateDiffContext(diffContext) {
            dispatch(_Diff2.default.setDiffContext(diffContext));
        },
        onNodeSelected: function onNodeSelected(node) {
            dispatch(_Tree2.default.selectNode(node));
        },
        toggleShowFullFile: function toggleShowFullFile() {
            dispatch(_Diff2.default.toggleShowFullFile());
        },
        onExloreClicked: function onExloreClicked() {
            dispatch(_Navigation2.default.changeAppMode(_AppState.AppMode.Explore));
        }
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CommitView2.default);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DiffView = __webpack_require__(32);

var _DiffView2 = _interopRequireDefault(_DiffView);

var _TreeView = __webpack_require__(77);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _AppState = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the 'License');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an 'AS IS' BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CommitView = function (_React$PureComponent) {
  _inherits(CommitView, _React$PureComponent);

  function CommitView() {
    _classCallCheck(this, CommitView);

    var _this = _possibleConstructorReturn(this, (CommitView.__proto__ || Object.getPrototypeOf(CommitView)).apply(this, arguments));

    _this.renderButtons = function () {
      var _this$props = _this.props,
          ignoreWhitespace = _this$props.ignoreWhitespace,
          fullFileDiff = _this$props.fullFileDiff,
          diffContext = _this$props.diffContext,
          toggleIgnoreWhiteSpace = _this$props.toggleIgnoreWhiteSpace,
          toggleShowFullFile = _this$props.toggleShowFullFile,
          updateDiffContext = _this$props.updateDiffContext,
          onExloreClicked = _this$props.onExloreClicked;

      var ignoreWhitespaceClass = 'btn btn-sm btn-default diff-ignore-whitespace' + (ignoreWhitespace ? ' active' : '');
      var allFile = fullFileDiff;
      var completeFileClass = 'btn btn-sm btn-default diff-context-all' + (allFile ? ' active' : '');
      return _react2.default.createElement(
        'div',
        { className: 'panel-heading btn-toolbar', role: 'toolbar' },
        _react2.default.createElement(
          'button',
          { type: 'button', className: ignoreWhitespaceClass, 'data-toggle': 'button', 'aria-pressed': ignoreWhitespace, onClick: toggleIgnoreWhiteSpace },
          'Ignore Whitespace'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: completeFileClass, 'data-toggle': 'button', 'aria-pressed': allFile, onClick: function onClick() {
              return toggleShowFullFile();
            } },
          'Complete file'
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn-group btn-group-sm' },
          _react2.default.createElement(
            'span',
            null,
            'Context:\xA0' + diffContext
          ),
          '\xA0',
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-default diff-context-remove', onClick: function onClick() {
                return updateDiffContext(diffContext - 1);
              } },
            '-'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-default diff-context-add', onClick: function onClick() {
                return updateDiffContext(diffContext + 1);
              } },
            '+'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn-group btn-group-sm diff-selection-buttons' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-default diff-stage', style: { display: 'none' } },
            'Stage'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-default diff-cancel', style: { display: 'none' } },
            'Cancel'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-default diff-unstage', style: { display: 'none' } },
            'Unstage'
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-sm btn-default diff-explore', onClick: onExloreClicked },
          'Explore'
        )
      );
    };
    return _this;
  }

  _createClass(CommitView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          diff = _props.diff,
          path = _props.path,
          files = _props.files,
          diffViewMode = _props.diffViewMode,
          onNodeSelected = _props.onNodeSelected;

      var renderedButtons = diffViewMode === _AppState.CommitViewMode.Diff ? this.renderButtons() : null;
      return _react2.default.createElement(
        'div',
        { className: 'diff-view-container panel panel-default' },
        renderedButtons,
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          diffViewMode === _AppState.CommitViewMode.Diff ? _react2.default.createElement(_DiffView2.default, { diff: diff, headerLines: this.props.headerLines, diffViewMode: _DiffView.DiffViewMode.Full }) : _react2.default.createElement(_TreeView2.default, { path: path, files: files, onNodeSelected: onNodeSelected })
        )
      );
    }
  }]);

  return CommitView;
}(_react2.default.PureComponent);

exports.default = CommitView;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeView = function (_React$PureComponent) {
    _inherits(TreeView, _React$PureComponent);

    function TreeView() {
        _classCallCheck(this, TreeView);

        var _this = _possibleConstructorReturn(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).apply(this, arguments));

        _this.renderContent = function (path, files) {
            if (path[path.length - 1].type === 'blob') {
                // TODO: Show HTML source instead of rendering content as HTML page.
                return _react2.default.createElement(
                    'div',
                    { id: 'tree-view-blob-content' },
                    _react2.default.createElement('iframe', { src: '/git/cat-file/' + path[path.length - 1].objectId })
                );
            }
            return _react2.default.createElement(
                'div',
                { id: 'tree-view-tree-content', className: 'list-group' },
                _this.renderMoveUpNode(path),
                _this.sortFoldersFirst(files).map(function (item) {
                    return _this.renderFileItem(item);
                })
            );
        };
        return _this;
    }

    _createClass(TreeView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var path = this.props.path;
            var files = this.props.files;
            var breadcrumb = _react2.default.createElement(
                'ol',
                { className: 'breadcrumb' },
                path.map(function (node) {
                    return _react2.default.createElement(
                        'li',
                        { onClick: function onClick() {
                                return _this2.props.onNodeSelected(node);
                            } },
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            node.name
                        )
                    );
                })
            );
            return _react2.default.createElement(
                'div',
                { id: 'tree-view' },
                breadcrumb,
                this.renderContent(path, files)
            );
        }
    }, {
        key: 'renderFileItem',
        value: function renderFileItem(item) {
            var _this3 = this;

            var formatedSize = this.getFormatedSize(item.size);
            var className = 'tree-item-' + item.type + (item.isSymbolicLink ? ' tree-item-symlink' : '');
            return _react2.default.createElement(
                'a',
                { href: '#', className: 'list-group-item' },
                _react2.default.createElement(
                    'span',
                    { className: className, onClick: function onClick() {
                            return _this3.props.onNodeSelected(item);
                        } },
                    item.name
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    formatedSize.size
                ),
                '\xA0',
                _react2.default.createElement(
                    'span',
                    null,
                    formatedSize.unit
                )
            );
        }
    }, {
        key: 'sortFoldersFirst',
        value: function sortFoldersFirst(files) {
            return files.slice().sort(function (item1, item2) {
                if (item1.type === item2.type) {
                    return item1.name.localeCompare(item2.name);
                }
                return (item1.type === 'tree') < (item2.type === 'tree') ? 1 : -1;
            });
        }
    }, {
        key: 'renderMoveUpNode',
        value: function renderMoveUpNode(path) {
            var _this4 = this;

            return path.length > 1 ? _react2.default.createElement(
                'a',
                { href: '#', className: 'list-group-item', onClick: function onClick() {
                        return _this4.props.onNodeSelected(path[path.length - 2]);
                    } },
                _react2.default.createElement(
                    'span',
                    { className: 'tree-item-tree' },
                    '..'
                ),
                _react2.default.createElement('span', null),
                _react2.default.createElement('span', null)
            ) : null;
        }
    }, {
        key: 'getFormatedSize',
        value: function getFormatedSize(size) {
            if (isNaN(size)) {
                return {
                    size: '',
                    unit: ''
                };
            }
            if (size < 1024) {
                return {
                    size: size.toString(),
                    unit: ''
                };
            } else if (size < 1024 * 1024) {
                return {
                    size: (size / 1024).toFixed(2),
                    unit: 'K'
                };
            } else if (size < 1024 * 1024 * 1024) {
                return {
                    size: (size / 1024 * 1024).toFixed(2),
                    unit: 'M'
                };
            } else {
                return {
                    size: (size / 1024 * 1024 * 1024).toFixed(2),
                    unit: 'G'
                };
            }
        }
    }]);

    return TreeView;
}(_react2.default.PureComponent);

exports.default = TreeView;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DiffView = __webpack_require__(32);

var _DiffView2 = _interopRequireDefault(_DiffView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExploreView = function (_React$PureComponent) {
  _inherits(ExploreView, _React$PureComponent);

  function ExploreView() {
    _classCallCheck(this, ExploreView);

    return _possibleConstructorReturn(this, (ExploreView.__proto__ || Object.getPrototypeOf(ExploreView)).apply(this, arguments));
  }

  _createClass(ExploreView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          removedLinesDiff = _props.removedLinesDiff,
          addedLinesDiff = _props.addedLinesDiff,
          ExploreNavigation = _props.ExploreNavigation;

      var removedLinesDiffs = removedLinesDiff ? [removedLinesDiff] : [];
      var addedLinesDiffs = addedLinesDiff ? [addedLinesDiff] : [];
      return _react2.default.createElement(
        'div',
        { id: 'commit-explorer-view' },
        _react2.default.createElement(
          'div',
          { id: 'commit-explorer-diff-view' },
          _react2.default.createElement(
            'div',
            { className: 'diff-view-container panel panel-default' },
            _react2.default.createElement(
              'div',
              { className: 'panel-body split-diff-view' },
              _react2.default.createElement(_DiffView2.default, { diff: removedLinesDiffs, headerLines: [], diffViewMode: _DiffView.DiffViewMode.Removed, onScroll: this.props.onScroll, offset: this.props.position }),
              _react2.default.createElement(_DiffView2.default, { diff: addedLinesDiffs, headerLines: [], diffViewMode: _DiffView.DiffViewMode.Added, onScroll: this.props.onScroll, offset: this.props.position })
            )
          )
        ),
        _react2.default.createElement(ExploreNavigation, null)
      );
    }
  }]);

  return ExploreView;
}(_react2.default.PureComponent);

exports.default = ExploreView;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(3);

var _Diff = __webpack_require__(9);

var _Diff2 = _interopRequireDefault(_Diff);

var _ExploreNavigation = __webpack_require__(80);

var _ExploreNavigation2 = _interopRequireDefault(_ExploreNavigation);

var _Offsets = __webpack_require__(18);

var _Offsets2 = _interopRequireDefault(_Offsets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    var diff = state.commitDiff;
    return {
        files: diff.fileDiffs.map(function (file, index) {
            return { from: file.initialFile, to: file.resultingFile, index: index };
        }),
        commitDetails: diff.headerLines.join('\n'),
        filesOffset: state.offsets['EXPLORE_FILES'],
        selected: diff.selectedFile
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fileSelected: function fileSelected(file) {
            dispatch(_Diff2.default.selectFile(file.index));
            dispatch(_Offsets2.default.setOffset('EXPLORE_DIFF', 0, 0));
            dispatch(_Offsets2.default.setOffset('EXPLORE_FILES', 0, 0));
        },
        onFilesScroll: function onFilesScroll(ev) {
            var target = ev.target;
            dispatch(_Offsets2.default.setOffset('EXPLORE_FILES', target.scrollTop, target.scrollLeft));
            console.log(ev);
            console.log(ev.target);
        }
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ExploreNavigation2.default);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExploreNavigation = function (_React$PureComponent) {
    _inherits(ExploreNavigation, _React$PureComponent);

    function ExploreNavigation() {
        _classCallCheck(this, ExploreNavigation);

        var _this = _possibleConstructorReturn(this, (ExploreNavigation.__proto__ || Object.getPrototypeOf(ExploreNavigation)).apply(this, arguments));

        _this.setOffset = function (offset) {
            var node = _reactDom2.default.findDOMNode(_this);
            var lnode = node.querySelector('.file-list-left-container');
            lnode.scrollTop = offset.top;
            lnode.scrollLeft = offset.left;
            var rnode = node.querySelector('.file-list-right-container');
            rnode.scrollTop = offset.top;
            rnode.scrollLeft = offset.left;
        };
        _this.renderFileList = function () {
            return _react2.default.createElement(
                'div',
                { className: 'file-list-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'file-list-left-container', onScroll: _this.props.onFilesScroll },
                    _react2.default.createElement(
                        'div',
                        { className: 'list-group' },
                        _this.props.files ? _this.props.files.map(function (fileDiff, index) {
                            var className = 'list-group-item';
                            if (_this.props.selected === index) {
                                className += ' active';
                            }
                            return _react2.default.createElement(
                                'a',
                                { className: className, href: '#', onClick: function onClick() {
                                        return _this.props.fileSelected(fileDiff);
                                    } },
                                fileDiff.from
                            );
                        }) : null
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'file-list-right-container', onScroll: _this.props.onFilesScroll },
                    _react2.default.createElement(
                        'div',
                        { className: 'list-group' },
                        _this.props.files ? _this.props.files.map(function (fileDiff, index) {
                            var className = 'list-group-item';
                            if (_this.props.selected === index) {
                                className += ' active';
                            }
                            return _react2.default.createElement(
                                'a',
                                { className: className, href: '#', onClick: function onClick() {
                                        return _this.props.fileSelected(fileDiff);
                                    } },
                                fileDiff.to
                            );
                        }) : null
                    )
                )
            );
        };
        return _this;
    }

    _createClass(ExploreNavigation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var offset = this.props.filesOffset;
            if (offset) {
                this.setOffset(offset);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var offset = this.props.filesOffset;
            var prevOffset = prevProps.filesOffset || { left: 0, top: 0 };
            if (offset && (prevOffset.left !== offset.left || offset.top !== prevOffset.top)) {
                this.setOffset(offset);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'commit-explorer-navigator-view' },
                _react2.default.createElement(
                    'div',
                    { className: 'file-list-view panel panel-default' },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-heading' },
                        _react2.default.createElement(
                            'h5',
                            null,
                            ' Files '
                        )
                    ),
                    this.renderFileList()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel panel-default' },
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-heading' },
                        _react2.default.createElement(
                            'h5',
                            null,
                            ' Commit Details '
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'panel-body', style: { whiteSpace: 'pre' } },
                        this.props.commitDetails
                    )
                )
            );
        }
    }]);

    return ExploreNavigation;
}(_react2.default.PureComponent);

exports.default = ExploreNavigation;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Ülo Parri
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 Eric ALBER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RemoteView = function (_React$PureComponent) {
  _inherits(RemoteView, _React$PureComponent);

  function RemoteView() {
    _classCallCheck(this, RemoteView);

    return _possibleConstructorReturn(this, (RemoteView.__proto__ || Object.getPrototypeOf(RemoteView)).apply(this, arguments));
  }

  _createClass(RemoteView, [{
    key: "render",
    value: function render() {
      var repo = this.props.repo;

      return _react2.default.createElement(
        "div",
        { className: "jumbotron" },
        _react2.default.createElement(
          "h1",
          null,
          "Remote access"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Git webui allows other people to clone and pull from your repository."
        ),
        _react2.default.createElement(
          "div",
          { className: "git-access" },
          _react2.default.createElement(
            "p",
            null,
            "Other people can clone your repository:"
          ),
          _react2.default.createElement(
            "pre",
            { className: "git-clone" },
            "git clone http://" + document.location.hostname + ":" + document.location.port + "/ " + repo
          ),
          _react2.default.createElement(
            "p",
            null,
            "Or to pull from your repository:"
          ),
          _react2.default.createElement(
            "pre",
            { className: "git-pull" },
            'git pull http://' + document.location.hostname + ':' + document.location.port + '/'
          )
        )
      );
    }
  }]);

  return RemoteView;
}(_react2.default.PureComponent);

exports.default = RemoteView;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(83);

var _AppData = __webpack_require__(84);

var _DiffOptions = __webpack_require__(85);

var _Branches = __webpack_require__(86);

var _Commits = __webpack_require__(87);

var _Diff = __webpack_require__(88);

var _CommitTree = __webpack_require__(89);

var _Offsets = __webpack_require__(90);

var _Navigation = __webpack_require__(91);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reduxThunk = __webpack_require__(92);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
    appData: _AppData.appData,
    diffOptions: _DiffOptions.diffOptions,
    localBranches: (0, _Branches.getBranchDataReducer)(_Actions2.default.SET_LOCAL_BRANCHES),
    remoteBrances: (0, _Branches.getBranchDataReducer)(_Actions2.default.SET_REMOTE_BRANCHES),
    tags: (0, _Branches.getBranchDataReducer)(_Actions2.default.SET_TAGS),
    commits: _Commits.commits,
    offsets: _Offsets.offsets,
    commitDiff: _Diff.commitDiff,
    commitTree: _CommitTree.commitTree,
    navigation: _Navigation2.default
});
var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
exports.default = store;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appData = appData;

var _AppState = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function appData(state, action) {
    switch (action.type) {
        case _Actions2.default.SET_DIRNAME:
            var dirName = action.dirName;
            return Object.assign({}, state, { dirName: dirName });
        case _Actions2.default.SET_VIEW_ONLY:
            var viewOnly = action.viewOnly;
            return Object.assign({}, state, { viewOnly: viewOnly });
        case _Actions2.default.NODE_SELECTED:
            var mode = _AppState.AppMode.History;
            if (action.data.selected === _AppState.NavigationType.RemoteAccess) {
                mode = _AppState.AppMode.RemoteAccess;
            }
            if (action.data.selected === _AppState.NavigationType.Workspace) {
                mode = _AppState.AppMode.Workspace;
            }
            return Object.assign({}, state, action.data, { mode: mode });
        case _Actions2.default.UPDATE_BASEDATA:
            return Object.assign({}, state, action.data);
        case _Actions2.default.ADD_MESSAGE:
            return Object.assign({}, state, { messages: (state.messages ? state.messages + '\n' : '') + action.message });
        case _Actions2.default.CLOSE_MESSAGE:
            return Object.assign({}, state, { messages: null });
        case _Actions2.default.SHOW_ALL:
            return Object.assign({}, state, { showAll: action.type });
    }
    return state || {
        dirName: '',
        viewOnly: true,
        mode: _AppState.AppMode.History,
        messages: null,
        showAll: null
    };
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.diffOptions = diffOptions;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function diffOptions(state, action) {
    switch (action.type) {
        case _Actions2.default.UPDATE_COMMIT_VIEW_DATA:
            return Object.assign({}, state, action.data);
        case _Actions2.default.TOGGLE_SHOW_FULL_FILE:
            return Object.assign({}, state, { fullFile: !state.fullFile });
        case _Actions2.default.TOGGLE_IGNORE_WHITESPACE:
            return Object.assign({}, state, { ignoreWhitespace: !state.ignoreWhitespace });
    }
    return state || {
        ignoreWhitespace: false,
        context: 3,
        fullFile: false,
        options: null
    };
} /*
   * Copyright 2017 Ülo Parri
   * Copyright 2015 Eric ALBER
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBranchDataReducer = getBranchDataReducer;
/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBranchDataReducer(key) {
    return function (state, action) {
        switch (action.type) {
            case key:
                return action.data || [];
            default:
                return state || [];
        }
    };
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commits = commits;

var _AppState = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var updateGraph = function updateGraph(commits, startAt) {
    // Draw the graph
    var currentY = startAt;
    var streams = [];
    var circles = [];
    var paths = [];
    for (var i = startAt; i < commits.length; ++i) {
        var entry = commits[i];
        if (!entry) {
            break;
        }
        var index = 0;
        // Find streams to join
        var childCount = 0;
        var removedStreams = 0;
        for (var j = 0; j < streams.length;) {
            var stream = streams[j];
            if (stream.sha1 === entry.hash) {
                if (childCount === 0) {
                    // Replace the stream
                    stream.commands[stream.commands.length - 1].y = currentY;
                    if (entry.parents.length === 0) {
                        streams.splice(j, 1);
                    } else {
                        stream.sha1 = entry.parents[0];
                    }
                    index = j;
                    ++j;
                } else {
                    // Join the stream
                    var x = index + 1;
                    stream.commands[stream.commands.length - 1].y = currentY;
                    stream.commands.push({ type: 'L', x: x, y: currentY + 0.5 });
                    streams.splice(j, 1);
                    ++removedStreams;
                }
                ++childCount;
            } else {
                if (removedStreams !== 0) {
                    stream.commands[stream.commands.length - 1].y = currentY;
                }
                ++j;
            }
        }
        // Add new streams
        for (j = 0; j < entry.parents.length; ++j) {
            var parent = entry.parents[j];
            var _x = index + j + 1;
            if (j !== 0 || streams.length === 0) {
                var obj = {
                    sha1: parent,
                    key: entry.hash + '_' + parent,
                    commands: [{
                        type: 'M',
                        x: index + 1,
                        y: currentY + 0.5
                    }, {
                        type: 'L',
                        x: _x,
                        y: currentY + 1
                    }, {
                        type: 'L',
                        x: _x,
                        y: currentY + 1.5
                    }]
                };
                paths.push(obj);
                streams.splice(index + j, 0, obj);
            }
        }
        for (j = index + j; j < streams.length; ++j) {
            var _stream = streams[j];
            var _x2 = j + 1;
            _stream.commands[_stream.commands.length - 1].y = currentY;
            _stream.commands.push({ type: "L", x: _x2, y: currentY + 0.5 });
            _stream.commands.push({ type: "L", x: _x2 });
        }
        circles.push({ cx: index + 1, cy: currentY, r: 4, key: entry.hash + 'c' });
        currentY++;
    }
    for (var idx = 0; idx < streams.length; ++idx) {
        var _stream2 = streams[idx];
        _stream2.commands[_stream2.commands.length - 1].y = commits.length;
    }
    return {
        paths: paths, circles: circles
    };
};
function commits(state, action) {
    switch (action.type) {
        case 'SET_COMMITS':
            var _commits = action.commits || [];
            var graph = updateGraph(_commits, 0);
            return Object.assign({}, state, {
                commits: _commits,
                graph: graph,
                selectedCommit: _commits.length > 0 ? _commits[_commits.length - 1].hash : null
            });
        case _Actions2.default.SELECT_COMMIT:
            return Object.assign({}, state, {
                selectedCommit: action.selectedCommit
            });
        case _Actions2.default.SELECT_COMMIT_VIEW_MODE:
            return Object.assign({}, state, {
                viewMode: action.viewMode
            });
        default:
            return state || {
                commits: new Array(),
                selectedCommit: null,
                viewMode: _AppState.CommitViewMode.Diff,
                graph: { paths: [], circles: [] }
            };
    }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitDiff = commitDiff;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Diff = __webpack_require__(16);

var _Commit = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filter = function filter(hunks) {
    var removedHunks = [];
    var addedHunks = [];
    hunks.forEach(function (hunk) {
        var leftHunk = {
            header: hunk.header,
            parts: new Array()
        };
        var rightHunk = {
            header: hunk.header,
            parts: new Array()
        };
        removedHunks.push(leftHunk);
        addedHunks.push(rightHunk);
        for (var partIndex = 0; partIndex < hunk.parts.length; partIndex++) {
            var part = hunk.parts[partIndex];
            if (part.type === _Diff.HunkPartType.Keep) {
                leftHunk.parts.push(part);
                rightHunk.parts.push(part);
            } else if (part.type === _Diff.HunkPartType.Remove) {
                if (partIndex < hunk.parts.length - 1) {
                    var next = hunk.parts[partIndex + 1];
                    if (next.type === _Diff.HunkPartType.Add) {
                        partIndex++;
                        leftHunk.parts.push(part);
                        rightHunk.parts.push(next);
                        if (next.content.length > part.content.length) {
                            leftHunk.parts.push({
                                type: null,
                                content: new Array(next.content.length - part.content.length)
                            });
                        } else if (next.content.length < part.content.length) {
                            rightHunk.parts.push({
                                type: null,
                                content: new Array(part.content.length - next.content.length)
                            });
                        }
                    } else {
                        leftHunk.parts.push(part);
                        rightHunk.parts.push({
                            type: null,
                            content: new Array(part.content.length)
                        });
                    }
                } else {
                    rightHunk.parts.push({
                        type: null,
                        content: new Array(part.content.length)
                    });
                }
            } else if (part.type === _Diff.HunkPartType.Add) {
                leftHunk.parts.push({
                    type: null,
                    content: new Array(part.content.length)
                });
                rightHunk.parts.push(part);
            }
        }
    });
    return { removedHunks: removedHunks, addedHunks: addedHunks };
}; /*
    * Copyright 2017 Ülo Parri
    * Copyright 2015 Eric ALBER
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *     http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */

var getSplitDiff = function getSplitDiff(fileDiffs, selectedFile) {
    if (selectedFile === null || !fileDiffs[selectedFile]) {
        return { removedLinesDiff: null, addedLinesDiff: null };
    }
    var file = fileDiffs[selectedFile];
    var filtered = file && file.hunks ? filter(file.hunks) : { removedHunks: [], addedHunks: [] };
    var removedLinesDiff = {
        hunks: filtered.removedHunks,
        header: file.header,
        fileModeLine: file.newFileModeLine,
        indexLine: file.indexLine,
        initialFile: file.initialFile,
        resultingFile: file.resultingFile
    };
    var addedLinesDiff = {
        hunks: filtered.addedHunks,
        header: file.header,
        fileModeLine: file.newFileModeLine,
        indexLine: file.indexLine,
        initialFile: file.initialFile,
        resultingFile: file.resultingFile
    };
    return { removedLinesDiff: removedLinesDiff, addedLinesDiff: addedLinesDiff };
};
function commitDiff(state, action) {
    switch (action.type) {
        case _Actions2.default.UPDATE_COMMIT_DIFF_DATA:
            var splitDiff = getSplitDiff(action.data.fileDiffs, state.selectedFile || 0);
            return Object.assign({}, state, action.data, splitDiff, { selectedFile: action.selectedFile || 0 });
        case _Actions2.default.SELECT_COMMIT:
            return Object.assign({}, state, {
                selectedFile: null,
                removedLinesDiff: null,
                addedLinesDiff: null
            });
        case _Actions2.default.SELECT_COMMIT_VIEW_MODE:
            return Object.assign({}, state, { useSplitDiff: action.mode === _Commit.CommitViewMode.SidebySideDiff });
        case _Actions2.default.SELECT_COMMIT_DIFF_FILE:
            return Object.assign({}, state, { selectedFile: action.selectedFile }, getSplitDiff(state.fileDiffs, action.selectedFile));
    }
    return state || {
        fileDiffs: new Array(),
        selectedFile: 0,
        headerLines: new Array(),
        removedLinesDiff: null,
        addedLinesDiff: null,
        useSplitDiff: false
    };
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitTree = commitTree;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commitTree(state, action) {
    switch (action.type) {
        case _Actions2.default.SET_DIRNAME:
            if (action.dirName) {
                var _root = void 0;
                if (state.path.length) {
                    _root = Object.assign({}, state.path[0], { name: action.data.dirName });
                } else {
                    _root = {
                        name: action.dirName,
                        size: NaN,
                        objectId: null,
                        isSymbolicLink: false,
                        mode: 0,
                        type: 'tree',
                        parent: null
                    };
                }
                return {
                    path: [_root],
                    files: []
                };
            }
        case _Actions2.default.SELECT_COMMIT:
            var root = void 0;
            if (state.path.length) {
                root = Object.assign({}, state.path[0], { objectId: action.selectedCommit });
            } else {
                root = {
                    name: action.selectedCommit,
                    size: NaN,
                    objectId: action.selectedCommit,
                    isSymbolicLink: false,
                    mode: 0,
                    type: 'tree',
                    parent: null
                };
            }
            return {
                path: [root],
                files: []
            };
        case _Actions2.default.SET_COMMIT_TREE_FILES:
            return {
                path: state.path,
                files: action.files
            };
        case _Actions2.default.SELECT_COMMIT_TREE_FILE:
            var currentIndex = state.path.findIndex(function (file) {
                return file.objectId === action.objectId;
            });
            if (currentIndex > -1) {
                return {
                    path: state.path.slice(0, currentIndex + 1),
                    files: state.files
                };
            }
            var fileIndex = state.files.findIndex(function (file) {
                return file.objectId === action.objectId;
            });
            if (fileIndex > -1) {
                return {
                    path: state.path.concat(state.files.slice(fileIndex, fileIndex + 1)),
                    files: state.files
                };
            }
    }
    return state || {
        path: [],
        files: []
    };
} /*
   * Copyright 2017 Ülo Parri
   * Copyright 2015 Eric ALBER
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.offsets = offsets;
/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function offsets(state, action) {
    if (action.type === 'SET_OFFSET') {
        var toSet = {};
        toSet[action.key] = action.offset;
        return Object.assign({}, state, toSet);
    }
    return state || {};
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Navigation;

var _AppState = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _BranchStatus = __webpack_require__(15);

var _BranchStatus2 = _interopRequireDefault(_BranchStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapNodes = function mapNodes(branches, parentId, nodes) {
    var parentNode = Object.assign({}, nodes[parentId]);
    var newNodes = Object.assign({}, nodes, _defineProperty({}, parentNode.id, parentNode));
    branches.forEach(function (branch) {
        var id = parentNode.id + '_' + branch.name;
        var props = {};
        if (branch.status === _BranchStatus2.default.Current) {
            props['status'] = 'current';
        }
        parentNode.children.push(id);
        newNodes[id] = {
            id: id,
            parentId: parentNode.id,
            text: branch.name,
            children: [],
            props: props
        };
    });
    return newNodes;
};
function Navigation(state, action) {
    var _nodes;

    switch (action.type) {
        case _Actions2.default.SET_LOCAL_BRANCHES:
            return Object.assign({}, state, {
                nodes: mapNodes(action.data, _AppState.NavigationType.LocalBranches, state.nodes),
                showAll: null
            });
        case _Actions2.default.SET_REMOTE_BRANCHES:
            return Object.assign({}, state, {
                nodes: mapNodes(action.data, _AppState.NavigationType.RemoteBranches, state.nodes),
                showAll: null
            });
        case _Actions2.default.SET_TAGS:
            return Object.assign({}, state, {
                nodes: mapNodes(action.data, _AppState.NavigationType.Tags, state.nodes),
                showAll: null
            });
        case _Actions2.default.NODE_SELECTED:
            return Object.assign({}, state, {
                selected: action.data.selected,
                showAll: null
            });
        case _Actions2.default.SHOW_ALL:
            return Object.assign({}, state, { showAll: action.data.id });
    }
    return state || {
        rootNodes: [_AppState.NavigationType.Workspace, _AppState.NavigationType.RemoteAccess, _AppState.NavigationType.LocalBranches, _AppState.NavigationType.RemoteBranches, _AppState.NavigationType.Tags],
        nodes: (_nodes = {}, _defineProperty(_nodes, _AppState.NavigationType.Workspace, {
            id: _AppState.NavigationType.Workspace,
            text: 'Workspace',
            children: [],
            parentId: null,
            props: {}
        }), _defineProperty(_nodes, _AppState.NavigationType.RemoteAccess, {
            id: _AppState.NavigationType.RemoteAccess,
            text: 'Remote',
            children: [],
            parentId: null,
            props: {}
        }), _defineProperty(_nodes, _AppState.NavigationType.LocalBranches, {
            id: _AppState.NavigationType.LocalBranches,
            text: 'Local Branches',
            children: [],
            parentId: null,
            props: {}
        }), _defineProperty(_nodes, _AppState.NavigationType.RemoteBranches, {
            id: _AppState.NavigationType.RemoteBranches,
            text: 'Remote Branches',
            children: [],
            parentId: null,
            props: {}
        }), _defineProperty(_nodes, _AppState.NavigationType.Tags, {
            id: _AppState.NavigationType.Tags,
            text: 'Tags',
            children: [],
            parentId: null,
            props: {}
        }), _nodes),
        showAll: null,
        selected: null
    };
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map