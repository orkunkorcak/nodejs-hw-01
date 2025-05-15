import { getAllContacts } from "./getAllContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await getAllContacts();
        if (contacts.length === 0) {
            console.log("No contacts to remove.");
            return;
        }
        const updatedContacts = contacts.slice(0, -1);
        await writeContacts(updatedContacts);
        console.log("Last contact removed successfully.");
    } catch (err) {
        console.error("Error:", err);
    }
 };

removeLastContact();
