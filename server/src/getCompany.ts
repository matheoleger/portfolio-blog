import fs from 'fs';

export const getCompany = (name: string) => { 
    try {
		const readData = fs.readFileSync(`data/companies/${name}.md`, 'utf8');
		if (readData) {
			return readData;
		}
	} catch (error) {
		console.error(error);
	}
}