import { Editor } from "../editor";
import { EventType } from "./contant";

export class Event {
  private editor: Editor;
  private eventMap = new Map<EventType, ((data: any) => void)[]>([[EventType.BEFORE_INPUT, []]]);

  constructor(editor: Editor) {
    this.editor = editor;
    this.register();
  }

  public on = (event: EventType, callback: (data: any) => void) => {
    const callbacks = this.eventMap.get(event) || [];
    callbacks.push(callback);
    this.eventMap.set(event, callbacks);

    return () => this.off(event, callback);
  };

  public emit = (event: EventType, data?: any) => {
    const callbacks = this.eventMap.get(event) || [];
    callbacks.forEach((callback) => callback(data));
  };

  public off = (event: EventType, callback: (data: any) => void) => {
    const callbacks = this.eventMap.get(event) || [];
    this.eventMap.set(
      event,
      callbacks.filter((cb) => cb !== callback)
    );
  };

  // 初始化事件
  private register = () => {
    let handle: () => void = () => {};
    this.on(EventType.EDITOR_MOUNTED, () => {
      handle = () => {
        this.emit(EventType.SELECTION_CHANGE_NATIVE);
      };
      document.addEventListener("selectionchange", handle);
    });

    this.on(EventType.EDITOR_DESTROYED, () => {
      document.removeEventListener("selectionchange", handle);

      this.eventMap = new Map<EventType, ((data: any) => void)[]>();
    });
  };
}
