const navbar_ar = [
  {
    name: "الرئيسية",
    url: "./index.html",
  },
  {
    name: "من نحن",
    url: "./about.html",
  },
  {
    name: "خدماتنا",
    url: "./services.html",
  },
  {
    name: "منتجاتنا",
    url: "./products.html",
  },
  {
    name: "ورشات العمل",
    url: "./workshops.html",
  },
  {
    name: "اتصل بنا",
    url: "./contact.html",
  },
];
const navbar_en = [
  {
    name: "home",
    url: "./index.html",
  },
  {
    name: "about us",
    url: "./about.html",
  },
  {
    name: "our services",
    url: "./services.html",
  },
  {
    name: "our products",
    url: "./products.html",
  },
  {
    name: "workshops",
    url: "./workshops.html",
  },
  {
    name: "contact us",
    url: "./contact.html",
  },
];

var language = localStorage.getItem("language");
if (language === "en" || language == "ar") {
} else {
  language = "en";
}
// if(language==="en"){
//   document.getElementById("lang-img").setAttribute ('src','./Assets/icons/flag-for-saudi-arabia-svgrepo-com.svg');

// }else{
//   document.getElementById("lang-img").setAttribute ('src','./Assets/icons/united-kingdom-uk-svgrepo-com.svg');
// }

document.dir = language === "ar" ? "rtl" : "ltr";

const productsList = document.getElementById("products-list");
const servicesList = document.getElementById("services-list");
const workshopList = document.getElementById("workshop-list");
const contact_form = document.getElementById("contact-form");
const contact_info = document.getElementById("contact-info");
const contact_map = document.getElementById("contact-map");
const form_title = document.getElementById("form-title");
const footerContact = document.getElementById("footer-contact");
const footerList = document.getElementById("footer-list");
const bannerMail = document.getElementById("banner-mail");
const bannerPhone = document.getElementById("banner-phone");
const products_section = document.getElementById("products-section");
const services_section = document.getElementById("services-section");
const workshop_section = document.getElementById("workshop-section");

const navbarmenu = document.getElementById("navbar-menu");
  const langBtn = document.getElementById("lang-btn");
  const logo = document.getElementById("logo")
  const navbar_btn = document.getElementById("navbar-btn")
// const element = document.getElementById("lang_btn");

langBtn.addEventListener("click", () => {
  if (language === "en") {
    language = "ar";
    langBtn.innerHTML = "english";
    // document.getElementById("lang-img").setAttribute ('src','./Assets/icons/united-kingdom-uk-svgrepo-com.svg');
    localStorage.setItem("language", language);
    document.dir = language === "ar" ? "rtl" : "ltr";
  } else {
    language = "en";
    langBtn.innerHTML = "عربي";
    // document.getElementById("lang-img").setAttribute ('src','./Assets/icons/flag-for-saudi-arabia-svgrepo-com.svg');
    localStorage.setItem("language", language);
    document.dir = language === "ar" ? "rtl" : "ltr";
  }

  navbarmenu.replaceChildren();
  footerList.replaceChildren();
  contact_map.replaceChildren();
  contact_info.replaceChildren();
  contact_form.replaceChildren();
  workshopList.replaceChildren();
  servicesList.replaceChildren();
  productsList.replaceChildren();

  footer();
  fetchContactData();
  fetchProductsData();
  productsTitle();
  fetchServicesData();
  servicesTitle();
  //fetchWorkshopData();
  workshopTitle();
  fetchHomeData();
  nav();
});

// navbar

const nav = () => {
  if (language === "en") {
    langBtn.innerHTML = "عربي";
    navbar_en.map((item) => {
      const navItem = document.createElement("li");
      navItem.className =
        "border-b-4 border-transparent hover:border-amber-400 duration-500 lg:ms-8 text-lg lg:my-0 my-3";
      navItem.innerHTML = `<a
      class="text-teal-600 hover:text-amber-400  duration-500" href="${item.url}">${item.name}</a>`;
      logo.className='left-8 font-bold text-2xl  flex items-center text-teal-400'
        navbar_btn.className='text-3xl absolute right-8 top-12 cursor-pointer lg:hidden '
      navbarmenu.appendChild(navItem);
    });
  } else {
    langBtn.innerHTML = "english";
    navbar_ar.map((item) => {
      const navItem = document.createElement("li");
      navItem.className =
        "border-b-4 border-transparent hover:border-amber-400 duration-500 lg:ms-8 text-lg lg:my-0 my-3";
      navItem.innerHTML = `<a
      class="text-teal-600 hover:text-amber-400  duration-500" href="${item.url}">${item.name}</a>`;
      logo.className='right-8 font-bold text-2xl  flex items-center text-teal-400'
        navbar_btn.className='text-3xl absolute left-8 top-12 cursor-pointer lg:hidden '
      navbarmenu.appendChild(navItem);
    });
  }
};

// hero description
var home = {};

async function fetchHomeData() {
  try {
    const response = await fetch(
      `http://dash.sa-acacia.com/api/homePage?lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    home = data;
    console.log(home);
    hero();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

const hero = () => {
  var homeImg = document.getElementById("home-img");
  var homeTitle = document.getElementById("hero-title");
  var homeText = document.getElementById("hero-text");
  var homeBtn = document.getElementById("hero-btn");
  var homeSubTitle1 = document.getElementById("hero-subtitle1");
  var homeSubTitle2 = document.getElementById("hero-subtitle2");
  var homeSubTitle3 = document.getElementById("hero-subtitle3");
  var homeSubTitle4 = document.getElementById("hero-subtitle4");

  homeImg.classList.add(
    `bg-[url('http://dash.sa-acacia.com/serImage/${home.pictures}')]`
  );
  homeText.innerHTML = `${home.text}`;

  if (language === "en") {
    homeTitle.innerHTML = "acacia agricultural landscape works";
    homeBtn.innerHTML = "contact us";
    homeSubTitle1.innerHTML = "Management of agricultural irrigation projects";
    homeSubTitle2.innerHTML = "Greenhouse maintenance";
    homeSubTitle3.innerHTML = "Landscape";
    homeSubTitle4.innerHTML = "Agricultural workshop";
    products_section.innerHTML="more products...";
    services_section.innerHTML="more services...";
    workshop_section.innerHTML="more workshops...";
  } else {
    homeTitle.innerHTML = "أكاسيا، الأعمال الزراعية";
    homeBtn.innerHTML = "اتصل بنا";
    homeSubTitle1.innerHTML = "ورشة عمل زراعية";
    homeSubTitle2.innerHTML = "المنظر الطبيعي";
    homeSubTitle3.innerHTML = "صيانة الدفيئة";
    homeSubTitle4.innerHTML = "إدارة مشاريع الري الزراعي";
    products_section.innerHTML="المزيد...";
    services_section.innerHTML="المزيد...";
    workshop_section.innerHTML="المزيد...";
  }
  console.log("hero");
};

// fetch products data

var products = {};

async function fetchProductsData() {
  try {
    const response = await fetch(
      `http://dash.sa-acacia.com/api/certificates?lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    products = data;
    console.log(products);
    displayProducts();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// show products data

function displayProducts() {
  products.forEach((item, i) => {
    const productsItem = document.createElement("div");
    // if(language === "ar"){
    //   productsItem.setAttribute("onclick",`localStorage.setItem('productsID',(${products.length-1 -i}))`)
    // }else{
    //   productsItem.setAttribute("onclick",`localStorage.setItem('productsID',${i})`)
    // }
    productsItem.className = `space-y-4 border-teal-400 border p-4 h-full w-full`;
    productsItem.innerHTML = `
                <div class="relative flex justify-center">
                    <div class="w-60 h-60 bg-[url('http://dash.sa-acacia.com/serImage/${
                      item.icons
                    }')] bg-cover rounded-full z-[1]"></div>
                    <div class="w-60 h-60 bg-amber-400 bg-cover rounded-full absolute z-[0] translate-x-2 translate-y-2"></div>
                    <div class="w-60 h-60 bg-teal-400 bg-cover rounded-full absolute z-[0] translate-x-2 translate-y-1"></div>
                </div>
                <div class="text-center">
                    <h1 class="text-2xl text-teal-600">${item.title}</h1>
                    <p class="py-3">${item.description.substring(0,40)}...</p>
                    <a  onclick=${language === "en" ? `localStorage.setItem('productsID',(${i}))`: `localStorage.setItem('productsID',${products.length-1 -i})` } href="productsItem.html" class="mt-1 text-start text bg-teal-500 px-3 py-1 text-teal-50 hover:bg-teal-800 duration-500">${
                      language === "en" ? "more..." : "المزيد"
                    }</a>
                </div>
         `;
    productsList.appendChild(productsItem);
  });
}

const productsTitle = () => {
  if (language === "en") {
    document.getElementById("products-title").innerHTML = "Our Products";
    // document.getElementById("products-more").innerHTML = "See more..";
    document.getElementById("products-description").innerHTML =
      "As we look forward to developing better versions of a variety of our products that compete at the consciousness level and help farmers make the most of their land. We have identified a set of our products that provide beneficial advantages for all farmers.";
  } else {
    document.getElementById("products-title").innerHTML = "منتجاتنا";
    // document.getElementById("products-more").innerHTML = "المزيد";
    document.getElementById("products-description").innerHTML =
      "نظرًا لأننا نتطلع إلى تطوير نسخ أفضل من مجموعة متنوعة من منتجاتنا التي تنافس على مستوى الوعي وتساعد الفلاحين على الاستفادة القصوى من أراضيهم. لقد حددنا مجموعة من منتجاتنا التي توفر مزايا مفيدة لجميع الفلاحين.";
  }
};

// fetch services data

var services = {};

async function fetchServicesData() {
  try {
    const response = await fetch(
      `http://dash.sa-acacia.com/api/services?lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    services = data;
    console.log(services);
    displayServices();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// show services data

function displayServices() {
  services.forEach((item, i) => {
    const servicesItem = document.createElement("div");
    // if(language === "ar"){
    //   productsItem.setAttribute("onclick",`localStorage.setItem('productsID',(${products.length-1 -i}))`)
    // }else{
    //   productsItem.setAttribute("onclick",`localStorage.setItem('productsID',${i})`)
    // }
    servicesItem.className = `space-y-4 px-4 my-8 text-center h-full`;
    servicesItem.innerHTML = `
    <div class="relative flex justify-center items-between mt-4" >
    <div
        class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-[url('http://dash.sa-acacia.com/serImage/${
          item.icons
        }')] bg-cover bg-center z-10  transition-all duration-500 ease-out ">
    </div>
    <div class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-teal-800 absolute translate-x-4 translate-y-4 z-0">
    </div>
    <div class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-teal-400 absolute translate-x-[-1rem] translate-y-[-1rem] z-0">
    </div>
    <div class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-amber-400 absolute translate-x-[-2rem] translate-y-[1rem] z-0">
    </div>
</div>
<h1 class="text-2xl text-teal-600 pt-4">${item.title}</h1>
<p class="pb-5">${item.description.substring(0,40)}...</p>
<a onclick=${language === "en" ? `localStorage.setItem('servicesID',(${i}))`: `localStorage.setItem('servicesID',${services.length-1 -i})` } href="servicesItem.html" class="text-start text-xl bg-amber-500 px-4 py-1 text-teal-50 hover:bg-amber-800 duration-500 ">${
  language === "en" ? "more..." : "المزيد"
}</a>
         `;
    servicesList.appendChild(servicesItem);
  });
}

const servicesTitle = () => {
  if (language === "en") {
    document.getElementById("services-title").innerHTML =
      "Agricultural services";
    // document.getElementById("services-more").innerHTML = "See more..";
    document.getElementById("services-description").innerHTML =
      "We offer a wide range of integrated services on our website that cater to the technical and creative requirements of farmers at all levels.";
  } else {
    document.getElementById("services-title").innerHTML = "الخدمات الزراعية";
    // document.getElementById("services-more").innerHTML = "المزيد";
    document.getElementById("services-description").innerHTML =
      "نحن نقدم مجموعة واسعة من الخدمات المتكاملة على موقعنا الإلكتروني والتي تلبي المتطلبات الفنية والإبداعية للمزارعين على جميع المستويات.";
  }
};

// fetch workshop data

var workshop = {};

async function fetchWorkshopData() {
  try {
    const response = await fetch(
      `http://dash.sa-acacia.com/api/clients?lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    workshop = data;
    console.log(workshop);
    displayWorkshop();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// show workshop data

function displayWorkshop() {
  workshop.forEach((item, i) => {
    const workshopItem = document.createElement("div");
    // if(language === "ar"){
    //   productsItem.setAttribute("onclick",`localStorage.setItem('productsID',(${products.length-1 -i}))`)
    // }else{
    //   productsItem.setAttribute("onclick",`localStorage.setItem('productsID',${i})`)
    // }
    workshopItem.className = `space-y-4 px-4 mt-4 text-center`;
    workshopItem.innerHTML = `
                <div class="relative flex justify-center mt-4" >
                    <div
                        class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-[url('http://dash.sa-acacia.com/serImage/${
                          item.icons
                        }')] bg-cover bg-center z-10  transition-all duration-500 ease-out ">
                    </div>
                    <div class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-amber-400 absolute translate-x-[-1rem] translate-y-[1rem] z-0">
                    </div>
                </div>
                <h1 class="text-2xl text-teal-600 pt-4">${item.title}</h1>
                
                <a  onclick=${language === "en" ? `localStorage.setItem('workshopID',(${i}))`: `localStorage.setItem('workshopID',${workshop.length-1 -i})` } href="workshop.html" class="text-start text-xl bg-amber-500 px-4 py-1 text-teal-50 hover:bg-amber-800 duration-500 ">${
                  language === "en" ? "more..." : "المزيد"
                }</a>
    `;
    workshopList.appendChild(workshopItem);
  });
}

const workshopTitle = () => {
  if (language === "en") {
    document.getElementById("workshop-title").innerHTML = "Our Workshops";
    // document.getElementById("workshop-more").innerHTML = "See more..";
    document.getElementById("workshop-description").innerHTML =
      "In this website, you can explore various workshops conducted by experienced professionals and enthusiasts in the field of agriculture. These workshops provide practical insights and knowledge, helping you make informed decisions in your farming activities. Participate in these workshops to enhance your skills, knowledge, and network within the agricultural community.";
  } else {
    document.getElementById("workshop-title").innerHTML = "الورشات";
    // document.getElementById("workshop-more").innerHTML = "المزيد";
    document.getElementById("workshop-description").innerHTML =
      "في هذا الموقع ، يمكنك استكشاف ورش العمل المختلفة التي يجريها محترفون ذوو خبرة ومتحمسون في مجال الزراعة. توفر ورش العمل هذه رؤى ومعرفة عملية ، مما يساعدك على اتخاذ قرارات مستنيرة في أنشطتك الزراعية. شارك في ورش العمل هذه لتعزيز مهاراتك ومعرفتك وشبكاتك داخل المجتمع الزراعي.";
  }
};

// fetch contact data

var contacts = {};
async function fetchContactData() {
  try {
    const response = await fetch(
      `http://dash.sa-acacia.com/api/contactUs?lang=${language}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    contacts = data;
    displayContact();
    console.log(contacts);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

//   show contact data

function displayContact() {
  const facebook = document.getElementById("facebook");
  const instagram = document.getElementById("instagram");
  const twitter = document.getElementById("twitter");
  const youtube = document.getElementById("youtube");
const linksFooter = document.getElementById("links-title-footer");
    const contactFooter = document.getElementById("contact-title-footer");

  facebook.setAttribute("href", contacts.facebook);
  instagram.setAttribute("href", contacts.instagram);
  twitter.setAttribute("href", contacts.twitter);
  youtube.setAttribute("href", contacts.youtube);

  const contactForm = document.createElement("div");
  // contactForm.setAttribute("id","contactForm")
  const contactInfo = document.createElement("div");
  const contactMap = document.createElement("div");
  contactInfo.className = "space-y-4 flex flex-col justify-center lg:ms-16";
  contactMap.className = "w-full";
  contactForm.innerHTML = `
            <div class="relative mb-6" data-te-input-wrapper-init>
            <input name="name" type="text"
              class="border-b-2 border-teal-400 block min-h-[auto] w-full border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
              id="form-name" placeholder="${
                language === "en" ? "name" : "الاسم"
              }" />
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input name="email" type="email"
              class="border-b-2 border-teal-400 block min-h-[auto] w-full border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
              id="form-email" placeholder="${
                language === "en" ? "email address" : "الايميل"
              }" />
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <textarea name="message"
              class="border-b-2 border-teal-400 block h-40 w-full border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
              id="form-message" rows="3" placeholder="${
                language === "en" ? "your message" : "الرسالة"
              }"></textarea>
          </div>

          <button type="submit" data-te-ripple-init data-te-ripple-color="light"
            class=" inline-block w-full bg-teal-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            ${language === "en" ? "send" : "إرسال"}
          </button>
  `;
  contactInfo.innerHTML = `
  <div class="flex flex-col lg:flex-row justify-center items-center">
  <h1 class="relative text-3xl border-b-4  border-amber-400">${
    language === "en" ? "Contact us" : "اتصل بنا"
  }</h1>
</div>

<div class="py-16 lg:mt-0 px-4 relative flex justify-center">
  <div
      class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-teal-800 z-10 grid place-items-center text-white">
      <ul class="py-2 space-y-2 text-xl">
          <li class="flex items-center"><span class="px-2 material-symbols-outlined">mail</span><a href="mailto:${
            contacts.email
          }" class="hover:text-amber-400 duration-500 text-sm ">${
    contacts.email
  }</a></li>
          <li class="flex items-center"><span class="px-2 material-symbols-outlined">call</span><a href="tel:${
            contacts.phone
          }" class="hover:text-amber-400 duration-500 text-sm ">${
    contacts.phone
  }</a></li>
      </ul>
  </div>
  <div class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-amber-500 absolute translate-x-8 translate-y-8 z-0">
  </div>
  <div class="w-[250px] h-[250px]  overflow-hidden rounded-full bg-teal-400 absolute translate-x-[-2rem] translate-y-[-2rem] z-0">
  </div>
  <div class="w-[80px] h-[80px] xl:w- overflow-hidden rounded-full bg-teal-400 absolute translate-x-[7rem] translate-y-[-3rem] z-0">
  </div>
  <div class="w-[30px] h-[30px]  overflow-hidden rounded-full bg-amber-400 absolute translate-x-[10rem] translate-y-[-4rem]  z-0">
  </div>
  <div class="w-[10px] h-[10px]  overflow-hidden rounded-full bg-teal-400 absolute translate-x-[10rem] translate-y-[-5rem]  z-0">
  </div>
</div>
  `;
  contactMap.innerHTML = `    
  <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3639.7948510218516!2d47.283873585010426!3d24.1789264843799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDEwJzQ0LjEiTiA0N8KwMTYnNTQuMSJF!5e0!3m2!1sar!2s!4v1700040675447!5m2!1sar!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
  `;
  contact_form.appendChild(contactForm);
  contact_info.appendChild(contactInfo);
  contact_map.appendChild(contactMap);

  linksFooter.innerHTML=language === "en" ? 'Visit :' : 'روابط سريعة'
        contactFooter.innerHTML=language === "en" ? 'Contact us :' : 'اتصل بنا'

  form_title.innerHTML = language === "en" ? "Get in touch" : "لنبقى على تواصل";
  bannerMail.innerHTML = contacts.email;
  bannerMail.setAttribute("href", `mailto:${contacts.email}`);
  bannerPhone.innerHTML = contacts.phone;
  bannerPhone.setAttribute("href", `tel:${contacts.phone}`);

  footerContact.innerHTML = `
      <li class="flex items-center"><span class="px-2 material-symbols-outlined">mail</span><a href="mailto:${contacts.email}" class="hover:text-amber-400 duration-500 text-sm ">${contacts.email}</a></li>
                            <li class="flex items-center"><span class="px-2 material-symbols-outlined">call</span><a href="tel:${contacts.phone}" class="hover:text-amber-400 duration-500 text-sm ">${contacts.phone}</a></li>
      `;
}



// footer

const footer = () => {
  const ahmadTeam = document.getElementById("ahmad-team");
  const follow = document.getElementById("follow");

  document.getElementById("footer-text").innerHTML =
    language === "en"
      ? `<span class="px-2 material-symbols-outlined">
            copyright
            </span> 
        <p>2023 all right is reserved for <a href="index.html" class="uppercase">acacia</a> </p>`
      : `<span class="px-2 material-symbols-outlined">
        copyright
        </span> 
    <p>2023 جميع الحقوق محفوظة لشركة <a href="index.html" class="uppercase">acacia</a> </p>`;

  language === "en"
    ? navbar_en.map((item) => {
        const navItem = document.createElement("li");
        navItem.innerHTML = `
        <a href="${item.url}" class="capitalize hover:text-amber-400 duration-500 text-sm ">${item.name}</a>
        `;
        footerList.appendChild(navItem);
      })
    : navbar_ar.map((item) => {
        const navItem = document.createElement("li");
        navItem.innerHTML = `
        <a href="${item.url}" class="capitalize hover:text-amber-400 duration-500 text-sm ">${item.name}</a>
        `;
        footerList.appendChild(navItem);
      });

  language === "en"
    ? (follow.innerHTML = `follow us :`)
    : (follow.innerHTML = `تابعونا`);
    language === "en"
    ? (ahmadTeam.innerHTML = `
                            <p class="px-1">| The website was programmed by</p>
                            <a class="px-1 uppercase font-bold" href="https://www.linkedin.com/in/ahmad-zakaria-hanifa-58094522a/" target="_blank">ahmad team</a>
      `)
    : (ahmadTeam.innerHTML = `
      <p class="px-1">| تمت برمجة الموقع بواسطة</p>
      <a class="px-1 uppercase font-bold" href="https://www.linkedin.com/in/ahmad-zakaria-hanifa-58094522a/" target="_blank">ahmad team</a>
`);
};

footer();

fetchContactData();

fetchProductsData();
productsTitle();

fetchServicesData();
servicesTitle();

//fetchWorkshopData();
workshopTitle();

fetchHomeData();

nav();
