import fs from 'fs';
import path from 'path';

export async function GET() {
  const pdfPath = path.join(process.cwd(), 'app', 'resources', 'faq_doc.pdf');

  try {
    const fileBuffer = await fs.promises.readFile(pdfPath);
    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Disposition': 'inline; filename="faq_doc.pdf"',
      },
    });
  } catch (error) {
    return new Response('FAQ PDF not found', { status: 404 });
  }
}

