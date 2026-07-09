import { Resend } from "resend";
import { type Product, formatPrice } from "./products";

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY non configure");
    resend = new Resend(key);
  }
  return resend;
}

export async function sendPurchaseEmail(
  customerEmail: string,
  customerName: string | null,
  product: Product,
  _downloadUrl: string
) {
  const firstName = customerName?.split(" ")[0] || "cher client";
  const fromEmail = process.env.EMAIL_FROM || "PawlyDog <noreply@pawlydog.com>";

  await getResend().emails.send({
    from: fromEmail,
    to: customerEmail,
    subject: `Votre commande PawlyDog — ${product.name}`,
    html: buildEmailHtml(firstName, product),
  });
}

function buildEmailHtml(
  firstName: string,
  product: Product
): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f0f9ff;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-block;background:#1B4965;color:white;font-weight:800;font-size:24px;padding:10px 20px;border-radius:14px;letter-spacing:-0.5px;">
        Pawly<span style="color:#FF6B35;">Dog</span>
      </div>
    </div>

    <!-- Card -->
    <div style="background:white;border-radius:16px;padding:40px 32px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

      <h1 style="color:#1B4965;font-size:24px;margin:0 0 8px 0;">
        Merci ${firstName} !
      </h1>
      <p style="color:#6b7280;font-size:16px;line-height:1.6;margin:0 0 24px 0;">
        Votre commande a bien ete confirmee. Voici le recapitulatif.
      </p>

      <!-- Product box -->
      <div style="background:#f0f9ff;border:1px solid #BEE9E8;border-radius:12px;padding:20px;margin-bottom:24px;">
        <div style="color:#1B4965;font-weight:700;font-size:16px;margin-bottom:4px;">
          ${product.name}
        </div>
        <div style="color:#6b7280;font-size:14px;">
          ${formatPrice(product.price)} TTC
        </div>
      </div>

      <!-- Next steps -->
      <div style="margin:24px 0;">
        <p style="color:#1B4965;font-weight:700;font-size:14px;margin:0 0 12px 0;">Prochaines etapes :</p>
        <p style="color:#6b7280;font-size:14px;line-height:1.8;margin:0;">
          1. Votre commande sera expediee sous 24h ouvrees<br/>
          2. Vous recevrez un email de suivi avec le numero de colis<br/>
          3. Livraison estimee sous 3-5 jours ouvrables
        </p>
      </div>

      <p style="color:#9ca3af;font-size:13px;line-height:1.5;margin:0;">
        Une question ? Repondez simplement a cet email ou ecrivez-nous a contact@pawlydog.com
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:32px;">
      <p style="color:#9ca3af;font-size:12px;margin:0 0 4px 0;">
        PawlyDog — La securite aquatique de votre compagnon
      </p>
      <p style="color:#d1d5db;font-size:11px;margin:0;">
        Cet email a ete envoye suite a votre commande sur pawlydog.com
      </p>
    </div>
  </div>
</body>
</html>`;
}
