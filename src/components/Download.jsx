import html2pdf from 'html2pdf.js';

export default function Download() {
    function downloadPage() {
        const content = document.querySelector('.main-page');

        html2pdf(content)
            .from(content)
            .save('test.pdf');
    }

    return (
        <button type="button" onClick={downloadPage}>
            Download Please
        </button>
    );
}
