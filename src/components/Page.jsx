import Wrapper from "./Wrapper";
import './../styles/page.css';
import { useRef } from "react";
import jsPDF from "jspdf";
import Download from "./Download";

function Experience({ item }) {
    return (
        <Wrapper className={'first'}>
            <Wrapper className={'first-section long-line'}>
                <span className="heading-main">{item.companyName}</span>
                <span className="heading-main">{`${(new Date(item.from)).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} - ${(new Date(item.to)).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`}</span>
            </Wrapper>
            <Wrapper className="long-line">
                <span className="subheading">{item.position}</span>
                <span>{item.location}</span>
            </Wrapper>
            <p className="description">{item.description}</p>
        </Wrapper>
    )
}
function Education({ item }) {
    return (
        <Wrapper className={'first'}>
            <Wrapper className={'first-section long-line'}>
                <span className="heading-main">{item.universityName}</span>
                <span className="heading-main">{`${(new Date(item.completionDate)).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`}</span>
            </Wrapper>
            <Wrapper className="long-line">
                <span className="subheading">{item.degree}</span>
                <span>{item.location}</span>
            </Wrapper>
            <p className="description">{item.description}</p>
        </Wrapper>
    )
}

export default function Page(props) {
    const pdfRef = useRef(null)
    const handleDownload = () => {
        const content = pdfRef.current;

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            setFontSize: 9,
        });
        doc.html(content, {
            callback: function (doc) {
                doc.save('sample.pdf');
            },
            html2canvas: { scale: 0.35 }
        });
    };
    return (
        <div className="page-wrapper">
            <div className={'main-page'} style={{ fontFamily: props.font }} ref={pdfRef}>
                <md-elevation></md-elevation>
                <div className="page-header border-bottom">
                    <p className="name">{`${props.person.firstName} ${props.person.lastName}`}</p>
                </div>
                <div className="general-info">
                    <span>{props.person.email}</span>
                    <span>{props.person.phone}</span>
                    <span>{props.person.address}</span>
                </div>
                {props.company.length > 0 && (
                    <p className="heading border-bottom">WORK EXPERIENCE</p>
                )}
                <div className="experience">
                    {props.company.map((item) => (
                        <Experience key={item.id} item={item} />
                    ))}
                </div>
                {props.education.length > 0 && (
                    <p className="heading border-bottom">EDUCATIONAL QUALIFICATIONS</p>
                )}
                <div className="education">
                    {props.education.map((item) => (
                        <Education key={item.id} item={item} />
                    ))}
                </div>
                <p className="heading border-bottom">CERTIFICATIONS, SKILLS & INTERESTS</p>
                <div className="certificates">
                    <p className="heading-main">Certifications: <span className="content">{props.certifications.certifications}</span></p>
                    <p className="heading-main">Skills: <span className="content">{props.certifications.skills}</span></p>
                    <p className="heading-main">Interests: <span className="content">{props.certifications.interests}</span></p>
                </div>
            </div>
            <div className="download-button" onClick={handleDownload}>
                Download Resume
            </div>
        </div>
    )
}
