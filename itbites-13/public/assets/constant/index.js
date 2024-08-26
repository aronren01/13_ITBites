import menu1 from "../../assets/Placeholder/Bakso.jpg";
import menu2 from "../../assets/Placeholder/Bebek Sambel Hitam.jpeg";
import menu3 from "../../assets/Placeholder/Cromboloni.jpeg";
import menu4 from "../../assets/Placeholder/Gyoza.jpeg";
import menu5 from "../../assets/Placeholder/Mie Kuah.jpg";
import menu6 from "../../assets/Placeholder/NasiGoreng.jpeg";
import menu7 from "../../assets/Placeholder/Soto Padang.jpeg";
import menu8 from "../../assets/Placeholder/Sushi.jpg";
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
        jenis: "Makanan Berat"
    },
    {
        image: menu2,
        menuname: "Bebek Hitam",
        price: "Rp30.000",
        location: "GKUT 1",
        kampus: "Ganesha",
        link: "/MakananDetailPage/BebekHitam",
        jenis: "Makanan Berat"
    },
    {
        image: menu3,
        menuname: "Cromboloni",
        price: "Rp20.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Cromboloni",
        jenis: "Camilan"
    },
    {
        image: menu4,
        menuname: "Gyoza",
        price: "Rp12.000",
        location: "GKU 2",
        kampus: "Jatinangor",
        link: "/MakananDetailPage/Gyoza",
        jenis: "Camilan"
    },
    {
        image: menu5,
        menuname: "Mie Kuah",
        price: "Rp10.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/MieKuah",
        jenis: "Makanan Berat"
    },
    {
        image: menu6,
        menuname: "Nasi Goreng",
        price: "Rp12.000",
        location: "Barrac",
        kampus: "Ganesha",
        link: "/MakananDetailPage/NasiGoreng",
        jenis: "Makanan Berat"
    },
    {
        image: menu7,
        menuname: "Soto Padang",
        price: "Rp15.000",
        location: "East Corner",
        kampus: "Ganesha",
        link: "/MakananDetailPage/SotoPadang",
        jenis: "Makanan Berat"
    },
    {
        image: menu8,
        menuname: "Sushi",
        price: "Rp20.000",
        location: "GKU Barat",
        kampus: "Ganesha",
        link: "/MakananDetailPage/Sushi",
        jenis: "Makanan Berat"
    },
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