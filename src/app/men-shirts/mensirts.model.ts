import { ShirtCategories } from '../shared/shirtcategories.model';

export class MenShirts {
  public name: string;
  public description: string;
  public imagePath: string;
  public shirtcategories: ShirtCategories[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    shirtcategories: ShirtCategories[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.shirtcategories = shirtcategories;
  }
}
