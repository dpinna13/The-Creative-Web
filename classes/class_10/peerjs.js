parcelRequire = function(e, r, t, n) { var i, o = "function" == typeof parcelRequire && parcelRequire,
            u = "function" == typeof require && require;

        function f(t, n) { if (!r[t]) { if (!e[t]) { var i = "function" == typeof parcelRequire && parcelRequire; if (!n && i) return i(t, !0); if (o) return o(t, !0); if (u && "string" == typeof t) return u(t); var c = new Error("Cannot find module '" + t + "'"); throw c.code = "MODULE_NOT_FOUND", c }
                p.resolve = function(r) { return e[t][1][r] || r }, p.cache = {}; var l = r[t] = new f.Module(t);
                e[t][0].call(l.exports, p, l, l.exports, this) } return r[t].exports;

            function p(e) { return f(p.resolve(e)) } }
        f.isParcelRequire = !0, f.Module = function(e) { this.id = e, this.bundle = f, this.exports = {} }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) { e[r] = [function(e, r) { r.exports = t }, {}] }; for (var c = 0; c < t.length; c++) try { f(t[c]) } catch (e) { i || (i = e) }
        if (t.length) { var l = f(t[t.length - 1]); "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() { return l }) : n && (this[n] = l) } if (parcelRequire = f, i) throw i; return f }({
        "vHo1": [function(require, module, exports) {
            var e = {};
            e.useBlobBuilder = function() { try { return new Blob([]), !1 } catch (e) { return !0 } }(), e.useArrayBufferView = !e.useBlobBuilder && function() { try { return 0 === new Blob([new Uint8Array([])]).size } catch (e) { return !0 } }(), module.exports.binaryFeatures = e;
            var r = module.exports.BlobBuilder;

            function t() { this._pieces = [], this._parts = [] }
            "undefined" != typeof window && (r = module.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder), t.prototype.append = function(e) { "number" == typeof e ? this._pieces.push(e) : (this.flush(), this._parts.push(e)) }, t.prototype.flush = function() { if (this._pieces.length > 0) { var r = new Uint8Array(this._pieces);
                    e.useArrayBufferView || (r = r.buffer), this._parts.push(r), this._pieces = [] } }, t.prototype.getBuffer = function() { if (this.flush(), e.useBlobBuilder) { for (var t = new r, i = 0, u = this._parts.length; i < u; i++) t.append(this._parts[i]); return t.getBlob() } return new Blob(this._parts) }, module.exports.BufferBuilder = t;
        }, {}],
        "lHOc": [function(require, module, exports) {
            var t = require("./bufferbuilder").BufferBuilder,
                e = require("./bufferbuilder").binaryFeatures,
                i = { unpack: function(t) { return new r(t).unpack() }, pack: function(t) { var e = new n; return e.pack(t), e.getBuffer() } };

            function r(t) { this.index = 0, this.dataBuffer = t, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength }

            function n() { this.bufferBuilder = new t }

            function u(t) { var e = t.charCodeAt(0); return e <= 2047 ? "00" : e <= 65535 ? "000" : e <= 2097151 ? "0000" : e <= 67108863 ? "00000" : "000000" }

            function a(t) { return t.length > 600 ? new Blob([t]).size : t.replace(/[^\u0000-\u007F]/g, u).length }
            module.exports = i, r.prototype.unpack = function() { var t, e = this.unpack_uint8(); if (e < 128) return e; if ((224 ^ e) < 32) return (224 ^ e) - 32; if ((t = 160 ^ e) <= 15) return this.unpack_raw(t); if ((t = 176 ^ e) <= 15) return this.unpack_string(t); if ((t = 144 ^ e) <= 15) return this.unpack_array(t); if ((t = 128 ^ e) <= 15) return this.unpack_map(t); switch (e) {
                    case 192:
                        return null;
                    case 193:
                        return;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 202:
                        return this.unpack_float();
                    case 203:
                        return this.unpack_double();
                    case 204:
                        return this.unpack_uint8();
                    case 205:
                        return this.unpack_uint16();
                    case 206:
                        return this.unpack_uint32();
                    case 207:
                        return this.unpack_uint64();
                    case 208:
                        return this.unpack_int8();
                    case 209:
                        return this.unpack_int16();
                    case 210:
                        return this.unpack_int32();
                    case 211:
                        return this.unpack_int64();
                    case 212:
                    case 213:
                    case 214:
                    case 215:
                        return;
                    case 216:
                        return t = this.unpack_uint16(), this.unpack_string(t);
                    case 217:
                        return t = this.unpack_uint32(), this.unpack_string(t);
                    case 218:
                        return t = this.unpack_uint16(), this.unpack_raw(t);
                    case 219:
                        return t = this.unpack_uint32(), this.unpack_raw(t);
                    case 220:
                        return t = this.unpack_uint16(), this.unpack_array(t);
                    case 221:
                        return t = this.unpack_uint32(), this.unpack_array(t);
                    case 222:
                        return t = this.unpack_uint16(), this.unpack_map(t);
                    case 223:
                        return t = this.unpack_uint32(), this.unpack_map(t) } }, r.prototype.unpack_uint8 = function() { var t = 255 & this.dataView[this.index]; return this.index++, t }, r.prototype.unpack_uint16 = function() { var t = this.read(2),
                    e = 256 * (255 & t[0]) + (255 & t[1]); return this.index += 2, e }, r.prototype.unpack_uint32 = function() { var t = this.read(4),
                    e = 256 * (256 * (256 * t[0] + t[1]) + t[2]) + t[3]; return this.index += 4, e }, r.prototype.unpack_uint64 = function() { var t = this.read(8),
                    e = 256 * (256 * (256 * (256 * (256 * (256 * (256 * t[0] + t[1]) + t[2]) + t[3]) + t[4]) + t[5]) + t[6]) + t[7]; return this.index += 8, e }, r.prototype.unpack_int8 = function() { var t = this.unpack_uint8(); return t < 128 ? t : t - 256 }, r.prototype.unpack_int16 = function() { var t = this.unpack_uint16(); return t < 32768 ? t : t - 65536 }, r.prototype.unpack_int32 = function() { var t = this.unpack_uint32(); return t < Math.pow(2, 31) ? t : t - Math.pow(2, 32) }, r.prototype.unpack_int64 = function() { var t = this.unpack_uint64(); return t < Math.pow(2, 63) ? t : t - Math.pow(2, 64) }, r.prototype.unpack_raw = function(t) { if (this.length < this.index + t) throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + t + " " + this.length); var e = this.dataBuffer.slice(this.index, this.index + t); return this.index += t, e }, r.prototype.unpack_string = function(t) { for (var e, i, r = this.read(t), n = 0, u = ""; n < t;)(e = r[n]) < 128 ? (u += String.fromCharCode(e), n++) : (192 ^ e) < 32 ? (i = (192 ^ e) << 6 | 63 & r[n + 1], u += String.fromCharCode(i), n += 2) : (i = (15 & e) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2], u += String.fromCharCode(i), n += 3); return this.index += t, u }, r.prototype.unpack_array = function(t) { for (var e = new Array(t), i = 0; i < t; i++) e[i] = this.unpack(); return e }, r.prototype.unpack_map = function(t) { for (var e = {}, i = 0; i < t; i++) { var r = this.unpack(),
                        n = this.unpack();
                    e[r] = n } return e }, r.prototype.unpack_float = function() { var t = this.unpack_uint32(),
                    e = (t >> 23 & 255) - 127; return (0 == t >> 31 ? 1 : -1) * (8388607 & t | 8388608) * Math.pow(2, e - 23) }, r.prototype.unpack_double = function() { var t = this.unpack_uint32(),
                    e = this.unpack_uint32(),
                    i = (t >> 20 & 2047) - 1023; return (0 == t >> 31 ? 1 : -1) * ((1048575 & t | 1048576) * Math.pow(2, i - 20) + e * Math.pow(2, i - 52)) }, r.prototype.read = function(t) { var e = this.index; if (e + t <= this.length) return this.dataView.subarray(e, e + t); throw new Error("BinaryPackFailure: read index out of range") }, n.prototype.getBuffer = function() { return this.bufferBuilder.getBuffer() }, n.prototype.pack = function(t) { var i = typeof t; if ("string" == i) this.pack_string(t);
                else if ("number" == i) Math.floor(t) === t ? this.pack_integer(t) : this.pack_double(t);
                else if ("boolean" == i) !0 === t ? this.bufferBuilder.append(195) : !1 === t && this.bufferBuilder.append(194);
                else if ("undefined" == i) this.bufferBuilder.append(192);
                else { if ("object" != i) throw new Error('Type "' + i + '" not yet supported'); if (null === t) this.bufferBuilder.append(192);
                    else { var r = t.constructor; if (r == Array) this.pack_array(t);
                        else if (r == Blob || r == File) this.pack_bin(t);
                        else if (r == ArrayBuffer) e.useArrayBufferView ? this.pack_bin(new Uint8Array(t)) : this.pack_bin(t);
                        else if ("BYTES_PER_ELEMENT" in t) e.useArrayBufferView ? this.pack_bin(new Uint8Array(t.buffer)) : this.pack_bin(t.buffer);
                        else if (r == Object) this.pack_object(t);
                        else if (r == Date) this.pack_string(t.toString());
                        else { if ("function" != typeof t.toBinaryPack) throw new Error('Type "' + r.toString() + '" not yet supported');
                            this.bufferBuilder.append(t.toBinaryPack()) } } }
                this.bufferBuilder.flush() }, n.prototype.pack_bin = function(t) { var e = t.length || t.byteLength || t.size; if (e <= 15) this.pack_uint8(160 + e);
                else if (e <= 65535) this.bufferBuilder.append(218), this.pack_uint16(e);
                else { if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(219), this.pack_uint32(e) }
                this.bufferBuilder.append(t) }, n.prototype.pack_string = function(t) { var e = a(t); if (e <= 15) this.pack_uint8(176 + e);
                else if (e <= 65535) this.bufferBuilder.append(216), this.pack_uint16(e);
                else { if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(217), this.pack_uint32(e) }
                this.bufferBuilder.append(t) }, n.prototype.pack_array = function(t) { var e = t.length; if (e <= 15) this.pack_uint8(144 + e);
                else if (e <= 65535) this.bufferBuilder.append(220), this.pack_uint16(e);
                else { if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(221), this.pack_uint32(e) } for (var i = 0; i < e; i++) this.pack(t[i]) }, n.prototype.pack_integer = function(t) { if (-32 <= t && t <= 127) this.bufferBuilder.append(255 & t);
                else if (0 <= t && t <= 255) this.bufferBuilder.append(204), this.pack_uint8(t);
                else if (-128 <= t && t <= 127) this.bufferBuilder.append(208), this.pack_int8(t);
                else if (0 <= t && t <= 65535) this.bufferBuilder.append(205), this.pack_uint16(t);
                else if (-32768 <= t && t <= 32767) this.bufferBuilder.append(209), this.pack_int16(t);
                else if (0 <= t && t <= 4294967295) this.bufferBuilder.append(206), this.pack_uint32(t);
                else if (-2147483648 <= t && t <= 2147483647) this.bufferBuilder.append(210), this.pack_int32(t);
                else if (-0x8000000000000000 <= t && t <= 0x8000000000000000) this.bufferBuilder.append(211), this.pack_int64(t);
                else { if (!(0 <= t && t <= 0x10000000000000000)) throw new Error("Invalid integer");
                    this.bufferBuilder.append(207), this.pack_uint64(t) } }, n.prototype.pack_double = function(t) { var e = 0;
                t < 0 && (e = 1, t = -t); var i = Math.floor(Math.log(t) / Math.LN2),
                    r = t / Math.pow(2, i) - 1,
                    n = Math.floor(r * Math.pow(2, 52)),
                    u = Math.pow(2, 32),
                    a = e << 31 | i + 1023 << 20 | n / u & 1048575,
                    p = n % u;
                this.bufferBuilder.append(203), this.pack_int32(a), this.pack_int32(p) }, n.prototype.pack_object = function(t) { var e = Object.keys(t).length; if (e <= 15) this.pack_uint8(128 + e);
                else if (e <= 65535) this.bufferBuilder.append(222), this.pack_uint16(e);
                else { if (!(e <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(223), this.pack_uint32(e) } for (var i in t) t.hasOwnProperty(i) && (this.pack(i), this.pack(t[i])) }, n.prototype.pack_uint8 = function(t) { this.bufferBuilder.append(t) }, n.prototype.pack_uint16 = function(t) { this.bufferBuilder.append(t >> 8), this.bufferBuilder.append(255 & t) }, n.prototype.pack_uint32 = function(t) { var e = 4294967295 & t;
                this.bufferBuilder.append((4278190080 & e) >>> 24), this.bufferBuilder.append((16711680 & e) >>> 16), this.bufferBuilder.append((65280 & e) >>> 8), this.bufferBuilder.append(255 & e) }, n.prototype.pack_uint64 = function(t) { var e = t / Math.pow(2, 32),
                    i = t % Math.pow(2, 32);
                this.bufferBuilder.append((4278190080 & e) >>> 24), this.bufferBuilder.append((16711680 & e) >>> 16), this.bufferBuilder.append((65280 & e) >>> 8), this.bufferBuilder.append(255 & e), this.bufferBuilder.append((4278190080 & i) >>> 24), this.bufferBuilder.append((16711680 & i) >>> 16), this.bufferBuilder.append((65280 & i) >>> 8), this.bufferBuilder.append(255 & i) }, n.prototype.pack_int8 = function(t) { this.bufferBuilder.append(255 & t) }, n.prototype.pack_int16 = function(t) { this.bufferBuilder.append((65280 & t) >> 8), this.bufferBuilder.append(255 & t) }, n.prototype.pack_int32 = function(t) { this.bufferBuilder.append(t >>> 24 & 255), this.bufferBuilder.append((16711680 & t) >>> 16), this.bufferBuilder.append((65280 & t) >>> 8), this.bufferBuilder.append(255 & t) }, n.prototype.pack_int64 = function(t) { var e = Math.floor(t / Math.pow(2, 32)),
                    i = t % Math.pow(2, 32);
                this.bufferBuilder.append((4278190080 & e) >>> 24), this.bufferBuilder.append((16711680 & e) >>> 16), this.bufferBuilder.append((65280 & e) >>> 8), this.bufferBuilder.append(255 & e), this.bufferBuilder.append((4278190080 & i) >>> 24), this.bufferBuilder.append((16711680 & i) >>> 16), this.bufferBuilder.append((65280 & i) >>> 8), this.bufferBuilder.append(255 & i) };
        }, { "./bufferbuilder": "vHo1" }],
        "sXtV": [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: !0 }), exports.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription, exports.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection, exports.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
        }, {}],
        "BHXf": [function(require, module, exports) {
            var global = arguments[3];
            var e = arguments[3],
                n = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var n = {}; if (null != e)
                        for (var r in e) Object.hasOwnProperty.call(e, r) && (n[r] = e[r]); return n.default = e, n };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var r = n(require("js-binarypack")),
                t = require("./adapter"),
                a = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }], sdpSemantics: "unified-plan" },
                o = function() {
                    function e() {} var n; return e.noop = function() {}, e.validateId = function(e) { return !e || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e) }, e.chunk = function(n) { for (var r, t = [], a = n.size, o = Math.ceil(a / e.chunkedMTU), i = r = 0; i < a;) { var u = Math.min(a, i + e.chunkedMTU),
                                c = n.slice(i, u),
                                d = { __peerData: this._dataCount, n: r, data: c, total: o };
                            t.push(d), i = u, r++ } return this._dataCount++, t }, e.blobToArrayBuffer = function(e, n) { var r = new FileReader;
                        r.onload = function(e) { n(e.target.result) }, r.readAsArrayBuffer(e) }, e.blobToBinaryString = function(e, n) { var r = new FileReader;
                        r.onload = function(e) { n(e.target.result) }, r.readAsBinaryString(e) }, e.binaryStringToArrayBuffer = function(e) { for (var n = new Uint8Array(e.length), r = 0; r < e.length; r++) n[r] = 255 & e.charCodeAt(r); return n.buffer }, e.randomToken = function() { return Math.random().toString(36).substr(2) }, e.isSecure = function() { return "https:" === location.protocol }, e.CLOUD_HOST = "0.peerjs.com", e.CLOUD_PORT = 443, e.chunkedBrowsers = { Chrome: 1 }, e.chunkedMTU = 16300, e.defaultConfig = a, e.browser = (n = window).mozRTCPeerConnection ? "Firefox" : n.webkitRTCPeerConnection ? "Chrome" : n.RTCPeerConnection ? "Supported" : "Unsupported", e.supports = function() { if (void 0 === t.RTCPeerConnection) return {}; var e, n, r = !0,
                            o = !0,
                            i = !1,
                            u = !1,
                            c = !!window.webkitRTCPeerConnection; try { e = new t.RTCPeerConnection(a, { optional: [{ RtpDataChannels: !0 }] }) } catch (l) { r = !1, o = !1 } if (r) try { n = e.createDataChannel("_PEERJSTEST") } catch (l) { r = !1 }
                        if (r) { try { n.binaryType = "blob", i = !0 } catch (l) {} var d = new t.RTCPeerConnection(a, {}); try { u = d.createDataChannel("_PEERJSRELIABLETEST", {}).ordered } catch (l) {}
                            d.close() } return o && (o = !!e.addStream), e && e.close(), { audioVideo: o, data: r, binaryBlob: i, binary: u, reliable: u, sctp: u, onnegotiationneeded: c } }(), e.pack = r.pack, e.unpack = r.unpack, e._dataCount = 1, e }();
            exports.util = o;
        }, { "js-binarypack": "lHOc", "./adapter": "sXtV" }],
        "2JJl": [function(require, module, exports) {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                t = "~";

            function n() {}

            function r(e, t, n) { this.fn = e, this.context = t, this.once = n || !1 }

            function o(e, n, o, s, i) { if ("function" != typeof o) throw new TypeError("The listener must be a function"); var c = new r(o, s || e, i),
                    f = t ? t + n : n; return e._events[f] ? e._events[f].fn ? e._events[f] = [e._events[f], c] : e._events[f].push(c) : (e._events[f] = c, e._eventsCount++), e }

            function s(e, t) { 0 == --e._eventsCount ? e._events = new n : delete e._events[t] }

            function i() { this._events = new n, this._eventsCount = 0 }
            Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (t = !1)), i.prototype.eventNames = function() { var n, r, o = []; if (0 === this._eventsCount) return o; for (r in n = this._events) e.call(n, r) && o.push(t ? r.slice(1) : r); return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(n)) : o }, i.prototype.listeners = function(e) { var n = t ? t + e : e,
                    r = this._events[n]; if (!r) return []; if (r.fn) return [r.fn]; for (var o = 0, s = r.length, i = new Array(s); o < s; o++) i[o] = r[o].fn; return i }, i.prototype.listenerCount = function(e) { var n = t ? t + e : e,
                    r = this._events[n]; return r ? r.fn ? 1 : r.length : 0 }, i.prototype.emit = function(e, n, r, o, s, i) { var c = t ? t + e : e; if (!this._events[c]) return !1; var f, u, a = this._events[c],
                    l = arguments.length; if (a.fn) { switch (a.once && this.removeListener(e, a.fn, void 0, !0), l) {
                        case 1:
                            return a.fn.call(a.context), !0;
                        case 2:
                            return a.fn.call(a.context, n), !0;
                        case 3:
                            return a.fn.call(a.context, n, r), !0;
                        case 4:
                            return a.fn.call(a.context, n, r, o), !0;
                        case 5:
                            return a.fn.call(a.context, n, r, o, s), !0;
                        case 6:
                            return a.fn.call(a.context, n, r, o, s, i), !0 } for (u = 1, f = new Array(l - 1); u < l; u++) f[u - 1] = arguments[u];
                    a.fn.apply(a.context, f) } else { var v, h = a.length; for (u = 0; u < h; u++) switch (a[u].once && this.removeListener(e, a[u].fn, void 0, !0), l) {
                        case 1:
                            a[u].fn.call(a[u].context); break;
                        case 2:
                            a[u].fn.call(a[u].context, n); break;
                        case 3:
                            a[u].fn.call(a[u].context, n, r); break;
                        case 4:
                            a[u].fn.call(a[u].context, n, r, o); break;
                        default:
                            if (!f)
                                for (v = 1, f = new Array(l - 1); v < l; v++) f[v - 1] = arguments[v];
                            a[u].fn.apply(a[u].context, f) } } return !0 }, i.prototype.on = function(e, t, n) { return o(this, e, t, n, !1) }, i.prototype.once = function(e, t, n) { return o(this, e, t, n, !0) }, i.prototype.removeListener = function(e, n, r, o) { var i = t ? t + e : e; if (!this._events[i]) return this; if (!n) return s(this, i), this; var c = this._events[i]; if (c.fn) c.fn !== n || o && !c.once || r && c.context !== r || s(this, i);
                else { for (var f = 0, u = [], a = c.length; f < a; f++)(c[f].fn !== n || o && !c[f].once || r && c[f].context !== r) && u.push(c[f]);
                    u.length ? this._events[i] = 1 === u.length ? u[0] : u : s(this, i) } return this }, i.prototype.removeAllListeners = function(e) { var r; return e ? (r = t ? t + e : e, this._events[r] && s(this, r)) : (this._events = new n, this._eventsCount = 0), this }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = t, i.EventEmitter = i, "undefined" != typeof module && (module.exports = i);
        }, {}],
        "8WOs": [function(require, module, exports) {
            "use strict";
            var r = this && this.__read || function(r, e) { var o = "function" == typeof Symbol && r[Symbol.iterator]; if (!o) return r; var t, n, l = o.call(r),
                        i = []; try { for (;
                            (void 0 === e || e-- > 0) && !(t = l.next()).done;) i.push(t.value) } catch (s) { n = { error: s } } finally { try { t && !t.done && (o = l.return) && o.call(l) } finally { if (n) throw n.error } } return i },
                e = this && this.__spread || function() { for (var e = [], o = 0; o < arguments.length; o++) e = e.concat(r(arguments[o])); return e };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var o, t = "PeerJS: ";
            ! function(r) { r[r.Disabled = 0] = "Disabled", r[r.Errors = 1] = "Errors", r[r.Warnings = 2] = "Warnings", r[r.All = 3] = "All" }(o = exports.LogLevel || (exports.LogLevel = {}));
            var n = function() {
                function r() { this._logLevel = o.Disabled } return Object.defineProperty(r.prototype, "logLevel", { get: function() { return this._logLevel }, set: function(r) { this._logLevel = r }, enumerable: !0, configurable: !0 }), r.prototype.log = function() { for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                    this._logLevel >= o.All && this._print.apply(this, e([o.All], r)) }, r.prototype.warn = function() { for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                    this._logLevel >= o.Warnings && this._print.apply(this, e([o.Warnings], r)) }, r.prototype.error = function() { for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                    this._logLevel >= o.Errors && this._print.apply(this, e([o.Errors], r)) }, r.prototype.setLogFunction = function(r) { this._print = r }, r.prototype._print = function(r) { for (var n = [], l = 1; l < arguments.length; l++) n[l - 1] = arguments[l]; var i = e([t], n); for (var s in i) i[s] instanceof Error && (i[s] = "(" + i[s].name + ") " + i[s].message);
                    r >= o.All ? console.log.apply(console, e(i)) : r >= o.Warnings ? console.warn.apply(console, e(["WARNING"], i)) : r >= o.Errors && console.error.apply(console, e(["ERROR"], i)) }, r }();
            exports.default = new n;
        }, {}],
        "9ZRY": [function(require, module, exports) {
            "use strict";
            var e, r, n, o, t, a, i;
            Object.defineProperty(exports, "__esModule", { value: !0 }),
                function(e) { e.Open = "open", e.Stream = "stream", e.Data = "data", e.Close = "close", e.Error = "error", e.IceStateChanged = "iceStateChanged" }(e = exports.ConnectionEventType || (exports.ConnectionEventType = {})),
                function(e) { e.Data = "data", e.Media = "media" }(r = exports.ConnectionType || (exports.ConnectionType = {})),
                function(e) { e.Open = "open", e.Close = "close", e.Connection = "connection", e.Call = "call", e.Disconnected = "disconnected", e.Error = "error" }(n = exports.PeerEventType || (exports.PeerEventType = {})),
                function(e) { e.BrowserIncompatible = "browser-incompatible", e.Disconnected = "disconnected", e.InvalidID = "invalid-id", e.InvalidKey = "invalid-key", e.Network = "network", e.PeerUnavailable = "peer-unavailable", e.SslUnavailable = "ssl-unavailable", e.ServerError = "server-error", e.SocketError = "socket-error", e.SocketClosed = "socket-closed", e.UnavailableID = "unavailable-id", e.WebRTC = "webrtc" }(o = exports.PeerErrorType || (exports.PeerErrorType = {})),
                function(e) { e.Binary = "binary", e.BinaryUTF8 = "binary-utf8", e.JSON = "json" }(t = exports.SerializationType || (exports.SerializationType = {})),
                function(e) { e.Message = "message", e.Disconnected = "disconnected", e.Error = "error", e.Close = "close" }(a = exports.SocketEventType || (exports.SocketEventType = {})),
                function(e) { e.Heartbeat = "HEARTBEAT", e.Candidate = "CANDIDATE", e.Offer = "OFFER", e.Answer = "ANSWER", e.Open = "OPEN", e.Error = "ERROR", e.IdTaken = "ID-TAKEN", e.InvalidKey = "INVALID-KEY", e.Leave = "LEAVE", e.Expire = "EXPIRE" }(i = exports.ServerMessageType || (exports.ServerMessageType = {}));
        }, {}],
        "wJlv": [function(require, module, exports) {
            "use strict";
            var e = this && this.__extends || function() { var e = function(t, s) { return (e = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]) })(t, s) }; return function(t, s) {
                        function n() { this.constructor = t }
                        e(t, s), t.prototype = null === s ? Object.create(s) : (n.prototype = s.prototype, new n) } }(),
                t = this && this.__read || function(e, t) { var s = "function" == typeof Symbol && e[Symbol.iterator]; if (!s) return e; var n, r, o = s.call(e),
                        i = []; try { for (;
                            (void 0 === t || t-- > 0) && !(n = o.next()).done;) i.push(n.value) } catch (c) { r = { error: c } } finally { try { n && !n.done && (s = o.return) && s.call(o) } finally { if (r) throw r.error } } return i },
                s = this && this.__spread || function() { for (var e = [], s = 0; s < arguments.length; s++) e = e.concat(t(arguments[s])); return e },
                n = this && this.__values || function(e) { var t = "function" == typeof Symbol && e[Symbol.iterator],
                        s = 0; return t ? t.call(e) : { next: function() { return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e } } } },
                r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var o = require("eventemitter3"),
                i = r(require("./logger")),
                c = require("./enums"),
                a = function(t) {
                    function r(e, s, n, r, o, i) { void 0 === i && (i = 5e3); var c = t.call(this) || this;
                        c.pingInterval = i, c._disconnected = !1, c._messagesQueue = []; var a = e ? "wss://" : "ws://"; return c._wsUrl = a + s + ":" + n + r + "peerjs?key=" + o, c } return e(r, t), r.prototype.start = function(e, t) { this._id = e, this._wsUrl += "&id=" + e + "&token=" + t, this._startWebSocket() }, r.prototype._startWebSocket = function() { var e = this;
                        this._socket || (this._socket = new WebSocket(this._wsUrl), this._socket.onmessage = function(t) { var s; try { s = JSON.parse(t.data) } catch (n) { return void i.default.log("Invalid server message", t.data) }
                            e.emit(c.SocketEventType.Message, s) }, this._socket.onclose = function(t) { i.default.log("Socket closed.", t), e._disconnected = !0, clearTimeout(e._wsPingTimer), e.emit(c.SocketEventType.Disconnected) }, this._socket.onopen = function() { e._disconnected || (e._sendQueuedMessages(), i.default.log("Socket open"), e._scheduleHeartbeat()) }) }, r.prototype._scheduleHeartbeat = function() { var e = this;
                        this._wsPingTimer = setTimeout(function() { e._sendHeartbeat() }, this.pingInterval) }, r.prototype._sendHeartbeat = function() { if (this._wsOpen()) { var e = JSON.stringify({ type: c.ServerMessageType.Heartbeat });
                            this._socket.send(e), this._scheduleHeartbeat() } else i.default.log("Cannot send heartbeat, because socket closed") }, r.prototype._wsOpen = function() { return !!this._socket && 1 == this._socket.readyState }, r.prototype._sendQueuedMessages = function() { var e, t, r = s(this._messagesQueue);
                        this._messagesQueue = []; try { for (var o = n(r), i = o.next(); !i.done; i = o.next()) { var c = i.value;
                                this.send(c) } } catch (a) { e = { error: a } } finally { try { i && !i.done && (t = o.return) && t.call(o) } finally { if (e) throw e.error } } }, r.prototype.send = function(e) { if (!this._disconnected)
                            if (this._id)
                                if (e.type) { if (this._wsOpen()) { var t = JSON.stringify(e);
                                        this._socket.send(t) } } else this.emit(c.SocketEventType.Error, "Invalid message");
                        else this._messagesQueue.push(e) }, r.prototype.close = function() {!this._disconnected && this._socket && (this._socket.close(), this._disconnected = !0, clearTimeout(this._wsPingTimer)) }, r }(o.EventEmitter);
            exports.Socket = a;
        }, { "eventemitter3": "2JJl", "./logger": "8WOs", "./enums": "9ZRY" }],
        "T9kO": [function(require, module, exports) {
            var global = arguments[3];
            var e = arguments[3],
                r = require("js-binarypack"),
                t = { debug: !1, inherits: function(e, r) { e.super_ = r, e.prototype = Object.create(r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }) }, extend: function(e, r) { for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]); return e }, pack: r.pack, unpack: r.unpack, log: function() { if (t.debug) { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                            e.unshift("Reliable: "), console.log.apply(console, e) } }, setZeroTimeout: function(e) { var r = [],
                            t = "zero-timeout-message";

                        function n(n) { n.source == e && n.data == t && (n.stopPropagation && n.stopPropagation(), r.length && r.shift()()) } return e.addEventListener ? e.addEventListener("message", n, !0) : e.attachEvent && e.attachEvent("onmessage", n),
                            function(n) { r.push(n), e.postMessage(t, "*") } }(this), blobToArrayBuffer: function(e, r) { var t = new FileReader;
                        t.onload = function(e) { r(e.target.result) }, t.readAsArrayBuffer(e) }, blobToBinaryString: function(e, r) { var t = new FileReader;
                        t.onload = function(e) { r(e.target.result) }, t.readAsBinaryString(e) }, binaryStringToArrayBuffer: function(e) { for (var r = new Uint8Array(e.length), t = 0; t < e.length; t++) r[t] = 255 & e.charCodeAt(t); return r.buffer }, randomToken: function() { return Math.random().toString(36).substr(2) } };
            module.exports = t;
        }, { "js-binarypack": "lHOc" }],
        "aYFJ": [function(require, module, exports) {
            var t = require("./util");

            function e(n, i) { if (!(this instanceof e)) return new e(n);
                this._dc = n, t.debug = i, this._outgoing = {}, this._incoming = {}, this._received = {}, this._window = 1e3, this._mtu = 500, this._interval = 0, this._count = 0, this._queue = [], this._setupDC() }
            e.prototype.send = function(e) { var n = t.pack(e);
                n.size < this._mtu ? this._handleSend(["no", n]) : (this._outgoing[this._count] = { ack: 0, chunks: this._chunk(n) }, t.debug && (this._outgoing[this._count].timer = new Date), this._sendWindowedChunks(this._count), this._count += 1) }, e.prototype._setupInterval = function() { var t = this;
                this._timeout = setInterval(function() { var e = t._queue.shift(); if (e._multiple)
                        for (var n = 0, i = e.length; n < i; n += 1) t._intervalSend(e[n]);
                    else t._intervalSend(e) }, this._interval) }, e.prototype._intervalSend = function(e) { var n = this;
                e = t.pack(e), t.blobToBinaryString(e, function(t) { n._dc.send(t) }), 0 === n._queue.length && (clearTimeout(n._timeout), n._timeout = null) }, e.prototype._processAcks = function() { for (var t in this._outgoing) this._outgoing.hasOwnProperty(t) && this._sendWindowedChunks(t) }, e.prototype._handleSend = function(t) { for (var e = !0, n = 0, i = this._queue.length; n < i; n += 1) { var o = this._queue[n];
                    o === t ? e = !1 : o._multiple && -1 !== o.indexOf(t) && (e = !1) }
                e && (this._queue.push(t), this._timeout || this._setupInterval()) }, e.prototype._setupDC = function() { var e = this;
                this._dc.onmessage = function(n) { var i = n.data; if (i.constructor === String) { var o = t.binaryStringToArrayBuffer(i);
                        i = t.unpack(o), e._handleMessage(i) } } }, e.prototype._handleMessage = function(e) { var n, i = e[1],
                    o = this._incoming[i],
                    s = this._outgoing[i]; switch (e[0]) {
                    case "no":
                        var a = i;
                        a && this.onmessage(t.unpack(a)); break;
                    case "end":
                        if (n = o, this._received[i] = e[2], !n) break;
                        this._ack(i); break;
                    case "ack":
                        if (n = s) { var h = e[2];
                            n.ack = Math.max(h, n.ack), n.ack >= n.chunks.length ? (t.log("Time: ", new Date - n.timer), delete this._outgoing[i]) : this._processAcks() } break;
                    case "chunk":
                        if (!(n = o)) { if (!0 === this._received[i]) break;
                            n = { ack: ["ack", i, 0], chunks: [] }, this._incoming[i] = n } var r = e[2],
                            u = e[3];
                        n.chunks[r] = new Uint8Array(u), r === n.ack[2] && this._calculateNextAck(i), this._ack(i); break;
                    default:
                        this._handleSend(e) } }, e.prototype._chunk = function(e) { for (var n = [], i = e.size, o = 0; o < i;) { var s = Math.min(i, o + this._mtu),
                        a = { payload: e.slice(o, s) };
                    n.push(a), o = s } return t.log("Created", n.length, "chunks."), n }, e.prototype._ack = function(t) { var e = this._incoming[t].ack;
                this._received[t] === e[2] && (this._complete(t), this._received[t] = !0), this._handleSend(e) }, e.prototype._calculateNextAck = function(t) { for (var e = this._incoming[t], n = e.chunks, i = 0, o = n.length; i < o; i += 1)
                    if (void 0 === n[i]) return void(e.ack[2] = i);
                e.ack[2] = n.length }, e.prototype._sendWindowedChunks = function(e) { t.log("sendWindowedChunks for: ", e); for (var n = this._outgoing[e], i = n.chunks, o = [], s = Math.min(n.ack + this._window, i.length), a = n.ack; a < s; a += 1) i[a].sent && a !== n.ack || (i[a].sent = !0, o.push(["chunk", e, a, i[a].payload]));
                n.ack + this._window >= i.length && o.push(["end", e, i.length]), o._multiple = !0, this._handleSend(o) }, e.prototype._complete = function(e) { t.log("Completed called for", e); var n = this,
                    i = this._incoming[e].chunks,
                    o = new Blob(i);
                t.blobToArrayBuffer(o, function(e) { n.onmessage(t.unpack(e)) }), delete this._incoming[e] }, e.higherBandwidthSDP = function(t) { var e = navigator.appVersion.match(/Chrome\/(.*?) /); if (e && (e = parseInt(e[1].split(".").shift())) < 31) { var n = t.split("b=AS:30"); if (n.length > 1) return n[0] + "b=AS:102400" + n[1] } return t }, e.prototype.onmessage = function(t) {}, module.exports = e;
        }, { "./util": "T9kO" }],
        "HCdX": [function(require, module, exports) {
            "use strict";
            var e = this && this.__assign || function() { return (e = Object.assign || function(e) { for (var n, t = 1, o = arguments.length; t < o; t++)
                            for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]); return e }).apply(this, arguments) },
                n = this && this.__awaiter || function(e, n, t, o) { return new(t || (t = Promise))(function(i, r) {
                        function c(e) { try { s(o.next(e)) } catch (n) { r(n) } }

                        function a(e) { try { s(o.throw(e)) } catch (n) { r(n) } }

                        function s(e) { e.done ? i(e.value) : new t(function(n) { n(e.value) }).then(c, a) }
                        s((o = o.apply(e, n || [])).next()) }) },
                t = this && this.__generator || function(e, n) { var t, o, i, r, c = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return r = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (r[Symbol.iterator] = function() { return this }), r;

                    function a(r) { return function(a) { return function(r) { if (t) throw new TypeError("Generator is already executing."); for (; c;) try { if (t = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i; switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            i = r; break;
                                        case 4:
                                            return c.label++, { value: r[1], done: !1 };
                                        case 5:
                                            c.label++, o = r[1], r = [0]; continue;
                                        case 7:
                                            r = c.ops.pop(), c.trys.pop(); continue;
                                        default:
                                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) { c = 0; continue } if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) { c.label = r[1]; break } if (6 === r[0] && c.label < i[1]) { c.label = i[1], i = r; break } if (i && c.label < i[2]) { c.label = i[2], c.ops.push(r); break }
                                            i[2] && c.ops.pop(), c.trys.pop(); continue }
                                    r = n.call(e, c) } catch (a) { r = [6, a], o = 0 } finally { t = i = 0 }
                                if (5 & r[0]) throw r[1]; return { value: r[0] ? r[1] : void 0, done: !0 } }([r, a]) } } },
                o = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var n = {}; if (null != e)
                        for (var t in e) Object.hasOwnProperty.call(e, t) && (n[t] = e[t]); return n.default = e, n },
                i = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var r = o(require("reliable")),
                c = require("./util"),
                a = i(require("./logger")),
                s = require("./adapter"),
                l = require("./enums"),
                d = function() {
                    function o(e) { this.connection = e } return o.prototype.startConnection = function(e) { var n = this._startPeerConnection(); if (this.connection.peerConnection = n, this.connection.type === l.ConnectionType.Media && e._stream && this._addTracksToConnection(e._stream, n), e.originator) { if (this.connection.type === l.ConnectionType.Data) { var t = this.connection,
                                    o = {};
                                c.util.supports.sctp || (o = { reliable: e.reliable }); var i = n.createDataChannel(t.label, o);
                                t.initialize(i) }
                            this._makeOffer() } else this.handleSDP("OFFER", e.sdp) }, o.prototype._startPeerConnection = function() { a.default.log("Creating RTCPeerConnection."); var e = {};
                        this.connection.type !== l.ConnectionType.Data || c.util.supports.sctp ? this.connection.type === l.ConnectionType.Media && (e = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }) : e = { optional: [{ RtpDataChannels: !0 }] }; var n = new s.RTCPeerConnection(this.connection.provider.options.config, e); return this._setupListeners(n), n }, o.prototype._setupListeners = function(e) { var n = this,
                            t = this.connection.peer,
                            o = this.connection.connectionId,
                            i = this.connection.type,
                            r = this.connection.provider;
                        a.default.log("Listening for ICE candidates."), e.onicecandidate = function(e) { e.candidate && (a.default.log("Received ICE candidates for:", t), r.socket.send({ type: l.ServerMessageType.Candidate, payload: { candidate: e.candidate, type: i, connectionId: o }, dst: t })) }, e.oniceconnectionstatechange = function() { switch (e.iceConnectionState) {
                                case "failed":
                                    a.default.log("iceConnectionState is failed, closing connections to " + t), n.connection.emit(l.ConnectionEventType.Error, new Error("Negotiation of connection to " + t + " failed.")), n.connection.close(); break;
                                case "closed":
                                    a.default.log("iceConnectionState is closed, closing connections to " + t), n.connection.emit(l.ConnectionEventType.Error, new Error("Connection to " + t + " closed.")), n.connection.close(); break;
                                case "disconnected":
                                    a.default.log("iceConnectionState is disconnected, closing connections to " + t), n.connection.emit(l.ConnectionEventType.Error, new Error("Connection to " + t + " disconnected.")), n.connection.close(); break;
                                case "completed":
                                    e.onicecandidate = c.util.noop }
                            n.connection.emit(l.ConnectionEventType.IceStateChanged, e.iceConnectionState) }, a.default.log("Listening for data channel"), e.ondatachannel = function(e) { a.default.log("Received data channel"); var n = e.channel;
                            r.getConnection(t, o).initialize(n) }, a.default.log("Listening for remote stream"), e.ontrack = function(e) { a.default.log("Received remote stream"); var i = e.streams[0],
                                c = r.getConnection(t, o); if (c.type === l.ConnectionType.Media) { var s = c;
                                n._addStreamToMediaConnection(i, s) } } }, o.prototype.cleanup = function() { a.default.log("Cleaning up PeerConnection to " + this.connection.peer); var e = this.connection.peerConnection; if (e) { this.connection.peerConnection = null, e.onicecandidate = e.oniceconnectionstatechange = e.ondatachannel = e.ontrack = function() {}; var n = "closed" !== e.signalingState,
                                t = !1; if (this.connection.type === l.ConnectionType.Data) { var o = this.connection.dataChannel;
                                o && (t = !!o.readyState && "closed" !== o.readyState) }(n || t) && e.close() } }, o.prototype._makeOffer = function() { return n(this, void 0, Promise, function() { var n, o, i, s, d, p, u; return t(this, function(t) { switch (t.label) {
                                    case 0:
                                        n = this.connection.peerConnection, o = this.connection.provider, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 7, , 8]), [4, n.createOffer(this.connection.options.constraints)];
                                    case 2:
                                        i = t.sent(), a.default.log("Created offer."), c.util.supports.sctp || this.connection.type !== l.ConnectionType.Data || (d = this.connection).reliable && (i.sdp = r.higherBandwidthSDP(i.sdp)), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (i.sdp = this.connection.options.sdpTransform(i.sdp) || i.sdp), t.label = 3;
                                    case 3:
                                        return t.trys.push([3, 5, , 6]), [4, n.setLocalDescription(i)];
                                    case 4:
                                        return t.sent(), a.default.log("Set localDescription:", i, "for:" + this.connection.peer), s = { sdp: i, type: this.connection.type, connectionId: this.connection.connectionId, metadata: this.connection.metadata, browser: c.util.browser }, this.connection.type === l.ConnectionType.Data && (d = this.connection, s = e({}, s, { label: d.label, reliable: d.reliable, serialization: d.serialization })), o.socket.send({ type: l.ServerMessageType.Offer, payload: s, dst: this.connection.peer }), [3, 6];
                                    case 5:
                                        return "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" != (p = t.sent()) && (o.emitError(l.PeerErrorType.WebRTC, p), a.default.log("Failed to setLocalDescription, ", p)), [3, 6];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return u = t.sent(), o.emitError(l.PeerErrorType.WebRTC, u), a.default.log("Failed to createOffer, ", u), [3, 8];
                                    case 8:
                                        return [2] } }) }) }, o.prototype._makeAnswer = function() { return n(this, void 0, Promise, function() { var e, n, o, i, s; return t(this, function(t) { switch (t.label) {
                                    case 0:
                                        e = this.connection.peerConnection, n = this.connection.provider, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 7, , 8]), [4, e.createAnswer()];
                                    case 2:
                                        o = t.sent(), a.default.log("Created answer."), c.util.supports.sctp || this.connection.type !== l.ConnectionType.Data || this.connection.reliable && (o.sdp = r.higherBandwidthSDP(o.sdp)), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (o.sdp = this.connection.options.sdpTransform(o.sdp) || o.sdp), t.label = 3;
                                    case 3:
                                        return t.trys.push([3, 5, , 6]), [4, e.setLocalDescription(o)];
                                    case 4:
                                        return t.sent(), a.default.log("Set localDescription:", o, "for:" + this.connection.peer), n.socket.send({ type: l.ServerMessageType.Answer, payload: { sdp: o, type: this.connection.type, connectionId: this.connection.connectionId, browser: c.util.browser }, dst: this.connection.peer }), [3, 6];
                                    case 5:
                                        return i = t.sent(), n.emitError(l.PeerErrorType.WebRTC, i), a.default.log("Failed to setLocalDescription, ", i), [3, 6];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return s = t.sent(), n.emitError(l.PeerErrorType.WebRTC, s), a.default.log("Failed to create answer, ", s), [3, 8];
                                    case 8:
                                        return [2] } }) }) }, o.prototype.handleSDP = function(e, o) { return n(this, void 0, Promise, function() { var n, i, r, c; return t(this, function(t) { switch (t.label) {
                                    case 0:
                                        o = new s.RTCSessionDescription(o), n = this.connection.peerConnection, i = this.connection.provider, a.default.log("Setting remote description", o), r = this, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 5, , 6]), [4, n.setRemoteDescription(o)];
                                    case 2:
                                        return t.sent(), a.default.log("Set remoteDescription:" + e + " for:" + this.connection.peer), "OFFER" !== e ? [3, 4] : [4, r._makeAnswer()];
                                    case 3:
                                        t.sent(), t.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return c = t.sent(), i.emitError(l.PeerErrorType.WebRTC, c), a.default.log("Failed to setRemoteDescription, ", c), [3, 6];
                                    case 6:
                                        return [2] } }) }) }, o.prototype.handleCandidate = function(e) { return n(this, void 0, Promise, function() { var n, o, i, r, c, d; return t(this, function(t) { switch (t.label) {
                                    case 0:
                                        n = e.candidate, o = e.sdpMLineIndex, i = e.sdpMid, r = this.connection.peerConnection, c = this.connection.provider, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, r.addIceCandidate(new s.RTCIceCandidate({ sdpMid: i, sdpMLineIndex: o, candidate: n }))];
                                    case 2:
                                        return t.sent(), a.default.log("Added ICE candidate for:" + this.connection.peer), [3, 4];
                                    case 3:
                                        return d = t.sent(), c.emitError(l.PeerErrorType.WebRTC, d), a.default.log("Failed to handleCandidate, ", d), [3, 4];
                                    case 4:
                                        return [2] } }) }) }, o.prototype._addTracksToConnection = function(e, n) { if (a.default.log("add tracks from stream " + e.id + " to peer connection"), !n.addTrack) return a.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
                        e.getTracks().forEach(function(t) { n.addTrack(t, e) }) }, o.prototype._addStreamToMediaConnection = function(e, n) { a.default.log("add stream " + e.id + " to media connection " + n.connectionId), n.addStream(e) }, o }();
            exports.Negotiator = d;
        }, { "reliable": "aYFJ", "./util": "BHXf", "./logger": "8WOs", "./adapter": "sXtV", "./enums": "9ZRY" }],
        "tQFK": [function(require, module, exports) {
            "use strict";
            var t = this && this.__extends || function() { var t = function(e, r) { return (t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]) })(e, r) }; return function(e, r) {
                    function n() { this.constructor = e }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var e = require("eventemitter3"),
                r = function(e) {
                    function r(t, r, n) { var o = e.call(this) || this; return o.peer = t, o.provider = r, o.options = n, o._open = !1, o.metadata = n.metadata, o } return t(r, e), Object.defineProperty(r.prototype, "open", { get: function() { return this._open }, enumerable: !0, configurable: !0 }), r }(e.EventEmitter);
            exports.BaseConnection = r;
        }, { "eventemitter3": "2JJl" }],
        "dbHP": [function(require, module, exports) {
            "use strict";
            var e = this && this.__extends || function() { var e = function(t, o) { return (e = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]) })(t, o) }; return function(t, o) {
                        function r() { this.constructor = t }
                        e(t, o), t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r) } }(),
                t = this && this.__assign || function() { return (t = Object.assign || function(e) { for (var t, o = 1, r = arguments.length; o < r; o++)
                            for (var n in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }).apply(this, arguments) },
                o = this && this.__values || function(e) { var t = "function" == typeof Symbol && e[Symbol.iterator],
                        o = 0; return t ? t.call(e) : { next: function() { return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e } } } },
                r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var n = require("./util"),
                i = r(require("./logger")),
                a = require("./negotiator"),
                s = require("./enums"),
                l = require("./baseconnection"),
                c = function(r) {
                    function l(e, t, o) { var i = r.call(this, e, t, o) || this; return i._localStream = i.options._stream, i.connectionId = i.options.connectionId || l.ID_PREFIX + n.util.randomToken(), i._negotiator = new a.Negotiator(i), i._localStream && i._negotiator.startConnection({ _stream: i._localStream, originator: !0 }), i } return e(l, r), Object.defineProperty(l.prototype, "type", { get: function() { return s.ConnectionType.Media }, enumerable: !0, configurable: !0 }), Object.defineProperty(l.prototype, "localStream", { get: function() { return this._localStream }, enumerable: !0, configurable: !0 }), Object.defineProperty(l.prototype, "remoteStream", { get: function() { return this._remoteStream }, enumerable: !0, configurable: !0 }), l.prototype.addStream = function(e) { i.default.log("Receiving stream", e), this._remoteStream = e, r.prototype.emit.call(this, s.ConnectionEventType.Stream, e) }, l.prototype.handleMessage = function(e) { var t = e.type,
                            o = e.payload; switch (e.type) {
                            case s.ServerMessageType.Answer:
                                this._negotiator.handleSDP(t, o.sdp), this._open = !0; break;
                            case s.ServerMessageType.Candidate:
                                this._negotiator.handleCandidate(o.candidate); break;
                            default:
                                i.default.warn("Unrecognized message type:" + t + " from peer:" + this.peer) } }, l.prototype.answer = function(e, r) { var n, a; if (void 0 === r && (r = {}), this._localStream) i.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
                        else { this._localStream = e, r && r.sdpTransform && (this.options.sdpTransform = r.sdpTransform), this._negotiator.startConnection(t({}, this.options._payload, { _stream: e })); var s = this.provider._getMessages(this.connectionId); try { for (var l = o(s), c = l.next(); !c.done; c = l.next()) { var p = c.value;
                                    this.handleMessage(p) } } catch (u) { n = { error: u } } finally { try { c && !c.done && (a = l.return) && a.call(l) } finally { if (n) throw n.error } }
                            this._open = !0 } }, l.prototype.close = function() { this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = !1, r.prototype.emit.call(this, s.ConnectionEventType.Close)) }, l.ID_PREFIX = "mc_", l }(l.BaseConnection);
            exports.MediaConnection = c;
        }, { "./util": "BHXf", "./logger": "8WOs", "./negotiator": "HCdX", "./enums": "9ZRY", "./baseconnection": "tQFK" }],
        "GBTQ": [function(require, module, exports) {
            "use strict";
            var e = this && this.__extends || function() { var e = function(t, n) { return (e = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(t, n) }; return function(t, n) {
                        function i() { this.constructor = t }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i) } }(),
                t = this && this.__values || function(e) { var t = "function" == typeof Symbol && e[Symbol.iterator],
                        n = 0; return t ? t.call(e) : { next: function() { return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e } } } },
                n = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var i = require("reliable"),
                r = require("./util"),
                o = n(require("./logger")),
                a = require("./negotiator"),
                s = require("./enums"),
                u = require("./baseconnection"),
                l = function(n) {
                    function u(e, t, i) { var o = n.call(this, e, t, i) || this; return o._buffer = [], o._bufferSize = 0, o._buffering = !1, o._chunkedData = {}, o.connectionId = o.options.connectionId || u.ID_PREFIX + r.util.randomToken(), o.label = o.options.label || o.connectionId, o.serialization = o.options.serialization || s.SerializationType.Binary, o.reliable = o.options.reliable, o.options._payload && (o._peerBrowser = o.options._payload.browser), o._negotiator = new a.Negotiator(o), o._negotiator.startConnection(o.options._payload || { originator: !0 }), o } return e(u, n), Object.defineProperty(u.prototype, "type", { get: function() { return s.ConnectionType.Data }, enumerable: !0, configurable: !0 }), Object.defineProperty(u.prototype, "dataChannel", { get: function() { return this._dc }, enumerable: !0, configurable: !0 }), Object.defineProperty(u.prototype, "bufferSize", { get: function() { return this._bufferSize }, enumerable: !0, configurable: !0 }), u.prototype.initialize = function(e) { this._dc = e, this._configureDataChannel() }, u.prototype._configureDataChannel = function() { var e = this; if (r.util.supports.sctp && (this.dataChannel.binaryType = "arraybuffer"), this.dataChannel.onopen = function() { o.default.log("Data channel connection success"), e._open = !0, e.emit(s.ConnectionEventType.Open) }, !r.util.supports.sctp && this.reliable) { var t = o.default.logLevel > o.LogLevel.Disabled;
                            this._reliable = new i.Reliable(this.dataChannel, t) }
                        this._reliable ? this._reliable.onmessage = function(t) { e.emit(s.ConnectionEventType.Data, t) } : this.dataChannel.onmessage = function(t) { e._handleDataMessage(t) }, this.dataChannel.onclose = function() { o.default.log("DataChannel closed for:", e.peer), e.close() } }, u.prototype._handleDataMessage = function(e) { var t = this,
                            i = e.data,
                            o = i.constructor,
                            a = i; if (this.serialization === s.SerializationType.Binary || this.serialization === s.SerializationType.BinaryUTF8) { if (o === Blob) return void r.util.blobToArrayBuffer(i, function(e) { var n = r.util.unpack(e);
                                t.emit(s.ConnectionEventType.Data, n) }); if (o === ArrayBuffer) a = r.util.unpack(i);
                            else if (o === String) { var u = r.util.binaryStringToArrayBuffer(i);
                                a = r.util.unpack(u) } } else this.serialization === s.SerializationType.JSON && (a = JSON.parse(i));
                        a.__peerData ? this._handleChunk(a) : n.prototype.emit.call(this, s.ConnectionEventType.Data, a) }, u.prototype._handleChunk = function(e) { var t = e.__peerData,
                            n = this._chunkedData[t] || { data: [], count: 0, total: e.total }; if (n.data[e.n] = e.data, n.count++, this._chunkedData[t] = n, n.total === n.count) { delete this._chunkedData[t]; var i = new Blob(n.data);
                            this._handleDataMessage({ data: i }) } }, u.prototype.close = function() { this._buffer = [], this._bufferSize = 0, this._chunkedData = {}, this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.open && (this._open = !1, n.prototype.emit.call(this, s.ConnectionEventType.Close)) }, u.prototype.send = function(e, t) { var i = this; if (this.open)
                            if (this._reliable) this._reliable.send(e);
                            else if (this.serialization === s.SerializationType.JSON) this._bufferedSend(JSON.stringify(e));
                        else if (this.serialization === s.SerializationType.Binary || this.serialization === s.SerializationType.BinaryUTF8) { var o = r.util.pack(e); if ((r.util.chunkedBrowsers[this._peerBrowser] || r.util.chunkedBrowsers[r.util.browser]) && !t && o.size > r.util.chunkedMTU) return void this._sendChunks(o);
                            r.util.supports.sctp ? r.util.supports.binaryBlob ? this._bufferedSend(o) : r.util.blobToArrayBuffer(o, function(e) { i._bufferedSend(e) }) : r.util.blobToBinaryString(o, function(e) { i._bufferedSend(e) }) } else this._bufferedSend(e);
                        else n.prototype.emit.call(this, s.ConnectionEventType.Error, new Error("Connection is not open. You should listen for the `open` event before sending messages.")) }, u.prototype._bufferedSend = function(e) {!this._buffering && this._trySend(e) || (this._buffer.push(e), this._bufferSize = this._buffer.length) }, u.prototype._trySend = function(e) { var t = this; if (!this.open) return !1; try { this.dataChannel.send(e) } catch (n) { return this._buffering = !0, setTimeout(function() { t._buffering = !1, t._tryBuffer() }, 100), !1 } return !0 }, u.prototype._tryBuffer = function() { if (this.open && 0 !== this._buffer.length) { var e = this._buffer[0];
                            this._trySend(e) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer()) } }, u.prototype._sendChunks = function(e) { var n, i, o = r.util.chunk(e); try { for (var a = t(o), s = a.next(); !s.done; s = a.next()) { var u = s.value;
                                this.send(u, !0) } } catch (l) { n = { error: l } } finally { try { s && !s.done && (i = a.return) && i.call(a) } finally { if (n) throw n.error } } }, u.prototype.handleMessage = function(e) { var t = e.payload; switch (e.type) {
                            case s.ServerMessageType.Answer:
                                this._peerBrowser = t.browser, this._negotiator.handleSDP(e.type, t.sdp); break;
                            case s.ServerMessageType.Candidate:
                                this._negotiator.handleCandidate(t.candidate); break;
                            default:
                                o.default.warn("Unrecognized message type:", e.type, "from peer:", this.peer) } }, u.ID_PREFIX = "dc_", u }(u.BaseConnection);
            exports.DataConnection = l;
        }, { "reliable": "aYFJ", "./util": "BHXf", "./logger": "8WOs", "./negotiator": "HCdX", "./enums": "9ZRY", "./baseconnection": "tQFK" }],
        "in7L": [function(require, module, exports) {
            "use strict";
            var t = this && this.__awaiter || function(t, e, r, o) { return new(r || (r = Promise))(function(n, s) {
                        function i(t) { try { a(o.next(t)) } catch (e) { s(e) } }

                        function u(t) { try { a(o.throw(t)) } catch (e) { s(e) } }

                        function a(t) { t.done ? n(t.value) : new r(function(e) { e(t.value) }).then(i, u) }
                        a((o = o.apply(t, e || [])).next()) }) },
                e = this && this.__generator || function(t, e) { var r, o, n, s, i = { label: 0, sent: function() { if (1 & n[0]) throw n[1]; return n[1] }, trys: [], ops: [] }; return s = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s;

                    function u(s) { return function(u) { return function(s) { if (r) throw new TypeError("Generator is already executing."); for (; i;) try { if (r = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n; switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                        case 0:
                                        case 1:
                                            n = s; break;
                                        case 4:
                                            return i.label++, { value: s[1], done: !1 };
                                        case 5:
                                            i.label++, o = s[1], s = [0]; continue;
                                        case 7:
                                            s = i.ops.pop(), i.trys.pop(); continue;
                                        default:
                                            if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) { i = 0; continue } if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) { i.label = s[1]; break } if (6 === s[0] && i.label < n[1]) { i.label = n[1], n = s; break } if (n && i.label < n[2]) { i.label = n[2], i.ops.push(s); break }
                                            n[2] && i.ops.pop(), i.trys.pop(); continue }
                                    s = e.call(t, i) } catch (u) { s = [6, u], o = 0 } finally { r = n = 0 }
                                if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 } }([s, u]) } } },
                r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var o = require("./util"),
                n = r(require("./logger")),
                s = function() {
                    function r(t) { this._options = t } return r.prototype._buildUrl = function(t) { var e = (this._options.secure ? "https://" : "http://") + this._options.host + ":" + this._options.port + this._options.path + this._options.key + "/" + t; return e += "?ts=" + (new Date).getTime() + Math.random() }, r.prototype.retrieveId = function() { return t(this, void 0, Promise, function() { var t, r, s, i; return e(this, function(e) { switch (e.label) {
                                    case 0:
                                        t = this._buildUrl("id"), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, fetch(t)];
                                    case 2:
                                        if (200 !== (r = e.sent()).status) throw new Error("Error. Status:" + r.status); return [2, r.text()];
                                    case 3:
                                        throw s = e.sent(), n.default.error("Error retrieving ID", s), i = "", "/" === this._options.path && this._options.host !== o.util.CLOUD_HOST && (i = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + i);
                                    case 4:
                                        return [2] } }) }) }, r.prototype.listAllPeers = function() { return t(this, void 0, Promise, function() { var t, r, s, i; return e(this, function(e) { switch (e.label) {
                                    case 0:
                                        t = this._buildUrl("peers"), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, fetch(t)];
                                    case 2:
                                        if (200 !== (r = e.sent()).status) { if (401 === r.status) throw s = "", s = this._options.host === o.util.CLOUD_HOST ? "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + s); throw new Error("Error. Status:" + r.status) } return [2, r.json()];
                                    case 3:
                                        throw i = e.sent(), n.default.error("Error retrieving list peers", i), new Error("Could not get list peers from the server." + i);
                                    case 4:
                                        return [2] } }) }) }, r }();
            exports.API = s;
        }, { "./util": "BHXf", "./logger": "8WOs" }],
        "Hxpd": [function(require, module, exports) {
            "use strict";
            var e = this && this.__extends || function() { var e = function(t, n) { return (e = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(t, n) }; return function(t, n) {
                        function r() { this.constructor = t }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r) } }(),
                t = this && this.__assign || function() { return (t = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) },
                n = this && this.__values || function(e) { var t = "function" == typeof Symbol && e[Symbol.iterator],
                        n = 0; return t ? t.call(e) : { next: function() { return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e } } } },
                r = this && this.__read || function(e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n) return e; var r, o, i = n.call(e),
                        s = []; try { for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value) } catch (c) { o = { error: c } } finally { try { r && !r.done && (n = i.return) && n.call(i) } finally { if (o) throw o.error } } return s },
                o = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var i = require("eventemitter3"),
                s = require("./util"),
                c = o(require("./logger")),
                a = require("./socket"),
                l = require("./mediaconnection"),
                d = require("./dataconnection"),
                u = require("./enums"),
                p = require("./api"),
                h = function() { return function() {} }(),
                f = function(o) {
                    function i(e, n) { var r = o.call(this) || this; return r._destroyed = !1, r._disconnected = !1, r._open = !1, r._connections = new Map, r._lostMessages = new Map, e && e.constructor == Object ? (n = e, e = void 0) : e && (e = e.toString()), n = t({ debug: 0, host: s.util.CLOUD_HOST, port: s.util.CLOUD_PORT, path: "/", key: i.DEFAULT_KEY, token: s.util.randomToken(), config: s.util.defaultConfig }, n), r._options = n, "/" === n.host && (n.host = window.location.hostname), "/" !== n.path[0] && (n.path = "/" + n.path), "/" !== n.path[n.path.length - 1] && (n.path += "/"), void 0 === n.secure && n.host !== s.util.CLOUD_HOST ? n.secure = s.util.isSecure() : n.host == s.util.CLOUD_HOST && (n.secure = !0), n.logFunction && c.default.setLogFunction(n.logFunction), c.default.logLevel = n.debug, s.util.supports.audioVideo || s.util.supports.data ? s.util.validateId(e) ? (r._api = new p.API(n), r._initializeServerConnection(), e ? r._initialize(e) : r._api.retrieveId().then(function(e) { return r._initialize(e) }).catch(function(e) { return r._abort(u.PeerErrorType.ServerError, e) }), r) : (r._delayedAbort(u.PeerErrorType.InvalidID, 'ID "' + e + '" is invalid'), r) : (r._delayedAbort(u.PeerErrorType.BrowserIncompatible, "The current browser does not support WebRTC"), r) } return e(i, o), Object.defineProperty(i.prototype, "id", { get: function() { return this._id }, enumerable: !0, configurable: !0 }), Object.defineProperty(i.prototype, "options", { get: function() { return this._options }, enumerable: !0, configurable: !0 }), Object.defineProperty(i.prototype, "open", { get: function() { return this._open }, enumerable: !0, configurable: !0 }), Object.defineProperty(i.prototype, "socket", { get: function() { return this._socket }, enumerable: !0, configurable: !0 }), Object.defineProperty(i.prototype, "connections", { get: function() { var e, t, o = Object.create(null); try { for (var i = n(this._connections), s = i.next(); !s.done; s = i.next()) { var c = r(s.value, 2),
                                        a = c[0],
                                        l = c[1];
                                    o[a] = l } } catch (d) { e = { error: d } } finally { try { s && !s.done && (t = i.return) && t.call(i) } finally { if (e) throw e.error } } return o }, enumerable: !0, configurable: !0 }), Object.defineProperty(i.prototype, "destroyed", { get: function() { return this._destroyed }, enumerable: !0, configurable: !0 }), Object.defineProperty(i.prototype, "disconnected", { get: function() { return this._disconnected }, enumerable: !0, configurable: !0 }), i.prototype._initializeServerConnection = function() { var e = this;
                        this._socket = new a.Socket(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval), this.socket.on(u.SocketEventType.Message, function(t) { e._handleMessage(t) }), this.socket.on(u.SocketEventType.Error, function(t) { e._abort(u.PeerErrorType.SocketError, t) }), this.socket.on(u.SocketEventType.Disconnected, function() { e.disconnected || (e.emitError(u.PeerErrorType.Network, "Lost connection to server."), e.disconnect()) }), this.socket.on(u.SocketEventType.Close, function() { e.disconnected || e._abort(u.PeerErrorType.SocketClosed, "Underlying socket is already closed.") }) }, i.prototype._initialize = function(e) { this._id = e, this.socket.start(this.id, this._options.token) }, i.prototype._handleMessage = function(e) { var t, r, o = e.type,
                            i = e.payload,
                            s = e.src; switch (o) {
                            case u.ServerMessageType.Open:
                                this.emit(u.PeerEventType.Open, this.id), this._open = !0; break;
                            case u.ServerMessageType.Error:
                                this._abort(u.PeerErrorType.ServerError, i.msg); break;
                            case u.ServerMessageType.IdTaken:
                                this._abort(u.PeerErrorType.UnavailableID, 'ID "' + this.id + '" is taken'); break;
                            case u.ServerMessageType.InvalidKey:
                                this._abort(u.PeerErrorType.InvalidKey, 'API KEY "' + this._options.key + '" is invalid'); break;
                            case u.ServerMessageType.Leave:
                                c.default.log("Received leave message from", s), this._cleanupPeer(s), this._connections.delete(s); break;
                            case u.ServerMessageType.Expire:
                                this.emitError(u.PeerErrorType.PeerUnavailable, "Could not connect to peer " + s); break;
                            case u.ServerMessageType.Offer:
                                var a = i.connectionId; if ((_ = this.getConnection(s, a)) && (_.close(), c.default.warn("Offer received for existing Connection ID:", a)), i.type === u.ConnectionType.Media) _ = new l.MediaConnection(s, this, { connectionId: a, _payload: i, metadata: i.metadata }), this._addConnection(s, _), this.emit(u.PeerEventType.Call, _);
                                else { if (i.type !== u.ConnectionType.Data) return void c.default.warn("Received malformed connection type:", i.type);
                                    _ = new d.DataConnection(s, this, { connectionId: a, _payload: i, metadata: i.metadata, label: i.label, serialization: i.serialization, reliable: i.reliable }), this._addConnection(s, _), this.emit(u.PeerEventType.Connection, _) } var p = this._getMessages(a); try { for (var h = n(p), f = h.next(); !f.done; f = h.next()) { var y = f.value;
                                        _.handleMessage(y) } } catch (v) { t = { error: v } } finally { try { f && !f.done && (r = h.return) && r.call(h) } finally { if (t) throw t.error } } break;
                            default:
                                if (!i) return void c.default.warn("You received a malformed message from " + s + " of type " + o); var _;
                                a = i.connectionId;
                                (_ = this.getConnection(s, a)) && _.peerConnection ? _.handleMessage(e) : a ? this._storeMessage(a, e) : c.default.warn("You received an unrecognized message:", e) } }, i.prototype._storeMessage = function(e, t) { this._lostMessages.has(e) || this._lostMessages.set(e, []), this._lostMessages.get(e).push(t) }, i.prototype._getMessages = function(e) { var t = this._lostMessages.get(e); return t ? (this._lostMessages.delete(e), t) : [] }, i.prototype.connect = function(e, t) { if (void 0 === t && (t = {}), this.disconnected) return c.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), void this.emitError(u.PeerErrorType.Disconnected, "Cannot connect to new Peer after disconnecting from server."); var n = new d.DataConnection(e, this, t); return this._addConnection(e, n), n }, i.prototype.call = function(e, t, n) { if (void 0 === n && (n = {}), this.disconnected) return c.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), void this.emitError(u.PeerErrorType.Disconnected, "Cannot connect to new Peer after disconnecting from server."); if (t) { n._stream = t; var r = new l.MediaConnection(e, this, n); return this._addConnection(e, r), r }
                        c.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.") }, i.prototype._addConnection = function(e, t) { c.default.log("add connection " + t.type + ":" + t.connectionId + "\n       to peerId:" + e), this._connections.has(e) || this._connections.set(e, []), this._connections.get(e).push(t) }, i.prototype._removeConnection = function(e) { var t = this._connections.get(e.peer); if (t) { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) }
                        this._lostMessages.delete(e.connectionId) }, i.prototype.getConnection = function(e, t) { var r, o, i = this._connections.get(e); if (!i) return null; try { for (var s = n(i), c = s.next(); !c.done; c = s.next()) { var a = c.value; if (a.connectionId === t) return a } } catch (l) { r = { error: l } } finally { try { c && !c.done && (o = s.return) && o.call(s) } finally { if (r) throw r.error } } return null }, i.prototype._delayedAbort = function(e, t) { var n = this;
                        setTimeout(function() { n._abort(e, t) }, 0) }, i.prototype._abort = function(e, t) { c.default.error("Aborting!"), this._lastServerId ? this.disconnect() : this.destroy(), this.emitError(e, t) }, i.prototype.emitError = function(e, t) { c.default.error("Error:", t), "string" == typeof t && (t = new Error(t)), t.type = e, this.emit(u.PeerEventType.Error, t) }, i.prototype.destroy = function() { this.destroyed || (this._cleanup(), this.disconnect(), this._destroyed = !0) }, i.prototype._cleanup = function() { var e, t; try { for (var r = n(this._connections.keys()), o = r.next(); !o.done; o = r.next()) { var i = o.value;
                                this._cleanupPeer(i), this._connections.delete(i) } } catch (s) { e = { error: s } } finally { try { o && !o.done && (t = r.return) && t.call(r) } finally { if (e) throw e.error } }
                        this.emit(u.PeerEventType.Close) }, i.prototype._cleanupPeer = function(e) { var t, r, o = this._connections.get(e); if (o) try { for (var i = n(o), s = i.next(); !s.done; s = i.next()) { s.value.close() } } catch (c) { t = { error: c } } finally { try { s && !s.done && (r = i.return) && r.call(i) } finally { if (t) throw t.error } } }, i.prototype.disconnect = function() { var e = this;
                        setTimeout(function() { e.disconnected || (e._disconnected = !0, e._open = !1, e.socket && e.socket.close(), e.emit(u.PeerEventType.Disconnected, e.id), e._lastServerId = e.id, e._id = null) }, 0) }, i.prototype.reconnect = function() { if (this.disconnected && !this.destroyed) c.default.log("Attempting reconnection to server with ID " + this._lastServerId), this._disconnected = !1, this._initializeServerConnection(), this._initialize(this._lastServerId);
                        else { if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed."); if (this.disconnected || this.open) throw new Error("Peer " + this.id + " cannot reconnect because it is not disconnected from the server!");
                            c.default.error("In a hurry? We're still trying to make the initial connection!") } }, i.prototype.listAllPeers = function(e) { var t = this;
                        void 0 === e && (e = function(e) {}), this._api.listAllPeers().then(function(t) { return e(t) }).catch(function(e) { return t._abort(u.PeerErrorType.ServerError, e) }) }, i.DEFAULT_KEY = "peerjs", i }(i.EventEmitter);
            exports.Peer = f;
        }, { "eventemitter3": "2JJl", "./util": "BHXf", "./logger": "8WOs", "./socket": "wJlv", "./mediaconnection": "dbHP", "./dataconnection": "GBTQ", "./enums": "9ZRY", "./api": "in7L" }],
        "iTK6": [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: !0 });
            var e = require("./util"),
                r = require("./peer");
            exports.peerjs = { Peer: r.Peer, util: e.util }, exports.default = r.Peer, window.peerjs = exports.peerjs, window.Peer = r.Peer;
        }, { "./util": "BHXf", "./peer": "Hxpd" }]
    }, {}, ["iTK6"], null)
    //# sourceMappingURL=/peerjs.min.js.map