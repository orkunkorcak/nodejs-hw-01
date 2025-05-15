import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    newContacts.push(newContact);
  }
  const updatedContacts = [...contacts, ...newContacts];
  try {
    await writeContacts(updatedContacts);
    console.log('Data successfully added to file.');
  } catch (err) {
    console.error('Error appending data to file:', err);
  }
};

generateContacts(5);
