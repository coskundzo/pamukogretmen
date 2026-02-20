// Cloudflare Pages Function for contact form
export async function onRequestPost(context) {
  try {
    const formData = await context.request.json();
    
    // Validate required fields
    const { name, email, phone, message } = formData;
    
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Lütfen tüm zorunlu alanları doldurun.' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Geçerli bir e-posta adresi girin.' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Here you can integrate with email services like:
    // - Resend
    // - SendGrid
    // - Mailgun
    // - Or store in a database (D1, KV, etc.)
    
    // For now, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      grade: formData.grade,
      lesson_type: formData.lesson_type,
      message,
      timestamp: new Date().toISOString()
    });
    
    // You can also use Cloudflare Workers KV to store submissions:
    // await context.env.CONTACT_SUBMISSIONS.put(
    //   `submission_${Date.now()}`,
    //   JSON.stringify(formData)
    // );
    
    // Or send email via Resend API:
    // const resendResponse = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     from: 'noreply@yourdomain.com',
    //     to: 'pamuk.matematik@email.com',
    //     subject: `Yeni Randevu Talebi - ${name}`,
    //     html: `
    //       <h2>Yeni Randevu Talebi</h2>
    //       <p><strong>Ad Soyad:</strong> ${name}</p>
    //       <p><strong>E-posta:</strong> ${email}</p>
    //       <p><strong>Telefon:</strong> ${phone}</p>
    //       <p><strong>Sınıf:</strong> ${formData.grade || 'Belirtilmemiş'}</p>
    //       <p><strong>Ders Türü:</strong> ${formData.lesson_type || 'Belirtilmemiş'}</p>
    //       <p><strong>Mesaj:</strong> ${message || 'Mesaj yok'}</p>
    //     `
    //   })
    // });
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
