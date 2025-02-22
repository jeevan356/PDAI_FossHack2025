class TextSummarizer {
    summarize(text: string, maxLength: number = 200): string {
        if (text.length <= maxLength) {
            return text;
        }

        // Simple summarization logic, truncate to the first `maxLength` characters
        return text.substring(0, maxLength) + '...';
    }
}

export default new TextSummarizer(); #summarization
