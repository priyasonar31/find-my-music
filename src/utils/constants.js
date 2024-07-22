// import artist1 from "./assets/fav/1.svg";
// import artist2 from "./assets/fav/2.svg";
// import artist3 from "./assets/fav/3.svg";
import recentlyPlayed1 from '../assets/recently-played/1.svg';
import recentlyPlayed2 from '../assets/recently-played/2.svg';
import recentlyPlayed3 from '../assets/recently-played/3.svg';
import recentlyPlayed4 from '../assets/recently-played/4.svg';

export const formFieldsConfig = [
    {
        field: "What type of music are you in the mood for?",
        questionNo: 2,
        values: [
            {
                title: 'Upbeat',
                link: './music/upbeat.jpeg'
            },
            {
                title: 'Calm',
                link: './music/calm.jpeg'
            },
            {
                title: 'Nostalgic',
                link: './music/nostalgic.jpg'
            },
            {
                title: 'Motivational',
                link: './music/motivational.jpeg'
            },
            {
                title: 'Romantic',
                link: './music/romantic.jpeg'
            },
            {
                title: 'Party',
                link: './music/party.jpeg'
            },
        ]
    },
    {
        field: "What genre of music do you usually enjoy?",
        questionNo: 3,
        values: [
            {
                title: 'Pop',
                link: './music/pop.jpeg'
            },
            {
                title: 'Rock',
                link: './music/rock.jpeg'
            },
            {
                title: 'Hip-Hop/Rap',
                link: './music/hiphop.jpeg'
            },
            {
                title: 'Classical',
                link: './music/classical.jpeg'
            },
            {
                title: 'Jazz',
                link: './music/jazz.jpeg'
            },
            {
                title: 'Electronic',
                link: './music/electronic.jpeg'
            },
        ]
    },
    {
        field: "What do you want to do while listening to the music?",
        questionNo: 4,
        values: [
            {
                title: 'Focus/Study',
                link: './action/study.jpg'
            },
            {
                title: 'Exercise',
                link: './action/exercise.jpg'
            },
            {
                title: 'Relax',
                link: './action/relax.jpg'
            },
            {
                title: 'Party',
                link: './action/party.jpg'
            },
            {
                title: 'Travel',
                link: './action/travel.jpg'
            },
            {
                title: 'Sleep',
                link: './action/sleeping.png'
            },
        ]
    },
    {
        field: "What is your favorite time period for music?",
        questionNo: 5,
        values: [
            {
                title: '60s and 70s',
                link: './era/60s.jpeg'
            },
            {
                title: '80s and 90s',
                link: './era/80s.jpeg'
            },
            {
                title: '2000s',
                link: './era/2000s.jpeg'
            },
            {
                title: '2010s',
                link: './era/2010s.jpg'
            },
            {
                title: 'Recent hits',
                link: './era/recent.jpeg'
            },
        ]
    },
];

export const rightPanelDetails = {
    1: {
        headerTitle: "Favorite Artist",
        containerDetails: [
            {
                imageLink: recentlyPlayed3,
                alt: 'The Weeknd',
                name: 'The Weeknd',
                address: 'Listeners 4M',
                isButton: true,
                isSelected: true,
            },
            {
                imageLink: recentlyPlayed4,
                alt: 'Ariana Grande',
                name: 'Ariana Grande',
                address: 'Listeners 3.4M',
                isButton: true,
                isSelected: false,
            },
            {
                imageLink: recentlyPlayed2,
                alt: 'Kehlani',
                name: 'Kehlani',
                address: 'Listeners 1.1M',
                isButton: true,
                isSelected: false,
            }
        ]
    },
    2: {
        headerTitle: "Recently Played",
        containerDetails: [
            {
                imageLink: recentlyPlayed1,
                alt: 'artist1',
                name: 'As It Was',
                address: 'Harry Styles',
                isButton: false,
                isSelected: true,
            },
            {
                imageLink: recentlyPlayed2,
                alt: 'artist1',
                name: 'As It Was',
                address: 'Harry Styles',
                isButton: false,
                isSelected: false,
            },
            {
                imageLink: recentlyPlayed3,
                alt: 'artist1',
                name: 'As It Was',
                address: 'Harry Styles',
                isButton: false,
                isSelected: true,
            },
            {
                imageLink: recentlyPlayed4,
                alt: 'artist1',
                name: 'As It Was',
                address: 'Harry Styles',
                isButton: false,
                isSelected: false,
            },
            {
                imageLink: recentlyPlayed1,
                alt: 'artist1',
                name: 'As It Was',
                address: 'Harry Styles',
                isButton: false,
                isSelected: false,
            },
        ]
    }
}

export const asycStatus = {
    PENDING: 'pending',
    SUCCESS: 'success',
    FAILURE: 'failure',
    INITIAL: 'initial'
}