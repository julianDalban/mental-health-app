import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextType = ({text, author}) => {
    return(
        <div className="border-2 border-emerald-500 outline-offset-2 rounded-md flex justify-between items-center relative h-[9rem] w-[20rem]">
            <div className="absolute bottom-0 h-[8rem] w-[18rem] p-3 line-clamp-4">
                <TypeAnimation
                    sequence={[
                        //Text goes here
                        ' - ',
                        1000,
                        text,
                        7000 // delay
                    ]}
                    deletionSpeed={50}
                    speed={30}
                    cursor={false}
                    style={{fontSize: '1rem', display: 'flex', justifyContent: 'left', alignItems: 'left', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}
                    repeat={Infinity}
                />
            </div>
            <div className="absolute top-0 left-0 text-sm font-serif subpixel-antialiased italic font-medium leading-6"> {author} </div>
        </div>
    );
};

export default TextType;