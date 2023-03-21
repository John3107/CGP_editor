import { v1 as uuidv1 } from "uuid";

const initialState = {
  cardData: [
    { id: uuidv1(), title: "Headline", icon: "headline" },
    { id: uuidv1(), title: "Paragraph", icon: "paragraph" },
    { id: uuidv1(), title: "Button", icon: "image" },
    { id: uuidv1(), title: "Image", icon: "image" },
  ],
  activeCards: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PICK-CARD": {
      return {
        ...state,
        activeCards: state.activeCards.map((el) =>
          el.id === action.cardId
            ? {
                ...el,
                isActive: true,
              }
            : {
                ...el,
                isActive: false,
              }
        ),
      };
    }
    case "ADD-CARD": {
      state.activeCards = state.activeCards.map((el) => ({
        ...el,
        isActive: false,
      }));
      action.card.id = uuidv1();
      action.card.isActive = true;

      return {
        ...state,
        activeCards: [...state.activeCards, action.card],
      };
    }
    case "REMOVE-CARD": {
      return {
        ...state,
        activeCards: state.activeCards.filter((el) => el.id !== action.cardId),
      };
    }
    case "REPLACE-CARD-POSITION": {
      const cardIndex = state.activeCards.indexOf(action.card);
      let firstArrPart;
      let secondArrPart;
      let thirdArrPart;
      let resultArray = state.activeCards.map((el) => el);

      if (
        action.replaceAction === "down" &&
        cardIndex !== state.activeCards.length - 1
      ) {
        firstArrPart = state.activeCards.slice(0, cardIndex);
        secondArrPart = state.activeCards
          .slice(cardIndex, cardIndex + 2)
          .reverse();
        thirdArrPart = state.activeCards.slice(
          cardIndex + 2,
          state.activeCards.length
        );
        resultArray = firstArrPart.concat(secondArrPart.concat(thirdArrPart));
      }

      if (action.replaceAction === "up" && cardIndex !== 0) {
        firstArrPart = state.activeCards.slice(0, cardIndex - 1);
        secondArrPart = state.activeCards
          .slice(cardIndex - 1, cardIndex + 1)
          .reverse();
        thirdArrPart = state.activeCards.slice(
          cardIndex + 1,
          state.activeCards.length
        );
        resultArray = firstArrPart.concat(secondArrPart.concat(thirdArrPart));
      }

      return {
        ...state,
        activeCards: resultArray,
      };
    }
    case "RENAME-CARD": {
      return {
        ...state,
        activeCards: state.activeCards.map((el) =>
          el.id === action.cardId ? { ...el, title: action.newTitle } : el
        ),
      };
    }
    default:
      return state;
  }
};

export const pickCardAC = (cardId) => ({ type: "PICK-CARD", cardId });
export const addCardAC = (card) => ({ type: "ADD-CARD", card });
export const removeCardAC = (cardId) => ({ type: "REMOVE-CARD", cardId });
export const replaceCardPositionAC = (card, replaceAction) => ({
  type: "REPLACE-CARD-POSITION",
  card,
  replaceAction,
});
export const renameCardAC = (cardId, newTitle) => ({
  type: "RENAME-CARD",
  cardId,
  newTitle,
});
