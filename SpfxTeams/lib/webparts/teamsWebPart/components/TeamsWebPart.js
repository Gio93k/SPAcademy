var __extends = (this && this.__extends) || (function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import * as React from 'react';
import styles from './TeamsWebPart.module.scss';
import { SPHelper } from '../../../Helpers/PnpJSHelper';
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
                    case 0: return [4 /*yield*/, SPHelper.readListItem(this.props._context.sdks.microsoftTeams.context.channelRelativeUrl)];
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
                        return [4 /*yield*/, SPHelper.postListItem(this.state.titolo, this.state.autore, this.state.prezzo, this.state.numero_pagine, this.props._context.sdks.microsoftTeams.context.channelRelativeUrl)];
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
        return (React.createElement("div", { className: styles.teamsWebPart },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, title),
                        React.createElement("p", { className: styles.subTitle }, subTitle),
                        React.createElement("p", { className: styles.description }, siteTabTitle),
                        React.createElement("form", { onSubmit: this.handleSubmit },
                            React.createElement("div", null,
                                React.createElement("label", null, "Inserisci un libro:"),
                                React.createElement("br", null)),
                            React.createElement("label", null,
                                "Titolo Libro:",
                                React.createElement("input", { name: "titolo", type: "text", value: this.state.titolo, onChange: this.handleChangeTitolo })),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Autore:",
                                React.createElement("input", { name: "autore", type: "text", value: this.state.autore, onChange: this.handleChangeAutore })),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Prezzo:",
                                React.createElement("input", { name: "prezzo", type: "number", value: this.state.prezzo, onChange: this.handleChangePrezzo })),
                            React.createElement("br", null),
                            React.createElement("label", null,
                                "Numero Pagine:",
                                React.createElement("input", { name: "numero_pagine", type: "number", value: this.state.numero_pagine, onChange: this.handleChangePagine })),
                            React.createElement("br", null),
                            React.createElement("input", { type: "submit", value: "Salva" })))))));
    };
    return TeamsWebPart;
}(React.Component));
export default TeamsWebPart;
//# sourceMappingURL=TeamsWebPart.js.map