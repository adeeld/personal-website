import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Machine Learning Ethereum Price Predictor',
        description: "Leveraged historical Ethereum price data, utilizing sophisticated algorithms to train and validate a predictive model, achieving a commendable 85% accuracy rate, markedly outperforming traditional market benchmarks",
        tools: ['Python', 'Pandas', 'Yahoo API', 'ML Time Series', 'Meta Prophet Library'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AI Flashcards & Stripe',
        description: 'I have designed and developed a full-stack web app for using flashcards in conjunction with a stripe payment processes',
        tools: ['NextJS', 'Tailwind CSS', "OpenAI", "Auth", "TypeScript", "StripeAPI"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Customer Support',
        description: 'Me and 4 team members built support for customers using AI',
        tools: ['React', 'Bootstrap', 'OpenAI', 'NextJS', 'AWS', 'TypeScript'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Pantry Tracker',
        description: "Built a pantry management application using Next.js, Material UI, and Firebase.",
        tools: ['NextJS', 'React', 'Firebase', 'GCP', "Vercel", "OpenAPI", "CI/CD"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },