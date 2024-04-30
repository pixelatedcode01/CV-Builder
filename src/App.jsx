import { useState } from "react"
import General from "./components/General"
import Page from "./components/Page"
import Wrapper from "./components/Wrapper"
import Work from "./components/Work"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
// import Download from "./components/Download"
import Customizations from "./components/Customization"

export default function App() {
    const [personal, setPersonal] = useState({ firstName: 'Naman', lastName: 'Rastogi', phone: '022-342-1096', email: 'arjun.ojha@gmail.com', address: '64 Roceshter Street, CA' })
    const [company, setCompany] = useState([
        { id: 0, companyName: 'Pfizer Co.', from: '2020-01-01', to: '2022-12-31', position: 'Senior Developer', location: 'Chicago, CA', description: 'This is a test description about the job that you were working with.' },
    ])
    const [education, setEducation] = useState([
        { id: 0, universityName: 'University of Canterbury', completionDate: '2020-01-01', degree: 'Masters of Biology', location: 'California, US', description: 'Student' }
    ])
    const [certifications, setCertifications] = useState({
        certifications: 'If you have relevant ones; otherwise delete this bullet point + “CERTIFICATIONS” above',
        skills: 'Strategic planning; recruiting; PnL modeling; inventory forecasting; brand identity maps; negotiations; Amazon marketing; DTC acquisition & retention marketing; copywriting; logistics; crowdfunding.',
        interests: 'comedy; weightlifting; composting; yoga; traveling; fishing; Reddit; Seinfeld'
    })
    const fonts = ['Garamond EB', 'Inter Tight', 'Cambria']
    const [fontFamily, setFont] = useState(fonts[0])

    return (
        <Wrapper className={'container'}>
            <Wrapper className={'sections'}>
                <div>
                    <h1>Customize Resume</h1>
                    <p>Generate a resume as suggested by Harvard</p>
                </div>
                <General person={personal} update={setPersonal} />
                <Work company={company} update={setCompany} />
                <Education education={education} update={setEducation} />
                <Certifications certifications={certifications} update={setCertifications} />
                <Customizations font={fontFamily} update={setFont} />
            </Wrapper>
            <Wrapper className={'page'}>
                <Page person={personal} company={company} education={education} certifications={certifications} font={fontFamily} />
            </Wrapper>

        </Wrapper>
    )
}
