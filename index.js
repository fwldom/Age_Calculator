function calculateAge(birthDate) {
    if (!(birthDate instanceof Date)) {
        throw new Error("Invalid birth date format. Please provide a valid date.");
    }
    const today = new Date();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    let age = today.getFullYear() - birthYear;
    age -= (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) ? 1 : 0;
    document.getElementById("yearout").innerText = age;
    document.getElementById("monthout").innerText = today.getMonth() - birthMonth;
    const monthDiff = today.getMonth() - birthMonth;
    document.getElementById("monthout").innerText = monthDiff < 0 ? monthDiff + 12 : monthDiff;

    document.getElementById("dayout").innerText = today.getDate() - birthDay;
}

function Calculate() {
    const year = Number(document.getElementById("year").value);
    const month = Number(document.getElementById("month").value) - 1;
    const day = Number(document.getElementById("day").value);
    if (String(year) !== "" && String(month) !== "" && String(day) !== "") {
        try {
            const birthDate = new Date(year, month, day);
            calculateAge(birthDate);
        } catch (error) {
            alert("Error: " + error.message);
        }
    } else {
        alert("Invalid Value");
    }

}
