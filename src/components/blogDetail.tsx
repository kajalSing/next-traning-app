import Link from "next/link";
import styles from "@/styles/blog.module.css";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    post: Post;
}

export default function BlogDetail({ post }: Props) {
    return (
        <>
          <h1 className={styles.heading}>{post.title}</h1>
      <p className={styles.para}>{post.body}</p>
        </>
    )
}