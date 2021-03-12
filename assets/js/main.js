const areaCv = document.getElementById('area-cv')

const resumeButton = document.getElementById('resume-button');

const opt = {
    margin: 0,
    filename: 'IvanJaramilloCV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
}

function generateResume() {
    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', function() {
    generateResume();
})