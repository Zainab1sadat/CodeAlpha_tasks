function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').innerText = "Please enter a valid birthdate.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    // Check if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}
