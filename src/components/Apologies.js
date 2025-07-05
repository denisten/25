import FadeInSection from "@/components/FadeInSection";

export default function Apologies() {
    return (
        <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
                <div className="flex-1 flex justify-center">
                    <div className="bg-white px-6 pt-4 pb-8 border border-gray-300 shadow-lg rounded-md w-full max-w-md">

                    <img src="/images/msk.JPG" alt="Воспоминание" className="rounded-xl shadow-lg w-full max-w-sm object-cover" />
                    </div>
                </div>

                <div className="flex-1 text-center">
                    <h2 className="text-3xl font-bold mb-4">Познакомьтесь с самой доброй девушкой в мире 💜</h2>
                    <p className="text-lg">
                        Её зовут <span className="text-3xl font-bold"> Янулька-Красотулька</span>
                        <br/>
                        Она судит людей по себе, и всегда ищет в людях что-то хорошее
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white px-6 pt-4 pb-8 border border-gray-300 shadow-lg rounded-md w-full max-w-md">

                    <img src="/images/sea.JPG" alt="Воспоминание" className="rounded-xl shadow-lg w-full max-w-sm object-cover" />
                    {/*<img src="/images/apology-right.jpg" alt="Воспоминание" className="rounded-xl shadow-lg w-full max-w-sm object-cover" />*/}
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}