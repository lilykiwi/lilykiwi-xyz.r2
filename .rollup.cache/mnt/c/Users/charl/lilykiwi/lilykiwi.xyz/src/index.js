import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "preact/jsx-runtime";
import { render } from 'react';
import './index.scss';
function NavLink(props) {
    if (window.location.href === props.href) {
        return _jsx("p", { children: _jsx("a", { href: "#", children: props.children }) });
    }
    else {
        return _jsx("p", { children: _jsx("a", { href: props.href, children: props.children }) });
    }
}
function Header(props) {
    return _jsx("div", { class: "header", children: props.children });
}
function Body(props) {
    return _jsx("div", { class: "body", children: props.children });
}
function Sidebar() {
    return _jsxs("nav", { class: "headerBar", children: [_jsx("h1", { children: "lilykiwi.xyz" }), _jsxs("div", { class: "hello", children: [_jsx(NavLink, { href: "/", children: "Home" }), _jsx(NavLink, { href: "/about", children: "About" }), _jsx(NavLink, { href: "/projects", children: "Projects" }), _jsx(NavLink, { href: "/contact", children: "Contact" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" })] })] });
}
function Content() {
    return _jsxs("div", { class: "content", children: [_jsx(Header, { children: _jsx("h1", { children: "hi there welcome this is a test can you tell?" }) }), _jsxs(Body, { children: [_jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" }), _jsx("p", { children: "text" })] })] });
}
var Main = _jsxs(_Fragment, { children: [_jsx(Sidebar, {}), _jsx(Content, {})] });
render(Main, document.body);
//# sourceMappingURL=index.js.map