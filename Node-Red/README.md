# Using Node-Red with U.S. Bank APIs

In order to use this module, you will have to create an instance of Node-Red.js on the IBM Bluemix environment. Node-Red is a Cloud Foundry application that provides a graphical drag-and-drop environment for creating node.js applications. It is specifically useful when creating applications that include IBM Bluemix modules such as "speech-to-text" or "text-to-speech".

This particular example creates a funds transfer between two individuals using the U.S. Bank APIs. It first checks to see if the payer has enough funds available to perform the transaction. If sufficient, it emulates the transfer and provides an updated value for the payer's new available balance.

# You will need a Bluemix account to use this service.
Go to bluemix.net and click "Create a free account" to get a free thirty day trial account, including access to Bluemix & Watson services.

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
