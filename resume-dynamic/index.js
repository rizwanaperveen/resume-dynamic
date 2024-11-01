var resumeForm = document.getElementById('form');
var resumeDisplayElement = document.getElementById('resume-display');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var LinkedInurl = document.getElementById('LinkedInurl').value;
    var giturl = document.getElementById('giturl').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var resume = "\n    <h2>Resume</h2>\n    <h3>Personal Details</h3>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Date of Birth:</strong> ").concat(dob, "</p> tsc\n    <p><strong>LinkedIn:</strong> ").concat(LinkedInurl, "</p>\n    <p><strong>Giturl:</strong> ").concat(giturl, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <h3>Skills</h3>\n    <p><strong>Skills:</strong> ").concat(skills, "</p>\n    <h3>Education</h3>\n    <p><strong>Education:</strong> ").concat(education, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        console.error('resume-display element not found');
    }
});
