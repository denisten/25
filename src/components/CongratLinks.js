import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import FadeInSection from "@/components/FadeInSection";

export default function CongratLinks() {
    return (
        <FadeInSection>
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg mt-24 mb-20 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Хочешь поздравить Янульку? 🎉</h2>
                <p className="text-lg mb-6">Вот где можно оставить ей пару добрых слов и поздравлений:</p>
                <div className="flex gap-8 justify-center">
                    <a href="https://instagram.com/kimyana_06" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-5xl text-pink-600 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://t.me/Kimyana" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane className="text-5xl text-blue-500 hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </FadeInSection>
    )
}
