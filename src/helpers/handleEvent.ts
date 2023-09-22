import type { EventHandler, SyntheticEvent } from "react";

export const handleEvent =
  <E extends Event = Event, T = Element>(
    handlers: EventHandler<SyntheticEvent<T, E>>[],
  ) =>
  (event: SyntheticEvent<T, E>) => {
    for (const handler of handlers) {
      handler(event);
    }
  };
