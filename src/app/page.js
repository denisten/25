import Head from 'next/head'
import LoveBlock from '@/components/LoveBlock'
import Apologies from "@/components/Apologies";
import Hello from "@/components/Hello";
import Present from "@/components/Present";
import CongratLinks from "@/components/CongratLinks";
const blocks = [
    {
        text: 'Самая красивая',
        image: '/images/beauty.jpg'
    },    {
        text: 'Самая лучшая мама',
        image: '/images/8.jpg'
    },
    {
        text: 'С самой красивой улыбкой',
        image: '/images/6.jpg'
    },
    {
        text: 'Любит 😴🌙',
        image: '/images/7.jpg'
    },
    {
        text: 'Любит природу (поля)',
        image: '/images/nature.jpg'
    },
    {
        text: 'Не стесняется быть собой',
        image: '/images/happy.jpg'
    },

    {
        text: 'Стильно одевается',
        image: '/images/style.jpg'
    },
    {
        text: 'Внимательна к мелочам',
        image: '/images/uzb.jpg'
    },

    {
        text: 'Любит животных',
        image: '/images/animals.jpg'
    },
    // {
    //     text: 'Найдет выход из любой ситуации',
    //     image: '/images/uniq.jpg'
    // },

    // {
    //     text: '',
    //     image: '/images/9.jpg'
    // },
];

export default function Home() {


    return (
        <div className="bg-pink-50 min-h-screen text-gray-800 p-8">
            <Head>
                <title>Для моей любимой ❤️</title>
            </Head>
            <Hello/>
            {/*<Present/>*/}
            <Apologies/>

            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-16">
                    ОНА:
                </h1>
                {blocks.map((block, index) => (
                    <LoveBlock
                        key={index}
                        text={block.text}
                        image={block.image}
                        reverse={index % 2 === 1}
                    />
                ))}
            </div>
            <CongratLinks/>
        </div>
    )
}
