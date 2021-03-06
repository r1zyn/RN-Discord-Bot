"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerHandler = void 0;
const Category_1 = require("../structures/Category");
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
class ListenerHandler {
    constructor(client, options) {
        this.categories = new discord_js_1.Collection();
        this.client = client;
        this.directory = options.directory;
        this.listeners = new discord_js_1.Collection();
    }
    ;
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = [];
                for (const category of (0, fs_1.readdirSync)(this.directory)) {
                    categories.push(category.toLowerCase());
                }
                ;
                categories.forEach((category) => __awaiter(this, void 0, void 0, function* () {
                    const categoryName = this.client.util.capitalize(category);
                    this.categories.set(categoryName, new Category_1.Category(categoryName, {
                        content: null,
                        type: "listener"
                    }));
                }));
                for (const category of categories.values()) {
                    for (const listenerFileName of (0, fs_1.readdirSync)(`${this.directory}/${category}`).filter((fileName) => fileName.endsWith(".js"))) {
                        const listenerFile = require(`${this.directory}/${category}/${listenerFileName}`).default;
                        const listener = new listenerFile();
                        this.listeners.set(listener.name, listener);
                        switch (listener.emitter) {
                            case "client":
                                this.client.on(listener.name, listener.exec.bind(null, this.client));
                            case "process":
                                process.on(listener.name, listener.exec.bind(null, process));
                            case "commandHandler":
                                this.client.on(listener.name, listener.exec.bind(null, this.client));
                        }
                        ;
                    }
                    ;
                    const categoryName = this.client.util.capitalize(category);
                    const categoryListeners = this.listeners.filter((listener) => listener.category.toLowerCase() === category.toLowerCase());
                    this.categories.set(categoryName, new Category_1.Category(categoryName, {
                        content: categoryListeners,
                        type: "listener"
                    }));
                    this.client.logger.sendSuccess(`Loaded ${(0, fs_1.readdirSync)(`${this.directory}/${category}`).length} ${category === "Commandhandler" ? "command handler" : category} listener event(s)`);
                }
                ;
                return this.client.logger.sendSuccess(`Loaded ${this.listeners.size} listener event(s)`);
            }
            catch (error) {
                return this.client.logger.sendError(error.stack);
            }
            ;
        });
    }
    ;
}
exports.ListenerHandler = ListenerHandler;
;
