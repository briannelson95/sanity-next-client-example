"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncompatiblePlugins = void 0;
var react_1 = __importStar(require("react"));
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var ui_1 = require("@sanity/ui");
var auto_id_1 = require("@reach/auto-id");
var styled_components_1 = __importDefault(require("styled-components"));
var icons_1 = require("@sanity/icons");
var CopyButton = (0, styled_components_1.default)(ui_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  box-shadow: none;\n  height: 35px;\n\n  &:hover {\n    background: white;\n  }\n"], ["\n  background: none;\n  border: none;\n  box-shadow: none;\n  height: 35px;\n\n  &:hover {\n    background: white;\n  }\n"])));
function IncompatiblePlugins(props) {
    var plugins = props.plugins;
    var id = (0, auto_id_1.useId)();
    var pluginsWithLinks = plugins.filter(function (p) { return !!p.sanityExchangeUrl; });
    return (react_1.default.createElement(ui_1.ThemeProvider, { theme: ui_1.studioTheme },
        react_1.default.createElement(ui_1.Dialog, { id: id || '', header: "Incompatible plugin".concat(plugins.length > 1 ? 's' : ''), width: 1 },
            react_1.default.createElement(ui_1.Card, { padding: 4 },
                react_1.default.createElement(ui_1.Stack, { space: 5 },
                    react_1.default.createElement(ui_1.Stack, { space: 4 },
                        react_1.default.createElement(ui_1.Box, null,
                            react_1.default.createElement(ui_1.Text, null,
                                "The following",
                                plugins.length > 1 ? ' plugins are ' : ' plugin is ',
                                " incompatible with this Sanity Studio (V2):")),
                        plugins.map(function (p) { return (react_1.default.createElement(ui_1.Card, { key: p.name },
                            react_1.default.createElement(ui_1.Stack, { space: 2 },
                                react_1.default.createElement(ui_1.Text, null,
                                    react_1.default.createElement("strong", null,
                                        react_1.default.createElement("span", { style: { color: '#C3362C' } }, p.name))),
                                react_1.default.createElement(ui_1.Text, null,
                                    "Version: ",
                                    react_1.default.createElement("span", { style: { color: '#C3362C' } }, p.versions.v3))))); }),
                        react_1.default.createElement(ui_1.Text, null,
                            plugins.length > 1 ? 'These are' : 'It is',
                            " built for",
                            ' ',
                            react_1.default.createElement("a", { href: "#" }, "Sanity Studio V3"),
                            ".")),
                    react_1.default.createElement(ui_1.Card, null,
                        react_1.default.createElement(ui_1.Stack, { space: 4 },
                            react_1.default.createElement(ui_1.Heading, { size: 2 }, "Resolve the issue"),
                            react_1.default.createElement(DowngradablePlugins, { plugins: plugins }),
                            react_1.default.createElement(RemovePlugins, { plugins: plugins }),
                            react_1.default.createElement(ui_1.Text, null, "... and then restart the Studio."))),
                    react_1.default.createElement(ui_1.Stack, { space: 4 },
                        react_1.default.createElement(ui_1.Heading, { size: 1 }, "More information"),
                        pluginsWithLinks.length > 0 && (react_1.default.createElement(ui_1.Stack, { space: 2 }, pluginsWithLinks.map(function (p) { return (react_1.default.createElement(react_1.default.Fragment, { key: p.name },
                            react_1.default.createElement(ui_1.Text, null,
                                p.name,
                                " on ",
                                react_1.default.createElement("a", { href: p.sanityExchangeUrl }, "Sanity Exchange")))); }))),
                        react_1.default.createElement(ui_1.Text, null,
                            react_1.default.createElement("a", { href: "#" }, " About Sanity Studio versions"))))))));
}
exports.IncompatiblePlugins = IncompatiblePlugins;
function DowngradablePlugins(props) {
    var _a = __read(useCopy(), 2), copied = _a[0], handleCopy = _a[1];
    var plugins = props.plugins.filter(function (p) { return !!p.versions.v2; });
    if (!plugins.length) {
        return null;
    }
    var yarnCommand = "yarn add ".concat(plugins.map(function (p) { return "".concat(p.name, "@\"").concat(p.versions.v2, "\""); }).join(' '));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ui_1.Text, null,
            "Downgrade the plugin",
            plugins.length > 1 ? 's' : '',
            " by running this command in the Studio directory:"),
        react_1.default.createElement(ui_1.Card, { shadow: 1, padding: 4, style: { background: '#F1F3F6' } },
            react_1.default.createElement(ui_1.Flex, { gap: 4 },
                react_1.default.createElement(ui_1.Box, { flex: 1 },
                    react_1.default.createElement(ui_1.Code, { style: {
                            color: '#101112FF',
                            overflowX: 'auto',
                            height: '2.5em',
                            display: 'flex',
                        } }, yarnCommand)),
                react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: yarnCommand, onCopy: handleCopy },
                    react_1.default.createElement(CopyButton, { title: "Copy to clipboard", icon: copied ? icons_1.CheckmarkIcon : icons_1.ClipboardIcon, mode: "bleed" }))))));
}
function RemovePlugins(props) {
    var _a = __read(useCopy(), 2), copied = _a[0], handleCopy = _a[1];
    var plugins = props.plugins.filter(function (p) { return !p.versions.v2; });
    if (!plugins.length) {
        return null;
    }
    var uninstallCommand = plugins.map(function (p) { return "sanity uninstall ".concat(p.name); }).join(' && ');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ui_1.Text, null,
            "Uninstall the plugin",
            plugins.length > 1 ? 's' : '',
            " by running this command in the Studio directory:"),
        react_1.default.createElement(ui_1.Card, { shadow: 1, padding: 4, style: { background: '#F1F3F6' } },
            react_1.default.createElement(ui_1.Flex, { gap: 4 },
                react_1.default.createElement(ui_1.Box, { flex: 1 },
                    react_1.default.createElement(ui_1.Code, { style: {
                            color: '#101112FF',
                            overflowX: 'auto',
                            height: '2.5em',
                            display: 'flex',
                        } }, uninstallCommand)),
                react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: uninstallCommand, onCopy: handleCopy },
                    react_1.default.createElement(CopyButton, { title: "Copy to clipboard", icon: copied ? icons_1.CheckmarkIcon : icons_1.ClipboardIcon, mode: "bleed" }))))));
}
function useCopy() {
    var _a = __read((0, react_1.useState)(false), 2), copied = _a[0], setCopied = _a[1];
    var handleCopy = (0, react_1.useCallback)(function () {
        setCopied(true);
        var timeout = setTimeout(function () {
            setCopied(false);
        }, 1000);
        return function () {
            clearTimeout(timeout);
        };
    }, [setCopied]);
    return [copied, handleCopy];
}
var templateObject_1;
//# sourceMappingURL=IncompatiblePlugin.js.map