import { Point } from "./Point";

export class ValRange {
  public start: Point;
  public end: Point;
  public isBackward: boolean;
  public isCollapsed: boolean;

  constructor(start: Point, end: Point, isBackward: boolean, isCollapsed: boolean) {
    this.start = start;
    this.end = end;
    this.isBackward = isBackward;
    this.isCollapsed = isCollapsed;
  }
}
