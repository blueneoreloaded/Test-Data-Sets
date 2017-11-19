## Using Node-RED with U.S. Bank APIs

In order to use this module, you will have to create an instance of Node-Red.js on the IBM Bluemix environment. Node-Red is a Cloud Foundry application that provides a graphical drag-and-drop environment for creating node.js applications. It is specifically useful when creating applications that include IBM Bluemix modules such as "speech-to-text" or "text-to-speech".

This module can be imported into your Node-RED instance using the "Import" function located in the right drop down menu on the main Node-RED screen.

This particular example creates a funds transfer between two individuals using the U.S. Bank APIs. It first checks to see if the payer has enough funds available to perform the transaction. If sufficient, it emulates the transfer and provides an updated value for the payer's new available balance.

# You will need a Bluemix account to use this service.
Go to bluemix.net and click "Create a free account" to get a free thirty day trial account, including access to Bluemix & Watson services.

Once your Bluemix account is created, you can add the Node-RED cloud foundry application from the catalog (listed under 'Boilerplates').

## More information about IBM Bluemix
- Bluemix overview video(s) - short in duration
Highest-level overview of Bluemix: 
 https://www.youtube.com/watch?v=Hcu664HbfS4 - 2 minutes

- Most up-to-date overview: 
 https://www.ibm.com/developerworks/cloud/library/cl-bluemix-getting-started-video/index.html - 13 minutes

- A broader look at of Bluemix: 
 https://www.youtube.com/watch?v=GsGnyZedlFk - 14 minutes
- The long version: 
 https://www.youtube.com/watch?v=gq5MvY1nNOM - 24 minutes

- Introduction to using the Node-RED interface:
  https://www.youtube.com/watch?v=vYreeoCoQPI - 5 minutes

- Getting started with Node-RED (web page):
  https://developer.ibm.com/recipes/tutorials/getting-started-with-watson-iot-platform-using-node-red/

