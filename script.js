// Rowan Driving Range - Membership form JavaScript
const membershipForm = document.getElementById('membershipForm');
const resultsArea = document.getElementById('resultsArea');

membershipForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Keep the demo on this page instead of submitting to a server.

    // Requirement 4: build a customer object with an object literal.
    const customer = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        bannerID: document.getElementById('bannerID').value.trim(),
        major: document.getElementById('major').value.trim(),
        membership: document.getElementById('membership').value,
        experience: membershipForm.querySelector('input[name="experience"]:checked')?.value || 'Not selected',
        updates: membershipForm.querySelector('input[name="updates"]').checked
    };
    // Password is deliberately never saved or displayed in the customer object.
    console.log('Customer object:', customer);

    // Requirement 3: modify the DOM by creating and inserting new elements.
    resultsArea.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = 'Membership Form Submitted!';
    const message = document.createElement('p');
    message.textContent = `Thanks, ${customer.firstName} ${customer.lastName}! Here is your information:`;
    const details = document.createElement('ul');
    const displayData = {
        'Email': customer.email,
        'Banner ID': customer.bannerID,
        'Major': customer.major || 'Not provided',
        'Membership': customer.membership,
        'Golf experience': customer.experience,
        'Email updates': customer.updates ? 'Yes' : 'No'
    };
    for (const [label, value] of Object.entries(displayData)) {
        const item = document.createElement('li');
        item.textContent = `${label}: ${value}`;
        details.appendChild(item);
    }
    resultsArea.append(heading, message, details);
    resultsArea.hidden = false;
    resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

membershipForm.addEventListener('reset', function () {
    // Clear the dynamically added confirmation when the form is reset.
    resultsArea.replaceChildren();
    resultsArea.hidden = true;
});
