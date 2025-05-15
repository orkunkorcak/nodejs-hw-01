import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Data successfully written to file.');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
};
