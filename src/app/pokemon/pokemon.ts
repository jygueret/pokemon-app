export class Pokemon {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
  created: Date;

  constructor(
    id: number,
    name: string,
    hp: number,
    cp: number,
    picture: string,
    types: string[],
    created: Date
  ) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}