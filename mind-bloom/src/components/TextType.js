import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextType = ({text, author}) => {
    return(
        <div className="flex justify-between items-center relative bg-blue-500 h-[9rem] w-[20rem]">
            <div className="absolute bottom-0 bg-red-300 h-[8rem] w-[18rem] p-3 line-clamp-4 hover:line-clamp-none">
                <TypeAnimation
                    sequence={[
                        //Text goes here
                        text,
                        4000, // delay
                        ' - ',
                        500
                    ]}
                    deletionSpeed={50}
                    speed={30}
                    style={{fontSize: '1.125rem', display: 'flex', justifyContent: 'left', alignItems: 'left', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}
                    repeat={Infinity}
                />
            </div>
            <div className="bg-red-700 absolute top-0 left-0 text-base font-serif subpixel-antialiased italic font-medium"> - {author} </div>
        </div>
    );
};

export default TextType;