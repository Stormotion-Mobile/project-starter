import {syncLocales} from '@stormotion/google-sheets-localization-helpers';
import dotenv from 'dotenv';

dotenv.config();

const main = () => {
  const sheetId = process.env.SHEET_ID ?? '';
  const googleApiKey = process.env.GCP_API_KEY ?? '';

  syncLocales({
    sheetId,
    googleApiKey,
    sheetIndex: parseInt(process.argv[3], 10),
    localesDirectoryPath: `../${process.argv[2]}/src/strings`,
  })
    .then(() => console.log('locales were synced successfully'))
    .catch(e => console.log(`There was an error when syncing locales: ${e}`));
};

main();
