import BlogList from '@/components/blogList';
import { GetStaticProps } from 'next';
import styles from "@/styles/blog.module.css";
import Layout from '@/components/layout';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=13');
  const posts: Post[] = await res.json();
  return {
    props: { posts },
  };
};

export default function Blog({ posts }: Props) {
  return (
    <Layout>
      <h1 className={styles.heading}>Blog</h1>
      <BlogList posts={posts}/>
    </Layout>
  );
}
