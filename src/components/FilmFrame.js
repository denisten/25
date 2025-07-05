export default function FilmFrame({ src, alt }) {
    return (
        <div className="relative bg-black p-3 rounded-lg shadow-xl overflow-hidden film-frame">
            <img src={src} alt={alt} className="rounded-sm w-full object-cover" />
        </div>
    )
}
