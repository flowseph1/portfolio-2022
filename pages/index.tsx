import Head from 'next/head';
import Layout from '../components/Layout';
import { NextPageWithLayout } from './_app';
import { BiDownArrowAlt } from 'react-icons/bi';
import TopHome from '../components/TopHome';
import Skills from './../components/skills/Skills';

const Home: NextPageWithLayout = () => {
    return (
        <main className="flex flex-1 flex-col  ">
            <TopHome />
            <Skills />
        </main>
    );
};

Home.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Home;
