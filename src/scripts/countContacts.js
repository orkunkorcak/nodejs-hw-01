import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await getAllContacts();
        const count = contacts.length;
        return count;
    } catch (err) {
        console.error('Error:', err);
        return 0;
    }
 };

console.log(await countContacts());
