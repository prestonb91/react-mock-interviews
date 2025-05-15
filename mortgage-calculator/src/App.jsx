import {useState, useEffect} from "react";

export default function App() {

  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [paymentTotal, setPaymentTotal] = useState(0);
  const [interestTotal, setInterestTotal] = useState(0);
  const [mortgageTotal, setMortgageTotal] = useState(0);

  useEffect(()=> {
    if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
      const r = (interestRate / 100) / 12;
      const n = loanTerm * 12;

      const monthlyPayment = loanAmount * (r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
      const totalPayment = monthlyPayment * n;
      const totalInterest = totalPayment - loanAmount;

      setPaymentTotal(totalPayment.toFixed(2));
      setInterestTotal(totalInterest.toFixed(2));
      setMortgageTotal(monthlyPayment.toFixed(2));
    }

  }, [loanAmount, interestRate, loanTerm])

  return (
    <>
      <form className="calculator">
        <h2>Calculator</h2>
        <div className="entry-line">
          <label>Enter Loan Amount</label>
          <input 
            type="number" 
            value={loanAmount}
            onChange={(event)=> setLoanAmount(Number(event.target.value))}
          />
        </div>

        <div className="entry-line">
          <label>Annual Interest Rate</label>
          <input 
            type="number" 
            value={interestRate}
            onChange={(event)=> setInterestRate(Number(event.target.value))}
          />
        </div>

          <div className="entry-line">
          <label>Loan Term</label>
          <input 
            type="number" 
            value={loanTerm}
            onChange={(event)=> setLoanTerm(Number(event.target.value))}
          />
        </div>
      </form>

      <div className="calculation">
        <div>Total Payment Amount: ${paymentTotal}</div>
        <div>Total Interest Paid: ${interestTotal}</div>
        <div>Monthly Mortgage Payment: ${mortgageTotal}</div>
      </div>
    </>
  );
}
