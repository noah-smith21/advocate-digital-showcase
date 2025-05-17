import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  // This is no longer required with the newer @emailjs/browser package
  // The initialization is handled during the sendForm call
};

interface EmailParams {
  name: string;
  email: string;
  [key: string]: any; // Allow for additional fields
}

// Function to send emails similar to how it's done in Contact.tsx
export const sendEmailForm = async (
  serviceId: string,
  templateId: string,
  form: HTMLFormElement,
  publicKey: string
) => {
  try {
    const result = await emailjs.sendForm(
      serviceId,
      templateId,
      form,
      publicKey
    );
    
    console.log('Email successfully sent!', result);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send email. Please try again later.' };
  }
};

// Keep the original sendEmail function for backward compatibility
export const sendEmail = async (
  templateId: string, 
  params: Record<string, any>, 
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
