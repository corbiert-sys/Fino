import { createHmac } from "crypto";

function getSecret(): string {
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) throw new Error("DOWNLOAD_SECRET non configuré");
  return secret;
}

export function generateDownloadToken(
  sessionId: string,
  productId: string
): string {
  const hmac = createHmac("sha256", getSecret());
  hmac.update(`${sessionId}:${productId}`);
  return hmac.digest("hex");
}

export function verifyDownloadToken(
  token: string,
  sessionId: string,
  productId: string
): boolean {
  const expected = generateDownloadToken(sessionId, productId);
  return token === expected;
}
