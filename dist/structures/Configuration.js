"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
class Configuration {
    constructor(options) {
        this.clientID = options.clientID;
        this.clientOptions = options.clientOptions;
        this.owners = options.owners;
        this.token = options.token;
    }
    ;
}
exports.Configuration = Configuration;
;
