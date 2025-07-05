import FadeInSection from './FadeInSection'

export default function LoveBlock({ text, image, video, reverse }) {
    return (
        <FadeInSection>
            <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4">{text}</h2>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white px-6 pt-4 pb-8 border border-gray-300 shadow-lg rounded-md w-full max-w-md">
                        {video ? (
                            <video
                                src={video}
                                controls
                                className="rounded-sm w-full object-cover"
                            />
                        ) : (
                            <img
                                src={image}
                                alt={text}
                                className="rounded-sm w-full object-cover"
                            />
                        )}
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}
