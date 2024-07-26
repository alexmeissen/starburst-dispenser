// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../GolfBallXTSDemo_SIM/Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmi1;
        (function (TcHmi1) {
            function FunctionJS1(key) {
                const qstring = window.location.search;
                const params = new URLSearchParams(qstring);
                return params.get(key);
            }
            TcHmi1.FunctionJS1 = FunctionJS1;
        })(TcHmi1 = Functions.TcHmi1 || (Functions.TcHmi1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('FunctionJS1', 'TcHmi.Functions.TcHmi1', TcHmi.Functions.TcHmi1.FunctionJS1);
