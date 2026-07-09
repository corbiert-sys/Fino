import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "Cette fonctionnalite n'est plus disponible." },
    { status: 410 }
  );
}
