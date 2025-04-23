const YoutubeDashboard = ({ data }) => {
    return (
      <div className="youtube-dashboard">
        <h2>{data.title}</h2>
        <p>Просмотры: <strong>{data.views}</strong></p>
        <p>Прогноз дохода: <strong>${data.earnings}</strong></p> {/* Новая строка */}
        <p>Лайки: <strong>{data.likes}</strong></p>
        <p>Комментарии: <strong>{data.comments}</strong></p>
      </div>
    );
  };
  
  export default YoutubeDashboard;