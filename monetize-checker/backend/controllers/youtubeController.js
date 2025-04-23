exports.getYoutubeStats = async (req, res) => {
    try {
      const { url } = req.body;
      const videoId = extractVideoId(url);
      
      if (!videoId) {
        return res.status(400).json({ error: 'Неверный URL YouTube' });
      }
  
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'statistics,snippet',
          id: videoId,
          key: process.env.YOUTUBE_API_KEY,
        },
      });
  
      const data = response.data.items[0];
      const views = parseInt(data.statistics.viewCount);
      const rpm = 2.5; // Средний доход на 1000 просмотров
      const earnings = (views * rpm) / 1000;
  
      res.json({
        title: data.snippet.title,
        views,
        earnings: earnings.toFixed(2), // Добавляем прогноз дохода
        likes: data.statistics.likeCount,
        comments: data.statistics.commentCount,
      });
    } catch (error) {
      res.status(500).json({ error: 'Ошибка получения данных', details: error.message });
    }
  };