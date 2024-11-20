export class Pokemon {
  private id: number;
  private name: string;
  private hp: number;
  private cp: number;
  private picture: string;
  private types: string[];
  private created: Date;

  constructor($id: number, $name: string, $hp: number, $cp: number, $picture: string, $types: string[], $created: Date) {
    this.id = $id;
    this.name = $name;
    this.hp = $hp;
    this.cp = $cp;
    this.picture = $picture;
    this.types = $types;
    this.created = $created;
  }


  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $hp
   * @return {number}
   */
  public get $hp(): number {
    return this.hp;
  }

  /**
   * Getter $cp
   * @return {number}
   */
  public get $cp(): number {
    return this.cp;
  }

  /**
   * Getter $picture
   * @return {string}
   */
  public get $picture(): string {
    return this.picture;
  }

  /**
   * Getter $types
   * @return {string[]}
   */
  public get $types(): string[] {
    return this.types;
  }

  /**
   * Getter $created
   * @return {Date}
   */
  public get $created(): Date {
    return this.created;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $hp
   * @param {number} value
   */
  public set $hp(value: number) {
    this.hp = value;
  }

  /**
   * Setter $cp
   * @param {number} value
   */
  public set $cp(value: number) {
    this.cp = value;
  }

  /**
   * Setter $picture
   * @param {string} value
   */
  public set $picture(value: string) {
    this.picture = value;
  }

  /**
   * Setter $types
   * @param {string[]} value
   */
  public set $types(value: string[]) {
    this.types = value;
  }

  /**
   * Setter $created
   * @param {Date} value
   */
  public set $created(value: Date) {
    this.created = value;
  }

}