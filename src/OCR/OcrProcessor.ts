import Tesseract from 'tesseract.js';

class OCRProcessor {
    async extractTextFromImage(imagePath: string): Promise<string> {
        const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
        return text;
    }

    async extractTextFromPDF(pdfPath: string): Promise<string> {
        // Implement PDF text extraction logic here
        // You might use a library like pdf-lib or pdf-parse
        throw new Error('PDF text extraction not implemented yet.');
    }
}

export default new OCRProcessor();
