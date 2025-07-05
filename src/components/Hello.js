import FadeInSection from "@/components/FadeInSection";

export default function Hello() {
    return (
        <div className="mt-24 flex flex-col items-center gap-8 mb-20">
            {/* Фиолетовые сердечки */}
            {/*<div className="text-5xl mb-4">💜💜💜</div>*/}

            {/* Текст */}
            <FadeInSection>
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Сегодня самой красивой девушке из Волгограда 💜
                    </h2>
                    <h1 className="text-8xl font-bold mb-4">
                    25 годиков
                    </h1>
                </div>
            </FadeInSection>

            {/* Фото */}
            <FadeInSection>
                <div className="flex justify-center">
                    <img
                        src="/images/hero.jpg"
                        alt="Моя любовь"
                        className="rounded-xl shadow-lg w-full max-w-md object-cover"
                    />
                </div>
            </FadeInSection>

            {/* Ещё сердечки для завершения */}
            {/*<div className="text-5xl mt-4">💜💜💜</div>*/}
        </div>
    )
}
