-- Create email_subscribers table
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(100) DEFAULT 'landing_page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_subscribers_email ON email_subscribers(email);

-- Create index on subscribed_at for analytics
CREATE INDEX IF NOT EXISTS idx_email_subscribers_subscribed_at ON email_subscribers(subscribed_at);

-- Enable Row Level Security (RLS)
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for email subscribers" ON email_subscribers
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow reads for authenticated users" ON email_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_email_subscribers_updated_at 
  BEFORE UPDATE ON email_subscribers 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
