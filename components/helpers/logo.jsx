import Link from "next/link";


const Logo = () => {
    return (
        <Link href = "/">
            <h1 className = "text-2xl font-semibold">
                Rishab
                <span className = "text-accent">
                    .
                </span>
                H&nbsp;
                <span className = "text-accent">
                    Portfolio
                </span>
            </h1>
        </Link>
    );
};


export default Logo;
