class TextCleaner {
    /**
     * Cleans text by removing extra whitespace and trimming.
     * @param text - The text to clean.
     * @returns The cleaned text.
     */
    clean(text: string): string {
        return text.replace(/\s+/g, ' ').trim();
    }

    /**
     * Remove special characters from text, leaving only alphanumeric characters and spaces.
     * @param text - The text to sanitize.
     * @returns The sanitized text.
     */
    removeSpecialCharacters(text: string): string {
        return text.replace(/[^a-zA-Z0-9\s]/g, '');
    }
}

export default new TextCleaner();
