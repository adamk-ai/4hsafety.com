import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    hu: 'Főoldal',
    sv: 'Hem',
    it: 'Home',
    ko: '홈',
    zh: '首页',
    de: 'Startseite'
  },
  'nav.about': {
    en: 'About',
    hu: 'Rólunk',
    sv: 'Om oss',
    it: 'Chi siamo',
    ko: '회사소개',
    zh: '关于我们',
    de: 'Über uns'
  },
  'nav.services': {
    en: 'Services',
    hu: 'Szolgáltatások',
    sv: 'Tjänster',
    it: 'Servizi',
    ko: '서비스',
    zh: '服务',
    de: 'Dienstleistungen'
  },
  'nav.team': {
    en: 'Team',
    hu: 'Csapat',
    sv: 'Team',
    it: 'Team',
    ko: '팀',
    zh: '团队',
    de: 'Team'
  },
  'nav.projects': {
    en: 'Projects',
    hu: 'Projektek',
    sv: 'Projekt',
    it: 'Progetti',
    ko: '프로젝트',
    zh: '项目',
    de: 'Projekte'
  },
  'nav.contact': {
    en: 'Contact',
    hu: 'Kapcsolat',
    sv: 'Kontakt',
    it: 'Contatti',
    ko: '연락처',
    zh: '联系我们',
    de: 'Kontakt'
  },

  // Hero Section
  'hero.title': {
    en: 'Your Company\'s Safety is Our Responsibility',
    hu: 'Vállalata biztonsága a mi felelősségünk',
    sv: 'Ditt företags säkerhet är vårt ansvar',
    it: 'La sicurezza della tua azienda è la nostra responsabilità',
    ko: '귀하 회사의 안전은 우리의 책임입니다',
    zh: '您公司的安全是我们的责任',
    de: 'Die Sicherheit Ihres Unternehmens ist unsere Verantwortung'
  },
  'hero.slogan.company': {
    en: 'YOUR COMPANY\'S',
    hu: 'VÁLLALATOD',
    sv: 'DITT FÖRETAGS',
    it: 'DELLA TUA AZIENDA',
    ko: '귀사의',
    zh: '贵公司的',
    de: 'DIE SICHERHEIT IHRES UNTERNEHMENS'
  },
  'hero.slogan.safety': {
    en: 'SAFETY',
    hu: 'BIZTONSÁGA',
    sv: 'SÄKERHET',
    it: 'SICUREZZA',
    ko: '안전은',
    zh: '安全',
    de: 'IST UNSERE'
  },
  'hero.slogan.isOur': {
    en: 'IS OUR',
    hu: 'A MI',
    sv: 'ÄR VÅRT',
    it: 'È LA NOSTRA',
    ko: '우리의',
    zh: '是我们的',
    de: 'VERANTWORTUNG'
  },
  'hero.slogan.responsibility': {
    en: 'RESPONSIBILITY',
    hu: 'FELELŐSSÉGÜNK',
    sv: 'ANSVAR',
    it: 'RESPONSABILITÀ',
    ko: '책임입니다',
    zh: '责任',
    de: ''
  },
  'hero.subtitle': {
    en: '100% Quality, 100% Safety',
    hu: '100% minőség, 100% biztonság',
    sv: '100% kvalitet, 100% säkerhet',
    it: '100% qualità, 100% sicurezza',
    ko: '100% 품질, 100% 안전',
    zh: '100% 质量，100% 安全',
    de: '100% Qualität, 100% Sicherheit'
  },
  'hero.description': {
    en: 'We provide comprehensive solutions in occupational safety, environmental protection, industrial security, fire safety, and IT compliance.',
    hu: 'Átfogó megoldásokat nyújtunk a munkavédelem, környezetvédelem, ipari biztonság, tűzvédelem és IT megfelelőség területén.',
    sv: 'Vi tillhandahåller omfattande lösningar inom arbetsmiljö, miljöskydd, industrisäkerhet, brandskydd och IT-efterlevnad.',
    it: 'Forniamo soluzioni complete in sicurezza sul lavoro, protezione ambientale, sicurezza industriale, antincendio e conformità IT.',
    ko: '우리는 산업안전, 환경보호, 산업보안, 화재안전 및 IT 규정준수 분야의 포괄적인 솔루션을 제공합니다.',
    zh: '我们在职业安全、环境保护、工业安全、消防安全和IT合规性方面提供全面的解决方案。',
    de: 'Wir bieten umfassende Lösungen in Arbeitsschutz, Umweltschutz, Industriesicherheit, Brandschutz und IT-Compliance.'
  },
  'hero.cta': {
    en: 'Get a Quote',
    hu: 'Ajánlatkérés',
    sv: 'Få en offert',
    it: 'Richiedi preventivo',
    ko: '견적 받기',
    zh: '获取报价',
    de: 'Angebot erhalten'
  },
  'hero.stats.quality': {
    en: 'Quality',
    hu: 'Minőség',
    sv: 'Kvalitet',
    it: 'Qualità',
    ko: '품질',
    zh: '质量',
    de: 'Qualität'
  },
  'hero.stats.safety': {
    en: 'Safety',
    hu: 'Biztonság',
    sv: 'Säkerhet',
    it: 'Sicurezza',
    ko: '안전',
    zh: '安全',
    de: 'Sicherheit'
  },
  'hero.stats.certified': {
    en: 'Certified',
    hu: 'Minősített',
    sv: 'Certifierad',
    it: 'Certificato',
    ko: '인증됨',
    zh: '认证',
    de: 'Zertifiziert'
  },
  'hero.stats.expert': {
    en: 'Expert',
    hu: 'Szakértő',
    sv: 'Expert',
    it: 'Esperto',
    ko: '전문가',
    zh: '专家',
    de: 'Experte'
  },
  'nav.gallery': {
    en: 'Gallery',
    hu: 'Galéria',
    sv: 'Galleri',
    it: 'Galleria',
    ko: '갤러리',
    zh: '画廊',
    de: 'Galerie'
  },
  'nav.language': {
    en: 'Language',
    hu: 'Nyelv',
    sv: 'Språk',
    it: 'Lingua',
    ko: '언어',
    zh: '语言',
    de: 'Sprache'
  },

  // About Section
  'about.title': {
    en: 'Safety and Sustainability',
    hu: 'Biztonság és fenntarthatóság',
    sv: 'Säkerhet och hållbarhet',
    it: 'Sicurezza e sostenibilità',
    ko: '안전과 지속가능성',
    zh: '安全与可持续性',
    de: 'Sicherheit und Nachhaltigkeit'
  },
  'about.description': {
    en: 'At 4H Safety in Everything, we are committed to providing comprehensive solutions in occupational safety, environmental protection, industrial security, fire safety, and IT compliance. Our mission is to create a safe, sustainable, and efficient work environment where protection and performance go hand in hand.',
    hu: 'A 4H Safety in Everything-nél elkötelezettek vagyunk a munkavédelem, környezetvédelem, ipari biztonság, tűzvédelem és IT megfelelőség területén nyújtott átfogó megoldások iránt. Küldetésünk biztonságos, fenntartható és hatékony munkakörnyezet kialakítása, ahol a védelem és teljesítmény kéz a kézben járnak.',
    sv: 'På 4H Safety in Everything är vi engagerade i att tillhandahålla omfattande lösningar inom arbetsmiljö, miljöskydd, industrisäkerhet, brandskydd och IT-efterlevnad. Vårt uppdrag är att skapa en säker, hållbar och effektiv arbetsmiljö där skydd och prestanda går hand i hand.',
    it: 'In 4H Safety in Everything, ci impegniamo a fornire soluzioni complete in sicurezza sul lavoro, protezione ambientale, sicurezza industriale, antincendio e conformità IT. La nostra missione è creare un ambiente di lavoro sicuro, sostenibile ed efficiente dove protezione e prestazioni vanno di pari passo.',
    ko: '4H Safety in Everything에서는 산업안전, 환경보호, 산업보안, 화재안전 및 IT 규정준수 분야의 포괄적인 솔루션 제공에 최선을 다하고 있습니다. 우리의 사명은 보호와 성능이 함께 가는 안전하고 지속 가능하며 효율적인 작업 환경을 조성하는 것입니다.',
    zh: '在4H Safety in Everything，我们致力于在职业安全、环境保护、工业安全、消防安全和IT合规性方面提供全面的解决方案。我们的使命是创造一个安全、可持续和高效的工作环境，保护与性能并行。',
    de: 'Bei 4H Safety in Everything setzen wir uns dafür ein, umfassende Lösungen in Arbeitsschutz, Umweltschutz, Industriesicherheit, Brandschutz und IT-Compliance zu bieten. Unsere Mission ist es, ein sicheres, nachhaltiges und effizientes Arbeitsumfeld zu schaffen, in dem Schutz und Leistung Hand in Hand gehen.'
  },
  'about.values.title': {
    en: 'Our Four Core Values',
    hu: 'Négy alapértékünk',
    sv: 'Våra fyra kärnvärden',
    it: 'I nostri quattro valori fondamentali',
    ko: '우리의 네 가지 핵심 가치',
    zh: '我们的四个核心价值观',
    de: 'Unsere vier Grundwerte'
  },
  'about.values.efficiency': {
    en: 'Efficiency',
    hu: 'Hatékonyság',
    sv: 'Effektivitet',
    it: 'Efficienza',
    ko: '효율성',
    zh: '效率',
    de: 'Effizienz'
  },
  'about.values.credibility': {
    en: 'Credibility',
    hu: 'Hitelesség',
    sv: 'Trovärdighet',
    it: 'Credibilità',
    ko: '신뢰성',
    zh: '可信度',
    de: 'Glaubwürdigkeit'
  },
  'about.values.loyalty': {
    en: 'Loyalty',
    hu: 'Hűség',
    sv: 'Lojalitet',
    it: 'Lealtà',
    ko: '충성도',
    zh: '忠诚',
    de: 'Loyalität'
  },
  'about.values.harmony': {
    en: 'Harmony',
    hu: 'Harmónia',
    sv: 'Harmoni',
    it: 'Armonia',
    ko: '조화',
    zh: '和谐',
    de: 'Harmonie'
  },
  'about.values.efficiencyDesc': {
    en: 'Efficient solutions and quick response in every situation',
    hu: 'Hatékony megoldások és gyors reagálás minden helyzetben',
    sv: 'Effektiva lösningar och snabb respons i varje situation',
    it: 'Soluzioni efficienti e risposta rapida in ogni situazione',
    ko: '모든 상황에서 효율적인 솔루션과 빠른 대응',
    zh: '在任何情况下都能提供高效的解决方案和快速响应',
    de: 'Effiziente Lösungen und schnelle Reaktion in jeder Situation'
  },
  'about.values.credibilityDesc': {
    en: 'Reliable expertise and proven results',
    hu: 'Megbízható szakértelem és bizonyított eredmények',
    sv: 'Tillförlitlig expertis och bevisade resultat',
    it: 'Competenza affidabile e risultati comprovati',
    ko: '신뢰할 수 있는 전문성과 입증된 결과',
    zh: '可靠的专业知识和经过验证的结果',
    de: 'Zuverlässige Expertise und bewährte Ergebnisse'
  },
  'about.values.loyaltyDesc': {
    en: 'Loyalty to our partners and employees',
    hu: 'Hűség partnereink és munkatársaink iránt',
    sv: 'Lojalitet mot våra partner och medarbetare',
    it: 'Lealtà verso i nostri partner e dipendenti',
    ko: '파트너와 직원에 대한 충성',
    zh: '对我们的合作伙伴和员工的忠诚',
    de: 'Loyalität gegenüber unseren Partnern und Mitarbeitern'
  },
  'about.values.harmonyDesc': {
    en: 'Harmony in the workplace and with the environment',
    hu: 'Harmónia a munkahelyen és a környezettel',
    sv: 'Harmoni på arbetsplatsen och med miljön',
    it: 'Armonia sul posto di lavoro e con l\'ambiente',
    ko: '직장과 환경과의 조화',
    zh: '工作场所与环境的和谐',
    de: 'Harmonie am Arbeitsplatz und mit der Umwelt'
  },

  // Services Section
  'services.title': {
    en: 'Our Services',
    hu: 'Szolgáltatásaink',
    sv: 'Våra tjänster',
    it: 'I nostri servizi',
    ko: '우리의 서비스',
    zh: '我们的服务',
    de: 'Unsere Dienstleistungen'
  },
  'services.subtitle': {
    en: 'At 4H Safety in Everything, we perform our work with the highest level of expertise. We are committed to industrial safety, occupational health and safety, fire protection, and environmental protection, providing reliable, innovative, and fully compliant solutions.',
    hu: 'A 4H Safety in Everything-nél munkánkat a legmagasabb szakmai színvonalon végezzük. Elkötelezettek vagyunk az ipari biztonság, a munkavédelem, a tűzvédelem és a környezetvédelem iránt, megbízható, innovatív és teljes mértékben megfelelő megoldásokat nyújtva.',
    sv: 'På 4H Safety in Everything utför vi vårt arbete med högsta expertis. Vi är engagerade i industrisäkerhet, arbetsmiljö och hälsa, brandskydd och miljöskydd, och tillhandahåller pålitliga, innovativa och fullständigt kompatibla lösningar.',
    it: 'In 4H Safety in Everything, eseguiamo il nostro lavoro con il massimo livello di competenza. Siamo impegnati nella sicurezza industriale, nella salute e sicurezza sul lavoro, nella protezione antincendio e nella protezione ambientale, fornendo soluzioni affidabili, innovative e completamente conformi.',
    ko: '4H Safety in Everything에서는 최고 수준의 전문성으로 업무를 수행합니다. 우리는 산업 안전, 산업 보건 및 안전, 화재 방지, 환경 보호에 전념하며 신뢰할 수 있고 혁신적이며 완전히 규정을 준수하는 솔루션을 제공합니다.',
    zh: '在4H Safety in Everything，我们以最高水平的专业知识开展工作。我们致力于工业安全、职业健康与安全、消防和环境保护，提供可靠、创新且完全合规的解决方案。',
    de: 'Bei 4H Safety in Everything führen wir unsere Arbeit mit höchstem Fachwissen aus. Wir sind der Industriesicherheit, dem Arbeitsschutz, dem Brandschutz und dem Umweltschutz verpflichtet und bieten zuverlässige, innovative und vollständig konforme Lösungen.'
  },
  'services.hse.title': {
    en: 'HSE Service',
    hu: 'HSE Szolgáltatás',
    sv: 'HSE-tjänst',
    it: 'Servizio HSE',
    ko: 'HSE 서비스',
    zh: 'HSE服务',
    de: 'HSE-Service'
  },
  'services.hse.description': {
    en: 'Comprehensive health, safety and environmental management solutions for workplace protection.',
    hu: 'Átfogó egészségügyi, biztonsági és környezetvédelmi irányítási megoldások a munkahely védelmére.',
    sv: 'Omfattande hälso-, säkerhets- och miljöhanteringslösningar för arbetsplatsskydd.',
    it: 'Soluzioni complete di gestione della salute, sicurezza e ambiente per la protezione del posto di lavoro.',
    ko: '직장 보호를 위한 포괄적인 건강, 안전 및 환경 관리 솔루션.',
    zh: '为工作场所保护提供全面的健康、安全和环境管理解决方案。',
    de: 'Umfassende Gesundheits-, Sicherheits- und Umweltmanagementlösungen für den Arbeitsplatzschutz.'
  },
  'services.industrial.title': {
    en: 'Industrial Safety',
    hu: 'Ipari Biztonság',
    sv: 'Industrisäkerhet',
    it: 'Sicurezza Industriale',
    ko: '산업 안전',
    zh: '工业安全',
    de: 'Industriesicherheit'
  },
  'services.industrial.description': {
    en: 'Safety protocols and equipment developed for industrial facilities to ensure safe manufacturing environments.',
    hu: 'Ipari létesítményekhez kifejlesztett biztonsági protokollok és berendezések a biztonságos gyártási környezet biztosítására.',
    sv: 'Säkerhetsprotokoll och utrustning utvecklad för industrianläggningar för att säkerställa säkra tillverkningsmiljöer.',
    it: 'Protocolli di sicurezza e attrezzature sviluppate per impianti industriali per garantire ambienti di produzione sicuri.',
    ko: '안전한 제조 환경을 보장하기 위해 산업 시설용으로 개발된 안전 프로토콜 및 장비.',
    zh: '为工业设施开发的安全协议和设备，确保安全的制造环境。',
    de: 'Sicherheitsprotokolle und Ausrüstung für Industrieanlagen zur Gewährleistung sicherer Fertigungsumgebungen.'
  },
  'services.environmental.title': {
    en: 'Environmental Safety',
    hu: 'Környezeti Biztonság',
    sv: 'Miljösäkerhet',
    it: 'Sicurezza Ambientale',
    ko: '환경 안전',
    zh: '环境安全',
    de: 'Umweltsicherheit'
  },
  'services.environmental.description': {
    en: 'Environmental protection and sustainability solutions for responsible business operations.',
    hu: 'Környezetvédelmi és fenntarthatósági megoldások a felelős üzleti működéshez.',
    sv: 'Miljöskydds- och hållbarhetslösningar för ansvarsfull affärsverksamhet.',
    it: 'Soluzioni di protezione ambientale e sostenibilità per operazioni aziendali responsabili.',
    ko: '책임감 있는 비즈니스 운영을 위한 환경 보호 및 지속 가능성 솔루션.',
    zh: '为负责任的商业运营提供环境保护和可持续发展解决方案。',
    de: 'Umweltschutz- und Nachhaltigkeitslösungen für verantwortliche Geschäftstätigkeiten.'
  },
  'services.fire.title': {
    en: 'Fire Safety',
    hu: 'Tűzvédelem',
    sv: 'Brandskydd',
    it: 'Sicurezza Antincendio',
    ko: '화재 안전',
    zh: '消防安全',
    de: 'Brandschutz'
  },
  'services.fire.description': {
    en: 'Comprehensive fire protection systems and emergency response planning for maximum safety.',
    hu: 'Átfogó tűzvédelmi rendszerek és vészhelyzeti választerv a maximális biztonság érdekében.',
    sv: 'Omfattande brandskyddssystem och beredskapsplanering för maximal säkerhet.',
    it: 'Sistemi completi di protezione antincendio e pianificazione di risposta alle emergenze per la massima sicurezza.',
    ko: '최대 안전을 위한 포괄적인 화재 방지 시스템 및 비상 대응 계획.',
    zh: '全面的消防系统和应急响应规划，确保最大安全。',
    de: 'Umfassende Brandschutzsysteme und Notfallplanung für maximale Sicherheit.'
  },
  'services.it.title': {
    en: 'IT Systems',
    hu: 'IT Rendszerek',
    sv: 'IT-system',
    it: 'Sistemi IT',
    ko: 'IT 시스템',
    zh: 'IT系统',
    de: 'IT-Systeme'
  },
  'services.it.description': {
    en: 'Digital safety management and regulatory systems for modern workplace requirements.',
    hu: 'Digitális biztonsági menedzsment és szabályozási rendszerek a modern munkahelyi követelményekhez.',
    sv: 'Digital säkerhetshantering och regleringssystem för moderna arbetsplatskrav.',
    it: 'Gestione digitale della sicurezza e sistemi normativi per i requisiti del posto di lavoro moderno.',
    ko: '현대 직장 요구 사항을 위한 디지털 안전 관리 및 규제 시스템.',
    zh: '现代工作场所要求的数字安全管理和监管系统。',
    de: 'Digitales Sicherheitsmanagement und Regulierungssysteme für moderne Arbeitsplatzanforderungen.'
  },
  'about.family.title': {
    en: 'Family Business',
    hu: 'Családi Vállalkozás',
    sv: 'Familjeföretag',
    it: 'Azienda Familiare',
    ko: '가족 사업',
    zh: '家族企业',
    de: 'Familienunternehmen'
  },
  'about.family.description': {
    en: 'As a family business, we believe that true safety lies in the details. Prevention and innovation are at the core of everything we do, ensuring that our partners always have access to the latest, most advanced safety solutions.',
    hu: 'Családi vállalkozásként hiszünk abban, hogy az igazi biztonság a részletekben rejlik. A megelőzés és az innováció áll minden tevékenységünk középpontjában, biztosítva, hogy partnereink mindig hozzáférjenek a legújabb, legfejlettebb biztonsági megoldásokhoz.',
    sv: 'Som ett familjeföretag tror vi att verklig säkerhet ligger i detaljerna. Prevention och innovation är kärnan i allt vi gör, vilket säkerställer att våra partners alltid har tillgång till de senaste, mest avancerade säkerhetslösningarna.',
    it: 'Come azienda familiare, crediamo che la vera sicurezza risieda nei dettagli. La prevenzione e l\'innovazione sono al centro di tutto ciò che facciamo, assicurando che i nostri partner abbiano sempre accesso alle soluzioni di sicurezza più recenti e avanzate.',
    ko: '가족 사업으로서 우리는 진정한 안전이 세부 사항에 있다고 믿습니다. 예방과 혁신은 우리가 하는 모든 일의 핵심이며, 파트너들이 항상 최신의 가장 진보된 안전 솔루션에 접근할 수 있도록 보장합니다.',
    zh: '作为一家家族企业，我们相信真正的安全在于细节。预防和创新是我们所做一切的核心，确保我们的合作伙伴始终能够获得最新、最先进的安全解决方案。',
    de: 'Als Familienunternehmen glauben wir, dass wahre Sicherheit in den Details liegt. Prävention und Innovation stehen im Mittelpunkt all unserer Aktivitäten und stellen sicher, dass unsere Partner immer Zugang zu den neuesten, fortschrittlichsten Sicherheitslösungen haben.'
  },

  // Team Section
  'team.title': {
    en: 'Meet Our Expert Team',
    hu: 'Ismerje meg szakértő csapatunkat',
    sv: 'Träffa vårt expertteam',
    it: 'Conosci il nostro team di esperti',
    ko: '우리의 전문가 팀을 만나보세요',
    zh: '认识我们的专家团队',
    de: 'Lernen Sie unser Expertenteam kennen'
  },
  'team.subtitle': {
    en: 'Dedicated professionals committed to your safety and success',
    hu: 'Elkötelezett szakemberek az Ön biztonsága és sikere érdekében',
    sv: 'Dedikerade yrkesverksamma som är engagerade i din säkerhet och framgång',
    it: 'Professionisti dedicati impegnati per la tua sicurezza e successo',
    ko: '귀하의 안전과 성공을 위해 헌신하는 전문가들',
    zh: '致力于您的安全和成功的专业人士',
    de: 'Engagierte Fachkräfte, die sich für Ihre Sicherheit und Ihren Erfolg einsetzen'
  },

  // Projects Section
  'projects.title': {
    en: 'Our Projects',
    hu: 'Projektjeink',
    sv: 'Våra projekt',
    it: 'I nostri progetti',
    ko: '우리의 프로젝트',
    zh: '我们的项目',
    de: 'Unsere Projekte'
  },
  'projects.subtitle': {
    en: 'Successful safety implementations across various industries',
    hu: 'Sikeres biztonsági megoldások különböző iparágakban',
    sv: 'Framgångsrika säkerhetsimplementationer inom olika branscher',
    it: 'Implementazioni di sicurezza di successo in vari settori',
    ko: '다양한 산업 분야에서의 성공적인 안전 구현',
    zh: '在各个行业的成功安全实施',
    de: 'Erfolgreiche Sicherheitsimplementierungen in verschiedenen Branchen'
  },
  'projects.viewDetails': {
    en: 'View Details',
    hu: 'Részletek megtekintése',
    sv: 'Visa detaljer',
    it: 'Visualizza dettagli',
    ko: '세부 정보 보기',
    zh: '查看详细信息',
    de: 'Details anzeigen'
  },
  'projects.gallery': {
    en: 'Gallery',
    hu: 'Galéria',
    sv: 'Galleri',
    it: 'Galleria',
    ko: '갤러리',
    zh: '画廊',
    de: 'Galerie'
  },
  'projects.photos': {
    en: 'photos',
    hu: 'fotó',
    sv: 'foton',
    it: 'foto',
    ko: '사진',
    zh: '照片',
    de: 'Fotos'
  },
  'projects.completed': {
    en: 'Completed',
    hu: 'Befejezve',
    sv: 'Slutfört',
    it: 'Completato',
    ko: '완료됨',
    zh: '已完成',
    de: 'Abgeschlossen'
  },
  'projects.technologiesUsed': {
    en: 'Technologies Used',
    hu: 'Használt technológiák',
    sv: 'Använda teknologier',
    it: 'Tecnologie utilizzate',
    ko: '사용된 기술',
    zh: '使用的技术',
    de: 'Verwendete Technologien'
  },
  'projects.sweden.title': {
    en: 'Sweden',
    hu: 'Svédország',
    sv: 'Sverige',
    it: 'Svezia',
    ko: '스웨덴',
    zh: '瑞典',
    de: 'Schweden'
  },
  'projects.sweden.description': {
    en: 'Comprehensive industrial facility upgrade project encompassing advanced equipment installation, complete electrical system overhaul, precision plumbing infrastructure, thermal insulation implementation, protective coating applications, and rigorous system commissioning and testing protocols.',
    hu: 'Átfogó ipari létesítmény korszerűsítési projekt, amely magában foglalja a fejlett berendezések telepítését, a teljes elektromos rendszer felújítását, precíziós vízvezeték infrastruktúrát, hőszigetelés megvalósítását, védőbevonatok alkalmazását, valamint a szigorú rendszer üzembe helyezési és tesztelési protokollokat.',
    sv: 'Omfattande uppgraderingsprojekt för industrianläggning som omfattar installation av avancerad utrustning, fullständig översyn av elsystem, precision VVS-infrastruktur, implementering av värmeisolering, skyddsbeläggningar och rigorösa systemdrifttagningar och testprotokoll.',
    it: 'Progetto completo di aggiornamento di impianti industriali che comprende installazione di attrezzature avanzate, revisione completa del sistema elettrico, infrastrutture idrauliche di precisione, implementazione di isolamento termico, applicazioni di rivestimenti protettivi e protocolli rigorosi di messa in servizio e test dei sistemi.',
    ko: '고급 장비 설치, 완전한 전기 시스템 개조, 정밀 배관 인프라, 단열 구현, 보호 코팅 적용 및 엄격한 시스템 시운전 및 테스트 프로토콜을 포함하는 포괄적인 산업 시설 업그레이드 프로젝트.',
    zh: '全面的工业设施升级项目，包括先进设备安装、完整电气系统改造、精密管道基础设施、热绝缘实施、保护涂层应用以及严格的系统调试和测试协议。',
    de: 'Umfassendes industrielles Anlagenmodernisierungsprojekt umfassend fortschrittliche Gerätinstallation, komplette Elektrosystemüberholung, Präzisions-Sanitärinfrastruktur, Wärmeisolierungsimplementierung, Schutzbeschichtungsanwendungen und strenge Systeminbetriebnahme- und Testprotokolle.'
  },
  'projects.sweden.client': {
    en: 'Eskilstuna',
    hu: 'Eskilstuna',
    sv: 'Eskilstuna',
    it: 'Eskilstuna',
    ko: '에스킬스투나',
    zh: '埃斯基尔斯蒂纳',
    de: 'Eskilstuna'
  },
  'projects.sweden.completed': {
    en: 'Currently in Progress',
    hu: 'Folyamatban',
    sv: 'Pågår just nu',
    it: 'Attualmente in corso',
    ko: '현재 진행 중',
    zh: '目前进行中',
    de: 'Derzeit in Arbeit'
  },
  'projects.sweden.category': {
    en: 'Industrial Safety',
    hu: 'Ipari biztonság',
    sv: 'Industrisäkerhet',
    it: 'Sicurezza industriale',
    ko: '산업 안전',
    zh: '工业安全',
    de: 'Industriesicherheit'
  },
  'projects.italy.title': {
    en: 'Italy',
    hu: 'Olaszország',
    sv: 'Italien',
    it: 'Italia',
    ko: '이탈리아',
    zh: '意大利',
    de: 'Italien'
  },
  'projects.italy.description': {
    en: 'Comprehensive industrial safety and environmental compliance project in Sicily, Italy, featuring advanced scaffolding systems, crane operations, and specialized safety protocols for industrial facility upgrades.',
    hu: 'Átfogó ipari biztonsági és környezetvédelmi megfelelőségi projekt Szicíliában, Olaszországban, amely fejlett állványrendszereket, darumunkálatokat és speciális biztonsági protokollokat tartalmaz az ipari létesítmények korszerűsítéséhez.',
    sv: 'Omfattande industriellt säkerhets- och miljöefterlevnadsprojekt på Sicilien, Italien, med avancerade byggnadsställningssystem, kranoperationer och specialiserade säkerhetsprotokoll för uppgradering av industrianläggningar.',
    it: 'Progetto completo di sicurezza industriale e conformità ambientale in Sicilia, Italia, con sistemi di ponteggi avanzati, operazioni con gru e protocolli di sicurezza specializzati per aggiornamenti di impianti industriali.',
    ko: '이탈리아 시칠리아의 포괄적인 산업 안전 및 환경 규정 준수 프로젝트로, 산업 시설 업그레이드를 위한 고급 비계 시스템, 크레인 작업 및 전문 안전 프로토콜을 특징으로 합니다.',
    zh: '意大利西西里岛的综合工业安全和环境合规项目，包括先进的脚手架系统、起重机操作和专业安全协议，用于工业设施升级。',
    de: 'Umfassendes Projekt zur industriellen Sicherheit und Umweltkonformität auf Sizilien, Italien, mit fortschrittlichen Gerüstsystemen, Kranenbetrieb und spezialisierten Sicherheitsprotokollen für Industrieanlagenmodernisierungen.'
  },
  'projects.italy.client': {
    en: 'Sicily',
    hu: 'Szicília',
    sv: 'Sicilien',
    it: 'Sicilia',
    ko: '시칠리아',
    zh: '西西里',
    de: 'Sizilien'
  },
  'projects.italy.completed': {
    en: 'Completed',
    hu: 'Lezárva',
    sv: 'Slutförd',
    it: 'Completato',
    ko: '완료됨',
    zh: '已完成',
    de: 'Abgeschlossen'
  },
  'projects.italy.category': {
    en: 'Environmental Safety',
    hu: 'Környezeti biztonság',
    sv: 'Miljösäkerhet',
    it: 'Sicurezza ambientale',
    ko: '환경 안전',
    zh: '环境安全',
    de: 'Umweltsicherheit'
  },
  'projects.germany.title': {
    en: 'Germany',
    hu: 'Németország',
    sv: 'Tyskland',
    it: 'Germania',
    ko: '독일',
    zh: '德国',
    de: 'Deutschland'
  },
  'projects.germany.description': {
    en: 'Coming Soon',
    hu: 'Hamarosan',
    sv: 'Kommer Snart',
    it: 'Prossimamente',
    ko: '곧 출시',
    zh: '即将推出',
    de: 'Demnächst'
  },
  'projects.germany.client': {
    en: 'Germany',
    hu: 'Németország',
    sv: 'Tyskland',
    it: 'Germania',
    ko: '독일',
    zh: '德国',
    de: 'Deutschland'
  },
  'projects.germany.completed': {
    en: 'Coming Soon',
    hu: 'Hamarosan',
    sv: 'Kommer Snart',
    it: 'Prossimamente',
    ko: '곧 출시',
    zh: '即将推出',
    de: 'Demnächst'
  },
  'projects.germany.category': {
    en: 'Industrial Safety',
    hu: 'Ipari biztonság',
    sv: 'Industriell säkerhet',
    it: 'Sicurezza industriale',
    ko: '산업 안전',
    zh: '工业安全',
    de: 'Industrielle Sicherheit'
  },
  'projects.cyprus.title': {
    en: 'Cyprus',
    hu: 'Ciprus',
    sv: 'Cypern',
    it: 'Cipro',
    ko: '키프로스',
    zh: '塞浦路斯',
    de: 'Zypern'
  },
  'projects.cyprus.description': {
    en: 'Coming Soon',
    hu: 'Hamarosan',
    sv: 'Kommer snart',
    it: 'Prossimamente',
    ko: '곧 공개',
    zh: '即将推出',
    de: 'Demnächst'
  },
  'projects.cyprus.client': {
    en: 'Cyprus',
    hu: 'Ciprus',
    sv: 'Cypern',
    it: 'Cipro',
    ko: '키프로스',
    zh: '塞浦路斯',
    de: 'Zypern'
  },
  'projects.cyprus.completed': {
    en: 'Coming Soon',
    hu: 'Hamarosan',
    sv: 'Kommer snart',
    it: 'Prossimamente',
    ko: '곧 공개',
    zh: '即将推出',
    de: 'Demnächst'
  },
  'projects.cyprus.category': {
    en: 'Industrial Safety',
    hu: 'Ipari biztonság',
    sv: 'Industrisäkerhet',
    it: 'Sicurezza industriale',
    ko: '산업 안전',
    zh: '工业安全',
    de: 'Industriesicherheit'
  },
  'projects.bulgaria.title': {
    en: 'Bulgaria',
    hu: 'Bulgária',
    sv: 'Bulgarien',
    it: 'Bulgaria',
    ko: '불가리아',
    zh: '保加利亚',
    de: 'Bulgarien'
  },
  'projects.bulgaria.description': {
    en: 'Coming Soon',
    hu: 'Hamarosan',
    sv: 'Kommer snart',
    it: 'Prossimamente',
    ko: '곧 공개',
    zh: '即将推出',
    de: 'Demnächst'
  },
  'projects.bulgaria.client': {
    en: 'Bulgaria',
    hu: 'Bulgária',
    sv: 'Bulgarien',
    it: 'Bulgaria',
    ko: '불가리아',
    zh: '保加利亚',
    de: 'Bulgarien'
  },
  'projects.bulgaria.completed': {
    en: 'Starting in 2026',
    hu: 'Kezdés: 2026',
    sv: 'Startar 2026',
    it: 'Inizio nel 2026',
    ko: '2026년 시작',
    zh: '2026年开始',
    de: 'Beginn 2026'
  },
  'projects.bulgaria.category': {
    en: 'HSE Service',
    hu: 'HSE szolgáltatás',
    sv: 'HSE-tjänst',
    it: 'Servizio HSE',
    ko: 'HSE 서비스',
    zh: 'HSE服务',
    de: 'HSE-Service'
  },
  'projects.finland.title': {
    en: 'Finland',
    hu: 'Finnország',
    sv: 'Finland',
    it: 'Finlandia',
    ko: '핀란드',
    zh: '芬兰',
    de: 'Finnland'
  },
  'projects.finland.description': {
    en: 'Coming Soon',
    hu: 'Hamarosan',
    sv: 'Kommer snart',
    it: 'Prossimamente',
    ko: '곧 공개',
    zh: '即将推出',
    de: 'Demnächst'
  },
  'projects.finland.client': {
    en: 'Finland',
    hu: 'Finnország',
    sv: 'Finland',
    it: 'Finlandia',
    ko: '핀란드',
    zh: '芬兰',
    de: 'Finnland'
  },
  'projects.finland.completed': {
    en: 'Coming Soon',
    hu: 'Hamarosan',
    sv: 'Kommer snart',
    it: 'Prossimamente',
    ko: '곧 공개',
    zh: '即将推出',
    de: 'Demnächst'
  },
  'projects.finland.category': {
    en: 'Industrial Safety',
    hu: 'Ipari biztonság',
    sv: 'Industrisäkerhet',
    it: 'Sicurezza industriale',
    ko: '산업 안전',
    zh: '工业安全',
    de: 'Industriesicherheit'
  },
  'projects.tech.fireSafety': {
    en: 'Fire Safety Systems',
    hu: 'Tűzvédelmi rendszerek',
    sv: 'Brandskyddssystem',
    it: 'Sistemi di sicurezza antincendio',
    ko: '화재 안전 시스템',
    zh: '消防安全系统',
    de: 'Brandschutzsysteme'
  },
  'projects.tech.safetyTraining': {
    en: 'Safety Training',
    hu: 'Biztonsági képzés',
    sv: 'Säkerhetsutbildning',
    it: 'Formazione sulla sicurezza',
    ko: '안전 교육',
    zh: '安全培训',
    de: 'Sicherheitsschulung'
  },
  'projects.tech.industrialSafety': {
    en: 'Industrial Safety',
    hu: 'Ipari biztonság',
    sv: 'Industrisäkerhet',
    it: 'Sicurezza industriale',
    ko: '산업 안전',
    zh: '工业安全',
    de: 'Industriesicherheit'
  },
  'projects.tech.scaffolding': {
    en: 'Scaffolding Systems',
    hu: 'Állványrendszerek',
    sv: 'Byggnadsställningssystem',
    it: 'Sistemi di ponteggi',
    ko: '비계 시스템',
    zh: '脚手架系统',
    de: 'Gerüstsysteme'
  },
  'projects.tech.craneOps': {
    en: 'Crane Operations',
    hu: 'Darumunka',
    sv: 'Kranoperationer',
    it: 'Operazioni con gru',
    ko: '크레인 작업',
    zh: '起重机操作',
    de: 'Kranenbetrieb'
  },
  'projects.tech.safetyProtocols': {
    en: 'Safety Protocols',
    hu: 'Biztonsági protokollok',
    sv: 'Säkerhetsprotokoll',
    it: 'Protocolli di sicurezza',
    ko: '안전 프로토콜',
    zh: '安全协议',
    de: 'Sicherheitsprotokolle'
  },

  // Contact Section
  'contact.title': {
    en: 'Get In Touch',
    hu: 'Vegye fel velünk a kapcsolatot',
    sv: 'Kontakta oss',
    it: 'Contattaci',
    ko: '연락하기',
    zh: '联系我们',
    de: 'Kontakt aufnehmen'
  },
  'contact.subtitle': {
    en: 'Ready to enhance your workplace safety? Let\'s discuss how we can help your business.',
    hu: 'Készen áll a munkahelyi biztonság javítására? Beszéljük meg, hogyan segíthetünk vállalatának.',
    sv: 'Redo att förbättra din arbetsplatssäkerhet? Låt oss diskutera hur vi kan hjälpa ditt företag.',
    it: 'Pronto a migliorare la sicurezza sul lavoro? Discutiamo di come possiamo aiutare la tua azienda.',
    ko: '직장 안전을 향상시킬 준비가 되셨나요? 귀하의 비즈니스를 어떻게 도울 수 있는지 논의해봅시다.',
    zh: '准备加强您的工作场所安全了吗？让我们讨论如何帮助您的企业。',
    de: 'Bereit, Ihre Arbeitsplatzsicherheit zu verbessern? Lassen Sie uns besprechen, wie wir Ihrem Unternehmen helfen können.'
  },
  'contact.email': {
    en: 'Email Us',
    hu: 'Írjon nekünk',
    sv: 'Maila oss',
    it: 'Inviaci un\'email',
    ko: '이메일 보내기',
    zh: '给我们发邮件',
    de: 'E-Mail senden'
  },
  'contact.phone': {
    en: 'Call Us',
    hu: 'Hívjon minket',
    sv: 'Ring oss',
    it: 'Chiamaci',
    ko: '전화하기',
    zh: '打电话给我们',
    de: 'Rufen Sie uns an'
  },
  'contact.form.title': {
    en: 'Send us a message',
    hu: 'Küldjön nekünk üzenetet',
    sv: 'Skicka oss ett meddelande',
    it: 'Inviaci un messaggio',
    ko: '메시지 보내기',
    zh: '给我们发消息',
    de: 'Senden Sie uns eine Nachricht'
  },
  'contact.form.firstName': {
    en: 'First Name',
    hu: 'Keresztnév',
    sv: 'Förnamn',
    it: 'Nome',
    ko: '이름',
    zh: '名字',
    de: 'Vorname'
  },
  'contact.form.lastName': {
    en: 'Last Name',
    hu: 'Vezetéknév',
    sv: 'Efternamn',
    it: 'Cognome',
    ko: '성',
    zh: '姓氏',
    de: 'Nachname'
  },
  'contact.form.email': {
    en: 'Email Address',
    hu: 'E-mail cím',
    sv: 'E-postadress',
    it: 'Indirizzo email',
    ko: '이메일 주소',
    zh: '电子邮件地址',
    de: 'E-Mail-Adresse'
  },
  'contact.form.company': {
    en: 'Company',
    hu: 'Cég',
    sv: 'Företag',
    it: 'Azienda',
    ko: '회사',
    zh: '公司',
    de: 'Firma'
  },
  'contact.form.message': {
    en: 'Message',
    hu: 'Üzenet',
    sv: 'Meddelande',
    it: 'Messaggio',
    ko: '메시지',
    zh: '信息',
    de: 'Nachricht'
  },
  'contact.form.firstNamePlaceholder': {
    en: 'Your first name',
    hu: 'Az Ön keresztneve',
    sv: 'Ditt förnamn',
    it: 'Il tuo nome',
    ko: '귀하의 이름',
    zh: '您的名字',
    de: 'Ihr Vorname'
  },
  'contact.form.lastNamePlaceholder': {
    en: 'Your last name',
    hu: 'Az Ön vezetékneve',
    sv: 'Ditt efternamn',
    it: 'Il tuo cognome',
    ko: '귀하의 성',
    zh: '您的姓氏',
    de: 'Ihr Nachname'
  },
  'contact.form.emailPlaceholder': {
    en: 'your.email@company.com',
    hu: 'az.on.emailje@ceg.hu',
    sv: 'din.email@foretag.se',
    it: 'tua.email@azienda.it',
    ko: 'your.email@company.com',
    zh: 'your.email@company.com',
    de: 'ihre.email@firma.de'
  },
  'contact.form.companyPlaceholder': {
    en: 'Your company name',
    hu: 'Az Ön cégének neve',
    sv: 'Ditt företagsnamn',
    it: 'Il nome della tua azienda',
    ko: '귀하의 회사명',
    zh: '您的公司名称',
    de: 'Ihr Firmenname'
  },
  'contact.form.messagePlaceholder': {
    en: 'Tell us about your safety requirements and how we can help...',
    hu: 'Mondja el biztonsági igényeit és hogyan segíthetünk...',
    sv: 'Berätta om dina säkerhetskrav och hur vi kan hjälpa...',
    it: 'Raccontaci le tue esigenze di sicurezza e come possiamo aiutarti...',
    ko: '안전 요구 사항과 도움이 필요한 사항을 알려주세요...',
    zh: '告诉我们您的安全要求以及我们如何提供帮助...',
    de: 'Erzählen Sie uns von Ihren Sicherheitsanforderungen und wie wir helfen können...'
  },
  'contact.form.submit': {
    en: 'Send Message',
    hu: 'Üzenet küldése',
    sv: 'Skicka meddelande',
    it: 'Invia messaggio',
    ko: '메시지 보내기',
    zh: '发送消息',
    de: 'Nachricht senden'
  },
  'contact.form.responseTime': {
    en: 'We typically respond within 24 hours during business days.',
    hu: 'Általában 24 órán belül válaszolunk munkanapokon.',
    sv: 'Vi svarar vanligtvis inom 24 timmar under arbetsdagar.',
    it: 'Rispondiamo generalmente entro 24 ore durante i giorni lavorativi.',
    ko: '영업일 기준 24시간 이내에 답변드립니다.',
    zh: '我们通常在工作日的24小时内回复。',
    de: 'Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen.'
  },
  'contact.info.email': {
    en: 'Email',
    hu: 'E-mail',
    sv: 'E-post',
    it: 'Email',
    ko: '이메일',
    zh: '电子邮件',
    de: 'E-Mail'
  },
  'contact.info.phone': {
    en: 'Phone',
    hu: 'Telefon',
    sv: 'Telefon',
    it: 'Telefono',
    ko: '전화',
    zh: '电话',
    de: 'Telefon'
  },
  'contact.info.hours': {
    en: 'Business Hours',
    hu: 'Nyitvatartás',
    sv: 'Öppettider',
    it: 'Orari di apertura',
    ko: '영업 시간',
    zh: '营业时间',
    de: 'Geschäftszeiten'
  },
  'footer.services': {
    en: 'Services',
    hu: 'Szolgáltatások',
    sv: 'Tjänster',
    it: 'Servizi',
    ko: '서비스',
    zh: '服务',
    de: 'Dienstleistungen'
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    hu: 'Gyors linkek',
    sv: 'Snabblänkar',
    it: 'Link rapidi',
    ko: '빠른 링크',
    zh: '快速链接',
    de: 'Schnellzugriff'
  },
  'footer.contactInfo': {
    en: 'Contact Info',
    hu: 'Kapcsolat',
    sv: 'Kontaktinformation',
    it: 'Informazioni di contatto',
    ko: '연락처 정보',
    zh: '联系信息',
    de: 'Kontaktinformationen'
  },
  'footer.aboutUs': {
    en: 'About Us',
    hu: 'Rólunk',
    sv: 'Om oss',
    it: 'Chi siamo',
    ko: '회사소개',
    zh: '关于我们',
    de: 'Über uns'
  },
  'footer.ourTeam': {
    en: 'Our Team',
    hu: 'Csapatunk',
    sv: 'Vårt team',
    it: 'Il nostro team',
    ko: '우리 팀',
    zh: '我们的团队',
    de: 'Unser Team'
  },
  'footer.projects': {
    en: 'Projects',
    hu: 'Projektek',
    sv: 'Projekt',
    it: 'Progetti',
    ko: '프로젝트',
    zh: '项目',
    de: 'Projekte'
  },
  'footer.contact': {
    en: 'Contact',
    hu: 'Kapcsolat',
    sv: 'Kontakt',
    it: 'Contatti',
    ko: '연락처',
    zh: '联系我们',
    de: 'Kontakt'
  },
  'footer.certifications': {
    en: 'Certifications',
    hu: 'Tanúsítványok',
    sv: 'Certifieringar',
    it: 'Certificazioni',
    ko: '인증서',
    zh: '认证',
    de: 'Zertifizierungen'
  },
  'footer.rights': {
    en: 'All rights reserved.',
    hu: 'Minden jog fenntartva.',
    sv: 'Alla rättigheter förbehållna.',
    it: 'Tutti i diritti riservati.',
    ko: '모든 권리 보유.',
    zh: '版权所有。',
    de: 'Alle Rechte vorbehalten.'
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    hu: 'Adatvédelmi szabályzat',
    sv: 'Integritetspolicy',
    it: 'Informativa sulla privacy',
    ko: '개인정보 보호정책',
    zh: '隐私政策',
    de: 'Datenschutzrichtlinie'
  },
  'footer.terms': {
    en: 'Terms of Service',
    hu: 'Felhasználási feltételek',
    sv: 'Användarvillkor',
    it: 'Termini di servizio',
    ko: '서비스 약관',
    zh: '服务条款',
    de: 'Nutzungsbedingungen'
  },
  'footer.iso': {
    en: 'ISO Certified',
    hu: 'ISO tanúsítvánnyal',
    sv: 'ISO-certifierad',
    it: 'Certificato ISO',
    ko: 'ISO 인증',
    zh: 'ISO认证',
    de: 'ISO-zertifiziert'
  },
  'contact.form.sending': {
    en: 'Sending...',
    hu: 'Küldés...',
    sv: 'Skickar...',
    it: 'Invio in corso...',
    ko: '전송 중...',
    zh: '发送中...',
    de: 'Wird gesendet...'
  },
  'contact.form.success': {
    en: 'Message sent successfully! We\'ll get back to you soon.',
    hu: 'Üzenet sikeresen elküldve! Hamarosan válaszolunk.',
    sv: 'Meddelandet skickades! Vi återkommer snart.',
    it: 'Messaggio inviato con successo! Ti risponderemo presto.',
    ko: '메시지가 성공적으로 전송되었습니다! 곧 답변드리겠습니다.',
    zh: '消息发送成功！我们会尽快回复您。',
    de: 'Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.'
  },
  'contact.form.error': {
    en: 'Failed to send message. Please try again or contact us directly.',
    hu: 'Üzenet küldése sikertelen. Kérjük, próbálja újra vagy vegye fel velünk közvetlenül a kapcsolatot.',
    sv: 'Meddelandet kunde inte skickas. Försök igen eller kontakta oss direkt.',
    it: 'Invio del messaggio non riuscito. Riprova o contattaci direttamente.',
    ko: '메시지 전송에 실패했습니다. 다시 시도하거나 직접 문의해 주세요.',
    zh: '发送消息失败。请重试或直接联系我们。',
    de: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
  },
  'contact.hours.weekday': {
    en: 'Mon-Fri: 8:00-18:00',
    hu: 'Hétfő-Péntek: 8:00-18:00',
    sv: 'Mån-Fre: 8:00-18:00',
    it: 'Lun-Ven: 8:00-18:00',
    ko: '월-금: 8:00-18:00',
    zh: '周一至周五：8:00-18:00',
    de: 'Mo-Fr: 8:00-18:00'
  },
  'contact.hours.saturday': {
    en: 'Sat: 9:00-14:00',
    hu: 'Szombat: 9:00-14:00',
    sv: 'Lör: 9:00-14:00',
    it: 'Sab: 9:00-14:00',
    ko: '토: 9:00-14:00',
    zh: '周六：9:00-14:00',
    de: 'Sa: 9:00-14:00'
  },

  // Team positions
  'team.formerly': {
    en: 'Formerly',
    hu: 'Korábban',
    sv: 'Tidigare',
    it: 'In precedenza',
    ko: '이전',
    zh: '以前',
    de: 'Früher'
  },
  'team.ceo.position': {
    en: 'CEO & Safety Director',
    hu: 'Ügyvezető Igazgató',
    sv: 'VD & Säkerhetsdirektör',
    it: 'CEO e Direttore della Sicurezza',
    ko: 'CEO 및 안전 이사',
    zh: '首席执行官兼安全总监',
    de: 'CEO & Sicherheitsdirektor'
  },
  'team.ceo.specialization': {
    en: 'Digital Safety & Regulatory Systems',
    hu: 'Digitális Munkavédelmi és Szabályozási Rendszerek',
    sv: 'Digital säkerhet och regleringssystem',
    it: 'Sistemi di sicurezza digitale e normativi',
    ko: '디지털 안전 및 규제 시스템',
    zh: '数字安全与监管系统',
    de: 'Digitale Sicherheits- und Regulierungssysteme'
  },
  'team.ceo.description': {
    en: 'IT specialist focused on developing and maintaining digital safety management systems and ensuring cybersecurity in industrial environments.',
    hu: 'IT szakértő, aki a digitális munkavédelmi irányítási rendszerek fejlesztésére és karbantartására, valamint az ipari környezetekben a kiberbiztonság biztosítására összpontosít.',
    sv: 'IT-specialist fokuserad på att utveckla och underhålla digitala säkerhetsledningssystem och säkerställa cybersäkerhet i industriella miljöer.',
    it: 'Specialista IT focalizzato sullo sviluppo e la manutenzione di sistemi di gestione della sicurezza digitale e sulla garanzia della sicurezza informatica negli ambienti industriali.',
    ko: '디지털 안전 관리 시스템 개발 및 유지보수와 산업 환경에서의 사이버 보안 보장에 중점을 둔 IT 전문가.',
    zh: 'IT专家，专注于开发和维护数字安全管理系统，并确保工业环境中的网络安全。',
    de: 'IT-Spezialist mit Fokus auf Entwicklung und Wartung digitaler Sicherheitsmanagementsysteme sowie Gewährleistung der Cybersicherheit in industriellen Umgebungen.'
  },
  'team.projectManager.position': {
    en: 'Project Manager',
    hu: 'Projekt Menedzser',
    sv: 'Projektledare',
    it: 'Project Manager',
    ko: '프로젝트 관리자',
    zh: '项目经理',
    de: 'Projektmanager'
  },
  'team.projectManager.specialization': {
    en: 'Project Coordination & Management',
    hu: 'Projekt Koordináció és Menedzsment',
    sv: 'Projektkoordinering och ledning',
    it: 'Coordinamento e gestione dei progetti',
    ko: '프로젝트 조정 및 관리',
    zh: '项目协调与管理',
    de: 'Projektkoordination und -management'
  },
  'team.projectManager.description': {
    en: 'Experienced project manager specializing in coordinating complex safety projects and ensuring timely delivery of all safety solutions.',
    hu: 'Tapasztalt projekt menedzser, aki a komplex munkavédelmi projektek koordinálására és az összes munkavédelmi megoldás határidőre történő szállítására specializálódott.',
    sv: 'Erfaren projektledare specialiserad på att koordinera komplexa säkerhetsprojekt och säkerställa snabb leverans av alla säkerhetslösningar.',
    it: 'Project manager esperto specializzato nel coordinamento di progetti di sicurezza complessi e nella garanzia della consegna tempestiva di tutte le soluzioni di sicurezza.',
    ko: '복잡한 안전 프로젝트를 조정하고 모든 안전 솔루션의 적시 제공을 보장하는 데 전문화된 경험 많은 프로젝트 관리자.',
    zh: '经验丰富的项目经理，专门协调复杂的安全项目并确保及时交付所有安全解决方案。',
    de: 'Erfahrener Projektmanager, spezialisiert auf die Koordinierung komplexer Sicherheitsprojekte und die Sicherstellung der rechtzeitigen Bereitstellung aller Sicherheitslösungen.'
  },
  'team.environmentalEngineer.position': {
    en: 'Environmental Engineer',
    hu: 'Környezetvédelmi Mérnök',
    sv: 'Miljöingenjör',
    it: 'Ingegnere Ambientale',
    ko: '환경 엔지니어',
    zh: '环境工程师',
    de: 'Umweltingenieur'
  },
  'team.environmentalEngineer.specialization': {
    en: 'Environmental Protection & Sustainability',
    hu: 'Környezetvédelem és Fenntarthatóság',
    sv: 'Miljöskydd och hållbarhet',
    it: 'Protezione ambientale e sostenibilità',
    ko: '환경 보호 및 지속 가능성',
    zh: '环境保护与可持续性',
    de: 'Umweltschutz und Nachhaltigkeit'
  },
  'team.environmentalEngineer.description': {
    en: 'Certified environmental engineer specializing in environmental impact assessments, sustainability planning, and regulatory requirements.',
    hu: 'Tanúsított környezetvédelmi mérnök, aki a környezeti hatásvizsgálatokra, fenntarthatósági tervezésre és szabályozási követelményekre specializálódott.',
    sv: 'Certifierad miljöingenjör specialiserad på miljökonsekvensbedömningar, hållbarhetsplanering och regulatoriska krav.',
    it: 'Ingegnere ambientale certificato specializzato in valutazioni di impatto ambientale, pianificazione della sostenibilità e requisiti normativi.',
    ko: '환경 영향 평가, 지속 가능성 계획 및 규제 요구 사항을 전문으로 하는 공인 환경 엔지니어.',
    zh: '认证环境工程师，专门从事环境影响评估、可持续性规划和监管要求。',
    de: 'Zertifizierter Umweltingenieur, spezialisiert auf Umweltverträglichkeitsprüfungen, Nachhaltigkeitsplanung und regulatorische Anforderungen.'
  },
  'team.safetyCoordinator.position': {
    en: 'Safety Coordinator',
    hu: 'Munkavédelmi Koordinátor',
    sv: 'Säkerhetskoordinator',
    it: 'Coordinatore della Sicurezza',
    ko: '안전 조정자',
    zh: '安全协调员',
    de: 'Sicherheitskoordinator'
  },
  'team.safetyCoordinator.specialization': {
    en: 'Workplace Safety & Fire Protection',
    hu: 'Munkavédelem és Tűzvédelem',
    sv: 'Arbetsmiljö och brandskydd',
    it: 'Sicurezza sul lavoro e protezione antincendio',
    ko: '작업장 안전 및 화재 방지',
    zh: '工作场所安全与消防',
    de: 'Arbeitsplatzsicherheit und Brandschutz'
  },
  'team.safetyCoordinator.description': {
    en: 'Certified safety coordinator with extensive experience in workplace safety training, equipment inspection, and fire protection systems.',
    hu: 'Tanúsított munkavédelmi koordinátor, aki kiterjedt tapasztalattal rendelkezik a munkahelyi munkavédelmi képzés, berendezések ellenőrzése és tűzvédelmi rendszerek terén.',
    sv: 'Certifierad säkerhetskoordinator med omfattande erfarenhet av arbetsmiljöutbildning, utrustningsinspektioner och brandskyddssystem.',
    it: 'Coordinatore della sicurezza certificato con ampia esperienza nella formazione sulla sicurezza sul lavoro, nell\'ispezione delle attrezzature e nei sistemi di protezione antincendio.',
    ko: '작업장 안전 교육, 장비 검사 및 화재 방지 시스템에 대한 광범위한 경험을 가진 공인 안전 조정자.',
    zh: '认证安全协调员，在工作场所安全培训、设备检查和消防系统方面拥有丰富经验。',
    de: 'Zertifizierter Sicherheitskoordinator mit umfangreicher Erfahrung in Arbeitsplatzsicherheitsschulungen, Geräteinspektionen und Brandschutzsystemen.'
  },
  'team.csenger.specialization': {
    en: 'Workplace Safety',
    hu: 'Munkavédelem',
    sv: 'Arbetsmiljö',
    it: 'Sicurezza sul lavoro',
    ko: '작업장 안전',
    zh: '工作场所安全',
    de: 'Arbeitsplatzsicherheit'
  },
  'team.csenger.description': {
    en: '',
    hu: '',
    sv: '',
    it: '',
    ko: '',
    zh: '',
    de: ''
  },
  'team.csenger.detailedDescription': {
    en: 'A reliable and stable presence in the team. In his work, he prioritizes well-thought-out solutions, and it is important to him that decisions are sustainable in the long term. His forward-thinking approach and consistent attitude play a significant role in ensuring that tasks are carried out within secure frameworks.',
    hu: 'A csapatban megbízható, stabil pontként van jelen. Munkája során a jól átgondolt megoldásokat részesíti előnyben, és fontos számára, hogy a döntések hosszú távon is fenntarthatók legyenek. Előrelátó gondolkodása és következetes hozzáállása jelentős szerepet játszik abban, hogy a feladatok biztonságos keretek között valósuljanak meg.',
    sv: 'En pålitlig och stabil närvaro i teamet. I sitt arbete prioriterar han väl genomtänkta lösningar, och det är viktigt för honom att beslut är hållbara på lång sikt. Hans framåtblickande tänkande och konsekventa attityd spelar en betydande roll för att säkerställa att uppgifter genomförs inom säkra ramar.',
    it: 'Una presenza affidabile e stabile nel team. Nel suo lavoro, dà priorità a soluzioni ben ponderate ed è importante per lui che le decisioni siano sostenibili a lungo termine. Il suo approccio lungimirante e il suo atteggiamento coerente svolgono un ruolo significativo nel garantire che i compiti siano svolti in modo sicuro.',
    ko: '팀에서 신뢰할 수 있고 안정적인 존재입니다. 그의 업무에서 잘 고려된 솔루션을 우선시하며, 결정이 장기적으로 지속 가능한 것이 중요합니다. 그의 미래 지향적인 사고와 일관된 태도는 작업이 안전한 틀 내에서 수행되도록 하는 데 중요한 역할을 합니다.',
    zh: '团队中可靠而稳定的存在。在工作中，他优先考虑经过深思熟虑的解决方案，对他来说，决策的长期可持续性很重要。他的前瞻性思维和始终如一的态度在确保任务在安全框架内执行方面发挥着重要作用。',
    de: 'Eine zuverlässige und stabile Präsenz im Team. In seiner Arbeit priorisiert er gut durchdachte Lösungen, und es ist ihm wichtig, dass Entscheidungen langfristig tragfähig sind. Seine vorausschauende Denkweise und konsequente Haltung spielen eine bedeutende Rolle dabei, dass Aufgaben in einem sicheren Rahmen ausgeführt werden.'
  },
  'team.officeAdmin.position': {
    en: 'Office Administrator',
    hu: 'Irodavezető',
    sv: 'Kontorsadministratör',
    it: 'Amministratore d\'Ufficio',
    ko: '사무실 관리자',
    zh: '办公室管理员',
    de: 'Büroadministrator'
  },
  'team.officeAdmin.specialization': {
    en: 'Administrative Operations & Support',
    hu: 'Adminisztratív Műveletek és Támogatás',
    sv: 'Administrativa operationer och stöd',
    it: 'Operazioni amministrative e supporto',
    ko: '행정 운영 및 지원',
    zh: '行政运营与支持',
    de: 'Verwaltungsvorgänge und Unterstützung'
  },
  'team.officeAdmin.description': {
    en: 'Experienced office administrator responsible for coordinating daily operations, managing documentation, and providing comprehensive administrative support.',
    hu: 'Tapasztalt irodavezető, aki a napi műveletek koordinálásáért, a dokumentáció kezeléséért és az átfogó adminisztratív támogatás nyújtásáért felelős.',
    sv: 'Erfaren kontorsadministratör ansvarig för att koordinera dagliga operationer, hantera dokumentation och tillhandahålla omfattande administrativt stöd.',
    it: 'Amministratore d\'ufficio esperto responsabile del coordinamento delle operazioni quotidiane, della gestione della documentazione e della fornitura di supporto amministrativo completo.',
    ko: '일일 운영 조정, 문서 관리 및 포괄적인 행정 지원 제공을 담당하는 경험 많은 사무실 관리자.',
    zh: '经验丰富的办公室管理员，负责协调日常运营、管理文档并提供全面的行政支持。',
    de: 'Erfahrener Büroadministrator, verantwortlich für die Koordinierung des täglichen Betriebs, die Verwaltung der Dokumentation und die Bereitstellung umfassender Verwaltungsunterstützung.'
  },
  'team.engineeringManager.position': {
    en: 'Engineering Manager - HSE Projects',
    hu: 'Mérnöki Vezető - HSE Projektek',
    sv: 'Ingenjörschef - HSE-projekt',
    it: 'Responsabile Ingegneria - Progetti HSE',
    ko: '엔지니어링 관리자 - HSE 프로젝트',
    zh: '工程经理 - HSE项目',
    de: 'Ingenieurmanager - HSE-Projekte'
  },
  'team.engineeringManager.specialization': {
    en: 'HSE Engineering & Project Development',
    hu: 'HSE Mérnöki Tevékenység és Projektfejlesztés',
    sv: 'HSE-teknik och projektutveckling',
    it: 'Ingegneria HSE e sviluppo progetti',
    ko: 'HSE 엔지니어링 및 프로젝트 개발',
    zh: 'HSE工程与项目开发',
    de: 'HSE-Engineering und Projektentwicklung'
  },
  'team.engineeringManager.description': {
    en: 'Experienced engineering manager specializing in HSE project development, technical solutions, and comprehensive safety system implementation across industrial facilities.',
    hu: 'Tapasztalt mérnöki vezető, aki az HSE projektfejlesztésre, technikai megoldásokra és az átfogó biztonsági rendszerek megvalósítására specializálódott az ipari létesítményekben.',
    sv: 'Erfaren ingenjörschef specialiserad på HSE-projektutveckling, tekniska lösningar och implementering av omfattande säkerhetssystem inom industrianläggningar.',
    it: 'Responsabile ingegneria esperto specializzato nello sviluppo di progetti HSE, soluzioni tecniche e implementazione completa di sistemi di sicurezza negli impianti industriali.',
    ko: '산업 시설 전반에 걸친 HSE 프로젝트 개발, 기술 솔루션 및 포괄적인 안전 시스템 구현을 전문으로 하는 경험 많은 엔지니어링 관리자.',
    zh: '经验丰富的工程经理，专门从事HSE项目开发、技术解决方案以及工业设施的综合安全系统实施。',
    de: 'Erfahrener Ingenieurmanager, spezialisiert auf HSE-Projektentwicklung, technische Lösungen und umfassende Implementierung von Sicherheitssystemen in Industrieanlagen.'
  },

  // Detailed Team Descriptions
  'team.ceo.detailedDescription': {
    en: 'Ákos is the founder and the creative mind behind 4H Safety in Everything. Known for his precision, maximalism, and strong focus on details, he is the driving force in planning, engineering control, and continuous improvement. His innovative approach ensures that every project is executed with the highest technical and safety standards. As a member of the Horváth family, his dedication and work ethic shape the core identity of the company.',
    hu: 'Ákos a 4H Safety in Everything alapítója és kreatív motorja. Maximalista szemlélete, részletekre való odafigyelése és tervezési képességei meghatározzák a cég szakmai irányát. Mindig arra törekszik, hogy a projekteket műszakilag és biztonságtechnikai szempontból is a legmagasabb szinten valósítsa meg. A Horváth család tagjaként munkabírása és elhivatottsága alapérték a vállalatban.',
    sv: 'Ákos är grundaren och den kreativa kraften bakom 4H Safety in Everything. Känd för sin precision, maximalism och starka fokus på detaljer, är han den drivande kraften i planering, teknisk kontroll och ständig förbättring. Hans innovativa tillvägagångssätt säkerställer att varje projekt genomförs med högsta tekniska och säkerhetsstandarder. Som medlem av familjen Horváth formar hans dedikation och arbetsmoral företagets kärnidentitet.',
    it: 'Ákos è il fondatore e la mente creativa dietro 4H Safety in Everything. Conosciuto per la sua precisione, massimalismo e forte attenzione ai dettagli, è la forza trainante nella pianificazione, nel controllo ingegneristico e nel miglioramento continuo. Il suo approccio innovativo garantisce che ogni progetto venga eseguito con i più alti standard tecnici e di sicurezza. Come membro della famiglia Horváth, la sua dedizione e etica del lavoro plasmano l\'identità centrale dell\'azienda.',
    ko: 'Ákos는 4H Safety in Everything의 창립자이자 창의적인 리더입니다. 정밀함, 완벽주의, 세부 사항에 대한 강한 집중력으로 알려져 있으며, 계획, 엔지니어링 제어 및 지속적인 개선의 원동력입니다. 그의 혁신적인 접근 방식은 모든 프로젝트가 최고의 기술 및 안전 표준으로 실행되도록 보장합니다. Horváth 가족의 일원으로서 그의 헌신과 직업 윤리는 회사의 핵심 정체성을 형성합니다.',
    zh: 'Ákos是4H Safety in Everything的创始人和创意领袖。以其精确性、完美主义和对细节的高度关注而闻名，他是规划、工程控制和持续改进的驱动力。他的创新方法确保每个项目都以最高的技术和安全标准执行。作为Horváth家族的成员，他的奉献精神和职业道德塑造了公司的核心身份。',
    de: 'Ákos ist der Gründer und kreative Kopf hinter 4H Safety in Everything. Bekannt für seine Präzision, seinen Maximalismus und seinen starken Fokus auf Details, ist er die treibende Kraft in Planung, technischer Kontrolle und kontinuierlicher Verbesserung. Sein innovativer Ansatz stellt sicher, dass jedes Projekt mit höchsten technischen und Sicherheitsstandards durchgeführt wird. Als Mitglied der Familie Horváth prägen sein Engagement und seine Arbeitsethik die Kernidentität des Unternehmens.'
  },
  'team.engineeringManager.detailedDescription': {
    en: 'Ferenc brings extensive engineering expertise to the company. As a qualified mechanical engineer with many years of industry experience, he has a deep understanding of technical processes, systems, and complex machinery. His structured thinking and ability to oversee technical tasks make him a key pillar in project execution and engineering support.',
    hu: 'Ferenc komoly mérnöki tapasztalattal erősíti a csapatot. Gépészmérnöki végzettsége és sokéves szakmai múltja révén átfogóan érti a műszaki rendszereket és folyamatokat. Rendszerszemléletének és technikai rálátásának köszönhetően meghatározó szerepe van a projektek kivitelezésében és a műszaki háttér biztosításában.',
    sv: 'Ferenc bidrar med omfattande ingenjörskompetens till företaget. Som kvalificerad maskiningenjör med många års branscherfarenhet har han en djup förståelse för tekniska processer, system och komplexa maskiner. Hans strukturerade tänkande och förmåga att övervaka tekniska uppgifter gör honom till en nyckelpelare i projektgenomförande och tekniskt stöd.',
    it: 'Ferenc porta un\'ampia competenza ingegneristica all\'azienda. Come ingegnere meccanico qualificato con molti anni di esperienza nel settore, ha una profonda comprensione dei processi tecnici, dei sistemi e dei macchinari complessi. Il suo pensiero strutturato e la capacità di supervisionare compiti tecnici lo rendono un pilastro chiave nell\'esecuzione dei progetti e nel supporto ingegneristico.',
    ko: 'Ferenc는 회사에 광범위한 엔지니어링 전문 지식을 제공합니다. 수년간의 산업 경험을 가진 자격을 갖춘 기계 엔지니어로서 기술 프로세스, 시스템 및 복잡한 기계에 대한 깊은 이해를 가지고 있습니다. 그의 구조화된 사고와 기술 작업을 감독하는 능력은 프로젝트 실행 및 엔지니어링 지원의 핵심 기둥이 됩니다.',
    zh: 'Ferenc为公司带来了丰富的工程专业知识。作为一名具有多年行业经验的合格机械工程师，他对技术流程、系统和复杂机械有着深刻的理解。他的结构化思维和监督技术任务的能力使他成为项目执行和工程支持的关键支柱。',
    de: 'Ferenc bringt umfangreiche Ingenieurkompetenz ins Unternehmen ein. Als qualifizierter Maschinenbauingenieur mit langjähriger Branchenerfahrung verfügt er über ein tiefes Verständnis technischer Prozesse, Systeme und komplexer Maschinen. Sein strukturiertes Denken und seine Fähigkeit, technische Aufgaben zu überwachen, machen ihn zu einer Schlüsselsäule bei der Projektdurchführung und technischen Unterstützung.'
  },
  'team.projectManager.detailedDescription': {
    en: 'Mátyás is known for his precision, calm presence, and strong interpersonal skills. He easily builds rapport with workers, clients, and partners, making him an excellent coordinator on any project. His confidence and leadership ability allow him to manage teams effectively and ensure smooth, well-organized project operations.',
    hu: 'Mátyás precíz, nyugodt és kiváló emberi kapcsolatteremtő képességekkel rendelkezik. Könnyedén megtalálja a hangot a munkavállalókkal, a megrendelőkkel és a partnerekkel, így minden projektben hatékony koordinátorként működik. Magabiztos fellépésével és vezetői készségeivel jól irányítja a csapatot, biztosítva a zökkenőmentes kivitelezést.',
    sv: 'Mátyás är känd för sin precision, lugna närvaro och starka mellanmänskliga färdigheter. Han bygger lätt rapport med arbetare, kunder och partners, vilket gör honom till en utmärkt koordinator i alla projekt. Hans självförtroende och ledarskapsförmåga gör det möjligt för honom att hantera team effektivt och säkerställa smidiga, välorganiserade projektoperationer.',
    it: 'Mátyás è conosciuto per la sua precisione, presenza calma e forti capacità interpersonali. Costruisce facilmente rapporti con lavoratori, clienti e partner, rendendolo un eccellente coordinatore in qualsiasi progetto. La sua sicurezza e capacità di leadership gli permettono di gestire team in modo efficace e garantire operazioni di progetto fluide e ben organizzate.',
    ko: 'Mátyás는 정밀함, 차분한 존재감, 강한 대인 관계 기술로 알려져 있습니다. 그는 근로자, 고객 및 파트너와 쉽게 관계를 구축하여 모든 프로젝트에서 훌륭한 코디네이터가 됩니다. 그의 자신감과 리더십 능력은 팀을 효과적으로 관리하고 원활하고 잘 조직된 프로젝트 운영을 보장할 수 있게 합니다.',
    zh: 'Mátyás以其精确性、冷静的存在感和强大的人际交往能力而闻名。他很容易与工人、客户和合作伙伴建立融洽关系，使他成为任何项目中出色的协调员。他的自信和领导能力使他能够有效地管理团队，并确保顺利、有序的项目运营。',
    de: 'Mátyás ist bekannt für seine Präzision, ruhige Präsenz und starke zwischenmenschliche Fähigkeiten. Er baut leicht eine Beziehung zu Arbeitern, Kunden und Partnern auf, was ihn zu einem ausgezeichneten Koordinator in jedem Projekt macht. Sein Selbstvertrauen und seine Führungsfähigkeit ermöglichen es ihm, Teams effektiv zu managen und reibungslose, gut organisierte Projektabläufe sicherzustellen.'
  },
  'team.environmentalEngineer.detailedDescription': {
    en: 'Máté is an environmental engineer with a strong understanding of legal and regulatory frameworks. His knowledge of compliance requirements and environmental obligations allows him to oversee projects from a structured, law-aligned perspective. He ensures that each project follows environmental standards and supports sustainable, responsible execution.',
    hu: 'Máté környezetmérnök, aki kiválóan ismeri a jogszabályi és szabályozási hátteret. Pontos jogi rálátása és projekt-átfogó gondolkodása révén biztosítja, hogy a munkák minden előírásnak megfeleljenek. Fontos szerepet játszik abban, hogy a projektek fenntarthatóan és szabályosan valósuljanak meg.',
    sv: 'Máté är en miljöingenjör med stark förståelse för juridiska och regulatoriska ramverk. Hans kunskap om efterlevnadskrav och miljöförpliktelser gör det möjligt för honom att övervaka projekt från ett strukturerat, lagkonformt perspektiv. Han säkerställer att varje projekt följer miljöstandarder och stöder hållbar, ansvarsfull genomförande.',
    it: 'Máté è un ingegnere ambientale con una forte comprensione dei quadri legali e normativi. La sua conoscenza dei requisiti di conformità e degli obblighi ambientali gli consente di supervisionare i progetti da una prospettiva strutturata e conforme alla legge. Garantisce che ogni progetto segua gli standard ambientali e supporti un\'esecuzione sostenibile e responsabile.',
    ko: 'Máté는 법적 및 규제 프레임워크에 대한 강한 이해를 가진 환경 엔지니어입니다. 준수 요구 사항 및 환경 의무에 대한 그의 지식은 구조화되고 법률에 부합하는 관점에서 프로젝트를 감독할 수 있게 합니다. 그는 각 프로젝트가 환경 표준을 따르고 지속 가능하고 책임 있는 실행을 지원하도록 보장합니다.',
    zh: 'Máté是一位对法律和监管框架有深刻理解的环境工程师。他对合规要求和环境义务的了解使他能够从结构化、符合法律的角度监督项目。他确保每个项目都遵循环境标准并支持可持续、负责任的执行。',
    de: 'Máté ist ein Umweltingenieur mit starkem Verständnis für rechtliche und regulatorische Rahmenbedingungen. Sein Wissen über Compliance-Anforderungen und Umweltverpflichtungen ermöglicht es ihm, Projekte aus einer strukturierten, gesetzeskonformen Perspektive zu überwachen. Er stellt sicher, dass jedes Projekt Umweltstandards folgt und eine nachhaltige, verantwortungsvolle Durchführung unterstützt.'
  },
  'team.safetyCoordinator.detailedDescription': {
    en: 'Viktor is highly active on the field and brings strong practical energy to the team. He is currently completing his lifting-equipment certification, expanding his professional toolbox. His hands-on attitude and willingness to learn make him a valuable support in daily operations and site activities.',
    hu: 'Viktor rendkívül aktív terepen, energikus és gyakorlatias tagja a csapatnak. Jelenleg az emelőgép-ügyintézői képesítését szerzi, amellyel tovább bővíti szakmai tudását. Hozzáállása és tanulási igénye nagyban hozzájárul a napi műveletek gördülékeny lebonyolításához.',
    sv: 'Viktor är mycket aktiv i fält och tillför stark praktisk energi till teamet. Han håller på att slutföra sin certifiering för lyftanordningar, vilket utökar hans professionella verktygslåda. Hans praktiska attityd och vilja att lära gör honom till ett värdefullt stöd i dagliga operationer och platsaktiviteter.',
    it: 'Viktor è molto attivo sul campo e porta una forte energia pratica al team. Sta attualmente completando la sua certificazione per attrezzature di sollevamento, ampliando il suo kit di strumenti professionali. Il suo atteggiamento pratico e la volontà di imparare lo rendono un supporto prezioso nelle operazioni quotidiane e nelle attività in loco.',
    ko: 'Viktor는 현장에서 매우 활동적이며 팀에 강력한 실용적 에너지를 제공합니다. 그는 현재 리프팅 장비 인증을 완료하고 있으며 전문 도구 상자를 확장하고 있습니다. 그의 실무적 태도와 배우려는 의지는 일상 운영 및 현장 활동에서 귀중한 지원이 됩니다.',
    zh: 'Viktor在现场非常活跃，为团队带来强大的实践能量。他目前正在完成起重设备认证，扩展他的专业工具箱。他的实际态度和学习意愿使他成为日常运营和现场活动中宝贵的支持。',
    de: 'Viktor ist sehr aktiv vor Ort und bringt starke praktische Energie ins Team. Er schließt derzeit seine Zertifizierung für Hebeausrüstung ab und erweitert damit seinen professionellen Werkzeugkasten. Seine praktische Einstellung und Lernbereitschaft machen ihn zu einer wertvollen Unterstützung im Tagesbetrieb und bei Aktivitäten vor Ort.'
  },
  'team.officeAdmin.detailedDescription': {
    en: 'Ádám is the administrative engine of the team and one of its most positive energies. His exceptional enthusiasm, reliability, and proactive approach make him a true team player. He always pays attention to others, thinks ahead, and helps projects wherever the need is greatest. His systematic thinking and collaborative skills make documentation, communication, and daily coordination seamless. Ádám\'s presence strengthens team spirit and ensures organized, efficient operations.',
    hu: 'Ádám a csapat adminisztratív motorja és egyik legpozitívabb energiája. Rendkívüli lelkesedése, megbízhatósága és proaktív hozzáállása igazi csapatjátékossá teszi. Mindig figyel a többiekre, előre gondolkodik, és ott segíti a projekteket, ahol éppen a legnagyobb szükség van rá. Rendszerszemlélete és együttműködési készsége gördülékennyé teszi a dokumentációt, a kommunikációt és a napi koordinációt. Ádám jelenléte erősíti a csapatszellemet és biztosítja a szervezett, hatékony működést.',
    sv: 'Ádám är teamets administrativa motor och en av dess mest positiva energier. Hans exceptionella entusiasm, pålitlighet och proaktiva tillvägagångssätt gör honom till en sann lagspelare. Han uppmärksammar alltid andra, tänker framåt och hjälper projekt där behovet är störst. Hans systematiska tänkande och samarbetsförmåga gör dokumentation, kommunikation och daglig samordning sömlös. Ádáms närvaro stärker teamandan och säkerställer organiserade, effektiva operationer.',
    it: 'Ádám è il motore amministrativo del team e una delle sue energie più positive. Il suo eccezionale entusiasmo, affidabilità e approccio proattivo lo rendono un vero giocatore di squadra. Presta sempre attenzione agli altri, pensa in anticipo e aiuta i progetti dove il bisogno è maggiore. Il suo pensiero sistematico e le competenze collaborative rendono documentazione, comunicazione e coordinamento quotidiano senza soluzione di continuità. La presenza di Ádám rafforza lo spirito di squadra e garantisce operazioni organizzate ed efficienti.',
    ko: 'Ádám은 팀의 행정 엔진이자 가장 긍정적인 에너지 중 하나입니다. 그의 뛰어난 열정, 신뢰성 및 적극적인 접근 방식은 그를 진정한 팀 플레이어로 만듭니다. 그는 항상 다른 사람들에게 주의를 기울이고, 미리 생각하며, 필요가 가장 큰 곳에서 프로젝트를 돕습니다. 그의 체계적인 사고와 협업 기술은 문서화, 커뮤니케이션 및 일상 조정을 원활하게 만듭니다. Ádám의 존재는 팀 정신을 강화하고 조직적이고 효율적인 운영을 보장합니다.',
    zh: 'Ádám是团队的行政引擎和最积极的能量之一。他的非凡热情、可靠性和积极主动的方法使他成为真正的团队合作者。他总是关注他人，提前思考，并在最需要的地方帮助项目。他的系统思维和协作技能使文档、沟通和日常协调无缝衔接。Ádám的存在加强了团队精神，并确保了有组织、高效的运营。',
    de: 'Ádám ist der administrative Motor des Teams und eine seiner positivsten Energien. Seine außergewöhnliche Begeisterung, Zuverlässigkeit und proaktive Herangehensweise machen ihn zu einem echten Teamplayer. Er achtet immer auf andere, denkt voraus und hilft Projekten dort, wo der Bedarf am größten ist. Sein systematisches Denken und seine Zusammenarbeitsfähigkeiten machen Dokumentation, Kommunikation und tägliche Koordination nahtlos. Ádáms Anwesenheit stärkt den Teamgeist und gewährleistet organisierte, effiziente Abläufe.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}