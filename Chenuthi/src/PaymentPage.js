import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
    const location = useLocation();
    const trainer = location.state?.trainer || {}; // Handle undefined trainer state

    const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [paypalEmail, setPaypalEmail] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success

    const handlePaymentSuccess = () => {
        setPaymentSuccess(true); // Set payment success state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the payment processing
        handlePaymentSuccess();
    };

    const handleBookSession = () => {
        window.open(
            `https://calendar.google.com/calendar/r/eventedit?text=Book%20Session%20with%20${trainer.name}`,
            '_blank'
        );
    };

    return (
        <div className="payment-page">
            {paymentSuccess ? (
                <div className="payment-success">
                    <h1>Payment Successful!</h1>
                    <p>Thank you for your payment.</p>
                    <button onClick={handleBookSession}>Book a Session</button>
                </div>
            ) : (
                <div className="payment-container">
                    {/* Trainer's Information Section */}
                    <div className="trainer-info-card">
                        <div className="trainer-card-header">
                            <img
                                src={trainer.imgSrc}
                                alt={trainer.name}
                                className="trainer-image"
                            />
                            <h2>{trainer.name}</h2>
                            <h4>{trainer.title}</h4>
                        </div>
                        <div className="trainer-card-details">
                            <div className="detail-row">
                                <p><strong>Company:</strong> {trainer.company}</p>
                                <hr />
                            </div>
                            <div className="detail-row">
                                <p><strong>Experience:</strong> {trainer.experience} years</p>
                                <hr />
                            </div>
                            
                            <div className="detail-row">
                                <p><strong>Rating:</strong> {trainer.rating} ⭐</p>
                                <hr />
                            </div>
                            <div className="detail-row">
                                <p><strong>Price:</strong> ${trainer.price}</p>
                            </div>
                        </div>

                    </div>


                    {/* Payment Section */}
                    <div className="payment-section">
                        <h2>Payment</h2>
                        <form className="payment-form" onSubmit={handleSubmit}>
                            <label>
                                <input
                                    type="radio"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={() => setPaymentMethod('card')}
                                />
                                Credit Card
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="paypal"
                                    checked={paymentMethod === 'paypal'}
                                    onChange={() => setPaymentMethod('paypal')}
                                />
                                PayPal
                            </label>

                            {paymentMethod === 'card' && (
                                <>
                                    <label>
                                        Card Number:
                                        <input
                                            type="text"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                            placeholder="1111-2222-3333-4444"
                                            required
                                        />
                                    </label>
                                    <div className="inline-fields">
                                        <label>
                                            Expiry Month:
                                            <input
                                                type="text"
                                                value={expiryMonth}
                                                onChange={(e) => setExpiryMonth(e.target.value)}
                                                placeholder="MM"
                                                required
                                            />
                                        </label>
                                        <label>
                                            Expiry Year:
                                            <input
                                                type="text"
                                                value={expiryYear}
                                                onChange={(e) => setExpiryYear(e.target.value)}
                                                placeholder="YYYY"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <label>
                                        CVV:
                                        <input
                                            type="text"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            placeholder="123"
                                            required
                                        />
                                    </label>
                                </>
                            )}

                            {paymentMethod === 'paypal' && (
                                <label>
                                    PayPal Email:
                                    <input
                                        type="email"
                                        value={paypalEmail}
                                        onChange={(e) => setPaypalEmail(e.target.value)}
                                        placeholder="your-email@example.com"
                                        required
                                    />
                                </label>
                            )}

                            <button type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
