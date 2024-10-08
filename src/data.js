// images
import Logo from '../src/assets/img/header/logo.svg';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: '',
  btnSignupText: '',
};

export const nav = [
  { name: 'Home', href: '#banner' },
  { name: 'About', href: '#about' },
  { name: 'Workouts', href: '#join' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Community', href: '#community' },
  { name: 'FAQ', href: '#faq' },
];

export const banner = {
  titlePart1: 'Manage Your Gym Now Online',
  titlePart2: '',
  subtitle:
    'We provide serious fitness but within a fun and friendly, safe space.',
  textBtn: 'Join Now',
  link: 'https://forms.gle/38dahvravRL7xhAV6',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Our misson',
  subtitle1:
    'Whether you have a gym or are planning to start one, your business can easily be overshadowed or beaten by established players and smart competitors already in the market. You need a perfect strategy to outsmart them and run your business effectively and professionally. To achieve this, leveraging the latest tools for growth is essential, including data analysis, digital marketing, SEO, SMO, Email, SMS, and WhatsApp marketing.',
  subtitle2:
    'Successful business management is the key to growth, and this is where Gymsewa - Gym Management Software comes in as a must-have tool for gym growth. Gymsewa has several advantages, such as helping with automated communication and event notification tools, ensuring that your gyms operations run smoothly and your members stay engaged.',
  link: 'Join Now',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Training programs',
  programs: [
    {
      image: ResistanceImg,
      name: 'Resistance',
    },
    {
      image: BoxingImg,
      name: 'Boxing',
    },
    {
      image: BodyPumpImg,
      name: 'Body Pump',
    },
    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: FullBodyImg,
      name: 'Full Body',
    },
    {
      image: FitnessImg,
      name: 'Fitness',
    },
    {
      image: BattleRopeImg,
      name: 'Battle Rope',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Basic',
      price: '500',
      list: [
        { name: 'Add Multiple Users' },
        { name: 'Add Unlimited Users' },
        { name: 'Permission Wise Access' },
        { name: '20 SMS Free' },
        { name: 'Free Support' },
        { name: 'Validity 1 Month' }
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '3500',
      list: [
        { name: 'Add Multiple Users' },
        { name: 'Add Unlimited Users' },
        { name: 'Permission Wise Access' },
        { name: '50 SMS Free' },
        { name: 'Free Support' },
        { name: 'Validity 3 Months' }
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '5000',
      list: [
        { name: 'Add Multiple Users' },
        { name: 'Add Unlimited Users' },
        { name: 'Permission Wise Access' },
        { name: '100 SMS Free' },
        { name: 'Free Support' },
        { name: 'Validity 1 Year' }
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Community',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Mark A.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“GymSewa changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. “GymSewa is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. “GymSewa is wonderful!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'How can I book a workout class?',
      answer:
        'You can book a workout class through our website or mobile app by selecting your desired class and time, then following the prompts to complete your reservation.',
    },
    {
      question: 'Can I pay by cash for my membership?',
      answer:
        'Yes, we accept cash payments for memberships at our gym. Please visit the front desk for assistance.',
    },
    {
      question: 'What age do I need to be to join?',
      answer:
        'You need to be at least 16 years old to join our gym. Minors must have parental consent.',
    },
    {
      question: 'Are there any lockers?',
      answer:
        'Yes, we provide lockers for all members to securely store their belongings while they work out.',
    },
    {
      question: 'How do I cancel my membership?',
      answer:
        'To cancel your membership, please contact our support team or visit the front desk. Make sure to review our cancellation policy beforehand.',
    },
    {
      question: 'Is there water available at the gym?',
      answer:
        'Yes, we provide water stations throughout the gym for members to stay hydrated during their workouts.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'We’ll keep you updated on the things you need to know about GymSewa. Nothing more, nothing less.',
  btnText: 'Join now',
  link: 'https://forms.gle/38dahvravRL7xhAV6'
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. GymSewa 2024.',
};