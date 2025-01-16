require("dotenv").config();
const serviceId = process.env.serviceId;
const templateId = process.env.templateId;
const userId = process.env.userId;

export { serviceId, templateId, userId };
