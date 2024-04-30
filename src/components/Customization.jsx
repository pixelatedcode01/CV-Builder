import Wrapper from "./Wrapper";
import './../styles/sections.css';
import '@material/web/elevation/elevation.js'
import { useState } from "react";

function FontFace({ item, handleFontChange, className }) {
    return (
        <div className={`font ${item}`} onClick={() => handleFontChange(item)}>
            <span className={className}>Aa</span>
            <p>{item}</p>
        </div>
    )
}

export default function Customizations({ font, update }) {
    const fonts = ['Garamond EB', 'Inter Tight', 'Cambria']
    const [hide, setHide] = useState(true)
    function handleFontChange(font) {
        update(font)
    }
    let className = 'form-customization';
    if (hide) {
        className += ' hide'
    }
    return (
        <Wrapper className={'customizations section expanded'}>
            {console.log(font)}
            <md-elevation></md-elevation>
            <Wrapper className={'header'}>
                <div className="heading">
                    <div className="icon">
                        <span className="material-symbols-rounded">format_paint</span>
                    </div>
                    <div>
                        <p>Customizations</p>
                        <p className="subhead">Enter your personal information.</p>
                    </div>
                </div>
                <div>
                    <span className="material-symbols-rounded expand" onClick={() => setHide(hide == true ? false : true)}>expand_more</span>
                </div>
            </Wrapper>
            <Wrapper className={className}>
                <form action="#">
                    <div className="row">
                        <div className="column">
                            <p>Font Face</p>
                            <div className="fonts">
                                {fonts.map((item) => (
                                    <FontFace key='1' item={item} handleFontChange={handleFontChange} className={item == font ? 'font-icon selected' : 'font-icon'} />
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
            </Wrapper>
        </Wrapper>
    )
}
