const notificationsModel = require("../models/notifications")

module.exports = {
    addNotification: async({
        creator,
        receiver,
        text,
        link
    })=>{
        const data = await notificationsModel.create({
            creator,
            link,
            receiver,
            text
        })
        return data
    },
    getNotifications: async(req, res)=>{
        const notifications = await notificationsModel.find({
            receiver: req.user._id
        })
        res.json(notifications)
    }
}