import Link from 'next/link';
import libraryStyles from '../styles/MyLibrary.module.css';

const BookDetail = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a className={libraryStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default BookDetail;
