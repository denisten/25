"use client"
import Fireworks from "@fireworks-js/react";
import {useRef} from "react";

export default function FireworksComponent() {
    const ref = useRef(null)

    return (
        <>
            <div
                style={{ display: 'flex', gap: '4px', position: 'absolute', zIndex: 1 }}
            >
                <Fireworks
                    ref={ref}
                    options={{ opacity: 0.5 }}
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        background: 'transparent'
                    }}
                />
            </div>
        </>
    );
}
