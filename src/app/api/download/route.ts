import { NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { verifyDownloadToken } from "@/lib/token";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const sessionId = searchParams.get("session");
  const productId = searchParams.get("product");
  const token = searchParams.get("token");

  if (!sessionId || !productId || !token) {
    return NextResponse.json(
      { error: "Paramètres manquants" },
      { status: 400 }
    );
  }

  if (!verifyDownloadToken(token, sessionId, productId)) {
    return NextResponse.json(
      { error: "Lien de téléchargement invalide ou expiré" },
      { status: 403 }
    );
  }

  const product = getProduct(productId);
  if (!product) {
    return NextResponse.json(
      { error: "Produit introuvable" },
      { status: 404 }
    );
  }

  const filePath = join(process.cwd(), "products", product.fileName);

  try {
    const fileBuffer = await readFile(filePath);

    const ext = product.fileName.split(".").pop()?.toLowerCase();
    const contentTypes: Record<string, string> = {
      pdf: "application/pdf",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      zip: "application/zip",
    };

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentTypes[ext || ""] || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${product.fileName}"`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Fichier non disponible" },
      { status: 404 }
    );
  }
}
