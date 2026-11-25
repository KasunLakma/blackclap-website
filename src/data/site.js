export const site = {
    name: 'BLACKCLAP',
    subtitle: 'FILM & THEATRE PRODUCTIONS',
    fullName: 'BLACKCLAP Film & Theatre Productions',
    location: 'Kurunegala, Sri Lanka',
    established: 2020,

    // Contact තොරතුරු. ඩිරෙක්ටර් දුන්නාම පුරවන්න.
    // හිස් නම් (''), ඒ කොටස Contact page එකේ පෙන්වන්නේ නැහැ.
    email: '',
    phone: '',
    whatsapp: '', // රට කේතය සමග, + නැතුව. උදා: 94771234567
    address: '',

    // Web3Forms access key (පියවර 5 බලන්න)
    web3formsKey: 'YOUR_ACCESS_KEY_HERE',

    nav: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about', also: ['/history', '/services', '/founder'] },
        { name: 'Productions', href: '/theatre' },
        { name: 'Film & Creative', href: '/films' },
        { name: 'Awards', href: '/awards' },
        { name: 'Our Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ],

    // Links ලැබුනාම '#' වෙනුවට සැබෑ link දාන්න
    socials: [
        { name: 'YouTube', icon: 'simple-icons:youtube', href: 'https://youtube.com/@blackclapentertainment5890' },
        { name: 'Instagram', icon: 'simple-icons:instagram', href: '' },
        { name: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/share/1LuStkibJD/' },
        { name: 'Vimeo', icon: 'simple-icons:vimeo', href: '' },
    ],
};