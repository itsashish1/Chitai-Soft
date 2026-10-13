import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId: "service_chitaisoft",
  templateIdAdmin: "template_admin_alert",
  templateIdClient: "template_client_reply"
};

export async function submitEnquiry(payload) {
  const isLiveConfigured =
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

  if (isLiveConfigured) {
    // 1. Send alert to Chitai Soft engineering team
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateIdAdmin,
      payload,
      EMAILJS_CONFIG.publicKey
    );

    // 2. If client provided email, send automated receipt acknowledgment
    if (payload.user_email && payload.user_email !== 'N/A' && payload.user_email.includes('@')) {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateIdClient,
        payload,
        EMAILJS_CONFIG.publicKey
      );
    }
    return { success: true, mode: 'live' };
  } else {
    // Graceful offline simulation
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, mode: 'simulated' };
  }
}
