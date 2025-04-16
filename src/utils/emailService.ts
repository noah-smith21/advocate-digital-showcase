
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
// Replace 'YOUR_USER_ID' with your actual EmailJS user ID when setting up
export const initEmailJS = () => {
  emailjs.init("YOUR_USER_ID");
};

interface EmailParams {
  name: string;
  email: string;
  [key: string]: any; // Allow for additional fields
}

// Generic function to send emails
export const sendEmail = async (
  templateId: string, 
  params: EmailParams, 
  serviceId: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      params
    );
    
    console.log('Email successfully sent!', response);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send email. Please try again later.' };
  }
};
