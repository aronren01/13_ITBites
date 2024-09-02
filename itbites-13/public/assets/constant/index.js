import menu1 from "../../assets/Placeholder/Bakso.jpg";
import menu2 from "../../assets/Placeholder/Bebek Sambel Hitam.jpeg";
import menu3 from "../../assets/Placeholder/Cromboloni.jpeg";
import menu4 from "../../assets/Placeholder/Gyoza.jpeg";
import menu5 from "../../assets/Placeholder/Mie Kuah.jpg";
import menu6 from "../../assets/Placeholder/NasiGoreng.jpeg";
import menu7 from "../../assets/Placeholder/SotoPadang.jpeg";
import menu8 from "../../assets/Placeholder/Sushi.jpg";
import menu9 from "../../assets/Placeholder/GadoGado.jpg";
import menu10 from "../../assets/Placeholder/KeripikSingkong.jpeg";
import menu11 from "../../assets/Placeholder/AyamGoreng.jpeg";
import menu12 from "../../assets/Placeholder/TehTarik.jpg";
import menu13 from "../../assets/Placeholder/BaksoRaksasa.jpeg";
import menu14 from "../../assets/Placeholder/Klepon.jpeg";
import menu15 from "../../assets/Placeholder/NasiUduk.jpeg";
import menu16 from "../../assets/Placeholder/EsCampur.jpeg";
import menu17 from "../../assets/Placeholder/NasiAyamGeprek.jpeg";
import menu18 from "../../assets/Placeholder/PisangGoreng.jpeg";
import menu19 from "../../assets/Placeholder/JusAlpukat.jpeg";
import menu20 from "../../assets/Placeholder/SopBuntut.jpeg";
import menu21 from "../../assets/Placeholder/Batagor.jpeg";
import menu22 from "../../assets/Placeholder/MieRebus.jpeg";
import menu23 from "../../assets/Placeholder/SusuCoklat.jpeg";
import menu24 from "../../assets/Placeholder/LontongSayur.jpeg";
import menu25 from "../../assets/Placeholder/TahuIsi.jpeg";
import menu26 from "../../assets/Placeholder/NasiKuning.jpeg";
import menu27 from "../../assets/Placeholder/EsDoger.jpeg";
import menu28 from "../../assets/Placeholder/Rujak.jpeg";
import menu29 from "../../assets/Placeholder/SateKambing.jpeg";
import menu30 from "../../assets/Placeholder/BuburAyam.jpeg";
import menu31 from "../../assets/Placeholder/Donat.jpeg";
import menu32 from "../../assets/Placeholder/KopiHitam.jpeg";
import menu33 from "../../assets/Placeholder/NasiPecel.jpeg";
import menu34 from "../../assets/Placeholder/SingkongRebus.jpeg";
import menu35 from "../../assets/Placeholder/EsKacangHijau.jpeg";
import menu36 from "../../assets/Placeholder/IkanBakar.jpeg";
import menu37 from "../../assets/Placeholder/MartabakManis.jpeg";
import menu38 from "../../assets/Placeholder/EsBuah.jpeg";
import menu39 from "../../assets/Placeholder/NasiRawon.jpeg";
import menu40 from "../../assets/Placeholder/KueCubit.jpeg";
import menu41 from "../../assets/Placeholder/JusMangga.jpeg";
import menu42 from "../../assets/Placeholder/AyamBakar.jpeg";
import menu43 from "../../assets/Placeholder/KacangRebus.jpeg";
import menu44 from "../../assets/Placeholder/WedangJahe.jpeg";
import menu45 from "../../assets/Placeholder/SotoDaging.jpeg";
import menu46 from "../../assets/Placeholder/Cireng.jpeg";
import menu47 from "../../assets/Placeholder/SusuJahe.jpeg";
import menu48 from "../../assets/Placeholder/NasiLiwet.jpeg";
import menu49 from "../../assets/Placeholder/DonatKentang.jpeg";
import menu50 from "../../assets/Placeholder/EsCincau.jpeg";
import menu51 from "../../assets/Placeholder/MieGoreng.jpeg";
import menu52 from "../../assets/Placeholder/TahuSumedang.jpeg";
import menu53 from "../../assets/Placeholder/SopIga.jpeg";
import menu54 from "../../assets/Placeholder/Kerupuk.jpeg";
import menu55 from "../../assets/Placeholder/EsJerukKelapa.jpeg";
import menu56 from "../../assets/Placeholder/NasiBebek.jpeg";
import menu57 from "../../assets/Placeholder/OndeOnde.jpeg";
import menu58 from "../../assets/Placeholder/EsPisangIjo.jpeg";
import menu59 from "../../assets/Placeholder/NasiGudeg.jpeg";
import menu60 from "../../assets/Placeholder/PisangCoklat.jpeg";
import menu61 from "../../assets/Placeholder/Arsik.jpeg";
import menu62 from "../../assets/Placeholder/SateAyam.jpeg";
import menu63 from "../../assets/Placeholder/EsTehManis.jpeg";
import menu64 from "../../assets/Placeholder/NasiPadang.jpeg";
import K_EC1 from "../../assets/East Corner/Kantin_QnQ.jpg"
import K_EC2 from "../../assets/East Corner/Kantin_Matahari.jpg"
import K_GKUB1 from "../../assets/GKUB/Raflesia.jpg"
import K_GKUT1 from "../../assets/GKUT/GKUT1.jpg"
import K_Barrac1 from "../../assets/Kantin Barrac/Barrac1.jpg"
import K_Barrac2 from "../../assets/Kantin Barrac/Barrac2.jpg"
import K_Lab5 from "../../assets/labtek 5/Labtek5.jpg"
import K_GKU2 from "../../assets/Kehutanan GKU 2/Kyns Coffee.jpg"


export const MENU = [
    {
        image: menu1,
        menuname: "Bakso",
        price: "Rp15.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Bakso",
        jenis: "Makanan Berat",
        deskripsi: "Bakso adalah makanan populer di Indonesia, terdiri dari bola daging sapi yang kenyal dan lezat, disajikan dalam kuah kaldu yang gurih bersama dengan mie, sayuran segar, dan sambal. Makanan ini cocok dinikmati saat cuaca dingin atau sebagai santapan mengenyangkan di setiap kesempatan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu2,
        menuname: "Bebek Hitam",
        price: "Rp30.000",
        location: "GKUT 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/BebekHitam",
        jenis: "Makanan Berat",
        deskripsi: "Bebek Hitam adalah hidangan khas yang menggunakan bebek sebagai bahan utamanya, yang dimasak dengan bumbu hitam kaya rempah. Rasa bebek yang gurih dipadukan dengan manis dan pedas dari bumbu khas membuat hidangan ini menjadi favorit banyak orang.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu3,
        menuname: "Cromboloni",
        price: "Rp20.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Cromboloni",
        jenis: "Camilan",
        deskripsi: "Cromboloni adalah dessert inovatif yang menggabungkan tekstur lembut croissant dengan isi manis cannoli. Sajian ini seringkali disajikan sebagai camilan sore atau penutup mewah yang memanjakan lidah, cocok untuk pecinta pastry yang mencari sesuatu yang berbeda.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu4,
        menuname: "Gyoza",
        price: "Rp12.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/Gyoza",
        jenis: "Camilan",
        deskripsi: "Gyoza adalah jenis pangsit yang berasal dari Jepang, diisi dengan campuran daging giling dan sayuran yang dipotong kecil, lalu dipanggang atau dikukus. Gyoza disajikan dengan saus yang terbuat dari campuran kecap dan minyak wijen, membuatnya menjadi camilan atau pendamping makan malam yang sempurna",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu5,
        menuname: "Mie Kuah",
        price: "Rp10.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/MieKuah",
        jenis: "Makanan Berat",
        deskripsi: "Mie Kuah adalah hidangan khas Asia yang terbuat dari mie yang direbus dan disajikan dalam kuah kaldu yang kaya rasa. Biasanya ditambahkan potongan daging, sayuran, dan bumbu rempah untuk menciptakan makanan yang menghangatkan dan menyegarkan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu6,
        menuname: "Nasi Goreng",
        price: "Rp12.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/NasiGoreng",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Goreng adalah hidangan ikonik Indonesia yang terbuat dari nasi yang ditumis dengan bawang putih, cabai, dan kecap manis, serta campuran sayuran dan protein seperti ayam, udang, atau telur. Sering kali disajikan dengan kerupuk dan acar, menjadikannya makanan lengkap yang disukai semua usia.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu7,
        menuname: "Soto Padang",
        price: "Rp15.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SotoPadang",
        jenis: "Makanan Berat",
        deskripsi: "Soto Padang adalah sup tradisional dari Sumatera Barat yang terbuat dari kaldu bening yang diisi dengan irisan daging sapi yang telah digoreng hingga renyah. Kuahnya yang ringan namun kaya rasa rempah, biasa disajikan dengan ketupat dan bawang goreng, menciptakan kombinasi rasa yang sangat memuaskan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu8,
        menuname: "Sushi",
        price: "Rp20.000",
        location: "GKU Barat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Sushi",
        jenis: "Makanan Berat",
        deskripsi: "Sushi adalah hidangan Jepang yang sangat terkenal, terbuat dari nasi yang dibumbui dengan cuka beras dan dipadukan dengan berbagai topping seperti ikan mentah, seafood, dan sayuran. Sushi menawarkan keharmonisan rasa dan tekstur yang unik, dan sering dijadikan pilihan bagi mereka yang mencari makanan sehat dan segar.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu9,
        menuname: "Gado-Gado",
        price: "Rp15.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/GadoGado",
        jenis: "Makanan Berat",
        deskripsi: "Gado-Gado adalah salad Indonesia yang terdiri dari potongan sayuran rebus yang dicampur dengan tahu, tempe, telur rebus, dan dilumuri dengan saus kacang kental. Hidangan ini tidak hanya lezat tetapi juga sangat bergizi, sering dijadikan sebagai makanan pokok bagi mereka yang menginginkan makanan vegetarian yang kaya rasa.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu10,
        menuname: "Keripik Singkong",
        price: "Rp5.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/KeripikSingkong",
        jenis: "Camilan",
        deskripsi: "Keripik Singkong adalah camilan tradisional Indonesia yang dibuat dari irisan singkong yang digoreng hingga renyah. Biasanya disajikan sebagai pendamping makanan utama atau sebagai snack lezat yang bisa dinikmati kapan saja.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu11,
        menuname: "Ayam Goreng",
        price: "Rp20.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/AyamGoreng",
        jenis: "Makanan Berat",
        deskripsi: "Ayam Goreng adalah hidangan yang sangat populer di banyak budaya, termasuk Indonesia, dimana ayam marinated dalam bumbu rempah lalu digoreng hingga keemasan. Hidangan ini sering disajikan dengan sambal dan lalapan, menawarkan rasa yang krispi di luar dan lembut di dalam yang selalu menjadi favorit keluarga.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu12,
        menuname: "Teh Tarik",
        price: "Rp8.000",
        location: "Kehutanan",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/TehTarik",
        jenis: "Minuman",
        deskripsi: "Teh Tarik adalah minuman teh susu yang berasal dari Malaysia dan juga populer di Indonesia. Teh ini unik karena cara penyajiannya yang melibatkan 'menarik' campuran teh dan susu dari satu cangkir ke cangkir lain untuk menciptakan busa yang lembut dan rasa yang kaya.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu13,
        menuname: "Bakso Raksasa",
        price: "Rp20.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/BaksoRaksasa",
        jenis: "Makanan Berat",
        deskripsi: "Bakso Raksasa menawarkan versi unik dari bakso tradisional dengan ukuran yang jauh lebih besar. Disajikan dalam semangkuk besar kuah yang aromatik, bakso ini sempurna bagi Anda yang mencari makanan pengenyang yang juga menghangatkan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu14,
        menuname: "Klepon",
        price: "Rp7.000",
        location: "GKU T 2",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Klepon",
        jenis: "Camilan",
        deskripsi: "Klepon adalah camilan tradisional Jawa yang terbuat dari tepung ketan, diisi dengan gula merah, dan dilapisi dengan kelapa parut. Klepon yang meleleh di mulut ini menawarkan perpaduan rasa manis dan gurih yang unik, sangat cocok untuk dijadikan penutup atau snack sore hari.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu15,
        menuname: "Nasi Uduk",
        price: "Rp15.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/NasiUduk",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Uduk adalah versi aromatik dari nasi putih yang dimasak dengan santan, daun pandan, dan serai, memberikan aroma dan rasa yang kaya. Biasanya disajikan dengan berbagai lauk seperti tempe orek, sambal, dan ayam goreng, menjadikannya makanan yang memuaskan dan lengkap.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu16,
        menuname: "Es Campur",
        price: "Rp10.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/EsCampur",
        jenis: "Minuman",
        deskripsi: "Es Campur adalah dessert yang sempurna untuk hari yang panas, terdiri dari campuran buah-buahan, jeli, dan serut es yang disiram dengan susu kental manis dan sirup. Ragam tekstur dan rasa dari Es Campur membuatnya menjadi favorit di kalangan pecinta manis.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu17,
        menuname: "Nasi Ayam Geprek",
        price: "Rp18.000",
        location: "KOICA",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/NasiAyamGeprek",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Ayam Geprek adalah hidangan Indonesia yang sedang populer, yang terdiri dari ayam goreng tepung yang diulek bersama sambal bawang. Ayam yang gurih dan pedas ini disajikan dengan nasi hangat, membuatnya menjadi makanan yang sangat memuaskan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu18,
        menuname: "Pisang Goreng",
        price: "Rp5.000",
        location: "GKU T 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/PisangGoreng",
        jenis: "Camilan",
        deskripsi: "Pisang Goreng adalah camilan manis dan gurih yang terbuat dari pisang yang dilapisi adonan tepung dan kemudian digoreng hingga keemasan. Camilan ini sering kali disajikan sebagai snack sore atau dessert yang nikmat.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu19,
        menuname: "Jus Alpukat",
        price: "Rp12.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/JusAlpukat",
        jenis: "Minuman",
        deskripsi: "Jus Alpukat adalah minuman sehat dan kaya yang dibuat dari alpukat matang, dihaluskan dan dicampur dengan susu atau air dan sedikit gula. Minuman ini kaya akan tekstur krim dan rasa alpukat yang lembut, sempurna untuk sarapan atau sebagai penghilang dahaga.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu20,
        menuname: "Sop Buntut",
        price: "Rp30.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SopBuntut",
        jenis: "Makanan Berat",
        deskripsi: "Sop Buntut adalah hidangan berkuah kaldu bening dengan potongan buntut sapi yang dimasak hingga dagingnya menjadi sangat empuk. Dengan tambahan sayuran dan rempah-rempah, sop ini adalah makanan penghangat yang ideal untuk dinikmati saat cuaca dingin.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu21,
        menuname: "Batagor",
        price: "Rp10.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Batagor",
        jenis: "Camilan",
        deskripsi: " Batagor, singkatan dari Bakso Tahu Goreng, adalah makanan khas Bandung yang terbuat dari tahu yang diisi dengan pasta ikan dan kemudian digoreng. Biasanya disajikan dengan saus kacang dan kecap manis, Batagor menawarkan perpaduan tekstur yang krispi di luar dan lembut di dalam.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu22,
        menuname: "Mie Rebus",
        price: "Rp12.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/MieRebus",
        jenis: "Makanan Berat",
        deskripsi: "Mie Rebus adalah makanan penggugah selera yang terdiri dari mie kuning tebal yang disajikan dalam kuah kaldu yang hangat dan kaya rasa. Sering kali diperkaya dengan sayuran, telur rebus, dan potongan daging atau seafood, membuatnya menjadi hidangan yang lengkap dan memuaskan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu23,
        menuname: "Susu Coklat",
        price: "Rp7.000",
        location: "GKU T 2",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SusuCoklat",
        jenis: "Minuman",
        deskripsi: "Susu Coklat hangat adalah minuman klasik yang disukai banyak orang. Dibuat dengan coklat berkualitas yang dicampur dengan susu panas, minuman ini menawarkan kenyamanan dan kehangatan, sempurna untuk dinikmati di malam hari atau saat bersantai.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu24,
        menuname: "Lontong Sayur",
        price: "Rp12.000",
        location: "KOICA",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/LontongSayur",
        jenis: "Makanan Berat",
        deskripsi: "Lontong Sayur adalah hidangan nasi impit yang dihidangkan dengan sayur santan kaya rempah. Biasanya terdapat tambahan sambal dan kerupuk untuk menambah rasa gurih, menjadikannya makanan yang lezat dan menggugah selera.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu25,
        menuname: "Tahu Isi",
        price: "Rp6.000",
        location: "Kehutanan",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/TahuIsi",
        jenis: "Camilan",
        deskripsi: "Tahu Isi adalah tahu yang diisi dengan campuran sayuran cincang atau daging, kemudian digoreng hingga kulit luarnya krispi. Tahu Isi adalah camilan populer di Indonesia, menawarkan rasa yang gurih dan tekstur yang menarik, cocok untuk camilan sehari-hari atau sebagai bagian dari makan besar.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu26,
        menuname: "Nasi Kuning",
        price: "Rp15.000",
        location: "GKU T 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/NasiKuning",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Kuning adalah hidangan yang sering disajikan dalam perayaan di Indonesia, di mana nasi dimasak dengan kunyit dan santan, memberikan warna kuning cerah dan rasa gurih. Sering disajikan dengan lauk seperti ayam goreng, sambal goreng ati, dan kerupuk udang, membuatnya menjadi sajian yang meriah dan spesial.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu27,
        menuname: "Es Doger",
        price: "Rp10.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/EsDoger",
        jenis: "Minuman",
        deskripsi: "Es Doger adalah minuman dingin khas Jawa Barat yang terbuat dari es serut yang dicampur dengan santan, sirup merah, dan berbagai macam isi seperti tape dan cincau. Minuman ini sangat populer sebagai penyejuk di hari yang panas, menawarkan sensasi rasa yang manis dan menyegarkan.Es Doger adalah minuman dingin khas Jawa Barat dengan campuran kelapa, tape, dan sirup merah.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu28,
        menuname: "Rujak",
        price: "Rp8.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Rujak",
        jenis: "Camilan",
        deskripsi: "Rujak adalah hidangan buah-buahan segar yang dipotong-potong dan dicampur dengan bumbu kacang atau petis yang pedas manis. Rujak sering dijadikan sebagai makanan penutup atau camilan di siang hari, menawarkan kombinasi rasa yang tajam dan menyegarkan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu29,
        menuname: "Sate Kambing",
        price: "Rp30.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SateKambing",
        jenis: "Makanan Berat",
        deskripsi: "Sate Kambing adalah hidangan yang terbuat dari daging kambing yang dipotong kecil-kecil, dibumbui dengan campuran rempah khas, kemudian ditusuk dan dibakar. Sate ini biasanya disajikan dengan bumbu kacang atau kecap manis, menawarkan rasa yang kaya dan tekstur daging yang empuk.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu30,
        menuname: "Bubur Ayam",
        price: "Rp10.000",
        location: "GKU T 2",
        kampus: "Ganesha",
        link: "/MakananDetailPage/BuburAyam",
        jenis: "Makanan Berat",
        deskripsi: "Bubur Ayam adalah makanan comfort yang terbuat dari bubur beras yang lembut, disajikan dengan suwiran ayam rebus, kacang kedelai goreng, dan bawang goreng. Hidangan ini biasa dijadikan sarapan karena ringan namun mengenyangkan dan kaya akan rasa.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu31,
        menuname: "Donat",
        price: "Rp5.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Donat",
        jenis: "Camilan",
        deskripsi: "Donat adalah kue yang digoreng dengan lubang di tengahnya, biasanya dilapisi gula atau glasir dan berbagai topping seperti coklat atau selai. Donat menawarkan tekstur yang lembut dan manis, membuatnya disukai oleh semua kalangan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu32,
        menuname: "Kopi Hitam",
        price: "Rp5.000",
        location: "Kehutanan",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/KopiHitam",
        jenis: "Minuman",
        deskripsi: "Kopi Hitam adalah minuman yang dibuat dari biji kopi yang telah digiling dan diseduh dengan air panas. Kopi ini menawarkan rasa yang kuat dan pahit, sering dijadikan pilihan bagi mereka yang membutuhkan penyegar di pagi hari atau sebagai penutup makan malam.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu33,
        menuname: "Nasi Pecel",
        price: "Rp12.000",
        location: "KOICA",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/NasiPecel",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Pecel adalah makanan khas Jawa yang terdiri dari nasi hangat yang disajikan dengan aneka sayuran rebus dan dilumuri dengan sambal kacang yang pedas. Nasi Pecel biasanya disajikan dengan peyek kacang, menjadikannya makanan yang sehat dan penuh nutrisi.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu34,
        menuname: "Singkong Rebus",
        price: "Rp5.000",
        location: "GKU T 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SingkongRebus",
        jenis: "Camilan",
        deskripsi: "Singkong Rebus adalah makanan sederhana namun memuaskan yang terbuat dari singkong yang direbus hingga empuk. Biasa disajikan sebagai makanan pendamping atau camilan sore, singkong rebus menawarkan rasa yang alami dan tekstur yang mengenyangkan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu35,
        menuname: "Es Kacang Hijau",
        price: "Rp8.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/EsKacangHijau",
        jenis: "Minuman",
        deskripsi: "Es Kacang Hijau adalah minuman penutup yang terbuat dari kacang hijau rebus yang disajikan dengan es serut dan sirup manis. Minuman ini kaya akan rasa dan sangat menyegarkan, sering dijadikan pilihan untuk berbuka puasa atau sebagai penutup makan siang.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu36,
        menuname: "Ikan Bakar",
        price: "Rp25.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/IkanBakar",
        jenis: "Makanan Berat",
        deskripsi: "Ikan Bakar adalah hidangan yang terbuat dari ikan segar yang dibumbui dengan campuran rempah kemudian dibakar. Ikan Bakar biasanya disajikan dengan sambal dan lalapan, menawarkan kombinasi rasa asam, manis, dan pedas yang sangat menggugah selera.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu37,
        menuname: "Martabak Manis",
        price: "Rp20.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/MartabakManis",
        jenis: "Camilan",
        deskripsi: "Martabak Manis, juga dikenal sebagai Terang Bulan, adalah kue tebal yang manis dengan berbagai isi seperti coklat, keju, dan kacang. Martabak Manis sering dijadikan sebagai camilan malam atau penutup yang lezat, dengan tekstur yang lembut dan topping yang melimpah.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu38,
        menuname: "Es Buah",
        price: "Rp12.000",
        location: "GKU T 2",
        kampus: "Ganesha",
        link: "/MakananDetailPage/EsBuah",
        jenis: "Minuman",
        deskripsi: "Es Buah adalah minuman segar yang terbuat dari campuran buah-buahan segar yang dipotong-potong seperti melon, semangka, dan nanas, kemudian disiram dengan air gula atau sirup. Es Buah sangat populer sebagai penyejuk di hari yang panas, menawarkan kelezatan yang menyegarkan dengan manfaat buah-buahan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu39,
        menuname: "Nasi Rawon",
        price: "Rp20.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/NasiRawon",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Rawon adalah hidangan khas Jawa Timur yang terbuat dari daging sapi yang dimasak dalam kuah hitam dari kluwek. Rawon disajikan dengan nasi hangat dan kerap ditambahi dengan telur asin dan sambal, menawarkan rasa yang kaya dan mendalam.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu40,
        menuname: "Kue Cubit",
        price: "Rp10.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/KueCubit",
        jenis: "Camilan",
        deskripsi: "Kue Cubit adalah camilan manis khas Indonesia yang terbuat dari adonan yang dituang ke dalam cetakan kecil dan dimasak dengan cara dipanggang. Biasanya, Kue Cubit disajikan hangat dengan taburan gula halus atau topping cokelat leleh.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu41,
        menuname: "Jus Mangga",
        price: "Rp10.000",
        location: "Kehutanan",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/JusMangga",
        jenis: "Minuman",
        deskripsi: "Jus Mangga adalah minuman segar yang dibuat dari buah mangga yang dihaluskan, sering ditambahkan dengan sedikit gula atau madu untuk menambah kelezatannya. Minuman ini sangat populer di kalangan semua usia, memberikan kesegaran alami dengan rasa buah mangga yang kaya.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu42,  
        menuname: "Ayam Bakar",
        price: "Rp22.000",
        location: "KOICA",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/AyamBakar",
        jenis: "Makanan Berat",
        deskripsi: "Ayam Bakar adalah hidangan yang terbuat dari ayam yang telah dibumbui dengan rempah-rempah kemudian dibakar hingga matang. Biasanya disajikan dengan sambal dan lalapan segar, Ayam Bakar menawarkan rasa yang gurih dan aroma yang menggoda.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu43,
        menuname: "Kacang Rebus",
        price: "Rp5.000",
        location: "GKU T 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/KacangRebus",
        jenis: "Camilan",
        deskripsi: "Kacang Rebus adalah camilan sehat yang dibuat dari kacang tanah yang direbus dalam air garam hingga empuk. Camilan ini sangat populer sebagai pendamping makanan atau sebagai snack sehat yang kaya protein.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu44,
        menuname: "Wedang Jahe",
        price: "Rp8.000",
        location: "GKU T 2",
        kampus: "Ganesha",
        link: "/MakananDetailPage/WedangJahe",
        jenis: "Minuman",
        deskripsi: "Wedang Jahe adalah minuman tradisional Indonesia yang dibuat dari jahe yang direbus bersama dengan gula dan rempah-rempah lainnya. Minuman ini terkenal akan kehangatannya yang mampu mengusir dingin dan menyegarkan tubuh.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu45,
        menuname: "Soto Daging",
        price: "Rp20.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SotoDaging",
        jenis: "Makanan Berat",
        deskripsi: "Soto Daging adalah sup tradisional Indonesia yang terbuat dari potongan daging sapi yang dimasak dalam kaldu yang kaya rempah. Biasanya disajikan dengan nasi, mie, atau ketupat, Soto Daging menawarkan rasa yang gurih dan menghangatkan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu46,
        menuname: "Cireng",
        price: "Rp6.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Cireng",
        jenis: "Camilan",
        deskripsi: "Cireng, singkatan dari aci (tapioka) digoreng, adalah camilan khas Sunda yang terbuat dari tepung tapioka yang dibumbui, kemudian digoreng hingga krispi. Cireng biasa disajikan dengan saus kacang atau saus rasa pedas sebagai camilan lezat yang renyah.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu47,
        menuname: "Susu Jahe",
        price: "Rp8.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SusuJahe",
        jenis: "Minuman",
        deskripsi: "Susu Jahe adalah minuman hangat yang dibuat dari perpaduan susu dan jahe. Minuman ini sangat populer di Indonesia sebagai obat tradisional untuk menghangatkan tubuh dan meredakan masuk angin, menawarkan rasa yang unik dan kehangatan yang menyenangkan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu48,
        menuname: "Nasi Liwet",
        price: "Rp20.000",
        location: "Kehutanan",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/NasiLiwet",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Liwet adalah hidangan khas Sunda yang terbuat dari nasi yang dimasak dengan santan, serai, dan daun salam, memberikan aroma yang harum dan rasa yang gurih. Biasanya disajikan dengan ayam suwir, tempe goreng, dan sambal, menjadikannya makanan yang kaya rasa dan memuaskan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu49,
        menuname: "Donat Kentang",
        price: "Rp7.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/DonatKentang",
        jenis: "Camilan",
        deskripsi: "Donat Kentang adalah variasi unik dari donat biasa, di mana kentang tumbuk dicampur ke dalam adonan, memberikan tekstur yang lebih lembut dan rasa yang lebih kaya. Donat ini sering ditaburi dengan gula halus atau topping lainnya, menjadikannya camilan yang sangat disukai.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu50,
        menuname: "Es Cincau",
        price: "Rp8.000",
        location: "KOICA",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/EsCincau",
        jenis: "Minuman",
        deskripsi: "Es Cincau adalah minuman penyegar yang terbuat dari cincau hitam, jelly yang dibuat dari daun cincau yang diolah. Disajikan dengan es batu dan sirup gula, minuman ini sangat populer di kalangan masyarakat Indonesia sebagai penawar dahaga.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu51,
        menuname: "Mie Goreng",
        price: "Rp15.000",
        location: "GKU T 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/MieGoreng",
        jenis: "Makanan Berat",
        deskripsi: "Mie Goreng adalah hidangan mie yang ditumis dengan sayuran, daging, atau seafood dan bumbu rempah khas, memberikan rasa yang gurih dan sedikit pedas. Mie Goreng adalah makanan sehari-hari yang populer di banyak negara Asia karena mudah dibuat dan sangat lezat.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu52,
        menuname: "Tahu Sumedang",
        price: "Rp6.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/TahuSumedang",
        jenis: "Camilan",
        deskripsi: "Tahu Sumedang adalah tahu goreng yang berasal dari kota Sumedang di Jawa Barat, Indonesia. Tahu ini dikenal dengan teksturnya yang krispi di luar dan lembut di dalam, sering disajikan dengan cabai rawit sebagai camilan atau pendamping makanan utama.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu53,
        menuname: "Sop Iga",
        price: "Rp25.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SopIga",
        jenis: "Makanan Berat",
        deskripsi: "Sop Iga adalah sup yang kaya rasa, terbuat dari iga sapi yang dimasak lambat dalam kaldu dengan bumbu rempah-rempah. Hidangan ini disajikan panas dan sering kali dijadikan comfort food karena kelezatannya yang mampu menghangatkan dan mengenyangkan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu54,
        menuname: "Kerupuk",
        price: "Rp2.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Kerupuk",
        jenis: "Camilan",
        deskripsi: "Kerupuk adalah camilan gurih yang sangat populer di Indonesia, dibuat dari tepung dengan berbagai rasa seperti udang, ikan, atau bawang. Kerupuk digoreng hingga mengembang dan renyah, sering dijadikan pendamping makanan utama atau sebagai snack ringan.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu55,
        menuname: "Es Jeruk Kelapa",
        price: "Rp12.000",
        location: "GKU T 2",
        kampus: "Ganesha",
        link: "/MakananDetailPage/EsJerukKelapa",
        jenis: "Minuman",
        deskripsi: "Es Jeruk Kelapa adalah minuman segar yang terbuat dari perasan jeruk segar dan daging kelapa muda, sering ditambahkan es batu untuk menyegarkan. Minuman ini kaya akan vitamin dan sangat menyegarkan, ideal untuk dinikmati di hari yang panas.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu56,
        menuname: "Nasi Bebek",
        price: "Rp25.000",
        location: "Kehutanan",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/NasiBebek",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Bebek adalah hidangan yang terdiri dari bebek goreng atau bakar yang disajikan dengan nasi putih. Bebeknya marinasi dengan rempah-rempah kemudian digoreng atau dibakar hingga kulitnya krispi namun daging di dalamnya tetap lembut dan juicy.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu57,
        menuname: "Onde-Onde",
        price: "Rp6.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/OndeOnde",
        jenis: "Camilan",
        deskripsi: "Onde-Onde adalah kue bola kecil yang terbuat dari tepung ketan, diisi dengan pasta kacang hijau manis, kemudian dilumuri dengan biji wijen dan digoreng hingga krispi. Kue ini memiliki tekstur yang lembut di dalam dengan lapisan luar yang renyah, menawarkan perpaduan rasa manis dan gurih yang sempurna.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu58,
        menuname: "Es Pisang Ijo",
        price: "Rp10.000",
        location: "KOICA",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/EsPisangIjo",
        jenis: "Minuman",
        deskripsi: "Es Pisang Ijo adalah dessert khas dari Makassar, terdiri dari pisang yang dibalut adonan tepung berwarna hijau, kemudian dikukus dan disajikan dengan kuah santan dan es serut. Dessert ini menawarkan rasa manis yang unik dan tekstur yang menarik, sangat populer di Indonesia Timur.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu59,
        menuname: "Nasi Gudeg",
        price: "Rp20.000",
        location: "GKU T 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/NasiGudeg",
        jenis: "Makanan Berat",
        deskripsi: "Es Pisang Ijo adalah dessert khas dari Makassar, terdiri dari pisang yang dibalut adonan tepung berwarna hijau, kemudian dikukus dan disajikan dengan kuah santan dan es serut. Dessert ini menawarkan rasa manis yang unik dan tekstur yang menarik, sangat populer di Indonesia Timur.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu60,
        menuname: "Pisang Coklat",
        price: "Rp6.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/PisangCoklat",
        jenis: "Camilan",
        deskripsi: "Pisang Coklat adalah camilan manis yang terbuat dari pisang yang dipanggang atau digoreng lalu dilapisi dengan coklat leleh. Camilan ini sangat populer sebagai snack anak-anak atau sebagai dessert sederhana yang bisa dinikmati kapan saja.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu61,
        menuname: "Arsik",
        price: "Rp25.000",
        location: "GKU T 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Arsik",
        jenis: "Makanan Berat",
        deskripsi: "Arsik adalah hidangan khas Batak yang terbuat dari ikan mas yang dimasak dengan andaliman dan kunyit, memberikan cita rasa yang sangat khas dan pedas. Hidangan ini sering disajikan dalam acara-acara khusus dan dinikmati bersama keluarga.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu62,
        menuname: "Sate Ayam",
        price: "Rp20.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SateAyam",
        jenis: "Makanan Berat",
        deskripsi: "Sate Ayam adalah salah satu makanan khas Indonesia yang paling terkenal, terbuat dari potongan daging ayam yang ditusuk dengan tusuk sate dan dibakar. Sate ini biasanya disajikan dengan bumbu kacang atau kecap manis, membuatnya sangat lezat dan digemari banyak orang.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu63,
        menuname: "Es Teh Manis",
        price: "Rp5.000",
        location: "GKU Barrat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/EsTehManis",
        jenis: "Minuman",
        deskripsi: "Es Teh Manis adalah minuman yang sangat populer di Indonesia, terbuat dari teh hitam yang diseduh kuat dengan tambahan gula pasir dan es batu. Minuman ini sangat menyegarkan dan sering dijadikan pilihan untuk menemani makan siang atau sebagai penyegar di siang hari.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    },
    {
        image: menu64,
        menuname: "Nasi Padang",
        price: "Rp22.000",
        location: "Kehutanan",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/NasiPadang",
        jenis: "Makanan Berat",
        deskripsi: "Nasi Padang adalah makanan khas Minangkabau yang terkenal dengan berbagai jenis lauk pauk seperti rendang, ayam pop, dan sambal hijau. Setiap hidangan disajikan dengan nasi putih dan dikenal dengan kekayaan rasa serta rempah-rempahnya yang berlimpah, menjadikan Nasi Padang favorit banyak orang baik di Indonesia maupun internasional.",
        ulasan: "/PageUlasanFull/USushi",
        edit: "/AdminEditPage/GadoGado"
    }    
];

export const KANTIN = [
    {
        image: K_EC1,
        kantinName: "Kantin QnQ",
        location: "East Corner",
        Kampus: 'Ganesha',
        link : "/KantinDetailPage/KantinQnQ"
    },
    {
        image: K_EC2,
        kantinName: "Kantin Matahari",
        location: "East Corner",
        Kampus: 'Ganesha',
        link : "/KantinDetailPage/KantinMatahari"
    },
    {
        image: K_Barrac1,
        kantinName: "Kantin Barrac 1",
        location: "Barrac",
        Kampus: 'Ganesha',
        link : "/KantinDetailPage/KantinBarrac1"
    },
    {
        image: K_Barrac2,
        kantinName: "Kantin Barrac 2",
        location: "Barrac",
        Kampus: 'Ganesha',
        link : "/KantinDetailPage/KantinBarrac2"
    },
    {
        image: K_GKU2,
        kantinName: "Kyn's Coffee",
        location: "GKU 2",
        Kampus: 'Jatinangor',
        link : "/KantinDetailPage/KynsCoffee"
    },
    {
        image: K_GKUB1,
        kantinName: "Rafflesia",
        location: "GKU Barat",
        Kampus: 'Ganesha',
        link : "/KantinDetailPage/Rafflesia"
    },
    {
        image: K_GKUT1,
        kantinName: "Kantin GKUT 1",
        location: "GKU Timur",
        Kampus: 'Ganesha',
        link : "/KantinDetailPage/KantinGKUT1"
    },
    {
        image: K_Lab5,
        kantinName: "Kantin Labtek V",
        location: "Labtek V",
        Kampus: 'Ganesha',
        link : "/KantinDetailPage/KantinLabtek5"
    },
]

// export const REVIEW = [
//     {
//         name: "Aphrodite",
//         waktu: "4 jam yang lalu",
//         komentar: "enak polll...",
//         bintang: <div><FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" /></div>
//     },
//     {
//         name: "Demeter",
//         waktu: "12 jam yang lalu",
//         komentar: "kelazzzzz",
//         bintang: <div><FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" /></div>
//     },
//     {
//         name: "Ares",
//         waktu: "24 jam yang lalu",
//         komentar: "enak sekali SPARTAN!",
//         bintang: <div><FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             <FaStar className="w-6 h-6 mr-1" color="#ffc700" /></div>
//     },
//     {
//         name: "Kronos",
//         waktu: "1 menit yang lalu",
//         komentar: "MASAK YANG BENER SPARTAN!!!",
//         bintang: <div><FaStar className="w-6 h-6 mr-1" color="#ffc700" />
//             </div>
//     }

// ]