import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ coverImg, coverTitle, coverSubTitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={coverImg}
            bgImageAlt="the dog"
            strength={-100}
        >
            {/* <div className="hero min-h-screen" style={{ backgroundImage: `url("${coverImg}")` }}> */}
            <div className="hero min-h-screen bg-[rgba(21, 21, 21, 0.6)] py-36 px-16 mt-10">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 uppercase text-5xl font-bold">{coverTitle}</h1>
                        <p className="mb-5">{coverSubTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;