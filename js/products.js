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
  const footerContact = document.getElementById("footer-contact");
  const footerList = document.getElementById("footer-list");
  const bannerMail = document.getElementById("banner-mail");
  const bannerPhone = document.getElementById("banner-phone");
  
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
    productsList.replaceChildren();
  
    footer();
    fetchContactData();
    fetchProductsData();
    productsTitle();
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
      productsItem.className = `space-y-4 border-teal-400 border p-4`;
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
                      <p class="py-3">${item.description}</p>
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
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
  
  //   show services data
  
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
  
    bannerMail.innerHTML = contacts.email;
    bannerMail.setAttribute("href", `mailto:${contacts.email}`);
    bannerPhone.innerHTML = contacts.phone;
    bannerPhone.setAttribute("href", `tel:${contacts.phone}`);
  
    footerContact.innerHTML = `
        <li class="flex items-center"><span class="px-2 material-symbols-outlined">mail</span><a href="mailto:${contacts.email}" class="hover:text-amber-400 duration-500 text-sm ">${contacts.email}</a></li>
                              <li class="flex items-center"><span class="px-2 material-symbols-outlined">call</span><a href="tel:${contacts.phone}" class="hover:text-amber-400 duration-500 text-sm ">${contacts.phone}</a></li>
        `;

        linksFooter.innerHTML=language === "en" ? 'Visit :' : 'روابط سريعة'
        contactFooter.innerHTML=language === "en" ? 'Contact us :' : 'اتصل بنا'
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
                              <a class="px-1 uppercase" href="https://www.linkedin.com/in/ahmad-zakaria-hanifa-58094522a/" target="_blank">ahmad team</a>
        `)
      : (ahmadTeam.innerHTML = `
        <p class="px-1">| تمت برمجة الموقع بواسطة</p>
        <a class="px-1 uppercase" href="https://www.linkedin.com/in/ahmad-zakaria-hanifa-58094522a/" target="_blank">ahmad team</a>
  `);
  };
  
  footer();
  
  fetchContactData();
  
  fetchProductsData();
  productsTitle();
  
  nav();
  