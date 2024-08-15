"use client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const countries = [
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "Turkey",
];

export default function Checkout() {
  const navigate = useNavigate()
  const [selectedRegion, setSelectedRegion] = useState("");
  const [idDDActive, setIdDDActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [orderdetails, setOrderdetails] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      streetAddress &&
      city &&
      phone &&
      email &&
      cardNumber &&
      expiryDate &&
      cvv 
    );
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isFormValid()) {
      // Display success message
      setSuccessMessage("Your have registered successfully!");

      // Clear input fields
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setStreetAddress("");
      setCity("");
      setPhone("");
      setEmail("");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
      setOrderdetails("")
      setSelectedRegion("");
      setTimeout(() => {
        navigate("/")
      }, 4000)
    } else {
      // Handle form invalid case if needed
      setSuccessMessage("");
    }
  };

  return (
    <>
      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <div className="mt-100 lg-mt-100 mb-100 lg-mb-100">
        <div className="form-style-on col-xl-11 m-auto" data-aos="fade-up">
          <form onSubmit={handleSubmit}>
            <div className="checkout-form">
              <div className="billing-info__wrapper">
                <h4>BILLING DETAILS</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_first_name"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label htmlFor="checkout_first_name">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_last_name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label htmlFor="checkout_last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_company_name"
                        placeholder="Company Name (optional)"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                      <label htmlFor="checkout_company_name">
                        Company Name (optional)
                      </label>
                    </div>
                  </div>
                  {/* <div className="col-md-12">
                    <div className="search-field my-3">
                      <div
                        className={`form-label-fixed hover-container ${idDDActive ? "js-content_visible" : ""
                          }`}
                      >
                        <label htmlFor="search-dropdown" className="form-label">
                          Country / Region*
                        </label>
                        <div className="js-hover__open">
                          <input
                            type="text"
                            className="form-control form-control-lg search-field__actor search-field__arrow-down"
                            id="search-dropdown"
                            name="search-keyword"
                            value={selectedRegion}
                            readOnly
                            placeholder="Choose a location..."
                            onClick={() => setIdDDActive((pre) => !pre)}
                          />
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <div className="form-floating mt-3 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_street_address"
                        placeholder="Street Address *"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                      />
                      <label htmlFor="checkout_street_address">Street Address *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_city"
                        placeholder="Town / City *"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <label htmlFor="checkout_city">Town / City *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_phone"
                        placeholder="Phone *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label htmlFor="checkout_phone">Phone *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="email"
                        className="form-control"
                        id="checkout_email"
                        placeholder="Your Mail *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="checkout_email">Your Mail *</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mt-3">
                    <textarea
                      className="form-control form-control_gray"
                      placeholder="Order Notes (optional)"
                      value={orderdetails}
                      onChange={(e) => setOrderdetails(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <h4 className="pt-20">CARD DETAILS</h4>
                <div className="">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="checkout_card_number"
                      placeholder="Card Number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <label htmlFor="checkout_card_number">Card Number</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_expiry_date"
                        placeholder="Expiry Date"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />
                      <label htmlFor="checkout_expiry_date">Expiry Date</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_cvv"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                      <label htmlFor="checkout_cvv">CVV</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout__totals-wrapper">
                <div className="sticky-content">
                  <div className="checkout__totals">
                    <h3>Your Order</h3>
                    <table className="checkout-cart-items">
                      <thead>
                        <tr>
                          <th>PRODUCT</th>
                          <th>SUBTOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {cartProducts.map((elm, i) => ( */}
                        <tr>
                          <td>
                            {localStorage.getItem("name")} x 1
                          </td>
                          <td>${localStorage.getItem("price")}</td>
                        </tr>
                        {/* ))} */}
                      </tbody>
                    </table>
                    <table className="checkout-totals">
                      <tbody>
                        <tr>
                          <th>SUBTOTAL</th>
                          <td>${localStorage.getItem("price")}</td>
                        </tr>
                        {/* <tr>
                          <th>SHIPPING</th>
                          <td>Free shipping</td>
                        </tr> */}
                        <tr>
                          <th>VAT</th>
                          <td>${Number(localStorage.getItem("price")) && 19}</td>
                        </tr>
                        <tr>
                          <th>TOTAL</th>
                          <td>${(Number(localStorage.getItem("price")) && Number(localStorage.getItem("price")) + 19).toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="checkout__payment-methods">
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="radio"
                        name="checkout_payment_method"
                        id="checkout_payment_method_1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_1"
                      >
                        Direct bank transfer
                        <span className="option-detail d-block">
                          Make your payment directly into our bank account. Please use
                          your Order ID as the payment reference.Your order will not
                          be shipped until the funds have cleared in our account.
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="radio"
                        name="checkout_payment_method"
                        id="checkout_payment_method_3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_3"
                      >
                        Cash on delivery
                        <span className="option-detail d-block">
                          We offer a convenient Cash on Delivery (COD) option for those who prefer to pay in cash when their order arrives.
                        </span>
                      </label>
                    </div>
                    <div className="policy-text pt-10">
                      Your personal data will be used to process your order, support
                      your experience throughout this website, and for other purposes
                      described in our
                      <Link href="" target="_blank" className="">
                        {","} Privacy policy.
                      </Link>
                    </div>
                  </div> */}
                  <button 
                    className="btn-fourteen w-100"
                    disabled={!isFormValid()}
                  >
                  Complete Registration
                  </button>
                  {successMessage && (
                    <div className="alert alert-success mt-3">
                      {successMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
