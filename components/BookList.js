import BookDetail from './BookDetail';
import libraryStyles from '../styles/MyLibrary.module.css';

const BookList = ({ articles }) => {
  return (
    <div className={libraryStyles.grid}>
      {articles.map((article) => (
        <BookDetail key={article.title} article={article} />
      ))}
    </div>
  );
};

export default BookList;
