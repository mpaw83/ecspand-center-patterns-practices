var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_quickSearch_global = (function (_super) {
    __extends(Template_quickSearch_global, _super);
    function Template_quickSearch_global(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{"provider":{"sourceID":"Meine Tolle Resource ID","usePrefixWildcard":false,"useSuffixWildcard":false,"additionalSelectProperties":[],"rowLimit":100,"sortList":"Rank: ascending","titleFormats":[]},"quickSearch":{"rediretToFileView":false,"placeholder":"Quick Search"}}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_quickSearch_global.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_quickSearch_global.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_quickSearch_global;
})(Template_quickSearch);
//# sourceURL=quickSearch_global.js
