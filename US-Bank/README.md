# Notes about U.S. Bank APIs

There are six different APIs that are part of the U.S. Bank Hackathon repository. All fo these APIs can be accessed through the U.S. Bank developer portal (https://usbinnovation.apiportal.akana.com) where you will find detailed information about the various methods and access to test clients.

Four of these APIs provide account level information using only test data. They are:
- Account List and Balances: This REST API provides a list of accounts to which a customer can access including the following account types: checking, savings, credit cards, lines of credit and a variety of installment loans. Account details include product information and current balances.
- Account Owner Detail: This REST API is used to run operations that provide general account details (e.g. address and phone number) for the checking and savings accounts.
- Account Transaction History: This REST API is used to retrieve transaction history and current balance for products like checking accounts, retail loans, credit cards, demand deposit line of credit accounts and leases.
- Funds Transfer: This is a REST wrapper around a SOAP web service used to set up a funds transfer, whether that be a recurring transfer or a one-time transfer. It is limited to funds transfers between U.S. Bank accounts (e.g. transfer funds from your DDA account to pay your monthly mortgage bill).
** Note: These APIs require that the request parameters are passed within the body of the JSON message.

Two other APIs are actual public U.S. Bank APIs that expose general public information about U.S. Bank services. They include:
- USB Locations: The Location REST API provides read-only access to location information for US Bank assets, including Wealth, Money Pass, ATM and Branch locations.
- USB Rates: This RESTful API enables you to access rates for any U.S. Bank product/service (e.g. CD rates, Saving Account Rates; Auto Loan Rates, etc.).

# Using the developer portal
All of the U.S. Bank APIs are available on the developer portal (https://usbinnovation.apiportal.akana.com). The documentation for each API will provide details about the specifc methods available as well as the particular parameters required. 

The APIs are all accesible via the U.S. Bank API gateway. The specific endpoint for each API is listed on the API's particular overview page. 

# Postman files
There are Postman test cases for all of the U.S. Bank APIs. Each collection of tests uses the same environment file.

# Sample files
There are two sample client JSON files for instantiating an API call. 

# Rates-specific notes
The U.S. Bank Rates API provides a list of the current rates for a variety of different banking products. Specific methods are described on the developer portal (https://usbinnovation.apiportal.akana.com). Parameters are passed on the query string. Most fields are optional. If certain fileds are omitted, then the results will include more options. For example, if a request for auto loan rates does not include the terms, then the results will include rates for all available terms.

# Locations-specific notes
The U.S. Bank Locations API provides a list of U.S. Bank facilities such as ATMs and branches. In general, these methods require parameters to be passed on the query string.

These APIs require prior approval so you will need to request access through the developer portal (https://usbinnovation.apiportal.akana.com) where you must first define an application and request access to the Location API. This will enable you to acquire a Bearer Token (which is needed for authorization).

# U.S. Banking API notes
Each U.S. Bank APi has detailed explanations provided at the developer portal (https://usbinnovation.apiportal.akana.com). In general, U.S. Bank data is associated with a specific customer name that is called a Legal Participant Identifier (LPID). There is a specifc method within the Account List and Balance API that will provide a list of available test users. Typically, this is the first call that a developer will use in order to acquire test accounts for testing.

