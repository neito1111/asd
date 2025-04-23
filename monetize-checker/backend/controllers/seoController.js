const axios = require('axios');
const cheerio = require('cheerio');

exports.analyzeSEO = async (req, res) => {
  try {
    const { url } = req.body;

    // Получаем HTML страницы
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    // Анализ метатегов
    const metaTags = {};
    $('meta').each((i, tag) => {
      const name = $(tag).attr('name') || $(tag).attr('property');
      const content = $(tag).attr('content');
      if (name) metaTags[name.toLowerCase()] = content;
    });

    // Анализ заголовков
    const headings = {
      h1: $('h1').length,
      h2: $('h2').length,
      h3: $('h3').length,
    };

    // Анализ скорости (упрощенно)
    const startTime = Date.now();
    await axios.get(url);
    const loadTime = Date.now() - startTime;

    res.json({
      metaTags,
      headings,
      loadTime: `${loadTime}ms`,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка анализа', details: error.message });
  }
};