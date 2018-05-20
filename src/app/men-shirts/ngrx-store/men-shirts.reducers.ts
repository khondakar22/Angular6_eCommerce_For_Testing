import { MenShirts } from '../mensirts.model';
import { ShirtCategories } from '../../shared/shirtcategories.model';
import * as MenShirtsAction from './men-shirts.actions';
import * as fromApp from '../../ngrx-app-store/app.reducers';

export interface FeatureState extends fromApp.Appstate {
    menShirts: State;
}
export interface State {
   menShirts: MenShirts[];
  }

  const initalState: State = {
    menShirts: [
        new MenShirts(
          'Ralph Lauren',
          'An iconic and preppy staple for more than 45 years, Polo Ralph Lauren presents the short sleeved black polo shirt.',
          'https://s1.thcdn.com/productimg/600/600/11095822-3154417653528081.jpg',
          [new ShirtCategories('Black', 4), new ShirtCategories('Red', 7)]
        ),
        new MenShirts(
          'Custom-Slim-Fit Polo aus',
          'Das Polohemd von Ralph Lauren steht bereits seit 1972 für typisch amerikanischen Stil',
          'http://www.ralphlauren.de/graphics/product_images/pPOLO2-7770055_alternate1_v400.jpg',
          [new ShirtCategories('White', 10), new ShirtCategories('Blue', 8)]
        )
      ]
  };


export function menShirtsReducers(state = initalState, action: MenShirtsAction.MenShirtsAction) {
    switch (action.type) {
        case (MenShirtsAction.SET_MENSHIRTS):
        return {
            ...state,
            menShirts: [...action.payload]
        };
        case (MenShirtsAction.ADD_MENSHIRTS):
        return {
            ...state,
            menShirts: [...state.menShirts, action.payload]
        };
        case (MenShirtsAction.UPDATE_MENSHIRTS):
        const menShirt = state.menShirts[action.payload.index];
        const updatedMenshirt = {
            ...menShirt,
            ...action.payload.updatedMenShirts
        };
        const menShirts = [...state.menShirts];
        menShirts[action.payload.index] = updatedMenshirt;
        return {
            ...state,
            menShirts: menShirts
        };
        case (MenShirtsAction.DELETE_MENSHIRTS):
        const oldMenshirts = [...state.menShirts];
        oldMenshirts.splice(action.payload, 1);
        return {
            ...state,
            menShirts: oldMenshirts

        };
        default:
        return state;
    }
}
