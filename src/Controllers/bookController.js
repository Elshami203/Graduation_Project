const { translateText } = require('../utils/translation');

const translateBook = async (req, res) => {
  const { text, language } = req.body;

  try {
    const translatedText = await translateText(text, language);
    res.status(200).json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
};

module.exports = { translateBook };
