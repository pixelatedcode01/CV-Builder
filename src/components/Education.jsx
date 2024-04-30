import Wrapper from "./Wrapper";
import './../styles/sections.css';
import '@material/web/elevation/elevation.js'
import { useState } from "react";


function Form({ item, handleDelete, handleChange }) {
    return (
        <form action="#">
            <div className="name-header">
                <h3>{`Education ${item.id}`}</h3>
                <span className="material-symbols-rounded close" onClick={() => handleDelete(item.id)}>close</span>
            </div>
            <div className="row">
                <div className="column full-width">
                    <label htmlFor="university-name">Institution / University Name</label>
                    <input type="text" name="university-name" id="university-name" className="full-width" placeholder={item.universityName} onChange={(e) => handleChange(e, item.id, 'universityName')} />
                </div>
            </div>
            <div className="row">
                <div className="column full-width">
                    <label htmlFor="completion-date">Graduating Date</label>
                    <input type="date" name="completion-date" className="full-width" id="completion-date" onChange={(e) => handleChange(e, item.completionDate, 'completionDate')} />
                </div>
            </div>
            <div className="row">
                <div className="column position full-width">
                    <label htmlFor="position">Degree</label>
                    <input type="text" name="position" id="position" className="full-width" placeholder={item.degree} onChange={(e) => handleChange(e, item.id, 'degree')} />
                </div>
            </div>
            <div className="row">
                <div className="column location full-width">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" className="full-width" placeholder={item.location} onChange={(e) => handleChange(e, item.id, 'location')} />
                </div>
            </div>
            <div className="row">
                <div className="column description full-width">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder={item.description} onChange={(e) => handleChange(e, item.id, 'description')}></textarea>
                </div>
            </div>
        </form>
    )
}


export default function Education({ education, update }) {
    const [hide, setHide] = useState(true)
    let className = 'form-education';
    if (hide) {
        className += ' hide'
    }
    let id = education.length;
    function handleDelete(educationId) {
        update(
            education.filter(item => item.id !== educationId)
        );
    }
    function handleChange(event, id, field) {
        update(education => {
            return education.map((item) => {
                if (id == item.id) {
                    return {
                        ...item,
                        [field]: event.target.value
                    };
                }
                return item
            })
        })
    }
    function handleAddEducation() {
        update([
            ...education,
            {
                id: id++,
                universityName: 'University of Canterbury',
                completionDate: '2020-01-01',
                degree: 'Masters of Biology',
                location: 'California, US',
                description: 'Student'
            }
        ])
    }

    return (
        <Wrapper className={'educational section expanded'}>
            <md-elevation></md-elevation>
            <Wrapper className={'header'}>
                <div className="heading">
                    <div className="icon">
                        <span className="material-symbols-rounded">workspace_premium</span>
                    </div>
                    <div>
                        <p>Education Information</p>
                        <p className="subhead">Enter your education qualifications.</p>
                    </div>
                </div>
                <div>
                    <span className="material-symbols-rounded expand" onClick={() => setHide(hide == true ? false : true)}>expand_more</span>
                </div>
            </Wrapper>
            <Wrapper className={className}>
                {education.map((item) => (
                    <Form key={item.id} item={item} handleDelete={handleDelete} handleChange={handleChange} />
                ))}
                <div className="row buttons">
                    <button type="button" className="submit" onClick={handleAddEducation}>Add Record</button>
                    <button type="button" className="submit">Save</button>
                </div>

            </Wrapper>
        </Wrapper>
    )
}
