function handleSelection(selectedCheckbox) {
    const autoRenew = document.getElementById("autoRenew");
    const oneTime = document.getElementById("oneTime");
    const nextBtn = document.getElementById("nextBtn");

    // Uncheck the other checkbox
    if (selectedCheckbox === autoRenew) {
        oneTime.checked = false;
    } else if (selectedCheckbox === oneTime) {
        autoRenew.checked = false;
    }

    // Enable/disable Next button
    if (autoRenew.checked || oneTime.checked) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}
