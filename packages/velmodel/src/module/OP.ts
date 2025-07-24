export interface OPAttrs {
  [key: string]: any;
}

export interface OP {
  insert?: string;
  delete?: number;
  retain?: number;
  attributes?: OPAttrs;
}

export enum OPEnum {
  insert = "insert",
  delete = "delete",
  retain = "retain",
}

export const EOL = "\n";
