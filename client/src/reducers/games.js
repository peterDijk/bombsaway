import {ADD_GAME, UPDATE_GAME, UPDATE_GAMES, KEY_PRESSED, HAS_FIRED, SWITCH_FIRED, HAS_HIT} from '../actions/games'
import {USER_LOGOUT} from '../actions/users'

/*
The state will contain the games in an object with the game ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null
    
    case ADD_GAME:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_GAME:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_GAMES:
      return payload.reduce((games, game) => {
        games[game.id] = game
        return games
      }, {})
    
    case KEY_PRESSED:
      return {
        ...state,
        [payload.id]: 
          {...state[payload.id], 
            layerId: payload.layerId,
            keyPressed: payload.keyPressed, 
            keyReleased: payload.keyReleased
          }
      }

      case HAS_FIRED:
      return {
        ...state,
        [payload.id]: 
          {...state[payload.id], 
            degrees: payload.degrees,
            force: payload.force,
            hasFired: payload.hasFired
          }
      }

      case SWITCH_FIRED:
      return {
        ...state,
        [payload.gameId]: 
          {...state[payload.gameId], 
            hasFired: false,
          }
      }

      case HAS_HIT:
      //const newSettings = {...state[payload.gameId].settings}
      //newSetanksttings.tanks = payload.
        return {
          ...state,
          [payload.gameId]: 
            {...state[payload.gameId], 
              turn: payload.turn,
              settings: payload.settings,
              status: payload.gameStatus,
              winner: payload.winner
            }
        }

    default:
      return state
  }
}
