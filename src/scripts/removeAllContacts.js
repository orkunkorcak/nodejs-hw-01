import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, [], "utf-8");
        console.log('All contacts have been deleted successfully.');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
 };

removeAllContacts();
