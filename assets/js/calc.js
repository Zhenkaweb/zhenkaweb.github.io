(() => {
  const SUPABASE_URL = "https://qhivkctxmxzvtjkzlkko.supabase.co";
  const SUPABASE_KEY = "sb_publishable_UDhv6SRaNgSxKpAjNHHJdQ_esVljCa2"; // publishable key — публічний
  const WHATSAPP = "+420 778 583 552";

  const TARIFFS = { card: 2000, biz: 4000 };
  // [id, ціна, входить у Бізнес] — ті самі, що в My Work Space
  const ADDONS = [["gallery", 600, 1], ["carousel", 500, 1], ["form", 700, 1], ["price", 300, 1], ["faq", 400, 1], ["seo", 600, 1],
    ["beforeafter", 900], ["calc", 1200], ["anim", 500], ["texts", 800], ["photos", 400]];
  const LIMITS = { pages: 20, langs: 5 };

  const T = {
    uk: { tag: "Ціни", title: "Калькулятор вартості", sub: "Оберіть тариф і доповнення — ціна порахується одразу. Надішліть заявку, і я відповім протягом дня.",
      tariff: "Тариф", card: "Візитка", biz: "Бізнес", cardS: "1 сторінка · 14 днів підтримки", bizS: "До 5 сторінок · 30 днів підтримки", inc: "Що входить у",
      cardF: ["Адаптив для телефонів", "Послуги і прайс до 6 позицій", "WhatsApp / Telegram / дзвінок", "Соцмережі, контакти + карта", "3 відгуки, базове SEO, QR-код", "2 кола правок, 14 днів підтримки"],
      bizF: ["Усе з Візитки", "До 5 сторінок", "Галерея і відгуки каруселлю", "Форма заявки", "Повний прайс + FAQ, повне SEO", "30 днів підтримки"],
      addons: "Доповнення", addonsBiz: "Доповнення · перші 6 уже в тарифі", incl: "входить", extra: "Обсяг і терміни",
      pages: "Додаткові сторінки", pagesN: "800 Kč за сторінку", langs: "Додаткові мови", langsN: "700 Kč, далі по 500", urgent: "Терміново", urgentN: "+25% без домену", domain: "Домен",
      less: "менше", more: "більше", total: "Разом", prepay: "Передоплата 50% —", tip: "Тариф Бізнес з цими доповненнями дешевший на", tipSame: "Тариф Бізнес з цими доповненнями коштує стільки ж — і в ньому більше.", pick: "Обрати Бізнес",
      name: "Ваше ім'я", contact: "Телефон, email або Telegram", message: "Коментар (необов'язково)", send: "Надіслати заявку", sending: "Надсилаю…",
      ok: "Дякую! Заявку отримано — відповім протягом дня.", err: "Не вдалося надіслати. Напишіть мені в WhatsApp: ", need: "Вкажіть ім'я та контакт.", wait: "Заявку вже надіслано, зачекайте хвилинку.",
      a: { gallery: "Галерея", carousel: "Відгуки каруселлю", form: "Форма заявки", price: "Прайс понад 6 послуг", faq: "FAQ", seo: "Повне SEO", beforeafter: "Слайдер до/після", calc: "Калькулятор ціни", anim: "Анімації", texts: "Тексти", photos: "Підбір фото" } },
    cs: { tag: "Ceník", title: "Kalkulačka ceny", sub: "Vyberte balíček a doplňky – cena se spočítá hned. Pošlete poptávku a do druhého dne se vám ozvu.",
      tariff: "Balíček", card: "Vizitka", biz: "Business", cardS: "1 stránka · 14 dní podpory", bizS: "Až 5 stránek · 30 dní podpory", inc: "Co obsahuje",
      cardF: ["Responzivní pro mobily", "Služby a ceník do 6 položek", "WhatsApp / Telegram / hovor", "Sociální sítě, kontakty + mapa", "3 recenze, základní SEO, QR kód", "2 kola úprav, 14 dní podpory"],
      bizF: ["Vše z Vizitky", "Až 5 stránek", "Galerie a recenze v karuselu", "Poptávkový formulář", "Kompletní ceník + FAQ, kompletní SEO", "30 dní podpory"],
      addons: "Doplňky", addonsBiz: "Doplňky · prvních 6 je v ceně", incl: "v ceně", extra: "Rozsah a termín",
      pages: "Další stránky", pagesN: "800 Kč za stránku", langs: "Další jazyky", langsN: "700 Kč, pak po 500", urgent: "Expresně", urgentN: "+25 % bez domény", domain: "Doména",
      less: "méně", more: "více", total: "Celkem", prepay: "Záloha 50 % —", tip: "Balíček Business s těmito doplňky vyjde levněji o", tipSame: "Balíček Business s těmito doplňky stojí stejně – a obsahuje víc.", pick: "Vybrat Business",
      name: "Vaše jméno", contact: "Telefon, e-mail nebo Telegram", message: "Poznámka (nepovinné)", send: "Odeslat poptávku", sending: "Odesílám…",
      ok: "Děkuji! Poptávka dorazila – ozvu se do druhého dne.", err: "Odeslání se nepovedlo. Napište mi na WhatsApp: ", need: "Vyplňte jméno a kontakt.", wait: "Poptávka už byla odeslána, chvilku počkejte.",
      a: { gallery: "Galerie", carousel: "Recenze v karuselu", form: "Poptávkový formulář", price: "Ceník nad 6 služeb", faq: "FAQ", seo: "Kompletní SEO", beforeafter: "Slider před/po", calc: "Cenová kalkulačka", anim: "Animace", texts: "Texty", photos: "Výběr fotek" } },
    en: { tag: "Pricing", title: "Price calculator", sub: "Pick a package and add-ons — the price updates instantly. Send a request and I'll reply within a day.",
      tariff: "Package", card: "Business Card", biz: "Business", cardS: "1 page · 14 days support", bizS: "Up to 5 pages · 30 days support", inc: "What's included in",
      cardF: ["Mobile-friendly", "Services and up to 6 price items", "WhatsApp / Telegram / call", "Social links, contacts + map", "3 reviews, basic SEO, QR code", "2 revision rounds, 14 days support"],
      bizF: ["Everything in Business Card", "Up to 5 pages", "Gallery and reviews carousel", "Contact form", "Full price list + FAQ, full SEO", "30 days support"],
      addons: "Add-ons", addonsBiz: "Add-ons · first 6 are included", incl: "included", extra: "Scope and timing",
      pages: "Extra pages", pagesN: "800 Kč per page", langs: "Extra languages", langsN: "700 Kč, then 500 each", urgent: "Urgent", urgentN: "+25% excl. domain", domain: "Domain",
      less: "fewer", more: "more", total: "Total", prepay: "50% deposit —", tip: "The Business package with these add-ons is cheaper by", tipSame: "The Business package with these add-ons costs the same — and includes more.", pick: "Choose Business",
      name: "Your name", contact: "Phone, email or Telegram", message: "Comment (optional)", send: "Send request", sending: "Sending…",
      ok: "Thank you! Request received — I'll reply within a day.", err: "Couldn't send it. Message me on WhatsApp: ", need: "Please enter your name and contact.", wait: "Request already sent, please wait a minute.",
      a: { gallery: "Gallery", carousel: "Reviews carousel", form: "Contact form", price: "Price list over 6 services", faq: "FAQ", seo: "Full SEO", beforeafter: "Before/after slider", calc: "Price calculator", anim: "Animations", texts: "Copywriting", photos: "Photo selection" } },
    ru: { tag: "Цены", title: "Калькулятор стоимости", sub: "Выберите тариф и дополнения — цена посчитается сразу. Отправьте заявку, и я отвечу в течение дня.",
      tariff: "Тариф", card: "Визитка", biz: "Бизнес", cardS: "1 страница · 14 дней поддержки", bizS: "До 5 страниц · 30 дней поддержки", inc: "Что входит в",
      cardF: ["Адаптив для телефонов", "Услуги и прайс до 6 позиций", "WhatsApp / Telegram / звонок", "Соцсети, контакты + карта", "3 отзыва, базовое SEO, QR-код", "2 круга правок, 14 дней поддержки"],
      bizF: ["Всё из Визитки", "До 5 страниц", "Галерея и отзывы каруселью", "Форма заявки", "Полный прайс + FAQ, полное SEO", "30 дней поддержки"],
      addons: "Дополнения", addonsBiz: "Дополнения · первые 6 уже в тарифе", incl: "входит", extra: "Объём и сроки",
      pages: "Доп. страницы", pagesN: "800 Kč за страницу", langs: "Доп. языки", langsN: "700 Kč, далее по 500", urgent: "Срочно", urgentN: "+25% без домена", domain: "Домен",
      less: "меньше", more: "больше", total: "Итого", prepay: "Предоплата 50% —", tip: "Тариф Бизнес с этими дополнениями дешевле на", tipSame: "Тариф Бизнес с этими дополнениями стоит столько же — и в нём больше.", pick: "Выбрать Бизнес",
      name: "Ваше имя", contact: "Телефон, email или Telegram", message: "Комментарий (необязательно)", send: "Отправить заявку", sending: "Отправляю…",
      ok: "Спасибо! Заявка получена — отвечу в течение дня.", err: "Не удалось отправить. Напишите мне в WhatsApp: ", need: "Укажите имя и контакт.", wait: "Заявка уже отправлена, подождите минутку.",
      a: { gallery: "Галерея", carousel: "Отзывы каруселью", form: "Форма заявки", price: "Прайс более 6 услуг", faq: "FAQ", seo: "Полное SEO", beforeafter: "Слайдер до/после", calc: "Калькулятор цены", anim: "Анимации", texts: "Тексты", photos: "Подбор фото" } },
  };

  const root = document.getElementById("calc");
  const form = root.querySelector("form");
  const fresh = () => ({ tariff: "card", addons: [], pages: 0, langs: 0, urgent: false, domain: false });
  const state = fresh();
  const kc = (n) => n.toLocaleString("cs-CZ") + " Kč";
  const lang = () => (T[document.documentElement.lang] ? document.documentElement.lang : "en");

  function price(s) {
    const biz = s.tariff === "biz";
    const lines = [[s.tariff, TARIFFS[s.tariff]]];
    for (const [id, p, inBiz] of ADDONS) if (s.addons.includes(id) && !(biz && inBiz)) lines.push([id, p]);
    if (s.pages > 0) lines.push(["pages", s.pages * 800]);
    if (s.langs > 0) lines.push(["langs", 700 + (s.langs - 1) * 500]);
    let total = lines.reduce((a, l) => a + l[1], 0);
    if (s.urgent) { const u = Math.round(total * 0.25); lines.push(["urgent", u]); total += u; }
    if (s.domain) { lines.push(["domain", 300]); total += 300; }
    return { total, lines };
  }

  const checkRow = (t, name, value, label, priceText, checked, incl) => `<label class="jz-row ${incl ? "incl" : ""}"><span>${label}</span>
    <span class="p">${incl ? t.incl : priceText}</span><input type="checkbox" class="jz-check" name="${name}" ${value ? `value="${value}"` : ""} ${checked || incl ? "checked" : ""} ${incl ? "disabled" : ""}></label>`;
  const stepper = (t, name) => `<div class="jz-row" style="cursor:default"><span>${t[name]}<small>${t[name + "N"]}</small></span>
    <div class="jz-step"><button type="button" data-step="${name}" data-d="-1" aria-label="${t[name]}: ${t.less}">−</button><output id="jz-${name}">${state[name]}</output><button type="button" data-step="${name}" data-d="1" aria-label="${t[name]}: ${t.more}">+</button></div></div>`;

  function render() {
    const t = T[lang()], biz = state.tariff === "biz";
    root.querySelector(".jz-status").textContent = "";
    root.querySelectorAll("[data-jz]").forEach((el) => (el.textContent = t[el.dataset.jz]));
    root.querySelector(".jz-main").innerHTML = `
      <section class="jz-sec"><p class="jz-label">${t.tariff}</p>
        <div class="jz-seg" role="radiogroup" aria-label="${t.tariff}">${["card", "biz"].map((id) => `<label><input type="radio" name="tariff" value="${id}" ${state.tariff === id ? "checked" : ""}>
          <b>${t[id]}</b><span>${kc(TARIFFS[id])}</span><small>${t[id + "S"]}</small></label>`).join("")}</div>
        <details class="jz-inc"><summary>${t.inc} «${t[state.tariff]}»</summary><ul>${t[state.tariff + "F"].map((f) => `<li>${f}</li>`).join("")}</ul></details>
      </section>
      <section class="jz-sec"><p class="jz-label">${biz ? t.addonsBiz : t.addons}</p>
        <div class="jz-rows">${ADDONS.map(([id, p, inBiz]) => checkRow(t, "addon", id, t.a[id], "+" + kc(p), state.addons.includes(id), biz && inBiz)).join("")}</div>
      </section>
      <section class="jz-sec"><p class="jz-label">${t.extra}</p>
        <div class="jz-rows">${stepper(t, "pages")}${stepper(t, "langs")}
          ${checkRow(t, "urgent", "", t.urgent, t.urgentN, state.urgent)}${checkRow(t, "domain", "", t.domain, "+300 Kč", state.domain)}</div>
      </section>`;
    renderTotal();
  }

  function renderTotal() {
    const t = T[lang()], r = price(state);
    const label = (id) => t[id] || t.a[id] || "";
    root.querySelector(".jz-lines").innerHTML = r.lines.map(([id, p]) => `<div><span>${label(id)}${id === "pages" ? " × " + state.pages : id === "langs" ? " × " + state.langs : ""}</span><span>${kc(p)}</span></div>`).join("");
    root.querySelector(".jz-total").textContent = kc(r.total);
    root.querySelector(".jz-total2").textContent = kc(r.total);
    root.querySelector(".jz-prepay").textContent = t.prepay + " " + kc(Math.round(r.total / 2));
    const tip = root.querySelector(".jz-tip");
    const diff = state.tariff === "card" ? r.total - price({ ...state, tariff: "biz" }).total : -1;
    tip.hidden = diff < 0;
    if (diff >= 0) tip.innerHTML = `${diff > 0 ? `${t.tip} <strong>${kc(diff)}</strong>.` : t.tipSame}<button type="button" data-biz>${t.pick}</button>`;
  }

  form.addEventListener("change", (e) => {
    const n = e.target.name;
    if (n === "tariff") { state.tariff = e.target.value; return render(); }
    // включені в Бізнес (disabled) не чіпаємо — вибір збережеться при поверненні на Візитку
    if (n === "addon") state.addons = e.target.checked ? [...new Set([...state.addons, e.target.value])] : state.addons.filter((a) => a !== e.target.value);
    if (n === "urgent" || n === "domain") state[n] = e.target.checked;
    if (["addon", "urgent", "domain"].includes(n)) renderTotal();
  });

  form.addEventListener("click", (e) => {
    if (e.target.closest("[data-biz]")) { state.tariff = "biz"; return render(); }
    const b = e.target.closest("[data-step]");
    if (!b) return;
    const k = b.dataset.step;
    state[k] = Math.min(LIMITS[k], Math.max(0, state[k] + +b.dataset.d));
    root.querySelector("#jz-" + k).textContent = state[k];
    renderTotal();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const t = T[lang()], status = root.querySelector(".jz-status"), btn = form.querySelector(".jz-btn");
    const show = (msg, err) => { status.textContent = msg; status.classList.toggle("err", !!err); };
    const f = form.elements; // не form.name: це назва самої форми
    const name = f.name.value.trim(), contact = f.contact.value.trim(), message = f.message.value.trim();
    if (!name || contact.length < 3) return show(t.need, true);
    if (f.website.value) return show(t.ok); // бот заповнив пастку — вдаємо успіх, нічого не шлемо
    try { if (Date.now() - (+localStorage.getItem("jz-sent") || 0) < 60000) return show(t.wait, true); } catch {}
    btn.disabled = true; btn.textContent = t.sending; show("");
    try {
      const headers = { apikey: SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" };
      if (SUPABASE_KEY.startsWith("eyJ")) headers.Authorization = "Bearer " + SUPABASE_KEY; // старий anon key (JWT)
      const res = await fetch(SUPABASE_URL + "/rest/v1/requests", { method: "POST", headers, body: JSON.stringify({ name, contact, message: message || null, calc: state, lang: lang() }) });
      if (!res.ok) throw new Error(res.status);
      try { localStorage.setItem("jz-sent", Date.now()); } catch {}
      form.reset(); Object.assign(state, fresh()); render();
      show(t.ok);
    } catch {
      show(t.err + WHATSAPP, true);
    } finally {
      btn.disabled = false; btn.textContent = t.send;
    }
  });

  // Сайт перемикає мову через <html lang> — підхоплюємо це
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  render();
})();
