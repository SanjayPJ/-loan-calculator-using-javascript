document.querySelector('.form-inline').addEventListener('submit', function (e) {
    document.querySelector('.loader').style.display = "block";

    setTimeout(calculateResults, 2000);



    e.preventDefault();
});


function calculateResults() {


    //    getting values from UI

    const loanAmount = document.querySelector('.loan-amount').value;
    const interest = document.querySelector('.interest').value;
    const years = document.querySelector('.year').value;
    const monthlyPayment = document.querySelector('.monthly-payment');
    const totalPayment = document.querySelector('.total-payment');
    const monthlyInterest = document.querySelector('.monthly-interest');

    //    console.log(loanAmount);
    //    console.log(interest);
    //    console.log(years);
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    console.log(principal, calculatedInterest, calculatedPayments);

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    console.log(x, monthly);

    if (isFinite(monthly)) {
        console.log(principal);
        console.log(monthly * calculatedPayments);
        console.log(((monthly * calculatedPayments) - principal).toFixed(2))

        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        monthlyInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.querySelector('.results').style.display = "block";
        document.querySelector('.loader').style.display = "none";
    } else {
        document.querySelector('.results').style.display = "none";
        document.querySelector('.loader').style.display = "none";
        console.log('please check your numbers..');
        document.querySelector('.alert').style.display = "block";
        setTimeout(hide,1000);
    }
}


function hide() {
    document.querySelector('.alert').style.display = "none";
}
