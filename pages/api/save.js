import moment from 'moment';
import { GoogleSpreadsheet } from 'google-spreadsheet';
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const genCupom = () => {
    let cupom = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
    cupom = cupom.substr(0, 4) + '-' + cupom.substr(4, 4) + '-' + cupom.substr(8, 4);
    return cupom;
}

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        });

        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[1];

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A2:B2');
        const togglePromocao = sheetConfig.getCell(1, 0);
        const textoCel = sheetConfig.getCell(1, 1);

        let Cupom = '';
        let Promo = '';

        if (togglePromocao.value === 'VERDADEIRO') {
            // TODO: Promoção temporária
            Cupom = genCupom();
            Promo = textoCel.value;
        }

        const form = JSON.parse(req.body);
        await sheet.addRow({
            ...form,
            Cupom,
            Promo,
            Data: moment().format('DD/MM/YYYY HH:mm:ss'),
        });

        res.end(JSON.stringify({
            showCupon: Cupom !== '',
            Cupom,
            Promo
        }));

    } catch (error) {
        console.log(error)
    }

}