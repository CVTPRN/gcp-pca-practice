# PCA Studio — Google Cloud Professional Cloud Architect Practice

An independent, English language practice app for the **standard** Professional Cloud Architect exam. The questions are original scenarios aligned with the [official exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf). They are not actual, leaked, or Google endorsed exam questions.

## Features

- 113 original scenario questions across all six exam domains, including 27 case study scenarios.
- Daily 20 question set on the Budapest calendar day, 20 question free practice, and 50 question exam simulation with a 120 minute guide timer.
- Topic based practice sets of up to 10 questions, with prior performance by topic.
- Single and multiple select questions, saved answers, question navigation, explanations, and an official documentation link for every answer.
- Quick reference with 61 searchable abbreviations and 12 numerical facts or exam proportions, each with a source.
- Local browser storage, JSON export, and restore for attempts and in progress work. No account or backend database.

Use **Save and next** to persist an answer. Jumping with the question map does not save the current selection. The simulation timer does not automatically end an attempt. Percentages are practice scores, not official scaled exam scores. Existing `pca-studio-v2` browser data and backups remain compatible; the first 65 question IDs and answer positions are unchanged.

## Question research and attribution

The expansion was informed by public practice scenarios and community discussions, then rewritten as original questions with answer explanations checked against Google Cloud documentation. The external examples are research leads, not answer authorities. Each expanded question retains a link to the public inspiration and an official product documentation link for its answer.

- [Google Cloud official sample questions](https://docs.google.com/forms/d/e/1FAIpQLSf54f7FbtSJcXUY6-DUHfBG31jZ3pujgb8-a5io_9biJsNpqg/viewform?usp=sf_link)
- [Current standard exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) and its four case studies: [EHR Healthcare](https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf), [Altostrat Media](https://services.google.com/fh/files/misc/v6.1_pca_altostrat_media_case_study_english.pdf), [Cymbal Retail](https://services.google.com/fh/files/misc/v6.1_pca_cymbal_retail_case_study_english.pdf), [KnightMotives Automotive](https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf)
- [sanda82/gcp-pca](https://github.com/sanda82/gcp-pca) and [danielngo2025/gcp-pca](https://github.com/danielngo2025/gcp-pca) public practice repositories
- [CertBlaze PCA practice](https://www.certblaze.com/google/professional-cloud-architect/questions) and [Reddit certification discussion](https://www.reddit.com/r/googlecloud/comments/1qbw4ku/passed_gcp_professional_cloud_architect_new/)

Public repositories and practice sites can contain outdated or incorrect answers. Do not treat them as official exam content. Documentation and exam proportions were reviewed on November 16, 2026; recheck official sources as products and exam policies change.

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
