import Layout from '@/components/layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogDetail from '@/components/blogDetail';

interface Post {
  id: number;
  title: string;
  body: string;
}


interface Props {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params!.id}`);
  const post: Post = await res.json();

  return { props: { post } };
};

export default function Post({ post }: Props) {
  return (
    <Layout>
     <BlogDetail post={post} />
    </Layout>
  );
}
