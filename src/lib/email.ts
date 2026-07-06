import { Resend } from "resend";
import { type Product, formatPrice } from "./products";

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY non configuré");
    resend = new Resend(key);
  }
  return resend;
}

export async function sendPurchaseEmail(
  customerEmail: string,
  customerName: string | null,
  product: Product,
  downloadUrl: string
) {
  const firstName = customerName?.split(" ")[0] || "cher client";
  const fromEmail = process.env.EMAIL_FROM || "Mon Fino <noreply@monfino.fr>";

  await getResend().emails.send({
    from: fromEmail,
    to: customerEmail,
    subject: `Votre achat Mon Fino — ${product.name}`,
    html: buildEmailHtml(firstName, product, downloadUrl),
  });
}

function buildEmailHtml(
  firstName: string,
  product: Product,
  downloadUrl: string
): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-block;background:#0F2B46;color:white;font-weight:800;font-size:24px;padding:10px 20px;border-radius:10px;letter-spacing:-0.5px;">
        <span style="color:#00C853;">●</span> Mon Fino
      </div>
    </div>

    <!-- Card -->
    <div style="background:white;border-radius:16px;padding:40px 32px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

      <h1 style="color:#0F2B46;font-size:24px;margin:0 0 8px 0;">
        Merci ${firstName} !
      </h1>
      <p style="color:#6b7280;font-size:16px;line-height:1.6;margin:0 0 24px 0;">
        Votre achat a bien été confirmé. Voici votre produit, prêt à télécharger.
      </p>

      <!-- Product box -->
      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-bottom:24px;">
        <div style="font-size:32px;margin-bottom:8px;">${product.icon}</div>
        <div style="color:#0F2B46;font-weight:700;font-size:16px;margin-bottom:4px;">
          ${product.name}
        </div>
        <div style="color:#6b7280;font-size:14px;">
          ${formatPrice(product.price)} TTC
        </div>
      </div>

      <!-- Download button -->
      <div style="text-align:center;margin:32px 0;">
        <a href="${downloadUrl}"
           style="display:inline-block;background:#00C853;color:white;font-weight:700;font-size:16px;padding:16px 40px;border-radius:50px;text-decoration:none;">
          Télécharger mon produit
        </a>
      </div>

      <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:0;">
        Ce lien est personnel et valable 7 jours. Si vous rencontrez un problème,
        répondez simplement à cet email.
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:32px;">
      <p style="color:#9ca3af;font-size:12px;margin:0 0 4px 0;">
        Mon Fino — Finance Solo
      </p>
      <p style="color:#d1d5db;font-size:11px;margin:0;">
        Cet email a été envoyé suite à votre achat sur monfino.fr
      </p>
    </div>
  </div>
</body>
</html>`;
}
