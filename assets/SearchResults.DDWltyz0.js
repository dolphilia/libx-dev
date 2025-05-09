import { a as createAstro, b as createComponent, m as maybeRenderHead, f as addAttribute, d as renderTemplate, r as renderComponent, e as renderScript, F as Fragment, u as unescapeHTML } from './astro/server.DZ9z6Le0.js';
import { a as $$Card, t } from './versions.config.iMo150Oo.js';
import './_slug_.4ea271a6.l0sNRNKZ.js';

const $$Astro$3 = createAstro("https://dolphilia.github.io");
const $$VersionSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$VersionSelector;
  const { versions, currentVersion, basePath, className = "" } = Astro2.props;
  const currentVersionObj = versions.find((v) => v.id === currentVersion) || versions[0];
  const sortedVersions = [...versions].sort((a, b) => {
    if (a.isLatest === true && b.isLatest !== true) return -1;
    if (b.isLatest === true && a.isLatest !== true) return 1;
    const dateA = a.date ? a.date.getTime() : 0;
    const dateB = b.date ? b.date.getTime() : 0;
    return dateB - dateA;
  });
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["dropdown", className], "class:list")}> <div tabindex="0" role="button" class="btn btn-ghost m-1"> <span> ${currentVersionObj.name} ${currentVersionObj.isLatest && renderTemplate`<span class="badge badge-sm badge-primary ml-2">最新</span>`} </span> <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </div> <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"> ${sortedVersions.map((version) => renderTemplate`<li> <a${addAttribute(`${basePath.replace(`/${currentVersion}/`, `/${version.id}/`)}`, "href")}${addAttribute(version.id === currentVersion ? "active" : "", "class")}> <div class="flex flex-col"> <div class="flex items-center justify-between"> <span>${version.name}</span> ${version.isLatest && renderTemplate`<span class="badge badge-xs badge-primary">最新</span>`} </div> <div class="text-xs opacity-70"> ${version.date && typeof version.date.toLocaleDateString === "function" ? version.date.toLocaleDateString() : "N/A"} </div> </div> </a> </li>`)} </ul> <div class="mt-4 flex flex-col gap-2"> ${currentVersion !== "latest" && renderTemplate`<a${addAttribute(`${basePath.replace(`/${currentVersion}/`, "/latest/")}`, "href")} class="link link-primary link-hover text-xs">
最新バージョンを表示
</a>`} <a${addAttribute(`${basePath.split("/").slice(0, 2).join("/")}/version-diff${basePath.split("/").slice(2).join("/")}`, "href")} class="link link-primary link-hover text-sm">
バージョン間の差分を表示
</a> </div> </div>`;
}, "/home/runner/work/docs-astro/docs-astro/packages/versioning/src/components/VersionSelector.astro", void 0);

function Diff() {}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var _options$timeout;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;

    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }

    var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{
      oldPos: -1,
      lastComponent: undefined
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var newPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Once we hit the right edge of the edit graph on some diagonal k, we can
    // definitely reach the end of the edit graph in no more than k edits, so
    // there's no point in considering any moves to diagonal k+1 any more (from
    // which we're guaranteed to need at least k+1 more edits).
    // Similarly, once we've reached the bottom of the edit graph, there's no
    // point considering moves to lower diagonals.
    // We record this fact by setting minDiagonalToConsider and
    // maxDiagonalToConsider to some finite value once we've hit the edge of
    // the edit graph.
    // This optimization is not faithful to the original algorithm presented in
    // Myers's paper, which instead pointlessly extends D-paths off the end of
    // the edit graph - see page 7 of Myers's paper which notes this point
    // explicitly and illustrates it with a diagram. This has major performance
    // implications for some common scenarios. For instance, to compute a diff
    // where the new text simply appends d characters on the end of the
    // original text of length n, the true Myers algorithm will take O(n+d^2)
    // time while this optimization needs only O(n+d) time.


    var minDiagonalToConsider = -Infinity,
        maxDiagonalToConsider = Infinity; // Main worker method. checks all permutations of a given edit length for acceptance.

    function execEditLength() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath = void 0;
        var removePath = bestPath[diagonalPath - 1],
            addPath = bestPath[diagonalPath + 1];

        if (removePath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = false;

        if (addPath) {
          // what newPos will be after we do an insertion:
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }

        var canRemove = removePath && removePath.oldPos + 1 < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the old string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        // TODO: Remove the `+ 1` here to make behavior match Myers algorithm
        //       and prefer to order removals before insertions.


        if (!canRemove || canAdd && removePath.oldPos + 1 < addPath.oldPos) {
          basePath = self.addToPath(addPath, true, undefined, 0);
        } else {
          basePath = self.addToPath(removePath, undefined, true, 1);
        }

        newPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          // If we have hit the end of both strings, then we are done
          return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;

          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }

          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced, or until the edit length exceeds options.maxEditLength (if given),
    // in which case it will return undefined.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },
  addToPath: function addToPath(path, added, removed, oldPosInc) {
    var last = path.lastComponent;

    if (last && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: last.count + 1,
          added: added,
          removed: removed,
          previousComponent: last.previousComponent
        }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: 1,
          added: added,
          removed: removed,
          previousComponent: last
        }
      };
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        oldPos = basePath.oldPos,
        newPos = oldPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.lastComponent = {
        count: commonCount,
        previousComponent: basePath.lastComponent
      };
    }

    basePath.oldPos = oldPos;
    return newPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split('');
  },
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, lastComponent, newString, oldString, useLongestToken) {
  // First we convert our linked list of components in reverse order to an
  // array in the right order:
  var components = [];
  var nextComponent;

  while (lastComponent) {
    components.push(lastComponent);
    nextComponent = lastComponent.previousComponent;
    delete lastComponent.previousComponent;
    lastComponent = nextComponent;
  }

  components.reverse();
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var finalComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof finalComponent.value === 'string' && (finalComponent.added || finalComponent.removed) && diff.equals('', finalComponent.value)) {
    components[componentLen - 2].value += finalComponent.value;
    components.pop();
  }

  return components;
}

//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF

var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();

wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

var lineDiff = new Diff();

lineDiff.tokenize = function (value) {
  if (this.options.stripTrailingCr) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, '\n');
  }

  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines$1(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

var sentenceDiff = new Diff();

sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

var cssDiff = new Diff();

cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;

jsonDiff.castInput = function (value) {
  var _this$options = this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
    return typeof v === 'undefined' ? undefinedReplacement : v;
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
};
// object that is already on the "stack" of items being processed. Accepts an optional replacer

function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (_typeof(obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}

var arrayDiff = new Diff();

arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};

function diffLines(oldText, newText, options = {}) {
  const { ignoreWhitespace = false, context = 3 } = options;
  const changes = diffLines$1(oldText, newText, {
    ignoreWhitespace
  });
  let oldLineNumber = 1;
  let newLineNumber = 1;
  const results = [];
  changes.forEach((change) => {
    const lines = change.value.split("\n");
    if (lines[lines.length - 1] === "") {
      lines.pop();
    }
    lines.forEach((line) => {
      const result = {
        value: line,
        lineNumber: {}
      };
      if (change.added) {
        result.type = "added";
        result.lineNumber.new = newLineNumber++;
      } else if (change.removed) {
        result.type = "removed";
        result.lineNumber.old = oldLineNumber++;
      } else {
        result.type = "unchanged";
        result.lineNumber.old = oldLineNumber++;
        result.lineNumber.new = newLineNumber++;
      }
      results.push(result);
    });
  });
  if (context !== void 0 && context >= 0) {
    return limitDiffContext(results, context);
  }
  return results;
}
function limitDiffContext(results, context) {
  if (context === Infinity) {
    return results;
  }
  const limitedResults = [];
  let inChangePart = false;
  let unchangedCount = 0;
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.type !== "unchanged") {
      if (!inChangePart && i > 0) {
        const startIdx = Math.max(0, i - context);
        for (let j = startIdx; j < i; j++) {
          limitedResults.push(results[j]);
        }
      }
      limitedResults.push(result);
      inChangePart = true;
      unchangedCount = 0;
    } else {
      if (inChangePart) {
        unchangedCount++;
        if (unchangedCount <= context) {
          limitedResults.push(result);
        } else {
          inChangePart = false;
        }
      }
    }
  }
  return limitedResults;
}
function createHtmlDiff(diffResults) {
  let html = "";
  diffResults.forEach((result) => {
    let className = "";
    let linePrefix = "";
    switch (result.type) {
      case "added":
        className = "diff-added";
        linePrefix = "+";
        break;
      case "removed":
        className = "diff-removed";
        linePrefix = "-";
        break;
      case "unchanged":
        className = "diff-unchanged";
        linePrefix = " ";
        break;
    }
    let lineNumberHtml = "";
    if (result.lineNumber) {
      const oldLineNum = result.lineNumber.old || "";
      const newLineNum = result.lineNumber.new || "";
      lineNumberHtml = `<span class="diff-line-number">${oldLineNum}</span><span class="diff-line-number">${newLineNum}</span>`;
    }
    html += `<div class="diff-line ${className}">${lineNumberHtml}<span class="diff-prefix">${linePrefix}</span><span class="diff-content">${escapeHtml(result.value)}</span></div>`;
  });
  return html;
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const $$Astro$2 = createAstro("https://dolphilia.github.io");
const $$VersionDiff = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VersionDiff;
  const {
    versions,
    oldVersionId,
    newVersionId,
    oldContent,
    newContent,
    title = "\u30D0\u30FC\u30B8\u30E7\u30F3\u9593\u306E\u5DEE\u5206",
    className = ""
  } = Astro2.props;
  const oldVersion = versions.find((v) => v.id === oldVersionId);
  const newVersion = versions.find((v) => v.id === newVersionId);
  const diffResults = diffLines(oldContent, newContent, { context: 3 });
  const diffHtml = createHtmlDiff(diffResults);
  const addedLines = diffResults.filter((r) => r.type === "added").length;
  const removedLines = diffResults.filter((r) => r.type === "removed").length;
  const unchangedLines = diffResults.filter((r) => r.type === "unchanged").length;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`version-diff ${className}`, "class")} data-astro-cid-c4vhpv52> ${renderComponent($$result, "Card", $$Card, { "data-astro-cid-c4vhpv52": true }, { "content": ($$result2) => renderTemplate`<div data-astro-cid-c4vhpv52> <div class="mb-4 flex items-center space-x-4 text-sm" data-astro-cid-c4vhpv52> <div class="flex items-center" data-astro-cid-c4vhpv52> <span class="inline-block w-3 h-3 mr-1 bg-red-500 rounded-full" data-astro-cid-c4vhpv52></span> <span data-astro-cid-c4vhpv52>削除: ${removedLines}行</span> </div> <div class="flex items-center" data-astro-cid-c4vhpv52> <span class="inline-block w-3 h-3 mr-1 bg-green-500 rounded-full" data-astro-cid-c4vhpv52></span> <span data-astro-cid-c4vhpv52>追加: ${addedLines}行</span> </div> <div class="flex items-center" data-astro-cid-c4vhpv52> <span class="inline-block w-3 h-3 mr-1 bg-gray-300 dark:bg-gray-600 rounded-full" data-astro-cid-c4vhpv52></span> <span data-astro-cid-c4vhpv52>変更なし: ${unchangedLines}行</span> </div> </div> <div class="version-diff-controls mb-4" data-astro-cid-c4vhpv52> <label class="inline-flex items-center mr-4" data-astro-cid-c4vhpv52> <input type="checkbox" id="toggle-context" class="form-checkbox h-4 w-4 text-primary-600" checked data-astro-cid-c4vhpv52> <span class="ml-2 text-sm text-gray-700 dark:text-gray-300" data-astro-cid-c4vhpv52>コンテキストを表示</span> </label> <label class="inline-flex items-center" data-astro-cid-c4vhpv52> <input type="checkbox" id="toggle-whitespace" class="form-checkbox h-4 w-4 text-primary-600" data-astro-cid-c4vhpv52> <span class="ml-2 text-sm text-gray-700 dark:text-gray-300" data-astro-cid-c4vhpv52>空白の変更を無視</span> </label> </div> <div class="overflow-x-auto" data-astro-cid-c4vhpv52> <div class="diff-container border border-gray-200 dark:border-gray-700 rounded-md font-mono text-sm" data-astro-cid-c4vhpv52> <div class="diff-header flex bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" data-astro-cid-c4vhpv52> <div class="w-12 py-2 px-3 text-center text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-700" data-astro-cid-c4vhpv52>旧</div> <div class="w-12 py-2 px-3 text-center text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-700" data-astro-cid-c4vhpv52>新</div> <div class="py-2 px-3 text-gray-500 dark:text-gray-400" data-astro-cid-c4vhpv52>コード</div> </div> <div id="diff-content" class="diff-content" data-astro-cid-c4vhpv52> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(diffHtml)}` })} </div> </div> </div> </div>`, "title": ($$result2) => renderTemplate`<div class="flex items-center justify-between" data-astro-cid-c4vhpv52> <h2 class="text-xl font-bold" data-astro-cid-c4vhpv52>${title}</h2> <div class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-c4vhpv52> ${oldVersion?.name || oldVersionId} → ${newVersion?.name || newVersionId} </div> </div>` })} </div>  ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/versioning/src/components/VersionDiff.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/versioning/src/components/VersionDiff.astro", void 0);

const $$Astro$1 = createAstro("https://dolphilia.github.io");
const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SearchBar;
  const {
    placeholder = "\u691C\u7D22...",
    buttonText = "\u691C\u7D22",
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["search-bar", className], "class:list")}> <form id="search-form" class="w-full"> <label class="input input-bordered flex items-center gap-2 w-full"> <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"> <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.3-4.3"></path> </g> </svg> <input type="search" id="search-input" name="q"${addAttribute(placeholder, "placeholder")} class="grow"> <div class="flex items-center gap-1"> <kbd class="kbd kbd-sm">⌘</kbd> <kbd class="kbd kbd-sm">K</kbd> </div> </label> </form> </div> ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchBar.astro", void 0);

const $$Astro = createAstro("https://dolphilia.github.io");
const $$SearchResults = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchResults;
  const { className = "", lang = "ja" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="search-results"${addAttribute(["search-results hidden", className], "class:list")}> <div class="flex justify-between items-center mb-4"> <h2 class="text-xl font-bold">${t("search.searchResults", lang)}</h2> <button id="close-search-results" class="btn btn-sm btn-circle btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> </button> </div> <div id="search-results-container" class="space-y-4"> <!-- 検索結果がここに動的に挿入されます --> <div id="search-loading" class="py-8 text-center hidden"> <span class="loading loading-spinner loading-lg"></span> <p class="mt-2 opacity-70">${t("common.loading", lang)}</p> </div> <div id="search-empty" class="py-8 text-center hidden"> <div class="alert"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span id="no-results-message"></span> </div> </div> </div> </div> ${renderScript($$result, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchResults.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/docs-astro/docs-astro/packages/search/src/components/SearchResults.astro", void 0);

export { $$SearchBar as $, $$VersionSelector as a, $$SearchResults as b };
