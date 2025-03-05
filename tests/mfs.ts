import * as fs from 'fs';
import * as path from 'path';

const onedriveFolderPath = 'C:\\Users\\YourUsername\\OneDrive\\MFA_Codes'; // Adjust path

export async function getLatestMfaCode(): Promise<string | null> {
    try {
        const files = fs.readdirSync(onedriveFolderPath)
            .filter(file => file.endsWith('.txt'))
            .map(file => ({
                name: file,
                time: fs.statSync(path.join(onedriveFolderPath, file)).mtime.getTime()
            }))
            .sort((a, b) => b.time - a.time); // Sort files by modification time (latest first)

        if (files.length === 0) {
            console.error('No MFA code file found.');
            return null;
        }

        const latestFile = path.join(onedriveFolderPath, files[0].name);
        console.log(`Reading latest MFA code from: ${latestFile}`);

        const content = fs.readFileSync(latestFile, 'utf8');
        const codeMatch = content.match(/\b\d{6}\b/); // Extract 6-digit code

        if (codeMatch) {
            console.log(`MFA Code Found: ${codeMatch[0]}`);
            return codeMatch[0];
        } else {
            console.error('No valid MFA code found in file.');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving MFA code:', error);
        return null;
    }
}
