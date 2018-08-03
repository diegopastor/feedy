# Feedy

Pay to send surveys to a list of emails and collect feedback from yes/no questions. 

#How to run development version: 

### 1. Clone Repository

```
git clone https://github.com/diegopastor/feedy.git
```

### 2. Add development API keys in file:

```
/config/dev.js
```
As such: 

```
module.exports = {
    googleClientID: <key>,
    googleClientSecret: <key>,
    mongoURI: <mlab URI>,
    cookieKey: <key>,
    stripePublishableKey: <key>,
    stripeSecretKey: <key>
    sendGridKey: <key>,
};
```

Where to Get?

googleClientID: Get in [Google Console](http://console.developers.google.com)\
googleClientSecret: Get in [Google Console](http://console.developers.google.com)\
mongoURI: Get in [mlab](https://mlab.com)\
cookieKey: Can be any random string\
stripeSecretKey: [Stripe](https://stripe.com/docs/keys)\
sendGridKey: [SendGrid](https://sendgrid.com)\

### 3. Create SendGrid account, add "clicked" action on : Settings->Event Notification and add ngrok tunnel URI in "HTTP Post URL".


### 4. Install dependencies:

Inside /server

```
npm install
```
Inside /server/client

```
npm install
```

### 5. Run 

```
npm run dev
```
