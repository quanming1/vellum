import { Editor } from "../editor";
import { EventType } from "./contant";

export class Event {
  private editor: Editor;
  private eventMap = new Map<EventType, ((data: any) => void)[]>([[EventType.BEFORE_INPUT, []]]);

  constructor(editor: Editor) {
    this.editor = editor;
  }

  on = (event: EventType, callback: (data: any) => void) => {
    const callbacks = this.eventMap.get(event) || [];
    callbacks.push(callback);
    this.eventMap.set(event, callbacks);
  };

  emit = (event: EventType, data?: any) => {
    const callbacks = this.eventMap.get(event) || [];
    callbacks.forEach((callback) => callback(data));
  };
}
