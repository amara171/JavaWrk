let btn = document.getelementByTd('btn');

btn.addEventListener('click', function() {
        let billAmount = document.getElementById('bill_amount').value;
        let tipPercentage = document.getElementById('tip_percentage').value;
    
        let tipAmount = billAmount * (tipPercentage/100);
        document.getElementById('tip_amount').value = tipAmount.toFixed(2);
        document.getElementById('total_bill').value = parseFloat(billAmount) + tipAmount;
    });
    
