import Wrapper from "./Wrapper";
import './../styles/sections.css';
import { useState } from "react";
import '@material/web/elevation/elevation.js'

export default function Certifications({ certifications, update }) {
    const [hide, setHide] = useState(true)
    let className = 'form-certification';
    if (hide) {
        className += ' hide'
    }
    function handleChange(event, field) {
        update({
            ...certifications,
            [field]: event.target.value
        })
    }
    return (
        <Wrapper className={'certifications section expanded'}>
            <md-elevation></md-elevation>
            <Wrapper className={'header'}>
                <div className="heading">
                    <div className="icon">
                        <span className="material-symbols-rounded">interests</span>
                    </div>
                    <div>
                        <p>Certifications, Skills, Interest</p>
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
                        <div className="column full-width">
                            <label htmlFor="certifications">Certifications (seperated by comma)</label>
                            <textarea name="certifications" id="certifications" cols="30" rows="4" placeholder={certifications.certifications} onChange={(e) => handleChange(e, 'certifications')}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column full-width">
                            <label htmlFor="skills">Skills</label>
                            <textarea name="skills" id="skills" cols="30" rows="4" placeholder={certifications.skills} onChange={(e) => handleChange(e, 'skills')}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column full-width">
                            <label htmlFor="interests">Interests</label>
                            <textarea name="interests" id="interests" cols="30" rows="4" placeholder={certifications.interests} onChange={(e) => handleChange(e, 'interests')}></textarea>
                        </div>
                    </div>
                    <div className="row buttons">
                        <button type="button" className="edit">Edit</button>
                        <button type="button" className="submit">Save</button>
                    </div>
                </form>
            </Wrapper>
        </Wrapper>
    )
}
