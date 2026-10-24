import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ucKP_bITYsfk2_x5Q",
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_u5zcasj",
  templateIdAdmin: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_z2upf3g",
  templateIdClient: import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT_ID || null
};

// Initialize EmailJS browser SDK with public key
if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
  try {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  } catch (err) {
    console.warn("EmailJS init:", err);
  }
}

export async function submitEnquiry(payload) {
  const isLiveConfigured =
    Boolean(EMAILJS_CONFIG.publicKey) &&
    EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY" &&
    Boolean(EMAILJS_CONFIG.serviceId) &&
    Boolean(EMAILJS_CONFIG.templateIdAdmin);

  if (isLiveConfigured) {
    const templateParams = {
      ...payload,
      // Comprehensive parameter aliases to match whatever placeholders are defined in template_rz71c4b
      name: payload.user_name || '',
      from_name: payload.user_name || 'Website Visitor',
      user_name: payload.user_name || '',
      company: payload.user_company || 'N/A',
      user_company: payload.user_company || 'N/A',
      phone: payload.user_phone || '',
      from_phone: payload.user_phone || '',
      user_phone: payload.user_phone || '',
      email: payload.user_email || 'no-reply@chitaisoftautomation.in',
      from_email: payload.user_email || 'no-reply@chitaisoftautomation.in',
      user_email: payload.user_email || 'no-reply@chitaisoftautomation.in',
      reply_to: (payload.user_email && payload.user_email.includes('@')) ? payload.user_email : 'chitaisoft@gmail.com',
      message: payload.project_brief || '',
      project_brief: payload.project_brief || '',
      service: payload.service_interest || 'General Automation Inquiry',
      service_interest: payload.service_interest || 'General Automation Inquiry',
      page_source: payload.page_source || 'Website',
      submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // 1. Send primary alert to Chitai Soft engineering team
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateIdAdmin,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    // 2. Optional: If a second client-facing auto-reply template ID is provided and visitor gave an email
    if (
      EMAILJS_CONFIG.templateIdClient &&
      payload.user_email &&
      payload.user_email !== 'N/A' &&
      payload.user_email.includes('@')
    ) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateIdClient,
          templateParams,
          EMAILJS_CONFIG.publicKey
        );
      } catch (clientErr) {
        console.warn('Optional client acknowledgment dispatch note:', clientErr);
      }
    }

    return { success: true, mode: 'live', response };
  } else {
    // Graceful offline simulation
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, mode: 'simulated' };
  }
}
