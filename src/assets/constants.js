import goat        from './Goat.jpg'
import templateImg from './Templates.jpg'
import fontsImg    from './Fonts.jpg'
import editImg     from './Edit materials.jpg'
import gtakaaran   from './Gtakaaran.jpg'
import kallakadath from './Kallakadath.jpg'
import munthiri    from './Munthirikallu.jpg'
import sraav       from './sraav.jpg'
import karuppu       from './Karuppu.jpg'
import isakapatnam   from './Isakapatnam.jpg'
import meesayamurukku from './meesaya murukku.jpg'
import trendify from './Trendify.png'
import cb from './cb.jpg'
import raja from './raja.jpg'
import molly from './molly.png'
import nee from './nee.jpg'
import vadhandhi from './vadhandhi.jpg'
import paradise from './paradise.jpg'
import pyaarPremKalyanam from './ppk.jpg'
import onam from './onam.jpg'
import learndeck from './learndeck.png'
import Paradise from './Paradise.png'
import Dhurandar from './Dhurandar.png'
import balan from './balan.png'
import adharam from './adharam.jpg'

export const GOLD = '#f0dc82'
export const BG   = '#06060a'
export const WORKS = [
  { name: 'Paradise',            sub: '',         type: 'cut',   bg: '#160e0e', image: paradise           },
  { name: 'Adharam',            sub: '',         type: 'song',   bg: '#160e0e', image: adharam           },
  { name: 'Meesaya Murukku', sub: '',             type: 'cut',    bg: '#120808', image: meesayamurukku },
  { name: 'Pyaar Prem Kalyanam', sub: '',        type: 'cut',   bg: '#120808', image: pyaarPremKalyanam },
  { name: 'Sraav',           sub: '',       type: 'song',   bg: '#0e0e1a', image: sraav          },
  { name: 'Vadhandhi',           sub: '',       type: 'cut',   bg: '#0e0e1a', image: vadhandhi          },
   { name: 'Goat',            sub: '',         type: 'song',   bg: '#160e0e', image: goat           },
  { name: 'Karuppu',         sub: '',        type: 'cut',    bg: '#120808', image: karuppu        },
  { name: 'Gtakaaran',       sub: '',              type: 'song',   bg: '#0e1a10', image: gtakaaran      },
  { name: 'Kallakadath',     sub: '',        type: 'song',   bg: '#191200', image: kallakadath    },
  { name: 'Isakapatnam',     sub: '',        type: 'cut',    bg: '#120808', image: isakapatnam    },
  { name: 'Munthirikallu',   sub: '',          type: 'song',   bg: '#120808', image: munthiri       },
  { name: 'Click Basket',    sub: 'Influncer campaign',            type: 'client', bg: '#120808', image: cb             },
  { name: 'Trendify',        sub: 'Social media campaign',          type: 'client', bg: '#120808', image: trendify       },
  { name: 'Raja',            sub: '',       type: 'song',   bg: '#120808', image: raja           },
  { name: 'Nee',           sub: '',       type: 'song',   bg: '#0e0e1a', image: nee          },
  { name: 'Mollywood Times',        sub: 'District',            type: 'meme',   bg: '#120808', image: molly          },
  { name: 'Smart Hub',        sub: 'Online EdTech platform',            type: 'meme',   bg: '#120808', image: learndeck          },
  { name: 'Paradise',        sub: 'Movie Pr',            type: 'meme',   bg: '#120808', image: Paradise          },
  { name: 'Dhurandar',        sub: 'Movie Pr',            type: 'meme',   bg: '#120808', image: Dhurandar          },
  { name: 'Balan',        sub: 'District',            type: 'meme',   bg: '#120808', image: balan          },
  { name: 'Ay Ayya Theyy',            sub: '',       type: 'song',   bg: '#120808', image: onam           },
]

export const TYPE_LABELS = {
  cut: 'Movie',
  song: 'Song',
  meme: 'Meme',
  client: 'Client ',
}
 
export const FILMS_1 = [
  'Kalamkaval', 'Sarvam Maya', 'Vilayath Buddha', 'Chatha Pacha', 'Patriot',
  'Aadu 3', 'Ponman', 'Vaazha 2', 'Masthishka Maranam',
  'Rekhachithram', 'I Nobody', 'Sarkeet', 'Narivetta'
]

export const FILMS_2 = [
  'Varavu', 'Manjummel Boys', 'Pallichattambi', 'Balan', 'Mollywood Times',
  'Premalu','Karuppu', 'Athiradi', 'Madhuvidhu', 'Mohiniyattam',
  'Balti', 'Padakalam', 'Pharma', 'Ashan'
]

export const FILMS = FILMS_1

export const PICKS = [
  { title: 'Thoovanathumbikal',               rating: '★ 8.4', meta: '1987 · Romance', quote: 'A beautifully layered love story that explores love, longing and the complicated choices people make, wrapped in Padmarajan’s unforgettable storytelling.' },
  { title: 'Wake up Sid',             rating: '★ 8.5', meta: '2009 · Drama',            quote: 'A relatable coming-of-age journey about finding yourself, your passion, and your purpose in life.' },
{ title: 'Premam',               rating: '★ 8.3', meta: '2015 · Romance',      quote: 'A beautiful journey through love, heartbreak, friendship, and growing up.' },
{ title: 'Bangalore Days',       rating: '★ 8.3', meta: '2014 · Drama',        quote: 'A warm and nostalgic story about friendship, dreams, love, and finding your own path.' },
{ title: 'Charlie',              rating: '★ 8.0', meta: '2015 · Adventure',    quote: 'A magical journey of curiosity, freedom, and discovering life through another person.' },
]

export const TEMPLATES = [
  { image: templateImg, name: 'Template',       link: 'https://drive.google.com/drive/folders/1r8-jK-xOdzreciSQ9XqNffIvhc4Zt527?usp=sharing' },
  { image: fontsImg,    name: 'Fonts',          link: 'https://drive.google.com/drive/folders/1uG0VE01dKawqhPPnblgoY8jThQjzdWk1?usp=sharing' },
  { image: editImg,     name: 'Edit Materials', link: 'https://drive.google.com/drive/folders/1k5LmPMreHmBTzm8W2ixvTvzPMHSXrSve?usp=sharing' },
]

export const STATS = [
  { number: '857+', label: 'Posts made'   },
  { number: '5', label: 'years'    },
  { number: '20+',  label: 'Clients'      },
  { number: '∞',   label: 'Cinema love'  },
]
