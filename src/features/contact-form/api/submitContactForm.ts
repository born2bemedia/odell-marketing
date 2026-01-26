import type { ContactFormSchema } from '../model/ContactForm.schema';

export const submitContactForm = async (data: ContactFormSchema) => {
  const formData = new FormData();
  
  formData.append('fullName', data.fullName);
  formData.append('email', data.email);
  formData.append('companyProject', data.companyProject || '');
  formData.append('topicOfInquiry', data.topicOfInquiry || '');
  formData.append('description', data.description || '');

  const res = await fetch(`/api/contact`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }
};
