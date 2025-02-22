# Document Assistant

This project is a React-based web application called **Document Assistant**. It allows users to upload documents and search within them.

## Architecture Diagram

![Architecture Diagram](https://github.com/jeevan356/PDAI_FossHack2025/blob/main/architecture.png?raw=true)

## Project Structure
```
document-assistant/
├── .gitignore
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── DocumentAssistant.css
│   │   ├── DocumentAssistant.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── reusable_components/
│   │   ├── FileUpload.tsx
│   │   ├── Loader.css
│   │   ├── Loader.tsx
│   ├── ocr/
│   │   ├── OCRProcessor.ts
│   ├── summarizer/
│   │   ├── TextSummarizer.ts
│   ├── services/
│   │   ├── LocalStorageService.ts
│   └── utils/
│       ├── FileParser.ts
│       ├── TextCleaner.ts
└── tsconfig.json
```

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode. See the section about running tests for more information.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run eject`
**Note:** This is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them.

All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Components

### DocumentAssistant
The **DocumentAssistant** component is located in `src/components/DocumentAssistant.tsx`. It allows users to upload a document and search within it.

### FileUpload
The **FileUpload** component is located in `src/reusable_components/FileUpload.tsx`. It provides a file upload interface with drag-and-drop support.

### Loader
The **Loader** component is located in `src/reusable_components/Loader.tsx`. It displays a loading spinner with an overlay.

### One of Best Open Source Application for the following problem statement:
Custom bank statement services streamline the process of tracking income and expenses by categorizing transactions according to tax codes. This makes tax filing more efficient, helps identify deductible expenses, and ensures compliance with regulations—reducing the risk of errors or audits. These services are especially beneficial for freelancers and gig workers, providing a clear, organized record of irregular income and variable expenses.

## services
Vercel Webhost service

### Applications of this project:
### 📌 **Enterprise & Business**
- **Internal Document Search Engine** - Find policies, reports, and contracts.
- **Contract Review** - Extract legal clauses & obligations.
- **Financial Document Processing** - Analyze invoices and bank statements.

### 📌 **Compliance & Privacy**
- **GDPR/HIPAA Compliance Scanner** - Detect & redact sensitive data.
- **FOIA Document Processing** - Summarize government records.

### 📌 **Legal & Research Assistance**
- **Legal Research Assistant** - Extracts case laws & legal precedents.
- **Scientific Paper Analyzer** - Summarizes research papers & patents.

### 📌 **Finance & Tax Assistance**
- **Bank Statement Analyzer** - Categorizes transactions & spending.
- **Tax Document Summarization** - Extracts key figures from tax forms.

### 📌 **Healthcare & Medical Applications**
- **Medical Record Summarization** - Extracts diagnoses, treatments, medications.
- **Clinical Trial Data Extraction** - Analyzes trial results & drug information.

### 📌 **Education & Learning**
- **Textbook Summarization** - Generates quick revision notes.
- **Exam Preparation Tool** - Creates flashcards & quizzes from study materials.

