define("806e2a4d-23a3-47a8-b55a-8c7e67684a9e_0.0.1", ["@microsoft/sp-property-pane","TeamsWebPartWebPartStrings","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_QY3N__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "i/Bq");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1Tl":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/teamsWebPart/components/TeamsWebPart.module.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".teamsWebPart_9c692977 .container_9c692977{max-width:700px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.teamsWebPart_9c692977 .row_9c692977{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#005a9e;padding:20px}.teamsWebPart_9c692977 .row_9c692977:after,.teamsWebPart_9c692977 .row_9c692977:before{display:table;content:\"\";line-height:0}.teamsWebPart_9c692977 .row_9c692977:after{clear:both}.teamsWebPart_9c692977 .column_9c692977{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .teamsWebPart_9c692977 .column_9c692977{float:left}[dir=rtl] .teamsWebPart_9c692977 .column_9c692977{float:right}.teamsWebPart_9c692977 .column_9c692977 .ms-Grid_9c692977{padding:0}@media (min-width:640px){.teamsWebPart_9c692977 .column_9c692977{width:83.33333333333334%}}@media (min-width:1024px){.teamsWebPart_9c692977 .column_9c692977{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .teamsWebPart_9c692977 .column_9c692977{left:16.66667%}[dir=rtl] .teamsWebPart_9c692977 .column_9c692977{right:16.66667%}}@media (min-width:640px){[dir=ltr] .teamsWebPart_9c692977 .column_9c692977{left:8.33333%}[dir=rtl] .teamsWebPart_9c692977 .column_9c692977{right:8.33333%}}.teamsWebPart_9c692977 .title_9c692977{font-size:21px;font-weight:100;color:#fff}.teamsWebPart_9c692977 .description_9c692977,.teamsWebPart_9c692977 .subTitle_9c692977{font-size:17px;font-weight:300;color:#fff}.teamsWebPart_9c692977 .button_9c692977{text-decoration:none;height:32px;min-width:80px;background-color:#0078d4;border-color:#0078d4;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.teamsWebPart_9c692977 .button_9c692977 .label_9c692977{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);



/***/ }),

/***/ "01TU":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/odata/invokable-extensions.js ***!
  \*********************************************************/
/*! exports provided: extendGlobal, extendObj, extendFactory, clearGlobalExtensions, disableExtensions, enableExtensions, applyFactoryExtensions, extensionOrDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendGlobal", function() { return extendGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObj", function() { return extendObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendFactory", function() { return extendFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearGlobalExtensions", function() { return clearGlobalExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableExtensions", function() { return disableExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableExtensions", function() { return enableExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFactoryExtensions", function() { return applyFactoryExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionOrDefault", function() { return extensionOrDefault; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "t3D1");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");


var _enableExtensions = false;
var globaExtensions = [];
var ObjExtensionsSym = Symbol("__extensions");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
var extendGlobal = function (e) {
    _enableExtensions = true;
    extendCol(globaExtensions, e);
};
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
var extendObj = function (target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
};
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
var extendFactory = function (factory, extensions) {
    _enableExtensions = true;
    if (factory.__proto__[ObjExtensionsSym] === undefined) {
        factory.__proto__[ObjExtensionsSym] = [];
    }
    extendCol(factory.__proto__[ObjExtensionsSym], extensions);
};
function extendCol(a, e) {
    if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isArray"])(e)) {
        // @ts-ignore
        a.push.apply(a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(e));
    }
    else {
        // @ts-ignore
        a.push(e);
    }
}
/**
 * Clears all global extensions
 */
var clearGlobalExtensions = function () {
    globaExtensions.length = 0;
};
/**
 * Disables all extensions
 */
var disableExtensions = function () {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
var enableExtensions = function () {
    _enableExtensions = true;
};
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
var applyFactoryExtensions = function (factory, args) {
    var o = factory(args);
    if (factory.__proto__[ObjExtensionsSym]) {
        o = extendObj(o, factory.__proto__[ObjExtensionsSym]);
    }
    return o;
};
function extensionOrDefault(op, or, target) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (_enableExtensions) {
        var extensions = [];
        // we need to first invoke extensions tied to only this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push.apply(extensions, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Reflect.get(target, ObjExtensionsSym)));
        }
        // second we need to process any global extensions
        extensions.push.apply(extensions, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(globaExtensions));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isFunc"])(extension)) {
                // this extension is a function which we call
                result = extension.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([op, target], rest));
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op).apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([target], rest));
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([target], rest));
}
//# sourceMappingURL=invokable-extensions.js.map

/***/ }),

/***/ "08ZC":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/common/safe-global.js ***!
  \*************************************************/
/*! exports provided: safeGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeGlobal", function() { return safeGlobal; });
// export either window or global
var safeGlobal = typeof global === "undefined" ? window : global;
//# sourceMappingURL=safe-global.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "0MvI":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/index.js ***!
  \***********************************************/
/*! exports provided: Folder, Folders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "LZ64");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "vttn");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web */ "ymW/");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "4tXH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["Folder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Folders", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["Folders"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0YVK":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/files/index.js ***!
  \*********************************************/
/*! exports provided: File, Files, CheckinType, MoveOperations, TemplateFileType, Version, Versions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder */ "JFDc");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "pGs8");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web */ "SPHc");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "qfcF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["File"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["Files"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckinType", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["CheckinType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveOperations", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["MoveOperations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateFileType", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["TemplateFileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["Version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Versions", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["Versions"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0p/9":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/splibconfig.js ***!
  \*********************************************/
/*! exports provided: emptyGuid, setup, SPRuntimeConfigImpl, SPRuntimeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyGuid", function() { return emptyGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRuntimeConfigImpl", function() { return SPRuntimeConfigImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRuntimeConfig", function() { return SPRuntimeConfig; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "zqEK");

var emptyGuid = "00000000-0000-0000-0000-000000000000";
function setup(config) {
    _pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].assign(config);
}
var SPRuntimeConfigImpl = /** @class */ (function () {
    function SPRuntimeConfigImpl() {
    }
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].get("sp");
            if (spPart !== undefined && spPart.headers !== undefined) {
                return spPart.headers;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "baseUrl", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].get("sp");
            if (spPart !== undefined && spPart.baseUrl !== undefined) {
                return spPart.baseUrl;
            }
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].spfxContext)) {
                return _pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].spfxContext.pageContext.web.absoluteUrl;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var spPart = _pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].get("sp");
            if (spPart !== undefined && spPart.fetchClientFactory !== undefined) {
                return spPart.fetchClientFactory;
            }
            else {
                return function () { return new _pnp_common__WEBPACK_IMPORTED_MODULE_0__["FetchClient"](); };
            }
        },
        enumerable: true,
        configurable: true
    });
    return SPRuntimeConfigImpl;
}());

var SPRuntimeConfig = new SPRuntimeConfigImpl();
//# sourceMappingURL=splibconfig.js.map

/***/ }),

/***/ "1jZ6":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/sites/index.js ***!
  \*********************************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rest */ "9l4K");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "ilAS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["Site"]; });




Reflect.defineProperty(_rest__WEBPACK_IMPORTED_MODULE_0__["SPRest"].prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Object(_types__WEBPACK_IMPORTED_MODULE_1__["Site"])(this._baseUrl).configure(this._options);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "3DT9":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/types.js ***!
  \*********************************************/
/*! exports provided: _Items, Items, _Item, Item, _ItemVersions, ItemVersions, _ItemVersion, ItemVersion, PagedItemCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Items", function() { return _Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Item", function() { return _Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ItemVersions", function() { return _ItemVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVersions", function() { return ItemVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ItemVersion", function() { return _ItemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVersion", function() { return ItemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedItemCollection", function() { return PagedItemCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharepointqueryable */ "E6kk");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _lists_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lists/types */ "hy0S");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/logging */ "B3L+");
/* harmony import */ var _utils_metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/metadata */ "z067");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators */ "hMpi");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../operations */ "UK2s");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../telemetry */ "h3gW");










/**
 * Describes a collection of Item objects
 *
 */
var _Items = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Items, _super);
    function _Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    _Items.prototype.getById = function (id) {
        return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Item(this).concat("(" + id + ")"), "is.getById");
    };
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    _Items.prototype.getItemByStringId = function (stringId) {
        // creates an item with the parent list path and append out method call
        return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Item(this.parentUrl, "getItemByStringId('" + stringId + "')"), "is.getItemByStringId");
    };
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    _Items.prototype.skip = function (skip, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (reverse) {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&PagedPrev=TRUE&p_ID=" + skip));
        }
        else {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
        }
        return this;
    };
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    _Items.prototype.getPaged = function () {
        return this.usingParser(new PagedItemCollectionParser(this))();
    };
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    _Items.prototype.getAll = function (requestSize, acceptHeader) {
        if (requestSize === void 0) { requestSize = 2000; }
        if (acceptHeader === void 0) { acceptHeader = "application/json;odata=nometadata"; }
        _pnp_logging__WEBPACK_IMPORTED_MODULE_5__["Logger"].write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", 2 /* Warning */);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        var items = Items(this, "").top(requestSize).configure({
            headers: {
                "Accept": acceptHeader,
            },
        });
        // let's copy over the odata query params that can be applied
        // $top - allow setting the page size this way (override what we did above)
        // $select - allow picking the return fields (good behavior)
        // $filter - allow setting a filter, though this may fail due for large lists
        this.query.forEach(function (v, k) {
            if (/^\$select|filter|top|expand$/i.test(k)) {
                items.query.set(k, v);
            }
        });
        // give back the promise
        return new Promise(function (resolve, reject) {
            // this will eventually hold the items we return
            var itemsCollector = [];
            // action that will gather up our results recursively
            var gatherer = function (last) {
                // collect that set of results
                [].push.apply(itemsCollector, last.results);
                // if we have more, repeat - otherwise resolve with the collected items
                if (last.hasNext) {
                    last.getNext().then(gatherer).catch(reject);
                }
                else {
                    resolve(itemsCollector);
                }
            };
            // start the cycle
            items.getPaged().then(gatherer).catch(reject);
        });
    };
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Items.prototype.add = function (properties, listItemEntityTypeFullName) {
        if (properties === void 0) { properties = {}; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, promise;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_4__["body"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_6__["metadata"])(listItemEntityType), properties));
                        promise = Object(_operations__WEBPACK_IMPORTED_MODULE_8__["spPost"])(this.clone(Items, ""), postBody).then(function (data) {
                            return {
                                data: data,
                                item: _this.getById(data.Id),
                            };
                        });
                        removeDependency();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Items.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.getParent(_lists_types__WEBPACK_IMPORTED_MODULE_3__["List"]).getListItemEntityTypeFullName();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("is.getPaged")
    ], _Items.prototype, "getPaged", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("is.getAll")
    ], _Items.prototype, "getAll", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("is.add")
    ], _Items.prototype, "add", null);
    _Items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_7__["defaultPath"])("items")
    ], _Items);
    return _Items;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableCollection"]));

var Items = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Items);
/**
 * Descrines a single Item instance
 *
 */
var _Item = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Item, _super);
    function _Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["deleteableWithETag"])("i");
        return _this;
    }
    Object.defineProperty(_Item.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions for the item
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryable"])(this, "EffectiveBasePermissions"), "i.effectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "effectiveBasePermissionsForUI", {
        /**
         * Gets the effective base permissions for the item in a UI context
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryable"])(this, "EffectiveBasePermissionsForUI"), "i.effectiveBasePermissionsForUI");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsHTML", {
        /**
         * Gets the field values for this list item in their HTML representation
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryableInstance"])(this, "FieldValuesAsHTML"), "i.fvHTML");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsText", {
        /**
         * Gets the field values for this list item in their text representation
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryableInstance"])(this, "FieldValuesAsText"), "i.fvText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesForEdit", {
        /**
         * Gets the field values for this list item for use in editing controls
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryableInstance"])(this, "FieldValuesForEdit"), "i.fvEdit");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "versions", {
        /**
         * Gets the collection of versions associated with this item
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(ItemVersions(this), "i.versions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "list", {
        get: function () {
            return this.getParent(_lists_types__WEBPACK_IMPORTED_MODULE_3__["List"], this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Item.prototype.update = function (properties, eTag, listItemEntityTypeFullName) {
        if (eTag === void 0) { eTag = "*"; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, poster, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_4__["body"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_6__["metadata"])(listItemEntityType), properties), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_4__["headers"])({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        removeDependency();
                        poster = _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(this.clone(Item).usingParser(new ItemUpdatedParser()), "i.update");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_8__["spPost"])(poster, postBody)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                item: this,
                            }];
                }
            });
        });
    };
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Item.prototype.recycle = function () {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_8__["spPost"])(this.clone(Item, "recycle"));
    };
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    _Item.prototype.getWopiFrameUrl = function (action) {
        if (action === void 0) { action = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = this.clone(Item, "getWOPIFrameUrl(@action)");
                        i.query.set("@action", action);
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_8__["spPost"])(i)];
                    case 1:
                        data = _a.sent();
                        // handle verbose mode
                        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["hOP"])(data, "GetWOPIFrameUrl")) {
                            return [2 /*return*/, data.GetWOPIFrameUrl];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    _Item.prototype.validateUpdateListItem = function (formValues, bNewDocumentUpdate) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_8__["spPost"])(this.clone(Item, "validateupdatelistitem"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_4__["body"])({ formValues: formValues, bNewDocumentUpdate: bNewDocumentUpdate }));
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Item.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.list.getListItemEntityTypeFullName();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("i.recycle")
    ], _Item.prototype, "recycle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("i.getWopiFrameUrl")
    ], _Item.prototype, "getWopiFrameUrl", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("i.validateUpdateListItem")
    ], _Item.prototype, "validateUpdateListItem", null);
    return _Item;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableInstance"]));

var Item = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Item);
/**
 * Describes a collection of Version objects
 *
 */
var _ItemVersions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_ItemVersions, _super);
    function _ItemVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _ItemVersions.prototype.getById = function (versionId) {
        return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(ItemVersion(this).concat("(" + versionId + ")"), "iv.getById");
    };
    _ItemVersions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_7__["defaultPath"])("versions")
    ], _ItemVersions);
    return _ItemVersions;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableCollection"]));

var ItemVersions = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
var _ItemVersion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_ItemVersion, _super);
    function _ItemVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["deleteableWithETag"])("iv");
        return _this;
    }
    return _ItemVersion;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableInstance"]));

var ItemVersion = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_ItemVersion);
/**
 * Provides paging functionality for list items
 */
var PagedItemCollection = /** @class */ (function () {
    function PagedItemCollection(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
        /**
         * If true there are more results available in the set, otherwise there are not
         */
        get: function () {
            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    PagedItemCollection.prototype.getNext = function () {
        if (this.hasNext) {
            var items = _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Items(this.nextUrl, null).configureFrom(this.parent), "ip.getNext");
            return items.getPaged();
        }
        return new Promise(function (r) { return r(null); });
    };
    return PagedItemCollection;
}());

var PagedItemCollectionParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PagedItemCollectionParser, _super);
    function PagedItemCollectionParser(_parent) {
        var _this = _super.call(this) || this;
        _this._parent = _parent;
        return _this;
    }
    PagedItemCollectionParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                r.json().then(function (json) {
                    var nextUrl = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["hOP"])(json, "d") && Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["hOP"])(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new PagedItemCollection(_this._parent, nextUrl, _this.parseODataJSON(json)));
                });
            }
        });
    };
    return PagedItemCollectionParser;
}(_pnp_odata__WEBPACK_IMPORTED_MODULE_4__["ODataParser"]));
var ItemUpdatedParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ItemUpdatedParser, _super);
    function ItemUpdatedParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemUpdatedParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                resolve({
                    "odata.etag": r.headers.get("etag"),
                });
            }
        });
    };
    return ItemUpdatedParser;
}(_pnp_odata__WEBPACK_IMPORTED_MODULE_4__["ODataParser"]));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "4tXH":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/types.js ***!
  \***********************************************/
/*! exports provided: _Folders, Folders, _Folder, Folder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Folders", function() { return _Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folders", function() { return Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Folder", function() { return _Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharepointqueryable */ "E6kk");
/* harmony import */ var _odata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../odata */ "5dQz");
/* harmony import */ var _items_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/types */ "3DT9");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "hMpi");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations */ "UK2s");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");
/* harmony import */ var _utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/extractweburl */ "tSEd");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../telemetry */ "h3gW");
/* harmony import */ var _utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/toResourcePath */ "t8hP");












var _Folders = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Folders, _super);
    function _Folders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    _Folders.prototype.getByName = function (name) {
        return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Folder(this).concat("('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(name) + "')"), "fs.getByName");
    };
    /**
     * Adds a new folder at the specified URL
     *
     * @param url
     */
    _Folders.prototype.add = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folders, "add('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(url) + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: this.getByName(url),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    _Folders.prototype.addUsingPath = function (serverRelativeUrl, overwrite) {
        if (overwrite === void 0) { overwrite = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folders, "addUsingPath(DecodedUrl='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(serverRelativeUrl) + "',overwrite=" + overwrite + ")"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: Folder(Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(this.toUrl()), "_api/web/getFolderByServerRelativePath(decodedUrl='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(serverRelativeUrl) + "')"),
                            }];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fs.add")
    ], _Folders.prototype, "add", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fs.addUsingPath")
    ], _Folders.prototype, "addUsingPath", null);
    _Folders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("folders")
    ], _Folders);
    return _Folders;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["_SharePointQueryableCollection"]));

var Folders = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["spInvokableFactory"])(_Folders);
var _Folder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Folder, _super);
    function _Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["deleteableWithETag"])("f");
        /**
         * Updates folder's properties
         * @param props Folder's properties to update
         */
        _this.update = _this._update("SP.Folder", function (data) { return ({ data: data, folder: _this }); });
        return _this;
    }
    Object.defineProperty(_Folder.prototype, "contentTypeOrder", {
        /**
         * Specifies the sequence in which content types are displayed.
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableCollection"])(this, "contentTypeOrder"), "f.contentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "folders", {
        /**
         * Gets this folder's sub folders
         *
         */
        get: function () {
            return Folders(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "listItemAllFields", {
        /**
         * Gets this folder's list item field values
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableInstance"])(this, "listItemAllFields"), "f.listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "parentFolder", {
        /**
         * Gets the parent folder, if available
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Folder(this, "parentFolder"), "f.parentFolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "properties", {
        /**
         * Gets this folder's properties
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableInstance"])(this, "properties"), "f.properties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "serverRelativeUrl", {
        /**
         * Gets this folder's server relative url
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryable"])(this, "serverRelativeUrl"), "f.serverRelativeUrl");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "uniqueContentTypeOrder", {
        /**
         * Gets a value that specifies the content type order.
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableCollection"])(this, "uniqueContentTypeOrder"), "f.uniqueContentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Folder.prototype.recycle = function () {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folder, "recycle"));
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    _Folder.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var q;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (_a = this.listItemAllFields).select.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(selects))()];
                    case 1:
                        q = _b.sent();
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_items_types__WEBPACK_IMPORTED_MODULE_4__["Item"])(Object(_odata__WEBPACK_IMPORTED_MODULE_3__["odataUrlFrom"])(q)), q)];
                }
            });
        });
    };
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.moveTo = function (destUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFolder()"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destUrl: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                srcUrl: "" + hostUrl + srcUrl,
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Moves a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.moveByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFolderByPath()"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : "" + hostUrl + destUrl),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(srcUrl) ? srcUrl : "" + hostUrl + srcUrl),
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.copyTo = function (destUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFolder()"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destUrl: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : "" + hostUrl + destUrl,
                                srcUrl: "" + hostUrl + srcUrl,
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.copyByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFolderByPath()"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : "" + hostUrl + destUrl),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(srcUrl) ? srcUrl : "" + hostUrl + srcUrl),
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the shareable item associated with this folder
     */
    _Folder.prototype.getShareable = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var d, shareable;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableInstance"], "listItemAllFields", false).select("odata.id")()];
                    case 1:
                        d = _a.sent();
                        shareable = Object(_items_types__WEBPACK_IMPORTED_MODULE_4__["Item"])(Object(_odata__WEBPACK_IMPORTED_MODULE_3__["odataUrlFrom"])(d));
                        // we need to handle batching
                        if (this.hasBatch) {
                            shareable = shareable.inBatch(this.batch);
                        }
                        return [2 /*return*/, shareable];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.recycle")
    ], _Folder.prototype, "recycle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.getItem")
    ], _Folder.prototype, "getItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.moveTo")
    ], _Folder.prototype, "moveTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.moveByPath")
    ], _Folder.prototype, "moveByPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.copyTo")
    ], _Folder.prototype, "copyTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.copyByPath")
    ], _Folder.prototype, "copyByPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.getShareable")
    ], _Folder.prototype, "getShareable", null);
    return _Folder;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["_SharePointQueryableInstance"]));

var Folder = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_2__["spInvokableFactory"])(_Folder);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "5dQz":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/odata.js ***!
  \***************************************/
/*! exports provided: odataUrlFrom, spODataEntity, spODataEntityArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "odataUrlFrom", function() { return odataUrlFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spODataEntity", function() { return spODataEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spODataEntityArray", function() { return spODataEntityArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/logging */ "B3L+");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _utils_extractweburl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/extractweburl */ "tSEd");





function odataUrlFrom(candidate) {
    var parts = [];
    var s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(candidate, s[3]) && Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            var editLink = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_4__["extractWebUrl"])(candidate[s[3]]), "_api", editLink);
        }
        else if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return _pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parts));
}
var SPODataEntityParserImpl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(_pnp_odata__WEBPACK_IMPORTED_MODULE_3__["ODataParser"]));
var SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(_pnp_odata__WEBPACK_IMPORTED_MODULE_3__["ODataParser"]));
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}
//# sourceMappingURL=odata.js.map

/***/ }),

/***/ "5e8D":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/odata/pipeline-binder.js ***!
  \****************************************************/
/*! exports provided: pipelineBinder, defaultPipelineBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineBinder", function() { return pipelineBinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPipelineBinder", function() { return defaultPipelineBinder; });
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers */ "xbXq");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryable */ "dKLh");
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipeline */ "TZA7");




// first we bind the pipeline we will use for all requests within this closure
function pipelineBinder(pipes) {
    // then we bind the client factory we'll use (typically done in an implementing library such as sp)
    return function (clientFactory) {
        // then we create a binder we can apply for each type of method (GET, POST, etc.)
        return function (method) {
            // finally we get a function back to which we can pass an IQueryableData instance and execute the request it defines
            return function (o) {
                // send the IQueryableData down the pipeline
                return Object(_pipeline__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object.assign({}, {
                    batch: null,
                    batchDependency: null,
                    batchIndex: -1,
                    cachingOptions: null,
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new _parsers__WEBPACK_IMPORTED_MODULE_0__["ODataParser"](),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["getGUID"])(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, Object(_queryable__WEBPACK_IMPORTED_MODULE_2__["cloneQueryableData"])(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(Object(_pipeline__WEBPACK_IMPORTED_MODULE_3__["getDefaultPipeline"])());
//# sourceMappingURL=pipeline-binder.js.map

/***/ }),

/***/ "6k7F":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/index.js ***!
  \********************************************/
/*! exports provided: Web, Webs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "dVsc");
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest */ "9l4K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["Web"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Webs", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["Webs"]; });




Reflect.defineProperty(_rest__WEBPACK_IMPORTED_MODULE_1__["SPRest"].prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Object(_types__WEBPACK_IMPORTED_MODULE_0__["Web"])(this._baseUrl).configure(this._options);
    },
});
_rest__WEBPACK_IMPORTED_MODULE_1__["SPRest"].prototype.createBatch = function () {
    return this.web.createBatch();
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "8xxP":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/batch.js ***!
  \***************************************/
/*! exports provided: SPBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPBatch", function() { return SPBatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/logging */ "B3L+");
/* harmony import */ var _sphttpclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sphttpclient */ "DqvY");
/* harmony import */ var _splibconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splibconfig */ "0p/9");
/* harmony import */ var _utils_toabsoluteurl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/toabsoluteurl */ "G2Ar");







/**
 * Manages a batch of OData operations
 */
var SPBatch = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPBatch, _super);
    function SPBatch(baseUrl) {
        var _this = _super.call(this) || this;
        _this.baseUrl = baseUrl;
        return _this;
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    SPBatch.ParseResponse = function (body) {
        var responses = [];
        var header = "--batchresponse_";
        // Ex. "HTTP/1.1 500 Internal Server Error"
        var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
        var lines = body.split("\n");
        var state = "batch";
        var status;
        var statusText;
        for (var i = 0; i < lines.length; ++i) {
            var line = lines[i];
            switch (state) {
                case "batch":
                    if (line.substr(0, header.length) === header) {
                        state = "batchHeaders";
                    }
                    else {
                        if (line.trim() !== "") {
                            throw Error("Invalid response, line " + i);
                        }
                    }
                    break;
                case "batchHeaders":
                    if (line.trim() === "") {
                        state = "status";
                    }
                    break;
                case "status":
                    var parts = statusRegExp.exec(line);
                    if (parts.length !== 3) {
                        throw Error("Invalid status, line " + i);
                    }
                    status = parseInt(parts[1], 10);
                    statusText = parts[2];
                    state = "statusHeaders";
                    break;
                case "statusHeaders":
                    if (line.trim() === "") {
                        state = "body";
                    }
                    break;
                case "body":
                    responses.push((status === 204) ? new Response() : new Response(line, { status: status, statusText: statusText }));
                    state = "batch";
                    break;
            }
        }
        if (state !== "status") {
            throw Error("Unexpected end of input");
        }
        return responses;
    };
    SPBatch.prototype.executeImpl = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var client, absoluteRequestUrl, batchBody, currentChangeSetId, i, reqInfo, headers, url, method, castHeaders, batchOptions, fetchResponse, text, responses;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _pnp_logging__WEBPACK_IMPORTED_MODULE_3__["Logger"].write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
                        // if we don't have any requests, don't bother sending anything
                        // this could be due to caching further upstream, or just an empty batch
                        if (this.requests.length < 1) {
                            _pnp_logging__WEBPACK_IMPORTED_MODULE_3__["Logger"].write("Resolving empty batch.", 1 /* Info */);
                            return [2 /*return*/];
                        }
                        client = new _sphttpclient__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"]();
                        return [4 /*yield*/, Object(_utils_toabsoluteurl__WEBPACK_IMPORTED_MODULE_6__["toAbsoluteUrl"])(this.baseUrl)];
                    case 1:
                        absoluteRequestUrl = _a.sent();
                        batchBody = [];
                        currentChangeSetId = "";
                        for (i = 0; i < this.requests.length; i++) {
                            reqInfo = this.requests[i];
                            if (reqInfo.method === "GET") {
                                if (currentChangeSetId.length > 0) {
                                    // end an existing change set
                                    batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                                    currentChangeSetId = "";
                                }
                                batchBody.push("--batch_" + this.batchId + "\n");
                            }
                            else {
                                if (currentChangeSetId.length < 1) {
                                    // start new change set
                                    currentChangeSetId = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["getGUID"])();
                                    batchBody.push("--batch_" + this.batchId + "\n");
                                    batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
                                }
                                batchBody.push("--changeset_" + currentChangeSetId + "\n");
                            }
                            // common batch part prefix
                            batchBody.push("Content-Type: application/http\n");
                            batchBody.push("Content-Transfer-Encoding: binary\n\n");
                            headers = new Headers();
                            url = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["isUrlAbsolute"])(reqInfo.url) ? reqInfo.url : Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["combine"])(absoluteRequestUrl, reqInfo.url);
                            _pnp_logging__WEBPACK_IMPORTED_MODULE_3__["Logger"].write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Adding request " + reqInfo.method + " " + url + " to batch.", 0 /* Verbose */);
                            if (reqInfo.method !== "GET") {
                                method = reqInfo.method;
                                castHeaders = reqInfo.options.headers;
                                if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["hOP"])(reqInfo, "options") && Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["hOP"])(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
                                    method = castHeaders["X-HTTP-Method"];
                                    delete castHeaders["X-HTTP-Method"];
                                }
                                batchBody.push(method + " " + url + " HTTP/1.1\n");
                                headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                            }
                            else {
                                batchBody.push(reqInfo.method + " " + url + " HTTP/1.1\n");
                            }
                            // merge global config headers
                            Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["mergeHeaders"])(headers, _splibconfig__WEBPACK_IMPORTED_MODULE_5__["SPRuntimeConfig"].headers);
                            // merge per-request headers
                            if (reqInfo.options) {
                                Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["mergeHeaders"])(headers, reqInfo.options.headers);
                            }
                            // lastly we apply any default headers we need that may not exist
                            if (!headers.has("Accept")) {
                                headers.append("Accept", "application/json");
                            }
                            if (!headers.has("Content-Type")) {
                                headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                            }
                            if (!headers.has("X-ClientService-ClientTag")) {
                                headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.0.4:batch");
                            }
                            // write headers into batch body
                            headers.forEach(function (value, name) {
                                batchBody.push(name + ": " + value + "\n");
                            });
                            batchBody.push("\n");
                            if (reqInfo.options.body) {
                                batchBody.push(reqInfo.options.body + "\n\n");
                            }
                        }
                        if (currentChangeSetId.length > 0) {
                            // Close the changeset
                            batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                            currentChangeSetId = "";
                        }
                        batchBody.push("--batch_" + this.batchId + "--\n");
                        batchOptions = {
                            "body": batchBody.join(""),
                            "headers": {
                                "Content-Type": "multipart/mixed; boundary=batch_" + this.batchId,
                            },
                            "method": "POST",
                        };
                        _pnp_logging__WEBPACK_IMPORTED_MODULE_3__["Logger"].write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
                        return [4 /*yield*/, client.fetch(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_2__["combine"])(absoluteRequestUrl, "/_api/$batch"), batchOptions)];
                    case 2:
                        fetchResponse = _a.sent();
                        return [4 /*yield*/, fetchResponse.text()];
                    case 3:
                        text = _a.sent();
                        responses = SPBatch.ParseResponse(text);
                        if (responses.length !== this.requests.length) {
                            throw Error("Could not properly parse responses to match requests in batch.");
                        }
                        _pnp_logging__WEBPACK_IMPORTED_MODULE_3__["Logger"].write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                        // this structure ensures that we resolve the batched requests in the order we expect
                        // using async this is not guaranteed depending on the requests
                        return [2 /*return*/, responses.reduce(function (p, response, index) { return p.then(function (_) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var request, _a, _b, e_1;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            request = this.requests[index];
                                            _pnp_logging__WEBPACK_IMPORTED_MODULE_3__["Logger"].write("[" + request.id + "] (" + (new Date()).getTime() + ") Resolving request in batch " + this.batchId + ".", 1 /* Info */);
                                            _c.label = 1;
                                        case 1:
                                            _c.trys.push([1, 3, , 4]);
                                            _b = (_a = request).resolve;
                                            return [4 /*yield*/, request.parser.parse(response)];
                                        case 2:
                                            _b.apply(_a, [_c.sent()]);
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_1 = _c.sent();
                                            request.reject(e_1);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }); }, Promise.resolve(void (0)))];
                }
            });
        });
    };
    return SPBatch;
}(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["Batch"]));

//# sourceMappingURL=batch.js.map

/***/ }),

/***/ "97IE":
/*!******************************************!*\
  !*** ./node_modules/@pnp/common/util.js ***!
  \******************************************/
/*! exports provided: getCtxCallback, dateAdd, combine, getRandomString, getGUID, isFunc, objectDefinedNotNull, isArray, assign, isUrlAbsolute, stringIsNullOrEmpty, sanitizeGuid, jsS, hOP, getHashCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCtxCallback", function() { return getCtxCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateAdd", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return getRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGUID", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunc", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return stringIsNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeGuid", function() { return sanitizeGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsS", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hOP", function() { return hOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashCode", function() { return getHashCode; });
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
function getCtxCallback(context, method) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    var ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths
        .filter(function (path) { return !stringIsNullOrEmpty(path); })
        .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    var text = new Array(chars);
    for (var i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* tslint:disable no-bitwise */
function getGUID() {
    var d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* tslint:enable */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(f) {
    return typeof f === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray ? Array.isArray(array) : array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
function assign(target, source, noOverwrite, filter) {
    if (noOverwrite === void 0) { noOverwrite = false; }
    if (filter === void 0) { filter = function () { return true; }; }
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
    // final filter we will use
    var f = function (v) { return check(target, v) && filter(v); };
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce(function (t, v) {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return s === undefined || s === null || s.length < 1;
}
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
function sanitizeGuid(guid) {
    if (stringIsNullOrEmpty(guid)) {
        return guid;
    }
    var matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
    return matches === null ? guid : matches[1];
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
// tslint:disable:no-bitwise
function getHashCode(s) {
    var hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
// tslint:enable:no-bitwise
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "9TEK":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/common/storage.js ***!
  \*********************************************/
/*! exports provided: PnPClientStorageWrapper, PnPClientStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorageWrapper", function() { return PnPClientStorageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return PnPClientStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "lzYu");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "97IE");
/* harmony import */ var _libconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libconfig */ "hyGn");



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        if (defaultTimeoutMinutes === void 0) { defaultTimeoutMinutes = -1; }
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (_libconfig__WEBPACK_IMPORTED_MODULE_2__["RuntimeConfig"].enableCacheExpiration) {
            this.cacheExpirationHandler();
        }
    }
    PnPClientStorageWrapper.bind = function (store) {
        return new PnPClientStorageWrapper(typeof (store) === "undefined" ? new MemoryStorage() : store);
    };
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(o)) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var o;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/, getter()];
                        }
                        o = this.get(key);
                        if (!(o === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getter()];
                    case 1:
                        o = _a.sent();
                        this.put(key, o, expire);
                        _a.label = 2;
                    case 2: return [2 /*return*/, o];
                }
            });
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i, key;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/];
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.store.length)) return [3 /*break*/, 4];
                        key = this.store.key(i);
                        if (!(key !== null)) return [3 /*break*/, 3];
                        if (!/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) return [3 /*break*/, 3];
                        // get those items as get will delete from cache if they are expired
                        return [4 /*yield*/, this.get(key)];
                    case 2:
                        // get those items as get will delete from cache if they are expired
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = _libconfig__WEBPACK_IMPORTED_MODULE_2__["RuntimeConfig"].defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = Object(_util__WEBPACK_IMPORTED_MODULE_1__["dateAdd"])(new Date(), "second", defaultTimeout);
        }
        return Object(_util__WEBPACK_IMPORTED_MODULE_1__["jsS"])({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        this.deleteExpired().then(function (_) {
            // call ourself in the future
            setTimeout(Object(_util__WEBPACK_IMPORTED_MODULE_1__["getCtxCallback"])(_this, _this.cacheExpirationHandler), _libconfig__WEBPACK_IMPORTED_MODULE_2__["RuntimeConfig"].cacheExpirationIntervalMilliseconds);
        }).catch(console.error);
    };
    return PnPClientStorageWrapper;
}());

/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new Map(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.size;
        },
        enumerable: true,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return Array.from(this._store)[index][0];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.delete(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.set(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = PnPClientStorageWrapper.bind(localStorage);
            }
            return this._local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = PnPClientStorageWrapper.bind(sessionStorage);
            }
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    return PnPClientStorage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "9l4K":
/*!**************************************!*\
  !*** ./node_modules/@pnp/sp/rest.js ***!
  \**************************************/
/*! exports provided: SPRest, sp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRest", function() { return SPRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sp", function() { return sp; });
/* harmony import */ var _splibconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splibconfig */ "0p/9");

/**
 * Root of the SharePoint REST module
 */
var SPRest = /** @class */ (function () {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    function SPRest(_options, _baseUrl) {
        if (_options === void 0) { _options = {}; }
        if (_baseUrl === void 0) { _baseUrl = ""; }
        this._options = _options;
        this._baseUrl = _baseUrl;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    SPRest.prototype.configure = function (options, baseUrl) {
        if (baseUrl === void 0) { baseUrl = ""; }
        return new SPRest(options, baseUrl);
    };
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    SPRest.prototype.setup = function (config) {
        if (config.pageContext) {
            Object(_splibconfig__WEBPACK_IMPORTED_MODULE_0__["setup"])({
                spfxContext: config,
            });
        }
        else {
            Object(_splibconfig__WEBPACK_IMPORTED_MODULE_0__["setup"])(config);
        }
    };
    return SPRest;
}());

var sp = new SPRest();
//# sourceMappingURL=rest.js.map

/***/ }),

/***/ "B3L+":
/*!********************************************!*\
  !*** ./node_modules/@pnp/logging/index.js ***!
  \********************************************/
/*! exports provided: Logger, LogLevel, ConsoleListener, FunctionListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "Vpmm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["Logger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"]; });

/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ "aH1g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleListener", function() { return _listeners__WEBPACK_IMPORTED_MODULE_1__["ConsoleListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionListener", function() { return _listeners__WEBPACK_IMPORTED_MODULE_1__["FunctionListener"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Bwa7":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/lists/web.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _webs_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webs/types */ "dVsc");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "hy0S");
/* harmony import */ var _odata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../odata */ "5dQz");
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharepointqueryable */ "E6kk");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");







Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["addProp"])(_webs_types__WEBPACK_IMPORTED_MODULE_2__["_Web"], "lists", _types__WEBPACK_IMPORTED_MODULE_3__["Lists"]);
Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["addProp"])(_webs_types__WEBPACK_IMPORTED_MODULE_2__["_Web"], "siteUserInfoList", _types__WEBPACK_IMPORTED_MODULE_3__["List"], "siteuserinfolist");
Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["addProp"])(_webs_types__WEBPACK_IMPORTED_MODULE_2__["_Web"], "defaultDocumentLibrary", _types__WEBPACK_IMPORTED_MODULE_3__["List"], "DefaultDocumentLibrary");
Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["addProp"])(_webs_types__WEBPACK_IMPORTED_MODULE_2__["_Web"], "customListTemplates", _sharepointqueryable__WEBPACK_IMPORTED_MODULE_5__["SharePointQueryableCollection"], "getcustomlisttemplates");
_webs_types__WEBPACK_IMPORTED_MODULE_2__["_Web"].prototype.getList = function (listRelativeUrl) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_3__["List"])(this, "getList('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_6__["escapeQueryStrValue"])(listRelativeUrl) + "')");
};
_webs_types__WEBPACK_IMPORTED_MODULE_2__["_Web"].prototype.getCatalog = function (type) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var data;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(_webs_types__WEBPACK_IMPORTED_MODULE_2__["Web"], "getcatalog(" + type + ")").select("Id").get()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, Object(_types__WEBPACK_IMPORTED_MODULE_3__["List"])(Object(_odata__WEBPACK_IMPORTED_MODULE_4__["odataUrlFrom"])(data))];
            }
        });
    });
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "DqvY":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/sphttpclient.js ***!
  \**********************************************/
/*! exports provided: SPHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPHttpClient", function() { return SPHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _splibconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splibconfig */ "0p/9");
/* harmony import */ var _utils_extractweburl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/extractweburl */ "tSEd");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./telemetry */ "h3gW");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/odata */ "xT8B");






var SPHttpClient = /** @class */ (function () {
    function SPHttpClient(_impl) {
        if (_impl === void 0) { _impl = _splibconfig__WEBPACK_IMPORTED_MODULE_2__["SPRuntimeConfig"].fetchClientFactory(); }
        this._impl = _impl;
        this._digestCache = getDigestFactory(this);
    }
    SPHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var opts, headers, methodName, clientTag, digest;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(options, { cache: "no-cache", credentials: "same-origin" }, true);
                        headers = new Headers();
                        // first we add the global headers so they can be overwritten by any passed in locally to this call
                        Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["mergeHeaders"])(headers, _splibconfig__WEBPACK_IMPORTED_MODULE_2__["SPRuntimeConfig"].headers);
                        // second we add the local options so we can overwrite the globals
                        Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["mergeHeaders"])(headers, options.headers);
                        // lastly we apply any default headers we need that may not exist
                        if (!headers.has("Accept")) {
                            headers.append("Accept", "application/json");
                        }
                        if (!headers.has("Content-Type")) {
                            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                        }
                        if (!headers.has("X-ClientService-ClientTag")) {
                            methodName = _telemetry__WEBPACK_IMPORTED_MODULE_4__["tag"].getClientTag(headers);
                            clientTag = "PnPCoreJS:2.0.4:" + methodName;
                            if (clientTag.length > 32) {
                                clientTag = clientTag.substr(0, 32);
                            }
                            headers.append("X-ClientService-ClientTag", clientTag);
                        }
                        opts = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(opts, { headers: headers });
                        if (!(opts.method && opts.method.toUpperCase() !== "GET" && !headers.has("X-RequestDigest") && !headers.has("Authorization"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._digestCache(Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_3__["extractWebUrl"])(url))];
                    case 1:
                        digest = _a.sent();
                        headers.append("X-RequestDigest", digest);
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.fetchRaw(url, opts)];
                }
            });
        });
    };
    SPHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["mergeHeaders"])(rawHeaders, options.headers);
        options = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(options, { headers: rawHeaders });
        var retry = function (ctx) {
            // handles setting the proper timeout for a retry
            var setRetry = function (response) {
                var delay;
                if (response.headers.has("Retry-After")) {
                    // if we have gotten a header, use that value as the delay value in seconds
                    delay = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                }
                else {
                    // grab our current delay
                    delay = ctx.delay;
                    // Increment our counters.
                    ctx.delay *= 2;
                }
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(Error("Retry count exceeded (" + ctx.retryCount + ") for request. Response status: [" + response.status + "] " + response.statusText));
                }
                else {
                    // Set our retry timeout for {delay} milliseconds.
                    setTimeout(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["getCtxCallback"])(_this, retry, ctx), delay);
                }
            };
            // send the actual request
            _this._impl.fetch(url, options).then(function (response) {
                if (response.status === 429) {
                    // we have been throttled
                    setRetry(response);
                }
                else {
                    ctx.resolve(response);
                }
            }).catch(function (response) {
                if (response.status === 503 || response.status === 504) {
                    // http status code 503 or 504, we can retry this
                    setRetry(response);
                }
                else {
                    ctx.reject(response);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            retry.call(_this, {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            });
        });
    };
    SPHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return SPHttpClient;
}());

// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new Map();
function getDigestFactory(client) {
    var _this = this;
    return function (webUrl) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cachedDigest, now, url, headers, resp, parsed, newCachedDigest;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cachedDigest = digests.get(webUrl);
                    if (cachedDigest !== undefined) {
                        now = new Date();
                        if (now < cachedDigest.expiration) {
                            return [2 /*return*/, cachedDigest.value];
                        }
                    }
                    url = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(webUrl, "/_api/contextinfo");
                    headers = {
                        "Accept": "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose;charset=utf-8",
                    };
                    return [4 /*yield*/, client.fetchRaw(url, {
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(headers, _splibconfig__WEBPACK_IMPORTED_MODULE_2__["SPRuntimeConfig"].headers, true),
                            method: "POST",
                        })];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, (new _pnp_odata__WEBPACK_IMPORTED_MODULE_5__["ODataParser"]()).parse(resp).then(function (r) { return r.GetContextWebInformation; })];
                case 2:
                    parsed = _a.sent();
                    newCachedDigest = {
                        expiration: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["dateAdd"])(new Date(), "second", parsed.FormDigestTimeoutSeconds),
                        value: parsed.FormDigestValue,
                    };
                    digests.set(webUrl, newCachedDigest);
                    return [2 /*return*/, newCachedDigest.value];
            }
        });
    }); };
}
//# sourceMappingURL=sphttpclient.js.map

/***/ }),

/***/ "E6kk":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/sharepointqueryable.js ***!
  \*****************************************************/
/*! exports provided: spInvokableFactory, _SharePointQueryable, SharePointQueryable, _SharePointQueryableCollection, SharePointQueryableCollection, _SharePointQueryableInstance, SharePointQueryableInstance, deleteable, deleteableWithETag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spInvokableFactory", function() { return spInvokableFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SharePointQueryable", function() { return _SharePointQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryable", function() { return SharePointQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SharePointQueryableCollection", function() { return _SharePointQueryableCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableCollection", function() { return SharePointQueryableCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SharePointQueryableInstance", function() { return _SharePointQueryableInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableInstance", function() { return SharePointQueryableInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteable", function() { return deleteable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteableWithETag", function() { return deleteableWithETag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/logging */ "B3L+");
/* harmony import */ var _utils_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/metadata */ "z067");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations */ "UK2s");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./telemetry */ "h3gW");







var spInvokableFactory = function (f) {
    return Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["invokableFactory"])(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
var _SharePointQueryable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_SharePointQueryable, _super);
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    function _SharePointQueryable(baseUrl, path) {
        var _this = this;
        var url = "";
        var parentUrl = "";
        var query = new Map();
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                parentUrl = baseUrl;
                url = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                var index = baseUrl.lastIndexOf("/");
                parentUrl = baseUrl.slice(0, index);
                path = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(baseUrl.slice(index), path);
                url = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(parentUrl, path);
            }
            else {
                // .../items(19)
                var index = baseUrl.lastIndexOf("(");
                parentUrl = baseUrl.slice(0, index);
                url = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(baseUrl, path);
            }
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(parentUrl, path || "");
            var target = baseUrl.query.get("@target");
            if (target !== undefined) {
                query.set("@target", target);
            }
        }
        // init base with correct values for data seed
        _this = _super.call(this, {
            parentUrl: parentUrl,
            query: query,
            url: url,
        }) || this;
        // post init actions
        if (typeof baseUrl !== "string") {
            _this.configureFrom(baseUrl);
        }
        _this._forceCaching = false;
        return _this;
    }
    /**
     * Gets the full url with query information
     */
    _SharePointQueryable.prototype.toUrlAndQuery = function () {
        var aliasedParams = new Map(this.query);
        var url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, function (match, labelName, value) {
            _pnp_logging__WEBPACK_IMPORTED_MODULE_3__["Logger"].write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + value, 0 /* Verbose */);
            aliasedParams.set(labelName, "'" + value + "'");
            return labelName;
        });
        if (aliasedParams.size > 0) {
            var char = url.indexOf("?") > -1 ? "&" : "?";
            url += "" + char + Array.from(aliasedParams).map(function (v) { return v[0] + "=" + v[1]; }).join("&");
        }
        return url;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    _SharePointQueryable.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    };
    _SharePointQueryable.prototype.get = function (options) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_5__["spGet"])(this, options);
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    _SharePointQueryable.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    };
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    _SharePointQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        var clone = _super.prototype.cloneTo.call(this, factory(this, additionalPath), { includeBatch: includeBatch });
        // handle sp specific clone actions
        var t = "@target";
        if (this.query.has(t)) {
            clone.query.set(t, this.query.get(t));
        }
        return clone;
    };
    /**
     * The default action for this object (unless overridden spGet)
     *
     * @param options optional request options
     */
    _SharePointQueryable.prototype.defaultAction = function (options) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_5__["spGet"])(this, options);
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    _SharePointQueryable.prototype.getParent = function (factory, baseUrl, path, batch) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        var parent = factory(baseUrl, path).configureFrom(this);
        var t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        if (batch !== undefined) {
            parent = parent.inBatch(batch);
        }
        return parent;
    };
    return _SharePointQueryable;
}(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["Queryable"]));

var SharePointQueryable = spInvokableFactory(_SharePointQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var _SharePointQueryableCollection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_SharePointQueryableCollection, _super);
    function _SharePointQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    _SharePointQueryableCollection.prototype.filter = function (filter) {
        this.query.set("$filter", filter);
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    _SharePointQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var o = "$orderby";
        var query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(orderBy + " " + (ascending ? "asc" : "desc"));
        this.query.set(o, query.join(","));
        return this;
    };
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    _SharePointQueryableCollection.prototype.skip = function (skip) {
        this.query.set("$skip", skip.toString());
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    _SharePointQueryableCollection.prototype.top = function (top) {
        this.query.set("$top", top.toString());
        return this;
    };
    return _SharePointQueryableCollection;
}(_SharePointQueryable));

var SharePointQueryableCollection = spInvokableFactory(_SharePointQueryableCollection);
/**
 * Represents an instance that can be selected
 *
 */
var _SharePointQueryableInstance = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_SharePointQueryableInstance, _super);
    function _SharePointQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    _SharePointQueryableInstance.prototype._update = function (type, mapper) {
        var _this = this;
        return function (props) { return Object(_operations__WEBPACK_IMPORTED_MODULE_5__["spPost"])(_telemetry__WEBPACK_IMPORTED_MODULE_6__["tag"].configure(_this, type + ".Update"), {
            body: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["jsS"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_4__["metadata"])(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (d) { return mapper(d, props); }); };
    };
    return _SharePointQueryableInstance;
}(_SharePointQueryable));

var SharePointQueryableInstance = spInvokableFactory(_SharePointQueryableInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable(t) {
    return function () {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_5__["spPostDelete"])(_telemetry__WEBPACK_IMPORTED_MODULE_6__["tag"].configure(this, t + ".delete"));
    };
}
function deleteableWithETag(t) {
    return function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_5__["spPostDeleteETag"])(_telemetry__WEBPACK_IMPORTED_MODULE_6__["tag"].configure(this, t + ".delete"), {}, eTag);
    };
}
//# sourceMappingURL=sharepointqueryable.js.map

/***/ }),

/***/ "EVeO":
/*!********************************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/objectToSPKeyValueCollection.js ***!
  \********************************************************************/
/*! exports provided: objectToSPKeyValueCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToSPKeyValueCollection", function() { return objectToSPKeyValueCollection; });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ "z067");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");


/**
 * Creates an object representing a SharePoint Collection(SP.KeyValue)
 *
 * @param obj The plain object defining the properties
 */
function objectToSPKeyValueCollection(obj) {
    return Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"])("Collection(SP.KeyValue)"), {
        results: Object.keys(obj).map(function (key) { return Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"])("SP.KeyValue"), {
            Key: key,
            Value: Reflect.get(obj, key),
            ValueType: "Edm.String",
        }); }),
    });
}
//# sourceMappingURL=objectToSPKeyValueCollection.js.map

/***/ }),

/***/ "G2Ar":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/toabsoluteurl.js ***!
  \*****************************************************/
/*! exports provided: toAbsoluteUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAbsoluteUrl", function() { return toAbsoluteUrl; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _splibconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../splibconfig */ "0p/9");


/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl) {
    return new Promise(function (resolve) {
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(candidateUrl)) {
            // if we are already absolute, then just return the url
            return resolve(candidateUrl);
        }
        if (_splibconfig__WEBPACK_IMPORTED_MODULE_1__["SPRuntimeConfig"].baseUrl !== null) {
            // base url specified either with baseUrl of spfxContext config property
            return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["combine"])(_splibconfig__WEBPACK_IMPORTED_MODULE_1__["SPRuntimeConfig"].baseUrl, candidateUrl));
        }
        if (_pnp_common__WEBPACK_IMPORTED_MODULE_0__["safeGlobal"]._spPageContextInfo !== undefined) {
            // operating in classic pages
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["hOP"])(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["safeGlobal"]._spPageContextInfo, "webAbsoluteUrl")) {
                return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["combine"])(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["safeGlobal"]._spPageContextInfo.webAbsoluteUrl, candidateUrl));
            }
            else if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["hOP"])(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["safeGlobal"]._spPageContextInfo, "webServerRelativeUrl")) {
                return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["combine"])(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["safeGlobal"]._spPageContextInfo.webServerRelativeUrl, candidateUrl));
            }
        }
        // does window.location exist and have a certain path part in it?
        if (_pnp_common__WEBPACK_IMPORTED_MODULE_0__["safeGlobal"].location !== undefined) {
            var baseUrl_1 = _pnp_common__WEBPACK_IMPORTED_MODULE_0__["safeGlobal"].location.toString().toLowerCase();
            ["/_layouts/", "/siteassets/"].forEach(function (s) {
                var index = baseUrl_1.indexOf(s);
                if (index > 0) {
                    return resolve(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["combine"])(baseUrl_1.substr(0, index), candidateUrl));
                }
            });
        }
        return resolve(candidateUrl);
    });
}
//# sourceMappingURL=toabsoluteurl.js.map

/***/ }),

/***/ "J7sA":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/index.js ***!
  \*********************************************/
/*! exports provided: List, Lists, ControlMode, RenderListDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "Bwa7");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "hy0S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lists", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["Lists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlMode", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["ControlMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderListDataOptions", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["RenderListDataOptions"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "JFDc":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/files/folder.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _folders_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../folders/types */ "4tXH");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "qfcF");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_folders_types__WEBPACK_IMPORTED_MODULE_1__["_Folder"], "files", _types__WEBPACK_IMPORTED_MODULE_2__["Files"]);
//# sourceMappingURL=folder.js.map

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "LVfT":
/*!**************************************************************!*\
  !*** ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "LZ64":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/item.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _items_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types */ "3DT9");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "4tXH");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_items_types__WEBPACK_IMPORTED_MODULE_1__["_Item"], "folder", _types__WEBPACK_IMPORTED_MODULE_2__["Folder"], "folder");
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "NTTg":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/items/list.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _lists_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types */ "hy0S");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "3DT9");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_lists_types__WEBPACK_IMPORTED_MODULE_1__["_List"], "items", _types__WEBPACK_IMPORTED_MODULE_2__["Items"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "QY3N":
/*!*********************************************!*\
  !*** external "TeamsWebPartWebPartStrings" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_QY3N__;

/***/ }),

/***/ "SPHc":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/files/web.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webs/types */ "dVsc");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "qfcF");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");



_webs_types__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileByServerRelativeUrl('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_2__["escapeQueryStrValue"])(fileRelativeUrl) + "')");
};
_webs_types__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileByServerRelativePath(decodedUrl='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_2__["escapeQueryStrValue"])(fileRelativeUrl) + "')");
};
_webs_types__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileById = function (uniqueId) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileById('" + uniqueId + "')");
};
_webs_types__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileByUrl = function (fileUrl) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileByUrl('!@p1::" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_2__["escapeQueryStrValue"])(fileUrl) + "')");
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "SQg3":
/*!******************************************!*\
  !*** ./node_modules/@pnp/odata/batch.js ***!
  \******************************************/
/*! exports provided: Batch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return Batch; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "zqEK");

var Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["getGUID"])(); }
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
        this._index = -1;
    }
    Object.defineProperty(Batch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batch.prototype, "requests", {
        /**
         * The requests contained in this batch
         */
        get: function () {
            // we sort these each time this is accessed
            return this._reqs.sort(function (info1, info2) { return info1.index - info2.index; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    Batch.prototype.track = function (batchee) {
        batchee.data.batch = this;
        // we need to track the order requests are added to the batch to ensure we always
        // operate on them in order
        if (typeof batchee.data.batchIndex === "undefined" || batchee.data.batchIndex < 0) {
            batchee.data.batchIndex = ++this._index;
        }
    };
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    Batch.prototype.add = function (context) {
        var info = {
            id: context.requestId,
            index: context.batchIndex,
            method: context.method.toUpperCase(),
            options: context.options,
            parser: context.parser,
            reject: null,
            resolve: null,
            url: context.url,
        };
        // we create a new promise that will be resolved within the batch
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    Batch.prototype.addDependency = function () {
        var resolver = function () { return void (0); };
        this._deps.push(new Promise(function (resolve) {
            resolver = resolve;
        }));
        return resolver;
    };
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    Batch.prototype.addResolveBatchDependency = function (p) {
        this._rDeps.push(p);
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    Batch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(function () { return Promise.all(_this._deps); })
            .then(function () { return _this.executeImpl(); })
            .then(function () { return Promise.all(_this._rDeps); })
            .then(function () { return void (0); });
    };
    return Batch;
}());

//# sourceMappingURL=batch.js.map

/***/ }),

/***/ "TZA7":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/odata/pipeline.js ***!
  \*********************************************/
/*! exports provided: setResult, pipe, requestPipelineMethod, PipelineMethods, getDefaultPipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResult", function() { return setResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPipelineMethod", function() { return requestPipelineMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineMethods", function() { return PipelineMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultPipeline", function() { return getDefaultPipeline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "t3D1");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/logging */ "B3L+");
/* harmony import */ var _caching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caching */ "Zl34");




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].log({
        data: _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result from pipeline. Set logging to verbose to see data.",
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    return c.pipes.length > 0 ? c.pipes.shift()(c) : Promise.resolve(c);
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipes.length < 1) {
        _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    var promise = next(context).then(function (ctx) { return returnResult(ctx); }).catch(function (e) {
        _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requets have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(args[0], "hasResult") && args[0].hasResult) {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
var PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].log({
                data: _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.method + " request (" + context.url + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.useCaching) {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new _caching__WEBPACK_IMPORTED_MODULE_3__["CachingOptions"](context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].log({
                            data: _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        // ensure we clear any held batch dependency we are resolving from the cache
                        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isFunc"])(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new _caching__WEBPACK_IMPORTED_MODULE_3__["CachingParserWrapper"](context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                var p = context.batch.add(context);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isFunc"])(context.batchDependency)) {
                    context.batchDependency();
                }
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(context.options || {}, { method: context.method });
                client.fetch(context.url, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].log({
                    data: _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.method + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].log({
                    data: _pnp_logging__WEBPACK_IMPORTED_MODULE_2__["Logger"].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.method + " request.",
                });
            }
            resolve(context);
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());

function getDefaultPipeline() {
    return [
        PipelineMethods.logStart,
        PipelineMethods.caching,
        PipelineMethods.send,
        PipelineMethods.logEnd,
    ].slice(0);
}
//# sourceMappingURL=pipeline.js.map

/***/ }),

/***/ "UK2s":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/operations.js ***!
  \********************************************/
/*! exports provided: spGet, spPost, spDelete, spPatch, spPostDelete, spPostDeleteETag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spGet", function() { return spGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPost", function() { return spPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spDelete", function() { return spDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPatch", function() { return spPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPostDelete", function() { return spPostDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPostDeleteETag", function() { return spPostDeleteETag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _sphttpclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sphttpclient */ "DqvY");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _utils_toabsoluteurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/toabsoluteurl */ "G2Ar");





var spClientBinder = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["defaultPipelineBinder"])(function () { return new _sphttpclient__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"](); });
var send = function (method) {
    var operation = spClientBinder(method);
    return function (o, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, batchDependency, url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["cloneQueryableData"])(o.data);
                        batchDependency = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["objectDefinedNotNull"])(data.batch) ? data.batch.addDependency() : function () { return; };
                        return [4 /*yield*/, Object(_utils_toabsoluteurl__WEBPACK_IMPORTED_MODULE_4__["toAbsoluteUrl"])(o.toUrlAndQuery())];
                    case 1:
                        url = _a.sent();
                        Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["mergeOptions"])(data.options, options);
                        return [2 /*return*/, operation(Object.assign({}, data, {
                                batchDependency: batchDependency,
                                url: url,
                            }))];
                }
            });
        });
    };
};
var spGet = function (o, options) {
    // Fix for #304 - when we clone objects we in some cases then execute a get request
    // in these cases the caching settings were getting dropped from the request
    // this tracks if the object from which this was cloned was caching and applies that to an immediate get request
    // does not affect objects cloned from this as we are using different fields to track the settings so it won't
    // be triggered
    if (o.data.cloneParentWasCaching) {
        o.usingCaching(o.data.cloneParentCacheOptions);
    }
    // if we are forcing caching set that in the data here
    if (o._forceCaching) {
        o.data.useCaching = true;
    }
    return send("GET")(o, options);
};
var spPost = send("POST");
var spDelete = send("DELETE");
var spPatch = send("PATCH");
var spPostDelete = function (o, options) {
    var opts = Object.assign(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["headers"])({ "X-HTTP-Method": "DELETE" }), options);
    return spPost(o, opts);
};
var spPostDeleteETag = function (o, options, eTag) {
    if (eTag === void 0) { eTag = "*"; }
    var opts = Object.assign(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_1__["headers"])({ "X-HTTP-Method": "DELETE", "IF-Match": eTag }), options);
    return spPost(o, opts);
};
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "UKGb":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/index.js ***!
  \***************************************/
/*! exports provided: SharePointQueryableInstance, SharePointQueryableCollection, SharePointQueryable, spInvokableFactory, SPBatch, SPHttpClient, SPRest, sp, toAbsoluteUrl, extractWebUrl, objectToSPKeyValueCollection, stripInvalidFileFolderChars, containsInvalidFileFolderChars, defaultPath, spGet, spPost, spDelete, spPatch, spPostDelete, spPostDeleteETag, PrincipalType, PrincipalSource, PageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharepointqueryable */ "E6kk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableInstance", function() { return _sharepointqueryable__WEBPACK_IMPORTED_MODULE_0__["SharePointQueryableInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableCollection", function() { return _sharepointqueryable__WEBPACK_IMPORTED_MODULE_0__["SharePointQueryableCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryable", function() { return _sharepointqueryable__WEBPACK_IMPORTED_MODULE_0__["SharePointQueryable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spInvokableFactory", function() { return _sharepointqueryable__WEBPACK_IMPORTED_MODULE_0__["spInvokableFactory"]; });

/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batch */ "8xxP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPBatch", function() { return _batch__WEBPACK_IMPORTED_MODULE_1__["SPBatch"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "hMpi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultPath", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["defaultPath"]; });

/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations */ "UK2s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spGet", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__["spGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPost", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__["spPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spDelete", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__["spDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPatch", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__["spPatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPostDelete", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__["spPostDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPostDeleteETag", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__["spPostDeleteETag"]; });

/* harmony import */ var _sphttpclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sphttpclient */ "DqvY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPHttpClient", function() { return _sphttpclient__WEBPACK_IMPORTED_MODULE_4__["SPHttpClient"]; });

/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rest */ "9l4K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPRest", function() { return _rest__WEBPACK_IMPORTED_MODULE_5__["SPRest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sp", function() { return _rest__WEBPACK_IMPORTED_MODULE_5__["sp"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "tCQJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["PrincipalType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalSource", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["PrincipalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["PageType"]; });

/* harmony import */ var _utils_toabsoluteurl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/toabsoluteurl */ "G2Ar");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toAbsoluteUrl", function() { return _utils_toabsoluteurl__WEBPACK_IMPORTED_MODULE_7__["toAbsoluteUrl"]; });

/* harmony import */ var _utils_extractweburl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/extractweburl */ "tSEd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractWebUrl", function() { return _utils_extractweburl__WEBPACK_IMPORTED_MODULE_8__["extractWebUrl"]; });

/* harmony import */ var _utils_objectToSPKeyValueCollection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/objectToSPKeyValueCollection */ "EVeO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectToSPKeyValueCollection", function() { return _utils_objectToSPKeyValueCollection__WEBPACK_IMPORTED_MODULE_9__["objectToSPKeyValueCollection"]; });

/* harmony import */ var _utils_file_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/file-names */ "YFzv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripInvalidFileFolderChars", function() { return _utils_file_names__WEBPACK_IMPORTED_MODULE_10__["stripInvalidFileFolderChars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsInvalidFileFolderChars", function() { return _utils_file_names__WEBPACK_IMPORTED_MODULE_10__["containsInvalidFileFolderChars"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UxNQ":
/*!*****************************************!*\
  !*** ./node_modules/@pnp/common/net.js ***!
  \*****************************************/
/*! exports provided: mergeHeaders, mergeOptions, getADALResource, FetchClient, BearerTokenFetchClient, SPFxAdalClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeHeaders", function() { return mergeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getADALResource", function() { return getADALResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchClient", function() { return FetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BearerTokenFetchClient", function() { return BearerTokenFetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPFxAdalClient", function() { return SPFxAdalClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "lzYu");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "97IE");
/* harmony import */ var _safe_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-global */ "08ZC");



function mergeHeaders(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(source)) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(source)) {
        var headers = Object(_util__WEBPACK_IMPORTED_MODULE_1__["assign"])(target.headers || {}, source.headers);
        target = Object(_util__WEBPACK_IMPORTED_MODULE_1__["assign"])(target, source);
        target.headers = headers;
    }
}
/**
 * Parses out the root of the request url to use as the resource when getting the token
 *
  * @param url The url to parse
 */
function getADALResource(url) {
    var u = new URL(url);
    return u.protocol + "//" + u.hostname;
}
/**
 * Makes requests using the global/window fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return _safe_global__WEBPACK_IMPORTED_MODULE_2__["safeGlobal"].fetch(url, options);
    };
    return FetchClient;
}());

/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BearerTokenFetchClient, _super);
    function BearerTokenFetchClient(_token) {
        var _this = _super.call(this) || this;
        _this._token = _token;
        return _this;
    }
    Object.defineProperty(BearerTokenFetchClient.prototype, "token", {
        get: function () {
            return this._token || "";
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    BearerTokenFetchClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", "Bearer " + this._token);
        options.headers = headers;
        return _super.prototype.fetch.call(this, url, options);
    };
    return BearerTokenFetchClient;
}(FetchClient));

/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
var SPFxAdalClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SPFxAdalClient, _super);
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    function SPFxAdalClient(context) {
        var _this = _super.call(this, null) || this;
        _this.context = context;
        return _this;
    }
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    SPFxAdalClient.prototype.fetch = function (url, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var token;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken(getADALResource(url))];
                    case 1:
                        token = _a.sent();
                        this.token = token;
                        return [2 /*return*/, _super.prototype.fetch.call(this, url, options)];
                }
            });
        });
    };
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    SPFxAdalClient.prototype.getToken = function (resource) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var provider;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.aadTokenProviderFactory.getTokenProvider()];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, provider.getToken(resource)];
                }
            });
        });
    };
    return SPFxAdalClient;
}(BearerTokenFetchClient));

//# sourceMappingURL=net.js.map

/***/ }),

/***/ "Vpmm":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/logging/logger.js ***!
  \*********************************************/
/*! exports provided: Logger, LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        /**
         * Gets or sets the active log level to apply for log filtering
         */
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance === undefined || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.forEach(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
     * Clears the subscribers collection, returning the collection before modification
     */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
         * Gets the current subscriber count
         */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.write(JSON.stringify(json), level);
    };
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    Logger.error = function (err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    };
    return Logger;
}());

var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = 2 /* Warning */; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: true,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
        }
    };
    return LoggerImpl;
}());
/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "W7+7":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/odata/add-prop.js ***!
  \*********************************************/
/*! exports provided: addProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProp", function() { return addProp; });
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path);
        },
    });
}
//# sourceMappingURL=add-prop.js.map

/***/ }),

/***/ "YFzv":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/file-names.js ***!
  \**************************************************/
/*! exports provided: containsInvalidFileFolderChars, stripInvalidFileFolderChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsInvalidFileFolderChars", function() { return containsInvalidFileFolderChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripInvalidFileFolderChars", function() { return stripInvalidFileFolderChars; });
var InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
var InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise) {
    if (onPremise === void 0) { onPremise = false; }
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer, onPremise) {
    if (replacer === void 0) { replacer = ""; }
    if (onPremise === void 0) { onPremise = false; }
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}
//# sourceMappingURL=file-names.js.map

/***/ }),

/***/ "Zl34":
/*!********************************************!*\
  !*** ./node_modules/@pnp/odata/caching.js ***!
  \********************************************/
/*! exports provided: CachingOptions, CachingParserWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingOptions", function() { return CachingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingParserWrapper", function() { return CachingParserWrapper; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "zqEK");

var CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        if (storeName === void 0) { storeName = _pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].defaultCachingStore; }
        if (expiration === void 0) { expiration = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["dateAdd"])(new Date(), "second", _pnp_common__WEBPACK_IMPORTED_MODULE_0__["RuntimeConfig"].defaultCachingTimeoutSeconds); }
        this.key = key;
        this.storeName = storeName;
        this.expiration = expiration;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return CachingOptions.storage.local;
            }
            else {
                return CachingOptions.storage.session;
            }
        },
        enumerable: true,
        configurable: true
    });
    CachingOptions.storage = new _pnp_common__WEBPACK_IMPORTED_MODULE_0__["PnPClientStorage"]();
    return CachingOptions;
}());

var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        return this.parser.parse(response).then(function (r) { return _this.cacheData(r); });
    };
    CachingParserWrapper.prototype.cacheData = function (data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    };
    return CachingParserWrapper;
}());

//# sourceMappingURL=caching.js.map

/***/ }),

/***/ "aH1g":
/*!************************************************!*\
  !*** ./node_modules/@pnp/logging/listeners.js ***!
  \************************************************/
/*! exports provided: ConsoleListener, FunctionListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleListener", function() { return ConsoleListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionListener", function() { return FunctionListener; });
/**
 * Implementation of LogListener which logs to the console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (entry.data !== undefined) {
            try {
                msg.push(" Data: " + JSON.stringify(entry.data));
            }
            catch (e) {
                msg.push(" Data: Error in stringify of supplied data " + e);
            }
        }
        return msg.join("");
    };
    return ConsoleListener;
}());

/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());

//# sourceMappingURL=listeners.js.map

/***/ }),

/***/ "ayWD":
/*!**************************************************************************!*\
  !*** ./lib/webparts/teamsWebPart/components/TeamsWebPart.module.scss.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./TeamsWebPart.module.css */ "xCsd");
var styles = {
    teamsWebPart: 'teamsWebPart_9c692977',
    container: 'container_9c692977',
    row: 'row_9c692977',
    column: 'column_9c692977',
    'ms-Grid': 'ms-Grid_9c692977',
    title: 'title_9c692977',
    subTitle: 'subTitle_9c692977',
    description: 'description_9c692977',
    button: 'button_9c692977',
    label: 'label_9c692977'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dKLh":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/odata/queryable.js ***!
  \**********************************************/
/*! exports provided: cloneQueryableData, Queryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneQueryableData", function() { return cloneQueryableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return Queryable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "t3D1");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers */ "xbXq");



function cloneQueryableData(source) {
    var s = JSON.stringify(source, function (key, value) {
        switch (key) {
            case "query":
                return JSON.stringify(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value));
            case "batch":
                return "-";
            case "batchDependency":
                return "-";
            case "cachingOptions":
                return "-";
            case "clientFactory":
                return "-";
            case "parser":
                return "-";
            default:
                return value;
        }
    }, 0);
    var parsed = JSON.parse(s, function (key, value) {
        switch (key) {
            case "query":
                return new Map(JSON.parse(value));
            case "batch":
                return source.batch;
            case "batchDependency":
                return source.batchDependency;
            case "cachingOptions":
                return source.cachingOptions;
            case "clientFactory":
                return source.clientFactory;
            case "parser":
                return source.parser;
            default:
                return value;
        }
    });
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    if (source.options && source.options.body) {
        parsed.options.body = source.options.body;
    }
    return parsed;
}
var Queryable = /** @class */ (function () {
    function Queryable(dataSeed) {
        if (dataSeed === void 0) { dataSeed = {}; }
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new _parsers__WEBPACK_IMPORTED_MODULE_2__["ODataParser"](),
            query: new Map(),
            url: "",
            useCaching: false,
        }, cloneQueryableData(dataSeed));
    }
    Object.defineProperty(Queryable.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = Object.assign({}, cloneQueryableData(this.data), cloneQueryableData(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Gets the currentl url
    *
    */
    Queryable.prototype.toUrl = function () {
        return this.data.url;
    };
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
     */
    Queryable.prototype.concat = function (pathPart) {
        this.data.url += pathPart;
        return this;
    };
    Object.defineProperty(Queryable.prototype, "query", {
        /**
         * Provides access to the query builder for this url
         *
         */
        get: function () {
            return this.data.query;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    Queryable.prototype.configure = function (options) {
        Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["mergeOptions"])(this.data.options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["mergeOptions"])(this.data.options, o.data.options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!_pnp_common__WEBPACK_IMPORTED_MODULE_1__["RuntimeConfig"].globalCacheDisable) {
            this.data.useCaching = true;
            if (options !== undefined) {
                this.data.cachingOptions = options;
            }
        }
        return this;
    };
    Queryable.prototype.usingParser = function (parser) {
        this.data.parser = parser;
        return this;
    };
    /**
     * Allows you to set a request specific processing pipeline
     *
     * @param pipeline The set of methods, in order, to execute a given request
     */
    Queryable.prototype.withPipeline = function (pipeline) {
        this.data.pipes = pipeline.slice(0);
        return this;
    };
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    Queryable.prototype.append = function (pathPart) {
        this.data.url = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(this.data.url, pathPart);
    };
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    Queryable.prototype.inBatch = function (batch) {
        if (this.hasBatch) {
            throw Error("This query is already part of a batch.");
        }
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(batch)) {
            batch.track(this);
        }
        return this;
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    Queryable.prototype.addBatchDependency = function () {
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(Queryable.prototype, "hasBatch", {
        /**
         * Indicates if the current query has a batch associated
         *
         */
        get: function () {
            return Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(this.data.batch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "batch", {
        /**
         * The batch currently associated with this query or null
         *
         */
        get: function () {
            return this.hasBatch ? this.data.batch : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "parentUrl", {
        /**
         * Gets the parent url used when creating this instance
         *
         */
        get: function () {
            return this.data.parentUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clones this instance's data to target
     *
     * @param target Instance to which data is written
     * @param settings [Optional] Settings controlling how clone is applied
     */
    Queryable.prototype.cloneTo = function (target, settings) {
        if (settings === void 0) { settings = { includeBatch: true }; }
        target.data = Object.assign({}, cloneQueryableData(this.data), {
            batch: null,
            cloneParentCacheOptions: null,
            cloneParentWasCaching: false,
        }, cloneQueryableData(target.data));
        target.configureFrom(this);
        if (settings.includeBatch) {
            target.inBatch(this.batch);
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    };
    return Queryable;
}());

//# sourceMappingURL=queryable.js.map

/***/ }),

/***/ "dVsc":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/types.js ***!
  \********************************************/
/*! exports provided: _Webs, Webs, _Web, Web */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Webs", function() { return _Webs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Webs", function() { return Webs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Web", function() { return _Web; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return Web; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharepointqueryable */ "E6kk");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "hMpi");
/* harmony import */ var _odata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../odata */ "5dQz");
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../batch */ "8xxP");
/* harmony import */ var _utils_metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/metadata */ "z067");
/* harmony import */ var _sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sites */ "1jZ6");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../operations */ "UK2s");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../telemetry */ "h3gW");












var _Webs = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Webs, _super);
    function _Webs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    _Webs.prototype.add = function (title, url, description, template, language, inheritPermissions) {
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = "STS"; }
        if (language === void 0) { language = 1033; }
        if (inheritPermissions === void 0) { inheritPermissions = true; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({
                            "parameters": Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_7__["metadata"])("SP.WebCreationInformation"), {
                                Description: description,
                                Language: language,
                                Title: title,
                                Url: url,
                                UseSamePermissionsAsParentSite: inheritPermissions,
                                WebTemplate: template,
                            }),
                        });
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spPost"])(this.clone(Webs, "add"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Web(Object(_odata__WEBPACK_IMPORTED_MODULE_5__["odataUrlFrom"])(data).replace(/_api\/web\/?/i, "")),
                            }];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("ws.add")
    ], _Webs.prototype, "add", null);
    _Webs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["defaultPath"])("webs")
    ], _Webs);
    return _Webs;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["_SharePointQueryableCollection"]));

var Webs = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_Webs);
/**
 * Describes a web
 *
 */
var _Web = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Web, _super);
    function _Web() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["deleteable"])("w");
        return _this;
    }
    Object.defineProperty(_Web.prototype, "webs", {
        /**
         * Gets this web's subwebs
         *
         */
        get: function () {
            return Webs(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets this web's parent web and data
     *
     */
    _Web.prototype.getParentWeb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ParentWeb;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spGet"])(this.select("ParentWeb/Id").expand("ParentWeb"))];
                    case 1:
                        ParentWeb = (_a.sent()).ParentWeb;
                        return [2 /*return*/, ParentWeb ? Object(_sites__WEBPACK_IMPORTED_MODULE_8__["Site"])(this.parentUrl).openWebById(ParentWeb.Id) : null];
                }
            });
        });
    };
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    _Web.prototype.getSubwebsFilteredForCurrentUser = function (nWebTemplateFilter, nConfigurationFilter) {
        if (nWebTemplateFilter === void 0) { nWebTemplateFilter = -1; }
        if (nConfigurationFilter === void 0) { nConfigurationFilter = -1; }
        var o = this.clone(Webs, "getSubwebsFilteredForCurrentUser(nWebTemplateFilter=" + nWebTemplateFilter + ",nConfigurationFilter=" + nConfigurationFilter + ")");
        return _telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"].configure(o, "w.getSubwebsFilteredForCurrentUser");
    };
    Object.defineProperty(_Web.prototype, "allProperties", {
        /**
         * Allows access to the web's all properties collection
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"].configure(this.clone(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["SharePointQueryableInstance"], "allproperties"), "w.allprops");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Web.prototype, "webinfos", {
        /**
         * Gets a collection of WebInfos for this web's subwebs
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["SharePointQueryableCollection"])(this, "webinfos"), "w.webinfos");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    _Web.prototype.createBatch = function () {
        return new _batch__WEBPACK_IMPORTED_MODULE_6__["SPBatch"](this.parentUrl);
    };
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    _Web.prototype.update = function (properties) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var postBody, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_7__["metadata"])("SP.Web"), properties), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spPost"])(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, web: this }];
                }
            });
        });
    };
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    _Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        var postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({
            backgroundImageUrl: backgroundImageUrl,
            colorPaletteUrl: colorPaletteUrl,
            fontSchemeUrl: fontSchemeUrl,
            shareGenerated: shareGenerated,
        });
        return Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spPost"])(this.clone(Web, "applytheme"), postBody);
    };
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    _Web.prototype.applyWebTemplate = function (template) {
        var q = this.clone(Web, "applywebtemplate");
        q.concat("(webTemplate='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_10__["escapeQueryStrValue"])(template) + "')");
        return Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spPost"])(q);
    };
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    _Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
        if (language === void 0) { language = 1033; }
        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
        var path = "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")";
        return _telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["SharePointQueryableCollection"])(this, path), "w.availableWebTemplates");
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Web.prototype.getChanges = function (query) {
        var postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({ "query": Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_7__["metadata"])("SP.ChangeQuery"), query) });
        return Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spPost"])(this.clone(Web, "getchanges"), postBody);
    };
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    _Web.prototype.mapToIcon = function (filename, size, progId) {
        if (size === void 0) { size = 0; }
        if (progId === void 0) { progId = ""; }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spGet"])(this.clone(Web, "maptoicon(filename='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_10__["escapeQueryStrValue"])(filename) + "', progid='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_10__["escapeQueryStrValue"])(progId) + "', size=" + size + ")"));
    };
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    _Web.prototype.getStorageEntity = function (key) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spGet"])(this.clone(Web, "getStorageEntity('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_10__["escapeQueryStrValue"])(key) + "')"));
    };
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    _Web.prototype.setStorageEntity = function (key, value, description, comments) {
        if (description === void 0) { description = ""; }
        if (comments === void 0) { comments = ""; }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spPost"])(this.clone(Web, "setStorageEntity"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({
            comments: comments,
            description: description,
            key: key,
            value: value,
        }));
    };
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    _Web.prototype.removeStorageEntity = function (key) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_9__["spPost"])(this.clone(Web, "removeStorageEntity('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_10__["escapeQueryStrValue"])(key) + "')"));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.getParentWeb")
    ], _Web.prototype, "getParentWeb", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.update")
    ], _Web.prototype, "update", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.applyTheme")
    ], _Web.prototype, "applyTheme", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.applyWebTemplate")
    ], _Web.prototype, "applyWebTemplate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.getChanges")
    ], _Web.prototype, "getChanges", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.mapToIcon")
    ], _Web.prototype, "mapToIcon", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.getStorageEntity")
    ], _Web.prototype, "getStorageEntity", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.setStorageEntity")
    ], _Web.prototype, "setStorageEntity", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_11__["tag"])("w.removeStorageEntity")
    ], _Web.prototype, "removeStorageEntity", null);
    _Web = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_4__["defaultPath"])("_api/web")
    ], _Web);
    return _Web;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["_SharePointQueryableInstance"]));

var Web = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_Web);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "eVhm":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/common/collections.js ***!
  \*************************************************/
/*! exports provided: objectToMap, mergeMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToMap", function() { return objectToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMaps", function() { return mergeMaps; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "97IE");

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if (o !== undefined && o !== null) {
        return new Map(objectEntries(o));
    }
    return new Map();
}
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
function mergeMaps(target) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < maps.length; i++) {
        maps[i].forEach(function (v, k) {
            target.set(k, v);
        });
    }
    return target;
}
//# sourceMappingURL=collections.js.map

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "h3gW":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/telemetry.js ***!
  \*******************************************/
/*! exports provided: tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/odata */ "xT8B");



/**
 * Includes this method name in the X-ClientService-ClientTag used to record pnpjs usage
 *
 * @param name Method name, displayed in the
 */
function tag(name) {
    return function (target, key, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    this.configure(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "X-PnPjs-Tracking": name }));
                    return [2 /*return*/, originalMethod.apply(this, args)];
                });
            });
        };
        return descriptor;
    };
}
tag.getClientTag = function (h, deleteFromCollection) {
    if (deleteFromCollection === void 0) { deleteFromCollection = true; }
    if (h.has("X-PnPjs-Tracking")) {
        var methodName = h.get("X-PnPjs-Tracking");
        if (deleteFromCollection) {
            h.delete("X-PnPjs-Tracking");
        }
        if (!Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["stringIsNullOrEmpty"])(methodName)) {
            return methodName;
        }
    }
    return "";
};
tag.configure = function (o, name) {
    return o.configure(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "X-PnPjs-Tracking": name }));
};
tag.isTagged = function (o) {
    return o.data.options.headers && o.data.options.headers["X-PnPjs-Tracking"];
};
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "hMpi":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/*! exports provided: defaultPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPath", function() { return defaultPath; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/**
 * Class Decorators
 */

/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.call(this, args[0], args.length > 1 && args[1] !== undefined ? args[1] : path) || this;
            }
            return class_1;
        }(target));
    };
}
// TODO::?
// performance tracking method decorator
// redirect to graph api
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "hy0S":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/types.js ***!
  \*********************************************/
/*! exports provided: _Lists, Lists, _List, List, RenderListDataOptions, ControlMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Lists", function() { return _Lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lists", function() { return Lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_List", function() { return _List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderListDataOptions", function() { return RenderListDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMode", function() { return ControlMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharepointqueryable */ "E6kk");
/* harmony import */ var _odata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../odata */ "5dQz");
/* harmony import */ var _utils_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/metadata */ "z067");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "hMpi");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations */ "UK2s");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../telemetry */ "h3gW");
/* harmony import */ var _utils_toResourcePath__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/toResourcePath */ "t8hP");











var _Lists = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Lists, _super);
    function _Lists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    _Lists.prototype.getById = function (id) {
        return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(List(this).concat("('" + id + "')"), "ls.getById");
    };
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    _Lists.prototype.getByTitle = function (title) {
        return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(List(this, "getByTitle('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(title) + "')"), "ls.getByTitle");
    };
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    _Lists.prototype.add = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var addSettings, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addSettings = Object.assign({
                            "AllowContentTypes": enableContentTypes,
                            "BaseTemplate": template,
                            "ContentTypesEnabled": enableContentTypes,
                            "Description": desc,
                            "Title": title,
                        }, Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.List"), additionalSettings);
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this, Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])(addSettings))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, list: this.getByTitle(addSettings.Title) }];
                }
            });
        });
    };
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    _Lists.prototype.ensure = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var addOrUpdateSettings, list, data, e_1, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hasBatch) {
                            throw Error("The ensure list method is not supported for use in a batch.");
                        }
                        addOrUpdateSettings = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(additionalSettings, { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes }, true);
                        list = this.getByTitle(addOrUpdateSettings.Title);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        // this will throw if the list doesn't exist
                        return [4 /*yield*/, list.select("Title")()];
                    case 2:
                        // this will throw if the list doesn't exist
                        _a.sent();
                        return [4 /*yield*/, list.update(addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, { created: false, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 5:
                        data = _a.sent();
                        return [2 /*return*/, { created: true, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    _Lists.prototype.ensureSiteAssetsLibrary = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Lists, "ensuresiteassetslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(Object(_odata__WEBPACK_IMPORTED_MODULE_4__["odataUrlFrom"])(json))];
                }
            });
        });
    };
    /**
     * Gets a list that is the default location for wiki pages.
     */
    _Lists.prototype.ensureSitePagesLibrary = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Lists, "ensuresitepageslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(Object(_odata__WEBPACK_IMPORTED_MODULE_4__["odataUrlFrom"])(json))];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("ls.add")
    ], _Lists.prototype, "add", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("ls.ensure")
    ], _Lists.prototype, "ensure", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("ls.ensureSiteAssetsLibrary")
    ], _Lists.prototype, "ensureSiteAssetsLibrary", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("ls.ensureSitePagesLibrary")
    ], _Lists.prototype, "ensureSitePagesLibrary", null);
    _Lists = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("lists")
    ], _Lists);
    return _Lists;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["_SharePointQueryableCollection"]));

var Lists = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_Lists);
var _List = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_List, _super);
    function _List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["deleteableWithETag"])("l");
        return _this;
    }
    Object.defineProperty(_List.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this list
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["SharePointQueryable"])(this, "EffectiveBasePermissions"), "l.effectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "eventReceivers", {
        /**
         * Gets the event receivers attached to this list
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["SharePointQueryableCollection"])(this, "EventReceivers"), "l.eventReceivers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "relatedFields", {
        /**
         * Gets the related fields of this list
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["SharePointQueryable"])(this, "getRelatedFields"), "l.relatedFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "informationRightsManagementSettings", {
        /**
         * Gets the IRM settings for this list
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["SharePointQueryable"])(this, "InformationRightsManagementSettings"), "l.informationRightsManagementSettings");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    _List.prototype.update = function (properties, eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var postBody, data, list;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.List"), properties), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this, postBody)];
                    case 1:
                        data = _a.sent();
                        list = this;
                        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(properties, "Title")) {
                            list = this.getParent(List, this.parentUrl, "getByTitle('" + properties.Title + "')");
                        }
                        return [2 /*return*/, {
                                data: data,
                                list: list,
                            }];
                }
            });
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    _List.prototype.getChanges = function (query) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(List, "getchanges"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({ query: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.ChangeQuery"), query) }));
    };
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    _List.prototype.getItemsByCAMLQuery = function (query) {
        var expands = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expands[_i - 1] = arguments[_i];
        }
        var q = this.clone(List, "getitems");
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(q.expand.apply(q, expands), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({ query: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.CamlQuery"), query) }));
    };
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    _List.prototype.getListItemChangesSinceToken = function (query) {
        var o = this.clone(List, "getlistitemchangessincetoken").usingParser({ parse: function (r) { return r.text(); } });
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(o, Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({ "query": Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.ChangeLogItemQuery"), query) }));
    };
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _List.prototype.recycle = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(List, "recycle"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(data, "Recycle") ? data.Recycle : data];
                }
            });
        });
    };
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    _List.prototype.renderListData = function (viewXml) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(List, "renderlistdata(@viewXml)");
                        q.query.set("@viewXml", "'" + viewXml + "'");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(q)];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(data, "RenderListData") ? data.RenderListData : data)];
                }
            });
        });
    };
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParameters The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param queryParams Allows setting of query parameters
     */
    _List.prototype.renderListDataAsStream = function (parameters, overrideParameters, queryParams) {
        if (overrideParameters === void 0) { overrideParameters = null; }
        if (queryParams === void 0) { queryParams = new Map(); }
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(parameters, "RenderOptions") && Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isArray"])(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce(function (v, c) { return v + c; });
        }
        var postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({
            overrideParameters: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.RenderListDataOverrideParameters"), overrideParameters),
            parameters: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.RenderListDataParameters"), parameters),
        });
        var clone = this.clone(List, "RenderListDataAsStream", true);
        if (queryParams && queryParams.size > 0) {
            queryParams.forEach(function (v, k) { return clone.query.set(k, v); });
        }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(clone, postBody);
    };
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    _List.prototype.renderListFormData = function (itemId, formId, mode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(List, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode='" + mode + "')"))];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(data, "RenderListFormData") ? data.RenderListFormData : data)];
                }
            });
        });
    };
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    _List.prototype.reserveListItemId = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(List, "reservelistitemid"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(data, "ReserveListItemId") ? data.ReserveListItemId : data];
                }
            });
        });
    };
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    _List.prototype.getListItemEntityTypeFullName = function () {
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").get().then(function (o) { return o.ListItemEntityTypeFullName; });
    };
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    _List.prototype.addValidateUpdateItemUsingPath = function (formValues, decodedUrl, bNewDocumentUpdate, checkInComment, additionalProps) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var addProps, res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addProps = {
                            FolderPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_10__["toResourcePath"])(decodedUrl),
                        };
                        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(additionalProps)) {
                            if (additionalProps.leafName) {
                                addProps.LeafName = Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_10__["toResourcePath"])(additionalProps.leafName);
                            }
                            if (additionalProps.objectType) {
                                addProps.UnderlyingObjectType = additionalProps.objectType;
                            }
                        }
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(List, "AddValidateUpdateItemUsingPath()"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({
                                bNewDocumentUpdate: bNewDocumentUpdate,
                                checkInComment: checkInComment,
                                formValues: formValues,
                                listItemCreateInfo: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_5__["metadata"])("SP.ListItemCreationInformationUsingPath"), addProps),
                            }))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(res, "AddValidateUpdateItemUsingPath") ? res.AddValidateUpdateItemUsingPath : res];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.update")
    ], _List.prototype, "update", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.getChanges")
    ], _List.prototype, "getChanges", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.CAMLQuery")
    ], _List.prototype, "getItemsByCAMLQuery", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.ChangesSinceToken")
    ], _List.prototype, "getListItemChangesSinceToken", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.recycle")
    ], _List.prototype, "recycle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.renderListData")
    ], _List.prototype, "renderListData", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.AsStream")
    ], _List.prototype, "renderListDataAsStream", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.renderListFormData")
    ], _List.prototype, "renderListFormData", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.reserveListItemId")
    ], _List.prototype, "reserveListItemId", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.getListItemEntityTypeFullName")
    ], _List.prototype, "getListItemEntityTypeFullName", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_9__["tag"])("l.addValidateUpdateItemUsingPath")
    ], _List.prototype, "addValidateUpdateItemUsingPath", null);
    return _List;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["_SharePointQueryableInstance"]));

var List = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "hyGn":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/common/libconfig.js ***!
  \***********************************************/
/*! exports provided: setup, RuntimeConfigImpl, RuntimeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeConfigImpl", function() { return RuntimeConfigImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeConfig", function() { return RuntimeConfig; });
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections */ "eVhm");

function setup(config) {
    RuntimeConfig.assign(config);
}
// lable mapping for known config values
var s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
var RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl(_v) {
        if (_v === void 0) { _v = new Map(); }
        this._v = _v;
        // setup defaults
        this._v.set(s[0], "session");
        this._v.set(s[1], 60);
        this._v.set(s[2], false);
        this._v.set(s[3], false);
        this._v.set(s[4], 750);
        this._v.set(s[5], null);
        this._v.set(s[6], false);
    }
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    RuntimeConfigImpl.prototype.assign = function (config) {
        this._v = Object(_collections__WEBPACK_IMPORTED_MODULE_0__["mergeMaps"])(this._v, Object(_collections__WEBPACK_IMPORTED_MODULE_0__["objectToMap"])(config));
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get(s[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get(s[1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get(s[2]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get(s[3]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get(s[4]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get(s[5]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "ie11", {
        get: function () {
            return this.get(s[6]);
        },
        enumerable: true,
        configurable: true
    });
    return RuntimeConfigImpl;
}());

var _runtimeConfig = new RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;
//# sourceMappingURL=libconfig.js.map

/***/ }),

/***/ "i/Bq":
/*!**********************************************************!*\
  !*** ./lib/webparts/teamsWebPart/TeamsWebPartWebPart.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var TeamsWebPartWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! TeamsWebPartWebPartStrings */ "QY3N");
/* harmony import */ var TeamsWebPartWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(TeamsWebPartWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TeamsWebPart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TeamsWebPart */ "oo8p");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TeamsWebPartWebPart = /** @class */ (function (_super) {
    __extends(TeamsWebPartWebPart, _super);
    function TeamsWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamsWebPartWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, _super.prototype.onInit.call(this).then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            _pnp_sp__WEBPACK_IMPORTED_MODULE_7__["sp"].setup({
                                spfxContext: this.context
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    TeamsWebPartWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TeamsWebPart__WEBPACK_IMPORTED_MODULE_6__["default"], {
            description: this.properties.description,
            _context: this.context,
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    TeamsWebPartWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(TeamsWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    TeamsWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: TeamsWebPartWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: TeamsWebPartWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('description', {
                                    label: TeamsWebPartWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TeamsWebPartWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (TeamsWebPartWebPart);


/***/ }),

/***/ "ilAS":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/sites/types.js ***!
  \*********************************************/
/*! exports provided: _Site, Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Site", function() { return _Site; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharepointqueryable */ "E6kk");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "hMpi");
/* harmony import */ var _webs_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webs/types */ "dVsc");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _odata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../odata */ "5dQz");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations */ "UK2s");
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../batch */ "8xxP");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../telemetry */ "h3gW");
/* harmony import */ var _utils_metadata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/metadata */ "z067");
/* harmony import */ var _utils_extractweburl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/extractweburl */ "tSEd");
/* harmony import */ var _splibconfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../splibconfig */ "0p/9");














var _Site = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Site, _super);
    function _Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Site.prototype, "rootWeb", {
        /**
        * Gets the root web of the site collection
        *
        */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_webs_types__WEBPACK_IMPORTED_MODULE_3__["Web"])(this, "rootweb"), "si.rootWeb");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    _Site.prototype.getRootWeb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var web;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootWeb.select("Url")()];
                    case 1:
                        web = _a.sent();
                        return [2 /*return*/, _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_webs_types__WEBPACK_IMPORTED_MODULE_3__["Web"])(web.Url), "si.getRootWeb")];
                }
            });
        });
    };
    /**
    * Gets the context information for this site collection
    */
    _Site.prototype.getContextInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var q, data, info;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Site(this.parentUrl, "_api/contextinfo"), "si.getContextInfo");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(q)];
                    case 1:
                        data = _a.sent();
                        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_4__["hOP"])(data, "GetContextWebInformation")) {
                            info = data.GetContextWebInformation;
                            info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                            return [2 /*return*/, info];
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    _Site.prototype.createBatch = function () {
        return new _batch__WEBPACK_IMPORTED_MODULE_8__["SPBatch"](this.parentUrl);
    };
    /**
    * Deletes the current site
    *
    */
    _Site.prototype.delete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var site, q;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(Site, "").select("Id")()];
                    case 1:
                        site = _a.sent();
                        q = _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Site(this.parentUrl, "_api/SPSiteManager/Delete"), "si.delete");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(q, Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({ siteId: site.Id }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    _Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryable"])("", "_api/sp.web.getdocumentlibraries(@v)"), "si.getDocumentLibraries");
                        q.query.set("@v", "'" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_9__["escapeQueryStrValue"])(absoluteWebUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_4__["hOP"])(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data];
                }
            });
        });
    };
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    _Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var q, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryable"])("", "_api/sp.web.getweburlfrompageurl(@v)"), "si.getWebUrlFromPageUrl");
                        q.query.set("@v", "'" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_9__["escapeQueryStrValue"])(absolutePageUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_4__["hOP"])(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data];
                }
            });
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Site.prototype.getChanges = function (query) {
        var postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({ "query": Object(_pnp_common__WEBPACK_IMPORTED_MODULE_4__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_11__["metadata"])("SP.ChangeQuery"), query) });
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(_webs_types__WEBPACK_IMPORTED_MODULE_3__["Web"], "getchanges"), postBody);
    };
    /**
    * Opens a web by id (using POST)
    *
    * @param webId The GUID id of the web to open
    */
    _Site.prototype.openWebById = function (webId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Site, "openWebById('" + webId + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Object(_webs_types__WEBPACK_IMPORTED_MODULE_3__["Web"])(Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_12__["extractWebUrl"])(Object(_odata__WEBPACK_IMPORTED_MODULE_6__["odataUrlFrom"])(data))),
                            }];
                }
            });
        });
    };
    /**
     * Creates a Modern communication site.
     *
     * @param title The title of the site to create
     * @param lcid The language to use for the site. If not specified will default to 1033 (English).
     * @param shareByEmailEnabled If set to true, it will enable sharing files via Email. By default it is set to false
     * @param url The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site.
     * @param description The description of the communication site.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param siteDesignId The Guid of the site design to be used.
     *                     You can use the below default OOTB GUIDs:
     *                     Topic: 00000000-0000-0000-0000-000000000000
     *                     Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
     *                     Blank: f6cc5403-0d63-442e-96c0-285923709ffc
     * @param hubSiteId The id of the hub site to which the new site should be associated
     * @param owner Optional owner value, required if executing the method in app only mode
     */
    _Site.prototype.createCommunicationSite = function (title, lcid, shareByEmailEnabled, url, description, classification, siteDesignId, hubSiteId, owner) {
        if (lcid === void 0) { lcid = 1033; }
        if (shareByEmailEnabled === void 0) { shareByEmailEnabled = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.createCommunicationSiteFromProps({
                        Classification: classification,
                        Description: description,
                        HubSiteId: hubSiteId,
                        Lcid: lcid,
                        Owner: owner,
                        ShareByEmailEnabled: shareByEmailEnabled,
                        SiteDesignId: siteDesignId,
                        Title: title,
                        Url: url,
                    })];
            });
        });
    };
    _Site.prototype.createCommunicationSiteFromProps = function (props) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var p, postBody;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                p = Object.assign({}, {
                    Classification: "",
                    Description: "",
                    HubSiteId: _splibconfig__WEBPACK_IMPORTED_MODULE_13__["emptyGuid"],
                    Lcid: 1033,
                    ShareByEmailEnabled: false,
                    SiteDesignId: _splibconfig__WEBPACK_IMPORTED_MODULE_13__["emptyGuid"],
                    WebTemplate: "SITEPAGEPUBLISHING#0",
                    WebTemplateExtensionId: _splibconfig__WEBPACK_IMPORTED_MODULE_13__["emptyGuid"],
                }, props);
                postBody = Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                    "request": Object(_pnp_common__WEBPACK_IMPORTED_MODULE_4__["assign"])(Object(_utils_metadata__WEBPACK_IMPORTED_MODULE_11__["metadata"])("Microsoft.SharePoint.Portal.SPSiteCreationRequest"), p),
                });
                return [2 /*return*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Site(Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_12__["extractWebUrl"])(this.toUrl()), "/_api/SPSiteManager/Create"), postBody)];
            });
        });
    };
    /**
    * Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens
    *
    * @param displayName The title or display name of the Modern team site to be created
    * @param alias Alias of the underlying Office 365 Group
    * @param isPublic Defines whether the Office 365 Group will be public (default), or private.
    * @param lcid The language to use for the site. If not specified will default to English (1033).
    * @param description The description of the site to be created.
    * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
    * @param owners The Owners of the site to be created
    */
    _Site.prototype.createModernTeamSite = function (displayName, alias, isPublic, lcid, description, classification, owners, hubSiteId, siteDesignId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.createModernTeamSiteFromProps({
                        alias: alias,
                        classification: classification,
                        description: description,
                        displayName: displayName,
                        hubSiteId: hubSiteId,
                        isPublic: isPublic,
                        lcid: lcid,
                        owners: owners,
                        siteDesignId: siteDesignId,
                    })];
            });
        });
    };
    _Site.prototype.createModernTeamSiteFromProps = function (props) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var p, postBody;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                p = Object.assign({}, {
                    classification: "",
                    description: "",
                    hubSiteId: _splibconfig__WEBPACK_IMPORTED_MODULE_13__["emptyGuid"],
                    isPublic: true,
                    lcid: 1033,
                    owners: [],
                }, props);
                postBody = {
                    alias: p.alias,
                    displayName: p.displayName,
                    isPublic: p.isPublic,
                    optionalParams: {
                        Classification: p.classification,
                        CreationOptions: {
                            "results": ["SPSiteLanguage:" + p.lcid, "HubSiteId:" + p.hubSiteId],
                        },
                        Description: p.description,
                        Owners: {
                            "results": p.owners,
                        },
                    },
                };
                if (p.siteDesignId) {
                    postBody.optionalParams.CreationOptions.results.push("implicit_formula_292aa8a00786498a87a5ca52d9f4214a_" + p.siteDesignId);
                }
                return [2 /*return*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Site(Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_12__["extractWebUrl"])(this.toUrl()), "/_api/GroupSiteManager/CreateGroupEx"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])(postBody))];
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("si.getChanges")
    ], _Site.prototype, "getChanges", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("si.openWebById")
    ], _Site.prototype, "openWebById", null);
    _Site = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["defaultPath"])("_api/site")
    ], _Site);
    return _Site;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableInstance"]));

var Site = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Site);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "lYrR":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/index.js ***!
  \*********************************************/
/*! exports provided: Item, Items, ItemVersion, ItemVersions, PagedItemCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "NTTg");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "3DT9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["Item"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["Items"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemVersion", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["ItemVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemVersions", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["ItemVersions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedItemCollection", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["PagedItemCollection"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "lzYu":
/*!******************************************************************!*\
  !*** ./node_modules/@pnp/common/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "oo8p":
/*!**************************************************************!*\
  !*** ./lib/webparts/teamsWebPart/components/TeamsWebPart.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamsWebPart.module.scss */ "ayWD");
/* harmony import */ var _Helpers_PnpJSHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Helpers/PnpJSHelper */ "rvRX");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var TeamsWebPart = /** @class */ (function (_super) {
    __extends(TeamsWebPart, _super);
    function TeamsWebPart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            titolo: '',
            autore: '',
            prezzo: '',
            numero_pagine: ''
        };
        _this.handleChangeTitolo = _this.handleChangeTitolo.bind(_this);
        _this.handleChangeAutore = _this.handleChangeAutore.bind(_this);
        _this.handleChangePrezzo = _this.handleChangePrezzo.bind(_this);
        _this.handleChangePagine = _this.handleChangePagine.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    TeamsWebPart.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _Helpers_PnpJSHelper__WEBPACK_IMPORTED_MODULE_2__["SPHelper"].readListItem(this.props._context.sdks.microsoftTeams.context.channelRelativeUrl)];
                    case 1:
                        item = _a.sent();
                        if (item != undefined)
                            this.setState({ titolo: item.TitoloLibro, autore: item.Autore, prezzo: item.Prezzo, numero_pagine: item.NumeroPagine });
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamsWebPart.prototype.handleChangeTitolo = function (event) {
        this.setState({ titolo: event.target.value });
    };
    TeamsWebPart.prototype.handleChangeAutore = function (event) {
        this.setState({ autore: event.target.value });
    };
    TeamsWebPart.prototype.handleChangePrezzo = function (event) {
        this.setState({ prezzo: event.target.value });
    };
    TeamsWebPart.prototype.handleChangePagine = function (event) {
        this.setState({ numero_pagine: event.target.value });
    };
    TeamsWebPart.prototype.handleSubmit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert('E\' stato inserito il libro: ' + this.state.titolo + ', Autore: ' + this.state.autore + ', Prezzo ' +
                            this.state.prezzo + ' Euro, Numero Pagine: ' + this.state.numero_pagine);
                        event.preventDefault();
                        return [4 /*yield*/, _Helpers_PnpJSHelper__WEBPACK_IMPORTED_MODULE_2__["SPHelper"].postListItem(this.state.titolo, this.state.autore, this.state.prezzo, this.state.numero_pagine, this.props._context.sdks.microsoftTeams.context.channelRelativeUrl)];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamsWebPart.prototype.render = function () {
        var title = '';
        var subTitle = '';
        var siteTabTitle = '';
        if (this.props._context.sdks.microsoftTeams) {
            // We have teams context for the web part
            title = "Welcome to Teams!";
            subTitle = "Building custom enterprise tabs for your business.";
            siteTabTitle = "We are in the context of following Team: " + this.props._context.sdks.microsoftTeams.context.teamName;
        }
        else {
            // We are rendered in normal SharePoint context
            title = "Welcome to SharePoint!";
            subTitle = "Customize SharePoint experiences using Web Parts.";
            siteTabTitle = "We are in the context of following site: " + this.props._context.pageContext.web.title;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].teamsWebPart },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].column },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title }, title),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subTitle }, subTitle),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: _TeamsWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description }, siteTabTitle),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.handleSubmit },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Inserisci un libro:"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null)),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                                "Titolo Libro:",
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "titolo", type: "text", value: this.state.titolo, onChange: this.handleChangeTitolo })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                                "Autore:",
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "autore", type: "text", value: this.state.autore, onChange: this.handleChangeAutore })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                                "Prezzo:",
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "prezzo", type: "number", value: this.state.prezzo, onChange: this.handleChangePrezzo })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                                "Numero Pagine:",
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "numero_pagine", type: "number", value: this.state.numero_pagine, onChange: this.handleChangePagine })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "submit", value: "Salva" })))))));
    };
    return TeamsWebPart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TeamsWebPart);


/***/ }),

/***/ "pG6f":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/odata/invokable-binder.js ***!
  \*****************************************************/
/*! exports provided: invokableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokableFactory", function() { return invokableFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "t3D1");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _invokable_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invokable-extensions */ "01TU");



var invokableBinder = function (invoker) { return function (constructor) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var factory = function (as) {
            var r = Object.assign(function () {
                var ags = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    ags[_i] = arguments[_i];
                }
                return invoker.apply(r, ags);
            }, new (constructor.bind.apply(constructor, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([void 0], as)))());
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        if (_pnp_common__WEBPACK_IMPORTED_MODULE_1__["RuntimeConfig"].ie11) {
            return factory(args);
        }
        else {
            return new Proxy(Object(_invokable_extensions__WEBPACK_IMPORTED_MODULE_2__["applyFactoryExtensions"])(factory, args), {
                apply: function (target, _thisArg, argArray) {
                    return Object(_invokable_extensions__WEBPACK_IMPORTED_MODULE_2__["extensionOrDefault"])("apply", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.apply(a[0], a[1], a[2]);
                    }, target, _thisArg, argArray);
                },
                get: function (target, p, receiver) {
                    return Object(_invokable_extensions__WEBPACK_IMPORTED_MODULE_2__["extensionOrDefault"])("get", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.get(a[0], a[1], a[2]);
                    }, target, p, receiver);
                },
                has: function (target, p) {
                    return Object(_invokable_extensions__WEBPACK_IMPORTED_MODULE_2__["extensionOrDefault"])("has", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.has(a[0], a[1]);
                    }, target, p);
                },
                set: function (target, p, value, receiver) {
                    return Object(_invokable_extensions__WEBPACK_IMPORTED_MODULE_2__["extensionOrDefault"])("set", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.set(a[0], a[1], a[2], a[3]);
                    }, target, p, value, receiver);
                },
            });
        }
    };
}; };
var invokableFactory = invokableBinder(function (options) {
    return this.defaultAction(options);
});
//# sourceMappingURL=invokable-binder.js.map

/***/ }),

/***/ "pGs8":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/files/item.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _items_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types */ "3DT9");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "qfcF");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_items_types__WEBPACK_IMPORTED_MODULE_1__["_Item"], "file", _types__WEBPACK_IMPORTED_MODULE_2__["File"], "file");
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "q1Lp":
/*!***********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/escapeQueryStrValue.js ***!
  \***********************************************************/
/*! exports provided: escapeQueryStrValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeQueryStrValue", function() { return escapeQueryStrValue; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/logging */ "B3L+");


function escapeQueryStrValue(value) {
    if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["stringIsNullOrEmpty"])(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, function (match, labelName, v) {
            _pnp_logging__WEBPACK_IMPORTED_MODULE_1__["Logger"].write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + v, 0 /* Verbose */);
            return "!" + labelName + "::" + encodeURIComponent(v.replace(/\'/ig, "''"));
        });
    }
    else {
        return encodeURIComponent(value.replace(/\'/ig, "''"));
    }
}
//# sourceMappingURL=escapeQueryStrValue.js.map

/***/ }),

/***/ "qfcF":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/files/types.js ***!
  \*********************************************/
/*! exports provided: _Files, Files, _File, File, _Versions, Versions, _Version, Version, CheckinType, MoveOperations, TemplateFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Files", function() { return _Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_File", function() { return _File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Versions", function() { return _Versions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Versions", function() { return Versions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Version", function() { return _Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinType", function() { return CheckinType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveOperations", function() { return MoveOperations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFileType", function() { return TemplateFileType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharepointqueryable */ "E6kk");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items */ "lYrR");
/* harmony import */ var _odata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../odata */ "5dQz");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "hMpi");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations */ "UK2s");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");
/* harmony import */ var _utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/extractweburl */ "tSEd");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../telemetry */ "h3gW");
/* harmony import */ var _utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/toResourcePath */ "t8hP");












/**
 * Describes a collection of File objects
 *
 */
var _Files = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Files, _super);
    function _Files() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    _Files.prototype.getByName = function (name) {
        if (/\%#/.test(name)) {
            throw Error("For file names containing % or # please use web.getFileByServerRelativePath");
        }
        return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(File(this).concat("('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(name) + "')"), "fis.getByName");
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The file contents blob.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @returns The new File and the raw response.
     */
    _Files.prototype.add = function (url, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(url) + "')"), {
                            body: content,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: this.getByName(url),
                            }];
                }
            });
        });
    };
    /**
     * Adds a file using the pound percent safe methods
     *
     * @param url Excoded url of the file
     * @param content The file content
     * @param parameters Additional parameters to control method behavior
     */
    _Files.prototype.addUsingPath = function (url, content, parameters) {
        if (parameters === void 0) { parameters = { Overwrite: false }; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, resp;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = ["AddUsingPath(decodedurl='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(url) + "'"];
                        if (parameters) {
                            if (parameters.Overwrite) {
                                path.push(",Overwrite=true");
                            }
                            if (parameters.AutoCheckoutOnInvalidData) {
                                path.push(",AutoCheckoutOnInvalidData=true");
                            }
                            if (!Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["stringIsNullOrEmpty"])(parameters.XorHash)) {
                                path.push(",XorHash=" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(parameters.XorHash));
                            }
                        }
                        path.push(")");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Files(this, path.join("")), { body: content })];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, {
                                data: resp,
                                file: File(Object(_odata__WEBPACK_IMPORTED_MODULE_5__["odataUrlFrom"])(resp)),
                            }];
                }
            });
        });
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The Blob file content to add
     * @param progress A callback function which can be used to track the progress of the upload
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     * @returns The new File and the raw response.
     */
    _Files.prototype.addChunked = function (url, content, progress, shouldOverWrite, chunkSize) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        if (chunkSize === void 0) { chunkSize = 10485760; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var file;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Files, "add(overwrite=" + shouldOverWrite + ",url='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(url) + "')", false))];
                    case 1:
                        _a.sent();
                        file = this.getByName(url);
                        return [4 /*yield*/, file.setContentChunked(content, progress, chunkSize)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    _Files.prototype.addTemplateFile = function (fileUrl, templateFileType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Files, "addTemplateFile(urloffile='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(fileUrl) + "',templatefiletype=" + templateFileType + ")", false))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: File(Object(_odata__WEBPACK_IMPORTED_MODULE_5__["odataUrlFrom"])(response)),
                            }];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fis.add")
    ], _Files.prototype, "add", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fis.addUsingPath")
    ], _Files.prototype, "addUsingPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fis.addChunked")
    ], _Files.prototype, "addChunked", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fis.addTemplateFile")
    ], _Files.prototype, "addTemplateFile", null);
    _Files = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("files")
    ], _Files);
    return _Files;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableCollection"]));

var Files = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Files);
/**
 * Describes a single File instance
 *
 */
var _File = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_File, _super);
    function _File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["deleteableWithETag"])("fi");
        return _this;
    }
    Object.defineProperty(_File.prototype, "listItemAllFields", {
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["SharePointQueryableInstance"])(this, "listItemAllFields"), "fi.listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_File.prototype, "versions", {
        /**
         * Gets a collection of versions
         *
         */
        get: function () {
            return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Versions(this), "fi.versions");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    _File.prototype.approve = function (comment) {
        if (comment === void 0) { comment = ""; }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "approve(comment='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(comment) + "')"));
    };
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    _File.prototype.cancelUpload = function (uploadId) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "cancelUpload(uploadId=guid'" + uploadId + "')", false));
    };
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    _File.prototype.checkin = function (comment, checkinType) {
        if (comment === void 0) { comment = ""; }
        if (checkinType === void 0) { checkinType = CheckinType.Major; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "checkin(comment='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(comment) + "',checkintype=" + checkinType + ")"));
    };
    /**
     * Checks out the file from a document library.
     */
    _File.prototype.checkout = function () {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "checkout"));
    };
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    _File.prototype.copyTo = function (url, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "copyTo(strnewurl='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(url) + "',boverwrite=" + shouldOverWrite + ")"));
    };
    /**
     * Copies the file by path to destination path.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    _File.prototype.copyByPath = function (destUrl, shouldOverWrite, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(File(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFileByPath(overwrite=@a1)?@a1=" + shouldOverWrite), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({
                                destPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["isUrlAbsolute"])(destUrl) ? destUrl : "" + hostUrl + destUrl),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["isUrlAbsolute"])(srcUrl) ? srcUrl : "" + hostUrl + srcUrl),
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    _File.prototype.deny = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "deny(comment='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(comment) + "')"));
    };
    /**
     * Moves the file to the specified destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to move to.
     * @param moveOperations The bitwise MoveOperations value for how to move the file.
     */
    _File.prototype.moveTo = function (url, moveOperations) {
        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "moveTo(newurl='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(url) + "',flags=" + moveOperations + ")"));
    };
    /**
     * Moves the file by path to the specified destination url.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to move to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    _File.prototype.moveByPath = function (destUrl, shouldOverWrite, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = Object(_utils_extractweburl__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(File(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFileByPath(overwrite=@a1)?@a1=" + shouldOverWrite), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["body"])({
                                destPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["isUrlAbsolute"])(destUrl) ? destUrl : "" + hostUrl + destUrl),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: false,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: Object(_utils_toResourcePath__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["isUrlAbsolute"])(srcUrl) ? srcUrl : "" + hostUrl + srcUrl),
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    _File.prototype.publish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "publish(comment='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(comment) + "')"));
    };
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    _File.prototype.recycle = function () {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "recycle"));
    };
    /**
     * Reverts an existing checkout for the file.
     *
     */
    _File.prototype.undoCheckout = function () {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "undoCheckout"));
    };
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    _File.prototype.unpublish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "unpublish(comment='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(comment) + "')"));
    };
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    _File.prototype.getText = function () {
        return this.clone(File, "$value", false).usingParser(new _pnp_odata__WEBPACK_IMPORTED_MODULE_2__["TextParser"]())(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    _File.prototype.getBlob = function () {
        return this.clone(File, "$value", false).usingParser(new _pnp_odata__WEBPACK_IMPORTED_MODULE_2__["BlobParser"]())(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getBuffer = function () {
        return this.clone(File, "$value", false).usingParser(new _pnp_odata__WEBPACK_IMPORTED_MODULE_2__["BufferParser"]())(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getJSON = function () {
        return this.clone(File, "$value", false).usingParser(new _pnp_odata__WEBPACK_IMPORTED_MODULE_2__["JSONParser"]())(Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    _File.prototype.setContent = function (content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "$value", false), {
                            body: content,
                            headers: {
                                "X-HTTP-Method": "PUT",
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, File(this)];
                }
            });
        });
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    _File.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var q, d;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.listItemAllFields;
                        return [4 /*yield*/, q.select.apply(q, selects)()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["assign"])(Object(_items__WEBPACK_IMPORTED_MODULE_4__["Item"])(Object(_odata__WEBPACK_IMPORTED_MODULE_5__["odataUrlFrom"])(d)), d)];
                }
            });
        });
    };
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    _File.prototype.setContentChunked = function (file, progress, chunkSize) {
        if (chunkSize === void 0) { chunkSize = 10485760; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fileSize, totalBlocks, uploadId, currentPointer, i;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["isFunc"])(progress)) {
                            progress = function () { return null; };
                        }
                        fileSize = file.size;
                        totalBlocks = parseInt((fileSize / chunkSize).toString(), 10) + ((fileSize % chunkSize === 0) ? 1 : 0);
                        uploadId = Object(_pnp_common__WEBPACK_IMPORTED_MODULE_3__["getGUID"])();
                        // report that we are starting
                        progress({ uploadId: uploadId, blockNumber: 1, chunkSize: chunkSize, currentPointer: 0, fileSize: fileSize, stage: "starting", totalBlocks: totalBlocks });
                        return [4 /*yield*/, this.startUpload(uploadId, file.slice(0, chunkSize))];
                    case 1:
                        currentPointer = _a.sent();
                        i = 2;
                        _a.label = 2;
                    case 2:
                        if (!(i < totalBlocks)) return [3 /*break*/, 5];
                        progress({ uploadId: uploadId, blockNumber: i, chunkSize: chunkSize, currentPointer: currentPointer, fileSize: fileSize, stage: "continue", totalBlocks: totalBlocks });
                        return [4 /*yield*/, this.continueUpload(uploadId, currentPointer, file.slice(currentPointer, currentPointer + chunkSize))];
                    case 3:
                        currentPointer = _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        progress({ uploadId: uploadId, blockNumber: totalBlocks, chunkSize: chunkSize, currentPointer: currentPointer, fileSize: fileSize, stage: "finishing", totalBlocks: totalBlocks });
                        return [2 /*return*/, this.finishUpload(uploadId, currentPointer, file.slice(currentPointer))];
                }
            });
        });
    };
    /**
     * Starts a new chunk upload session and uploads the first fragment.
     * The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully
     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    _File.prototype.startUpload = function (uploadId, fragment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var n;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "startUpload(uploadId=guid'" + uploadId + "')", false), { body: fragment })];
                    case 1:
                        n = _a.sent();
                        if (typeof n === "object") {
                            // When OData=verbose the payload has the following shape:
                            // { StartUpload: "10485760" }
                            n = n.StartUpload;
                        }
                        return [2 /*return*/, parseFloat(n)];
                }
            });
        });
    };
    /**
     * Continues the chunk upload session with an additional fragment.
     * The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    _File.prototype.continueUpload = function (uploadId, fileOffset, fragment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var n;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
                    case 1:
                        n = _a.sent();
                        if (typeof n === "object") {
                            // When OData=verbose the payload has the following shape:
                            // { ContinueUpload: "20971520" }
                            n = n.ContinueUpload;
                        }
                        return [2 /*return*/, parseFloat(n)];
                }
            });
        });
    };
    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The newly uploaded file.
     */
    _File.prototype.finishUpload = function (uploadId, fileOffset, fragment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(File, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: File(Object(_odata__WEBPACK_IMPORTED_MODULE_5__["odataUrlFrom"])(response)),
                            }];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.approve")
    ], _File.prototype, "approve", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.cancelUpload")
    ], _File.prototype, "cancelUpload", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.checkin")
    ], _File.prototype, "checkin", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.checkout")
    ], _File.prototype, "checkout", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.copyTo")
    ], _File.prototype, "copyTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.copyByPath")
    ], _File.prototype, "copyByPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.deny")
    ], _File.prototype, "deny", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.moveTo")
    ], _File.prototype, "moveTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.moveByPath")
    ], _File.prototype, "moveByPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.publish")
    ], _File.prototype, "publish", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.recycle")
    ], _File.prototype, "recycle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.undoCheckout")
    ], _File.prototype, "undoCheckout", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.unpublish")
    ], _File.prototype, "unpublish", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.getText")
    ], _File.prototype, "getText", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.getBlob")
    ], _File.prototype, "getBlob", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.getBuffer")
    ], _File.prototype, "getBuffer", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.getJSON")
    ], _File.prototype, "getJSON", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.setContent")
    ], _File.prototype, "setContent", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.getItem")
    ], _File.prototype, "getItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.startUpload")
    ], _File.prototype, "startUpload", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.continueUpload")
    ], _File.prototype, "continueUpload", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("fi.finishUpload")
    ], _File.prototype, "finishUpload", null);
    return _File;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableInstance"]));

var File = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_File);
/**
 * Describes a collection of Version objects
 *
 */
var _Versions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Versions, _super);
    function _Versions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _Versions.prototype.getById = function (versionId) {
        return _telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Version(this).concat("(" + versionId + ")"), "vers.getById");
    };
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    _Versions.prototype.deleteAll = function () {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Versions(this, "deleteAll"));
    };
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.deleteById = function (versionId) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Versions, "deleteById(vid=" + versionId + ")"));
    };
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.recycleByID = function (versionId) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Versions, "recycleByID(vid=" + versionId + ")"));
    };
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.deleteByLabel = function (label) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Versions, "deleteByLabel(versionlabel='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(label) + "')"));
    };
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.recycleByLabel = function (label) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Versions, "recycleByLabel(versionlabel='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(label) + "')"));
    };
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    _Versions.prototype.restoreByLabel = function (label) {
        return Object(_operations__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Versions, "restoreByLabel(versionlabel='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(label) + "')"));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("vers.deleteAll")
    ], _Versions.prototype, "deleteAll", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("vers.deleteById")
    ], _Versions.prototype, "deleteById", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("vers.recycleByID")
    ], _Versions.prototype, "recycleByID", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("vers.deleteByLabel")
    ], _Versions.prototype, "deleteByLabel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("vers.recycleByLabel")
    ], _Versions.prototype, "recycleByLabel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry__WEBPACK_IMPORTED_MODULE_10__["tag"])("vers.restoreByLabel")
    ], _Versions.prototype, "restoreByLabel", null);
    _Versions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("versions")
    ], _Versions);
    return _Versions;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableCollection"]));

var Versions = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Versions);
/**
 * Describes a single Version instance
 *
 */
var _Version = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Version, _super);
    function _Version() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["deleteableWithETag"])("ver");
        return _this;
    }
    return _Version;
}(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["_SharePointQueryableInstance"]));

var Version = Object(_sharepointqueryable__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Version);
/**
 * Types for document check in.
 * Minor = 0
 * Major = 1
 * Overwrite = 2
 */
var CheckinType;
(function (CheckinType) {
    CheckinType[CheckinType["Minor"] = 0] = "Minor";
    CheckinType[CheckinType["Major"] = 1] = "Major";
    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
})(CheckinType || (CheckinType = {}));
/**
 * File move opertions
 * Overwrite = 1
 * AllowBrokenThickets = 8
 */
var MoveOperations;
(function (MoveOperations) {
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
})(MoveOperations || (MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType || (TemplateFileType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "rvRX":
/*!************************************!*\
  !*** ./lib/Helpers/PnpJSHelper.js ***!
  \************************************/
/*! exports provided: SPHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPHelper", function() { return SPHelper; });
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/lists */ "J7sA");
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/items */ "lYrR");
/* harmony import */ var _pnp_sp_folders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/folders */ "0MvI");
/* harmony import */ var _pnp_sp_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/files */ "0YVK");






var SPHelper = /** @class */ (function () {
    function SPHelper() {
    }
    SPHelper.postListItem = function (titolo, autore, prezzo, pagine, url) {
        var listItem = {
            TitoloLibro: titolo,
            Autore: autore,
            Prezzo: prezzo,
            NumeroPagine: pagine,
        };
        return _pnp_sp__WEBPACK_IMPORTED_MODULE_0__["sp"].web.getFolderByServerRelativePath(url).files.add('Libro.json', JSON.stringify(listItem))
            .then(function (value) { return true; })
            .catch(function (err) {
            console.error(err);
            return false;
        });
    };
    SPHelper.readListItem = function (url) {
        return _pnp_sp__WEBPACK_IMPORTED_MODULE_0__["sp"].web.getFolderByServerRelativePath(url).files.getByName('Libro.json').getJSON()
            .then(function (value) { return value; })
            .catch(function (err) {
            console.error(err);
            return undefined;
        });
    };
    return SPHelper;
}());



/***/ }),

/***/ "t3D1":
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "t8hP":
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/toResourcePath.js ***!
  \******************************************************/
/*! exports provided: toResourcePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toResourcePath", function() { return toResourcePath; });
function toResourcePath(url) {
    return {
        DecodedUrl: url,
        __metadata: { type: "SP.ResourcePath" },
    };
}
//# sourceMappingURL=toResourcePath.js.map

/***/ }),

/***/ "tCQJ":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/types.js ***!
  \***************************************/
/*! exports provided: PrincipalType, PrincipalSource, PageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return PrincipalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalSource", function() { return PrincipalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
/**
 * Specifies the type of a principal.
 */
/* tslint:disable:no-bitwise */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/* tslint:enable:no-bitwise */
/**
 * Specifies the source of a principal.
 */
/* tslint:disable:no-bitwise */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "tSEd":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extractweburl.js ***!
  \*****************************************************/
/*! exports provided: extractWebUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractWebUrl", function() { return extractWebUrl; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "zqEK");

function extractWebUrl(candidateUrl) {
    if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["stringIsNullOrEmpty"])(candidateUrl)) {
        return "";
    }
    var index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extractweburl.js.map

/***/ }),

/***/ "vttn":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/list.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _lists_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types */ "hy0S");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "4tXH");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_lists_types__WEBPACK_IMPORTED_MODULE_1__["_List"], "rootFolder", _types__WEBPACK_IMPORTED_MODULE_2__["Folder"], "rootFolder");
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "xCsd":
/*!**********************************************************************!*\
  !*** ./lib/webparts/teamsWebPart/components/TeamsWebPart.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./TeamsWebPart.module.css */ "+1Tl");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "xT8B":
/*!******************************************!*\
  !*** ./node_modules/@pnp/odata/index.js ***!
  \******************************************/
/*! exports provided: extendGlobal, extendObj, extendFactory, clearGlobalExtensions, enableExtensions, disableExtensions, Batch, CachingOptions, CachingParserWrapper, addProp, invokableFactory, pipelineBinder, defaultPipelineBinder, ODataParser, TextParser, BlobParser, JSONParser, BufferParser, LambdaParser, HttpRequestError, setResult, pipe, requestPipelineMethod, PipelineMethods, getDefaultPipeline, cloneQueryableData, Queryable, body, headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "SQg3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return _batch__WEBPACK_IMPORTED_MODULE_0__["Batch"]; });

/* harmony import */ var _caching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caching */ "Zl34");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CachingOptions", function() { return _caching__WEBPACK_IMPORTED_MODULE_1__["CachingOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CachingParserWrapper", function() { return _caching__WEBPACK_IMPORTED_MODULE_1__["CachingParserWrapper"]; });

/* harmony import */ var _add_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-prop */ "W7+7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProp", function() { return _add_prop__WEBPACK_IMPORTED_MODULE_2__["addProp"]; });

/* harmony import */ var _invokable_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invokable-binder */ "pG6f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invokableFactory", function() { return _invokable_binder__WEBPACK_IMPORTED_MODULE_3__["invokableFactory"]; });

/* harmony import */ var _pipeline_binder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipeline-binder */ "5e8D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipelineBinder", function() { return _pipeline_binder__WEBPACK_IMPORTED_MODULE_4__["pipelineBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultPipelineBinder", function() { return _pipeline_binder__WEBPACK_IMPORTED_MODULE_4__["defaultPipelineBinder"]; });

/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers */ "xbXq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ODataParser", function() { return _parsers__WEBPACK_IMPORTED_MODULE_5__["ODataParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextParser", function() { return _parsers__WEBPACK_IMPORTED_MODULE_5__["TextParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlobParser", function() { return _parsers__WEBPACK_IMPORTED_MODULE_5__["BlobParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONParser", function() { return _parsers__WEBPACK_IMPORTED_MODULE_5__["JSONParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferParser", function() { return _parsers__WEBPACK_IMPORTED_MODULE_5__["BufferParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LambdaParser", function() { return _parsers__WEBPACK_IMPORTED_MODULE_5__["LambdaParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpRequestError", function() { return _parsers__WEBPACK_IMPORTED_MODULE_5__["HttpRequestError"]; });

/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipeline */ "TZA7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setResult", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_6__["setResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_6__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPipelineMethod", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_6__["requestPipelineMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineMethods", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_6__["PipelineMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultPipeline", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_6__["getDefaultPipeline"]; });

/* harmony import */ var _queryable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queryable */ "dKLh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneQueryableData", function() { return _queryable__WEBPACK_IMPORTED_MODULE_7__["cloneQueryableData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return _queryable__WEBPACK_IMPORTED_MODULE_7__["Queryable"]; });

/* harmony import */ var _request_builders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-builders */ "xsXS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "body", function() { return _request_builders__WEBPACK_IMPORTED_MODULE_8__["body"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return _request_builders__WEBPACK_IMPORTED_MODULE_8__["headers"]; });

/* harmony import */ var _invokable_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invokable-extensions */ "01TU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendGlobal", function() { return _invokable_extensions__WEBPACK_IMPORTED_MODULE_9__["extendGlobal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendObj", function() { return _invokable_extensions__WEBPACK_IMPORTED_MODULE_9__["extendObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendFactory", function() { return _invokable_extensions__WEBPACK_IMPORTED_MODULE_9__["extendFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearGlobalExtensions", function() { return _invokable_extensions__WEBPACK_IMPORTED_MODULE_9__["clearGlobalExtensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableExtensions", function() { return _invokable_extensions__WEBPACK_IMPORTED_MODULE_9__["enableExtensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableExtensions", function() { return _invokable_extensions__WEBPACK_IMPORTED_MODULE_9__["disableExtensions"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "xbXq":
/*!********************************************!*\
  !*** ./node_modules/@pnp/odata/parsers.js ***!
  \********************************************/
/*! exports provided: ODataParser, TextParser, BlobParser, JSONParser, BufferParser, LambdaParser, HttpRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataParser", function() { return ODataParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextParser", function() { return TextParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobParser", function() { return BlobParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONParser", function() { return JSONParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferParser", function() { return BufferParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LambdaParser", function() { return LambdaParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestError", function() { return HttpRequestError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "t3D1");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");


var ODataParser = /** @class */ (function () {
    function ODataParser() {
    }
    ODataParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                _this.parseImpl(r, resolve, reject);
            }
        });
    };
    ODataParser.prototype.parseImpl = function (r, resolve, reject) {
        var _this = this;
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                .catch(function (e) { return reject(e); });
        }
    };
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    ODataParser.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            HttpRequestError.init(r).then(reject);
        }
        return r.ok;
    };
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    ODataParser.prototype.parseODataJSON = function (json) {
        var result = json;
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(json, "d")) {
            if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var TextParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(ODataParser));

var BlobParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(ODataParser));

var JSONParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(ODataParser));

var BufferParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isFunc"])(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(ODataParser));

var LambdaParser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LambdaParser, _super);
    function LambdaParser(parser) {
        var _this = _super.call(this) || this;
        _this.parser = parser;
        return _this;
    }
    LambdaParser.prototype.parseImpl = function (r, resolve) {
        this.parser(r).then(resolve);
    };
    return LambdaParser;
}(ODataParser));

var HttpRequestError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpRequestError, _super);
    function HttpRequestError(message, response, status, statusText) {
        if (status === void 0) { status = response.status; }
        if (statusText === void 0) { statusText = response.statusText; }
        var _this = _super.call(this, message) || this;
        _this.response = response;
        _this.status = status;
        _this.statusText = statusText;
        _this.isHttpRequestError = true;
        return _this;
    }
    HttpRequestError.init = function (r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, r.clone().text()];
                    case 1:
                        t = _a.sent();
                        return [2 /*return*/, new HttpRequestError("Error making HttpClient request in queryable [" + r.status + "] " + r.statusText + " ::> " + t, r.clone())];
                }
            });
        });
    };
    return HttpRequestError;
}(Error));

//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "xsXS":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/odata/request-builders.js ***!
  \*****************************************************/
/*! exports provided: body, headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "zqEK");

function body(o, previous) {
    return Object.assign({ body: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_0__["jsS"])(o) }, previous);
}
function headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ymW/":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/web.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _webs_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types */ "dVsc");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "4tXH");
/* harmony import */ var _utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/escapeQueryStrValue */ "q1Lp");




Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types__WEBPACK_IMPORTED_MODULE_1__["_Web"], "folders", _types__WEBPACK_IMPORTED_MODULE_2__["Folders"]);
Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types__WEBPACK_IMPORTED_MODULE_1__["_Web"], "rootFolder", _types__WEBPACK_IMPORTED_MODULE_2__["Folder"], "rootFolder");
_webs_types__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_2__["Folder"])(this, "getFolderByServerRelativeUrl('" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_3__["escapeQueryStrValue"])(folderRelativeUrl) + "')");
};
_webs_types__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_2__["Folder"])(this, "getFolderByServerRelativePath(decodedUrl='" + Object(_utils_escapeQueryStrValue__WEBPACK_IMPORTED_MODULE_3__["escapeQueryStrValue"])(folderRelativeUrl) + "')");
};
_webs_types__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderById = function (uniqueId) {
    return Object(_types__WEBPACK_IMPORTED_MODULE_2__["Folder"])(this, "getFolderById('" + uniqueId + "')");
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "z067":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/metadata.js ***!
  \************************************************/
/*! exports provided: metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "zqEK":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/common/index.js ***!
  \*******************************************/
/*! exports provided: objectToMap, mergeMaps, setup, RuntimeConfigImpl, RuntimeConfig, mergeHeaders, mergeOptions, getADALResource, FetchClient, BearerTokenFetchClient, SPFxAdalClient, PnPClientStorageWrapper, PnPClientStorage, getCtxCallback, dateAdd, combine, getRandomString, getGUID, isFunc, objectDefinedNotNull, isArray, assign, isUrlAbsolute, stringIsNullOrEmpty, sanitizeGuid, jsS, hOP, getHashCode, safeGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections */ "eVhm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectToMap", function() { return _collections__WEBPACK_IMPORTED_MODULE_0__["objectToMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeMaps", function() { return _collections__WEBPACK_IMPORTED_MODULE_0__["mergeMaps"]; });

/* harmony import */ var _libconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libconfig */ "hyGn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return _libconfig__WEBPACK_IMPORTED_MODULE_1__["setup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RuntimeConfigImpl", function() { return _libconfig__WEBPACK_IMPORTED_MODULE_1__["RuntimeConfigImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RuntimeConfig", function() { return _libconfig__WEBPACK_IMPORTED_MODULE_1__["RuntimeConfig"]; });

/* harmony import */ var _net__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net */ "UxNQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeHeaders", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["mergeHeaders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getADALResource", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["getADALResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchClient", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["FetchClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BearerTokenFetchClient", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["BearerTokenFetchClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFxAdalClient", function() { return _net__WEBPACK_IMPORTED_MODULE_2__["SPFxAdalClient"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "9TEK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorageWrapper", function() { return _storage__WEBPACK_IMPORTED_MODULE_3__["PnPClientStorageWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return _storage__WEBPACK_IMPORTED_MODULE_3__["PnPClientStorage"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "97IE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCtxCallback", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["getCtxCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateAdd", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["dateAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["combine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["getRandomString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGUID", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["getGUID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunc", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isFunc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["objectDefinedNotNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["isUrlAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["stringIsNullOrEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitizeGuid", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["sanitizeGuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsS", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["jsS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hOP", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["hOP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHashCode", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["getHashCode"]; });

/* harmony import */ var _safe_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe-global */ "08ZC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeGlobal", function() { return _safe_global__WEBPACK_IMPORTED_MODULE_5__["safeGlobal"]; });







//# sourceMappingURL=index.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=teams-web-part-web-part.js.map