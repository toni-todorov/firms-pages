import { pool } from '../../config/db'

const getPartialFirmInfo = async () => {
    const getInfoQuery = `
        SELECT f.firmid, f.firmname , f.activity, c.country_name, s.sector_name, cc.city_name
        FROM firms as f
        inner join countries as c on f.fk_countryid = c.countryid
        inner join cities as cc on f.fk_cityid = cc.cityid
        inner join sectors as s  on f.fk_sectorid = s.sectorid
    `

    const queryResponse = await pool.query(getInfoQuery)

    return queryResponse.rows
}

const getFirmsIds = async () => {
    const getfirmsIdsQuery = `
        SELECT firmid FROM firms
    `
    const queryResponse = await pool.query(getfirmsIdsQuery)
    // console.log(queryResponse)
    return queryResponse.rows
}

const getFirmInfo = async (id) => {
    const getFirmInfoQuery = `
    SELECT f.firmname, f.activity, f.description, f.contact_person, f.contact_mobile, f.contact_ph_office, f.website, f.employee, c.country_name, s.sector_name, cc.city_name
    FROM firms as f
    inner join countries as c on f.fk_countryid = c.countryid
    inner join cities as cc on f.fk_cityid = cc.cityid
    inner join sectors as s  on f.fk_sectorid = s.sectorid
    WHERE firmid = ${id}
    `

    const queryResponse = await pool.query(getFirmInfoQuery)
    return queryResponse.rows[0]
}

export { 
    getPartialFirmInfo,
    getFirmsIds,
    getFirmInfo
}
