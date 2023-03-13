

type layoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children, ...props }: layoutProps) {
    return (
        <div>
            <a {...props}>
                {children}
            </a>
        </div>
    );
}