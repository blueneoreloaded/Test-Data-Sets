## Elavon APIs

Elavon is the merchant processing division of U.S. Bank. Elavon helps businesses, small and large, accept all payment types – and reap the benefits at the end of the day. Whether they need a simple or sophisticated payment solution, Elavon has solution for them.

For 25 years, Elavon has helped more than one million customers around the world grow their business through payments. Our flexible, secure and innovative payment solutions help businesses attract and keep customers, develop partner relationships, process payments and simplify operations.

In the context of U.S. Bank hackathons, we will have access to the Elavon Converge API which is a secure, server-based system that supports transaction processing (authorization  and settlement) in real-time. The Converge API uses a pseudo-XML or key value pair implementation.

- More details can be found at: https://developer.elavon.com

The Converge API has two main versions:

- xml version: "processxml.do"
	This version requires the request data to be sent as an encapsulated XML data message as a query argument on the request string.
	The response message is an xml object.
	-- https://api.demo.convergepay.com/VirtualMerchantDemo/processxml.do


- standard version: "process.do"
	This version takes all of the required data as separate query string arguments. 
	The response message is an HTML page. For this reason, it may be more difficult to use this version as the specific values must be parsed out of the resulting HTML page.
	-- https://api.demo.convergepay.com/VirtualMerchantDemo/process.do

# Postman artifacts
The included Postman files include samples of both Converge API calls. A separate environment file is also included.


# Converge API request data elements
- ssl_merchant_id: Elavon Converge ID for the merchant requesting to process this payment.
- ssl_user_id: Converge user ID associated with the account that is making this payment request (case sensitive)
- ssl_pin: Converge security PIN associated with the user's account (case sensitive).
- ssl_transaction_type: Type of payment transaction being processed. For this hackathon, we will only be interested in credit card sales transactions ('ccsale').
- ssl_card_number: the card number being used for the payment.
- ssl_exp_date: the expiration date of the card being used for payment.
- ssl_amount: the amount of the transaction request.
- ssl_first_name: the first name associated with the payment card.
- ssl_show_form: This field is used by the "process.do" request and indicates whether a submit form needs to be shown. Set to 'false' to use this method directly.

# Test merchant credentials for the Converge API
- ssl_merchant_id: "009005"
- ssl_user_id: "hackathon"
- ssl_pin: "U1U0BLQIGLQ0L781E4DFROL21NL2QJMFN468GQQOSOJF5KX2L3JIIKWWPG325CX3"
