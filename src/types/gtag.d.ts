interface GtagEvent {
  platform?: string;
  button_text?: string;
  [key: string]: string | number | boolean | undefined;
}

interface Window {
  gtag: (
    command: 'config' | 'event' | 'js',
    targetId: string | Date,
    config?: GtagEvent
  ) => void;
  dataLayer: unknown[];
}
