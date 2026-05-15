import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readmeRouter = Router();

const SUPPORTED_LANGUAGES = {
  en: { name: "English", direction: "ltr" },
  es: { name: "Spanish (Español)", direction: "ltr" },
  fr: { name: "French (Français)", direction: "ltr" },
  de: { name: "German (Deutsch)", direction: "ltr" },
  pt: { name: "Portuguese (Português)", direction: "ltr" },
  zh: { name: "Chinese Simplified (中文)", direction: "ltr" },
  ja: { name: "Japanese (日本語)", direction: "ltr" },
  hi: { name: "Hindi (हिन्दी)", direction: "ltr" },
  ar: { name: "Arabic (العربية)", direction: "rtl" },
  ru: { name: "Russian (Русский)", direction: "ltr" },
  ko: { name: "Korean (한국어)", direction: "ltr" },
  it: { name: "Italian (Italiano)", direction: "ltr" },
  nl: { name: "Dutch (Nederlands)", direction: "ltr" },
  tr: { name: "Turkish (Türkçe)", direction: "ltr" },
  pl: { name: "Polish (Polski)", direction: "ltr" },
};

const SECTIONS = {
  en: { features: "Features", tech: "Tech Stack", install: "Installation", usage: "Usage", contrib: "Contributing", license: "License", contribText: "Contributions are welcome! Please open an issue or submit a pull request.", licensePrefix: "This project is licensed under the", licenseSuffix: "License." },
  es: { features: "Características", tech: "Tecnologías Utilizadas", install: "Instalación", usage: "Uso", contrib: "Contribuciones", license: "Licencia", contribText: "¡Las contribuciones son bienvenidas! Por favor abre un issue o envía un pull request.", licensePrefix: "Este proyecto está licenciado bajo la Licencia", licenseSuffix: "." },
  fr: { features: "Fonctionnalités", tech: "Technologies Utilisées", install: "Installation", usage: "Utilisation", contrib: "Contributions", license: "Licence", contribText: "Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request.", licensePrefix: "Ce projet est sous licence", licenseSuffix: "." },
  de: { features: "Funktionen", tech: "Verwendete Technologien", install: "Installation", usage: "Verwendung", contrib: "Mitwirken", license: "Lizenz", contribText: "Beiträge sind willkommen! Bitte öffnen Sie ein Issue oder senden Sie einen Pull Request.", licensePrefix: "Dieses Projekt ist unter der", licenseSuffix: "-Lizenz lizenziert." },
  pt: { features: "Funcionalidades", tech: "Tecnologias Utilizadas", install: "Instalação", usage: "Uso", contrib: "Contribuições", license: "Licença", contribText: "Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.", licensePrefix: "Este projeto está licenciado sob a Licença", licenseSuffix: "." },
  zh: { features: "功能特性", tech: "技术栈", install: "安装", usage: "使用方法", contrib: "贡献", license: "许可证", contribText: "欢迎贡献！请提交 Issue 或 Pull Request。", licensePrefix: "本项目基于", licenseSuffix: "许可证开源。" },
  ja: { features: "機能", tech: "技術スタック", install: "インストール", usage: "使い方", contrib: "貢献", license: "ライセンス", contribText: "貢献を歓迎します！Issueを作成するか、Pull Requestを送ってください。", licensePrefix: "このプロジェクトは", licenseSuffix: "ライセンスの下で公開されています。" },
  hi: { features: "विशेषताएं", tech: "तकनीकी स्टैक", install: "इंस्टॉलेशन", usage: "उपयोग", contrib: "योगदान", license: "लाइसेंस", contribText: "योगदान का स्वागत है! कृपया एक Issue खोलें या Pull Request सबमिट करें।", licensePrefix: "यह प्रोजेक्ट", licenseSuffix: "लाइसेंस के तहत लाइसेंस प्राप्त है।" },
  ar: { features: "المميزات", tech: "التقنيات المستخدمة", install: "التثبيت", usage: "الاستخدام", contrib: "المساهمة", license: "الرخصة", contribText: "المساهمات مرحب بها! يرجى فتح issue أو تقديم pull request.", licensePrefix: "هذا المشروع مرخص بموجب رخصة", licenseSuffix: "." },
  ru: { features: "Возможности", tech: "Технологии", install: "Установка", usage: "Использование", contrib: "Вклад", license: "Лицензия", contribText: "Мы приветствуем вклад! Пожалуйста, откройте issue или отправьте pull request.", licensePrefix: "Этот проект лицензирован под лицензией", licenseSuffix: "." },
  ko: { features: "기능", tech: "기술 스택", install: "설치", usage: "사용법", contrib: "기여", license: "라이선스", contribText: "기여를 환영합니다! Issue를 열거나 Pull Request를 제출해 주세요.", licensePrefix: "이 프로젝트는", licenseSuffix: "라이선스에 따라 배포됩니다." },
  it: { features: "Funzionalità", tech: "Tecnologie Utilizzate", install: "Installazione", usage: "Utilizzo", contrib: "Contributi", license: "Licenza", contribText: "I contributi sono benvenuti! Apri un issue o invia una pull request.", licensePrefix: "Questo progetto è distribuito con la Licenza", licenseSuffix: "." },
  nl: { features: "Functies", tech: "Gebruikte Technologieën", install: "Installatie", usage: "Gebruik", contrib: "Bijdragen", license: "Licentie", contribText: "Bijdragen zijn welkom! Open een issue of dien een pull request in.", licensePrefix: "Dit project is gelicenseerd onder de", licenseSuffix: "Licentie." },
  tr: { features: "Özellikler", tech: "Kullanılan Teknolojiler", install: "Kurulum", usage: "Kullanım", contrib: "Katkıda Bulunma", license: "Lisans", contribText: "Katkılarınızı bekliyoruz! Lütfen bir issue açın veya pull request gönderin.", licensePrefix: "Bu proje", licenseSuffix: "Lisansı kapsamında lisanslanmıştır." },
  pl: { features: "Funkcje", tech: "Użyte Technologie", install: "Instalacja", usage: "Użycie", contrib: "Wkład", license: "Licencja", contribText: "Wkłady są mile widziane! Otwórz issue lub wyślij pull request.", licensePrefix: "Ten projekt jest objęty licencją", licenseSuffix: "." },
};

function buildReadme(langCode, p) {
  const s = SECTIONS[langCode];
  const slug = p.projectName.toLowerCase().replace(/\s+/g, "-");
  const repo = p.repoUrl || `https://github.com/your-username/${slug}`;
  const licenseText = `${s.licensePrefix} ${p.license} ${s.licenseSuffix}`;

  return `# ${p.projectName}

${p.description}

## ${s.features}

${p.features.map((f) => `- ${f}`).join("\n")}

## ${s.tech}

${p.techStack.map((t) => `- ${t}`).join("\n")}

## ${s.install}

\`\`\`bash
git clone ${repo}
cd ${slug}
npm install
\`\`\`

## ${s.usage}

\`\`\`bash
npm start
\`\`\`

## ${s.contrib}

${s.contribText}

## ${s.license}

${licenseText}
`;
}

function normalizeArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return val.split(",").map((v) => v.trim()).filter(Boolean);
}

// ── GET /api/readme/languages ──────────────────────────────────────────────
readmeRouter.get("/languages", (_req, res) => {
  const languages = Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => ({
    code,
    name: info.name,
    direction: info.direction,
  }));
  res.json({ success: true, count: languages.length, languages });
});

// ── POST /api/readme/generate ──────────────────────────────────────────────
// Body: { language, projectName, description, features, techStack, repoUrl, license, save }
readmeRouter.post("/generate", (req, res) => {
  try {
    const {
      language = "en",
      projectName,
      description,
      features,
      techStack,
      repoUrl = "",
      license = "MIT",
      save = false,
    } = req.body;

    if (!projectName?.trim())
      return res.status(400).json({ success: false, message: "projectName is required." });
    if (!description?.trim())
      return res.status(400).json({ success: false, message: "description is required." });

    const langCode = language.toLowerCase();
    if (!SUPPORTED_LANGUAGES[langCode]) {
      return res.status(400).json({
        success: false,
        message: `Unsupported language: "${language}". Call GET /api/readme/languages for supported codes.`,
        supported: Object.keys(SUPPORTED_LANGUAGES),
      });
    }

    const params = {
      projectName: projectName.trim(),
      description: description.trim(),
      features: normalizeArray(features),
      techStack: normalizeArray(techStack),
      repoUrl: repoUrl.trim(),
      license: license.trim(),
    };

    const content = buildReadme(langCode, params);
    const langInfo = SUPPORTED_LANGUAGES[langCode];
    const result = {
      success: true,
      language: { code: langCode, name: langInfo.name, direction: langInfo.direction },
      filename: `README_${langCode}.md`,
      content,
    };

    if (save) {
      const saveDir = path.join(__dirname, "..", "readmes");
      if (!fs.existsSync(saveDir)) fs.mkdirSync(saveDir, { recursive: true });
      const filePath = path.join(saveDir, `README_${langCode}.md`);
      fs.writeFileSync(filePath, content, "utf-8");
      result.savedTo = filePath;
      result.message = `README saved to ${filePath}`;
    }

    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ── POST /api/readme/generate-bulk ────────────────────────────────────────
// Body: { languages: ["en","es"], projectName, description, features, techStack, repoUrl, license, save }
readmeRouter.post("/generate-bulk", (req, res) => {
  try {
    const {
      languages = ["en"],
      projectName,
      description,
      features,
      techStack,
      repoUrl = "",
      license = "MIT",
      save = false,
    } = req.body;

    if (!projectName?.trim())
      return res.status(400).json({ success: false, message: "projectName is required." });
    if (!description?.trim())
      return res.status(400).json({ success: false, message: "description is required." });

    const params = {
      projectName: projectName.trim(),
      description: description.trim(),
      features: normalizeArray(features),
      techStack: normalizeArray(techStack),
      repoUrl: repoUrl.trim(),
      license: license.trim(),
    };

    const results = [];
    const errors = [];

    for (const lang of languages) {
      const langCode = lang.toLowerCase();
      if (!SUPPORTED_LANGUAGES[langCode]) {
        errors.push({ language: lang, error: `Unsupported language code: "${lang}"` });
        continue;
      }
      const content = buildReadme(langCode, params);
      const langInfo = SUPPORTED_LANGUAGES[langCode];
      const entry = {
        language: { code: langCode, name: langInfo.name, direction: langInfo.direction },
        filename: `README_${langCode}.md`,
        content,
      };
      if (save) {
        const saveDir = path.join(__dirname, "..", "readmes");
        if (!fs.existsSync(saveDir)) fs.mkdirSync(saveDir, { recursive: true });
        const filePath = path.join(saveDir, `README_${langCode}.md`);
        fs.writeFileSync(filePath, content, "utf-8");
        entry.savedTo = filePath;
      }
      results.push(entry);
    }

    return res.status(201).json({
      success: true,
      generated: results.length,
      failed: errors.length,
      results,
      ...(errors.length > 0 && { errors }),
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ── GET /api/readme/saved ──────────────────────────────────────────────────
readmeRouter.get("/saved", (_req, res) => {
  try {
    const saveDir = path.join(__dirname, "..", "readmes");
    if (!fs.existsSync(saveDir)) return res.json({ success: true, files: [] });
    const files = fs.readdirSync(saveDir).filter((f) => f.endsWith(".md"));
    const fileDetails = files.map((filename) => {
      const filePath = path.join(saveDir, filename);
      const stats = fs.statSync(filePath);
      return { filename, path: filePath, sizeBytes: stats.size, createdAt: stats.birthtime, modifiedAt: stats.mtime };
    });
    return res.json({ success: true, count: fileDetails.length, files: fileDetails });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ── GET /api/readme/saved/:filename ───────────────────────────────────────
readmeRouter.get("/saved/:filename", (req, res) => {
  try {
    const { filename } = req.params;
    if (!filename.endsWith(".md"))
      return res.status(400).json({ success: false, message: "Only .md files are accessible." });
    const filePath = path.join(__dirname, "..", "readmes", filename);
    if (!fs.existsSync(filePath))
      return res.status(404).json({ success: false, message: `File "${filename}" not found.` });
    const content = fs.readFileSync(filePath, "utf-8");
    return res.json({ success: true, filename, content });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// ── DELETE /api/readme/saved/:filename ────────────────────────────────────
readmeRouter.delete("/saved/:filename", (req, res) => {
  try {
    const { filename } = req.params;
    if (!filename.endsWith(".md"))
      return res.status(400).json({ success: false, message: "Only .md files can be deleted." });
    const filePath = path.join(__dirname, "..", "readmes", filename);
    if (!fs.existsSync(filePath))
      return res.status(404).json({ success: false, message: `File "${filename}" not found.` });
    fs.unlinkSync(filePath);
    return res.json({ success: true, message: `File "${filename}" deleted successfully.` });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

export default readmeRouter;
