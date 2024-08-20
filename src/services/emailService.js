// service/emailService.js

import emailjs from 'emailjs-com';

export function sendEmail(templateId, emailData) {
  return emailjs.send('service_uufh5ph', templateId, emailData, 'wTZCIoV3dYBw4wBOj');
}