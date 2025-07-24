import { Event } from "../Event";
import { EventType } from "../Event/contant";
import { State } from "../State";

export class Editor {
  public event: Event;
  public container?: HTMLElement;
  public state: State;

  constructor(options: { container?: HTMLElement }) {
    this.event = new Event(this);
    this.state = new State(this);

    if (options.container) {
      this.mount(options.container);
    }
  }

  public mount = (container: HTMLElement) => {
    if (this.state.editorStatus.stage !== "init") {
      throw new Error("编辑器挂载失败，错误的状态：" + this.state.editorStatus.stage);
    }
    this.container = container;
    this.state.editorStatus.stage = "mounted";
    this.event.emit(EventType.EDITOR_MOUNTED, container);
  };

  public destroy = () => {
    this.state.editorStatus.stage = "destroyed";
    this.event.emit(EventType.EDITOR_DESTROYED);
  };
}
