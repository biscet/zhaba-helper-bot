/// ///////////////////////////////////////////////////////////
// ======================== EXPORTS ======================== //
/// ///////////////////////////////////////////////////////////

const { bot } = require("../utils/utils");
const { START_MESSAGE } = require("../dict/config");

/// ///////////////////////////////////////////////////////////
// ======================== BOT LOCIG ====================== //
/// ///////////////////////////////////////////////////////////

bot.start((ctx) => ctx.reply(START_MESSAGE));
