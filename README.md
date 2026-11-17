# PCA Studio — Google Cloud Professional Cloud Architect Practice

An independent, English language practice app for the **standard** Professional Cloud Architect exam. The questions are original scenarios aligned with the [official exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf). They are not actual, leaked, or Google endorsed exam questions.

## Features

- 263 original practice questions across all six exam domains, including 57 case study scenarios and 50 multiple-select questions.
- Daily 20 question set on the Budapest calendar day, 20 question free practice, and a 50 question exam simulation with a 120 minute guide timer. The simulation follows a 12 / 9 / 9 / 8 / 6 / 6 domain mix and selects six questions from each of two current official cases.
- Topic and named case study practice sets of up to 10 questions, with prior performance by topic. Coverage practice prioritizes questions not encountered in completed sets.
- Single and multiple select questions, saved answers, question navigation, explanations, and an official documentation link for every answer.
- Quick reference with 61 searchable abbreviations and 12 numerical facts or exam proportions, each with a source.
- Local browser storage, JSON export, and restore for attempts and in progress work. No account or backend database.

Use **Save and next** to persist an answer. Jumping with the question map does not save the current selection. The simulation timer does not automatically end an attempt. Percentages are practice scores, not official scaled exam scores. Existing `pca-studio-v2` browser data and backups remain compatible; the first 65 question IDs and answer positions are unchanged.

## Question research and attribution

The expansion was informed by public practice scenarios and community discussions, then written as original questions based on the current exam guide, the four official case briefs, and Google Cloud documentation. External examples are research leads, not answer authorities. Every question has a product documentation link; earlier expansion rows link to their public practice lead, new general rows to the exam guide objective, and named case rows to the official case brief. Case-study simulations use the standard exam's published two-case, 20–30% pattern; their domain mix is an approximation of the guide's published percentages, not a claim about Google's exact test assembly.

- [Google Cloud official sample questions](https://docs.google.com/forms/d/e/1FAIpQLSf54f7FbtSJcXUY6-DUHfBG31jZ3pujgb8-a5io_9biJsNpqg/viewform?usp=sf_link)
- [Current standard exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) and its four case studies: [EHR Healthcare](https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf), [Altostrat Media](https://services.google.com/fh/files/misc/v6.1_pca_altostrat_media_case_study_english.pdf), [Cymbal Retail](https://services.google.com/fh/files/misc/v6.1_pca_cymbal_retail_case_study_english.pdf), [KnightMotives Automotive](https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf)
- [sanda82/gcp-pca](https://github.com/sanda82/gcp-pca) and [danielngo2025/gcp-pca](https://github.com/danielngo2025/gcp-pca) public practice repositories
- [CertBlaze PCA practice](https://www.certblaze.com/google/professional-cloud-architect/questions), [other public practice site](https://googlecloudcertification.com/practice-tests/professional-cloud-architect?mode=exam), and [Reddit certification discussion](https://www.reddit.com/r/googlecloud/comments/1qbw4ku/passed_gcp_professional_cloud_architect_new/)

Public repositories and practice sites can contain outdated or incorrect answers. None of their question text or answer keys were imported in bulk. Do not treat this bank as official exam content. The official exam guide, case briefs, and format were reviewed on November 17, 2026; recheck product documentation and policies as they change.

## Run locally

Node.js 20+; no external packages.

```bash
npm test
npm run build
npm run dev
```

Open `http://localhost:3000`. The `dist/` directory is a deployable static site.

## Render Static Site

- Repository: `https://github.com/CVTPRN/gcp-pca-practice`; branch: `main`
- Build command: `npm test && npm run build`
- Publish directory: `dist`
- No environment variables, paid compute, database, or secrets.

This app is independent of Google Cloud. Refer to the [official certification page](https://cloud.google.com/learn/certification/cloud-architect) for current exam conditions.

