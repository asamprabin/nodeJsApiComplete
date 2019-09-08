// News model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userActivityLogsSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    url: [{ type: String, required: true }],
    ipAddress: { type: String, required: true },
    browser: { type: String, required: true },
    browser_version: { type: String, required: true },
    device: { type: String, required: true },
    isMobile: { type: Boolean, required: true },
    isTablet: { type: Boolean, required: true },
    isDesktopDevice: { type: Boolean, required: true },
    os: { type: String, required: true },
    os_version: { type: String, required: true },
    userAgent: { type: String, required: true },
    createdAt: { type: Date, required: true },
})

const userActivityLogsModel = mongoose.model('userActivityLog', userActivityLogsSchema)

module.exports = userActivityLogsModel