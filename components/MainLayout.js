import Head from "next/head";

export function MainLayout({children, title = 'React Test' }) {
    return (
        <>
            <Head>
                <title> {title} | React Test</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}