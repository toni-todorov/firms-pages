import { getPartialFirmInfo } from '../../../services/backend/firms'

const getInfo = async (req, res) => {
    try {
        const partialFirmInfo = await getPartialFirmInfo()

        return res.send(partialFirmInfo)
    } catch (error) {
        return { error: error.message }
    }
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        //TODO
    } else if (req.method === 'GET') {
        getInfo(req, res)
    } else {
        //TODO
    }
}
