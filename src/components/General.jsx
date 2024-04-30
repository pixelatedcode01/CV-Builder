import Wrapper from "./Wrapper";
import './../styles/sections.css';
import '@material/web/elevation/elevation.js'
import { useState } from "react";

export default function General({ person, update }) {
    const [hide, setHide] = useState(false)
    let className = 'form-general';
    if (hide) {
        className += ' hide'
    }
    return (
        <Wrapper className={'general section expanded'}>
            <md-elevation></md-elevation>
            <Wrapper className={'header'}>
                <div className="heading">
                    <div className="icon">
                        <span className="material-symbols-rounded">person</span>
                    </div>
                    <div>
                        <p>General Information</p>
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
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" name="first-name" id="first-name" placeholder={person.firstName} onChange={e => update({ ...person, firstName: e.target.value })} />
                        </div>
                        <div className="column">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" name="last-name" id="last-name" placeholder={person.lastName} onChange={e => update({ ...person, lastName: e.target.value })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder={person.email} onChange={e => update({ ...person, email: e.target.value })} />
                        </div>
                        <div className="column">
                            <label htmlFor="phone">Phone number</label>
                            <input type="text" name="phone" id="phone" placeholder={person.phone} onChange={e => update({ ...person, phone: e.target.value })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column location full-width">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" id="location" className="full-width" placeholder={person.address} onChange={e => update({ ...person, address: e.target.value })} />
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
