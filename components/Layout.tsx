import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import Header from './header/Header';

interface Props {
    children: JSX.Element;
}

function Layout({ children }: Props) {
    return (
        <div className="bg-gray-100 h-screen flex flex-col bg-[url('../assets/fondos/3433814.jpg')] bg-cover">
            <Head>
                <title>Main page</title>
            </Head>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
