import React from 'react'
import * as ACTIONS from "../actions/actions";

export const initialState = {
  stateprop1: false,
}

export const Reducer1 = (state = initialState, action) => {
  switch(action.type) {
    case "SUCCESS":
      return {
        ...state,
        stateprop1: true,
      }
    case "FAILURE":
      return {
        ...state,
        stateprop1: false,
      }
    default:
      return state
  }
}