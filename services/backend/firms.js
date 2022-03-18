import { pool } from '../../config/db'

const getPartialFirmInfo = async () => {
   
    const getInfoQuery = `
        SELECT f.firmname , f.activity, c.country_name, s.sector_name, cc.city_name
        FROM firms as f
        inner join countries as c on f.fk_countryid = c.countryid
        inner join cities as cc on f.fk_cityid = cc.cityid
        inner join sectors as s  on f.fk_sectorid = s.sectorid
    `

    const queryResponse = await pool.query(getInfoQuery)
    
    return queryResponse.rows
} 

export {
    getPartialFirmInfo
}