IT3040 – ITPM Assignment 1

📌 Project Overview

This project evaluates the accuracy, stability, and usability of the Singlish-to-Sinhala transliteration system available at:
https://www.swifttranslator.com/

The main objectives of this assignment are:

Identify scenarios where the system correctly converts Singlish to Sinhala (positive functional cases).

Identify scenarios where the system fails or produces incorrect conversions (negative functional cases).

Test the user interface behavior, especially real-time updates during typing.

Automate all identified test scenarios using Playwright and record the results.

📂 Repository Structure
IT3040_Assignment1/
├─ README.md
├─ package.json
├─ playwright.config.ts
├─ tests/
│  ├─ pos_functional.spec.ts
│  ├─ neg_functional.spec.ts
│  └─ pos_ui.spec.ts
├─ test_cases.xlsx
└─ README_assets/  (optional screenshots or supporting files)


tests/ – Contains all Playwright test scripts:

pos_functional.spec.ts – Positive functional test cases (correct conversions).

neg_functional.spec.ts – Negative functional test cases (failures or edge cases).

pos_ui.spec.ts – UI-related test cases (real-time output updates).

test_cases.xlsx – Excel file documenting all test scenarios, inputs, expected outputs, actual outputs, status, and validation type (accuracy/robustness).

playwright.config.ts – Playwright configuration file.

⚙️ Setup Instructions

Clone the repository

git clone <your-git-repo-link>
cd IT3040_Assignment1


Install dependencies

npm install


Run Playwright tests

Run all tests:

npx playwright test


Run a specific test file:

npx playwright test tests/pos_functional.spec.ts


Generate HTML report:

npx playwright show-report

📝 Test Scenarios

Positive Functional Tests (Pos_Fun_0001 – Pos_Fun_0024)

Simple, compound, and complex sentences.

Interrogative and imperative forms.

Polite and informal phrasing.

Mixed language content (Singlish + English).

Tense variations (past, present, future).

Negation patterns.

Date, time, currency, and unit formats.

Long paragraphs and multi-line inputs.

Negative Functional Tests (Neg_Fun_0001 – Neg_Fun_0010)

Unsupported symbols or mixed-case input failures.

Improperly joined words or missing spaces.

Incorrect handling of future tense or slang.

Edge cases for punctuation or mixed English words.

UI Tests (Pos_UI_0001)

Real-time output updates while typing.

All tests follow the Appendix 2 test case template with columns for Input, Expected Output, Actual Output, Status, and Validation Type.

✅ Validation and Reporting

Status: Each test case is marked as pass or fail.

Validation Types:

Accuracy validation – Correct Singlish-to-Sinhala conversion.

Robustness validation – Input edge cases, typos, slang.

Formatting preservation – Punctuation, spaces, paragraphs.

Real-time output update behavior – UI validation.

Reports: Playwright HTML reports are generated after test execution. Screenshots are captured automatically for failed cases.

📌 Notes

This project focuses on functional testing and UI usability, not backend APIs, performance, or security.

English technical terms (e.g., Zoom, WiFi, WhatsApp) should remain unchanged in Sinhala output.

Chat-style abbreviations (e.g., “Thx”, “u”) may not be converted correctly, which is acceptable.

Negative test cases highlight limitations of the transliteration system.

⚡ References

SwiftTranslator
 – The system under test.

Playwright Official Documentation: https://playwright.dev