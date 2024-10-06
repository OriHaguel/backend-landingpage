// import { dbService } from "./db.service"

import { dbService } from "./db.service.js"

export async function addMsg(req, res) {
    const { body: msg } = req
    try {
        const collection = await dbService.getCollection('message')
        await collection.insertOne(msg)
        res.json(msg)

    } catch (err) {
        logger.error('cannot insert msg', err)
        throw err
    }
}