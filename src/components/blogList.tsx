import Link from "next/link";
import styles from "@/styles/blog.module.css";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    posts: Post[];
}

export default function BlogList({ posts }: Props) {
    return (
        <>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className={styles.list}>
                        <Link href={`/blog/${post.id}`}>
                            <h4>{post.title}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}