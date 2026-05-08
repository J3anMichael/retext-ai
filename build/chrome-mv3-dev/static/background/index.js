(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bYoni":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\jeanm\\OneDrive\\Documents\\Extens\xe3o\\retext-ai\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"14rpM"}],"14rpM":[function(require,module,exports) {
var _gemini = require("~lib/gemini");
var _storage = require("~lib/storage");
console.log("ReText AI: Background Service Worker iniciado");
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    console.log("ReText AI: Mensagem recebida no background:", message);
    if (message.type === "GENERATE_IMPROVEMENT") {
        handleImprovement(message.text, message.mode, sendResponse);
        return true;
    }
});
async function handleImprovement(text, mode, sendResponse) {
    try {
        const apiKey = await (0, _storage.getApiKey)();
        if (!apiKey) {
            console.error("ReText AI: Erro - API Key n\xe3o encontrada no storage");
            sendResponse({
                success: false,
                error: "API Key n\xe3o configurada no popup"
            });
            return;
        }
        console.log("ReText AI: Chamando API do Gemini para texto de", text.length, "chars");
        const result = await (0, _gemini.improveText)(text, mode, apiKey);
        console.log("ReText AI: Resultado da API recebido com sucesso");
        sendResponse(result);
    } catch (error) {
        console.error("ReText AI: Erro fatal no background:", error);
        sendResponse({
            success: false,
            error: error.message || "Erro no Background"
        });
    }
}

},{"~lib/gemini":"4LSrT","~lib/storage":"61yy7"}],"4LSrT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "improveText", ()=>improveText);
var _prompts = require("./prompts");
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
const MAX_TEXT_LENGTH = 3000;
const REQUEST_TIMEOUT_MS = 20000;
async function improveText(text, mode, apiKey) {
    if (!text.trim()) return {
        success: false,
        error: "O texto est\xe1 vazio."
    };
    if (text.length > MAX_TEXT_LENGTH) return {
        success: false,
        error: `Texto muito longo. M\u00e1ximo: ${MAX_TEXT_LENGTH} caracteres.`
    };
    if (!apiKey || apiKey.trim().length < 10) return {
        success: false,
        error: "Chave de API inv\xe1lida. Configure nas configura\xe7\xf5es."
    };
    const prompt = (0, _prompts.PROMPTS)[mode].replace("{texto}", text.trim());
    const body = {
        system_instruction: {
            parts: [
                {
                    text: (0, _prompts.SYSTEM_INSTRUCTION)
                }
            ]
        },
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ],
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
            responseMimeType: "text/plain"
        },
        safetySettings: [
            {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_NONE"
            },
            {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_NONE"
            },
            {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_NONE"
            },
            {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_NONE"
            }
        ]
    };
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), REQUEST_TIMEOUT_MS);
    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
            signal: controller.signal
        });
        clearTimeout(timeout);
        if (!response.ok) {
            const errData = await response.json().catch(()=>({}));
            if (response.status === 400) return {
                success: false,
                error: "Chave de API inv\xe1lida ou requisi\xe7\xe3o incorreta."
            };
            if (response.status === 429) return {
                success: false,
                error: "Limite de uso atingido. Aguarde alguns segundos e tente novamente."
            };
            if (response.status === 403) return {
                success: false,
                error: "Acesso negado. Verifique sua chave de API."
            };
            const msg = errData?.error?.message ?? "Erro desconhecido na API.";
            return {
                success: false,
                error: `Erro ${response.status}: ${msg}`
            };
        }
        const data = await response.json();
        const resultText = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
        if (!resultText.trim()) return {
            success: false,
            error: "A IA n\xe3o retornou um resultado. Tente novamente."
        };
        return {
            success: true,
            text: resultText.trim()
        };
    } catch (err) {
        clearTimeout(timeout);
        if (err?.name === "AbortError") return {
            success: false,
            error: "Tempo limite excedido. Verifique sua conex\xe3o."
        };
        return {
            success: false,
            error: "Erro ao conectar com a IA. Verifique sua conex\xe3o com a internet."
        };
    }
}

},{"./prompts":"c7iuN","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"c7iuN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MODES", ()=>MODES);
parcelHelpers.export(exports, "SYSTEM_INSTRUCTION", ()=>SYSTEM_INSTRUCTION);
parcelHelpers.export(exports, "PROMPTS", ()=>PROMPTS);
const MODES = [
    {
        id: "corrigir",
        label: "Corrigir",
        emoji: "\u2705",
        description: "Corrige gram\xe1tica, ortografia e pontua\xe7\xe3o",
        color: "from-teal-500 to-teal-600"
    },
    {
        id: "profissional",
        label: "Profissional",
        emoji: "\uD83D\uDCBC",
        description: "Reescreve com linguagem corporativa formal",
        color: "from-teal-600 to-teal-700"
    },
    {
        id: "humanizar",
        label: "Humanizar",
        emoji: "\u2764\ufe0f",
        description: "Torna o texto mais natural e caloroso",
        color: "from-teal-400 to-teal-600"
    },
    {
        id: "educado",
        label: "Mais Educado",
        emoji: "\uD83C\uDFA9",
        description: "Suaviza o tom e adiciona cortesia",
        color: "from-teal-500 to-teal-700"
    },
    {
        id: "tecnico",
        label: "Mais T\xe9cnico",
        emoji: "\u2699\ufe0f",
        description: "Usa terminologia precisa e estrutura l\xf3gica",
        color: "from-teal-600 to-teal-800"
    },
    {
        id: "objetivo",
        label: "Mais Objetivo",
        emoji: "\uD83C\uDFAF",
        description: "Remove redund\xe2ncias, vai direto ao ponto",
        color: "from-teal-400 to-teal-500"
    }
];
const SYSTEM_INSTRUCTION = `Voc\u00ea \u00e9 o ReText AI, um assistente especializado em melhorar textos em portugu\u00eas brasileiro.
Voc\u00ea \u00e9 preciso, natural e inteligente. Sempre retorne APENAS o texto melhorado, sem explica\u00e7\u00f5es, sem aspas, sem coment\u00e1rios adicionais.
Mantenha o significado original e adapte apenas conforme o modo solicitado.`;
const PROMPTS = {
    corrigir: `Corrija gram\u00e1tica, ortografia e pontua\u00e7\u00e3o do texto a seguir. Mantenha o estilo e tom originais. Retorne apenas o texto corrigido:

{texto}`,
    profissional: `Reescreva o texto a seguir com linguagem corporativa, formal e profissional, adequada para ambientes de trabalho, como e-mails corporativos, LinkedIn ou reuni\u00f5es executivas. Mantenha o significado. Retorne apenas o texto reescrito:

{texto}`,
    humanizar: `Reescreva o texto a seguir de forma mais natural, humana e calorosa. Elimine qualquer sensa\u00e7\u00e3o de texto gerado por IA. Deixe fluido como se fosse escrito por uma pessoa real. Retorne apenas o texto reescrito:

{texto}`,
    educado: `Reescreva o texto a seguir de forma mais educada, gentil e respeitosa. Suavize o tom sem perder o significado. Adicione cortesia onde apropriado. Retorne apenas o texto reescrito:

{texto}`,
    tecnico: `Reescreva o texto a seguir de forma mais t\u00e9cnica, precisa e estruturada. Use terminologia adequada, seja mais espec\u00edfico e l\u00f3gico. Retorne apenas o texto reescrito:

{texto}`,
    objetivo: `Reescreva o texto a seguir de forma mais objetiva e direta. Elimine redund\u00e2ncias, palavras desnecess\u00e1rias e rodeios. V\u00e1 direto ao ponto sem perder a ess\u00eancia. Retorne apenas o texto reescrito:

{texto}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iIXqM":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"61yy7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getApiKey", ()=>getApiKey);
parcelHelpers.export(exports, "setApiKey", ()=>setApiKey);
parcelHelpers.export(exports, "clearApiKey", ()=>clearApiKey);
parcelHelpers.export(exports, "getHistory", ()=>getHistory);
parcelHelpers.export(exports, "addToHistory", ()=>addToHistory);
parcelHelpers.export(exports, "getDailyUsage", ()=>getDailyUsage);
parcelHelpers.export(exports, "incrementDailyUsage", ()=>incrementDailyUsage);
const STORAGE_KEY_API_KEY = "retext_api_key";
const STORAGE_KEY_HISTORY = "retext_history";
const STORAGE_KEY_DAILY = "retext_daily";
async function getApiKey() {
    return new Promise((resolve)=>{
        chrome.storage.local.get([
            STORAGE_KEY_API_KEY
        ], (result)=>{
            resolve(result[STORAGE_KEY_API_KEY] ?? null);
        });
    });
}
async function setApiKey(key) {
    return new Promise((resolve)=>{
        chrome.storage.local.set({
            [STORAGE_KEY_API_KEY]: key
        }, resolve);
    });
}
async function clearApiKey() {
    return new Promise((resolve)=>{
        chrome.storage.local.remove([
            STORAGE_KEY_API_KEY
        ], resolve);
    });
}
async function getHistory() {
    return new Promise((resolve)=>{
        chrome.storage.local.get([
            STORAGE_KEY_HISTORY
        ], (result)=>{
            resolve(result[STORAGE_KEY_HISTORY] ?? []);
        });
    });
}
async function addToHistory(item) {
    const history = await getHistory();
    const newItem = {
        ...item,
        id: crypto.randomUUID()
    };
    const updated = [
        newItem,
        ...history
    ].slice(0, 50) // max 50 items
    ;
    return new Promise((resolve)=>{
        chrome.storage.local.set({
            [STORAGE_KEY_HISTORY]: updated
        }, resolve);
    });
}
async function getDailyUsage() {
    return new Promise((resolve)=>{
        chrome.storage.local.get([
            STORAGE_KEY_DAILY
        ], (result)=>{
            const today = new Date().toISOString().split("T")[0];
            const stored = result[STORAGE_KEY_DAILY];
            if (stored && stored.date === today) resolve(stored);
            else resolve({
                date: today,
                count: 0
            });
        });
    });
}
async function incrementDailyUsage() {
    const usage = await getDailyUsage();
    const updated = {
        ...usage,
        count: usage.count + 1
    };
    return new Promise((resolve)=>{
        chrome.storage.local.set({
            [STORAGE_KEY_DAILY]: updated
        }, ()=>{
            resolve(updated.count);
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}]},["bYoni","8oeFb"], "8oeFb", "parcelRequireddfc")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvRCxPQUFPLElBQUksUUFBUSxDQUFDO1FBQ2xCLE9BQU8sUUFBUSxNQUFNLElBQUk7WUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQVEsR0FBRztZQUN6RCxRQUFRLFFBQVE7UUFDbEI7SUFDRjtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1lZDBmZDYxZjdjZTM3Yjg0LmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQudHMiLCJsaWIvZ2VtaW5pLnRzIiwibGliL3Byb21wdHMudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsImxpYi9zdG9yYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIGg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIGI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxqZWFubVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcRXh0ZW5zw6NvXFxcXHJldGV4dC1haVxcXFwucGxhc21vXFxcXHN0YXRpY1xcXFxiYWNrZ3JvdW5kXFxcXGluZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSChlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUg7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gUigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiB4KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFA9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUz1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke1IoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gayhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gRShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEMoZT1kKCkpe2xldCB0PXgoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBMKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnkoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBUKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0fWZ1bmN0aW9uIEEoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2YoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57ZihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIXd8fCF3LmlzUGFyY2VsUmVxdWlyZSl7YigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IGsoKSxwKCEwKX0pfVQoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKFApLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUyk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2JhY2tncm91bmRcIiIsImltcG9ydCB7IGltcHJvdmVUZXh0IH0gZnJvbSBcIn5saWIvZ2VtaW5pXCJcbmltcG9ydCB7IGdldEFwaUtleSB9IGZyb20gXCJ+bGliL3N0b3JhZ2VcIlxuXG5jb25zb2xlLmxvZyhcIlJlVGV4dCBBSTogQmFja2dyb3VuZCBTZXJ2aWNlIFdvcmtlciBpbmljaWFkb1wiKTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlJlVGV4dCBBSTogTWVuc2FnZW0gcmVjZWJpZGEgbm8gYmFja2dyb3VuZDpcIiwgbWVzc2FnZSk7XG4gIFxuICBpZiAobWVzc2FnZS50eXBlID09PSBcIkdFTkVSQVRFX0lNUFJPVkVNRU5UXCIpIHtcbiAgICBoYW5kbGVJbXByb3ZlbWVudChtZXNzYWdlLnRleHQsIG1lc3NhZ2UubW9kZSwgc2VuZFJlc3BvbnNlKVxuICAgIHJldHVybiB0cnVlIFxuICB9XG59KVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVJbXByb3ZlbWVudCh0ZXh0OiBzdHJpbmcsIG1vZGU6IGFueSwgc2VuZFJlc3BvbnNlOiAocmVzOiBhbnkpID0+IHZvaWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCBnZXRBcGlLZXkoKVxuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVUZXh0IEFJOiBFcnJvIC0gQVBJIEtleSBuw6NvIGVuY29udHJhZGEgbm8gc3RvcmFnZVwiKTtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBUEkgS2V5IG7Do28gY29uZmlndXJhZGEgbm8gcG9wdXBcIiB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJSZVRleHQgQUk6IENoYW1hbmRvIEFQSSBkbyBHZW1pbmkgcGFyYSB0ZXh0byBkZVwiLCB0ZXh0Lmxlbmd0aCwgXCJjaGFyc1wiKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpbXByb3ZlVGV4dCh0ZXh0LCBtb2RlLCBhcGlLZXkpXG4gICAgY29uc29sZS5sb2coXCJSZVRleHQgQUk6IFJlc3VsdGFkbyBkYSBBUEkgcmVjZWJpZG8gY29tIHN1Y2Vzc29cIik7XG4gICAgc2VuZFJlc3BvbnNlKHJlc3VsdClcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZVRleHQgQUk6IEVycm8gZmF0YWwgbm8gYmFja2dyb3VuZDpcIiwgZXJyb3IpO1xuICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBcIkVycm8gbm8gQmFja2dyb3VuZFwiIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFBST01QVFMsIFNZU1RFTV9JTlNUUlVDVElPTiwgdHlwZSBNb2RlIH0gZnJvbSBcIi4vcHJvbXB0c1wiXG5cbmNvbnN0IEdFTUlOSV9BUElfVVJMID1cbiAgXCJodHRwczovL2dlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbS92MWJldGEvbW9kZWxzL2dlbWluaS0zLWZsYXNoLXByZXZpZXc6Z2VuZXJhdGVDb250ZW50XCJcblxuY29uc3QgTUFYX1RFWFRfTEVOR1RIID0gMzAwMFxuY29uc3QgUkVRVUVTVF9USU1FT1VUX01TID0gMjAwMDBcblxuZXhwb3J0IGludGVyZmFjZSBHZW1pbmlSZXN1bHQge1xuICBzdWNjZXNzOiBib29sZWFuXG4gIHRleHQ/OiBzdHJpbmdcbiAgZXJyb3I/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltcHJvdmVUZXh0KFxuICB0ZXh0OiBzdHJpbmcsXG4gIG1vZGU6IE1vZGUsXG4gIGFwaUtleTogc3RyaW5nXG4pOiBQcm9taXNlPEdlbWluaVJlc3VsdD4ge1xuICBpZiAoIXRleHQudHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk8gdGV4dG8gZXN0w6EgdmF6aW8uXCIgfVxuICB9XG5cbiAgaWYgKHRleHQubGVuZ3RoID4gTUFYX1RFWFRfTEVOR1RIKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IGBUZXh0byBtdWl0byBsb25nby4gTcOheGltbzogJHtNQVhfVEVYVF9MRU5HVEh9IGNhcmFjdGVyZXMuYFxuICAgIH1cbiAgfVxuXG4gIGlmICghYXBpS2V5IHx8IGFwaUtleS50cmltKCkubGVuZ3RoIDwgMTApIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogXCJDaGF2ZSBkZSBBUEkgaW52w6FsaWRhLiBDb25maWd1cmUgbmFzIGNvbmZpZ3VyYcOnw7Vlcy5cIlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByb21wdCA9IFBST01QVFNbbW9kZV0ucmVwbGFjZShcInt0ZXh0b31cIiwgdGV4dC50cmltKCkpXG5cbiAgY29uc3QgYm9keSA9IHtcbiAgICBzeXN0ZW1faW5zdHJ1Y3Rpb246IHtcbiAgICAgIHBhcnRzOiBbeyB0ZXh0OiBTWVNURU1fSU5TVFJVQ1RJT04gfV1cbiAgICB9LFxuICAgIGNvbnRlbnRzOiBbXG4gICAgICB7XG4gICAgICAgIHBhcnRzOiBbeyB0ZXh0OiBwcm9tcHQgfV1cbiAgICAgIH1cbiAgICBdLFxuICAgIGdlbmVyYXRpb25Db25maWc6IHtcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgICB0b3BLOiA0MCxcbiAgICAgIHRvcFA6IDAuOTUsXG4gICAgICBtYXhPdXRwdXRUb2tlbnM6IDIwNDgsXG4gICAgICByZXNwb25zZU1pbWVUeXBlOiBcInRleHQvcGxhaW5cIlxuICAgIH0sXG4gICAgc2FmZXR5U2V0dGluZ3M6IFtcbiAgICAgIHsgY2F0ZWdvcnk6IFwiSEFSTV9DQVRFR09SWV9IQVJBU1NNRU5UXCIsIHRocmVzaG9sZDogXCJCTE9DS19OT05FXCIgfSxcbiAgICAgIHsgY2F0ZWdvcnk6IFwiSEFSTV9DQVRFR09SWV9IQVRFX1NQRUVDSFwiLCB0aHJlc2hvbGQ6IFwiQkxPQ0tfTk9ORVwiIH0sXG4gICAgICB7IGNhdGVnb3J5OiBcIkhBUk1fQ0FURUdPUllfU0VYVUFMTFlfRVhQTElDSVRcIiwgdGhyZXNob2xkOiBcIkJMT0NLX05PTkVcIiB9LFxuICAgICAgeyBjYXRlZ29yeTogXCJIQVJNX0NBVEVHT1JZX0RBTkdFUk9VU19DT05URU5UXCIsIHRocmVzaG9sZDogXCJCTE9DS19OT05FXCIgfVxuICAgIF1cbiAgfVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCBSRVFVRVNUX1RJTUVPVVRfTVMpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0dFTUlOSV9BUElfVVJMfT9rZXk9JHthcGlLZXl9YCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbFxuICAgIH0pXG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGVyckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHt9KSlcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJDaGF2ZSBkZSBBUEkgaW52w6FsaWRhIG91IHJlcXVpc2nDp8OjbyBpbmNvcnJldGEuXCIgfVxuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJMaW1pdGUgZGUgdXNvIGF0aW5naWRvLiBBZ3VhcmRlIGFsZ3VucyBzZWd1bmRvcyBlIHRlbnRlIG5vdmFtZW50ZS5cIiB9XG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkFjZXNzbyBuZWdhZG8uIFZlcmlmaXF1ZSBzdWEgY2hhdmUgZGUgQVBJLlwiIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbXNnID0gZXJyRGF0YT8uZXJyb3I/Lm1lc3NhZ2UgPz8gXCJFcnJvIGRlc2NvbmhlY2lkbyBuYSBBUEkuXCJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEVycm8gJHtyZXNwb25zZS5zdGF0dXN9OiAke21zZ31gIH1cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc3QgcmVzdWx0VGV4dDogc3RyaW5nID1cbiAgICAgIGRhdGE/LmNhbmRpZGF0ZXM/LlswXT8uY29udGVudD8ucGFydHM/LlswXT8udGV4dCA/PyBcIlwiXG5cbiAgICBpZiAoIXJlc3VsdFRleHQudHJpbSgpKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQSBJQSBuw6NvIHJldG9ybm91IHVtIHJlc3VsdGFkby4gVGVudGUgbm92YW1lbnRlLlwiIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB0ZXh0OiByZXN1bHRUZXh0LnRyaW0oKSB9XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICBpZiAoZXJyPy5uYW1lID09PSBcIkFib3J0RXJyb3JcIikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlRlbXBvIGxpbWl0ZSBleGNlZGlkby4gVmVyaWZpcXVlIHN1YSBjb25leMOjby5cIiB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRXJybyBhbyBjb25lY3RhciBjb20gYSBJQS4gVmVyaWZpcXVlIHN1YSBjb25leMOjbyBjb20gYSBpbnRlcm5ldC5cIlxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IHR5cGUgTW9kZSA9XG4gIHwgXCJjb3JyaWdpclwiXG4gIHwgXCJwcm9maXNzaW9uYWxcIlxuICB8IFwiaHVtYW5pemFyXCJcbiAgfCBcImVkdWNhZG9cIlxuICB8IFwidGVjbmljb1wiXG4gIHwgXCJvYmpldGl2b1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kZUNvbmZpZyB7XG4gIGlkOiBNb2RlXG4gIGxhYmVsOiBzdHJpbmdcbiAgZW1vamk6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNvbG9yOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IE1PREVTOiBNb2RlQ29uZmlnW10gPSBbXG4gIHtcbiAgICBpZDogXCJjb3JyaWdpclwiLFxuICAgIGxhYmVsOiBcIkNvcnJpZ2lyXCIsXG4gICAgZW1vamk6IFwi4pyFXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29ycmlnZSBncmFtw6F0aWNhLCBvcnRvZ3JhZmlhIGUgcG9udHVhw6fDo29cIixcbiAgICBjb2xvcjogXCJmcm9tLXRlYWwtNTAwIHRvLXRlYWwtNjAwXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcInByb2Zpc3Npb25hbFwiLFxuICAgIGxhYmVsOiBcIlByb2Zpc3Npb25hbFwiLFxuICAgIGVtb2ppOiBcIvCfkrxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWVzY3JldmUgY29tIGxpbmd1YWdlbSBjb3Jwb3JhdGl2YSBmb3JtYWxcIixcbiAgICBjb2xvcjogXCJmcm9tLXRlYWwtNjAwIHRvLXRlYWwtNzAwXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcImh1bWFuaXphclwiLFxuICAgIGxhYmVsOiBcIkh1bWFuaXphclwiLFxuICAgIGVtb2ppOiBcIuKdpO+4j1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRvcm5hIG8gdGV4dG8gbWFpcyBuYXR1cmFsIGUgY2Fsb3Jvc29cIixcbiAgICBjb2xvcjogXCJmcm9tLXRlYWwtNDAwIHRvLXRlYWwtNjAwXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcImVkdWNhZG9cIixcbiAgICBsYWJlbDogXCJNYWlzIEVkdWNhZG9cIixcbiAgICBlbW9qaTogXCLwn46pXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3Vhdml6YSBvIHRvbSBlIGFkaWNpb25hIGNvcnRlc2lhXCIsXG4gICAgY29sb3I6IFwiZnJvbS10ZWFsLTUwMCB0by10ZWFsLTcwMFwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0ZWNuaWNvXCIsXG4gICAgbGFiZWw6IFwiTWFpcyBUw6ljbmljb1wiLFxuICAgIGVtb2ppOiBcIuKame+4j1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVzYSB0ZXJtaW5vbG9naWEgcHJlY2lzYSBlIGVzdHJ1dHVyYSBsw7NnaWNhXCIsXG4gICAgY29sb3I6IFwiZnJvbS10ZWFsLTYwMCB0by10ZWFsLTgwMFwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJvYmpldGl2b1wiLFxuICAgIGxhYmVsOiBcIk1haXMgT2JqZXRpdm9cIixcbiAgICBlbW9qaTogXCLwn46vXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVtb3ZlIHJlZHVuZMOibmNpYXMsIHZhaSBkaXJldG8gYW8gcG9udG9cIixcbiAgICBjb2xvcjogXCJmcm9tLXRlYWwtNDAwIHRvLXRlYWwtNTAwXCJcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgU1lTVEVNX0lOU1RSVUNUSU9OID0gYFZvY8OqIMOpIG8gUmVUZXh0IEFJLCB1bSBhc3Npc3RlbnRlIGVzcGVjaWFsaXphZG8gZW0gbWVsaG9yYXIgdGV4dG9zIGVtIHBvcnR1Z3XDqnMgYnJhc2lsZWlyby5cblZvY8OqIMOpIHByZWNpc28sIG5hdHVyYWwgZSBpbnRlbGlnZW50ZS4gU2VtcHJlIHJldG9ybmUgQVBFTkFTIG8gdGV4dG8gbWVsaG9yYWRvLCBzZW0gZXhwbGljYcOnw7Vlcywgc2VtIGFzcGFzLCBzZW0gY29tZW50w6FyaW9zIGFkaWNpb25haXMuXG5NYW50ZW5oYSBvIHNpZ25pZmljYWRvIG9yaWdpbmFsIGUgYWRhcHRlIGFwZW5hcyBjb25mb3JtZSBvIG1vZG8gc29saWNpdGFkby5gXG5cbmV4cG9ydCBjb25zdCBQUk9NUFRTOiBSZWNvcmQ8TW9kZSwgc3RyaW5nPiA9IHtcbiAgY29ycmlnaXI6IGBDb3JyaWphIGdyYW3DoXRpY2EsIG9ydG9ncmFmaWEgZSBwb250dWHDp8OjbyBkbyB0ZXh0byBhIHNlZ3Vpci4gTWFudGVuaGEgbyBlc3RpbG8gZSB0b20gb3JpZ2luYWlzLiBSZXRvcm5lIGFwZW5hcyBvIHRleHRvIGNvcnJpZ2lkbzpcblxue3RleHRvfWAsXG5cbiAgcHJvZmlzc2lvbmFsOiBgUmVlc2NyZXZhIG8gdGV4dG8gYSBzZWd1aXIgY29tIGxpbmd1YWdlbSBjb3Jwb3JhdGl2YSwgZm9ybWFsIGUgcHJvZmlzc2lvbmFsLCBhZGVxdWFkYSBwYXJhIGFtYmllbnRlcyBkZSB0cmFiYWxobywgY29tbyBlLW1haWxzIGNvcnBvcmF0aXZvcywgTGlua2VkSW4gb3UgcmV1bmnDtWVzIGV4ZWN1dGl2YXMuIE1hbnRlbmhhIG8gc2lnbmlmaWNhZG8uIFJldG9ybmUgYXBlbmFzIG8gdGV4dG8gcmVlc2NyaXRvOlxuXG57dGV4dG99YCxcblxuICBodW1hbml6YXI6IGBSZWVzY3JldmEgbyB0ZXh0byBhIHNlZ3VpciBkZSBmb3JtYSBtYWlzIG5hdHVyYWwsIGh1bWFuYSBlIGNhbG9yb3NhLiBFbGltaW5lIHF1YWxxdWVyIHNlbnNhw6fDo28gZGUgdGV4dG8gZ2VyYWRvIHBvciBJQS4gRGVpeGUgZmx1aWRvIGNvbW8gc2UgZm9zc2UgZXNjcml0byBwb3IgdW1hIHBlc3NvYSByZWFsLiBSZXRvcm5lIGFwZW5hcyBvIHRleHRvIHJlZXNjcml0bzpcblxue3RleHRvfWAsXG5cbiAgZWR1Y2FkbzogYFJlZXNjcmV2YSBvIHRleHRvIGEgc2VndWlyIGRlIGZvcm1hIG1haXMgZWR1Y2FkYSwgZ2VudGlsIGUgcmVzcGVpdG9zYS4gU3Vhdml6ZSBvIHRvbSBzZW0gcGVyZGVyIG8gc2lnbmlmaWNhZG8uIEFkaWNpb25lIGNvcnRlc2lhIG9uZGUgYXByb3ByaWFkby4gUmV0b3JuZSBhcGVuYXMgbyB0ZXh0byByZWVzY3JpdG86XG5cbnt0ZXh0b31gLFxuXG4gIHRlY25pY286IGBSZWVzY3JldmEgbyB0ZXh0byBhIHNlZ3VpciBkZSBmb3JtYSBtYWlzIHTDqWNuaWNhLCBwcmVjaXNhIGUgZXN0cnV0dXJhZGEuIFVzZSB0ZXJtaW5vbG9naWEgYWRlcXVhZGEsIHNlamEgbWFpcyBlc3BlY8OtZmljbyBlIGzDs2dpY28uIFJldG9ybmUgYXBlbmFzIG8gdGV4dG8gcmVlc2NyaXRvOlxuXG57dGV4dG99YCxcblxuICBvYmpldGl2bzogYFJlZXNjcmV2YSBvIHRleHRvIGEgc2VndWlyIGRlIGZvcm1hIG1haXMgb2JqZXRpdmEgZSBkaXJldGEuIEVsaW1pbmUgcmVkdW5kw6JuY2lhcywgcGFsYXZyYXMgZGVzbmVjZXNzw6FyaWFzIGUgcm9kZWlvcy4gVsOhIGRpcmV0byBhbyBwb250byBzZW0gcGVyZGVyIGEgZXNzw6puY2lhLiBSZXRvcm5lIGFwZW5hcyBvIHRleHRvIHJlZXNjcml0bzpcblxue3RleHRvfWBcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImNvbnN0IFNUT1JBR0VfS0VZX0FQSV9LRVkgPSBcInJldGV4dF9hcGlfa2V5XCJcbmNvbnN0IFNUT1JBR0VfS0VZX0hJU1RPUlkgPSBcInJldGV4dF9oaXN0b3J5XCJcbmNvbnN0IFNUT1JBR0VfS0VZX0RBSUxZID0gXCJyZXRleHRfZGFpbHlcIlxuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlJdGVtIHtcbiAgaWQ6IHN0cmluZ1xuICBvcmlnaW5hbDogc3RyaW5nXG4gIHJlc3VsdDogc3RyaW5nXG4gIG1vZGU6IHN0cmluZ1xuICB0aW1lc3RhbXA6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhaWx5VXNhZ2Uge1xuICBkYXRlOiBzdHJpbmdcbiAgY291bnQ6IG51bWJlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBpS2V5KCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1NUT1JBR0VfS0VZX0FQSV9LRVldLCAocmVzdWx0KSA9PiB7XG4gICAgICByZXNvbHZlKChyZXN1bHRbU1RPUkFHRV9LRVlfQVBJX0tFWV0gYXMgc3RyaW5nKSA/PyBudWxsKVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRBcGlLZXkoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1NUT1JBR0VfS0VZX0FQSV9LRVldOiBrZXkgfSwgcmVzb2x2ZSlcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyQXBpS2V5KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1NUT1JBR0VfS0VZX0FQSV9LRVldLCByZXNvbHZlKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlzdG9yeSgpOiBQcm9taXNlPEhpc3RvcnlJdGVtW10+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtTVE9SQUdFX0tFWV9ISVNUT1JZXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgcmVzb2x2ZSgocmVzdWx0W1NUT1JBR0VfS0VZX0hJU1RPUlldIGFzIEhpc3RvcnlJdGVtW10pID8/IFtdKVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0hpc3RvcnkoaXRlbTogT21pdDxIaXN0b3J5SXRlbSwgXCJpZFwiPik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBoaXN0b3J5ID0gYXdhaXQgZ2V0SGlzdG9yeSgpXG4gIGNvbnN0IG5ld0l0ZW06IEhpc3RvcnlJdGVtID0geyAuLi5pdGVtLCBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSB9XG4gIGNvbnN0IHVwZGF0ZWQgPSBbbmV3SXRlbSwgLi4uaGlzdG9yeV0uc2xpY2UoMCwgNTApIC8vIG1heCA1MCBpdGVtc1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU1RPUkFHRV9LRVlfSElTVE9SWV06IHVwZGF0ZWQgfSwgcmVzb2x2ZSlcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhaWx5VXNhZ2UoKTogUHJvbWlzZTxEYWlseVVzYWdlPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbU1RPUkFHRV9LRVlfREFJTFldLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF1cbiAgICAgIGNvbnN0IHN0b3JlZCA9IHJlc3VsdFtTVE9SQUdFX0tFWV9EQUlMWV0gYXMgRGFpbHlVc2FnZSB8IHVuZGVmaW5lZFxuICAgICAgaWYgKHN0b3JlZCAmJiBzdG9yZWQuZGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgICAgcmVzb2x2ZShzdG9yZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgZGF0ZTogdG9kYXksIGNvdW50OiAwIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluY3JlbWVudERhaWx5VXNhZ2UoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgdXNhZ2UgPSBhd2FpdCBnZXREYWlseVVzYWdlKClcbiAgY29uc3QgdXBkYXRlZDogRGFpbHlVc2FnZSA9IHsgLi4udXNhZ2UsIGNvdW50OiB1c2FnZS5jb3VudCArIDEgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU1RPUkFHRV9LRVlfREFJTFldOiB1cGRhdGVkIH0sICgpID0+IHtcbiAgICAgIHJlc29sdmUodXBkYXRlZC5jb3VudClcbiAgICB9KVxuICB9KVxufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);