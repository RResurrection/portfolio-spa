import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function GET() {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([800, 720]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const mainText = `
      Hi I am
      Grekul Myroslav
      Backend & Frontend Developer

      with a strong focus on building scalable, user-friendly applications.
      With expertise in modern web technologies and a deep understanding of both
      server-side and client-side development, I strive to deliver efficient and 
      seamless digital experiences. Whether it's crafting clean, maintainable code 
      or optimizing performance, I’m always eager to take on new challenges and 
      grow as a developer.
    `;

    const aboutMe = `
      About Me
      Skilled in modern web development with expertise in Next.js, Redux, TypeScript,
      and Tailwind CSS. My goal is to create seamless user experiences while ensuring
      scalability and maintainability.
    `;

    const technologies = `
      - Next.js
      - Redux
      - TypeScript
      - Tailwind CSS
    `;

    const email = "Email: frontendya@gmail.com";

    page.drawText(mainText, {
      x: 50,
      y: 440,
      size: 12,
      font,
      color: rgb(0, 0, 0),
      lineHeight: 18,
      maxWidth: 500,
    });

    page.drawText(aboutMe, {
      x: 50,
      y: 250,
      size: 12,
      font,
      color: rgb(0, 0, 0),
      lineHeight: 18,
      maxWidth: 500,
    });

    page.drawText(technologies, {
      x: 50,
      y: 150,
      size: 12,
      font,
      color: rgb(0, 0, 0),
      lineHeight: 18,
      maxWidth: 500,
    });

    page.drawText(email, {
      x: 50,
      y: 25,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; CV-FILE.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
