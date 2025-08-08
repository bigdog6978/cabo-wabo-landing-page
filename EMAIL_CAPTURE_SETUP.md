# Email Capture Setup Guide

## Overview
This setup allows you to capture email addresses from your landing page and save them to Supabase for your launch notification list.

## Components Created

### 1. EmailCaptureModal Component (`src/components/EmailCaptureModal.tsx`)
- Modal dialog for email collection
- Form validation and error handling
- Loading states and success messages
- Integrates with Supabase email saving function

### 2. Updated NewSection Component
- Added "Get Notified When Available" button
- Integrated email capture modal
- Maintains your custom gradient and colors

### 3. Supabase Integration (`src/lib/supabase.ts`)
- Already includes `saveEmail` function
- Handles email validation and database insertion
- Error handling and success responses

## Setup Steps

### 1. Environment Variables
Make sure you have these in your `.env` file:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Supabase Database Setup
Run the SQL migration in your Supabase dashboard:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase/migrations/create_email_subscribers_table.sql`
4. Execute the script

This creates:
- `email_subscribers` table with proper indexing
- Row Level Security (RLS) policies
- Automatic timestamp updates

### 3. Test the Email Capture
1. Start your development server: `npm run dev`
2. Navigate to your landing page
3. Click "Get Notified When Available"
4. Enter an email address
5. Check your Supabase dashboard to see the email saved

## Features

### Email Validation
- Client-side email format validation
- Server-side duplicate email prevention
- Error handling for network issues

### User Experience
- Loading states during submission
- Success/error messages
- Modal auto-closes after successful submission
- Responsive design

### Security
- Row Level Security enabled
- Anonymous users can insert emails
- Only authenticated users can read emails
- Email uniqueness constraint

## Customization

### Styling
The modal uses your existing design system:
- `text-cabo-dark` for titles
- `bg-cabo-teal` for buttons
- Consistent with your landing page theme

### Database Schema
The `email_subscribers` table includes:
- `id`: Unique identifier
- `email`: Email address (unique)
- `subscribed_at`: Timestamp of subscription
- `source`: Where the email came from (default: 'landing_page')
- `created_at`/`updated_at`: Audit timestamps

## Troubleshooting

### Email Not Saving
1. Check your Supabase environment variables
2. Verify the `email_subscribers` table exists
3. Check browser console for errors
4. Ensure RLS policies are properly configured

### Modal Not Opening
1. Check that `EmailCaptureModal` is imported
2. Verify the button click handler is working
3. Check for any JavaScript errors

### Styling Issues
1. Ensure all UI components are properly imported
2. Check that Tailwind classes are being applied
3. Verify your custom color variables are defined

## Next Steps

1. **Email Notifications**: Set up email sending when you launch
2. **Analytics**: Track conversion rates and email sources
3. **A/B Testing**: Test different modal designs and copy
4. **GDPR Compliance**: Add privacy policy links and consent
5. **Double Opt-in**: Consider adding email verification step
