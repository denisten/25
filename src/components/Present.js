import FadeInSection from "@/components/FadeInSection";

export default function Present() {
    return (
        <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-xl shadow-lg mb-20 max-w-7xl mx-auto">
                {/* Левое фото */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/images/apology-left.jpg"
                        alt="Янулька"
                        className="rounded-xl shadow-lg w-full max-w-xs object-cover"
                    />
                </div>

                {/* Текст */}
                <div className="flex-1 text-center">
                    <h2 className="text-3xl font-bold mb-4">Познакомьтесь с самой доброй девушкой, которую я знаю 💜</h2>
                    <p className="text-lg">
                        Её зовут <h1 className="text-3xl font-bold"> Янулька-Красотулька</h1>
                        <br/>
                        Она судит людей по себе, и всегда ищет в людях что-то хорошее
                    </p>
                </div>

                {/* Правое фото */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/images/apology-right.jpg"
                        alt="Янулька"
                        className="rounded-xl shadow-lg w-full max-w-xs object-cover"
                    />
                </div>
            </div>
        </FadeInSection>
    )
}
