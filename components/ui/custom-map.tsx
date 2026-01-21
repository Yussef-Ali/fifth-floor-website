'use client'

interface Location {
    name: string
    url: string
}

interface CustomMapProps {
    locations?: Location[]
    activeLocationIndex?: number
    className?: string
}

export default function CustomMap({
    locations = [
        {
            name: "Kuwait Office",
            // Kuwait City coordinates approx
            url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.161989093856!2d47.9774!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84ba03328515%3A0x6b47c0b7847c23c1!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1705824000000!5m2!1sen!2skw"
        },
        {
            name: "Dubai Office",
            // Dubai coordinates approx
            url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231221.7891789456!2d55.1328!3d25.0768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2skw!4v1705824000000!5m2!1sen!2skw"
        }
    ],
    activeLocationIndex = 0,
    className = ""
}: CustomMapProps) {
    return (
        <div className={`relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-[#e5e5e5] ${className}`}>
            {/* Map Layers */}
            {locations.map((loc, idx) => (
                <div
                    key={loc.name}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeLocationIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <iframe
                        src={loc.url}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full mix-blend-multiply opacity-80"
                    />
                </div>
            ))}

            {/* Overlay Gradient/Texture */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f8f8f8] via-transparent to-[#f8f8f8]/50 pointer-events-none z-20" />
            <div className="absolute inset-0 bg-[#3E3E3E]/5 pointer-events-none mix-blend-overlay z-20" />
        </div>
    )
}
