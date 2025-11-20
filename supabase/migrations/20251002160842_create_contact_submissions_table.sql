/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `first_name` (text) - Contact's first name
      - `last_name` (text) - Contact's last name
      - `email` (text) - Contact's email address
      - `company` (text) - Contact's company name
      - `message` (text) - Contact's message
      - `submitted_at` (timestamptz) - Timestamp of submission
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions
    - Add policy for authenticated admins to read submissions

  3. Notes
    - This table stores all contact form submissions from the website
    - No public access - only service role can insert, only admins can read
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  submitted_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);