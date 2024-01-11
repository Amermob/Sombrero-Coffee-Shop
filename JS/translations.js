const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  sessionStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = sessionStorage.getItem("lang") || "en";
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

const translations = {
  en: {
    /////////////////////////////////////////////////nav
    home: "Home",
    whoare: "who we are?",
    menu: "menu",
    events: "events",
    delivery: "delivery options",
    gallery: "our gallery",
    servies: "our services",
    find: "find us",
    en: "English",
    ar: "Arabic",
    ///////////////////////////////////////////////////nav

    /////////////////////////////////////////////////// landing
    SombreroLanding: "Sombrero",
    brighten: "will brighten your day",
    sombrero: "Sombrero",
    whoWeAre: "who we are?",
    sombrero_means: "sombrero is a latin word which means",
    sombrero_suadi:
      "sombrero is a specialty saudi owned coffee shop which porvides only the best top quality of pure colombian coffee",
    /////////////////////////////////////////////////// landing

    ///////////////////////////////////////////////////// events
    // events: "Events",
    business: "for business and inquiries:",
    Preferred: "Please Choose Your Preferred Option:",
    ice: "Select An Ice Cream Machine:",
    coffeeMachine: "Select A Coffee Machine:",
    requesT: "request an ice cream machine:",
    requestCoffee: "request a coffee machine:",
    name: "name:",
    email: "email:",
    phoneNumber: "phone number:",
    representative: "representative:",
    locationRequest: "location:",
    eventTime: "event perioud from:",
    to: "to:",

    howManyEmployees: "how many employees:",
    eventPerioudFrom: "event perioud from:",
    to: "to:",
    forMoreInfo: "For More Information Please Let Us Know:",
    collaboration: "in collaboration with:",

    ///////////////////////////////////////////////////// events

    //////////////////////////////////////////////////// delivery

    deliveryOption: "delivery option",
    sombreroPRovide: "sombrero porvides Different delivery options which are:",

    //////////////////////////////////////////////////// delivery

    ///////////////////////////////////////////////////// gallery

    SombreroGallery: "Sombrero gallery",

    ///////////////////////////////////////////////////// gallery

    ///////////////////////////////////////////////////////servies
    ourServies: "our servies",

    ///////////////////////////////////////////////////////servies

    ///////////////////////////////////////////////////// find us
    findUs: "find us at",

    location:
      "location: Address: 4086 Prince Muhammad Ibn Abd Al Aziz, As Sulimaniyah, Riyadh 12242",
    Phone: "Phone: 050 295 0376",
    ourSocials: "our Socials:",

    ///////////////////////////////////////////////////// find us

    //////////////////////////////////////////////////////// footer

    workingHours: "working hours",
    StT: "saturday to thursday",
    friday: "friday",
    reserved: "all rights reserved to sombrero 2020 ©",
    //////////////////////////////////////////////////////// footer
  },
  ar: {
    ///////////////////////////////////////////////////nav
    home: "الصفحة الرئيسية",
    whoare: "من نحن؟",
    menu: " قائمة الطعام",
    events: "فعاليات",
    delivery: " طرق التوصيل",
    gallery: "معرض الصور",
    servies: "الخدمات التي نوفرها",
    find: "اين يمكنم العثور علينا",
    en: "الانجليزية",
    ar: "العربية",
    //////////////////////////////////////////////// nav
    /////////////////////////////////////////////////// landing
    SombreroLanding: "Sombrero",
    brighten: "will brighten your day",
    sombrero: "سومبريرو",
    sombrero_means: "سومبريرو هي كلمة لاتينيه معناتها",
    sombrero_suadi: "",
    whoWeAre: "من نحن؟",
    sombrero_means: "سمبريرو هي كلمة لاتينية معناها",
    sombrero_suadi:
      "نستورد اجود انواع البن المختص من كولومبيا و نقوم بحمصها هنا في الرياض لنقدم لزبئننا كوب من القهوة عالية الجودة ليرتقي بذائقتهم المميزة",
    /////////////////////////////////////////////////// landing

    ///////////////////////////////////////////////////// events
    events: "فعاليات",
    business: "للطلب يرجع تعبئة النموذج ",
    Preferred: "يرجى اختيار الخيار المناسب لكم",
    ice: "لي طلب مكينة ايس كريم",
    coffeeMachine: "لي طلب مكينة القهوة",
    requesT: "لي طلب مكينة ايس كريم",
    requestCoffee: "لي طلب مكينة القهوة",
    name: "الاسم:",
    email: "الايميل:",
    phoneNumber: "رقم الهاتف:",
    representative: "الجهة المتقدمة:",
    locationRequest: "الموقع:",
    eventTime: "من:",
    to: "الى:",

    howManyEmployees: "عدد الموضفين:",
    eventPerioudFrom: "من:",
    to: "الى:",
    forMoreInfo: "لاستفسارات اخرى بخصوص الفعاليات:",
    submit: "ارسال الطلب",
    collaboration: "بي التعاون مع",

    ///////////////////////////////////////////////////// events

    //////////////////////////////////////////////////// delivery

    deliveryOption: "طرق التوصيل",
    sombreroPRovide: "سمبريرو توفر عددت خدمات لي التوصيل و هي",

    //////////////////////////////////////////////////// delivery

    ///////////////////////////////////////////////////// gallery

    SombreroGallery: "معرض الصور",

    ///////////////////////////////////////////////////// gallery

    ///////////////////////////////////////////////////////servies
    ourServies: "الخدمات التي نوفرها",

    ///////////////////////////////////////////////////////servies

    ///////////////////////////////////////////////////// find us
    findUs: "يمكنكم العثور علينا على:",

    location: "4086 طريق الأمير محمد بن عبدالعزيز، السليمانية، الرياض 12242",
    Phone: " 050 295 0376",
    ourSocials: " مواقع التواصل الجتماعي :",

    ///////////////////////////////////////////////////// find us

    //////////////////////////////////////////////////////// footer

    workingHours: "ساعات العمل",
    StT: "من السبت الى الخميس",
    friday: "الجمعة",
    reserved: "جميع الحقوق محفوظة لي سمبريرو 2020 ©",
  },
};
