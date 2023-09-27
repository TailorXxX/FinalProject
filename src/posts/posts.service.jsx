import { posts } from '../config/BASE_URL';

export async function getComments(postId) {
  //   try {
  //     const res = await fetch(`${posts}/${postId}/comments`);

  //     if (!res.ok) {
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }

  //     const data = await res.json();

  //     return data.comments;
  //   } catch (error) {
  //     console.error(`There was a problem fetching the data: ${error.message}`);
  //     return [];
  //   }
  return [
    {
      id: 1,
      body: 'This is some awesome thinking!',
      postId: 100,
      user: {
        id: 63,
        username: 'eburras1q',
      },
    },
    {
      id: 2,
      body: 'What terrific math skills you’re showing!',
      postId: 27,
      user: {
        id: 71,
        username: 'omarsland1y',
      },
    },
    {
      id: 3,
      body: 'You are an amazing writer!',
      postId: 61,
      user: {
        id: 29,
        username: 'jissetts',
      },
    },
    {
      id: 4,
      body: 'Wow! You have improved so much!',
      postId: 8,
      user: {
        id: 19,
        username: 'bleveragei',
      },
    },
    {
      id: 5,
      body: 'Nice idea!',
      postId: 62,
      user: {
        id: 70,
        username: 'cmasurel1x',
      },
    },
    {
      id: 6,
      body: 'You are showing excellent understanding!',
      postId: 19,
      user: {
        id: 97,
        username: 'cdavydochkin2o',
      },
    },
    {
      id: 7,
      body: 'This is clear, concise, and complete!',
      postId: 47,
      user: {
        id: 22,
        username: 'froachel',
      },
    },
    {
      id: 8,
      body: 'What a powerful argument!',
      postId: 47,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 9,
      body: 'I knew you could do it!',
      postId: 64,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 10,
      body: 'Wonderful ideas!',
      postId: 4,
      user: {
        id: 35,
        username: 'mbrooksbanky',
      },
    },
    {
      id: 11,
      body: 'It was a pleasure to grade this!',
      postId: 2,
      user: {
        id: 68,
        username: 'rstrettle1v',
      },
    },
    {
      id: 12,
      body: 'Keep up the incredible work!',
      postId: 50,
      user: {
        id: 77,
        username: 'rkingswood24',
      },
    },
    {
      id: 13,
      body: 'My goodness, how impressive!',
      postId: 37,
      user: {
        id: 28,
        username: 'xisherwoodr',
      },
    },
    {
      id: 14,
      body: 'You’re showing inventive ideas!',
      postId: 30,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 15,
      body: 'You’ve shown so much growth!',
      postId: 44,
      user: {
        id: 76,
        username: 'cgaber23',
      },
    },
    {
      id: 16,
      body: 'Interesting thoughts!',
      postId: 71,
      user: {
        id: 100,
        username: 'pcumbes2r',
      },
    },
    {
      id: 17,
      body: 'I love your neat work!',
      postId: 68,
      user: {
        id: 37,
        username: 'nwytchard10',
      },
    },
    {
      id: 18,
      body: 'Doesn’t it feel good to do such great work?',
      postId: 41,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 19,
      body: 'First-rate work!',
      postId: 75,
      user: {
        id: 60,
        username: 'dlambarth1n',
      },
    },
    {
      id: 20,
      body: 'This is fascinating information!',
      postId: 48,
      user: {
        id: 17,
        username: 'vcholdcroftg',
      },
    },
    {
      id: 21,
      body: 'You inspire me!',
      postId: 29,
      user: {
        id: 5,
        username: 'kmeus4',
      },
    },
    {
      id: 22,
      body: 'This is right on target!',
      postId: 18,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 23,
      body: 'What an astounding observation!',
      postId: 73,
      user: {
        id: 14,
        username: 'mturleyd',
      },
    },
    {
      id: 24,
      body: 'This is very well thought out!',
      postId: 32,
      user: {
        id: 16,
        username: 'dpierrof',
      },
    },
    {
      id: 25,
      body: 'I can tell you’ve been practicing!',
      postId: 44,
      user: {
        id: 78,
        username: 'dbuist25',
      },
    },
    {
      id: 26,
      body: 'You’ve come a long way!',
      postId: 70,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 27,
      body: 'I can tell you’ve been paying attention!',
      postId: 60,
      user: {
        id: 74,
        username: 'ahinckes21',
      },
    },
    {
      id: 28,
      body: 'Reading this made my day!',
      postId: 85,
      user: {
        id: 85,
        username: 'kpondjones2c',
      },
    },
    {
      id: 29,
      body: 'This is very perceptive!',
      postId: 13,
      user: {
        id: 30,
        username: 'kdulyt',
      },
    },
    {
      id: 30,
      body: 'What an accomplishment!',
      postId: 23,
      user: {
        id: 36,
        username: 'dalmondz',
      },
    },
    {
      id: 31,
      body: 'You make a great point here!',
      postId: 12,
      user: {
        id: 93,
        username: 'dduggan2k',
      },
    },
    {
      id: 32,
      body: 'I really like your creativity!',
      postId: 2,
      user: {
        id: 39,
        username: 'lgherardi12',
      },
    },
    {
      id: 33,
      body: 'You are an exceptional student!',
      postId: 34,
      user: {
        id: 97,
        username: 'cdavydochkin2o',
      },
    },
    {
      id: 34,
      body: 'You have brilliant thoughts!',
      postId: 45,
      user: {
        id: 100,
        username: 'pcumbes2r',
      },
    },
    {
      id: 35,
      body: 'This is beautiful!',
      postId: 26,
      user: {
        id: 24,
        username: 'brickeardn',
      },
    },
    {
      id: 36,
      body: 'Dazzling examples!',
      postId: 30,
      user: {
        id: 83,
        username: 'gconford2a',
      },
    },
    {
      id: 37,
      body: 'Vivid language choices!',
      postId: 62,
      user: {
        id: 74,
        username: 'ahinckes21',
      },
    },
    {
      id: 38,
      body: 'You express your ideas so well!',
      postId: 56,
      user: {
        id: 72,
        username: 'mcrumpe1z',
      },
    },
    {
      id: 39,
      body: 'This was a delight to read!',
      postId: 72,
      user: {
        id: 19,
        username: 'bleveragei',
      },
    },
    {
      id: 40,
      body: 'This is a persuasive argument!',
      postId: 64,
      user: {
        id: 43,
        username: 'kbrecknock16',
      },
    },
    {
      id: 41,
      body: 'You show an impressive grasp on this subject!',
      postId: 63,
      user: {
        id: 46,
        username: 'rmcritchie19',
      },
    },
    {
      id: 42,
      body: 'You are gifted!',
      postId: 40,
      user: {
        id: 39,
        username: 'lgherardi12',
      },
    },
    {
      id: 43,
      body: 'You are so clever!',
      postId: 93,
      user: {
        id: 45,
        username: 'pidill18',
      },
    },
    {
      id: 44,
      body: 'What a great learner you are!',
      postId: 80,
      user: {
        id: 12,
        username: 'rhallawellb',
      },
    },
    {
      id: 45,
      body: 'I value these thoughts!',
      postId: 43,
      user: {
        id: 74,
        username: 'ahinckes21',
      },
    },
    {
      id: 46,
      body: 'You are such a motivated worker!',
      postId: 79,
      user: {
        id: 43,
        username: 'kbrecknock16',
      },
    },
    {
      id: 47,
      body: 'You show great attention to detail!',
      postId: 41,
      user: {
        id: 29,
        username: 'jissetts',
      },
    },
    {
      id: 48,
      body: 'You are so artistic!',
      postId: 91,
      user: {
        id: 92,
        username: 'clambol2j',
      },
    },
    {
      id: 49,
      body: 'I am so proud of you!',
      postId: 65,
      user: {
        id: 36,
        username: 'dalmondz',
      },
    },
    {
      id: 50,
      body: 'Lovely handwriting!',
      postId: 78,
      user: {
        id: 26,
        username: 'lgronaverp',
      },
    },
    {
      id: 51,
      body: 'Great example!',
      postId: 92,
      user: {
        id: 42,
        username: 'mhaslegrave15',
      },
    },
    {
      id: 52,
      body: 'You worked so hard!',
      postId: 93,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 53,
      body: 'You are a star!',
      postId: 74,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 54,
      body: 'You learned so much!',
      postId: 93,
      user: {
        id: 4,
        username: 'yraigatt3',
      },
    },
    {
      id: 55,
      body: 'You are so smart!',
      postId: 56,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 56,
      body: 'You’ve made a lot of progress!',
      postId: 3,
      user: {
        id: 21,
        username: 'ckensleyk',
      },
    },
    {
      id: 57,
      body: 'What bright thinking!',
      postId: 78,
      user: {
        id: 77,
        username: 'rkingswood24',
      },
    },
    {
      id: 58,
      body: 'You rocked this!',
      postId: 3,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 59,
      body: 'Great thinking!',
      postId: 48,
      user: {
        id: 49,
        username: 'ssarjant1c',
      },
    },
    {
      id: 60,
      body: 'You did your best!',
      postId: 79,
      user: {
        id: 73,
        username: 'wfeldon20',
      },
    },
    {
      id: 61,
      body: 'I love this!',
      postId: 99,
      user: {
        id: 2,
        username: 'hbingley1',
      },
    },
    {
      id: 62,
      body: 'You can do hard things!',
      postId: 57,
      user: {
        id: 21,
        username: 'ckensleyk',
      },
    },
    {
      id: 63,
      body: 'You are talented!',
      postId: 77,
      user: {
        id: 55,
        username: 'ajozef1i',
      },
    },
    {
      id: 64,
      body: 'You amaze me!',
      postId: 5,
      user: {
        id: 39,
        username: 'lgherardi12',
      },
    },
    {
      id: 65,
      body: 'You discovered something new!',
      postId: 15,
      user: {
        id: 34,
        username: 'aaughtonx',
      },
    },
    {
      id: 66,
      body: 'I enjoyed reading this!',
      postId: 23,
      user: {
        id: 18,
        username: 'sberminghamh',
      },
    },
    {
      id: 67,
      body: 'You are so ambitious!',
      postId: 23,
      user: {
        id: 98,
        username: 'zstenning2p',
      },
    },
    {
      id: 68,
      body: 'I appreciate your hard work!',
      postId: 85,
      user: {
        id: 46,
        username: 'rmcritchie19',
      },
    },
    {
      id: 69,
      body: 'This is magical work!',
      postId: 28,
      user: {
        id: 45,
        username: 'pidill18',
      },
    },
    {
      id: 70,
      body: 'You did it!',
      postId: 18,
      user: {
        id: 99,
        username: 'flesslie2q',
      },
    },
    {
      id: 71,
      body: 'You’ve achieved so much!',
      postId: 25,
      user: {
        id: 94,
        username: 'jtossell2l',
      },
    },
    {
      id: 72,
      body: 'You really challenged yourself!',
      postId: 29,
      user: {
        id: 72,
        username: 'mcrumpe1z',
      },
    },
    {
      id: 73,
      body: 'I admire you!',
      postId: 72,
      user: {
        id: 12,
        username: 'rhallawellb',
      },
    },
    {
      id: 74,
      body: 'You are unstoppable!',
      postId: 3,
      user: {
        id: 42,
        username: 'mhaslegrave15',
      },
    },
    {
      id: 75,
      body: 'You have great ideas!',
      postId: 48,
      user: {
        id: 85,
        username: 'kpondjones2c',
      },
    },
    {
      id: 76,
      body: 'This really sparkles!',
      postId: 9,
      user: {
        id: 17,
        username: 'vcholdcroftg',
      },
    },
    {
      id: 77,
      body: 'What a great vision you have!',
      postId: 40,
      user: {
        id: 37,
        username: 'nwytchard10',
      },
    },
    {
      id: 78,
      body: 'You have really improved!',
      postId: 96,
      user: {
        id: 59,
        username: 'klife1m',
      },
    },
    {
      id: 79,
      body: 'You’ve really grown!',
      postId: 6,
      user: {
        id: 3,
        username: 'rshawe2',
      },
    },
    {
      id: 80,
      body: 'You are a snappy problem-solver!',
      postId: 23,
      user: {
        id: 27,
        username: 'fokillq',
      },
    },
    {
      id: 81,
      body: 'This really shines!',
      postId: 63,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 82,
      body: 'You make me want to learn more!',
      postId: 90,
      user: {
        id: 53,
        username: 'gmaccumeskey1g',
      },
    },
    {
      id: 83,
      body: 'This made me smile!',
      postId: 34,
      user: {
        id: 5,
        username: 'kmeus4',
      },
    },
    {
      id: 84,
      body: 'You are a winner!',
      postId: 69,
      user: {
        id: 99,
        username: 'flesslie2q',
      },
    },
    {
      id: 85,
      body: 'I love your creativity!',
      postId: 10,
      user: {
        id: 98,
        username: 'zstenning2p',
      },
    },
    {
      id: 86,
      body: 'You are so intelligent!',
      postId: 31,
      user: {
        id: 92,
        username: 'clambol2j',
      },
    },
    {
      id: 87,
      body: 'You should be proud!',
      postId: 15,
      user: {
        id: 47,
        username: 'rlangston1a',
      },
    },
    {
      id: 88,
      body: 'You have amazing potential!',
      postId: 81,
      user: {
        id: 8,
        username: 'ggude7',
      },
    },
    {
      id: 89,
      body: 'This is top-notch!',
      postId: 66,
      user: {
        id: 18,
        username: 'sberminghamh',
      },
    },
    {
      id: 90,
      body: 'You deserve a high five!',
      postId: 55,
      user: {
        id: 33,
        username: 'gsilcockw',
      },
    },
    {
      id: 91,
      body: 'Way to think it through!',
      postId: 83,
      user: {
        id: 58,
        username: 'nworley1l',
      },
    },
    {
      id: 92,
      body: 'This blew me away!',
      postId: 100,
      user: {
        id: 92,
        username: 'clambol2j',
      },
    },
    {
      id: 93,
      body: 'These are fabulous ideas!',
      postId: 29,
      user: {
        id: 55,
        username: 'ajozef1i',
      },
    },
    {
      id: 94,
      body: 'This gets my seal of approval!',
      postId: 57,
      user: {
        id: 66,
        username: 'hfasey1t',
      },
    },
    {
      id: 95,
      body: 'This is quality work!',
      postId: 49,
      user: {
        id: 54,
        username: 'bpetts1h',
      },
    },
    {
      id: 96,
      body: 'You reached your goal!',
      postId: 90,
      user: {
        id: 56,
        username: 'oyakushkev1j',
      },
    },
    {
      id: 97,
      body: 'Out of this world!',
      postId: 58,
      user: {
        id: 71,
        username: 'omarsland1y',
      },
    },
    {
      id: 98,
      body: 'You’re on top of it!',
      postId: 53,
      user: {
        id: 89,
        username: 'cdwyr2g',
      },
    },
    {
      id: 99,
      body: 'I can tell this is your best effort!',
      postId: 39,
      user: {
        id: 61,
        username: 'cepgrave1o',
      },
    },
    {
      id: 100,
      body: 'I love how motivated you are!',
      postId: 59,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 101,
      body: 'You are so focused!',
      postId: 95,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 102,
      body: 'I’m so lucky to grade your work!',
      postId: 40,
      user: {
        id: 38,
        username: 'igannan11',
      },
    },
    {
      id: 103,
      body: 'I love your enthusiasm!',
      postId: 53,
      user: {
        id: 52,
        username: 'gmein1f',
      },
    },
    {
      id: 104,
      body: 'I think this is the best I’ve seen till now.',
      postId: 3,
      user: {
        id: 46,
        username: 'rmcritchie19',
      },
    },
    {
      id: 105,
      body: 'Not enough for me, you are everything.',
      postId: 22,
      user: {
        id: 84,
        username: 'dmantle2b',
      },
    },
    {
      id: 106,
      body: 'Just when I couldn’t love you more. You posted this pic and my jaw dropped to the floor.',
      postId: 69,
      user: {
        id: 9,
        username: 'nloiterton8',
      },
    },
    {
      id: 107,
      body: 'You are a symbol of beauty.',
      postId: 63,
      user: {
        id: 63,
        username: 'eburras1q',
      },
    },
    {
      id: 108,
      body: 'Surely you are the most beautiful woman alive, the most that I’ve seen.',
      postId: 26,
      user: {
        id: 38,
        username: 'igannan11',
      },
    },
    {
      id: 109,
      body: 'You mean the world to me.',
      postId: 43,
      user: {
        id: 14,
        username: 'mturleyd',
      },
    },
    {
      id: 110,
      body: 'The word pretty is worthless without you.',
      postId: 26,
      user: {
        id: 64,
        username: 'gfernandes1r',
      },
    },
    {
      id: 111,
      body: 'You are the definition of Beauty.',
      postId: 12,
      user: {
        id: 2,
        username: 'hbingley1',
      },
    },
    {
      id: 112,
      body: 'Flawless outstanding eccentric lovely beauty.',
      postId: 72,
      user: {
        id: 21,
        username: 'ckensleyk',
      },
    },
    {
      id: 113,
      body: 'The stars, the moon, and the sun are minor to me since you sparkle brighter than all of them.',
      postId: 69,
      user: {
        id: 20,
        username: 'aeatockj',
      },
    },
    {
      id: 114,
      body: 'You are graceful.',
      postId: 79,
      user: {
        id: 97,
        username: 'cdavydochkin2o',
      },
    },
    {
      id: 115,
      body: 'Surely you would have been arrested if looking immensely beautiful was a crime.',
      postId: 96,
      user: {
        id: 39,
        username: 'lgherardi12',
      },
    },
    {
      id: 116,
      body: 'You’re an incredibly stunning, a really pretty, beautiful woman.',
      postId: 47,
      user: {
        id: 62,
        username: 'mpoyner1p',
      },
    },
    {
      id: 117,
      body: 'I guess this is your best look, you look beautiful in this outfit.',
      postId: 77,
      user: {
        id: 50,
        username: 'xlinster1d',
      },
    },
    {
      id: 118,
      body: 'You look mesmerizing.',
      postId: 94,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 119,
      body: 'I wonder how cute you would be looking when you sleep.',
      postId: 22,
      user: {
        id: 79,
        username: 'pmoraleda26',
      },
    },
    {
      id: 120,
      body: 'You are so much lovely.',
      postId: 72,
      user: {
        id: 6,
        username: 'jtreleven5',
      },
    },
    {
      id: 121,
      body: 'I love your curly hair.',
      postId: 38,
      user: {
        id: 98,
        username: 'zstenning2p',
      },
    },
    {
      id: 122,
      body: 'Your dressing sense is appreciable.',
      postId: 59,
      user: {
        id: 43,
        username: 'kbrecknock16',
      },
    },
    {
      id: 123,
      body: 'You are the sweetest girl I have ever seen.',
      postId: 34,
      user: {
        id: 43,
        username: 'kbrecknock16',
      },
    },
    {
      id: 124,
      body: 'I love that straight hair of yours.',
      postId: 18,
      user: {
        id: 68,
        username: 'rstrettle1v',
      },
    },
    {
      id: 125,
      body: 'You are pleasing.',
      postId: 84,
      user: {
        id: 48,
        username: 'jevanson1b',
      },
    },
    {
      id: 126,
      body: 'Just ‘WOW’ for your natural beauty.',
      postId: 93,
      user: {
        id: 9,
        username: 'nloiterton8',
      },
    },
    {
      id: 127,
      body: 'I love how comfortable you are in your world.',
      postId: 73,
      user: {
        id: 27,
        username: 'fokillq',
      },
    },
    {
      id: 128,
      body: 'You are very much adorable.',
      postId: 85,
      user: {
        id: 88,
        username: 'agreenhouse2f',
      },
    },
    {
      id: 129,
      body: 'You look even more pretty without makeup.',
      postId: 35,
      user: {
        id: 36,
        username: 'dalmondz',
      },
    },
    {
      id: 130,
      body: 'I feel so happy to be with you.',
      postId: 28,
      user: {
        id: 76,
        username: 'cgaber23',
      },
    },
    {
      id: 131,
      body: 'You are my safest place.',
      postId: 1,
      user: {
        id: 7,
        username: 'dpettegre6',
      },
    },
    {
      id: 132,
      body: 'You look beautiful in that dress.',
      postId: 76,
      user: {
        id: 94,
        username: 'jtossell2l',
      },
    },
    {
      id: 133,
      body: 'I wish I had your makeup.',
      postId: 66,
      user: {
        id: 78,
        username: 'dbuist25',
      },
    },
    {
      id: 134,
      body: 'You are stunning.',
      postId: 56,
      user: {
        id: 50,
        username: 'xlinster1d',
      },
    },
    {
      id: 135,
      body: 'That natural beauty tho.',
      postId: 19,
      user: {
        id: 35,
        username: 'mbrooksbanky',
      },
    },
    {
      id: 136,
      body: 'You have the most beautiful, sparkling eyes.',
      postId: 83,
      user: {
        id: 66,
        username: 'hfasey1t',
      },
    },
    {
      id: 137,
      body: 'You have the most beautiful smile.',
      postId: 67,
      user: {
        id: 86,
        username: 'whuman2d',
      },
    },
    {
      id: 138,
      body: 'Your sense of fashion is great.',
      postId: 2,
      user: {
        id: 4,
        username: 'yraigatt3',
      },
    },
    {
      id: 139,
      body: 'I like your hair.',
      postId: 99,
      user: {
        id: 52,
        username: 'gmein1f',
      },
    },
    {
      id: 140,
      body: 'You look more beautiful than in the photo.',
      postId: 34,
      user: {
        id: 64,
        username: 'gfernandes1r',
      },
    },
    {
      id: 141,
      body: 'You look stunning.',
      postId: 94,
      user: {
        id: 37,
        username: 'nwytchard10',
      },
    },
    {
      id: 142,
      body: 'You’re classy.',
      postId: 59,
      user: {
        id: 55,
        username: 'ajozef1i',
      },
    },
    {
      id: 143,
      body: 'You’re very trendy.',
      postId: 68,
      user: {
        id: 99,
        username: 'flesslie2q',
      },
    },
    {
      id: 144,
      body: 'Your true colors are beautiful.',
      postId: 17,
      user: {
        id: 32,
        username: 'lskeelv',
      },
    },
    {
      id: 145,
      body: 'Getting lost in your chroma can prove fatal.',
      postId: 63,
      user: {
        id: 93,
        username: 'dduggan2k',
      },
    },
    {
      id: 146,
      body: 'You’ve got a beautiful heart.',
      postId: 9,
      user: {
        id: 23,
        username: 'beykelhofm',
      },
    },
    {
      id: 147,
      body: 'Inside out; you are beautiful.',
      postId: 63,
      user: {
        id: 96,
        username: 'bgoby2n',
      },
    },
    {
      id: 148,
      body: 'You take my breath away.',
      postId: 66,
      user: {
        id: 59,
        username: 'klife1m',
      },
    },
    {
      id: 149,
      body: 'I love how expressive your eyes are.',
      postId: 79,
      user: {
        id: 32,
        username: 'lskeelv',
      },
    },
    {
      id: 150,
      body: 'Your beauty is one of the things I like about you.',
      postId: 95,
      user: {
        id: 35,
        username: 'mbrooksbanky',
      },
    },
    {
      id: 151,
      body: 'Honestly, you are beautiful.',
      postId: 35,
      user: {
        id: 62,
        username: 'mpoyner1p',
      },
    },
    {
      id: 152,
      body: 'You’re helping us sound lovely.',
      postId: 2,
      user: {
        id: 73,
        username: 'wfeldon20',
      },
    },
    {
      id: 153,
      body: 'The beauty lies within the soul.',
      postId: 22,
      user: {
        id: 91,
        username: 'hyaknov2i',
      },
    },
    {
      id: 154,
      body: 'It’s refreshing, your beauty.',
      postId: 92,
      user: {
        id: 80,
        username: 'vkohrt27',
      },
    },
    {
      id: 155,
      body: 'You are a whisper of perfection.',
      postId: 90,
      user: {
        id: 67,
        username: 'gbarhams1u',
      },
    },
    {
      id: 156,
      body: 'You’ve got lovely eyes.',
      postId: 74,
      user: {
        id: 5,
        username: 'kmeus4',
      },
    },
    {
      id: 157,
      body: 'There are endless possibilities for your beauty.',
      postId: 60,
      user: {
        id: 25,
        username: 'dfundello',
      },
    },
    {
      id: 158,
      body: 'You are a true beauty epitome.',
      postId: 64,
      user: {
        id: 6,
        username: 'jtreleven5',
      },
    },
    {
      id: 159,
      body: 'You’re beautiful and enthusiastic.',
      postId: 84,
      user: {
        id: 68,
        username: 'rstrettle1v',
      },
    },
    {
      id: 160,
      body: 'I see the power of your grace.',
      postId: 41,
      user: {
        id: 60,
        username: 'dlambarth1n',
      },
    },
    {
      id: 161,
      body: 'You’re like the sun’s ray.',
      postId: 99,
      user: {
        id: 11,
        username: 'acharlota',
      },
    },
    {
      id: 162,
      body: 'You’re a divine present.',
      postId: 8,
      user: {
        id: 85,
        username: 'kpondjones2c',
      },
    },
    {
      id: 163,
      body: 'Beauty is just one of the beautiful features you have.',
      postId: 23,
      user: {
        id: 8,
        username: 'ggude7',
      },
    },
    {
      id: 164,
      body: 'The expression is lovely.',
      postId: 10,
      user: {
        id: 98,
        username: 'zstenning2p',
      },
    },
    {
      id: 165,
      body: 'Sorry is overcome by the grace.',
      postId: 41,
      user: {
        id: 27,
        username: 'fokillq',
      },
    },
    {
      id: 166,
      body: 'You are true, beautiful and pure.',
      postId: 79,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 167,
      body: 'You’re flawless.',
      postId: 99,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 168,
      body: 'You have a beautiful smile.',
      postId: 15,
      user: {
        id: 27,
        username: 'fokillq',
      },
    },
    {
      id: 169,
      body: 'Your beauty is amazing.',
      postId: 43,
      user: {
        id: 87,
        username: 'fschlagman2e',
      },
    },
    {
      id: 170,
      body: 'I see the beauty of your life.',
      postId: 67,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 171,
      body: 'I think you’re fascinated.',
      postId: 91,
      user: {
        id: 8,
        username: 'ggude7',
      },
    },
    {
      id: 172,
      body: 'You’re energetic, aren’t ya?',
      postId: 7,
      user: {
        id: 14,
        username: 'mturleyd',
      },
    },
    {
      id: 173,
      body: 'Impressive pic.',
      postId: 6,
      user: {
        id: 70,
        username: 'cmasurel1x',
      },
    },
    {
      id: 174,
      body: 'Strong and confident.',
      postId: 92,
      user: {
        id: 93,
        username: 'dduggan2k',
      },
    },
    {
      id: 175,
      body: 'The picture is lit!',
      postId: 93,
      user: {
        id: 87,
        username: 'fschlagman2e',
      },
    },
    {
      id: 176,
      body: 'Vibes everywhere!',
      postId: 87,
      user: {
        id: 38,
        username: 'igannan11',
      },
    },
    {
      id: 177,
      body: 'I love your straight hair with a slight flix.',
      postId: 37,
      user: {
        id: 23,
        username: 'beykelhofm',
      },
    },
    {
      id: 178,
      body: 'The most stunning thing I’ve seen today.',
      postId: 65,
      user: {
        id: 79,
        username: 'pmoraleda26',
      },
    },
    {
      id: 179,
      body: 'Your smile makes everyone happy.',
      postId: 73,
      user: {
        id: 63,
        username: 'eburras1q',
      },
    },
    {
      id: 180,
      body: 'You are so gorgeous.',
      postId: 7,
      user: {
        id: 5,
        username: 'kmeus4',
      },
    },
    {
      id: 181,
      body: 'You made my day.',
      postId: 81,
      user: {
        id: 62,
        username: 'mpoyner1p',
      },
    },
    {
      id: 182,
      body: 'This beauty has no boundaries.',
      postId: 76,
      user: {
        id: 45,
        username: 'pidill18',
      },
    },
    {
      id: 183,
      body: 'No one makes me smile more than you.',
      postId: 53,
      user: {
        id: 79,
        username: 'pmoraleda26',
      },
    },
    {
      id: 184,
      body: 'Lady, you make me feel like a man.',
      postId: 61,
      user: {
        id: 50,
        username: 'xlinster1d',
      },
    },
    {
      id: 185,
      body: 'I just can’t stop wondering about you.',
      postId: 70,
      user: {
        id: 70,
        username: 'cmasurel1x',
      },
    },
    {
      id: 186,
      body: 'When I hear your voice, my morning is all my day.',
      postId: 18,
      user: {
        id: 54,
        username: 'bpetts1h',
      },
    },
    {
      id: 187,
      body: 'I am now not thankful for anything aside from having you in my life.',
      postId: 44,
      user: {
        id: 83,
        username: 'gconford2a',
      },
    },
    {
      id: 188,
      body: 'I can never get angry with you, your love is incompetent.',
      postId: 90,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 189,
      body: 'If there is no “you”, then my life means nothing.',
      postId: 22,
      user: {
        id: 53,
        username: 'gmaccumeskey1g',
      },
    },
    {
      id: 190,
      body: 'I get attracted to you when you try to make me a better person.',
      postId: 17,
      user: {
        id: 15,
        username: 'kminchelle',
      },
    },
    {
      id: 191,
      body: 'I want to see you.',
      postId: 97,
      user: {
        id: 35,
        username: 'mbrooksbanky',
      },
    },
    {
      id: 192,
      body: 'Hehe. cute monkey.',
      postId: 92,
      user: {
        id: 93,
        username: 'dduggan2k',
      },
    },
    {
      id: 193,
      body: 'You’re too short, just like your brain.',
      postId: 32,
      user: {
        id: 32,
        username: 'lskeelv',
      },
    },
    {
      id: 194,
      body: 'Hey, you brainless cutie….',
      postId: 75,
      user: {
        id: 89,
        username: 'cdwyr2g',
      },
    },
    {
      id: 195,
      body: 'I am still wondering how can god create this kind of bizarre human being who is cute, adorable at the same time has no brain.',
      postId: 11,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 196,
      body: 'You are my precious fool.',
      postId: 11,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 197,
      body: 'Hello idiot!',
      postId: 30,
      user: {
        id: 32,
        username: 'lskeelv',
      },
    },
    {
      id: 198,
      body: 'What did I just see, that’s amazing, oh sorry it’s you!',
      postId: 78,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 199,
      body: 'Cute little bitch.',
      postId: 87,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 200,
      body: 'Surely you’d have used a photo editor.',
      postId: 57,
      user: {
        id: 79,
        username: 'pmoraleda26',
      },
    },
    {
      id: 201,
      body: 'Nice make-up.',
      postId: 5,
      user: {
        id: 59,
        username: 'klife1m',
      },
    },
    {
      id: 202,
      body: 'Hey Guys! here you can get to know about all the latest updates of Instagram filters.',
      postId: 72,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 203,
      body: 'Pretty enough.',
      postId: 46,
      user: {
        id: 99,
        username: 'flesslie2q',
      },
    },
    {
      id: 204,
      body: 'How Gorgeous.',
      postId: 81,
      user: {
        id: 61,
        username: 'cepgrave1o',
      },
    },
    {
      id: 205,
      body: 'You are ravishing.',
      postId: 20,
      user: {
        id: 68,
        username: 'rstrettle1v',
      },
    },
    {
      id: 206,
      body: 'Why are you so beautiful?',
      postId: 71,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 207,
      body: 'You are amazing.',
      postId: 18,
      user: {
        id: 56,
        username: 'oyakushkev1j',
      },
    },
    {
      id: 208,
      body: 'Lit!',
      postId: 21,
      user: {
        id: 93,
        username: 'dduggan2k',
      },
    },
    {
      id: 209,
      body: 'Your eyes are like stars.',
      postId: 3,
      user: {
        id: 22,
        username: 'froachel',
      },
    },
    {
      id: 210,
      body: 'You are just inexplicable.',
      postId: 38,
      user: {
        id: 80,
        username: 'vkohrt27',
      },
    },
    {
      id: 211,
      body: 'Damn, what are you made of?',
      postId: 81,
      user: {
        id: 81,
        username: 'capplewhite28',
      },
    },
    {
      id: 212,
      body: 'You seem pretty.',
      postId: 80,
      user: {
        id: 70,
        username: 'cmasurel1x',
      },
    },
    {
      id: 213,
      body: 'You are engaging.',
      postId: 2,
      user: {
        id: 71,
        username: 'omarsland1y',
      },
    },
    {
      id: 214,
      body: 'This one’s stunning.',
      postId: 4,
      user: {
        id: 96,
        username: 'bgoby2n',
      },
    },
    {
      id: 215,
      body: 'Damn that cheeks.',
      postId: 38,
      user: {
        id: 18,
        username: 'sberminghamh',
      },
    },
    {
      id: 216,
      body: 'You are winsome.',
      postId: 6,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 217,
      body: 'You are exquisite.',
      postId: 77,
      user: {
        id: 87,
        username: 'fschlagman2e',
      },
    },
    {
      id: 218,
      body: 'Hello, Miss world.',
      postId: 68,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 219,
      body: 'You are elegant.',
      postId: 34,
      user: {
        id: 7,
        username: 'dpettegre6',
      },
    },
    {
      id: 220,
      body: 'Mine.',
      postId: 13,
      user: {
        id: 66,
        username: 'hfasey1t',
      },
    },
    {
      id: 221,
      body: 'Your charm is never-ending.',
      postId: 35,
      user: {
        id: 38,
        username: 'igannan11',
      },
    },
    {
      id: 222,
      body: 'Your smile is beautiful.',
      postId: 29,
      user: {
        id: 1,
        username: 'atuny0',
      },
    },
    {
      id: 223,
      body: 'Nice outfit.',
      postId: 64,
      user: {
        id: 63,
        username: 'eburras1q',
      },
    },
    {
      id: 224,
      body: 'Those earrings suit you.',
      postId: 12,
      user: {
        id: 100,
        username: 'pcumbes2r',
      },
    },
    {
      id: 225,
      body: 'You are graceful.',
      postId: 27,
      user: {
        id: 91,
        username: 'hyaknov2i',
      },
    },
    {
      id: 226,
      body: 'Cutiepie.',
      postId: 3,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 227,
      body: 'So lovely.',
      postId: 51,
      user: {
        id: 45,
        username: 'pidill18',
      },
    },
    {
      id: 228,
      body: 'Your charm is irresistible.',
      postId: 52,
      user: {
        id: 47,
        username: 'rlangston1a',
      },
    },
    {
      id: 229,
      body: 'See your beauty.',
      postId: 25,
      user: {
        id: 14,
        username: 'mturleyd',
      },
    },
    {
      id: 230,
      body: 'You are mine.',
      postId: 17,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 231,
      body: 'My heartbeat.',
      postId: 59,
      user: {
        id: 47,
        username: 'rlangston1a',
      },
    },
    {
      id: 232,
      body: 'The most pretty girl around.',
      postId: 96,
      user: {
        id: 96,
        username: 'bgoby2n',
      },
    },
    {
      id: 233,
      body: 'Probably the next miss world.',
      postId: 67,
      user: {
        id: 29,
        username: 'jissetts',
      },
    },
    {
      id: 234,
      body: 'That innocent look tho.',
      postId: 67,
      user: {
        id: 33,
        username: 'gsilcockw',
      },
    },
    {
      id: 235,
      body: 'It seems your Demand will probably increase in the future, lmao.',
      postId: 44,
      user: {
        id: 37,
        username: 'nwytchard10',
      },
    },
    {
      id: 236,
      body: 'You spunky.',
      postId: 28,
      user: {
        id: 2,
        username: 'hbingley1',
      },
    },
    {
      id: 237,
      body: 'Precious diamond.',
      postId: 75,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 238,
      body: 'I respect you.',
      postId: 64,
      user: {
        id: 99,
        username: 'flesslie2q',
      },
    },
    {
      id: 239,
      body: 'Keep smiling.',
      postId: 58,
      user: {
        id: 66,
        username: 'hfasey1t',
      },
    },
    {
      id: 240,
      body: 'Where did you get that charm from?',
      postId: 51,
      user: {
        id: 49,
        username: 'ssarjant1c',
      },
    },
    {
      id: 241,
      body: 'I’m sure your mother is the most beautiful lady in the world.',
      postId: 50,
      user: {
        id: 45,
        username: 'pidill18',
      },
    },
    {
      id: 242,
      body: 'I’ve heard about seven wonders of the world and the 8th just showed up!!',
      postId: 47,
      user: {
        id: 7,
        username: 'dpettegre6',
      },
    },
    {
      id: 243,
      body: 'You are wonderful.',
      postId: 60,
      user: {
        id: 81,
        username: 'capplewhite28',
      },
    },
    {
      id: 244,
      body: 'You are mind-blowing.',
      postId: 57,
      user: {
        id: 92,
        username: 'clambol2j',
      },
    },
    {
      id: 245,
      body: 'Cool.',
      postId: 43,
      user: {
        id: 60,
        username: 'dlambarth1n',
      },
    },
    {
      id: 246,
      body: 'You are Fantabulous.',
      postId: 97,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 247,
      body: 'This pic is just Fantastic.',
      postId: 94,
      user: {
        id: 18,
        username: 'sberminghamh',
      },
    },
    {
      id: 248,
      body: 'Supercalifragilisticexpialidocious.',
      postId: 35,
      user: {
        id: 64,
        username: 'gfernandes1r',
      },
    },
    {
      id: 249,
      body: 'Incredibly attractive.',
      postId: 96,
      user: {
        id: 41,
        username: 'cslateford14',
      },
    },
    {
      id: 250,
      body: 'Aren’t you awesome?',
      postId: 13,
      user: {
        id: 94,
        username: 'jtossell2l',
      },
    },
    {
      id: 251,
      body: 'Your magnificence is irresistible.',
      postId: 85,
      user: {
        id: 40,
        username: 'lgutridge13',
      },
    },
    {
      id: 252,
      body: 'Such a charming post.',
      postId: 21,
      user: {
        id: 74,
        username: 'ahinckes21',
      },
    },
    {
      id: 253,
      body: 'Elegant pic.',
      postId: 37,
      user: {
        id: 56,
        username: 'oyakushkev1j',
      },
    },
    {
      id: 254,
      body: 'My words are less to portray this picture.',
      postId: 23,
      user: {
        id: 91,
        username: 'hyaknov2i',
      },
    },
    {
      id: 255,
      body: 'Beauty lies inside for those who choose to see.',
      postId: 85,
      user: {
        id: 56,
        username: 'oyakushkev1j',
      },
    },
    {
      id: 256,
      body: 'The control of excellence lies inside the soul.',
      postId: 58,
      user: {
        id: 60,
        username: 'dlambarth1n',
      },
    },
    {
      id: 257,
      body: 'This picture is worth a million words.',
      postId: 13,
      user: {
        id: 76,
        username: 'cgaber23',
      },
    },
    {
      id: 258,
      body: 'Beauty is control; a grin is its sword.',
      postId: 52,
      user: {
        id: 27,
        username: 'fokillq',
      },
    },
    {
      id: 259,
      body: 'This looks exotic.',
      postId: 9,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 260,
      body: 'I cherish how dynamic colors are within the picture.',
      postId: 30,
      user: {
        id: 68,
        username: 'rstrettle1v',
      },
    },
    {
      id: 261,
      body: 'Such a beautiful picture looks great.',
      postId: 36,
      user: {
        id: 63,
        username: 'eburras1q',
      },
    },
    {
      id: 262,
      body: 'Impressive picture.',
      postId: 38,
      user: {
        id: 14,
        username: 'mturleyd',
      },
    },
    {
      id: 263,
      body: 'Your grin makes me Happy.',
      postId: 84,
      user: {
        id: 86,
        username: 'whuman2d',
      },
    },
    {
      id: 264,
      body: 'Looking Flawless and this picture made my day.',
      postId: 47,
      user: {
        id: 23,
        username: 'beykelhofm',
      },
    },
    {
      id: 265,
      body: 'Your elegance is indescribable.',
      postId: 56,
      user: {
        id: 67,
        username: 'gbarhams1u',
      },
    },
    {
      id: 266,
      body: 'Just divinely gorgeous.',
      postId: 89,
      user: {
        id: 13,
        username: 'lgribbinc',
      },
    },
    {
      id: 267,
      body: 'You’re an exceptionally wondrous and marvelous girl.',
      postId: 100,
      user: {
        id: 74,
        username: 'ahinckes21',
      },
    },
    {
      id: 268,
      body: 'Your looks make me insane.',
      postId: 25,
      user: {
        id: 56,
        username: 'oyakushkev1j',
      },
    },
    {
      id: 269,
      body: 'What a plenitude of magnificence.',
      postId: 17,
      user: {
        id: 91,
        username: 'hyaknov2i',
      },
    },
    {
      id: 270,
      body: 'Grasp the wonderful mess that you simply are.',
      postId: 32,
      user: {
        id: 81,
        username: 'capplewhite28',
      },
    },
    {
      id: 271,
      body: 'Incredible characteristic excellence with parts of huge charm and astounding gorgeousness.',
      postId: 13,
      user: {
        id: 61,
        username: 'cepgrave1o',
      },
    },
    {
      id: 272,
      body: 'The exemplification of beauty.',
      postId: 39,
      user: {
        id: 20,
        username: 'aeatockj',
      },
    },
    {
      id: 273,
      body: 'Natural beauty with a brilliant heart.',
      postId: 96,
      user: {
        id: 60,
        username: 'dlambarth1n',
      },
    },
    {
      id: 274,
      body: 'Lovely and more than rich!',
      postId: 30,
      user: {
        id: 47,
        username: 'rlangston1a',
      },
    },
    {
      id: 275,
      body: 'Mesmerizing Treasury house of beauty.',
      postId: 23,
      user: {
        id: 39,
        username: 'lgherardi12',
      },
    },
    {
      id: 276,
      body: 'That’s the icon to revere if you’re sitting out of gear.',
      postId: 53,
      user: {
        id: 96,
        username: 'bgoby2n',
      },
    },
    {
      id: 277,
      body: 'How can somebody be this beautiful.',
      postId: 85,
      user: {
        id: 30,
        username: 'kdulyt',
      },
    },
    {
      id: 278,
      body: 'Dazzling and impressive queen!',
      postId: 75,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 279,
      body: 'We all are favored to see your magnificence.',
      postId: 7,
      user: {
        id: 3,
        username: 'rshawe2',
      },
    },
    {
      id: 280,
      body: 'You have got such an excellent smile.',
      postId: 87,
      user: {
        id: 13,
        username: 'lgribbinc',
      },
    },
    {
      id: 281,
      body: 'Your smile is fair enchanted and magnificent.',
      postId: 29,
      user: {
        id: 44,
        username: 'rlaxe17',
      },
    },
    {
      id: 282,
      body: 'Like a sparkling emerald you are rare and devine.',
      postId: 67,
      user: {
        id: 41,
        username: 'cslateford14',
      },
    },
    {
      id: 283,
      body: 'You’ve got so charming and lovely grin that indeed God gives you each chance to smile.',
      postId: 23,
      user: {
        id: 6,
        username: 'jtreleven5',
      },
    },
    {
      id: 284,
      body: 'Keep grinning continuously expensive, you see so charming and lovely after you smile.',
      postId: 24,
      user: {
        id: 32,
        username: 'lskeelv',
      },
    },
    {
      id: 285,
      body: 'What a Captivating capture!',
      postId: 48,
      user: {
        id: 28,
        username: 'xisherwoodr',
      },
    },
    {
      id: 286,
      body: 'Such a super magnificent capture this one is.',
      postId: 91,
      user: {
        id: 2,
        username: 'hbingley1',
      },
    },
    {
      id: 287,
      body: 'Such a charming capture.',
      postId: 58,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 288,
      body: 'Btw for me you continuously were astounding; always are amazing and continuously gonna be astounding too.',
      postId: 80,
      user: {
        id: 22,
        username: 'froachel',
      },
    },
    {
      id: 289,
      body: 'Well I think this is often my favorite posture of yours.',
      postId: 25,
      user: {
        id: 47,
        username: 'rlangston1a',
      },
    },
    {
      id: 290,
      body: 'The meaning of excellence lies in you.',
      postId: 35,
      user: {
        id: 66,
        username: 'hfasey1t',
      },
    },
    {
      id: 291,
      body: 'You are the light in the darkness.',
      postId: 16,
      user: {
        id: 68,
        username: 'rstrettle1v',
      },
    },
    {
      id: 292,
      body: 'No one should be permitted to look that good, ok?',
      postId: 43,
      user: {
        id: 5,
        username: 'kmeus4',
      },
    },
    {
      id: 293,
      body: 'You’re so charming, I can’t deal.',
      postId: 38,
      user: {
        id: 7,
        username: 'dpettegre6',
      },
    },
    {
      id: 294,
      body: 'Hello, you seem truly charming in this as always.',
      postId: 8,
      user: {
        id: 28,
        username: 'xisherwoodr',
      },
    },
    {
      id: 295,
      body: 'That grin is priceless.',
      postId: 28,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 296,
      body: 'You shake my world.',
      postId: 66,
      user: {
        id: 81,
        username: 'capplewhite28',
      },
    },
    {
      id: 297,
      body: 'You are my world.',
      postId: 47,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 298,
      body: 'You know you’re pretty… lovely, amazing & extremely wonderful.',
      postId: 36,
      user: {
        id: 19,
        username: 'bleveragei',
      },
    },
    {
      id: 299,
      body: 'My heart skips a beat each time I think of you. Or perhaps it’s more of a somersault.',
      postId: 80,
      user: {
        id: 38,
        username: 'igannan11',
      },
    },
    {
      id: 300,
      body: 'For a few reasons each cherish tune makes me think of you….',
      postId: 84,
      user: {
        id: 52,
        username: 'gmein1f',
      },
    },
    {
      id: 301,
      body: 'God made the world in six days, rested on the seventh, but it took him thousands of a long time to create somebody as flawless as you.',
      postId: 32,
      user: {
        id: 60,
        username: 'dlambarth1n',
      },
    },
    {
      id: 302,
      body: 'I figure your guardians are bakers because they made you such a cutie pie!',
      postId: 76,
      user: {
        id: 82,
        username: 'kogilvy29',
      },
    },
    {
      id: 303,
      body: 'You looked so excellent the final time I saw you, that I overlooked what I was attending to say.',
      postId: 28,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 304,
      body: 'I can’t raise the boldness to tell you how much I worship you, so I guess I’ll just keep it to myself.',
      postId: 22,
      user: {
        id: 100,
        username: 'pcumbes2r',
      },
    },
    {
      id: 305,
      body: 'I’m so bored at work, come and rescue me.',
      postId: 75,
      user: {
        id: 9,
        username: 'nloiterton8',
      },
    },
    {
      id: 306,
      body: 'You looked incredible nowadays. I know I didn’t see you, but I know you look beautiful every day.',
      postId: 46,
      user: {
        id: 51,
        username: 'tmullender1e',
      },
    },
    {
      id: 307,
      body: 'Send me a photo, so that I can give my wish list to Santa.',
      postId: 58,
      user: {
        id: 57,
        username: 'bpickering1k',
      },
    },
    {
      id: 308,
      body: 'The sunflowers would have gone into the garbage if Van Gogh had you as a subject.',
      postId: 21,
      user: {
        id: 64,
        username: 'gfernandes1r',
      },
    },
    {
      id: 309,
      body: 'You can’t be replaced.',
      postId: 24,
      user: {
        id: 95,
        username: 'cchomiszewski2m',
      },
    },
    {
      id: 310,
      body: 'This picture looks stunning, where did you get it from?',
      postId: 63,
      user: {
        id: 42,
        username: 'mhaslegrave15',
      },
    },
    {
      id: 311,
      body: 'Hey, I’m only preparing for my future and I would like to ask you: are you free for the rest of your life?',
      postId: 28,
      user: {
        id: 38,
        username: 'igannan11',
      },
    },
    {
      id: 312,
      body: 'In this life, the one thing I can’t avoid is you.',
      postId: 100,
      user: {
        id: 27,
        username: 'fokillq',
      },
    },
    {
      id: 313,
      body: 'None of the comments can justify the cuteness.',
      postId: 4,
      user: {
        id: 4,
        username: 'yraigatt3',
      },
    },
    {
      id: 314,
      body: 'Each time I see you, I get light from your eyes.',
      postId: 74,
      user: {
        id: 72,
        username: 'mcrumpe1z',
      },
    },
    {
      id: 315,
      body: 'Here’s to hope your day consists of bright traffic lights, the supermarket’s quickest queue, and all the best ways to get you right back in my embrace.',
      postId: 76,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 316,
      body: 'Your goodness is the most attractive feature, it makes me a better human.',
      postId: 26,
      user: {
        id: 53,
        username: 'gmaccumeskey1g',
      },
    },
    {
      id: 317,
      body: 'How can you look so amazing every day? I am speechless when I look at you.',
      postId: 69,
      user: {
        id: 99,
        username: 'flesslie2q',
      },
    },
    {
      id: 318,
      body: 'You’re in my mind regularly, and you’ve certainly taken a place in my heart.',
      postId: 16,
      user: {
        id: 62,
        username: 'mpoyner1p',
      },
    },
    {
      id: 319,
      body: 'Can you post your pictures regularly? because I want my feed to look bright and beautiful every day.',
      postId: 65,
      user: {
        id: 29,
        username: 'jissetts',
      },
    },
    {
      id: 320,
      body: 'Looks great, is this actually a lockdown picture?',
      postId: 75,
      user: {
        id: 17,
        username: 'vcholdcroftg',
      },
    },
    {
      id: 321,
      body: 'You’re really getting good at these trending Instagram challenges, I must say.',
      postId: 9,
      user: {
        id: 85,
        username: 'kpondjones2c',
      },
    },
    {
      id: 322,
      body: 'Once the pandemic ends, this is what I am going to try.',
      postId: 35,
      user: {
        id: 94,
        username: 'jtossell2l',
      },
    },
    {
      id: 323,
      body: 'I should definitely try the backdrop in your picture, girl!',
      postId: 35,
      user: {
        id: 100,
        username: 'pcumbes2r',
      },
    },
    {
      id: 324,
      body: 'Well, whatever. Just the most beautiful girl in the world loves me.',
      postId: 77,
      user: {
        id: 28,
        username: 'xisherwoodr',
      },
    },
    {
      id: 325,
      body: 'You should have posted this much earlier when I asked you to.',
      postId: 31,
      user: {
        id: 75,
        username: 'ptilson22',
      },
    },
    {
      id: 326,
      body: 'I cannot believe how I found you, this is so pretty.',
      postId: 5,
      user: {
        id: 90,
        username: 'omottley2h',
      },
    },
    {
      id: 327,
      body: 'That’s what I said.',
      postId: 65,
      user: {
        id: 3,
        username: 'rshawe2',
      },
    },
    {
      id: 328,
      body: 'Even Beyonce would think this is prettier.',
      postId: 6,
      user: {
        id: 30,
        username: 'kdulyt',
      },
    },
    {
      id: 329,
      body: 'This post is truly classy.',
      postId: 94,
      user: {
        id: 16,
        username: 'dpierrof',
      },
    },
    {
      id: 330,
      body: 'I have got to save this.',
      postId: 26,
      user: {
        id: 54,
        username: 'bpetts1h',
      },
    },
    {
      id: 331,
      body: 'Irresistible!',
      postId: 10,
      user: {
        id: 73,
        username: 'wfeldon20',
      },
    },
    {
      id: 332,
      body: 'Stop showing off, everyone knows you are extremely beautiful.',
      postId: 62,
      user: {
        id: 78,
        username: 'dbuist25',
      },
    },
    {
      id: 333,
      body: 'I’m so lucky to have you in my life.',
      postId: 66,
      user: {
        id: 55,
        username: 'ajozef1i',
      },
    },
    {
      id: 334,
      body: 'No matter where I go, I cannot find someone beautiful like you.',
      postId: 85,
      user: {
        id: 75,
        username: 'ptilson22',
      },
    },
    {
      id: 335,
      body: 'Behind those beautiful eyes lies a beautiful story.',
      postId: 17,
      user: {
        id: 99,
        username: 'flesslie2q',
      },
    },
    {
      id: 336,
      body: 'I checked the clouds during midnight, and wondered where has the moon gone? Well, the best one is here on Instagram.',
      postId: 73,
      user: {
        id: 91,
        username: 'hyaknov2i',
      },
    },
    {
      id: 337,
      body: 'This is such an Insta beauty, why waste it by commenting words.',
      postId: 79,
      user: {
        id: 77,
        username: 'rkingswood24',
      },
    },
    {
      id: 338,
      body: 'Have we met before? If not – would you like to go out?',
      postId: 91,
      user: {
        id: 31,
        username: 'smargiottau',
      },
    },
    {
      id: 339,
      body: 'With great pictures, comes great responsibility.',
      postId: 4,
      user: {
        id: 89,
        username: 'cdwyr2g',
      },
    },
    {
      id: 340,
      body: 'I could say this is one of the greatest pic of yours, but I’ll have to repeat my comment on your next insta post.',
      postId: 71,
      user: {
        id: 86,
        username: 'whuman2d',
      },
    },
  ].filter(comment => comment.postId === postId);
}

export async function getPosts() {
  // try {
  //   const res = await fetch(posts);

  //   if (!res.ok) {
  //     throw new Error(`HTTP error! status: ${res.status}`);
  //   }

  //   const data = await res.json();

  //   return data.posts;

  // } catch (error) {
  //   console.error(`There was a problem fetching the data: ${error.message}`);
  //   return [];
  // }

  return [
    {
      id: 1,
      title: 'His mother had always taught him',
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: ['history', 'american', 'crime'],
      reactions: 2,
    },
    {
      id: 2,
      title: 'He was an expert but not in a discipline',
      body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
      userId: 13,
      tags: ['french', 'fiction', 'english'],
      reactions: 2,
    },
    {
      id: 3,
      title: 'Dave watched as the forest burned up on the hill.',
      body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      userId: 32,
      tags: ['magical', 'history', 'french'],
      reactions: 5,
    },
    {
      id: 4,
      title: 'All he wanted was a candy bar.',
      body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
      userId: 12,
      tags: ['mystery', 'english', 'american'],
      reactions: 1,
    },
    {
      id: 5,
      title: 'Hopes and dreams were dashed that day.',
      body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      userId: 41,
      tags: ['crime', 'mystery', 'love'],
      reactions: 2,
    },
    {
      id: 6,
      title: "Dave wasn't exactly sure how he had ended up",
      body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      userId: 47,
      tags: ['english', 'classic', 'american'],
      reactions: 3,
    },
    {
      id: 7,
      title: 'This is important to remember.',
      body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
      userId: 12,
      tags: ['magical', 'crime'],
      reactions: 0,
    },
    {
      id: 8,
      title: 'One can cook on and with an open fire.',
      body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
      userId: 31,
      tags: ['american', 'english'],
      reactions: 9,
    },
    {
      id: 9,
      title: 'There are different types of secrets.',
      body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
      userId: 42,
      tags: ['american', 'history', 'magical'],
      reactions: 2,
    },
    {
      id: 10,
      title: 'They rushed out the door.',
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: 1,
      tags: ['fiction', 'magical', 'history'],
      reactions: 4,
    },
    {
      id: 11,
      title: "It wasn't quite yet time to panic.",
      body: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
      userId: 25,
      tags: ['mystery', 'american', 'history'],
      reactions: 5,
    },
    {
      id: 12,
      title: 'She was aware that things could go wrong.',
      body: 'She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.',
      userId: 26,
      tags: ['love', 'english'],
      reactions: 7,
    },
    {
      id: 13,
      title: 'She wanted rainbow hair.',
      body: "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
      userId: 44,
      tags: ['mystery', 'classic', 'french'],
      reactions: 0,
    },
    {
      id: 14,
      title: 'The paper was blank.',
      body: "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
      userId: 1,
      tags: ['mystery', 'english', 'love'],
      reactions: 0,
    },
    {
      id: 15,
      title: 'The trees, therefore, must be such old',
      body: "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",
      userId: 15,
      tags: ['fiction', 'history', 'crime'],
      reactions: 1,
    },
    {
      id: 16,
      title: 'There was only one way to do things in the Statton house.',
      body: 'There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.',
      userId: 31,
      tags: ['magical', 'french', 'american'],
      reactions: 5,
    },
    {
      id: 17,
      title: 'She was in a hurry.',
      body: "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.",
      userId: 5,
      tags: ['french', 'magical', 'english'],
      reactions: 0,
    },
    {
      id: 18,
      title: 'She had a terrible habit o comparing her life to others',
      body: "She had a terrible habit o comparing her life to others. She realized that their life experiences were completely different than her own and that she saw only what they wanted her to see, but that didn't matter. She still compared herself and yearned for what she thought they had and she didn't.",
      userId: 28,
      tags: ['history', 'french', 'love'],
      reactions: 3,
    },
    {
      id: 19,
      title: 'The rain and wind abruptly stopped.',
      body: "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.",
      userId: 46,
      tags: ['fiction', 'crime', 'magical'],
      reactions: 8,
    },
    {
      id: 20,
      title: "He couldn't remember exactly where he had read it",
      body: "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
      userId: 38,
      tags: ['french', 'classic'],
      reactions: 9,
    },
    {
      id: 21,
      title: 'He wandered down the stairs and into the basement',
      body: 'He wandered down the stairs and into the basement. The damp, musty smell of unuse hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years. He was positive that this was the place he wanted to live.',
      userId: 37,
      tags: ['french', 'american'],
      reactions: 8,
    },
    {
      id: 22,
      title: 'She has seen this scene before.',
      body: "She has seen this scene before. It had come to her in dreams many times before. She had to pinch herself to make sure it wasn't a dream again. As her fingers squeezed against her arm, she felt the pain. It was this pain that immediately woke her up.",
      userId: 30,
      tags: ['classic', 'love', 'history'],
      reactions: 6,
    },
    {
      id: 23,
      title:
        "It's an unfortunate reality that we don't teach people how to make money",
      body: "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",
      userId: 2,
      tags: ['crime', 'english'],
      reactions: 4,
    },
    {
      id: 24,
      title: 'The robot clicked disapprovingly.',
      body: 'The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard\'s grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.',
      userId: 34,
      tags: ['crime', 'american', 'love'],
      reactions: 2,
    },
    {
      id: 25,
      title: 'It went through such rapid contortions',
      body: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      userId: 27,
      tags: ['fiction', 'history', 'french'],
      reactions: 3,
    },
    {
      id: 26,
      title: 'She patiently waited for his number to be called.',
      body: "She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.",
      userId: 27,
      tags: ['french', 'mystery', 'crime'],
      reactions: 7,
    },
    {
      id: 27,
      title: 'Ten more steps.',
      body: "If he could take ten more steps it would be over, but his legs wouldn't move. He tried to will them to work, but they wouldn't listen to his brain. Ten more steps and it would be over but it didn't appear he would be able to do it.",
      userId: 17,
      tags: ['mystery', 'classic', 'love'],
      reactions: 4,
    },
    {
      id: 28,
      title: 'He had three simple rules by which he lived.',
      body: 'He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life.',
      userId: 22,
      tags: ['crime', 'love'],
      reactions: 2,
    },
    {
      id: 29,
      title: 'The chair sat in the corner where it had been',
      body: 'The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.',
      userId: 38,
      tags: ['mystery', 'american'],
      reactions: 6,
    },
    {
      id: 30,
      title: "Things aren't going well at all",
      body: "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.",
      userId: 2,
      tags: ['american', 'love', 'fiction'],
      reactions: 0,
    },
  ];
}
