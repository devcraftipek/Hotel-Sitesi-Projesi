$(document).ready(function() {

    var arrLang= {

        'tr':{
            
            '1':"Deluxe Hotel'e Hoş Geldiniz",

            '2':"Deluxe Hotel'de lüks ve konforu daha önce hiç olmadığı gibi yaşayın.",

            '3':'Daha Fazlasını Keşfedin.',

            '4':'24/7 Ön Büro',

            '5':"Ön büromuz, konaklamanız sırasında her türlü soru veya talebinizde size yardımcı olmak için günün her saati hizmetinizdedir.",

            '6':'Restoran Bar',

            '7':'Tesis bünyesindeki restoran ve barımızda çok çeşitli mutfak lezzetleri ve serinletici içecekler sunan enfes yemeklerin tadını çıkarın.',

            '8':'Transfer Hizmetleri',

            '9':'Otele gidiş ve dönüş yolculuğunuzu mümkün olduğunca sorunsuz hale getirmek için ücretsiz transfer hizmetleri mevcuttur.',

            '10':'Spa Süitleri',

            '11':'Konaklamanızı zenginleştirmek için çeşitli sağlıklı yaşam uygulamaları sunan lüks spa süitlerimizde rahatlayın ve gençleşin.',

            '12':'Olağanüstü Müşteri Hizmetleri',

            '13':"Deluxe Hotel'de olağanüstü müşteri hizmetleri sunmaktan gurur duyuyoruz. Kendini işine adamış personelimiz, konaklamanızı gerçekten unutulmaz kılmaya kararlıdır.",

            '14':'Daha Fazla Bilgi',

            '15':'Şıklığımızı Keşfedin',

            '16':"Lüks tesislerimizi ve çarpıcı çevremizi sergileyen özenle seçilmiş galerimiz aracılığıyla Deluxe Hotel'in zarafetini ve cazibesini keşfedin.",

            '17':'Lüks Konaklama',

            '18':'Odalarımız ve süitlerimiz konforunuz düşünülerek tasarlanmış olup, zarafet ve modern olanakların mükemmel bir karışımını sunmaktadır.',

            '19':'Odaları Keşfet',

            '20':'Lüks Odalarımız',

            '21':'Her biri benzersiz ve konforlu bir deneyim sunmak üzere tasarlanmış, özenle seçilmiş oda ve süitlerimizle lüksün tadını çıkarın.',

            '22':'Deluxe Oda',

            '23':'Geniş ve zarif bir şekilde döşenmiş Deluxe Odamız, keşifle geçen bir günün ardından mükemmel bir dinlenme imkanı sunuyor.',

            '24':'Superior Oda',

            '25':'Keyifli bir konaklama için modern olanaklarla donatılmış Superior Odamızda benzersiz bir konfor yaşayın.',

            '26':'Standart Oda',

            '27':'Standart Odamız dinlendirici bir gece uykusu için rahat ve davetkar bir atmosfer sunar.',

            '28':'Özel Ekibimizle Tanışın',

            '29':"Deluxe Hotel'deki özel ekibimiz size olağanüstü hizmet sunmayı ve konaklamanızın olağanüstü olmasını sağlamayı taahhüt eder.",

            '30':'Genel Müdür',

            '31':'Restoran Müdürü',

            '32':'Ön Büro Müdürü',

            '33':'Bize Ulaşın',

            '34':'İsim',

            '35':'E-posta',

            '36':'Telefon',
            
            '37':'Gönder',

            '38':'Telif Hakkı &copy2025 - Otel Sitesi',

          
            

        },


        'en':{

            '1':'Welcome to Deluxe Hotel',

            '2':'Experience luxury and comfort like never before at Deluxe Hotel.',

            '3':'Explore More',

            '4':'24/7 Front Desk',

            '5':'Our front desk is available around the clock to assist you with any inquiries or requests you may have during your stay.',

            '6':'Restaurant Bar',

            '7':'Indulge in exquisite dining at our on-site restaurant and bar, offering a wide range of culinary delights and refreshing beverages.',

            '8':'Transfer Services',

            '9':'Complimentary transfer services are available to make your journey to and from the hotel as seamless as possible.',

            '10':'Spa Suites',

            '11':'Relax and rejuvenate in our luxurious spa suites, offering a range of wellness treatments to enhance your stay.',

            '12':'Exceptional Customer Service',

            '13':'At Deluxe Hotel, we pride ourselves on delivering exceptional customer service. Our dedicated staff is committed to making your stay truly memorable.',

            '14':'Learn More',

            '15':'Discover Our Elegance',

            '16':'Explore the elegance and charm of Deluxe Hotel through our carefully curated gallery showcasing our luxurious facilities and stunning surroundings',

            '17':'Luxurious Accommodations',

            '18':'Our rooms and suites are designed with your comfort in mind, offering a perfect blend of elegance and modern amenities.',

            '19':'Explore Rooms',

            '20':'Our Luxurious Rooms',

            '21':'Indulge in luxury with our range of carefully curated rooms and suites, each designed to provide a unique and comfortable experience.',

            '22':'Deluxe Room',

            '23':'Spacious and elegantly furnished, our Deluxe Room offers a perfect retreat after a day of exploration.',

            '24':'Superior Room',

            '25':'Experience unparalleled comfort in our Superior Room, equipped with modern amenities for a delightful stay.',

            '26':'Standart Room',

            '27':'Our Standard Room provides a cozy and inviting atmosphere for a restful nights sleep',

            '28':'Meet Our Dedicated Team',

            '29':'Our dedicated team at Deluxe Hotel is committed to providing you with exceptional service and ensuring your stay is nothing short of extraordinary.',

            '30':'General Manager',

            '31':'Restaurant Manager',

            '32':'Front Desk Manager',

            '33':'Contact Us',

            '34':'Name',

            '35':'Email',

            '36':'Phone',
            
            '37':'Submit',

            '38':'Copyright &copy2025 - Hotel Sitesi',

    





        },


    };

$('.dropdown-item').click(function() {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
    location.reload();
  });

    var lang =JSON.parse(localStorage.getItem('dil'));

    if(lang=="en"){
        $("#drop_yazı").html("English");
    }
    else{
        $("#drop_yazı").html("Türkçe");

    }

    $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index,element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    
  });

});