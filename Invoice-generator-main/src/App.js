
import React, { useState, useEffect } from 'react'
import './App.css';
import PdfTemplate from './PDF/Template'

function App() {

  const [InvoiceNumber, setInvoiceNumber] = useState('');
  const [CompanyName, setCompanyName] =useState('')
  const [MobileNumber, setMobileNumber] = useState('');
  const [Name, setName] = useState('');

  const [gmail, setGmail] = useState('');

  const [Dates, setDates] = useState('');

  const [view, setView] = useState(true);

  let newDate = new Date()
  let date = newDate.getDate();

  const numbers = [
    {
      product: 'dsdsd',
      amount: '23782'
    },
    {
      product: 'dsd',
      amount: '993'
    },
    {
      product: 'dssdffedfdsd',
      amount: '623'
    }
  ]

  useEffect(() => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(`Date is ${date}`);
    setDates(date)

},[])

  const Create = () => {
    setView(false)
  }

  return (
    <>
      {
        view ?
          <div className='containers' >
          <br/>
          <h1>Welcome to <br/>InvoiceCraft Services</h1>
          <h2 style={{ color: '#5d0de1' }}>Create Your Invoice</h2>
            <div className="form">
              <div className="inputs">
              <input type="text" placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />

                <input type="text" placeholder='Invoice Number' value={InvoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                <input type="text" placeholder='Company Name' value={CompanyName} onChange={(e) => {    console.log('Company Name changed:', e.target.value);    setCompanyName(e.target.value);  }}/>
                <input type="text" placeholder='Mobile Number' value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                <input type="text" placeholder='Email' value={gmail} onChange={(e) => setGmail(e.target.value)} />

              </div>
              <div className="buttons">
                <button onClick={Create}>Create! </button>
              </div>
            </div>
          </div>
          :
          <PdfTemplate InvoiceNumber={InvoiceNumber} CompanyName={CompanyName} MobileNumber={MobileNumber} gmail={gmail} date={Dates} Name={Name} />
      }
    </>
  );
}


export default App;
