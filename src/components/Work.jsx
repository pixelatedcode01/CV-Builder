import Wrapper from "./Wrapper";
import './../styles/sections.css';
import '@material/web/elevation/elevation.js'
import { useState } from "react";


function Form({ item, handleDelete, handleChange }) {
    return (
        <form action="#">
            <div className="name-header">
                <h3>{`Company ${item.id}`}</h3>
                <span className="material-symbols-rounded close" onClick={() => handleDelete(item.id)}>close</span>
            </div>

            <div className="row">
                <div className="column full-width">
                    <label htmlFor="company-name">Company Name</label>
                    <input type="text" name="company-name" id="company-name" className="full-width" placeholder={item.companyName} onChange={(e) => handleChange(e, item.id, 'companyName')} />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label htmlFor="from-date">From</label>
                    <input type="date" name="from" id="from-date" value={item.from} onChange={(e) => handleChange(e, item.id, 'from')} />
                </div>
                <div className="column">
                    <label htmlFor="to-date">To</label>
                    <input type="date" name="to" id="to-date" value={item.to} onChange={(e) => handleChange(e, item.id, 'to')} />
                </div>
            </div>
            <div className="row">
                <div className="column position full-width">
                    <label htmlFor="position">Position / Title</label>
                    <input type="text" name="position" id="position" className="full-width" placeholder={item.position} onChange={(e) => handleChange(e, item.id, 'position')} />
                </div>
            </div>
            <div className="row">
                <div className="column location full-width">
                    <label htmlFor="company-location">Location</label>
                    <input type="text" name="company-location" id="company-location" className="full-width" placeholder={item.location} onChange={(e) => handleChange(e, item.id, 'location')} />
                </div>
            </div>
            <div className="row">
                <div className="column description full-width">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder={item.description} onChange={(e) => handleChange(e, item.id, 'description')} ></textarea>
                </div>
            </div>
        </form>
    )
}

export default function Work({ company, update }) {
    const [hide, setHide] = useState(true)
    let className = 'form-work';
    if (hide) {
        className += ' hide'
    }
    let nextId = company.length;
    function handleDelete(workId) {
        update(
            company.filter(item => item.id !== workId)
        );
    }
    function handleChange(event, id, field) {
        update(company => {
            return company.map((item) => {
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
    function handleAddCompany() {
        update([
            ...company,
            {
                id: nextId++,
                companyName: 'Pfizer and Co.',
                from: '2020-01-01',
                to: '2023-12-31',
                position: 'Senior Developer',
                location: 'Chicago, CA',
                description: 'This is a test description about the job that you were working with.'
            }
        ])
    }

    return (
        <Wrapper className={'work section expanded'}>
            <md-elevation></md-elevation>
            <Wrapper className={'header'}>
                <div className="heading">
                    <div className="icon">
                        <span className="material-symbols-rounded">work</span>
                    </div>
                    <div>
                        <p>Work Information</p>
                        <p className="subhead">Enter your work/job experience.</p>
                    </div>
                </div>
                <div>
                    <span className="material-symbols-rounded expand" onClick={() => setHide(hide == true ? false : true)}>expand_more</span>
                </div>
            </Wrapper>
            <Wrapper className={className}>
                {
                    company.map((item) => (
                        <Form key={item.id} item={item} handleDelete={handleDelete} handleChange={handleChange} />
                    ))
                }
                <div className="row buttons">
                    <button type="button" className="submit" onClick={handleAddCompany}>Add Record</button>
                    <button type="button" className="submit">Save</button>
                </div>
            </Wrapper>
        </Wrapper>
    )
}
