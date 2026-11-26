// ===== СЛОВНИК ПЕРЕКЛАДІВ =====
// Щоб змінити текст — знайди потрібний ключ і зміни його в кожній мові
const translations = {
  en: {
    "nav.services": "Tariffs",
    "nav.cases": "Cases",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Let's talk",
    "hero.badge": "Available for new projects",
    "hero.title": "Websites that <span class=\"grad\">bring you clients</span>",
    "hero.text": "I'm Yevhen (Jazzhe), a web developer from Ukraine living in Prague. I make websites for trainers, barbers and cafés — and I personally answer every message.",
    "hero.btn1": "Get a free quote →",
    "hero.btn2": "See my work",
    "srv.tag": "Tariffs",
    "srv.title": "Choose your tariff",
    "srv.sub": "Swipe through the tariffs and tap “Order” — I’ll reply within a day.",
    "promo.title": "🔥 First clients offer",
    "promo.text": "Your website for just 2 000 Kč + 300 Kč for the domain. Limited spots!",
    "promo.domain": "+ 300 Kč domain",
    "s1.title": "Landing page",
    "s1.text": "One page that explains your offer and turns visitors into clients.",
    "s2.title": "Business website",
    "s2.text": "A multi-section site: services, prices, gallery, reviews and contacts.",
    "s3.title": "Redesign",
    "s3.text": "Your old site gets a fresh, modern look that works great on phones.",
    "price.first": "for first clients",
    "cases.tag": "Cases",
    "cases.title": "Recent work",
    "cases.sub": "Real projects and concepts — swipe to see more.",
    "case1.tag": "Fitness",
    "case1.title": "Website for a personal trainer",
    "case1.text": "A business-card website to attract new clients: services, prices, and an interactive \"client results\" block with before/after sliders.",
    "case1.btn": "View website ↗",
    "ba.before": "Before",
    "ba.after": "After",
    "concept": "Concept",
    "case2.tag": "Café",
    "case2.title": "Online coffee shop",
    "case2.text": "A website for a Prague café: menu of 23 items with photos, a shopping cart, delivery or pickup with automatic price calculation, and CZ/EN versions.",
    "case3.tag": "Barbershop",
    "case3.title": "Barbershop website",
    "case3.text": "A website for a barbershop in Žižkov: price list, team, gallery and online booking where you pick a service, barber, day and a free time slot.",
    "case4.tag": "Wellness",
    "case4.title": "Massage therapist website",
    "case4.text": "A one-page site for a massage therapist in Prague: services with prices, FAQ, opening hours and a ready-made WhatsApp message for booking.",
    "soon": "Your project could be next — <a href=\"#contact\">let's talk</a>",
    "proc.tag": "Process",
    "proc.title": "How we work together",
    "proc.sub": "Simple and transparent — you always know what's happening.",
    "st1.t": "Brief",
    "st1.p": "You tell me about your business and goals. I send you a price and timeline.",
    "st2.t": "Design",
    "st2.p": "I create the look of your site and we adjust it until you love it.",
    "st3.t": "Development",
    "st3.p": "I build a fast site that works perfectly on phones and computers.",
    "st4.t": "Launch",
    "st4.p": "Your site goes live with your domain — and I help after launch too.",
    "rev.text": "\"I'm a fitness trainer and ordered a one-page website from Yevhen. He did everything: my services, my story and my clients' results — all beautifully designed. There were a lot of edits — I asked him to change something 5–7 times, and he always listened, gave advice and consulted me without any problems. He did everything the way I wanted, with quality and fast — together we made it perfect. He knows his job and it was a pleasure to work with him. If you need a one-page website for a barber, a massage therapist or a trainer like me — feel free to contact him. He'll build you a website that brings clients.\"",
    "rev.cite": "— Stanislav, personal trainer",
    "contact.tag": "Contact",
    "contact.title": "Let's build your <span class=\"accent\">website</span>",
    "contact.text": "Write like you'd write to a friend, no formalities needed. I'll reply within a day with a free quote.",
    "contact.prepay": "💳 I work with a 50% prepayment — the rest after the website is finished.",
    "footer.rights": "All rights reserved.",
    "footer.made": "Made with coffee in Prague ☕",
    "nav.about": "About",
    "hero.hello": "Hi there!",
    "about.title": "About me",
    "about.aside": "(short, I promise)",
    "about.p1": "My name is Yevhen, online I go by Jazzhe. I’m from Ukraine and have lived in Prague for five years. I’m a second-year student of IT and AI development at Evropská akademie vzdělávání, and I build websites for small businesses.",
    "about.p2": "I work on my own, so you talk directly to me: no managers, no middlemen. Write in Ukrainian, Czech, English or Russian, whatever is easier for you.",
    "about.p3": "I'm just starting out, so every website is my reputation. I keep working until it's right: my first client asked for up to 7 rounds of edits, and I did every one.",
    "about.p4": "Outside of code: the gym, football and music.",
    "about.sign": "— Yevhen",
    "rev.note": "what clients say ↓",
    "plan.order": "Order",
    "plan.popular": "Most popular",
    "plan.sale": "Sale",
    "plan.domain": "+ 300 Kč domain",
    "p1.name": "Business card",
    "p1.for": "For specialists: trainers, massage therapists, tutors",
    "p1.f1": "One page: about you, services, contacts",
    "p1.f2": "Looks great on phones",
    "p1.f3": "WhatsApp and Telegram buttons",
    "p1.f4": "Launch on your own domain",
    "p2.name": "Business",
    "p2.for": "For barbershops, cafés, studios and shops",
    "p2.f1": "Several sections: services and prices, gallery, reviews",
    "p2.f2": "Map and opening hours",
    "p2.f3": "Basic Google setup (SEO)",
    "p2.f4": "Messenger buttons and launch on your domain",
    "p3.name": "Your idea",
    "p3.for": "Online booking, menu with a cart, redesign, several languages",
    "p3.price": "Individual",
    "p3.priceSub": "free quote within a day",
    "p3.f1": "Online booking or ordering",
    "p3.f2": "Redesign of your current site",
    "p3.f3": "Several languages",
    "p3.f4": "You tell me the idea — I send a price",
    "order.title": "Where should we talk?",
    "order.plan": "Tariff",
    "order.msg": "Hi! I’d like to order the “{plan}” tariff. Could you tell me more?",
    "order.note": "WhatsApp and email fill the message in for you. For Telegram and Instagram it is copied — just paste it into the chat.",
    "order.copied": "Message copied — paste it into the chat",
    "case5.tag": "Transport",
    "case5.title": "Passenger transport website",
    "case5.text": "A website for a passenger transport business between Czechia, Slovakia and Zakarpattia: schedule, route map, services, info about the van and quick contact via Viber and WhatsApp. Real client, in her black-and-red style.",
    "nav.faq": "FAQ",
    "hero.trust": "2 real clients · I reply within a day",
    "hero.shotCap": "Real project: sukhomlyn-fitness.com",
    "fab": "Write me",
    "rev.more": "Read in full",
    "rev.less": "Show less",
    "order.any": "New project",
    "order.msgAny": "Hi! I’d like a website. Could we talk about it?",
    "faq.tag": "FAQ",
    "faq.title": "Common questions",
    "faq.q1": "How long does a website take?",
    "faq.a1": "It depends on the tariff and the amount of content. I tell you the exact timeline together with the price, before any work starts.",
    "faq.q2": "What do I need to prepare?",
    "faq.a2": "A short description of your business, your logo if you have one, photos and contacts. If something is missing, I’ll help with the texts and pick suitable photos.",
    "faq.q3": "Can I ask for changes?",
    "faq.a3": "Yes. I show you the website before launch and make changes until you are happy with it.",
    "faq.q4": "How does payment work?",
    "faq.a4": "50% before I start, the rest when the website is finished. The domain (300 Kč) is paid separately.",
    "faq.q5": "What happens after launch?",
    "faq.a5": "The website runs on your own domain. If you need to change something later, just message me and we’ll agree on it.",
    "rev2.text": "“Thank you so much! He made it quickly and always asked what to add or change. He helped me choose the design and the idea for the website. I’m very happy and pleased — thank you, he’s a great guy!”",
    "rev2.cite": "— Valentyna, passenger transport"
  },
  uk: {
    "nav.services": "Тарифи",
    "nav.cases": "Кейси",
    "nav.process": "Процес",
    "nav.contact": "Контакти",
    "nav.cta": "Зв'язатися",
    "hero.badge": "Беру нові проєкти",
    "hero.title": "Сайти, які <span class=\"grad\">приводять клієнтів</span>",
    "hero.text": "Я Євген (Jazzhe), веб-розробник з України, живу в Празі. Роблю сайти для тренерів, барберів і кав'ярень — і сам відповідаю на кожне повідомлення.",
    "hero.btn1": "Безкоштовний розрахунок →",
    "hero.btn2": "Мої роботи",
    "srv.tag": "Тарифи",
    "srv.title": "Оберіть тариф",
    "srv.sub": "Гортайте тарифи й тисніть «Замовити» — відповім протягом дня.",
    "promo.title": "🔥 Акція для перших клієнтів",
    "promo.text": "Ваш сайт всього за 2 000 Kč + 300 Kč за домен. Кількість місць обмежена!",
    "promo.domain": "+ 300 Kč домен",
    "s1.title": "Лендинг",
    "s1.text": "Одна сторінка, яка пояснює вашу пропозицію і перетворює відвідувачів на клієнтів.",
    "s2.title": "Сайт для бізнесу",
    "s2.text": "Сайт з кількома розділами: послуги, ціни, галерея, відгуки й контакти.",
    "s3.title": "Редизайн",
    "s3.text": "Ваш старий сайт отримає свіжий сучасний вигляд і чудово працюватиме на телефонах.",
    "price.first": "для перших клієнтів",
    "cases.tag": "Кейси",
    "cases.title": "Останні роботи",
    "cases.sub": "Реальні проєкти та концепти — гортайте, щоб побачити більше.",
    "case1.tag": "Фітнес",
    "case1.title": "Сайт для персонального тренера",
    "case1.text": "Сайт-візитка для залучення нових клієнтів: послуги, ціни та інтерактивний блок «результати клієнтів» зі слайдерами до/після.",
    "case1.btn": "Переглянути сайт ↗",
    "ba.before": "До",
    "ba.after": "Після",
    "concept": "Концепт",
    "case2.tag": "Кав'ярня",
    "case2.title": "Онлайн-кав'ярня",
    "case2.text": "Сайт для празької кав'ярні: меню з 23 позицій з фото, кошик, доставка або самовивіз з автоматичним розрахунком суми, версії CZ/EN.",
    "case3.tag": "Барбершоп",
    "case3.title": "Сайт для барбершопу",
    "case3.text": "Сайт для барбершопу на Жижкові: прайс, команда, галерея та онлайн-запис із вибором послуги, барбера, дня й вільного часу.",
    "case4.tag": "Велнес",
    "case4.title": "Сайт масажистки",
    "case4.text": "Односторінковий сайт для масажистки в Празі: послуги з цінами, часті питання, години роботи й готове повідомлення у WhatsApp для запису.",
    "soon": "Наступним може бути ваш проєкт — <a href=\"#contact\">напишіть мені</a>",
    "proc.tag": "Процес",
    "proc.title": "Як ми працюємо",
    "proc.sub": "Просто і прозоро — ви завжди знаєте, що відбувається.",
    "st1.t": "Бриф",
    "st1.p": "Ви розповідаєте про свій бізнес і цілі. Я надсилаю ціну й терміни.",
    "st2.t": "Дизайн",
    "st2.p": "Я створюю вигляд сайту, і ми доопрацьовуємо його, доки він вам не сподобається.",
    "st3.t": "Розробка",
    "st3.p": "Я роблю швидкий сайт, який ідеально працює на телефонах і комп'ютерах.",
    "st4.t": "Запуск",
    "st4.p": "Сайт запускається на вашому домені — і я допомагаю й після запуску.",
    "rev.text": "«Я фітнес-тренер, замовив у Євгена односторінковий сайт. Зробив усе: мої послуги, історію та результати клієнтів — усе гарно оформлено. Правок було багато — разів 5–7 казав Євгену щось поправити, і він усе вислухав, порадив, консультував без жодних питань і проблем. Робив усе, як я говорив, старався якісно та швидко — довели сайт до ідеалу. Розуміється на своїй справі, спілкуватися було приємно. Рекомендую: якщо потрібен односторінковий сайт для барбера, масажиста чи, як я, фітнес-тренера — спокійно звертайтеся. Зробить вам сайт, який буде приносити клієнтів.»",
    "rev.cite": "— Stanislav, персональний тренер",
    "contact.tag": "Контакти",
    "contact.title": "Створімо ваш <span class=\"accent\">сайт</span>",
    "contact.text": "Пишіть як другу — без офіційностей. Відповім протягом дня і безкоштовно порахую ціну.",
    "contact.prepay": "💳 Працюю за передоплатою 50% — решта після завершення сайту.",
    "footer.rights": "Усі права захищені.",
    "footer.made": "Зроблено з кавою в Празі ☕",
    "nav.about": "Про мене",
    "hero.hello": "Привіт!",
    "about.title": "Про мене",
    "about.aside": "(коротко, обіцяю)",
    "about.p1": "Мене звати Євген, в інтернеті — Jazzhe. Я з України, уже п’ять років живу в Празі. Навчаюсь на другому курсі напряму «IT та розробка ШІ» в Evropská akademie vzdělávání і роблю сайти для невеликого бізнесу.",
    "about.p2": "Працюю сам, тож ви спілкуєтесь напряму зі мною — без менеджерів і посередників. Пишіть українською, чеською, англійською чи російською, як вам зручніше.",
    "about.p3": "Я тільки починаю, тому кожен сайт для мене — це моя репутація. Довожу роботу до ідеалу: у мого першого клієнта було до 7 кіл правок, і я зробив усі.",
    "about.p4": "Поза кодом — спортзал, футбол і музика.",
    "about.sign": "— Євген",
    "rev.note": "що кажуть клієнти ↓",
    "plan.order": "Замовити",
    "plan.popular": "Найпопулярніший",
    "plan.sale": "Акція",
    "plan.domain": "+ 300 Kč домен",
    "p1.name": "Візитка",
    "p1.for": "Для фахівців: тренерів, масажистів, репетиторів",
    "p1.f1": "Одна сторінка: про вас, послуги, контакти",
    "p1.f2": "Гарно виглядає на телефоні",
    "p1.f3": "Кнопки WhatsApp і Telegram",
    "p1.f4": "Запуск на вашому домені",
    "p2.name": "Бізнес",
    "p2.for": "Для барбершопів, кав’ярень, студій і магазинів",
    "p2.f1": "Кілька розділів: послуги й ціни, галерея, відгуки",
    "p2.f2": "Мапа й години роботи",
    "p2.f3": "Базове налаштування під Google (SEO)",
    "p2.f4": "Кнопки месенджерів і запуск на домені",
    "p3.name": "Свій варіант",
    "p3.for": "Онлайн-запис, меню з кошиком, редизайн, кілька мов",
    "p3.price": "Індивідуально",
    "p3.priceSub": "безкоштовний розрахунок протягом дня",
    "p3.f1": "Онлайн-запис або замовлення",
    "p3.f2": "Редизайн вашого теперішнього сайту",
    "p3.f3": "Кілька мов",
    "p3.f4": "Розкажіть ідею — я надішлю ціну",
    "order.title": "Куди вам зручніше написати?",
    "order.plan": "Тариф",
    "order.msg": "Привіт! Хочу замовити тариф «{plan}». Розкажіть, будь ласка, детальніше.",
    "order.note": "У WhatsApp і пошті повідомлення підставиться саме. Для Telegram та Instagram воно скопіюється — просто вставте його в чат.",
    "order.copied": "Повідомлення скопійовано — вставте його в чат",
    "case5.tag": "Перевезення",
    "case5.title": "Сайт пасажирських перевезень",
    "case5.text": "Сайт для пасажирських перевезень Чехія — Словаччина — Закарпаття: розклад, схема маршруту, послуги, інформація про бус і швидкий зв’язок через Viber та WhatsApp. Реальна клієнтка, у її чорно-червоному стилі.",
    "nav.faq": "Питання",
    "hero.trust": "2 реальні клієнти · відповідаю протягом дня",
    "hero.shotCap": "Реальний проєкт: sukhomlyn-fitness.com",
    "fab": "Написати",
    "rev.more": "Читати повністю",
    "rev.less": "Згорнути",
    "order.any": "Новий проєкт",
    "order.msgAny": "Привіт! Хочу сайт. Можемо обговорити?",
    "faq.tag": "Питання",
    "faq.title": "Часті питання",
    "faq.q1": "Скільки часу займає сайт?",
    "faq.a1": "Залежить від тарифу й обсягу. Точний термін називаю разом із ціною, ще до початку роботи.",
    "faq.q2": "Що потрібно від мене?",
    "faq.a2": "Коротко про ваш бізнес, логотип (якщо є), фото й контакти. Якщо чогось немає — допоможу з текстами й підберу фото.",
    "faq.q3": "Чи можна вносити правки?",
    "faq.a3": "Так. Показую сайт до запуску й вношу правки, доки результат вам не сподобається.",
    "faq.q4": "Як відбувається оплата?",
    "faq.a4": "50% перед початком роботи, решта — коли сайт готовий. Домен (300 Kč) оплачується окремо.",
    "faq.q5": "Що буде після запуску?",
    "faq.a5": "Сайт працює на вашому домені. Якщо згодом треба щось змінити — просто напишіть, домовимось.",
    "rev2.text": "«Дуже дякую! Зробив швидко й завжди питав, що потрібно додати чи відредагувати. Допоміг підібрати дизайн та ідею сайту. Я дуже задоволена й радісна — дуже дякую йому, хороший хлопчик!»",
    "rev2.cite": "— Валентина, пасажирські перевезення"
  },
  cs: {
    "nav.services": "Tarify",
    "nav.cases": "Reference",
    "nav.process": "Postup",
    "nav.contact": "Kontakt",
    "nav.cta": "Napište mi",
    "hero.badge": "Přijímám nové projekty",
    "hero.title": "Weby, které <span class=\"grad\">přivádějí klienty</span>",
    "hero.text": "Jsem Jevhen (Jazzhe), webový vývojář z Ukrajiny, žiju v Praze. Dělám weby pro trenéry, barbery a kavárny — a na každou zprávu odpovídám osobně.",
    "hero.btn1": "Kalkulace zdarma →",
    "hero.btn2": "Moje práce",
    "srv.tag": "Tarify",
    "srv.title": "Vyberte si tarif",
    "srv.sub": "Prolistujte tarify a klikněte na „Objednat“ — odpovím do druhého dne.",
    "promo.title": "🔥 Akce pro první klienty",
    "promo.text": "Váš web jen za 2 000 Kč + 300 Kč za doménu. Omezený počet míst!",
    "promo.domain": "+ 300 Kč doména",
    "s1.title": "Landing page",
    "s1.text": "Jedna stránka, která představí vaši nabídku a promění návštěvníky v klienty.",
    "s2.title": "Firemní web",
    "s2.text": "Web s více sekcemi: služby, ceny, galerie, recenze a kontakty.",
    "s3.title": "Redesign",
    "s3.text": "Váš starý web dostane svěží moderní vzhled a bude skvěle fungovat na mobilu.",
    "price.first": "pro první klienty",
    "cases.tag": "Reference",
    "cases.title": "Nedávné projekty",
    "cases.sub": "Skutečné projekty a koncepty — listujte a uvidíte víc.",
    "case1.tag": "Fitness",
    "case1.title": "Web pro osobního trenéra",
    "case1.text": "Webová vizitka pro získání nových klientů: služby, ceny a interaktivní blok „výsledky klientů“ s posuvníky před/po.",
    "case1.btn": "Zobrazit web ↗",
    "ba.before": "Před",
    "ba.after": "Po",
    "concept": "Koncept",
    "case2.tag": "Kavárna",
    "case2.title": "Online kavárna",
    "case2.text": "Web pro pražskou kavárnu: menu s 23 položkami a fotkami, košík, rozvoz nebo vyzvednutí s automatickým výpočtem ceny a verze CZ/EN.",
    "case3.tag": "Barbershop",
    "case3.title": "Web pro barbershop",
    "case3.text": "Web pro barbershop na Žižkově: ceník, tým, galerie a online rezervace s výběrem služby, barbera, dne a volného času.",
    "case4.tag": "Wellness",
    "case4.title": "Web pro masérku",
    "case4.text": "Jednostránkový web pro masérku v Praze: služby s cenami, časté otázky, otevírací doba a předvyplněná zpráva na WhatsApp pro objednání.",
    "soon": "Váš projekt může být další — <a href=\"#contact\">ozvěte se</a>",
    "proc.tag": "Postup",
    "proc.title": "Jak spolupracujeme",
    "proc.sub": "Jednoduše a transparentně — vždy víte, co se děje.",
    "st1.t": "Zadání",
    "st1.p": "Řeknete mi o svém podnikání a cílech. Pošlu vám cenu a termín.",
    "st2.t": "Design",
    "st2.p": "Navrhnu vzhled webu a upravujeme ho, dokud nebudete spokojeni.",
    "st3.t": "Vývoj",
    "st3.p": "Vytvořím rychlý web, který perfektně funguje na mobilu i počítači.",
    "st4.t": "Spuštění",
    "st4.p": "Web spustím na vaší doméně — a pomohu i po spuštění.",
    "rev.text": "„Jsem fitness trenér a objednal jsem si u Jevhena jednostránkový web. Udělal všechno: moje služby, můj příběh a výsledky klientů — vše krásně zpracované. Úprav bylo hodně — asi 5–7krát jsem ho žádal o změnu a on vše vyslechl, poradil a konzultoval bez jakýchkoli problémů. Dělal vše tak, jak jsem chtěl, kvalitně a rychle — společně jsme web dotáhli k dokonalosti. Rozumí své práci a komunikace s ním byla příjemná. Doporučuji: pokud potřebujete jednostránkový web pro barbera, maséra nebo trenéra jako já — klidně se na něj obraťte. Udělá vám web, který přivede klienty.“",
    "rev.cite": "— Stanislav, osobní trenér",
    "contact.tag": "Kontakt",
    "contact.title": "Vytvořme váš <span class=\"accent\">web</span>",
    "contact.text": "Napište mi klidně jako kamarádovi, bez formalit. Do druhého dne odpovím a zdarma spočítám cenu.",
    "contact.prepay": "💳 Pracuji se zálohou 50 % — zbytek po dokončení webu.",
    "footer.rights": "Všechna práva vyhrazena.",
    "footer.made": "Vyrobeno s kávou v Praze ☕",
    "nav.about": "O mně",
    "hero.hello": "Ahoj!",
    "about.title": "O mně",
    "about.aside": "(stručně, slibuju)",
    "about.p1": "Jmenuju se Jevhen, na internetu Jazzhe. Jsem z Ukrajiny a pět let žiju v Praze. Studuju druhý ročník oboru IT a vývoj AI na Evropské akademii vzdělávání a dělám weby pro malé firmy.",
    "about.p2": "Pracuju sám, takže komunikujete přímo se mnou: žádní manažeři ani prostředníci. Pište česky, ukrajinsky, anglicky nebo rusky, jak je vám to příjemnější.",
    "about.p3": "Teprve začínám, takže každý web je moje reputace. Dělám ho, dokud není dokonalý: můj první klient chtěl až 7 kol úprav a udělal jsem všechny.",
    "about.p4": "Mimo kód: posilovna, fotbal a hudba.",
    "about.sign": "— Jevhen",
    "rev.note": "co říkají klienti ↓",
    "plan.order": "Objednat",
    "plan.popular": "Nejoblíbenější",
    "plan.sale": "Akce",
    "plan.domain": "+ 300 Kč doména",
    "p1.name": "Vizitka",
    "p1.for": "Pro specialisty: trenéry, maséry, lektory",
    "p1.f1": "Jedna stránka: o vás, služby, kontakty",
    "p1.f2": "Skvěle vypadá na mobilu",
    "p1.f3": "Tlačítka WhatsApp a Telegram",
    "p1.f4": "Spuštění na vaší doméně",
    "p2.name": "Business",
    "p2.for": "Pro barbershopy, kavárny, studia a obchody",
    "p2.f1": "Více sekcí: služby a ceny, galerie, recenze",
    "p2.f2": "Mapa a otevírací doba",
    "p2.f3": "Základní nastavení pro Google (SEO)",
    "p2.f4": "Tlačítka messengerů a spuštění na doméně",
    "p3.name": "Na míru",
    "p3.for": "Online rezervace, menu s košíkem, redesign, více jazyků",
    "p3.price": "Individuálně",
    "p3.priceSub": "kalkulace zdarma do druhého dne",
    "p3.f1": "Online rezervace nebo objednávky",
    "p3.f2": "Redesign vašeho současného webu",
    "p3.f3": "Více jazyků",
    "p3.f4": "Popíšete nápad — pošlu cenu",
    "order.title": "Kam mi chcete napsat?",
    "order.plan": "Tarif",
    "order.msg": "Dobrý den! Mám zájem o tarif „{plan}“. Můžete mi napsat víc?",
    "order.note": "Ve WhatsAppu a e-mailu se zpráva vyplní sama. Pro Telegram a Instagram se zkopíruje — stačí ji vložit do chatu.",
    "order.copied": "Zpráva zkopírována — vložte ji do chatu",
    "case5.tag": "Doprava",
    "case5.title": "Web osobní dopravy",
    "case5.text": "Web pro osobní dopravu Česko — Slovensko — Zakarpatí: jízdní řád, mapa trasy, služby, informace o vozidle a rychlý kontakt přes Viber a WhatsApp. Skutečná klientka, v jejím černo-červeném stylu.",
    "nav.faq": "Otázky",
    "hero.trust": "2 skuteční klienti · odpovídám do druhého dne",
    "hero.shotCap": "Skutečný projekt: sukhomlyn-fitness.com",
    "fab": "Napsat",
    "rev.more": "Číst celé",
    "rev.less": "Sbalit",
    "order.any": "Nový projekt",
    "order.msgAny": "Dobrý den! Mám zájem o web. Můžeme to probrat?",
    "faq.tag": "Otázky",
    "faq.title": "Časté otázky",
    "faq.q1": "Jak dlouho trvá výroba webu?",
    "faq.a1": "Záleží na tarifu a rozsahu. Přesný termín vám řeknu spolu s cenou, ještě před začátkem práce.",
    "faq.q2": "Co od vás budu potřebovat?",
    "faq.a2": "Pár slov o vašem podnikání, logo (pokud ho máte), fotky a kontakty. Když něco chybí, pomůžu s texty a vyberu vhodné fotky.",
    "faq.q3": "Můžu chtít úpravy?",
    "faq.a3": "Ano. Web vám ukážu před spuštěním a upravuji ho, dokud nejste spokojeni.",
    "faq.q4": "Jak probíhá platba?",
    "faq.a4": "50 % před začátkem práce, zbytek po dokončení webu. Doména (300 Kč) se platí zvlášť.",
    "faq.q5": "Co bude po spuštění?",
    "faq.a5": "Web běží na vaší doméně. Když budete později chtít něco změnit, stačí napsat a domluvíme se.",
    "rev2.text": "„Moc děkuju! Udělal to rychle a pořád se ptal, co přidat nebo upravit. Pomohl mi vybrat design i nápad na web. Jsem moc spokojená a mám radost — moc mu děkuju, šikovný kluk!“",
    "rev2.cite": "— Valentyna, osobní doprava"
  },
  ru: {
    "nav.services": "Тарифы",
    "nav.cases": "Кейсы",
    "nav.process": "Процесс",
    "nav.contact": "Контакты",
    "nav.cta": "Связаться",
    "hero.badge": "Беру новые проекты",
    "hero.title": "Сайты, которые <span class=\"grad\">приводят клиентов</span>",
    "hero.text": "Я Евгений (Jazzhe), веб-разработчик из Украины, живу в Праге. Делаю сайты для тренеров, барберов и кофеен — и сам отвечаю на каждое сообщение.",
    "hero.btn1": "Бесплатный расчёт →",
    "hero.btn2": "Мои работы",
    "srv.tag": "Тарифы",
    "srv.title": "Выберите тариф",
    "srv.sub": "Листайте тарифы и нажимайте «Заказать» — отвечу в течение дня.",
    "promo.title": "🔥 Акция для первых клиентов",
    "promo.text": "Ваш сайт всего за 2 000 Kč + 300 Kč за домен. Количество мест ограничено!",
    "promo.domain": "+ 300 Kč домен",
    "s1.title": "Лендинг",
    "s1.text": "Одна страница, которая объясняет ваше предложение и превращает посетителей в клиентов.",
    "s2.title": "Сайт для бизнеса",
    "s2.text": "Сайт с несколькими разделами: услуги, цены, галерея, отзывы и контакты.",
    "s3.title": "Редизайн",
    "s3.text": "Ваш старый сайт получит свежий современный вид и будет отлично работать на телефонах.",
    "price.first": "для первых клиентов",
    "cases.tag": "Кейсы",
    "cases.title": "Последние работы",
    "cases.sub": "Реальные проекты и концепты — листайте, чтобы увидеть больше.",
    "case1.tag": "Фитнес",
    "case1.title": "Сайт для персонального тренера",
    "case1.text": "Сайт-визитка для привлечения новых клиентов: услуги, цены и интерактивный блок «результаты клиентов» со слайдерами до/после.",
    "case1.btn": "Посмотреть сайт ↗",
    "ba.before": "До",
    "ba.after": "После",
    "concept": "Концепт",
    "case2.tag": "Кофейня",
    "case2.title": "Онлайн-кофейня",
    "case2.text": "Сайт для пражской кофейни: меню из 23 позиций с фото, корзина, доставка или самовывоз с автоматическим расчётом суммы, версии CZ/EN.",
    "case3.tag": "Барбершоп",
    "case3.title": "Сайт для барбершопа",
    "case3.text": "Сайт для барбершопа на Жижкове: прайс, команда, галерея и онлайн-запись с выбором услуги, барбера, дня и свободного времени.",
    "case4.tag": "Велнес",
    "case4.title": "Сайт массажистки",
    "case4.text": "Одностраничный сайт для массажистки в Праге: услуги с ценами, частые вопросы, часы работы и готовое сообщение в WhatsApp для записи.",
    "soon": "Следующим может быть ваш проект — <a href=\"#contact\">напишите мне</a>",
    "proc.tag": "Процесс",
    "proc.title": "Как мы работаем",
    "proc.sub": "Просто и прозрачно — вы всегда знаете, что происходит.",
    "st1.t": "Бриф",
    "st1.p": "Вы рассказываете о своём бизнесе и целях. Я отправляю цену и сроки.",
    "st2.t": "Дизайн",
    "st2.p": "Я создаю внешний вид сайта, и мы дорабатываем его, пока он вам не понравится.",
    "st3.t": "Разработка",
    "st3.p": "Я делаю быстрый сайт, который идеально работает на телефонах и компьютерах.",
    "st4.t": "Запуск",
    "st4.p": "Сайт запускается на вашем домене — и я помогаю и после запуска.",
    "rev.text": "«Я фитнес-тренер, заказал у Евгения одностраничный сайт. Сделал всё: мои услуги, историю и результаты клиентов — всё красиво оформлено. Правок было много — раз 5–7 просил Евгения что-то поправить, и он всё выслушал, посоветовал, консультировал без каких-либо вопросов и проблем. Делал всё, как я говорил, старался качественно и быстро — довели сайт до идеала. Разбирается в своём деле, общаться было приятно. Рекомендую: если нужен одностраничный сайт для барбера, массажиста или, как я, фитнес-тренера — смело обращайтесь. Сделает вам сайт, который будет приносить клиентов.»",
    "rev.cite": "— Stanislav, персональный тренер",
    "contact.tag": "Контакты",
    "contact.title": "Создадим ваш <span class=\"accent\">сайт</span>",
    "contact.text": "Пишите как другу — без официоза. Отвечу в течение дня и бесплатно посчитаю цену.",
    "contact.prepay": "💳 Работаю по предоплате 50% — остальное после завершения сайта.",
    "footer.rights": "Все права защищены.",
    "footer.made": "Сделано с кофе в Праге ☕",
    "nav.about": "Обо мне",
    "hero.hello": "Привет!",
    "about.title": "Обо мне",
    "about.aside": "(коротко, обещаю)",
    "about.p1": "Меня зовут Евгений, в интернете — Jazzhe. Я из Украины, уже пять лет живу в Праге. Учусь на втором курсе направления «IT и разработка ИИ» в Evropská akademie vzdělávání и делаю сайты для небольшого бизнеса.",
    "about.p2": "Работаю сам, поэтому вы общаетесь напрямую со мной — без менеджеров и посредников. Пишите на украинском, чешском, английском или русском, как вам удобнее.",
    "about.p3": "Я только начинаю, поэтому каждый сайт для меня — это моя репутация. Довожу работу до идеала: у моего первого клиента было до 7 кругов правок, и я сделал все.",
    "about.p4": "Вне кода — спортзал, футбол и музыка.",
    "about.sign": "— Евгений",
    "rev.note": "что говорят клиенты ↓",
    "plan.order": "Заказать",
    "plan.popular": "Самый популярный",
    "plan.sale": "Акция",
    "plan.domain": "+ 300 Kč домен",
    "p1.name": "Визитка",
    "p1.for": "Для специалистов: тренеров, массажистов, репетиторов",
    "p1.f1": "Одна страница: о вас, услуги, контакты",
    "p1.f2": "Отлично выглядит на телефоне",
    "p1.f3": "Кнопки WhatsApp и Telegram",
    "p1.f4": "Запуск на вашем домене",
    "p2.name": "Бизнес",
    "p2.for": "Для барбершопов, кофеен, студий и магазинов",
    "p2.f1": "Несколько разделов: услуги и цены, галерея, отзывы",
    "p2.f2": "Карта и часы работы",
    "p2.f3": "Базовая настройка под Google (SEO)",
    "p2.f4": "Кнопки мессенджеров и запуск на домене",
    "p3.name": "Свой вариант",
    "p3.for": "Онлайн-запись, меню с корзиной, редизайн, несколько языков",
    "p3.price": "Индивидуально",
    "p3.priceSub": "бесплатный расчёт в течение дня",
    "p3.f1": "Онлайн-запись или заказы",
    "p3.f2": "Редизайн вашего текущего сайта",
    "p3.f3": "Несколько языков",
    "p3.f4": "Расскажите идею — пришлю цену",
    "order.title": "Куда вам удобнее написать?",
    "order.plan": "Тариф",
    "order.msg": "Привет! Хочу заказать тариф «{plan}». Расскажите, пожалуйста, подробнее.",
    "order.note": "В WhatsApp и почте сообщение подставится само. Для Telegram и Instagram оно скопируется — просто вставьте его в чат.",
    "order.copied": "Сообщение скопировано — вставьте его в чат",
    "case5.tag": "Перевозки",
    "case5.title": "Сайт пассажирских перевозок",
    "case5.text": "Сайт для пассажирских перевозок Чехия — Словакия — Закарпатье: расписание, схема маршрута, услуги, информация о бусе и быстрая связь через Viber и WhatsApp. Реальная клиентка, в её чёрно-красном стиле.",
    "nav.faq": "Вопросы",
    "hero.trust": "2 реальных клиента · отвечаю в течение дня",
    "hero.shotCap": "Реальный проект: sukhomlyn-fitness.com",
    "fab": "Написать",
    "rev.more": "Читать полностью",
    "rev.less": "Свернуть",
    "order.any": "Новый проект",
    "order.msgAny": "Привет! Хочу сайт. Можем обсудить?",
    "faq.tag": "Вопросы",
    "faq.title": "Частые вопросы",
    "faq.q1": "Сколько времени занимает сайт?",
    "faq.a1": "Зависит от тарифа и объёма. Точный срок называю вместе с ценой, ещё до начала работы.",
    "faq.q2": "Что нужно от меня?",
    "faq.a2": "Коротко о вашем бизнесе, логотип (если есть), фото и контакты. Если чего-то нет — помогу с текстами и подберу фото.",
    "faq.q3": "Можно ли вносить правки?",
    "faq.a3": "Да. Показываю сайт до запуска и вношу правки, пока результат вам не понравится.",
    "faq.q4": "Как происходит оплата?",
    "faq.a4": "50% перед началом работы, остальное — когда сайт готов. Домен (300 Kč) оплачивается отдельно.",
    "faq.q5": "Что будет после запуска?",
    "faq.a5": "Сайт работает на вашем домене. Если позже нужно что-то изменить — просто напишите, договоримся.",
    "rev2.text": "«Большое спасибо! Сделал быстро и всегда спрашивал, что нужно добавить или отредактировать. Помог подобрать дизайн и идею сайта. Я очень довольна и рада — большое ему спасибо, хороший мальчик!»",
    "rev2.cite": "— Валентина, пассажирские перевозки"
  }
};

function setLang(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-menu button').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
  // Запам'ятовуємо вибір мови (якщо браузер дозволяє)
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

// Відкрити/закрити меню мов
const langBox = document.getElementById('lang');
document.getElementById('langBtn').addEventListener('click', e => {
  e.stopPropagation();
  langBox.classList.toggle('open');
});
document.querySelectorAll('.lang-menu button').forEach(b =>
  b.addEventListener('click', () => { setLang(b.dataset.lang); langBox.classList.remove('open'); })
);
document.addEventListener('click', e => {
  if (!langBox.contains(e.target)) langBox.classList.remove('open');
});

// Мова при завантаженні: збережена → мова браузера → англійська
function detectLang() {
  const langs = navigator.languages || [navigator.language || 'en'];
  for (const l of langs) {
    const code = l.toLowerCase().slice(0, 2);
    if (code === 'cs' || code === 'sk') return 'cs';
    if (code === 'uk') return 'uk';
    if (code === 'ru') return 'ru';
    if (code === 'en') return 'en';
  }
  return 'en';
}
let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) {}
setLang(savedLang || detectLang());

// Рік у футері
document.getElementById('year').textContent = new Date().getFullYear();

// Рамка шапки при скролі
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Мобільне меню
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
function setMenu(open) {
  navLinks.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
}
burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => setMenu(false))
);
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Поява блоків при скролі
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Слайдери до/після (працюють для всіх кейсів)
document.querySelectorAll('.ba').forEach(ba => {
  const after = ba.querySelector('.ba-after');
  const line = ba.querySelector('.ba-line');
  let dragging = false;

  function moveSlider(clientX) {
    const rect = ba.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    line.style.left = pct + '%';
  }
  ba.addEventListener('pointerdown', e => { dragging = true; ba.setPointerCapture(e.pointerId); moveSlider(e.clientX); });
  ba.addEventListener('pointermove', e => { if (dragging) moveSlider(e.clientX); });
  ba.addEventListener('pointerup', () => dragging = false);
  ba.addEventListener('pointercancel', () => dragging = false);
});

// Живі превʼю: підганяємо розмір сторінки під віконце
document.querySelectorAll('.live').forEach(box => {
  const fr = box.querySelector('iframe');
  const fit = () => { fr.style.transform = `scale(${box.clientWidth / box.dataset.w})`; };
  new ResizeObserver(fit).observe(box); fit();
});

// Карусель кейсів
const track = document.getElementById('casesTrack');
const slides = track.children;
const dotsBox = document.getElementById('casesDots');
let current = 0;

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('button');
  dot.className = 'dot-btn';
  dot.setAttribute('aria-label', 'Case ' + (i + 1));
  dot.addEventListener('click', () => goTo(i));
  dotsBox.appendChild(dot);
}

function goTo(i) {
  current = (i + slides.length) % slides.length; // по колу
  track.style.transform = `translateX(-${current * 100}%)`;
  dotsBox.querySelectorAll('.dot-btn').forEach((d, n) => d.classList.toggle('active', n === current));
}
document.getElementById('casesPrev').addEventListener('click', () => goTo(current - 1));
document.getElementById('casesNext').addEventListener('click', () => goTo(current + 1));
goTo(0);

// Свайп на телефоні (крім самого слайдера до/після)
const viewport = document.getElementById('casesViewport');
let startX = null;
viewport.addEventListener('touchstart', e => {
  startX = e.target.closest('.ba') ? null : e.touches[0].clientX;
}, { passive: true });
viewport.addEventListener('touchend', e => {
  if (startX === null) return;
  const diff = e.changedTouches[0].clientX - startX;
  if (Math.abs(diff) > 50) goTo(current + (diff < 0 ? 1 : -1));
  startX = null;
});

// ===== Тарифи: гортання стрілками й крапки =====
const plans = document.getElementById('plans');
const planCards = [...plans.children];
const plansDots = document.getElementById('plansDots');
planCards.forEach((c, i) => {
  const d = document.createElement('button');
  d.className = 'dot-btn'; d.setAttribute('aria-label', 'Tariff ' + (i + 1));
  d.addEventListener('click', () => plans.scrollTo({ left: c.offsetLeft - plans.offsetLeft, behavior: 'smooth' }));
  plansDots.appendChild(d);
});
function planIndex() {
  let best = 0, dist = Infinity;
  planCards.forEach((c, i) => { const dd = Math.abs(c.offsetLeft - plans.offsetLeft - plans.scrollLeft); if (dd < dist) { dist = dd; best = i; } });
  return best;
}
function markPlanDot() { const k = planIndex(); plansDots.querySelectorAll('.dot-btn').forEach((d, n) => d.classList.toggle('active', n === k)); }
plans.addEventListener('scroll', () => requestAnimationFrame(markPlanDot), { passive: true });
const stepPlan = dir => { const k = Math.max(0, Math.min(planCards.length - 1, planIndex() + dir)); plans.scrollTo({ left: planCards[k].offsetLeft - plans.offsetLeft, behavior: 'smooth' }); };
document.getElementById('plansPrev').addEventListener('click', () => stepPlan(-1));
document.getElementById('plansNext').addEventListener('click', () => stepPlan(1));
markPlanDot();

// ===== Міні-меню «Замовити» =====
const order = document.getElementById('order');
let orderText = '', lastOrderBtn = null;
function currentDict() { return translations[document.documentElement.lang] || translations.en; }
function openOrder(pid) {
  const t = currentDict();
  const general = pid === 'any';
  const planName = general ? '' : t[pid + '.name'];
  orderText = general ? t['order.msgAny'] : t['order.msg'].replace('{plan}', planName);
  document.getElementById('orderPlan').textContent = general ? t['order.any'] : t['order.plan'] + ': ' + planName;
  document.getElementById('orderMsg').textContent = orderText;
  const enc = encodeURIComponent(orderText);
  document.getElementById('oWa').href = 'https://wa.me/420778583552?text=' + enc;
  document.getElementById('oTg').href = 'https://t.me/sasaimne';
  document.getElementById('oIg').href = 'https://ig.me/m/evhanjazzhe';
  document.getElementById('oEm').href = 'mailto:zenka683@gmail.com?subject=' + encodeURIComponent(general ? 'Jazzhe — web' : t['order.plan'] + ': ' + planName) + '&body=' + enc;
  order.hidden = false;
  document.getElementById('orderClose').focus();
}
function closeOrder() { order.hidden = true; if (lastOrderBtn) lastOrderBtn.focus(); }
document.addEventListener('click', e => {
  const b = e.target.closest('[data-order]'); if (!b) return;
  lastOrderBtn = b; openOrder(b.dataset.order);
});
document.getElementById('orderClose').addEventListener('click', closeOrder);
order.addEventListener('click', e => { if (e.target === order) closeOrder(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !order.hidden) closeOrder(); });
// Відгук: розгорнути / згорнути
// Усі відгуки обрізаються однаково; кнопка видна, лише коли текст не вміщується
function fitReviews() {
  document.querySelectorAll('.review').forEach(r => {
    const q = r.querySelector('blockquote'), btn = r.querySelector('.more');
    if (!btn || !q.classList.contains('clamped')) return;
    btn.hidden = q.scrollHeight <= q.clientHeight + 2;
  });
}
document.querySelectorAll('.review .more').forEach(btn => btn.addEventListener('click', () => {
  const q = btn.parentElement.querySelector('blockquote');
  const open = q.classList.toggle('clamped') === false;
  btn.textContent = currentDict()[open ? 'rev.less' : 'rev.more'];
}));
fitReviews();
window.addEventListener('resize', fitReviews);
document.querySelectorAll('.lang-menu button').forEach(b => b.addEventListener('click', () => setTimeout(fitReviews, 50)));
// Telegram та Instagram не вміють підставити текст — копіюємо його, щоб людина вставила в чат
let toastTimer;
function toast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2800); }
order.querySelectorAll('[data-copy]').forEach(a => a.addEventListener('click', () => {
  try { navigator.clipboard.writeText(orderText).then(() => toast(currentDict()['order.copied'])).catch(() => {}); } catch (e) {}
}));
