import { createContext } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "change_current_page":
      return {
        ...state,
        currentPage: action.payload
      }

    case "add_user": {
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username
        }
      }
    }

    case "add_photos": {
      return {
        ...state,
        user: {
          ...state.user,
          photos: [...action.payload]
        }
      }
    }
  
    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
  user: {
    username: "",
    photos: []
  }
}

const InstaContext = createContext(initialState)

export {
  InstaContext,
  initialState,
  reducer
}