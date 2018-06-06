# Feedy

Send surveys to a list of emails and collect feedback from yes/no questions. 

How to run development version: 

Add development API keys in file:

```
/config/dev.js
```
As such: 

```
module.exports = {
    googleClientID: googleClientID_key,
    googleClientSecret: googleClientSecret_key,
    mongoURI: mlab MONGO DB URI,
    cookieKey: whatever random string,
};
```

Where to Get?

googleClientID: Get in [Google Console](http://console.developers.google.com)\
googleClientSecret: Get in [Google Console](http://console.developers.google.com)\
mongoURI: Get in [mlab](https://mlab.com)

Create SendGrid account, add "clicked" action on : Settings->Event Notification and add ngrok tunnel URI in "HTTP Post URL".


Install dependencies:

Inside /server

 ```
npm install
```
Inside /server/client

 ```
npm install
```

Run

 ```
npm run dev
 ```
