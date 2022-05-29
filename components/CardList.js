import CardDetail from './CardDetail';
import libraryStyles from '../styles/MyLibrary.module.css';

const CardList = ({ articles }) => {
  return (
    <div className={libraryStyles.grid}>
      {articles.map((article) => (
        <CardDetail key={article.title} article={article} />
      ))}
    </div>
  );
};

export default CardList;
