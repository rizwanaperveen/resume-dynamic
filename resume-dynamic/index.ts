const resumeForm = document.getElementById('form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

resumeForm.addEventListener('submit', (event:Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const LinkedInurl = (document.getElementById('LinkedInurl') as HTMLInputElement).value;
    const giturl = (document.getElementById('giturl') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;

    const resume = `
    <h2>Resume</h2>
    <h3>Personal Details</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p> tsc
    <p><strong>LinkedIn:</strong> ${LinkedInurl}</p>
    <p><strong>Giturl:</strong> ${giturl}</p>
    <p><strong>Address:</strong> ${address}</p>
    <h3>Skills</h3>
    <p><strong>Skills:</strong> ${skills}</p>
    <h3>Education</h3>
    <p><strong>Education:</strong> ${education}</p>
    `;

if(resumeDisplayElement){

    resumeDisplayElement.innerHTML = resume;
}else{
    console.error('resume-display element not found');
}
});