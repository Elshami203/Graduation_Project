const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate({ key: process.env.GOOGLE_API_KEY });

const translateText = async (text, targetLanguage) => {
    try {
        const [translation] = await translate.translate(text, targetLanguage);
        return translation;
    } catch (err) {
        throw new Error('Translation Error: ' + err.message);
    }
};

module.exports = { translateText };
