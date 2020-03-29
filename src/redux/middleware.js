import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbidden = [
  'Fuck',
  'Bitch',
  'Trash',
  'Brexit',
  'Fetish',
  'Ass',
  'Goddamn',
  'monkaS',
  'Thot',
  'Retard',
  'Suicide',
  'Terrorist',
  'ISIS',
  'FeelsBirthdayMan',
  'FeelsBadMan',
  'Hitler',
  'Thicc',
  'Kill',
  'Oral',
  'Boobs',
  'Jew',
  'Jewish',
  'Gypsy',
  'Cuck',
  'rapist',
  'rape',
  'raper',
  'rapes',
  'raping',
  'anal',
  'bbw',
  'sexy',
  'virgin',
  'Jeb',
  'Penis',
  'Balls',
  'Cum',
  'Bollocks',
  'Cunt',
  'Faggot',
  'Cumming',
  'Cums',
  'Cucking',
  'Cucked',
  'Fisting',
  'Fisted',
  'Cock',
  'Meth'
];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => {
          const title = action.payload.title.toLowerCase();
          return title.includes(word.toLowerCase());
        });
        console.log('found:', found);
        if (found.length) {
          return dispatch(
            showAlert(
              'This word are noe allowed in this app. Post will not be created! '
            )
          );
        }
      }
      return next(action);
    };
  };
}
