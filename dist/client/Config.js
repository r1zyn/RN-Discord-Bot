"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configOptions = void 0;
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.configOptions = {
    clientID: process.env.CLIENT_ID,
    clientOptions: {
        allowedMentions: {
            parse: ["users"],
            repliedUser: true
        },
        intents: [
            discord_js_1.Intents.FLAGS.DIRECT_MESSAGES,
            discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
            discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
            discord_js_1.Intents.FLAGS.GUILDS,
            discord_js_1.Intents.FLAGS.GUILD_BANS,
            discord_js_1.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
            discord_js_1.Intents.FLAGS.GUILD_INTEGRATIONS,
            discord_js_1.Intents.FLAGS.GUILD_INVITES,
            discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
            discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
            discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            discord_js_1.Intents.FLAGS.GUILD_MESSAGE_TYPING,
            discord_js_1.Intents.FLAGS.GUILD_PRESENCES,
            discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
            discord_js_1.Intents.FLAGS.GUILD_WEBHOOKS
        ],
        makeCache: discord_js_1.Options.cacheEverything(),
        partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
        ws: {
            properties: {
                $browser: "discord.js"
            }
        }
    },
    owners: ["490560953046401024"],
    token: process.env.TOKEN
};
