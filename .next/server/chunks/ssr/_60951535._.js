module.exports = {

"[project]/app/gallery/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/gallery/page.tsx
__turbopack_context__.s({
    "default": (()=>GalleryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const imageData = [
    {
        src: "https://images.unsplash.com/photo-1743630738181-b0e26c76c74c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        tag: "dining"
    },
    {
        src: "https://images.unsplash.com/photo-1749226703567-96d55b5c5eca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        tag: "dining"
    },
    {
        src: "https://images.unsplash.com/photo-1749303025584-0b4e15e4146b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        tag: "dining"
    },
    {
        src: "https://images.unsplash.com/photo-1750126833705-ba98013f16f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        tag: "hall"
    },
    {
        src: "https://images.unsplash.com/photo-1746105839114-fbc9c81fcb17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        tag: "hall"
    },
    {
        src: "https://images.unsplash.com/photo-1748257615880-6243d0d7422f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
        tag: "hall"
    },
    {
        src: "https://images.unsplash.com/photo-1728443783579-494fdbfd8512?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
        tag: "parking"
    },
    {
        src: "https://images.unsplash.com/photo-1728443814449-7a2ad4d86ec3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
        tag: "parking"
    },
    {
        src: "https://images.unsplash.com/photo-1749318398976-5a9b45307aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
        tag: "parking"
    },
    {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        tag: "outdoor"
    },
    {
        src: "https://images.unsplash.com/photo-1749898853429-2d7bc67e6433?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
        tag: "outdoor"
    },
    {
        src: "https://images.unsplash.com/photo-1743930285895-ce090ae2a115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        tag: "outdoor"
    },
    {
        src: "https://images.unsplash.com/photo-1744019960830-eb79b2528f8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
        tag: "rooms"
    },
    {
        src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
        tag: "rooms"
    },
    {
        src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
        tag: "rooms"
    },
    {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        tag: "dining"
    },
    {
        src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=80",
        tag: "hall"
    },
    {
        src: "https://images.unsplash.com/photo-1744265385437-8b591b626a8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
        tag: "parking"
    },
    {
        src: "https://images.unsplash.com/photo-1750087328910-16dd862838eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        tag: "outdoor"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1748193468691-494891c77dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D",
        tag: "rooms"
    }
];
const filters = [
    "all",
    "dining",
    "hall",
    "parking",
    "outdoor",
    "rooms"
];
function GalleryPage() {
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const filteredImages = activeFilter === "all" ? imageData : imageData.filter((img)=>img.tag === activeFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-10 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-8 text-center",
                children: "Venue Gallery"
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-3 mb-8",
                children: filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFilter(f),
                        className: `px-4 py-2 rounded-2xl border transition ${activeFilter === f ? "border-2 border-red-600" : "border-gray-300 "}`,
                        children: f.charAt(0).toUpperCase() + f.slice(1)
                    }, f, false, {
                        fileName: "[project]/app/gallery/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4",
                children: filteredImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-xl shadow-md break-inside-avoid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img.src,
                            alt: img.tag,
                            className: "w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/app/gallery/page.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/gallery/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gallery/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_60951535._.js.map