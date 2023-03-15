import styles from "@/styles/blog.module.css";

type layoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children, ...props }: layoutProps) {
    return (
    <div {...props} className={styles.spacing}>
        {children}
    </div>
    );
}