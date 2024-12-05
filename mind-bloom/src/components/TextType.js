import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextType = ({text, author}) => {
    return(
        <div>
            <TypeAnimation
                sequence={[
                    //Text goes here
                    text,
                    1000, // delay
                    ' - ',
                    500
                ]}
                deletionSpeed={50}
                speed={50}
                style={{fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Times New Roman'}}
                repeat={Infinity}
            />
            <p>{author}</p>
        </div>
    );
};

export default TextType;