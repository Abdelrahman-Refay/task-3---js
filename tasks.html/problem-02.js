// task 2

 const employee = {
    name: "Mona",
    baseSalary: 10000,
    bonusPercentage: 10,
    deduction: 500,

    getReport() {
        const bonus = calculateBonus(
            this.baseSalary,
            this.bonusPercentage
        );
        const netSalary = calculateNetSalary(this);
        const status = getSalaryStatus(netSalary);

        return `Employee: ${this.name}
        Base Salary: ${this.baseSalary} EGP
        Bonus: ${bonus} EGP
        Deductions: ${this.deduction} EGP
        Net Salary: ${netSalary} EGP
        Salary Status: ${status}`;
    }
};

function calculateBonus(baseSalary,percentage) {
    return baseSalary * percentage / 100;
}

const calculateNetSalary = function(Employee) {
    const bonus = calculateBonus(
        employee.baseSalary,
        employee.bonusPercentage
    );
    return employee.baseSalary + bonus - employee.deduction;
};

const getSalaryStatus = (netSalary) => {
    if (netSalary >= 15000){
        return "High";
    } else if (netSalary >= 8000) {
        return "Medium";
    } else{
        return "Low";
    }
};
console.log(employee.getReport());