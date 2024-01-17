import ReactPrint from 'react-to-print'
import { useRef, useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material'
// Add this import at the beginning of your file
import './PdfTemplate.css';

// Rest of the code

function PdfTemplate(props) {
    const ref = useRef();
    const [openAirPopup, setAirPopup] = useState(false);

    // const [Products, setProducts] = useState([]);

    const [Item, setItem] = useState('');
    const [ItemNo, setItemNo] = useState('');

    const [Amount, setAmount] = useState(0);

    const [Discount, setDiscount] = useState(props.discount);

    // const [productName, setProductName] = useState('');
    // const [productAmout, setProductAmount] = useState(0);

    const [Total, setTotal ] = useState(0);

    const [List, setList] = useState([]);

    const addData = () => {
        List.push({
            product: Item,
            amount: Amount,
            number: ItemNo,
        })
        console.log(List);
        setItem('')
        setAmount('')
        setAirPopup(false);
    }

    let sum = 0;
    List.forEach(amount => {
        sum += parseFloat(amount.amount)*parseFloat(amount.number)
    })
    // setTotal(sum)
    console.log(`Sum is = ${sum}`);

    return (
        <>
            <div className="container" ref={ref} >
                <div className="container">
                    <div className="row">
                        <div >
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4 brcode">
                                        {/* <Barcode value={`4n%${props.InvoiceNumber}+ut%`} width={1} height={50} displayValue={false} /> */}
                                        <img src="./invoice.png" className='logo'/>
                                    </div>
                                    <div className="col-md-8 text-right bbc">
                                        <h4 style={{ color: '#black' }}><strong>Company Name: {props.CompanyName}</strong></h4>
                                        <strong><h5>Mobile Number: {props.MobileNumber}</h5></strong>
                                        <strong><h5>Email Address: {props.gmail}</h5></strong>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1 style={{ color: '#350565' }} >INVOICE</h1>
                                        <h3 style={{ color: '#325aa8' }} >INVOICE NUMBER: {props.InvoiceNumber}</h3>
                                        {/* <h5> Id: {props.InvoiceNumber}</h5> */}
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><h5>Products</h5></th>
                                                <th><h5>Quantity</h5></th>
                                                <th><h5>Amount</h5></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                List.length?
                                                List.map((items, index) => {
                                                    return (
                                                        <tr key={index} >
                                                            <td className="col-md-9">{items.product}</td>
                                                            <td className="col-md-9">{items.number}</td>
                                                            <td className="col-md-3"><i className="fas fa-rupee-sign" area-hidden="true"></i> ₹ {items.amount}  </td>
                                                            
                                                        </tr>
                                                        
                                                    )
                                                }):null
                                            }
                                            <tr>
                                            
                                            <td></td>
                                                <td className="text-right margin-before">
                                                
                                                    <p>
                                                        <strong>Total Amount: </strong>
                                                    </p>
                                                    <p>
                                                        <strong>CGST @ 9%: </strong>
                                                    </p>
                                                    <p>
                                                        <strong>SGST @ 9%: </strong>
                                                    </p>
                                                    <p>
                                                        <strong>Payable Amount: </strong>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p>
                                                        <strong><i className="fas fa-rupee-sign" area-hidden="true"></i> ₹ {sum}</strong>
                                                    </p>
                                                    <p>
                                                        <strong><i className="fas fa-rupee-sign" area-hidden="true"></i> ₹ {sum*9/100} </strong>
                                                    </p>
                                                    <p>
                                                        <strong><i className="fas fa-rupee-sign" area-hidden="true"></i> ₹ {sum*9/100} </strong>
                                                    </p>
                                                    <p>
                                                        <strong><i className="fas fa-rupee-sign" area-hidden="true"></i> ₹ {sum+sum*18/100}</strong>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr style={{ color: '#F81D2D' }}>
                                                <td className="text-right"><h4><strong>Total:</strong></h4></td>
                                                <td className="text-left"><h4><strong><i className="fas fa-rupee-sign" area-hidden="true"></i> ₹ {sum+sum*18/100} </strong></h4></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <p><b>Date :</b> {props.date} </p>
                                        <p><b>Name: {props.Name}</b></p>
                                        <p><b>Contact: {props.MobileNumber}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setAirPopup(true)} >Add Product</button>

            <ReactPrint trigger={() => <button>Print</button>} content={() => ref.current} documentTitle={`INVOICE ${props.InvoiceNumber}`} />


            

            {/* <Popup openAirPopup={openAirPopup} setAirPopup={setAirPopup} products={Products} setProducts={setProducts} /> */}

            {/* POPUP OPEN */}
            <Dialog open={openAirPopup} >
                <DialogTitle>
                    <div className="title">
                        <div className="hed">New product</div>
                        <div className="icon-cross" onClick={() => setAirPopup(false)} ><Close /></div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className="container">
                        <div className="forms">
                            <input type="text" value={Item} onChange={(e) => setItem(e.target.value)} placeholder='PR Name' />
                            <input type="text" value={ItemNo} onChange={(e) => setItemNo(e.target.value)} placeholder='Quantity' />
                            <input type="text" value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount ₹' />
                        </div>
                        <div className="buttons">
                            <button onClick={addData} >Add</button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            {/* POPUP CLOSED */}
        </>

    );
}

export default PdfTemplate;