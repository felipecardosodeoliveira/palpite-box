import { GoogleSpreadsheet } from 'google-spreadsheet';
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);
import { fromBase64 } from '../../utils/helpers';

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        });
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[2];
        await sheet.loadCells('A2:B2');
        const togglePromocao = sheet.getCell(1, 0);
        const textoCel = sheet.getCell(1, 1);

        res.end(JSON.stringify({
            hasPromo: togglePromocao.value === 'VERDADEIRO',
            message: textoCel.value
        }));
    } catch (error) {
        res.end(JSON.stringify({
            hasPromo: false,
            message: ''
        }));

    }
}