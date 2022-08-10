const toggleSwitch = document.getElementById("toggle");
const monthlyAmount = document.querySelectorAll(".monthly-amount");
const yearlyAmount = document.querySelectorAll(".yearly-amount")

toggleSwitch.addEventListener("change", function () {
    var switched = this.checked;
    for (let i = 0; i < monthlyAmount.length; i++) {
        if (switched) {
            yearlyAmount[i].style.display = "none";
            monthlyAmount[i].style.display = "initial";
        } else {
            yearlyAmount[i].style.display = "initial";
            monthlyAmount[i].style.display = "none";
        }
    }
})