function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var wxApis$1 = ['sendChatMessage', 'startRecord', 'stopRecord', 'playVoice', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'previewImage', 'uploadImage', 'downloadImage', 'translateVoice', 'getLocalImgData', 'getNetworkType', 'openLocation', 'getLocation', 'startAutoLBS', 'stopAutoLBS', 'hideOptionMenu', 'showOptionMenu', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'openDefaultBrowser', 'scanQRCode', 'selectEnterpriseContact', 'openEnterpriseChat', 'selectExternalContact', 'getCurExternalContact', 'openUserProfile', 'shareAppMessage', 'shareWechatMessage', 'startWifi', 'stopWifi', 'connectWifi', 'getWifiList', 'getConnectedWifi', 'getContext', 'setClipboardData', 'getCurExternalChat', 'selectCorpGroupContact', 'claimClassAdmin', 'updateEnterpriseChat', 'openExistedChatWithMsg', 'hideChatAttachmentMenu', 'setShareAttr', 'getShareInfo', 'createCorpGroupChat', 'updateCorpGroupChat', 'shareToExternalContact', 'shareToExternalChat', 'navigateToAddCustomer', 'shareToExternalMoments', 'updateMomentsSetting', 'startMeeting', 'startLiving', 'replayLiving', 'downloadLivingReplay', 'createSchoolPayment', 'closeWindow', 'scanQRCode', 'chooseImage', 'previewFile', 'openThirdAppServiceChat', 'openBluetoothAdapter', 'closeBluetoothAdapter', 'getBluetoothAdapterState', 'startBluetoothDevicesDiscovery', 'stopBluetoothDevicesDiscovery', 'getBluetoothDevices', 'getConnectedBluetoothDevices', 'createBLEConnection', 'closeBLEConnection', 'getBLEDeviceServices', 'getBLEDeviceCharacteristics', 'readBLECharacteristicValue', 'writeBLECharacteristicValue', 'notifyBLECharacteristicValueChange', 'startBeaconDiscovery', 'stopBeaconDiscovery', 'onMenuShareAppMessage', 'onMenuShareWechat', 'onMenuShareTimeline', 'onVoiceRecordEnd', 'onVoicePlayEnd', 'onNetworkStatusChange', 'onLocationChange', 'onHistoryBack', 'onGetWifiList', 'onWifiConnected', 'onUserCaptureScreen', 'onBluetoothAdapterStateChange', 'onBluetoothDeviceFound', 'onBLEConnectionStateChange', 'onBLECharacteristicValueChange', 'onBeaconUpdate', 'onBeaconServiceChange'];

var warnLog = function warnLog() {
  var _console;
  (_console = console).warn.apply(_console, arguments);
};
var infoLog = function infoLog() {
  var _console2;
  (_console2 = console).info.apply(_console2, arguments);
};

var asyncCall$1 = function asyncCall(apiName) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  infoLog("\u8C03\u7528 wx.".concat(apiName, "\uFF0C\u5165\u53C2"), params);
  return new Promise(function (resolve, reject) {
    var asyncCallParams = _objectSpread2(_objectSpread2({}, params), {}, {
      success: function success(res) {
        return resolve(res);
      },
      fail: function fail(error) {
        warnLog("\u8C03\u7528 wx.".concat(apiName, " \u51FA\u9519\uFF0C\u5165\u53C2\uFF1A"), params);
        warnLog("\u8C03\u7528 wx.".concat(apiName, " \u51FA\u9519\uFF0C\u8FD4\u56DE\u503C\uFF1A"), error.errMsg);
        reject(new Error(error.errMsg));
      },
      trigger: function trigger(res) {
        return resolve(res);
      },
      cancel: function cancel(res) {
        return resolve(res);
      },
      complete: function complete(res) {
        return resolve(res);
      }
    });
    // @ts-ignore
    window.wx[apiName](asyncCallParams);
  });
};

/**
 * wx.fn ?????????????????????
 * @param apiName wx.fn ??? fn ???
 * @param params ??????
 */
var call$1 = function call(apiName) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  infoLog("\u8C03\u7528 wx.".concat(apiName, "\uFF0C\u5165\u53C2"), params);
  // @ts-ignore
  return window.wx[apiName](params);
};

// ??? key1=val1&key2=val2 ??????
// { key1: val1, key2: val2 }
var queryParse = function queryParse(queryStr) {
  var pairs = queryStr.split("&");
  return pairs.reduce(function (queryObj, pair) {
    var _pair$split = pair.split("="),
      _pair$split2 = _slicedToArray(_pair$split, 2),
      key = _pair$split2[0],
      value = _pair$split2[1];
    queryObj[key] = value;
    return queryObj;
  }, {});
};

/**
 * window.localStorage ?????????????????????
 * @method set ??????????????????
 * @method get ??????????????????
 * @method remove ??????????????????
 * @method clear ????????????????????????
 */
/**
 * window.sessionStorage ?????????????????????
 * @method set ??????????????????
 * @method get ??????????????????
 * @method remove ??????????????????
 * @method clear ????????????????????????
 */
var Session = {
  // ??????????????????
  set: function set(key, val) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  // ??????????????????
  get: function get(key) {
    var json = window.sessionStorage.getItem(key);
    return JSON.parse(json);
  },
  // ??????????????????
  remove: function remove(key) {
    window.sessionStorage.removeItem(key);
  },
  // ????????????????????????
  clear: function clear() {
    window.sessionStorage.clear();
  }
};

/**
 * ?????????????????? OAuth ??????
 * @returns {string}
 */
var generateOAuthUrl = function generateOAuthUrl(config) {
  var _window$location$href = window.location.href.split('#'),
    _window$location$href2 = _slicedToArray(_window$location$href, 1),
    redirectUri = _window$location$href2[0];
  var searchObj = {
    appid: config.corpId,
    redirect_uri: encodeURIComponent(redirectUri),
    response_type: 'code',
    scope: 'snsapi_base',
    agentid: config.agentId,
    state: 'A1'
  };
  var search = Object.entries(searchObj).map(function (entry) {
    var _entry = _slicedToArray(entry, 2),
      key = _entry[0],
      value = _entry[1];
    return "".concat(key, "=").concat(value);
  }).join('&');
  return "https://open.weixin.qq.com/connect/oauth2/authorize?".concat(search, "#wechat_redirect");
};
/**
 * ???????????????????????????????????????
 */
var checkRedirect$1 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(config, getUserByCode) {
    var user, unAuth, codeExist, _queryParse, code, res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = Session.get('user');
          unAuth = !user || user === 'undefined' || user === 'null' || !user.userid;
          codeExist = window.location.search.includes('code'); // ???????????????????????????
          if (unAuth && !codeExist) {
            window.location.replace(generateOAuthUrl(config));
          }
          // ?????????????????????????????? userId
          if (!unAuth) {
            _context.next = 10;
            break;
          }
          _queryParse = queryParse(window.location.search.slice(1)), code = _queryParse.code;
          _context.next = 8;
          return getUserByCode(code || '');
        case 8:
          res = _context.sent;
          if (res.code === 0) {
            Session.set('user', res.data);
          }
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function checkRedirect(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * ???????????????????????? SDK ?????????
 * @param apiName api ??????
 * @param params ????????????
 */
var invoke$1 = function invoke(apiName) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  infoLog("\u8C03\u7528 wx.invoke('".concat(apiName, "')\uFF0C\u5165\u53C2"), params);
  return new Promise(function (resolve, reject) {
    var copiedParams = JSON.parse(JSON.stringify(params));
    window.wx.invoke(apiName, copiedParams, function (res) {
      var hasError = res.err_msg !== "".concat(apiName, ":ok") && res.err_msg !== "".concat(apiName, ":cancel");
      if (hasError) {
        warnLog("\u8C03\u7528 wx.invoke('".concat(apiName, "') \u51FA\u9519\uFF0C\u5165\u53C2\uFF1A"), copiedParams);
        warnLog("\u8C03\u7528 wx.invoke('".concat(apiName, "') \u51FA\u9519\uFF0C\u8FD4\u56DE\u503C\uFF1A"), res);
      }
      return hasError ? reject(new Error(res.err_msg)) : resolve(res);
    });
  });
};

/**
 * jssdk ??? config ???????????????
 * @param setting
 */
var configAndReady = function configAndReady(setting) {
  return new Promise(function (resolve) {
    window.wx.config(_objectSpread2({}, setting));
    window.wx.ready(function () {
      return resolve(null);
    });
  });
};
/**
 * ????????????????????? SDK ???
 * config: ??????????????????
 * getConfigSignatures: ?????? wx.config - signature ?????????
 * getAgentConfigSignature: ?????? wx.agentConfig - signature ?????????
 */
var initSdk$1 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(config, getConfigSignature, getAgentConfigSignature) {
    var corpId, agentId, _yield$getConfigSigna, configSignatureData, _yield$getAgentConfig, agentConfigSignatureData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          corpId = config.corpId, agentId = config.agentId; // ?????? wx.config - signature
          _context.next = 3;
          return getConfigSignature();
        case 3:
          _yield$getConfigSigna = _context.sent;
          configSignatureData = _yield$getConfigSigna.data;
          _context.next = 7;
          return configAndReady({
            beta: true,
            debug: false,
            appId: corpId,
            timestamp: configSignatureData.timestamp,
            nonceStr: configSignatureData.nonceStr,
            signature: configSignatureData.signature,
            jsApiList: wxApis$1 // ????????????????????????JS?????????????????????????????????????????????????????????
          });
        case 7:
          _context.next = 9;
          return getAgentConfigSignature();
        case 9:
          _yield$getAgentConfig = _context.sent;
          agentConfigSignatureData = _yield$getAgentConfig.data;
          return _context.abrupt("return", asyncCall$1('agentConfig', {
            corpid: corpId,
            agentid: agentId,
            timestamp: agentConfigSignatureData.timestamp,
            nonceStr: agentConfigSignatureData.nonceStr,
            signature: agentConfigSignatureData.signature,
            jsApiList: wxApis$1
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initSdk(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// ?????? API ??????
var wxApis = wxApis$1;
// ???????????? wx.fn
var asyncCall = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(apiName) {
    var params,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          return _context.abrupt("return", asyncCall$1(apiName, params));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function asyncCall(_x) {
    return _ref.apply(this, arguments);
  };
}();
// ???????????? wx.fn
var call = function call(apiName) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return call$1(apiName, params);
};
// ????????? SDK
var initSdk = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(config, getConfigSignature, getAgentConfigSignature) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", initSdk$1(config, getConfigSignature, getAgentConfigSignature));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initSdk(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
// ?????? wx.invoke
var invoke = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(apiName) {
    var params,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          params = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          return _context3.abrupt("return", invoke$1(apiName, params));
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function invoke(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
// ????????????????????????????????? userId
var checkRedirect = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(config, getUserByCode) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", checkRedirect$1(config, getUserByCode));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function checkRedirect(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

export { asyncCall, call, checkRedirect, initSdk, invoke, wxApis };
