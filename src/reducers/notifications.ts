import { Action, MARK_ALL_READ } from '../actions/notifications';
// import notes from "../notes";

export type Notification = {
  id: number;
  text: string;
  navigation?: string;
};

const notes: Notification[] = [];

export type NotificationState = {
  lastRead: number;
  numberOfUnread: number;
};

const initialState = {
  lastRead: -1,
  numberOfUnread: 0,
};

export default function onAction(
  state: NotificationState = initialState,
  action: Action
) {
  // console.log(action);
  switch (action.type) {
    case MARK_ALL_READ: {
      // const sorted = notes.sort((a, b) => {
      //   if (a.id > b.id) {
      //     return -1;
      //   }
      //   if (a.id < b.id) {
      //     return 1;
      //   }
      //   return 0;
      // });

      return {
        lastRead: 36,
        numberOfUnread: 0,
      };
    }

    //@ts-ignore
    case 'REDUX_STORAGE_LOAD': {
      let numberOfUnread = 0;
      notes.forEach((note) => {
        if (note.id > state.lastRead) {
          numberOfUnread += 1;
        }
      });
      return {
        ...state,
        numberOfUnread,
      };
    }

    default:
  }
  return state;
}
