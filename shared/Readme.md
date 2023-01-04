Steps to start with:

1. Go to your project folder in Google Drive

2. Create Spreadsheet like similar to https://docs.google.com/spreadsheets/d/1QDkWgZgcDDaA2p7qyhc9xeRYt2yqTihSUJ1hYJ4lep4/edit?usp=sharing

3. Create an API key for your sheet on behalf of dev@stormotion.io. Guide - https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=api-key

Enable Google Sheets https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=eng-node-372814

4. Fill in the envs:

- `SHEET_ID` is the id for the created Google Sheet. For instance, for `https://docs.google.com/spreadsheets/d/1QDkWgZgcDDaA2p7qyhc9xeRYt2yqTihSUJ1hYJ4lep4/edit?usp=sharing` the id is `1QDkWgZgcDDaA2p7qyhc9xeRYt2yqTihSUJ1hYJ4lep4`
- `GCP_API_KEY` - is the API key you've created on step 3.
