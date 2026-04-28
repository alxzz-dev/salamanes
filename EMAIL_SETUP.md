# Gmail Email Setup Guide

Your contact form is now configured to send emails to your Gmail. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create an account (you can use your Gmail account)
4. Verify your email

## Step 2: Set Up Gmail Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click "Create New Service"
3. Select **Gmail**
4. Name it `gmail` (important - must match the code)
5. Select your Gmail account when prompted
6. Click "Create Service"

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click "Create New Template"
3. Name it `contact_form` (important - must match the code)
4. Set the following:
   - **To Email**: `salamanes.alexisjudebsemc2023@gmail.com`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: New Contact Form Message from {{from_name}}
   - **Body**:
   ```
   Hello,

   You have received a new message from your portfolio website:

   Name: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   ---
   This is an automated message from your portfolio contact form.
   ```
5. Click "Save"

## Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**
3. In your `script.js` file, replace `'YOUR_PUBLIC_KEY_HERE'` with your public key:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY_HERE');  // Replace with actual key
   ```

## Step 5: Test
1. Open your portfolio website
2. Fill out the contact form and submit
3. Check your Gmail inbox for the message

## Notes
- The Gmail service needs to authenticate your email once during setup
- EmailJS provides 200 free emails per month on the free plan
- Messages sent through the form will arrive in your Gmail inbox with the sender's email as the reply-to address

## Troubleshooting
- If emails don't arrive, check your spam folder
- Make sure template names and service name exactly match the code (`gmail` and `contact_form`)
- Check browser console for error messages (F12 → Console tab)
