import Head from 'next/head';
import BookList from '../components/BookList';
import styles from '../styles/Layout.module.css';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>BookBox</title>
        <meta name='keywords' content='books, authors, library, collection' />
      </Head>

      <BookList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
